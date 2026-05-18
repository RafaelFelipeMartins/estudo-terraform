import type { Knex } from "knex"; // Importa apenas como TIPO (o ESLint não reclama)

export async function up(_knex: Knex): Promise<void> { // Agora pode usar Knex direto aqui
  return _knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary();
    table.string("title", 255).notNullable();
    table.text("description").nullable();
    table.string("status", 50).notNullable().defaultTo("pending"); 
    table.timestamps(true, true); 
  });
}

export async function down(_knex: Knex): Promise<void> { // E aqui também
  return _knex.schema.dropTable("tasks");
}