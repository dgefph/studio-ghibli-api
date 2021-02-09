//Example fetch using pokemonapi.co
//document.querySelector("button").addEventListener("click", getFetch);

const app = document.getElementById('root')
const logo = document.createElement('img')

logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

const url = 'https://ghibliapi.herokuapp.com/films'

fetch(url)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    data.forEach((movie) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.innerText = movie.title

      const p = document.createElement('p')
      p.innerText = movie.description.substring(0, 300) // limit to 300 characters
      p.innerText = `${movie.description}...` // end with elliopses

      // Append the cards to the container element
      container.appendChild(card)

      // Each card will contain an h1 and a p
      card.appendChild(h1)
      card.appendChild(p)
      //console.log(movie.title)
      //console.log(movie.description)
    })
  })
  .catch((err) => {
    console.log(`error ${err}`)
  })
