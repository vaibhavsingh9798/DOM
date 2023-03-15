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
