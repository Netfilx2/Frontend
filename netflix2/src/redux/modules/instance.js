import axios from "axios";

const instance = axios.create({
  baseURL: "http://54.180.89.34:8080/",
});

const Token = localStorage.getItem("Token");
const Retoken = localStorage.getItem("Retoken");

instance.defaults.headers.common["Authorization"] = Token;
instance.defaults.headers.common["Refresh-Token"] = Retoken;

export default instance;
