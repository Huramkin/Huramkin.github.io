---
title: 设置与查看Docker容器环境变量
date: 2018-06-04
categories: Software
tags:
    - Linux
    - Docker
    - 随笔
---
## 设置环境变量
通过ENV指令来为Docker容器设置环境变量.

### Docker容器环境变量设置方法

使用ENV指令可以用于为docker容器设置环境变量。
在运行前修改环境变量
```
docker run --env <key>=<value> <IMAGE-ID>
```


Linux系统下相关环境变量设置有以下几个文件：
```
~/.bashrc
~/.profile
~/.bash_profile
/etc/profile
/etc/environment
/etc/bash.bashrc
```
## 查看环境变量
如果我们需要查看ENV设置的环境变量，可通过以下方法进行查看。

### 使用docker inspect查看
```
docker inspect <CONTAINER-NAME> OR <CONTAINER-ID>
```
### 使用docker exec查看
```
docker exec -it <CONTAINER-NAME> OR <CONTAINER-ID> env
```

