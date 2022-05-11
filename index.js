

const url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'
let mainCard = document.querySelector('#main-card')


fetch(url)
    .then(r => r.json())
    .then(gameArray => {
        renderObj(gameArray)
        //randomIndex(gameArray)
    })

let nameMain = document.createElement('h3')
let image = document.createElement('img')
let price = document.createElement('h4')
let currentPrice = document.createElement('h2')

// const randomIndex = (array) => {
//     console.log(Math.floor(Math.random() * (array.length - 1)))
//     return Math.floor(Math.random() * (array.length - 1))
// }


const renderObj = (gameArray) => {
    gameArray.forEach(renderList)
    randomGameButton(gameArray)
    renderMain(gameArray[0])
}

const renderMain = (gameObj) => {
    const {title, thumb, normalPrice, salePrice} = gameObj
    nameMain.innerText = title.toString()
    image.src = thumb.toString()
    image.id = 'image'
    price.innerText = `msrp $${normalPrice}`
    currentPrice.innerText = `$${salePrice}`
    mainCard.append(nameMain, image, currentPrice, price)
    reviewList.innerHTML = ''
}


const renderList = (gameObj) => {
    const list = document.getElementById('list')
    const name = document.createElement('li')
    name.textContent = gameObj.title
    list.append(name)
    name.addEventListener('click', (e) => {
        e.target.title.value
        renderMain(gameObj)            
    });
}

const randomGameButton = (gameArray) => {
    const randomGame = document.createElement('button')
    randomGame.innerText = 'Click Me For A Random Game';
    randomGame.className = 'button'
    randomGame.id = 'randomButton'
    document.getElementById('random-game').append(randomGame)
    randomGame.addEventListener('click', (e) => {
        let index = Math.floor(Math.random() * (gameArray.length - 1))
        let gameObj = gameArray[index]
        renderMain(gameObj)
    })
}

const formElement = document.getElementById('form')
const reviewList = document.getElementById('review-list')


formElement.addEventListener('submit', (e) => {
    e.preventDefault()
    let post = document.createElement('li')
    post.textContent = `"${e.target.usrinput.value}"`
    reviewList.append(post)
    formElement.reset()
})

const reviewPlaceHolderText = () => {
    const x = 'Holy smokes, what did you think of this game?!'
    const y = `Gee Whilikers, I can't believe this outsold Contra!`
    const z = `Where's the beef? Where's the beef? It's in the game!"`

}


// Ideas for tomorrow, add the like button, if the submit form is empty do not create an empty li, make our own json database to hold reviews and likes, get everything on cards
// light orange FDD09F, red CB6555, blue B9DDD6, yellow FAE0A8, black 3A3D3C, green B6BF9D