export async function up(_knex) {
    return _knex.schema.createTable("tasks", (table) => {
        table.increments("id").primary();
        table.string("title", 255).notNullable();
        table.text("description").nullable();
        table.string("status", 50).notNullable().defaultTo("pending");
        table.timestamps(true, true);
    });
}
export async function down(_knex) {
    return _knex.schema.dropTable("tasks");
}
