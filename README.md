# 部署方式

每次改完代码后，必须运行这行代码，才能正确请求JS和CSS。
```
yarn global add parcel@1.12.3
parcel build src/index.html --no-minify --public-url .
```