'use strict'

//ask for name again

function getName() {
    var userName = prompt('What was your name again? I forgot.');
    return document.write('<h3>Hello ' + userName + '!' + ' I\'ll try to remember that<h3>');
}

getName();