let knex = require("../knex");

let getTimelogs = () => {
  return knex(`timelogs`).orderBy('start', 'desc').then((data) => data);
};

let newTimelogs = (insertedData) => {
  return knex(`timelogs`)
    .insert(insertedData)
    .then((data) => data);
};

module.exports = {
    newTimelogs,
    getTimelogs,
  };