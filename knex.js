var environment = process.env.NODE_ENV || 'development';
var knexConfig = require('./knexfile')[environment];

module.exports = require('knex')(knexConfig);