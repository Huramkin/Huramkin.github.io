---
title: Nginx Proxy Manager 的安装
date: 2018-11-11 11:20:33
categories: Tools
tags:
    - Docker
    - 服务器
    - Web开发
---
Nginx Proxy Manager是一个带有WEB界面且使用简单的反向代理配置工具,带有ssl管理功能
<!--more-->

## 配置文件

首先要在指定目录中创建``config.json``,写入以下配置信息

无论是使用``mysql``或者是``mariadb``,在``config.json``配置信息中都是``"engine": "mysql",``

```
{
  "database": {
    "engine": "mysql",
    "host": "db",
    "name": "npm",
    "user": "npm",
    "password": "mypwd",
    "port": 3306
  }
}
```

然后创建``docker-compose.yaml``,写入以下配置信息

```
version: "3"
services:
  app:
    image: jc21/nginx-proxy-manager:2
    restart: always
    ports:
      - 80:80
      - 81:81
      - 443:443
    volumes:
      - ./config.json:/app/config/production.json
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
    depends_on:
      - db
    environment:
      # if you want pretty colors in your docker logs:
      - FORCE_COLOR=1
  db:
    image: jc21/mariadb-aria
    hostname: db
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: "mypwd"
      MYSQL_DATABASE: "npm"
      MYSQL_USER: "npm"
      MYSQL_PASSWORD: "mypwd"
    volumes:
      - ./data/mysql:/var/lib/mysql
      
```
## 运行

```
docker-compose up -d
```
成功运行之后访问``http://[ip地址]:81``
即可开始设置面板