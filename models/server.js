const express = require('express')

class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT;

        //middlewares: funciones
        this.middlewares(); 

        //Rutas
        this.routes();

    }

    middlewares(){
        //Directorio publico
        this.app.use( express.static("public"));
    }

    routes(){
        this.app.get('/', (req, res) => {
            res.send('Hello World')
          });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("express has started on port " + this.port);
        });
    }
}

module.exports = Server;