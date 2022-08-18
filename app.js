const express = require('express')

const app = express()

app.get('/',(req,res) => {
    console.log('Peticion recibida')

    res.send('Hola Ale 😎')
})

app.listen (4002, () => {
    console.log('Servidor escuchando en el puerto 4002')
})