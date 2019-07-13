import axios from "axios";
const setAuthToken = (token, userId) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
    axios.defaults.headers.common["UserId"] = userId;
  } else {
    delete axios.defaults.headers.common["Authorization"];
    delete axios.defaults.headers.common["UserId"];
  }
};

export default setAuthToken;
