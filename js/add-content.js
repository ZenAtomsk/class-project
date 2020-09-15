'use strict'

var today = new Date();
var hourNow = today.getHours(); 
var greeting;

if (hourNow > 18) {
  greeting = 'What\'s for dinner?';
} else if (hourNow > 12) {
  greeting = 'Is it lunchtime yet? Or 2nd lunch?';
} else if (hourNow >= 0) {
  greeting = 'Top o\' the mornin\' to ya!';
} else {
  greeting = 'Welcome to the jungle!';
}

document.write('<h3>' + greeting + '</h3>');