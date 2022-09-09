const input = document.querySelector('input')
const listContainer = document.querySelector('ul')

let citiesData = []
fetch('https://countriesnow.space/api/v0.1/countries/population/cities').then(response => response.json()).then(response => citiesData.push(...response.data))

input.addEventListener('input', function() {
    let regex = new RegExp(this.value, 'gi')
    let valueRegex = new RegExp(this.value, 'i')
    let matchData = citiesData.filter(data => regex.test(data.city) || regex.test(data.country))
    matchData = matchData.map(data => {
        let displayData = `${data.city}, ${data.country}`
        displayData = displayData.replace(regex, `<span>${displayData.match(valueRegex)}</span>`)
        let listItem = `<li>${displayData}</li>`
        return listItem
    }).join('')
    listContainer.innerHTML = matchData
})