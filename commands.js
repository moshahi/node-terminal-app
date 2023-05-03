const path = require("path");
const fs = require("fs");

//import self modules.
const { success, info } = require("./messages");
const { findArguments } = require("./helpers");

//define data directory.
const personDataDir = path.join(__dirname, "data", "person", "data.json");
const todoDataDir = path.join(__dirname, "data", "todo", "data.json");

exports.createPerson = (argument) => {
  let data = [];
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
    data.push(dataJson);
    fs.writeFileSync(personDataDir, data);
    success("person added successfully.");
  } else {
    data = readData;
    data.push(dataProperty);
    const result = JSON.stringify(data);
    fs.writeFileSync(personDataDir, result);
    success("person added successfully.");
  }
};

exports.getUsersList = () => {
  const data = JSON.parse(fs.readFileSync(personDataDir).toString());
  console.log(data);
  if (data.length > 0) {
    return console.log(data);
  }
  info("person doesn't have any data.");
};

exports.createTodo = (argument) => {
  const taskName = findArguments(argument, "todoname")[0].split("=")[1];
  let data = [];
  const dataProperty = {
    taskName,
  };
  const dataJson = JSON.stringify(dataProperty);
  const readJsonData = fs.readFileSync(personDataDir).toString();
  const readData = JSON.parse(readJsonData);
  const isArray = Array.isArray(readData);
  if (!isArray) {
    data.push(dataJson);
    fs.writeFileSync(personDataDir, data);
    success("todo added successfully.");
  } else {
    data = readData;
    data.push(dataProperty);
    const result = JSON.stringify(data);
    fs.writeFileSync(personDataDir, result);
    success("todo added successfully.");
  }
};

exports.getTodoList = () => {
  const data = JSON.parse(fs.readFileSync(todoDataDir).toString());
  if (data.length > 0) {
    return console.log(data);
  }
  info("todo doesn't have any data.");
};
