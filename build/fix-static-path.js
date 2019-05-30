const fs = require('fs');
const path = require('path');

module.exports = function () {
  const cssFiles = fs.readdirSync('./../webroot/admin/static/css');
  cssFiles.forEach((cssFile) => {
    if (cssFile.indexOf('.') === 0) return;
    let fileContent = fs.readFileSync(path.resolve('./../webroot/admin/static/css', cssFile), 'utf8');
    fileContent = fileContent
      .replace(/url\(static\//gi, 'url(../')
      .replace(/url\(\/static\//gi, 'url(../');
      fs.writeFileSync(path.resolve('./../webroot/admin/static/css', cssFile), fileContent);
  });
}
