export const filterList = (q, list, searchFields) => {
  const searchQuery = q.toLowerCase();
  return list.filter((item) => {
    let match = false;
    searchFields.forEach((field) => {
      const searchValue = item[field].toString().toLowerCase();
      if (searchValue.indexOf(searchQuery) !== -1) {
        match = true;
      }
    });
    return match;
  });
};
