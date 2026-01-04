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

const loveShayari = [
  "तुम्हें चाहा तो कोई गुनाह नहीं किया,\nबस दिल ने दिल से बेइंतहा मोहब्बत की।",

  "तुम साथ हो तो दुनिया हसीन लगती है,\nवरना ये ज़िंदगी भी अधूरी लगती है।",

  "मेरी हर सांस में तेरा नाम बस गया,\nअब खुद से ज्यादा तुझे चाहने लगा।",

  "इश्क़ वो नहीं जो दुनिया को दिखाया जाए,\nइश्क़ वो है जो दिल में बसाया जाए।",

  "तेरी मुस्कान मेरी पहचान बन गई,\nतेरी मोहब्बत मेरी जान बन गई।",

  "बात छोटी सी थी मगर दिल तक उतर गई,\nजब तुम मुस्कुराए, मेरी दुनिया संवर गई।"
];

const loveBox = document.getElementById("loveBox");

loveShayari.forEach((text, index) => {
  const div = document.createElement("div");
  div.className = "shayari";
  div.style.animationDelay = `${index * 0.2}s`;
  div.innerText = text;
  loveBox.appendChild(div);
});
