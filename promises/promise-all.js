//promise.all:

const promise1 = new Promise((resolve, reject) => {
    resolve(10);
    reject(20);
})
const promise2 = Promise.resolve('Promise 2');

Promise.all([promise1, promise2]).then(
    result => console.log(result)
)