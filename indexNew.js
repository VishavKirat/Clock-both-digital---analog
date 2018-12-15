

const seconds = document.querySelector('.secondsHand');
const minutes = document.querySelector('.minutesHand')
const hours = document.querySelector('.hoursHand')
const localeTimeString = document.querySelector('.localeTimeString');

setInterval(function(){
  const date = new Date();
  localeTimeString.textContent = `Current Time is : ${date.toLocaleTimeString()}`;
  const currentSeconds = date.getSeconds();
  const secondsDegrees = ((currentSeconds / 60) * 360) + 90;
  seconds.style.transform = `rotate(${secondsDegrees}deg)`;
  const currentMinutes = date.getMinutes();
  const minutesDegrees = ((currentMinutes / 60) * 360)+((currentSeconds/60)*6) + 90;
  minutes.style.transform = `rotate(${minutesDegrees}deg)`;
  const currentHours = date.getHours();
  const hoursDegrees = ((currentHours / 12) * 360)+ ((currentMinutes/60)*30) + 90;
  hours.style.transform = `rotate(${hoursDegrees}deg)`;
  // console.log(currentSeconds);
  // console.log(currentHours);
  // console.log(currentMinutes);

},1000)
