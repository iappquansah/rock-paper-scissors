// const todoList = ['make dinner', 'wash dishes'];
// // let todoList =[];
// function addTodo(){
//   inputElement = document.querySelector('.js-todoValue');
//   todovalue = inputElement.value;
//   todoList.push(todovalue);
//   console.log(todoList)
//   inputElement.value = '';

// }

// function displayTodoList(){
//   for (let i = 0; i < todoList.length; i++){
//     const todo = todoList[1];
//     const html = <p>`${todo}`</p>
//     todoListHTML += html;
//     console.log(todoListHTML);
//   }
//   document.querySelector('.js-display').innerHTML = todoListHTML;
//   addTodo();
// }



// // addTodo();

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
    // name:name,
    // dueDate: dueDate
    }
}

function renderDisplay(){
  let todoListHtml = ""
  for(let i = 0; i < todoList.length; i++){
    todoObject = todoList[i]
    // const name = todoObject.name
    // const dueDate = todoObject.dueDate
    const {todoName,dueDate} = todoObject
    html = `<div>${todoName}</div>
     <div>${dueDate}</div> 
    <div><button class="deleteButton" onclick=" deleteTodo(${i}) ">Delete</button>
          </div>`
    todoListHtml += html
    console.log(todoListHtml)}
  
  document.querySelector('.js-display').innerHTML = todoListHtml
}

function deleteTodo(i){
  todoList.splice(i,1)
  renderDisplay()
}
document.querySelector('.js-todoName').addEventListener('keydown',function(event){
  if (event.key === 'Enter'){
    addTodo()
  }
})
document.querySelector('.js-todoDueDate').addEventListener('keydown',function(event){
  if (event.key === 'Enter'){
    addTodo()
  }
})