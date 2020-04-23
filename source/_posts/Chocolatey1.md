---
title: Chocolatey 包管理器的安装与使用
date: 2019-8-16 21:27:10
categories: Tools
tags:
    - 软件
    - Windows
    - 包管理器
    - 随笔
---

Chocolatey 是用在Windows上的包管理器

<!--more-->


## 安装

在以管理员模式运行的 ``CMD`` 中运行以下命令

```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

# https://chocolatey.org/install 查看最新的安装命令还有在powershell中的安装命令
# GUI安装方式在参考中,或者使用 `` choco install chocolateygui``
```

在以管理员模式运行的 ``PowerShell`` 中运行命令``iwr https://cin.st | iex``也可以进行安装

安装完成后输入命令``choco``,若显示版本号则安装成功

## 使用

```
choco install [软件包名称]   # 安装指定软件
choco uninstall [软件包名称] # 卸载指定软件
choco search [关键字]        # 搜索关键字,查找软件包名称 (也可以在 https://chocolatey.org/packages/ 直接查找)
choco upgrade [软件包名称]   # 升级指定软件
```


## 参考

- https://chocolatey.org
- https://chocolatey.org/docs
- https://chocolatey.org/packages/ChocolateyGUI GUI安装说明