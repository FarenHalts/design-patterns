class Observable {
    constructor() {
        this.subscribers = []
    }

    subscribe(fn) {
        this.subscribers.push(fn)
    }

    unsubscribe(fn) {
        this.subscribers = this.subscribers.filter(item => item !== fn)
    }

    broadcast(data) {
        for(let i = 0; i <this.subscribers.length; i++){
            this.subscribers[i](data)
        }
    }
}

const observer = new Observable()

const fn = (data) => {
    console.log('Callback was executed', data);
}

observer.subscribe(fn)

observer.broadcast('This is from observable')