function formatDate(string: string, displayYear = false) {
  const options = {
    month: "long",
    day: "numeric",
    year: displayYear ? "numeric" : undefined,
  };
  return new Date(string).toLocaleDateString(
    "fr-FR",
    options as Intl.DateTimeFormatOptions
  );
}

function formatTime(string: string) {
  const options = { hour: "numeric", minute: "numeric" };
  return new Date(string).toLocaleTimeString(
    "fr-FR",
    options as Intl.DateTimeFormatOptions
  );
}

export { formatDate, formatTime };
