const todoList = [{todoName :"make dinner",dueDate :"14/10/2025 13:19"},{todoName : "wash uniforms", dueDate : "22/10/2025 16:24"}];
console.log()

function addTodo(){
  const inputElement = document.querySelector('.js-todoName')
  todoName = inputElement.value
  const dateInputElement = document.querySelector('.js-todoDueDate')
  dueDate = dateInputElement.value
  if (todoName.trim() !== "" && dueDate.trim() !== ""){
    todoList.push({todoName,dueDate})
    inputElement.value = ""
    renderDisplay()
    }
}

function renderDisplay(){
  todoListHtml = ''
  todoList.forEach((todoObject,index)=>{
    todoObject = todoList[index]
    const {todoName,dueDate} = todoObject
    html = `<div>${todoName}</div>
     <div>${dueDate}</div> 
    <div><button class="deleteButton" onclick=" deleteTodo(${index}) ">Delete</button>
          </div>`
    todoListHtml += html
    console.log(todoListHtml)})
  
  document.querySelector('.js-display').innerHTML = todoListHtml
}

function deleteTodo(index){
  todoList.splice(index,1)
  renderDisplay()
}
document.querySelector('.js-todoName').addEventListener('keydown',(event)=>{
  if (event.key === 'Enter'){
    addTodo()
  }
})
document.querySelector('.js-todoDueDate').addEventListener('keydown',(event)=>{
  if (event.key === 'Enter'){
    addTodo()
  }
})
