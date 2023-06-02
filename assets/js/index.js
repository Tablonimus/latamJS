const createCard = document.getElementById("createCard");
const root = document.getElementById("root");
const divContador = document.getElementById("contador");

let colorElegido = "";
let contador = 0; //

createCard.addEventListener("click", (event) => {
  let nombre = prompt("escriba su nombre");
  contador = contador + 1;

  root.innerHTML = `
  <div id=${nombre}>    
    <div id="productCard" class="nuevo" style="background-color:${colorElegido}"> 
         <button name=${nombre} id=${nombre+1}>❌</button>
         <img class="product" src="https://images.unsplash.com/photo-1607870379000-1f6d5e892aba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80">
         <p>${nombre}</p>

    </div>
  </div>
    `;

  divContador.innerHTML = contador;

  const deleteButton = document.getElementById(`${nombre}`);
  console.log(deleteButton);
  deleteButton.addEventListener("click", (event) => {
    const aEliminar = document.getElementById(`${event.target.name}`);
    aEliminar.innerHTML = "";
    contador = contador - 1;

    contador === 0
      ? (divContador.innerHTML = "")
      : (divContador.innerHTML = contador);
  });
});

const colorInput = document.getElementById("colorInput");
colorInput.addEventListener("change", (event) => {
  colorElegido = event.target.value;

  const productCard = document.getElementById("productCard");
  productCard.style.backgroundColor = event.target.value;
  const showColor = document.getElementById("showColor");

  showColor.innerHTML = colorElegido;
});
