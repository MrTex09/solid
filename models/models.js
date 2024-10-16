class IVehicle {
    constructor(id, brand, model, year, price) {
        this.id = id;//id
        this.brand = brand; //marca
        this.model = model; //model
        this.year = year; //año
        this.price = price; // precio 
    }
}

class IClient {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

module.exports = { IVehicle, IClient };
