const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { id } = req.body;

        console.log(id);

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return res.status(400).json({ error: 'ONG não encontrada!' })
        }

        return res.json(ong);
    },
};