import axios from "axios";
const BASE_URL = "https://gtrend.yapie.me";
export const fetchRepositories = (params: Object) =>
  axios.get(`${BASE_URL}/repositories`, { params });
export const fetchDevelopers = (params: Object) =>
  axios.get(`${BASE_URL}/developers`, { params });
