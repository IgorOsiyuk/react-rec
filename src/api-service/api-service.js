class ApiService {
  BASE_URL = "https://reqres.in/api/";

  async getResource(url) {
    const res = await fetch(`${this.BASE_URL}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }
    return await res.json();
  }

  async getAllUsers() {
    const res = await this.getResource(`users?per_page=12`);
    return res;
  }
}

export default ApiService;
