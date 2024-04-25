import axios from "axios";

// to prevent client requests to NOT be blocked by CORS
export default axios.create({
  baseURL: "",
});
