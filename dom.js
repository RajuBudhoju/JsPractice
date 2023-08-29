//Examine the document object
// console.dir(document);

/* acsessing */
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


/* Changign the things */
// document.all[10].textContent = "Hello"; // but its not good method because 10 index sometimes changes

// GETELEMENT BY ID//
var headerTitle = document.getElementById('header-title');
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye';
//what is the difference between abouve 2 line?
//textContent shows the span dispaly: none things also, where as innerText doesn't

//can change styles also
headerTitle.style.borderBottom = 'solid 3px #000';
var addItemsHeader = document.querySelector("#main .title");

addItemsHeader.style.color = "green";
addItemsHeader.style.fontWeight = "bold";





// // Get the element with the class "title" inside the "main" div
// var addItemsHeader = document.querySelector("#main .title");

// // Apply the desired styles
// addItemsHeader.style.color = "green";
// addItemsHeader.style.fontWeight = "bold";


//GET ELEMENT BY CLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'grey';
// }


// //GET ELEMENT BY TAG NAME
// var li = document.getElementsByTagName('list-group-item');
// console.log(li);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for (var i = 0; i < items.length; i++) {
//     li[i].style.backgroundColor = 'grey';
// }
// //diff between class and tag is..it applies even though not there class


//QUERY SELECTOR