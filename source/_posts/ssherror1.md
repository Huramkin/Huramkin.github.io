---
title: 解决macOS下ssh空闲一段时间自动断开的问题
date: 2018-8-5
categories: Server
tags:
    - Linux
    - ssh
    - Server
    - 随笔
---
## 问题描述
使用ssh登录linux服务器后，在后台放置一段时间，会发现会自动断开或者卡死无法输入

## 解决方案
``vim /etc/ssh/ssh_config``

添加这2句
```
ServerAliveCountMax 3
ServerAliveInterval 5
```
### 解释
1.``ServerAliveCountMax 3``表示服务器发出请求后客户端未响应次数达到一定值就自动断开,正常情况下,客户端会正常响应.

2.``SerAliveInterval 0 ``指定了服务器端向客户端请求消息的时间间隔, 默认是0, 不发送,　而``ServerAliveInterval 5``表示每5秒向服务器发送一次,这样就可以保持连接

3.``/etc/ssh/`` 目录下的ssh_config是针对客户端的配置文件，另外一个sshd_config是针对服务端的文件，因为这里的Mac作为客户端去远程连接其他服务器，所以仅需修改ssh_config