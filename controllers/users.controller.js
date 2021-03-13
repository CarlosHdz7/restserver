const { response } = require('express')

const usuariosGet = (req, res = response) => {
    res.json({
        "msg":"get API - controller"
    })
}

const usuariosPost = (req, res = response) => {
    res.json({
        "msg":"post API - controller"
    })
}

const usuariosPut = (req, res = response) => {
    res.json({
        "msg":"put API - controller"
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