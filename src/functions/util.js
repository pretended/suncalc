export function parseDate(dateStr, timeStr) {
  let date = dateStr.split("-");
  let year = date[0];
  let month = date[1] - 1;
  let day = date[2];
  let time = timeStr.split(":");
  let hour = time[0];
  let minutes = time[1];
  return new Date(year, month, day, hour, minutes, 0);
}
