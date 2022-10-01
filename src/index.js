import './style.css';
const mainView = document.querySelector("#mainView");
const testText = document.createElement('div');
testText.id = "test";
testText.innerHTML = "Hello World";
mainView.appendChild(testText);