var time = new Date().getHours();

var noon = 12;
var evening = 18; // 6PM
var wakeuptime = 9; // 9AM
var lunchtime = 12; // 12PM
var partyTime = 17; // 5PM
var naptime = lunchtime + 2; // 2PM

var isPartyTime = false;

var lolcat = document.getElementById('lolcat');
var message = document.getElementById('timeEvent');
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var partyTimeButton = document.getElementById("partyTimeButton");

// partyTimeButton.innerText = "PARTY TIME!";
// partyTimeButton.style.backgroundColor = "#222";

var updateClock = function() {

  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  if (time == partyTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "IZ PARTEE TIME!!";
  } else if (time == naptime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/napTime.jpg";
    messageText = "IZ NAP TIME...";
  } else if (time == lunchtime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/lunchTime.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
  } else if (time == wakeuptime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
    messageText = "IZ TIME TO GETTUP.";
  } else if (time < noon) {
    messageText = "Good morning, Mate!";
  } else if (time > evening) {
    messageText = "Good Evening, Mate!";
  } else {
    messageText = "Good afternoon, Mate!";
  }

  lolcat.src = image;
  message.innerText = messageText;

  showCurrentTime();

};

var showCurrentTime = function() {
  // display the string on the webpage
  var clock = document.getElementById('clock');

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set hours
  if (hours >= noon) {
    meridian = "PM";
  }
  if (hours > noon) {
    hours = hours - 12;
  }

  // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // put together the string that displays the time
  var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyEvent = function() {

  if (isPartyTime == false) {
    isPartyTime = true;
    time = partyTime;
    partyTimeButton.innerText = "PARTY TIME!";
    partyTimeButton.style.backgroundColor = "#222";
  } else {
    isPartyTime = false;
    time = new Date().getHours();
    partyTimeButton.innerText = "PARTY OVER";
    partyTimeButton.style.backgroundColor = "#0A8DAB";
  }

};

partyTimeButton.addEventListener('click', partyEvent);

var lunchEvent = function() {
  lunchtime = lunchTimeSelector.value;
};

var wakeUpEvent = function() {
  wakeuptime = wakeUpTimeSelector.value;
};

var napEvent = function(hour) {
  naptime = napTimeSelector.value;
};

partyTimeButton.addEventListener('click', partyEvent);
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
