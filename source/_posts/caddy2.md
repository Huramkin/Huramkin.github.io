---
title: 使用docker部署caddy
date: 2019-8-19 21:27:10
categories: Tools
tags:
    - 软件
    - 服务器
    - web
    - docker
    - caddy
---

使用官网脚本和docker两种方式部署caddy服务

<!--more-->

## 使用脚本安装

```
curl https://getcaddy.com | bash
```
运行直接输入 ``caddy`` 即可

可以使用screen 或者 hop,upstart,systemd,supervisor等使其后台运行

## 使用docker部署caddy服务

### docker-compose.yml 文件配置

```
version: '2'

services:
  caddy:
    container_name: caddy
    image: abiosoft/caddy
    volumes:
      - "/etc/caddy/certs:/etc/caddycerts"
      - "/etc/caddy/Caddyfile:/etc/Caddyfile"
      - "/home:/home"
    ports:
      - 80:80
      - 443:443
    network_mode: "host"
    restart: always
    environment:
      CADDYPATH: /etc/caddycerts
```

编写``docker-compose.yml``文件,把宿主机上的``Caddyfile``挂载到``Caddy Server``的容器,同时挂载用来存放SSL证书的目录,让容器直接使用宿主机器的网络,把``/home``目录映射到``Caddy Server``中可以直接host站点

### 运行

```
docker-compose up -d
```
## Caddyfile配置

### 反向代理配置

```
 https://www.lowol.top {
 gzip
 tls email@email.email
 basicauth / user passwd
 proxy / https://huramkin.me
 }
```

### 使用本地文件建立网页的配置

```
 huramkin.me www.huramkin.me {
  tls /root/xxx.crt /root/xxx.key
  root /home/huramkin
  index index.html index.htm
  gzip
  log /home/logs/huramkin.log
}
```


## 参考
> https://hub.docker.com/r/abiosoft/caddy/
> https://caddyserver.com/tutorial
> https://caddyserver.com/download
> https://dengxiaolong.com/caddy/zh/
> https://dengxiaolong.com/caddy/zh/caddyfile.html
> https://www.moerats.com/archives/404/
> https://xiaozhou.net/experience-of-caddy-server-2017-11-29.html
> https://doubibackup.com/l-en8vwt-2.html https://archive.fo/qEUc7
> https://intl.huramkin.com/2017/09/01/Caddy1/
