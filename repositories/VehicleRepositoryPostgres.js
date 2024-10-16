// repositories/VehicleRepositoryPostgres.js
const { IVehicleRepository } = require('./interfaces');
let vehicles = [
    { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020, price: 20000 },
    { id: 2, brand: 'Ford', model: 'Mustang', year: 2019, price: 30000 }
];

class VehicleRepositoryPostgres extends IVehicleRepository {
    create(vehicle) {
        vehicle.id = vehicles.length + 1; 
        vehicles.push(vehicle);
        return vehicle;
    }

    findById(id) {
        const vehicle = vehicles.find(v => v.id === parseInt(id));
        return vehicle || null; 
    }

    update(id, vehicleData) {
        const index = vehicles.findIndex(v => v.id === parseInt(id));
        if (index !== -1) {
            vehicles[index] = { ...vehicles[index], ...vehicleData };
            return vehicles[index];
        }
        return null; 
    }

    delete(id) {
        const index = vehicles.findIndex(v => v.id === parseInt(id));
        if (index !== -1) {
            return vehicles.splice(index, 1);
        }
        return null;
    }
}

module.exports = VehicleRepositoryPostgres;
