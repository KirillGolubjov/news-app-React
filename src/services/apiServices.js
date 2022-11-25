const apiUrl = 'https://newsapi.org';
// async функция работает с Promise(Обещаниями)
// Promise это объеки который изменится в будущем.
// У Promise есть 3 состояния:
// 1) Pending (В ожидании) - изначальное состояние,
// 2) Fulfilled (Выполненый) - если всё удачно прошло,
// 3) Rejected (Отклонённый) - если произошла ошибка.
// Primises нам нужны для того, чтобы наше приложение могло дальше работать не дожидаясь ответа.
// Ключевое слово await может использоваться только в async функциях
// async функция выполняется вне зависимости от всего остального кода.
// await преображает объект Promise в ответ на запрос.
export async function getEverything(data) {
  const params = new URLSearchParams({
    ...data,
    apiKey: process.env.REACT_APP_API_KEY,
  });
  return await fetch(`${apiUrl}/v2/everything?${params}`);
}
