# highly-configurable-cli

[![Build Status](https://travis-ci.com/SPxiaomin/highly-configurable-cli.svg?branch=master)](https://travis-ci.com/SPxiaomin/highly-configurable-cli)

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

## cli-service版本管理

major版本变化的时候，e.g. 1.x.x -> 2.x.x，用1.x.x cli生成的项目，会提供相应的操作文档手动进行升级.「TODO: 后续成熟之后，会考虑提供相关升级工具」

minor版本变化的时候，拉取新版本即可，会有文档说明需要添加哪些配置参数使用新增功能.

patch版本变化的时候，拉取新版本即可.

test