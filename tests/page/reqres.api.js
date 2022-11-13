import BaseAPI from "$root/page/base.api";

const reqrestApi = {
    register: (data) => BaseAPI.post('/register', data),
    list_user: (param) => BaseAPI.get('/users?page=${param}')
}

export default reqrestApi;