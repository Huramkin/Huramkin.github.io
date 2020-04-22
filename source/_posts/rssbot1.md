---
title: 在Telegram搭建一个订阅机器人
date: 2018-05-1
categories: Software
tags:
    - Linux
    - Server
    - Software
    - 随笔
---
使用Telegram机器人来推送rss,方便每天浏览文章
<!--more-->

>项目地址 https://github.com/iovxw/rssbot

## 环境
``Ubuntu 14 ``

开始前先运行
```
sudo apt-get update
apt-get install pkg-config libssl-dev
```

## 下载编译安装RssBot
###  下载源码
```
下载地址：https://github.com/iovxw/rssbot/releases 
```
### 上传到服务器解压
```
tar xvf rssbot-1.4.3-limited.tar.gz
```
### 安装Rust Nightly
```
curl -s https://static.rust-lang.org/rustup.sh | sh -s -- --channel=nightly
```
### 进入目录编译
```
cd /home/ubuntu/rssbot-1.4.3-limited #进入目录
cargo build --release #编译安装
```
### 创建机器人获得Token
如何创建机器人自行搜索 
这里我刚刚创建了个机器人@PushRss_Bot 获取到了Token 进入这个目录
```
cd /home/ubuntu/rssbot-1.4.3-limited/target/release
./rssbot DATAFILE TELEGRAM-BOT-TOKEN
```
``DATAFILE`` 为数据库保存路径(其实就是一个 json 文件, 不需要手动创建)，``TELEGRAM-BOT-TOKEN``就是你创建的机器人的Token

## 其他
如果需要一直运行需要使用[Screen命令](https://huramkin.me/2018/04/30/screen/#more)