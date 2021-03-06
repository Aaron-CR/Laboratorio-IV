import http from "../common/http";

class DataService {
    getAll() {
        return http.get("");
    }

    getOne(id) {
        return http.get(`/${id}`);
    }

    save(data) {
        return http.post("", data);
    }

    update(id, data) {
        return http.put(`/${id}`, data);
    }

    delete(id) {
        return http.delete(`/${id}`);
    }

    uploadFile(file) {
        return http.post("/images", file);
    }
}   

export default new DataService();
