export default function DateFormatter(dateString) {
  const dateParts = dateString.split("-");
  const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return formattedDate;
}
