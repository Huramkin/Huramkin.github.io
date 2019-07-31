---
title: 服务器监控面板推荐与使用
date: 2019-1-20 20:37:43
categories: Tools
tags:
    - 监控面板
    - 服务器
    - 软件
---

在平时使用服务器的过程中,总有一些挂针的需求,这里介绍几款监控的面板,有免费的服务也有需要自建的开源项目

<!--more-->

## 监控服务

### UptimeRobot

https://uptimerobot.com/

- 最多50个节点
- 不需要安装软件
- 免费仅有宕机监控

### NodeQuery

https://nodequery.com/

- 最多10个节点
- 需要在被监控节点安装软件
- 信息全面(网络,IO,进程,资源使用)

### 阿里云监控

https://www.aliyun.com/product/jiankong

- 最多10个节点
- 可选多机房监控
- 与阿里云服务无缝衔接

## 自建面板

### Serverstatus

Serverstatus的部署比较简单,有一键脚本也有docker镜像,这里来介绍docker的部署方式
https://github.com/cppla/ServerStatus

```
# 服务端
wget https://raw.githubusercontent.com/cppla/ServerStatus/master/autodeploy/config.json
docker run -d --restart=always --name=serverstatus -v {$path}/config.json:/ServerStatus/server/config.json -p {$port}:80 -p {$port}:35601 cppla/serverstatus
```

```
# 客户端 (这里使用了 nohup 来保证程序持续在后台运行,如果想要结束指定程序使用 jobs -i 命令,会显示出进程id,使用kill命令即可)
wget --no-check-certificate -qO client-linux.py 'https://raw.githubusercontent.com/cppla/ServerStatus/master/clients/client-linux.py' && nohup python client-linux.py SERVER={$SERVER} USER={$USER} PASSWORD={$PASSWORD} >/dev/null 2>&1 &

```

### Smokeping

https://hub.docker.com/r/linuxserver/smokeping
https://github.com/linuxserver/docker-smokeping

Smokeping 的手动安装方式比较复杂,建议选择docker方式部署,但是无法完美支持 ``master/slave`` 架构

```
docker run \
    --name smokeping \
    -d \
    -p 8880:80 \
    -e PUID=1000 -e PGID=1000 \
    -e TZ=Asia/Shanghai \
    -v /data/smokeping/data:/data \
    -v /data/smokeping/config:/config \
    linuxserver/smokeping
```
Docker安装方式需要通过修改``/data/smokeping/config/Targets``然后重启容器来添加监控节点
### Smartping

官方提供编译好的二进制文件,可以直接运行,并且支持正向PING与反向Ping绘图

https://smartping.org/
https://docs.smartping.org/install/
https://github.com/smartping/smartping

### Torch-Web

https://github.com/TorchPing/Torch-Web