'use strict'

var response = prompt('Which letter do you prefer a or b?');
var message;

if (response === 'a') {
  message = 'a is for Awesome!!';
} else if (response === 'b') {
  message = 'b is acceptable, only because it\'s right next to the letter a ';
} else {
  message = 'You\'re wrong! It\'s obviously lowercase a!';
}

document.write('<h3>' + message + '</h3>');