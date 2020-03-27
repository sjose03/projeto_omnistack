const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
// Tipos de parametros

// Query params: Parametros nomeados enviados na rota apos '?' (Filtros, paginação)
// Route Params: Parametros utlizados para identificar recursos
// Request Body:

app.listen(3333, console.log('Server rodando na porta 3333'))


