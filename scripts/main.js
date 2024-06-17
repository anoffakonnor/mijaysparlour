let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/mijaylogo.jpg') {
        myImage.setAttribute ('src','images/album.jpg');
    } else {
        myImage.setAttribute ('src','images/mijaylogo.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else{ 
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mijay is the best, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mijay is the best, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}