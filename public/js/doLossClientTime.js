import config from "./config.js";
import sendEmail from "./sendEmail.js";

function doLossClientTime(delay) {
  const timer = setTimeout(() => {
    const fragment = document.createDocumentFragment();

    config.audio.pause();
    config.content.innerHTML = "";

    const h1 = document.createElement("h1");
    h1.textContent = "Il suffisait de demander 😐";

    const img = document.createElement("img");
    img.src = "./public/assets/GoodBoy.png";
    img.alt = "Good Boy";

    const p = document.createElement("p");
    p.textContent = "Allez, t'as de la chance jsuis sympa 😄";

    const thinking = document.createElement("p");
    thinking.textContent =
      "dernière étape, vu que tu m'as dit que tu ADORÉS les mails, mais j'ai peut être confondu 🤔,";

    const lastStep = document.createElement("p");
    lastStep.textContent =
      "Au cas où, on va dire que tu m'as dit ça 😁, donc met ton mail ci-dessous";

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Email";

    const submitButton = document.createElement("button");
    submitButton.textContent = "Maintenant, JE VEUX SAVOIR CE QUE C'EST";
    submitButton.addEventListener("click", () => sendEmail(emailInput.value));

    fragment.appendChild(h1);
    fragment.appendChild(img);
    fragment.appendChild(p);
    fragment.appendChild(thinking);
    fragment.appendChild(lastStep);
    fragment.appendChild(emailInput);
    fragment.appendChild(submitButton);

    config.content.appendChild(fragment);
  }, delay);

  return timer;
}

export default doLossClientTime;
