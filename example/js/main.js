"use strict";

document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to

  // В цю зминну записується дата до якої проводити відлік
  var twoDaysFromNow = (new Date('Dec 17, 2020').getTime() / 1000);
  

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  var interval = setInterval(() => {
    let body = document.body;
    body.classList.toggle('light-theme');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  }, 5000);

  // Show version number
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
