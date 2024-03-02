function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if(html.classList.contains('light')) {

  //     html.classList.remove('light')
  // } else {

  //     html.classList.add('light')
  // }

  // Substituir a imagem

  const img = document.querySelector("#profile img")
  // Pegar a tag da imagem

  if (html.classList.contains("light")) {
    // Se estiver em light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuro, vestindo uma jaqueta de couro, com um fundo gradiente de azul para roxo"
    )
  } else {
    // Se estiver em dark mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    )
  }
}
