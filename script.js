const answerOptions=document.querySelector(".answer-options")

let quizCategory="programming";

//fetch a random question from based on the selected category
const getRandomQuestion=()=>{
      const categoryQuestions = questions.find(cat => cat.category .toLowerCase() === quizCategory.toLowerCase()).questions || [];

      const randomQuestion=categoryQuestions[Math.floor(Math.random()*categoryQuestions.length)];
      return randomQuestion;
}

//render the current question and its options in the quiz
const renderQuestion=()=>{
  const currentQuestion=getRandomQuestion();
  if(!currentQuestion) return;
  console.log(currentQuestion);

  //update the UI
  answerOptions.innerHTML="";
  document.querySelector(".questions-text").textContent=currentQuestion.question;

  //create option <li> elements and append them
  currentQuestion.options.forEach(option=>{
      const li=document.createElement("li");
      li.classList.add(".answer-option");
      li.textContent=option;
      answerOptions.appendChild(li);
  });
}

renderQuestion();
