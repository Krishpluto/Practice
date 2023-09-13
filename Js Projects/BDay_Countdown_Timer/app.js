const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const currentYear = new Date().getFullYear();

const BdayYearTime = new Date(`June 20 ${currentYear + 1} 00:00:00`);

//update countdown time
function updateCountdownTime() {
  const currentTime = new Date();

  const diff = BdayYearTime - currentTime;


  // divides the total number of milliseconds (diff) by the number of milliseconds in one day (1000 milliseconds * 60 seconds * 60 minutes * 24 hours).
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));

  //% operator calculates the remainder after dividing the total number of milliseconds by the number of milliseconds in one day. The result is the leftover milliseconds that don't form a complete day. We then divide this leftover amount by the number of milliseconds in one hour (1000 milliseconds * 60 seconds * 60 minutes) to get the number of hours.
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  //Again, the % operator calculates the remainder after dividing the total number of milliseconds by the number of milliseconds in one hour. The result is the leftover milliseconds that don't form a complete hour. We then divide this leftover amount by the number of milliseconds in one minute (1000 milliseconds * 60 seconds) to get the number of minutes.
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  //The % operator calculates the remainder after dividing the total number of milliseconds by the number of milliseconds in one minute. The result is the leftover milliseconds that don't form a complete minute. We then divide this leftover amount by 1000 milliseconds (1 second) to get the number of seconds.
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}

setInterval(updateCountdownTime, 1000);
