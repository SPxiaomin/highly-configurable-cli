jest.mock('fs');

const fs = require('fs');
const Service = require('../Service');

const createMockService = (init = true, command = 'serve', args = {}) => {
  const service = new Service('/');

  if (init) {
    service.init(command, args);
  }

  return service;
};

beforeEach(() => {
  delete process.env.NODE_ENV;
});

afterEach(() => {
  if (fs.existsSync('/highly-configurable.config.js')) {
    fs.unlinkSync('/highly-configurable.config.js');
  }
});

test('env setting through args', () => {
  const service = createMockService(true, 'serve', { mode: 'production' });
  expect(process.env.NODE_ENV).toBe('production');
});

test('env setting through command', () => {
  const service = createMockService(true, 'serve', {});
  expect(process.env.NODE_ENV).toBe('development');
});

test('load user custom options from highly-configurable.config.js', () => {
  fs.writeFileSync('/highly-configurable.config.js', ''); // only to ensure that fs.existsSync returns true
  jest.mock('/highly-configurable.config.js', () => ({ publicPath: '/app' }), { virtual: true });

  const service = createMockService(true, 'serve', {});

  expect(service.projectOptions.publicPath).toBe('/app');
});

test('register serve/build/inspect commands', () => {
  const service = createMockService(true, 'serve', {});
  expect(service.commands).toHaveProperty('serve');
  expect(service.commands).toHaveProperty('build');
  expect(service.commands).toHaveProperty('inspect');
});
