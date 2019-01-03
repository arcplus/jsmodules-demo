# 使用TS编写node的GRPC服务

示例来源于：https://qiita.com/daisaru11/items/67366061f7244378639c

1. 初始化
   ```sh
   npm init
   ```
2. 安装ts依赖
   ```sh
   npm install typescript ts-node -D
   ```
3. 添加ts类型生成依赖
   ```sh
   npm install grpc-tools grpc_tools_node_protoc_ts -D
4. 添加grpc依赖
    ```sh
    npm install grpc google-protobuf -S
    ```
5. static-gen-js
    ```sh
    # use \ as path separator and add cmd extension for plugin if on windows
    grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./ --grpc_out=./proto --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin -I ./proto ./proto/book.proto
    ```
6. static-gen-ts
    ```sh
    # use \ as path separator and add cmd extension for plugin if on windows
    protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --ts_out=./proto -I ./proto ./proto/book.proto
    ```

- [Typing gRPC with Node & Typescript](https://tomasalabes.me/blog/nodejs/grpc/typescript/2018/07/07/typing-grpc.html)
- [Creating a TypeScript API that consumes gRPC and GraphQL via generated types](https://medium.com/attest-engineering/fully-typed-typescript-api-consuming-grpc-and-graphql-5d5ae6b33bf1)