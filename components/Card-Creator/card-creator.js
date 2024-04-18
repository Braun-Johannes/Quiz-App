document.addEventListener("DOMContentLoaded", function () {
  const createForm = document.querySelector("[data-js='create-form']");
  const cardContainer = document.querySelector(".main-form");
  const oldQuestion = document.querySelector('[data-js="question"]');
  const oldAnswer = document.querySelector('[data-js="answer"]');
  const oldTags = document.querySelector('[data-js="tags"]');
  const oldButton = document.querySelector('[data-js="answer-button"]');

  // console.log(oldButton.textContent);

  createForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newCard = document.createElement("section");
    newCard.classList.add("question-container");

    const newQuestion = document.createElement("p");
    newQuestion.classList.add("question");
    newQuestion.name = "question"; // maybe not needed?
    newQuestion.textContent = oldQuestion.value;
    newCard.append(newQuestion);

    const newIcon = document.createElement("i");
    newIcon.classList.add("fa", "fa-bookmark");
    newIcon.setAttribute("aria-hidden", "true");
    newIcon.setAttribute("data-js", "bookmark");
    newCard.append(newIcon);

    const newButton = document.createElement("button");
    newButton.classList.add("button");
    // newButton.setAttribute("data-js", "answer-button");
    newButton.setAttribute("onclick", "toggleAnswer('answer4')"); //dynamische id ?!
    // newButton.textContent = oldButton.textContent; //maybe .value
    newCard.append(newButton);

    const newAnswer = document.createElement("p");
    newAnswer.name = "answer"; // maybe not needed?
    newAnswer.classList.add("answer");
    newAnswer.setAttribute("id", "answer4"); //dynamsche id ?!
    newAnswer.textContent = oldAnswer.value;
    newCard.append(newAnswer);

    const newList = document.createElement("ul");
    newList.classList.add("categories-container");
    newCard.append(newList);

    //practice
    // const newTag = document.createElement("li");
    // newTag.classList.add("categorie");
    // newTag.value = oldTags.value;
    // newList.append(newTag);
    //practice below
    const inputValue = oldTags.value.trim();
    const inputWords = inputValue.split(" ");

    inputWords.forEach((word) => {
      if (word !== "") {
        const newTag = document.createElement("li");
        newTag.classList.add("categorie");
        newTag.textContent = word;
        newList.append(newTag);
      }
    });

    cardContainer.append(newCard);
  });

  const textareas = [
    {
      textarea: document.querySelector('[data-js="question"]'),
      counter: document.querySelector('[data-js="questions-counter"]'),
    },
    {
      textarea: document.querySelector('[data-js="answer"]'),
      counter: document.querySelector('[data-js="answer-counter"]'),
    },
  ];

  textareas.forEach(({ textarea, counter }) => {
    textarea.addEventListener("input", function () {
      const maxLength = parseInt(textarea.getAttribute("maxlength"));
      const currentLength = textarea.value.length;
      const charactersLeft = maxLength - currentLength;
      counter.textContent = `${charactersLeft} characters left`;
    });
  });
});

// SafePoint
// const createForm = document.querySelector("[data-js='create-form']");
// const cardContainer = document.querySelector(".main-form");
// const oldQuestion = document.querySelector('[data-js="question"]');
// const oldAnswer = document.querySelector('[data-js="answer"]');
// const oldTags = document.querySelector('[data-js="tags"]');

// createForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const newCard = document.createElement("form");
//   newCard.classList.add("create-form");

//   const newQuestion = document.createElement("textarea");
//   newQuestion.name = "question";
//   newQuestion.value = oldQuestion.value;
//   newCard.append(newQuestion);

//   const newAnswer = document.createElement("textarea");
//   newAnswer.name = "answer";
//   newAnswer.value = oldAnswer.value;
//   newCard.append(newAnswer);

//   const newTags = document.createElement("input");
//   newTags.type = "text";
//   newTags.name = "tags";
//   newTags.value = oldTags.value;
//   newCard.append(newTags);

//   cardContainer.append(newCard);
// });
