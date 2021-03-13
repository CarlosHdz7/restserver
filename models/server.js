const express = require('express')
const cors = require('cors')

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
        //CORS
        this.app.use(cors())

        //Directorio publico
        this.app.use( express.static("public"));
    }

    routes(){
        this.app.get('/api', (req, res) => {
            res.json({
                "msg":"get API"
            })
        });

        this.app.put('/api', (req, res) => {
            res.json({
                "msg":"put API"
            })
        });

        this.app.post('/api', (req, res) => {
            res.json({
                "msg":"post API"
            })
        });

        this.app.delete('/api', (req, res) => {
            res.json({
                "msg":"delete API"
            })
        });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("express has started on port " + this.port);
        });
    }
}

module.exports = Server;