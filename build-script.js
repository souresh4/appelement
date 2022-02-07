const fs = require('fs-extra');
const concat = require('concat'); 
(async function build() {    
const files = [
        './dist/angularelement/main-es2015.js',
        './dist/angularelement/polyfills-es2015.js',
        './dist/angularelement/scripts.js'    
]
await fs.ensureDir('elements')    
await concat(files, 'elements/angularelement.js')})()