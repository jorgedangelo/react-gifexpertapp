export const getGifts = async (category) => {
  const apiKey = '3ByKj8qSqbs54uyrPOZbBGJraZDWIY15';
  const limit = 5;
  const url = `https://api.giphy.com/v1/gifs/search?lang=es&q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({ id: img.id, title: img.title, url: img.images?.downsized_medium.url }));
  return gifs;
};
