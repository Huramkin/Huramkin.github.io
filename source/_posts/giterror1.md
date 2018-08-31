---
title: Git提示error setting certificate verify locations解决办法
date: 2018-7-29
categories: Software
tags:
    - Git
    - error
    - 随笔
---
## 问题描述
```
C:\Users\admin>git clone https://github.com/Kiterepo/dns-over-https
Cloning into 'clojure-getting-started'...
fatal: unable to access 'https://github.com/Kiterepo/dns-over-https': error setting certificate verify locations:
  CAfile: D:/ProgramFlie/Git/mingw64/libexec/ssl/certs/ca-bundle.crt
  CApath: none
```

## 解决方案
- 方案1
git config --system http.sslcainfo "C:\Program Files (x86)\git\bin\curl-ca-bundle.crt"
- 方案2 git config --system http.sslverify false
- 方案3 顺着报错信息在文件树里找,发现``D:/Git/mingw64/libexec``没有``ssl``目录。
但在``D:\Git\mingw64``目录下有``ssl/certs/ca-bundle.crt``这个路径。
将``ssl``目录复制到``D:/Git/mingw64/libexec``下
>我使用方案3解决了问题