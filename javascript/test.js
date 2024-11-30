// .find()




let clients = [{name: "ismail"}, {name: "hassan"}, {name: "sami"}, {name: "marcus"}]

function findClientByName(name){
    return clients.find( client => client.name === name);



}
let result = findClientByName("sami");
console.log(result);




// .forEach()

let friends = [{name: "ismail"}, {name: "hassan"}, {name: "sami"}, {name: "marcus"}]

function GreetFriends(friend) {

    friends.forEach (friend => {
    console.log(`Hello,${friend.name} how are you! `);
    
});

}
GreetFriends(friends)





// .filter()
let fruits = ["apple", "banana", "cherry", "kiwi", "grapefruit"];

function FilteringFruitsname (fruits){
  
    return fruits.filter ( fruit => fruit.length >= 6);


}
let longFruits = FilteringFruitsname(fruits)
console.log(longFruits);




// .map()

let vegetables = ["carrot", "broccoli", "spinach", "pepper", "onion"];
 

function ChangingtoUppercase (vegetables){

    return vegetables.map (veg => veg.toUpperCase());
}

let Uppercasevegies = ChangingtoUppercase(vegetables);
console.log(Uppercasevegies);




// .reduce()
let shoppingCart = [
    { item: "apple", price: 1.5 },
    { item: "banana", price: 2.0 },
    { item: "orange", price: 1.8 },
    { item: "grapes", price: 3.0 }
];

function CalculatingTotalPrice (Cart) {

    return Cart.reduce((total, product) => total + product.price, 0);
}


let totalprice = CalculatingTotalPrice(shoppingCart);
console.log(totalprice);
