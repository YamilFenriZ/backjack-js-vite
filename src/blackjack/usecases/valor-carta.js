

/**
 * Obtener el valor de la carta
 * @param {String} carta es la carta seleccionada
 * @returns {Int} retorna el valor de la carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}