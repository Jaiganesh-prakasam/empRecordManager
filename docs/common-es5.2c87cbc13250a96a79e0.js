function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"48OB":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("LRne"),o=n("tk/3"),i=n("JIr8"),a=n("vkgz"),s=n("fXoL"),p=function(){var e=function(){function e(t){_classCallCheck(this,e),this.http=t,this.employeesUrl="api/employees",this.httpOptions={headers:new o.d({"Content-Type":"application/json"})}}return _createClass(e,[{key:"getEmployees",value:function(){return this.http.get(this.employeesUrl).pipe(Object(i.a)(this.handleError("getEmployees",[])))}},{key:"getEmployee",value:function(e){return this.http.get("".concat(this.employeesUrl,"/").concat(e)).pipe(Object(i.a)(this.handleError("getEmployee id=".concat(e))))}},{key:"addEmployee",value:function(e){return this.http.post(this.employeesUrl,e,this.httpOptions).pipe(Object(a.a)((function(e){return console.log(e)})),Object(i.a)(this.handleError("addEmployee")))}},{key:"deleteEmployee",value:function(e){return this.http.delete("".concat(this.employeesUrl,"/").concat(e),this.httpOptions).pipe(Object(a.a)((function(e){return console.log(e)})),Object(i.a)(this.handleError("deleteHero")))}},{key:"handleError",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;return function(t){return console.error(t),Object(r.a)(e)}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Vb(o.b))},e.\u0275prov=s.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},"7Cbv":function(e,t,n){"use strict";var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);function i(){if(!r)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}for(var a=[],s=0;s<256;++s)a.push((s+256).toString(16).substr(1));t.a=function(e,t,n){var r=(e=e||{}).random||(e.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return function(e,t){return(a[e[0]]+a[e[1]]+a[e[2]]+a[e[3]]+"-"+a[e[4]]+a[e[5]]+"-"+a[e[6]]+a[e[7]]+"-"+a[e[8]]+a[e[9]]+"-"+a[e[10]]+a[e[11]]+a[e[12]]+a[e[13]]+a[e[14]]+a[e[15]]).toLowerCase()}(r)}}}]);