const todoList = [
    'make a list',
    'put things on list',
    'put another thing on list',
    'last thing on list', 
];
const addItem = function (str) {
    let hi = 'new item'
    todoList.push(hi);
    console.log(todoList)
}


document.querySelector('ul').appendChild(document.createElement('li'));

const printArray = function (arr) {
    let printThis = "";
    for(let i = 0; i < todoList.length; i++){
    printThis += "<br>"+todoList[i];
    }   
    return printThis; 
}
    document.querySelector('li').innerText = printArray();

// li.innerText = 'results';
// li.appendchild()