
// Synchronous
const task_one = () => {
    console.log('task1');
}

const task_two = () => {
    console.log('task2');
}

const task_three = () => {
    console.log('task3');
}

const task_four = () => {
    console.log('task4');
}

const task_five = () => {
    console.log('task5'); 
}


task_one(); 
task_two(); 
task_three(); 
task_four(); 
task_five(); 



// Asynchronous
const task_one_asy = () => {
    console.log('task1_sync');
}

const data_loading = () => {
    console.log('Task2_sync. data loading...'); 
}

const task_two_asy = () => {
    setTimeout(data_loading, 2000); 
}

const task_three_asy = () => {
    console.log('task3_sync');
}

const task_four_asy = () => {
    console.log('task4_sync');
}

const task_five_asy = () => {
    console.log('task5_sync'); 
}


task_one_asy(); 
task_two_asy(); 
task_three_asy(); 
task_four_asy(); 
task_five_asy(); 