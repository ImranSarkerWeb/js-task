const plus =document.getElementById('plus')
const minus =document.getElementById('minus')
const counter = document.getElementById('counter')

//these variable works for to do list

const newtask =document.getElementById('newtask')
const addItemButton = document.getElementById('addItem')
const todoUl = document.querySelector('#items')
const completeUL = document.querySelector('complete-list ul')



const taskList = document.getElementById('task')


const removeItem = document.querySelector('.remove')
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


//below event will add something my todo list

addItem.addEventListener('click', function(){
    const li = document.createElement('li');
    li.innerText = newtask.value;
    newtask.value ? taskList.appendChild(li):alert("Please input something first!")
    newtask.value = '';
})

const taskItem = document.querySelector('.taskItem').parentNode;
console.log(taskItem)

taskList.addEventListener('click', function(event){

    console.log(event.target)
    event.target.parentNode.removeChild(event.target)
})


