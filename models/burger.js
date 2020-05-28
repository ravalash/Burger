const orm = require("../config/orm");

//Definitions for burger specific functions.
const burger = {
  //Retrieves all burgers from table
  all: async () => {
    const result = await orm.selectAll("burgers");
    return result;
  },
  //Creates one burger with name and devoured status
  create: async (cols, vals) => {
    const result = await orm.insertOne("burgers", cols, [vals]);
    return result;
  },
  //Updates devoured status of one burger by ID
  update: async (cols, vals, id) => {
    const result = await orm.updateOne("burgers", cols, vals, id);
    return result;
  },
  //Removes one devoured burger from the database based on ID
  delete: async (id) => {
    const result = await orm.deleteOne("burgers", id);
    return result;
  },
};

module.exports = burger;
