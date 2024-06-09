export const getLabels = (data) => {
  if (data.length > 20) {
    return data.slice(data.length - 20).map((item) => Math.floor(item['time_boot_ms'] / 1000));
  }

  return data.map((item) => Math.floor(item['time_boot_ms'] / 1000));
};
