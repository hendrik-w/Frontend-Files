var tagcloud = function (){
  // Create a new SVG element inside the div#canvas
  var draw = SVG('canvas').size(window.innerWidth * 0.8, window.innerHeight * 0.8);
  // draw a dark grey rectangle with a black border
  draw.rect(window.innerWidth * 0.8, window.innerHeight * 0.8).attr({stroke: '#000', opacity: 0});
  // initialise our array of baseWords
  var baseWords = [];
  // Calculates the size of each word, except words less then 15(They have a fix size).
  function calculateWordSize( size, highestAmount ){
    var temp;
    if(size == highestAmount){
      size = 60;
    }else{
      temp = (size / highestAmount) * 250;
      if (temp < 15 && temp > 10){
        temp = 25;
      }else if(temp <= 10){
        temp = 20;
      }
      size = temp;
    }

    return size;
  }
  // Chooses one color out of four
  function randomColorChoser(){
    var color;
    var lightOrange = "#FFCCBC";
    var orange = "#FF5722";
    var yellow = "#FE9700";
    var lightBlack ="#717171";

    var min = 1;
    var max = 4;
    var x = Math.round(Math.random() * (max - min)) + min;
  //	console.log(x);
    switch (x) {
      case 1:
        color = lightOrange;
        break;
      case 2:
        color = orange;
        break;
      case 3:
        color = yellow;
        break;
      case 4:
        color = lightBlack;
        break;
    }
  return color;
  }
  // Two out of 7 words will be turned (in 'average' case) with an angle of 90.
  function randomAngleChoser(){
    var angle;
    var min = 0;
    var max = 7;
    var x = Math.round(Math.random() * (max - min)) + min;

    if(x > 5){
      angle = 90;
    }
    else{
      angle = 0;
    }
    return angle;
  }

  var element =$( "li" );
   a = [];
   b = [];

// TODO: array cleanen wenn Funktion aufgerufen wird - jhw
//		loop creates an array of the li html object's
var highestAmount;
var temp = element[0].innerHTML;
var c = temp.split(',');
highestAmount = c[1];

  for(var i = 0; i < element.length; i++){
    var wordColor = randomColorChoser();
    a.push( element[i].innerHTML );
    b = a[i].split(',');
    console.log("b1: " + b[1] + " |" + calculateWordSize(b[1], highestAmount));
    baseWords.push({
    word: b[0], // name
    size: calculateWordSize(b[1], highestAmount), // counts
    colour: wordColor,
    angle: randomAngleChoser()
  });
  }

  // get first word obj from array
  function addWord() {
    var w = baseWords.shift();
    var wordSVG = draw.group();
    var t = wordSVG.text( w.word );
    t.attr({'font-size': w.size + 'px', 'fill': w.colour });
    if (w.angle !== 0) {
      temp = t.rbox();
      t.rotate(-w.angle, temp.cx, temp.cy);
    }

    placeWord(wordSVG);
    if (baseWords.length > 0) setTimeout( addWord, 10);
  }

  var drawnBoxes = [];
  setTimeout( addWord, 10);

  function placeWord(word) {
    // get dimensions of current word
    var box = word.rbox();
    // add a slight randomness to the start position
    var x = (window.innerWidth * 0.7) / 2  + Math.random(-50, 50) - Math.floor(box.width/4);
    var y =  (window.innerHeight * 0.7) / 2  + Math.random(-50, 50) - Math.floor(box.height/4);
    // random amount to step in the spiral
    var step = Math.random(1, 10);

    var placeFound = false;
    var i = 0;
    while (! placeFound) {
      // calculate x,y on spiral
      x = x + (i / 2 * Math.cos(i));
      y = y + (i / 2 * Math.sin(i));
      // move word to new position
      word.move(x, y);
      // get the boundaries for the word
      box = word.rbox();
      box.bottom = box.y + box.height;
      box.right = box.x + box.width;

      // check if we have placed it
      placeFound = ! overlaps(box); // this will break out of the loop
      // increment i by random step amount
      i+=step;
    }
    // add to the array of placed boxes
    drawnBoxes.push(box);
  }

  function overlaps(box) {
    // get the current number of placed words
    var num = drawnBoxes.length;

  // loop through all drawn boxes
  for (var i=0; i<num; i++) {
    // check if the box touches the next box
    if (intersects(box, drawnBoxes[i])) return true;
  }
  // if we get here then it doesnt overlap anything so return false
  return false;
  }

  function intersects(box1, box2) {
    // compare positions and return false if its not good
    if (box1.bottom < box2.y) return false; // if box1 is underneath box 2
    if (box1.y > box2.bottom) return false; // if box1 is above box 2
    if (box1.right < box2.x) return false; // if box1 is to the left of box2
    if (box1.x > box2.right) return false; // if box1 is to the right of box2

    // if we get here then the boxes intersects/overlaps each other
    return true;
  }
}
