# highly-configurable-cli

## Workflow

新功能从master切分支开发，开发完成pull request.

pull request & merge master之后，都会发起CI测试.

## Development Setup

```
# install dependencies in root dir
yarn

# in packages/test dir
../@highly-configurable/cli/bin/highly-configurable.js create xxx
yarn serve
```
