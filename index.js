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
    price.innerText = normalPrice
    sale.innerText = salePrice

    mainCard.append(name, image, price, sale)
}


const renderList = (gameArray) => {

    gameArray.forEach(gameObj => {
    
    const list = document.getElementById('list')
    const name = document.createElement('li')

    name.textContent = gameObj.title
    
    //I'm here to be worked on! 
    //I should render the game that gets clicked
    name.addEventListener('click', (e) => {
        e.preventDefault()
    });
    list.append(name)
    });
}
const randomGameButton = (gameArray) => {
    const randomGame = document.createElement('button')
    randomGame.innerText = 'Click Me For A Random Game';
    document.getElementById('random-game').append(randomGame)
    randomGame.addEventListener('click', (e) => {
       
       name.remove()
       image.remove()
       price.remove()
       sale.remove()
       renderMain(gameArray)
    })
}

    





// gameArray Items
//     title, normal price, sale price, savings percentage
//     total savings, thumbnail 

// function for rendermain card
//     like button
// function to createbutton 
// function to create form
// function total savings*/

