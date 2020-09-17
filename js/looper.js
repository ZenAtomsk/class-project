'use strict'

//ask for name

var userName = prompt('What is your name?');
var message;

if (userName === 'Ricardo') {
    message = ' What are the chances, that\'s my name!';
} else if (userName === 'ricardo') {
    message = ' You should capatilze a fine name like Ricardo!';
} else {
    message = ' That\'s not a very good name; Ricardo, now there\'s a good name!';
 }

document.write('<h3>Hello ' + userName + '!' + message + '</h3>');


//product tally
// helper function

function getProduct() {
  var response = prompt('Do you want a kayak or a paddle board?');
  var item;

  while(response != 'kayak' && response != 'paddle board') {
    response = prompt('Would you rather have a kayak or paddle board? BE SPECIFIC');
  }

  if (response === 'kayak') {
    item = '<img src="images/kayak.jpg">';
  } else if (response === 'paddle board') {
    item = '<img src="images/paddle-board.jpg">';
  } 

  return item;
}

// helper function
function getCount() {
  var tally = prompt('Great! How many would you like?');
  while(isNaN(tally) || tally === '') {
    tally = prompt("PLEASE enter a number. How many would you like?");
  }
  return tally;
}

function showItems() {
  var conclusion = '';
  var itemType = getProduct();
  var overall = getCount();

  for(var i = 0; i < overall; i++) {
    conclusion = conclusion + '<p>' + itemType + '</p>';
    console.log(conclusion);
  }

  return document.write(conclusion);
}

showItems();