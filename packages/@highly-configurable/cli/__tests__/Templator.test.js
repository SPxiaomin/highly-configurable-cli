jest.mock('fs');

const fs = require('fs-extra');
const path = require('path');

const templateDir = path.resolve(__dirname, 'template');
fs.ensureDirSync(templateDir);
fs.writeFileSync(path.resolve(templateDir, 'haha.js'), 'const a = 1;');

test('haha', () => {});