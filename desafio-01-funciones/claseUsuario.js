class Usuario {
  constructor(nombre = "", apellido = "", libros = [{}], mascotas = []) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascotas(mascota) {
    this.mascotas = [...this.mascotas, mascota];
  }

  countMascotas() {
    return this.mascotas.length;
  }
  addBook(misLibros) {
    this.libros = [...this.libros, ...misLibros];
  }

  getBooks() {
    const misLibros = this.libros.reduce((prev, curr) => {
      prev.push(curr.nombre);
      return prev;
    }, []);
    return misLibros;
  }
}


let usuario = new Usuario(
  "Ezequiel",
  "Barrera",
  [
    { nombre: "El señor de las moscas", autor: "William Golding" },
    { nombre: "Fundacion", autor: "Isaac Asimov" },
  ],
  ["perro", "gato"]
);

console.log(usuario);
console.log(usuario.getFullName());
console.log(usuario.addMascota("lorito"));
console.log(usuario.getMascotas());
console.log(
  usuario.addBook([
    { nombre: "El señor de los Anillos", autor: "J.R.R. Tolking" },
    { nombre: "Clean Code", autor: "Robert C. Martin" },
  ])
);
console.log(usuario.getBooks());

