const createCard = document.getElementById("createCard");
const root = document.getElementById("root");
const divContador = document.getElementById("contador");

let colorElegido = "";
let contador = 0;

createCard.addEventListener("click", (event) => {
  let nombre = prompt("Escriba su nombre");
  contador = contador + 1;

  const cardId = `card-${contador}`;

  const card = document.createElement("div");
  card.id = cardId;
  card.innerHTML = `
    <div class="productCard nuevo" style="background-color:${colorElegido}">
      <button name="${cardId}" class="deleteButton">❌</button>
      <img class="product" src="https://images.unsplash.com/photo-1607870379000-1f6d5e892aba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80">
      <p>${nombre}</p>
    </div>
  `;

  root.appendChild(card);

  divContador.innerHTML = contador;

  const deleteButton = document.querySelector(`#${cardId} .deleteButton`);
  deleteButton.addEventListener("click", (event) => {
    const card = event.target.closest(".productCard");
    card.parentNode.removeChild(card);
    contador = contador - 1;

    contador === 0
      ? (divContador.innerHTML = "")
      : (divContador.innerHTML = contador);
  });
});

const colorInput = document.getElementById("colorInput");
colorInput.addEventListener("change", (event) => {
  colorElegido = event.target.value;

  const productCards = document.getElementsByClassName("productCard");
  for (let i = 0; i < productCards.length; i++) {
    productCards[i].style.backgroundColor = colorElegido;
  }

  const showColor = document.getElementById("showColor");
  showColor.innerHTML = colorElegido;
});
