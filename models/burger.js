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
    console.log("Devouring burger "+id)
    const result = await orm.updateOne("burgers", cols, vals, id);
    return result;
  },
  delete: async(id) =>{
    console.log("Deleting burger "+id);
    const result=await orm.deleteOne("burgers", id);
    return result;
  }
};

module.exports = burger;
