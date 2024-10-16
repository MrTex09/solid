const { IClientRepository } = require('../repositories/interfaces/interfaces');

class ClientService {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }

    create(client) {
        return this.clientRepository.create(client);
    }

    findById(id) {
        return this.clientRepository.findById(id);
    }

    update(id, client) {
        return this.clientRepository.update(id, client);
    }

    delete(id) {
        return this.clientRepository.delete(id);
    }
}

module.exports = ClientService;
