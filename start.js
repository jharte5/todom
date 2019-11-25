const todoList = [
    'make a list',
    'put things on list',
    'put another thing on list',
    'last thing on list', 
];
const addItem = function (str) {
    // let str = 'new item'
    todoList.push(str);
    console.log(todoList)
}
const removeItem = function (str) {
    // let str = 'new item'
    todoList.pop(str);
    console.log(todoList)
}