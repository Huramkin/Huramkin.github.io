---
title: RouterOS 基础问题
date: 2019-10-2
categories: Server
tags:
    - Linux
    - Server
    - 软路由
    - RouterOS
    - 随笔
---

RouterOS是一种路由操作系统,带有配套的GUI操作软件,也可以使用命令直接操作,功能齐全,使用方便.由于功能繁多需要从最基本的连接到互联网开始做起,这里记录了使用过程中的一些基础问题

<!--more-->

### DD安装

```
wget http://download2.mikrotik.com/routeros/6.42.6/chr-6.42.6.img.zip -O chr.img.zip && \
gunzip -c chr.img.zip > chr.img && \
mount -o loop,offset=33554944 chr.img /mnt && \
ADDRESS0=`ip addr show eth0 | grep global | cut -d' ' -f 6 | head -n 1` && \
GATEWAY0=`ip route list | grep default | cut -d' ' -f 3` && \
echo "/ip address add address=$ADDRESS0 interface=[/interface ethernet find where name=ether1]
/ip route add gateway=$GATEWAY0
" > /mnt/rw/autorun.scr && \
umount /mnt && \
echo u > /proc/sysrq-trigger && \
dd if=chr.img bs=1024 of=/dev/vda && \
reboot
```
```
dd操作时,目标路径可能不是 /dev/vda 而是 /dev/sda 或其他,操作前先 ls /dev 查看一下
```

```
wget http://download2.mikrotik.com/routeros/6.43.8/chr-6.43.8.img.zip -O chr.img.zip && \
gunzip -c chr.img.zip > chr.img && \
mount -o loop,offset=33554944 chr.img /mnt && \
ADDRESS0=`ip addr show eth0 | grep global | cut -d' ' -f 6 | head -n 1` && \
GATEWAY0=`ip route list | grep default | cut -d' ' -f 3` && \
echo "/ip address add address=$ADDRESS0 interface=[/interface ethernet find where name=ether1]
/ip route add gateway=$GATEWAY0
" > /mnt/rw/autorun.scr && \
umount /mnt && \
echo u > /proc/sysrq-trigger && \
dd if=chr.img bs=1024 of=/dev/vda && \
reboot
```

### 安全加固

禁用不常用不安全的服务

```
/ip service disable telnet,f​​tp,www,www-ssl,api,api-ssl
```

禁用邻居发现

```
/ip neighbor discovery-settings set discover-interface-list=none
```

### 添加IP

添加网关和IP以连接互联网,dd安装时网关和IP设置的脚本应该自动写在 ``/mnt/rw/autorun.scr`` 中的,但是意外常有,这里还是写一下

```
#定义接口的IP和掩码
/ip address add address=192.168.2.233/24 interface=ether1
#定义网关
/ip route add gateway=192.168.2.1
```

### 端口映射

将外网访问 10.5.8.200 的 80 端口的数据映射到主机 192.168.0.18

```
/ip firewall nat add chain=srcnat action=masquerade
/ip firewall nat add action=dst-nat chain=dstnat dst-address=10.5.8.200 dst-port=80 protocol=tcp to-addresses=192.168.0.18 to-ports=80
```

上面的命令映射目标是一个IP,转发到公网主机时会遇到目标主机是动态IP的情况,这时候就需要一个定时脚本来定时更新IP地址,如何定时请查看下一部分

```
/ip firewall nat set 6 to-addresses=[:resolve cu.ddns.com;]

#使用 set 方法设置防火墙 nat 表中的编号为 6 的规则的 to-addresses 字段的值为 [:resolve cu.ddns.com;] ,也就是解析 cu.ddns.com 地址所得到的IP,关于[:resolve <arg>;]等语法请查看参考部分
```

### 定时任务

#### Scripts

在Winbox 中 System > Scripts 即可找到此功能

如果设置 ``Scripts``的

``Name``为``cuddns``

``Source``为``/ip firewall nat set 6 to-addresses=[:resolve cu.ddns.com;]``

使用命令

```
system script> add name=cuddns source=/ip firewall nat set 6 to-addresses=[:resolve cu.ddns.com;]
```

那么这个给端口映射的目标主机换IP的脚本就设置好了,接下来是定时


#### Schedule

```
system scheduler> add interval=300 name="autoddns" on-event=cuddns
#每300秒执行一次脚本 cuddns
```

### 查看资源占用

```
/system resource print
```
### 参考

> DD安装部分
> https://www.qedev.com/router/59061.html https://web.archive.org/web/20200422025111/https://www.qedev.com/router/59061.html
> https://www.kvm.la/1065.html https://web.archive.org/web/20200422031312/https://www.kvm.la/1065.html

> 安全加固部分
> https://www.sklinux.com/posts/secrity/mikrotik%E8%B7%AF%E7%94%B1%E5%AE%89%E5%85%A8%E9%98%B2%E8%8C%83%E8%AE%BE%E7%BD%AE/ https://archive.vn/Xp09A

> 端口转发部分
> http://www.irouteros.com/?page_id=186 推荐余松老师的 《RouterOS入门到精通》
> https://www.ros9.com/755.html https://web.archive.org/web/20200422033539/https://www.ros9.com/755.html https://blog.csdn.net/wyf_fantastic/article/details/80083096
> 

