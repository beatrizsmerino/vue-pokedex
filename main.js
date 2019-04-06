// Create new instance of vue inside of one variable
var app = new Vue({ // Pass a object
    el: '#app', // Element of the DOM controlled by vue
    data: {
        pokemon: { // Choose one pokemon to file json -> fizticia-vue\vue-pokedex\data\pokemons.json
            "id": 25,
            "name": "pikachu",
            "image": "images/pokemons/pikachu.png",
            "types": [
                "electric"
            ],
            "abilities": [
                "lightning-rod",
                "static"
            ],
            "experience": 112,
            "height": 4,
            "weight": 60
        },
    }
});