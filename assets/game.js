//timer
var timeoutHandle;
function countdown(minutes) {
    var seconds = 30;
    var mins = minutes
    function tick() {
        var counter = document.getElementById("seconds");
        var current_minutes = 0
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

countdown();
// count();

//which radio button was selected?
    $( "input[type='submit']" ).click(function( event ) {
      if($("input[type='radio']").is(':checked')) { 
        console.log($("input[type='radio']:checked").val()); 
      }
      event.preventDefault();
  });
  