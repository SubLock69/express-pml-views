const fs = require('fs');
const lex = require('./lexer');
const render = require('./renderer');
global.templates = [];

function createEngine(filePath, options, callback) {
  //Set paths
  filePath = filePath || './views'; //Default path
  
  //read file
  fs.readFile(filePath, (err, content) => {
    if(err) {return callback(err)}
    content = content.toString();

    const tokenized = lex(content);
    const rendered = render(tokenized);
    
    return callback(null, rendered);
  });

}

module.exports = createEngine;