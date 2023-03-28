// callback and higher order function 


const task_one_asy = (callback) => {
    console.log('task1_sync');
    callback(); 
}

const data_loading = () => {
    console.log('Task2_sync. data loading...'); 
}

const task_two_asy = (callback) => {
    setTimeout(() => {
        console.log('Task2_sync. data loading...'); 
        callback(); 
    }, 3000); 
} 

const task_three_asy = (callback) => {
    console.log('task3_sync');
    callback();
}

const task_four_asy = (callback) => {
    console.log('task4_sync');
    callback(); 
}

const task_five_asy = () => {
    console.log('task5_sync'); 
}


// task_one_asy(function f1(){
//     task_two_asy(function f2(){
//         task_three_asy(function f3(){
//             task_four_asy(function f4(){
//                 task_five_asy(); 
//             });
//         }); 
//     }); 
// }); 

task_one_asy(() => {
    task_two_asy(() => {
        task_three_asy(() => {
            task_four_asy(() => {
                task_five_asy()
            })
        })
    })
})


document.querySelector('button').addEventListener('click', ()=>{
    console.log('button is clicked.'); 
})