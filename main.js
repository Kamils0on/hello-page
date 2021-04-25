const myVariable = document.querySelector('h1');
myVariable.textContent = 'Hello Deer';



function multiply(a, b) {
  let result;
  result = a * b;
  return result;
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'https://picsum.photos/id/1003/400/600') {
    myImage.setAttribute('src', 'https://picsum.photos/id/1043/400/600');
  } else {
    myImage.setAttribute('src', 'https://picsum.photos/id/1003/400/600');
  }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name: ');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello Deer!, ' + myName;
  }

}
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = "Hello Deer!, " + storedName;
}
myButton.onclick = function() {
  setUserName();
}
