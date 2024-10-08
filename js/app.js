let total = 0;
let continuar = true;
function mostrarMenu() {
    console.log("Menú de Bebidas Calientes:");
    console.log("1. Latte - $45.00");
    console.log("2. Cappuccino - $50.50");
    console.log("3. Matcha Latte- $68.50");
    console.log("4. Chocolate Mexicano - $60.55");
}
while (continuar) {
    mostrarMenu();

    let opcion = prompt("Ingresa el número de la bebida que deseas:");
    let precio = 0;
    let bebida = "";
    let cantidad = prompt("¿Cuánta cantidad deseas?");

    if (opcion == "1") {
        precio = 45.00;
        bebida = "Latte";
    } else if (opcion == "2") {
        precio = 50.50;
        bebida = "Cappuccino";
    } else if (opcion == "3") {
        precio = 68.50;
        bebida = "Matcha Latte";
    } else if (opcion == "4") {
        precio = 60.55;
        bebida = "Chocolate Mexicano";
    } else {
        console.log("Opción no válida, intenta de nuevo.");
        continue;
    }
    let subtotal = precio * parseInt(cantidad);
    console.log(`${cantidad} ${bebida} = $${subtotal.toFixed(2)}`);
    total += subtotal;
    let respuesta = prompt("¿Deseas ordenar otro bebida? (S/N)").toUpperCase();
    if (respuesta === "N") {
        continuar = false;
    }
}
console.log(`\nSu total a pagar: $${total.toFixed(2)}`);
    
    

