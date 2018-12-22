// ==UserScript==
// @name           Google_search_filter_with_Language
// @namespace      https://github.com/zhuzemin
// @include        https://www.google.*/search*
// @version        2018/12/22 21:08 by asd
// ==/UserScript==
var lr = document.createElement("lr");
lr.innerHTML = '<lr><a href="'+window.location.href.replace(/lr=lang_(.{1,16})/g, '').replace(/$/, '&lr=lang_en')+'">en</a>/<a href="'+window.location.href.replace(/lr=lang_(.{1,16})/g, '').replace(/$/, '&lr=lang_ja')+'">ja</a>/<a href="'+window.location.href.replace(/lr=lang_(.{1,16})/g, '').replace(/$/, '&lr=lang_zh-TW')+'">TW</a>/<a href="'+window.location.href.replace(/lr=lang_(.{1,16})/g, '').replace(/$/, '&lr=lang_zh-CN')+'">CN</a>/<a href="'+window.location.href.replace(/lr=lang_(.{1,16})/g, '').replace(/$/, '&lr=lang_zh-CN|lang_zh-TW')+'">TW&CN</a>/<a href="'+window.location.href.replace(/lr=lang_(.{1,16})/g, '')+'">All Language</a></lr>'
var logo=document.getElementsByClassName("logo")[0]
logo.parentNode.insertBefore(lr, logo);