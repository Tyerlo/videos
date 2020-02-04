import axios from "axios";
const KEY = "AIzaSyD_qddYZ6DxlHN3yetGpLfFLH1TNND_BU8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`
  }
});
