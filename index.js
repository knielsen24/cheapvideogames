const gameCards = document.querySelector('#game-cards')
    gameCards.className = 'main-container'
const titleCardsSection = document.createElement('section')
    titleCardsSection.id = 'title-cards'
    titleCardsSection.className = 'card-container'
const mainCard = document.querySelector('#main-card')
    mainCard.className = "card-container"
const mainCardHeader = document.createElement('header')
    mainCardHeader.id = 'main-card-header'
    mainCardHeader.className = 'header'
    mainCardHeader.innerText = 'Featured Game'.toUpperCase()
    mainCard.append(mainCardHeader)
const titleCardsHeader = document.createElement('header')
    titleCardsHeader.id = 'titles-cards-header'
    titleCardsHeader.className = 'header'
    titleCardsHeader.innerText = 'More Games'.toUpperCase()
    titleCardsSection.append(titleCardsHeader)
const divForm = document.createElement('div')
    divForm.id = 'div-form'
gameCards.append(titleCardsSection, divForm)

const mainUrl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'
const getGames = (url) => {
    fetch(url).then(r => r.json()).then(gameArray => {
        renderObj(gameArray)
    })
}
getGames(mainUrl)

const renderObj = (gameArray) => {
    gameArray.forEach(renderList)
    const smallArray = gameArray.slice(0,6)
    smallArray.forEach(renderCards)
    randomGameButton(gameArray)
    renderMain(randomIndex(gameArray))
    // gameArray.forEach(obj => {
    //     gameObj = {
    //         title : obj.title,
    //         thumb : obj.thumb,
    //         normalPrice : obj.normalPrice,
    //         salePrice : obj.salePrice,
    //     }
    // })
}


const nameMain = document.createElement('h3')
nameMain.className = 'title-name'
const image = document.createElement('img')
const price = document.createElement('h5')
const currentPrice = document.createElement('h2')
const savings = document.createElement('h4')
savings.className = 'go-green'
const featureTitle = document.createElement('div')
featureTitle.id = "main-title"
featureTitle.className = "title-cards"

const gameCardTile = (gameObj) => {
    nameMain.innerText = gameObj.title
    image.src = gameObj.thumb
    image.id = 'image'
    price.innerText = `MSRP $${gameObj.normalPrice}`
    currentPrice.innerText = `$${gameObj.salePrice}`
    savings.innerText = `Total Savings $${(gameObj.normalPrice-gameObj.salePrice).toFixed(2)}`
}


const renderMain = (gameObj) => {
    mainCard.append(featureTitle)
    gameCardTile(gameObj)
    featureTitle.append(nameMain, image, currentPrice, savings, price)
}


const renderCards = (gameObj) => {
    const titleCards = document.createElement('div')
    titleCards.className = "title-cards"
    titleCardsSection.append(titleCards)
    
    const nameMain = document.createElement('h3')
    nameMain.className = 'title-name'
    const image = document.createElement('img')
    const price = document.createElement('h5')
    const currentPrice = document.createElement('h2')
    const savings = document.createElement('h4')
    savings.className = 'go-green'

    nameMain.innerText = gameObj.title
    image.src = gameObj.thumb
    image.id = 'image'
    price.innerText = `MSRP $${gameObj.normalPrice}`
    currentPrice.innerText = `$${gameObj.salePrice}`
    savings.innerText = `Total Savings $${(gameObj.normalPrice-gameObj.salePrice).toFixed(2)}`
    
    titleCards.append(nameMain, image, currentPrice, savings, price)
    console.log(gameObj)
}


const renderList = (gameObj) => {
    const list = document.getElementById('list')
    const name = document.createElement('div')
    name.className = "title-list"
    name.textContent = gameObj.title
    list.append(name)
    name.addEventListener('click', (e) => {
        e.target.title.value
        renderMain(gameObj)
        window.scrollTo(0,0)            
    });
}

const randomGameButton = (gameArray) => {
    const randomGame = document.createElement('button')
    randomGame.innerText = 'Click Me For A Random Game';
    randomGame.className = 'button'
    randomGame.id = 'randomButton'
    document.getElementById('random-game').append(randomGame)
    randomGame.addEventListener('click', (e) => {
        let gameObj = randomIndex(gameArray)
        renderMain(gameObj)
        window.scrollTo(0,0)  
    })
}
 
const formElement = document.getElementById('form')
divForm.append(formElement)
const reviewList = document.getElementById('review-list')


formElement.addEventListener('submit', (e) => {
    e.preventDefault()
    let post = document.createElement('div')
    post.textContent = `"${e.target.usrinput.value}"`
    reviewList.append(post)
    formElement.reset()
})

const randomIndex = (array) => {
    return array[Math.floor(Math.random() * (array.length - 1))]
}


// const reviewPlaceHolderText = () => {
//     const x = 'Holy smokes, what did you think of this game?!'
//     const y = `Gee Whilikers, I can't believe this outsold Contra!`
//     const z = `Where's the beef? Where's the beef? It's in the game!"`

// }


// Ideas for tomorrow, add the like button, if the submit form is empty do not create an empty li, make our own json database to hold reviews and likes, get everything on cards
// light orange FDD09F, red CB6555, blue B9DDD6, yellow FAE0A8, black 3A3D3C, green B6BF9D

// const createCardElements = () => {
//     const nameMain = document.createElement('h3')
//     const image = document.createElement('img')
//     const price = document.createElement('h5')
//     const currentPrice = document.createElement('h2')
//     const savings = document.createElement('h4')
//     const titleCards = document.createElement('div')
//     titleCards.className = "title-cards"
//     return nameMain, image, price, currentPrice, savings, titleCards
// }
