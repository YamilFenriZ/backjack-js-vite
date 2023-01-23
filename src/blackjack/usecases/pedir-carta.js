

/**
 * 
 * @param {Array<String>} deckCartas es un arreglo de string
 * @returns {String} retorna la carta del deck
 */
export const pedirCarta = (deckCartas) => {

    if ( !deckCartas || deckCartas.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deckCartas.pop();
    return carta;
}