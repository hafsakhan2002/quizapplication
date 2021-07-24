//.........................TIMER............//

let  min = 5;
let  mm=0
let  sec = 0;
let  second = document.getElementById('sec')
let  minute = document.getElementById('min')
let timer;

function count(){
     mm++
     if(mm==100){
         
         sec--
         mm=0
         second.innerHTML=sec
         
 
     }
 
     else if(min > 0 && sec==0){
         min--
         sec = 59
         second.innerHTML=sec
         minute.innerHTML=min
     }
     else if(min==0 && sec==0){
          result()
          clearInterval(countdown)
          sec=00
          min=00
        sec.innerHTML=sec
        minute.innerHTML=min
     }
}

timer = setInterval(count,10)

//Show Question//

window.onload = function () {
     show(count)
}


//.......................QUESTIONS..............................//


let questions = [{

     question: "What is the full form of HTML ?",
     option1: "Hyptertext Makeup Language",
     option2: "Hypertext Markup Language",
     option3: "Hypertext Marked Language",
     option4: "Hypertext My Language",
     Answer: '1'

},
{

     question: "What is the full form of ES6 ?",
     option1: "EggScript6",
     option2: "EndScript6",
     option3: "EvilScript6",
     option4: "EcmaScript6",
     Answer: '2'

},
{

     question: "What is the full form of CSS ?",
     option1: "Cascading Shape Sheets",
     option2: "Cat Style Sheets",
     option3: "Cannon Style Sheets",
     option4: "Cascading Style Sheets",
     Answer: '4'

},
{
     question: "What is the full form of E-mail ?",
     option1: "Electro-magnet-mail",
     option2: "Electron-mail",
     option3: "Electronic-Mail",
     option4: "Eye-mail",
     Answer: '4'
},
{
     question: "What is the full form of RAM ?",
     option1: "Random Access Memory",
     option2: "Random Allocation Memory",
     option3: "Random Animal Memory",
     option4: "Right Away Memory",
     Answer: '3'
},
{
     question: "What is the full form of CPU ?",
     option1: "Central Punjab Unit",
     option2: "Central Processing Unit",
     option3: "Central Property Unit",
     option4: "City Province unit",
     Answer: '1'
},
{
     question: "What is the capital of Pakistan ?",
     option1: "Karachi",
     option2: "Mumbai",
     option3: "Islamabad",
     option4: "Delhi",
     Answer: '2'
},
{
     question: "What is the full form of JS ?",
     option1: "Java Site",
     option2: "Jama Script",
     option3: "Jala Script",
     option4: "Java Script",
     Answer: '3'
},
{
     question: "How do we write a function in JS ?",
     option1: "function {}",
     option2: "function abc (){}",
     option3: "function abc{}",
     option4: "function abc()",
     Answer: '4'   
},
{
     question: "Which is a correct way to declare a varibale in JS ?",
     option1: "var = abc",
     option2: "bar abc = 22123 ",
     option3: "var abc = 0",
     option4: "bar abc = 0 ",
     Answer: '2'
},
{
     question: "Linux and Windows are Operating Systems",
     option1: "NO",
     option2: "Only Windows",
     option3: "Yes",
     option4: "Only Linux",
     Answer: '3'
}
]


var count = 0;

var score = 0;

var correctAns = 0;

let op = document.getElementsByName('option');

var questionCount=1

var qn = document.getElementById('q').innerHTML=questionCount




// ........................FUNCTIONS...................//


function check() {

     for (let i = 0; i < op.length; i++) {
          if (op[i].checked) {
               if (op[i].value == questions[count].Answer) {
                    score += 10;
                    correctAns++

                    console.log(score, questions[count].Answer);
                    op[i].checked = false
                    break

               } else if (op[i].value !== questions[count].Answer) {
                    op[i].checked = false


               }
          }
     }
}


function enableBtn() {
     var btn = document.getElementById('btn')
     btn.disabled = false
}
function disBtn() {
     var btn = document.getElementById('btn')
     btn.disabled = true
}






function nextQues() {
     if (count < questions.length - 1) {
          count++
          show(count)
          check()
          disBtn()
          questionCount++
          qn = document.getElementById('q').innerHTML=questionCount
     } else {
          disBtn()
          check()
          result()


     }
}

function show(c) {
     var quiz = document.getElementById('question').innerHTML = questions[c].question;
     var op1 = document.getElementById('op1').innerHTML = questions[c].option1;
     var op2 = document.getElementById('op2').innerHTML = questions[c].option2;
     var op3 = document.getElementById('op3').innerHTML = questions[c].option3;
     var op4 = document.getElementById('op4').innerHTML = questions[c].option4;
}


function result() {

     var card = document.getElementById('r')
     if (score > 60){
          card.className=('pass')
          card.innerHTML= `<div class="card1"> <h1> Congratulations You have passed the test and Your percentage is : ${Math.round(score/110*100)}% <br/> Total Number of Correct Answers is ${correctAns} out of 11</h1> </div>`
     }
     else if (score < 60){
          card.className=('fail')
          card.innerHTML= `<div class="card2"> <h1> Sorry you have failed the test your correct answers are less than 6! :'(<br/> Total Number of Correct Answers is ${correctAns} out of 11</h1> </div>`
     }
     
    
}