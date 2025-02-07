//export let puntuacion = 0;

export type EstadoPartida = 'ganar' | 'perder' | 'partidaEnCurso';

interface Partida {
  puntuacion: number;
  estadoPartida: EstadoPartida;
}

export const partida: Partida = {
  puntuacion: 0,
  estadoPartida: 'partidaEnCurso',
}

export const actualizarPuntuacion = (puntosActuales: number) => {
  partida.puntuacion = puntosActuales;
};
