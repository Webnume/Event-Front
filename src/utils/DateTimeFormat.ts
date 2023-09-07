function formatDate(string: string, displayYear = false) {
  var options = {
    month: "long",
    day: "numeric",
    year: displayYear ? "numeric" : undefined,
    timeZone: "UTC",
  };
  return new Date(string).toLocaleDateString("fr-FR", options);
}

function formatTime(string: string) {
  var options = { hour: "numeric", minute: "numeric" };
  return new Date(string).toLocaleTimeString("fr-FR", options);
}

export { formatDate, formatTime };
