const levelOne = (a, b) => {
  return a + b;
};

const levelTwo = (letras) => {
  let boton = true
  let result = []
  for(let letra of letras){
    if(boton){
    result.push(letra) 
    }
    boton = !boton
  }
  return result.join("")
};

const levelThree = (a, b) => { 
  let array = [...a, ...b];
  array.sort()
  return array
};

const levelFour = (num) => { };

module.exports = { levelOne, levelTwo, levelThree, levelFour };
