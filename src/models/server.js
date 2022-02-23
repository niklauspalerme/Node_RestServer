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
            res.send('Hello World')
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
