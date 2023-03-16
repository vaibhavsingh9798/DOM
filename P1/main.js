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

// let lists = document.getElementsByClassName('list-group-item')
// for(let list of lists)
// list.style.fontWeight = 'bold'
// lists[2].style.backgroundColor = 'green'

// third task 
let parent1 = document.getElementsByClassName('list-group')
let pItems = document.getElementsByTagName('li')
console.log(pItems.length)
let li = document.createElement('li')
let msgNode = document.createTextNode('new item')
  li.appendChild(msgNode)
  pItems[3].appendChild(li)

  // foth task querySelector
  let list2 = document.querySelector('.list-group-item:nth-child(2)')
  let list3 = document.querySelector('.list-group-item:nth-child(3)')
  list2.style.backgroundColor = 'green'
  list3.style.display = 'none'
  
  let lists2 = document.querySelectorAll('.list-group-item')
  lists2[2].style.color = 'green'

  let oddlists = document.querySelectorAll('li:nth-child(odd)')
  for(let i=0;i<oddlists.length;i++)
  oddlists[i].style.backgroundColor = 'green'

   

