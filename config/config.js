module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME || 'user1',
    password: process.env.DATABASE_PASSWORD || 'password1',
    database: process.env.DATABASE_NAME || 'pocdb',
    host: process.env.DATABASE_HOSTNAME || '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: process.env.DATABASE_USERNAME || 'user1',
    password: process.env.DATABASE_PASSWORD || 'password1',
    database: process.env.DATABASE_NAME || 'pocdb',
    host: process.env.DATABASE_HOSTNAME || '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOSTNAME || 'localhost',
    dialect: 'mysql',
    use_env_variable: 'DATABASE_URL'
  }
};
