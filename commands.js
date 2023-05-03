const path = require("path");
const fs = require("fs");

//import self modules.
const { success } = require("./messages");
const { findArguments } = require("./helpers");

//define data directory.
const personDataDir = path.join(__dirname, "data", "person", "data.json");
const todoDataDir = path.join(__dirname, "data", "todo", "data.json");

exports.createPerson = (argument) => {
    let data = []
  const lastname = findArguments(argument, "lastname")[0].split("=")[1];
  const firstname = findArguments(argument, "firstname")[0].split("=")[0];
  const password = findArguments(argument, "password")[0].split("=")[0];

  const dataProperty = {
    firstname,
    lastname,
    password,
  };
  const dataJson = JSON.stringify(dataProperty);
  const readJsonData = fs.readFileSync(personDataDir).toString();
  const readData = JSON.parse(readJsonData);
  const isArray = Array.isArray(readData);
  if (!isArray) {
    data.push(dataJson)
    fs.writeFile(personDataDir, data, (err) => {
      if (err) {
        console.log(err);
      } else success("person added successfully.");
    });
  }
};

exports.createTodo = (argument) => {
  const taskName = findArguments(argument, "todoname")[0].split("=")[1];
  const data = {
    taskName,
  };
  const dataJson = JSON.stringify(data);
  fs.writeFile(todoDataDir, dataJson, (err) => {
    if (err) {
      return console.log(err);
    } else success("todo added successfully.");
  });
};
