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

let objectVar = {
    key1: 'Value 1',
    key2: 'Value 2'
} // создали объект 

console.log(typeof objectVar) //выводит тип данных (выше) в консоль git  
console.log(objectVar.key1) //выводит ключ 1


function helloFunction(congrat) {    //функция в () передаются параметры
    return congrat + ' from function'
}
/*console.log(helloFunction('Hello')) // строка Hello+выше
console.logе(typeof helloFunction)   // функция
console.logе(typeof helloFunction('Hello'))   // тут подает результат выполнения фунцкции, ее результат return подставляется */

function helloUser(congrat, name) {
    return congrat + ',' + name
}
console.log(helloUser('Hello', 'John'))
console.log(helloUser('Hello', 'AL'))









let header = document.getElementById('.header')//считали эелемент по id и присвоили переменную,справа на лево//
/*header.textContent= "Привет" //меняем название, либо вставляем hello3 */





function testFunc(arg1, arg2, arg3) {
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
}

testFunc(1, 2)


/*testFunc2(1,2)

let testFunc2 =function(arg1, arg2,arg3) {
    console.log (arg1);
    console.log (arg2);
    console.log (arg3);
    return 'testFunc2'
}*/

/*testFuncname('Андрей', 'Сидоров')
function testFuncname(arg1, arg2) {

    return arg1 + ' ' + arg2
}
console.log(testFuncname('Андрей', 'Сидоров')); нужны скобки что разюить и сложить результат*/

/*
let num= 0 
let clickBtn=document.getElementById('click')
clickBtn.onclick = function() {
//num=(num+1) 
//num=(num +10) или num +=10
console.log('Click nums: '+num);
}*/



/*let userInput = document.getElementById('username')
let userInput2 = document.getElementById('username2')
let header2= document.getElementById('header2')
let clickBtn = document.getElementById('click')
clickBtn.onclick = function () {
    let username = userInput.value
    let username2 = userInput2.value
    header2.textContent=('Hello, ' + username.toUpperCase() + ' ' + username2.toUpperCase());
}фамиля и имя */ 
 


/*let num= 0 
let clickBtn=document.getElementById('click')
let header2= document.getElementById('header2')
clickBtn.onclick = function() {
num=(num+1) 
//num=(num +10) или num +=10
header2.textContent=('Click nums: '+num);
} кликер*/ 

/*let header2 = document.createElement('h2')
let userInput = document.getElementById('username')
let clickBtn = document.getElementById('click')
clickBtn.parentElement.append(header2)
   clickBtn.onclick = function () {
     let username = userInput.value
     header2.textContent= username.toUpperCase() }  выводит динамический элемент*/ 


let section = document.getElementById('section3')
let div = document.createElement('div')
let button = document.createElement('button')
let input  = document.createElement('input')


   section.append(div) 
   div.append(button) 
   div.append(input)

   button.textContent='Click'
   input.type = 'text' 
   input.style.marginRight = '20px'
   input.style.borderStyle = 'solid'
   input.style.borderWidth='3px'
   div.className = 'form'
  


let userInput=