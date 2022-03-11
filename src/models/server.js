/////////////////////////////////////////////////////////////
// Importaciones y Requeriments

const express = require('express');
const cors = require('cors');


/////////////////////////////////////////////////////////////
// Clases


class Server {


    ////////////////////////////////
    //Constructor

    constructor () {
        this.app = express();
        //Se crean y se ejecutan los metodos
        this.usuarioPath = '/api/usuarios';
        this.middlewares();
        this.routes();
        
    }

    ////////////////////////////////
    //Metodos


    middlewares = () =>{

        //Directorio Publico
        this.app.use( express.static('src/public') );
        
        //CORS
        this.app.use(cors());

        //Lectura y parseo de body
        this.app.use(express.json());

    }


    routes =  () => {

        this.app.use(this.usuarioPath, require('../routes/user'));
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
