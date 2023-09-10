const container = document.querySelector('.container')

fetch('https://rickandmortyapi.com/api/episode')
.then(res=>res.json())
.then(data=>{
    console.log(data)

    const allEpisodes = data.results.map(item=>{
      return `<div class="card">
      <p>Episode: <span>${item.episode}</span></p>
      <p>Name: <span>${item.name}</span></p>
      <p>Air date: <span>${item.air_date}</span></p>
      </div>`
    })

    container.innerHTML = allEpisodes.join('')
})

.catch(error=>{
    console.log(error)
})