---
title: 使用dynu免费ddns的教程
date: 2019-4-28 23:50:10
categories: Tools
tags:
    - 软件
    - 服务器
    - dns
---

平时会使用到一些动态ip主机,或者是有自己的NAS,都需要使用DDNS

设置DDNS如果有自己的域名就很容易,国内的阿里腾讯的云服务,海外有CF和HE等的解析服务,都可以用简单的脚本实现ddns

但是有些时候没有充裕的域名资源进行ddns设置,这时就需要用到免费的ddns服务了,这里记录的是dynu.com ddns的使用方法

<!--more-->


## DDNS使用方法
首先需要注册一个https://www.dynu.com/en-US/ 的账号,打开动态域名解析服务添加一个域名,此时ipv4地址和位置名(Location)

### 方法1

#### 安装
Red Hat 系列系统
```
rpm -ivh https://www.dynu.com/support/downloadfile/30 
```

Ubuntu 16
```
URL='https://www.dynu.com/support/downloadfile/31'; FILE=`mktemp`; wget "$URL" -qO $FILE && sudo dpkg -i $FILE; rm $FILE
```
#### 配置

配置文件位置 ``vi /etc/dynuiuc/dynuiuc.conf``

配置文件内容

```

username YOURUSERNAME  # Your account username.(你的用户名)
password YOURPASSWORD  # Your account password or IP update password. (你的用户密码或者IP更新密码)
location LOCATIONNAME  # Can be left empty. Location name can be assigned to hostnames in the control panel.(所使用域名的位置名,这里的位置名就是面板中的 Location )
ipv4 true              # Can be true or false.(开启更新ipv4地址)
ipv6 false             # Can be true or false.(关闭更新ipv6地址)
pollinterval 300       # IP update interval in seconds. Minimum is 120.(IP更新时间,最小120秒)
debug false            # Can be true or false
quiet true             # Can be true or false

```         


以下是示例配置

```
username webtester
password somepassword
location Work
ipv4 true
ipv6 false
pollinterval 300
debug false
quiet true
```

编辑并保存好配置文件后,需要重启服务,命令为 ``systemctl restart dynuiuc.service``         

配置定时执行,以便及时更新IP地址,运行命令 ``crontab -e``

在输入界面写入下面这行并保存,这里是每十分钟重启一次服务,以更新IP地址

```
*/10 * * * * systemctl restart dynuiuc.service
```

管理服务使用的命令

```
systemctl start dynuiuc.service   #启动服务
systemctl stop dynuiuc.service    #停止服务
systemctl restart dynuiuc.service #重启服务
systemctl status dynuiuc.service  #服务状态
```

#### 查看和截断日志文件的方法

```
查看实时日志: tail -f /var/log/dynuiuc.log
查看日志文件: cat /var/log/dynuiuc.log
截断日志文件: cat /dev/null > /var/log/dynuiuc.log
查看服务状态: systemctl status dynuiuc.service -l
```

### 方法2
Debian 系统安装 DDClient

更换时区并对时
```
echo "y" |cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime 
apt-get install -y ntpdate;ntpdate cn.pool.ntp.org
date
```

安装

```
apt-get install ddclient
```

跟随安装提示,一步一步输入信息

如果需要修改可以直接修改配置文件

DDClient配置文件位于 ``/etc/ddclient.conf``

测试(检查输出的公网IP是否正确):``ddclient -daemon=0 -debug -verbose -noquiet``

开启进程守护:``/usr/sbin/ddclient -daemon 120 -syslog``

默认情况下,本机记录文件中的IP不变,软件就不会更新IP,可以通过自己设置定时任务的方式修改更新时间
设置定时任务,运行命令 ``crontab -e``,输入

```
*/5 * * * * rm /var/cache/ddclient/*.* # 每5分钟删除IP更新缓存记录
*/5 * * * * ddclient # 每5分钟更新并同步IP记录
```

### 方法3
首先,需要安装curl

然后运行

```
curl "http://api.dynu.com/nic/update?hostname=example.ddnsfree.com&password=passwd"
```

把 ``example.ddnsfree.com`` 改为刚申请的域名，``passwd`` 改为你账户的密码,然后执行。运行需要一点时间,需要等待.

直到输出 ``good xxx.xxx.xxx.xxx``,ddns更新成功

输入命令 ``crontab -e``
在接下来的界面输入下面的配置并保存

```
*/1 * * * * curl "http://api.dynu.com/nic/update?hostname=example.ddnsfree.com&password=passwd" >/dev/null 2>&1 &
```

## 提示
安装crontab
```
# centos
yum install vixie-cron
yum install crontabs
-----------------
# Ubuntu
apt-get install cron
```
查看计划任务状态,出现``Active Running``说明定时任务设置成功

```
# Ubuntu
/etc/init.d/cron status
# centos
/bin/systemctl status crond.service 
```

## 参考
> https://www.dynu.com/DynamicDNS/IPUpdateClient/Linux
> https://www.dynu.com/DynamicDNS/IPUpdateClient/DDClient
> https://www.pqs.pw/knowledgebase/9/DDNSdynuTTL30.html
> https://archive.fo/2Utuw
> https://www.eaavps.com/253.html
> https://archive.fo/ZtEOE
