//moment.js day formatting
const currentDay = moment().format('dddd, MMMM Do');
$('#currentDay').text(currentDay);

// const currentHour = 13;
const currentHour = parseInt(moment().format("H"));
// $('#currentHour').text(currentHour);

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

let taskID;
let localData;
let keys =  Object.keys(localStorage);
let values = Object.values(localStorage);

let saveText = $('.saveText');


//checks every slot whether they are present, past or future
// for (let i = 0; i < timeList.length; i++) {
//   if (timeList[i] === currentHour) {
//    arraySlots[i].addClass("present");
//   } else if (timeList[i] < currentHour) {
//    arraySlots[i].addClass("past");
//   } else if (timeList[i] > currentHour) {
//     arraySlots[i].addClass("future");
//   } 
// }

//checks every slot whether they are present, past or future
$.each(timeList, function(i){
  if (timeList[i] === currentHour) {
    arraySlots[i].addClass("present");
   } else if (timeList[i] < currentHour) {
    arraySlots[i].addClass("past");
   } else if (timeList[i] > currentHour) {
     arraySlots[i].addClass("future");
   }

});


$(document).on( "click",".saveBtn", function(event) {
  console.log(this);
   // let targetedEvent = event.target;
    let targetedEvent = this;
    let taskInput = this.previousElementSibling.value;
    taskID = this.previousElementSibling.id;
    localData = localStorage.setItem(taskID, taskInput);
    saveText.removeClass('hide');

});

//prints localstorage to time blocks
for (let i = 0; i < localStorage.length; i++) {
  let keysEl = $('#' + keys[i]);
  let task = keysEl.val(values[i]);
}















