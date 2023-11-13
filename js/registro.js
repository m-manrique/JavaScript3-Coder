class Candidato {
  constructor(nombre, apellido, edad, genero, entidad, partidoPolitico) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.entidad = entidad;
    this.partidoPolitico = partidoPolitico;
  }
}

// Crear instancias de Candidato a partir de los datos del array
// Se creo con el proposito si en algun momento se require consultar especificamente las propiedades o caracteristicas de los candidatos.

const crearInstanciasCandidatos = (candidatos) =>
  candidatos.map(
    (candidato) =>
      new Candidato(
        candidato.nombre,
        candidato.apellido,
        candidato.edad,
        candidato.genero,
        candidato.entidad,
        candidato.partidoPolitico
      )
  );

let fRegistro = document.getElementById("formRegistro");

const registrarCandidato = (e) => {
  e.preventDefault();
  //traemos los inputs del formulario (HTMLCollection)
  //let inputs = e.target.children;
  let form = e.target.elements;
  let nombre = form.nombre.value;
  let apellido = form.apellido.value;
  let edad = form.edad.value;
  let genero = form.genero.value;
  let entidad = form.entidad.value;
  let partidoPolitico = form.partido.value;

  // Validar que la edad sea mayor o igual a 18
  if (parseInt(edad) < 18) {
    Swal.fire({
      title: "Edad",
      text: "El candidato debe tener al menos 18 años.",
      icon: "error",
    });
    // Restablecer el campo de entrada de edad
    form.edad.value = "";
    return; // Detener la ejecución de la función si la validación falla
  }

  const nuevoCandidato = new Candidato(
    nombre,
    apellido,
    edad,
    genero,
    entidad,
    partidoPolitico
  );

  // Agregamos el nuevo candidato al array de candidatos
  candidatosGuardados.push(nuevoCandidato);

  // Actualizamos el localStorage con el array actualizado de candidatos
  localStorage.setItem("inscritos", JSON.stringify(candidatosGuardados));

  Swal.fire({
    title: "Registro",
    text: "Candidato agregado con éxito.",
    icon: "success",
  });

  // Limpiar el formulario
  e.target.reset();
};

// Event listener para el formulario
fRegistro.addEventListener("submit", registrarCandidato);
