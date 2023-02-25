let countdownHours = document.getElementById  ("ch-countdown-hours")
let countdownDays = document.getElementById   ("ch-countdown-days")
let countdownMinutes = document.getElementById("ch-countdown-minutes")
let countdownSeconds = document.getElementById("ch-countdown-seconds")

              var countDownDate = new Date("March 24, 2024 15:37:25").getTime();
              var x = setInterval(function () {

                var now = new Date().getTime();
                var distance = countDownDate - now;

                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                /*document.getElementById("run-down").innerHTML = days + "d " + hours + "h "
                  + minutes + "m " + seconds + "s ";*/
                  countdownHours.innerHTML = hours;
                  countdownDays.innerHTML = days;
                  countdownMinutes.innerHTML = minutes;
                  countdownSeconds.innerHTML = seconds;

                if (distance < 0) {
                  clearInterval(x);
                  document.getElementById("countdown").innerHTML = "EXPIRED";
                }
              }, 1000);