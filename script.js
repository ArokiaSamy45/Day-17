
window.addEventListener("load", function() {
    function Countdown(count) {
      if (count > 0) {
        document.getElementById("CallBack").innerHTML = count;
        setTimeout(function() {
          Countdown(count - 1);
        }, 1000);
      } else {
        document.getElementById("CallBack").innerHTML = "Happy Independence Day";
      }
    }
  
Countdown(10);
  });


