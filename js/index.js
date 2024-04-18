console.log("My First App");

const bookmarkIcons = document.querySelectorAll("[data-js='bookmark']");

bookmarkIcons.forEach((bookmarkIcon) => {
  bookmarkIcon.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("fa-bookmark-o");
    bookmarkIcon.classList.toggle("fa-bookmark");
  });
});
// add

function toggleAnswerNew(id) {
  const parentElement = document.getElementById(id);

  const buttons = parentElement.getElementsByTagName("button");
  if (buttons.length === 1) {
    const button = buttons[0];

    if (button.textContent === "Hide Answer") {
      button.textContent = "Show Answer";
    } else {
      button.textContent = "Hide Answer";
    }
    const answer = document.getElementById(`${id}-answer`);

    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  } else {
    alert("alarm!");
  }
}

// function toggleButtonDisplay() {
// const answerButtons = document.querySelectorAll('[data-js="answer-button"]');
// answerButtons.forEach((button) => {
//   button.addEventListener("click", function () {
//     console.log("läuft auch");
//     if (button.textContent === "Hide Answer") {
//       button.textContent = "Show Answer";
//     } else {
//       button.textContent = "Hide Answer";
//     }
//   });
// });

// }
// function toggleAnswer(answer) {
//   console.log("läuft");
//   const answerDisplay = document.getElementById(answer);
//   const answerDiv = document.getElementById(answer);

//   if (answerDiv.style.display === "none" || answerDiv.style.display === "") {
//     answerDisplay.textContent = answerDiv.textContent;
//     answerDiv.style.display = "block";
//   } else {
//     answerDisplay.textContent = answerDiv.textContent;
//     answerDiv.style.display = "none";
//   }
// }
