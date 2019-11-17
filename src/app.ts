// const pizzas = [{ name: 'pepperoni', topppings: ['Pepperoni'] }];

// // ES5 syntax 

// const mappedPizzas1 = pizzas.map(function(pizzas) {
//     return pizzas.name.toUpperCase();
// });

// //ES6 syntax => arrow functions

// const mappedPizzas2 = pizzas.map(pizzas =>  pizzas.name.toUpperCase());

// // console.log(mappedPizzas1);
// // console.log(mappedPizzas2);

// // ES5 syntax 

// const pizza1 = {
//     name: 'Blazing inferno',
//     getName: function() {
//         console.log(this);
//     }
// }

// // Using setTimeOut 

// const pizza2 = {
//     name: 'Blazing inferno',
    
//     getName: function() {
//         const self = this;
//         setTimeout(function() { console.log(self); }, 100);
//     },
// }

// // ES6 syntax 

// const pizza3 = {
//     name: 'Blazing inferno',
    
//     getName: function() {
        
//         setTimeout(() => { console.log(this.name); }, 100);
//     },
// }


// // console.log(pizza1.getName());
// // console.log(pizza2.getName());
// // console.log(pizza3.getName());


// // default parameters

// function multiply( a:number , b = 25) {
//     return a * b;
// }

// // console.log(multiply(5));
// // console.log(multiply(5, 35));


// // OBject literal improvement 

// const pizzaobj = {
//     name: 'Pepperoni',
//     price: 15,
//     getName: function() {
//         return this.name;
//     },
// };


// // console.log(pizzaobj.getName());

// const toppings = ['pepperoni'];


// // to combine two object into one object using ES5 
// const order = {
//     pizzaobj : pizzaobj,
//     toppings: toppings
// }

// // Using ES6 syntax

// const orders = { pizzaobj, toppings }



// const pizzaobj1 = {
//     name: 'Pepperoni',
//     price: 15,
//     getName() {
//         return this.name;
//     },
// };


// // console.log(pizzaobj1.getName());


// console.log(orders);
// console.log(order);


// // Rest parameters 

// // ES5 syntax 

// function sumAll(arr) {
//     return arr.reduce((prev, next) => {
//         prev + next
//     });

// }

// const sum = sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// console.log(sum);


// // ES6 syntax 

// function sumAll1(message, ...arr ) {
//     console.log(message);
//     console.log(arguments);
//     return arr.reduce((prev, next) =>  prev + next );

// }

// const sum1 = sumAll1( 'Hello' , 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// console.log(sum1);

// // Array spread operator 

// // it is used to join the two array 

// // previously we used to use concat method but using spread operator we can do that so 
// // we can reverse the array with the spread itslef and it is not possible in concat 

// const toppingsSpread = ['bacon', 'chilli'];
// const newTopppingSpread = ['pepproni']; 
// const allToppings = [ ...toppingsSpread, ...newTopppingSpread];
// const allToppingsRev = [ ...newTopppingSpread, ...toppingsSpread, ];
// console.log(allToppings);


// // OBject spread operator (new feature in typescript to get rid of object.assign)

// const pizzaObjSpread = {
//     name : 'Pepperoni',
// };

// const toppingsObjSpread = ['pepperoni'];

// const orderObjSpread = { ...pizzaObjSpread,  toppingsObjSpread };
// const orderObjAssign = Object.assign({}, pizzaObjSpread, { toppingsObjSpread });
// console.log(orderObjAssign);
// console.log(orderObjSpread);



// // Destruction objects and arrays 

// const pizzaDestruct = {
//     nameDestruct: 'pepperoni',
//     toppingsDestruct: ['pepperoni'],
// };

// function orderDestruct ({ nameDestruct: pizzaName, toppingsDestruct: toppingName }) {
//     return { pizzaName, toppingName};
// }

// const { pizzaName } = orderDestruct(pizzaDestruct);

// // Array destruct

// const topppingArrDestruct = ['pepperoni', 'bacon', 'chilli'];
// const [first, second, third] = topppingArrDestruct;
// console.log(first, second, third);


// Typescript - Primitive types 

// // Nmber types , Arguments and functions 

// const pizzaCost: number = 10;
// const pizzaToppings: number = 2;

// function calculatePrice(cost: number, topping: number): number {
//     return cost + 1.5 * pizzaToppings;
// }

// const cost : number = calculatePrice (pizzaCost, pizzaToppings);
// console.log(`pizza costs: ${cost}`);

// // String types , String literals

// const coupon: string = 'pizzas25';

// function normalizeCouponCode(code: string): string {
//     return code.toUpperCase();
// }

// const couponMessage: string = `Final coupon is ${normalizeCouponCode(coupon)}`;
// console.log(couponMessage);

// // Boolean types , Boolean literals 

// const pizzaQuantity: number = 2;

// function offerDiscount(orders: number): boolean {
//     return orders >= 3;
// }

// if (offerDiscount(pizzaQuantity)) {
//     console.log(`You're entitled to a discount`);
// } else {
//     console.log(`Order more than 3 pizzas for a discount`);
// }


// The any type - Note we should avoid using the any type as this is only useful in the condition where we are 
// not aware about the input value type or the data is dynamic whose type is unknown

// let coupen: any;
// // any can be of any type like number , string , boolean
// coupen = 25;
// coupen = '25';
// coupen = true;

// //Implicit and explicit type

// //Implicit means typescript assumes a particular type depending upon the value
// //Explicit means we provide the type of a particular variable or data 

// let coupen1 = 'String'; // here typescript automatically consider the coupen1 type as string based on the value provided
// let coupen2: string = 'Value' // here we have declared the type or mentioned the typed

// //void type 

// // void type return nothing mainly used in the impure function where the external data is been changed and not return so that 
// // type of function have the type void and we should mentioned impure functions with void as an best practise

// let selectToppping: string = 'pepperoni';

// function selectedToppping (topping: string):void {
//     selectToppping = topping;
// }

// selectedToppping('bacon');

// console.log(selectedToppping);

// // Never Type 

// //Never types tells typescript compiler that the value will never occur 

// // function orderError(error: string): never {
// //     throw new Error(error);
// //     // never going to return  a value
// // }

// // orderError('Something went wrong');

// // Strict null check is very important when you want more strict complier to check the type null and undefined too when the value is not present

// let coupen3 : string | null = 'pizaa25'; // if we dont specify the optional type "string | null" we will get error

// function removeCoupen(): void {
//     coupen3 = null;
// }

// console.log(coupen3);

// removeCoupen();

// console.log(coupen3);


// // Union type and literal 

// // Union type is used to provide number of value options to choose from and if the value passed to the function doesnt exit it will throw an error

// let pizzaSize: string = 'small';

// function selectSize (size : 'small' | 'large' | 'medium') {
//     pizzaSize = size;
// }

// selectSize('large');

// console.log(`PizzaSize is ${pizzaSize}`);

// // function types 

// // it is the way to define the type of function 

// let sumOrder: (price: number, quantity: number) => number ;

// sumOrder = (x, y) => x* y;

// const sum = sumOrder(25, 2);

// console.log(`Total Sum is ${sum}`);

// // Function and optional argument 
// // optional argument is mentioned by "?" symbol and it is used in the scenario for example : we should always have 1 quantiy default and doesnt 
// // make sense to multiply the pizza * quantity(ie : 1)  so for that we can do the following below thing

// let sumOrder1: (price: number, quantity?: number) => number ;

// sumOrder1 = (x, y) => {
//     if(y) {
//         return x * y;
//     }
//     return x;
// }

// const sum1 = sumOrder1(25);

// console.log(`Total Sum is ${sum1}`);

// // default parameter in typescript functions


// let sumOrder2: (price: number, quantity?: number) => number ;

// sumOrder2 = (x, y = 0) => x * y; 

// const sum2 = sumOrder2(25);
// const sum3 = sumOrder2(25, 5);

// console.log(`Total Sum is ${sum2}`);
// console.log(`Total Sum is ${sum3}`);

// // Object type - Used to define the object signature type which is defined on the fly

// let pizzaObjType : { name: string; price: number; getName(): string} = {
//     name: 'Plain old javascript',
//     price: 20,
//     getName() {
//         return pizzaObjType.name;
//     }
// };

// console.log(pizzaObjType.getName());


// // Array types and Generics : 
// // The implementation of generics in Typescript give us the ability to pass in a range of types to a component, adding an extra layer
// //  of abstraction and re-usability to your code

// let sizes : number[];

// sizes = [1, 2, 3];

// let toppins: Array<string>;

// toppins = ['Pepperoni', 'bacon', 'Tomato'];

// console.log(sizes, toppins);

// // Tuple type : when we want a strong typed data strcture we have to use this type where the swapping or less arguments are not allowed
// // and in union we can swap 

// let pizzatuple : [string, number, boolean];

// // pizzatuple = [true, 'Pepperoni', 30]; // This will throw error

// pizzatuple = ['Pepperoni', 330, true]; // this will work properly


// Type allias :

type Size = 'Small' | 'Medium' | 'Large';

let pizzaSizeTypeAllias : Size = 'Small';

const selectSizeTypeAllias = (size: Size) => {
    pizzaSizeTypeAllias = size;
};

selectSizeTypeAllias('Medium');