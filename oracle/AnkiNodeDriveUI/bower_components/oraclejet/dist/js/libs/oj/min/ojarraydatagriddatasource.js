/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(b){b.Ra=function(f,a){if(!(f instanceof Array)&&"function"!=typeof f&&"function"!=typeof f.tqa)throw Error("_ERR_DATA_INVALID_TYPE_SUMMARY\n_ERR_DATA_INVALID_TYPE_DETAIL");this.Er=this.yea(a);null!=a&&(this.columns=a.columns,this.Ei=a.initialSort);b.Ra.q.constructor.call(this,f)};o_("ArrayDataGridDataSource",b.Ra,b);b.b.ga(b.Ra,b.Wm,"oj.ArrayDataGridDataSource");b.Ra.prototype.Init=function(){null==this.columns&&(this.columns=this.uda(this.Jj()));
this.Sga();"function"==typeof this.data&&this.data.subscribe(this.Ola.bind(this),null,"arrayChange");b.Ra.q.Init.call(this)};b.b.g("ArrayDataGridDataSource.prototype.Init",{Init:b.Ra.prototype.Init});b.Ra.prototype.yea=function(b){if(null!=b&&null!=b.rowHeader)if(b=b.rowHeader,"object"===typeof b){if(null!=b["default"]&&"none"==b["default"])return}else if(null!=b)return b;return"m_defaultIndex"};b.Ra.prototype.Sga=function(){var b;b=this.Jj();for(this.or=0;this.or<b.length;this.or+=1)b[this.or].ojKey=
this.or.toString()};b.Ra.prototype.uda=function(b){var a,d;if("number"!==typeof b.length||0===b.length)return[];d=[];for(a in b[0])b[0].hasOwnProperty(a)&&(void 0!=this.Er&&a==this.Er||d.push(a));return d};b.Ra.prototype.R=function(b){return"row"===b?this.to():"column"===b?this.columns.length:0};b.b.g("ArrayDataGridDataSource.prototype.getCount",{R:b.Ra.prototype.R});b.Ra.prototype.yg=function(){return"exact"};b.b.g("ArrayDataGridDataSource.prototype.getCountPrecision",{yg:b.Ra.prototype.yg});b.Ra.prototype.eJ=
function(b,a){var d;if("row"===b){if(void 0==this.Er)return null;if("m_defaultIndex"==this.Er)return this.XB(a);d=this.Jj();return d[a][this.Er]}if("column"===b)return this.columns[a]};b.Ra.prototype.Qda=function(b,a){var d;if("row"===b)return{key:this.XB(a)};if("column"===b)return d=this.eJ(b,a),null!=this.Ei&&this.Ei.key===d?{key:this.eJ(b,a),sortDirection:this.Ei.direction}:{key:d}};b.Ra.prototype.Lf=function(f,a,d){var c,e,g,h;c=f.axis;e=f.start;g=f.count;e=Math.max(0,e);"column"===c?g=Math.min(this.columns.length,
e+g):(h=this.Jj(),g=void 0===this.Er?e:Math.min(h.length,e+g));c=new b.Fd(e,g,c,this);null!=a&&null!=a.success&&(null==d&&(d={}),a.success.call(d.success,c,f))};b.b.g("ArrayDataGridDataSource.prototype.fetchHeaders",{Lf:b.Ra.prototype.Lf});b.Ra.prototype.mda=function(b,a){var d=this.columns[a];return this.Jj()[b][d]};b.Ra.prototype.nda=function(b,a){return{keys:{row:this.XB(b),column:this.columns[a]}}};b.Ra.prototype.xg=function(f,a,d){var c,e,g,h,k,l;for(c=0;c<f.length;c+=1)e=f[c],"row"===e.axis?
(g=e.start,h=Math.min(this.to(),g+e.count)):"column"===e.axis&&(k=e.start,l=Math.min(this.columns.length,k+e.count));void 0===h||void 0===l?null!=a&&null!=a.error&&(null==d&&(d={}),a.error.call(d.error)):(c=new b.Yf(g,h,k,l,this),null!=a&&null!=a.success&&(null==d&&(d={}),a.success.call(d.success,c,f)))};b.b.g("ArrayDataGridDataSource.prototype.fetchCells",{xg:b.Ra.prototype.xg});b.Ra.prototype.keys=function(b){var a=b.row,d=b.column;return new Promise(function(b){b({row:this.XB(a),column:this.columns[d]})}.bind(this))};
b.b.g("ArrayDataGridDataSource.prototype.keys",{keys:b.Ra.prototype.keys});b.Ra.prototype.Dg=function(b){var a=b.row,d=b.column;return new Promise(function(b){b({row:this.WB(a),column:this.columns.indexOf(d)})}.bind(this))};b.b.g("ArrayDataGridDataSource.prototype.indexes",{Dg:b.Ra.prototype.Dg});b.Ra.prototype.sort=function(b,a,d){var c=[],e=[],g,h;null!=a&&null==d&&(d={});if(null==b)this.FL(a,d);else if(g=b.axis,h=b.key,b=b.direction,"column"===g)void 0==this.zr&&(this.zia=this.Ei,this.zr=this.data.slice()),
this.Ei={key:h,direction:b},this.Jj().sort(this.hZ(b,h)),null!=a&&null!=a.success&&a.success.call(d.success);else if("row"===g){h=this.WB(h);for(g=0;g<this.columns.length;g+=1)c[g]=this.Jj()[h][this.columns[g]];c.sort(this.hZ(b));for(g=0;g<this.columns.length;g+=1)e[g]=this.columns[c.indexOf(this.Jj()[h][this.columns[g]])];this.O4=this.columns;this.columns=e;null!=a&&null!=a.success&&a.success.call(d.success)}else null!==a&&null!=a.error&&a.error.call(d.error,"Invalid axis value")};b.b.g("ArrayDataGridDataSource.prototype.sort",
{sort:b.Ra.prototype.sort});b.Ra.prototype.FL=function(b,a){null!=this.zr&&(this.data=this.zr,this.Ei=this.zia);null!=this.O4&&(this.columns=this.O4);null!=b&&null!=b.success&&b.success.call(a.success)};b.Ra.prototype.getCapability=function(b){return"sort"===b?"column":"move"===b?"row":null};b.b.g("ArrayDataGridDataSource.prototype.getCapability",{getCapability:b.Ra.prototype.getCapability});b.Ra.prototype.hZ=function(b,a){if("ascending"===b)return function(b,c){var e,f;void 0!=a&&(b instanceof Array?
(b=b[parseInt(a,10)],c=c[parseInt(a,10)]):(b=b[a],c=c[a]));e=isNaN(b);f=isNaN(c);b instanceof Date&&(b=b.toISOString(),e=!0);c instanceof Date&&(c=c.toISOString(),f=!0);return e&&f?b<c?-1:b===c?0:1:e?1:f?-1:b-c};if("descending"===b)return function(b,c){var e,f;void 0!=a&&(b instanceof Array?(b=b[parseInt(a,10)],c=c[parseInt(a,10)]):(b=b[a],c=c[a]));e=isNaN(b);f=isNaN(c);b instanceof Date&&(b=b.toISOString(),e=!0);c instanceof Date&&(c=c.toISOString(),f=!0);return e&&f?b>c?-1:b===c?0:1:e?-1:f?1:c-
b}};b.Ra.prototype.move=function(b,a){var d,c,e;d=this.WB(b);c=this.data.splice(d,1)[0];this.data instanceof Array&&(d=this.uk("delete",b,null,d,-1,!0),this.handleEvent("change",d));null===a?this.data.push(c):(e=this.WB(a),this.data.splice(e,0,c));this.data instanceof Array&&(d=this.uk("insert",b,null,e,-1),this.handleEvent("change",d));null!=this.zr&&(this.zr=this.data.slice())};b.b.g("ArrayDataGridDataSource.prototype.move",{move:b.Ra.prototype.move});b.Ra.prototype.pd=function(){return"valid"};
b.b.g("ArrayDataGridDataSource.prototype.moveOK",{pd:b.Ra.prototype.pd});b.Ra.prototype.Jj=function(){return"function"===typeof this.data?this.data():this.data};b.Ra.prototype.WB=function(b){var a,d=this.Jj();for(a=0;a<d.length;a++)if(d[a].ojKey===b)return a;return-1};b.Ra.prototype.XB=function(b){var a=this.Jj();return a[b]?a[b].ojKey:null};b.Ra.prototype.uk=function(b,a,d,c,e,g){var h={source:this};h.operation=b;h.keys={row:a,column:d};h.indexes={row:c,column:e};h.silent=g;return h};b.Ra.prototype.Ola=
function(b){var a,d,c,e=!1;d=!1;var g=[],h=[];for(a=0;a<b.length;a++){c=b[a];if(void 0!==c.moved){d=!0;c=this.uk("refresh",null,null);this.handleEvent("change",c);break}"added"===c.status&&(e=!0)}if(!d){for(a=0;a<b.length;a++)c=b[a],"deleted"===c.status&&(d=c.value,c=c.index,d=d.ojKey,g.push({row:d,column:-1}),h.push({row:c,column:-1}));0<g.length&&(c={source:this,operation:"delete",keys:g,indexes:h,silent:e},this.handleEvent("change",c));for(a=0;a<b.length;a++)c=b[a],"added"===c.status&&(d=c.value,
c=c.index,null==d.ojKey&&(d.ojKey=this.or.toString(),this.or++),d=d.ojKey,c=this.uk("insert",d,null,c,-1),this.handleEvent("change",c))}null!=this.zr&&(this.zr=this.data.slice())};b.Ra.prototype.to=function(){return this.Jj().length};b.Ra.prototype.o3=function(){return this.Er};b.b.g("ArrayDataGridDataSource.prototype.getRowHeaderKey",{o3:b.Ra.prototype.o3});b.Ra.prototype.Ko=function(){return this.columns};b.b.g("ArrayDataGridDataSource.prototype.getColumns",{Ko:b.Ra.prototype.Ko});b.Ra.prototype.getData=
function(){return this.data};b.b.g("ArrayDataGridDataSource.prototype.getData",{getData:b.Ra.prototype.getData});b.Fd=function(b,a,d,c){this.$b=b;this.ue=a;this.n4=d;this.Mj=c};o_("ArrayHeaderSet",b.Fd,b);b.Fd.prototype.getData=function(f,a){if(null==this.Mj)return null;b.l.assert(f<=this.ue&&f>=this.$b,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");return this.Mj.eJ(this.n4,f)};b.b.g("ArrayHeaderSet.prototype.getData",{getData:b.Fd.prototype.getData});b.Fd.prototype.getMetadata=
function(f,a){if(null==this.Mj)return null;b.l.assert(f<=this.ue&&f>=this.$b,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");return this.Mj.Qda(this.n4,f)};b.b.g("ArrayHeaderSet.prototype.getMetadata",{getMetadata:b.Fd.prototype.getMetadata});b.Fd.prototype.Ag=function(){return 0<this.R()?1:0};b.b.g("ArrayHeaderSet.prototype.getLevelCount",{Ag:b.Fd.prototype.Ag});b.Fd.prototype.Vb=function(f,a){b.l.assert(f<=this.ue&&f>=this.$b,"index out of bounds");b.l.assert(null==a||0==
a,"level out of bounds");return{extent:1,more:{before:!1,after:!1}}};b.b.g("ArrayHeaderSet.prototype.getExtent",{Vb:b.Fd.prototype.Vb});b.Fd.prototype.me=function(f,a){b.l.assert(f<=this.ue&&f>=this.$b,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");return 1};b.b.g("ArrayHeaderSet.prototype.getDepth",{me:b.Fd.prototype.me});b.Fd.prototype.R=function(){return null==this.Mj?0:Math.max(0,this.ue-this.$b)};b.b.g("ArrayHeaderSet.prototype.getCount",{R:b.Fd.prototype.R});b.Fd.prototype.ta=
function(){return this.$b};b.b.g("ArrayHeaderSet.prototype.getStart",{ta:b.Fd.prototype.ta});b.Yf=function(b,a,d,c,e){this.Ni=b;this.rr=a;this.cl=d;this.qr=c;this.Mj=e};o_("ArrayCellSet",b.Yf,b);b.Yf.prototype.getData=function(b){return this.Mj.mda(b.row,b.column)};b.b.g("ArrayCellSet.prototype.getData",{getData:b.Yf.prototype.getData});b.Yf.prototype.getMetadata=function(b){return this.Mj.nda(b.row,b.column)};b.b.g("ArrayCellSet.prototype.getMetadata",{getMetadata:b.Yf.prototype.getMetadata});b.Yf.prototype.ta=
function(b){return"row"==b?this.Ni:"column"==b?this.cl:-1};b.b.g("ArrayCellSet.prototype.getStart",{ta:b.Yf.prototype.ta});b.Yf.prototype.R=function(b){return"row"===b?Math.max(0,this.rr-this.Ni):"column"===b?Math.max(0,this.qr-this.cl):0};b.b.g("ArrayCellSet.prototype.getCount",{R:b.Yf.prototype.R});b.Yf.prototype.getStartRow=function(){return this.Ni};b.b.g("ArrayCellSet.prototype.getStartRow",{getStartRow:b.Yf.prototype.getStartRow});b.Yf.prototype.getStartColumn=function(){return this.cl};b.b.g("ArrayCellSet.prototype.getStartColumn",
{getStartColumn:b.Yf.prototype.getStartColumn})});