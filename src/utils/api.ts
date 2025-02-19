import axios from "axios";
const baseURL = axios.create({
  baseURL: "https://ba6d79ffce23ccb2.mokky.dev/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseURL;
