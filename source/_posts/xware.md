---
title: 在服务器上部署迅雷远程下载
date: 2019-3-16 20:48:50
categories: Tools
tags:
    - 软件
    - 服务器
    - 下载
---
适合服务器使用的下载软件有很多,比如Aria2 Transmission 等.

这里记录的是基于docker使用xware镜像在服务器部署迅雷远程下载

<!--more-->

## 安装

### 创建目录用于挂载

```
mkdir xunlei
```
### 运行

```
docker run -d --name=xware -v $(pwd)/xunlei:/xware/TDDOWNLOAD --restart=always --network=host caiguai/docker-xware
```
### 查看日志获取激活码

```
docker logs xware
```
在日志中找到下面这行
```
THE ACTIVE CODE IS: xxx
```
在 http://yuancheng.xunlei.com 使用这个激活码,绑定设备

## 提示

```
apt install curl -y                            #debian等系统安装curl
yum install curl -y                            #centos等系统安装curl
curl -sSL https://get.docker.com/ | sh         #docker安装脚本
curl -sSL https://get.daocloud.io/docker | sh  #适合国内网络的docker安装脚本
```

就像使用其他下载软件那样,下载在服务器的资源搭配h5ai等网盘可以实现在线播放,在线编辑等功能

##参考

> https://hub.docker.com/r/caiguai/docker-xware
> https://hub.docker.com/r/senorsen/docker-thunder-xware
> http://docs.daocloud.io/dcs/docker-9152677.html
