// npx json-server --watch db.json

// Make a request to http://localhost:3000/games

const baseUrl = 'http://localhost:3000/games'

let games = []

function getData () {
    fetch(baseUrl)
    .then(response => response.json())
    .then(gameData => {
        games = gameData
        iterateDate ()
    })
}
getData()

function iterateDate () {
    games.forEach(game => renderData(game))
}

function renderData(game){
    const gameList = document.getElementById('game-list')
    
    const h5 = document.createElement('h5')
    h5.textContent = `${game.name} (${game.manufacturer_name})`
    gameList.appendChild(h5)

    h5.onclick = () => {
       clickedGame = game
       gameDetails ()
    }
}

function gameDetails () {

    const detailImage = document.getElementById('detail-image')
    detailImage.src = clickedGame.image

    const detailTitle = document.getElementById('detail-title')
    detailTitle.textContent = clickedGame.name

    const score = document.getElementById('detail-high-score')
    score.textContent = clickedGame.high_score
}



// form.onsubmit = (e) => {
//     e.preventDefault()
//    const inputValue = parseInt(e.target[0].value)
//    console.log(typeof inputValue)
//    console.log(clickedGame)

//    fetch(`${baseUrl}/${clickedGame.id}`, {
//     method:'PATCH',
//     headers: {
//         "Content-Type": "application/json",
//       },
//     body: JSON.stringify({high_score:inputValue})
//    })
// }
document.querySelector('#high-score-form').addEventListener("submit",(e)=>{
    e.preventDefault()
    const inputValue = parseInt(e.target[0].value)
    console.log("submited");
    fetch(`${baseUrl}/${clickedGame.id}`, {
     method:'PATCH',
     headers: {
         "Content-Type": "application/json",
       },
     body: JSON.stringify({high_score:inputValue})
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
})