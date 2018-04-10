var timeoutHandle;
function countdown(minutes) {
    var seconds = 60;
    var mins = minutes;
    function tick() {
        var counter = document.getElementById("timer");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            timeoutHandle=setTimeout(tick, 1000);
        } else {

            if(mins > 1){

               // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
               setTimeout(function () { countdown(mins - 1); }, 1000);

            }
        }
    }
    tick();
}
// countdown(1);

// //which radio button was selected?
//     $( "input[type='submit']" ).click(function( event ) {
//       if($("input[type='radio']").is(':checked')) { 
//         console.log($("input[type='radio']:checked").val()); 
//       }
//       event.preventDefault();
//   });
  


//function to check answers
    function checkAnswers() {
        var q1=document.trivia.q1.value;
        var q2=document.trivia.q2.value;
        var q3=document.trivia.q3.value;
        var q4=document.trivia.q4.value;
        var q5=document.trivia.q5.value;
        var correct = 0;
        var incorrect = 0;

        if(q1=="b") {
            correct++;
        }  else {
            incorrect++;
        }
        if(q2=="c") {
            correct++
        }  else {
            incorrect++;
        } 
       if(q3=="c") {
            correct++;
        }  else {
            incorrect++;
        }
       if (q4=="b") {
           correct++;
        }  else {
            incorrect++;
        }
       if (q5=="b") {
           correct++;
        }  else {
            incorrect++;
        }
    
        alert("You got " + correct + " right and " + incorrect + " wrong.");
        window.location.reload();
    }

   setTimeout (checkAnswers, 60 * 1000);
  
//start screen
 function start() {
    var start_button = document.getElementById(loadScreen);
   document.body.removeChild(loadScreen);
   countdown(1);
};
