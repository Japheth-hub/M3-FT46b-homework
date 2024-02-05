'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

function $Promise(executor){
    
    if(typeof executor !== "function")throw new TypeError("El argumento 'executor' debe ser una function.")

    this._state = "pending";
    // this._value = "pending";

    this._internalResolve = function(data){
        this._state = this._state === "pending" ? "fulfilled" : this._state
        this._value = this._state === "pending" ? data : this._state
    }

    this._internalReject = function(reason){
        this._state = this._state === "pending" ? "rejected" : this._state
        this._value = this._state === "pending" ? reason : this._state
    }
    executor(this._internalResolve-bind(this), this._internalReject.bind(this))
}

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
