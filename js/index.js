//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var element = document.createElement('div');
element.innerText = "Hello Emu";
var main = document.querySelector('#main');
main.appendChild(element);
element.style.color = 'green';
element.style.textAlign = 'center';


