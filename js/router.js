const routes = {
  "#/home": "views/home.html",
  "#/login": "views/login.html",
  "#products": "views/products.html",
  "#/profile": "views/profile.html",
  "#/register": "views/register.html",
  "#/cart": "views/cart.html"
}

export async function loadRoute(){
  const path = routes[window.location.hash] || routes["#/home"]
  const main = document.getElementById("app")

  try{
    const response = await fetch(path)
    const html = await response.text()
    main.innerHTML = html
  } catch(error){
    main.innerHTML = `<p> Error al cargar la vista </p>`
    console.log("router error", error)
  }
}


export function initRouter() {
  window.addEventListener('hashchange', loadRoute)
  loadRoute()
}
