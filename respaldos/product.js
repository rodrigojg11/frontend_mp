console.log("Hola")

const ul = document.getElementById('products')

fetch("http://127.0.0.1:3000/api/v1/products")
  .then (response => response.json())
  .then((inforRecev) => {
    console.log(inforRecev.data)
    const products = inforRecev.data

    products.forEach((element) => {
      const title = element.attributes.title
      const price = element.attributes.price
      const published = element.attributes.published
      console.log(title, price, published)
        ul.insertAdjacentHTML("beforeend",
          `<li>${title}: ${price}$ <strong>${published}</strong></li>`)
      })
    });
