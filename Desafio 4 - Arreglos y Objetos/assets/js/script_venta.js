//Arreglos

const propiedades_ventas = [
 {
  nombre: "Apartamento de lujo en zona exclusiva",
  src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
  descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
  ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
  habitaciones: 4,
  costo: 5000,
  smoke: false,
  pets: true,
 },
 {
  nombre: "Apartamento acogedor en la montaña",
  src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
  descripcion:
   "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
  ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
  habitaciones: 2,
  costo: 1200,
  smoke: true,
  pets: true,
 },
 {
  nombre: "Penthouse de lujo con terraza",
  src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
  descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
  ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
  habitaciones: 3,
  costo: 4500,
  smoke: false,
  pets: true,
 },
 {
  nombre: "Apartamento de lujo en zona privilegiada",
  src: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  descripcion:
   "Esta villa de ensueño está situada en una ubicación privilegiada, con vistas panorámicas al mar",
  ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
  habitaciones: 2,
  costo: 4000,
  smoke: false,
  pets: false,
 },
];

const prop_venta = document.querySelectorAll(".col-md-4.mb-4");
for (const [entrar, propiedad] of propiedades_ventas.entries()) {
 prop_venta[entrar].innerHTML += `
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
