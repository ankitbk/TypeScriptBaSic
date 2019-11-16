const pizzas = [{ name: 'pepperoni', topppings: ['Pepperoni'] }];

// ES5 syntax 

const mappedPizzas1 = pizzas.map(function(pizzas) {
    return pizzas.name.toUpperCase();
});

//ES6 syntax => arrow functions

const mappedPizzas2 = pizzas.map(pizzas =>  pizzas.name.toUpperCase());

console.log(mappedPizzas1);
console.log(mappedPizzas2);

// ES5 syntax 

const pizza1 = {
    name: 'Blazing inferno',
    getName: function() {
        console.log(this);
    }
}

// Using setTimeOut 

const pizza2 = {
    name: 'Blazing inferno',
    
    getName: function() {
        const self = this;
        setTimeout(function() { console.log(self); }, 100);
    },
}

// ES6 syntax 

const pizza3 = {
    name: 'Blazing inferno',
    
    getName: function() {
        
        setTimeout(() => { console.log(this.name); }, 100);
    },
}


console.log(pizza1.getName());
console.log(pizza2.getName());
console.log(pizza3.getName());