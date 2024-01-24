export const formatDateToIndian = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Kolkata",
  };

  return new Date(date).toLocaleDateString("en-IN", options);
};

export const formatDateToISO = (date) => {
  if (date) {
    const dateObject = new Date(date);
    return dateObject.toISOString().split("T")[0];
  }
  return;
};

export const getPagination = (limit, page, totalEntries) => {
  const currentPage = page;
  const itemsPerPage = limit;
  const totalPages = Math.ceil(totalEntries / itemsPerPage);
  const skip = (currentPage - 1) * itemsPerPage;

  return {
    skip,
    itemsPerPage,
    currentPage,
    totalPages,
  };
};
