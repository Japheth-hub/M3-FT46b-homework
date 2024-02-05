// Promesa
let promesa = {
    satus: "Pending..."
}

// Definir resuleta
promesa = {
    status: "fulfilled",
    resolve: "sal"
}

// Definir rechasada
promise = {
    status: "rejected",
    reject: "motivo"
}

promesa.then(
    // cb => succesHandler
    (data)=>console.log(`Agregar ${data}`),

    // cb => catchError
    (motivo) => console.log(`No se agrego por : ${motivo}`)
)
