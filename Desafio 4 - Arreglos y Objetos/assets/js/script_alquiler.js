//Arreglos

const propiedades_alquiler = [
 {
  nombre: "Apartamento en el centro de la ciudad",
  src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
  descripcion:
   "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
  ubicacion: "123 Main Street, Anytown, CA 91234",
  habitaciones: 2,
  costo: 2000,
  smoke: false,
  pets: true,
 },
 {
  nombre: "Apartamento luminoso con vista al mar",
  src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar.",
  ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
  habitaciones: 3,
  costo: 3500,
  smoke: false,
  pets: true,
 },
 {
  nombre: "Apartamento de lujo en la ciudad",
  src: "https://images.unsplash.com/photo-1582883545851-725a3b9502ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  descripcion:
   "Este impresionante apartamento ofrece vistas gran seguridad y comodidades de primera clase.",
  ubicacion: "123 Main Street, Anytown, CA 91234",
  habitaciones: 3,
  costo: 3000,
  smoke: false,
  pets: false,
 },
 {
  nombre: "Condominio moderno en zona residencial",
  src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
  descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
  ubicacion: "123 Main Street, Anytown, CA 91234",
  habitaciones: 2,
  costo: 2200,
  smoke: false,
  pets: true,
 },
];

const prop_alquiler = document.querySelectorAll(".col-md-4.mb-4");
for (const [entrar, propiedad] of propiedades_alquiler.entries()) {
 prop_alquiler[entrar].innerHTML += `
<div class="card">
<img src="${propiedad.src}">

<div class="card-body">
<h5> ${propiedad.nombre}</h5>
<p> ${propiedad.descripcion}</p>
<p> ${propiedad.nombre}</p>
<p> <i class="fas fa-bed"></i> ${propiedad.habitaciones} </p>
<p> <i class="fas fa-dollar-sign"></i>${propiedad.costo} </p>
${
    propiedad.smoke === true 
    ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' 
    : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
}
${
    propiedad.pets === true 
    ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' 
    : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'
}
</div>

</div>
`;
}