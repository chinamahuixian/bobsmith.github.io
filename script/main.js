/**
 * Created by Administrator on 2017/2/6.
 */
var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world';


var myImage = document.querySelector('img');

myImage.onclick = function () {
    var src = myImage.getAttribute('src');
    if(src === 'images/firefox-icon.png') {
        myImage.setAttribute('src','images/firefox2.png')
    } else {
        myImage.setAttribute('src','images/firefox-icon.png')
    }
}


var myButton = document.querySelector('button');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'Welcome to beijing, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storeName = localStorage.getItem('name');
    myHeading.innerHTML = 'welcome to beijing,' + storeName;
}

myButton.onclick = function () {
    setUserName();
}




















/*
var myButton = document.querySelector('button');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'Mozilla is cool,' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storeName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool,' + storeName;
}

myButton.onclick = function () {
    setUserName();
}*/
