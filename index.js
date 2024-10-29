const herois = [{
        nome: 'Alfarr',
        exp: 900
    }, {
        nome: 'Gerwald',
        exp: 1100
    }, {
        nome: 'Helewidis',
        exp: 2050
    }, {
        nome: 'Darlan',
        exp: 3048
    }, {
        nome: 'Nike',
        exp: 4650
    }, {
        nome: 'Yudi',
        exp: 5467
    }, {
        nome: 'Liam',
        exp: 6548
    }, {
        nome: 'Ravi',
        exp: 7464
    }, {
        nome: 'Argos',
        exp: 8214
    }, {
        nome: 'Orion',
        exp: 9420
    }, {
        nome: 'Zeus',
        exp: 10900
    }
]
herois.forEach(e => {
    if(e.exp < 1000) {
        e.elo = 'ferro'
    }
    if(e.exp > 1000 && e.exp < 2000) {
        e.elo = 'bronze'
    }
    if(e.exp > 1000 && e.exp < 5000) {
        e.elo = 'prata'
    }
    if(e.exp > 5000 && e.exp < 7000) {
        e.elo = 'ouro'
    }
    if(e.exp > 7000 && e.exp < 8000) {
        e.elo = 'platina'
    }
    if(e.exp > 8000 && e.exp < 9000) {
        e.elo = 'diamante'
    }
    if(e.exp > 9000 && e.exp < 10000) {
        e.elo = 'ascendente'
    }
    if( e.exp > 10000) {
        e.elo = 'imortal'
    }
    
    console.log(`O herói de nome: ${e.nome} está no nível: ${e.elo}`)
})
