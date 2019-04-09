// Create new instance of vue inside of one variable
var app = new Vue({ // Pass a object
    el: '#app', // Element of the DOM controlled by vue
    data: {
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
        pokemons: [],
    },
    // METHODS:
    // actions/functions
    methods: {
        // The function removePokemon recived 1 parameter
        removePokemon(pokemonToRemove) {
            // WAY 1 -> Find it in the array and remove it
            // Find the pokemon in the array pokemons
            // Compare if the id of pokemon it is the same that the parameter
            // Access the list of pokemons and give a new value
            // Access the list of pokemons and of those pokemons remove the first that coincide with the const index
            //
            // const index = this.pokemons.findIndex(pokemon => pokemon.id === pokemonToRemove);
            // this.pokemons = this.pokemons.splice(index, 1);

            // WAY 2 -> Find it in the array and remove it
            // It is the same as the previous example, but in this one compare by the all pokemon
            //
            // const index = this.pokemons.findIndex(pokemon => pokemon === pokemonToRemove);
            // this.pokemons = this.pokemons.splice(index, 1);

            // WAY 3 -> the same but with filter function
            // Access the list of pokemons and give a new value
            // Access the list of pokemons and choose all pokemons except the pokemon that we went through the function parameter 
            //
            this.pokemons = this.pokemons.filter(pokemon => pokemon !== pokemonToRemove);

            // In all cases we remove the pokemons of the array and and we can not get it back
        },
    },
    created() {
        // Call AJAX for o have all pokemons of the file json
        // Here we have 2 this:
        // - This of the app vue
        // - This of the fetch
        // How we need to use the this of the app inside of the fetch we use a trick:
        // Save in a variable the is of the app and use the variable inside of the fetch

        const that = this;

        // Fetch is a API public that makes external requests (send and receive data by get and post),
        // Default fetch uses the get method.
        //
        // In this case, it reads an external file and brings it to you.
        // Fetch receives a url
        // With "then()" it makes a promise (it promises that it will return an answer).
        // Make 2 promises:
        // - 1. Take the answer and transform it into the kind of data we need.
        // Use "response" to catch the answer and transform it with the method json()
        // - 2. Read and take data file
        // Console.log() draws the info inside of table
        // Read and save the file inside of the empty array created in the property "data"
        
        // Arrow function
        // 1. Promise: Parameter => return a value directly
        // 2. Promise: Parameter => First execute the console.log() if it is true execute the action
        // Debug in an arrow function: JavaScript evaluates sub-expressions left to right and then act depending on their boolean equivalent.

        fetch("https://api.jsonbin.io/b/5ab37f77989617146bd6eb29")
            .then(response => response.json())
            .then(pokemons => console.table(pokemons) || (this.pokemons = pokemons))
    },
});