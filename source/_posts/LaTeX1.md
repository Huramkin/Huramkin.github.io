---
title: Latex笔记（一)
date: 2017-8-26
categories: Software
tags:
    -Latex
    -学习笔记
---
# Latex笔记（一）
## 本文章出现的内容有
1. Tex基本使用方法
2. 中英文混合输入
3. 基本文章结构
4. 在Tex中插入数学公式/化学式
5. 在Tex中插入表格/图片

## Tex基本使用方法
![gui](http://oun0eb8i2.bkt.clouddn.com/X5BX%25%7D5D08%5DIO$%5DK379%5B8IX.png)
安装了Tex后，一般会携带一个编辑器，如上图
![cmd](http://ouh3el9ec.bkt.clouddn.com/17-8-26/36539747.jpg)
也可以使用Cmd编辑Tex文件，当然也可以使用其他文本编辑器来编辑Tex文件，这里为了方便起见，使用自带的编辑器TeXworks。
### Hello，world
```Tex
\documentclass{article}
\begin{document}
 Hello,\LaTeX world
\end{document}
```
第一行中，表示使用article文档类型格式排版
按排版按钮，输出结果
![](http://ouh3el9ec.bkt.clouddn.com/17-8-26/57394525.jpg)

## 中日英混合输入
```Tex
\documentclass[UTF8]{ctexart}
\begin{document}
こんにちは,Latex世界
\end{document}
```
使用UTF8编码可以很好的支持多国语言
输入结果如下图
![](http://ouh3el9ec.bkt.clouddn.com/17-8-26/61775740.jpg)

##文章结构

```Tex
\documentclass[UTF8]{ctexart}
\title{你们吼啊}
\author{Huramkin}
\begin{document}
\maketitle
\section{NAIVE}
年轻人，too young too simple
\subsection{你们有一个好}
\paragraph{跑的快}
跑的比谁都快
\subparagraph{天天}
天天想搞个大新闻
\subparagraph{Excited!}
一颗赛艇
\subsubsection{谈笑风生}
曰。。曰
\subsection{LaTeX}
\paragraph{坠吼}
LaTeX是坠吼的
\subparagraph{滋磁八国语言}
こんにちは,Latex世界
\end{document}
```
![](http://ouh3el9ec.bkt.clouddn.com/17-8-26/50164223.jpg)

##  数学公式/化学式

### 数学公式

```Tex
\documentclass{article}
\usepackage{amsmath}
\begin{document}
%三种方式插入公式
$S=\pi r^2$.
\[ S=\pi r^2 \]
\begin{equation}
S=\pi r^2
\end{equation}
%根式和分式
$\sqrt{x_2}$, $\frac{1}{4}$
\[ \sqrt{x_3}, \]
\[ \frac{1}{4} \]
%数学常用运算符
\[ \pm\; \times \; \div\; \cdot\; \cap\; \cup\;
\geq\; \leq\; \neq\; \approx \; \equiv \]
%求和与极限
$ \sum_{i=1}^n i\quad \prod_{i=1}^n $
$ \sum\limits _{i=1}^n i\quad \prod\limits _{i=1}^n $
\[ \lim_{x\to0}x^2 \quad \int_a^b x^2 dx \]
\[ \lim\nolimits _{x\to0}x^2\quad \int\nolimits_a^b x^2 dx \]
%积分符号
\[ \iint\quad \iiint\quad \iiiint\quad \idotsint \]
%括号
\[ \Biggl(\biggl(\Bigl(\bigl((x)\bigr)\Bigr)\biggr)\Biggr) \]
\[ \Biggl[\biggl[\Bigl[\bigl[[x]\bigr]\Bigr]\biggr]\Biggr] \]
\[ \Biggl \{\biggl \{\Bigl \{\bigl \{\{x\}\bigr \}\Bigr \}\biggr \}\Biggr\} \]
\[ \Biggl\langle\biggl\langle\Bigl\langle\bigl\langle\langle x
\rangle\bigr\rangle\Bigr\rangle\biggr\rangle\Biggr\rangle \]
\[ \Biggl\lvert\biggl\lvert\Bigl\lvert\bigl\lvert\lvert x
\rvert\bigr\rvert\Bigr\rvert\biggr\rvert\Biggr\rvert \]
\[ \Biggl\lVert\biggl\lVert\Bigl\lVert\bigl\lVert\lVert x
\rVert\bigr\rVert\Bigr\rVert\biggr\rVert\Biggr\rVert \]
%省略号
\[ x_1,x_2,\dots ,x_n\quad 1,2,\cdots ,n\quad
\vdots\quad \ddots \]
%矩阵
\[ \begin{pmatrix} a&b\\c&d \end{pmatrix} \quad
\begin{bmatrix} a&b\\c&d \end{bmatrix} \quad
\begin{Bmatrix} a&b\\c&d \end{Bmatrix} \quad
\begin{vmatrix} a&b\\c&d \end{vmatrix} \quad
\begin{Vmatrix} a&b\\c&d \end{Vmatrix} \]
%小矩阵
A little matrix $ ( \begin{smallmatrix} a&b\\c&d \end{smallmatrix} ) $.
\end{document}
```
排版结果
![](http://ouh3el9ec.bkt.clouddn.com/17-8-26/43899600.jpg)

### 化学式
```Tex
\documentclass{article}
\usepackage{mhchem}
\usepackage{chemfig}
\begin{document}
\ce{Fe^{II}Fe^{III}2O4}

\ce{Hg^2+ ->[I-] HgI2
          ->[I-] [Hg^{II}I4]^2-}

\chemfig{*5(-=--=)}

\chemfig{A-B(-[1]W-X)(-[6]Y-[7]Z)-C}
\end{document}
```
排版结果

![](http://ouh3el9ec.bkt.clouddn.com/17-8-26/67925193.jpg)

这里用到了mhchem和chemfig两个宏包，下面附有文件的链接

>[chemfig说明文档](http://mirrors.ctan.org/macros/generic/chemfig/chemfig-en.pdf)

>[mhchem说明文档](http://mirrors.ctan.org/macros/latex/contrib/mhchem/mhchem.pdf)
