//Varibles
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event decalration
form.addEventListener('submit', addItem); //here addItem is a inbuilt function declared below.

//Delete item event declaration
itemList.addEventListener('click', removeItem);

//Filter event decalration
filter.addEventListener('keyup', filterItems);

//Edit item event declaration
itemList.addEventListener('click', editItem);

//Add item
function addItem(e) {
    e.preventDefault();
    //get input value
    var newItem = document.getElementById('item').value;
    //create element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    // add textnode with input value
    li.appendChild(document.createTextNode(newItem));


    //create del button
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    //Creating edit button
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm float-right delete';
    editBtn.style.marginRight = '10px';
    editBtn.style.width = '53px'; // Set the width
    editBtn.style.height = '38px'; // 

    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);

    itemList.appendChild(li);

}

function removeItem(e) {
    // why if ?
    // the code in the function not run when click anywhere the listitem, it should run if the if condition only
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure ?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    //get the text content and convert it in to lowercase to make case sensitive\
    var text = e.target.value.toLowerCase();
    //Get list
    var items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function editItem(e) {
    if (e.target.classList.contains('edit')) {

    }
}