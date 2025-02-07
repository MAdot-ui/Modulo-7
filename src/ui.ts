import { partida, actualizarPuntuacion } from "./model";
import {
  dameNumeroAleatorio,
  dameNumeroCarta,
  obtenerPuntosCarta,
  sumarPuntos,
  gestionarEstadoPartida,
} from "./motor";

const dameUrlCarta = (carta: number) => {
  switch (carta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};

const pintarUrlCarta = (urlCarta: string) => {
  const elementoImagen = document.getElementById("carta");

  if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
    elementoImagen.src = urlCarta;
  }
};

const muestraPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("puntuacion");

  if (elementoPuntuacion && elementoPuntuacion instanceof HTMLDivElement) {
    elementoPuntuacion.textContent = `Puntuacion : ${partida.puntuacion}`;
  }
};

const bloquearBotonDameCarta = (estaBloqueado: boolean) => {
  const botonDameCarta = document.getElementById("damecarta");

  if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.disabled = estaBloqueado;
  }
};

const bloquearBotonMeplanto = (estaBloqueado: boolean) => {
  const botonPlantarse = document.getElementById("plantarse");

  if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.disabled = estaBloqueado;
  }
};

const mostrarMensaje = (mensaje: string) => {
  const elementoParrafo = document.getElementById("mensaje");

  if (elementoParrafo && elementoParrafo instanceof HTMLParagraphElement) {
    elementoParrafo.textContent = mensaje;
  }
};

const dameMensajeCuandoMePlanto = () => {
  if (partida.puntuacion < 4 && partida.puntuacion < 5) {
    return "Has sido muy conservador";
  } else if (partida.puntuacion === 5 && partida.puntuacion < 6) {
    return "Te ha entrado el canguelo eh?";
  } else if (partida.puntuacion === 6 || partida.puntuacion === 7) {
    return "Casi casi...";
  } else if (partida.puntuacion === 7.5) {
    return "¡ Lo has clavado! ¡Enhorabuena!";
  }

  return "has perdido";
};

const bloquearBotonQueHubieraPasado = (estaBloqueado: boolean) => {
  const botonQueHubieraPasado = document.getElementById("queHubieraPasado");

  if (
    botonQueHubieraPasado &&
    botonQueHubieraPasado instanceof HTMLButtonElement
  ) {
    botonQueHubieraPasado.disabled = estaBloqueado;
  }
};

const dameCarta = () => {
  const numeroAleatorio = dameNumeroAleatorio();
  const carta = dameNumeroCarta(numeroAleatorio);
  console.log(carta);
  const urlCarta = dameUrlCarta(carta);
  pintarUrlCarta(urlCarta);
  const puntosCarta = obtenerPuntosCarta(carta);
  const puntosSumados = sumarPuntos(puntosCarta);
  actualizarPuntuacion(puntosSumados);
  muestraPuntuacion();
  comprobarPartida();
};

const comprobarPartida = () => {
  if (gestionarEstadoPartida() === "ganar") {
    ganar();
  }

  if (gestionarEstadoPartida() === "perder") {
    perder();
  }
};

const ganar = () => {
  mostrarMensaje("he ganado la partida");
  bloquearBotonDameCarta(true);
  bloquearBotonMeplanto(true);
  bloquearBotonQueHubieraPasado(true);
};

const perder = () => {
  mostrarMensaje("he perdido la partida");
  bloquearBotonDameCarta(true);
  bloquearBotonMeplanto(true);
  bloquearBotonQueHubieraPasado(true);
};

const mePlanto = () => {
  const mensaje = dameMensajeCuandoMePlanto();
  mostrarMensaje(mensaje);
  bloquearBotonDameCarta(true);
  bloquearBotonMeplanto(true);
};

const nuevaPartida = () => {
  actualizarPuntuacion(0);
  muestraPuntuacion();
  pintarUrlCarta(
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
  );
  bloquearBotonDameCarta(false);
  bloquearBotonMeplanto(false);
  bloquearBotonQueHubieraPasado(false);
  mostrarMensaje("");
};

const queHubieraPasado = () => {
  const numeroAleatorio = dameNumeroAleatorio();
  const carta = dameNumeroCarta(numeroAleatorio);
  const urlCarta = dameUrlCarta(carta);
  pintarUrlCarta(urlCarta);
  const puntosCarta = obtenerPuntosCarta(carta);
  const puntosSumados = sumarPuntos(puntosCarta);
  actualizarPuntuacion(puntosSumados);
  muestraPuntuacion();
  comprobarPartida();
  bloquearBotonQueHubieraPasado(true);
};

export const cargarPartida = () => {
  muestraPuntuacion();
  const botonDameCarta = document.getElementById("damecarta");
  if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.addEventListener("click", dameCarta);
  }

  const botonMePlanto = document.getElementById("plantarse");
  if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.addEventListener("click", mePlanto);
  }

  const botonNuevaPartida = document.getElementById("nuevapartida");

  if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
    botonNuevaPartida.addEventListener("click", () => {
      nuevaPartida();
    });
  }

  const botonQueHubieraPasado = document.getElementById("queHubieraPasado");

  if (
    botonQueHubieraPasado &&
    botonQueHubieraPasado instanceof HTMLButtonElement
  ) {
    botonQueHubieraPasado.addEventListener("click", () => {
      queHubieraPasado();
    });
  }
};
