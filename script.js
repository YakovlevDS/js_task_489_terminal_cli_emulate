// set var and return input value
function getInput() {
  command = commandInput.value;
  return command;
}

// construct the html+text of the input command
function attachCommand() {
  // the command you entered
  var li = document.createElement('li');
  li.textContent = getInput();
  
  // the path
  var span = document.createElement('span');
  span.className = 'path';
  span.textContent = path;
  
  // attach path before command
  li.insertBefore(span,li.firstChild);
  
  // and attach to window
  result.appendChild(li);
}

// construct the html+text of the response
function returnResponse() {
  var li = document.createElement('li');
  
  // plain command vs starting with sudo
  var answer = (getInput().indexOf('sudo') === 0) ? 'Nice try. No.' : 'I would prefer not to.';
  li.textContent = answer;
  
  // and attach to window
  result.appendChild(li);
}

// set input to last command on up key (see event listener below)
function repeatInput() {
  commandInput.value = command;
}

// scroll to bottom...
function scrollToBottom() {
  result.scrollTop = result.scrollHeight;
}

// run all functions on enter (see event listener below)
function doTheThing() {
  if(getInput().trim() !== '') { // trim whitespace and check if empty
    attachCommand();
    returnResponse();
    scrollToBottom();
  }
  
  commandInput.value = ''; // clear input value 
}

// var hoisting transports this to the top
var commandInput = document.getElementById('command-input'),
    result = document.querySelector('.result'),
    command = '',
    path = 'c:\\scrivener\\bartleby\\> ';

// whenever you press a key
commandInput.addEventListener('keydown',function(e){
  if(e.keyCode === 13) doTheThing(); // enter key
  if(e.keyCode === 38) repeatInput(); // up key
});