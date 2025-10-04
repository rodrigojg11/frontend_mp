const form = document.getElementById('form')

form.addEventListener('submit', (e) => {

  e.preventDefault()

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  if (!sessionStorage.getItem("token")) {

    fetch("http://127.0.0.1:3000/api/v1/tokens",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({'user': {
        email: email,
        password: password
      }})
    })
    .then(response => response.json())
    .then((data) => {
      sessionStorage.setItem("token", data.token)
    })
  }
  else{
    const message = document.getElementById('message')
      message.innerText = "Usuario logueado"
      message.style.color = "red"
    }

})
