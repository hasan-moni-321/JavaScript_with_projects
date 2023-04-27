import { Todo } from "./classes/todo.js";
 
// finding the elements 
const todoForm = document.querySelector('.todo-form') 
const todoInput = document.querySelector("#inputTodo")
const messageElement = document.getElementById("message");
const todoLists = document.getElementById("lists");


// showMessage function 
const showMessage = (text, status) => {
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${status}`);
    setTimeout(() => {
      messageElement.textContent = "";
      messageElement.classList.remove(`bg-${status}`);
    }, 1000);
  };

// deleteTodo function 
const deleteTodo = (event) => {
    // finding id
    const selectedTodo = event.target.parentElement.parentElement.parentElement;
    
    // remove child from todoLists 
    todoLists.removeChild(selectedTodo);
    showMessage("todo is deleted", "danger");

    // elements from local storage 
    let todos = getTodosFromLocalStorage();
    todos = todos.filter((todo) => todo.todoId !== selectedTodo.id); 
    localStorage.setItem("mytodos", JSON.stringify(todos));
}

// createTodo
const createTodo = (newTodo) => {
    // creating list element 
    const todoElement = document.createElement("li");

    // assign newTodo id into todoElement
    todoElement.id = newTodo.todoId;

    // adding style 
    todoElement.classList.add("li-style");

    // assign newTodo value into todoElement
    todoElement.innerHTML = `
      <span> ${newTodo.todoValue} </span>
      <span> <button class="btn" id="deleteButton"> <i class="fa fa-trash"> </i> </button> </span>
    `;

    // assign todoElement into todoLists
    todoLists.appendChild(todoElement);
    
    // deleting a todo
    const deleteButton = todoElement.querySelector("#deleteButton");
    deleteButton.addEventListener("click", deleteTodo);
  };

// getTodosFromLocalStorage function 
const getTodosFromLocalStorage = () => {
    return localStorage.getItem("mytodos")
      ? JSON.parse(localStorage.getItem("mytodos"))
      : [];
  };


// addTodo function 
const addTodo = (event) => {
    event.preventDefault();

    const todoValue = todoInput.value;

    // unique id
    const todoId = Date.now().toString();

    // new object for todoId and todoValue
    const newTodo = new Todo(todoId, todoValue); 

    // creating new todo
    createTodo(newTodo);
    showMessage("todo is added", "success");

    // add todo to localStorage
    const todos = getTodosFromLocalStorage();
    todos.push(newTodo);
    localStorage.setItem("mytodos", JSON.stringify(todos));

    todoInput.value = "";
}


// loadTodos function 
const loadTodos = () => {
    const todos = getTodosFromLocalStorage();
    todos.map((todo) => createTodo(todo));
  };
  

// adding listeners
todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", loadTodos);
