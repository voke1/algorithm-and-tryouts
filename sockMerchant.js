//Hackerrank Sock Merchant challenge

const sockMerchant = (n, ar) => {
    let numOfPairs = 0
    let socks = []
    let sortAr = ar.sort((a, b) => a - b)
    sortAr.forEach((sock) => {
        if (!socks.includes(sock)) {
            socks.push(sock)
        } else {
            const itemPosition = socks.indexOf(sock)
            socks.splice(itemPosition)
            numOfPairs++;
        }
    })
    console.log(numOfPairs)
    return numOfPairs;

}

sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])  