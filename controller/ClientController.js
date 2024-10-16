const express = require('express');
const ClientService = require('../services/clientService');

class ClientController {
    constructor(clientService) {
        this.clientService = clientService;
        this.router = express.Router();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post('/', this.create.bind(this));
        this.router.get('/:id', this.findById.bind(this));
        this.router.put('/:id', this.update.bind(this));
        this.router.delete('/:id', this.delete.bind(this));
    }

    create(req, res) {
        const client = req.body; // Asumiendo que el cuerpo está en formato JSON
        const newClient = this.clientService.create(client);
        res.status(201).json(newClient);
    }

    findById(req, res) {
        const client = this.clientService.findById(req.params.id);
        if (client) {
            res.json(client);
        } else {
            res.status(404).send('Client not found');
        }
    }

    update(req, res) {
        const client = this.clientService.update(req.params.id, req.body);
        if (client) {
            res.json(client);
        } else {
            res.status(404).send('Client not found');
        }
    }

    delete(req, res) {
        const result = this.clientService.delete(req.params.id);
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).send('Client not found');
        }
    }
}

module.exports = ClientController;
