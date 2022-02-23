/////////////////////////////////////////////////////////////
// Importaciones

const express = require('express')


/////////////////////////////////////////////////////////////
// Función Principal


const ServerUp = (port) =>{

    const app = express()

    app.get('/', function (req, res) {
    res.send('Hello World')
    })

    app.listen(port, () =>{
        console.log(`Server is listen the port ${port}`);
    })

    return app


}


/////////////////////////////////////////////////////////////
// Exportamos

module.exports = {ServerUp}

