//Constante

document.querySelectorAll(".btn.btn-dark").forEach(button => {
 button.addEventListener("click", () => {
  if (button.class == ".btn btn-dark") {
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
  } else {
   const prop_venta = propiedades_ventas.filter(
    propiedades_ventas => propiedades_ventas.btn.btn - dark == button.class
   );
  }
 });
});
