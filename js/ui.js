async function loadComponent(selector, path) {
  const container = document.querySelector(selector)

  try {
    const response = await fetch(path)
    const html = await response.text()
    container.innerHTML = html
  } catch(error){
    container.innerHTML = `<p> Error al cargar la vista </p>`
    console.log('router error', error)
  }
}

export function initUI() {
  loadComponent(".app-header", "componentes/navbar.html")
  loadComponent(".app-footer", "componentes/footer.html")
}
