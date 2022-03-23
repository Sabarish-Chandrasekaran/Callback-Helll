"use strict";

let main = document.createElement("div");
main.className = "row bg-info bg-gradient";
main.id="main";

let countdown = document.createElement("div");
countdown.className = "h1 mt-5 pt-5 offset-4 col-3 text-danger text-center";

let eventDay = document.createElement("div");
eventDay.className = "h1  offset-4 col-4 my-5 text-warning text-center";
eventDay.innerHTML = "Happy Independence Day!!!"
eventDay.style.visibility = "hidden";


countdown.innerHTML = 10;
setTimeout(function () {
  countdown.innerHTML = 9;
  setTimeout(function () {
    countdown.innerHTML = 8;
    setTimeout(function () {
      countdown.innerHTML = 7;
      setTimeout(function () {
        countdown.innerHTML = 6;
        setTimeout(function () {
          countdown.innerHTML = 5;
          setTimeout(function () {
            countdown.innerHTML = 4;
            setTimeout(function () {
              countdown.innerHTML = 3;
              setTimeout(function () {
                countdown.innerHTML = 2;
                setTimeout(function () {
                  countdown.innerHTML = 1;
                  setTimeout(function () {
                    eventDay.style.visibility = "visible";
                    countdown.style.visibility = "hidden";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

document.body.append(main)
main.append(countdown,eventDay);

