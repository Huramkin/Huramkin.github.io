---
title: 免费使用 IBM Cloud Lite
date: 2019-8-10 21:27:10
categories: Cloud
tags:
    - 云服务
    - 服务器
    - web
---

免费提供的云服务很多,比如GCP,这里介绍的是IBM Cloud

<!--more-->

## 注册

注册链接 https://console.ng.bluemix.net/registration/free
注册后不需要绑定银行卡等操作 因为是完全免费的

## 使用

登录地址 https://cloud.ibm.com/login 

点击创建资源,这里的资源很多,需要免费资源则选择轻量 (Cloud Foundry 应用程序) 

免费额度是256M内存,也就意味着可以创建4个64M内存、2个128M内存或者1个256M内存的程序

免费应用的限制:超过 10 天没有开发活动，应用程序将进入休眠. 超过 30 天没有开发活动，将删除轻量套餐的服务实例.使用[监控服务](https://intl.huramkin.com/2019/01/20/monitor/#more)来防止收回

可以创建的应用类型有 ``java/nodejs/php/go`` 等,但是不支持使用root权限,看起来只能使用控制台网页里面的ssh进行控制,在"运行时"选项里就可以找到ssh

代码部署的目录在 ``/home/vcap/app`` ,刚创建时会有一个示例页面,那个示例页面代码的所在位置应该就是代码部署的目录

## 绑定信用卡之后

绑定信用卡后除了已经拥有的访问权限,还能解锁更多的功能

比如,免费 Cloud Foundry 内存额度增加到 512 MB还有可以获得一个月有效期的200美元赠金等等

可以在 https://console.bluemix.net/containers-kubernetes/catalog/cluster/create 启用免费的k8s集群容器

如果不想绑定卡,还可以通过购买或者申请教育优惠码来使用,使用国内大学的邮箱即可通过

免费的k8s集群的配置是 100G机械硬盘、共享G口带宽、共享IP、不限流量、支持所有数据中心、端口随机分配

免费k8s开通后只能使用一个月到期会删除


## 提示

- 在这里防止收回的方法同样适用于防止 ``heroku`` 收回免费资源
- 同样支持这类免费服务的还有Red Hat的 https://www.openshift.com/
- 这篇文章仅是一个简单的记录,需要更多信息看参考中的网页

## 参考

> https://51.ruyo.net/12065.html#1
> https://51.ruyo.net/12084.html
> https://51.ruyo.net/3902.html
> https://cloud.ibm.com/docs/account?topic=account-accounts#accounts
> https://archive.fo/2cnEu
> https://archive.fo/WnCsj
> https://archive.fo/s7zcH