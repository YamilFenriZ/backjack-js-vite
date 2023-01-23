import _ from 'underscore'

export const miNombre = 'Yhamil';

/**
 * 
 * @param {array<string>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length===0) 
        throw new Error('TiposDeCarta es obligatorio como un arreglo string');    
    
    if(!tiposEspeciales || tiposEspeciales.length===0) 
        throw new Error('TiposEspeciales es obligatorio como un arreglo string');    

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    //console.log( deck );
    return deck;
}

//export default crearDeck;