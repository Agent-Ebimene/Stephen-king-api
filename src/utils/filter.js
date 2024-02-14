export const filter = (items, searchQuery, filterParam) => {
  const filteredItems =
    searchQuery && searchQuery.length >= 2
      ? items.filter((item) => {
          return item[filterParam]
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        })
      : items;
  return filteredItems;
};
