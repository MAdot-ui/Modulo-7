import { vi } from 'vitest';
import { comprobarPartida, dameNumeroAleatorio, dameNumeroCarta } from './motor';

describe('dameNumeroAleatorio', () => {
  it('Deberia devolver un numero dentro de 0 y 10', () => {
    const randomNumber = dameNumeroAleatorio();
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });
});

describe('dameNumeroCarta', () => {
  it('Deberia devolver un numero mas 2 si es mayor que 7', () => {
    const randomNumber = 8;
    const result = dameNumeroCarta(randomNumber);
    expect(result).toBe(10);
  });

  it('Debería devolver el número tal como está si es menor o igual a 7', () => {
    const randomNumber = 5;
    const result = dameNumeroCarta(randomNumber);
    expect(result).toBe(5);
  });
});

describe("comprobarPartida", () => {
  let puntuacion: number = 0;

  beforeEach(() => {
    puntuacion = 0;
  });

  it('Deberia decir "¡Has ganado la partida!" si puntuacion es 7.5', () => {
    // Arrange
    puntuacion = 7.5;
    const consoleSpy = vi.spyOn(console, "log");

    // Act
    comprobarPartida(puntuacion);

    // Assert
    expect(consoleSpy).toHaveBeenCalledWith("¡Has ganado la partida!");
  });

  it('Deberia decir "¡Has perdido la partida!" si puntuacion es mas que 7.5', () => {
    
    // Arrange
    puntuacion = 8;
    const consoleSpy = vi.spyOn(console, "log");

    // Act
    comprobarPartida(puntuacion);

    // Assert
    expect(consoleSpy).toHaveBeenCalledWith("¡Has perdido la partida!");
  });

  it("No deberia decir nada si puntuacion es menos que 7.5", () => {

    // Arrange
    puntuacion = 7;
    const consoleSpy = vi.spyOn(console, "log");

    // Act
    comprobarPartida(puntuacion);

    // Assert
    expect(consoleSpy).not.toHaveBeenCalled();
  });
});
