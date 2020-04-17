
/*
* JAVASCRIPT FUNCTION
* @parameter: This does ____
*
* Notes: Lorem ipsum justo vel
* */


let elementA = document.querySelector('a')
elementA.setAttribute('title', 'A Cute Cat')


let secondListItem = document.getElementsByTagName('li')[1];
secondListItem.setAttribute('class', 'addedClass')

let parent = document.querySelector('section');
let children = parent.children;

let newDiv = document.createElement('div')

parent.appendChild(newDiv)

newDiv.setAttribute('class', 'main')
newDiv.setAttribute('id', 'text-modify')

addContent = document.getElementById('text-modify')
addContent.innerHTML = 
'This is a test to add stuff using DOM manipulation';

console.log(children)

let catPicture = document.querySelector('img')
catPicture.setAttribute('id', 'catpic')


let newButton = document.createElement('button')
parent.appendChild(newButton)

newButton.setAttribute('id', 'buttonDom')
newButton.innerHTML = "Like Cat"

let newButtonSelector = document.getElementById('buttonDom')

newButtonSelector.addEventListener('click', function(){
    if (newButton.innerHTML === "Thank You") {
        newButton.innerHTML = "cool!"
        
    } else {
        
        newButton.innerHTML = 'Thank You'
        alert('Thanks for Liking Cats!')
        
    }
        
})


let toggleButton = document.getElementById('toggleButton')


function hidePicture() {
    if (catPicture.style.display === "none") {
        catPicture.style.display = "block";
        toggleButton.innerHTML = 'Hide Ugly Cat Picture'
    } else {
        catPicture.style.display = 'none';
        toggleButton.innerHTML = 'Show Ugly Cat Picture'
    }    
}

// toggleButton.addEventListener('click', toggle(){
//     toggleButton.innerHTML = "fuck this";
// }



let aside = document.querySelector('aside')
aside.insertBefore(newButton, toggleButton)

let buttonRed = document.createElement('button')
buttonRed.innerHTML = 'Bookmark'

buttonRed.addEventListener('click', function(){
    aside.setAttribute('class', 'clicked')
})

aside.appendChild(buttonRed)