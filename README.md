## Burger
![Github Issues](https://img.shields.io/github/issues/ravalash/Burger)![Github Forks](https://img.shields.io/github/forks/ravalash/Burger)![Github Stars](https://img.shields.io/github/stars/ravalash/Burger)![Github Issues](https://img.shields.io/github/license/ravalash/Burger)

## Description
Week 13 Homework - Eat-Da-Burger

## Motivation
This project will simulate a customer facing restaurant site that allows creating burgers to be eaten, recording when they've been eaten, and deleting them from the list. It will allow for development of skills in MySql, Handlebars, Npde, Express, and MVC programming design.

## Code Style
This project is written using JavaScript and uses the MVC model to break up program responsibility in a structured format. 

General MySQL queries are handled by the orm.js file in the config directory and return a promise that can be referenced to determine success.

```javascript
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
  ```

Functions specific to the working with burger creation are handled by the burger.js file in the models folder and pass the result of the query back for reference.

  ```javascript
const burger = {
  all: async () => {
    const result = await orm.selectAll("burgers");
    return result;
  },
  ```

Routes to request data and return it to the front end are controlled by the burgers_controller.js file in the controllers directory and ultimately evaluate query returns to determine how to notify the user.

  ```javascript
router.get("/", async (req, res) => {
  const result = await burger.all();
  res.render("index", { burgers: result });
});
  ```
Templates for presentation in the front end are supplied by handlebars files using the Bootstrap framework for styling.

  ```javascript
            <div class="card border-secondary bg-light" style="width: 100%; height:100%;font-family: 'DM Serif Text', serif;">
                <div class="card-header">
                    <h2 align="center" >Burgers to Eat</h2>
                </div>
                <ul class="list-group list-group-flush" align="center">
                    {{#each burgers}}
                    {{#unless devoured}}
                    <li class="list-group-item">
                        {{burger_name}}

                        <button class="devour-burger btn btn-success" style="font-family: 'Bangers', cursive;"
                            data-id="{{id}}">
                            DEVOUR!!!
                        </button>

                    </li>
                    {{/unless}}
                    {{/each}}
                </ul>
            </div>
  ```


Burgers can be created, devoured, and deleted from the website and data is stored server side in the MySQL database.

![Main Page Screenshot](/screenshots/mainview.jpg "Main View")

## Features
In addition to required functionality, this app offers the option to delete past burgers as well.

Integration with Bootstrap allows for styling with minimal CSS requirements.

Site is mobile responsive for operation on smaller screens.

# How to Use
Dependencies must be installed individually or via package.json file
* express
* express-handlebars
* MySql


Record burgers that you wish to eat and hit "Add Burger"
To log an eaten burger, click "Devour" next to the corresponding burger.
To erase a burger from the eaten list, click "Hide the Evidence" next to the corresponding burger.