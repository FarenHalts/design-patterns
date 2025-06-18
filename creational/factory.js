function Developer(name) {
    this.name = name
    this.type = 'Developer'
}

function Tester(name) {
    this.name = name
    this.type = 'Tester'
}

function Consumer(name) {
    this.name = name
    this.type = 'Consumer'
}

function RoleFactory() {
    this.create = (name, type) => {
        switch(type) {
            case 1:
                return new Developer(name)
            case 2:
                return new Tester(name)
            default: 
                return Consumer(name)
        }
    }
}

function log() {
    console.log(`${this.type} name: ${this.name}`);
    
}

const roleFactory = new RoleFactory()
const roles = []

roles.push(roleFactory.create('Farenhalts', 1))
roles.push(roleFactory.create('Garcia', 2))
roles.push(roleFactory.create('Lucas', 3))

roles.forEach( item => {
    log.call(item)
})