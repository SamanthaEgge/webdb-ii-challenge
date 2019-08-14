// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    // connection: {
    //   filename: './data/car-dealer.db3',
    // },
    connection: {
      host: 'localhost',
      database: 'webdb3',
      user:     'postgres',
      password: 'Chaoticneu21'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

// RULE: EVERY SCHEMA CHANGE NEEDS A NEW MIGRATION

// npx knex init
// npx knex migrate:make fruits_table
// npx knex migrate:latest
// npx knex migrate:rollback
// npx knex seed:make 001-fruits
// npx knex seed:run
