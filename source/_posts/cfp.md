---
title: CF Partner 面板
date: 2019-2-15 21:39:48
categories: Tools
tags:
    - 面板
    - 云服务
    - 软件
    - cloudflare
---

## CF Partner 介绍

作为普通用户，接入域名只能在 Cloudflare 官网用修改 NS 的方式接入域名，但是作为 CF Partner 可以使用 CNAME 方式接入域名

使用 CNAME 接入，因为不用修改NS 所以可以同时其它的 DNS 服务提供商.

<!--more-->

## 几种接入方式介绍

### WHMCS

这里可以参考官方文档: 

https://www.cloudflare.com/media/downloads/Cloudflare-Training-WHMCS-Installation-Guide.pdf



### SonicBreaker

https://github.com/AxelPanda/SonicBreaker/

首次使用需要编辑 ``Application/Home/Controller/CFController.class.php``文件中的``’your_Cloudflare_Partner_host_key’``

然后使用浏览器访问进行下一步安装



### CFPMP

https://github.com/Netrvin/CFPMP

- 可以接入 ``reCAPTCHA(v2)``
- 可以加入A记录
- CNAME接入

### Python CLI

https://github.com/fffonion/cloudflare-partner-cli

### Cloudflare-CNAME-Setup

https://github.com/ZE3kr/Cloudflare-CNAME-Setup

```
docker run -d \
           -e HOST_KEY=填写你自己的 Partner API Key \
           -e HOST_MAIL=填写你自己的 Partner 邮箱    \
           -e TITLE=填写自定义标题                   \
           -p 端口号:80                             \
           ze3kr/cloudflare
```