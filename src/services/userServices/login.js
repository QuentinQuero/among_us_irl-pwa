'use strict';
const axios = require('axios');
const config = require('../../config/default.json');

const login = function (email, password) {
    return new Promise((resolve) => {
        axios({
            method: 'post',
            url: `${config.backUrl}/users/login`,
            data: {
                email: email,
                password: password
            }
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            resolve(error);
        });
    })
};

module.exports = login;