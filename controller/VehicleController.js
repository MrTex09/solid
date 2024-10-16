const express = require('express');
const VehicleService = require('../services/VehicleService');

class VehicleController {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
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
        const vehicle = req.body; // Asumiendo que el cuerpo está en formato JSON
        const newVehicle = this.vehicleService.create(vehicle);
        res.status(201).json(newVehicle);
    }

    findById(req, res) {
        const vehicle = this.vehicleService.findById(req.params.id);
        if (vehicle) {
            res.json(vehicle);
        } else {
            res.status(404).send('Vehicle not found');
        }
    }

    update(req, res) {
        const vehicle = this.vehicleService.update(req.params.id, req.body);
        if (vehicle) {
            res.json(vehicle);
        } else {
            res.status(404).send('Vehicle not found');
        }
    }

    delete(req, res) {
        const result = this.vehicleService.delete(req.params.id);
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).send('Vehicle not found');
        }
    }
}

module.exports = VehicleController;
