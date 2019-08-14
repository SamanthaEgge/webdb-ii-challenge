exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("VIN", 255)
      .unique()
      .notNullable();
    tbl.string("year", 255).notNullable();
    tbl.string("make", 255).notNullable();
    tbl.string("model", 255).notNullable();
    tbl.string("mileage", 20).notNullable();
    tbl.string("transmissionType", 255);
    tbl.string("titleStatus", 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};