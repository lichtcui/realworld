(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{182:function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"f",(function(){return o})),r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return f})),r.d(e,"c",(function(){return v})),r.d(e,"e",(function(){return m}));var n=r(62),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",headers:{Authorization:"Token jwt.token"},params:t})},l=function(t){return Object(n.b)({method:"POST",url:"api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"GET",url:"api/articles/".concat(t)})},m=function(t){return Object(n.b)({method:"GET",url:"api/articles/".concat(t,"/comments")})}},186:function(t,e,r){var n=r(6),c=r(23),o=r(11),l=r(187),f="["+l+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),d=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(_):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},_=d.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(m,"")),t};t.exports=d},187:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},196:function(t,e,r){"use strict";var n=r(4),c=r(15),o=r(22),l=r(118),f=r(63),v=r(11),m=r(43).f,d=r(44).f,_=r(8).f,h=r(186).trim,C=n.Number,O=C,y=C.prototype,k="Number"==o(r(78)(y)),E="trim"in String.prototype,x=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=E?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(k?v((function(){y.valueOf.call(r)})):"Number"!=o(r))?l(new O(x(e)),r,C):x(e)};for(var j,N=r(9)?m(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;N.length>w;w++)c(O,j=N[w])&&!c(C,j)&&_(C,j,d(O,j));C.prototype=y,y.constructor=C,r(12)(n,"Number",C)}},197:function(t,e,r){var n=r(6),c=r(198);n(n.S+n.F*(Number.parseInt!=c),"Number",{parseInt:c})},198:function(t,e,r){var n=r(4).parseInt,c=r(186).trim,o=r(187),l=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=c(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},257:function(t,e,r){"use strict";r.r(e);r(77),r(31),r(61);var n=r(57),c=(r(32),r(13),r(45),r(41)),o=(r(196),r(197),r(30),r(3)),l=r(182),f=r(62),v=r(40);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={name:"HomeIndex",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,v,m,d,_,h,C,O,y,k,E,x,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.store,o=r.tag,v=Number.parseInt(r.page||1),m=20,d=r.tab||"global_feed",_=n.state.user&&"your_feed"===d?l.f:l.d,e.next=8,Promise.all([_({limit:m,offset:(v-1)*m,tag:o}),Object(f.b)({method:"GET",url:"/api/tags"})]);case 8:return h=e.sent,C=Object(c.a)(h,2),O=C[0],y=C[1],k=O.data,E=k.articles,x=k.articlesCount,j=y.data.tags,E.forEach((function(i){return i.favoriteDisabled=!1})),e.abrupt("return",{articles:E,articlesCount:x,tags:j,limit:m,page:v,tag:o,tab:d});case 16:case"end":return e.stop()}}),e)})))()},watchQuery:["page","tag","tab"],computed:d(d({},Object(v.b)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}}),methods:{onFavorite:function(article){return Object(o.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return article.favoriteDisabled=!0,e=article.favorited,r=e?l.b:l.a,t.next=5,r(article.slug);case 5:article.favorited=!e,article.favoritesCount+=e?-1:1,favoriteDisabled=!1;case 8:case"end":return t.stop()}}),t)})))()}}},h=r(20),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"your_feed"}}}},[t._v("\n                Your Feed\n              ")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"global_feed"}}}},[t._v("\n                Global Feed\n              ")])],1),t._v(" "),t.tag?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"tag",tag:t.tag}}}},[t._v("\n                #"+t._s(t.tag)+"\n              ")])],1):t._e()])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v("\n                "+t._s(article.author.username)+"\n              ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"home",query:{page:e,tag:t.$route.query.tag,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)])],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tab:"tag",tag:e}}}},[t._v("\n              "+t._s(e)+"\n            ")])})),1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"logo-font"},[this._v("conduit")]),this._v(" "),e("p",[this._v("A place to share your knowledge.")])])])}],!1,null,null,null);e.default=component.exports}}]);