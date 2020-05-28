const orm = require("../config/orm");

const burger = {
  all: async () => {
    const result = await orm.selectAll("burgers");
    return result;
  },
  create: async (cols, vals) => {
    console.log("burger.js create " + cols + " " + vals);
    const result = await orm.insertOne("burgers", cols, [vals]);
    return result;
  },
  update: async (cols, vals, id) => {
    const result = orm.updateOne("burgers", cols, vals, id);
    return result;
  },
};

module.exports = burger;
