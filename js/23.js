// switch

const metodoPago='efectivo';

switch(metodoPago){
    case 'tarjeta':
        console.log("pagaste con tarjeta");
        break;
    case 'cheque':
        console.log("el usuario va a pagar con cheque");
    break;
    case 'efectivo':
        console.log("pagaste con efectivo");
    break;
    default:
        console.log('Aun no has pagado');
        break;
}