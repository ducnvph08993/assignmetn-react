import http from "./axiosHttp";

const getAll = () => {
    return http.get("/products");
};
const getCate = () => {
    return http.get("/categories");
};
const get = id => {
    return http.get(`/products/${id}`);
};

const create = data => {
    return http.post("/products", data);
};
const createCate = data => {
    return http.post("/categories", data);
}
const update = (id, data) => {
    return http.put(`/products/${id}`, data);
};
const updateCate = (id, data) => {
    return http.put(`/categories/${id}`, data);
}
const remove = id => {
    return http.delete(`/products/${id}`);
};
const removeCate = id => {
    return http.delete(`/products/${id}`);
}
export default {
    getAll,
    get,
    create,
    update,
    remove,
    getCate,
    createCate,
    removeCate,
    updateCate,
};