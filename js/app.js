
const persona1 = new Perfil("Agostina", "Garcia", "01/10/1993", "ag@email.com", "ag1234", "");

console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.nacimiento);
console.log(persona1.email);
console.log(persona1.password);

persona1.validar();

const categoria1 = []

categoria1.push(new Pelotas(1, babolat, 3, 150));
categoria1.push(new Pelotas(2, babolat, 6, 250));
categoria1.push(new Pelotas(3, wilson, 3, 180));
categoria1.push(new Pelotas(4, dunlop, 3, 200));

const categoria2 = []

categoria2.push(new Raquetas(1, babolat, 17.5, 3450));
categoria2.push(new Raquetas(2, babolat, 21, 4330));
categoria2.push(new Raquetas(3, wilson, 27, 7200));
categoria2.push(new Raquetas(4, price, 25, 7800));
categoria2.push(new Raquetas(5, wilson, 23.5, 6450));
