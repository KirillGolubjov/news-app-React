const apiUrl = 'https://newsapi.org';

export async function getEverything(data) {
  const params = new URLSearchParams({
    ...data,
    apiKey: process.env.REACT_APP_API_KEY,
  });
  return await fetch(`${apiUrl}/v2/everything?${params}`);
}

export async function getSources(data) {
  const params = new URLSearchParams({
    ...data,
    apiKey: process.env.REACT_APP_API_KEY,
  });
  return await fetch(`${apiUrl}/v2/top-headlines/sources?${params}`);
}
