document.addEventListener('DOMContentLoaded', () => {
  let contenedor = document.querySelector('.contenedor')
  const cartas = document.querySelectorAll('.carta')
  const cartita = document.getElementById('cartita')
  const puntaje = document.getElementById('puntaje')
  let puntos = 1
  cartasArray = [
    'html.png',
    'css.png',
    'angular.png',
    'javascript.png',
    'node.png',
    'react.png',
    'typescript.png',
    'vue.png',
    'html.png',
    'css.png',
    'angular.png',
    'javascript.png',
    'node.png',
    'react.png',
    'typescript.png',
    'vue.png',
  ]
  cartasArray.sort(() => Math.random() - 0.5)
  //creamos un array para asignarles los src de las cartas presionadas
  let nombreCartas = []
  //creamos un array para asignarles los IDs de las cartas presionadas
  let cartasPresionadas = []
  for (let i = 0; i < cartas.length; i++) {
    //asignamos un ID a cada carta
    cartas[i].setAttribute('id', `${i}`)
    //cuando clickeamos una carta accionamos el evento
    cartas[i].addEventListener('click', (e) => {
      //le cambiamos la foto de fondo asignandole el src de la lista anterior
      cartas[i].src = cartasArray[i]
      //comprobamos que el largo del array sea menos a 2
      if (cartasPresionadas.length <= 2) {
        //agregamos el ID de la carta presionada al array
        cartasPresionadas.push(cartas[i].id)
      }
      if (nombreCartas.length <= 2) {
        //agregamos el SRC de la carta presionada al array
        nombreCartas.push(cartas[i].src)
        //agregamos el ID de la carta presionada al array
      }
      //si ya hay dos cartas en el array entramos en este IF
      if (nombreCartas.length == 2) {
        //comporobamos que los SRC de ambaas son IGUALES
        if (nombreCartas[0] == nombreCartas[1]) {
          //si es positivo lo alertamos
          setTimeout(() => {
            puntaje.innerHTML = puntos++
            console.log(puntaje.innerHTML)
            if (puntaje.innerHTML == 8) {
              Swal.fire({
                title: '¡Felicidades Ganaste!',
                text: 'Aprete el boton para volver a jugar',
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Jugar de nuevo',
              }).then((result) => {
                location.reload()
              })
            }
          }, 200)
          cartasPresionadas = []
        } else {
          setTimeout(() => {
            document.getElementById(cartasPresionadas[0]).src = 'reverse.png'
            document.getElementById(cartasPresionadas[1]).src = 'reverse.png'

            if (cartasPresionadas.length == 2) {
              cartasPresionadas = []
            }
          }, 1000)
        }
        nombreCartas = []
      }
    })
  }
})
