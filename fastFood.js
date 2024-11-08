function calcularTotal(tipoBurger, jamon, queso, SalsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let PrecioBase = 0;

        switch (tipoBurger) {
        case "carne":
        PrecioBaserecioBase = 1800;
        break;
        case "pollo":
        PrecioBase = 1500;
        break;
        case "vegetariana":
        PrecioBaserecioBase = 1200;
        break;
        default:
        console.log("Tipo de hamburguesa no válido");
    }

    const adicionales = [
        { agregado: jamon, precio: 30 },
        { agregado: queso, precio: 25 },
        { agregado: SalsaTomate, precio: 5 },
        { agregado: mayonesa, precio: 5 },
        { agregado: mostaza, precio: 5 },
        { agregado: tomate, precio: 15 },
        { agregado: lechuga, precio: 10 },
        { agregado: cebolla, precio: 10 }
    ];

    let totalAdicionales = adicionales.reduce((agregar, adicional) => agregar + (adicional.agregado ? adicional.precio : 0), 0);

    return PrecioBase + totalAdicionales;
}

    function fastFood(nombre, apellido, tipoBurger, jamon, queso, SalsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {

    const precioFinal = calcularTotal(tipoBurger, jamon, queso, SalsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla);

    return "Estimado/da ${nombre} ${apellido}, el monto total a pagar es de: $${precioFinal}";
}

    let mensaje = fastFood("Sasha", "Cano", "carne", false, true, true, false, true, true, false, true);
    console.log(mensaje);  

    mensaje = fastFood("Jacqueline", "Ojeda", "pollo", false, true, true, true, false, false, false, false);
    console.log(mensaje);  

    mensaje = fastFood("Vicitacion", "Pallas", "vegetariana", false, false, true, true, true, false, true);
    
    console.log(mensaje);  