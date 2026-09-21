function calcularPrecioFinal(precio, descuento) {
  const precioFinal = precio - descuento;
  return precioFinal;
}

const resultado = calcularPrecioFinal(100, 20);

console.log(`Precio final: S/ ${resultado}`);
