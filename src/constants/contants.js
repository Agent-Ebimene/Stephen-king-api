export const Tab = {
  BOOKS: "books",
  SHORTS: "shorts",
  VILLAINS: "villains",
};

export const bookSortOptions = [
  { label: "Pages", value: "Pages" },
  { label: "Date Created", value: "Date Created" },
  { label: "Year", value: "Year" },
];

export const shortSortOptions = [{ label: "Year", value: "Year" }];

export const villainSortOptions = [
  { label: "No of Featured Books", value: "featured Books" },
  { label: "Status", value: "Status" },
  { label: "Date Created", value: "date created" },
];

export const shortsTableColumns = [
  { label: "Title", dataKey: "title" },
  { label: "Type", dataKey: "type" },
  { label: "Originally Published In", dataKey: "originallyPublishedIn" },
  { label: "Year", dataKey: "year" },
  { label: "Date Created", dataKey: "created_at" },
];
export const booksTableColumns = [
  { label: "Title", dataKey: "Title" },
  { label: "Publisher", dataKey: "Publisher" },
  { label: "ISBN", dataKey: "ISBN" },
  { label: "Pages", dataKey: "Pages" },
  { label: "Date Created", dataKey: "created_at" },
  { label: "Year", dataKey: "Year" },
];
export const villainsTableColumns = [
  { label: "Name", dataKey: "name" },
  { label: "Gender", dataKey: "gender" },
  { label: "Status", dataKey: "status" },
  { label: "No of Featured Books", dataKey: "books.length" },
  { label: "No of Featured Shorts", dataKey: "shorts.length" },
  { label: "Date Created", dataKey: "created_at" },
];
