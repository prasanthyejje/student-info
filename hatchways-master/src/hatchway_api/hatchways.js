import axios from "axios";

const baseURL = "https://www.hatchways.io/api/assessment/students"

export default axios.create({ baseURL });
