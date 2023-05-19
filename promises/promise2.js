//Promise.resolve() promise.reject();

const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve('Promise 2');

promise1.then(result => console.log(result));
promise2.then(result => console.log(result));

const promise3 = Promise.reject('Promise 3');
promise3.then(result => console.log(result)).catch(error => console.log(error));