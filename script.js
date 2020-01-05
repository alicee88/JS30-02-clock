const hoursHand = document.querySelector('.hour-hand');
const minutesHand = document.querySelector('.min-hand');
const secondsHand = document.querySelector('.second-hand');

function setTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    calculateHours(hours);
    calculateMinutes(minutes);
    calculateSeconds(seconds);
}

function calculateHours(hours) {
    let hoursConvertedTo12Hours = hours;
    
    if(hoursConvertedTo12Hours > 12)
        hoursConvertedTo12Hours -= 12;

    let currHour = (hoursConvertedTo12Hours / 12) * 360 + 90; // +90 to offset the rotation specified in CSS to make hands point at 12

    hoursHand.style.transform = `rotate(${currHour}deg)`; 
}

function calculateMinutes(minutes) {
    let currMins = (minutes / 60) * 360 + 90; // +90 to offset the rotation specified in CSS to make hands point at 12

    minutesHand.style.transform = `rotate(${currMins}deg)`;
}

function calculateSeconds(seconds) {
    
    /* Turn off the transition at 12 position, as otherwise transition will 'rewind' the hand and cause an ugly jerk effect */
    if(seconds === 0) {
        secondsHand.style.transition = 'unset';
    } else {
        secondsHand.style.transition = 'all 0.05s';
    }
    
    let currSeconds = (seconds / 60) * 360 + 90; // +90 to offset the rotation specified in CSS to make hands point at 12

    secondsHand.style.transform = `rotate(${currSeconds}deg)`;
}

setInterval(setTime, 1000);   
   