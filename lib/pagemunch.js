const fetch = require('node-fetch');

const VERSION = '1.0.0';
const API_BASE = 'https://api.pagemunch.com/';

const serialize = obj => {
  var str = [];
  for (var p in obj) {
    str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
  }
  return str.join('&');
};

class PageMunch {
  constructor(key) {
    if (!key) {
      throw new Error('PageMunch must be initialized with an API key as the only parameter');
    }

    this.apiKey = key;
  }

  extract(url, query, callback) {
    if (typeof query === 'function') {
      callback = query;
      query = {};
    }
    if (!query) {
      query = {};
    }

    query.url = url;
    return this.get('extract', query, callback);
  }

  get(endpoint, query, callback) {
    query.apiKey = this.apiKey;

    const q = serialize(query);
    const headers = {
      'User-Agent': `pagemunch-node (${VERSION})`
    };

    return fetch(`${API_BASE}${endpoint}?${q}`, headers)
    .then(res => res.json())
    .then(json => {
      if (callback) callback(null, json);
      return json;
    })
    .catch(err => {
      if (callback) callback(err);
      throw err;
    });
  }
}

module.exports = PageMunch;
