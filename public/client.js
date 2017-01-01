//properties by which searches can be done
// var sizes = ['small', 'medium', 'large'];
// var colors = ['red', 'orange', 'green', 'mermaid treasure', 'blue', 'purple'];

//global array of items in inventory
var items = [];

$(document).ready(function(){
  console.log('woof');

  //submit button
  $('#submit').on('click', function(){
    console.log('submit clicked');
    addObject();
    $('#nameIn').val('');
  });

  //search button
  $('#searchInv').on('click', function(){
    console.log('search clicked');
    getObjects();
  });

  var addObject = function(){
    console.log('in addObject');
    //assemble object from new fields
    var newItem = {
      color: $('#colorIn').val(),
      name: $('#nameIn').val(),
      size: $('#sizeIn').val(),
    }; //end test object
    console.log('adding: ', newItem);
    $.ajax({
      type: 'POST',
      data: newItem,
      url: '/addItem',
      success: function(response){
        console.log('Back from post: ', response);
      } //end success
    }); //end ajax call
  };//end addObject

  var findObject = function(){
    // console.log( 'in findObject. Looking for:', colorCheck, sizeCheck );
    // array of matches
    var matches = [];
    for ( var i = 0; i < items.length; i++ ) {
      if( items[0][i].color == $('#searchColorIn').val() && items[0][i].size == $('#searchSizeIn').val()){
        // match, add to array
        matches.push( items[0][i] );
      } // end if
    } // end for
    console.log( 'matches:', matches );
    //////todo: display matches
  }; // end findObject

  var getObjects = function(){
    console.log( 'in getObjects');
    $.ajax({
      type: 'GET',
      url: '/getItem',
      success: function(response){
        items.push(response);
        findObject(items);
      }
    }); //end ajax call
  }; // end getObjects
  //
  // // get objects when doc is ready
  // getObjects();
  // // the below are tests to show what is returned when running findObject
  // addObject( 'blue', 'blueberry', 'small' );
  // findObject( 'blue', 'small' );
  // findObject( 'blue', 'large' );







}); //end document ready
