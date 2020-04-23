---
title: 使用docker运行安卓虚拟机
date: 2019-9-08 19:21:45
categories: Tools
tags:
    - 安卓
    - 服务器
    - docker
    - 虚拟机
    - 随笔
---

也许可以拿来搞云手机...

<!--more-->

docker run --privileged -d -p 6080:6080 -p 5554:5554 -p 5555:5555 -e DEVICE="Samsung Galaxy S6" --name android-container budtmo/docker-android-x86-8.1

http://docker-host-ip-address:6080

## 参考
- https://medium.com/@AndreSand/android-emulator-on-docker-container-f20c49b129ef https://archive.fo/ATpcf
- https://hub.docker.com/r/ksoichiro/android-emulator
- https://github.com/thyrlian/AndroidSDK
- https://hub.docker.com/r/thyrlian/android-sdk
- https://github.com/budtmo/docker-android
