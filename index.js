var takeInput = require('readline-sync');

var score = 0;

function welcome() {
  console.log("Shaktimaan Quiz");
  var userName = takeInput.question("What's your name?\n");
  console.log("Welcome "+userName+" to Shaktimaan Quiz");
}
var questArr = [
  {
    question: 'what is the name of alter-ego of shaktimaan?\n',
    answer: 'gangadhar'
  },
  {
    question: 'Who is girlfriend of shaktimaan?\n',
    answer: 'gitaviswash'
  },
  {
    question:'Dr. Jackal is an evil scientist who works for?\n',
    answer: 'Kilvish'
  }  
];

function play(question, answer) {
  var userAnswer = takeInput.question(question);

  if(userAnswer.toUpperCase() ===  answer.toUpperCase()){
    console.log("Right!");
    score+=1;
  }else{
    console.log("Wrong!");
  }
  console.log("Current Score : ",score);
  console.log('=======================');
}

function gameStart() {
  for(var i=0; i<questArr.length;i++){
    play(questArr[i].question,questArr[i].answer);
    }
  console.log("Total Score: ",score);
}

welcome();
gameStart();