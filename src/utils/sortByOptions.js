export function sortByOption(data, option) {
  switch (option) {
    case "Pages":
      return data.sort((a, b) => a.Pages - b.Pages);
    case "Date Created":
      return data.sort((a, b) => {
        const dateA = new Date(a["created_at"]);
        const dateB = new Date(b["created_at"]);

        // Extract only the date and time components
        const timeA = dateA.getTime() % (24 * 60 * 60 * 1000);
        const timeB = dateB.getTime() % (24 * 60 * 60 * 1000);

        // Compare the extracted time components
        return timeB - timeA;
      });
    case "Year":
      return data.sort((a, b) => b.Year - a.Year);
    default:
      return data;
  }
}
