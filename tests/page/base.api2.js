import dotenv from 'dotenv';
import axios from 'axios';
import querystring from 'querystring';
import process from 'process';

dotenv.config();

const BaseAPI2 = axios.create({
    baseURL: process.env.BASE_URL2,
    headers: {
        "content-type": "application/json",
        "accept": "*/*"
    },
    validateStatus: function () {
        return true;
    }
});

export default BaseAPI2;