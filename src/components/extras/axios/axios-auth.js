import axios from "axios";

// Custom axios instance
// @link https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index
// @link https://github.com/axios/axios
const instance = axios.create({
  baseURL: "https://vuejs2-tutorial-1a9a6.firebaseio.com"
});

instance.defaults.headers["Authorization"] = "AUTH_TOKEN";

export default instance;
