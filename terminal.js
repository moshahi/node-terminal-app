const { createPerson, createTodo } = require("./commands");
const { warning } = require("./messages");

const argument = process.argv;

if ((argument[2] = "create")) {

  switch (argument[3]) {
    case "person":
      createPerson(argument);
      break;
    case "todo":
      createTodo(argument);
      break;
    default:
      console.log(warning("this command is not valid please try again."));
      break;
  }
}

// console.log(argu);
