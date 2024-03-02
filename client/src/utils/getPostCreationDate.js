export const getPostCreationDate = (timestamp) => {
  const date = new Date(timestamp);
  const currentDate = new Date();
  const timeDifferenceInSeconds = Math.floor((currentDate - date) / 1000);

  // Check if the date is less than a minute before the current date
  if (timeDifferenceInSeconds < 60) {
    return "now";
  }

  // Check if the date is less than an hour before the current date
  if (timeDifferenceInSeconds < 3600) {
    const minutesDifference = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutesDifference}m`;
  }

  const currentYear = currentDate.getFullYear();

  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? 'PM' : 'AM';

  let formattedDate = `${day} ${month}`;

  // Add the year only if it's different from the current year
  if (year !== currentYear) {
    formattedDate += ` ${year}`;
  }

  const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${period}`;

  return `${formattedDate} at ${formattedTime}`;
}