console.log('welcome'); 

// how to create a promise- pending, resolve, reject
const promise1 = new Promise((resolve, reject) => {

    let completed_promise = true; 
    if(completed_promise){
        resolve('completed promise 1');
    }else{
        reject('not completed promise 1'); 
    }
})

const promise2 = new Promise((resolve, reject) => {
    resolve("completed promise 2"); 
}); 




const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('completed promise 3')
    }, 2000)
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("completed promise 4"); 
    }, 1000) 
})

// console.log(promise1); 

promise1
.then((res) => {
    console.log(res); 
})
.catch((err) => {
    console.log(err); 
})

promise2 
.then((res) => {
    console.log(res); 
})


Promise.all([promise1, promise2]).then((res) => {
    console.log(res) 
})

Promise.all([promise1, promise2]).then(([res1, res2]) => {
    console.log(res2); 
})


// calling promise3 and promise4 
Promise.race([promise3, promise4]).then((res) => {
    console.log(res); 
})

console.log('end'); 