---
title: 网盘程序
date: 2019-8-21 21:27:10
categories: Tools
tags:
    - 软件
    - 服务器
    - web
    - docker
---

一些简单好用的自建网盘程序

<!--more-->

## Cloudreve

https://github.com/cloudreve/Cloudreve

除了使用安装包安装,还可用Composer和docker方式安装

1. 获取安装包
到https://cloudreve.org/download.php 下载最新的安装包,文件部署好后,前往您的域名/CloudreveInstaller 的安装向导，根据提示检查环境、填写数据库信息并执行安装。

2. URL重写
对于Apache服务器，请确保
- ``httpd.conf``配置文件中加载了``mod_rewrite.so``模块
- ``AllowOverride None ``将 ``None`` 改为 ``All``
- 
项目目录下的.htaccess已经配置好重写规则，如有需求酌情修改.

对于Nginx服务器，以下配置可供参考：

```
location / {
   if (!-e $request_filename) {
   rewrite  ^(.*)$  /index.php?s=/$1  last;
   break;
    }
 }
```

如果你的应用安装在二级目录，Nginx的伪静态方法设置如下，其中youdomain是所在的目录名称。

```
location /youdomain/ {
    if (!-e $request_filename){
        rewrite  ^/youdomain/(.*)$  /youdomain/index.php?s=/$1  last;
    }
}
```
5.后续操作
到此步时，系统已基本可以正常运行，但还需要进行一些后续操作.

- 登录后台（初始用户名admin@cloudreve.org 初始密码 admin 后台URlhttp://你的域名/Admin,登录后到设置 - 基本设置中检查站点URL是否正确）
- 到用户管理页修改初始用户密码
- 如果你需要使用二步验证功能，请在程序目录下依次执行``composer require phpgangsta/googleauthenticator:dev-master`` ``composer require endroid/qrcode``安装二步验证扩展
- 添加Cron定时任务：`` * * * * * curl http://你的域名/Cron``
- 如果你打算使用本地上传策略并且不准备开启外链功能，请将public/uploads目录设置为禁止外部访问、禁止脚本执行

## FileGator

https://github.com/filegator/filegator

https://www.file-gator.com/

## naked-pages

https://github.com/krisanalfa/naked-pages

## h5ai

https://larsjung.de/h5ai/

除去源码文件位置正确外,还需要改 ``.htaccess``和``nginx.conf``

>  DirectoryIndex  index.html  index.php  /_h5ai/public/index.php #.htaccess
>  index  index.html  index.php  /_h5ai/public/index.php; #nginx.conf

h5ai的结构

> DOC_ROOT
> ├─ _h5ai
> ├─ your files
> └─ and folders

## Nginx

这里的配置是使用nginx建立的文件服务器, 访问``www.huramkin.ooo``等域名就可以直接查看``/var/lib/transmission-daemon/downloads``中的文件并下载

```
server
{
listen 80;
listen 443 ssl http2;
server_name www.huramkin.ooo ww1.huramkin.pw ww2.huramkin.pw;
charset utf-8;
root /var/lib/transmission-daemon/downloads;
 location / {
       autoindex on; # 索引
       autoindex_exact_size on; # 显示文件大小
       autoindex_localtime on; # 显示文件时间
    }

access_log  /www/wwwlogs/www.huramkin.ooo.log;
error_log  /www/wwwlogs/www.huramkin.ooo.error.log;
}

```

## 参考

> https://github.com/cloudreve/Cloudreve/wiki/%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E
> https://github.com/vSense/docker-h5ai