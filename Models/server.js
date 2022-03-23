const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.applicationPath = '/api/cordenadas'; 
        //Midelware
        this.midelwares();
        //Routes the application
        this.routes();
    }
    routes() {
        this.app.use(this.applicationPath, require('../routes/cordenadas'))
    }
    midelwares() {
        //CORS
        this.app.use(cors());
        //Lectura y parseo de JSON  
        this.app.use(express.json());
        //directorio public
        this.app.use(express.static('public'));
    }
    listen() {
        this.app.listen(this.port,
            () => console.log("server running in the port " + this.port));
    }
}

module.exports = Server;