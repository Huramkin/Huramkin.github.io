---
title: GitHub使用（一）
date: 2017-11-11
categories: Skill
tags:
    - Code
    - Tool
    - 随笔
---
GitHub的版本控制系统，用来上传与管理代码非常方便，当然可以选择比如像[SourceTree](https://www.sourcetreeapp.com/)这类GUI,但是Git可以使用更多的功能。

<!--more-->

## 安装Git

#### Windows中的安装
首先[下载Git](https://git-for-windows.github.io/)
安装完成后在开始中找到“Git Bash”打开之后就是像终端一样的黑框然后在这个界面里面输入以下命令
```
git config --global user.name "Name"
git config --global user.email "email"
```
#### macOS和Linux中的安装
macOS首先需要安装[Homebrew](https://brew.sh/)使用homebrew安装git

Linux根据发行版的不同使用apt-get/yum来进行安装

## 常用简单命令
![](https://github.com/Huramkin/libpic/blob/master/git1.png?raw=true)

|说明|命令|
|-----|-----|
|在当前目录新建repositories|git init |
|克隆项目   | git clone -b <branch>
|显示git配置 |git config --list|
|添加指定文件/目录到暂存区   | git add |
|提交暂存到仓库     |  git commit -m [message] |
|切换到上一分支   |   git checkout|
|下载远程仓库变更   |  git fetch |
|取回远程仓库并合并   |  git pull [remote] [branch] |
|  从本地上传到远程仓库| git push [remote] [branch]   |
