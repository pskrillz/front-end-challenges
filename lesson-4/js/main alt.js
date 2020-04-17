
/*
* JAVASCRIPT FUNCTION
* @parameter: This does ____
*
* Notes: Lorem ipsum justo vel
* */


let anAElement = document.querySelector('a');
let allLis = document.getElementsByTagName('li');
let secondLi = allLis[1];


let mainSection = document.getElementsByClassName('main')
let parent = document.querySelector('section');

var children = mainSection.children[0];


console.log(children);

anAElement.setAttribute('title', 'cute cat');
secondLi.className = 'newClass';
secondLi.classList.add('newClass2');

