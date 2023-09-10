const container = document.querySelector('.container')

fetch('https://rickandmortyapi.com/api/location')
.then(res=>res.json())
.then(data=>{
    console.log(data)
    const allLocations = data.results.map(item=>{
        return `<div class="card">
        <p>Name: <span>${item.name}</span></p>
        <p>Dimension: <span>${item.dimension}</span></p>
        <p>Type: <span>${item.type}</span></p>
        </div>`
    })
    container.innerHTML = allLocations.join('')
})
.catch(error=>{
    console.log(error)
})