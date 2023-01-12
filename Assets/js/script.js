  $(function () {
    const rootElement = $('.container-lg');
    const timeBlocks = Array.from(rootElement.children()); // writing to chidlren when possible later
    currentHour = moment().hour();
    currentDate = moment().format("YYYY, MM, DD"); // moment to get current time/date in month month date date hour hour format lowercase h's for 12hour time clock
    // console.log("DATE: ",currentDate);
    $('#currentDay').text(currentDate); // writing the currentDate to the p tag

    for(var i = 9; i<18;i++){ // this should run the same amount of hours there are in the html
      if (currentHour == ($("#"+[i]).attr('id'))){ // this comapres the current hour to the internal hour in the for loop
        $('#' +[currentHour]).removeClass('past'); 
        $('#'+[currentHour]).addClass('present'); 
      }
      if(currentHour < i){ // compares currenthour to indexed i so all future i's will have past removed from them and future added
        $('#'+ i).removeClass("past");
        $('#'+ i).addClass('future');
      }
    }
    $('.time-block').on('click' , '.saveBtn', function(e){ // targetting the time-blocks, click event inside them
      const savedataID = $(this).parent().attr('id');
      const savedataTXT = $(this).prev().val();

      localStorage.setItem(savedataID,(savedataTXT)); // setting savedataID as the id, and savedataTXT as the content from that id.
      e.preventDefault();
    })
    timeBlocks.forEach(e => {
      const elementID = e.id ; //events id(button click)
      const elementTXT = $(e).children().eq(1); //from event consttructing into the child 1 element
      const elementHook = localStorage.getItem(elementID);
      
      elementTXT.text(elementHook); //actually writing the element to the page
    });
  });
