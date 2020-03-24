const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Session
routes.post('/sessions', SessionController.create);

//Ongs
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

//Incidents
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

//Profile
routes.get('/profile', ProfileController.index);

module.exports = routes;
