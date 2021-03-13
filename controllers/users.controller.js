const { response,request } = require('express')

const usuariosGet = (req = request, res = response) => {

    const { nombre,edad = "Sin especificar" } = req.query;
    res.json({
        "msg":"get API - controller",
        nombre,
        edad
    })
}

const usuariosPost = (req, res = response) => {

    const {nombre,edad} = req.body;

    res.json({
        "msg":"post API - controller",
        nombre,
        edad
    })
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id //nombre que le puse en la ruta

    res.json({
        "msg":"put API - controller",
        id
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        "msg":"delete API - controller"
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}