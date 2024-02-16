module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  databases: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
