'use strict';

const axios = require('axios');
const config = require('../../config/default.json');

const signUp = function (email, password, confirmPassword) {
    return new Promise((resolve, rejected) => {
        axios({
            method: 'post',
            url: `${config.backUrl}/users/signup`,
            data: {
                user: {
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                }
            }
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            rejected(error);
        });
    });
};

module.exports = signUp;