---
title: SSH快速登录服务器
date: 2017-11-16 1:36:15
categories: Tools
tags:
    - 随笔
    - Terminal
    - SSH
    - Shuttle
---
平时有许多服务器需要通过终端进行管理，如果每次都使用``ssh username@ipdomain``这种命令会显得麻烦，效率低下而且还需要每次输入密码。所以这里要说的是如何让这个过程更加简单。
## 命令简化
#### 方法一
修改~/.ssh/config(如果没有就新建一个)
```
Host 1
      HostName 192.168.199.1
      Port 22
      User name
```
保存，输入``ssh 1``就可以直接执行``name@192.168.199.1``

#### 方法二
使用[Shuttle](https://github.com/fitztrev/shuttle)

点击Settings-Edit打开配置文件
```
"Manage Servers": [                     //父级菜单
  {                                    //单个命令的配置
      "cmd":"ssh root@107.a.b.c",     //命令本体
    "inTerminal": "tab",             //选择执行命令窗口，可选：new,tab,current
    "name": "server1",              //菜单名
    "theme":"basic",               //终端主题
    "title":"vrmc"                //终端标题
  }
  ]
```

## 免密码

登录过程中的ssh命令已经简化，接下来就要输入密码来登录服务器，现在就将输入密码的过程化到最简。也就是免密码。

在本地计算机生成一对公钥与私钥，将公钥内容上传至 ``~/.ssh/authorized_keys``文件内

需要注意保管好私钥，备份于合适的位置。
