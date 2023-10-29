import http from "../http-common";

class UserService {
  getAll() {
    return http.get("/users");
  }

  create(data) {
    return http.post("/users", data);
  }

  update(data) {
    return http.put("/users", data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }

}

export default new UserService();
