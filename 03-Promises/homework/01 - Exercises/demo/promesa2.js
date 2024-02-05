const fs = require("fs")

const myPromise = new Promise((resolve, reject)=>{
    fs.readFile("./data.txt", "utf-8", (error, data)=>{
        if(error) return reject(Error("Hay un error" + error))
        return resolve(data)
    })
})

myPromise.then(
// Resolve
    (data)=>{
        console.log(`Agregar ${data}`),
        console.log(myPromise)
    },
// Reject
    (motivo) => {
        console.log(`No se agrego por : ${motivo}`)
        console.log(myPromise)
    }
)