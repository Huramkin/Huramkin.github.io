---
title: 使用Crontab
date: 2019-8-15 4:00:10
categories: Tools
tags:
    - 软件
    - 服务器
    - 随笔
    - 定时任务
---

记录一下常用的crontab命令,如果实在搞不明白可以使用cron表达式生成工具

<!--more-->


```
# .---------------- minute (0 - 59) 
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ... 
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7)  OR
#sun,mon,tue,wed,thu,fri,sat 
# |  |  |  |  |
# *  *  *  *  *  command to be executed
```

- minute：代表一小时内的第几分，范围 0-59
- hour：代表一天中的第几小时，范围 0-23
- mday：代表一个月中的第几天，范围 1-31
- month：代表一年中第几个月，范围 1-12
- wday：代表星期几，范围 0-7 (0及7都是星期天)
- who：要使用什么身份执行该指令当使用 ``crontab -e`` 时，不必加此字段
- command：要执行的指令

```
sudo service crond [start/stop/restart/reload/status] #[启动/关闭/重启/重载配置/查看服务状态]
```

```
crontab -l          # 列出crontab定时任务
crontab -e          # 编辑crontab定时任务
crontab $filepath   # 重新指定定时任务列表文件
```

## 参考

> https://linuxtools-rst.readthedocs.io/zh_CN/latest/tool/crontab.html https://archive.fo/Xv96r