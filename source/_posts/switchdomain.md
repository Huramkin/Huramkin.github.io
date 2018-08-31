---
title: Typecho换域名的方法
date: 2018-06-24
categories: Software
tags:
    - Web
    - Linux
    - Server
    - 随笔
---
备份方法如下

1. 进入phpmyadmin
2. 找到typecho数据库里面的``typecho_options``表
3. 把里面的``siteUrl``值换成新的。

正常情况下，只要是修改好了数据库配置，这么操作就已经换过来了。

如果需要更换文章里面的网址，在数据库里面执行下面的语句

```
UPDATE `typecho_contents` SET `text` = REPLACE(`text`,'旧域名地址','新域名地址');
```