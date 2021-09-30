const getById = (id) => {
  return document.getElementById(id);
};

const enviar = document.getElementById("enviar");
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const observaciones = document.getElementById("obervaciones");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let errors = [];
  if (nombre.value == "") {
    errors.push("nombre ");
  }

  if (apellido.value == "") {
    errors.push("apellido ");
  }
  if (telefono.value == "" && isNaN(telefono.value)) {
    errors.push("telefono ");
  }
  if (direccion.value == "") {
    errors.push("direccion ");
  }
  if (errors.length > 0) {
    openDialog(errors, 400);
    setTimeout(closeDialog, 2000);
  } else {
    openDialog(null, 200);
    setTimeout(closeDialog, 2000);
  }

  nombre.value = "";
  apellido.value = "";
  telefono.value = "";
  direccion.value = "";
});

const openDialog = (data, width) => {
  const fatherDiv = document.createElement("div");
  fatherDiv.className = "modalFather";
  fatherDiv.id = "modalFather";

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "modal";
  modal.style.width = width + "px";

  modal.innerHTML = buildModal(data);

  document.body.appendChild(fatherDiv);
  fatherDiv.appendChild(modal);
};

const closeDialog = () => {
  const fatherDiv = document.getElementById("modalFather");
  document.body.removeChild(fatherDiv);
};

const buildModal = (data) => {
  if (data) {
    return `
            <h1> Campos requeridos : ${data} </h1>
        `;
  }
  return `
        <h1>Datos enviados</h1>
    `;
};
