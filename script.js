const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I am sorry ";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

