---
title: acme.sh 的 docker 部署使用方法
date: 2019-9-5 19:21:45
categories: Tools
tags:
    - SSL
    - docker
    - 域名
    - 免费
    - 隐私保护
---

用acme.sh获取免费SSL证书

<!--more-->


## 脚本部署

```
curl https://get.acme.sh | sh
source ~/.bashrc
export CF_Key="asasasasasadasasas"
export CF_Email="example@aa.aa"
acme.sh --issue --dns dns_cf -d aa.aa -d *.aa.aa
```
成功运行后,证书会自动生成到用户目录下的 ``.acme.sh`` 文件夹,续签证书 ``acme.sh  --renew   -d aa.com -d *.aa.com``

## docker部署

```
docker run --rm  -itd  \
  -v "$(pwd)/out":/acme.sh  \
  -e CF_Email="example@aa.aa" \
  -e CF_Key="asasasasasadasasas" \
  --net=host \
  --name=acme.sh \
  neilpang/acme.sh daemon
```

这样配置容器可以自动续签证书

容器启动后开始获取证书

```
docker exec acme.sh --issue --dns dns_cf -d *.aa.aa -d aa.aa
```
## 参考

- https://github.com/Neilpang/acme.sh/wiki/Run-acme.sh-in-docker
- https://github.com/Neilpang/acme.sh/wiki/dnsapi
- https://hub.docker.com/r/neilpang/acme.sh