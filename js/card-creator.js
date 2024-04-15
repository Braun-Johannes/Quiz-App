document.addEventListener("DOMContentLoaded", function () {
  const createForm = document.querySelector("[data-js='create-form']");
  const cardContainer = document.querySelector(".main-form");
  const oldQuestion = document.querySelector('[data-js="question"]');
  const oldAnswer = document.querySelector('[data-js="answer"]');
  const oldTags = document.querySelector('[data-js="tags"]');

  createForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newCard = document.createElement("form");
    newCard.classList.add("create-form");

    const newQuestion = document.createElement("textarea");
    newQuestion.name = "question";
    newQuestion.value = oldQuestion.value;
    newCard.append(newQuestion);

    const newAnswer = document.createElement("textarea");
    newAnswer.name = "answer";
    newAnswer.value = oldAnswer.value;
    newCard.append(newAnswer);

    const newTags = document.createElement("input");
    newTags.type = "text";
    newTags.name = "tags";
    newTags.value = oldTags.value;
    newCard.append(newTags);

    cardContainer.append(newCard);
  });

  const questionCounter = document.querySelector(
    '[data-js="questions-counter"]'
  );
  const answerCounter = document.querySelector('[data-js="answer-counter"]');

  oldQuestion.addEventListener("input", function () {
    const maxLengthQuestion = parseInt(oldQuestion.getAttribute("maxlength"));
    const currentLengthQuestion = oldQuestion.value.length;
    const charactersLeftQuestion = maxLengthQuestion - currentLengthQuestion;
    questionCounter.textContent = `${charactersLeftQuestion} characters left`;
  });
  oldAnswer.addEventListener("input", function () {
    const maxLengthAnswer = parseInt(oldQuestion.getAttribute("maxlength"));
    const currentLengthAnswer = oldAnswer.value.length;
    const charactersLeftAnswer = maxLengthAnswer - currentLengthAnswer;
    answerCounter.textContent = `${charactersLeftAnswer} characters left`;
  });
  //both event listeners into one
});
