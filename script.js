const container = document.querySelector('.container')

fetch('https://rickandmortyapi.com/api/character')
.then(res=>res.json())
.then(data=>{
    const allCharacters = data.results.map(item=>{
        return `<div class='card'>
        <img src="${item.image}">
        <p>${item.name}</p>
        </div>`
    })
container.innerHTML = allCharacters.join('')
})
.catch(error=>{
    console.log(error)
})