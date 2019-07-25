// Utility function to generate pagination based on total number of
// items divided by the amount of items per page

const generatePageCount = (items, pageSize) => {
  const itemsCount = items.length;
  return Math.ceil(itemsCount / pageSize);
};

export default generatePageCount;
