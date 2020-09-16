{/* <script language="JavaScript">
        firstName = prompt("Please enter your name", "");
        document.write("Hello " + firstName + ", welcome to my Web page.");
    </script> */}

'use strict' 

function getName() {
    var userName = prompt('What is your name?')
}

var response = prompt('What is your name?');
var message;

if (response === 'Ricardo') {
    message = ' What are the chances, that\'s my name!';
} else if (response === 'ricardo') {
    message = ' You should capatilze a fine name like Ricardo!';
} else {
    message = ' That\'s not a very good name; Ricardo, now there\'s a good name!'
    return document.write('<h3>Hello ' + userName + message + '<h3>')
}

getName();
// return document.write('<h3>Hello ' + userName + message + '<h3>')
// document.write('<h3>' + response + message + '</h3>');

