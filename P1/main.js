// get element by id and change
// let title = document.getElementById('header-title')
// let mainHeader = document.getElementById('main-header')
// let title2 = document.getElementById('second-title')
// title.textContent = 'Hello'
// title.innerHTML = '<h2>Items</h2>'
// title.innerText = 'Todo'
// title2.style.color = 'green'
// title2.style.fontWeight = 'bold'
// mainHeader.style.border = 'solid 3px #000'

//second task

// let lists = document.getElementsByClassName('list-group-item')
// for(let list of lists)
// list.style.fontWeight = 'bold'
// lists[2].style.backgroundColor = 'green'

// third task 
// let parent1 = document.getElementsByClassName('list-group')
// let pItems = document.getElementsByTagName('li')
// console.log(pItems.length)
// let li = document.createElement('li')
// let msgNode = document.createTextNode('new item')
//   li.appendChild(msgNode)
//   pItems[3].appendChild(li)

  // foth task querySelector
  // let list2 = document.querySelector('.list-group-item:nth-child(2)')
  // let list3 = document.querySelector('.list-group-item:nth-child(3)')
  // list2.style.backgroundColor = 'green'
  // list3.style.display = 'none'
  
  // let lists2 = document.querySelectorAll('.list-group-item')
  // lists2[2].style.color = 'green'

  // let oddlists = document.querySelectorAll('li:nth-child(odd)')
  // for(let i=0;i<oddlists.length;i++)
  // oddlists[i].style.backgroundColor = 'green'

// 1) parentElement: 
    let parent = document.getElementById('items').parentElement.nodeName
    console.log(parent)
// 2) lastElementChild: read-only property returns an element's last child Element , or null if there are no child elements. Element.
 let lastelementchild = document.getElementById('items').lastElementChild
 console.log('lastelementchild---',lastelementchild)
// 3)  lastChild : lastChild returns the list child node: An element node, a text node, or a comment node.
  let lastchild = document.getElementById('items').lastChild
  console.log('lastchild',lastchild)
// 4) craetechild appendchild
let newnode = document.createElement('li')
let nodevalue = document.createTextNode('last item')
newnode.appendChild(nodevalue)
document.getElementById('items').appendChild(newnode)
// 5) firstelementchild , firstchild : it is return type of mode 
let firstelementchild = document.getElementById('items').firstElementChild
console.log('firstelementchild---',firstelementchild.innerHTML)
let firstchild = document.getElementById('items').firstChild
console.log('firstchild',firstchild)
// 6) sibling
let nextsibling = document.getElementById('item3').nextSibling
let previoussibling = document.getElementById('item3').previousSibling
let nextelementsibling = document.getElementById('item3').nextElementSibling
let previouselementsibling =  document.getElementById('item3').previousElementSibling
console.log('nextsibling---',nextsibling)
console.log('previoussibling---',previoussibling)
console.log('nextelementsibling---',nextelementsibling)
console.log('previouselementsibling---',previouselementsibling.innerHTML)

// 6) setAttribute : The setAttribute() method sets a new value to an attribute.
//                   If the attribute does not exist, it is created first.
let p = document.createElement('p')
p.setAttribute('id','demo')
let text = document.createTextNode('Demo')
p.appendChild(text)
document.getElementsByClassName('title')[0].appendChild(p);
console.log('p---',p)



  



   

