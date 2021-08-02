let html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practicle</title>
    <style>
    .error { outline: 5px solid red;}
    </style>
</head>

<body>
<div id="root"></div>
 <script>
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
        if (input.removeAttribute('style')) input.removeAttribute('style')  //  откатывает как будто вообще не создалась 
        let li = document.createElement('li')
        ul.append(li)
        li.textContent = input.value
        input.value = ""
     
    } else {
      //  input.style.borderColor = 'red'
      input.classList.add  ('error')
    }    

}
 </script>
</body>
</html>
`



let express = require('express')
let app = express()


app.get('/hello',function(req,res) {
    res.send(html)
})

app.listen(3000)