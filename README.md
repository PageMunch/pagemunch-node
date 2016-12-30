# PageMunch - Link Unfurling

## Introduction

PageMunch is a simple API backed by an intelligent web crawler that lets you extract rich previews, entities and images from any url. Whether you want to grab the best title, description and image for a page, prices, authorship, enable video embeds or more.


## Installation

```
$ npm install pagemunch
```

## Usage

```javascript
const pm = require('pagemunch');

pm.set({key: 'YOUR_API_KEY'});

pm.extract('http://www.youtube.com/watch?v=9bZkp7q19f0', function(err, data) {
  if (err) throw err;

  console.log(data);
});
```

## More Details

For more information, libraries and documentation check out the **[PageMunch Documentation](http://www.pagemunch.com/docs "PageMunch - Link unfurling, metadata")**


## License

Copyright PageMunch 2017.
