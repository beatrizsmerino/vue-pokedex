var app = new Vue({
    el: '#app',
    data: {
        TYPE_COLOR: {
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
        searchText: '',
        // FILTER BY ONE
        filterByGrass: false,
    },
    computed: {
        filteredPokemons(){
            return this.pokemons
                .filter(pokemon => pokemon.name.includes(this.searchText))
                // FILTER BY ONE
                .filter(pokemon => this.filterByGrass ? pokemon.name.includes("grass") : true)
        }
    },
    methods: {
        removePokemon(pokemonToRemove) {
            this.pokemons = this.pokemons.filter(pokemon => pokemon !== pokemonToRemove);
        }
    },
    created() {
        const that = this;
        fetch("https://api.jsonbin.io/b/5ab37f77989617146bd6eb29")
            .then(response => response.json())
            .then(pokemons => console.table(pokemons) || (this.pokemons = pokemons))
    },
});