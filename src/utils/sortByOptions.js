export function sortByOption(data, option) {
  switch (option) {
    case "Pages":
      return data.sort((a, b) => a.Pages - b.Pages);
    case "Date Created":
      return data.sort(
        (a, b) => new Date(b["Date Created"]) - new Date(a["Date Created"]),
      );
    case "Year":
      return data.sort((a, b) => b.Year - a.Year);
    default:
      return data;
  }
}
