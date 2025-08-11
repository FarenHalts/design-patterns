// Old system
class OldAPI {
    request(data) {
        console.log(`OldAPI: Processing ${data}`);
        return { result: 'success', data: data };
    }
}

// New system
class NewAPI {
    send(payload) {
        console.log(`NewAPI: Sending ${payload}`);
        return { status: 'ok', payload: payload };
    }
}

// Adapter
class APIAdapter {
    constructor(oldApi, newApi) {
        this.oldApi = oldApi;
        this.newApi = newApi;
    }

    makeRequest(data, useNew = false) {
        if (useNew) {
            console.log('Adapter: Using new API');
            return this.newApi.send(data);
        } else {
            console.log('Adapter: Using old API');
            return this.oldApi.request(data);
        }
    }
}

// Demo
const old = new OldAPI();
const newApi = new NewAPI();
const adapter = new APIAdapter(old, newApi);

adapter.makeRequest('test data', false);
adapter.makeRequest('test data', true);
