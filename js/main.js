// Obtener candidatos almacenados
let candidatosGuardados = JSON.parse(localStorage.getItem("inscritos"));

if (!candidatosGuardados) {
  const candidatos = [
    {
      nombre: "William",
      apellido: "Villamizar",
      edad: 58,
      genero: "Hombre",
      entidad: "Gobernación",
      partidoPolitico: "Conservador",
    },
    {
      nombre: "Camilo",
      apellido: "Suarez",
      edad: 41,
      genero: "Hombre",
      entidad: "Alcaldía",
      partidoPolitico: "Liberal",
    },
    {
      nombre: "Álvaro",
      apellido: "Ávila",
      edad: 54,
      genero: "Hombre",
      entidad: "Concejo",
      partidoPolitico: "La U",
    },
    {
      nombre: "Ruth Mayory",
      apellido: "Hernandez",
      edad: 35,
      genero: "Mujer",
      entidad: "Asamblea",
      partidoPolitico: "Independiente",
    },
  ];

  localStorage.setItem("inscritos", JSON.stringify(candidatos));
}