exports.up = function (knex) {
    return knex.schema.createTable('compras', function (table) {
        table.increments();

        table.string('descricao').notNullable();
        table.decimal('valor').notNullable();
        table.date('dataCriacao').notNullable();

        table.string('cliente_id').notNullable();
        table.foreign('cliente_id').references('id').inTable('clientes');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTale('compras');
};