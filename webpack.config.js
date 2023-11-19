const path = require('path');

module.exports = {
    entry: './out/main.js', // The entry point that is compiled by Typescript
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    }
};