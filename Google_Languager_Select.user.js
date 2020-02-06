// ==UserScript==
// @name           Google_search_filter_with_Language
// @name:zh-CN            Google_search_filter_with_Language
// @name:zh-TW            Google_search_filter_with_Language
// @name:ja            Google_search_filter_with_Language
// @description:zh-CN     Google result filter by language
// @description:zh-TW     Google result filter by language
// @description:ja     Google result filter by language
// @description    Google result filter by language
// @namespace      Google_search_filter_with_Language
// @supportURL     https://github.com/zhuzemin
// @include        https://www.google.*/search*
// @author         zhuzemin
// @version        1.1
// @grant		   none
// ==/UserScript==
var lr = document.createElement("lr");
lr.innerHTML = '<lr><a href="'+window.location.href.replace(/lr=lang_(.{1,16})/g, '').replace(/$/, '&lr=lang_en')+'">EN</a>/<a href="'+window.location.href.replace(/lr=lang_(.{1,16})/g, '').replace(/$/, '&lr=lang_ja')+'">JA</a>/<a href="'+window.location.href.replace(/lr=lang_(.{1,16})/g, '').replace(/$/, '&lr=lang_zh-TW')+'">TW</a>/<a href="'+window.location.href.replace(/lr=lang_(.{1,16})/g, '').replace(/$/, '&lr=lang_zh-CN')+'">CN</a>/<a href="'+window.location.href.replace(/lr=lang_(.{1,16})/g, '').replace(/$/, '&lr=lang_zh-CN|lang_zh-TW')+'">TW&CN</a>/<a href="'+window.location.href.replace(/lr=lang_(.{1,16})/g, '')+'">All Language</a></lr>'

var logo=document.getElementsByClassName("Tg7LZd")[0]
logo.parentNode.insertBefore(lr, logo);
var links=document.querySelectorAll("a.q.qs");
for(var link of links){
  if(link.innerText.match(/Video|Image/)!=null){
    logo.parentNode.insertBefore(link, logo);
  }
}
/*var hdtbSum=document.querySelector("#hdtbSum");
var hdtbMenus=document.querySelector("#hdtbMenus");
logo.parentNode.insertBefore(hdtbMenus, logo);
var searchform=document.querySelector("#searchform");
searchform.insertBefore(hdtbSum, null);*/