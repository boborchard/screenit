import axios from 'axios';

const apiUrl = 'https://5fadd4f12ec98b0016048b4a.mockapi.io/api/v1/movies';

const getAllMovies = (onSuccess) => {
  axios.get(apiUrl)
    .then(onSuccess);
}

const getMovie = (id, onSuccess) => {
  axios.get(`${apiUrl}/${id}`)
    .then(onSuccess);
}

const addMovie = (data, onSuccess) => {
  axios.post(apiUrl, data)
    .then(onSuccess);
};

const updateMovie = (id, data, onSuccess) => {
  axios.put(`${apiUrl}/${id}`, data)
    .then(onSuccess);
};

const removeMovie = (id, onSuccess) => {
  axios.delete(`${apiUrl}/${id}`)
    .then(onSuccess);
};

export {
  getAllMovies,
  getMovie,
  addMovie,
  updateMovie,
  removeMovie
}
