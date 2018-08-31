---
title: 好用的批量扫米工具DomainMegaBot
date: 2018-8-15
categories: Software
tags:
    - Linux
    - Web
    - Domain
    - 随笔
---
项目地址
https://github.com/Har-Kuun/DomainMegaBot
<!--more-->
## 使用方法
```
wget https://github.com/Har-Kuun/DomainMegaBot/archive/master.zip #下载
unzip master.zip  #解压
cd DomainMegaBot-master #进入目录
gcc -o DomainMegaBot DomainMegaBot.c #编译
./DomainMegaBot 运行
```
``PLEASE SPECIFY TLD`` - 输入查询域名的后缀，如``com`` ``cc``等,注意不要在后缀前加点

``PLEASE SPECIFY DICTIONARY FILE`` - 指定查询的字典，项目目录下放置了两个字典文件，分别是``DICT_1000_WORD``和``DICT_LLL``，这里直接输入你的字典文件名即可，如``DICT_LLL``

此外,在下面这个项目中也有词典可以拿来用
> https://github.com/jekyllcao/BAT_Check_DomainName