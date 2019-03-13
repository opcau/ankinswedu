/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","ojs/ojknockout","promise"],function(a,g){function b(a,b){var c=null,d=a[b];if(null!=d){c=Object.keys(d)[0];d=d[c];if(null==c)throw"Invalid component descriptor key";switch(c){case "inline":c=Promise.resolve(d);break;case "promise":c=d;break;default:throw"Invalid descriptor key "+c+" for the resopurce type: "+b;}}return c}function c(b,c,d){if(null!=b&&(c=a.vg.Xc[c],null!=c&&b&&(c=b[c],"function"===typeof c)))return g.ignoreDependencies(c,b,d)}function d(a,b,c,d){k(c,
"properties",function(c,e){f(a,b,c,e,d)})}function e(a,b,c){k(b,"methods",function(d){var e=b.methods[d].internalName;a[d]=e?c[e].bind(c):c[d].bind(c)})}function f(a,b,c,d,e){function f(b,d){var g=k.peek();g!==b&&(k(b),!e.PJa()||e.tZ())&&(g=new CustomEvent(c+"-changed",{detail:{value:b,previousValue:g,updatedFrom:e.tZ()?"default":d?"external":"internal"}}),a.dispatchEvent(g))}var k=g.observable();h(b,c,function(){return k()},function(a){f(a,!1)});h(a,c,function(){return k.peek()},function(a){if(d.readOnly&&
!e.tZ())throw"Read-only property "+c+" cannot be set";f(a,!0)})}function h(a,b,c,d){Object.defineProperty(a,b,{configurable:!0,enumerable:!0,get:c,set:d})}function k(a,b,c){if(a){var d=a[b]||{};Object.keys(d).forEach(function(a){c(a,d[a])})}}function l(a,b){["methods","properties"].forEach(function(c){k(b,c,function(b){delete a[b]})})}function m(a){var b={};a=a.childNodes;for(var c=0;c<a.length;c++){var d=a[c];if((1===d.nodeType||3===d.nodeType)&&(3!==d.nodeType||d.nodeValue.trim())){var e=d.__oj_slots;
(e=null!=e?e:d.getAttribute&&d.getAttribute("slot"))||(e="");b[e]||(b[e]=[]);b[e].push(d)}}return b}function r(a,b){var c,d=a.childNodes;if(d){c=document.createElement("div");c.setAttribute("data-bind","_ojNodeStorage_");c.style.display="none";b.push(c);for(var e=[],f=0;f<d.length;f++){var g=d[f];1!==g.nodeType&&3!==g.nodeType||e.push(g)}e.forEach(function(a){c.appendChild(a)})}return c}function t(b,c,d){function e(c,f,g,h,k){!c||h.E_(g,f,c)||c.readOnly||(g=k?c.value:d?d(g,f,c,function(b){return a.sf.nM(f,
b,c.type)}):a.sf.nM(f,g,c.type),b[f]=g)}this.Yn=function(d){var k=d.properties;if(k){var u=this.Kta=new a.M3(b,c);f.setAttribute=b.setAttribute;f.removeAttribute=b.removeAttribute;b.setAttribute=function(a,b){l(a,b,f.setAttribute,!1)};b.removeAttribute=function(a){l(a,null,f.removeAttribute,!0)};var l=function(c,d,f,g){c=c.toLowerCase();var h=b.getAttribute(c);f.apply(b,arguments);var n=b.getAttribute(c);n!==h&&(h=a.sf.YX(c),e(k[h],h,n,u,g))};d=Object.keys(k);g=!0;try{d.forEach(function(c){var d=
a.sf.eB(c),f=b.hasAttribute(d),g=k[c];f&&(d=b.getAttribute(d),e(g,c,d,u,!1));if(!f||g.readOnly)try{h=!0,b[c]=g.value}finally{h=!1}}),b.classList.add("oj-complete")}finally{g=!1}}return this};this.PJa=function(){return g};this.tZ=function(){return h};this.vO=function(a){this.Kta.vO();var b=Object.keys(f),c;for(c=0;c<b.length;c++){var d=b[c];a[d]=f[d]}f={}};var f={},g,h}(function(){a.aR.SX({nodeHasBindings:function(b,c){return c||1===b.nodeType&&a.vg.$Q(b.nodeName.toLowerCase())},getBindingAccessors:function(b,
c,d){if(1===b.nodeType&&(b=b.nodeName.toLowerCase(),a.vg.$Q(b))){d=d||{};if(d.ojComposite)throw"Cannot use ojComposite binding on a custom element whose name is already registered for a composite binding";var e={name:b};d.ojComposite=function(){return e}}return d},preprocessNode:function(b,c){var d;if(1===b.nodeType&&"oj-slot"===b.nodeName.toLowerCase()){d=["name","slot","index"];for(var e="ko _ojSlot_:{",f=[],g=0;g<d.length;g++){var h=d[g],k;k=b.getAttribute(h);if(null!=k){var l=a.sf.sF(k).expr;
null==l&&(l="'"+k+"'");k=l}else k=null;k&&f.push(h+":"+k)}e+=f.join(",");g=document.createComment(e+"}");e=document.createComment("/ko");d=[g];f=b.parentNode;for(f.insertBefore(g,b);0<b.childNodes.length;)g=b.childNodes[0],f.insertBefore(g,b),d.push(g);d.push(e);f.replaceChild(e,b)}return d?d:c}})})();a.vg={};a.vg.Xc={initializeMethod:"initialize",activatedMethod:"activated",attachedMethod:"attached",bindingsAppliedMethod:"bindingsApplied",disposeMethod:"dispose"};o_("Composite.defaults",a.vg.Xc,
a);a.vg.register=function(b,c){b&&(a.vg.dL[b.toLowerCase()]=c)};o_("Composite.register",a.vg.register,a);a.vg.$Q=function(b){return b?a.vg.dL[b.toLowerCase()]:null};a.vg.bpa=function(b,c){if(b){var d=a.vg.dL[b.toLowerCase()];d&&(d._metadata=c)}};a.vg.getMetadata=function(b){return b&&(b=a.vg.dL[b.toLowerCase()])?b._metadata:null};o_("Composite.getMetadata",a.vg.getMetadata,a);a.vg.dL={};g.bindingHandlers.ojComposite={init:function(){return{controlsDescendantBindings:!0}},update:function(f,h,k,v,w){function y(a){D&&
(D.vO(f),D=null);K=a;c(C,"disposeMethod",[f]);C=null;I&&l(f,I);A&&(f.removeChild(A),A=null);I=null;Q={}}function x(a){return function(b){if(K||b!=B)throw z;return a.apply(this,Array.prototype.slice.call(arguments,1))}.bind(null,B)}var z=Error(),C,D,B=-1,K=!1,I,Q={},A,J=g.utils.unwrapObservable;g.ignoreDependencies(function(){g.computed(function(){B++;f.dispatchEvent(new CustomEvent("pending",{bubbles:!0}));y(!1);var k=J(h())||{},k=J(k.name),l=a.vg.$Q(k);if(!l)throw"Composite is missing a descriptor";
var u=b(l,"metadata");a.vg.bpa(k,u);k=null;u?k=u.then(x(function(b){b?(I=b,D=new t(f,w,l.parseFunction),d(f,Q,b,D),D.Yn(b)):(f.classList.add("oj-complete"),a.t.warn("ojComposite is being loaded without metadata. No element properties will be set up"));return Q})):f.classList.add("oj-complete");var v,u=new Promise(function(a){v=a}),Z=p+s++,L={element:f,props:k,slotNodeCounts:u,unique:Z},u=null,R=b(l,"viewModel");R&&(u=R.then(x(function(a){return a="function"===typeof a?new a(L):c(a,"initializeMethod",
[L])||a})));R=null;u&&(R=u.then(x(function(a){return c(a,"activatedMethod",[L])})));var E=b(l,"view");E&&(E=E.then(x(function(a){if("string"===typeof a)a=g.utils.parseHtmlFragment(a);else if(window.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType)a=g.utils.arrayPushAll([],a.childNodes);else if(Array.isArray(a))a=g.utils.arrayPushAll([],a);else throw"The View ("+a+") has an unsupported type";return a})));var S=b(l,"css");S&&(S=S.then(x(function(a){var b=document.createElement("style");
b.type="text/css";b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a));document.head.appendChild(b)})));g.applyBindingsToDescendants(w,f);Promise.all([E,u,k,S,R]).then(function(a,b){if(!K&&a==B){var d=b[0];if(!d)throw"ojComposite is missing a View";var h=m(f),k={},n;for(n in h)k[n]=h[n].length;v(k);A=r(f,d);g.virtualElements.setDomNodeChildren(f,d);C=b[1];c(C,"attachedMethod",[L]);d=w.createChildContext(C,void 0,function(a){a.__oj_slots=h;a.__oj_nodestorage=A;a.$slotNodeCounts=
k;a.$props=Q;a.$unique=Z});I&&C&&e(f,I,C);g.applyBindingsToDescendants(d,f);c(C,"bindingsAppliedMethod",[L]);f.dispatchEvent(new CustomEvent("ready",{bubbles:!0}))}}.bind(null,B),function(b,c){c!==z&&null!=c&&a.t.error(c)}.bind(null,B))},null,{disposeWhenNodeIsRemoved:f})});g.utils.domNodeDisposal.addDisposeCallback(f,y.bind(null,!0,w))}};var s=0,p="_ojcomposite";g.bindingHandlers._ojNodeStorage_={init:function(){return{controlsDescendantBindings:!0}}};g.bindingHandlers._ojSlot_={init:function(a,
b,c,d,e){g.utils.domNodeDisposal.addDisposeCallback(a,function(b){if(b=b.__oj_nodestorage)for(var c;c=g.virtualElements.firstChild(a);)null!=c.__oj_slots&&b.appendChild(c)}.bind(null,e));d=e.__oj_slots;b=b();c=g.utils.unwrapObservable;e=c(b.name)||"";var f=c(b.index);if(d=null!=f?[d[e][f]]:d[e]){for(e=0;e<d.length;e++)d[e].__oj_slots=c(b.slot)||"";g.virtualElements.setDomNodeChildren(a,d);return{controlsDescendantBindings:!0}}}};g.virtualElements.allowedBindings._ojSlot_=!0});