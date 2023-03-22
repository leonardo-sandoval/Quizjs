//@ts-check
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";
import { questions } from "./data/question.js";

// Renderring the page
const pagina = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    console.log(quiz);
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
    ui.showChoices(quiz.getQuestionIndex().choices, (currenChoice) => {
      quiz.guess(currenChoice);
      pagina(quiz, ui);
    });
  }
};

function main() {
  const quiz = new Quiz(questions);
  const ui = new UI();

  pagina(quiz, ui);
}

main();