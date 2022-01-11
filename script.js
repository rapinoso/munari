const main = document.querySelector("main");

main.addEventListener("click", (e) => {
  const et = e.target;

  const active = document.querySelector(".active");

  if (active) {
    active.classList.remove("active");
  }

  et.parentNode.classList.add("active");

  const infoPanels = document.querySelectorAll(".info");
  infoPanels.forEach((info) => {
    const img = info.previousElementSibling;
    if (info.dataset.number === et.parentNode.dataset.number) {
      info.style.height = info.scrollHeight + "px";
      return
    }
      info.style.height = null;
  });
});
