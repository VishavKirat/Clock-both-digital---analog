

const secondsHand = document.querySelector('.sec-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

const digitalSec = document.querySelector('.sec p');
const digitalMin = document.querySelector('.min p');
const digitalHour = document.querySelector('.hour p');

function setTime() {
  const currentTime = new Date();
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();
  digitalSec.textContent = seconds;
  digitalMin.textContent = minutes;
  digitalHour.textContent = hours;
  const secondsDegree = ((seconds/60)* 360)+90;
  const minutesDegree = ((minutes/60)* 360)+90;
  const hoursDegree = ((hours/12)* 360)+90;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setTime,1000);
