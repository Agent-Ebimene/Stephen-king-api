export function sortByOption(data, option, table) {
  switch (table) {
    case "books":
      switch (option) {
        case "Pages":
          return [...data].sort((a, b) => a.Pages - b.Pages);
        case "Date Created":
          return [...data].sort((a, b) => {
            const dateA = new Date(a["created_at"]);
            const dateB = new Date(b["created_at"]);
            return dateB - dateA;
          });
        case "Year":
          return [...data].sort((a, b) => b.Year - a.Year);

        default:
          return data;
      }
    case "shorts":
      switch (option) {
        case "year":
          return [...data].sort((a, b) => b.year - a.year);
        default:
          return data;
      }

    case "villains":
      switch (option) {
        case "featured Books":
          return [...data].sort((a, b) => b.books.length - a.books.length);
        case "Date Created":
          return [...data].sort((a, b) => {
            const dateA = new Date(a["created_at"]);
            const dateB = new Date(b["created_at"]);
            return dateB - dateA;
          });
        case "status":
          return [...data].sort((a, b) => {
            if (a.status === "Alive" && b.status === "Deceased") {
              return -1;
            } else if (a.status === "Deceased" && b.status === "Alive") {
              return 1;
            } else {
              return 0;
            }
          });
        default:
          return data;
      }

    default:
      return data;
  }
}
