(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"48OB":function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var r=o("LRne"),n=o("tk/3"),p=o("JIr8"),s=o("vkgz"),i=o("fXoL");let a=(()=>{class e{constructor(e){this.http=e,this.employeesUrl="api/employees",this.httpOptions={headers:new n.d({"Content-Type":"application/json"})}}getEmployees(){return this.http.get(this.employeesUrl).pipe(Object(p.a)(this.handleError("getEmployees",[])))}getEmployee(e){return this.http.get(`${this.employeesUrl}/${e}`).pipe(Object(p.a)(this.handleError(`getEmployee id=${e}`)))}addEmployee(e){return this.http.post(this.employeesUrl,e,this.httpOptions).pipe(Object(s.a)(e=>console.log(e)),Object(p.a)(this.handleError("addEmployee")))}deleteEmployee(e){return this.http.delete(`${this.employeesUrl}/${e}`,this.httpOptions).pipe(Object(s.a)(e=>console.log(e)),Object(p.a)(this.handleError("deleteHero")))}handleError(e="operation",t){return e=>(console.error(e),Object(r.a)(t))}}return e.\u0275fac=function(t){return new(t||e)(i.Vb(n.b))},e.\u0275prov=i.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"7Cbv":function(e,t,o){"use strict";var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),n=new Uint8Array(16);function p(){if(!r)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(n)}for(var s=[],i=0;i<256;++i)s.push((i+256).toString(16).substr(1));t.a=function(e,t,o){var r=(e=e||{}).random||(e.rng||p)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){o=o||0;for(var n=0;n<16;++n)t[o+n]=r[n];return t}return function(e,t){return(s[e[0]]+s[e[1]]+s[e[2]]+s[e[3]]+"-"+s[e[4]]+s[e[5]]+"-"+s[e[6]]+s[e[7]]+"-"+s[e[8]]+s[e[9]]+"-"+s[e[10]]+s[e[11]]+s[e[12]]+s[e[13]]+s[e[14]]+s[e[15]]).toLowerCase()}(r)}}}]);