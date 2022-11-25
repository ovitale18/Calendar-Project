var now = dayjs()

$(function () {

  function saveTasks(){

  };

  
    $('.container-fluid').children('.row').each(timeColor);

  function timeColor(){
    $('.row').toggleClass('past');
  };

 
    function printTasks(){

    };

   
    function displayCurrentDates(){
      
    }; 

    let now = dayjs().format('ddd, MMM/DD/YYYY');
      document.getElementById('currentDay').innerHTML=now;
  



  
  });


   
   
   
 