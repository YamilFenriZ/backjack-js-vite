import { crearCartaHTML, pedirCarta, valorCarta } from './'

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que necesita la compu para ganar
 * @param {HTMLElement} puntosHTML elemento html para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora elemento html para mostrar el div 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck=[] ) => {

    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if(!puntosHTML) throw new Error('Puntos HTML es necesario');
    //if(!deck) throw new Error('El Deck es necesario');
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // TODO: crear carta
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            //alert('Nadie gana :(');
            swal({
                title: "Nadie gana :(",
                text: "Empate en el juego black jack!",
                icon: "warning",
                button: "Aceptar",
              });
        } else if ( puntosMinimos > 21 ) {
            //alert('Computadora gana')
            //swal("Computadora Gana");
            swal({
                title: "Computadora Gana!",
                text: "Perdiste al juego black jack!",
                icon: "error",
                button: "Aceptar",
              });
        } else if( puntosComputadora > 21 ) {
            //alert('Jugador Gana');
            swal({
                title: "Jugador Gana!",
                text: "Ganaste al juego black jack!",
                icon: "success",
                button: "Aceptar",
              });
        } else {
            //alert('Computadora Gana')
            //swal("Computadora Gana");
            swal({
                title: "Computadora Gana!",
                text: "Perdiste al juego black jack!",
                icon: "error",
                button: "Aceptar",
              });
        }
    }, 100 );
}