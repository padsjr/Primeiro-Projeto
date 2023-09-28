function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") 
 

   const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
   img.setAttribute("src","./assets/avatar-light.png")

  } else {
    img.setAttribute("src","./assets/avatar.png")
  }
/* Esse exercicio de trocar a mensagem de fundo n consegui fazer
  const img = document.querySelector("#profile img")

if (html.classList.contains("light")) {
  img.setAttribute("alt", "mayklaranja")
} else {
  img.setAttribute("alt", "mayikazul")
}
*/
}