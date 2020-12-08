'use strict';
const axios = require('axios');
const config = require('@/config/default.json');

const joinGame = function (gameCode, pseudo) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `${config.backUrl}/games/join`,
            headers: {
                authorization: 'Bearer ' + sessionStorage.getItem('jwt')
            },
            params: {
                accessCode: gameCode,
                pseudo: pseudo
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
