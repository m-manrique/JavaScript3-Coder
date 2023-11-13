let fConsulta = document.getElementById("formConsulta");

const consultarCandidatosPorEntidad = (e) => {
  e.preventDefault();

  // Obtener candidatos almacenados o inicializar si no hay ninguno
  const candidatosGuardados =
    JSON.parse(localStorage.getItem("inscritos")) || [];

  let entidad = e.target.elements.entidad.value;

  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = ""; // Limpiar contenido anterior

  if (candidatosGuardados.length > 0) {
    const tabla = document.createElement("table");
    tabla.classList.add("table");

    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
        <th>Género</th>
        <th>Entidad</th>
        <th>Partido Político</th>
      </tr>
    `;

    const tbody = document.createElement("tbody");

    // Filtrar los candidatos según la entidad seleccionada
    let candidatosFiltrados;
    switch (entidad) {
      case "Gobernación":
      case "Alcaldía":
      case "Concejo":
      case "Asamblea":
        candidatosFiltrados = candidatosGuardados.filter((candidato) => candidato.entidad === entidad);
        break;
      case "todos":
        candidatosFiltrados = candidatosGuardados;
        break;
      default:
        candidatosFiltrados = [];
    }

    if (candidatosFiltrados.length > 0) {
      candidatosFiltrados.forEach((candidato) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${candidato.nombre}</td>
          <td>${candidato.apellido}</td>
          <td>${candidato.edad}</td>
          <td>${candidato.genero}</td>
          <td>${candidato.entidad}</td>
          <td>${candidato.partidoPolitico}</td>
        `;
        tbody.appendChild(fila);
      });

      tabla.appendChild(thead);
      tabla.appendChild(tbody);
      resultadosDiv.appendChild(tabla);
    } else {
      Swal.fire({
        text: entidad ? `No hay candidatos de ${entidad}.` : "No hay candidatos disponibles.",
        icon: "error",
      });
    }
  } else {
    Swal.fire({
      text: "No hay candidatos disponibles.",
      icon: "error",
    });
  }
};

fConsulta.addEventListener("submit", consultarCandidatosPorEntidad);

fConsulta.addEventListener("submit", consultarCandidatosPorEntidad);
