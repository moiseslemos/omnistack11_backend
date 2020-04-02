const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { login, senha } = req.body;

        const usuario = await connection('usuarios')
            .where('login', login)
            .andWhere('senha', senha)
            .select('nome')
            .first();

        if (!usuario) {
            return res.status(400).json({ error: 'Usuário não encontrado!' })
        }

        return res.json(usuario);
    },
};