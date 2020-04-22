---
title: 连接或本地挂载网盘的工具
date: 2019-8-20 21:27:10
categories: Tools
tags:
    - 软件
    - 存储
    - 网盘
    - 对象存储
    - 随笔
---

使用支持挂载或连接多个网盘的第三方程序可以避免同时安装多个网盘客户端的情况

<!--more-->

## rClone

https://rclone.org/
https://github.com/mmozeiko/RcloneBrowser

- 支持的服务全面,从``aliyun OSS`` 到 ``Google Drive``,几乎全都有
- 全命令行操作,但可以使用GUI
- 开源,免费,全平台

## RaiDrive

https://www.raidrive.com/

- 支持 ``Google Drive, Google Shared drives,Google Photos, OneDrive, SharePoint,Dropbox, Box, pCloud, Yandex Disk,WebDAV, SFTP, FTP``
- 操作界面易用美观
- 可以在软件内配置代理
- 可以挂载到本地

## CyberDuck

https://cyberduck.io/

- 支持 ``FTP, SFTP, WebDAV, Amazon S3, OpenStack Swift, Backblaze B2, Microsoft Azure & OneDrive, Google Drive and Dropbox.``
- 操作界面易用
- 不能挂载到本地,如果需要可以使用 [Mountain Duck](https://mountainduck.io/)

## Minio

https://github.com/minio/minio/

这实际上是个建立对象存储的程序,但是可以对接多家云服务的对象存储,可以拿来当网盘用

## SFTP Drive

https://www.nsoftware.com/sftp/drive/

只能将SFTP挂载到Windows硬盘,也就是只支持SFTP


## 需要付费购买的

> https://webdrive.com/ 40美元
> https://www.expandrive.com/ 49.95
> http://www.netdrive.net/ 一次性49.95美元或者19.9美元一年订阅
> [CloudMounter](https://cloudmounter.net/) 仅支持macOS,44.99美元

## 参考

- https://www2.hiroyuki.com/posts/2035378
- https://github.com/mmozeiko/RcloneBrowser
- https://github.com/minio/minio/blob/master/docs/gateway/b2.md
- https://docs.min.io/cn/minio-client-quickstart-guide.html#add-a-cloud-storage-service