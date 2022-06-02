import doLossClientTime from "./doLossClientTime.js";
import config from "./config.js";

function openSurprise() {
  // Create content for trolling
  const fragment = document.createDocumentFragment();
  const h1 = document.createElement("h1");
  h1.textContent = "Never gonna give you up !";
  fragment.appendChild(h1);

  const img = document.createElement("img");
  img.src = "./public/assets/never-gonna-give-you-up-dancing.gif";
  img.alt = "Never gonna give you up";
  fragment.appendChild(img);

  const loader = document.createElement("div");
  loader.classList.add("loader");
  fragment.appendChild(loader);

  for (let index = 0; index < 4; index++) {
    const stepLoader = document.createElement("div");
    loader.appendChild(stepLoader);
  }

  const p = document.createElement("p");
  p.textContent = `Attends ${config.delayTimer / 1000} secondes soldat`;
  fragment.appendChild(p);

  doLossClientTime(config.delayTimer, config.content);

  config.audio.play();
  config.content.innerHTML = "";
  config.content.appendChild(fragment);
}

export default openSurprise;
