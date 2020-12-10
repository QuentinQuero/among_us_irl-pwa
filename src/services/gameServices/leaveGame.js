'use strict';

const axios = require('axios');
const config = require('@/config/default.json');

const leaveGame = function (gameId, playerId) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `${config.backUrl}/games/leave`,
            headers: {
                authorization: 'Bearer ' + sessionStorage.getItem('jwt')
            },
            params: {
                gameId: gameId,
                playerId: playerId
            }
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        })
    });
};

module.exports = leaveGame;
