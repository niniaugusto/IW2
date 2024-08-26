// ./ vai pra raiz
//ta importando modulo q criamos
var SomarFunc = require("./modulos/somar")
var SubtrairFunc = require("./modulos/subtrair")
var MultiplicarFunc = require("./modulos/multiplicar")
var DividirFunc = require("./modulos/dividir")

console.log(SomarFunc(10,5))
console.log(SubtrairFunc(10,5))
console.log(MultiplicarFunc(10,5))
console.log(DividirFunc(10,5))