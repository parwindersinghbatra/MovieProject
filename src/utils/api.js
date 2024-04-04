import axios from "axios";

async function fetchApi(url, data) {
  try {
    const result = await axios.get(url, data);
    return result;
  } catch (e) {
    console.error(e);
  }
}

export { fetchApi };

// https://image.tmdb.org/t/p/original
