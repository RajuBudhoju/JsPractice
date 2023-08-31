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
    var itemDescription = document.getElementById('itemDescription').value;

    var userDetails = {
        itemName: newItem,
        itemDescription: itemDescription
    };

    storedUserData = JSON.parse(localStorage.getItem('userDetails')) || [];

    storedUserData.push(userDetails);

    localStorage.setItem('userDetails', JSON.stringify(storedUserData));
    //create element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    // add textnode with input value
    var itemNameContainer = document.createElement('div');
    itemNameContainer.className = 'd-flex justify-content-between align-items-center';
    // add textnode with input values
    itemNameContainer.appendChild(document.createTextNode(newItem + ' ' + itemDescription)); // Combine name and description
    li.appendChild(itemNameContainer);


    //create del button
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    //Creating edit button
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    editBtn.style.marginRight = '10px';
    editBtn.style.width = '53px'; // Set the width
    editBtn.style.height = '35px'; // 
    editBtn.style.backgroundColor = 'green';

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
        // Access the list item element
        var listItem = e.target.closest('.list-group-item');

        // Access the text content of the item name and description
        var itemNameAndDescription = listItem.querySelector('div.d-flex').textContent.trim();

        // Split the name and description using a space
        var [itemName, itemDescription] = itemNameAndDescription.split(' ');

        // Prompt the user to enter a new item description
        var newDescription = prompt('Enter the new description:', itemDescription);

        // If the user provided a new description, update the item's description
        if (newDescription !== null) {
            itemDescription = newDescription;
            listItem.querySelector('div.d-flex').textContent = itemName + ' ' + itemDescription;
        }
    }
}

