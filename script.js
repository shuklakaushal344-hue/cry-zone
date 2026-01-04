const shayaris = document.querySelectorAll(".shayari");

window.addEventListener("load", () => {
  shayaris.forEach((box, index) => {
    setTimeout(() => {
      box.classList.add("show");
    }, index * 200);
  });
});
