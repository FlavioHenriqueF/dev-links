function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const light = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    light.setAttribute("src", "./assets/avatar.png")
    light.setAttribute("alt", "Foto indisponivel")
  } else {
    light.setAttribute("src", "./assets/avatar.png")
    light.setAttribute("alt", "Foto indisponivel")
  }
}
