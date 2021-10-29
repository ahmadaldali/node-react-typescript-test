import axios from "axios";
require("dotenv").config();

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api/",
  headers: {
    "Content-type": "application/json"
  }
});