// // ** DOM MANIPULATIONS USING JS**
// // Note: uncomment, if you want to test para


// // PARENT NODE
// var listItems = document.querySelector("#items");
// console.log(listItems.parentNode); //Accessing parent prop
// listItems.parentNode.style.backgroundColor = "grey"; // Changing parent prop using child node
// listItems.parentNode.parentNode // can access and change parent of parent i.e here it is class container
// listItems.parentNode.parentNode.parentNode // can access and change parent of parent i.e here it is class body


// // PARENT ELEMENT (SAME AS PARENT NODE)
// var listItems = document.querySelector("#items");
// console.log(listItems.parentElement); //Accessing
// listItems.parentElement.style.backgroundColor = "grey"; // Changing


// //CHILD NODE
// var listItems = document.querySelector("#items");
// console.log(listItems.childNodes); // Can access child's props using parent node
// //return type is Nodelist
// //Note: avoid using this instead use ListItems.children. Because it also gives linebrakes(text element before and after)


// // CHILDREN NODES
// var listItems = document.querySelector("#items");
// console.log(listItems.children); // Can access child's props using parent node
// //Note: avoid using this instead use ListItems.children. Because it also gives linebrakes(text element before and after)
// //return type is HTML collection
// console.log(listItems.children[1]) // Gives 2nd child
// console.log(listItems.firstChild) // Gives first child, But here it gaves "text" element as it takes line break
// console.log(listItems.firstElementChild) //so use firstElementChild instead of firstChild to get 1st listitem
// // Similarly lastChild and lastElementChild


// // // SIBLINGS
// var listItems = document.querySelector('#items');
// console.log(listItems.nextSibling); // As same childnode and children it will also gave first element as text
// console.log(listItems.nextElementSibling); //so use this..
// //similarly previos element
// console.log(listItems.previousSibling);
// console.log(listItems.previousElementSibling);





// ** DOM CREATION USING JS**

//Q: Creatindg a div text element and inserting above header h1 item lister

// Creating a div
var newDiv = document.createElement('div');

//adding class to div
newDiv.className = 'hello';

//adding id to div
newDiv.id = 'hello1';

//adding attributes to created div
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello world');

//Adding text node to created div
newDiv.appendChild(newDivText);


// As of now we only created the div element but it doesn't showed on DOM

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);

//similar to other build in dom elements, this newDiv also editable
newDiv.style.fontSize = '30px';




// //Q:Creatindg a div text element and inserting above header h1 item 1

// Create a text node with "Hello world"
var helloText = document.createTextNode('Hello world ');

// Select the first list item (Item 1)
var firstListItem = document.querySelector('#items li:first-child');

// Insert the text node before the first list item
firstListItem.insertBefore(helloText, firstListItem.firstChild);
