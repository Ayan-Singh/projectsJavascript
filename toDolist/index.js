const todoList = [];
function createTodo(){
    
    let input = document.querySelector('.js-input');
    let todo = input.value;
    todoList.push(todo)
    input.value=''
    addTodo()
    

}
function addTodo(){
    
    todoListHTML=''
    for(i=0;i<todoList.length;i++){
        const arr  = todoList[i];
        const html= `<p>${arr}</p>`
        todoListHTML+=html
    }
    let list = document.querySelector('.js-todo');
    list.innerHTML = todoListHTML
}