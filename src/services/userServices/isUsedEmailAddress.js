'use strict';
const axios = require('axios');
const config = require('../../config/default.json');

const isUsedEmailAddress = function (email) {
  return new Promise((resolve) => {
      axios({
          method: 'get',
          url: `${config.backUrl}/users/isEmailUsed`,
          params: {
              email: email
          }
      }).then((response) => {
          resolve(response.data);
      })
  });
};

module.exports = isUsedEmailAddress;