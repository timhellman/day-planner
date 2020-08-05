
//counter with current date and timen (moment.js)
//place counter inside the jumbotron
//if statement - if .hour = currenttime, then present(background in description is red).  
//else if .hour > currenttime, then future (green).    
//else if .hour < currenttime time, then past (gray)








var momentTimer = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentDay = document.querySelector("#currentDay")


$(currentDay).append(momentTimer)
console.log(currentDay)