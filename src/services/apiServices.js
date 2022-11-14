export async function getEverything(data) {
  return await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=cd5eaaf55e834b5eb73c67ef48bfbcdd`
  );
}
