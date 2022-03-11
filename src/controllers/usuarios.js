/////////////////////////////////////////////////////////////
// Importaciones

const {response} = require('express');


/////////////////////////////////////////////////////////////
// Funciones Controllers de Usuario

const usuarioGet = (req, res = response ) =>  {

    res.status(200).json({"Message": "Mil Fleurs"});
}


const usuarioPost = (req, res) =>  {

    const {nombre, edad} = req.body

    res.status(201).json({
        "Message": "Post Mil Fleurs",
        "Nombre": nombre,
        "Edad": edad
    });
}

const usuarioPut =  (req, res) =>  {
    res.status(500).json({"Message": "Put Mil Fleurs"});
}

const usuarioDelete = (req, res) =>  {
    res.status(200).json({"Message": "Delete Mil Fleurs"});
}

const usuarioPath = (req, res) =>  {
    res.json({"Message": "Patch v Mil Fleurs"});
}


/////////////////////////////////////////////////////////////
// Exportaciones

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete,
    usuarioPath
}