function rentalCar(TipoVehiculo, DiasDeAlquiler, SillaParaBebe) {
    let CostoXdia;

    switch (TipoVehiculo) {
        case "Compacto":
            CostoXdia = 14000;
            break;
        case "Mediano":
            CostoXdia = 17000;
            break;
        case "Camioneta":
            CostoXdia = 28000;
            break;
        default:
            return "Ese vehículo no existe.";
    }

    let CostoSilla = 1200 ;
    let Total = (DiasDeAlquiler * (CostoXdia + CostoSilla));
    let mensaje = "Estimado cliente en base al tipo de vehículo ${tipoDeVehiculo} alquilado, considerando los ${diasDeAlquiler} días utilizados, el monto total a pagar es de ${Total}";
    if (SillaParaBebe) {
        mensaje += " Con la silla para niños.";
    }
    return mensaje;
}

// Pruebas
console.log(rentalCar("Compacto", 3, false));
console.log(rentalCar("Compacto", 5, true));
console.log(rentalCar("Mediano", 8, false));
console.log(rentalCar("Camioneta", 1, true));
/*
console.log(rentalCar("Compacto", 3, false));
console.log(rentalCar("Compacto", 5, true));
console.log(rentalCar("Mediano", 8, false));
console.log(rentalCar("Camioneta", 1, true));
*/