(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{331:function(s,t,n){"use strict";n.r(t);var e=n(5),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("用以允许特定国家访问服务器以及服务,达到锁定区域的目的")]),s._v(" "),n("h2",{attrs:{id:"部署方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署方法"}},[s._v("#")]),s._v(" 部署方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("apt-get -y install ipset #Ubuntu系统安装ipset\nyum -y install ipset #CentOS系统安装ipset\n-----\niptables -P INPUT ACCEPT #安全清空防火墙规则以防止清空后无法访问服务器以及部署过程中发生冲突\niptables -F\n-----\nipset -N cndz hash:net #创建一个名为cndz的规则\nwget -P . http://www.ipdeny.com/ipblocks/data/countries/cn.zone #下载IP段\nfor i in $(cat /root/cn.zone ); do ipset -A cndz $i; done #将IP段添加到cndz规则中\n-----\niptables -A INPUT -p tcp -m set --match-set cndz src -j ACCEPT #设置白名单IP段\n-----\niptables -P INPUT DROP  #对白名单外国家关闭所有端口\niptables -A INPUT -p tcp --dport 80 -j DROP #对白名单外国家关闭80端口\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"备注"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#备注"}},[s._v("#")]),s._v(" 备注")]),s._v(" "),n("p",[s._v("获取特定地区IP段：http://www.ipdeny.com/ipblocks/")]),s._v(" "),n("p",[s._v("CentOS关闭firewall防火墙")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("systemctl stop firewalld.service\nsystemctl disable firewalld.service\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);