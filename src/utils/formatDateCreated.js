export const formatDateCreated = (dateCreated) => {
  const date = new Date(dateCreated);
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return formattedDate;
};
