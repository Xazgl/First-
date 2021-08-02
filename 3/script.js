'use strict';

let root = document.getElementById ('root')
let input = document.createElement('input')
let button = document.createElement('button')
let ul = document.createElement('ul')


root.append(input)
root.append(button)
root.append(ul)



button.textContent='Click'

button.onclick=function() {
    if (input.value != "") {
        //input.style=null
        input.removeAttribute('style')  //  откатывает как будто вообще не создалась 
        let li = document.createElement('li')
        ul.append(li)
        li.textContent = input.value
        input.value = ""
     
    } else {
        input.style.borderColor = 'red'
    }    

}




/*let name = prompt('Введите ФИО?','');

alert('name');*/

