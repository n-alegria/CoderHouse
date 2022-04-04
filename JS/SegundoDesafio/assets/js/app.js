alert('Bienvenido a CriptoChange');

// Arrow functions
const cobrarComision = (pesos, comision) => { return pesos * ((100 - comision) / 100) }

// Datos del usuario
const nombreUsuario = 'Juan Carlos';
const mailUsuario = 'juan_carlos@mail.com';
const contrasenaUsuario = 'admin';

// Variables
let ingresoSaldo = 0;
let esNumero = false;
let pesosGastados = 0;
let tokenComprados = 0;

// Saldos
let pesos = 0;
let bitcoin = 0;
let ethereum = 0;
let ada = 0;

// Pedido de email y contraseña
let ingresoUsuario = prompt('Ingrese su email', 'Email...');
let ingresoContrasena = prompt('Ingrese su contraseña', 'Contraseña...');

// Login, si usuario y contraseña ingresados son igual a las constantes continua el programa
if ((mailUsuario === ingresoUsuario) && (contrasenaUsuario === ingresoContrasena)) {
    alert(`Bienvenido ${nombreUsuario}`);
    do {
        mostrarMenu();
        ingresoOpcion = prompt('Ingrese una opcion del menu', 'El menu se muestra en consola')
        switch (ingresoOpcion) {
            case '1':
                pesos += ingresarDinero();
                break;
            case '2':
                pesosGastados = solicitarImporte(pesos);
                tokenComprados = comprarToken(pesosGastados, 55000);
                bitcoin += tokenComprados;
                pesos -= pesosGastados;
                break;
            case '3':
                pesosGastados = solicitarImporte(pesos);
                tokenComprados = comprarToken(pesosGastados, 3200);
                ethereum += tokenComprados;
                pesos -= pesosGastados;
                break;
            case '4':
                pesosGastados = solicitarImporte(pesos);
                tokenComprados = comprarToken(pesosGastados, 1.1);
                ada += tokenComprados;
                pesos -= pesosGastados;
                break;
            case '5':
                mostrarBilletera(pesos, bitcoin, ethereum, ada);
                break
            case '9':
                alert('Gracias por usar nuestro simulador')
                break;
            default:
                alert('Ingreso incorrecto')
                break;
        }
    } while (ingresoOpcion != '9')
} else {
    alert('Usuario o contraseña incorrectos');
}

// Funciones

/**
 * Muestra el menu de opciones por consola
 */
function mostrarMenu() {
    console.log(`
    Menu de opciones\n
    \t1) Ingresar dinero
    \t2) Comprar BTC
    \t3) Comprar ETH
    \t4) Comprar ADA
    \t5) Mostrar billetera
    \t9) Salir`)
}

/**
 * Verifica si el valor pasado por parametro es numerico
 * 
 * @param {*} dato La variable a verificar
 * @return true si es valor numerico false caso contrario
 */
function verificarNumero(dato) {
    return Number.isFinite(dato)
}

/**
 * Imprime por pantalla los valores que se encuentran en la billetera
 * 
 * @param {float} pesos cantidad de pesos en la billetera
 * @param {float} bitcoin cantidad de bitcoin en la billetera
 * @param {float} ethereum cantidad de ethereum en la billetera
 * @param {float} ada cantidad de ada en la billetera
 */
function mostrarBilletera(pesos, bitcoin, ethereum, ada) {
    alert(`Su billetera posee:
    \t\tPesos: $${pesos}
    \t\tBitcoin: ${bitcoin}
    \t\tEthereum: ${ethereum}
    \t\tAda: ${ada}`);
}

/**
 * Solicita dinero al usuario
 * Valida que lo ingresado sea un valor numerico
 * 
 * @returns retorna la cantidad de dinero ingresado por el usuario
 */
function ingresarDinero() {
    do {
        ingresoSaldo = parseFloat(prompt('Ingrese su saldo', 'Solo se permiten numeros'))
        esNumero = verificarNumero(ingresoSaldo);
    } while (!esNumero);
    return cobrarComision(ingresoSaldo, 5);
}

/**
 * Solicita el importe al usuario
 * Verifica que sea numerico y que no sea mayor a la cantidad existente
 * 
 * @param {float} pesos Cantidad de pesos a comrpar
 * @returns La cantidad de pesos a comprar luego de verificar que sea numero y no sea mayor a la cantidad existente
 */
function solicitarImporte(pesos) {
    let valorIngresado = 0;
    let bandera = false;
    if (pesos > 0) {
        do {
            valorIngresado = parseFloat(prompt('Ingrese cuantos pesos desea gastar', 'Solo se permiten numeros'))
            esNumero = verificarNumero(valorIngresado);
            if (!esNumero) {
                alert('El valor ingresado no es correcto');
                bandera = true;
            } else if (valorIngresado > pesos) {
                alert('El monto ingresado es mayor a lo disponible');
                bandera = true;
            } else if (valorIngresado <= 0) {
                alert('No puede comprar 0');
            } else {
                bandera = false;
            }
        } while (bandera);
    } else {
        alert('No posee saldo para realizar la compra')
    }
    return valorIngresado;
}

/**
 * Realiza la compra del token
 * 
 * @param {float} pesos Importe a comprar
 * @param {float} valorToken Valor del token que se va a comprar
 * @returns El monto del token comprado
 */
function comprarToken(valorIngresado, valorToken) {
    let token = valorIngresado / valorToken;
    return token;
}