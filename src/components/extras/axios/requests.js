import axios from "axios";

// Custom axios instance
// @link https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index
// @link https://github.com/axios/axios
export const auth = axios.create({
  baseURL: process.env.VUE_APP_FIREBASE_AUTH_URL
});

export const request = axios.create({
  baseURL: process.env.VUE_APP_FIREBASE_BASE_URL_TUTORIAL_AUTH
});
