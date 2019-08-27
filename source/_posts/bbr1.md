---
title: BBR脚本汇总
date: 2019-8-17 21:27:10
categories: Tools
tags:
    - 软件
    - 服务器
    - 拥塞控制
    - 脚本
---

```
wget -N --no-check-certificate "https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh" && chmod +x tcp.sh && ./tcp.sh
```

wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh

检测bbr服务是否开启 ``lsmod | grep bbr`` 返回值有``tcp_bbr``就说明``bbr``已经启动,如果没有显示也有可能bbr服务正常



## 参考

> https://www.94ish.me/1635.html
> https://www.hostloc.com/thread-372277-1-2.html
> https://51.ruyo.net/4415.html https://archive.fo/aLk5o
> https://teddysun.com/489.html https://archive.fo/sqyyC
> https://www.hostloc.com/thread-507165-1-1.html 
> https://www.zhujiboke.com/2017/07/589.html
> https://www.moerats.com/archives/387/
> https://www.moerats.com/archives/382/