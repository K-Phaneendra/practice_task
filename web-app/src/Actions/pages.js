import { GET } from "./actionMethods";

export default class Pages {

  async getAllPages() {
    try {
      const API_BASE_URL = process.env.REACT_APP_API;
      const pathName = "pages";
      const url = `${API_BASE_URL}${pathName}`;
      const response = await GET(url);
      return response.data;
    } catch (err) {
      alert(err.message);
      return null;
    }
  }
}
