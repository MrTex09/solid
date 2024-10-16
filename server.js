const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const VehicleRepositoryMongo = require('./repositories/VehicleRepositoryMongo');
const ClientRepositoryMongo = require('./repositories/ClientRepositoryMongo');
const VehicleService = require('./services/VehicleService');
const ClientService = require('./services/clientService');
const VehicleController = require('./controllers/VehicleController');
const ClientController = require('./controllers/ClientController');

dotenv.config(); 

class Server {
    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(cors()); 

        this.initializeRepositories();
        this.initializeServices();
        this.initializeControllers();
        this.initializeErrorHandling(); 
    }

    initializeRepositories() {
        this.vehicleRepository = new VehicleRepositoryMongo();
        this.clientRepository = new ClientRepositoryMongo();
    }

    initializeServices() {
        this.vehicleService = new VehicleService(this.vehicleRepository);
        this.clientService = new ClientService(this.clientRepository);
    }

    initializeControllers() {
        this.vehicleController = new VehicleController(this.vehicleService);
        this.clientController = new ClientController(this.clientService);

        this.app.use('/vehicles', this.vehicleController.router);
        this.app.use('/clients', this.clientController.router);
    }

    initializeErrorHandling() {
        this.app.use((req, res, next) => {
            res.status(404).json({ error: 'Ruta no encontrada' });
        });
        this.app.use((err, req, res, next) => {
            console.error(err.stack); // Mostrar el error en la consola
            res.status(500).json({ error: 'Error interno del servidor' });
        });
    }

    start(port) {
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
}


const port = process.env.PORT || 3000;
const server = new Server();
server.start(port);
