---
title: Caddy的简单应用（一）
date: 2017-9-2
categories: Server
tags:
    - Web
    - Server
    - 随笔
---

##  Caddy获取以及安装

Caddy项目的[GitHub](https://github.com/mholt/caddy)地址。按照指南可以快速安装完毕。也有一些一键安装脚本可以使用。在此不过多赘述。
<!--more-->

## 基本操作与重要文件位置

|说明|指令与位置|
|-----|-----|
|启动|service caddy start|
|停止|service caddy stop|
|重启|service caddy restart|
|状态|service caddy status|
|配置文件|/usr/local/caddy/Caddyfile|
|日志| tail -f /tmp/caddy.log|

## 配置文件
#### 多网站配置
```
https://huramkin.me {

}
https://www.lowol.top{

}
```


#### 一些简单功能

##### 私人云盘
```
https://huramkin.me {
 root /usr/local/caddy/www/file # 网盘根目录
 timeouts none # 避免下载超时的问题
 tls email@123.com #自动用邮箱签证书也可以输入证书路径来使用
 gzip
 basicauth / user passwd #网页加密 因为网盘有登录界面，所以不是很有必要
 filemanager / /usr/local/caddy/www/file {  #网站url 网盘根目录
  database /usr/local/caddy/filemanager.db  #数据库地址
 }
 ```

 ##### 反向代理
 ```
 https://www.lowol.top {
 gzip
 tls email
 basicauth
 proxy / https://huramkin.me
 }
 ```

 ## 常见问题
 q:Caddy邮件自签SSL证书文件位置
 a:/.caddy/acme/acme-v01.api.letsencrypt.org/sites/域名/

 q:caddy启动失败，但访问IP地址显示It works
 a:使用 ``netstat -lntp``查看80端口占用
