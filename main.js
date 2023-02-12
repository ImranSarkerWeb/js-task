const plus =document.getElementById('plus')
const minus =document.getElementById('minus')
const counter = document.getElementById('counter')

let value1 = 0;

counter.innerText = value1;

plus.addEventListener('click', function(){
    value1 = value1+1;
    counter.innerText = value1;
})

minus.addEventListener('click', function(){
    value1 = value1-1;
    counter.innerText = value1;
})

//these variable works for to do list

const newtask =document.getElementById('newtask')
const addItemButton = document.getElementById('addItem')
const todoUl = document.querySelector('#items')
const completeUL = document.querySelector('complete-list ul')


//functions
function createTask(task){
    const item = document.createElement('li')
    item.setAttribute('class', 'item')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    const label = document.createElement('label')
    label.innerText = task.value;

    item.appendChild(checkbox)
    item.appendChild(label)
    return item;

}

addItemButton.addEventListener('click', function(){
    newtask.value ? todoUl.appendChild(createTask(newtask)):alert('please type your work!')
    newtask.value = ""
})



//below event will add something my todo list
