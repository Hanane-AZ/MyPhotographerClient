import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

const apiHandler = {
  service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getAllPictures() {
    return service
      .get("/api/picture/home")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getUserPictures() {
    return service
      .get("/api/picture/myphotos")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updatePicture(pictureId, data) {
    return service
      .patch(`/api/picture/${pictureId}`, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  addPicture(data) {
    return service
      .post("/api/picture", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  removePicture(pictureId) {
    return service
      .delete(`/api/picture/${pictureId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};

export default apiHandler;
