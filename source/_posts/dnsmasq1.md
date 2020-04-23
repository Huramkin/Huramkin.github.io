---
title: DNSmasq的使用（一）
date: 2018-04-10 3:36:15
categories: Tools
tags:
    - DNS
    - 基础服务
    - 网络优化
    - Web开发
    - 隐私保护
---

DNSmasq是一个用于配置DNS和DHCP的轻便工具，适合小型网络，利用得当可以防污染，防劫持，消除广告，还可以搭配其他软件实现更多功能
<!--more-->

## 安装与配置
```
#CentOS/Debian安装
yum/apt-get install dnsmasq

#macOS安装
brew install dnsmasq
```
Linux系统安装后的配置文件一般在 ``/etc/dnsmasq.conf``
macOS需要运行``brew info dnsmasq``来查找配置文件地址
#### 配置文件部分说明
``strict-order`` 意味着解析域名时，dnsmasq会按照``/etc/resolv.conf``文件中DNS服务器的顺序进行解析，直到解析成功为止。

``/etc/resolv.conf``是系统自带的文件。

```
# 修改下面这个server字段，也可以添加上游DNS，而不需要修改 /etc/resolv.conf 使用no-resolv将此功能关闭
# no-resolv 关闭上游dns
# Add other name servers here, with domain specs if they are for
# non-public domains.
server=上游DNSIP#port
```

``listen-address`` 表示DNS服务监听的地址。若仅本机使用，则使用``127.0.0.1``。如果想对局域网中的其他机器共同使用这个DNS服务器，还需要加上局域网中的地址``192.168.78.1,127.0.0.1``,同理，若想要建立公网DNS服务，则需要写入本机的公网IP。

## 使用
#### 启动服务
```
#根据包管理器和系统的不同，使用的启动命令也不相同，以下三种是比较常用的
sudo brew services start dnsmasq
/etc/init.d/dnsmasq start
service dnsmasq start
```
#### 投入使用
进入系统网络设置中将DNS修改为``127.0.0.1``

#### 测试服务
测试DNS服务，一般常用dig命令
```
dig @dns domain.com

# 若显示找不到命令，可能是没有安装相关软件，下方命令供参考

apt-get install dnsutils
```
## 其他

防火墙开启53端口
```
vi /etc/sysconfig/iptables

-A INPUT -p udp -m state --state NEW --dport 53 -j ACCEPT
-A INPUT -p tcp -m state --state NEW --dport 53 -j ACCEPT
#重启iptables使修改生效
service iptables restart
```
因为使用了海外DNS服务，有可能会解析到无法访问的地址,使用[dnsmasq-china-list](https://github.com/felixonmars/dnsmasq-china-list)可以解决这个问题
