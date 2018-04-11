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
               setTimeout(function () { countdown(mins - 1); }, 1000);

            }
        }
    }
    tick();
}
// countdown(1);


//function to check answers
    function checkAnswers() {
        var q1=document.trivia.q1.value;
        var q2=document.trivia.q2.value;
        var q3=document.trivia.q3.value;
        var q4=document.trivia.q4.value;
        var q5=document.trivia.q5.value;
        var q6=document.trivia.q6.value;
        var q7=document.trivia.q7.value;
        var q8=document.trivia.q8.value;
        var q9=document.trivia.q8.value;
        var q10=document.trivia.q10.value;

        var correct = 0;
        var incorrect = 0;
        var unanswered = 0;

        if (q1 == "" ) {
            unanswered++;
          } else if ( q1 == "b" ) {
            correct++;
          } else {
            incorrect++;
          }

          if (q2 == "" ) {
            unanswered++;
          } else if ( q2 == "c" ) {
            correct++;
          } else {
            incorrect++;
          }

          if (q3 == "" ) {
            unanswered++;
          } else if ( q3 == "c" ) {
            correct++;
          } else {
            incorrect++;
          }

          if (q4 == "" ) {
            unanswered++;
          } else if ( q4 == "b" ) {
            correct++;
          } else {
            incorrect++;
          }

          if (q5 == "" ) {
            unanswered++;
          } else if ( q5 == "b" ) {
            correct++;
          } else {
            incorrect++;
          }

          if (q6 == "" ) {
            unanswered++;
          } else if ( q6 == "a" ) {
            correct++;
          } else {
            incorrect++;
          }

          if (q7 == "" ) {
            unanswered++;
          } else if ( q7 == "b" ) {
            correct++;
          } else {
            incorrect++;
          }
      
          if (q8 == "" ) {
            unanswered++;
          } else if ( q8 == "a" ) {
            correct++;
          } else {
            incorrect++;
          }
        
          if (q9 == "" ) {
            unanswered++;
          } else if ( q9 == "a" ) {
            correct++;
          } else {
            incorrect++;
          }

          if (q10 == "" ) {
            unanswered++;
          } else if ( q10 == "b" ) {
            correct++;
          } else {
            incorrect++;
          }
         
          document.getElementById("resultScreen").classList.remove("hidden");
          document.getElementById("correctResult").innerHTML = ("Right: " + correct);
          document.getElementById("incorrectResult").innerHTML = ("Wrong: " + incorrect);  
          document.getElementById("unansweredResult").innerHTML = ("Unanswered: " + unanswered); 





        // window.location.reload();
        // console.log("You got " + correct + " right and " + incorrect + " wrong. You did not answer " + unanswered + " questions.");
        // window.location.reload();
    }

//    setTimeout (checkAnswers, 60 * 1000);
  
//start screen
 function start() {
    var start_button = document.getElementById("loadScreen");
   document.body.removeChild(loadScreen);
   countdown(1);
   setTimeout (checkAnswers, 60 * 1000);
};
