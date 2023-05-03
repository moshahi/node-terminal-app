const chalk = require('chalk');

exports.help = (message)=>{
    return console.log(chalk.blue(message))
}

exports.info = (message) =>{
    return console.log(chalk.cyan(message));
}
exports.success = (message) =>{
    return console.log(chalk.green(message));
}
exports.error = (message) =>{
    return console.log(chalk.red(message));
}

exports.warning = (message)=>{
    return console.log(chalk.yellow(message));
}