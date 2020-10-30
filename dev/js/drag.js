import './../../node_modules/draggable/dist/draggable.min.js'

var Draggable = require ('Draggable');
var element = document.getElementById('drag');
var handle = document.getElementById('drag__handle');
var options = {
    handle: drag__handle,
  };

new Draggable (element, options);