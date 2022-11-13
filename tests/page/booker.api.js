import BaseAPI2 from "$root/page/base.api2";

const bookerApi = {
    get_booking: () => BaseAPI2.get('/booking/2210'),
    create_booking: (data) => BaseAPI2.post('/booking', data),
    user_auth: (data) => BaseAPI2.post('/auth', data)
}

export default bookerApi;