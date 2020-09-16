'use strict'

// helper function
function getProduct() {
  var response = prompt('Would you rather have a house or hotel?');
  var item;

  while(response != 'house' && response != 'hotel') {
    response = prompt('Would you rather have a house or hotel? BE SPECIFIC');
  }

  if (response === 'house') {
    item = '<img src="../images/house.png">';
  } else if (response === 'hotel') {
    item = '<img src="../images/hotel.png">';
  } 

  return item;
}

// helper function
function getCount() {
  var count = prompt('Great! How many would you like?');
  while(isNaN(count) || count === '') {
    count = prompt("PLEASE enter a number. How many would you like?");
  }
  return count;
}

function showOrder() {
  var result = '';
  var itemType = getProduct();
  var total = getCount();

  for(var i = 0; i < total; i++) {
    result = result + '<p>' + itemType + '</p>';
    console.log(result);
  }

  return document.write(result);
}

showOrder(); //put them in the order you want them to happen


//if (){
//     item = '<img src="image.jpg>';
// } else if () {
//     item = '<img>';
// }

//if a function is called inside of another function it no longer
// needs to be run at the bottom or outside of that funciont if it's not needed for anything else
//quotes around the img before closing tags. if you are in a folder you need to leave the folder
// in the same method as in terminal