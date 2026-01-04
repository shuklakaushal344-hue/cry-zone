function addComment(){
  const user = localStorage.getItem("user");
  if(!user){
    alert("Pehle login karo");
    return;
  }

  const text = document.getElementById("commentText").value;
  if(text === "") return;

  const div = document.createElement("div");
  div.className = "comment";
  div.innerHTML = `<b>📱 ${user}</b><br>${text}`;

  document.getElementById("comments").prepend(div);
  document.getElementById("commentText").value = "";
}
