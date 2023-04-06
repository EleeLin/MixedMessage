function getRandom (num) {
    return Math.floor (Math.random () * num);
}

const bestPlayers = {
    usPlayers: ['LeBron James', 'Kobe Bryant', 'Michael Jordan'],
    cnPlayers: ['Yao Ming', 'Wang Zhizhi', 'Yi jianlian'],
    euPlayers: ['Luka Doncic', 'Dirk Nowitzki', 'Giannis Antetokounmpo']
}

let myPlayer = []

for (let player in bestPlayers) {
    let playerId = getRandom (bestPlayers [player].length)

    switch (player) {
        case 'usPlayers':
            myPlayer.push (`Your US player is "${bestPlayers [player] [playerId]}".`)
            break
        case 'cnPlayers':
            myPlayer.push (`Your China player is "${bestPlayers [player] [playerId]}".`)
            break
        case 'euPlayers':
            myPlayer.push (`Your Europe player is "${bestPlayers [player] [playerId]}".`)
            break
        default:
            myPlayer.psuh ('More info needed.')
    }
}

function formatPlayer (player) {
    const formatted = myPlayer.join ('\n')
    console.log (formatted)
}

formatPlayer (myPlayer)