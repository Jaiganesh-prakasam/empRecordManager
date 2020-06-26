function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{JSdX:function(e,t,n){"use strict";n.r(t),n.d(t,"EmpListModule",(function(){return F}));var i,a=n("ofXK"),r=n("tyNb"),o=n("fXoL"),c=((i=function e(){_classCallCheck(this,e)}).\u0275mod=o.Kb({type:i}),i.\u0275inj=o.Jb({factory:function(e){return new(e||i)},providers:[a.d],imports:[[a.b]]}),i),l=n("48OB");function s(e,t){if(1&e){var n=o.Sb();o.Rb(0,"div",13),o.Zb("click",(function(){o.jc(n);var e=t.index;return o.bc(2).jumToThisPage(e+1)})),o.nc(1),o.Qb()}if(2&e){var i=t.index;o.fc("id",i+1),o.Cb(1),o.oc(i+1)}}function u(e,t){if(1&e){var n=o.Sb();o.Rb(0,"nav",10),o.Rb(1,"div",11),o.Zb("click",(function(){return o.jc(n),o.bc().jumpToFirst()})),o.nc(2,"\xab"),o.Qb(),o.Rb(3,"div",11),o.Zb("click",(function(){return o.jc(n),o.bc().previous()})),o.nc(4,"\u2039"),o.Qb(),o.mc(5,s,2,2,"div",12),o.Rb(6,"div",11),o.Zb("click",(function(){return o.jc(n),o.bc().next()})),o.nc(7,"\u203a"),o.Qb(),o.Rb(8,"div",11),o.Zb("click",(function(){return o.jc(n),o.bc().jumpToLast()})),o.nc(9,"\xbb"),o.Qb(),o.Qb()}if(2&e){var i=o.bc();o.Cb(5),o.ec("ngForOf",i.totalDivisions)}}var b,f,d=["*"],m=((f=function(){function e(){_classCallCheck(this,e),this.itemFromTo=new o.n,this.searchString=new o.n,this.initialLoad=!0}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){document.getElementById("rows").value=this.numberOfRows,this.valueChanged(this.numberOfRows)}},{key:"valueChanged",value:function(e){this.numberOfRows=e,this.numberOfButtons(Number(e)),console.log(e)}},{key:"numberOfButtons",value:function(e){this.pageNumberSelected&&document.getElementById(String(this.pageNumberSelected))&&document.getElementById(String(this.pageNumberSelected)).classList.remove("active");var t=Math.ceil(this.totalRecordsSize/e);setTimeout((function(){this.totalDivisions=new Array(t),this.itemFromTo.emit([0,e]),this.pageNumberSelected=1,setTimeout((function(){document.getElementById("1").classList.add("active")}),0)}).bind(this),0)}},{key:"buttonsAfterFilter",value:function(e){this.pageNumberSelected&&document.getElementById(String(this.pageNumberSelected))&&document.getElementById(String(this.pageNumberSelected)).classList.remove("active");var t=document.getElementById("rows").value,n=Math.ceil(e/Number(t));setTimeout((function(){this.totalDivisions=new Array(n),this.pageNumberSelected=1,setTimeout((function(){document.getElementById("1")&&document.getElementById("1").classList.add("active")}),0)}).bind(this),0)}},{key:"jumpToFirst",value:function(){1!==this.pageNumberSelected&&this.jumToThisPage(1)}},{key:"previous",value:function(){1!==this.pageNumberSelected&&this.jumToThisPage(this.pageNumberSelected-1)}},{key:"next",value:function(){this.pageNumberSelected!==this.totalDivisions.length&&this.jumToThisPage(this.pageNumberSelected+1)}},{key:"jumpToLast",value:function(){this.pageNumberSelected!==this.totalDivisions.length&&this.jumToThisPage(this.totalDivisions.length)}},{key:"jumToThisPage",value:function(e){document.getElementById(String(this.pageNumberSelected)).classList.remove("active"),this.pageNumberSelected=e,document.getElementById(String(this.pageNumberSelected)).classList.add("active"),this.itemFromTo.emit([(e-1)*Number(this.numberOfRows),e*Number(this.numberOfRows)])}},{key:"searchFilter",value:function(e){this.searchString.emit(e)}}]),e}()).\u0275fac=function(e){return new(e||f)},f.\u0275cmp=o.Gb({type:f,selectors:[["app-pagination-container"]],inputs:{totalRecordsSize:"totalRecordsSize",numberOfRows:"numberOfRows"},outputs:{itemFromTo:"itemFromTo",searchString:"searchString"},ngContentSelectors:d,decls:21,vars:1,consts:[[1,"container"],["type","text",3,"keyup"],["input",""],["name","rows","id","rows",3,"change"],["value","5"],["value","10"],["value","15"],["value","20"],[1,"container-bottom"],["class","pagination",4,"ngIf"],[1,"pagination"],[3,"click"],[3,"id","click",4,"ngFor","ngForOf"],[3,"id","click"]],template:function(e,t){if(1&e){var n=o.Sb();o.dc(),o.Rb(0,"div",0),o.Rb(1,"section"),o.Rb(2,"label"),o.nc(3,"Search:"),o.Qb(),o.Rb(4,"input",1,2),o.Zb("keyup",(function(){o.jc(n);var e=o.ic(5);return t.searchFilter([e.value,t.numberOfRows])})),o.Qb(),o.Qb(),o.Rb(6,"section"),o.Rb(7,"label"),o.nc(8,"Number of records:"),o.Qb(),o.Rb(9,"select",3),o.Zb("change",(function(e){return t.valueChanged(e.target.value)})),o.Rb(10,"option",4),o.nc(11,"5"),o.Qb(),o.Rb(12,"option",5),o.nc(13,"10"),o.Qb(),o.Rb(14,"option",6),o.nc(15,"15"),o.Qb(),o.Rb(16,"option",7),o.nc(17,"20"),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.cc(18),o.Rb(19,"div",8),o.mc(20,u,10,1,"nav",9),o.Qb()}2&e&&(o.Cb(20),o.ec("ngIf",t.totalDivisions&&t.totalDivisions.length>0))},directives:[a.j,a.i],styles:[".container[_ngcontent-%COMP%]{margin:4px;display:flex}.container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:95%;margin:2px}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:4px}.pagination[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border:1px solid #000;color:#000;float:left;padding:8px 16px;text-decoration:none}.pagination[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff}.pagination[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover:not(.active){background-color:#ddd}"]}),f),p=((b=function(){function e(t){_classCallCheck(this,e),this.datePipe=t}return _createClass(e,[{key:"mutiValueCombination",value:function(e,t,n,i){var a=this,r=[];return r=t.map((function(t){return a.getValue(e,t)})),"date"===n?this.datePipe.transform(r[0],"MM-dd-yyyy"):i?i(r[0]):r.join(" ")}},{key:"getValue",value:function(e,t){var n=_toConsumableArray(t);if(e[t[0]]){if(t.length>1){var i=e[t[0]];return n.shift(),this.getValue(i,n)}return e[t[0]]+""}}}]),e}()).\u0275fac=function(e){return new(e||b)(o.Vb(a.d))},b.\u0275prov=o.Ib({token:b,factory:b.\u0275fac}),b);function g(e,t){if(1&e&&(o.Rb(0,"th"),o.nc(1),o.Qb()),2&e){var n=t.$implicit;o.Cb(1),o.pc(" ",n.heading," ")}}function h(e,t){if(1&e&&(o.Rb(0,"td"),o.nc(1),o.Qb()),2&e){var n=t.$implicit,i=o.bc().$implicit,a=o.bc(2);o.Cb(1),o.pc(" ",a.iTableSharedFunctionService.mutiValueCombination(i,n.contentArray,n.type,n.callMethod)," ")}}function y(e,t){if(1&e&&(o.Rb(0,"tr"),o.mc(1,h,2,1,"td",3),o.Qb()),2&e){var n=o.bc(2);o.Cb(1),o.ec("ngForOf",n.settings.fieldDefinition)}}function v(e,t){if(1&e&&(o.Rb(0,"table",2),o.Rb(1,"tr"),o.mc(2,g,2,1,"th",3),o.Qb(),o.mc(3,y,2,1,"tr",3),o.Qb()),2&e){var n=o.bc();o.Cb(2),o.ec("ngForOf",n.settings.fieldDefinition),o.Cb(1),o.ec("ngForOf",n.tableData)}}function C(e,t){1&e&&(o.Rb(0,"div",4),o.nc(1," No data to display\n"),o.Qb())}var S,k=((S=function(){function e(t){_classCallCheck(this,e),this.iTableSharedFunctionService=t,console.log(this.settings)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||S)(o.Mb(p))},S.\u0275cmp=o.Gb({type:S,selectors:[["app-table-container"]],inputs:{tableData:"tableData",settings:"settings"},decls:2,vars:2,consts:[["class","table-data",4,"ngIf"],["class","no-data",4,"ngIf"],[1,"table-data"],[4,"ngFor","ngForOf"],[1,"no-data"]],template:function(e,t){1&e&&(o.mc(0,v,4,2,"table",0),o.mc(1,C,2,0,"div",1)),2&e&&(o.ec("ngIf",t.settings&&t.tableData),o.Cb(1),o.ec("ngIf",t.tableData&&0===t.tableData.length))},directives:[a.j,a.i],styles:[".table-data[_ngcontent-%COMP%]{font-family:Trebuchet MS,Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}.table-data[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%}.table-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-data[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px}.table-data[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}.table-data[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}.table-data[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#4caf50;color:#fff}.no-data[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center;margin:8px}"]}),S);function O(e,t){if(1&e){var n=o.Sb();o.Rb(0,"app-pagination-container",1),o.Zb("itemFromTo",(function(e){return o.jc(n),o.bc().arrayRange(e)}))("searchString",(function(e){return o.jc(n),o.bc().filterData(e)})),o.Nb(1,"app-table-container",2),o.Qb()}if(2&e){var i=o.bc();o.ec("totalRecordsSize",i.tableData.length)("numberOfRows","5"),o.Cb(1),o.ec("tableData",i.tempDataTable)("settings",i.settings)}}var _,T=((_=function(){function e(t){_classCallCheck(this,e),this.iTableSharedFunctionService=t}return _createClass(e,[{key:"ngOnChanges",value:function(e){console.log(e),e&&this.startEndArrayState&&this.tableData&&(this.filterTableData=null,this.arrayRange(this.startEndArrayState,"fromFilter"))}},{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){}},{key:"arrayRange",value:function(e,t){this.startEndArrayState=e,console.log(this.tableData),this.filterTableData?(console.log("from filter"),this.tempDataTable=this.filterTableData.filter((function(t,n){return n>=e[0]&&n<e[1]})),"fromFilter"===t&&this.containerComponent.buttonsAfterFilter(this.filterTableData.length)):(this.tempDataTable=this.tableData.filter((function(t,n){return n>=e[0]&&n<e[1]})),"fromFilter"===t&&this.containerComponent.buttonsAfterFilter(this.tableData.length))}},{key:"filterData",value:function(e){var t=this;if(console.log(e),""!==e[0]){var n=this.settings.fieldDefinition,i=e[0].toLowerCase();this.filterTableData=this.tableData.filter((function(e){return n.filter((function(n){if(t.iTableSharedFunctionService.mutiValueCombination(e,n.contentArray).toLowerCase().includes(i))return!0})).length>0})),this.arrayRange(this.startEndArrayState,"fromFilter")}else this.filterTableData=null,this.arrayRange(this.startEndArrayState,"fromFilter")}}]),e}()).\u0275fac=function(e){return new(e||_)(o.Mb(p))},_.\u0275cmp=o.Gb({type:_,selectors:[["app-i-table"]],viewQuery:function(e,t){var n;1&e&&o.rc(m,!0),2&e&&o.hc(n=o.ac())&&(t.containerComponent=n.first)},inputs:{tableData:"tableData",settings:"settings"},features:[o.Bb([p]),o.Ab],decls:1,vars:1,consts:[[3,"totalRecordsSize","numberOfRows","itemFromTo","searchString",4,"ngIf"],[3,"totalRecordsSize","numberOfRows","itemFromTo","searchString"],[3,"tableData","settings"]],template:function(e,t){1&e&&o.mc(0,O,2,4,"app-pagination-container",0),2&e&&o.ec("ngIf",t.tableData)},directives:[a.j,m,k],styles:[""]}),_);function R(e,t){if(1&e&&(o.Rb(0,"option",7),o.nc(1),o.Qb()),2&e){var n=t.$implicit;o.fc("value",n.id),o.Cb(1),o.qc(" ",n.id," "," "+n.empGeneral.firstName," "," "+n.empGeneral.lastName," ")}}var w,D,A=[{path:"",component:(w=function(){function e(t,n){_classCallCheck(this,e),this.employeeFetchDetailsService=t,this.router=n,this.employeesSettings={fieldDefinition:[{heading:"id",type:"string",contentArray:[["id"]]},{heading:"First name",type:"string",contentArray:[["empGeneral","firstName"]]},{heading:"Last name",type:"string",contentArray:[["empGeneral","lastName"]]},{heading:"Full Name",type:"string",contentArray:[["empGeneral","firstName"],["empGeneral","lastName"]]},{heading:"D.O.B",type:"date",contentArray:[["empGeneral","dob"]]},{heading:"Age",type:"age",contentArray:[["empGeneral","dob"]],callMethod:function(e){if(e){var t=new Date(e),n=Date.now()-t.getTime(),i=new Date(n);return Math.abs(i.getUTCFullYear()-1970)}}}]},this.fetchEmployee()}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"fetchEmployee",value:function(){var e=this;this.employeeFetchDetailsService.getEmployees().subscribe((function(t){e.employees=t.sort((function(e,t){return Number(e.id)-Number(t.id)}))}))}},{key:"addEmployee",value:function(){this.router.navigate(["/routing/emp-details"],{queryParams:{orderType:"add"}})}},{key:"updateEmployee",value:function(e){this.router.navigate(["/routing/emp-details"],{queryParams:{orderType:"update",id:e}})}},{key:"deleteEmployee",value:function(e){var t=this;this.employeeFetchDetailsService.deleteEmployee(e).subscribe((function(e){console.log(e),t.fetchEmployee()}))}}]),e}(),w.\u0275fac=function(e){return new(e||w)(o.Mb(l.a),o.Mb(r.b))},w.\u0275cmp=o.Gb({type:w,selectors:[["app-emp-list"]],decls:12,vars:3,consts:[[1,"emp-list-update-delete"],["name","emp-list"],["empList",""],[3,"value",4,"ngFor","ngForOf"],[3,"click"],[1,"emp-list-add",3,"click"],[3,"tableData","settings"],[3,"value"]],template:function(e,t){if(1&e){var n=o.Sb();o.Rb(0,"div",0),o.Rb(1,"select",1,2),o.mc(3,R,2,4,"option",3),o.Qb(),o.Rb(4,"button",4),o.Zb("click",(function(){o.jc(n);var e=o.ic(2);return t.updateEmployee(e.value)})),o.nc(5," Update Employee "),o.Qb(),o.Rb(6,"button",4),o.Zb("click",(function(){o.jc(n);var e=o.ic(2);return t.deleteEmployee(e.value)})),o.nc(7," Delete Employee "),o.Qb(),o.Qb(),o.Rb(8,"button",5),o.Zb("click",(function(){return t.addEmployee()})),o.nc(9," Add Employee "),o.Qb(),o.nc(10," Employee Table:\n"),o.Nb(11,"app-i-table",6)}2&e&&(o.Cb(3),o.ec("ngForOf",t.employees),o.Cb(8),o.ec("tableData",t.employees)("settings",t.employeesSettings))},directives:[a.i,T],styles:["button[_ngcontent-%COMP%]{background-color:#4caf50;border:none;color:#fff;padding:8px 16px;text-align:center;text-decoration:none;font-size:12px;margin:4px 2px;transition-duration:.4s;cursor:pointer}.emp-list-update-delete[_ngcontent-%COMP%]{display:flex;align-items:center}.emp-list-add[_ngcontent-%COMP%]{width:100%}"]}),w)}],F=((D=function e(){_classCallCheck(this,e)}).\u0275mod=o.Kb({type:D}),D.\u0275inj=o.Jb({factory:function(e){return new(e||D)},imports:[[a.b,c,r.c.forChild(A)]]}),D)}}]);