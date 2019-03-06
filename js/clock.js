/* Source influenced by: https://codepen.io/SitePoint/pen/MwNPVq */

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  function updateClock() {
    var t = getTimeRemaining(endtime);
    $("#days").text(t.days);
    $("#hours").text(('0' + t.hours).slice(-2));
    $("#minutes").text(('0' + t.minutes).slice(-2));
    $("#sec").text(('0' + t.seconds).slice(-2));

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse('30 Nov 2019 00:00:00 GMT'));

initializeClock('clock', deadline);