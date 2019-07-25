---
title: 设置特定国家和地区的防火墙白名单
date: 2018-12-20 11:55:43
categories: Tools
tags:
    - 防火墙
    - 服务器
    - 软件
---

## 部署方法
```
apt-get -y install ipset #Ubuntu系统安装ipset
yum -y install ipset #CentOS系统安装ipset
-----
iptables -P INPUT ACCEPT #安全清空防火墙规则以防止清空后无法访问服务器以及部署过程中发生冲突
iptables -F
-----
ipset -N cndz hash:net #创建一个名为cndz的规则
wget -P . http://www.ipdeny.com/ipblocks/data/countries/cn.zone #下载IP段
for i in $(cat /root/cn.zone ); do ipset -A cndz $i; done #将IP段添加到cndz规则中
-----
iptables -A INPUT -p tcp -m set --match-set cndz src -j ACCEPT #设置白名单IP段
-----
iptables -P INPUT DROP  #对白名单外国家关闭所有端口
iptables -A INPUT -p tcp --dport 80 -j DROP #对白名单外国家关闭80端口
```

## 备注

获取特定地区IP段：http://www.ipdeny.com/ipblocks/

CentOS关闭firewall防火墙
```
systemctl stop firewalld.service
systemctl disable firewalld.service
```