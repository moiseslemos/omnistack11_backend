const { celebrate, Joi, Segments } = require('celebrate');

const express = require('express');

const ClienteController = require('./controllers/ClienteController');
const UsuarioController = require('./controllers/UsuarioController');
// const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Session
routes.post('/sessions', SessionController.create);

//////////////Clientes/////////////////////////////////////////////////////
routes.post('/clientes', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        cpf_cnpj: Joi.string(),
        email: Joi.string(),
        telefone: Joi.string(),
        endereco: Joi.string().required(),
        cep: Joi.string(),
        limiteCompra: Joi.number().required().min(10),
    })
}), ClienteController.create);

routes.get('/clientes', ClienteController.index);

routes.get('/clientes/:id', ClienteController.show);

routes.delete('/clientes/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), ClienteController.delete);

routes.put('/clientes/:id', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        cpf_cnpj: Joi.string(),
        email: Joi.string(),
        telefone: Joi.string(),
        endereco: Joi.string().required(),
        cep: Joi.string(),
        limiteCompra: Joi.number().required().min(10),
    })
}), ClienteController.update);

//////////////Usuarios/////////////////////////////////////////////////////
routes.post('/usuarios', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().email(),
        login: Joi.string().required(),
        senha: Joi.string().required(),
        dataCriacao: Joi.date().required(),
        situacao: Joi.string().required().length(1),
    })
}), UsuarioController.create);

routes.get('/usuarios', UsuarioController.index);

routes.delete('/usuarios/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), UsuarioController.delete);

routes.put('/usuarios/:id', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().email(),
        login: Joi.string().required(),
        senha: Joi.string().required(),
        situacao: Joi.string().required().length(1),
        ultimaAtualizacao: Joi.date().required(),
    })
}), UsuarioController.update);

// //Incidents
// routes.post('/incidents', IncidentController.create);

// routes.get('/incidents', celebrate({
//     [Segments.QUERY]: Joi.object().keys({
//         page: Joi.number(),
//     })
// }),IncidentController.index);

// routes.delete('/incidents/:id', celebrate({
//     [Segments.PARAMS]: Joi.object().keys({
//         id: Joi.number().required(),
//     })
// }), IncidentController.delete);

// //Profile
// routes.get('/profile', celebrate({
//     [Segments.HEADERS]: Joi.object({
//         authorization: Joi.string().required(),
//     }).unknown(),
// }), ProfileController.index);

module.exports = routes;
