function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"48OB":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("LRne"),r=n("tk/3"),i=n("JIr8"),a=n("vkgz"),c=n("fXoL"),l=function(){var e=function(){function e(t){_classCallCheck(this,e),this.http=t,this.employeesUrl="api/employees",this.httpOptions={headers:new r.d({"Content-Type":"application/json"})}}return _createClass(e,[{key:"getEmployees",value:function(){return this.http.get(this.employeesUrl).pipe(Object(i.a)(this.handleError("getEmployees",[])))}},{key:"getEmployee",value:function(e){return this.http.get("".concat(this.employeesUrl,"/").concat(e)).pipe(Object(i.a)(this.handleError("getEmployee id=".concat(e))))}},{key:"addEmployee",value:function(e){return this.http.post(this.employeesUrl,e,this.httpOptions).pipe(Object(a.a)((function(e){return console.log(e)})),Object(i.a)(this.handleError("addEmployee")))}},{key:"deleteEmployee",value:function(e){return this.http.delete("".concat(this.employeesUrl,"/").concat(e),this.httpOptions).pipe(Object(a.a)((function(e){return console.log(e)})),Object(i.a)(this.handleError("deleteHero")))}},{key:"handleError",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;return function(t){return console.error(t),Object(o.a)(e)}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Vb(r.b))},e.\u0275prov=c.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);