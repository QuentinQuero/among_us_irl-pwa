'use strict';

const axios = require('axios');
const config = require('@/config/default.json');

const getUserPlayerAndActiveGame = function () {
    return new Promise ((resolve, reject) => {
       axios({
           method: 'get',
           url: `${config.backUrl}/users/getPlayerAndActiveGame`,
           headers: {
               authorization: 'Bearer ' + sessionStorage.getItem('jwt')
           }
       }).then((response) => {
           resolve(response.data);
       }).catch(() => {
           reject('User not logged')
       })
    });
};


module.exports = getUserPlayerAndActiveGame;
