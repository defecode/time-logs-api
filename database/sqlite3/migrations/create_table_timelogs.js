/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.raw(`CREATE TABLE timelogs
    (
      start DATETIME NOT NULL,
      end DATETIME NOT NULL,
      description TEXT NOT NULL
    );`)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.raw(`
    DROP TABLE IF EXISTS timelogs;
  `)
};
