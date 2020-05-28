const connection = require("../config/connection");

const orm = {
  selectAll: (tableName) => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableName], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
  insertOne: (tableName, colName, colValue) => {
    return new Promise((resolve, reject) => {
      const queryString = "INSERT INTO ?? (??) VALUES ?";
      console.log(colValue);
      console.log(queryString, [tableName, colName, colValue]);
      connection.query(
        queryString,
        [tableName, colName, colValue],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  },
  updateOne: (tableName, colName, colValue, recordID) => {
    return new Promise((resolve, reject) => {
      const queryString = "update ?? SET ?? = ? where id = ?";
      connection.query(
        queryString,
        [tableName, colName, colValue, recordID],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  },
};

module.exports = orm;
