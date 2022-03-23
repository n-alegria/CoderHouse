let numero = parseInt(prompt("Ingrese un numero"))

if (isNaN(numero)) {
    alert("Ingreso incorrecto, debe ingresar numero.")
} else {
    console.log(`Tabla del ${numero}\n`)
    for (let i = 1; i < 11; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`)
    }
}