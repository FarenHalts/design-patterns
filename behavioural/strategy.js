// Payment strategies
class CreditCard {
    pay(amount) {
        console.log(`Credit Card: $${amount} charged (3% fee)`);
        return amount * 1.03;
    }
}

class PayPal {
    pay(amount) {
        console.log(`PayPal: $${amount} processed (2.5% fee)`);
        return amount * 1.025;
    }
}

class Bitcoin {
    pay(amount) {
        console.log(`Bitcoin: $${amount} transferred ($5 network fee)`);
        return amount + 5;
    }
}

// Context
class Payment {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        console.log(`Switching to ${strategy.constructor.name}`);
        this.strategy = strategy;
    }

    process(amount) {
        if (!this.strategy) {
            console.log('No payment method selected');
            return null;
        }
        return this.strategy.pay(amount);
    }
}

// Demo
const payment = new Payment();

payment.setStrategy(new CreditCard());
payment.process(100);

payment.setStrategy(new PayPal());
payment.process(100);

payment.setStrategy(new Bitcoin());
payment.process(100);
