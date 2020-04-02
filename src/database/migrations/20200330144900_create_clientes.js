exports.up = function (knex) {
    return knex.schema.createTable('clientes', function (table) {
        table.increments();
        table.string('nome').notNullable();
        table.string('cpf_cnpj');
        table.string('email');
        table.string('telefone');
        table.string('endereco').notNullable();
        table.string('cep');
        table.decimal('limiteCompra').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTale('clientes');
};
