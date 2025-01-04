const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  btnEl.classList.add("loading");

  setTimeout(() => {
    btnEl.classList.remove("loading");
  }, 3000); // 3초
});
