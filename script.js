
//counter with current date and timen (moment.js)
//place counter inside the jumbotron
//if statement - if .hour = currenttime, then present(background in description is red).  
//else if .hour > currenttime, then future (green).    
//else if .hour < currenttime time, then past (gray)







/////FOR THE MOMENT TIMER
var momentTimer = moment().format('MMMM Do YYYY, h:mm:ss a');

var currentDay = $("currentDay")
$("#currentDay").append(momentTimer)
console.log(momentTimer)

/////SUBMIT THE TASKS
////$(".btn").on("click", function(){
    //var shoppingItem = $("#input").val();
    //$("#list").append(`<li>${shoppingItem} <button class="purchaseButton">Purchased</button></li>`);
//})
//$("#list").on("click", ".purchaseButton", function(){
    //$(this).parent("li").css("display","none")
//})



//accept user input and store it as a variable
//add the usertext content to that variable
//append the usertext content to class/div/id

$(".saveBtn").on("click", function(){
    var descriptionOfTask = $(".description").val();
  
    var time = $(this).attr("data-time")
    console.log(descriptionOfTask);
    localStorage.setItem(time, descriptionOfTask)
    })
   



