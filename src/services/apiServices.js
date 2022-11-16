export async function getEverything(data) {
  return await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=` +
      process.env.REACT_APP_API_KEY
  );
}
