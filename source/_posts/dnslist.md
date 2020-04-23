---
title: 在中国大陆好用的DNS
date: 2018-4-6
categories: Tool
tags:
    - 网络
    - 基础服务
    - DNS
    - 软件
---
## 文章简介
这里选择了一些在中国大陆好用的公共DNS服务
污染小，响应速度快
还有一些其他的使用技巧
<!--more-->
## DNS服务的网站及服务器信息
|详细信息站点|服务器IP|
|------|-------|
|[GeekDNS](https://www.233py.com/) |https://ndns.233py.com/dns-query |
|[红鱼DNS](https://www.rubyfish.cn/docs) |dns.rubyfish.cn|
|[ONE DNS](https://www.onedns.net/personal)|117.50.11.11;117.50.22.22 |
|[北京教育网](http://ip.yqie.com/dns_jiaoyu.htm)| 58.132.8.1 |
|[AIXYZ DNS](http://aixyz.com/) |南方：115.159.146.99 北方：123.206.21.48 |
|中科大 DNS |202.38.64.1;202.112.20.131;202.141.160.95;202.141.160.99;202.141.176.95 ;202.141.176.99|
|[PUBLIC DNS+](https://www.dnspod.cn/products/public.dns) |119.29.29.29 |
|[sDNS(CNNIC)](http://www.sdns.cn/) |1.2.4.8; 210.2.4.8 |
|[ALIDNS](http://www.alidns.com/) |223.5.5.5; 223.6.6.6 |
|V2EX DNS |199.91.73.222;178.79.131.110|
|[OpenerDNS](https://github.com/openertech/openerdns/wiki/OpenerDNS) |42.120.21.30 |

## 针对不同设备的DNS设置推荐

### Windows/Linux/macOS
在系统中直接设置DNS服务器地址或者尝试使用下面的软件来进一步保障上网的速度与安全
> [Dnscrypt-proxy](https://github.com/jedisct1/dnscrypt-proxy)
>
> [ChinaDNS](https://github.com/shadowsocks/ChinaDNS)
>
> [AuroraDNS](https://github.com/mili-tan/AuroraDNS.GUI)
> ``AuroraDNS`` 是一个纯净、简单、面向普通用户的图形化的本地 DoH 客户端。它在本地将 ``DNS over HTTPS`` 转换为传统的 ``DNS`` 协议。

### 移动设备
由于一些移动设备用户无法通过系统自行修改DNS配置
比如iPhone只能修改Wi-Fi的DNS配置但无法修改4G网络DNS
所以我们需要一些第三方软件的帮助
#### iOS
通过Surge软件，就可以更改iOS设备的DNS，如果您觉得这款软件太昂贵了。
也可以使用DNS Override来进行修改，不过需要花费$2.99进行内购解锁
以上两款软件均可通过AppStore找到
#### Android
在Google play商店搜索“daedalus“下载安装即可
