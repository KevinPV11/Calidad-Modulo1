function calcularPrecioFinal(precio, descuento) {
  const montoDescuento = precio * (descuento / 100);
  const precioFinal = precio - montoDescuento;
  return precioFinal;
}

const resultado = calcularPrecioFinal(200, 20);

console.log(`Precio final: S/ ${resultado}`);
