const main = document.querySelector("main");

main.addEventListener("click", (e) => {
  const et = e.target;

  const active = document.querySelector(".active");

  if (active) {
    active.classList.remove("active");
  }

  et.parentNode.classList.add("active");
  console.log("clicked here =>", et);

  const infoPanels = document.querySelectorAll(".info");
  console.log("panels", infoPanels);
  infoPanels.forEach((info) => {
    const img = info.previousElementSibling;
    console.log(info);
    if (info.dataset.number === et.parentNode.dataset.number) {
      info.style.height = info.scrollHeight + "px";
      console.log("altura img", img.height);
      console.log("altura cover", img.previousElementSibling.height)
    }
    else {
      info.style.height = null;
      console.log("altura img", img.height);
      console.log("altura cover", img.previousElementSibling.height)
      //img.previousElementSibling.style.maxHeight = img.height;
    }
  });
});
