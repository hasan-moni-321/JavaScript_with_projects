console.log('welcome!')

const task_one_asy = () => {
    return new Promise((resolve, reject) => {
        resolve("task 1 is completed!"); 
    })
}

// const data_loading = () => {
//     console.log('Task2_sync. data loading...'); 
// }

const task_two_asy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task 2 is completed!");
        }, 2000)
    })
} 

const task_three_asy = () => {
    return new Promise((resolve, reject) => {
        resolve("task 3 is completed!"); 
    })
}

const task_four_asy = () => {
    return new Promise((resolve, reject) => {
        reject("task 4 is not completed!"); 
    })
}

const task_five_asy = () => {
    return new Promise((resolve, reject) => {
        resolve('task 5 is completed!'); 
    }) 
}


task_one_asy()
.then(res => {
    console.log(res); 
})

.then(task_two_asy)
.then(res => {
    console.log(res); 
})

.then(task_three_asy)
.then(res => {
    console.log(res); 
})

.then(task_four_asy)
.then(res => {
    console.log(res); 
})

.then(task_five_asy)
.then(res => {
    console.log(res); 
})

.catch((err) => {
    console.log(err); 
})



console.log('bye'); 