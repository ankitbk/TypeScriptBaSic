const pizzas = [{ name: 'pepperoni', topppings: ['Pepperoni'] }];

// ES5 syntax 

const mappedPizzas1 = pizzas.map(function(pizzas) {
    return pizzas.name.toUpperCase();
});

//ES6 syntax => arrow functions

const mappedPizzas2 = pizzas.map(pizzas =>  pizzas.name.toUpperCase());

// console.log(mappedPizzas1);
// console.log(mappedPizzas2);

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


// console.log(pizza1.getName());
// console.log(pizza2.getName());
// console.log(pizza3.getName());


// default parameters

function multiply( a:number , b = 25) {
    return a * b;
}

// console.log(multiply(5));
// console.log(multiply(5, 35));


// OBject literal improvement 

const pizzaobj = {
    name: 'Pepperoni',
    price: 15,
    getName: function() {
        return this.name;
    },
};


// console.log(pizzaobj.getName());

const toppings = ['pepperoni'];


// to combine two object into one object using ES5 
const order = {
    pizzaobj : pizzaobj,
    toppings: toppings
}

// Using ES6 syntax

const orders = { pizzaobj, toppings }



const pizzaobj1 = {
    name: 'Pepperoni',
    price: 15,
    getName() {
        return this.name;
    },
};


// console.log(pizzaobj1.getName());


console.log(orders);
console.log(order);


// Rest parameters 

// ES5 syntax 

function sumAll(arr) {
    return arr.reduce((prev, next) => {
        prev + next
    });

}

const sum = sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(sum);


// ES6 syntax 

function sumAll1(message, ...arr ) {
    console.log(message);
    console.log(arguments);
    return arr.reduce((prev, next) =>  prev + next );

}

const sum1 = sumAll1( 'Hello' , 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum1);

// Array spread operator 

// it is used to join the two array 

// previously we used to use concat method but using spread operator we can do that so 
// we can reverse the array with the spread itslef and it is not possible in concat 

const toppingsSpread = ['bacon', 'chilli'];
const newTopppingSpread = ['pepproni']; 
const allToppings = [ ...toppingsSpread, ...newTopppingSpread];
const allToppingsRev = [ ...newTopppingSpread, ...toppingsSpread, ];
console.log(allToppings);


// OBject spread operator (new feature in typescript to get rid of object.assign)

const pizzaObjSpread = {
    name : 'Pepperoni',
};

const toppingsObjSpread = ['pepperoni'];

const orderObjSpread = { ...pizzaObjSpread,  toppingsObjSpread };
const orderObjAssign = Object.assign({}, pizzaObjSpread, { toppingsObjSpread });
console.log(orderObjAssign);
console.log(orderObjSpread);



// Destruction objects and arrays 

const pizzaDestruct = {
    nameDestruct: 'pepperoni',
    toppingsDestruct: ['pepperoni'],
};

function orderDestruct ({ nameDestruct: pizzaName, toppingsDestruct: toppingName }) {
    return { pizzaName, toppingName};
}

const { pizzaName } = orderDestruct(pizzaDestruct);

// Array destruct

const topppingArrDestruct = ['pepperoni', 'bacon', 'chilli'];
const [first, second, third] = topppingArrDestruct;
console.log(first, second, third);


