---
title: 解决Please check that your locale settings问题
date: 2018-05-23
categories: Server
tags:
    - Linux
    - Server
    - 随笔
---

## 问题描述：
```
perl: warning: Setting locale failed.

perl: warning: Please check that your locale settings:

LANGUAGE = "en_US:en",

LC_ALL = (unset),

LC_CTYPE = "zh_CN.UTF-8",

LANG = "en_US.UTF-8"

are supported and installed on your system.

perl: warning: Falling back to a fallback locale ("en_US.UTF-8").

perl: warning: Setting locale failed.

perl: warning: Please check that your locale settings:

LANGUAGE = "en_US:en",

LC_ALL = (unset),

LC_CTYPE = "zh_CN.UTF-8",

LANG = "en_US.UTF-8"

are supported and installed on your system.

perl: warning: Falling back to a fallback locale ("en_US.UTF-8").
```

## 解决方案：
- 方案1

编辑 .bashrc
```
vi /root/.bashrc
```

在最底部加上
```
export LC_ALL=C
```
- 方案2

直接运行
```
echo "export LC_ALL=C" >> /root/.bashrc
```
 然后执行
```
source /root/.bashrc
```