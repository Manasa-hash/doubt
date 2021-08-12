const addDays = require("date-fns/addDays");
const format = require("date-fns/format");
const func = (days) => {
  const result = addDays(new Date(2020, 7, 22), days);
  const final = format(result, "dd-MM-yyyy");
  return final;
};
module.exports = func;
