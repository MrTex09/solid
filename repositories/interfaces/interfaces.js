class IVehicleRepository {
    create(vehicle) {
        throw new Error("Method not implemented");
    }
    
    findById(id) {
        throw new Error("Method not implemented");
    }
    
    update(id, vehicle) {
        throw new Error("Method not implemented");
    }
    
    delete(id) {
        throw new Error("Method not implemented");
    }
}

class IClientRepository {
    create(client) {
        throw new Error("Method not implemented");
    }

    findById(id) {
        throw new Error("Method not implemented");
    }

    update(id, client) {
        throw new Error("Method not implemented");
    }

    delete(id) {
        throw new Error("Method not implemented");
    }
}

module.exports = { IVehicleRepository, IClientRepository };
