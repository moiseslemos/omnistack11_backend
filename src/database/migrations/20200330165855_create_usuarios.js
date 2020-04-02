exports.up = function (knex) {
    return knex.schema.createTable('usuarios', function (table) {
        table.increments();
        table.string('nome').notNullable();
        table.string('email');
        table.string('login').notNullable();
        table.string('senha').notNullable();
        table.date('dataCriacao').notNullable();
        table.string('situacao').notNullable();
        table.date('ultimaAtualizacao');

        table.string('cliente_id');
        table.foreign('cliente_id').references('id').inTable('clientes');        
    });
};

exports.down = function (knex) {
    return knex.schema.dropTale('usuarios');
};
