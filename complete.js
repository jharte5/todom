// const removeItem = function (num) {
//     // let str = 'new item'
//     // const num = todoList.indexOf()

//     todoList.splice(0, 1);
//     console.log(todoList)
}

// document.querySelector('li')`nth-child${(document.querySelector('.index-input'))}`

document.querySelector(‘.remove-todo’).addEventListener(‘click’, function(){
    document.querySelector(`.todo-list li:nth-child(${document.querySelector(‘.index-input’).value}`).remove();
})