exports.findArguments = (argument, needItem) =>{
    let result = [];
    argument.filter((items) => {
      const itemsNames = items.split("=");
      itemsNames.filter((itemsName) => {
        if (itemsName == needItem) {
          return result.push(items);
        }
      });
      if (result.length > 0) {
        return result;
      }
    });
    return result;
  }