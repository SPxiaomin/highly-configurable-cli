const globby = require('globby');
const path = require('path');
const writeFileTree = require('./util/writeFileTree');
const { isBinaryFileSync } = require('isbinaryfile');
const fs = require('fs');
const ejs = require('ejs');

module.exports = class Templator {
  constructor(context, {
    templatePath,
    renderData,
  } = {}) {
    this.context = context;
    this.files = {};
    this.templatePath = templatePath;
    this.renderData = renderData;
  }

  renderFile(sourcePath, renderData) {
    if (isBinaryFileSync(sourcePath)) {
      return fs.readFileSync(sourcePath); // return buffer
    }

    const template = fs.readFileSync(sourcePath, 'utf-8');
    return ejs.render(template, renderData);
  }

  async render() {
    const files = await globby(['**/*'], { cwd: this.templatePath });
    files.forEach((rawPath) => {
      // dotfiles are ignored when published to npm, therefore in templates
      // we need to use underscore instead（e.g. "_gitignore）
      const targetPath = rawPath
        .split('/')
        .map((filename) => {
          if (filename.charAt(0) === '_' && filename.charAt(1) !== '_') {
            return `.${filename.slice(1)}`;
          }
          if (filename.charAt(0) === '_' && filename.charAt(1) === '_') {
            return filename.slice(1);
          }
          return filename;
        })
        .join('/');

      const sourcePath = path.resolve(this.templatePath, rawPath);
      const content = this.renderFile(sourcePath, this.renderData);
      this.files[targetPath] = content;
      writeFileTree(this.context, this.files);
    });
  }
};
