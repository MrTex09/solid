const { IClientRepository } = require('./interfaces/interfaces');

class ClientRepositoryMongo extends IClientRepository {
    constructor() {
        super();
        this.clients = [
            { id: 1, name: 'armin', email: 'elquearde318@gmail.com', phone: 2129704133  },
        ]; // Simulando una base de datos
    }

    create(client) {
        this.clients.push(client);
        return client;
    }

    findById(id) {
        return this.clients.find(c => c.id === id);
    }

    update(id, client) {
        const index = this.clients.findIndex(c => c.id === id);
        if (index !== -1) {
            this.clients[index] = { ...this.clients[index], ...client };
            return this.clients[index];
        }
        return null;
    }

    delete(id) {
        const index = this.clients.findIndex(c => c.id === id);
        if (index !== -1) {
            return this.clients.splice(index, 1);
        }
        return null;
    }
}

module.exports = ClientRepositoryMongo;
