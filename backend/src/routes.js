const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')


const routes = express.Router()

routes.post('/sessions',SessionController.create )


routes.get('/ongs',OngController.index )
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.post('/incidents',IncidentsController.create)
routes.get('/incidents',IncidentsController.index)
routes.delete('/incidents/:id',IncidentsController.delete)

 
  // const params = req.query busca os query params

  // const params = req.params busca os valores passados no id da requisação

  // const body = req.body devolve o body da requisição

  // console.log(body);
  

module.exports = routes
