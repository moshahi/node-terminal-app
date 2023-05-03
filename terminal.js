const {
  createPerson,
  createTodo,
  getUsersList,
  getTodoList,
} = require("./commands");
const { warning } = require("./messages");

const argument = process.argv;

if (argument[2] == "create") {
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
} else if (argument[2] == "list") {
  switch (argument[3]) {
    case "person":
      getUsersList();
      break;
    case "todo":
      getTodoList();
      break;
    default:
      warning("this command is not valid please try again.");
      break;
  }
} else {
  warning("this command is not valid please try again.");
}

// console.log(argu);
