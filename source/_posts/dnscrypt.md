---
title: DNSCrypt-Proxy的使用
date: 2018-04-11 3:36:15
categories: Tools
tags:
    - DNS
    - 基础服务
    - 网络优化
    - Web开发
    - 隐私保护
---

[DNSCrypt](https://zh.wikipedia.org/zh-hans/DNSCrypt)通过加密DNS服务器通信，来实现保护用户的目的。如防止运营商的DNS劫持，广告跟踪植入，保护个人隐私。

[DNSCrypt Proxy](https://github.com/jedisct1/dnscrypt-proxy)可以让我们使用这项功能，并且支持非常多的平台
<!--more-->
## 安装
```
 #macOS安装
 brew install dnscrypt-proxy

其他平台的[安装指南](https://github.com/jedisct1/dnscrypt-proxy/wiki)

[其他平台的安装包](https://github.com/jedisct1/dnscrypt-proxy/releases)
```
## 配置文件

此软件macOS版本的配置文件在``/usr/local/etc/dnscrypt-proxy.toml``

其他版本视解压位置而定,但名字同样是``dnscrypt-proxy.toml``
```
#软件的监听地址，如果机器不支持ipv6，就把ipv6监听部分删除，不然会报错

 listen_addresses = ['127.0.0.1:53', '[::1]:53']
```

## 启动服务
```
#macOS的启动命令
 sudo brew services start dnscrypt-proxy

#Linux的启动命令
 sudo ./dnscrypt-proxy -service start
```
## 其他
 与DNSmaqs联用，DNSCrypt-proxy作为上级DNS,创建纯净的解析环境

 添加这个配置文件[dnscrypt-proxy-config](https://github.com/CNMan/dnscrypt-proxy-config)可以提高解析国内域名的速度
