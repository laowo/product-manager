(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{JF7D:function(e,t,a){"use strict";a.r(t);var r=a("p0pE"),n=a.n(r),s=a("d6i3"),c=a.n(s),u=(a("miYZ"),a("tsqr")),p=a("1l/V"),i=a.n(p),o=a("t3Un");function l(){return d.apply(this,arguments)}function d(){return d=i()(c.a.mark(function e(){return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o["a"])("/api/user"));case 1:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return h=i()(c.a.mark(function e(t){var a;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.values,e.abrupt("return",Object(o["a"])("/api/user/add",{method:"post",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({values:a})}));case 2:case"end":return e.stop()}},e)})),h.apply(this,arguments)}function y(e){return v.apply(this,arguments)}function v(){return v=i()(c.a.mark(function e(t){var a,r;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t._id,r=t.values,e.abrupt("return",Object(o["a"])("/api/user/update",{method:"put",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({id:a,values:r})}));case 2:case"end":return e.stop()}},e)})),v.apply(this,arguments)}function w(e){return b.apply(this,arguments)}function b(){return b=i()(c.a.mark(function e(t){var a;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t._id,e.abrupt("return",Object(o["a"])("/api/user/delete",{method:"delete",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({id:a})}));case 2:case"end":return e.stop()}},e)})),b.apply(this,arguments)}t["default"]={namespace:"user",state:{list:[]},effects:{query:c.a.mark(function e(t,a){var r,n,s,p,i;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,e.prev=2,e.next=5,n(l,r);case 5:if(p=e.sent,i=p.data,!i.status){e.next=12;break}return e.next=10,s({type:"save",payload:i.data});case 10:e.next=13;break;case 12:u["a"].error("\u6570\u636e\u83b7\u53d6\u5931\u8d25\uff01");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](2),console.log(e.t0);case 18:case"end":return e.stop()}},e,null,[[2,15]])}),createUser:c.a.mark(function e(t,a){var r,n,s,p,i,o;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=t.callback,s=a.call,p=a.put,e.prev=2,e.next=5,s(f,r);case 5:if(i=e.sent,o=i.data,!o.status){e.next=12;break}return u["a"].success("\u6570\u636e\u6dfb\u52a0\u6210\u529f\uff01"),n&&"function"===typeof n&&n(),e.next=12,p({type:"query"});case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](2),console.log(e.t0);case 17:case"end":return e.stop()}},e,null,[[2,14]])}),updateUser:c.a.mark(function e(t,a){var r,n,s,p,i,o;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=t.callback,s=a.call,p=a.put,e.prev=2,e.next=5,s(y,r);case 5:if(i=e.sent,o=i.data,!o.status){e.next=12;break}return u["a"].success("\u6570\u636e\u4fee\u6539\u6210\u529f\uff01"),n&&"function"===typeof n&&n(),e.next=12,p({type:"query"});case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](2),console.log(e.t0);case 17:case"end":return e.stop()}},e,null,[[2,14]])}),deleteData:c.a.mark(function e(t,a){var r,n,s,p,i;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,e.prev=2,e.next=5,n(w,r);case 5:if(p=e.sent,i=p.data,!i.status){e.next=13;break}return u["a"].success("\u6570\u636e\u5220\u9664\u6210\u529f\uff01"),e.next=11,s({type:"query"});case 11:e.next=14;break;case 13:u["a"].error("\u6570\u636e\u5220\u9664\u5931\u8d25\uff01");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](2),console.log(e.t0);case 19:case"end":return e.stop()}},e,null,[[2,16]])})},reducers:{save(e,t){var a=t.payload;return n()({},e,{list:a})}},subscriptions:{setup(e){var t=e.history,a=e.dispatch;return t.listen(e=>{var t=e.pathname,r=e.query;"/system/user"===t&&a({type:"query",payload:r})})}}}}}]);