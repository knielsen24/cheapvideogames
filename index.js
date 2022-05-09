const url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'

fetch(url)
.then(r => r.json())
.then(data => console.log(data))