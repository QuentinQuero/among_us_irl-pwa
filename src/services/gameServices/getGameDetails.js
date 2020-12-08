'use strict';

const axios = require('axios');
const config = require('@/config/default.json');

const getGameDetails = function (gameId) {
    return new Promise((resolve, reject) => {
       axios({
           method: 'get',
           url: `${config.backUrl}/games/${gameId}`,
           headers: {
               authorization: 'Bearer ' + sessionStorage.getItem('jwt')
           }
       }).then((response) => {
           if (response.data.status) {
               resolve(response.data)
           } else {
               reject('Error happend')
           }
       }).catch((error) => {
           // TODO => test the error
           console.log(error);
           reject(error);
       })
    });
}

module.exports = getGameDetails;
