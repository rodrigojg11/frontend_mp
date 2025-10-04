const form = document.getElementById('form')

fetch("http://127.0.0.1:3000/api/v1/categories")
  .then(response => response.json())
  .then((categories) => {
    categories.data.forEach(category => {
      const option = document.createElement("option")
      const categories = document.getElementById('categories')
      const categoryId = (category.attributes.id)
      const categoryName = (category.attributes.name)

      option.value = categoryId
      option.textContent = categoryName

      categories.appendChild(option)
    });
  })

form.addEventListener('submit', (e) => {

  e.preventDefault()

  const title = document.getElementById('title').value
  const price = document.getElementById('price').value
  const published = document.querySelector('input[name=radio]:checked').value
  const category_id = document.getElementById('category').value

  const productJson = { "product": {

    title,
    price,
    published,
    category_id
    }
  }

  fetch("http://127.0.0.1:3000/api/v1/products",
    {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer: ${sessionStorage.getItem("token")}`
      },
      body: JSON.stringify(productJson)
    })
    .then((response) => {
      response.json()
      if (response.status == 201){
        console.log("Producto creado")
      }
    })
})
