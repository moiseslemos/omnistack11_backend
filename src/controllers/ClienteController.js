const connection = require('../database/connection');
//const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async index(req, res) {
        const clientes = await connection('clientes').select('*');
        return res.json(clientes);
    },

    async create(req, res) {
        const { nome, cpf_cnpj, email, telefone, endereco, cep, limiteCompra } = req.body;

        const [id] = await connection('clientes').insert({
            nome,
            cpf_cnpj,
            email,
            telefone,
            endereco,
            cep,
            limiteCompra
        });

        return res.json({ id });
    },

    async delete(req, res) {
        const { id } = req.params;

        await connection('clientes').where('id', id).delete();
        return res.status(204).send();
    },

    async update(req, res) {
        const { id } = req.params;

        await connection('clientes').where('id', id).update(req.body);

        return res.status(204).send();
    },

    async show(req, res) {
        const { id } = req.params;

        const cliente = await connection('clientes').where('id', id).select('*');
        return res.json(cliente);
    },
};