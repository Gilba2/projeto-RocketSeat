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
      "Foto de Mayk Brito sorrindo, usando óculos escuro e blusa preta e fundo degradê com a cor rosa à esquerda e azul à direita"
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
