---
title: tcping的使用
date: 2019-7-21 19:21:45
categories: Tools
tags:
    - 随笔
    - 测试
    - ping
    - tcping
---

有些服务器禁止ping,比如``AWS``的``LightSail``.或者是网络出现了某些奇妙的问题,比如``ping``得通但就是连不上``tcp``

为了能够正常测试服务器的可用性需要一种替代方案,这种方案就是使用``tcping``

<!--more-->

## 下载

下载链接 https://elifulkerson.com/projects/tcping.php 

这里可以选择32位或者64位程序 ([tcping64.exe](https://download.elifulkerson.com/files/tcping/0.39/x64/tcping64.exe))

## 使用

下载完成后需要把 ``tcping.exe`` 文件复制到 ``C:\Windows\System32`` 文件夹下,也就是 ``C:\Windows\System32\tcping.exe ``
这样就可以直接在``CMD``中直接使用``tcping``命令

如果你不想把这文件放入系统盘 ``tcping xxx`` 改成 ``D:\abc\tcping.exe xxx`` 即可

或者,使用``cd``切换到此文件所在文件夹直接使用``tcping``命令

```
tcping [命令参数] 服务器地址(IP/域名) [服务器端口]
 
 -t     : 连续 TCPing ，直到使用 Ctrl+C 键停止
示例：tcping -t 1.1.1.1 80
 
 -n 5   : TCPing 5次后停止
示例：tcping -n 5 1.1.1.1 80
 
 -i 5   : 每隔 5秒 TCPing 一次
示例：tcping -i 5 1.1.1.1 80
 
 -w 0.5 : 设置超时时间为 0.5秒（1秒=1000毫秒），单位 秒
示例：tcping -w 0.5 1.1.1.1 80
 
 -d     : 在每行返回信息中加入时间信息
示例：tcping -d 1.1.1.1 80
 
 -s     : 当 TCPing 测试成功后（在超时时间以内返回 TCPing 延迟数据）自动停止 TCPing
示例：tcping -s 1.1.1.1 80
 
 -4     : 优先 IPv4（如果一个域名有 IPv4 和 IPv6 解析，那么走 IPv4）
示例：tcping -4 www.google.com 80
 
 -6     : 优先 IPv6（如果一个域名有 IPv4 和 IPv6 解析，那么走 IPv6）
示例：tcping -6 www.google.com 80
 
 --file : TCPing 将逐行循环遍历文件内的 服务器IP/域名 信息（一行一个，支持端口，例如：1.1.1.1 443）
示例：tcping --file D:\abc\1.txt
 
 -v : 显示版本号
示例：tcping -v
 
# 如果你没有写服务器地址的端口，那么默认为 80 端口

```

## Linux系统下的安装

```
安装命令
CentOS/REHL: yum install tcping
Debian/Ubuntu: apt-get install tcptraceroute
```

## 参考

- https://doubibackup.com/dkj0kb1w.html
- https://elifulkerson.com/projects/tcping.php