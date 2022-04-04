export default class Transaccion {
    /**
     * Constructor por parametros
     * 
     * @param {float} saldo Dinero a ingresar / gastar
     * @param {float} tokenComprados Token obtenidos de la transaccion
     * @param {string} billeteraOrigen Origen de los fondos
     * @param {string} billeteraDestino Destino de los token obtenidos
     */
    constructor(saldo, tokenComprados, billeteraOrigen, billeteraDestino) {
        this.saldo = saldo;
        this.tokenComprados = tokenComprados;
        this.billeteraOrigen = billeteraOrigen;
        this.billeteraDestino = billeteraDestino;
    }
}