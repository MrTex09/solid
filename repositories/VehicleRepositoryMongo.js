const { IVehicleRepository } = require('./interfaces/interfaces');

class VehicleRepositoryMongo extends IVehicleRepository {
    constructor() {
        super();
        this.vehicles = [
            { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020, price: 20000 },
            { id: 2, brand: 'Ford', model: 'Mustang', year: 2019, price: 30000 }
        ]; 
    }

    create(vehicle) {
        vehicle.id = this.vehicles.length + 1; 
        this.vehicles.push(vehicle);
        return vehicle; 
    }

    findById(id) {
        return this.vehicles.find(v => v.id === parseInt(id)) || null;
    }

  
    update(id, vehicle) {
        const index = this.vehicles.findIndex(v => v.id === parseInt(id));
        if (index !== -1) {
            this.vehicles[index] = { ...this.vehicles[index], ...vehicle }; 
            return this.vehicles[index];
        }
        return null; 
    }

    delete(id) {
        const index = this.vehicles.findIndex(v => v.id === parseInt(id));
        if (index !== -1) {
            return this.vehicles.splice(index, 1)[0]; 
        }
        return null; 
    }
}

module.exports = VehicleRepositoryMongo;
