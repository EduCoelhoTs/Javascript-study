const verificaNumero = x => {
    if (typeof x !== 'number') {
        throw new Error('Não é um número');
    } else {
        console.log(x);
    }
}

try {
    verificaNumero('teste');
} catch (e) { 
    console.log(e.message);
}