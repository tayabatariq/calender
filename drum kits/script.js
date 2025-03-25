const kits =["crash","kick","snare","tom"];

const contaEl = document.querySelector(".container")




kits.forEach((kit) => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = "url(images/" + kit + ".png"

    contaEl.appendChild(btnEl);
    const audioEl = document.createElement("audio")
  audioEl.src = "sounds/" + kit +".mp3";

  contaEl.appendChild(audioEl);
btnEl.addEventListener("click" , ()=> {
    audioEl.play();
})

})