const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';

        //middlewares: funciones
        this.middlewares(); 

        //Rutas
        this.routes();

    }

    middlewares(){
        //CORS
        this.app.use(cors())

        //Directorio publico
        this.app.use( express.static("public"));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/users.routes'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("express has started on port " + this.port);
        });
    }
}

module.exports = Server;