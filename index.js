const url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'

let mainCard = document.querySelector('#main-card')

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}


fetch(url)
    .then(r => r.json())
    .then(gameArray => {
        renderMain(gameArray)
        renderList(gameArray)
        randomGameButton(gameArray)
    })

let name = document.createElement('h3')
let image = document.createElement('img')
let price = document.createElement('h3')
let sale = document.createElement('h3')

const renderMain = (gameArray) => {
    
    let r = getRandomInt(gameArray.length - 1)

    const {title, thumb, normalPrice, salePrice} = gameArray[r]
    
    name.innerText = title.toString()
    image.src = thumb.toString()
    price.innerText = `msrp $${normalPrice}`
    sale.innerText = `Current Price  $${salePrice}`

    mainCard.append(name, image, price, sale)
    reviewList.innerHTML = ''
    
}


const clickTitle = (titleName) => {
    titleName.addEventListener('click', (e) => {
        console.log(e.target.title.value)
        e.target.title.value
    });
}

const renderList = (gameArray) => {
    gameArray.forEach(gameObj => {
        const list = document.getElementById('list')
        const name = document.createElement('li')
        name.textContent = gameObj.title
        list.append(name)
        clickTitle(name)
    });
}

const randomGameButton = (gameArray) => {
    const randomGame = document.createElement('button')
    randomGame.innerText = 'Click Me For A Random Game';
    document.getElementById('random-game').append(randomGame)
    randomGame.addEventListener('click', (e) => {
       renderMain(gameArray)
    })
}

const formElement = document.getElementById('form')
const reviewList = document.getElementById('review-list')


formElement.addEventListener('submit', (e) => {
    e.preventDefault()
    let post = document.createElement('li')
    post.textContent = e.target.usrinput.value
    reviewList.append(post)
    formElement.reset()
})

const reviewPlaceHolderText = () => {
    const x = 'Holy smokes, what did you think of this game?!'
    const y = `Gee Whilikers, I can't believe this outsold Contra!`
    const z = `Where's the beef? Where's the beef? It's in the game!"`

}


// Ideas for tomorrow, add the like button, if the submit form is empty do not create an empty li, make our own json database to hold reviews and likes, get everything on cards
