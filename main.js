// Create new instance of vue inside of one variable
var app = new Vue({ // Pass a object
    el: '#app', // Element of the DOM controlled by vue
    data: {
        applicationName: "Vue - Pokedex", // Menssage draw with an interpolation
    },
    methods: {
        applicationNameView: function() {
            return this.applicationName;
        }
    }
});