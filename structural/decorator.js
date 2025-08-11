// Base component
class Coffee {
    constructor() {
        this.description = 'Coffee';
        this.cost = 2.00;
    }
}

// Base decorator
class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    get description() {
        return this.coffee.description;
    }

    get cost() {
        return this.coffee.cost;
    }
}

// Concrete decorators
class Milk extends CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
        console.log('Adding milk');
    }

    get description() {
        return this.coffee.description + ', Milk';
    }

    get cost() {
        return this.coffee.cost + 0.50;
    }
}

class Sugar extends CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
        console.log('Adding sugar');
    }

    get description() {
        return this.coffee.description + ', Sugar';
    }

    get cost() {
        return this.coffee.cost + 0.25;
    }
}

// Demo
let coffee = new Coffee();
coffee = new Milk(coffee);
coffee = new Sugar(coffee);

console.log(`Order: ${coffee.description}`);
console.log(`Cost: $${coffee.cost.toFixed(2)}`);
