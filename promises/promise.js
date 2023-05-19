// const promise1 = new Promise((resolve, reject) => {
//     resolve('Promise 1');
//     reject('rejeitou Promise 2');
// })

// promise1.then(result => result, reject => console.log('rejeitou Promise')).then(result => console.log(result + '2'));

const promise2 = new Promise((resolve, reject) => {
    resolve('Promise 1');
    reject('rejeitou Promise 2');
})

promise2
    .then(result => {
        console.log(result);
        return new Promise((resolve, reject) => {
            reject('rejeitou Promise 2');
        })
    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));