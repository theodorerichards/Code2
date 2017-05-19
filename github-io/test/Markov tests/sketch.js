//var txt = "Boston Rounds Glass Bottles have a rounded shoulder design that has proven over the years to be one of the most reliable for containing almost any liquid or solid. Clear glass bottles provide a very professional display and are perfect for storing materials which are sensitive to degradation from light. Oftentimes used to store essential oils, they are also ideal for storing chemistry and laboratory chemicals, perfumes & colognes for travel and as a dispenser for medicine cabinet items. This Boston Round Bottle comes with a Black PolyCone Lined Cap."

// var names;
// var order = 3;
// var ngrams = {};
// var beginnings = [];
// var button;

// function preload() {
//   names = loadStrings('Basic.txt');
//   console.log(names);
// }

// function setup() {
//   noCanvas();
//   for (var j = 0; j < names.length; j++) {
//   var txt = names[j];
//   for (var i =0; i <= txt.length - order; i++) {
//     var gram = txt.substring(i, i +order);

//     if (i == 0) {
//       beginnings.push(gram);
//     }

//     if (!ngrams[gram]) {
//       ngrams[gram] = []; 
//     } 
//     ngrams[gram].push(txt.charAt(i+order)); 
//   }
// }
//   button = createButton("generate");
//   button.mousePressed(markovIt);
//   console.log(ngrams);
// }

// function markovIt() {

//   var currentGram = random(beginnings);
//   var result = currentGram;

//   for (var i =0; i < 20; i++) {
//   var possibilities = ngrams[currentGram];
//   if (!possibilities) {
//     break;
//   }
//   var next = random(possibilities);
//   result += next;
//   var len = result.length;
//   currentGram = result.substring(len-order, len);
// }

//   createP(result);
// }


var title, lines, markov, data1, data2, x = 60, y = 200;

function preload() {

  data1 = loadStrings('akonlyrics.txt');
  data2 = loadStrings('akonsongs.txt');
}

function setup() {

  createCanvas(500, 850);
  textFont('times', 16);
  textAlign(CENTER);

  lines = ["Click to Make Your Own Konvicted Track By Akon"];
  title = ["Click to Make Your Own Konvicted Track By Akon"];

  // create a markov model w' n=4
  markov = new RiMarkov(2);
  markov2 = new RiMarkov(2);

  // load text into the model
  markov.loadText(data1.join(' '));
  markov2.loadText(data2.join(' '));

  drawText();
  drawTitle();
}

function drawText() {

  // background(250);
  text(lines.join('\n'), x, y+50, 400, 700);
  
}

function drawTitle() {
  background(250);
  text(title.join(' '), x, y, 400, 100);
  
}

function mouseClicked() {

  x = y = 50;
  for (i=0; i<20; i++) {
  title = markov2.generateTokens(2);
  
  lines = markov.generateSentences(i);
  drawTitle();
  drawText();
}

}

