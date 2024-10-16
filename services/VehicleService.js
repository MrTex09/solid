const { IVehicleRepository } = require('../repositories/interfaces/interfaces');

class VehicleService {
    constructor(vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    create(vehicle) {
        return this.vehicleRepository.create(vehicle);
    }

    findById(id) {
        return this.vehicleRepository.findById(id);
    }

    update(id, vehicle) {
        return this.vehicleRepository.update(id, vehicle);
    }

    delete(id) {
        return this.vehicleRepository.delete(id);
    }
}

module.exports = VehicleService;
