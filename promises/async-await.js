//async - await

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(
            console.log('Promise 1')
    )
        }, 4000)
    
    reject('erro')
})

promise1.then((res) => {console.log(res)})