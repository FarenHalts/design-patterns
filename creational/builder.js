class Computer {
    constructor() {
        this.parts = {};
    }

    toString() {
        return `Computer: ${Object.entries(this.parts).map(([k,v]) => `${k}: ${v}`).join(', ')}`;
    }
}

class ComputerBuilder {
    constructor() {
        this.computer = new Computer();
        console.log('Builder: Starting build');
    }

    setCPU(cpu) {
        console.log(`Builder: Adding CPU - ${cpu}`);
        this.computer.parts.cpu = cpu;
        return this;
    }

    setRAM(ram) {
        console.log(`Builder: Adding RAM - ${ram}`);
        this.computer.parts.ram = ram;
        return this;
    }

    setGPU(gpu) {
        console.log(`Builder: Adding GPU - ${gpu}`);
        this.computer.parts.gpu = gpu;
        return this;
    }

    build() {
        console.log('Builder: Build complete!');
        return this.computer;
    }
}

// Demo
const gaming = new ComputerBuilder()
    .setCPU('i9')
    .setRAM('32GB')
    .setGPU('RTX4080')
    .build();

console.log(gaming.toString());

const office = new ComputerBuilder()
    .setCPU('i5')
    .setRAM('16GB')
    .build();

console.log(office.toString());
