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
        TYPE_COLOR: { // Copy the types of file json -> fizticia-vue\vue-pokedex\data\pokemon_type_to_color.json
            "grass": "#78C850",
            "poison": "#A040A0",
            "fire": "#F08030",
            "flying": "#A890F0",
            "water": "#6890F0",
            "bug": "#A8B820",
            "normal": "#A8A878",
            "electric": "#F8D030"
        },
    }
});