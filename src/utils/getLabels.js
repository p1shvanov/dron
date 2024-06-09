export const getLabels = (data) => {
  console.log('data',data)
  if (data.length > 20) {
    return data.slice(data.length - 20).map((item) => Math.floor(item['time_boot_ms'] / 1000));
  }

  return data.map((item) => Math.floor(item['time_boot_ms'] / 1000));
};

// export const getLabels = (data) => {
//   console.log('data', data); // This line will show you if data is undefined

//   if (data === undefined) {
//     // Handle the case where data is undefined
//     console.error('Error: Data is undefined in getLabels function.');
//     return []; // Or return a default value, such as an empty array
//   }

//   const currentDate = new Date();
//   const currentHours = currentDate.getHours();
//   const currentMinutes = currentDate.getMinutes();

//   // Проверка наличия поля 'time_boot_ms' в первом элементе массива
//   if (data.length > 0 && 'time_boot_ms' in data[0]) {
//     // Если поле есть, то используйте его для расчета секунд
//     if (data.length > 20) {
//       return data.slice(data.length - 20).map((item) => {
//         item.currentTime = `${currentHours}:${currentMinutes}`; // Добавляем свойство 
//         return Math.floor(item['time_boot_ms'] / 1000);
//       });
//     }
//     return data.map((item) => {
//       item.currentTime = `${currentHours}:${currentMinutes}`; // Добавляем свойство 
//       return Math.floor(item['time_boot_ms'] / 1000);
//     });
//   } else {
//     // Если поля нет, то возвращайте секунды (предполагается, что данные в секундах)
//     if (data.length > 20) {
//       return data.slice(data.length - 20).map((item) => {
//         item.currentTime = `${currentHours}:${currentMinutes}`; // Добавляем свойство 
//         return item;
//       });
//     }
//     return data.map((item) => {
//       item.currentTime = `${currentHours}:${currentMinutes}`; // Добавляем свойство 
//       return item;
//     });
//   }
// };

