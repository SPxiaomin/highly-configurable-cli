yarn run v1.17.3
$ rm -rf dist
$ node build
[ ParsePlugin { source: 'resolve', target: 'parsed-resolve' },
  DescriptionFilePlugin {
    source: 'parsed-resolve',
    filenames: [ 'package.json' ],
    target: 'described-resolve' },
  NextPlugin { source: 'after-parsed-resolve', target: 'described-resolve' },
  ModuleKindPlugin { source: 'after-described-resolve', target: 'raw-module' },
  JoinRequestPlugin { source: 'after-described-resolve', target: 'relative' },
  TryNextPlugin { source: 'raw-module', message: null, target: 'module' },
  ModulesInHierachicDirectoriesPlugin {
    source: 'module',
    directories: [ 'node_modules' ],
    target: 'resolve' },
  DescriptionFilePlugin {
    source: 'relative',
    filenames: [ 'package.json' ],
    target: 'described-relative' },
  NextPlugin { source: 'after-relative', target: 'described-relative' },
  FileKindPlugin { source: 'described-relative', target: 'raw-file' },
  TryNextPlugin {
    source: 'described-relative',
    message: 'as directory',
    target: 'directory' },
  DirectoryExistsPlugin { source: 'directory', target: 'existing-directory' },
  MainFieldPlugin {
    source: 'existing-directory',
    options: { name: 'main', forceRelative: true },
    target: 'resolve' },
  UseFilePlugin {
    source: 'existing-directory',
    filename: 'index',
    target: 'undescribed-raw-file' },
  DescriptionFilePlugin {
    source: 'undescribed-raw-file',
    filenames: [ 'package.json' ],
    target: 'raw-file' },
  NextPlugin { source: 'after-undescribed-raw-file', target: 'raw-file' },
  TryNextPlugin { source: 'raw-file', message: 'no extension', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.js', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.json', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.node', target: 'file' },
  SymlinkPlugin { source: 'file', target: 'relative' },
  FileExistsPlugin { source: 'file', target: 'existing-file' },
  NextPlugin { source: 'existing-file', target: 'resolved' },
  ResultPlugin {
    source:
     AsyncSeriesBailHook {
       _args: [Array],
       taps: [],
       interceptors: [],
       call: undefined,
       promise: [Function: lazyCompileHook],
       callAsync: [Function: lazyCompileHook],
       _x: undefined,
       name: 'resolved' } } ]
[ ParsePlugin { source: 'resolve', target: 'parsed-resolve' },
  DescriptionFilePlugin {
    source: 'parsed-resolve',
    filenames: [ 'package.json' ],
    target: 'described-resolve' },
  NextPlugin { source: 'after-parsed-resolve', target: 'described-resolve' },
  ModuleKindPlugin { source: 'after-described-resolve', target: 'raw-module' },
  JoinRequestPlugin { source: 'after-described-resolve', target: 'relative' },
  TryNextPlugin { source: 'raw-module', message: null, target: 'module' },
  ModulesInHierachicDirectoriesPlugin {
    source: 'module',
    directories: [ 'node_modules' ],
    target: 'resolve' },
  DescriptionFilePlugin {
    source: 'relative',
    filenames: [ 'package.json' ],
    target: 'described-relative' },
  NextPlugin { source: 'after-relative', target: 'described-relative' },
  FileKindPlugin { source: 'described-relative', target: 'raw-file' },
  TryNextPlugin {
    source: 'described-relative',
    message: 'as directory',
    target: 'directory' },
  DirectoryExistsPlugin { source: 'directory', target: 'existing-directory' },
  MainFieldPlugin {
    source: 'existing-directory',
    options: { name: 'main', forceRelative: true },
    target: 'resolve' },
  UseFilePlugin {
    source: 'existing-directory',
    filename: 'index',
    target: 'undescribed-raw-file' },
  DescriptionFilePlugin {
    source: 'undescribed-raw-file',
    filenames: [ 'package.json' ],
    target: 'raw-file' },
  NextPlugin { source: 'after-undescribed-raw-file', target: 'raw-file' },
  TryNextPlugin { source: 'raw-file', message: 'no extension', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.js', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.json', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.node', target: 'file' },
  SymlinkPlugin { source: 'file', target: 'relative' },
  FileExistsPlugin { source: 'file', target: 'existing-file' },
  NextPlugin { source: 'existing-file', target: 'resolved' },
  ResultPlugin {
    source:
     AsyncSeriesBailHook {
       _args: [Array],
       taps: [],
       interceptors: [],
       call: undefined,
       promise: [Function: lazyCompileHook],
       callAsync: [Function: lazyCompileHook],
       _x: undefined,
       name: 'resolved' } } ]
[ ParsePlugin { source: 'resolve', target: 'parsed-resolve' },
  DescriptionFilePlugin {
    source: 'parsed-resolve',
    filenames: [ 'package.json' ],
    target: 'described-resolve' },
  NextPlugin { source: 'after-parsed-resolve', target: 'described-resolve' },
  ModuleKindPlugin { source: 'after-described-resolve', target: 'raw-module' },
  JoinRequestPlugin { source: 'after-described-resolve', target: 'relative' },
  TryNextPlugin { source: 'raw-module', message: null, target: 'module' },
  ModulesInHierachicDirectoriesPlugin {
    source: 'module',
    directories: [ 'node_modules' ],
    target: 'resolve' },
  DescriptionFilePlugin {
    source: 'relative',
    filenames: [ 'package.json' ],
    target: 'described-relative' },
  NextPlugin { source: 'after-relative', target: 'described-relative' },
  FileKindPlugin { source: 'described-relative', target: 'raw-file' },
  TryNextPlugin {
    source: 'described-relative',
    message: 'as directory',
    target: 'directory' },
  DirectoryExistsPlugin { source: 'directory', target: 'existing-directory' },
  NextPlugin { source: 'existing-directory', target: 'resolved' },
  ResultPlugin {
    source:
     AsyncSeriesBailHook {
       _args: [Array],
       taps: [],
       interceptors: [],
       call: undefined,
       promise: [Function: lazyCompileHook],
       callAsync: [Function: lazyCompileHook],
       _x: undefined,
       name: 'resolved' } } ]
[ ParsePlugin { source: 'resolve', target: 'parsed-resolve' },
  DescriptionFilePlugin {
    source: 'parsed-resolve',
    filenames: [ 'package.json' ],
    target: 'described-resolve' },
  NextPlugin { source: 'after-parsed-resolve', target: 'described-resolve' },
  ModuleKindPlugin { source: 'after-described-resolve', target: 'raw-module' },
  JoinRequestPlugin { source: 'after-described-resolve', target: 'relative' },
  TryNextPlugin { source: 'raw-module', message: null, target: 'module' },
  ModulesInHierachicDirectoriesPlugin {
    source: 'module',
    directories: [ 'node_modules' ],
    target: 'resolve' },
  DescriptionFilePlugin {
    source: 'relative',
    filenames: [ 'package.json' ],
    target: 'described-relative' },
  NextPlugin { source: 'after-relative', target: 'described-relative' },
  FileKindPlugin { source: 'described-relative', target: 'raw-file' },
  TryNextPlugin {
    source: 'described-relative',
    message: 'as directory',
    target: 'directory' },
  DirectoryExistsPlugin { source: 'directory', target: 'existing-directory' },
  NextPlugin { source: 'existing-directory', target: 'resolved' },
  ResultPlugin {
    source:
     AsyncSeriesBailHook {
       _args: [Array],
       taps: [],
       interceptors: [],
       call: undefined,
       promise: [Function: lazyCompileHook],
       callAsync: [Function: lazyCompileHook],
       _x: undefined,
       name: 'resolved' } } ]
[ ParsePlugin { source: 'resolve', target: 'parsed-resolve' },
  DescriptionFilePlugin {
    source: 'parsed-resolve',
    filenames: [ 'package.json' ],
    target: 'described-resolve' },
  NextPlugin { source: 'after-parsed-resolve', target: 'described-resolve' },
  ModuleKindPlugin { source: 'after-described-resolve', target: 'raw-module' },
  JoinRequestPlugin { source: 'after-described-resolve', target: 'relative' },
  ModuleAppendPlugin { source: 'raw-module', appending: '-loader', target: 'module' },
  TryNextPlugin { source: 'raw-module', message: null, target: 'module' },
  ModulesInHierachicDirectoriesPlugin {
    source: 'module',
    directories: [ 'node_modules' ],
    target: 'resolve' },
  DescriptionFilePlugin {
    source: 'relative',
    filenames: [ 'package.json' ],
    target: 'described-relative' },
  NextPlugin { source: 'after-relative', target: 'described-relative' },
  FileKindPlugin { source: 'described-relative', target: 'raw-file' },
  TryNextPlugin {
    source: 'described-relative',
    message: 'as directory',
    target: 'directory' },
  DirectoryExistsPlugin { source: 'directory', target: 'existing-directory' },
  MainFieldPlugin {
    source: 'existing-directory',
    options: { name: 'loader', forceRelative: true },
    target: 'resolve' },
  MainFieldPlugin {
    source: 'existing-directory',
    options: { name: 'main', forceRelative: true },
    target: 'resolve' },
  UseFilePlugin {
    source: 'existing-directory',
    filename: 'index',
    target: 'undescribed-raw-file' },
  DescriptionFilePlugin {
    source: 'undescribed-raw-file',
    filenames: [ 'package.json' ],
    target: 'raw-file' },
  NextPlugin { source: 'after-undescribed-raw-file', target: 'raw-file' },
  TryNextPlugin { source: 'raw-file', message: 'no extension', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.js', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.json', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.node', target: 'file' },
  SymlinkPlugin { source: 'file', target: 'relative' },
  FileExistsPlugin { source: 'file', target: 'existing-file' },
  NextPlugin { source: 'existing-file', target: 'resolved' },
  ResultPlugin {
    source:
     AsyncSeriesBailHook {
       _args: [Array],
       taps: [],
       interceptors: [],
       call: undefined,
       promise: [Function: lazyCompileHook],
       callAsync: [Function: lazyCompileHook],
       _x: undefined,
       name: 'resolved' } } ]
[ ParsePlugin { source: 'resolve', target: 'parsed-resolve' },
  DescriptionFilePlugin {
    source: 'parsed-resolve',
    filenames: [ 'package.json' ],
    target: 'described-resolve' },
  NextPlugin { source: 'after-parsed-resolve', target: 'described-resolve' },
  ModuleKindPlugin { source: 'after-described-resolve', target: 'raw-module' },
  JoinRequestPlugin { source: 'after-described-resolve', target: 'relative' },
  ModuleAppendPlugin { source: 'raw-module', appending: '-loader', target: 'module' },
  TryNextPlugin { source: 'raw-module', message: null, target: 'module' },
  ModulesInHierachicDirectoriesPlugin {
    source: 'module',
    directories: [ 'node_modules' ],
    target: 'resolve' },
  DescriptionFilePlugin {
    source: 'relative',
    filenames: [ 'package.json' ],
    target: 'described-relative' },
  NextPlugin { source: 'after-relative', target: 'described-relative' },
  FileKindPlugin { source: 'described-relative', target: 'raw-file' },
  TryNextPlugin {
    source: 'described-relative',
    message: 'as directory',
    target: 'directory' },
  DirectoryExistsPlugin { source: 'directory', target: 'existing-directory' },
  MainFieldPlugin {
    source: 'existing-directory',
    options: { name: 'loader', forceRelative: true },
    target: 'resolve' },
  MainFieldPlugin {
    source: 'existing-directory',
    options: { name: 'main', forceRelative: true },
    target: 'resolve' },
  UseFilePlugin {
    source: 'existing-directory',
    filename: 'index',
    target: 'undescribed-raw-file' },
  DescriptionFilePlugin {
    source: 'undescribed-raw-file',
    filenames: [ 'package.json' ],
    target: 'raw-file' },
  NextPlugin { source: 'after-undescribed-raw-file', target: 'raw-file' },
  TryNextPlugin { source: 'raw-file', message: 'no extension', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.js', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.json', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.node', target: 'file' },
  SymlinkPlugin { source: 'file', target: 'relative' },
  FileExistsPlugin { source: 'file', target: 'existing-file' },
  NextPlugin { source: 'existing-file', target: 'resolved' },
  ResultPlugin {
    source:
     AsyncSeriesBailHook {
       _args: [Array],
       taps: [],
       interceptors: [],
       call: undefined,
       promise: [Function: lazyCompileHook],
       callAsync: [Function: lazyCompileHook],
       _x: undefined,
       name: 'resolved' } } ]
<==========
singleEntryPlugin.js / entry ./src/index.js
<==========
singleEntryPlugin.js / dep SingleEntryDependency {
  module: null,
  weak: false,
  optional: false,
  loc: { name: 'main' },
  request: './src/index.js',
  userRequest: './src/index.js' }
<=========
NormalModuleFactory.js / enter create / data { contextInfo: { issuer: '', compiler: undefined },
  context: '/Users/bytedance/Downloads/Git/test',
  dependencies:
   [ SingleEntryDependency {
       module: null,
       weak: false,
       optional: false,
       loc: [Object],
       request: './src/index.js',
       userRequest: './src/index.js' } ] }
<=========
NormalModuleFactory.js / enter factory / result { contextInfo: { issuer: '', compiler: undefined },
  resolveOptions: {},
  context: '/Users/bytedance/Downloads/Git/test',
  request: './src/index.js',
  dependencies:
   [ SingleEntryDependency {
       module: null,
       weak: false,
       optional: false,
       loc: [Object],
       request: './src/index.js',
       userRequest: './src/index.js' } ] }
[ UnsafeCachePlugin {
    source: 'resolve',
    filterPredicate: [Function],
    withContext: false,
    cache: {},
    target: 'new-resolve' },
  ParsePlugin { source: 'new-resolve', target: 'parsed-resolve' },
  DescriptionFilePlugin {
    source: 'parsed-resolve',
    filenames: [ 'package.json' ],
    target: 'described-resolve' },
  NextPlugin { source: 'after-parsed-resolve', target: 'described-resolve' },
  ModuleKindPlugin { source: 'after-described-resolve', target: 'raw-module' },
  JoinRequestPlugin { source: 'after-described-resolve', target: 'relative' },
  TryNextPlugin { source: 'raw-module', message: null, target: 'module' },
  ModulesInHierachicDirectoriesPlugin {
    source: 'module',
    directories: [ 'node_modules' ],
    target: 'resolve' },
  DescriptionFilePlugin {
    source: 'relative',
    filenames: [ 'package.json' ],
    target: 'described-relative' },
  NextPlugin { source: 'after-relative', target: 'described-relative' },
  FileKindPlugin { source: 'described-relative', target: 'raw-file' },
  TryNextPlugin {
    source: 'described-relative',
    message: 'as directory',
    target: 'directory' },
  DirectoryExistsPlugin { source: 'directory', target: 'existing-directory' },
  MainFieldPlugin {
    source: 'existing-directory',
    options: { name: 'loader', forceRelative: true },
    target: 'resolve' },
  MainFieldPlugin {
    source: 'existing-directory',
    options: { name: 'main', forceRelative: true },
    target: 'resolve' },
  UseFilePlugin {
    source: 'existing-directory',
    filename: 'index',
    target: 'undescribed-raw-file' },
  DescriptionFilePlugin {
    source: 'undescribed-raw-file',
    filenames: [ 'package.json' ],
    target: 'raw-file' },
  NextPlugin { source: 'after-undescribed-raw-file', target: 'raw-file' },
  TryNextPlugin { source: 'raw-file', message: 'no extension', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.js', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.json', target: 'file' },
  SymlinkPlugin { source: 'file', target: 'relative' },
  FileExistsPlugin { source: 'file', target: 'existing-file' },
  NextPlugin { source: 'existing-file', target: 'resolved' },
  ResultPlugin {
    source:
     AsyncSeriesBailHook {
       _args: [Array],
       taps: [],
       interceptors: [],
       call: undefined,
       promise: [Function: lazyCompileHook],
       callAsync: [Function: lazyCompileHook],
       _x: undefined,
       name: 'resolved' } } ]
<=========
ResolverFactory.js / enter _create / resolveOptions { fileSystem:
   CachedInputFileSystem {
     fileSystem: NodeJsInputFileSystem {},
     _statStorage:
      Storage {
        duration: 60000,
        running: Map {},
        data: Map {},
        levels: [Array],
        count: 0,
        interval: null,
        needTickCheck: false,
        nextTick: null,
        passive: true,
        tick: [Function: bound tick] },
     _readdirStorage:
      Storage {
        duration: 60000,
        running: Map {},
        data: Map {},
        levels: [Array],
        count: 0,
        interval: null,
        needTickCheck: false,
        nextTick: null,
        passive: true,
        tick: [Function: bound tick] },
     _readFileStorage:
      Storage {
        duration: 60000,
        running: Map {},
        data: Map {},
        levels: [Array],
        count: 0,
        interval: null,
        needTickCheck: false,
        nextTick: null,
        passive: true,
        tick: [Function: bound tick] },
     _readJsonStorage:
      Storage {
        duration: 60000,
        running: Map {},
        data: Map {},
        levels: [Array],
        count: 0,
        interval: null,
        needTickCheck: false,
        nextTick: null,
        passive: true,
        tick: [Function: bound tick] },
     _readlinkStorage:
      Storage {
        duration: 60000,
        running: Map {},
        data: Map {},
        levels: [Array],
        count: 0,
        interval: null,
        needTickCheck: false,
        nextTick: null,
        passive: true,
        tick: [Function: bound tick] },
     _stat: [Function: bound bound ],
     _statSync: [Function: bound bound ],
     _readdir: [Function: bound readdir],
     _readdirSync: [Function: bound readdirSync],
     _readFile: [Function: bound bound readFile],
     _readFileSync: [Function: bound bound readFileSync],
     _readJson: [Function],
     _readJsonSync: [Function],
     _readlink: [Function: bound bound readlink],
     _readlinkSync: [Function: bound bound readlinkSync] },
  unsafeCache: true,
  mainFields: [ 'loader', 'main' ],
  extensions: [ '.js', '.json' ],
  mainFiles: [ 'index' ],
  cacheWithContext: false }
[ UnsafeCachePlugin {
    source: 'resolve',
    filterPredicate: [Function],
    withContext: false,
    cache: {},
    target: 'new-resolve' },
  ParsePlugin { source: 'new-resolve', target: 'parsed-resolve' },
  DescriptionFilePlugin {
    source: 'parsed-resolve',
    filenames: [ 'package.json' ],
    target: 'described-resolve' },
  NextPlugin { source: 'after-parsed-resolve', target: 'described-resolve' },
  AliasFieldPlugin {
    source: 'described-resolve',
    field: 'browser',
    target: 'resolve' },
  ModuleKindPlugin { source: 'after-described-resolve', target: 'raw-module' },
  JoinRequestPlugin { source: 'after-described-resolve', target: 'relative' },
  TryNextPlugin { source: 'raw-module', message: null, target: 'module' },
  ModulesInHierachicDirectoriesPlugin {
    source: 'module',
    directories: [ 'node_modules' ],
    target: 'resolve' },
  DescriptionFilePlugin {
    source: 'relative',
    filenames: [ 'package.json' ],
    target: 'described-relative' },
  NextPlugin { source: 'after-relative', target: 'described-relative' },
  FileKindPlugin { source: 'described-relative', target: 'raw-file' },
  TryNextPlugin {
    source: 'described-relative',
    message: 'as directory',
    target: 'directory' },
  DirectoryExistsPlugin { source: 'directory', target: 'existing-directory' },
  MainFieldPlugin {
    source: 'existing-directory',
    options: { name: 'browser', forceRelative: true },
    target: 'resolve' },
  MainFieldPlugin {
    source: 'existing-directory',
    options: { name: 'module', forceRelative: true },
    target: 'resolve' },
  MainFieldPlugin {
    source: 'existing-directory',
    options: { name: 'main', forceRelative: true },
    target: 'resolve' },
  UseFilePlugin {
    source: 'existing-directory',
    filename: 'index',
    target: 'undescribed-raw-file' },
  DescriptionFilePlugin {
    source: 'undescribed-raw-file',
    filenames: [ 'package.json' ],
    target: 'raw-file' },
  NextPlugin { source: 'after-undescribed-raw-file', target: 'raw-file' },
  TryNextPlugin { source: 'raw-file', message: 'no extension', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.wasm', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.mjs', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.js', target: 'file' },
  AppendPlugin { source: 'raw-file', appending: '.json', target: 'file' },
  AliasFieldPlugin { source: 'file', field: 'browser', target: 'resolve' },
  SymlinkPlugin { source: 'file', target: 'relative' },
  FileExistsPlugin { source: 'file', target: 'existing-file' },
  NextPlugin { source: 'existing-file', target: 'resolved' },
  ResultPlugin {
    source:
     AsyncSeriesBailHook {
       _args: [Array],
       taps: [],
       interceptors: [],
       call: undefined,
       promise: [Function: lazyCompileHook],
       callAsync: [Function: lazyCompileHook],
       _x: undefined,
       name: 'resolved' } } ]
<=========
ResolverFactory.js / enter _create / resolveOptions { fileSystem:
   CachedInputFileSystem {
     fileSystem: NodeJsInputFileSystem {},
     _statStorage:
      Storage {
        duration: 60000,
        running: Map {},
        data: Map {},
        levels: [Array],
        count: 0,
        interval: null,
        needTickCheck: false,
        nextTick: null,
        passive: true,
        tick: [Function: bound tick] },
     _readdirStorage:
      Storage {
        duration: 60000,
        running: Map {},
        data: Map {},
        levels: [Array],
        count: 0,
        interval: null,
        needTickCheck: false,
        nextTick: null,
        passive: true,
        tick: [Function: bound tick] },
     _readFileStorage:
      Storage {
        duration: 60000,
        running: Map {},
        data: Map {},
        levels: [Array],
        count: 0,
        interval: null,
        needTickCheck: false,
        nextTick: null,
        passive: true,
        tick: [Function: bound tick] },
     _readJsonStorage:
      Storage {
        duration: 60000,
        running: Map {},
        data: Map {},
        levels: [Array],
        count: 0,
        interval: null,
        needTickCheck: false,
        nextTick: null,
        passive: true,
        tick: [Function: bound tick] },
     _readlinkStorage:
      Storage {
        duration: 60000,
        running: Map {},
        data: Map {},
        levels: [Array],
        count: 0,
        interval: null,
        needTickCheck: false,
        nextTick: null,
        passive: true,
        tick: [Function: bound tick] },
     _stat: [Function: bound bound ],
     _statSync: [Function: bound bound ],
     _readdir: [Function: bound readdir],
     _readdirSync: [Function: bound readdirSync],
     _readFile: [Function: bound bound readFile],
     _readFileSync: [Function: bound bound readFileSync],
     _readJson: [Function],
     _readJsonSync: [Function],
     _readlink: [Function: bound bound readlink],
     _readlinkSync: [Function: bound bound readlinkSync] },
  unsafeCache: true,
  modules: [ 'node_modules' ],
  extensions: [ '.wasm', '.mjs', '.js', '.json' ],
  mainFiles: [ 'index' ],
  aliasFields: [ 'browser' ],
  mainFields: [ 'browser', 'module', 'main' ],
  cacheWithContext: false }
<=========
enhanced resolve Resolver.js / enter resolve / context [ { issuer: '', compiler: undefined },
  '/Users/bytedance/Downloads/Git/test',
  './src/index.js',
  {},
  [Function] ]
<=========
enhanced resolve AliasFieldPlugin.js / request { context: { issuer: '', compiler: undefined },
  path: '/Users/bytedance/Downloads/Git/test',
  request: './src/index.js',
  query: '',
  module: false,
  directory: false,
  file: false,
  descriptionFilePath: '/Users/bytedance/Downloads/Git/test/package.json',
  descriptionFileData:
   { name: 'test',
     version: '1.0.0',
     main: 'index.js',
     license: 'MIT',
     scripts: { prebuild: 'rm -rf dist', build: 'node build' },
     devDependencies: { webpack: '^4.43.0', 'webpack-cli': '^3.3.11' } },
  descriptionFileRoot: '/Users/bytedance/Downloads/Git/test',
  relativePath: '.',
  __innerRequest_request: './src/index.js',
  __innerRequest_relativePath: '.',
  __innerRequest: './src/index.js' }
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
