---
title: 使用 Minio 建立对象存储
date: 2019-8-18 21:27:10
categories: Tools
tags:
    - 软件
    - 服务器
    - web
    - docker
    - 对象存储
    - Minio
---

MinIO 是一个开源对象存储服务,兼容亚马逊S3云存储服务接口，非常适合于存储如图片、备份数据和虚拟机镜像等大容量非结构化的数据，一个对象文件可以是任意大小，从几kb到最大5T不等。

MinIO是一个非常轻量的服务,可以很简单的和其他应用的结合.

<!--more-->

## 服务端的使用

### 对接对象存储

minio可以对接azure,gcp,aws s3,阿里云,还有b2 cloud.

这里以对接 b2 cloud 为例 , 在部署完成后即可访问 ``http://[IP地址]:9000`` 进行查看,上传等操作.

登录网页的Access和Secret密钥,就是docker运行输入时的``MINIO_ACCESS_KEY`` 和 ``MINIO_SECRET_KEY`` 的值

```
docker run -p 9000:9000 --name b2-s3 -e "MINIO_ACCESS_KEY=b2_account_id" -e "MINIO_SECRET_KEY=b2_application_key" minio/minio gateway b2
```

```
# 使用二进制文件进行对接
export MINIO_ACCESS_KEY=b2_account_id
export MINIO_SECRET_KEY=b2_application_key
minio gateway b2
```

### 使用服务器空间作为存储

```
docker run -p 9000:9000 --name minio1 -v /mnt/data:/data -v /mnt/config:/root/.minio minio/minio server /data
#Access和Secret密钥可以在容器日志中找到
```

```
docker run -p 9000:9000 --name minio1 -e "MINIO_ACCESS_KEY=AKIAIOSFODNN7EXAMPLE" -e "MINIO_SECRET_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" -v /mnt/data:/data -v /mnt/config:/root/.minio minio/minio server /data
#可以将Access和Secret密钥设置为环境变量
```

## 客户端的使用


```
docker run -it --entrypoint=/bin/sh minio/mc
```

客户端通过 docker 运行后即可使用 ``mc config`` 等命令

```
mc config host add <ALIAS> <YOUR-S3-ENDPOINT> <YOUR-ACCESS-KEY> <YOUR-SECRET-KEY> <API-SIGNATURE>  #<ALIAS>就是给你的云存储服务起了一个名字,类似于docker中的 ``--name=`` ,S3 endpoint,access key和secret key是你的云存储服务提供的。API签名是可选参数，默认情况下，它被设置为"S3v4"。
mc config host add myb2 http://gateway-ip:9000 b2_account_id b2_application_key  #接入示例中的服务端
mc config host add minio http://192.168.1.51 BKIKJAA5BMMU2RHO6IBB V7f1CwQqAcwo80UEIJEjc5gVQUSSx5ohQ9GSrr12 S3v4 #接入minio服务端
mc config host add s3 https://s3.amazonaws.com BKIKJAA5BMMU2RHO6IBB V7f1CwQqAcwo80UEIJEjc5gVQUSSx5ohQ9GSrr12 S3v4 #接入aws s3
mc config host add gcs  https://storage.googleapis.com BKIKJAA5BMMU2RHO6IBB V8f1CwQqAcwo80UEIJEjc5gVQUSSx5ohQ9GSrr12 S3v2 #接入gcp Google云存储只支持旧版签名版本V2所以此处选择 S3v2
```

可用命令

```
ls       列出文件和文件夹。
mb       创建一个存储桶或一个文件夹。
cat      显示文件和对象内容。
pipe     将一个STDIN重定向到一个对象或者文件或者STDOUT。
share    生成用于共享的URL。
cp       拷贝文件和对象。
mirror   给存储桶和文件夹做镜像。
find     基于参数查找文件。
diff     对两个文件夹或者存储桶比较差异。
rm       删除文件和对象。
events   管理对象通知。
watch    监听文件和对象的事件。
policy   管理访问策略。
session  为cp命令管理保存的会话。
config   管理mc配置文件。
update   检查软件更新。
version  输出版本信息。
```

## 参考

> https://docs.min.io/cn/minio-docker-quickstart-guide.html
> https://www.moerats.com/archives/643/
> https://theo.im/blog/2017/10/17/use-minio-with-aliyun-oss/ https://archive.fo/AFGbN
> https://github.com/minio/minio/pull/5103
> https://github.com/minio/minio/blob/master/docs/gateway/b2.md