const csvParser = require('csv-parse/lib/sync');
const fs = require('fs');
const input = fs.readFileSync('config/translations.csv');
const output = csvParser(input, {columns: true});

console.log(JSON.stringify(
  output.reduce((acc, r) => {
    if (r.Key) {
      const key = r.Key.toLowerCase().trim();
      acc[key] = r.Translation;
    }
    return acc;
  }, {})
));
