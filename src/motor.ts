import { partida, EstadoPartida } from './model';

export const dameNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10);
};

export const dameNumeroCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }

  return numeroAleatorio;
};

export const obtenerPuntosCarta = (carta: number) => {
  if (carta > 7) {
    return 0.5;
  }

  return carta;
};

export const sumarPuntos = (puntos: number) => {
  return partida.puntuacion + puntos;
};

export const gestionarEstadoPartida = (): EstadoPartida => {
  if (partida.puntuacion === 7.5) {
    return 'ganar';
  }

  if (partida.puntuacion > 7.5) {
    return 'perder';
  }

  return 'partidaEnCurso'
}
