const VehicleService = require('./VehicleService');

class DiscountedVehicleService extends VehicleService {
    applyDiscount(id, discount) {
        const vehicle = this.findById(id);
        if (vehicle) {
            vehicle.price -= discount;
            this.update(id, vehicle);
            return vehicle;
        }
        return null;
    }
}

module.exports = DiscountedVehicleService;
