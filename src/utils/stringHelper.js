export const DateFormat = (props) => {
  let date = new Date(props);
  let year = date.getFullYear();
  return year;
};

export const TimeFormat = (props) => {
  const hour = Math.floor(props / 60);
  let minute = props % 60;
  if (minute < 10) minute = "0" + minute;
  const newTime = hour + "h" + minute + "m";
  return newTime;
};
