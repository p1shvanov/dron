export const getDataset = (data, dataType, prop) => {
  const filteredData = data.map((obj) => {
    return obj[prop];
  });
  
  if (data.length > 20) {
    return filteredData.slice(data.length - 20);
  }

  return filteredData;
};
