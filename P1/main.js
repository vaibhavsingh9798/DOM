// get element by id and change
let title = document.getElementById('header-title')
let mainHeader = document.getElementById('main-header')
let title2 = document.getElementById('second-title')
title.textContent = 'Hello'
title.innerHTML = '<h2>Items</h2>'
title.innerText = 'Todo'
title2.style.color = 'green'
title2.style.fontWeight = 'bold'
mainHeader.style.border = 'solid 3px #000'

//second task

let lists = document.getElementsByClassName('list-group-item')
for(let list of lists)
list.style.fontWeight = 'bold'
lists[2].style.backgroundColor = 'green'

// third task 
let parent1 = document.getElementsByClassName('list-group')
let pItems = document.getElementsByTagName('li')
console.log(pItems.length)
let li = document.createElement('li')
let msgNode = document.createTextNode('new item')
  li.appendChild(msgNode)
  pItems[3].appendChild(li)
   

