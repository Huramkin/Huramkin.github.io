---
title: Firefox启用DNS Over HTTPS
date: 2018-7-8
categories: Tools
tags:
    - DNS
    - Server
    - 随笔
---
DNS over HTTPS是一个进行安全化的域名解析的方案，目前尚处于实验性阶段。其意义在于以加密的HTTPS协议进行DNS解析请求，避免原始DNS协议中用户的DNS解析请求被窃听或者修改的问题（例如中间人攻击）来达到保护用户隐私的目的。现在主要是在 Google、Cloudflare 和 Mozilla 等科技公司在产品中进行使用,更多介绍点击这里[DNS-Over-HTTPS](https://zh.wikipedia.org/wiki/DNS_over_HTTPS)
<!----more---->
## Firefox启用DNS Over HTTPS
### 准备
由于DNS-Over-HTTPS是一种新出现的实验性技术,所以需要新建一个Firefox的配置来启用该项功能

在运行中输入``firefox.exe -p -no-remote``，新建一个Firefox的配置。

关于Firefox如何管理配置文件请看[官方说明](https://support.mozilla.org/zh-CN/kb/%E7%AE%A1%E7%90%86%E7%94%A8%E6%88%B7%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)

## 开启DNS Over HTTPS
打开 about:config 修改以下三处的相应值
### network.trr.mode
- 0 : 禁用该功能
- 1 :设置Firefox为更快的模式
- 2 :使用DNS Over HTTPS，并配置常规DNS使用
- 3 :仅仅使用TRR模式

由于要尝试DNS-Over-HTTPS,这里推荐选择3
### network.trr.uri 
这里应写DNS提供商的网址,鉴于某些原因,更推荐使用Cloudflare的服务
- https://cloudflare-dns.com/dns-query
- https://mozilla.cloudflare-dns.com/dns-query
- https://1.1.1.1/dns-query
- https://dns.google.com/experimental

前三个是Cloudflare的服务,最后一个是Google的,如果你有个人服务器的话可以尝试[自建](https://github.com/m13253/dns-over-https)

### network.trr.bootstrapAddress
推荐修改为``1.1.1.1``或是``1.0.0.1``

设置完成后重启浏览器
## 检查DNS Over HTTPS设置是否生效
打开下面的网站进行检查
>ipleak [https://www.ipleak.net/](https://www.ipleak.net/)

如果你把``network.trr.mode``改为``3``那么DNS Address后面内容应该为0 servers

## 其他
Firefox [下载地址](https://www.mozilla.org/en-US/firefox/channel/desktop/)