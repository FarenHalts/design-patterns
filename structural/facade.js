class PlumbingSystem {
    setPressure(pressure) {
        console.log(`PlumbingSystem: Pressure set to ${pressure} PSI`);
    }

    turnOn() {
        console.log("PlumbingSystem: Plumbing system turned on");
    }

    turnOff() {
        console.log("PlumbingSystem: Plumbing system turned off");
    }
}

class ElectricalSystem {
    setVoltage(voltage) {
        console.log(`ElectricalSystem: Voltage set to ${voltage}V`);
    }

    turnOn() {
        console.log("ElectricalSystem: Electrical system turned on");
    }

    turnOff() {
        console.log("ElectricalSystem: Electrical system turned off");
    }
}

class House {
    constructor() {
        this.plumbing = new PlumbingSystem();
        this.electrical = new ElectricalSystem();
    }

    turnOnSystems() {
        console.log("House: Turning on all systems...");
        this.electrical.setVoltage(220);
        this.electrical.turnOn();
        this.plumbing.setPressure(300);
        this.plumbing.turnOn();
        console.log("House: All systems are now ON");
    }

    shutDown() {
        console.log("House: Shutting down all systems...");
        this.plumbing.turnOff();
        this.electrical.turnOff();
        console.log("House: All systems are now OFF");
    }
}

const client = new House();
client.turnOnSystems();
client.shutDown();
