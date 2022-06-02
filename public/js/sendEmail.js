import config from "./config.js";

async function sendEmail(email) {
  if (!email || !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) return;

  const response = await fetch(
    "https://hook.eu1.make.com/e505bxi8jd2w2cyoc2znn5g91e2nhleo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  );

  if (response.status !== 200) throw "Une erreur est survenue";
  else {
    config.content.innerHTML = "";

    const fragment = document.createDocumentFragment();

    const h1 = document.createElement("h1");
    h1.textContent = "Maintenant va voir tes mail";

    const p = document.createElement("p");
    p.textContent = "À deux doigts de la surprise ✌️";

    fragment.appendChild(h1);
    fragment.appendChild(p);

    config.content.appendChild(fragment);
  }
}

export default sendEmail;
