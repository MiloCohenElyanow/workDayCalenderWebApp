// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.







  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $(function () {
    currentHour = moment().hour();
  
    currentDate = moment("MM", "DD", "hh"); // moment to get current time/date in month month date date hour hour format lowercase h's for 12hour time clock
      
    console.log($('#10').attr('id'));
  
    for(var i = 9; i<18;i++){ // this should run the same amount of hours there are in the html
      console.log($("#"+[i]).attr('id')); // this logs all of the ids for all of the hours in the html\
      if (currentHour == ($("#"+[i]).attr('id'))){ // this comapres the current hour to the internal hour in the for loop
        $('#' +[currentHour]).removeClass('past'); // this removes past from the current hour
        $('#'+[currentHour]).addClass('present'); // adds present to the current hour
      }
      if(currentHour < i){ // compares currenthour to indexed i so all future i's will have past removed from them and future added
        $('#'+ i).removeClass("past");
        $('#'+ i).addClass('future');
      }
    }
  
    $(".saveBtn").click(function(e) { //jquery click event listner on .savebtn, this applys for all of the save buttons
      e.preventDefault();
      var currSaveCont = ($(this).prev().val());//going to div from the selected save button and getting that value, so the content saved fr
      var saveContKey = ($(this).parent().attr('id'));

      console.log("save button:"," key: ", saveContKey," content: ", currSaveCont)
      
      let setobject = {varid: saveContKey, varcont: currSaveCont};
      
      var localstore = localStorage.setItem(setObject);
      console.log("localstoreset", localstore);
      var getLocalStore = localStorage.getItem(setobject);
      console.log('getlocalstore', getLocalStore);
    });
  
  
   
  });
