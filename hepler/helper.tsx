const number_format = (value: number) =>
  value.toLocaleString(undefined, { maximumFractionDigits: 2 });

const format_date = (date: any, seperate = "-") => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join(seperate);
};

export { number_format, format_date };
