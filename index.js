// const input = document.getElementById('button');
// input.addEventListener('click', function() {
//   alert('I was clicked!');
// });

function addingEventListener() {
// Select the DOM element
const buttonElement = document.getElementById('button');
// Define a callback function
function clickHandler() {
  alert('Button was clicked!');
}
// Add the event listener
buttonElement.addEventListener('click', clickHandler);
}
