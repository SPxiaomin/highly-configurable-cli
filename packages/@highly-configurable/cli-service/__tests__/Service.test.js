jest.mock('fs');

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

});

test('env setting through args', () => {
  const service = createMockService(true, 'serve', { mode: 'production' });
  expect(process.env.NODE_ENV).toBe('production');
});

test('env setting through command', () => {
  const service = createMockService(true, 'serve', {});
  expect(process.env.NODE_ENV).toBe('development');
});
