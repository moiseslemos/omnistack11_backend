const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        const usuarios = await connection('usuarios').select('*');
        return res.json(usuarios);
    },

    async create(req, res) {
        const { nome, email, login, senha, dataCriacao, situacao, cliente_id } = req.body;

        const [id] = await connection('usuarios').insert({
            nome,
            email,
            login,
            senha,
            dataCriacao,
            situacao,
            cliente_id
        });

        return res.json({ id });
    },

    async delete(req, res) {
        const { id } = req.params;

        await connection('usuarios').where('id', id).delete();
        return res.status(204).send();
    },

    async update(req, res) {
        const { id } = req.params;

        await connection('usuarios').where('id', id).update(req.body);

        return res.status(204).send();
    },
};