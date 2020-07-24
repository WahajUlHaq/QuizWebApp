

let questions = [
    {
      id: 1,
      question: "What is the full form of RAM ?",
      answer: "Random Access Memory",
      options: [
        "Random Access Memory",
        "Randomely Access Memory",
        "Run Aceapt Memory",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "What is the full form of CPU ?",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 3,
      question: "What is the full form of E-mail ?",
      answer: "Electronic Mail",
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
      ]
    },
    {
        id: 4,
        question: "Which device help us to Print Document ?",
        answer: "Printer",
        options: [
          "Printing Software",
          "Engine Mail",
          "Printer",
          "None of these"
        ]
      },
      {
        id: 5,
        question: "What is the full form of OTP ?",
        answer: "One Time Passcode",
        options: [
          "One Time Password",
          "One Three Passcode",
          "One Time Passcode",
          "None of these"
        ]
      },
      {
        id: 6,
        question: "Which disk provide us more SPEED in working ?",
        answer: "SSD",
        options: [
          "HDD",
          "SSD",
          "Both A and B",
          "None of these"
        ]
      },
      {
        id: 7,
        question: "What is full form of HTML ?",
        answer: "Hyper Text Markup Link",
        options: [
          "Hyper Text Markup Link",
          "Hyper Text Markup Language",
          "Both A and B",
          "None of these"
        ]
      },
      {
        id: 8,
        question: "What is full form of PTCL ?",
        answer: "Pakistan Telecomunication Limited",
        options: [
          "Pakistan Telecom Limited",
          "Pakistan Telecomunication",
          "Pakistan Transport Limited",
          "Pakistan Telecomunication Limited"
        ]
      },
      {
        id: 9,
        question: "Which is good ?",
        answer: "LED",
        options: [
          "LED",
          "OLED",
          "LCD",
          "None of these"
        ]
      },
      {
        id: 10,
        question: "Why script tag is used and where ?",
        answer: "To Write JAVA SCRIPT and it is used inside or at the end of body",
        options: [
          "To write Css and it is used in HTML inside head ",
          "To write PHP and it is used in HTML inside head",
          "To Write JAVA SCRIPT and it is used inside or at the end of body",
          "None of these"
        ]
      },
  ];


function submitForm(e) {

    e.preventDefault();

    let name = document.forms["welcome_form"]["name"].value;


    // storing value in local Storage

    sessionStorage.setItem("name", name);

    location.href = "quiz.html"

    // console.log(name);



}


let questions_count = 0;
let point = 0;

window.onload = function () {
    show(questions_count);
}


function next() {
    
    let user_answer = document.querySelector("li.option.active").innerHTML;
    

    if (user_answer == questions[questions_count].answer) {
        point += 10;

sessionStorage.setItem("point", point)
  
    }


  if (questions_count == questions.length-1){

location.href="end.html";
return;

  }


  questions_count++;
  show(questions_count);
   
}







function show(count) {

    let question = document.getElementById('questions');
    // question.innerHTML = "<h2>"+ questions[count].question +"</h2>";
    question.innerHTML = `
 <h2>Q${questions_count+1}. ${questions[count].question} </h2>

<ul class="option_group">

<li class="option">${questions[count].options[0]}</li>
<li class="option">${questions[count].options[1]}</li>
<li class="option">${questions[count].options[2]}</li>
<li class="option">${questions[count].options[3]}</li>


</ul>
`;

    toogleActive();

}



function toogleActive() {

    let option = document.querySelectorAll('li.option');

    for (let i = 0; i < option.length; i++) {

        option[i].onclick = function () {

            for (let j = 0; j < option.length; j++) {

                if (option[j].classList.contains("active")) {

                    option[j].classList.remove("active");

                }

            }

            option[i].classList.add("active");



        }



    }


}

let user = sessionStorage.getItem("name");




document.querySelector(".un").innerHTML = user;




function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    show(0);
};


