const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  if(domains.length !== 0) {
    let resObj = {};

    for(let i = 0; i < domains.length; i++){
      domains[i] = domains[i].split('.').reverse();
    }

    let countDomain = 0;

    domains.forEach(elem => {
      countDomain += elem.filter(item => item === domains[0][0]).length;
    });

    resObj[`.${domains[0][0]}`] = countDomain;

    for(let i = 0; i < domains.length; i++){
      domains[i] = domains[i].join('.');
    }

    domains.sort((a,b) => a.length - b.length);

    for(let i = 0; i < domains.length; i++){
      let count = 0;
      domains.forEach(elem => {
        if(elem.includes(domains[i])) {
          count++;
        }
      })
      resObj[`.${domains[i]}`] = count;
    }

    return resObj;
  } else {
    return {};
  }
}

module.exports = {
  getDNSStats
};
