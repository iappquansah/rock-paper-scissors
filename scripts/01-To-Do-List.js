const todoList = ['make dinner', 'wash dishes'];
// let todoList =[];
function addTodo(){
  inputElement = document.querySelector('.js-todoValue');
  todovalue = inputElement.value;
  todoList.push(todovalue);
  console.log(todoList)
  inputElement.value = '';

}

function displayTodoList(){
  for (let i = 0; i < todoList.length; i++){
    const todo = todoList[1];
    const html = <p>`${todo}`</p>
    todoListHTML += html;
    console.log(todoListHTML);
  }
  document.querySelector('.js-display').innerHTML = todoListHTML;
  addTodo();
}



// addTodo();
