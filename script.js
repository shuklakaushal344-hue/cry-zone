const shayaris = document.querySelectorAll(".shayari");

window.addEventListener("load", () => {
  shayaris.forEach((box, index) => {
    setTimeout(() => {
      box.classList.add("show");
    }, index * 200);
  });
});

const motivationShayari = [
  "हार मत मानो, ये वक्त भी गुजर जाएगा,\nजो आज मुश्किल है, कल आसान बन जाएगा।",

  "खुद पर भरोसा रखो साहब,\nक्योंकि जो खुद पर जीत गया, वो सब जीत गया।",

  "मंज़िल उन्हीं को मिलती है,\nजिनके सपनों में जान होती है।",

  "रुकना मत, थकना मत,\nक्योंकि जीत एक दिन जरूर मिलेगी।",

  "अकेले चलने का साहस रखो,\nभीड़ तो हर कमजोर के साथ होती है।"
];

const shayariBox = document.getElementById("shayariBox");

motivationShayari.forEach((text, index) => {
  const div = document.createElement("div");
  div.className = "shayari";
  div.style.animationDelay = `${index * 0.2}s`;
  div.innerText = text;
  shayariBox.appendChild(div);
});
