import { Knex } from "knex";

export async function up(_knex: Knex): Promise<void> {
  return _knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary(); // ID numérico auto-incremento
    table.string("title", 255).notNullable(); // Título da tarefa (obrigatório)
    table.text("description").nullable(); // Descrição detalhada (opcional)
    
    // Status da tarefa (padrão: 'pending')
    table.string("status", 50).notNullable().defaultTo("pending"); 
    
    // Cria os campos 'created_at' e 'updated_at' automaticamente
    table.timestamps(true, true); 
  });
}

export async function down(_knex: Knex): Promise<void> {
  return _knex.schema.dropTable("tasks");
}