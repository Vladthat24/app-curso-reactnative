/* function sinPromesas() {
    return Promise.resolve(1)
        .then(x => x + 1)
        .then(x => x + 1)
        .then(console.log)

}

sinPromesas() */

async function conPromesas() {

    const resultado = await Promise.resolve(1)
    console.log(resultado + 1 + 1)

}

conPromesas()

 