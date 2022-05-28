

# jest-cli 工具一些参数了解

> https://jestjs.io/docs/cli

```bash
# 初始化 jest.config.js 文件
jest --init

# 只对 git 变动的文件进行测试
jest -o

# 进入监听模式
jest --watch

# 然后可以选择多种模式：f / o / t 模式
# 注意 o 模式需要结合 git 一起使用


# 使用此模式后，切到 t 模式然后自动开启 p 模式，只监听指定文件的变化进行测试
jest --watchAll 

```