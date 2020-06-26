const csvToJsonParser = require('./index');

const src = fs.createReadStream('./sample.csv', {encoding: 'utf-8'});
const dest = fs.createWriteStream('./sample.txt');

src
.pipe(new csvToJsonParser())
.pipe(dest);