---
title: 在服务器上部署迅雷远程下载
date: 2019-3-16 20:48:50
categories: Tools
toc: true
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

安装docker的方法

```
apt install curl -y                            #debian等系统安装curl
yum install curl -y                            #centos等系统安装curl
curl -sSL https://get.docker.com/ | sh         #docker安装脚本
curl -sSL https://get.daocloud.io/docker | sh  #适合国内网络的docker安装脚本
```

由于docker内存不会定期回收，可能导致服务器占用过多内存进而崩溃,运行下面的命令每日定时重启

```
crontab -l > docker.cron
echo '0 18 * * * docker restart $(docker ps -q)' >> docker.cron
crontab docker.cron
```

就像使用其他下载软件那样,下载在服务器的资源搭配h5ai等网盘可以实现在线播放,在线编辑等功能

常用测速文件

|Provider|Location|Command|
|-|-|-|
|CacheFly|CDN|``wget -O /dev/null http://cachefly.cachefly.net/100mb.test``|
|SoftLayer|USA|``wget -O /dev/null http://speedtest.dal01.softlayer.com/downloads/test100.zip``|
|SoftLayer|USA|``wget -O /dev/null http://speedtest.sea01.softlayer.com/downloads/test100.zip``|
|SoftLayer|Amsterdam|``wget -O /dev/null http://speedtest.ams01.softlayer.com/downloads/test500.zip``|
|Linode|Japan|``wget -O /dev/null http://speedtest.tokyo.linode.com/100MB-tokyo.bin``|
|Linode|UK|``wget -O /dev/null http://speedtest.london.linode.com/100MB-london.bin``|
|Linode|USA|``wget -O /dev/null http://speedtest.newark.linode.com/100MB-newark.bin``|
|Linode|USA|``wget -O /dev/null http://speedtest.atlanta.linode.com/100MB-atlanta.bin``|
|Linode|USA|``wget -O /dev/null http://speedtest.dallas.linode.com/100MB-dallas.bin``|
|Linode|USA|``wget -O /dev/null http://speedtest.fremont.linode.com/100MB-fremont.bin``|
|Leaseweb|Netherlands|``wget -O /dev/null http://mirror.nl.leaseweb.net/speedtest/1000mb.bin``|
|Leaseweb|USA|``wget -O /dev/null http://mirror.us.leaseweb.net/speedtest/1000mb.bin``|
|FDCServer|USA|``wget -O /dev/null http://lg.denver.fdcservers.net/100MBtest.zip``|
|OVH|France|``wget -O /dev/null http://proof.ovh.net/files/100Mb.dat``|

## 参考

> https://hub.docker.com/r/caiguai/docker-xware
> https://hub.docker.com/r/senorsen/docker-thunder-xware
> http://docs.daocloud.io/dcs/docker-9152677.html
> https://www.pqs.pw/knowledgebase/7/sspanel--docker-.html
> https://www.pqs.pw/knowledgebase/10/-.html
