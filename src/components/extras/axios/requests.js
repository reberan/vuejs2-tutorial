import axios from "axios";

// Custom axios instance
// @link https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index
// @link https://github.com/axios/axios
export const auth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/"
});

export const request = axios.create({
  baseURL: "https://vuejs2-tutorial-auth.firebaseio.com/"
});
