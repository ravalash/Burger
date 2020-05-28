const connection = require("../config/connection");

//Functions for MySql reference
const orm = {
  //Selects all from passed table variable
  selectAll: (tableName) => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableName], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
  //Creates one from table name, columns, and values
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
  //Updates one record based on table name, single column name, single column value, and id
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
  //Deletes a single record based on table name and record ID
  deleteOne: (tableName, recordID) =>{
    return new Promise((resolve, reject) => {
      const queryString = "DELETE FROM ?? WHERE id = ?";
      connection.query(queryString, [tableName, recordID], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
};

module.exports = orm;
