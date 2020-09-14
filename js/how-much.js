'use strict'

var response = prompt('How much wood, could a woodchuck chuck, if a woodchuck could chuck wood?');
var message;

if (response === '0') {
    message = 'Well that is not a fun guess!';
} else if (response === '7') {
    message = 'How did you know my lucky number?';
} else {
    message = 'The world may never know';
}


document.write('<h1>' + message )