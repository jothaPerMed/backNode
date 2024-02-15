const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname);
const destinationPath = path.join(__dirname, '..', 'dist');
console.log(destinationPath);
console.log(__dirname);

// Copy YAML files from source to destination
fs.readdirSync(sourcePath).forEach(file => {
  if (file.endsWith('.yaml')) {
    fs.copyFileSync(path.join(sourcePath, file), path.join(destinationPath, file));
  }
});

console.log('Swagger files copied to dist directory.');