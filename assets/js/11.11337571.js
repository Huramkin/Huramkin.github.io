(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{284:function(e,t,i){"use strict";i.r(t);var s={name:"vue-disqus",props:{shortname:{type:String,required:!0},identifier:{type:String,required:!1},url:{type:String,required:!1},title:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},mounted(){window.DISQUS?this.reset(window.DISQUS):this.init()},methods:{reset(e){const t=this;e.reset({reload:!0,config:function(){t.setBaseConfig(this)}})},init(){const e=this;window.disqus_config=function(){e.setBaseConfig(this)},setTimeout(()=>{let e=document,t=e.createElement("script");t.setAttribute("id","embed-disqus"),t.setAttribute("data-timestamp",+new Date),t.type="text/javascript",t.async=!0,t.src="//".concat(this.shortname,".disqus.com/embed.js"),(e.head||e.body).appendChild(t)},0)},setBaseConfig(e){e.page.identifier=this.identifier||this.$route.path||window.location.pathname,e.page.url=this.url||this.$el.baseURI,this.title&&(e.page.title=this.title),this.remote_auth_s3&&(e.page.remote_auth_s3=this.remote_auth_s3),this.api_key&&(e.page.api_key=this.api_key),this.sso_config&&(e.sso=this.sso_config),this.language&&(e.language=this.language),e.callbacks.onReady=[()=>{this.$emit("ready")}],e.callbacks.onNewComment=[e=>{this.$emit("new-comment",e)}]}}},n=i(5),a=Object(n.a)(s,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"disqus_thread"}})}),[],!1,null,null,null);t.default=a.exports}}]);