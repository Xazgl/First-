let hello = 'Hello world!'
var hello2 = 'Hello world 2!'
const hello3 = 'Hello world 3!'

//while (true) {
//alert('Hello world!')
//} 

//console.log(hello)
//console.log(hello2)
//console.log(hello3)

//типы данных
.
/*let stringVar='Some string'//строка
console.log (typeof stringVar) //выводит тип данных (выше) в консоль 

let numberVar= 2134.3435//число
console.log (typeof numberVar)

let booleanVar= true //false //
console.log (typeof booleanVar)//выводит тип данных (выше) в консоль 

let underfinedVar //=undefined  //тип данных не объявлен можно много что в нее положить 
console.log (typeof underfinedVar )//выводит тип данных (выше) в консоль 

let nillVar= null // 
console.log (typeof nillVar)//выводит тип данных (выше) в консоль */

let objectVar= { 
key1:'Value 1',
key2:'Value 2'
} // создали объект 

console.log (typeof objectVar) //выводит тип данных (выше) в консоль 
console.log (objectVar.key1) //выводит ключ 1


function helloFunction(congrat) {    //функция в () передаются параметры
return congrat + ' from function'
}
console.log(helloFunction('Hello')) // строка Hello+выше
console.logе(typeof helloFunction)   // функция
console.logе(typeof helloFunction('Hello'))   // тут подает результат выполнения фунцкции, ее результат return подставляется 








let header = document.getElementById('.header')//считали эелемент по id и присвоили переменную,справа на лево//
header.textContent= "Привет" //меняем название, либо вставляем hello3 //
