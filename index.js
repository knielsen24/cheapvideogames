const url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'

const mainCard = document.querySelector('#main-card')
console.log(mainCard)


const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}


fetch(url)
.then(r => r.json())
.then(gameArray => {
    //console.log(gameArray)
    renderMain(gameArray)
})


const renderMain = (gameArray) => {
    //console.log(gameArray)
    let random = getRandomInt(gameArray.length - 1)
    const randomMain= gameArray[random]
    console.log(randomMain)
    for (const obj in randomMain) {
        //console.log(obj.title)
        const title = document.createElement('h3')
        const normalPrice = document.createElement('h4')
        const salePrice = document.createElement('h4')
        const savings = document.createElement('h4')
        title.innerText = randomMain.obj
        console.log(randomMain.obj)
    }
}

/*

gameArray Items
    title, normal price, sale price, savings percentage
    total savings, thumbnail 

function for rendermain card
    like button
function to createbutton 
function to create form
function total savings


*/