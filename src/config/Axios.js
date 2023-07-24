import axios from "axios";
import config from "./config.json";

const Axios = axios.create({
  baseURL: config.baseUrl + "/api",
  headers: {},
});

export default Axios;
