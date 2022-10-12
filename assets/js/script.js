//moment.js day formatting
const currentDay = moment().format('dddd, MMMM Do');
$('#currentDay').text(currentDay);

 const currentHour = 15;
//const currentHour = parseInt(moment().format("H"));
$('#currentHour').text(currentHour);

//pulling ID elements from HTML
let slot9 = $('#9');
let slot10 = $('#10');
let slot11 = $('#11');
let slot12 = $('#12');
let slot13 = $('#13');
let slot14 = $('#14');
let slot15 = $('#15');
let slot16 = $('#16');
let slot17 = $('#17');

//array of slots
let arraySlots = [slot9, slot10, slot11, slot12, slot13, slot14, slot15, slot16, slot17];

//array to use in the for loop and if statements
const timeList = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//checks every slot whether they are present, past or future
for (let i = 0; i < timeList.length; i++) {
        
        if (timeList[i] === currentHour) {
            arraySlots[i].addClass("present");
          } else if (timeList[i] < currentHour) {
            arraySlots[i].addClass("past");
          } else if (timeList[i] > currentHour) {
            arraySlots[i].addClass("future");
          }
    
}

$(".saveBtn").on( "click", function(event) {
    let targetedEvent = event.target;
    taskInput = targetedEvent.previousElementSibling.value;
    localStorage.setItem('task', taskInput); 
    
 });


















