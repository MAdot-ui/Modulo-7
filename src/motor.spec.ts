import { vi } from 'vitest';
import { partida, EstadoPartida } from './model';
import { dameNumeroAleatorio, dameNumeroCarta, obtenerPuntosCarta, sumarPuntos, gestionarEstadoPartida } from './motor';

describe("motor", () => {
  describe('dameNumeroAleatorio', () => {
    it('debería devolver un 5, cuando el número aleatorio es un 0,5', () => {
      // Assert
      const resultadoEsperado = 5;
      vi.spyOn(Math, 'random').mockReturnValue(0.5);

      // Act
      const resultado = dameNumeroAleatorio();

      // Arrange
      expect(resultadoEsperado).toBe(resultado);
    });

    it('debería devolver un 8, cuando el número aleatorio es un 0,8', () => {
      // Assert
      const resultadoEsperado = 8;
      vi.spyOn(Math, 'random').mockReturnValue(0.8);

      // Act
      const resultado = dameNumeroAleatorio();

      // Arrange
      expect(resultadoEsperado).toBe(resultado);
    });
  });

  describe('dameNumeroCarta', () => {
    it('deberia de devolver un 10 si mi número aleatorio es un 8', () => {
      // Arrange
      const numeroAleatorio = 8;
      const resultadoEsperado = 10;

      // Act
      const resultado = dameNumeroCarta(numeroAleatorio);

      // Assert
      expect(resultadoEsperado).toBe(resultado);
    })

    it('deberia de devolver un 5 si mi número aleatorio es un 5', () => {
      // Arrange
      const numeroAleatorio = 5;
      const resultadoEsperado = 5;

      // Act
      const resultado = dameNumeroCarta(numeroAleatorio);

      // Assert
      expect(resultadoEsperado).toBe(resultado);
    })
  });

  describe('obtenerPuntosCarta', () => {
    it('deberia de devolver 0.5 si mi carta es 8', () => {
      // Arrange
      const carta = 8;
      const resultadoEsperado = 0.5;

      // Act
      const resultado = obtenerPuntosCarta(carta);

      // Assert
      expect(resultadoEsperado).toBe(resultado);
    })

    it('deberia de devolver el valor de la carta (5), si la carta es menor a 7', () => {
      // Arrange
      const carta = 5;
      const resultadoEsperado = 5;

      // Act
      const resultado = obtenerPuntosCarta(carta);

      // Assert
      expect(resultadoEsperado).toBe(resultado);
    })
  });

  describe('sumarPuntos', () => {
    it('debería devolver la suma de 5 puntos + una puntuacion acumulada de 5', () => {
      // Arrange
      const resultadoEsperado = 10;
      const puntos = 5;
      vi.spyOn(partida, 'puntuacion', 'get').mockReturnValue(5);

      // Act
      const resultado = sumarPuntos(puntos);

      // Assert
      expect(resultadoEsperado).toBe(resultado);
    })
  })

  describe('gestionarEstadoPartida', () => {
    it('debería devolver el estado partida "partidaEnCurso", cuando la puntuacion sea menor a 7.5', () => {
      // Arrange
      const resultadoEsperado: EstadoPartida = 'partidaEnCurso';
      vi.spyOn(partida, 'puntuacion', 'get').mockReturnValue(3);

      // Act
      const resultado = gestionarEstadoPartida();

      // Assert
      expect(resultadoEsperado).toBe(resultado);
    });

    it('debería devolver el estado partida "ganar", cuando la puntuacion sea igual a 7.5', () => {
      // Arrange
      const resultadoEsperado: EstadoPartida = 'ganar';
      vi.spyOn(partida, 'puntuacion', 'get').mockReturnValue(7.5);

      // Act
      const resultado = gestionarEstadoPartida();

      // Assert
      expect(resultadoEsperado).toBe(resultado);
    });

    it('debería devolver el estado mayor a 7.5', () => {
      // Arrange
      const resultadoEsperado: EstadoPartida = 'perder';
      vi.spyOn(partida, 'puntuacion', 'get').mockReturnValue(8);

      // Act
      const resultado = gestionarEstadoPartida();

      // Assert
      expect(resultadoEsperado).toBe(resultado);
    });
  })
});
