---
title: GPG基本使用方法
date: 2018-2-15
categories: Software
tags:
    - 隐私保护
    - 加密
    - 随笔
---

## 简介及安装方式
GnuPG是用于加密、数字签名及产生非对称匙对的软件。下载与安装方式：[gpgtools](https://gpgtools.org/)
<!--more-->
## 开始
在安装完成后在终端输入
```
gpg --help
```
如果安装成功，就可以看到GPG的相关使用方法
#### 生成密钥
```
gpg --gen-key
```
输入此命令后，跟随向导设置密钥种类、长度、有效期、个人信息以及私钥密码
## 使用

#### 加密与解密
##### 加密
```
gpg --recipient [SUBID] --output testen.txt --encrypt test.txt
```
##### 解密
```
gpg --output testde.txt --decrypt testen.txt
```
recipient 指定接收者
output 指定加密后文件的名称
encrypt 指定需要被加密的文件
SUBID可以通过``gpg --list-keys``来获取

#### 签名
##### 仅签名
```
gpg --sign test.txt
```
如需要生成单独的签名文件
```
gpg --detach-sign test.txt
```

##### 签名并加密

```
gpg --local-user [发信SUBID] --recipient [接收SUBID] --armor --sign --encrypt test.txt
```

##### 验证签名
```
gpg --verify test.txt.asc test.txt
```

## 管理
列出已有密钥
```
gpg --list-keys
```
删除已有密钥
```
gpg --delete-key [SUBID]
```
上传密钥
```
gpg --send-keys [SUBID] --keyserver hkp://subkeys.pgp.net
```
导入密钥
```
gpg --import []
```
从公钥服务器获得他人公钥
```
gpg --keyserver hkp://subkeys.pgp.net --search-keys [SUBID]
```
