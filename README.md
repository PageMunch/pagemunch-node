[![npm version](https://badge.fury.io/js/pagemunch.svg)](https://badge.fury.io/js/pagemunch)

# PageMunch - Link Unfurling

## Introduction

PageMunch is a simple API backed by an intelligent web crawler that lets you extract rich previews, entities and images from any url. Whether you want to grab the best title, description and image for a page, prices, authorship, enable video embeds or more.


## Installation

```
$ npm install pagemunch
```

## Usage

We recommend storing your API key in an environment variable, for security and to
enable using different keys in your staging, development and production environments.

### Callbacks / ES5
```javascript
const PageMunch = require('pagemunch');

const pm = new PageMunch(process.env.PAGEMUNCH_API_KEY);
pm.extract('http://www.youtube.com/watch?v=9bZkp7q19f0', function(err, data) {
  if (err) throw err;

  console.log(data);
});
```

### Promises / ES6
```javascript
import PageMunch from 'pagemunch';

const pm = new PageMunch(process.env.PAGEMUNCH_API_KEY);
const data = await pm.extract('http://www.youtube.com/watch?v=9bZkp7q19f0');
console.log(data);
```

## More Details

For more information, libraries and documentation check out the **[PageMunch Documentation](https://www.pagemunch.com/docs "PageMunch - Link unfurling, metadata")**


## License

Copyright PageMunch 2017.
