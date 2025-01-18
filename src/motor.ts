export let puntuacion = 0;

export const dameNumeroAleatorio = () => Math.floor(Math.random() * 10);

export const dameNumeroCarta = (numeroAleatorio: number) => {
  return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
};

export const obtenerPuntosCarta = (carta: number) => (carta > 7 ? 0.5 : carta);

export const dameCarta = (
  dameNumeroAleatorio: () => number,
  dameNumeroCarta: (numeroAleatorio: number) => number,
  obtenerPuntosCarta: (carta: number) => number,
  pintarUrlCarta: (urlCarta: string) => void,
  dameUrlCarta: (carta: number) => string,
  muestraPuntuacion: () => void,
  comprobarPartida: () => void
) => {
  const numeroAleatorio = dameNumeroAleatorio();
  const carta = dameNumeroCarta(numeroAleatorio);
  const urlCarta = dameUrlCarta(carta);
  if (
    urlCarta !==
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
  ) {
    pintarUrlCarta(urlCarta);
    const puntosCarta = obtenerPuntosCarta(carta);
    puntuacion += puntosCarta;
    muestraPuntuacion();
    comprobarPartida();
  } else {
    // If the card is the default "back" card, draw again
    dameCarta(
      dameNumeroAleatorio,
      dameNumeroCarta,
      obtenerPuntosCarta,
      pintarUrlCarta,
      dameUrlCarta,
      muestraPuntuacion,
      comprobarPartida
    );
  }
};


//Checks if user won the round or not 
export const comprobarPartida = (puntuacion: number) => {
  if (puntuacion === 7.5) {
    console.log("¡Has ganado la partida!");
  } else if (puntuacion > 7.5) {
    console.log("¡Has perdido la partida!");
  }
};


export const nuevaPartida = (
  muestraPuntuacion: () => void,
  pintarUrlCarta: (urlCarta: string) => void
) => {
  puntuacion = 0;
  muestraPuntuacion();
  pintarUrlCarta(
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
  );
};
