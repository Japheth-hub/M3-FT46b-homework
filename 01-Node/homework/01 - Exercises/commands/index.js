const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print) {
    print(process.cwd())
}

function date(print) {
    print(Date())
}

function echo(print, args) {
    print(args)
}

function ls(print) {
    fs.readdir(".", (error, files)=>{
        if(error) throw error("Tenemos este error : "+ error)
        print(files.join(" "))
    })
}

function cat(print, args) {
    fs.readFile(args, 'utf-8', (error, data)=>{
        if(error) throw new error("Tenemos este error : "+ error)
        print(data.toString())
    })
}

function head(print, args) {
    fs.readFile(args, 'utf-8', (error, data)=>{
        if(error) throw new error("Tenemos este error : "+ error)
        let linea = data.split('\n')
        print(linea[0])
    })
}

function tail(print, args) {
    fs.readFile(args, 'utf-8', (error, data)=>{
        if(error) throw new error("Tenemos este error : "+ error)
        let linea = data.split('\n')
        print(linea[linea.length -1].trim())
    })
}

function curl(print, args) {
    utils.request(`https://${args}`, (error, response)=>{
        if(error) throw new error("Tenemos este error : "+ error)
        print(response)
    })
}

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head,
    tail,
    curl
};
