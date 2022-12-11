// Crea un programa que compruebe que el trineo de Santa Claus hace una parabola al saltar entre ciudades. Recibes un array de números que representan la altura en la que se encuentra el trineo en cada momento.

// Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, llegar al punto más alto y descender hasta el final. No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando. Veamos unos ejemplos:

// const heights = [1, 3, 8, 5, 2]
// checkJump(heights) // true

// /*
// Es `true`.
// El salto va de abajo a arriba y luego de arriba a abajo:

//     8 (punto más alto)
//    ↗ ↘
//   3   5
//  ↗     ↘
// 1       2
// */

// const heights = [1, 7, 3, 5]
// checkJump(heights) // false

// /*
// Es `false`.
// Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

//   7   5 
//  ↗ ↘ ↗
// 1   3
// Necesitamos que el programa devuelva un boolean que indique si el trineo hace una parabola o no.

// A tener en cuenta
// Para que el salto sea válido tiene que subir una vez y bajar una vez. Si durante el salto se queda en la misma altura entre dos posiciones, la parabola continua.
// No hace falta que el punto de inicio y final sean el mismo (las ciudades pueden estar a diferentes alturas).
enum Status {
  Initial = 'initial',
  Up = 'up',
  Down = 'down',
}

type validationType = {
  status: Status
  up: number
  down: number
}

export function checkJump(heights: number[]): boolean {
  const validation: validationType = {
    status: Status.Initial,
    up: 0,
    down: 0
  }

  heights.reduce((a, c, i) => {
    if (i === 0 || a === c) {
      return c
    }
    if (a < c) {
      if (validation.status != Status.Up) {
        validation.up += 1
        validation.status = Status.Up
      }
      return c
    }

    if (a > c) {
      if (validation.status != Status.Down) {
        validation.down += 1
        validation.status = Status.Down
      }
      return c
    }

    return c
  }, 0)


  return (validation.up === 1 && validation.down === 1) ? true : false
}