export const dateFormat = (dateStr) => {
  return new Date(dateStr).toLocaleDateString().replace(/\//g, "-");
};
