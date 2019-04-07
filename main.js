// Create new instance of vue inside of one variable
var app = new Vue({ // Pass a object
    el: '#app', // Element of the DOM controlled by vue
    // Methods the life cycle of the instance
    beforeCreate() {  // before creating the instance
        console.log("beforeCreate");
    },
    created() { // after creating the instance
        console.log("create");
    },
    beforeMount() { // before mounting the template in the DOM
        console.log("beforeMount");
    },
    mounted() { // after mounting the html template in the DOM
        console.log("mounted");
    },
    // The methods beforeUpdate() and update() are a loop that run continuously because during the application we will continue updating.
    // Vue is reactive
    beforeUpdate() { // before update the data
        console.log("beforeUpdate");
    },
    updated() { // after update the data
        console.log("updated");
    },
    beforeDestroy() { // before destroying the instance
        console.log("beforeDestroy");
    },
    destroyed() { // after destroying the instance
        console.log("destroyed");
    }
});