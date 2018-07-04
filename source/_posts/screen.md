---
title: Screen命令常见用法
date: 2018-05-1
categories: Server
tags:
    - Linux
    - Server
    - 随笔
---
Screen可以帮助管理员同时进行多项任务,实现后台运行程序的操作
<!--more-->
## 常用语法和快捷键
|语法和快捷键|说明|
|-|-|
screen |进入screen模式
exit |退出当前窗口，如果它是此screen的唯一窗口时，此screen也将完全退出。
screen -ls |查看有哪些screen
|screen -d [pid/tty/host]|将指定的screen作业离线|
screen -r [id/name] |打开编号为id或者名称为name的screen窗口
screen -wipe |清除死掉的会话
C-a d | detach，暂离当前session，将目前的session丢到后台执行，即使登出也不受影响|
C-a c | 创建一个新的运行shell的窗口并切换到该窗口
C-a n | Next，切换到下一个 window 
C-a k | 强行关闭当前的 window
## 语法
```
screen [-AmRvx -ls -wipe][-d <pid/tty/host>][-h <行数>][-r <作业名称>][-s ][-S <作业名称>]
```

|参数|说明|
|----|----|
|-A|将所有的视窗都调整为目前终端机的大小|
|-c filename       | 用指定的filename文件替代screen的配置文件'.screenrc'|
|-D [pid/tty/host]  |与-d命令相同，区别是若执行成功，会踢掉原来在screen里的用户并让他logout|
|-d [pid/tty/host]|将指定的screen作业离线|
|-h [行数] |指定视窗的缓冲区行数|
|-m|即使目前已在作业中的screen作业，仍强制建立新的screen作业|
|-p number or name  |预先选择一个窗口|
|-r [pid/tty/host] |恢复离线的screen作业|
|-R|先试图恢复离线的作业。若找不到离线的作业，即建立新的screen作业|
|-s|指定建立新视窗时，所要执行的shell|
|-S [作业名称]|　指定screen作业的名称|
|-v|显示版本信息|
|-x|恢复之前离线的screen作业|
|-ls|显示目前所有的screen作业|
|-wipe|检查目前所有的screen作业，并删除已经无法使用的screen作业|

## 快捷键
C-a 为 Ctrl+A组合键的简写
|组合键|说明|
|------|--|
C-a ? | 显示所有键绑定信息
C-a c | 创建一个新的运行shell的窗口并切换到该窗口
C-a n | Next，切换到下一个 window 
C-a p | Previous，切换到前一个 window 
C-a 0..9 | 切换到第 0..9 个 window
Ctrl+a [Space] | 由视窗0循序切换到视窗9
C-a C-a | 在两个最近使用的 window 间切换 
C-a x | 锁住当前的 window，需用用户密码解锁
C-a d | detach，暂时离开当前session，将目前的 screen session (可能含有多个 windows) 丢到后台执行，并会回到还没进 screen 时的状态，此时在 screen session 里，每个 window 内运行的 process (无论是前台/后台)都在继续执行，即使 logout 也不影响。 
C-a z | 把当前session放到后台执行，用 shell 的 fg 命令则可回去。
C-a w | 显示所有窗口列表
C-a t | Time，显示当前时间，和系统的 load 
C-a k | kill window，强行关闭当前的 window
C-a [ | 进入 copy mode，在 copy mode 下可以回滚、搜索、复制就像用使用 vi 一样
C-b |Backward，PageUp 
C-f |Forward，PageDown 
H(大写) |High，将光标移至左上角 
L |Low，将光标移至左下角 
0 |移到行首 
$ |行末 
w |forward one word，以字为单位往前移 
b |backward one word，以字为单位往后移 
Space |第一次按为标记区起点，第二次按为终点 
Esc |结束 copy mode 
C-a ] | Paste，把刚刚在 copy mode 选定的内容贴上