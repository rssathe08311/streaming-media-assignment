const fs = require('fs');
const path = require('path');

//general index finding function that navigates to a specific page in the client folder
const getIndex = (request, response, page) => {
  const filePath = path.resolve(__dirname, `../client/${page}`);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.end('404 - File Not Found');
      return;
    }
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();
  });
};

module.exports.getIndex = getIndex;

