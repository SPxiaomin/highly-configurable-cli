jest.mock('fs');

const fs = require('fs-extra');
const path = require('path');
const Templator = require('../Templator');


const templateDir = path.resolve(__dirname, 'template');
fs.ensureDirSync(templateDir);

fs.writeFileSync(path.resolve(templateDir, 'foo.js'), 'foo(<%- m %>)');

fs.ensureDirSync(path.resolve(templateDir, 'bar'));
fs.writeFileSync(path.resolve(templateDir, 'bar/bar.js'), 'bar(<%- m %>)');
fs.writeFileSync(path.resolve(templateDir, 'bar/_bar.js'), '.bar(<%- m %>)');

fs.writeFileSync(path.resolve(templateDir, '_gitignore'), 'foo');


test('render template rightly', async () => {
  const templator = new Templator('/', {
    templatePath: templateDir,
    renderData: { m: 1 },
  });
  await templator.render();

  expect(fs.readFileSync('/foo.js', 'utf-8')).toMatch('foo(1)');
  expect(fs.readFileSync('/bar/bar.js', 'utf-8')).toMatch('bar(1)');
  expect(fs.readFileSync('/bar/.bar.js', 'utf-8')).toMatch('.bar(1)');
  expect(fs.readFileSync('/.gitignore', 'utf-8')).toMatch('foo');
});
