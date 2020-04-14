import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID VwXCnOne_vzF4MIcfJ67VpQC-Qw3CVFdA8V9jwVpVZE",
  },
});
