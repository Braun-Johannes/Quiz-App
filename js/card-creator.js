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
});
