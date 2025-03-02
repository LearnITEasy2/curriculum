const { writeLog } = require("./accounting");

function prepareDough(isVegan){
    if(isVegan){
        return "vegan-dough";
    } 
    return "dough";
}

function formPizza(dough) {
    console.log("Forming pizza from "+ dough);
}

function addToppings(pizza, extra) {
    if (extra) {
        console.log(`Adding toppings with ${extra} to ${pizza}`);
    } else {
        console.log(`Adding toppings to ${pizza}`);
    }
    
}

function bakePizza(){
    console.log("Pizza is sent to oven! 🔥");
}

function makePizza(orderName, isVegan, pizzaType, extras){
    console.log(orderName)
    writeLog(`${orderName} - ${pizzaType}, ${extras}`);
    const dough = prepareDough(isVegan);
    formPizza(dough);
    addToppings(pizzaType, extras);
    bakePizza();
}


module.exports = {
    makePizza,
}