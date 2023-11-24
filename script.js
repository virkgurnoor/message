const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

yesBtn.addEventListener("mouseover", () => {
  const noBtnRect = yesBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  yesBtn.style.left = randomX + "px";
  yesBtn.style.top = randomY + "px";
});
