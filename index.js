//jshint esversion:6

//require needed to use npm's
const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperheroes = superheroes.random();
var mySupervillains = supervillains.random();

console.log( mySuperheroes);
console.log( mySupervillains);