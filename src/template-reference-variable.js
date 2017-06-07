const cheerio = require('cheerio');

const preload = (content, resourcePath) => {
  if (!resourcePath.match(/\.html$/)) {
    return content;
  }

  let $ = cheerio.load(content, {
    lowerCaseTags: false,
    lowerCaseAttributeNames: false,
    decodeEntities: false
  });

  let stacheTags = $('stache');

  if (stacheTags.length) {
    stacheTags.each((i, elem) => {
      $(elem).attr('#stache', '');
    });

    content = $.html().toString();
  }

  return content;
};

module.exports = { preload };
