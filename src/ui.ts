import {
  puntuacion,
  dameNumeroAleatorio,
  dameNumeroCarta,
  obtenerPuntosCarta,
  dameCarta,
  comprobarPartida,
  nuevaPartida,
} from "./motor";
import { dameUrlCarta } from "./model";

let referenciaAlDivPuntuacion: HTMLElement | null = null;

export const pintarUrlCarta = (urlCarta: string) => {
  const elementoImagen = document.getElementById("carta");
  if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
    elementoImagen.src = urlCarta;
  }
};

const muestraPuntuacion = () => {
  if (referenciaAlDivPuntuacion) {
    referenciaAlDivPuntuacion.innerHTML = `Puntuacion: ${puntuacion}`;
    if (puntuacion > 7.5) {
      referenciaAlDivPuntuacion.innerHTML = "Game over!";
      const botonPedirCarta = document.getElementById(
        "damecarta"
      ) as HTMLButtonElement;
      botonPedirCarta.disabled = true;
      const botonNuevaPartida = document.getElementById(
        "nuevapartida"
      ) as HTMLButtonElement;
      if (botonNuevaPartida) {
        botonNuevaPartida.style.display = "block";
      }
    }
  }
};

const mePlanto = () => {
  if (referenciaAlDivPuntuacion) {
    if (puntuacion < 4) {
      referenciaAlDivPuntuacion.innerHTML = "Has sido muy conservador";
    } else if (puntuacion == 5) {
      referenciaAlDivPuntuacion.innerHTML = "Te ha entrado el canguelo eh?";
    } else if (puntuacion >= 6 && puntuacion <= 7) {
      referenciaAlDivPuntuacion.innerHTML = "Casi casi...";
    } else if (puntuacion == 7.5) {
      referenciaAlDivPuntuacion.innerHTML = "¡Lo has clavado! ¡Enhorabuena!";
    }
  }
  const botonPedirCarta = document.getElementById(
    "damecarta"
  ) as HTMLButtonElement;
  botonPedirCarta.disabled = true;
  const botonNuevaPartida = document.getElementById(
    "nuevapartida"
  ) as HTMLButtonElement;
  if (botonNuevaPartida) {
    botonNuevaPartida.style.display = "block";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  referenciaAlDivPuntuacion = document.getElementById("puntuacion");
  muestraPuntuacion();

  const botonDameCarta = document.getElementById("damecarta");
  if (botonDameCarta) {
    botonDameCarta.addEventListener("click", () =>
      dameCarta(
        dameNumeroAleatorio,
        dameNumeroCarta,
        obtenerPuntosCarta,
        pintarUrlCarta,
        dameUrlCarta,
        muestraPuntuacion,
        comprobarPartida
      )
    );
  }

  const botonMePlanto = document.getElementById("plantarse");
  if (botonMePlanto) {
    botonMePlanto.addEventListener("click", mePlanto);
  }

  const botonNuevaPartida = document.getElementById(
    "nuevapartida"
  ) as HTMLButtonElement;
  if (botonNuevaPartida) {
    botonNuevaPartida.style.display = "none";
    botonNuevaPartida.addEventListener("click", () => {
      nuevaPartida(muestraPuntuacion, pintarUrlCarta);
      const botonPedirCarta = document.getElementById(
        "damecarta"
      ) as HTMLButtonElement;
      if (botonPedirCarta) {
        botonPedirCarta.disabled = false;
      }
      botonNuevaPartida.style.display = "none"; // Hide the "Nueva Partida" button
    });
  }
});
