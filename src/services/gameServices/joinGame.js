'use strict';
const axios = require('axios');
const config = require('@/config/default.json');

const joinGame = function (gameCode) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `${config.backUrl}/games/join`,
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt')
            },
            params: {
                accessCode: gameCode
            }
        }).then((response) => {
            // TODO add here a test
            resolve(response.data)
        }).catch(() => {
            reject('User not logged')
        })
    })
};

module.exports = joinGame;
