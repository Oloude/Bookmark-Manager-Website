const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function formateDate(date: string | null) {
  if (!date) return;
  let newDate = new Date(date);
  return `${newDate.getDate()}  ${months[newDate.getMonth()]}`;
}
