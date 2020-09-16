{/* <script language="JavaScript">
        firstName = prompt("Please enter your name", "");
        document.write("Hello " + firstName + ", welcome to my Web page.");
    </script> */}

'use strict' 

var response = prompt('What is your name?');
var message;

if (response === 'Ricardo') {
    message = ' What are the chances, that\'s my name!';
} else if (response === 'ricardo') {
    message = ' You should capatilze a fine name like Ricardo!';
} else {
    message = ' That\'s not a very good name; Ricardo, now there\'s a good name!'
}

document.write('<h3>' + response + message + '</h3>');

