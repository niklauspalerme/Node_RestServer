/////////////////////////////////////////////////////////////
// Importaciones t Requeriments

const express = require('express')


/////////////////////////////////////////////////////////////
// Clases


class Server {


    ////////////////////////////////
    //Constructor

    constructor () {
        this.app = express();
        //Se crean y se ejecutan los metodos
        this.middlewares();
        this.routes();
        
    }

    ////////////////////////////////
    //Metodos


    middlewares = () =>{

        //Directorio Publico
        this.app.use( express.static('src/public') );

    }


    routes =  () => {

        this.app.get('/api', (req, res) =>  {
            res.json({"Message": "Mil Fleurs"});
            })

        this.app.post('/api', (req, res) =>  {
            res.status(201).json({"Message": "Post Mil Fleurs"});
            })

        this.app.put('/api', (req, res) =>  {
                res.status(500).json({"Message": "Put Mil Fleurs"});
            })
        
        this.app.delete('/api', (req, res) =>  {
                res.json({"Message": "Delete Mil Fleurs"});
            })
        
        this.app.patch('/api', (req, res) =>  {
            res.json({"Message": "Patch v Mil Fleurs"});
        })
    }
    

    listen = (port) =>{

        this.app.listen(port, () =>{
            console.log(`Server is listen the port ${port}`);
        })

    }

}


/////////////////////////////////////////////////////////////
// Exportamos

module.exports = Server
