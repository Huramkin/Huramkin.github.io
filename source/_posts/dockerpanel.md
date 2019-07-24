---
title: Docker面板的介绍与简单使用
date: 2018-10-05 3:08:20
categories: Tools
tags:
    - Docker
    - 集群
    - 面板
    - Web开发
---

关于docker的图形化管理有很多工具，这里介绍一下易用的一些工具

<!--more-->

## Portainer

Portainer是一个基于Docker API的轻量级Docker图形化界面

功能十分全面,如显示状态、应用部署、显示日志、Swarm集群等功能

### 安装

#### 单机安装

```
docker volume create portainer_data
docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
```

安装完成之后,访问``http://[ip地址]:9000``,即可开始设置面版模式和管理员密码,在单机模式下应该选择``local``

#### 集群安装

```
curl -L https://portainer.io/download/portainer-agent-stack.yml -o portainer-agent-stack.yml
docker stack deploy --compose-file=portainer-agent-stack.yml portainer
# 更多详细信息参考:https://portainer.readthedocs.io/en/stable/index.html
```

```
curl -L https://github.com/docker/compose/releases/download/1.24.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
# 安装docker-compose
```

##### 加入节点

需要在docker节点上开启远程管理端口：2375或2376（建议使用2376端口,开通步骤参考:https://docs.docker.com/engine/security/https/）

点击``Add Endportainer``添加节点,写入相应信息