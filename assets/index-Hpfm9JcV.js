(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Wx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var z0={exports:{}},nu={},H0={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=Symbol.for("react.element"),Xx=Symbol.for("react.portal"),jx=Symbol.for("react.fragment"),Yx=Symbol.for("react.strict_mode"),qx=Symbol.for("react.profiler"),Kx=Symbol.for("react.provider"),$x=Symbol.for("react.context"),Zx=Symbol.for("react.forward_ref"),Qx=Symbol.for("react.suspense"),Jx=Symbol.for("react.memo"),eS=Symbol.for("react.lazy"),tm=Symbol.iterator;function tS(t){return t===null||typeof t!="object"?null:(t=tm&&t[tm]||t["@@iterator"],typeof t=="function"?t:null)}var V0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G0=Object.assign,W0={};function xo(t,e,n){this.props=t,this.context=e,this.refs=W0,this.updater=n||V0}xo.prototype.isReactComponent={};xo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function X0(){}X0.prototype=xo.prototype;function Cd(t,e,n){this.props=t,this.context=e,this.refs=W0,this.updater=n||V0}var Rd=Cd.prototype=new X0;Rd.constructor=Cd;G0(Rd,xo.prototype);Rd.isPureReactComponent=!0;var nm=Array.isArray,j0=Object.prototype.hasOwnProperty,bd={current:null},Y0={key:!0,ref:!0,__self:!0,__source:!0};function q0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)j0.call(e,i)&&!Y0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:La,type:t,key:s,ref:o,props:r,_owner:bd.current}}function nS(t,e){return{$$typeof:La,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===La}function iS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var im=/\/+/g;function Iu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iS(""+t.key):e.toString(36)}function Yl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case La:case Xx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Iu(o,0):i,nm(r)?(n="",t!=null&&(n=t.replace(im,"$&/")+"/"),Yl(r,e,n,"",function(c){return c})):r!=null&&(Pd(r)&&(r=nS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(im,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",nm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Iu(s,a);o+=Yl(s,e,n,l,r)}else if(l=tS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Iu(s,a++),o+=Yl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(t,e,n){if(t==null)return t;var i=[],r=0;return Yl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function rS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},ql={transition:null},sS={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:ql,ReactCurrentOwner:bd};Ge.Children={map:Qa,forEach:function(t,e,n){Qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qa(t,function(){e++}),e},toArray:function(t){return Qa(t,function(e){return e})||[]},only:function(t){if(!Pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=xo;Ge.Fragment=jx;Ge.Profiler=qx;Ge.PureComponent=Cd;Ge.StrictMode=Yx;Ge.Suspense=Qx;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sS;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=G0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)j0.call(e,l)&&!Y0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:La,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:$x,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Kx,_context:t},t.Consumer=t};Ge.createElement=q0;Ge.createFactory=function(t){var e=q0.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:Zx,render:t}};Ge.isValidElement=Pd;Ge.lazy=function(t){return{$$typeof:eS,_payload:{_status:-1,_result:t},_init:rS}};Ge.memo=function(t,e){return{$$typeof:Jx,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=ql.transition;ql.transition={};try{t()}finally{ql.transition=e}};Ge.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ge.useCallback=function(t,e){return en.current.useCallback(t,e)};Ge.useContext=function(t){return en.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return en.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return en.current.useEffect(t,e)};Ge.useId=function(){return en.current.useId()};Ge.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return en.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};Ge.useRef=function(t){return en.current.useRef(t)};Ge.useState=function(t){return en.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return en.current.useTransition()};Ge.version="18.2.0";H0.exports=Ge;var le=H0.exports;const Qt=Wx(le);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oS=le,aS=Symbol.for("react.element"),lS=Symbol.for("react.fragment"),cS=Object.prototype.hasOwnProperty,uS=oS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fS={key:!0,ref:!0,__self:!0,__source:!0};function K0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)cS.call(e,i)&&!fS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:aS,type:t,key:s,ref:o,props:r,_owner:uS.current}}nu.Fragment=lS;nu.jsx=K0;nu.jsxs=K0;z0.exports=nu;var X=z0.exports,zf={},$0={exports:{}},Mn={},Z0={exports:{}},Q0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,Z){var Q=D.length;D.push(Z);e:for(;0<Q;){var se=Q-1>>>1,ye=D[se];if(0<r(ye,Z))D[se]=Z,D[Q]=ye,Q=se;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Z=D[0],Q=D.pop();if(Q!==Z){D[0]=Q;e:for(var se=0,ye=D.length,Be=ye>>>1;se<Be;){var q=2*(se+1)-1,J=D[q],ce=q+1,ue=D[ce];if(0>r(J,Q))ce<ye&&0>r(ue,J)?(D[se]=ue,D[ce]=Q,se=ce):(D[se]=J,D[q]=Q,se=q);else if(ce<ye&&0>r(ue,Q))D[se]=ue,D[ce]=Q,se=ce;else break e}}return Z}function r(D,Z){var Q=D.sortIndex-Z.sortIndex;return Q!==0?Q:D.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,m=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=D)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function E(D){if(y=!1,_(D),!m)if(n(l)!==null)m=!0,Y(R);else{var Z=n(c);Z!==null&&$(E,Z.startTime-D)}}function R(D,Z){m=!1,y&&(y=!1,h(P),P=-1),p=!0;var Q=f;try{for(_(Z),d=n(l);d!==null&&(!(d.expirationTime>Z)||D&&!L());){var se=d.callback;if(typeof se=="function"){d.callback=null,f=d.priorityLevel;var ye=se(d.expirationTime<=Z);Z=t.unstable_now(),typeof ye=="function"?d.callback=ye:d===n(l)&&i(l),_(Z)}else i(l);d=n(l)}if(d!==null)var Be=!0;else{var q=n(c);q!==null&&$(E,q.startTime-Z),Be=!1}return Be}finally{d=null,f=Q,p=!1}}var C=!1,T=null,P=-1,w=5,S=-1;function L(){return!(t.unstable_now()-S<w)}function F(){if(T!==null){var D=t.unstable_now();S=D;var Z=!0;try{Z=T(!0,D)}finally{Z?I():(C=!1,T=null)}}else C=!1}var I;if(typeof v=="function")I=function(){v(F)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,K=z.port2;z.port1.onmessage=F,I=function(){K.postMessage(null)}}else I=function(){g(F,0)};function Y(D){T=D,C||(C=!0,I())}function $(D,Z){P=g(function(){D(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,Y(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var Z=3;break;default:Z=f}var Q=f;f=Z;try{return D()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,Z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=f;f=D;try{return Z()}finally{f=Q}},t.unstable_scheduleCallback=function(D,Z,Q){var se=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?se+Q:se):Q=se,D){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Q+ye,D={id:u++,callback:Z,priorityLevel:D,startTime:Q,expirationTime:ye,sortIndex:-1},Q>se?(D.sortIndex=Q,e(c,D),n(l)===null&&D===n(c)&&(y?(h(P),P=-1):y=!0,$(E,Q-se))):(D.sortIndex=ye,e(l,D),m||p||(m=!0,Y(R))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var Z=f;return function(){var Q=f;f=Z;try{return D.apply(this,arguments)}finally{f=Q}}}})(Q0);Z0.exports=Q0;var hS=Z0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0=le,Sn=hS;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var e_=new Set,la={};function as(t,e){so(t,e),so(t+"Capture",e)}function so(t,e){for(la[t]=e,t=0;t<e.length;t++)e_.add(e[t])}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hf=Object.prototype.hasOwnProperty,dS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rm={},sm={};function pS(t){return Hf.call(sm,t)?!0:Hf.call(rm,t)?!1:dS.test(t)?sm[t]=!0:(rm[t]=!0,!1)}function mS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gS(t,e,n,i){if(e===null||typeof e>"u"||mS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ld=/[\-:]([a-z])/g;function Nd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ld,Nd);Bt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ld,Nd);Bt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ld,Nd);Bt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dd(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gS(e,n,r,i)&&(n=null),i||r===null?pS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Hi=J0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ja=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),Vf=Symbol.for("react.profiler"),t_=Symbol.for("react.provider"),n_=Symbol.for("react.context"),Ud=Symbol.for("react.forward_ref"),Gf=Symbol.for("react.suspense"),Wf=Symbol.for("react.suspense_list"),Od=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),i_=Symbol.for("react.offscreen"),om=Symbol.iterator;function Ro(t){return t===null||typeof t!="object"?null:(t=om&&t[om]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,Uu;function Vo(t){if(Uu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uu=e&&e[1]||""}return`
`+Uu+t}var Ou=!1;function Fu(t,e){if(!t||Ou)return"";Ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vo(t):""}function _S(t){switch(t.tag){case 5:return Vo(t.type);case 16:return Vo("Lazy");case 13:return Vo("Suspense");case 19:return Vo("SuspenseList");case 0:case 2:case 15:return t=Fu(t.type,!1),t;case 11:return t=Fu(t.type.render,!1),t;case 1:return t=Fu(t.type,!0),t;default:return""}}function Xf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case Ds:return"Portal";case Vf:return"Profiler";case Id:return"StrictMode";case Gf:return"Suspense";case Wf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case n_:return(t.displayName||"Context")+".Consumer";case t_:return(t._context.displayName||"Context")+".Provider";case Ud:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Od:return e=t.displayName||null,e!==null?e:Xf(t.type)||"Memo";case Ji:e=t._payload,t=t._init;try{return Xf(t(e))}catch{}}return null}function vS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xf(e);case 8:return e===Id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function r_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yS(t){var e=r_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function el(t){t._valueTracker||(t._valueTracker=yS(t))}function s_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=r_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function _c(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jf(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function am(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function o_(t,e){e=e.checked,e!=null&&Dd(t,"checked",e,!1)}function Yf(t,e){o_(t,e);var n=_r(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qf(t,e.type,n):e.hasOwnProperty("defaultValue")&&qf(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qf(t,e,n){(e!=="number"||_c(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Go=Array.isArray;function Ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Kf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Go(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function a_(t,e){var n=_r(e.value),i=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function l_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $f(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?l_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tl,c_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tl=tl||document.createElement("div"),tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xS=["Webkit","ms","Moz","O"];Object.keys(Zo).forEach(function(t){xS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zo[e]=Zo[t]})});function u_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zo.hasOwnProperty(t)&&Zo[t]?(""+e).trim():e+"px"}function f_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=u_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var SS=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zf(t,e){if(e){if(SS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Qf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jf=null;function Fd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var eh=null,$s=null,Zs=null;function fm(t){if(t=Ia(t)){if(typeof eh!="function")throw Error(re(280));var e=t.stateNode;e&&(e=au(e),eh(t.stateNode,t.type,e))}}function h_(t){$s?Zs?Zs.push(t):Zs=[t]:$s=t}function d_(){if($s){var t=$s,e=Zs;if(Zs=$s=null,fm(t),e)for(t=0;t<e.length;t++)fm(e[t])}}function p_(t,e){return t(e)}function m_(){}var ku=!1;function g_(t,e,n){if(ku)return t(e,n);ku=!0;try{return p_(t,e,n)}finally{ku=!1,($s!==null||Zs!==null)&&(m_(),d_())}}function ua(t,e){var n=t.stateNode;if(n===null)return null;var i=au(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var th=!1;if(Ii)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){th=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{th=!1}function ES(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Qo=!1,vc=null,yc=!1,nh=null,MS={onError:function(t){Qo=!0,vc=t}};function AS(t,e,n,i,r,s,o,a,l){Qo=!1,vc=null,ES.apply(MS,arguments)}function wS(t,e,n,i,r,s,o,a,l){if(AS.apply(this,arguments),Qo){if(Qo){var c=vc;Qo=!1,vc=null}else throw Error(re(198));yc||(yc=!0,nh=c)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function __(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hm(t){if(ls(t)!==t)throw Error(re(188))}function TS(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return hm(r),t;if(s===i)return hm(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function v_(t){return t=TS(t),t!==null?y_(t):null}function y_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=y_(t);if(e!==null)return e;t=t.sibling}return null}var x_=Sn.unstable_scheduleCallback,dm=Sn.unstable_cancelCallback,CS=Sn.unstable_shouldYield,RS=Sn.unstable_requestPaint,vt=Sn.unstable_now,bS=Sn.unstable_getCurrentPriorityLevel,kd=Sn.unstable_ImmediatePriority,S_=Sn.unstable_UserBlockingPriority,xc=Sn.unstable_NormalPriority,PS=Sn.unstable_LowPriority,E_=Sn.unstable_IdlePriority,iu=null,li=null;function LS(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(iu,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:IS,NS=Math.log,DS=Math.LN2;function IS(t){return t>>>=0,t===0?32:31-(NS(t)/DS|0)|0}var nl=64,il=4194304;function Wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Wo(a):(s&=o,s!==0&&(i=Wo(s)))}else o=n&~r,o!==0?i=Wo(o):s!==0&&(i=Wo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function US(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=US(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ih(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function M_(){var t=nl;return nl<<=1,!(nl&4194240)&&(nl=64),t}function Bu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function FS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Bd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function A_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var w_,zd,T_,C_,R_,rh=!1,rl=[],ar=null,lr=null,cr=null,fa=new Map,ha=new Map,nr=[],kS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pm(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(e.pointerId)}}function Po(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ia(e),e!==null&&zd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function BS(t,e,n,i,r){switch(e){case"focusin":return ar=Po(ar,t,e,n,i,r),!0;case"dragenter":return lr=Po(lr,t,e,n,i,r),!0;case"mouseover":return cr=Po(cr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return fa.set(s,Po(fa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ha.set(s,Po(ha.get(s)||null,t,e,n,i,r)),!0}return!1}function b_(t){var e=Hr(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=__(n),e!==null){t.blockedOn=e,R_(t.priority,function(){T_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Jf=i,n.target.dispatchEvent(i),Jf=null}else return e=Ia(n),e!==null&&zd(e),t.blockedOn=n,!1;e.shift()}return!0}function mm(t,e,n){Kl(t)&&n.delete(e)}function zS(){rh=!1,ar!==null&&Kl(ar)&&(ar=null),lr!==null&&Kl(lr)&&(lr=null),cr!==null&&Kl(cr)&&(cr=null),fa.forEach(mm),ha.forEach(mm)}function Lo(t,e){t.blockedOn===e&&(t.blockedOn=null,rh||(rh=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,zS)))}function da(t){function e(r){return Lo(r,t)}if(0<rl.length){Lo(rl[0],t);for(var n=1;n<rl.length;n++){var i=rl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ar!==null&&Lo(ar,t),lr!==null&&Lo(lr,t),cr!==null&&Lo(cr,t),fa.forEach(e),ha.forEach(e),n=0;n<nr.length;n++)i=nr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)b_(n),n.blockedOn===null&&nr.shift()}var Qs=Hi.ReactCurrentBatchConfig,Ec=!0;function HS(t,e,n,i){var r=et,s=Qs.transition;Qs.transition=null;try{et=1,Hd(t,e,n,i)}finally{et=r,Qs.transition=s}}function VS(t,e,n,i){var r=et,s=Qs.transition;Qs.transition=null;try{et=4,Hd(t,e,n,i)}finally{et=r,Qs.transition=s}}function Hd(t,e,n,i){if(Ec){var r=sh(t,e,n,i);if(r===null)Ku(t,e,i,Mc,n),pm(t,i);else if(BS(r,t,e,n,i))i.stopPropagation();else if(pm(t,i),e&4&&-1<kS.indexOf(t)){for(;r!==null;){var s=Ia(r);if(s!==null&&w_(s),s=sh(t,e,n,i),s===null&&Ku(t,e,i,Mc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ku(t,e,i,null,n)}}var Mc=null;function sh(t,e,n,i){if(Mc=null,t=Fd(i),t=Hr(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=__(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Mc=t,null}function P_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bS()){case kd:return 1;case S_:return 4;case xc:case PS:return 16;case E_:return 536870912;default:return 16}default:return 16}}var sr=null,Vd=null,$l=null;function L_(){if($l)return $l;var t,e=Vd,n=e.length,i,r="value"in sr?sr.value:sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return $l=r.slice(t,1<i?1-i:void 0)}function Zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sl(){return!0}function gm(){return!1}function An(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sl:gm,this.isPropagationStopped=gm,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),e}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gd=An(So),Da=ft({},So,{view:0,detail:0}),GS=An(Da),zu,Hu,No,ru=ft({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==No&&(No&&t.type==="mousemove"?(zu=t.screenX-No.screenX,Hu=t.screenY-No.screenY):Hu=zu=0,No=t),zu)},movementY:function(t){return"movementY"in t?t.movementY:Hu}}),_m=An(ru),WS=ft({},ru,{dataTransfer:0}),XS=An(WS),jS=ft({},Da,{relatedTarget:0}),Vu=An(jS),YS=ft({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),qS=An(YS),KS=ft({},So,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$S=An(KS),ZS=ft({},So,{data:0}),vm=An(ZS),QS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=eE[t])?!!e[t]:!1}function Wd(){return tE}var nE=ft({},Da,{key:function(t){if(t.key){var e=QS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?JS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wd,charCode:function(t){return t.type==="keypress"?Zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iE=An(nE),rE=ft({},ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=An(rE),sE=ft({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wd}),oE=An(sE),aE=ft({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),lE=An(aE),cE=ft({},ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uE=An(cE),fE=[9,13,27,32],Xd=Ii&&"CompositionEvent"in window,Jo=null;Ii&&"documentMode"in document&&(Jo=document.documentMode);var hE=Ii&&"TextEvent"in window&&!Jo,N_=Ii&&(!Xd||Jo&&8<Jo&&11>=Jo),xm=" ",Sm=!1;function D_(t,e){switch(t){case"keyup":return fE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function dE(t,e){switch(t){case"compositionend":return I_(e);case"keypress":return e.which!==32?null:(Sm=!0,xm);case"textInput":return t=e.data,t===xm&&Sm?null:t;default:return null}}function pE(t,e){if(Us)return t==="compositionend"||!Xd&&D_(t,e)?(t=L_(),$l=Vd=sr=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return N_&&e.locale!=="ko"?null:e.data;default:return null}}var mE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Em(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mE[t.type]:e==="textarea"}function U_(t,e,n,i){h_(i),e=Ac(e,"onChange"),0<e.length&&(n=new Gd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ea=null,pa=null;function gE(t){j_(t,0)}function su(t){var e=ks(t);if(s_(e))return t}function _E(t,e){if(t==="change")return e}var O_=!1;if(Ii){var Gu;if(Ii){var Wu="oninput"in document;if(!Wu){var Mm=document.createElement("div");Mm.setAttribute("oninput","return;"),Wu=typeof Mm.oninput=="function"}Gu=Wu}else Gu=!1;O_=Gu&&(!document.documentMode||9<document.documentMode)}function Am(){ea&&(ea.detachEvent("onpropertychange",F_),pa=ea=null)}function F_(t){if(t.propertyName==="value"&&su(pa)){var e=[];U_(e,pa,t,Fd(t)),g_(gE,e)}}function vE(t,e,n){t==="focusin"?(Am(),ea=e,pa=n,ea.attachEvent("onpropertychange",F_)):t==="focusout"&&Am()}function yE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return su(pa)}function xE(t,e){if(t==="click")return su(e)}function SE(t,e){if(t==="input"||t==="change")return su(e)}function EE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:EE;function ma(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Hf.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function wm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tm(t,e){var n=wm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wm(n)}}function k_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?k_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function B_(){for(var t=window,e=_c();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_c(t.document)}return e}function jd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ME(t){var e=B_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&k_(n.ownerDocument.documentElement,n)){if(i!==null&&jd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Tm(n,s);var o=Tm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var AE=Ii&&"documentMode"in document&&11>=document.documentMode,Os=null,oh=null,ta=null,ah=!1;function Cm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ah||Os==null||Os!==_c(i)||(i=Os,"selectionStart"in i&&jd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ta&&ma(ta,i)||(ta=i,i=Ac(oh,"onSelect"),0<i.length&&(e=new Gd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Os)))}function ol(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fs={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},Xu={},z_={};Ii&&(z_=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function ou(t){if(Xu[t])return Xu[t];if(!Fs[t])return t;var e=Fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in z_)return Xu[t]=e[n];return t}var H_=ou("animationend"),V_=ou("animationiteration"),G_=ou("animationstart"),W_=ou("transitionend"),X_=new Map,Rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){X_.set(t,e),as(e,[t])}for(var ju=0;ju<Rm.length;ju++){var Yu=Rm[ju],wE=Yu.toLowerCase(),TE=Yu[0].toUpperCase()+Yu.slice(1);xr(wE,"on"+TE)}xr(H_,"onAnimationEnd");xr(V_,"onAnimationIteration");xr(G_,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(W_,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function bm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,wS(i,e,void 0,t),t.currentTarget=null}function j_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;bm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;bm(r,a,c),s=l}}}if(yc)throw t=nh,yc=!1,nh=null,t}function it(t,e){var n=e[hh];n===void 0&&(n=e[hh]=new Set);var i=t+"__bubble";n.has(i)||(Y_(e,t,2,!1),n.add(i))}function qu(t,e,n){var i=0;e&&(i|=4),Y_(n,t,i,e)}var al="_reactListening"+Math.random().toString(36).slice(2);function ga(t){if(!t[al]){t[al]=!0,e_.forEach(function(n){n!=="selectionchange"&&(CE.has(n)||qu(n,!1,t),qu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[al]||(e[al]=!0,qu("selectionchange",!1,e))}}function Y_(t,e,n,i){switch(P_(e)){case 1:var r=HS;break;case 4:r=VS;break;default:r=Hd}n=r.bind(null,e,n,t),r=void 0,!th||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ku(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}g_(function(){var c=s,u=Fd(n),d=[];e:{var f=X_.get(t);if(f!==void 0){var p=Gd,m=t;switch(t){case"keypress":if(Zl(n)===0)break e;case"keydown":case"keyup":p=iE;break;case"focusin":m="focus",p=Vu;break;case"focusout":m="blur",p=Vu;break;case"beforeblur":case"afterblur":p=Vu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=XS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=oE;break;case H_:case V_:case G_:p=qS;break;case W_:p=lE;break;case"scroll":p=GS;break;case"wheel":p=uE;break;case"copy":case"cut":case"paste":p=$S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ym}var y=(e&4)!==0,g=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var v=c,_;v!==null;){_=v;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,h!==null&&(E=ua(v,h),E!=null&&y.push(_a(v,E,_)))),g)break;v=v.return}0<y.length&&(f=new p(f,m,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Jf&&(m=n.relatedTarget||n.fromElement)&&(Hr(m)||m[Ui]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?Hr(m):null,m!==null&&(g=ls(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(y=_m,E="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=ym,E="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?f:ks(p),_=m==null?f:ks(m),f=new y(E,v+"leave",p,n,u),f.target=g,f.relatedTarget=_,E=null,Hr(u)===c&&(y=new y(h,v+"enter",m,n,u),y.target=_,y.relatedTarget=g,E=y),g=E,p&&m)t:{for(y=p,h=m,v=0,_=y;_;_=fs(_))v++;for(_=0,E=h;E;E=fs(E))_++;for(;0<v-_;)y=fs(y),v--;for(;0<_-v;)h=fs(h),_--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break t;y=fs(y),h=fs(h)}y=null}else y=null;p!==null&&Pm(d,f,p,y,!1),m!==null&&g!==null&&Pm(d,g,m,y,!0)}}e:{if(f=c?ks(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=_E;else if(Em(f))if(O_)R=SE;else{R=yE;var C=vE}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=xE);if(R&&(R=R(t,c))){U_(d,R,n,u);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&qf(f,"number",f.value)}switch(C=c?ks(c):window,t){case"focusin":(Em(C)||C.contentEditable==="true")&&(Os=C,oh=c,ta=null);break;case"focusout":ta=oh=Os=null;break;case"mousedown":ah=!0;break;case"contextmenu":case"mouseup":case"dragend":ah=!1,Cm(d,n,u);break;case"selectionchange":if(AE)break;case"keydown":case"keyup":Cm(d,n,u)}var T;if(Xd)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Us?D_(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(N_&&n.locale!=="ko"&&(Us||P!=="onCompositionStart"?P==="onCompositionEnd"&&Us&&(T=L_()):(sr=u,Vd="value"in sr?sr.value:sr.textContent,Us=!0)),C=Ac(c,P),0<C.length&&(P=new vm(P,t,null,n,u),d.push({event:P,listeners:C}),T?P.data=T:(T=I_(n),T!==null&&(P.data=T)))),(T=hE?dE(t,n):pE(t,n))&&(c=Ac(c,"onBeforeInput"),0<c.length&&(u=new vm("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=T))}j_(d,e)})}function _a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ac(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ua(t,n),s!=null&&i.unshift(_a(t,s,r)),s=ua(t,e),s!=null&&i.push(_a(t,s,r))),t=t.return}return i}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ua(n,s),l!=null&&o.unshift(_a(n,l,a))):r||(l=ua(n,s),l!=null&&o.push(_a(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var RE=/\r\n?/g,bE=/\u0000|\uFFFD/g;function Lm(t){return(typeof t=="string"?t:""+t).replace(RE,`
`).replace(bE,"")}function ll(t,e,n){if(e=Lm(e),Lm(t)!==e&&n)throw Error(re(425))}function wc(){}var lh=null,ch=null;function uh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fh=typeof setTimeout=="function"?setTimeout:void 0,PE=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,LE=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(t){return Nm.resolve(null).then(t).catch(NE)}:fh;function NE(t){setTimeout(function(){throw t})}function $u(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),da(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);da(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Eo=Math.random().toString(36).slice(2),oi="__reactFiber$"+Eo,va="__reactProps$"+Eo,Ui="__reactContainer$"+Eo,hh="__reactEvents$"+Eo,DE="__reactListeners$"+Eo,IE="__reactHandles$"+Eo;function Hr(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ui]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dm(t);t!==null;){if(n=t[oi])return n;t=Dm(t)}return e}t=n,n=t.parentNode}return null}function Ia(t){return t=t[oi]||t[Ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function au(t){return t[va]||null}var dh=[],Bs=-1;function Sr(t){return{current:t}}function st(t){0>Bs||(t.current=dh[Bs],dh[Bs]=null,Bs--)}function nt(t,e){Bs++,dh[Bs]=t.current,t.current=e}var vr={},Yt=Sr(vr),an=Sr(!1),$r=vr;function oo(t,e){var n=t.type.contextTypes;if(!n)return vr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ln(t){return t=t.childContextTypes,t!=null}function Tc(){st(an),st(Yt)}function Im(t,e,n){if(Yt.current!==vr)throw Error(re(168));nt(Yt,e),nt(an,n)}function q_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,vS(t)||"Unknown",r));return ft({},n,i)}function Cc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,$r=Yt.current,nt(Yt,t),nt(an,an.current),!0}function Um(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=q_(t,e,$r),i.__reactInternalMemoizedMergedChildContext=t,st(an),st(Yt),nt(Yt,t)):st(an),nt(an,n)}var wi=null,lu=!1,Zu=!1;function K_(t){wi===null?wi=[t]:wi.push(t)}function UE(t){lu=!0,K_(t)}function Er(){if(!Zu&&wi!==null){Zu=!0;var t=0,e=et;try{var n=wi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}wi=null,lu=!1}catch(r){throw wi!==null&&(wi=wi.slice(t+1)),x_(kd,Er),r}finally{et=e,Zu=!1}}return null}var zs=[],Hs=0,Rc=null,bc=0,Cn=[],Rn=0,Zr=null,Ri=1,bi="";function Ur(t,e){zs[Hs++]=bc,zs[Hs++]=Rc,Rc=t,bc=e}function $_(t,e,n){Cn[Rn++]=Ri,Cn[Rn++]=bi,Cn[Rn++]=Zr,Zr=t;var i=Ri;t=bi;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ri=1<<32-qn(e)+r|n<<r|i,bi=s+t}else Ri=1<<s|n<<r|i,bi=t}function Yd(t){t.return!==null&&(Ur(t,1),$_(t,1,0))}function qd(t){for(;t===Rc;)Rc=zs[--Hs],zs[Hs]=null,bc=zs[--Hs],zs[Hs]=null;for(;t===Zr;)Zr=Cn[--Rn],Cn[Rn]=null,bi=Cn[--Rn],Cn[Rn]=null,Ri=Cn[--Rn],Cn[Rn]=null}var yn=null,vn=null,at=!1,Wn=null;function Z_(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Om(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,vn=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zr!==null?{id:Ri,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,vn=null,!0):!1;default:return!1}}function ph(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mh(t){if(at){var e=vn;if(e){var n=e;if(!Om(t,e)){if(ph(t))throw Error(re(418));e=ur(n.nextSibling);var i=yn;e&&Om(t,e)?Z_(i,n):(t.flags=t.flags&-4097|2,at=!1,yn=t)}}else{if(ph(t))throw Error(re(418));t.flags=t.flags&-4097|2,at=!1,yn=t}}}function Fm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function cl(t){if(t!==yn)return!1;if(!at)return Fm(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uh(t.type,t.memoizedProps)),e&&(e=vn)){if(ph(t))throw Q_(),Error(re(418));for(;e;)Z_(t,e),e=ur(e.nextSibling)}if(Fm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=yn?ur(t.stateNode.nextSibling):null;return!0}function Q_(){for(var t=vn;t;)t=ur(t.nextSibling)}function ao(){vn=yn=null,at=!1}function Kd(t){Wn===null?Wn=[t]:Wn.push(t)}var OE=Hi.ReactCurrentBatchConfig;function Hn(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Pc=Sr(null),Lc=null,Vs=null,$d=null;function Zd(){$d=Vs=Lc=null}function Qd(t){var e=Pc.current;st(Pc),t._currentValue=e}function gh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Js(t,e){Lc=t,$d=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if($d!==t)if(t={context:t,memoizedValue:e,next:null},Vs===null){if(Lc===null)throw Error(re(308));Vs=t,Lc.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return e}var Vr=null;function Jd(t){Vr===null?Vr=[t]:Vr.push(t)}function J_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Jd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Oi(t,i)}function Oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function ep(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ev(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Oi(t,n)}return r=i.interleaved,r===null?(e.next=e,Jd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Oi(t,n)}function Ql(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bd(t,n)}}function km(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nc(t,e,n,i){var r=t.updateQueue;er=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,y=a;switch(f=e,p=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,f=typeof m=="function"?m.call(p,d,f):m,f==null)break e;d=ft({},d,f);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=d}}function Bm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var tv=new J0.Component().refs;function _h(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cu={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=dr(t),s=Ni(i,r);s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(Kn(e,t,r,i),Ql(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=dr(t),s=Ni(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(Kn(e,t,r,i),Ql(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),i=dr(t),r=Ni(n,i);r.tag=2,e!=null&&(r.callback=e),e=fr(t,r,i),e!==null&&(Kn(e,t,i,n),Ql(e,t,i))}};function zm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ma(n,i)||!ma(r,s):!0}function nv(t,e,n){var i=!1,r=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=ln(e)?$r:Yt.current,i=e.contextTypes,s=(i=i!=null)?oo(t,r):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&cu.enqueueReplaceState(e,e.state,null)}function vh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=tv,ep(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=ln(e)?$r:Yt.current,r.context=oo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_h(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&cu.enqueueReplaceState(r,r.state,null),Nc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Do(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===tv&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function ul(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vm(t){var e=t._init;return e(t._payload)}function iv(t){function e(h,v){if(t){var _=h.deletions;_===null?(h.deletions=[v],h.flags|=16):_.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=pr(h,v),h.index=0,h.sibling=null,h}function s(h,v,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<v?(h.flags|=2,v):_):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,_,E){return v===null||v.tag!==6?(v=sf(_,h.mode,E),v.return=h,v):(v=r(v,_),v.return=h,v)}function l(h,v,_,E){var R=_.type;return R===Is?u(h,v,_.props.children,E,_.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ji&&Vm(R)===v.type)?(E=r(v,_.props),E.ref=Do(h,v,_),E.return=h,E):(E=rc(_.type,_.key,_.props,null,h.mode,E),E.ref=Do(h,v,_),E.return=h,E)}function c(h,v,_,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=of(_,h.mode,E),v.return=h,v):(v=r(v,_.children||[]),v.return=h,v)}function u(h,v,_,E,R){return v===null||v.tag!==7?(v=qr(_,h.mode,E,R),v.return=h,v):(v=r(v,_),v.return=h,v)}function d(h,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=sf(""+v,h.mode,_),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ja:return _=rc(v.type,v.key,v.props,null,h.mode,_),_.ref=Do(h,null,v),_.return=h,_;case Ds:return v=of(v,h.mode,_),v.return=h,v;case Ji:var E=v._init;return d(h,E(v._payload),_)}if(Go(v)||Ro(v))return v=qr(v,h.mode,_,null),v.return=h,v;ul(h,v)}return null}function f(h,v,_,E){var R=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:a(h,v,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ja:return _.key===R?l(h,v,_,E):null;case Ds:return _.key===R?c(h,v,_,E):null;case Ji:return R=_._init,f(h,v,R(_._payload),E)}if(Go(_)||Ro(_))return R!==null?null:u(h,v,_,E,null);ul(h,_)}return null}function p(h,v,_,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(_)||null,a(v,h,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ja:return h=h.get(E.key===null?_:E.key)||null,l(v,h,E,R);case Ds:return h=h.get(E.key===null?_:E.key)||null,c(v,h,E,R);case Ji:var C=E._init;return p(h,v,_,C(E._payload),R)}if(Go(E)||Ro(E))return h=h.get(_)||null,u(v,h,E,R,null);ul(v,E)}return null}function m(h,v,_,E){for(var R=null,C=null,T=v,P=v=0,w=null;T!==null&&P<_.length;P++){T.index>P?(w=T,T=null):w=T.sibling;var S=f(h,T,_[P],E);if(S===null){T===null&&(T=w);break}t&&T&&S.alternate===null&&e(h,T),v=s(S,v,P),C===null?R=S:C.sibling=S,C=S,T=w}if(P===_.length)return n(h,T),at&&Ur(h,P),R;if(T===null){for(;P<_.length;P++)T=d(h,_[P],E),T!==null&&(v=s(T,v,P),C===null?R=T:C.sibling=T,C=T);return at&&Ur(h,P),R}for(T=i(h,T);P<_.length;P++)w=p(T,h,P,_[P],E),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?P:w.key),v=s(w,v,P),C===null?R=w:C.sibling=w,C=w);return t&&T.forEach(function(L){return e(h,L)}),at&&Ur(h,P),R}function y(h,v,_,E){var R=Ro(_);if(typeof R!="function")throw Error(re(150));if(_=R.call(_),_==null)throw Error(re(151));for(var C=R=null,T=v,P=v=0,w=null,S=_.next();T!==null&&!S.done;P++,S=_.next()){T.index>P?(w=T,T=null):w=T.sibling;var L=f(h,T,S.value,E);if(L===null){T===null&&(T=w);break}t&&T&&L.alternate===null&&e(h,T),v=s(L,v,P),C===null?R=L:C.sibling=L,C=L,T=w}if(S.done)return n(h,T),at&&Ur(h,P),R;if(T===null){for(;!S.done;P++,S=_.next())S=d(h,S.value,E),S!==null&&(v=s(S,v,P),C===null?R=S:C.sibling=S,C=S);return at&&Ur(h,P),R}for(T=i(h,T);!S.done;P++,S=_.next())S=p(T,h,P,S.value,E),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?P:S.key),v=s(S,v,P),C===null?R=S:C.sibling=S,C=S);return t&&T.forEach(function(F){return e(h,F)}),at&&Ur(h,P),R}function g(h,v,_,E){if(typeof _=="object"&&_!==null&&_.type===Is&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ja:e:{for(var R=_.key,C=v;C!==null;){if(C.key===R){if(R=_.type,R===Is){if(C.tag===7){n(h,C.sibling),v=r(C,_.props.children),v.return=h,h=v;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ji&&Vm(R)===C.type){n(h,C.sibling),v=r(C,_.props),v.ref=Do(h,C,_),v.return=h,h=v;break e}n(h,C);break}else e(h,C);C=C.sibling}_.type===Is?(v=qr(_.props.children,h.mode,E,_.key),v.return=h,h=v):(E=rc(_.type,_.key,_.props,null,h.mode,E),E.ref=Do(h,v,_),E.return=h,h=E)}return o(h);case Ds:e:{for(C=_.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(h,v.sibling),v=r(v,_.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=of(_,h.mode,E),v.return=h,h=v}return o(h);case Ji:return C=_._init,g(h,v,C(_._payload),E)}if(Go(_))return m(h,v,_,E);if(Ro(_))return y(h,v,_,E);ul(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,_),v.return=h,h=v):(n(h,v),v=sf(_,h.mode,E),v.return=h,h=v),o(h)):n(h,v)}return g}var lo=iv(!0),rv=iv(!1),Ua={},ci=Sr(Ua),ya=Sr(Ua),xa=Sr(Ua);function Gr(t){if(t===Ua)throw Error(re(174));return t}function tp(t,e){switch(nt(xa,e),nt(ya,t),nt(ci,Ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$f(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$f(e,t)}st(ci),nt(ci,e)}function co(){st(ci),st(ya),st(xa)}function sv(t){Gr(xa.current);var e=Gr(ci.current),n=$f(e,t.type);e!==n&&(nt(ya,t),nt(ci,n))}function np(t){ya.current===t&&(st(ci),st(ya))}var lt=Sr(0);function Dc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qu=[];function ip(){for(var t=0;t<Qu.length;t++)Qu[t]._workInProgressVersionPrimary=null;Qu.length=0}var Jl=Hi.ReactCurrentDispatcher,Ju=Hi.ReactCurrentBatchConfig,Qr=0,ut=null,Tt=null,Nt=null,Ic=!1,na=!1,Sa=0,FE=0;function zt(){throw Error(re(321))}function rp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function sp(t,e,n,i,r,s){if(Qr=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jl.current=t===null||t.memoizedState===null?HE:VE,t=n(i,r),na){s=0;do{if(na=!1,Sa=0,25<=s)throw Error(re(301));s+=1,Nt=Tt=null,e.updateQueue=null,Jl.current=GE,t=n(i,r)}while(na)}if(Jl.current=Uc,e=Tt!==null&&Tt.next!==null,Qr=0,Nt=Tt=ut=null,Ic=!1,e)throw Error(re(300));return t}function op(){var t=Sa!==0;return Sa=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ut.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Un(){if(Tt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Nt===null?ut.memoizedState:Nt.next;if(e!==null)Nt=e,Tt=t;else{if(t===null)throw Error(re(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Nt===null?ut.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Ea(t,e){return typeof e=="function"?e(t):e}function ef(t){var e=Un(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Qr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ut.lanes|=u,Jr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Zn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,Jr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tf(t){var e=Un(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Zn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ov(){}function av(t,e){var n=ut,i=Un(),r=e(),s=!Zn(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,ap(uv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Ma(9,cv.bind(null,n,i,r,e),void 0,null),It===null)throw Error(re(349));Qr&30||lv(n,e,r)}return r}function lv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cv(t,e,n,i){e.value=n,e.getSnapshot=i,fv(e)&&hv(t)}function uv(t,e,n){return n(function(){fv(e)&&hv(t)})}function fv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function hv(t){var e=Oi(t,1);e!==null&&Kn(e,t,1,-1)}function Gm(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e.queue=t,t=t.dispatch=zE.bind(null,ut,t),[e.memoizedState,t]}function Ma(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function dv(){return Un().memoizedState}function ec(t,e,n,i){var r=ni();ut.flags|=t,r.memoizedState=Ma(1|e,n,void 0,i===void 0?null:i)}function uu(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&rp(i,o.deps)){r.memoizedState=Ma(e,n,s,i);return}}ut.flags|=t,r.memoizedState=Ma(1|e,n,s,i)}function Wm(t,e){return ec(8390656,8,t,e)}function ap(t,e){return uu(2048,8,t,e)}function pv(t,e){return uu(4,2,t,e)}function mv(t,e){return uu(4,4,t,e)}function gv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _v(t,e,n){return n=n!=null?n.concat([t]):null,uu(4,4,gv.bind(null,e,t),n)}function lp(){}function vv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&rp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function yv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&rp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function xv(t,e,n){return Qr&21?(Zn(n,e)||(n=M_(),ut.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function kE(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Ju.transition;Ju.transition={};try{t(!1),e()}finally{et=n,Ju.transition=i}}function Sv(){return Un().memoizedState}function BE(t,e,n){var i=dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ev(t))Mv(e,n);else if(n=J_(t,e,n,i),n!==null){var r=Jt();Kn(n,t,i,r),Av(n,e,i)}}function zE(t,e,n){var i=dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ev(t))Mv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Zn(a,o)){var l=e.interleaved;l===null?(r.next=r,Jd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=J_(t,e,r,i),n!==null&&(r=Jt(),Kn(n,t,i,r),Av(n,e,i))}}function Ev(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function Mv(t,e){na=Ic=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Av(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bd(t,n)}}var Uc={readContext:In,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},HE={readContext:In,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:Wm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ec(4194308,4,gv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ec(4194308,4,t,e)},useInsertionEffect:function(t,e){return ec(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=BE.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:Gm,useDebugValue:lp,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=Gm(!1),e=t[0];return t=kE.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=ni();if(at){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),It===null)throw Error(re(349));Qr&30||lv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Wm(uv.bind(null,i,s,t),[t]),i.flags|=2048,Ma(9,cv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=It.identifierPrefix;if(at){var n=bi,i=Ri;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},VE={readContext:In,useCallback:vv,useContext:In,useEffect:ap,useImperativeHandle:_v,useInsertionEffect:pv,useLayoutEffect:mv,useMemo:yv,useReducer:ef,useRef:dv,useState:function(){return ef(Ea)},useDebugValue:lp,useDeferredValue:function(t){var e=Un();return xv(e,Tt.memoizedState,t)},useTransition:function(){var t=ef(Ea)[0],e=Un().memoizedState;return[t,e]},useMutableSource:ov,useSyncExternalStore:av,useId:Sv,unstable_isNewReconciler:!1},GE={readContext:In,useCallback:vv,useContext:In,useEffect:ap,useImperativeHandle:_v,useInsertionEffect:pv,useLayoutEffect:mv,useMemo:yv,useReducer:tf,useRef:dv,useState:function(){return tf(Ea)},useDebugValue:lp,useDeferredValue:function(t){var e=Un();return Tt===null?e.memoizedState=t:xv(e,Tt.memoizedState,t)},useTransition:function(){var t=tf(Ea)[0],e=Un().memoizedState;return[t,e]},useMutableSource:ov,useSyncExternalStore:av,useId:Sv,unstable_isNewReconciler:!1};function uo(t,e){try{var n="",i=e;do n+=_S(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function nf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var WE=typeof WeakMap=="function"?WeakMap:Map;function wv(t,e,n){n=Ni(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Fc||(Fc=!0,bh=i),yh(t,e)},n}function Tv(t,e,n){n=Ni(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){yh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yh(t,e),typeof i!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new WE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=rM.bind(null,t,e,n),e.then(t,t))}function jm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ym(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ni(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var XE=Hi.ReactCurrentOwner,sn=!1;function Zt(t,e,n,i){e.child=t===null?rv(e,null,n,i):lo(e,t.child,n,i)}function qm(t,e,n,i,r){n=n.render;var s=e.ref;return Js(e,r),i=sp(t,e,n,i,s,r),n=op(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(at&&n&&Yd(e),e.flags|=1,Zt(t,e,i,r),e.child)}function Km(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!gp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Cv(t,e,s,i,r)):(t=rc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(o,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=pr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Cv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ma(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return xh(t,e,n,i,r)}function Rv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Ws,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(Ws,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(Ws,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(Ws,_n),_n|=i;return Zt(t,e,r,n),e.child}function bv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xh(t,e,n,i,r){var s=ln(n)?$r:Yt.current;return s=oo(e,s),Js(e,r),n=sp(t,e,n,i,s,r),i=op(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(at&&i&&Yd(e),e.flags|=1,Zt(t,e,n,r),e.child)}function $m(t,e,n,i,r){if(ln(n)){var s=!0;Cc(e)}else s=!1;if(Js(e,r),e.stateNode===null)tc(t,e),nv(e,n,i),vh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=ln(n)?$r:Yt.current,c=oo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Hm(e,o,i,c),er=!1;var f=e.memoizedState;o.state=f,Nc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||an.current||er?(typeof u=="function"&&(_h(e,n,u,i),l=e.memoizedState),(a=er||zm(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ev(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Hn(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=ln(n)?$r:Yt.current,l=oo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Hm(e,o,i,l),er=!1,f=e.memoizedState,o.state=f,Nc(e,i,o,r);var m=e.memoizedState;a!==d||f!==m||an.current||er?(typeof p=="function"&&(_h(e,n,p,i),m=e.memoizedState),(c=er||zm(e,n,c,i,f,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Sh(t,e,n,i,s,r)}function Sh(t,e,n,i,r,s){bv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Um(e,n,!1),Fi(t,e,s);i=e.stateNode,XE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=lo(e,t.child,null,s),e.child=lo(e,null,a,s)):Zt(t,e,a,s),e.memoizedState=i.state,r&&Um(e,n,!0),e.child}function Pv(t){var e=t.stateNode;e.pendingContext?Im(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Im(t,e.context,!1),tp(t,e.containerInfo)}function Zm(t,e,n,i,r){return ao(),Kd(r),e.flags|=256,Zt(t,e,n,i),e.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function Mh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Lv(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(lt,r&1),t===null)return mh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=du(o,i,0,null),t=qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mh(n),e.memoizedState=Eh,t):cp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return jE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=pr(a,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Mh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Eh,i}return s=t.child,t=s.sibling,i=pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function cp(t,e){return e=du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fl(t,e,n,i){return i!==null&&Kd(i),lo(e,t.child,null,n),t=cp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=nf(Error(re(422))),fl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=du({mode:"visible",children:i.children},r,0,null),s=qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&lo(e,t.child,null,o),e.child.memoizedState=Mh(o),e.memoizedState=Eh,s);if(!(e.mode&1))return fl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=nf(s,i,void 0),fl(t,e,o,i)}if(a=(o&t.childLanes)!==0,sn||a){if(i=It,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Oi(t,r),Kn(i,t,r,-1))}return mp(),i=nf(Error(re(421))),fl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=sM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,vn=ur(r.nextSibling),yn=e,at=!0,Wn=null,t!==null&&(Cn[Rn++]=Ri,Cn[Rn++]=bi,Cn[Rn++]=Zr,Ri=t.id,bi=t.overflow,Zr=e),e=cp(e,i.children),e.flags|=4096,e)}function Qm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),gh(t.return,e,n)}function rf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Nv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qm(t,n,e);else if(t.tag===19)Qm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Dc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),rf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Dc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}rf(e,!0,n,null,s);break;case"together":rf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function YE(t,e,n){switch(e.tag){case 3:Pv(e),ao();break;case 5:sv(e);break;case 1:ln(e.type)&&Cc(e);break;case 4:tp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(Pc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?Lv(t,e,n):(nt(lt,lt.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);nt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Nv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,Rv(t,e,n)}return Fi(t,e,n)}var Dv,Ah,Iv,Uv;Dv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ah=function(){};Iv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Gr(ci.current);var s=null;switch(n){case"input":r=jf(t,r),i=jf(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=Kf(t,r),i=Kf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=wc)}Zf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(la.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(la.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Uv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Io(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qE(t,e,n){var i=e.pendingProps;switch(qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return ln(e.type)&&Tc(),Ht(e),null;case 3:return i=e.stateNode,co(),st(an),st(Yt),ip(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(cl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(Nh(Wn),Wn=null))),Ah(t,e),Ht(e),null;case 5:np(e);var r=Gr(xa.current);if(n=e.type,t!==null&&e.stateNode!=null)Iv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Ht(e),null}if(t=Gr(ci.current),cl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[oi]=e,i[va]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Xo.length;r++)it(Xo[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":am(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":cm(i,s),it("invalid",i)}Zf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ll(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ll(i.textContent,a,t),r=["children",""+a]):la.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":el(i),lm(i,s,!0);break;case"textarea":el(i),um(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=l_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[oi]=e,t[va]=i,Dv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qf(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Xo.length;r++)it(Xo[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":am(t,i),r=jf(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),it("invalid",t);break;case"textarea":cm(t,i),r=Kf(t,i),it("invalid",t);break;default:r=i}Zf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?f_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&c_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ca(t,l):typeof l=="number"&&ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(la.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&Dd(t,s,l,o))}switch(n){case"input":el(t),lm(t,i,!1);break;case"textarea":el(t),um(t);break;case"option":i.value!=null&&t.setAttribute("value",""+_r(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=wc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)Uv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Gr(xa.current),Gr(ci.current),cl(e)){if(i=e.stateNode,n=e.memoizedProps,i[oi]=e,(s=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:ll(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ll(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return Ht(e),null;case 13:if(st(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&vn!==null&&e.mode&1&&!(e.flags&128))Q_(),ao(),e.flags|=98560,s=!1;else if(s=cl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[oi]=e}else ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else Wn!==null&&(Nh(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?Ct===0&&(Ct=3):mp())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return co(),Ah(t,e),t===null&&ga(e.stateNode.containerInfo),Ht(e),null;case 10:return Qd(e.type._context),Ht(e),null;case 17:return ln(e.type)&&Tc(),Ht(e),null;case 19:if(st(lt),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Io(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Dc(t),o!==null){for(e.flags|=128,Io(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>fo&&(e.flags|=128,i=!0,Io(s,!1),e.lanes=4194304)}else{if(!i)if(t=Dc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return Ht(e),null}else 2*vt()-s.renderingStartTime>fo&&n!==1073741824&&(e.flags|=128,i=!0,Io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=lt.current,nt(lt,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return pp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function KE(t,e){switch(qd(e),e.tag){case 1:return ln(e.type)&&Tc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return co(),st(an),st(Yt),ip(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return np(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));ao()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return co(),null;case 10:return Qd(e.type._context),null;case 22:case 23:return pp(),null;case 24:return null;default:return null}}var hl=!1,Xt=!1,$E=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function wh(t,e,n){try{n()}catch(i){gt(t,e,i)}}var Jm=!1;function ZE(t,e){if(lh=Ec,t=B_(),jd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ch={focusedElem:t,selectionRange:n},Ec=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,g=m.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:Hn(e.type,y),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(E){gt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return m=Jm,Jm=!1,m}function ia(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&wh(e,n,s)}r=r.next}while(r!==i)}}function fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Th(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ov(t){var e=t.alternate;e!==null&&(t.alternate=null,Ov(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oi],delete e[va],delete e[hh],delete e[DE],delete e[IE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fv(t){return t.tag===5||t.tag===3||t.tag===4}function eg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ch(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wc));else if(i!==4&&(t=t.child,t!==null))for(Ch(t,e,n),t=t.sibling;t!==null;)Ch(t,e,n),t=t.sibling}function Rh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}var Ft=null,Vn=!1;function Xi(t,e,n){for(n=n.child;n!==null;)kv(t,e,n),n=n.sibling}function kv(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(iu,n)}catch{}switch(n.tag){case 5:Xt||Gs(n,e);case 6:var i=Ft,r=Vn;Ft=null,Xi(t,e,n),Ft=i,Vn=r,Ft!==null&&(Vn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(Vn?(t=Ft,n=n.stateNode,t.nodeType===8?$u(t.parentNode,n):t.nodeType===1&&$u(t,n),da(t)):$u(Ft,n.stateNode));break;case 4:i=Ft,r=Vn,Ft=n.stateNode.containerInfo,Vn=!0,Xi(t,e,n),Ft=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wh(n,e,o),r=r.next}while(r!==i)}Xi(t,e,n);break;case 1:if(!Xt&&(Gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}Xi(t,e,n);break;case 21:Xi(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Xi(t,e,n),Xt=i):Xi(t,e,n);break;default:Xi(t,e,n)}}function tg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $E),e.forEach(function(i){var r=oM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,Vn=!1;break e;case 3:Ft=a.stateNode.containerInfo,Vn=!0;break e;case 4:Ft=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(Ft===null)throw Error(re(160));kv(s,o,r),Ft=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Bv(e,t),e=e.sibling}function Bv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),ei(t),i&4){try{ia(3,t,t.return),fu(3,t)}catch(y){gt(t,t.return,y)}try{ia(5,t,t.return)}catch(y){gt(t,t.return,y)}}break;case 1:Fn(e,t),ei(t),i&512&&n!==null&&Gs(n,n.return);break;case 5:if(Fn(e,t),ei(t),i&512&&n!==null&&Gs(n,n.return),t.flags&32){var r=t.stateNode;try{ca(r,"")}catch(y){gt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&o_(r,s),Qf(a,o);var c=Qf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?f_(r,d):u==="dangerouslySetInnerHTML"?c_(r,d):u==="children"?ca(r,d):Dd(r,u,d,c)}switch(a){case"input":Yf(r,s);break;case"textarea":a_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ks(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ks(r,!!s.multiple,s.defaultValue,!0):Ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[va]=s}catch(y){gt(t,t.return,y)}}break;case 6:if(Fn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){gt(t,t.return,y)}}break;case 3:if(Fn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{da(e.containerInfo)}catch(y){gt(t,t.return,y)}break;case 4:Fn(e,t),ei(t);break;case 13:Fn(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(hp=vt())),i&4&&tg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||u,Fn(e,t),Xt=c):Fn(e,t),ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ge=t,u=t.child;u!==null;){for(d=ge=u;ge!==null;){switch(f=ge,p=f.child,f.tag){case 0:case 11:case 14:case 15:ia(4,f,f.return);break;case 1:Gs(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){gt(i,n,y)}}break;case 5:Gs(f,f.return);break;case 22:if(f.memoizedState!==null){ig(d);continue}}p!==null?(p.return=f,ge=p):ig(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=u_("display",o))}catch(y){gt(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){gt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Fn(e,t),ei(t),i&4&&tg(t);break;case 21:break;default:Fn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fv(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ca(r,""),i.flags&=-33);var s=eg(t);Rh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=eg(t);Ch(t,a,o);break;default:throw Error(re(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QE(t,e,n){ge=t,zv(t)}function zv(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||hl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=hl;var c=Xt;if(hl=o,(Xt=l)&&!c)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?rg(r):l!==null?(l.return=o,ge=l):rg(r);for(;s!==null;)ge=s,zv(s),s=s.sibling;ge=r,hl=a,Xt=c}ng(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):ng(t)}}function ng(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||fu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&da(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Xt||e.flags&512&&Th(e)}catch(f){gt(e,e.return,f)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function ig(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function rg(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fu(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{Th(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{Th(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var JE=Math.ceil,Oc=Hi.ReactCurrentDispatcher,up=Hi.ReactCurrentOwner,Dn=Hi.ReactCurrentBatchConfig,je=0,It=null,Et=null,kt=0,_n=0,Ws=Sr(0),Ct=0,Aa=null,Jr=0,hu=0,fp=0,ra=null,rn=null,hp=0,fo=1/0,Ai=null,Fc=!1,bh=null,hr=null,dl=!1,or=null,kc=0,sa=0,Ph=null,nc=-1,ic=0;function Jt(){return je&6?vt():nc!==-1?nc:nc=vt()}function dr(t){return t.mode&1?je&2&&kt!==0?kt&-kt:OE.transition!==null?(ic===0&&(ic=M_()),ic):(t=et,t!==0||(t=window.event,t=t===void 0?16:P_(t.type)),t):1}function Kn(t,e,n,i){if(50<sa)throw sa=0,Ph=null,Error(re(185));Na(t,n,i),(!(je&2)||t!==It)&&(t===It&&(!(je&2)&&(hu|=n),Ct===4&&ir(t,kt)),cn(t,i),n===1&&je===0&&!(e.mode&1)&&(fo=vt()+500,lu&&Er()))}function cn(t,e){var n=t.callbackNode;OS(t,e);var i=Sc(t,t===It?kt:0);if(i===0)n!==null&&dm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&dm(n),e===1)t.tag===0?UE(sg.bind(null,t)):K_(sg.bind(null,t)),LE(function(){!(je&6)&&Er()}),n=null;else{switch(A_(i)){case 1:n=kd;break;case 4:n=S_;break;case 16:n=xc;break;case 536870912:n=E_;break;default:n=xc}n=qv(n,Hv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hv(t,e){if(nc=-1,ic=0,je&6)throw Error(re(327));var n=t.callbackNode;if(eo()&&t.callbackNode!==n)return null;var i=Sc(t,t===It?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Bc(t,i);else{e=i;var r=je;je|=2;var s=Gv();(It!==t||kt!==e)&&(Ai=null,fo=vt()+500,Yr(t,e));do try{nM();break}catch(a){Vv(t,a)}while(!0);Zd(),Oc.current=s,je=r,Et!==null?e=0:(It=null,kt=0,e=Ct)}if(e!==0){if(e===2&&(r=ih(t),r!==0&&(i=r,e=Lh(t,r))),e===1)throw n=Aa,Yr(t,0),ir(t,i),cn(t,vt()),n;if(e===6)ir(t,i);else{if(r=t.current.alternate,!(i&30)&&!eM(r)&&(e=Bc(t,i),e===2&&(s=ih(t),s!==0&&(i=s,e=Lh(t,s))),e===1))throw n=Aa,Yr(t,0),ir(t,i),cn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Or(t,rn,Ai);break;case 3:if(ir(t,i),(i&130023424)===i&&(e=hp+500-vt(),10<e)){if(Sc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=fh(Or.bind(null,t,rn,Ai),e);break}Or(t,rn,Ai);break;case 4:if(ir(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*JE(i/1960))-i,10<i){t.timeoutHandle=fh(Or.bind(null,t,rn,Ai),i);break}Or(t,rn,Ai);break;case 5:Or(t,rn,Ai);break;default:throw Error(re(329))}}}return cn(t,vt()),t.callbackNode===n?Hv.bind(null,t):null}function Lh(t,e){var n=ra;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=Bc(t,e),t!==2&&(e=rn,rn=n,e!==null&&Nh(e)),t}function Nh(t){rn===null?rn=t:rn.push.apply(rn,t)}function eM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~fp,e&=~hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function sg(t){if(je&6)throw Error(re(327));eo();var e=Sc(t,0);if(!(e&1))return cn(t,vt()),null;var n=Bc(t,e);if(t.tag!==0&&n===2){var i=ih(t);i!==0&&(e=i,n=Lh(t,i))}if(n===1)throw n=Aa,Yr(t,0),ir(t,e),cn(t,vt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,rn,Ai),cn(t,vt()),null}function dp(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(fo=vt()+500,lu&&Er())}}function es(t){or!==null&&or.tag===0&&!(je&6)&&eo();var e=je;je|=1;var n=Dn.transition,i=et;try{if(Dn.transition=null,et=1,t)return t()}finally{et=i,Dn.transition=n,je=e,!(je&6)&&Er()}}function pp(){_n=Ws.current,st(Ws)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,PE(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(qd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Tc();break;case 3:co(),st(an),st(Yt),ip();break;case 5:np(i);break;case 4:co();break;case 13:st(lt);break;case 19:st(lt);break;case 10:Qd(i.type._context);break;case 22:case 23:pp()}n=n.return}if(It=t,Et=t=pr(t.current,null),kt=_n=e,Ct=0,Aa=null,fp=hu=Jr=0,rn=ra=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Vr=null}return t}function Vv(t,e){do{var n=Et;try{if(Zd(),Jl.current=Uc,Ic){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ic=!1}if(Qr=0,Nt=Tt=ut=null,na=!1,Sa=0,up.current=null,n===null||n.return===null){Ct=1,Aa=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=jm(o);if(p!==null){p.flags&=-257,Ym(p,o,a,s,e),p.mode&1&&Xm(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var y=new Set;y.add(l),e.updateQueue=y}else m.add(l);break e}else{if(!(e&1)){Xm(s,c,e),mp();break e}l=Error(re(426))}}else if(at&&a.mode&1){var g=jm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Ym(g,o,a,s,e),Kd(uo(l,a));break e}}s=l=uo(l,a),Ct!==4&&(Ct=2),ra===null?ra=[s]:ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=wv(s,l,e);km(s,h);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(hr===null||!hr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Tv(s,a,e);km(s,E);break e}}s=s.return}while(s!==null)}Xv(n)}catch(R){e=R,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function Gv(){var t=Oc.current;return Oc.current=Uc,t===null?Uc:t}function mp(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),It===null||!(Jr&268435455)&&!(hu&268435455)||ir(It,kt)}function Bc(t,e){var n=je;je|=2;var i=Gv();(It!==t||kt!==e)&&(Ai=null,Yr(t,e));do try{tM();break}catch(r){Vv(t,r)}while(!0);if(Zd(),je=n,Oc.current=i,Et!==null)throw Error(re(261));return It=null,kt=0,Ct}function tM(){for(;Et!==null;)Wv(Et)}function nM(){for(;Et!==null&&!CS();)Wv(Et)}function Wv(t){var e=Yv(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?Xv(t):Et=e,up.current=null}function Xv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=KE(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,Et=null;return}}else if(n=qE(n,e,_n),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);Ct===0&&(Ct=5)}function Or(t,e,n){var i=et,r=Dn.transition;try{Dn.transition=null,et=1,iM(t,e,n,i)}finally{Dn.transition=r,et=i}return null}function iM(t,e,n,i){do eo();while(or!==null);if(je&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(FS(t,s),t===It&&(Et=It=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,qv(xc,function(){return eo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=et;et=1;var a=je;je|=4,up.current=null,ZE(t,n),Bv(n,t),ME(ch),Ec=!!lh,ch=lh=null,t.current=n,QE(n),RS(),je=a,et=o,Dn.transition=s}else t.current=n;if(dl&&(dl=!1,or=t,kc=r),s=t.pendingLanes,s===0&&(hr=null),LS(n.stateNode),cn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Fc)throw Fc=!1,t=bh,bh=null,t;return kc&1&&t.tag!==0&&eo(),s=t.pendingLanes,s&1?t===Ph?sa++:(sa=0,Ph=t):sa=0,Er(),null}function eo(){if(or!==null){var t=A_(kc),e=Dn.transition,n=et;try{if(Dn.transition=null,et=16>t?16:t,or===null)var i=!1;else{if(t=or,or=null,kc=0,je&6)throw Error(re(331));var r=je;for(je|=4,ge=t.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ge=c;ge!==null;){var u=ge;switch(u.tag){case 0:case 11:case 15:ia(8,u,s)}var d=u.child;if(d!==null)d.return=u,ge=d;else for(;ge!==null;){u=ge;var f=u.sibling,p=u.return;if(Ov(u),u===c){ge=null;break}if(f!==null){f.return=p,ge=f;break}ge=p}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ia(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ge=h;break e}ge=s.return}}var v=t.current;for(ge=v;ge!==null;){o=ge;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ge=_;else e:for(o=v;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fu(9,a)}}catch(R){gt(a,a.return,R)}if(a===o){ge=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,ge=E;break e}ge=a.return}}if(je=r,Er(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(iu,t)}catch{}i=!0}return i}finally{et=n,Dn.transition=e}}return!1}function og(t,e,n){e=uo(n,e),e=wv(t,e,1),t=fr(t,e,1),e=Jt(),t!==null&&(Na(t,1,e),cn(t,e))}function gt(t,e,n){if(t.tag===3)og(t,t,n);else for(;e!==null;){if(e.tag===3){og(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(hr===null||!hr.has(i))){t=uo(n,t),t=Tv(e,t,1),e=fr(e,t,1),t=Jt(),e!==null&&(Na(e,1,t),cn(e,t));break}}e=e.return}}function rM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(kt&n)===n&&(Ct===4||Ct===3&&(kt&130023424)===kt&&500>vt()-hp?Yr(t,0):fp|=n),cn(t,e)}function jv(t,e){e===0&&(t.mode&1?(e=il,il<<=1,!(il&130023424)&&(il=4194304)):e=1);var n=Jt();t=Oi(t,e),t!==null&&(Na(t,e,n),cn(t,n))}function sM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jv(t,n)}function oM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),jv(t,n)}var Yv;Yv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,YE(t,e,n);sn=!!(t.flags&131072)}else sn=!1,at&&e.flags&1048576&&$_(e,bc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;tc(t,e),t=e.pendingProps;var r=oo(e,Yt.current);Js(e,n),r=sp(null,e,i,t,r,n);var s=op();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(i)?(s=!0,Cc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ep(e),r.updater=cu,e.stateNode=r,r._reactInternals=e,vh(e,i,t,n),e=Sh(null,e,i,!0,s,n)):(e.tag=0,at&&s&&Yd(e),Zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(tc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=lM(i),t=Hn(i,t),r){case 0:e=xh(null,e,i,t,n);break e;case 1:e=$m(null,e,i,t,n);break e;case 11:e=qm(null,e,i,t,n);break e;case 14:e=Km(null,e,i,Hn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),xh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),$m(t,e,i,r,n);case 3:e:{if(Pv(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ev(t,e),Nc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=uo(Error(re(423)),e),e=Zm(t,e,i,n,r);break e}else if(i!==r){r=uo(Error(re(424)),e),e=Zm(t,e,i,n,r);break e}else for(vn=ur(e.stateNode.containerInfo.firstChild),yn=e,at=!0,Wn=null,n=rv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ao(),i===r){e=Fi(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 5:return sv(e),t===null&&mh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,uh(i,r)?o=null:s!==null&&uh(i,s)&&(e.flags|=32),bv(t,e),Zt(t,e,o,n),e.child;case 6:return t===null&&mh(e),null;case 13:return Lv(t,e,n);case 4:return tp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=lo(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),qm(t,e,i,r,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(Pc,i._currentValue),i._currentValue=o,s!==null)if(Zn(s.value,o)){if(s.children===r.children&&!an.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ni(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Js(e,n),r=In(r),i=i(r),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),Km(t,e,i,r,n);case 15:return Cv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),tc(t,e),e.tag=1,ln(i)?(t=!0,Cc(e)):t=!1,Js(e,n),nv(e,i,r),vh(e,i,r,n),Sh(null,e,i,!0,t,n);case 19:return Nv(t,e,n);case 22:return Rv(t,e,n)}throw Error(re(156,e.tag))};function qv(t,e){return x_(t,e)}function aM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new aM(t,e,n,i)}function gp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lM(t){if(typeof t=="function")return gp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ud)return 11;if(t===Od)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")gp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Is:return qr(n.children,r,s,e);case Id:o=8,r|=8;break;case Vf:return t=Ln(12,n,e,r|2),t.elementType=Vf,t.lanes=s,t;case Gf:return t=Ln(13,n,e,r),t.elementType=Gf,t.lanes=s,t;case Wf:return t=Ln(19,n,e,r),t.elementType=Wf,t.lanes=s,t;case i_:return du(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case t_:o=10;break e;case n_:o=9;break e;case Ud:o=11;break e;case Od:o=14;break e;case Ji:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function qr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function du(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=i_,t.lanes=n,t.stateNode={isHidden:!1},t}function sf(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function of(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bu(0),this.expirationTimes=Bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _p(t,e,n,i,r,s,o,a,l){return t=new cM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ep(s),t}function uM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ds,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Kv(t){if(!t)return vr;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(ln(n))return q_(t,n,e)}return e}function $v(t,e,n,i,r,s,o,a,l){return t=_p(n,i,!0,t,r,s,o,a,l),t.context=Kv(null),n=t.current,i=Jt(),r=dr(n),s=Ni(i,r),s.callback=e??null,fr(n,s,r),t.current.lanes=r,Na(t,r,i),cn(t,i),t}function pu(t,e,n,i){var r=e.current,s=Jt(),o=dr(r);return n=Kv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ni(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=fr(r,e,o),t!==null&&(Kn(t,r,o,s),Ql(t,r,o)),o}function zc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ag(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vp(t,e){ag(t,e),(t=t.alternate)&&ag(t,e)}function fM(){return null}var Zv=typeof reportError=="function"?reportError:function(t){console.error(t)};function yp(t){this._internalRoot=t}mu.prototype.render=yp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));pu(t,e,null,null)};mu.prototype.unmount=yp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;es(function(){pu(null,t,null,null)}),e[Ui]=null}};function mu(t){this._internalRoot=t}mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=C_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&b_(t)}};function xp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lg(){}function hM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=zc(o);s.call(c)}}var o=$v(e,i,t,0,null,!1,!1,"",lg);return t._reactRootContainer=o,t[Ui]=o.current,ga(t.nodeType===8?t.parentNode:t),es(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=zc(l);a.call(c)}}var l=_p(t,0,!1,null,null,!1,!1,"",lg);return t._reactRootContainer=l,t[Ui]=l.current,ga(t.nodeType===8?t.parentNode:t),es(function(){pu(e,l,n,i)}),l}function _u(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=zc(o);a.call(l)}}pu(e,o,t,r)}else o=hM(n,e,t,r,i);return zc(o)}w_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wo(e.pendingLanes);n!==0&&(Bd(e,n|1),cn(e,vt()),!(je&6)&&(fo=vt()+500,Er()))}break;case 13:es(function(){var i=Oi(t,1);if(i!==null){var r=Jt();Kn(i,t,1,r)}}),vp(t,1)}};zd=function(t){if(t.tag===13){var e=Oi(t,134217728);if(e!==null){var n=Jt();Kn(e,t,134217728,n)}vp(t,134217728)}};T_=function(t){if(t.tag===13){var e=dr(t),n=Oi(t,e);if(n!==null){var i=Jt();Kn(n,t,e,i)}vp(t,e)}};C_=function(){return et};R_=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};eh=function(t,e,n){switch(e){case"input":if(Yf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=au(i);if(!r)throw Error(re(90));s_(i),Yf(i,r)}}}break;case"textarea":a_(t,n);break;case"select":e=n.value,e!=null&&Ks(t,!!n.multiple,e,!1)}};p_=dp;m_=es;var dM={usingClientEntryPoint:!1,Events:[Ia,ks,au,h_,d_,dp]},Uo={findFiberByHostInstance:Hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pM={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=v_(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||fM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{iu=pl.inject(pM),li=pl}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dM;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xp(e))throw Error(re(200));return uM(t,e,null,n)};Mn.createRoot=function(t,e){if(!xp(t))throw Error(re(299));var n=!1,i="",r=Zv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_p(t,1,!1,null,null,n,!1,i,r),t[Ui]=e.current,ga(t.nodeType===8?t.parentNode:t),new yp(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=v_(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return es(t)};Mn.hydrate=function(t,e,n){if(!gu(e))throw Error(re(200));return _u(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!xp(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Zv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$v(e,null,t,1,n??null,r,!1,s,o),t[Ui]=e.current,ga(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new mu(e)};Mn.render=function(t,e,n){if(!gu(e))throw Error(re(200));return _u(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!gu(t))throw Error(re(40));return t._reactRootContainer?(es(function(){_u(null,null,t,!1,function(){t._reactRootContainer=null,t[Ui]=null})}),!0):!1};Mn.unstable_batchedUpdates=dp;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!gu(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return _u(t,e,n,!1,i)};Mn.version="18.2.0-next-9e3b772b8-20220608";function Qv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qv)}catch(t){console.error(t)}}Qv(),$0.exports=Mn;var Jv=$0.exports,cg=Jv;zf.createRoot=cg.createRoot,zf.hydrateRoot=cg.hydrateRoot;function Di(){return Di=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Di.apply(this,arguments)}function ts(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function mM(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function gM(t){var e=mM(t,"string");return typeof e=="symbol"?e:String(e)}const Ti={NOT_LOADED:"NOT_LOADED",LOADING:"LOADING",LOADED:"LOADED",FAILED:"FAILED",AUTH_FAILURE:"AUTH_FAILURE"},_M="https://maps.googleapis.com/maps/api/js";class Hc{static async load(e,n){var i;const r=e.libraries?e.libraries.split(","):[],s=this.serializeParams(e);(i=window.google)!=null&&(i=i.maps)!=null&&i.importLibrary?(this.serializedApiParams||(this.loadingStatus=Ti.LOADED),n(this.loadingStatus)):(this.serializedApiParams=s,this.initImportLibrary(e,n)),this.serializedApiParams&&this.serializedApiParams!==s&&console.warn("The maps API has already been loaded with different parameters and will not be loaded again. Refresh the page for new values to have effect.");for(const o of["maps",...r])await google.maps.importLibrary(o)}static serializeParams(e){return[e.v,e.key,e.language,e.region,e.authReferrerPolicy,e.solutionChannel].join("/")}static initImportLibrary(e,n){if(window.google||(window.google={}),window.google.maps||(window.google.maps={}),window.google.maps.importLibrary){console.warn("initImportLibrary can only be called once.",e);return}let i=null;const r=s=>i||(i=new Promise((o,a)=>{var l;const c=document.createElement("script"),u=new URLSearchParams;for(const[d,f]of Object.entries(e)){const p=d.replace(/[A-Z]/g,m=>"_"+m[0].toLowerCase());u.set(p,f)}u.set("libraries",s),u.set("loading","async"),u.set("callback","__googleMapsCallback__"),c.async=!0,c.src=_M+"?"+u.toString(),window.__googleMapsCallback__=()=>{this.loadingStatus=Ti.LOADED,n(this.loadingStatus),o()},window.gm_authFailure=()=>{this.loadingStatus=Ti.AUTH_FAILURE,n(this.loadingStatus)},c.onerror=()=>{this.loadingStatus=Ti.FAILED,n(this.loadingStatus),a(new Error("The Google Maps JavaScript API could not load."))},c.nonce=((l=document.querySelector("script[nonce]"))==null?void 0:l.nonce)||"",this.loadingStatus=Ti.LOADING,n(this.loadingStatus),document.head.append(c)}),i);google.maps.importLibrary=s=>r(s).then(()=>google.maps.importLibrary(s))}}Hc.loadingStatus=Ti.NOT_LOADED;Hc.serializedApiParams=void 0;const vM=["onLoad","apiKey","version","libraries"],yM=["children"],Oa=Qt.createContext(null);function xM(){const[t,e]=le.useState({});return{mapInstances:t,addMapInstance:(s,o="default")=>{e(a=>Di({},a,{[o]:s}))},removeMapInstance:(s="default")=>{e(o=>ts(o,[s].map(gM)))},clearMapInstances:()=>{e({})}}}function SM(t){const{onLoad:e,apiKey:n,version:i,libraries:r=[]}=t,s=ts(t,vM),[o,a]=le.useState(Hc.loadingStatus),[l,c]=le.useReducer((p,m)=>Di({},p,{[m.name]:m.value}),{}),u=le.useMemo(()=>r==null?void 0:r.join(","),[r]),d=le.useMemo(()=>JSON.stringify(Di({apiKey:n,version:i},s)),[n,i,s]),f=le.useCallback(async p=>{var m;if(l[p])return l[p];if(!((m=google)!=null&&(m=m.maps)!=null&&m.importLibrary))throw new Error("[api-provider-internal] importLibrary was called before google.maps.importLibrary was defined.");const y=await window.google.maps.importLibrary(p);return c({name:p,value:y}),y},[l]);return le.useEffect(()=>{(async()=>{try{const p=Di({key:n},s);i&&(p.v=i),(u==null?void 0:u.length)>0&&(p.libraries=u),await Hc.load(p,m=>a(m));for(const m of["core","maps",...r])await f(m);e&&e()}catch(p){console.error("<ApiProvider> failed to load Google Maps API",p)}})()},[n,u,d]),{status:o,loadedLibraries:l,importLibrary:f}}const EM=t=>{const{children:e}=t,n=ts(t,yM),{mapInstances:i,addMapInstance:r,removeMapInstance:s,clearMapInstances:o}=xM(),{status:a,loadedLibraries:l,importLibrary:c}=SM(n);return Qt.createElement(Oa.Provider,{value:{mapInstances:i,addMapInstance:r,removeMapInstance:s,clearMapInstances:o,status:a,loadedLibraries:l,importLibrary:c}},e)};function ey(){var t;return((t=le.useContext(Oa))==null?void 0:t.status)||Ti.NOT_LOADED}function ty(){return ey()===Ti.LOADED}const ug=new Set;function ny(...t){const e=JSON.stringify(t);ug.has(e)||(ug.add(e),console.error(...t))}function MM(){const[t,e]=le.useState(null),n=le.useCallback(i=>e(i),[e]);return[t,n]}function AM(){return le.useRef({center:{lat:0,lng:0},heading:0,tilt:0,zoom:0})}function wM(t,e){const n=t;if(!n.detail.center)return;const{center:i,zoom:r,heading:s,tilt:o}=n.detail;e.current.center=i,e.current.heading=s,e.current.tilt=o,e.current.zoom=r}function TM(t,e,n){for(const i of PM){const r=n[i],s=iy[i];le.useEffect(()=>{if(!t||!r)return;const o=google.maps.event.addListener(t,s,a=>{const l=CM(s,t,a);wM(l,e),r(l)});return()=>o.remove()},[t,e,s,r])}}function CM(t,e,n){const i={type:t,map:e,detail:{},stoppable:!1,stop:()=>{}};if(RM.includes(t)){const s=i,o=e.getCenter(),a=e.getZoom(),l=e.getHeading()||0,c=e.getTilt()||0,u=e.getBounds();return(!o||!u||!Number.isFinite(a))&&console.warn("[createEvent] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),s.detail={center:(o==null?void 0:o.toJSON())||{lat:0,lng:0},zoom:a,heading:l,tilt:c,bounds:(u==null?void 0:u.toJSON())||{north:90,east:180,south:-90,west:-180}},s}else if(bM.includes(t)){var r;if(!n)throw new Error("[createEvent] mouse events must provide a srcEvent");const s=i;return s.domEvent=n.domEvent,s.stoppable=!0,s.stop=()=>n.stop(),s.detail={latLng:((r=n.latLng)==null?void 0:r.toJSON())||null,placeId:n.placeId},s}return i}const iy={onBoundsChanged:"bounds_changed",onCenterChanged:"center_changed",onClick:"click",onContextmenu:"contextmenu",onDblclick:"dblclick",onDrag:"drag",onDragend:"dragend",onDragstart:"dragstart",onHeadingChanged:"heading_changed",onIdle:"idle",onIsFractionalZoomEnabledChanged:"isfractionalzoomenabled_changed",onMapCapabilitiesChanged:"mapcapabilities_changed",onMapTypeIdChanged:"maptypeid_changed",onMousemove:"mousemove",onMouseout:"mouseout",onMouseover:"mouseover",onProjectionChanged:"projection_changed",onRenderingTypeChanged:"renderingtype_changed",onTilesLoaded:"tilesloaded",onTiltChanged:"tilt_changed",onZoomChanged:"zoom_changed"},RM=["bounds_changed","center_changed","heading_changed","projection_changed","tilt_changed","zoom_changed"],bM=["click","contextmenu","dblclick","mousemove","mouseout","mouseover"],PM=Object.keys(iy);function LM(t){return!t||typeof t!="object"||!("lat"in t&&"lng"in t)?!1:Number.isFinite(t.lat)&&Number.isFinite(t.lng)}const NM=["center","zoom","heading","tilt"],DM=["mapId"];function IM(t,e,n){const{center:i,zoom:r,heading:s,tilt:o}=n,a=ts(n,NM),l=i?LM(i)?i:i.toJSON():null,c=l&&l.lat,u=l&&l.lng;le.useEffect(()=>{if(!t)return;const d=ts(a,DM);t.setOptions(d)},[a]),le.useLayoutEffect(()=>{!t||!Number.isFinite(c)||!Number.isFinite(u)||e.current.center.lat===c&&e.current.center.lng===u||t.moveCamera({center:{lat:c,lng:u}})},[c,u]),le.useLayoutEffect(()=>{!t||!Number.isFinite(r)||e.current.zoom!==r&&t.moveCamera({zoom:r})},[r]),le.useLayoutEffect(()=>{!t||!Number.isFinite(s)||e.current.heading!==s&&t.moveCamera({heading:s})},[s]),le.useLayoutEffect(()=>{!t||!Number.isFinite(o)||e.current.tilt!==o&&t.moveCamera({tilt:o})},[o])}function UM(t,e){le.useLayoutEffect(()=>{if(!t||!e)return;t.setOptions({gestureHandling:"none",keyboardShortcuts:!1,disableDefaultUI:!0});const{latitude:n,longitude:i,bearing:r,pitch:s,zoom:o}=e;t.moveCamera({center:{lat:n,lng:i},heading:r,tilt:s,zoom:o+1})},[t,e])}const OM=["id","initialBounds"],vu=Qt.createContext(null),ry=t=>{const{children:e,id:n,className:i,style:r,viewState:s,viewport:o}=t,a=le.useContext(Oa),l=ey();if(!a)throw new Error("<Map> can only be used inside an <ApiProvider> component.");const[c,u]=kM(t,a),d=AM();IM(c,d,t),TM(c,d,t),UM(c,s);const f=le.useMemo(()=>!!o,[o]),p=le.useMemo(()=>Di({width:"100%",height:"100%",zIndex:f?-1:0},r),[r,f]);return l===Ti.AUTH_FAILURE?Qt.createElement("div",{style:Di({position:"relative"},i?{}:p),className:i},Qt.createElement(FM,null)):Qt.createElement("div",Di({ref:u,"data-testid":"map",style:i?void 0:p,className:i},n?{id:n}:{}),c?Qt.createElement(vu.Provider,{value:{map:c}},e):null)};ry.deckGLViewProps=!0;const FM=()=>{const t={position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:999,display:"flex",flexFlow:"column nowrap",textAlign:"center",justifyContent:"center",fontSize:".8rem",color:"rgba(0,0,0,0.6)",background:"#dddddd",padding:"1rem 1.5rem"};return Qt.createElement("div",{style:t},Qt.createElement("h2",null,"Error: AuthFailure"),Qt.createElement("p",null,"A problem with your API key prevents the map from rendering correctly. Please make sure the value of the ",Qt.createElement("code",null,"APIProvider.apiKey")," prop is correct. Check the error-message in the console for further details."))};function kM(t,e){const n=ty(),[i,r]=le.useState(null),[s,o]=MM(),{id:a,initialBounds:l}=t,c=ts(t,OM);return le.useEffect(()=>{if(!s||!n)return;const{addMapInstance:u,removeMapInstance:d}=e,f=new google.maps.Map(s,c);return r(f),u(f,a),l&&f.fitBounds(l),()=>{!s||!n||(google.maps.event.clearInstanceListeners(f),r(null),d(a))}},[a,s,n,t.mapId]),le.useEffect(()=>{if(!a)return;const{mapInstances:u}=e;u[a]&&u[a]!==i&&ny(`The map id '${a}' seems to have been used multiple times. This can lead to unexpected problems when accessing the maps. Please use unique ids for all <Map> components.`)},[a,e,i]),[i,o]}function BM(t){const e=ty(),n=le.useContext(Oa);return le.useEffect(()=>{!e||!n||n.importLibrary(t)},[e,n,t]),(n==null?void 0:n.loadedLibraries[t])||null}const zM=Qt.createContext(null);function HM(t){var e;const[n,i]=le.useState(null),[r,s]=le.useState(null),o=(e=le.useContext(vu))==null?void 0:e.map,a=BM("marker"),{children:l,className:c,onClick:u,onDrag:d,onDragStart:f,onDragEnd:p,collisionBehavior:m,draggable:y,position:g,title:h,zIndex:v}=t,_=le.Children.count(l);return le.useEffect(()=>{if(!o||!a)return;const E=new a.AdvancedMarkerElement;if(E.map=o,i(E),_>0){const R=document.createElement("div");c&&(R.className=c),E.content=R,s(R)}return()=>{E.map=null,i(null),s(null)}},[o,a,_]),le.useEffect(()=>{r&&(r.className=c??"")},[r,c]),le.useEffect(()=>{if(!n)return;const E=google.maps.event;u&&E.addListener(n,"click",u),d&&E.addListener(n,"drag",d),f&&E.addListener(n,"dragstart",f),p&&E.addListener(n,"dragend",p),(d||f||p)&&!y&&console.warn("You need to set the marker to draggable to listen to drag-events.");const R=n;return()=>{E.clearInstanceListeners(R)}},[n,y,u,f,d,p]),le.useEffect(()=>{n&&(g!==void 0&&(n.position=g),y!==void 0&&(n.gmpDraggable=y),m!==void 0&&(n.collisionBehavior=m),v!==void 0&&(n.zIndex=v),typeof h=="string"&&(n.title=h))},[n,g,y,m,v,h]),[n,r]}const VM=le.forwardRef((t,e)=>{const{children:n}=t,[i,r]=HM(t);return le.useImperativeHandle(e,()=>i,[i]),i?Qt.createElement(zM.Provider,{value:{marker:i}},r!==null&&Jv.createPortal(n,r)):null});function GM(){const[t,e]=le.useState(null);return[le.useCallback(i=>{e(i)},[]),t]}const sy=(t=null)=>{const e=le.useContext(Oa),{map:n}=le.useContext(vu)||{};if(e===null)return ny("useMap(): failed to retrieve APIProviderContext. Make sure that the <APIProvider> component exists and that the component you are calling `useMap()` from is a sibling of the <APIProvider>."),null;const{mapInstances:i}=e;return t!==null?i[t]||null:n||i.default||null},WM=["onClick","onDrag","onDragStart","onDragEnd","onMouseOver","onMouseOut"];function XM(t){var e;const[n,i]=le.useState(null),r=(e=le.useContext(vu))==null?void 0:e.map,{onClick:s,onDrag:o,onDragStart:a,onDragEnd:l,onMouseOver:c,onMouseOut:u}=t,d=ts(t,WM),{position:f,draggable:p}=d;return le.useEffect(()=>{if(!r){r===void 0&&console.error("<Marker> has to be inside a Map component.");return}const m=new google.maps.Marker(d);return m.setMap(r),i(m),()=>{m.setMap(null),i(null)}},[r]),le.useEffect(()=>{if(!n)return;const m=n,y=google.maps.event;return s&&y.addListener(m,"click",s),o&&y.addListener(m,"drag",o),a&&y.addListener(m,"dragstart",a),l&&y.addListener(m,"dragend",l),c&&y.addListener(m,"mouseover",c),u&&y.addListener(m,"mouseout",u),n.setDraggable(!!p),()=>{y.clearInstanceListeners(m)}},[n,p,s,o,a,l,c,u]),le.useEffect(()=>{n&&d&&n.setOptions(d)},[n,d]),le.useEffect(()=>{p||!f||!n||n.setPosition(f)},[p,f,n]),n}le.forwardRef((t,e)=>{const n=XM(t);return le.useImperativeHandle(e,()=>n,[n]),Qt.createElement(Qt.Fragment,null)});const Sp=le.createContext({vehicleData:[]}),pi=Object.create(null);pi.open="0";pi.close="1";pi.ping="2";pi.pong="3";pi.message="4";pi.upgrade="5";pi.noop="6";const sc=Object.create(null);Object.keys(pi).forEach(t=>{sc[pi[t]]=t});const Dh={type:"error",data:"parser error"},oy=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",ay=typeof ArrayBuffer=="function",ly=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Ep=({type:t,data:e},n,i)=>oy&&e instanceof Blob?n?i(e):fg(e,i):ay&&(e instanceof ArrayBuffer||ly(e))?n?i(e):fg(new Blob([e]),i):i(pi[t]+(e||"")),fg=(t,e)=>{const n=new FileReader;return n.onload=function(){const i=n.result.split(",")[1];e("b"+(i||""))},n.readAsDataURL(t)};function hg(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let af;function jM(t,e){if(oy&&t.data instanceof Blob)return t.data.arrayBuffer().then(hg).then(e);if(ay&&(t.data instanceof ArrayBuffer||ly(t.data)))return e(hg(t.data));Ep(t,!1,n=>{af||(af=new TextEncoder),e(af.encode(n))})}const dg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",jo=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<dg.length;t++)jo[dg.charCodeAt(t)]=t;const YM=t=>{let e=t.length*.75,n=t.length,i,r=0,s,o,a,l;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const c=new ArrayBuffer(e),u=new Uint8Array(c);for(i=0;i<n;i+=4)s=jo[t.charCodeAt(i)],o=jo[t.charCodeAt(i+1)],a=jo[t.charCodeAt(i+2)],l=jo[t.charCodeAt(i+3)],u[r++]=s<<2|o>>4,u[r++]=(o&15)<<4|a>>2,u[r++]=(a&3)<<6|l&63;return c},qM=typeof ArrayBuffer=="function",Mp=(t,e)=>{if(typeof t!="string")return{type:"message",data:cy(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:KM(t.substring(1),e)}:sc[n]?t.length>1?{type:sc[n],data:t.substring(1)}:{type:sc[n]}:Dh},KM=(t,e)=>{if(qM){const n=YM(t);return cy(n,e)}else return{base64:!0,data:t}},cy=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},uy="",$M=(t,e)=>{const n=t.length,i=new Array(n);let r=0;t.forEach((s,o)=>{Ep(s,!1,a=>{i[o]=a,++r===n&&e(i.join(uy))})})},ZM=(t,e)=>{const n=t.split(uy),i=[];for(let r=0;r<n.length;r++){const s=Mp(n[r],e);if(i.push(s),s.type==="error")break}return i};function QM(){return new TransformStream({transform(t,e){jM(t,n=>{const i=n.length;let r;if(i<126)r=new Uint8Array(1),new DataView(r.buffer).setUint8(0,i);else if(i<65536){r=new Uint8Array(3);const s=new DataView(r.buffer);s.setUint8(0,126),s.setUint16(1,i)}else{r=new Uint8Array(9);const s=new DataView(r.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(i))}t.data&&typeof t.data!="string"&&(r[0]|=128),e.enqueue(r),e.enqueue(n)})}})}let lf;function ml(t){return t.reduce((e,n)=>e+n.length,0)}function gl(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let i=0;for(let r=0;r<e;r++)n[r]=t[0][i++],i===t[0].length&&(t.shift(),i=0);return t.length&&i<t[0].length&&(t[0]=t[0].slice(i)),n}function JM(t,e){lf||(lf=new TextDecoder);const n=[];let i=0,r=-1,s=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(i===0){if(ml(n)<1)break;const l=gl(n,1);s=(l[0]&128)===128,r=l[0]&127,r<126?i=3:r===126?i=1:i=2}else if(i===1){if(ml(n)<2)break;const l=gl(n,2);r=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),i=3}else if(i===2){if(ml(n)<8)break;const l=gl(n,8),c=new DataView(l.buffer,l.byteOffset,l.length),u=c.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(Dh);break}r=u*Math.pow(2,32)+c.getUint32(4),i=3}else{if(ml(n)<r)break;const l=gl(n,r);a.enqueue(Mp(s?l:lf.decode(l),e)),i=0}if(r===0||r>t){a.enqueue(Dh);break}}}})}const fy=4;function Mt(t){if(t)return eA(t)}function eA(t){for(var e in Mt.prototype)t[e]=Mt.prototype[e];return t}Mt.prototype.on=Mt.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};Mt.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};Mt.prototype.off=Mt.prototype.removeListener=Mt.prototype.removeAllListeners=Mt.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var i,r=0;r<n.length;r++)if(i=n[r],i===e||i.fn===e){n.splice(r,1);break}return n.length===0&&delete this._callbacks["$"+t],this};Mt.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(n){n=n.slice(0);for(var i=0,r=n.length;i<r;++i)n[i].apply(this,e)}return this};Mt.prototype.emitReserved=Mt.prototype.emit;Mt.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};Mt.prototype.hasListeners=function(t){return!!this.listeners(t).length};const bn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function hy(t,...e){return e.reduce((n,i)=>(t.hasOwnProperty(i)&&(n[i]=t[i]),n),{})}const tA=bn.setTimeout,nA=bn.clearTimeout;function yu(t,e){e.useNativeTimers?(t.setTimeoutFn=tA.bind(bn),t.clearTimeoutFn=nA.bind(bn)):(t.setTimeoutFn=bn.setTimeout.bind(bn),t.clearTimeoutFn=bn.clearTimeout.bind(bn))}const iA=1.33;function rA(t){return typeof t=="string"?sA(t):Math.ceil((t.byteLength||t.size)*iA)}function sA(t){let e=0,n=0;for(let i=0,r=t.length;i<r;i++)e=t.charCodeAt(i),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(i++,n+=4);return n}function oA(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function aA(t){let e={},n=t.split("&");for(let i=0,r=n.length;i<r;i++){let s=n[i].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class lA extends Error{constructor(e,n,i){super(e),this.description=n,this.context=i,this.type="TransportError"}}class Ap extends Mt{constructor(e){super(),this.writable=!1,yu(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,n,i){return super.emitReserved("error",new lA(e,n,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Mp(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=oA(e);return n.length?"?"+n:""}}const dy="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),Ih=64,cA={};let pg=0,_l=0,mg;function gg(t){let e="";do e=dy[t%Ih]+e,t=Math.floor(t/Ih);while(t>0);return e}function py(){const t=gg(+new Date);return t!==mg?(pg=0,mg=t):t+"."+gg(pg++)}for(;_l<Ih;_l++)cA[dy[_l]]=_l;let my=!1;try{my=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const uA=my;function gy(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||uA))return new XMLHttpRequest}catch{}if(!e)try{return new bn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function fA(){}const hA=function(){return new gy({xdomain:!1}).responseType!=null}();class dA extends Ap{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const i=location.protocol==="https:";let r=location.port;r||(r=i?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}const n=e&&e.forceBase64;this.supportsBinary=hA&&!n,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let i=0;this.polling&&(i++,this.once("pollComplete",function(){--i||n()})),this.writable||(i++,this.once("drain",function(){--i||n()}))}else n()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};ZM(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,$M(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=py()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new ui(this.uri(),e)}doWrite(e,n){const i=this.request({method:"POST",data:e});i.on("success",n),i.on("error",(r,s)=>{this.onError("xhr post error",r,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,i)=>{this.onError("xhr poll error",n,i)}),this.pollXhr=e}}class ui extends Mt{constructor(e,n){super(),yu(this,n),this.opts=n,this.method=n.method||"GET",this.uri=e,this.data=n.data!==void 0?n.data:null,this.create()}create(){var e;const n=hy(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this.opts.xd;const i=this.xhr=new gy(n);try{i.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let r in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(r)&&i.setRequestHeader(r,this.opts.extraHeaders[r])}}catch{}if(this.method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(i),"withCredentials"in i&&(i.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(i.timeout=this.opts.requestTimeout),i.onreadystatechange=()=>{var r;i.readyState===3&&((r=this.opts.cookieJar)===null||r===void 0||r.parseCookies(i)),i.readyState===4&&(i.status===200||i.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof i.status=="number"?i.status:0)},0))},i.send(this.data)}catch(r){this.setTimeoutFn(()=>{this.onError(r)},0);return}typeof document<"u"&&(this.index=ui.requestsCount++,ui.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=fA,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete ui.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}ui.requestsCount=0;ui.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",_g);else if(typeof addEventListener=="function"){const t="onpagehide"in bn?"pagehide":"unload";addEventListener(t,_g,!1)}}function _g(){for(let t in ui.requests)ui.requests.hasOwnProperty(t)&&ui.requests[t].abort()}const wp=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0),vl=bn.WebSocket||bn.MozWebSocket,vg=!0,pA="arraybuffer",yg=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class mA extends Ap{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),n=this.opts.protocols,i=yg?{}:hy(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=vg&&!yg?n?new vl(e,n):new vl(e):new vl(e,n,i)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const i=e[n],r=n===e.length-1;Ep(i,this.supportsBinary,s=>{const o={};try{vg&&this.ws.send(s)}catch{}r&&wp(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=py()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}check(){return!!vl}}class gA extends Ap{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const n=JM(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=e.readable.pipeThrough(n).getReader(),r=QM();r.readable.pipeTo(e.writable),this.writer=r.writable.getWriter();const s=()=>{i.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this.writer.write(o).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const i=e[n],r=n===e.length-1;this.writer.write(i).then(()=>{r&&wp(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const _A={websocket:mA,webtransport:gA,polling:dA},vA=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,yA=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Uh(t){if(t.length>2e3)throw"URI too long";const e=t,n=t.indexOf("["),i=t.indexOf("]");n!=-1&&i!=-1&&(t=t.substring(0,n)+t.substring(n,i).replace(/:/g,";")+t.substring(i,t.length));let r=vA.exec(t||""),s={},o=14;for(;o--;)s[yA[o]]=r[o]||"";return n!=-1&&i!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=xA(s,s.path),s.queryKey=SA(s,s.query),s}function xA(t,e){const n=/\/{2,9}/g,i=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&i.splice(0,1),e.slice(-1)=="/"&&i.splice(i.length-1,1),i}function SA(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,r,s){r&&(n[r]=s)}),n}let _y=class Ls extends Mt{constructor(e,n={}){super(),this.binaryType=pA,this.writeBuffer=[],e&&typeof e=="object"&&(n=e,e=null),e?(e=Uh(e),n.hostname=e.host,n.secure=e.protocol==="https"||e.protocol==="wss",n.port=e.port,e.query&&(n.query=e.query)):n.host&&(n.hostname=Uh(n.host).host),yu(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=n.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=aA(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=fy,n.transport=e,this.id&&(n.sid=this.id);const i=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new _A[e](i)}open(){let e;if(this.opts.rememberUpgrade&&Ls.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",n=>this.onClose("transport close",n))}probe(e){let n=this.createTransport(e),i=!1;Ls.priorWebsocketSuccess=!1;const r=()=>{i||(n.send([{type:"ping",data:"probe"}]),n.once("packet",d=>{if(!i)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Ls.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(u(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const f=new Error("probe error");f.transport=n.name,this.emitReserved("upgradeError",f)}}))};function s(){i||(i=!0,u(),n.close(),n=null)}const o=d=>{const f=new Error("probe error: "+d);f.transport=n.name,s(),this.emitReserved("upgradeError",f)};function a(){o("transport closed")}function l(){o("socket closed")}function c(d){n&&d.name!==n.name&&s()}const u=()=>{n.removeListener("open",r),n.removeListener("error",o),n.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};n.once("open",r),n.once("error",o),n.once("close",a),this.once("close",l),this.once("upgrading",c),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{i||n.open()},200):n.open()}onOpen(){if(this.readyState="open",Ls.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const n=this.upgrades.length;for(;e<n;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const n=new Error("server error");n.code=e.data,this.onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let i=0;i<this.writeBuffer.length;i++){const r=this.writeBuffer[i].data;if(r&&(n+=rA(r)),i>0&&n>this.maxPayload)return this.writeBuffer.slice(0,i);n+=2}return this.writeBuffer}write(e,n,i){return this.sendPacket("message",e,n,i),this}send(e,n,i){return this.sendPacket("message",e,n,i),this}sendPacket(e,n,i,r){if(typeof n=="function"&&(r=n,n=void 0),typeof i=="function"&&(r=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const s={type:e,data:n,options:i};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},i=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():e()}):this.upgrading?i():e()),this}onError(e){Ls.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,n){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const n=[];let i=0;const r=e.length;for(;i<r;i++)~this.transports.indexOf(e[i])&&n.push(e[i]);return n}};_y.protocol=fy;function EA(t,e="",n){let i=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),i=Uh(t)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const s=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+s+":"+i.port+e,i.href=i.protocol+"://"+s+(n&&n.port===i.port?"":":"+i.port),i}const MA=typeof ArrayBuffer=="function",AA=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,vy=Object.prototype.toString,wA=typeof Blob=="function"||typeof Blob<"u"&&vy.call(Blob)==="[object BlobConstructor]",TA=typeof File=="function"||typeof File<"u"&&vy.call(File)==="[object FileConstructor]";function Tp(t){return MA&&(t instanceof ArrayBuffer||AA(t))||wA&&t instanceof Blob||TA&&t instanceof File}function oc(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,i=t.length;n<i;n++)if(oc(t[n]))return!0;return!1}if(Tp(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return oc(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&oc(t[n]))return!0;return!1}function CA(t){const e=[],n=t.data,i=t;return i.data=Oh(n,e),i.attachments=e.length,{packet:i,buffers:e}}function Oh(t,e){if(!t)return t;if(Tp(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let i=0;i<t.length;i++)n[i]=Oh(t[i],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=Oh(t[i],e));return n}return t}function RA(t,e){return t.data=Fh(t.data,e),delete t.attachments,t}function Fh(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=Fh(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Fh(t[n],e));return t}const bA=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],PA=5;var We;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(We||(We={}));class LA{constructor(e){this.replacer=e}encode(e){return(e.type===We.EVENT||e.type===We.ACK)&&oc(e)?this.encodeAsBinary({type:e.type===We.EVENT?We.BINARY_EVENT:We.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===We.BINARY_EVENT||e.type===We.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=CA(e),i=this.encodeAsString(n.packet),r=n.buffers;return r.unshift(i),r}}function xg(t){return Object.prototype.toString.call(t)==="[object Object]"}class Cp extends Mt{constructor(e){super(),this.reviver=e}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const i=n.type===We.BINARY_EVENT;i||n.type===We.BINARY_ACK?(n.type=i?We.EVENT:We.ACK,this.reconstructor=new NA(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(Tp(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const i={type:Number(e.charAt(0))};if(We[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===We.BINARY_EVENT||i.type===We.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(s,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");i.attachments=Number(o)}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););i.nsp=e.substring(s,n)}else i.nsp="/";const r=e.charAt(n+1);if(r!==""&&Number(r)==r){const s=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}i.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(Cp.isPayloadValid(i.type,s))i.data=s;else throw new Error("invalid payload")}return i}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case We.CONNECT:return xg(n);case We.DISCONNECT:return n===void 0;case We.CONNECT_ERROR:return typeof n=="string"||xg(n);case We.EVENT:case We.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&bA.indexOf(n[0])===-1);case We.ACK:case We.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class NA{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=RA(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const DA=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Cp,Encoder:LA,get PacketType(){return We},protocol:PA},Symbol.toStringTag,{value:"Module"}));function Gn(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const IA=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class yy extends Mt{constructor(e,n,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Gn(e,"open",this.onopen.bind(this)),Gn(e,"packet",this.onpacket.bind(this)),Gn(e,"error",this.onerror.bind(this)),Gn(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){if(IA.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const i={type:We.EVENT,data:n};if(i.options={},i.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const o=this.ids++,a=n.pop();this._registerAckCallback(o,a),i.id=o}const r=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!r||!this.connected)||(this.connected?(this.notifyOutgoingListeners(i),this.packet(i)):this.sendBuffer.push(i)),this.flags={},this}_registerAckCallback(e,n){var i;const r=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(r===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},r),o=(...a)=>{this.io.clearTimeoutFn(s),n.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((i,r)=>{const s=(o,a)=>o?r(o):i(a);s.withError=!0,n.push(s),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((r,...s)=>i!==this._queue[0]?void 0:(r!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(r)):(this._queue.shift(),n&&n(null,...s)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:We.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(i=>String(i.id)===e)){const i=this.acks[e];delete this.acks[e],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case We.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case We.EVENT:case We.BINARY_EVENT:this.onevent(e);break;case We.ACK:case We.BINARY_ACK:this.onack(e);break;case We.DISCONNECT:this.ondisconnect();break;case We.CONNECT_ERROR:this.destroy();const i=new Error(e.data.message);i.data=e.data.data,this.emitReserved("connect_error",i);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const i of n)i.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let i=!1;return function(...r){i||(i=!0,n.packet({type:We.ACK,id:e,data:r}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:We.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let i=0;i<n.length;i++)if(e===n[i])return n.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let i=0;i<n.length;i++)if(e===n[i])return n.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const i of n)i.apply(this,e.data)}}}function Mo(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Mo.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=Math.floor(e*10)&1?t+n:t-n}return Math.min(t,this.max)|0};Mo.prototype.reset=function(){this.attempts=0};Mo.prototype.setMin=function(t){this.ms=t};Mo.prototype.setMax=function(t){this.max=t};Mo.prototype.setJitter=function(t){this.jitter=t};class kh extends Mt{constructor(e,n){var i;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,yu(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((i=n.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new Mo({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const r=n.parser||DA;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new _y(this.uri,this.opts);const n=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const r=Gn(n,"open",function(){i.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=Gn(n,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{r(),s(new Error("timeout")),n.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(r),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Gn(e,"ping",this.onping.bind(this)),Gn(e,"data",this.ondata.bind(this)),Gn(e,"error",this.onerror.bind(this)),Gn(e,"close",this.onclose.bind(this)),Gn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){wp(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let i=this.nsps[e];return i?this._autoConnect&&!i.active&&i.connect():(i=new yy(this,e,n),this.nsps[e]=i),i}_destroy(e){const n=Object.keys(this.nsps);for(const i of n)if(this.nsps[i].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let i=0;i<n.length;i++)this.engine.write(n[i],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,n){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(r=>{r?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",r)):e.onreconnect()}))},n);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Oo={};function ac(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=EA(t,e.path||"/socket.io"),i=n.source,r=n.id,s=n.path,o=Oo[r]&&s in Oo[r].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new kh(i,e):(Oo[r]||(Oo[r]=new kh(i,e)),l=Oo[r]),n.query&&!e.query&&(e.query=n.queryKey),l.socket(n.path,e)}Object.assign(ac,{Manager:kh,Socket:yy,io:ac,connect:ac});const UA=()=>{const[t,e]=le.useState([]),[n,i]=le.useState(1),r=le.useRef([]);let s;return le.useEffect(()=>(s=ac("https://kovacsik-real-time-map-432502eed912.herokuapp.com/",{transports:["websocket"]}),s.on("connect",()=>{console.log("connected")}),s.on("disconnect",o=>{console.log("disconnect",o)}),s.on("client_count",o=>{i(o)}),s.on("vehicle_data",o=>{let a=!0;const l=JSON.parse(o)[0];r.current=r.current.map(c=>c.id===l.id?(a=!1,{...l}):c),a&&r.current.push(l),e(r.current)}),s.on("error",o=>{console.log("SOCKET ERROR",o)}),s.on("connect_error",o=>{s.active?(console.log("socket active error",o),s.disconnect()):console.log(o.message)}),()=>{s.disconnect()}),[]),[t,n]},$n={ALERT:"#ff1a1a",NORMAL:"#00e64d",WARNING:"#ff9933"},OA=t=>t==="alert"?$n.ALERT:t==="warning"?$n.WARNING:$n.NORMAL,xy=t=>t==="alert"?$n.ALERT:t==="warning"?$n.WARNING:$n.NORMAL,Xs=t=>t<=20?$n.ALERT:t<=37?$n.WARNING:$n.NORMAL,FA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAV/SURBVHic3ZtNbFVFFMd/74Z0ob6CDwsJEQNai1BZCNYYI1QSXWpiI5BC5MNoXKqxgGEjaoyJH23ciLJQK35gjAujCXEhtiqasAMplqfEaPyI5UNoMVal97k499rrfWfuu3135r7SfzKLN29mzv/MnY9zZs4UcI/5wCqgHbgOaAMuB+YAlwVlzgNngd+B40EaAj4DRnLgaB03AX3AUcAHKnUmH/ga6AU6ctWgDjQD24BvqF/hWulYIKM5J51SYS7wJDJ8XSkeT2eAJ4BSDvoZUQA2IXM0L8W1jngI8LIoUQ/agH7g5hRlfeAIMIgM4TLwIzJi/gjKXIosjFcFbbcDncBy0in3FbAZ+Da1BhnQDYyS/GUmgAPAFmSK1IsrgK3Ap0GbSTLPAeszyKoJD3ixBok/gZeAxQ7kXw3sBsZrcOgjw5QwoQnYlyDUB14HFtgWrGAB8AbJ2+s7AWcraAL2JwgbRgydvNGJrCcmXvux0AkeyV/+PWB2ViEZUATeUnhFR0Km6WCa8z7wcJaGLaMH85TorbfRbkODfwMbs/F1gk3AP+ic1021sVZkW9G+/BYrdN1gA/p2OQYsSduIhxgWWk8+YpevE/Sgcz9ISsPvAUMD+xyQdYW96DrcV6tiCTilVBxm0ne3hbXAoSDdY7ntIvoWeRIxuY14SqnkA7dZJrgCuBCRcQG4wbKMVeg7wy5ThWbEu4pXeM0yMYDtipztDuS8qcg5S8R2iRoJD1I9PMaBnQ6IXZIyLyseA/6K5c1G1jng/x2gLRCvAr/a55UbfkLc9jj+0zXsgA7kwDIKH3jeDa9c8Swy9KNYCqyEyQ7YoFQcAL53Ris/nEBOl+PohskOuF0psNcVowZA0+UOkA6YhxxBReEDHzkmlSc+pHoaLAfme8Bqqk3EI4hBNFMwgtxRRFEAbvWo/vogB5gzDQNKXrtH9eoPci0103BMyWvzgGuVP8qOyTQCx5W8JR5y9BzHD47JNAKaTnM9xHOKY9QxmUZA06noobu55x2TaQTGlLyi9QuEiw0e+te2ffgxHaBN9TEPfWi4vn+fSJlnE5pOYx66xbfILZcqqwwkEsQlFil5pzz0Pb/NLRc+QO73QvQHeS6hHYuXZ6EbCJp5bBM+cp+/E3FSfnEsD2CZkleehW72djomE+LnnOSArtMQiDscPz310S3EixUmHVs8xFWMj4ICcKdjUl3I3O8H7nYs6y50l/9k+KOX6uPjAw4JPaPIe9qhvEFF3nPRAh1KgQkkLMU2FqNfYE7gZvttRb8gWREveFQptNsBoS5FTpi6HMjbo8hRzzu2KQXHsR/3c6Mix/hVMmIhcjESl9OjFTZdjWkXC1lQAD5W5HxC/XGLJrytyDmN7hcAEvKqXY6usUxsDjI0R4L0CvZjjVajz/3HkyqVkK0hXqlMQq9NQzQD31Gtxwg1rscB7lcqVoB3HZF1AVPk2NY0lT3gS0MDjzogaxs70Ll/wRTWmKQgqVS92CBsRJ/3o0whSCrEeqWhChImd68dvlaxGXOY3Np6G+0zNOgzvabDDsyBki9kabiA2AEmw+V9ZEtrFIpIOKyJX+ZQWagdLF0mv/ODKNagb3VhshIsHaKJ5J72kTv4K20JTMBCkgOkK4gFaE35EB662xxN48DLwDW2hSM70x502z4+553ed6xD3yLjI2IACUZqySBrHmKYDVL7/eE56ljt63U+WpHF8ZYUZSuIqz2AuKHRR1PhpUwR/dHU9Sk5HkS2wRNpFbCB8NncbyR/GZfpNBmfzdlACXnEqLnSLhXfRQrHJk8UkYOGIdwpPhTImPae6UokyPIw2R9PH0YOMG2fFgH2T2A0tCCHE8uYfD5fQn8+fwZZJIeRr/05kaNrF/gXSUkPP3ARMZ0AAAAASUVORK5CYII=",kA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACdeAAAnXgHPwViOAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABTVJREFUeJztm1+IVVUUxn/duTg540yOzlWyiEpJrLFExEREqUApjOglIVEIA9PQTCkUNU2KUqIm+0P4FtFLklRGmBYh+KYglaZmFs48aDmZU6OOzniPD2suXc6sfe7Z++xz5lL3g/VyuPtba+2z9zprr7Uv1FBDDTX8j3FDhroagenAZOBW4CZgJNAP9AAXgNPACeAI8HuGtqWGWcB24BDQBwQW8hPwHvAQkMva8CQYA7wAHMfO4SjpAF4GWjP0wxoNwEvIcvbleFh6gDeQrVNVeBJ5S2k5HpazwCIfhicNgo3ADmQC4qIXOIkEuYtAHhgFjEaCY4MF16fAEqDbYow33AX8SOW31QvsApYCE4kOaHlgGrAS2E28wHkKmOTVsxi4H/lsVQpcq5C364pxwDqgs4KuLmBGAj1WmAKcjzDmAvAcMMyjzjgBtocMJmESsndNRuwBbk5R/y3AdxH6u0hxO7QAvxoUF4GNZJOw5IFtAzo1W35Bskzv+NygsB94Kg2FFbAE8yR84lvZYoOiIkPjfAkrDHYFwEJfSpqAcwYlG30pSYAt6LadwdNWWG9QsIfqOKTUAQfQbdyWlLwZ+FMh7ibdaG+LOxCbwnb+g2SYztigkAbId77asBbd1s2uhDn0A04nfpMcX2hEz1FO47hV5ypkWb/9VuBD4qfTL6Lb/ICL8ncVol4LY5KiAHw/oPco8WJOAclLwnZvdzHgpEK0y4XIAeXOl+QYcjiqhG8ZbPcRWwOa0bOspbZEDmhlsPMlOY6k5FFYrowrIqW62JhhMGCiDYkDtDdfLm9RuYhzn2GsVRx4WiG4hH00bbL4bSXn24lXwapHL6Q8Y2ELWxWCH2wIkJJ4FzA/xm8LA/xJ3nw5tIr0VovxvKMQfGMxfhaShQXAFaInwbfzAPsVnvdtCD5QCD6LObbc+ZKYJiEN5wH2KVwfaT807Wkt08vHUDwK+BIYofDtBOaVPSsgq2qygettYDVivC36lGeqr6YJuKY8i3OoOI8UKjQDbgS+QFZCAfle32vgaQeex8150Evrl2wINjF4Cf1sMf5xZNlry/oy0gBNGu2j8JvC+5oNgVYBKjUx4uIRxFmToz73fDny6J/BZ21IZhsMnGZpzMPEnwQfzgO0Gfjn2JC0InEgTLLSwaB5yP7LwnmANQr/VexabgAcVIh2Oxo1F/Mk+HQe4GtFx0EXolcVoj7incg0zGZwfuDb+bHIkV0LrNaYoxAFSK/OFW3Ax8BXeGpvh7AZ3eaZLmR1SOc1TNaJw37KAPXIvYGwvUeTkK5SCAOkUVltWIdu6+okpM3o5eYepFFZLZiAHmT/xsO9Iu1oHCBdWpvEKC3kkDOFZuN6HwoaMHeFE3dePOBNdNs68BirHjUoKSLVo6HCMoNdAbDAt7KdBkVFpEubNZahl8ADpJfgHS3I5QPTjG9BPp1pI4d52QfAYWB4WsrbgL8ilB9AGpVpYTzmgBcgjdw7U9QPSFYVdVmpG2lUhqtCSVCPfOejDlXngKkedUZiJtE3xQLgD6RXV0igZyyS3moZXrmcQVZnprgHvX0Wln6k/LUcuWJXH8FZhziyBtiLfrAJywnk0qYTkp7EWpAK8hMWY/qRM0Zn2bNhwG3IVVmb5GoHkupetBiTCuYjffhKb8uXnAUey8QzC4wAXkc/O/iSLvwHWO9oQi5RaEdpV+lA8nqbXuOQI4dUgV5BSlJajdEk15D+XjvwICneRsvyT1OjgbuB2wdkHP86dhnJLU4hV/CPUQWBrYYaaqjhP4/rEEZodXK3DpEAAAAASUVORK5CYII=",BA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASmSURBVHic7ZtrjF1TFMd/9/Zl0jIziFcI9X6kMSSEUCJeEeqdkArxalMfNBVtCIlXNEW8EsIHQvhAiSZEQzyjmoogNNOGUmWLR9tQWlNjqjrXh30Pe61z7/Ses/c+586Yf7KTmblr/dd/rfO4e6+9B0Yxiv81KiXFPQk4A5hc//1b4A1gaUl6CkMPsByoNRnLgSNLUxcZ5wH9NE8+Gf3AuSVpjIaDgE1sP/lk9AGHlaI0AirAMmSCa4Ergb3q4ypgnbJZRnnvqKCYjkxsA7BfA7v965+5ttOLkRgPHcB3yKRmDGE/U9n+AEyMrDEq7kIm9BkwZgj7KvCx8rkzssZo2Af4A5nMyS34nQAMOj79NH5k2h4vIpN/oSDftoDvVcx797QFQj3HWd8fbYNQb/Ks3yBtgZ2wk5xQ3+WXKa71QJenxqh4ACn4A/xmcxXsCtHlvN9TYzQcCAzwn9BtwLEBeI+ucyW8W4BDAvAGx2LklXoqIPfTivvVgNxBcBpS4O/AngH5dye9mjwrIL8XxgIrkeJuihDnZhXjC2BchDiZcQNS2BpgQgt+xvExLdiPB75SseZkVhsYO5Newp7foq8hWwEALlCxfgN2bVltBDyuBL2TwdeQvQBgm6duzMcy+AbFEcBWR8jfwJQM/oZ8BTi8QdxSGqlvIq/EIxn9DfkKAPCoiv1uRn9vXKwE/Er2Z9GQvwDdwC9Kw0UZOXJjArBaBb8+B48hfwEAZisN3wA75ODJjFtV4M/J931s8CvAWKBXabklB08m7EF6RnZmTi6DXwEATlVa+rBt9mh4VgV82YPL4F8AgFeUpmc8uIbEccg21xbgYA8+Q5gCHIBchQ4CJ3rwNUQF+BBZ6Xs9OQ1hCgBwH1LbJ9jWXDBcoQKsBzo9OQ3hCrAj8BNS4+WenP9iEvCjIr86AK8hXAEArkFqXItt0XljviL+lDC3lyFsAarAR0itd/uSTgb+dAgHgam+pHUYwhYA4Hjki3oA26rLjUXIij7nKdCFIXwBAJ5Han4pL9Epiqgf2DeAwASGOAXYG9iM1H56VpIxpM/y3B5OIwALgffqY2Fg7juQ2ldip84t4zpF8D3Da5++A3mH1YBZrTp3Az8r50uCS4yPS5E5bAB2acXxYeU4nM/qLEHm8tD2HA4F/nIctgHHRBLXhd1InYn/rLIZjkLuKm3FtvKa4jVkxZ6IJKwL28BI4qwhXhGeROb0VjPDc5Rh6N0dF7NUrBr2ToiB3YCNKtbZ2mg8sEoZzY0kCNJnCGrAtRHjzVOxVqM2b+Yqg6+1QWB0YW97N16sRwDsBf4SmeONyYedpG+RaRHFuHFn1EfM5BNMQ+a4MYk7R33wdgFiysLryFxnQ/ocb09Z6gpADzLXpSAPKa8qTVpxcHeY11WRc/zNpUgqFn3OzxMBViCXvN0liCoK3ch/2uitAu87Bh3AghKEFYV7sDkmWFLBzo1XIBc8i7DH0ZLnZTijgt2/mAdc6Py9hrOd/yDpmdlIH+K84TjSC6GRPBbTYEO3im176X7aSBp9wG04bf1GjY5ObAdoCvaIeyF77hExgG2P9WL/D2FTqWpGMYr2wj88Os9/kOokWwAAAABJRU5ErkJggg==",Sy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAApdJREFUWIXFl8tqFEEUhr/JYjLBBFw5TkDwMjuDM+YRXIqgK8GtCYIQNY+QBCR5g1zMExi3Tla6CTrRhRr3MxJ3uQwIk0AiOO2iqujTlZrqLnpCfii66XP5T1XXOXWqQHaMAQ+Ae0ANuA5c1rI/wC9gB/gIvAe6Ab69qADLwDEQZRzHwBugmod4BFgAjhwEh8BP1Ewb+v3QofcXWAKGQ8mr2ql01gLmgLrH7q7WaVm2n4ByVvI6sCeM94EZoBgwgSLwQtsaP7+BiTTDqkX+GbgaQGyjAjSFv108KzFCctnfAqUc5AYlYIPk73DuiQWSMx8EuQxiW/hftBUqxLt9n3zL3g8V4EBznAK3pHBZRDdzDuQGrwTPmvk4RlxkWvh3ex1/GqbJi0Bbcx0BowBPRFRzKc7/6THlkE8Jec3jZ17wPQZVMs0HX/Q17TzSz2khm7Zkdzx+JgXfKsBX4vKaBjNLGYRN7lodiQLQ0frbEO/MHxkCwEHYb1V82NE2e6BSIkIdKlnxVBBHQA94HmC/qe1OhsTHQoADF0LsE7oX/gu+cHGbsAmqImVJQ1MHsqShrw7INFwZQvVwBo88hpF+9oBnwLqQretvPUvXhYfi/QMkS3Ebfymu4Z9dmlyW4i5wyQhkNXzpcZAXs4JnVQqqqAbSHMeVcyAfJ25cT4AbtsKSiK7J4BsSk20R8NqlNIxql4zSxoCCKAHvhN8tPPusjOpejfI34FoO8nGSrZi3KTWYsII4QHUyoW35LMnLyi5wO6uDMsnfYVJ0HlVI+mFS67RJ2m4BVwImAKg9sUh8WsrRQbXwDeKrWcehd4racCGrdwY3UeXadUfsN7qoPD+TajZCjtBR4D7qel7Xzu3r+XdUaW+gqmsq/gN5YCbF14q8HwAAAABJRU5ErkJggg==",Sg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAT5JREFUWIXt1jsvBVEUBeCPoCMh8YrglvwCjVY0/hC1RFRqjUSj0kpUdCqhUBCPaEhIRLwSEYmrmJHrNWfmXM9iVrIzMznrrL3mZO+ZTYkSf4yGwNogrnCdsd6F/jrznuA8ROjCA9YDnGNU64zTF5GmDPEOtKAnYGAJ46G3CGAtjzAkcbpbZ4LCaPzpBP/eQFYNFN3bGsG/xlNRcpEa2BJX+SufiXzlBA5RieAfxYiXXVAaKIJlXAbiApN5Il/pggraczh9MQam0YypDKE5LKr18wjaAtpVye+8MM7STQsYVmvDbuylz/MxgrEYxW2aaDW9nmAnvd+Wf+TfYuLOx8/onuQkfgVjuH+VfB+9n/BmsPkuNtQ/pLzBhGQkO5BdyVkj2WxMotBQOiCp4puM9c6U8xpVSc08xpgoUeJP8Qxf5WcTCEDebgAAAABJRU5ErkJggg==",zA=t=>{const{setShowVehicleList:e}=t,[n,i]=le.useState(!1),[r,s]=le.useState([]),[o,a]=le.useState("name"),l=sy(),{vehicleData:c}=le.useContext(Sp),u=p=>{l&&(l.panTo({lat:p.location.lat,lng:p.location.lng}),l.setZoom(14))},d=p=>p==="alert"?$n.ALERT:p==="warning"?$n.WARNING:"transparent",f=p=>p==="alert"?FA:p==="warning"?BA:kA;return le.useEffect(()=>{let p=[];p=c.map(m=>({id:m.id,name:m.name,health:m.health.overall,location:m.location})),o==="health"?p.sort((m,y)=>{if(m.health==="alert"&&y.health==="warning"||m.health==="alert"&&y.health==="good"||m.health==="warning"&&y.health==="good")return-1;if(m.health==="warning"&&y.health==="alert"||m.health==="good"&&y.health==="alert"||m.health==="good"&&y.health==="warning")return 1}):p.sort((m,y)=>m.name>y.name?1:-1),s(p)},[c,o]),X.jsxs("div",{id:"VehicleList",style:{animation:`${n?"slide-out-left":"slide-in-left"} 0.5s forwards`},onAnimationEnd:()=>{n&&e(!1)},children:[X.jsxs("div",{className:"title",children:["Vehicle List",X.jsx("div",{className:"btn-close",onClick:()=>{i(!0)},children:X.jsx("img",{src:Sy})})]}),X.jsxs("div",{className:"list",children:[X.jsx("table",{className:"list-header",children:X.jsx("thead",{children:X.jsxs("tr",{children:[X.jsxs("th",{onClick:()=>{a("name")},children:[X.jsx("img",{style:{width:"18px"},src:Sg})," Driver Name"]}),X.jsxs("th",{onClick:()=>{a("health")},children:[X.jsx("img",{style:{width:"18px"},src:Sg})," Vehicle Status"]})]})})}),X.jsx("table",{className:"list-body",children:X.jsx("tbody",{children:r.map(p=>X.jsxs("tr",{onClick:()=>u(p),children:[X.jsx("td",{children:p.name}),X.jsx("td",{style:{textAlign:"center",backgroundColor:`${d(p.health)}`},children:X.jsx("img",{src:f(p.health)})})]},p.id))})})]}),X.jsx("div",{className:"footer modal-bottom-bar"})]})},Rp=t=>{const{type:e,fill:n}=t,i={bus:"M24,9v3a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V9H2V6H22V9ZM2,16H22v6H20v2H15V22H9v2H4V22H2Zm15,4a1,1,0,0,0,0-2A1,1,0,0,0,17,20ZM7,20a1,1,0,0,0,0-2A1,1,0,0,0,7,20Z",car:"M.327,12c.029-.093.042-.19.075-.282L3.1,4.291A5.012,5.012,0,0,1,7.8,1h8.4a5.011,5.011,0,0,1,4.7,3.292l2.7,7.426c.033.092.046.189.075.282ZM20,14v2a1,1,0,0,1-2,0V14H6v2a1,1,0,0,1-2,0V14H0v2a5,5,0,0,0,3,4.576V22a2,2,0,0,0,4,0V21H17v1a2,2,0,0,0,4,0V20.576A5,5,0,0,0,24,16V14Z",truck:"m21.076,14H2.95c.107-.258.205-.52.33-.77l2.286-4.572c.512-1.022,1.54-1.658,2.684-1.658h7.527c1.144,0,2.172.636,2.684,1.658l2.286,4.572c.125.25.223.512.33.77Zm.642,2H2.307c-.189.853-.295,1.724-.295,2.597v3.403h2v2h5v-2h6v2h5v-2h2v-3.403c0-.873-.105-1.744-.295-2.597Zm-14.705,4c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm10,0c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1ZM.013,18.597c0-.988.115-2.008.343-3.03l.002-.007c.23-1.036.583-2.041,1.052-2.992l2.367-4.803c.854-1.705,2.567-2.764,4.473-2.764h7.527c1.905,0,3.619,1.059,4.472,2.763l2.367,4.797c.472.957.827,1.967,1.057,3.009.182.828.293,1.653.328,2.46V3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3v16h.013v-.403Z",engine:"m21.5,9h-.5v-.5c0-1.378-1.122-2.5-2.5-2.5h-2.5v-3h3c.552,0,1-.448,1-1s-.448-1-1-1h-8c-.552,0-1,.448-1,1s.448,1,1,1h3v3h-2.563c-.893,0-1.733.394-2.304,1.08l-1.601,1.92h-.032c-1.378,0-2.5,1.122-2.5,2.5v1.5h-3v-3c0-.552-.448-1-1-1s-1,.448-1,1v8c0,.552.448,1,1,1s1-.448,1-1v-3h3v2.171c0,.801.312,1.555.879,2.122l1.828,1.828c.566.567,1.32.879,2.122.879h8.671c1.208,0,2.217-.86,2.45-2h.55c1.378,0,2.5-1.122,2.5-2.5v-6c0-1.378-1.122-2.5-2.5-2.5Z",tire:"M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm0,13a4.083,4.083,0,0,0-.845.1,3.674,3.674,0,0,0-.446-1.592,3.6,3.6,0,0,0,.71-.362A3.618,3.618,0,0,0,12,10.636a3.2,3.2,0,0,0,1.291.869,3.674,3.674,0,0,0-.446,1.592A4.083,4.083,0,0,0,12,13Zm6.029-4.539L15.19,9.646A1.6,1.6,0,0,1,13,8.163V5.08A7.006,7.006,0,0,1,18.029,8.461ZM11,5.08V8.163A1.6,1.6,0,0,1,8.815,9.649L5.956,8.485A7,7,0,0,1,11,5.08ZM5.207,10.339l2.63,1.073a2.128,2.128,0,0,1,.924,3.239L7.014,16.9A7,7,0,0,1,5.207,10.339Zm3.4,7.778L10.4,15.8a2.053,2.053,0,0,1,3.208.011l1.78,2.31A7.03,7.03,0,0,1,8.605,18.117Zm8.376-1.206-1.733-2.249a2.127,2.127,0,0,1,.93-3.256l2.608-1.091A7,7,0,0,1,16.981,16.911Z"};return X.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",id:"icon_svg","data-name":"Icon Layer",viewBox:"0 0 24 24",width:"32",height:"32",children:X.jsx("path",{fill:n||"#000",stroke:"black",strokeWidth:1,d:i[e]})})},HA=t=>{const{children:e,name:n,vehicleType:i,location:r,health:s,id:o,onVehicleClick:a}=t,[l,c]=GM();return X.jsx("div",{id:"VehicleMarker",children:X.jsx(VM,{ref:l,position:{lat:r.lat,lng:r.lng},title:`Vehicle: ${n}`,onClick:()=>{a({marker:c,id:o})},children:X.jsxs("div",{className:"vehicle-icon",children:[e,X.jsx(Rp,{type:i||"truck",fill:OA(s.overall)})]})})})};var VA={value:()=>{}};function Ey(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new lc(n)}function lc(t){this._=t}function GA(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}lc.prototype=Ey.prototype={constructor:lc,on:function(t,e){var n=this._,i=GA(t+"",n),r,s=-1,o=i.length;if(arguments.length<2){for(;++s<o;)if((r=(t=i[s]).type)&&(r=WA(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<o;)if(r=(t=i[s]).type)n[r]=Eg(n[r],t.name,e);else if(e==null)for(r in n)n[r]=Eg(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new lc(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,s;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(s=this._[t],i=0,r=s.length;i<r;++i)s[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,s=i.length;r<s;++r)i[r].value.apply(e,n)}};function WA(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function Eg(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=VA,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var Bh="http://www.w3.org/1999/xhtml";const Mg={svg:"http://www.w3.org/2000/svg",xhtml:Bh,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function xu(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),Mg.hasOwnProperty(e)?{space:Mg[e],local:t}:t}function XA(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===Bh&&e.documentElement.namespaceURI===Bh?e.createElement(t):e.createElementNS(n,t)}}function jA(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function My(t){var e=xu(t);return(e.local?jA:XA)(e)}function YA(){}function bp(t){return t==null?YA:function(){return this.querySelector(t)}}function qA(t){typeof t!="function"&&(t=bp(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var s=e[r],o=s.length,a=i[r]=new Array(o),l,c,u=0;u<o;++u)(l=s[u])&&(c=t.call(l,l.__data__,u,s))&&("__data__"in l&&(c.__data__=l.__data__),a[u]=c);return new En(i,this._parents)}function KA(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function $A(){return[]}function Ay(t){return t==null?$A:function(){return this.querySelectorAll(t)}}function ZA(t){return function(){return KA(t.apply(this,arguments))}}function QA(t){typeof t=="function"?t=ZA(t):t=Ay(t);for(var e=this._groups,n=e.length,i=[],r=[],s=0;s<n;++s)for(var o=e[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&(i.push(t.call(l,l.__data__,c,o)),r.push(l));return new En(i,r)}function wy(t){return function(){return this.matches(t)}}function Ty(t){return function(e){return e.matches(t)}}var JA=Array.prototype.find;function e1(t){return function(){return JA.call(this.children,t)}}function t1(){return this.firstElementChild}function n1(t){return this.select(t==null?t1:e1(typeof t=="function"?t:Ty(t)))}var i1=Array.prototype.filter;function r1(){return Array.from(this.children)}function s1(t){return function(){return i1.call(this.children,t)}}function o1(t){return this.selectAll(t==null?r1:s1(typeof t=="function"?t:Ty(t)))}function a1(t){typeof t!="function"&&(t=wy(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var s=e[r],o=s.length,a=i[r]=[],l,c=0;c<o;++c)(l=s[c])&&t.call(l,l.__data__,c,s)&&a.push(l);return new En(i,this._parents)}function Cy(t){return new Array(t.length)}function l1(){return new En(this._enter||this._groups.map(Cy),this._parents)}function Vc(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}Vc.prototype={constructor:Vc,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function c1(t){return function(){return t}}function u1(t,e,n,i,r,s){for(var o=0,a,l=e.length,c=s.length;o<c;++o)(a=e[o])?(a.__data__=s[o],i[o]=a):n[o]=new Vc(t,s[o]);for(;o<l;++o)(a=e[o])&&(r[o]=a)}function f1(t,e,n,i,r,s,o){var a,l,c=new Map,u=e.length,d=s.length,f=new Array(u),p;for(a=0;a<u;++a)(l=e[a])&&(f[a]=p=o.call(l,l.__data__,a,e)+"",c.has(p)?r[a]=l:c.set(p,l));for(a=0;a<d;++a)p=o.call(t,s[a],a,s)+"",(l=c.get(p))?(i[a]=l,l.__data__=s[a],c.delete(p)):n[a]=new Vc(t,s[a]);for(a=0;a<u;++a)(l=e[a])&&c.get(f[a])===l&&(r[a]=l)}function h1(t){return t.__data__}function d1(t,e){if(!arguments.length)return Array.from(this,h1);var n=e?f1:u1,i=this._parents,r=this._groups;typeof t!="function"&&(t=c1(t));for(var s=r.length,o=new Array(s),a=new Array(s),l=new Array(s),c=0;c<s;++c){var u=i[c],d=r[c],f=d.length,p=p1(t.call(u,u&&u.__data__,c,i)),m=p.length,y=a[c]=new Array(m),g=o[c]=new Array(m),h=l[c]=new Array(f);n(u,d,y,g,h,p,e);for(var v=0,_=0,E,R;v<m;++v)if(E=y[v]){for(v>=_&&(_=v+1);!(R=g[_])&&++_<m;);E._next=R||null}}return o=new En(o,i),o._enter=a,o._exit=l,o}function p1(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function m1(){return new En(this._exit||this._groups.map(Cy),this._parents)}function g1(t,e,n){var i=this.enter(),r=this,s=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?s.remove():n(s),i&&r?i.merge(r).order():r}function _1(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,s=i.length,o=Math.min(r,s),a=new Array(r),l=0;l<o;++l)for(var c=n[l],u=i[l],d=c.length,f=a[l]=new Array(d),p,m=0;m<d;++m)(p=c[m]||u[m])&&(f[m]=p);for(;l<r;++l)a[l]=n[l];return new En(a,this._parents)}function v1(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,s=i[r],o;--r>=0;)(o=i[r])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function y1(t){t||(t=x1);function e(d,f){return d&&f?t(d.__data__,f.__data__):!d-!f}for(var n=this._groups,i=n.length,r=new Array(i),s=0;s<i;++s){for(var o=n[s],a=o.length,l=r[s]=new Array(a),c,u=0;u<a;++u)(c=o[u])&&(l[u]=c);l.sort(e)}return new En(r,this._parents).order()}function x1(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function S1(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function E1(){return Array.from(this)}function M1(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,s=i.length;r<s;++r){var o=i[r];if(o)return o}return null}function A1(){let t=0;for(const e of this)++t;return t}function w1(){return!this.node()}function T1(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],s=0,o=r.length,a;s<o;++s)(a=r[s])&&t.call(a,a.__data__,s,r);return this}function C1(t){return function(){this.removeAttribute(t)}}function R1(t){return function(){this.removeAttributeNS(t.space,t.local)}}function b1(t,e){return function(){this.setAttribute(t,e)}}function P1(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function L1(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function N1(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function D1(t,e){var n=xu(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?R1:C1:typeof e=="function"?n.local?N1:L1:n.local?P1:b1)(n,e))}function Ry(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function I1(t){return function(){this.style.removeProperty(t)}}function U1(t,e,n){return function(){this.style.setProperty(t,e,n)}}function O1(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function F1(t,e,n){return arguments.length>1?this.each((e==null?I1:typeof e=="function"?O1:U1)(t,e,n??"")):ho(this.node(),t)}function ho(t,e){return t.style.getPropertyValue(e)||Ry(t).getComputedStyle(t,null).getPropertyValue(e)}function k1(t){return function(){delete this[t]}}function B1(t,e){return function(){this[t]=e}}function z1(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function H1(t,e){return arguments.length>1?this.each((e==null?k1:typeof e=="function"?z1:B1)(t,e)):this.node()[t]}function by(t){return t.trim().split(/^|\s+/)}function Pp(t){return t.classList||new Py(t)}function Py(t){this._node=t,this._names=by(t.getAttribute("class")||"")}Py.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function Ly(t,e){for(var n=Pp(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function Ny(t,e){for(var n=Pp(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function V1(t){return function(){Ly(this,t)}}function G1(t){return function(){Ny(this,t)}}function W1(t,e){return function(){(e.apply(this,arguments)?Ly:Ny)(this,t)}}function X1(t,e){var n=by(t+"");if(arguments.length<2){for(var i=Pp(this.node()),r=-1,s=n.length;++r<s;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?W1:e?V1:G1)(n,e))}function j1(){this.textContent=""}function Y1(t){return function(){this.textContent=t}}function q1(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function K1(t){return arguments.length?this.each(t==null?j1:(typeof t=="function"?q1:Y1)(t)):this.node().textContent}function $1(){this.innerHTML=""}function Z1(t){return function(){this.innerHTML=t}}function Q1(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function J1(t){return arguments.length?this.each(t==null?$1:(typeof t=="function"?Q1:Z1)(t)):this.node().innerHTML}function ew(){this.nextSibling&&this.parentNode.appendChild(this)}function tw(){return this.each(ew)}function nw(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function iw(){return this.each(nw)}function rw(t){var e=typeof t=="function"?t:My(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function sw(){return null}function ow(t,e){var n=typeof t=="function"?t:My(t),i=e==null?sw:typeof e=="function"?e:bp(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function aw(){var t=this.parentNode;t&&t.removeChild(this)}function lw(){return this.each(aw)}function cw(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function uw(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function fw(t){return this.select(t?uw:cw)}function hw(t){return arguments.length?this.property("__data__",t):this.node().__data__}function dw(t){return function(e){t.call(this,e,this.__data__)}}function pw(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function mw(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,s;n<r;++n)s=e[n],(!t.type||s.type===t.type)&&s.name===t.name?this.removeEventListener(s.type,s.listener,s.options):e[++i]=s;++i?e.length=i:delete this.__on}}}function gw(t,e,n){return function(){var i=this.__on,r,s=dw(e);if(i){for(var o=0,a=i.length;o<a;++o)if((r=i[o]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=n),r.value=e;return}}this.addEventListener(t.type,s,n),r={type:t.type,name:t.name,value:e,listener:s,options:n},i?i.push(r):this.__on=[r]}}function _w(t,e,n){var i=pw(t+""),r,s=i.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,u;l<c;++l)for(r=0,u=a[l];r<s;++r)if((o=i[r]).type===u.type&&o.name===u.name)return u.value}return}for(a=e?gw:mw,r=0;r<s;++r)this.each(a(i[r],e,n));return this}function Dy(t,e,n){var i=Ry(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function vw(t,e){return function(){return Dy(this,t,e)}}function yw(t,e){return function(){return Dy(this,t,e.apply(this,arguments))}}function xw(t,e){return this.each((typeof e=="function"?yw:vw)(t,e))}function*Sw(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,s=i.length,o;r<s;++r)(o=i[r])&&(yield o)}var Iy=[null];function En(t,e){this._groups=t,this._parents=e}function Fa(){return new En([[document.documentElement]],Iy)}function Ew(){return this}En.prototype=Fa.prototype={constructor:En,select:qA,selectAll:QA,selectChild:n1,selectChildren:o1,filter:a1,data:d1,enter:l1,exit:m1,join:g1,merge:_1,selection:Ew,order:v1,sort:y1,call:S1,nodes:E1,node:M1,size:A1,empty:w1,each:T1,attr:D1,style:F1,property:H1,classed:X1,text:K1,html:J1,raise:tw,lower:iw,append:rw,insert:ow,remove:lw,clone:fw,datum:hw,on:_w,dispatch:xw,[Symbol.iterator]:Sw};function cf(t){return typeof t=="string"?new En([[document.querySelector(t)]],[document.documentElement]):new En([[t]],Iy)}function Lp(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function Uy(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function ka(){}var wa=.7,Gc=1/wa,to="\\s*([+-]?\\d+)\\s*",Ta="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",fi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Mw=/^#([0-9a-f]{3,8})$/,Aw=new RegExp(`^rgb\\(${to},${to},${to}\\)$`),ww=new RegExp(`^rgb\\(${fi},${fi},${fi}\\)$`),Tw=new RegExp(`^rgba\\(${to},${to},${to},${Ta}\\)$`),Cw=new RegExp(`^rgba\\(${fi},${fi},${fi},${Ta}\\)$`),Rw=new RegExp(`^hsl\\(${Ta},${fi},${fi}\\)$`),bw=new RegExp(`^hsla\\(${Ta},${fi},${fi},${Ta}\\)$`),Ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Lp(ka,ns,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:wg,formatHex:wg,formatHex8:Pw,formatHsl:Lw,formatRgb:Tg,toString:Tg});function wg(){return this.rgb().formatHex()}function Pw(){return this.rgb().formatHex8()}function Lw(){return Oy(this).formatHsl()}function Tg(){return this.rgb().formatRgb()}function ns(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=Mw.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?Cg(e):n===3?new on(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?yl(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?yl(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=Aw.exec(t))?new on(e[1],e[2],e[3],1):(e=ww.exec(t))?new on(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=Tw.exec(t))?yl(e[1],e[2],e[3],e[4]):(e=Cw.exec(t))?yl(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=Rw.exec(t))?Pg(e[1],e[2]/100,e[3]/100,1):(e=bw.exec(t))?Pg(e[1],e[2]/100,e[3]/100,e[4]):Ag.hasOwnProperty(t)?Cg(Ag[t]):t==="transparent"?new on(NaN,NaN,NaN,0):null}function Cg(t){return new on(t>>16&255,t>>8&255,t&255,1)}function yl(t,e,n,i){return i<=0&&(t=e=n=NaN),new on(t,e,n,i)}function Nw(t){return t instanceof ka||(t=ns(t)),t?(t=t.rgb(),new on(t.r,t.g,t.b,t.opacity)):new on}function zh(t,e,n,i){return arguments.length===1?Nw(t):new on(t,e,n,i??1)}function on(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}Lp(on,zh,Uy(ka,{brighter(t){return t=t==null?Gc:Math.pow(Gc,t),new on(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?wa:Math.pow(wa,t),new on(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new on(Kr(this.r),Kr(this.g),Kr(this.b),Wc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Rg,formatHex:Rg,formatHex8:Dw,formatRgb:bg,toString:bg}));function Rg(){return`#${Wr(this.r)}${Wr(this.g)}${Wr(this.b)}`}function Dw(){return`#${Wr(this.r)}${Wr(this.g)}${Wr(this.b)}${Wr((isNaN(this.opacity)?1:this.opacity)*255)}`}function bg(){const t=Wc(this.opacity);return`${t===1?"rgb(":"rgba("}${Kr(this.r)}, ${Kr(this.g)}, ${Kr(this.b)}${t===1?")":`, ${t})`}`}function Wc(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Kr(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Wr(t){return t=Kr(t),(t<16?"0":"")+t.toString(16)}function Pg(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Xn(t,e,n,i)}function Oy(t){if(t instanceof Xn)return new Xn(t.h,t.s,t.l,t.opacity);if(t instanceof ka||(t=ns(t)),!t)return new Xn;if(t instanceof Xn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),s=Math.max(e,n,i),o=NaN,a=s-r,l=(s+r)/2;return a?(e===s?o=(n-i)/a+(n<i)*6:n===s?o=(i-e)/a+2:o=(e-n)/a+4,a/=l<.5?s+r:2-s-r,o*=60):a=l>0&&l<1?0:o,new Xn(o,a,l,t.opacity)}function Iw(t,e,n,i){return arguments.length===1?Oy(t):new Xn(t,e,n,i??1)}function Xn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}Lp(Xn,Iw,Uy(ka,{brighter(t){return t=t==null?Gc:Math.pow(Gc,t),new Xn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?wa:Math.pow(wa,t),new Xn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new on(uf(t>=240?t-240:t+120,r,i),uf(t,r,i),uf(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new Xn(Lg(this.h),xl(this.s),xl(this.l),Wc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Wc(this.opacity);return`${t===1?"hsl(":"hsla("}${Lg(this.h)}, ${xl(this.s)*100}%, ${xl(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Lg(t){return t=(t||0)%360,t<0?t+360:t}function xl(t){return Math.max(0,Math.min(1,t||0))}function uf(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const Np=t=>()=>t;function Uw(t,e){return function(n){return t+n*e}}function Ow(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function Fw(t){return(t=+t)==1?Fy:function(e,n){return n-e?Ow(e,n,t):Np(isNaN(e)?n:e)}}function Fy(t,e){var n=e-t;return n?Uw(t,n):Np(isNaN(t)?e:t)}const Xc=function t(e){var n=Fw(e);function i(r,s){var o=n((r=zh(r)).r,(s=zh(s)).r),a=n(r.g,s.g),l=n(r.b,s.b),c=Fy(r.opacity,s.opacity);return function(u){return r.r=o(u),r.g=a(u),r.b=l(u),r.opacity=c(u),r+""}}return i.gamma=t,i}(1);function kw(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,i=e.slice(),r;return function(s){for(r=0;r<n;++r)i[r]=t[r]*(1-s)+e[r]*s;return i}}function Bw(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function zw(t,e){var n=e?e.length:0,i=t?Math.min(n,t.length):0,r=new Array(i),s=new Array(n),o;for(o=0;o<i;++o)r[o]=Dp(t[o],e[o]);for(;o<n;++o)s[o]=e[o];return function(a){for(o=0;o<i;++o)s[o]=r[o](a);return s}}function Hw(t,e){var n=new Date;return t=+t,e=+e,function(i){return n.setTime(t*(1-i)+e*i),n}}function ri(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function Vw(t,e){var n={},i={},r;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in t?n[r]=Dp(t[r],e[r]):i[r]=e[r];return function(s){for(r in n)i[r]=n[r](s);return i}}var Hh=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ff=new RegExp(Hh.source,"g");function Gw(t){return function(){return t}}function Ww(t){return function(e){return t(e)+""}}function ky(t,e){var n=Hh.lastIndex=ff.lastIndex=0,i,r,s,o=-1,a=[],l=[];for(t=t+"",e=e+"";(i=Hh.exec(t))&&(r=ff.exec(e));)(s=r.index)>n&&(s=e.slice(n,s),a[o]?a[o]+=s:a[++o]=s),(i=i[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,l.push({i:o,x:ri(i,r)})),n=ff.lastIndex;return n<e.length&&(s=e.slice(n),a[o]?a[o]+=s:a[++o]=s),a.length<2?l[0]?Ww(l[0].x):Gw(e):(e=l.length,function(c){for(var u=0,d;u<e;++u)a[(d=l[u]).i]=d.x(c);return a.join("")})}function Dp(t,e){var n=typeof e,i;return e==null||n==="boolean"?Np(e):(n==="number"?ri:n==="string"?(i=ns(e))?(e=i,Xc):ky:e instanceof ns?Xc:e instanceof Date?Hw:Bw(e)?kw:Array.isArray(e)?zw:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?Vw:ri)(t,e)}var Ng=180/Math.PI,Vh={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function By(t,e,n,i,r,s){var o,a,l;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,o=-o),{translateX:r,translateY:s,rotate:Math.atan2(e,t)*Ng,skewX:Math.atan(l)*Ng,scaleX:o,scaleY:a}}var Sl;function Xw(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?Vh:By(e.a,e.b,e.c,e.d,e.e,e.f)}function jw(t){return t==null||(Sl||(Sl=document.createElementNS("http://www.w3.org/2000/svg","g")),Sl.setAttribute("transform",t),!(t=Sl.transform.baseVal.consolidate()))?Vh:(t=t.matrix,By(t.a,t.b,t.c,t.d,t.e,t.f))}function zy(t,e,n,i){function r(c){return c.length?c.pop()+" ":""}function s(c,u,d,f,p,m){if(c!==d||u!==f){var y=p.push("translate(",null,e,null,n);m.push({i:y-4,x:ri(c,d)},{i:y-2,x:ri(u,f)})}else(d||f)&&p.push("translate("+d+e+f+n)}function o(c,u,d,f){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),f.push({i:d.push(r(d)+"rotate(",null,i)-2,x:ri(c,u)})):u&&d.push(r(d)+"rotate("+u+i)}function a(c,u,d,f){c!==u?f.push({i:d.push(r(d)+"skewX(",null,i)-2,x:ri(c,u)}):u&&d.push(r(d)+"skewX("+u+i)}function l(c,u,d,f,p,m){if(c!==d||u!==f){var y=p.push(r(p)+"scale(",null,",",null,")");m.push({i:y-4,x:ri(c,d)},{i:y-2,x:ri(u,f)})}else(d!==1||f!==1)&&p.push(r(p)+"scale("+d+","+f+")")}return function(c,u){var d=[],f=[];return c=t(c),u=t(u),s(c.translateX,c.translateY,u.translateX,u.translateY,d,f),o(c.rotate,u.rotate,d,f),a(c.skewX,u.skewX,d,f),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,d,f),c=u=null,function(p){for(var m=-1,y=f.length,g;++m<y;)d[(g=f[m]).i]=g.x(p);return d.join("")}}}var Yw=zy(Xw,"px, ","px)","deg)"),qw=zy(jw,", ",")",")"),po=0,Yo=0,Fo=0,Hy=1e3,jc,qo,Yc=0,is=0,Su=0,Ca=typeof performance=="object"&&performance.now?performance:Date,Vy=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Ip(){return is||(Vy(Kw),is=Ca.now()+Su)}function Kw(){is=0}function qc(){this._call=this._time=this._next=null}qc.prototype=Gy.prototype={constructor:qc,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?Ip():+n)+(e==null?0:+e),!this._next&&qo!==this&&(qo?qo._next=this:jc=this,qo=this),this._call=t,this._time=n,Gh()},stop:function(){this._call&&(this._call=null,this._time=1/0,Gh())}};function Gy(t,e,n){var i=new qc;return i.restart(t,e,n),i}function $w(){Ip(),++po;for(var t=jc,e;t;)(e=is-t._time)>=0&&t._call.call(void 0,e),t=t._next;--po}function Dg(){is=(Yc=Ca.now())+Su,po=Yo=0;try{$w()}finally{po=0,Qw(),is=0}}function Zw(){var t=Ca.now(),e=t-Yc;e>Hy&&(Su-=e,Yc=t)}function Qw(){for(var t,e=jc,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:jc=n);qo=t,Gh(i)}function Gh(t){if(!po){Yo&&(Yo=clearTimeout(Yo));var e=t-is;e>24?(t<1/0&&(Yo=setTimeout(Dg,t-Ca.now()-Su)),Fo&&(Fo=clearInterval(Fo))):(Fo||(Yc=Ca.now(),Fo=setInterval(Zw,Hy)),po=1,Vy(Dg))}}function Ig(t,e,n){var i=new qc;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var Jw=Ey("start","end","cancel","interrupt"),eT=[],Wy=0,Ug=1,Wh=2,cc=3,Og=4,Xh=5,uc=6;function Eu(t,e,n,i,r,s){var o=t.__transition;if(!o)t.__transition={};else if(n in o)return;tT(t,n,{name:e,index:i,group:r,on:Jw,tween:eT,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:Wy})}function Up(t,e){var n=Qn(t,e);if(n.state>Wy)throw new Error("too late; already scheduled");return n}function mi(t,e){var n=Qn(t,e);if(n.state>cc)throw new Error("too late; already running");return n}function Qn(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function tT(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=Gy(s,0,n.time);function s(c){n.state=Ug,n.timer.restart(o,n.delay,n.time),n.delay<=c&&o(c-n.delay)}function o(c){var u,d,f,p;if(n.state!==Ug)return l();for(u in i)if(p=i[u],p.name===n.name){if(p.state===cc)return Ig(o);p.state===Og?(p.state=uc,p.timer.stop(),p.on.call("interrupt",t,t.__data__,p.index,p.group),delete i[u]):+u<e&&(p.state=uc,p.timer.stop(),p.on.call("cancel",t,t.__data__,p.index,p.group),delete i[u])}if(Ig(function(){n.state===cc&&(n.state=Og,n.timer.restart(a,n.delay,n.time),a(c))}),n.state=Wh,n.on.call("start",t,t.__data__,n.index,n.group),n.state===Wh){for(n.state=cc,r=new Array(f=n.tween.length),u=0,d=-1;u<f;++u)(p=n.tween[u].value.call(t,t.__data__,n.index,n.group))&&(r[++d]=p);r.length=d+1}}function a(c){for(var u=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=Xh,1),d=-1,f=r.length;++d<f;)r[d].call(t,u);n.state===Xh&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=uc,n.timer.stop(),delete i[e];for(var c in i)return;delete t.__transition}}function nT(t,e){var n=t.__transition,i,r,s=!0,o;if(n){e=e==null?null:e+"";for(o in n){if((i=n[o]).name!==e){s=!1;continue}r=i.state>Wh&&i.state<Xh,i.state=uc,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[o]}s&&delete t.__transition}}function iT(t){return this.each(function(){nT(this,t)})}function rT(t,e){var n,i;return function(){var r=mi(this,t),s=r.tween;if(s!==n){i=n=s;for(var o=0,a=i.length;o<a;++o)if(i[o].name===e){i=i.slice(),i.splice(o,1);break}}r.tween=i}}function sT(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var s=mi(this,t),o=s.tween;if(o!==i){r=(i=o).slice();for(var a={name:e,value:n},l=0,c=r.length;l<c;++l)if(r[l].name===e){r[l]=a;break}l===c&&r.push(a)}s.tween=r}}function oT(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=Qn(this.node(),n).tween,r=0,s=i.length,o;r<s;++r)if((o=i[r]).name===t)return o.value;return null}return this.each((e==null?rT:sT)(n,t,e))}function Op(t,e,n){var i=t._id;return t.each(function(){var r=mi(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return Qn(r,i).value[e]}}function Xy(t,e){var n;return(typeof e=="number"?ri:e instanceof ns?Xc:(n=ns(e))?(e=n,Xc):ky)(t,e)}function aT(t){return function(){this.removeAttribute(t)}}function lT(t){return function(){this.removeAttributeNS(t.space,t.local)}}function cT(t,e,n){var i,r=n+"",s;return function(){var o=this.getAttribute(t);return o===r?null:o===i?s:s=e(i=o,n)}}function uT(t,e,n){var i,r=n+"",s;return function(){var o=this.getAttributeNS(t.space,t.local);return o===r?null:o===i?s:s=e(i=o,n)}}function fT(t,e,n){var i,r,s;return function(){var o,a=n(this),l;return a==null?void this.removeAttribute(t):(o=this.getAttribute(t),l=a+"",o===l?null:o===i&&l===r?s:(r=l,s=e(i=o,a)))}}function hT(t,e,n){var i,r,s;return function(){var o,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),l=a+"",o===l?null:o===i&&l===r?s:(r=l,s=e(i=o,a)))}}function dT(t,e){var n=xu(t),i=n==="transform"?qw:Xy;return this.attrTween(t,typeof e=="function"?(n.local?hT:fT)(n,i,Op(this,"attr."+t,e)):e==null?(n.local?lT:aT)(n):(n.local?uT:cT)(n,i,e))}function pT(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function mT(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function gT(t,e){var n,i;function r(){var s=e.apply(this,arguments);return s!==i&&(n=(i=s)&&mT(t,s)),n}return r._value=e,r}function _T(t,e){var n,i;function r(){var s=e.apply(this,arguments);return s!==i&&(n=(i=s)&&pT(t,s)),n}return r._value=e,r}function vT(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=xu(t);return this.tween(n,(i.local?gT:_T)(i,e))}function yT(t,e){return function(){Up(this,t).delay=+e.apply(this,arguments)}}function xT(t,e){return e=+e,function(){Up(this,t).delay=e}}function ST(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?yT:xT)(e,t)):Qn(this.node(),e).delay}function ET(t,e){return function(){mi(this,t).duration=+e.apply(this,arguments)}}function MT(t,e){return e=+e,function(){mi(this,t).duration=e}}function AT(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?ET:MT)(e,t)):Qn(this.node(),e).duration}function wT(t,e){if(typeof e!="function")throw new Error;return function(){mi(this,t).ease=e}}function TT(t){var e=this._id;return arguments.length?this.each(wT(e,t)):Qn(this.node(),e).ease}function CT(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;mi(this,t).ease=n}}function RT(t){if(typeof t!="function")throw new Error;return this.each(CT(this._id,t))}function bT(t){typeof t!="function"&&(t=wy(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var s=e[r],o=s.length,a=i[r]=[],l,c=0;c<o;++c)(l=s[c])&&t.call(l,l.__data__,c,s)&&a.push(l);return new ki(i,this._parents,this._name,this._id)}function PT(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,s=Math.min(i,r),o=new Array(i),a=0;a<s;++a)for(var l=e[a],c=n[a],u=l.length,d=o[a]=new Array(u),f,p=0;p<u;++p)(f=l[p]||c[p])&&(d[p]=f);for(;a<i;++a)o[a]=e[a];return new ki(o,this._parents,this._name,this._id)}function LT(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function NT(t,e,n){var i,r,s=LT(e)?Up:mi;return function(){var o=s(this,t),a=o.on;a!==i&&(r=(i=a).copy()).on(e,n),o.on=r}}function DT(t,e){var n=this._id;return arguments.length<2?Qn(this.node(),n).on.on(t):this.each(NT(n,t,e))}function IT(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function UT(){return this.on("end.remove",IT(this._id))}function OT(t){var e=this._name,n=this._id;typeof t!="function"&&(t=bp(t));for(var i=this._groups,r=i.length,s=new Array(r),o=0;o<r;++o)for(var a=i[o],l=a.length,c=s[o]=new Array(l),u,d,f=0;f<l;++f)(u=a[f])&&(d=t.call(u,u.__data__,f,a))&&("__data__"in u&&(d.__data__=u.__data__),c[f]=d,Eu(c[f],e,n,f,c,Qn(u,n)));return new ki(s,this._parents,e,n)}function FT(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Ay(t));for(var i=this._groups,r=i.length,s=[],o=[],a=0;a<r;++a)for(var l=i[a],c=l.length,u,d=0;d<c;++d)if(u=l[d]){for(var f=t.call(u,u.__data__,d,l),p,m=Qn(u,n),y=0,g=f.length;y<g;++y)(p=f[y])&&Eu(p,e,n,y,f,m);s.push(f),o.push(u)}return new ki(s,o,e,n)}var kT=Fa.prototype.constructor;function BT(){return new kT(this._groups,this._parents)}function zT(t,e){var n,i,r;return function(){var s=ho(this,t),o=(this.style.removeProperty(t),ho(this,t));return s===o?null:s===n&&o===i?r:r=e(n=s,i=o)}}function jy(t){return function(){this.style.removeProperty(t)}}function HT(t,e,n){var i,r=n+"",s;return function(){var o=ho(this,t);return o===r?null:o===i?s:s=e(i=o,n)}}function VT(t,e,n){var i,r,s;return function(){var o=ho(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),ho(this,t))),o===l?null:o===i&&l===r?s:(r=l,s=e(i=o,a))}}function GT(t,e){var n,i,r,s="style."+e,o="end."+s,a;return function(){var l=mi(this,t),c=l.on,u=l.value[s]==null?a||(a=jy(e)):void 0;(c!==n||r!==u)&&(i=(n=c).copy()).on(o,r=u),l.on=i}}function WT(t,e,n){var i=(t+="")=="transform"?Yw:Xy;return e==null?this.styleTween(t,zT(t,i)).on("end.style."+t,jy(t)):typeof e=="function"?this.styleTween(t,VT(t,i,Op(this,"style."+t,e))).each(GT(this._id,t)):this.styleTween(t,HT(t,i,e),n).on("end.style."+t,null)}function XT(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function jT(t,e,n){var i,r;function s(){var o=e.apply(this,arguments);return o!==r&&(i=(r=o)&&XT(t,o,n)),i}return s._value=e,s}function YT(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,jT(t,e,n??""))}function qT(t){return function(){this.textContent=t}}function KT(t){return function(){var e=t(this);this.textContent=e??""}}function $T(t){return this.tween("text",typeof t=="function"?KT(Op(this,"text",t)):qT(t==null?"":t+""))}function ZT(t){return function(e){this.textContent=t.call(this,e)}}function QT(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&ZT(r)),e}return i._value=t,i}function JT(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,QT(t))}function eC(){for(var t=this._name,e=this._id,n=Yy(),i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,l,c=0;c<a;++c)if(l=o[c]){var u=Qn(l,e);Eu(l,t,n,c,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new ki(i,this._parents,t,n)}function tC(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(s,o){var a={value:o},l={value:function(){--r===0&&s()}};n.each(function(){var c=mi(this,i),u=c.on;u!==t&&(e=(t=u).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),c.on=e}),r===0&&s()})}var nC=0;function ki(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function Yy(){return++nC}var _i=Fa.prototype;ki.prototype={constructor:ki,select:OT,selectAll:FT,selectChild:_i.selectChild,selectChildren:_i.selectChildren,filter:bT,merge:PT,selection:BT,transition:eC,call:_i.call,nodes:_i.nodes,node:_i.node,size:_i.size,empty:_i.empty,each:_i.each,on:DT,attr:dT,attrTween:vT,style:WT,styleTween:YT,text:$T,textTween:JT,remove:UT,tween:oT,delay:ST,duration:AT,ease:TT,easeVarying:RT,end:tC,[Symbol.iterator]:_i[Symbol.iterator]};function iC(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var rC={time:null,delay:0,duration:250,ease:iC};function sC(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function oC(t){var e,n;t instanceof ki?(e=t._id,t=t._name):(e=Yy(),(n=rC).time=Ip(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&Eu(l,t,e,c,o,n||sC(l,e));return new ki(i,this._parents,t,e)}Fa.prototype.interrupt=iT;Fa.prototype.transition=oC;const jh=Math.PI,Yh=2*jh,Fr=1e-6,aC=Yh-Fr;function qy(t){this._+=t[0];for(let e=1,n=t.length;e<n;++e)this._+=arguments[e]+t[e]}function lC(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return qy;const n=10**e;return function(i){this._+=i[0];for(let r=1,s=i.length;r<s;++r)this._+=Math.round(arguments[r]*n)/n+i[r]}}class cC{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=e==null?qy:lC(e)}moveTo(e,n){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,n){this._append`L${this._x1=+e},${this._y1=+n}`}quadraticCurveTo(e,n,i,r){this._append`Q${+e},${+n},${this._x1=+i},${this._y1=+r}`}bezierCurveTo(e,n,i,r,s,o){this._append`C${+e},${+n},${+i},${+r},${this._x1=+s},${this._y1=+o}`}arcTo(e,n,i,r,s){if(e=+e,n=+n,i=+i,r=+r,s=+s,s<0)throw new Error(`negative radius: ${s}`);let o=this._x1,a=this._y1,l=i-e,c=r-n,u=o-e,d=a-n,f=u*u+d*d;if(this._x1===null)this._append`M${this._x1=e},${this._y1=n}`;else if(f>Fr)if(!(Math.abs(d*l-c*u)>Fr)||!s)this._append`L${this._x1=e},${this._y1=n}`;else{let p=i-o,m=r-a,y=l*l+c*c,g=p*p+m*m,h=Math.sqrt(y),v=Math.sqrt(f),_=s*Math.tan((jh-Math.acos((y+f-g)/(2*h*v)))/2),E=_/v,R=_/h;Math.abs(E-1)>Fr&&this._append`L${e+E*u},${n+E*d}`,this._append`A${s},${s},0,0,${+(d*p>u*m)},${this._x1=e+R*l},${this._y1=n+R*c}`}}arc(e,n,i,r,s,o){if(e=+e,n=+n,i=+i,o=!!o,i<0)throw new Error(`negative radius: ${i}`);let a=i*Math.cos(r),l=i*Math.sin(r),c=e+a,u=n+l,d=1^o,f=o?r-s:s-r;this._x1===null?this._append`M${c},${u}`:(Math.abs(this._x1-c)>Fr||Math.abs(this._y1-u)>Fr)&&this._append`L${c},${u}`,i&&(f<0&&(f=f%Yh+Yh),f>aC?this._append`A${i},${i},0,1,${d},${e-a},${n-l}A${i},${i},0,1,${d},${this._x1=c},${this._y1=u}`:f>Fr&&this._append`A${i},${i},0,${+(f>=jh)},${d},${this._x1=e+i*Math.cos(s)},${this._y1=n+i*Math.sin(s)}`)}rect(e,n,i,r){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+n}h${i=+i}v${+r}h${-i}Z`}toString(){return this._}}function ji(t){return function(){return t}}const Fg=Math.abs,Vt=Math.atan2,Cr=Math.cos,uC=Math.max,hf=Math.min,ti=Math.sin,js=Math.sqrt,nn=1e-12,Ra=Math.PI,Kc=Ra/2,fC=2*Ra;function hC(t){return t>1?0:t<-1?Ra:Math.acos(t)}function kg(t){return t>=1?Kc:t<=-1?-Kc:Math.asin(t)}function dC(t){let e=3;return t.digits=function(n){if(!arguments.length)return e;if(n==null)e=null;else{const i=Math.floor(n);if(!(i>=0))throw new RangeError(`invalid digits: ${n}`);e=i}return t},()=>new cC(e)}function pC(t){return t.innerRadius}function mC(t){return t.outerRadius}function gC(t){return t.startAngle}function _C(t){return t.endAngle}function vC(t){return t&&t.padAngle}function yC(t,e,n,i,r,s,o,a){var l=n-t,c=i-e,u=o-r,d=a-s,f=d*l-u*c;if(!(f*f<nn))return f=(u*(e-s)-d*(t-r))/f,[t+f*l,e+f*c]}function El(t,e,n,i,r,s,o){var a=t-n,l=e-i,c=(o?s:-s)/js(a*a+l*l),u=c*l,d=-c*a,f=t+u,p=e+d,m=n+u,y=i+d,g=(f+m)/2,h=(p+y)/2,v=m-f,_=y-p,E=v*v+_*_,R=r-s,C=f*y-m*p,T=(_<0?-1:1)*js(uC(0,R*R*E-C*C)),P=(C*_-v*T)/E,w=(-C*v-_*T)/E,S=(C*_+v*T)/E,L=(-C*v+_*T)/E,F=P-g,I=w-h,z=S-g,K=L-h;return F*F+I*I>z*z+K*K&&(P=S,w=L),{cx:P,cy:w,x01:-u,y01:-d,x11:P*(r/R-1),y11:w*(r/R-1)}}function xC(){var t=pC,e=mC,n=ji(0),i=null,r=gC,s=_C,o=vC,a=null,l=dC(c);function c(){var u,d,f=+t.apply(this,arguments),p=+e.apply(this,arguments),m=r.apply(this,arguments)-Kc,y=s.apply(this,arguments)-Kc,g=Fg(y-m),h=y>m;if(a||(a=u=l()),p<f&&(d=p,p=f,f=d),!(p>nn))a.moveTo(0,0);else if(g>fC-nn)a.moveTo(p*Cr(m),p*ti(m)),a.arc(0,0,p,m,y,!h),f>nn&&(a.moveTo(f*Cr(y),f*ti(y)),a.arc(0,0,f,y,m,h));else{var v=m,_=y,E=m,R=y,C=g,T=g,P=o.apply(this,arguments)/2,w=P>nn&&(i?+i.apply(this,arguments):js(f*f+p*p)),S=hf(Fg(p-f)/2,+n.apply(this,arguments)),L=S,F=S,I,z;if(w>nn){var K=kg(w/f*ti(P)),Y=kg(w/p*ti(P));(C-=K*2)>nn?(K*=h?1:-1,E+=K,R-=K):(C=0,E=R=(m+y)/2),(T-=Y*2)>nn?(Y*=h?1:-1,v+=Y,_-=Y):(T=0,v=_=(m+y)/2)}var $=p*Cr(v),D=p*ti(v),Z=f*Cr(R),Q=f*ti(R);if(S>nn){var se=p*Cr(_),ye=p*ti(_),Be=f*Cr(E),q=f*ti(E),J;if(g<Ra)if(J=yC($,D,Be,q,se,ye,Z,Q)){var ce=$-J[0],ue=D-J[1],Te=se-J[0],Ne=ye-J[1],ke=1/ti(hC((ce*Te+ue*Ne)/(js(ce*ce+ue*ue)*js(Te*Te+Ne*Ne)))/2),tt=js(J[0]*J[0]+J[1]*J[1]);L=hf(S,(f-tt)/(ke-1)),F=hf(S,(p-tt)/(ke+1))}else L=F=0}T>nn?F>nn?(I=El(Be,q,$,D,p,F,h),z=El(se,ye,Z,Q,p,F,h),a.moveTo(I.cx+I.x01,I.cy+I.y01),F<S?a.arc(I.cx,I.cy,F,Vt(I.y01,I.x01),Vt(z.y01,z.x01),!h):(a.arc(I.cx,I.cy,F,Vt(I.y01,I.x01),Vt(I.y11,I.x11),!h),a.arc(0,0,p,Vt(I.cy+I.y11,I.cx+I.x11),Vt(z.cy+z.y11,z.cx+z.x11),!h),a.arc(z.cx,z.cy,F,Vt(z.y11,z.x11),Vt(z.y01,z.x01),!h))):(a.moveTo($,D),a.arc(0,0,p,v,_,!h)):a.moveTo($,D),!(f>nn)||!(C>nn)?a.lineTo(Z,Q):L>nn?(I=El(Z,Q,se,ye,f,-L,h),z=El($,D,Be,q,f,-L,h),a.lineTo(I.cx+I.x01,I.cy+I.y01),L<S?a.arc(I.cx,I.cy,L,Vt(I.y01,I.x01),Vt(z.y01,z.x01),!h):(a.arc(I.cx,I.cy,L,Vt(I.y01,I.x01),Vt(I.y11,I.x11),!h),a.arc(0,0,f,Vt(I.cy+I.y11,I.cx+I.x11),Vt(z.cy+z.y11,z.cx+z.x11),h),a.arc(z.cx,z.cy,L,Vt(z.y11,z.x11),Vt(z.y01,z.x01),!h))):a.arc(0,0,f,R,E,h)}if(a.closePath(),u)return a=null,u+""||null}return c.centroid=function(){var u=(+t.apply(this,arguments)+ +e.apply(this,arguments))/2,d=(+r.apply(this,arguments)+ +s.apply(this,arguments))/2-Ra/2;return[Cr(d)*u,ti(d)*u]},c.innerRadius=function(u){return arguments.length?(t=typeof u=="function"?u:ji(+u),c):t},c.outerRadius=function(u){return arguments.length?(e=typeof u=="function"?u:ji(+u),c):e},c.cornerRadius=function(u){return arguments.length?(n=typeof u=="function"?u:ji(+u),c):n},c.padRadius=function(u){return arguments.length?(i=u==null?null:typeof u=="function"?u:ji(+u),c):i},c.startAngle=function(u){return arguments.length?(r=typeof u=="function"?u:ji(+u),c):r},c.endAngle=function(u){return arguments.length?(s=typeof u=="function"?u:ji(+u),c):s},c.padAngle=function(u){return arguments.length?(o=typeof u=="function"?u:ji(+u),c):o},c.context=function(u){return arguments.length?(a=u??null,c):a},c}function Ko(t,e,n){this.k=t,this.x=e,this.y=n}Ko.prototype={constructor:Ko,scale:function(t){return t===1?this:new Ko(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Ko(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Ko.prototype;const Ml=t=>{const{psi:e}=t,n=le.useRef(),i=le.useRef(),r=2*Math.PI,o=500/2,a=o*.5,l=xC().innerRadius(a).outerRadius(o).startAngle(0);return le.useEffect(()=>{const c=d=>f=>{const p=Dp(f.endAngle,d);return m=>(f.endAngle=p(m),l(f))},u=e/40;i.current&&cf(i.current).transition().style("fill",`${Xs(e)}`).duration(1e3).attrTween("d",c(u*r))},[e]),le.useEffect(()=>{const c=e/40;cf(n.current).datum({endAngle:r}).style("fill","#fff").style("stroke","#000").attr("d",l),cf(i.current).datum({endAngle:c*r}).style("fill",`${Xs(e)}`).attr("d",l)},[]),X.jsx("svg",{viewBox:"0,0,500,500",children:X.jsxs("g",{transform:"translate(250,250)",children:[X.jsx("circle",{r:"250",cx:"0",cy:"0",fill:"white"}),X.jsx("path",{ref:n}),X.jsx("path",{ref:i}),X.jsx("text",{style:{fontSize:"150px"},x:"-75",y:"50",children:e})]})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fp="166",hs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},SC=0,Bg=1,EC=2,Ky=1,MC=2,Mi=3,hn=0,un=1,Ci=2,mr=0,no=1,zg=2,Hg=3,Vg=4,AC=5,Br=100,wC=101,TC=102,CC=103,RC=104,bC=200,PC=201,LC=202,NC=203,qh=204,Kh=205,DC=206,IC=207,UC=208,OC=209,FC=210,kC=211,BC=212,zC=213,HC=214,VC=0,GC=1,WC=2,$c=3,XC=4,jC=5,YC=6,qC=7,$y=0,KC=1,$C=2,gr=0,ZC=1,QC=2,JC=3,eR=4,tR=5,nR=6,iR=7,Zy=300,mo=301,go=302,$h=303,Zh=304,Mu=306,Qh=1e3,Xr=1001,Jh=1002,Nn=1003,rR=1004,Al=1005,jn=1006,df=1007,jr=1008,Bi=1009,Qy=1010,Jy=1011,ba=1012,kp=1013,rs=1014,Pi=1015,Ba=1016,Bp=1017,zp=1018,_o=1020,ex=35902,tx=1021,nx=1022,Yn=1023,ix=1024,rx=1025,io=1026,vo=1027,sx=1028,Hp=1029,ox=1030,Vp=1031,Gp=1033,fc=33776,hc=33777,dc=33778,pc=33779,ed=35840,td=35841,nd=35842,id=35843,rd=36196,sd=37492,od=37496,ad=37808,ld=37809,cd=37810,ud=37811,fd=37812,hd=37813,dd=37814,pd=37815,md=37816,gd=37817,_d=37818,vd=37819,yd=37820,xd=37821,mc=36492,Sd=36494,Ed=36495,ax=36283,Md=36284,Ad=36285,wd=36286,sR=3200,oR=3201,lx=0,aR=1,rr="",ii="srgb",Mr="srgb-linear",Wp="display-p3",Au="display-p3-linear",Zc="linear",rt="srgb",Qc="rec709",Jc="p3",ps=7680,Gg=519,lR=512,cR=513,uR=514,cx=515,fR=516,hR=517,dR=518,pR=519,Wg=35044,Xg="300 es",Li=2e3,eu=2001;class cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jg=1234567;const oa=Math.PI/180,Pa=180/Math.PI;function Ao(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function jt(t,e,n){return Math.max(e,Math.min(n,t))}function Xp(t,e){return(t%e+e)%e}function mR(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function gR(t,e,n){return t!==e?(n-t)/(e-t):0}function aa(t,e,n){return(1-n)*t+n*e}function _R(t,e,n,i){return aa(t,e,1-Math.exp(-n*i))}function vR(t,e=1){return e-Math.abs(Xp(t,e*2)-e)}function yR(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function xR(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function SR(t,e){return t+Math.floor(Math.random()*(e-t+1))}function ER(t,e){return t+Math.random()*(e-t)}function MR(t){return t*(.5-Math.random())}function AR(t){t!==void 0&&(jg=t);let e=jg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wR(t){return t*oa}function TR(t){return t*Pa}function CR(t){return(t&t-1)===0&&t!==0}function RR(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function bR(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function PR(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*d,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*m,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*m,a*c);break;case"ZYZ":t.set(l*m,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ns(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const LR={DEG2RAD:oa,RAD2DEG:Pa,generateUUID:Ao,clamp:jt,euclideanModulo:Xp,mapLinear:mR,inverseLerp:gR,lerp:aa,damp:_R,pingpong:vR,smoothstep:yR,smootherstep:xR,randInt:SR,randFloat:ER,randFloatSpread:MR,seededRandom:AR,degToRad:wR,radToDeg:TR,isPowerOfTwo:CR,ceilPowerOfTwo:RR,floorPowerOfTwo:bR,setQuaternionFromProperEuler:PR,normalize:Kt,denormalize:Ns};class Fe{constructor(e=0,n=0){Fe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],m=i[8],y=r[0],g=r[3],h=r[6],v=r[1],_=r[4],E=r[7],R=r[2],C=r[5],T=r[8];return s[0]=o*y+a*v+l*R,s[3]=o*g+a*_+l*C,s[6]=o*h+a*E+l*T,s[1]=c*y+u*v+d*R,s[4]=c*g+u*_+d*C,s[7]=c*h+u*E+d*T,s[2]=f*y+p*v+m*R,s[5]=f*g+p*_+m*C,s[8]=f*h+p*E+m*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,m=n*d+i*f+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(pf.makeScale(e,n)),this}rotate(e){return this.premultiply(pf.makeRotation(-e)),this}translate(e,n){return this.premultiply(pf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pf=new He;function ux(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function tu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function NR(){const t=tu("canvas");return t.style.display="block",t}const Yg={};function fx(t){t in Yg||(Yg[t]=!0,console.warn(t))}function DR(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const qg=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kg=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wl={[Mr]:{transfer:Zc,primaries:Qc,toReference:t=>t,fromReference:t=>t},[ii]:{transfer:rt,primaries:Qc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Au]:{transfer:Zc,primaries:Jc,toReference:t=>t.applyMatrix3(Kg),fromReference:t=>t.applyMatrix3(qg)},[Wp]:{transfer:rt,primaries:Jc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Kg),fromReference:t=>t.applyMatrix3(qg).convertLinearToSRGB()}},IR=new Set([Mr,Au]),Qe={enabled:!0,_workingColorSpace:Mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!IR.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=wl[e].toReference,r=wl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return wl[t].primaries},getTransfer:function(t){return t===rr?Zc:wl[t].transfer}};function ro(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function mf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ms;class UR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=tu("canvas")),ms.width=e.width,ms.height=e.height;const i=ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=tu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ro(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ro(n[i]/255)*255):n[i]=ro(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OR=0;class hx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OR++}),this.uuid=Ao(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gf(r[o].image)):s.push(gf(r[o]))}else s=gf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function gf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?UR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FR=0;class fn extends cs{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Xr,r=Xr,s=jn,o=jr,a=Yn,l=Bi,c=fn.DEFAULT_ANISOTROPY,u=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FR++}),this.uuid=Ao(),this.name="",this.source=new hx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qh:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case Jh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qh:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case Jh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Zy;fn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],m=l[9],y=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,E=(p+1)/2,R=(h+1)/2,C=(u+f)/4,T=(d+y)/4,P=(m+g)/4;return _>E&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=T/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-y)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kR extends cs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new hx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends kR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class dx extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BR extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],m=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=m,e[n+3]=y;return}if(d!==y||l!==f||c!==p||u!==m){let g=1-a;const h=l*f+c*p+u*m+d*y,v=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const R=Math.sqrt(_),C=Math.atan2(R,h*v);g=Math.sin(g*C)/R,a=Math.sin(a*C)/R}const E=a*v;if(l=l*g+f*E,c=c*g+p*E,u=u*g+m*E,d=d*g+y*E,g===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+u*d+l*p-c*f,e[n+1]=l*m+u*f+c*d-a*p,e[n+2]=c*m+u*p+a*f-l*d,e[n+3]=u*m-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d-f*p*m;break;case"YXZ":this._x=f*u*d+c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d+f*p*m;break;case"ZXY":this._x=f*u*d-c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d-f*p*m;break;case"ZYX":this._x=f*u*d-c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d+f*p*m;break;case"YZX":this._x=f*u*d+c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d-f*p*m;break;case"XZY":this._x=f*u*d-c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($g.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($g.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _f.copy(this).projectOnVector(e),this.sub(_f)}reflect(e){return this.sub(_f.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _f=new k,$g=new os;class za{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tl.copy(i.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Cl.subVectors(this.max,ko),gs.subVectors(e.a,ko),_s.subVectors(e.b,ko),vs.subVectors(e.c,ko),Yi.subVectors(_s,gs),qi.subVectors(vs,_s),Rr.subVectors(gs,vs);let n=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-Rr.z,Rr.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,Rr.z,0,-Rr.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-Rr.y,Rr.x,0];return!vf(n,gs,_s,vs,Cl)||(n=[1,0,0,0,1,0,0,0,1],!vf(n,gs,_s,vs,Cl))?!1:(Rl.crossVectors(Yi,qi),n=[Rl.x,Rl.y,Rl.z],vf(n,gs,_s,vs,Cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new k,new k,new k,new k,new k,new k,new k,new k],kn=new k,Tl=new za,gs=new k,_s=new k,vs=new k,Yi=new k,qi=new k,Rr=new k,ko=new k,Cl=new k,Rl=new k,br=new k;function vf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){br.fromArray(t,s);const a=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=e.dot(br),c=n.dot(br),u=i.dot(br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zR=new za,Bo=new k,yf=new k;class jp{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):zR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const n=Bo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Bo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(yf)),this.expandByPoint(Bo.copy(e.center).sub(yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new k,xf=new k,bl=new k,Ki=new k,Sf=new k,Pl=new k,Ef=new k;class px{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xf.copy(e).add(n).multiplyScalar(.5),bl.copy(n).sub(e).normalize(),Ki.copy(this.origin).sub(xf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(bl),a=Ki.dot(this.direction),l=-Ki.dot(bl),c=Ki.lengthSq(),u=Math.abs(1-o*o);let d,f,p,m;if(u>0)if(d=o*l-a,f=o*a-l,m=s*u,d>=0)if(f>=-m)if(f<=m){const y=1/u;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xf).addScaledVector(bl,f),p}intersectSphere(e,n){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,i,r,s){Sf.subVectors(n,e),Pl.subVectors(i,e),Ef.crossVectors(Sf,Pl);let o=this.direction.dot(Ef),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const l=a*this.direction.dot(Pl.crossVectors(Ki,Pl));if(l<0)return null;const c=a*this.direction.dot(Sf.cross(Ki));if(c<0||l+c>o)return null;const u=-a*Ki.dot(Ef);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,m,y,g){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,m,y,g)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,m,y,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=m,h[11]=y,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ys.setFromMatrixColumn(e,0).length(),s=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,m=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+m*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=m+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,m=c*u,y=c*d;n[0]=f+y*a,n[4]=m*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-m,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,m=c*u,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,m=a*u,y=a*d;n[0]=l*u,n[4]=m*c-p,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=p*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,m=a*l,y=a*c;n[0]=l*u,n[4]=y-f*d,n[8]=m*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+m,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*c,m=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+y,n[5]=o*u,n[9]=p*d-m,n[2]=m*d-p,n[6]=a*u,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HR,e,VR)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),$i.crossVectors(i,mn),$i.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),$i.crossVectors(i,mn)),$i.normalize(),Ll.crossVectors(mn,$i),r[0]=$i.x,r[4]=Ll.x,r[8]=mn.x,r[1]=$i.y,r[5]=Ll.y,r[9]=mn.y,r[2]=$i.z,r[6]=Ll.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],m=i[2],y=i[6],g=i[10],h=i[14],v=i[3],_=i[7],E=i[11],R=i[15],C=r[0],T=r[4],P=r[8],w=r[12],S=r[1],L=r[5],F=r[9],I=r[13],z=r[2],K=r[6],Y=r[10],$=r[14],D=r[3],Z=r[7],Q=r[11],se=r[15];return s[0]=o*C+a*S+l*z+c*D,s[4]=o*T+a*L+l*K+c*Z,s[8]=o*P+a*F+l*Y+c*Q,s[12]=o*w+a*I+l*$+c*se,s[1]=u*C+d*S+f*z+p*D,s[5]=u*T+d*L+f*K+p*Z,s[9]=u*P+d*F+f*Y+p*Q,s[13]=u*w+d*I+f*$+p*se,s[2]=m*C+y*S+g*z+h*D,s[6]=m*T+y*L+g*K+h*Z,s[10]=m*P+y*F+g*Y+h*Q,s[14]=m*w+y*I+g*$+h*se,s[3]=v*C+_*S+E*z+R*D,s[7]=v*T+_*L+E*K+R*Z,s[11]=v*P+_*F+E*Y+R*Q,s[15]=v*w+_*I+E*$+R*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],m=e[3],y=e[7],g=e[11],h=e[15];return m*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+y*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+g*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],m=e[12],y=e[13],g=e[14],h=e[15],v=d*g*c-y*f*c+y*l*p-a*g*p-d*l*h+a*f*h,_=m*f*c-u*g*c-m*l*p+o*g*p+u*l*h-o*f*h,E=u*y*c-m*d*c+m*a*p-o*y*p-u*a*h+o*d*h,R=m*d*l-u*y*l-m*a*f+o*y*f+u*a*g-o*d*g,C=n*v+i*_+r*E+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=v*T,e[1]=(y*f*s-d*g*s-y*r*p+i*g*p+d*r*h-i*f*h)*T,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*h+i*l*h)*T,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*T,e[4]=_*T,e[5]=(u*g*s-m*f*s+m*r*p-n*g*p-u*r*h+n*f*h)*T,e[6]=(m*l*s-o*g*s-m*r*c+n*g*c+o*r*h-n*l*h)*T,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*T,e[8]=E*T,e[9]=(m*d*s-u*y*s-m*i*p+n*y*p+u*i*h-n*d*h)*T,e[10]=(o*y*s-m*a*s+m*i*c-n*y*c-o*i*h+n*a*h)*T,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*T,e[12]=R*T,e[13]=(u*y*r-m*d*r+m*i*f-n*y*f-u*i*g+n*d*g)*T,e[14]=(m*a*r-o*y*r-m*i*l+n*y*l+o*i*g-n*a*g)*T,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,m=s*d,y=o*u,g=o*d,h=a*d,v=l*c,_=l*u,E=l*d,R=i.x,C=i.y,T=i.z;return r[0]=(1-(y+h))*R,r[1]=(p+E)*R,r[2]=(m-_)*R,r[3]=0,r[4]=(p-E)*C,r[5]=(1-(f+h))*C,r[6]=(g+v)*C,r[7]=0,r[8]=(m+_)*T,r[9]=(g-v)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ys.set(r[0],r[1],r[2]).length();const o=ys.set(r[4],r[5],r[6]).length(),a=ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,u=1/o,d=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,n.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Li){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,m;if(a===Li)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===eu)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Li){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let m,y;if(a===Li)m=(o+s)*d,y=-2*d;else if(a===eu)m=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ys=new k,Bn=new Rt,HR=new k(0,0,0),VR=new k(1,1,1),$i=new k,Ll=new k,mn=new k,Zg=new Rt,Qg=new os;class zi{constructor(e=0,n=0,i=0,r=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qg.setFromEuler(this),this.setFromQuaternion(Qg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class mx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GR=0;const Jg=new k,xs=new os,xi=new Rt,Nl=new k,zo=new k,WR=new k,XR=new os,e0=new k(1,0,0),t0=new k(0,1,0),n0=new k(0,0,1),i0={type:"added"},jR={type:"removed"},Ss={type:"childadded",child:null},Mf={type:"childremoved",child:null};class xn extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GR++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new k,n=new zi,i=new os,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new He}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(e0,e)}rotateY(e){return this.rotateOnAxis(t0,e)}rotateZ(e){return this.rotateOnAxis(n0,e)}translateOnAxis(e,n){return Jg.copy(e).applyQuaternion(this.quaternion),this.position.add(Jg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(e0,e)}translateY(e){return this.translateOnAxis(t0,e)}translateZ(e){return this.translateOnAxis(n0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Nl.copy(e):Nl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(zo,Nl,this.up):xi.lookAt(Nl,zo,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),xs.setFromRotationMatrix(xi),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(i0),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jR),Mf.child=e,this.dispatchEvent(Mf),Mf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(i0),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,WR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,XR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xn.DEFAULT_UP=new k(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new k,Si=new k,Af=new k,Ei=new k,Es=new k,Ms=new k,r0=new k,wf=new k,Tf=new k,Cf=new k;class ai{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),Si.subVectors(i,n),Af.subVectors(e,n);const o=zn.dot(zn),a=zn.dot(Si),l=zn.dot(Af),c=Si.dot(Si),u=Si.dot(Af),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),Si.subVectors(e,n),zn.cross(Si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),zn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ai.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Es.subVectors(r,i),Ms.subVectors(s,i),wf.subVectors(e,i);const l=Es.dot(wf),c=Ms.dot(wf);if(l<=0&&c<=0)return n.copy(i);Tf.subVectors(e,r);const u=Es.dot(Tf),d=Ms.dot(Tf);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Es,o);Cf.subVectors(e,s);const p=Es.dot(Cf),m=Ms.dot(Cf);if(m>=0&&p<=m)return n.copy(s);const y=p*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Ms,a);const g=u*m-p*d;if(g<=0&&d-u>=0&&p-m>=0)return r0.subVectors(s,r),a=(d-u)/(d-u+(p-m)),n.copy(r).addScaledVector(r0,a);const h=1/(g+y+f);return o=y*h,a=f*h,n.copy(i).addScaledVector(Es,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Dl={h:0,s:0,l:0};function Rf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=Xp(e,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Rf(o,s,e+1/3),this.g=Rf(o,s,e),this.b=Rf(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=ii){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ii){const i=gx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}copyLinearToSRGB(e){return this.r=mf(e.r),this.g=mf(e.g),this.b=mf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Qe.fromWorkingColorSpace(Wt.copy(this),e),Math.round(jt(Wt.r*255,0,255))*65536+Math.round(jt(Wt.g*255,0,255))*256+Math.round(jt(Wt.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=ii){Qe.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==ii?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+n,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Zi),e.getHSL(Dl);const i=aa(Zi.h,Dl.h,n),r=aa(Zi.s,Dl.s,n),s=aa(Zi.l,Dl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Je;Je.NAMES=gx;let YR=0;class Ha extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YR++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=no,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=Kh,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=$c,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(i.blending=this.blending),this.side!==hn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qh&&(i.blendSrc=this.blendSrc),this.blendDst!==Kh&&(i.blendDst=this.blendDst),this.blendEquation!==Br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$c&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class _x extends Ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=$y,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new k,Il=new Fe;class hi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return fx("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Il.fromBufferAttribute(this,n),Il.applyMatrix3(e),this.setXY(n,Il.x,Il.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ns(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ns(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ns(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ns(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ns(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wg&&(e.usage=this.usage),e}}class vx extends hi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class yx extends hi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class di extends hi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let qR=0;const Tn=new Rt,bf=new xn,As=new k,gn=new za,Ho=new za,Lt=new k;class Ar extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qR++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ux(e)?yx:vx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return bf.lookAt(e),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new di(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ho.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(gn.min,Ho.min),gn.expandByPoint(Lt),Lt.addVectors(gn.max,Ho.max),gn.expandByPoint(Lt)):(gn.expandByPoint(Ho.min),gn.expandByPoint(Ho.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),Lt.add(As)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new k,l[P]=new k;const c=new k,u=new k,d=new k,f=new Fe,p=new Fe,m=new Fe,y=new k,g=new k;function h(P,w,S){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,S),u.sub(c),d.sub(c),p.sub(f),m.sub(f);const L=1/(p.x*m.y-m.x*p.y);isFinite(L)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(L),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(L),a[P].add(y),a[w].add(y),a[S].add(y),l[P].add(g),l[w].add(g),l[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,w=v.length;P<w;++P){const S=v[P],L=S.start,F=S.count;for(let I=L,z=L+F;I<z;I+=3)h(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const _=new k,E=new k,R=new k,C=new k;function T(P){R.fromBufferAttribute(r,P),C.copy(R);const w=a[P];_.copy(w),_.sub(R.multiplyScalar(R.dot(w))).normalize(),E.crossVectors(C,w);const L=E.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,L)}for(let P=0,w=v.length;P<w;++P){const S=v[P],L=S.start,F=S.count;for(let I=L,z=L+F;I<z;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,d=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const m=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)f[m++]=c[p++]}return new hi(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ar,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const s0=new Rt,Pr=new px,Ul=new jp,o0=new k,ws=new k,Ts=new k,Cs=new k,Pf=new k,Ol=new k,Fl=new Fe,kl=new Fe,Bl=new Fe,a0=new k,l0=new k,c0=new k,zl=new k,Hl=new k;class ct extends xn{constructor(e=new Ar,n=new _x){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ol.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Pf.fromBufferAttribute(d,e),o?Ol.addScaledVector(Pf,u):Ol.addScaledVector(Pf.sub(n),u))}n.add(Ol)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(s),Pr.copy(e.ray).recast(e.near),!(Ul.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Ul,o0)===null||Pr.origin.distanceToSquared(o0)>(e.far-e.near)**2))&&(s0.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(s0),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){const g=f[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),_=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let E=v,R=_;E<R;E+=3){const C=a.getX(E),T=a.getX(E+1),P=a.getX(E+2);r=Vl(this,h,e,i,c,u,d,C,T,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=m,h=y;g<h;g+=3){const v=a.getX(g),_=a.getX(g+1),E=a.getX(g+2);r=Vl(this,o,e,i,c,u,d,v,_,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){const g=f[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let E=v,R=_;E<R;E+=3){const C=E,T=E+1,P=E+2;r=Vl(this,h,e,i,c,u,d,C,T,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=m,h=y;g<h;g+=3){const v=g,_=g+1,E=g+2;r=Vl(this,o,e,i,c,u,d,v,_,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function KR(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===hn,a),l===null)return null;Hl.copy(a),Hl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Hl);return c<n.near||c>n.far?null:{distance:c,point:Hl.clone(),object:t}}function Vl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ws),t.getVertexPosition(l,Ts),t.getVertexPosition(c,Cs);const u=KR(t,e,n,i,ws,Ts,Cs,zl);if(u){r&&(Fl.fromBufferAttribute(r,a),kl.fromBufferAttribute(r,l),Bl.fromBufferAttribute(r,c),u.uv=ai.getInterpolation(zl,ws,Ts,Cs,Fl,kl,Bl,new Fe)),s&&(Fl.fromBufferAttribute(s,a),kl.fromBufferAttribute(s,l),Bl.fromBufferAttribute(s,c),u.uv1=ai.getInterpolation(zl,ws,Ts,Cs,Fl,kl,Bl,new Fe)),o&&(a0.fromBufferAttribute(o,a),l0.fromBufferAttribute(o,l),c0.fromBufferAttribute(o,c),u.normal=ai.getInterpolation(zl,ws,Ts,Cs,a0,l0,c0,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new k,materialIndex:0};ai.getNormal(ws,Ts,Cs,d.normal),u.face=d}return u}class Jn extends Ar{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new di(c,3)),this.setAttribute("normal",new di(u,3)),this.setAttribute("uv",new di(d,2));function m(y,g,h,v,_,E,R,C,T,P,w){const S=E/T,L=R/P,F=E/2,I=R/2,z=C/2,K=T+1,Y=P+1;let $=0,D=0;const Z=new k;for(let Q=0;Q<Y;Q++){const se=Q*L-I;for(let ye=0;ye<K;ye++){const Be=ye*S-F;Z[y]=Be*v,Z[g]=se*_,Z[h]=z,c.push(Z.x,Z.y,Z.z),Z[y]=0,Z[g]=0,Z[h]=C>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(ye/T),d.push(1-Q/P),$+=1}}for(let Q=0;Q<P;Q++)for(let se=0;se<T;se++){const ye=f+se+K*Q,Be=f+se+K*(Q+1),q=f+(se+1)+K*(Q+1),J=f+(se+1)+K*Q;l.push(ye,Be,J),l.push(Be,q,J),D+=6}a.addGroup(p,D,w),p+=D,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=yo(t[n]);for(const r in i)e[r]=i[r]}return e}function $R(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function xx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const ZR={clone:yo,merge:$t};var QR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QR,this.fragmentShader=JR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=$R(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Sx extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new k,u0=new Fe,f0=new Fe;class Pn extends Sx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,u0,f0),n.subVectors(f0,u0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(oa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Rs=-90,bs=1;class e2 extends xn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(Rs,bs,e,n);r.layers=this.layers,this.add(r);const s=new Pn(Rs,bs,e,n);s.layers=this.layers,this.add(s);const o=new Pn(Rs,bs,e,n);o.layers=this.layers,this.add(o);const a=new Pn(Rs,bs,e,n);a.layers=this.layers,this.add(a);const l=new Pn(Rs,bs,e,n);l.layers=this.layers,this.add(l);const c=new Pn(Rs,bs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===eu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Ex extends fn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:mo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class t2 extends ss{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ex(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jn(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:mr});s.uniforms.tEquirect.value=n;const o=new ct(r,s),a=n.minFilter;return n.minFilter===jr&&(n.minFilter=jn),new e2(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Lf=new k,n2=new k,i2=new He;class tr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Lf.subVectors(i,n).cross(n2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Lf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||i2.getNormalMatrix(e),r=this.coplanarPoint(Lf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new jp,Gl=new k;class Mx{constructor(e=new tr,n=new tr,i=new tr,r=new tr,s=new tr,o=new tr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],m=r[9],y=r[10],g=r[11],h=r[12],v=r[13],_=r[14],E=r[15];if(i[0].setComponents(l-s,f-c,g-p,E-h).normalize(),i[1].setComponents(l+s,f+c,g+p,E+h).normalize(),i[2].setComponents(l+o,f+u,g+m,E+v).normalize(),i[3].setComponents(l-o,f-u,g-m,E-v).normalize(),i[4].setComponents(l-a,f-d,g-y,E-_).normalize(),n===Li)i[5].setComponents(l+a,f+d,g+y,E+_).normalize();else if(n===eu)i[5].setComponents(a,d,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Gl.x=r.normal.x>0?e.max.x:e.min.x,Gl.y=r.normal.y>0?e.max.y:e.min.y,Gl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ax(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function r2(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&f.length===0&&t.bufferSubData(c,0,u),f.length!==0){for(let p=0,m=f.length;p<m;p++){const y=f[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class wu extends Ar{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],m=[],y=[],g=[];for(let h=0;h<u;h++){const v=h*f-o;for(let _=0;_<c;_++){const E=_*d-s;m.push(E,-v,0),y.push(0,0,1),g.push(_/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const _=v+c*h,E=v+c*(h+1),R=v+1+c*(h+1),C=v+1+c*h;p.push(_,E,C),p.push(E,R,C)}this.setIndex(p),this.setAttribute("position",new di(m,3)),this.setAttribute("normal",new di(y,3)),this.setAttribute("uv",new di(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.width,e.height,e.widthSegments,e.heightSegments)}}var s2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,a2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,u2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,h2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,p2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,v2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,y2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,x2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,S2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,C2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,R2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,b2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,P2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,L2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U2="gl_FragColor = linearToOutputTexel( gl_FragColor );",O2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,F2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,k2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,z2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,V2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Y2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Z2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Q2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ib=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ob=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ab=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ub=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,db=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_b=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Db=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ub=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_P=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,OP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:s2,alphahash_pars_fragment:o2,alphamap_fragment:a2,alphamap_pars_fragment:l2,alphatest_fragment:c2,alphatest_pars_fragment:u2,aomap_fragment:f2,aomap_pars_fragment:h2,batching_pars_vertex:d2,batching_vertex:p2,begin_vertex:m2,beginnormal_vertex:g2,bsdfs:_2,iridescence_fragment:v2,bumpmap_pars_fragment:y2,clipping_planes_fragment:x2,clipping_planes_pars_fragment:S2,clipping_planes_pars_vertex:E2,clipping_planes_vertex:M2,color_fragment:A2,color_pars_fragment:w2,color_pars_vertex:T2,color_vertex:C2,common:R2,cube_uv_reflection_fragment:b2,defaultnormal_vertex:P2,displacementmap_pars_vertex:L2,displacementmap_vertex:N2,emissivemap_fragment:D2,emissivemap_pars_fragment:I2,colorspace_fragment:U2,colorspace_pars_fragment:O2,envmap_fragment:F2,envmap_common_pars_fragment:k2,envmap_pars_fragment:B2,envmap_pars_vertex:z2,envmap_physical_pars_fragment:Z2,envmap_vertex:H2,fog_vertex:V2,fog_pars_vertex:G2,fog_fragment:W2,fog_pars_fragment:X2,gradientmap_pars_fragment:j2,lightmap_pars_fragment:Y2,lights_lambert_fragment:q2,lights_lambert_pars_fragment:K2,lights_pars_begin:$2,lights_toon_fragment:Q2,lights_toon_pars_fragment:J2,lights_phong_fragment:eb,lights_phong_pars_fragment:tb,lights_physical_fragment:nb,lights_physical_pars_fragment:ib,lights_fragment_begin:rb,lights_fragment_maps:sb,lights_fragment_end:ob,logdepthbuf_fragment:ab,logdepthbuf_pars_fragment:lb,logdepthbuf_pars_vertex:cb,logdepthbuf_vertex:ub,map_fragment:fb,map_pars_fragment:hb,map_particle_fragment:db,map_particle_pars_fragment:pb,metalnessmap_fragment:mb,metalnessmap_pars_fragment:gb,morphinstance_vertex:_b,morphcolor_vertex:vb,morphnormal_vertex:yb,morphtarget_pars_vertex:xb,morphtarget_vertex:Sb,normal_fragment_begin:Eb,normal_fragment_maps:Mb,normal_pars_fragment:Ab,normal_pars_vertex:wb,normal_vertex:Tb,normalmap_pars_fragment:Cb,clearcoat_normal_fragment_begin:Rb,clearcoat_normal_fragment_maps:bb,clearcoat_pars_fragment:Pb,iridescence_pars_fragment:Lb,opaque_fragment:Nb,packing:Db,premultiplied_alpha_fragment:Ib,project_vertex:Ub,dithering_fragment:Ob,dithering_pars_fragment:Fb,roughnessmap_fragment:kb,roughnessmap_pars_fragment:Bb,shadowmap_pars_fragment:zb,shadowmap_pars_vertex:Hb,shadowmap_vertex:Vb,shadowmask_pars_fragment:Gb,skinbase_vertex:Wb,skinning_pars_vertex:Xb,skinning_vertex:jb,skinnormal_vertex:Yb,specularmap_fragment:qb,specularmap_pars_fragment:Kb,tonemapping_fragment:$b,tonemapping_pars_fragment:Zb,transmission_fragment:Qb,transmission_pars_fragment:Jb,uv_pars_fragment:eP,uv_pars_vertex:tP,uv_vertex:nP,worldpos_vertex:iP,background_vert:rP,background_frag:sP,backgroundCube_vert:oP,backgroundCube_frag:aP,cube_vert:lP,cube_frag:cP,depth_vert:uP,depth_frag:fP,distanceRGBA_vert:hP,distanceRGBA_frag:dP,equirect_vert:pP,equirect_frag:mP,linedashed_vert:gP,linedashed_frag:_P,meshbasic_vert:vP,meshbasic_frag:yP,meshlambert_vert:xP,meshlambert_frag:SP,meshmatcap_vert:EP,meshmatcap_frag:MP,meshnormal_vert:AP,meshnormal_frag:wP,meshphong_vert:TP,meshphong_frag:CP,meshphysical_vert:RP,meshphysical_frag:bP,meshtoon_vert:PP,meshtoon_frag:LP,points_vert:NP,points_frag:DP,shadow_vert:IP,shadow_frag:UP,sprite_vert:OP,sprite_frag:FP},he={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},si={basic:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:$t([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:$t([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Je(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:$t([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:$t([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:$t([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:$t([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:$t([he.common,he.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:$t([he.lights,he.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};si.physical={uniforms:$t([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Wl={r:0,b:0,g:0},Nr=new zi,kP=new Rt;function BP(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function m(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function y(v){let _=!1;const E=m(v);E===null?h(a,l):E&&E.isColor&&(h(E,1),_=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,_){const E=m(_);E&&(E.isCubeTexture||E.mapping===Mu)?(u===void 0&&(u=new ct(new Jn(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:yo(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Nr.copy(_.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kP.makeRotationFromEuler(Nr)),u.material.toneMapped=Qe.getTransfer(E.colorSpace)!==rt,(d!==E||f!==E.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=E,f=E.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ct(new wu(2,2),new yr({name:"BackgroundMaterial",uniforms:yo(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(E.colorSpace)!==rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,_){v.getRGB(Wl,xx(t)),i.buffers.color.setClear(Wl.r,Wl.g,Wl.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:y,addToRenderList:g}}function zP(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,L,F,I,z){let K=!1;const Y=d(I,F,L);s!==Y&&(s=Y,c(s.object)),K=p(S,I,F,z),K&&m(S,I,F,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,E(S,L,F,I),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function d(S,L,F){const I=F.wireframe===!0;let z=i[S.id];z===void 0&&(z={},i[S.id]=z);let K=z[L.id];K===void 0&&(K={},z[L.id]=K);let Y=K[I];return Y===void 0&&(Y=f(l()),K[I]=Y),Y}function f(S){const L=[],F=[],I=[];for(let z=0;z<n;z++)L[z]=0,F[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:I,object:S,attributes:{},index:null}}function p(S,L,F,I){const z=s.attributes,K=L.attributes;let Y=0;const $=F.getAttributes();for(const D in $)if($[D].location>=0){const Q=z[D];let se=K[D];if(se===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),Q===void 0||Q.attribute!==se||se&&Q.data!==se.data)return!0;Y++}return s.attributesNum!==Y||s.index!==I}function m(S,L,F,I){const z={},K=L.attributes;let Y=0;const $=F.getAttributes();for(const D in $)if($[D].location>=0){let Q=K[D];Q===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const se={};se.attribute=Q,Q&&Q.data&&(se.data=Q.data),z[D]=se,Y++}s.attributes=z,s.attributesNum=Y,s.index=I}function y(){const S=s.newAttributes;for(let L=0,F=S.length;L<F;L++)S[L]=0}function g(S){h(S,0)}function h(S,L){const F=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;F[S]=1,I[S]===0&&(t.enableVertexAttribArray(S),I[S]=1),z[S]!==L&&(t.vertexAttribDivisor(S,L),z[S]=L)}function v(){const S=s.newAttributes,L=s.enabledAttributes;for(let F=0,I=L.length;F<I;F++)L[F]!==S[F]&&(t.disableVertexAttribArray(F),L[F]=0)}function _(S,L,F,I,z,K,Y){Y===!0?t.vertexAttribIPointer(S,L,F,z,K):t.vertexAttribPointer(S,L,F,I,z,K)}function E(S,L,F,I){y();const z=I.attributes,K=F.getAttributes(),Y=L.defaultAttributeValues;for(const $ in K){const D=K[$];if(D.location>=0){let Z=z[$];if(Z===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor)),Z!==void 0){const Q=Z.normalized,se=Z.itemSize,ye=e.get(Z);if(ye===void 0)continue;const Be=ye.buffer,q=ye.type,J=ye.bytesPerElement,ce=q===t.INT||q===t.UNSIGNED_INT||Z.gpuType===kp;if(Z.isInterleavedBufferAttribute){const ue=Z.data,Te=ue.stride,Ne=Z.offset;if(ue.isInstancedInterleavedBuffer){for(let ke=0;ke<D.locationSize;ke++)h(D.location+ke,ue.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ke=0;ke<D.locationSize;ke++)g(D.location+ke);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let ke=0;ke<D.locationSize;ke++)_(D.location+ke,se/D.locationSize,q,Q,Te*J,(Ne+se/D.locationSize*ke)*J,ce)}else{if(Z.isInstancedBufferAttribute){for(let ue=0;ue<D.locationSize;ue++)h(D.location+ue,Z.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ue=0;ue<D.locationSize;ue++)g(D.location+ue);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let ue=0;ue<D.locationSize;ue++)_(D.location+ue,se/D.locationSize,q,Q,se*J,se/D.locationSize*ue*J,ce)}}else if(Y!==void 0){const Q=Y[$];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(D.location,Q);break;case 3:t.vertexAttrib3fv(D.location,Q);break;case 4:t.vertexAttrib4fv(D.location,Q);break;default:t.vertexAttrib1fv(D.location,Q)}}}}v()}function R(){P();for(const S in i){const L=i[S];for(const F in L){const I=L[F];for(const z in I)u(I[z].object),delete I[z];delete L[F]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const F in L){const I=L[F];for(const z in I)u(I[z].object),delete I[z];delete L[F]}delete i[S.id]}function T(S){for(const L in i){const F=i[L];if(F[S.id]===void 0)continue;const I=F[S.id];for(const z in I)u(I[z].object),delete I[z];delete F[S.id]}}function P(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function HP(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let m=0;m<d;m++)p+=u[m];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let m=0;for(let y=0;y<d;y++)m+=u[y];for(let y=0;y<f.length;y++)n.update(m,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function VP(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Yn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const T=C===Ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Bi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Pi&&!T)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:E,maxSamples:R}}function GP(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new tr,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const v=s?0:i,_=v*4;let E=h.clippingState||null;l.value=E,E=u(m,f,_,p);for(let R=0;R!==_;++R)E[R]=n[R];h.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,m){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,m!==!0||g===null){const h=p+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let _=0,E=p;_!==y;++_,E+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(g,E),g[E+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function WP(t){let e=new WeakMap;function n(o,a){return a===$h?o.mapping=mo:a===Zh&&(o.mapping=go),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$h||a===Zh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new t2(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class XP extends Sx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ys=4,h0=[.125,.215,.35,.446,.526,.582],zr=20,Nf=new XP,d0=new Je;let Df=null,If=0,Uf=0,Of=!1;const kr=(1+Math.sqrt(5))/2,Ps=1/kr,p0=[new k(-kr,Ps,0),new k(kr,Ps,0),new k(-Ps,0,kr),new k(Ps,0,kr),new k(0,kr,-Ps),new k(0,kr,Ps),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class m0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Df=this._renderer.getRenderTarget(),If=this._renderer.getActiveCubeFace(),Uf=this._renderer.getActiveMipmapLevel(),Of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Df,If,Uf),this._renderer.xr.enabled=Of,e.scissorTest=!1,Xl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Df=this._renderer.getRenderTarget(),If=this._renderer.getActiveCubeFace(),Uf=this._renderer.getActiveMipmapLevel(),Of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Ba,format:Yn,colorSpace:Mr,depthBuffer:!1},r=g0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jP(s)),this._blurMaterial=YP(s,e,n)}return r}_compileMaterial(e){const n=new ct(this._lodPlanes[0],e);this._renderer.compile(n,Nf)}_sceneToCubeUV(e,n,i,r){const a=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(d0),u.toneMapping=gr,u.autoClear=!1;const p=new _x({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),m=new ct(new Jn,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(d0),y=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const _=this._cubeSize;Xl(r,v*_,h>2?_:0,_,_),u.setRenderTarget(r),y&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===mo||e.mapping===go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=v0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Nf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=p0[(r-s-1)%p0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ct(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zr-1),y=s/m,g=isFinite(s)?1+Math.floor(u*y):zr;g>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zr}`);const h=[];let v=0;for(let T=0;T<zr;++T){const P=T/y,w=Math.exp(-P*P/2);h.push(w),T===0?v+=w:T<g&&(v+=2*w)}for(let T=0;T<h.length;T++)h[T]=h[T]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-i;const E=this._sizeLods[r],R=3*E*(r>_-Ys?r-_+Ys:0),C=4*(this._cubeSize-E);Xl(n,R,C,3*E,2*E),l.setRenderTarget(n),l.render(d,Nf)}}function jP(t){const e=[],n=[],i=[];let r=t;const s=t-Ys+1+h0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ys?l=h0[o-t+Ys-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,m=6,y=3,g=2,h=1,v=new Float32Array(y*m*p),_=new Float32Array(g*m*p),E=new Float32Array(h*m*p);for(let C=0;C<p;C++){const T=C%3*2/3-1,P=C>2?0:-1,w=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];v.set(w,y*m*C),_.set(f,g*m*C);const S=[C,C,C,C,C,C];E.set(S,h*m*C)}const R=new Ar;R.setAttribute("position",new hi(v,y)),R.setAttribute("uv",new hi(_,g)),R.setAttribute("faceIndex",new hi(E,h)),e.push(R),r>Ys&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function g0(t,e,n){const i=new ss(t,e,n);return i.texture.mapping=Mu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function YP(t,e,n){const i=new Float32Array(zr),r=new k(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function _0(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function v0(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Yp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qP(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$h||l===Zh,u=l===mo||l===go;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new m0(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new m0(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function KP(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&fx("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $P(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const y=f.morphAttributes[m];for(let g=0,h=y.length;g<h;g++)e.remove(y[g])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const m in p){const y=p[m];for(let g=0,h=y.length;g<h;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,m=d.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let _=0,E=v.length;_<E;_+=3){const R=v[_+0],C=v[_+1],T=v[_+2];f.push(R,C,C,T,T,R)}}else if(m!==void 0){const v=m.array;y=m.version;for(let _=0,E=v.length/3-1;_<E;_+=3){const R=_+0,C=_+1,T=_+2;f.push(R,C,C,T,T,R)}}else return;const g=new(ux(f)?yx:vx)(f,1);g.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function ZP(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,m){m!==0&&(t.drawElementsInstanced(i,p,s,f*o,m),n.update(p,i,m))}function u(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,m);let g=0;for(let h=0;h<m;h++)g+=p[h];n.update(g,i,1)}function d(f,p,m,y){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],y[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,m);let h=0;for(let v=0;v<m;v++)h+=p[v];for(let v=0;v<y.length;v++)n.update(h,i,y[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function QP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function JP(t,e,n){const i=new WeakMap,r=new Dt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let E=0;m===!0&&(E=1),y===!0&&(E=2),g===!0&&(E=3);let R=a.attributes.position.count*E,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*C*4*d),P=new dx(T,R,C,d);P.type=Pi,P.needsUpdate=!0;const w=E*4;for(let L=0;L<d;L++){const F=h[L],I=v[L],z=_[L],K=R*C*4*L;for(let Y=0;Y<F.count;Y++){const $=Y*w;m===!0&&(r.fromBufferAttribute(F,Y),T[K+$+0]=r.x,T[K+$+1]=r.y,T[K+$+2]=r.z,T[K+$+3]=0),y===!0&&(r.fromBufferAttribute(I,Y),T[K+$+4]=r.x,T[K+$+5]=r.y,T[K+$+6]=r.z,T[K+$+7]=0),g===!0&&(r.fromBufferAttribute(z,Y),T[K+$+8]=r.x,T[K+$+9]=r.y,T[K+$+10]=r.z,T[K+$+11]=z.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new Fe(R,C)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const y=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function eL(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class wx extends fn{constructor(e,n,i,r,s,o,a,l,c,u=io){if(u!==io&&u!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===io&&(i=rs),i===void 0&&u===vo&&(i=_o),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Tx=new fn,y0=new wx(1,1),Cx=new dx,Rx=new BR,bx=new Ex,x0=[],S0=[],E0=new Float32Array(16),M0=new Float32Array(9),A0=new Float32Array(4);function wo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=x0[r];if(s===void 0&&(s=new Float32Array(r),x0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Tu(t,e){let n=S0[e];n===void 0&&(n=new Int32Array(e),S0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function tL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function nL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function iL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function rL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function sL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;A0.set(i),t.uniformMatrix2fv(this.addr,!1,A0),Pt(n,i)}}function oL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;M0.set(i),t.uniformMatrix3fv(this.addr,!1,M0),Pt(n,i)}}function aL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;E0.set(i),t.uniformMatrix4fv(this.addr,!1,E0),Pt(n,i)}}function lL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function cL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function uL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function fL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function hL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function dL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function pL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function mL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function gL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(y0.compareFunction=cx,s=y0):s=Tx,n.setTexture2D(e||s,r)}function _L(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Rx,r)}function vL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||bx,r)}function yL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Cx,r)}function xL(t){switch(t){case 5126:return tL;case 35664:return nL;case 35665:return iL;case 35666:return rL;case 35674:return sL;case 35675:return oL;case 35676:return aL;case 5124:case 35670:return lL;case 35667:case 35671:return cL;case 35668:case 35672:return uL;case 35669:case 35673:return fL;case 5125:return hL;case 36294:return dL;case 36295:return pL;case 36296:return mL;case 35678:case 36198:case 36298:case 36306:case 35682:return gL;case 35679:case 36299:case 36307:return _L;case 35680:case 36300:case 36308:case 36293:return vL;case 36289:case 36303:case 36311:case 36292:return yL}}function SL(t,e){t.uniform1fv(this.addr,e)}function EL(t,e){const n=wo(e,this.size,2);t.uniform2fv(this.addr,n)}function ML(t,e){const n=wo(e,this.size,3);t.uniform3fv(this.addr,n)}function AL(t,e){const n=wo(e,this.size,4);t.uniform4fv(this.addr,n)}function wL(t,e){const n=wo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function TL(t,e){const n=wo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function CL(t,e){const n=wo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function RL(t,e){t.uniform1iv(this.addr,e)}function bL(t,e){t.uniform2iv(this.addr,e)}function PL(t,e){t.uniform3iv(this.addr,e)}function LL(t,e){t.uniform4iv(this.addr,e)}function NL(t,e){t.uniform1uiv(this.addr,e)}function DL(t,e){t.uniform2uiv(this.addr,e)}function IL(t,e){t.uniform3uiv(this.addr,e)}function UL(t,e){t.uniform4uiv(this.addr,e)}function OL(t,e,n){const i=this.cache,r=e.length,s=Tu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Tx,s[o])}function FL(t,e,n){const i=this.cache,r=e.length,s=Tu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Rx,s[o])}function kL(t,e,n){const i=this.cache,r=e.length,s=Tu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||bx,s[o])}function BL(t,e,n){const i=this.cache,r=e.length,s=Tu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Cx,s[o])}function zL(t){switch(t){case 5126:return SL;case 35664:return EL;case 35665:return ML;case 35666:return AL;case 35674:return wL;case 35675:return TL;case 35676:return CL;case 5124:case 35670:return RL;case 35667:case 35671:return bL;case 35668:case 35672:return PL;case 35669:case 35673:return LL;case 5125:return NL;case 36294:return DL;case 36295:return IL;case 36296:return UL;case 35678:case 36198:case 36298:case 36306:case 35682:return OL;case 35679:case 36299:case 36307:return FL;case 35680:case 36300:case 36308:case 36293:return kL;case 36289:case 36303:case 36311:case 36292:return BL}}class HL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=xL(n.type)}}class VL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zL(n.type)}}class GL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ff=/(\w+)(\])?(\[|\.)?/g;function w0(t,e){t.seq.push(e),t.map[e.id]=e}function WL(t,e,n){const i=t.name,r=i.length;for(Ff.lastIndex=0;;){const s=Ff.exec(i),o=Ff.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){w0(n,c===void 0?new HL(a,t,e):new VL(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new GL(a),w0(n,d)),n=d}}}class gc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);WL(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function T0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const XL=37297;let jL=0;function YL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function qL(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===Jc&&n===Qc?i="LinearDisplayP3ToLinearSRGB":e===Qc&&n===Jc&&(i="LinearSRGBToLinearDisplayP3"),t){case Mr:case Au:return[i,"LinearTransferOETF"];case ii:case Wp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function C0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+YL(t.getShaderSource(e),o)}else return r}function KL(t,e){const n=qL(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function $L(t,e){let n;switch(e){case ZC:n="Linear";break;case QC:n="Reinhard";break;case JC:n="OptimizedCineon";break;case eR:n="ACESFilmic";break;case nR:n="AgX";break;case iR:n="Neutral";break;case tR:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function ZL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function QL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function JL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function $o(t){return t!==""}function R0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function b0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(t){return t.replace(e3,n3)}const t3=new Map;function n3(t,e){let n=ze[e];if(n===void 0){const i=t3.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Td(n)}const i3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P0(t){return t.replace(i3,r3)}function r3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function L0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ky?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===MC?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function o3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case Mu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function l3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case $y:e="ENVMAP_BLENDING_MULTIPLY";break;case KC:e="ENVMAP_BLENDING_MIX";break;case $C:e="ENVMAP_BLENDING_ADD";break}return e}function c3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function u3(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=s3(n),c=o3(n),u=a3(n),d=l3(n),f=c3(n),p=ZL(n),m=QL(s),y=r.createProgram();let g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter($o).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter($o).join(`
`),h.length>0&&(h+=`
`)):(g=[L0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),h=[L0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gr?"#define TONE_MAPPING":"",n.toneMapping!==gr?ze.tonemapping_pars_fragment:"",n.toneMapping!==gr?$L("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,KL("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($o).join(`
`)),o=Td(o),o=R0(o,n),o=b0(o,n),a=Td(a),a=R0(a,n),a=b0(a,n),o=P0(o),a=P0(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===Xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=v+g+o,E=v+h+a,R=T0(r,r.VERTEX_SHADER,_),C=T0(r,r.FRAGMENT_SHADER,E);r.attachShader(y,R),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(L){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(y).trim(),I=r.getShaderInfoLog(R).trim(),z=r.getShaderInfoLog(C).trim();let K=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,R,C);else{const $=C0(r,R,"vertex"),D=C0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+$+`
`+D)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(I===""||z==="")&&(Y=!1);Y&&(L.diagnostics={runnable:K,programLog:F,vertexShader:{log:I,prefix:g},fragmentShader:{log:z,prefix:h}})}r.deleteShader(R),r.deleteShader(C),P=new gc(r,y),w=JL(r,y)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,XL)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jL++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=C,this}let f3=0;class h3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new d3(e),n.set(e,i)),i}}class d3{constructor(e){this.id=f3++,this.code=e,this.usedTimes=0}}function p3(t,e,n,i,r,s,o){const a=new mx,l=new h3,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,S,L,F,I){const z=F.fog,K=I.geometry,Y=w.isMeshStandardMaterial?F.environment:null,$=(w.isMeshStandardMaterial?n:e).get(w.envMap||Y),D=$&&$.mapping===Mu?$.image.height:null,Z=m[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Q=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,se=Q!==void 0?Q.length:0;let ye=0;K.morphAttributes.position!==void 0&&(ye=1),K.morphAttributes.normal!==void 0&&(ye=2),K.morphAttributes.color!==void 0&&(ye=3);let Be,q,J,ce;if(Z){const Xe=si[Z];Be=Xe.vertexShader,q=Xe.fragmentShader}else Be=w.vertexShader,q=w.fragmentShader,l.update(w),J=l.getVertexShaderID(w),ce=l.getFragmentShaderID(w);const ue=t.getRenderTarget(),Te=I.isInstancedMesh===!0,Ne=I.isBatchedMesh===!0,ke=!!w.map,tt=!!w.matcap,N=!!$,ht=!!w.aoMap,Ye=!!w.lightMap,qe=!!w.bumpMap,Se=!!w.normalMap,dt=!!w.displacementMap,De=!!w.emissiveMap,Ue=!!w.metalnessMap,b=!!w.roughnessMap,M=w.anisotropy>0,W=w.clearcoat>0,te=w.dispersion>0,ie=w.iridescence>0,ee=w.sheen>0,Ae=w.transmission>0,fe=M&&!!w.anisotropyMap,pe=W&&!!w.clearcoatMap,Oe=W&&!!w.clearcoatNormalMap,oe=W&&!!w.clearcoatRoughnessMap,me=ie&&!!w.iridescenceMap,Ve=ie&&!!w.iridescenceThicknessMap,Ce=ee&&!!w.sheenColorMap,_e=ee&&!!w.sheenRoughnessMap,be=!!w.specularMap,Ie=!!w.specularColorMap,ot=!!w.specularIntensityMap,x=Ae&&!!w.transmissionMap,B=Ae&&!!w.thicknessMap,H=!!w.gradientMap,j=!!w.alphaMap,ne=w.alphaTest>0,Ee=!!w.alphaHash,Pe=!!w.extensions;let _t=gr;w.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(_t=t.toneMapping);const At={shaderID:Z,shaderType:w.type,shaderName:w.name,vertexShader:Be,fragmentShader:q,defines:w.defines,customVertexShaderID:J,customFragmentShaderID:ce,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&I._colorsTexture!==null,instancing:Te,instancingColor:Te&&I.instanceColor!==null,instancingMorph:Te&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Mr,alphaToCoverage:!!w.alphaToCoverage,map:ke,matcap:tt,envMap:N,envMapMode:N&&$.mapping,envMapCubeUVHeight:D,aoMap:ht,lightMap:Ye,bumpMap:qe,normalMap:Se,displacementMap:f&&dt,emissiveMap:De,normalMapObjectSpace:Se&&w.normalMapType===aR,normalMapTangentSpace:Se&&w.normalMapType===lx,metalnessMap:Ue,roughnessMap:b,anisotropy:M,anisotropyMap:fe,clearcoat:W,clearcoatMap:pe,clearcoatNormalMap:Oe,clearcoatRoughnessMap:oe,dispersion:te,iridescence:ie,iridescenceMap:me,iridescenceThicknessMap:Ve,sheen:ee,sheenColorMap:Ce,sheenRoughnessMap:_e,specularMap:be,specularColorMap:Ie,specularIntensityMap:ot,transmission:Ae,transmissionMap:x,thicknessMap:B,gradientMap:H,opaque:w.transparent===!1&&w.blending===no&&w.alphaToCoverage===!1,alphaMap:j,alphaTest:ne,alphaHash:Ee,combine:w.combine,mapUv:ke&&y(w.map.channel),aoMapUv:ht&&y(w.aoMap.channel),lightMapUv:Ye&&y(w.lightMap.channel),bumpMapUv:qe&&y(w.bumpMap.channel),normalMapUv:Se&&y(w.normalMap.channel),displacementMapUv:dt&&y(w.displacementMap.channel),emissiveMapUv:De&&y(w.emissiveMap.channel),metalnessMapUv:Ue&&y(w.metalnessMap.channel),roughnessMapUv:b&&y(w.roughnessMap.channel),anisotropyMapUv:fe&&y(w.anisotropyMap.channel),clearcoatMapUv:pe&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(w.sheenRoughnessMap.channel),specularMapUv:be&&y(w.specularMap.channel),specularColorMapUv:Ie&&y(w.specularColorMap.channel),specularIntensityMapUv:ot&&y(w.specularIntensityMap.channel),transmissionMapUv:x&&y(w.transmissionMap.channel),thicknessMapUv:B&&y(w.thicknessMap.channel),alphaMapUv:j&&y(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Se||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!K.attributes.uv&&(ke||j),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:ke&&w.map.isVideoTexture===!0&&Qe.getTransfer(w.map.colorSpace)===rt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ci,flipSided:w.side===un,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&w.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function h(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(v(S,w),_(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function v(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),w.push(a.mask)}function E(w){const S=m[w.type];let L;if(S){const F=si[S];L=ZR.clone(F.uniforms)}else L=w.uniforms;return L}function R(w,S){let L;for(let F=0,I=u.length;F<I;F++){const z=u[F];if(z.cacheKey===S){L=z,++L.usedTimes;break}}return L===void 0&&(L=new u3(t,S,w,s),u.push(L)),L}function C(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function T(w){l.remove(w)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:E,acquireProgram:R,releaseProgram:C,releaseShaderCache:T,programs:u,dispose:P}}function m3(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function g3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function N0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function D0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,m,y,g){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:m,renderOrder:d.renderOrder,z:y,group:g},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=m,h.renderOrder=d.renderOrder,h.z=y,h.group=g),e++,h}function a(d,f,p,m,y,g){const h=o(d,f,p,m,y,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,m,y,g){const h=o(d,f,p,m,y,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||g3),i.length>1&&i.sort(f||N0),r.length>1&&r.sort(f||N0)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function _3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new D0,t.set(i,[o])):r>=s.length?(o=new D0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function v3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Je};break;case"SpotLight":n={position:new k,direction:new k,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function y3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let x3=0;function S3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function E3(t){const e=new v3,n=y3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new Rt,o=new Rt;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,m=0,y=0,g=0,h=0,v=0,_=0,E=0,R=0,C=0,T=0;c.sort(S3);for(let w=0,S=c.length;w<S;w++){const L=c[w],F=L.color,I=L.intensity,z=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=F.r*I,d+=F.g*I,f+=F.b*I;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],I);T++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,D=n.get(L);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=Y,p++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(F).multiplyScalar(I),Y.distance=z,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[y]=Y;const $=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,$.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[y]=$.matrix,L.castShadow){const D=n.get(L);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.spotShadow[y]=D,i.spotShadowMap[y]=K,E++}y++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(F).multiplyScalar(I),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=Y,g++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const $=L.shadow,D=n.get(L);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,i.pointShadow[m]=D,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=L.shadow.matrix,_++}i.point[m]=Y,m++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(I),Y.groundColor.copy(L.groundColor).multiplyScalar(I),i.hemi[h]=Y,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==p||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==g||P.hemiLength!==h||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==E||P.numSpotMaps!==R||P.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=m,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=E+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,P.directionalLength=p,P.pointLength=m,P.spotLength=y,P.rectAreaLength=g,P.hemiLength=h,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=E,P.numSpotMaps=R,P.numLightProbes=T,i.version=x3++)}function l(c,u){let d=0,f=0,p=0,m=0,y=0;const g=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const _=c[h];if(_.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),d++}else if(_.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const E=i.rectArea[m];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const E=i.hemi[y];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function I0(t){const e=new E3(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function M3(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new I0(t),e.set(r,[a])):s>=o.length?(a=new I0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class A3 extends Ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class w3 extends Ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const T3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R3(t,e,n){let i=new Mx;const r=new Fe,s=new Fe,o=new Dt,a=new A3({depthPacking:oR}),l=new w3,c={},u=n.maxTextureSize,d={[hn]:un,[un]:hn,[Ci]:Ci},f=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:T3,fragmentShader:C3}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new Ar;m.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ct(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ky;let h=this.type;this.render=function(C,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),F=t.state;F.setBlending(mr),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const I=h!==Mi&&this.type===Mi,z=h===Mi&&this.type!==Mi;for(let K=0,Y=C.length;K<Y;K++){const $=C[K],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Z=D.getFrameExtents();if(r.multiply(Z),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,D.mapSize.y=s.y)),D.map===null||I===!0||z===!0){const se=this.type!==Mi?{minFilter:Nn,magFilter:Nn}:{};D.map!==null&&D.map.dispose(),D.map=new ss(r.x,r.y,se),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Q=D.getViewportCount();for(let se=0;se<Q;se++){const ye=D.getViewport(se);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),F.viewport(o),D.updateMatrices($,se),i=D.getFrustum(),E(T,P,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===Mi&&v(D,P),D.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(w,S,L)};function v(C,T){const P=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ss(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,P,f,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,P,p,y,null)}function _(C,T,P,w){let S=null;const L=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=S.uuid,I=T.uuid;let z=c[F];z===void 0&&(z={},c[F]=z);let K=z[I];K===void 0&&(K=S.clone(),z[I]=K,T.addEventListener("dispose",R)),S=K}if(S.visible=T.visible,S.wireframe=T.wireframe,w===Mi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=t.properties.get(S);F.light=P}return S}function E(C,T,P,w,S){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Mi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const I=e.update(C),z=C.material;if(Array.isArray(z)){const K=I.groups;for(let Y=0,$=K.length;Y<$;Y++){const D=K[Y],Z=z[D.materialIndex];if(Z&&Z.visible){const Q=_(C,Z,w,S);C.onBeforeShadow(t,C,T,P,I,Q,D),t.renderBufferDirect(P,null,I,Q,C,D),C.onAfterShadow(t,C,T,P,I,Q,D)}}}else if(z.visible){const K=_(C,z,w,S);C.onBeforeShadow(t,C,T,P,I,K,null),t.renderBufferDirect(P,null,I,K,C,null),C.onAfterShadow(t,C,T,P,I,K,null)}}const F=C.children;for(let I=0,z=F.length;I<z;I++)E(F[I],T,P,w,S)}function R(C){C.target.removeEventListener("dispose",R);for(const P in c){const w=c[P],S=C.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function b3(t){function e(){let x=!1;const B=new Dt;let H=null;const j=new Dt(0,0,0,0);return{setMask:function(ne){H!==ne&&!x&&(t.colorMask(ne,ne,ne,ne),H=ne)},setLocked:function(ne){x=ne},setClear:function(ne,Ee,Pe,_t,At){At===!0&&(ne*=_t,Ee*=_t,Pe*=_t),B.set(ne,Ee,Pe,_t),j.equals(B)===!1&&(t.clearColor(ne,Ee,Pe,_t),j.copy(B))},reset:function(){x=!1,H=null,j.set(-1,0,0,0)}}}function n(){let x=!1,B=null,H=null,j=null;return{setTest:function(ne){ne?ce(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(ne){B!==ne&&!x&&(t.depthMask(ne),B=ne)},setFunc:function(ne){if(H!==ne){switch(ne){case VC:t.depthFunc(t.NEVER);break;case GC:t.depthFunc(t.ALWAYS);break;case WC:t.depthFunc(t.LESS);break;case $c:t.depthFunc(t.LEQUAL);break;case XC:t.depthFunc(t.EQUAL);break;case jC:t.depthFunc(t.GEQUAL);break;case YC:t.depthFunc(t.GREATER);break;case qC:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}H=ne}},setLocked:function(ne){x=ne},setClear:function(ne){j!==ne&&(t.clearDepth(ne),j=ne)},reset:function(){x=!1,B=null,H=null,j=null}}}function i(){let x=!1,B=null,H=null,j=null,ne=null,Ee=null,Pe=null,_t=null,At=null;return{setTest:function(Xe){x||(Xe?ce(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(Xe){B!==Xe&&!x&&(t.stencilMask(Xe),B=Xe)},setFunc:function(Xe,wt,yt){(H!==Xe||j!==wt||ne!==yt)&&(t.stencilFunc(Xe,wt,yt),H=Xe,j=wt,ne=yt)},setOp:function(Xe,wt,yt){(Ee!==Xe||Pe!==wt||_t!==yt)&&(t.stencilOp(Xe,wt,yt),Ee=Xe,Pe=wt,_t=yt)},setLocked:function(Xe){x=Xe},setClear:function(Xe){At!==Xe&&(t.clearStencil(Xe),At=Xe)},reset:function(){x=!1,B=null,H=null,j=null,ne=null,Ee=null,Pe=null,_t=null,At=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,m=!1,y=null,g=null,h=null,v=null,_=null,E=null,R=null,C=new Je(0,0,0),T=0,P=!1,w=null,S=null,L=null,F=null,I=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Y=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec($)[1]),K=Y>=1):$.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=Y>=2);let D=null,Z={};const Q=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),ye=new Dt().fromArray(Q),Be=new Dt().fromArray(se);function q(x,B,H,j){const ne=new Uint8Array(4),Ee=t.createTexture();t.bindTexture(x,Ee),t.texParameteri(x,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(x,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<H;Pe++)x===t.TEXTURE_3D||x===t.TEXTURE_2D_ARRAY?t.texImage3D(B,0,t.RGBA,1,1,j,0,t.RGBA,t.UNSIGNED_BYTE,ne):t.texImage2D(B+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ne);return Ee}const J={};J[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(t.DEPTH_TEST),s.setFunc($c),qe(!1),Se(Bg),ce(t.CULL_FACE),ht(mr);function ce(x){c[x]!==!0&&(t.enable(x),c[x]=!0)}function ue(x){c[x]!==!1&&(t.disable(x),c[x]=!1)}function Te(x,B){return u[x]!==B?(t.bindFramebuffer(x,B),u[x]=B,x===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=B),x===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=B),!0):!1}function Ne(x,B){let H=f,j=!1;if(x){H=d.get(B),H===void 0&&(H=[],d.set(B,H));const ne=x.textures;if(H.length!==ne.length||H[0]!==t.COLOR_ATTACHMENT0){for(let Ee=0,Pe=ne.length;Ee<Pe;Ee++)H[Ee]=t.COLOR_ATTACHMENT0+Ee;H.length=ne.length,j=!0}}else H[0]!==t.BACK&&(H[0]=t.BACK,j=!0);j&&t.drawBuffers(H)}function ke(x){return p!==x?(t.useProgram(x),p=x,!0):!1}const tt={[Br]:t.FUNC_ADD,[wC]:t.FUNC_SUBTRACT,[TC]:t.FUNC_REVERSE_SUBTRACT};tt[CC]=t.MIN,tt[RC]=t.MAX;const N={[bC]:t.ZERO,[PC]:t.ONE,[LC]:t.SRC_COLOR,[qh]:t.SRC_ALPHA,[FC]:t.SRC_ALPHA_SATURATE,[UC]:t.DST_COLOR,[DC]:t.DST_ALPHA,[NC]:t.ONE_MINUS_SRC_COLOR,[Kh]:t.ONE_MINUS_SRC_ALPHA,[OC]:t.ONE_MINUS_DST_COLOR,[IC]:t.ONE_MINUS_DST_ALPHA,[kC]:t.CONSTANT_COLOR,[BC]:t.ONE_MINUS_CONSTANT_COLOR,[zC]:t.CONSTANT_ALPHA,[HC]:t.ONE_MINUS_CONSTANT_ALPHA};function ht(x,B,H,j,ne,Ee,Pe,_t,At,Xe){if(x===mr){m===!0&&(ue(t.BLEND),m=!1);return}if(m===!1&&(ce(t.BLEND),m=!0),x!==AC){if(x!==y||Xe!==P){if((g!==Br||_!==Br)&&(t.blendEquation(t.FUNC_ADD),g=Br,_=Br),Xe)switch(x){case no:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zg:t.blendFunc(t.ONE,t.ONE);break;case Hg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case no:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Hg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}h=null,v=null,E=null,R=null,C.set(0,0,0),T=0,y=x,P=Xe}return}ne=ne||B,Ee=Ee||H,Pe=Pe||j,(B!==g||ne!==_)&&(t.blendEquationSeparate(tt[B],tt[ne]),g=B,_=ne),(H!==h||j!==v||Ee!==E||Pe!==R)&&(t.blendFuncSeparate(N[H],N[j],N[Ee],N[Pe]),h=H,v=j,E=Ee,R=Pe),(_t.equals(C)===!1||At!==T)&&(t.blendColor(_t.r,_t.g,_t.b,At),C.copy(_t),T=At),y=x,P=!1}function Ye(x,B){x.side===Ci?ue(t.CULL_FACE):ce(t.CULL_FACE);let H=x.side===un;B&&(H=!H),qe(H),x.blending===no&&x.transparent===!1?ht(mr):ht(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),s.setFunc(x.depthFunc),s.setTest(x.depthTest),s.setMask(x.depthWrite),r.setMask(x.colorWrite);const j=x.stencilWrite;o.setTest(j),j&&(o.setMask(x.stencilWriteMask),o.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),o.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),De(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(x){w!==x&&(x?t.frontFace(t.CW):t.frontFace(t.CCW),w=x)}function Se(x){x!==SC?(ce(t.CULL_FACE),x!==S&&(x===Bg?t.cullFace(t.BACK):x===EC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),S=x}function dt(x){x!==L&&(K&&t.lineWidth(x),L=x)}function De(x,B,H){x?(ce(t.POLYGON_OFFSET_FILL),(F!==B||I!==H)&&(t.polygonOffset(B,H),F=B,I=H)):ue(t.POLYGON_OFFSET_FILL)}function Ue(x){x?ce(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function b(x){x===void 0&&(x=t.TEXTURE0+z-1),D!==x&&(t.activeTexture(x),D=x)}function M(x,B,H){H===void 0&&(D===null?H=t.TEXTURE0+z-1:H=D);let j=Z[H];j===void 0&&(j={type:void 0,texture:void 0},Z[H]=j),(j.type!==x||j.texture!==B)&&(D!==H&&(t.activeTexture(H),D=H),t.bindTexture(x,B||J[x]),j.type=x,j.texture=B)}function W(){const x=Z[D];x!==void 0&&x.type!==void 0&&(t.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Oe(){try{t.texStorage2D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ce(x){ye.equals(x)===!1&&(t.scissor(x.x,x.y,x.z,x.w),ye.copy(x))}function _e(x){Be.equals(x)===!1&&(t.viewport(x.x,x.y,x.z,x.w),Be.copy(x))}function be(x,B){let H=l.get(B);H===void 0&&(H=new WeakMap,l.set(B,H));let j=H.get(x);j===void 0&&(j=t.getUniformBlockIndex(B,x.name),H.set(x,j))}function Ie(x,B){const j=l.get(B).get(x);a.get(B)!==j&&(t.uniformBlockBinding(B,j,x.__bindingPointIndex),a.set(B,j))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,Z={},u={},d=new WeakMap,f=[],p=null,m=!1,y=null,g=null,h=null,v=null,_=null,E=null,R=null,C=new Je(0,0,0),T=0,P=!1,w=null,S=null,L=null,F=null,I=null,ye.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ce,disable:ue,bindFramebuffer:Te,drawBuffers:Ne,useProgram:ke,setBlending:ht,setMaterial:Ye,setFlipSided:qe,setCullFace:Se,setLineWidth:dt,setPolygonOffset:De,setScissorTest:Ue,activeTexture:b,bindTexture:M,unbindTexture:W,compressedTexImage2D:te,compressedTexImage3D:ie,texImage2D:me,texImage3D:Ve,updateUBOMapping:be,uniformBlockBinding:Ie,texStorage2D:Oe,texStorage3D:oe,texSubImage2D:ee,texSubImage3D:Ae,compressedTexSubImage2D:fe,compressedTexSubImage3D:pe,scissor:Ce,viewport:_e,reset:ot}}function U0(t,e,n,i){const r=P3(i);switch(n){case tx:return t*e;case ix:return t*e;case rx:return t*e*2;case sx:return t*e/r.components*r.byteLength;case Hp:return t*e/r.components*r.byteLength;case ox:return t*e*2/r.components*r.byteLength;case Vp:return t*e*2/r.components*r.byteLength;case nx:return t*e*3/r.components*r.byteLength;case Yn:return t*e*4/r.components*r.byteLength;case Gp:return t*e*4/r.components*r.byteLength;case fc:case hc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case dc:case pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case td:case id:return Math.max(t,16)*Math.max(e,8)/4;case ed:case nd:return Math.max(t,8)*Math.max(e,8)/2;case rd:case sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case od:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ld:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case cd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ud:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case fd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case hd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case dd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case pd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case md:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case gd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case _d:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case vd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case yd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case xd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case mc:case Sd:case Ed:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ax:case Md:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ad:case wd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function P3(t){switch(t){case Bi:case Qy:return{byteLength:1,components:1};case ba:case Jy:case Ba:return{byteLength:2,components:1};case Bp:case zp:return{byteLength:2,components:4};case rs:case kp:case Pi:return{byteLength:4,components:1};case ex:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function L3(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,M){return p?new OffscreenCanvas(b,M):tu("canvas")}function y(b,M,W){let te=1;const ie=Ue(b);if((ie.width>W||ie.height>W)&&(te=W/Math.max(ie.width,ie.height)),te<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ee=Math.floor(te*ie.width),Ae=Math.floor(te*ie.height);d===void 0&&(d=m(ee,Ae));const fe=M?m(ee,Ae):d;return fe.width=ee,fe.height=Ae,fe.getContext("2d").drawImage(b,0,0,ee,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ee+"x"+Ae+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),b;return b}function g(b){return b.generateMipmaps&&b.minFilter!==Nn&&b.minFilter!==jn}function h(b){t.generateMipmap(b)}function v(b,M,W,te,ie=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ee=M;if(M===t.RED&&(W===t.FLOAT&&(ee=t.R32F),W===t.HALF_FLOAT&&(ee=t.R16F),W===t.UNSIGNED_BYTE&&(ee=t.R8)),M===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.R8UI),W===t.UNSIGNED_SHORT&&(ee=t.R16UI),W===t.UNSIGNED_INT&&(ee=t.R32UI),W===t.BYTE&&(ee=t.R8I),W===t.SHORT&&(ee=t.R16I),W===t.INT&&(ee=t.R32I)),M===t.RG&&(W===t.FLOAT&&(ee=t.RG32F),W===t.HALF_FLOAT&&(ee=t.RG16F),W===t.UNSIGNED_BYTE&&(ee=t.RG8)),M===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.RG8UI),W===t.UNSIGNED_SHORT&&(ee=t.RG16UI),W===t.UNSIGNED_INT&&(ee=t.RG32UI),W===t.BYTE&&(ee=t.RG8I),W===t.SHORT&&(ee=t.RG16I),W===t.INT&&(ee=t.RG32I)),M===t.RGB&&W===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),M===t.RGBA){const Ae=ie?Zc:Qe.getTransfer(te);W===t.FLOAT&&(ee=t.RGBA32F),W===t.HALF_FLOAT&&(ee=t.RGBA16F),W===t.UNSIGNED_BYTE&&(ee=Ae===rt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(b,M){let W;return b?M===null||M===rs||M===_o?W=t.DEPTH24_STENCIL8:M===Pi?W=t.DEPTH32F_STENCIL8:M===ba&&(W=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===rs||M===_o?W=t.DEPTH_COMPONENT24:M===Pi?W=t.DEPTH_COMPONENT32F:M===ba&&(W=t.DEPTH_COMPONENT16),W}function E(b,M){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Nn&&b.minFilter!==jn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function R(b){const M=b.target;M.removeEventListener("dispose",R),T(M),M.isVideoTexture&&u.delete(M)}function C(b){const M=b.target;M.removeEventListener("dispose",C),w(M)}function T(b){const M=i.get(b);if(M.__webglInit===void 0)return;const W=b.source,te=f.get(W);if(te){const ie=te[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(b),Object.keys(te).length===0&&f.delete(W)}i.remove(b)}function P(b){const M=i.get(b);t.deleteTexture(M.__webglTexture);const W=b.source,te=f.get(W);delete te[M.__cacheKey],o.memory.textures--}function w(b){const M=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let ie=0;ie<M.__webglFramebuffer[te].length;ie++)t.deleteFramebuffer(M.__webglFramebuffer[te][ie]);else t.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)t.deleteFramebuffer(M.__webglFramebuffer[te]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=b.textures;for(let te=0,ie=W.length;te<ie;te++){const ee=i.get(W[te]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(W[te])}i.remove(b)}let S=0;function L(){S=0}function F(){const b=S;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),S+=1,b}function I(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function z(b,M){const W=i.get(b);if(b.isVideoTexture&&dt(b),b.isRenderTargetTexture===!1&&b.version>0&&W.__version!==b.version){const te=b.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(W,b,M);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+M)}function K(b,M){const W=i.get(b);if(b.version>0&&W.__version!==b.version){Be(W,b,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+M)}function Y(b,M){const W=i.get(b);if(b.version>0&&W.__version!==b.version){Be(W,b,M);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+M)}function $(b,M){const W=i.get(b);if(b.version>0&&W.__version!==b.version){q(W,b,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+M)}const D={[Qh]:t.REPEAT,[Xr]:t.CLAMP_TO_EDGE,[Jh]:t.MIRRORED_REPEAT},Z={[Nn]:t.NEAREST,[rR]:t.NEAREST_MIPMAP_NEAREST,[Al]:t.NEAREST_MIPMAP_LINEAR,[jn]:t.LINEAR,[df]:t.LINEAR_MIPMAP_NEAREST,[jr]:t.LINEAR_MIPMAP_LINEAR},Q={[lR]:t.NEVER,[pR]:t.ALWAYS,[cR]:t.LESS,[cx]:t.LEQUAL,[uR]:t.EQUAL,[dR]:t.GEQUAL,[fR]:t.GREATER,[hR]:t.NOTEQUAL};function se(b,M){if(M.type===Pi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===jn||M.magFilter===df||M.magFilter===Al||M.magFilter===jr||M.minFilter===jn||M.minFilter===df||M.minFilter===Al||M.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,D[M.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Z[M.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Z[M.minFilter]),M.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Nn||M.minFilter!==Al&&M.minFilter!==jr||M.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ye(b,M){let W=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",R));const te=M.source;let ie=f.get(te);ie===void 0&&(ie={},f.set(te,ie));const ee=I(M);if(ee!==b.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[ee].usedTimes++;const Ae=ie[b.__cacheKey];Ae!==void 0&&(ie[b.__cacheKey].usedTimes--,Ae.usedTimes===0&&P(M)),b.__cacheKey=ee,b.__webglTexture=ie[ee].texture}return W}function Be(b,M,W){let te=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=t.TEXTURE_3D);const ie=ye(b,M),ee=M.source;n.bindTexture(te,b.__webglTexture,t.TEXTURE0+W);const Ae=i.get(ee);if(ee.version!==Ae.__version||ie===!0){n.activeTexture(t.TEXTURE0+W);const fe=Qe.getPrimaries(Qe.workingColorSpace),pe=M.colorSpace===rr?null:Qe.getPrimaries(M.colorSpace),Oe=M.colorSpace===rr||fe===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let oe=y(M.image,!1,r.maxTextureSize);oe=De(M,oe);const me=s.convert(M.format,M.colorSpace),Ve=s.convert(M.type);let Ce=v(M.internalFormat,me,Ve,M.colorSpace,M.isVideoTexture);se(te,M);let _e;const be=M.mipmaps,Ie=M.isVideoTexture!==!0,ot=Ae.__version===void 0||ie===!0,x=ee.dataReady,B=E(M,oe);if(M.isDepthTexture)Ce=_(M.format===vo,M.type),ot&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,Ce,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Ce,oe.width,oe.height,0,me,Ve,null));else if(M.isDataTexture)if(be.length>0){Ie&&ot&&n.texStorage2D(t.TEXTURE_2D,B,Ce,be[0].width,be[0].height);for(let H=0,j=be.length;H<j;H++)_e=be[H],Ie?x&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,_e.width,_e.height,me,Ve,_e.data):n.texImage2D(t.TEXTURE_2D,H,Ce,_e.width,_e.height,0,me,Ve,_e.data);M.generateMipmaps=!1}else Ie?(ot&&n.texStorage2D(t.TEXTURE_2D,B,Ce,oe.width,oe.height),x&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,me,Ve,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Ce,oe.width,oe.height,0,me,Ve,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ie&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,B,Ce,be[0].width,be[0].height,oe.depth);for(let H=0,j=be.length;H<j;H++)if(_e=be[H],M.format!==Yn)if(me!==null)if(Ie){if(x)if(M.layerUpdates.size>0){const ne=U0(_e.width,_e.height,M.format,M.type);for(const Ee of M.layerUpdates){const Pe=_e.data.subarray(Ee*ne/_e.data.BYTES_PER_ELEMENT,(Ee+1)*ne/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,Ee,_e.width,_e.height,1,me,Pe,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,_e.width,_e.height,oe.depth,me,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,Ce,_e.width,_e.height,oe.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?x&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,_e.width,_e.height,oe.depth,me,Ve,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,Ce,_e.width,_e.height,oe.depth,0,me,Ve,_e.data)}else{Ie&&ot&&n.texStorage2D(t.TEXTURE_2D,B,Ce,be[0].width,be[0].height);for(let H=0,j=be.length;H<j;H++)_e=be[H],M.format!==Yn?me!==null?Ie?x&&n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,_e.width,_e.height,me,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,H,Ce,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?x&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,_e.width,_e.height,me,Ve,_e.data):n.texImage2D(t.TEXTURE_2D,H,Ce,_e.width,_e.height,0,me,Ve,_e.data)}else if(M.isDataArrayTexture)if(Ie){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,B,Ce,oe.width,oe.height,oe.depth),x)if(M.layerUpdates.size>0){const H=U0(oe.width,oe.height,M.format,M.type);for(const j of M.layerUpdates){const ne=oe.data.subarray(j*H/oe.data.BYTES_PER_ELEMENT,(j+1)*H/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,j,oe.width,oe.height,1,me,Ve,ne)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,Ve,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,oe.width,oe.height,oe.depth,0,me,Ve,oe.data);else if(M.isData3DTexture)Ie?(ot&&n.texStorage3D(t.TEXTURE_3D,B,Ce,oe.width,oe.height,oe.depth),x&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,Ve,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,oe.width,oe.height,oe.depth,0,me,Ve,oe.data);else if(M.isFramebufferTexture){if(ot)if(Ie)n.texStorage2D(t.TEXTURE_2D,B,Ce,oe.width,oe.height);else{let H=oe.width,j=oe.height;for(let ne=0;ne<B;ne++)n.texImage2D(t.TEXTURE_2D,ne,Ce,H,j,0,me,Ve,null),H>>=1,j>>=1}}else if(be.length>0){if(Ie&&ot){const H=Ue(be[0]);n.texStorage2D(t.TEXTURE_2D,B,Ce,H.width,H.height)}for(let H=0,j=be.length;H<j;H++)_e=be[H],Ie?x&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,me,Ve,_e):n.texImage2D(t.TEXTURE_2D,H,Ce,me,Ve,_e);M.generateMipmaps=!1}else if(Ie){if(ot){const H=Ue(oe);n.texStorage2D(t.TEXTURE_2D,B,Ce,H.width,H.height)}x&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,Ve,oe)}else n.texImage2D(t.TEXTURE_2D,0,Ce,me,Ve,oe);g(M)&&h(te),Ae.__version=ee.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function q(b,M,W){if(M.image.length!==6)return;const te=ye(b,M),ie=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+W);const ee=i.get(ie);if(ie.version!==ee.__version||te===!0){n.activeTexture(t.TEXTURE0+W);const Ae=Qe.getPrimaries(Qe.workingColorSpace),fe=M.colorSpace===rr?null:Qe.getPrimaries(M.colorSpace),pe=M.colorSpace===rr||Ae===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Oe=M.isCompressedTexture||M.image[0].isCompressedTexture,oe=M.image[0]&&M.image[0].isDataTexture,me=[];for(let j=0;j<6;j++)!Oe&&!oe?me[j]=y(M.image[j],!0,r.maxCubemapSize):me[j]=oe?M.image[j].image:M.image[j],me[j]=De(M,me[j]);const Ve=me[0],Ce=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),be=v(M.internalFormat,Ce,_e,M.colorSpace),Ie=M.isVideoTexture!==!0,ot=ee.__version===void 0||te===!0,x=ie.dataReady;let B=E(M,Ve);se(t.TEXTURE_CUBE_MAP,M);let H;if(Oe){Ie&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,B,be,Ve.width,Ve.height);for(let j=0;j<6;j++){H=me[j].mipmaps;for(let ne=0;ne<H.length;ne++){const Ee=H[ne];M.format!==Yn?Ce!==null?Ie?x&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,0,0,Ee.width,Ee.height,Ce,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,be,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?x&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,0,0,Ee.width,Ee.height,Ce,_e,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,be,Ee.width,Ee.height,0,Ce,_e,Ee.data)}}}else{if(H=M.mipmaps,Ie&&ot){H.length>0&&B++;const j=Ue(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,B,be,j.width,j.height)}for(let j=0;j<6;j++)if(oe){Ie?x&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,me[j].width,me[j].height,Ce,_e,me[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,be,me[j].width,me[j].height,0,Ce,_e,me[j].data);for(let ne=0;ne<H.length;ne++){const Pe=H[ne].image[j].image;Ie?x&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,0,0,Pe.width,Pe.height,Ce,_e,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,be,Pe.width,Pe.height,0,Ce,_e,Pe.data)}}else{Ie?x&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ce,_e,me[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,be,Ce,_e,me[j]);for(let ne=0;ne<H.length;ne++){const Ee=H[ne];Ie?x&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,0,0,Ce,_e,Ee.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,be,Ce,_e,Ee.image[j])}}}g(M)&&h(t.TEXTURE_CUBE_MAP),ee.__version=ie.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function J(b,M,W,te,ie,ee){const Ae=s.convert(W.format,W.colorSpace),fe=s.convert(W.type),pe=v(W.internalFormat,Ae,fe,W.colorSpace);if(!i.get(M).__hasExternalTextures){const oe=Math.max(1,M.width>>ee),me=Math.max(1,M.height>>ee);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,ee,pe,oe,me,M.depth,0,Ae,fe,null):n.texImage2D(ie,ee,pe,oe,me,0,Ae,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,ie,i.get(W).__webglTexture,0,qe(M)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,ie,i.get(W).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(b,M,W){if(t.bindRenderbuffer(t.RENDERBUFFER,b),M.depthBuffer){const te=M.depthTexture,ie=te&&te.isDepthTexture?te.type:null,ee=_(M.stencilBuffer,ie),Ae=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=qe(M);Se(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,ee,M.width,M.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ee,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,b)}else{const te=M.textures;for(let ie=0;ie<te.length;ie++){const ee=te[ie],Ae=s.convert(ee.format,ee.colorSpace),fe=s.convert(ee.type),pe=v(ee.internalFormat,Ae,fe,ee.colorSpace),Oe=qe(M);W&&Se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,pe,M.width,M.height):Se(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Oe,pe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,pe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const te=i.get(M.depthTexture).__webglTexture,ie=qe(M);if(M.depthTexture.format===io)Se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(M.depthTexture.format===vo)Se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Te(b){const M=i.get(b),W=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ue(M.__webglFramebuffer,b)}else if(W){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=t.createRenderbuffer(),ce(M.__webglDepthbuffer[te],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ce(M.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(b,M,W){const te=i.get(b);M!==void 0&&J(te.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Te(b)}function ke(b){const M=b.texture,W=i.get(b),te=i.get(M);b.addEventListener("dispose",C);const ie=b.textures,ee=b.isWebGLCubeRenderTarget===!0,Ae=ie.length>1;if(Ae||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=M.version,o.memory.textures++),ee){W.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[fe]=[];for(let pe=0;pe<M.mipmaps.length;pe++)W.__webglFramebuffer[fe][pe]=t.createFramebuffer()}else W.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)W.__webglFramebuffer[fe]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let fe=0,pe=ie.length;fe<pe;fe++){const Oe=i.get(ie[fe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&Se(b)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const pe=ie[fe];W.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[fe]);const Oe=s.convert(pe.format,pe.colorSpace),oe=s.convert(pe.type),me=v(pe.internalFormat,Oe,oe,pe.colorSpace,b.isXRRenderTarget===!0),Ve=qe(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,me,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,W.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(W.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),se(t.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)J(W.__webglFramebuffer[fe][pe],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else J(W.__webglFramebuffer[fe],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let fe=0,pe=ie.length;fe<pe;fe++){const Oe=ie[fe],oe=i.get(Oe);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),se(t.TEXTURE_2D,Oe),J(W.__webglFramebuffer,b,Oe,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),g(Oe)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(fe=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,te.__webglTexture),se(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)J(W.__webglFramebuffer[pe],b,M,t.COLOR_ATTACHMENT0,fe,pe);else J(W.__webglFramebuffer,b,M,t.COLOR_ATTACHMENT0,fe,0);g(M)&&h(fe),n.unbindTexture()}b.depthBuffer&&Te(b)}function tt(b){const M=b.textures;for(let W=0,te=M.length;W<te;W++){const ie=M[W];if(g(ie)){const ee=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ae=i.get(ie).__webglTexture;n.bindTexture(ee,Ae),h(ee),n.unbindTexture()}}}const N=[],ht=[];function Ye(b){if(b.samples>0){if(Se(b)===!1){const M=b.textures,W=b.width,te=b.height;let ie=t.COLOR_BUFFER_BIT;const ee=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(b),fe=M.length>1;if(fe)for(let pe=0;pe<M.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[pe]);const Oe=i.get(M[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Oe,0)}t.blitFramebuffer(0,0,W,te,0,0,W,te,ie,t.NEAREST),l===!0&&(N.length=0,ht.length=0,N.push(t.COLOR_ATTACHMENT0+pe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(N.push(ee),ht.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ht)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,N))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let pe=0;pe<M.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[pe]);const Oe=i.get(M[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const M=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function qe(b){return Math.min(r.maxSamples,b.samples)}function Se(b){const M=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function dt(b){const M=o.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function De(b,M){const W=b.colorSpace,te=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||W!==Mr&&W!==rr&&(Qe.getTransfer(W)===rt?(te!==Yn||ie!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function Ue(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=Ne,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Se}function N3(t,e){function n(i,r=rr){let s;const o=Qe.getTransfer(r);if(i===Bi)return t.UNSIGNED_BYTE;if(i===Bp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===zp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ex)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Qy)return t.BYTE;if(i===Jy)return t.SHORT;if(i===ba)return t.UNSIGNED_SHORT;if(i===kp)return t.INT;if(i===rs)return t.UNSIGNED_INT;if(i===Pi)return t.FLOAT;if(i===Ba)return t.HALF_FLOAT;if(i===tx)return t.ALPHA;if(i===nx)return t.RGB;if(i===Yn)return t.RGBA;if(i===ix)return t.LUMINANCE;if(i===rx)return t.LUMINANCE_ALPHA;if(i===io)return t.DEPTH_COMPONENT;if(i===vo)return t.DEPTH_STENCIL;if(i===sx)return t.RED;if(i===Hp)return t.RED_INTEGER;if(i===ox)return t.RG;if(i===Vp)return t.RG_INTEGER;if(i===Gp)return t.RGBA_INTEGER;if(i===fc||i===hc||i===dc||i===pc)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ed||i===td||i===nd||i===id)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ed)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===td)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===id)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rd||i===sd||i===od)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===rd||i===sd)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===od)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ad||i===ld||i===cd||i===ud||i===fd||i===hd||i===dd||i===pd||i===md||i===gd||i===_d||i===vd||i===yd||i===xd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ad)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ld)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ud)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===md)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_d)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mc||i===Sd||i===Ed)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===mc)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ed)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ax||i===Md||i===Ad||i===wd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===mc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Md)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ad)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_o?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class D3 extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qs extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const I3={type:"move"};class kf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),h=this._getHandJoint(c,y);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(I3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const U3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class F3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new fn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new yr({vertexShader:U3,fragmentShader:O3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ct(new wu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k3 extends cs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,m=null;const y=new F3,g=n.getContextAttributes();let h=null,v=null;const _=[],E=[],R=new Fe;let C=null;const T=new Pn;T.layers.enable(1),T.viewport=new Dt;const P=new Pn;P.layers.enable(2),P.viewport=new Dt;const w=[T,P],S=new D3;S.layers.enable(1),S.layers.enable(2);let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=_[q];return J===void 0&&(J=new kf,_[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=_[q];return J===void 0&&(J=new kf,_[q]=J),J.getGripSpace()},this.getHand=function(q){let J=_[q];return J===void 0&&(J=new kf,_[q]=J),J.getHandSpace()};function I(q){const J=E.indexOf(q.inputSource);if(J===-1)return;const ce=_[J];ce!==void 0&&(ce.update(q.inputSource,q.frame,c||o),ce.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",K);for(let q=0;q<_.length;q++){const J=E[q];J!==null&&(E[q]=null,_[q].disconnect(J))}L=null,F=null,y.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",z),r.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ss(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,ce=null,ue=null;g.depth&&(ue=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=g.stencil?vo:io,ce=g.stencil?_o:rs);const Te={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Te),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new ss(f.textureWidth,f.textureHeight,{format:Yn,type:Bi,depthTexture:new wx(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(q){for(let J=0;J<q.removed.length;J++){const ce=q.removed[J],ue=E.indexOf(ce);ue>=0&&(E[ue]=null,_[ue].disconnect(ce))}for(let J=0;J<q.added.length;J++){const ce=q.added[J];let ue=E.indexOf(ce);if(ue===-1){for(let Ne=0;Ne<_.length;Ne++)if(Ne>=E.length){E.push(ce),ue=Ne;break}else if(E[Ne]===null){E[Ne]=ce,ue=Ne;break}if(ue===-1)break}const Te=_[ue];Te&&Te.connect(ce)}}const Y=new k,$=new k;function D(q,J,ce){Y.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(ce.matrixWorld);const ue=Y.distanceTo($),Te=J.projectionMatrix.elements,Ne=ce.projectionMatrix.elements,ke=Te[14]/(Te[10]-1),tt=Te[14]/(Te[10]+1),N=(Te[9]+1)/Te[5],ht=(Te[9]-1)/Te[5],Ye=(Te[8]-1)/Te[0],qe=(Ne[8]+1)/Ne[0],Se=ke*Ye,dt=ke*qe,De=ue/(-Ye+qe),Ue=De*-Ye;J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ue),q.translateZ(De),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const b=ke+De,M=tt+De,W=Se-Ue,te=dt+(ue-Ue),ie=N*tt/M*b,ee=ht*tt/M*b;q.projectionMatrix.makePerspective(W,te,ie,ee,b,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Z(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;y.texture!==null&&(q.near=y.depthNear,q.far=y.depthFar),S.near=P.near=T.near=q.near,S.far=P.far=T.far=q.far,(L!==S.near||F!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,F=S.far,T.near=L,T.far=F,P.near=L,P.far=F,T.updateProjectionMatrix(),P.updateProjectionMatrix(),q.updateProjectionMatrix());const J=q.parent,ce=S.cameras;Z(S,J);for(let ue=0;ue<ce.length;ue++)Z(ce[ue],J);ce.length===2?D(S,T,P):S.projectionMatrix.copy(T.projectionMatrix),Q(q,S,J)};function Q(q,J,ce){ce===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Pa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let se=null;function ye(q,J){if(u=J.getViewerPose(c||o),m=J,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ue=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let Ne=0;Ne<ce.length;Ne++){const ke=ce[Ne];let tt=null;if(p!==null)tt=p.getViewport(ke);else{const ht=d.getViewSubImage(f,ke);tt=ht.viewport,Ne===0&&(e.setRenderTargetTextures(v,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(v))}let N=w[Ne];N===void 0&&(N=new Pn,N.layers.enable(Ne),N.viewport=new Dt,w[Ne]=N),N.matrix.fromArray(ke.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(ke.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(tt.x,tt.y,tt.width,tt.height),Ne===0&&(S.matrix.copy(N.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(N)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ne=d.getDepthInformation(ce[0]);Ne&&Ne.isValid&&Ne.texture&&y.init(e,Ne,r.renderState)}}for(let ce=0;ce<_.length;ce++){const ue=E[ce],Te=_[ce];ue!==null&&Te!==void 0&&Te.update(ue,J,c||o)}se&&se(q,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),m=null}const Be=new Ax;Be.setAnimationLoop(ye),this.setAnimationLoop=function(q){se=q},this.dispose=function(){}}}const Dr=new zi,B3=new Rt;function z3(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,xx(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,_,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,E)):h.isMeshMatcapMaterial?(s(g,h),m(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),y(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,v,_):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===un&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===un&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h),_=v.envMap,E=v.envMapRotation;_&&(g.envMap.value=_,Dr.copy(E),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),g.envMapRotation.value.setFromMatrix4(B3.makeRotationFromEuler(Dr)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,_){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=_*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===un&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function y(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function H3(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const E=_.program;i.uniformBlockBinding(v,E)}function c(v,_){let E=r[v.id];E===void 0&&(m(v),E=u(v),r[v.id]=E,v.addEventListener("dispose",g));const R=_.program;i.updateUBOMapping(v,R);const C=e.render.frame;s[v.id]!==C&&(f(v),s[v.id]=C)}function u(v){const _=d();v.__bindingPointIndex=_;const E=t.createBuffer(),R=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,E),E}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const _=r[v.id],E=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,T=E.length;C<T;C++){const P=Array.isArray(E[C])?E[C]:[E[C]];for(let w=0,S=P.length;w<S;w++){const L=P[w];if(p(L,C,w,R)===!0){const F=L.__offset,I=Array.isArray(L.value)?L.value:[L.value];let z=0;for(let K=0;K<I.length;K++){const Y=I[K],$=y(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,F+z,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,E,R){const C=v.value,T=_+"_"+E;if(R[T]===void 0)return typeof C=="number"||typeof C=="boolean"?R[T]=C:R[T]=C.clone(),!0;{const P=R[T];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return R[T]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function m(v){const _=v.uniforms;let E=0;const R=16;for(let T=0,P=_.length;T<P;T++){const w=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,L=w.length;S<L;S++){const F=w[S],I=Array.isArray(F.value)?F.value:[F.value];for(let z=0,K=I.length;z<K;z++){const Y=I[z],$=y(Y),D=E%R;D!==0&&R-D<$.boundary&&(E+=R-D),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=$.storage}}}const C=E%R;return C>0&&(E+=R-C),v.__size=E,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){const _=v.target;_.removeEventListener("dispose",g);const E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class V3{constructor(e={}){const{canvas:n=NR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),m=new Int32Array(4);let y=null,g=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=gr,this.toneMappingExposure=1;const _=this;let E=!1,R=0,C=0,T=null,P=-1,w=null;const S=new Dt,L=new Dt;let F=null;const I=new Je(0);let z=0,K=n.width,Y=n.height,$=1,D=null,Z=null;const Q=new Dt(0,0,K,Y),se=new Dt(0,0,K,Y);let ye=!1;const Be=new Mx;let q=!1,J=!1;const ce=new Rt,ue=new k,Te=new Dt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function tt(){return T===null?$:1}let N=i;function ht(A,U){return n.getContext(A,U)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fp}`),n.addEventListener("webglcontextlost",H,!1),n.addEventListener("webglcontextrestored",j,!1),n.addEventListener("webglcontextcreationerror",ne,!1),N===null){const U="webgl2";if(N=ht(U,A),N===null)throw ht(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ye,qe,Se,dt,De,Ue,b,M,W,te,ie,ee,Ae,fe,pe,Oe,oe,me,Ve,Ce,_e,be,Ie,ot;function x(){Ye=new KP(N),Ye.init(),be=new N3(N,Ye),qe=new VP(N,Ye,e,be),Se=new b3(N),dt=new QP(N),De=new m3,Ue=new L3(N,Ye,Se,De,qe,be,dt),b=new WP(_),M=new qP(_),W=new r2(N),Ie=new zP(N,W),te=new $P(N,W,dt,Ie),ie=new eL(N,te,W,dt),Ve=new JP(N,qe,Ue),Oe=new GP(De),ee=new p3(_,b,M,Ye,qe,Ie,Oe),Ae=new z3(_,De),fe=new _3,pe=new M3(Ye),me=new BP(_,b,M,Se,ie,f,l),oe=new R3(_,ie,qe),ot=new H3(N,dt,qe,Se),Ce=new HP(N,Ye,dt),_e=new ZP(N,Ye,dt),dt.programs=ee.programs,_.capabilities=qe,_.extensions=Ye,_.properties=De,_.renderLists=fe,_.shadowMap=oe,_.state=Se,_.info=dt}x();const B=new k3(_,N);this.xr=B,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(K,Y,!1))},this.getSize=function(A){return A.set(K,Y)},this.setSize=function(A,U,V=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,Y=U,n.width=Math.floor(A*$),n.height=Math.floor(U*$),V===!0&&(n.style.width=A+"px",n.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(K*$,Y*$).floor()},this.setDrawingBufferSize=function(A,U,V){K=A,Y=U,$=V,n.width=Math.floor(A*V),n.height=Math.floor(U*V),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,U,V,G){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,U,V,G),Se.viewport(S.copy(Q).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(se)},this.setScissor=function(A,U,V,G){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,U,V,G),Se.scissor(L.copy(se).multiplyScalar($).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(A){Se.setScissorTest(ye=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){Z=A},this.getClearColor=function(A){return A.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(A=!0,U=!0,V=!0){let G=0;if(A){let O=!1;if(T!==null){const ae=T.texture.format;O=ae===Gp||ae===Vp||ae===Hp}if(O){const ae=T.texture.type,de=ae===Bi||ae===rs||ae===ba||ae===_o||ae===Bp||ae===zp,ve=me.getClearColor(),xe=me.getClearAlpha(),Re=ve.r,Le=ve.g,we=ve.b;de?(p[0]=Re,p[1]=Le,p[2]=we,p[3]=xe,N.clearBufferuiv(N.COLOR,0,p)):(m[0]=Re,m[1]=Le,m[2]=we,m[3]=xe,N.clearBufferiv(N.COLOR,0,m))}else G|=N.COLOR_BUFFER_BIT}U&&(G|=N.DEPTH_BUFFER_BIT),V&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",H,!1),n.removeEventListener("webglcontextrestored",j,!1),n.removeEventListener("webglcontextcreationerror",ne,!1),fe.dispose(),pe.dispose(),De.dispose(),b.dispose(),M.dispose(),ie.dispose(),Ie.dispose(),ot.dispose(),ee.dispose(),B.dispose(),B.removeEventListener("sessionstart",yt),B.removeEventListener("sessionend",Gi),Ut.stop()};function H(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=dt.autoReset,U=oe.enabled,V=oe.autoUpdate,G=oe.needsUpdate,O=oe.type;x(),dt.autoReset=A,oe.enabled=U,oe.autoUpdate=V,oe.needsUpdate=G,oe.type=O}function ne(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ee(A){const U=A.target;U.removeEventListener("dispose",Ee),Pe(U)}function Pe(A){_t(A),De.remove(A)}function _t(A){const U=De.get(A).programs;U!==void 0&&(U.forEach(function(V){ee.releaseProgram(V)}),A.isShaderMaterial&&ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,V,G,O,ae){U===null&&(U=Ne);const de=O.isMesh&&O.matrixWorld.determinant()<0,ve=zx(A,U,V,G,O);Se.setMaterial(G,de);let xe=V.index,Re=1;if(G.wireframe===!0){if(xe=te.getWireframeAttribute(V),xe===void 0)return;Re=2}const Le=V.drawRange,we=V.attributes.position;let Ke=Le.start*Re,pt=(Le.start+Le.count)*Re;ae!==null&&(Ke=Math.max(Ke,ae.start*Re),pt=Math.min(pt,(ae.start+ae.count)*Re)),xe!==null?(Ke=Math.max(Ke,0),pt=Math.min(pt,xe.count)):we!=null&&(Ke=Math.max(Ke,0),pt=Math.min(pt,we.count));const mt=pt-Ke;if(mt<0||mt===1/0)return;Ie.setup(O,G,ve,V,xe);let dn,$e=Ce;if(xe!==null&&(dn=W.get(xe),$e=_e,$e.setIndex(dn)),O.isMesh)G.wireframe===!0?(Se.setLineWidth(G.wireframeLinewidth*tt()),$e.setMode(N.LINES)):$e.setMode(N.TRIANGLES);else if(O.isLine){let Me=G.linewidth;Me===void 0&&(Me=1),Se.setLineWidth(Me*tt()),O.isLineSegments?$e.setMode(N.LINES):O.isLineLoop?$e.setMode(N.LINE_LOOP):$e.setMode(N.LINE_STRIP)}else O.isPoints?$e.setMode(N.POINTS):O.isSprite&&$e.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)$e.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))$e.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Me=O._multiDrawStarts,Ot=O._multiDrawCounts,Ze=O._multiDrawCount,On=xe?W.get(xe).bytesPerElement:1,us=De.get(G).currentProgram.getUniforms();for(let pn=0;pn<Ze;pn++)us.setValue(N,"_gl_DrawID",pn),$e.render(Me[pn]/On,Ot[pn])}else if(O.isInstancedMesh)$e.renderInstances(Ke,mt,O.count);else if(V.isInstancedBufferGeometry){const Me=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ot=Math.min(V.instanceCount,Me);$e.renderInstances(Ke,mt,Ot)}else $e.render(Ke,mt)};function At(A,U,V){A.transparent===!0&&A.side===Ci&&A.forceSinglePass===!1?(A.side=un,A.needsUpdate=!0,Za(A,U,V),A.side=hn,A.needsUpdate=!0,Za(A,U,V),A.side=Ci):Za(A,U,V)}this.compile=function(A,U,V=null){V===null&&(V=A),g=pe.get(V),g.init(U),v.push(g),V.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),A!==V&&A.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights();const G=new Set;return A.traverse(function(O){const ae=O.material;if(ae)if(Array.isArray(ae))for(let de=0;de<ae.length;de++){const ve=ae[de];At(ve,V,O),G.add(ve)}else At(ae,V,O),G.add(ae)}),v.pop(),g=null,G},this.compileAsync=function(A,U,V=null){const G=this.compile(A,U,V);return new Promise(O=>{function ae(){if(G.forEach(function(de){De.get(de).currentProgram.isReady()&&G.delete(de)}),G.size===0){O(A);return}setTimeout(ae,10)}Ye.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Xe=null;function wt(A){Xe&&Xe(A)}function yt(){Ut.stop()}function Gi(){Ut.start()}const Ut=new Ax;Ut.setAnimationLoop(wt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(A){Xe=A,B.setAnimationLoop(A),A===null?Ut.stop():Ut.start()},B.addEventListener("sessionstart",yt),B.addEventListener("sessionend",Gi),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(U),U=B.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,U,T),g=pe.get(A,v.length),g.init(U),v.push(g),ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Be.setFromProjectionMatrix(ce),J=this.localClippingEnabled,q=Oe.init(this.clippingPlanes,J),y=fe.get(A,h.length),y.init(),h.push(y),B.enabled===!0&&B.isPresenting===!0){const ae=_.xr.getDepthSensingMesh();ae!==null&&gi(ae,U,-1/0,_.sortObjects)}gi(A,U,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(D,Z),ke=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,ke&&me.addToRenderList(y,A),this.info.render.frame++,q===!0&&Oe.beginShadows();const V=g.state.shadowsArray;oe.render(V,A,U),q===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=y.opaque,O=y.transmissive;if(g.setupLights(),U.isArrayCamera){const ae=U.cameras;if(O.length>0)for(let de=0,ve=ae.length;de<ve;de++){const xe=ae[de];Co(G,O,A,xe)}ke&&me.render(A);for(let de=0,ve=ae.length;de<ve;de++){const xe=ae[de];Tr(y,A,xe,xe.viewport)}}else O.length>0&&Co(G,O,A,U),ke&&me.render(A),Tr(y,A,U);T!==null&&(Ue.updateMultisampleRenderTarget(T),Ue.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(_,A,U),Ie.resetDefaultState(),P=-1,w=null,v.pop(),v.length>0?(g=v[v.length-1],q===!0&&Oe.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function gi(A,U,V,G){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Be.intersectsSprite(A)){G&&Te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ce);const de=ie.update(A),ve=A.material;ve.visible&&y.push(A,de,ve,V,Te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Be.intersectsObject(A))){const de=ie.update(A),ve=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Te.copy(A.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Te.copy(de.boundingSphere.center)),Te.applyMatrix4(A.matrixWorld).applyMatrix4(ce)),Array.isArray(ve)){const xe=de.groups;for(let Re=0,Le=xe.length;Re<Le;Re++){const we=xe[Re],Ke=ve[we.materialIndex];Ke&&Ke.visible&&y.push(A,de,Ke,V,Te.z,we)}}else ve.visible&&y.push(A,de,ve,V,Te.z,null)}}const ae=A.children;for(let de=0,ve=ae.length;de<ve;de++)gi(ae[de],U,V,G)}function Tr(A,U,V,G){const O=A.opaque,ae=A.transmissive,de=A.transparent;g.setupLightsView(V),q===!0&&Oe.setGlobalState(_.clippingPlanes,V),G&&Se.viewport(S.copy(G)),O.length>0&&$a(O,U,V),ae.length>0&&$a(ae,U,V),de.length>0&&$a(de,U,V),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Co(A,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[G.id]===void 0&&(g.state.transmissionRenderTarget[G.id]=new ss(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Ba:Bi,minFilter:jr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ae=g.state.transmissionRenderTarget[G.id],de=G.viewport||S;ae.setSize(de.z,de.w);const ve=_.getRenderTarget();_.setRenderTarget(ae),_.getClearColor(I),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),ke?me.render(V):_.clear();const xe=_.toneMapping;_.toneMapping=gr;const Re=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),g.setupLightsView(G),q===!0&&Oe.setGlobalState(_.clippingPlanes,G),$a(A,V,G),Ue.updateMultisampleRenderTarget(ae),Ue.updateRenderTargetMipmap(ae),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let we=0,Ke=U.length;we<Ke;we++){const pt=U[we],mt=pt.object,dn=pt.geometry,$e=pt.material,Me=pt.group;if($e.side===Ci&&mt.layers.test(G.layers)){const Ot=$e.side;$e.side=un,$e.needsUpdate=!0,Zp(mt,V,G,dn,$e,Me),$e.side=Ot,$e.needsUpdate=!0,Le=!0}}Le===!0&&(Ue.updateMultisampleRenderTarget(ae),Ue.updateRenderTargetMipmap(ae))}_.setRenderTarget(ve),_.setClearColor(I,z),Re!==void 0&&(G.viewport=Re),_.toneMapping=xe}function $a(A,U,V){const G=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ae=A.length;O<ae;O++){const de=A[O],ve=de.object,xe=de.geometry,Re=G===null?de.material:G,Le=de.group;ve.layers.test(V.layers)&&Zp(ve,U,V,xe,Re,Le)}}function Zp(A,U,V,G,O,ae){A.onBeforeRender(_,U,V,G,O,ae),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.transparent===!0&&O.side===Ci&&O.forceSinglePass===!1?(O.side=un,O.needsUpdate=!0,_.renderBufferDirect(V,U,G,O,A,ae),O.side=hn,O.needsUpdate=!0,_.renderBufferDirect(V,U,G,O,A,ae),O.side=Ci):_.renderBufferDirect(V,U,G,O,A,ae),A.onAfterRender(_,U,V,G,O,ae)}function Za(A,U,V){U.isScene!==!0&&(U=Ne);const G=De.get(A),O=g.state.lights,ae=g.state.shadowsArray,de=O.state.version,ve=ee.getParameters(A,O.state,ae,U,V),xe=ee.getProgramCacheKey(ve);let Re=G.programs;G.environment=A.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(A.isMeshStandardMaterial?M:b).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Re===void 0&&(A.addEventListener("dispose",Ee),Re=new Map,G.programs=Re);let Le=Re.get(xe);if(Le!==void 0){if(G.currentProgram===Le&&G.lightsStateVersion===de)return Jp(A,ve),Le}else ve.uniforms=ee.getUniforms(A),A.onBeforeCompile(ve,_),Le=ee.acquireProgram(ve,xe),Re.set(xe,Le),G.uniforms=ve.uniforms;const we=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(we.clippingPlanes=Oe.uniform),Jp(A,ve),G.needsLights=Vx(A),G.lightsStateVersion=de,G.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.directionalShadowMap.value=O.state.directionalShadowMap,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotShadowMap.value=O.state.spotShadowMap,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMap.value=O.state.pointShadowMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Le,G.uniformsList=null,Le}function Qp(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=gc.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Jp(A,U){const V=De.get(A);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function zx(A,U,V,G,O){U.isScene!==!0&&(U=Ne),Ue.resetTextureUnits();const ae=U.fog,de=G.isMeshStandardMaterial?U.environment:null,ve=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Mr,xe=(G.isMeshStandardMaterial?M:b).get(G.envMap||de),Re=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Le=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),we=!!V.morphAttributes.position,Ke=!!V.morphAttributes.normal,pt=!!V.morphAttributes.color;let mt=gr;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(mt=_.toneMapping);const dn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$e=dn!==void 0?dn.length:0,Me=De.get(G),Ot=g.state.lights;if(q===!0&&(J===!0||A!==w)){const wn=A===w&&G.id===P;Oe.setState(G,A,wn)}let Ze=!1;G.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ot.state.version||Me.outputColorSpace!==ve||O.isBatchedMesh&&Me.batching===!1||!O.isBatchedMesh&&Me.batching===!0||O.isBatchedMesh&&Me.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Me.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Me.instancing===!1||!O.isInstancedMesh&&Me.instancing===!0||O.isSkinnedMesh&&Me.skinning===!1||!O.isSkinnedMesh&&Me.skinning===!0||O.isInstancedMesh&&Me.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Me.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Me.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Me.instancingMorph===!1&&O.morphTexture!==null||Me.envMap!==xe||G.fog===!0&&Me.fog!==ae||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Oe.numPlanes||Me.numIntersection!==Oe.numIntersection)||Me.vertexAlphas!==Re||Me.vertexTangents!==Le||Me.morphTargets!==we||Me.morphNormals!==Ke||Me.morphColors!==pt||Me.toneMapping!==mt||Me.morphTargetsCount!==$e)&&(Ze=!0):(Ze=!0,Me.__version=G.version);let On=Me.currentProgram;Ze===!0&&(On=Za(G,U,O));let us=!1,pn=!1,Lu=!1;const xt=On.getUniforms(),Wi=Me.uniforms;if(Se.useProgram(On.program)&&(us=!0,pn=!0,Lu=!0),G.id!==P&&(P=G.id,pn=!0),us||w!==A){xt.setValue(N,"projectionMatrix",A.projectionMatrix),xt.setValue(N,"viewMatrix",A.matrixWorldInverse);const wn=xt.map.cameraPosition;wn!==void 0&&wn.setValue(N,ue.setFromMatrixPosition(A.matrixWorld)),qe.logarithmicDepthBuffer&&xt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,pn=!0,Lu=!0)}if(O.isSkinnedMesh){xt.setOptional(N,O,"bindMatrix"),xt.setOptional(N,O,"bindMatrixInverse");const wn=O.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),xt.setValue(N,"boneTexture",wn.boneTexture,Ue))}O.isBatchedMesh&&(xt.setOptional(N,O,"batchingTexture"),xt.setValue(N,"batchingTexture",O._matricesTexture,Ue),xt.setOptional(N,O,"batchingIdTexture"),xt.setValue(N,"batchingIdTexture",O._indirectTexture,Ue),xt.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&xt.setValue(N,"batchingColorTexture",O._colorsTexture,Ue));const Nu=V.morphAttributes;if((Nu.position!==void 0||Nu.normal!==void 0||Nu.color!==void 0)&&Ve.update(O,V,On),(pn||Me.receiveShadow!==O.receiveShadow)&&(Me.receiveShadow=O.receiveShadow,xt.setValue(N,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Wi.envMap.value=xe,Wi.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Wi.envMapIntensity.value=U.environmentIntensity),pn&&(xt.setValue(N,"toneMappingExposure",_.toneMappingExposure),Me.needsLights&&Hx(Wi,Lu),ae&&G.fog===!0&&Ae.refreshFogUniforms(Wi,ae),Ae.refreshMaterialUniforms(Wi,G,$,Y,g.state.transmissionRenderTarget[A.id]),gc.upload(N,Qp(Me),Wi,Ue)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(gc.upload(N,Qp(Me),Wi,Ue),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xt.setValue(N,"center",O.center),xt.setValue(N,"modelViewMatrix",O.modelViewMatrix),xt.setValue(N,"normalMatrix",O.normalMatrix),xt.setValue(N,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const wn=G.uniformsGroups;for(let Du=0,Gx=wn.length;Du<Gx;Du++){const em=wn[Du];ot.update(em,On),ot.bind(em,On)}}return On}function Hx(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Vx(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,U,V){De.get(A.texture).__webglTexture=U,De.get(A.depthTexture).__webglTexture=V;const G=De.get(A);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){const V=De.get(A);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,V=0){T=A,R=U,C=V;let G=!0,O=null,ae=!1,de=!1;if(A){const xe=De.get(A);xe.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(N.FRAMEBUFFER,null),G=!1):xe.__webglFramebuffer===void 0?Ue.setupRenderTarget(A):xe.__hasExternalTextures&&Ue.rebindTextures(A,De.get(A.texture).__webglTexture,De.get(A.depthTexture).__webglTexture);const Re=A.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(de=!0);const Le=De.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?O=Le[U][V]:O=Le[U],ae=!0):A.samples>0&&Ue.useMultisampledRTT(A)===!1?O=De.get(A).__webglMultisampledFramebuffer:Array.isArray(Le)?O=Le[V]:O=Le,S.copy(A.viewport),L.copy(A.scissor),F=A.scissorTest}else S.copy(Q).multiplyScalar($).floor(),L.copy(se).multiplyScalar($).floor(),F=ye;if(Se.bindFramebuffer(N.FRAMEBUFFER,O)&&G&&Se.drawBuffers(A,O),Se.viewport(S),Se.scissor(L),Se.setScissorTest(F),ae){const xe=De.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,V)}else if(de){const xe=De.get(A.texture),Re=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,xe.__webglTexture,V||0,Re)}P=-1},this.readRenderTargetPixels=function(A,U,V,G,O,ae,de){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){Se.bindFramebuffer(N.FRAMEBUFFER,ve);try{const xe=A.texture,Re=xe.format,Le=xe.type;if(!qe.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-G&&V>=0&&V<=A.height-O&&N.readPixels(U,V,G,O,be.convert(Re),be.convert(Le),ae)}finally{const xe=T!==null?De.get(T).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(A,U,V,G,O,ae,de){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){Se.bindFramebuffer(N.FRAMEBUFFER,ve);try{const xe=A.texture,Re=xe.format,Le=xe.type;if(!qe.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=A.width-G&&V>=0&&V<=A.height-O){const we=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.bufferData(N.PIXEL_PACK_BUFFER,ae.byteLength,N.STREAM_READ),N.readPixels(U,V,G,O,be.convert(Re),be.convert(Le),0),N.flush();const Ke=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await DR(N,Ke,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ae)}finally{N.deleteBuffer(we),N.deleteSync(Ke)}return ae}}finally{const xe=T!==null?De.get(T).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(A,U=null,V=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,A=arguments[1]);const G=Math.pow(2,-V),O=Math.floor(A.image.width*G),ae=Math.floor(A.image.height*G),de=U!==null?U.x:0,ve=U!==null?U.y:0;Ue.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,de,ve,O,ae),Se.unbindTexture()},this.copyTextureToTexture=function(A,U,V=null,G=null,O=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1],U=arguments[2],O=arguments[3]||0,V=null);let ae,de,ve,xe,Re,Le;V!==null?(ae=V.max.x-V.min.x,de=V.max.y-V.min.y,ve=V.min.x,xe=V.min.y):(ae=A.image.width,de=A.image.height,ve=0,xe=0),G!==null?(Re=G.x,Le=G.y):(Re=0,Le=0);const we=be.convert(U.format),Ke=be.convert(U.type);Ue.setTexture2D(U,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const pt=N.getParameter(N.UNPACK_ROW_LENGTH),mt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),dn=N.getParameter(N.UNPACK_SKIP_PIXELS),$e=N.getParameter(N.UNPACK_SKIP_ROWS),Me=N.getParameter(N.UNPACK_SKIP_IMAGES),Ot=A.isCompressedTexture?A.mipmaps[O]:A.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Ot.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ot.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ve),N.pixelStorei(N.UNPACK_SKIP_ROWS,xe),A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,O,Re,Le,ae,de,we,Ke,Ot.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,O,Re,Le,Ot.width,Ot.height,we,Ot.data):N.texSubImage2D(N.TEXTURE_2D,O,Re,Le,ae,de,we,Ke,Ot),N.pixelStorei(N.UNPACK_ROW_LENGTH,pt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,dn),N.pixelStorei(N.UNPACK_SKIP_ROWS,$e),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Me),O===0&&U.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(A,U,V=null,G=null,O=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,A=arguments[2],U=arguments[3],O=arguments[4]||0);let ae,de,ve,xe,Re,Le,we,Ke,pt;const mt=A.isCompressedTexture?A.mipmaps[O]:A.image;V!==null?(ae=V.max.x-V.min.x,de=V.max.y-V.min.y,ve=V.max.z-V.min.z,xe=V.min.x,Re=V.min.y,Le=V.min.z):(ae=mt.width,de=mt.height,ve=mt.depth,xe=0,Re=0,Le=0),G!==null?(we=G.x,Ke=G.y,pt=G.z):(we=0,Ke=0,pt=0);const dn=be.convert(U.format),$e=be.convert(U.type);let Me;if(U.isData3DTexture)Ue.setTexture3D(U,0),Me=N.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Ue.setTexture2DArray(U,0),Me=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const Ot=N.getParameter(N.UNPACK_ROW_LENGTH),Ze=N.getParameter(N.UNPACK_IMAGE_HEIGHT),On=N.getParameter(N.UNPACK_SKIP_PIXELS),us=N.getParameter(N.UNPACK_SKIP_ROWS),pn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,xe),N.pixelStorei(N.UNPACK_SKIP_ROWS,Re),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Le),A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Me,O,we,Ke,pt,ae,de,ve,dn,$e,mt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Me,O,we,Ke,pt,ae,de,ve,dn,mt.data):N.texSubImage3D(Me,O,we,Ke,pt,ae,de,ve,dn,$e,mt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ot),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ze),N.pixelStorei(N.UNPACK_SKIP_PIXELS,On),N.pixelStorei(N.UNPACK_SKIP_ROWS,us),N.pixelStorei(N.UNPACK_SKIP_IMAGES,pn),O===0&&U.generateMipmaps&&N.generateMipmap(Me),Se.unbindTexture()},this.initRenderTarget=function(A){De.get(A).__webglFramebuffer===void 0&&Ue.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ue.setTextureCube(A,0):A.isData3DTexture?Ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ue.setTexture2DArray(A,0):Ue.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){R=0,C=0,T=null,Se.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Wp?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Au?"display-p3":"srgb"}}class G3 extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Cu extends Ar{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let m=0;const y=[],g=i/2;let h=0;v(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new di(d,3)),this.setAttribute("normal",new di(f,3)),this.setAttribute("uv",new di(p,2));function v(){const E=new k,R=new k;let C=0;const T=(n-e)/i;for(let P=0;P<=s;P++){const w=[],S=P/s,L=S*(n-e)+e;for(let F=0;F<=r;F++){const I=F/r,z=I*l+a,K=Math.sin(z),Y=Math.cos(z);R.x=L*K,R.y=-S*i+g,R.z=L*Y,d.push(R.x,R.y,R.z),E.set(K,T,Y).normalize(),f.push(E.x,E.y,E.z),p.push(I,1-S),w.push(m++)}y.push(w)}for(let P=0;P<r;P++)for(let w=0;w<s;w++){const S=y[w][P],L=y[w+1][P],F=y[w+1][P+1],I=y[w][P+1];u.push(S,L,I),u.push(L,F,I),C+=6}c.addGroup(h,C,0),h+=C}function _(E){const R=m,C=new Fe,T=new k;let P=0;const w=E===!0?e:n,S=E===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,g*S,0),f.push(0,S,0),p.push(.5,.5),m++;const L=m;for(let F=0;F<=r;F++){const z=F/r*l+a,K=Math.cos(z),Y=Math.sin(z);T.x=w*Y,T.y=g*S,T.z=w*K,d.push(T.x,T.y,T.z),f.push(0,S,0),C.x=K*.5+.5,C.y=Y*.5*S+.5,p.push(C.x,C.y),m++}for(let F=0;F<r;F++){const I=R+F,z=L+F;E===!0?u.push(z,z+1,I):u.push(z+1,z,I),P+=3}c.addGroup(h,P,E===!0?1:2),h+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class To extends Ha{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Je(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lx,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class O0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(jt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fp);const F0={type:"change"},Bf={type:"start"},k0={type:"end"},jl=new px,B0=new tr,W3=Math.cos(70*LR.DEG2RAD);class X3 extends cs{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hs.ROTATE,MIDDLE:hs.DOLLY,RIGHT:hs.PAN},this.touches={ONE:ds.ROTATE,TWO:ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",pe),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",pe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(F0),i.update(),s=r.NONE},this.update=function(){const x=new k,B=new os().setFromUnitVectors(e.up,new k(0,1,0)),H=B.clone().invert(),j=new k,ne=new os,Ee=new k,Pe=2*Math.PI;return function(At=null){const Xe=i.object.position;x.copy(Xe).sub(i.target),x.applyQuaternion(B),a.setFromVector3(x),i.autoRotate&&s===r.NONE&&F(S(At)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let wt=i.minAzimuthAngle,yt=i.maxAzimuthAngle;isFinite(wt)&&isFinite(yt)&&(wt<-Math.PI?wt+=Pe:wt>Math.PI&&(wt-=Pe),yt<-Math.PI?yt+=Pe:yt>Math.PI&&(yt-=Pe),wt<=yt?a.theta=Math.max(wt,Math.min(yt,a.theta)):a.theta=a.theta>(wt+yt)/2?Math.max(wt,a.theta):Math.min(yt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Gi=!1;if(i.zoomToCursor&&C||i.object.isOrthographicCamera)a.radius=Q(a.radius);else{const Ut=a.radius;a.radius=Q(a.radius*c),Gi=Ut!=a.radius}if(x.setFromSpherical(a),x.applyQuaternion(H),Xe.copy(i.target).add(x),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&C){let Ut=null;if(i.object.isPerspectiveCamera){const gi=x.length();Ut=Q(gi*c);const Tr=gi-Ut;i.object.position.addScaledVector(E,Tr),i.object.updateMatrixWorld(),Gi=!!Tr}else if(i.object.isOrthographicCamera){const gi=new k(R.x,R.y,0);gi.unproject(i.object);const Tr=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Gi=Tr!==i.object.zoom;const Co=new k(R.x,R.y,0);Co.unproject(i.object),i.object.position.sub(Co).add(gi),i.object.updateMatrixWorld(),Ut=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ut!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ut).add(i.object.position):(jl.origin.copy(i.object.position),jl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(jl.direction))<W3?e.lookAt(i.target):(B0.setFromNormalAndCoplanarPoint(i.object.up,i.target),jl.intersectPlane(B0,i.target))))}else if(i.object.isOrthographicCamera){const Ut=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),Ut!==i.object.zoom&&(i.object.updateProjectionMatrix(),Gi=!0)}return c=1,C=!1,Gi||j.distanceToSquared(i.object.position)>o||8*(1-ne.dot(i.object.quaternion))>o||Ee.distanceToSquared(i.target)>o?(i.dispatchEvent(F0),j.copy(i.object.position),ne.copy(i.object.quaternion),Ee.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",me),i.domElement.removeEventListener("pointerdown",Ue),i.domElement.removeEventListener("pointercancel",M),i.domElement.removeEventListener("wheel",ie),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",M),i.domElement.getRootNode().removeEventListener("keydown",Ae,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",pe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new O0,l=new O0;let c=1;const u=new k,d=new Fe,f=new Fe,p=new Fe,m=new Fe,y=new Fe,g=new Fe,h=new Fe,v=new Fe,_=new Fe,E=new k,R=new Fe;let C=!1;const T=[],P={};let w=!1;function S(x){return x!==null?2*Math.PI/60*i.autoRotateSpeed*x:2*Math.PI/60/60*i.autoRotateSpeed}function L(x){const B=Math.abs(x*.01);return Math.pow(.95,i.zoomSpeed*B)}function F(x){l.theta-=x}function I(x){l.phi-=x}const z=function(){const x=new k;return function(H,j){x.setFromMatrixColumn(j,0),x.multiplyScalar(-H),u.add(x)}}(),K=function(){const x=new k;return function(H,j){i.screenSpacePanning===!0?x.setFromMatrixColumn(j,1):(x.setFromMatrixColumn(j,0),x.crossVectors(i.object.up,x)),x.multiplyScalar(H),u.add(x)}}(),Y=function(){const x=new k;return function(H,j){const ne=i.domElement;if(i.object.isPerspectiveCamera){const Ee=i.object.position;x.copy(Ee).sub(i.target);let Pe=x.length();Pe*=Math.tan(i.object.fov/2*Math.PI/180),z(2*H*Pe/ne.clientHeight,i.object.matrix),K(2*j*Pe/ne.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(H*(i.object.right-i.object.left)/i.object.zoom/ne.clientWidth,i.object.matrix),K(j*(i.object.top-i.object.bottom)/i.object.zoom/ne.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function D(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(x,B){if(!i.zoomToCursor)return;C=!0;const H=i.domElement.getBoundingClientRect(),j=x-H.left,ne=B-H.top,Ee=H.width,Pe=H.height;R.x=j/Ee*2-1,R.y=-(ne/Pe)*2+1,E.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function Q(x){return Math.max(i.minDistance,Math.min(i.maxDistance,x))}function se(x){d.set(x.clientX,x.clientY)}function ye(x){Z(x.clientX,x.clientX),h.set(x.clientX,x.clientY)}function Be(x){m.set(x.clientX,x.clientY)}function q(x){f.set(x.clientX,x.clientY),p.subVectors(f,d).multiplyScalar(i.rotateSpeed);const B=i.domElement;F(2*Math.PI*p.x/B.clientHeight),I(2*Math.PI*p.y/B.clientHeight),d.copy(f),i.update()}function J(x){v.set(x.clientX,x.clientY),_.subVectors(v,h),_.y>0?$(L(_.y)):_.y<0&&D(L(_.y)),h.copy(v),i.update()}function ce(x){y.set(x.clientX,x.clientY),g.subVectors(y,m).multiplyScalar(i.panSpeed),Y(g.x,g.y),m.copy(y),i.update()}function ue(x){Z(x.clientX,x.clientY),x.deltaY<0?D(L(x.deltaY)):x.deltaY>0&&$(L(x.deltaY)),i.update()}function Te(x){let B=!1;switch(x.code){case i.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),B=!0;break;case i.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),B=!0;break;case i.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),B=!0;break;case i.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),B=!0;break}B&&(x.preventDefault(),i.update())}function Ne(x){if(T.length===1)d.set(x.pageX,x.pageY);else{const B=Ie(x),H=.5*(x.pageX+B.x),j=.5*(x.pageY+B.y);d.set(H,j)}}function ke(x){if(T.length===1)m.set(x.pageX,x.pageY);else{const B=Ie(x),H=.5*(x.pageX+B.x),j=.5*(x.pageY+B.y);m.set(H,j)}}function tt(x){const B=Ie(x),H=x.pageX-B.x,j=x.pageY-B.y,ne=Math.sqrt(H*H+j*j);h.set(0,ne)}function N(x){i.enableZoom&&tt(x),i.enablePan&&ke(x)}function ht(x){i.enableZoom&&tt(x),i.enableRotate&&Ne(x)}function Ye(x){if(T.length==1)f.set(x.pageX,x.pageY);else{const H=Ie(x),j=.5*(x.pageX+H.x),ne=.5*(x.pageY+H.y);f.set(j,ne)}p.subVectors(f,d).multiplyScalar(i.rotateSpeed);const B=i.domElement;F(2*Math.PI*p.x/B.clientHeight),I(2*Math.PI*p.y/B.clientHeight),d.copy(f)}function qe(x){if(T.length===1)y.set(x.pageX,x.pageY);else{const B=Ie(x),H=.5*(x.pageX+B.x),j=.5*(x.pageY+B.y);y.set(H,j)}g.subVectors(y,m).multiplyScalar(i.panSpeed),Y(g.x,g.y),m.copy(y)}function Se(x){const B=Ie(x),H=x.pageX-B.x,j=x.pageY-B.y,ne=Math.sqrt(H*H+j*j);v.set(0,ne),_.set(0,Math.pow(v.y/h.y,i.zoomSpeed)),$(_.y),h.copy(v);const Ee=(x.pageX+B.x)*.5,Pe=(x.pageY+B.y)*.5;Z(Ee,Pe)}function dt(x){i.enableZoom&&Se(x),i.enablePan&&qe(x)}function De(x){i.enableZoom&&Se(x),i.enableRotate&&Ye(x)}function Ue(x){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(x.pointerId),i.domElement.addEventListener("pointermove",b),i.domElement.addEventListener("pointerup",M)),!_e(x)&&(Ve(x),x.pointerType==="touch"?Oe(x):W(x)))}function b(x){i.enabled!==!1&&(x.pointerType==="touch"?oe(x):te(x))}function M(x){switch(Ce(x),T.length){case 0:i.domElement.releasePointerCapture(x.pointerId),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",M),i.dispatchEvent(k0),s=r.NONE;break;case 1:const B=T[0],H=P[B];Oe({pointerId:B,pageX:H.x,pageY:H.y});break}}function W(x){let B;switch(x.button){case 0:B=i.mouseButtons.LEFT;break;case 1:B=i.mouseButtons.MIDDLE;break;case 2:B=i.mouseButtons.RIGHT;break;default:B=-1}switch(B){case hs.DOLLY:if(i.enableZoom===!1)return;ye(x),s=r.DOLLY;break;case hs.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enablePan===!1)return;Be(x),s=r.PAN}else{if(i.enableRotate===!1)return;se(x),s=r.ROTATE}break;case hs.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enableRotate===!1)return;se(x),s=r.ROTATE}else{if(i.enablePan===!1)return;Be(x),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Bf)}function te(x){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;q(x);break;case r.DOLLY:if(i.enableZoom===!1)return;J(x);break;case r.PAN:if(i.enablePan===!1)return;ce(x);break}}function ie(x){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(x.preventDefault(),i.dispatchEvent(Bf),ue(ee(x)),i.dispatchEvent(k0))}function ee(x){const B=x.deltaMode,H={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch(B){case 1:H.deltaY*=16;break;case 2:H.deltaY*=100;break}return x.ctrlKey&&!w&&(H.deltaY*=10),H}function Ae(x){x.key==="Control"&&(w=!0,i.domElement.getRootNode().addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(x){x.key==="Control"&&(w=!1,i.domElement.getRootNode().removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function pe(x){i.enabled===!1||i.enablePan===!1||Te(x)}function Oe(x){switch(be(x),T.length){case 1:switch(i.touches.ONE){case ds.ROTATE:if(i.enableRotate===!1)return;Ne(x),s=r.TOUCH_ROTATE;break;case ds.PAN:if(i.enablePan===!1)return;ke(x),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ds.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;N(x),s=r.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ht(x),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Bf)}function oe(x){switch(be(x),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ye(x),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;qe(x),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;dt(x),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;De(x),i.update();break;default:s=r.NONE}}function me(x){i.enabled!==!1&&x.preventDefault()}function Ve(x){T.push(x.pointerId)}function Ce(x){delete P[x.pointerId];for(let B=0;B<T.length;B++)if(T[B]==x.pointerId){T.splice(B,1);return}}function _e(x){for(let B=0;B<T.length;B++)if(T[B]==x.pointerId)return!0;return!1}function be(x){let B=P[x.pointerId];B===void 0&&(B=new Fe,P[x.pointerId]=B),B.set(x.pageX,x.pageY)}function Ie(x){const B=x.pointerId===T[0]?T[1]:T[0];return P[B]}i.domElement.addEventListener("contextmenu",me),i.domElement.addEventListener("pointerdown",Ue),i.domElement.addEventListener("pointercancel",M),i.domElement.addEventListener("wheel",ie,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Ae,{passive:!0,capture:!0}),this.update()}}const Ru=new To({flatShading:!0,transparent:!0,opacity:.9,side:hn,color:16777215}),Px=new To({flatShading:!0,side:hn,color:65280}),Lx=new To({flatShading:!0,side:hn,color:65280}),Nx=new To({flatShading:!0,side:hn,color:65280}),Dx=new To({flatShading:!0,side:hn,color:65280}),Ix=new To({flatShading:!0,side:hn,color:65280}),qt=1.570796,j3=new Jn(2,1.5,2),qp=new ct(j3,Ru);qp.position.set(1,-.25,0);qp.name="vehicle_body_cabin";const Ux=new Jn(3,2,2),Ox=new ct(Ux,Ru);Ox.position.set(-1.75,0,0);Ux.name="vehicle_body_back";const Y3=new Jn(1,.75,1),Kp=new ct(Y3,Px);Kp.position.set(1.6,-.75,0);Kp.name="engine";const bu=new Cu(.75,.75,.5,16),Va=new ct(bu,Lx);Va.rotateZ(qt);Va.rotateX(qt);Va.position.set(1,-1,1);Va.name="tire_front_right";const Ga=new ct(bu,Nx);Ga.rotateZ(qt);Ga.rotateX(qt);Ga.position.set(1,-1,-1);Ga.name="tire_front_left";const Wa=new ct(bu,Dx);Wa.rotateZ(qt);Wa.rotateX(qt);Wa.position.set(-2,-1,1);Wa.name="tire_rear_right";const Xa=new ct(bu,Ix);Xa.rotateZ(qt);Xa.rotateX(qt);Xa.position.set(-2,-1,-1);Xa.name="tire_rear_left";const q3=new Jn(.5,1.5,2),Fx=new ct(q3,Ru);Fx.position.set(1.25,-.25,0);Fx.name="vehicle_body_cabin";const kx=new Jn(7,2,2),Bx=new ct(kx,Ru);Bx.position.set(0,0,0);kx.name="vehicle_body_back";const K3=new Jn(1,.75,1),$p=new ct(K3,Px);$p.position.set(3.1,-.75,0);$p.name="engine";const Pu=new Cu(.75,.75,.5,16),ja=new ct(Pu,Lx);ja.rotateZ(qt);ja.rotateX(qt);ja.position.set(1.75,-1,1);ja.name="tire_front_right";const Ya=new ct(Pu,Nx);Ya.rotateZ(qt);Ya.rotateX(qt);Ya.position.set(1.75,-1,-1);Ya.name="tire_front_left";const qa=new ct(Pu,Dx);qa.rotateZ(qt);qa.rotateX(qt);qa.position.set(-1.5,-1,1);qa.name="tire_rear_right";const Ka=new ct(Pu,Ix);Ka.rotateZ(qt);Ka.rotateX(qt);Ka.position.set(-1.5,-1,-1);Ka.name="tire_rear_left";const wr=new qs;wr.add(Bx);wr.add($p);wr.add(ja);wr.add(Ya);wr.add(qa);wr.add(Ka);wr.rotation.x=.5;const Vi=new qs;Vi.add(qp);Vi.add(Ox);Vi.add(Kp);Vi.add(Va);Vi.add(Ga);Vi.add(Wa);Vi.add(Xa);Vi.rotation.x=.5;const Ir={truck:Vi,bus:wr},$3=t=>{const{engine:e,tires:n}=t,[i,r]=le.useState(!1),s=le.useRef(null),o={width:600,height:600};let a,l,c;const u=()=>{const d=Ir.truck.getObjectByName("engine"),f=Ir.truck.getObjectByName("tire_front_right"),p=Ir.truck.getObjectByName("tire_front_left"),m=Ir.truck.getObjectByName("tire_rear_right"),y=Ir.truck.getObjectByName("tire_rear_left");d.material.color.set(xy(e)),f.material.color.set(Xs(n==null?void 0:n.front_right)),p.material.color.set(Xs(n==null?void 0:n.front_left)),m.material.color.set(Xs(n==null?void 0:n.rear_right)),y.material.color.set(Xs(n==null?void 0:n.rear_left))};return le.useEffect(()=>{a=new G3,l=new Pn(75,o.width/o.height,.1,100),c=new V3({alpha:!0});const d=new X3(l,c.domElement);l.position.set(0,20,100),d.enableDamping=!0,d.enablePan=!1,d.enableZoom=!1;try{l.position.z=6,l.position.y=-.75,c.setSize(o.width,o.height),s.current.appendChild(c.domElement),a.add(Ir.truck);const f=()=>{Ir.truck.rotation.y+=.01,c.render(a,l)};c.setAnimationLoop(f)}catch(f){console.error("error rendering vehicle",f)}return r(!0),()=>{for(;a.children.length>0;)a.remove(a.children[0]);c.dispose(),c.forceContextLoss(),r(!1)}},[]),le.useEffect(()=>{i&&u()},[i,e,n]),X.jsx("div",{id:"Vehicle3D",children:X.jsx("div",{id:"canvas-container",ref:s})})},Z3=()=>{const t=sy(),{vehicleData:e}=le.useContext(Sp),[n,i]=le.useState(""),[r,s]=le.useState(null),[o,a]=le.useState(!1),[l,c]=le.useState(!1),u=le.useRef(null),d={lat:47.6,lng:-122.33},f=m=>{t&&(u.current&&u.current.setMap(null),t.panTo({lat:m.marker.position.lat,lng:m.marker.position.lng}),t.setZoom(16),i(m.id),c(!0),p(m.id),a(!0))},p=m=>{const y=e.filter(g=>g.id===m);u.current=new google.maps.Polyline({path:y[0].preDeterminedRoute,geodesic:!0,strokeColor:"#0039e6",strokeOpacity:1,strokeWeight:4}),u.current.setMap(t)};return le.useEffect(()=>{if(l){const m=e.find(y=>y.id===n);t&&m&&(s(m),t.panTo({lat:m.location.lat,lng:m.location.lng}))}},[l,n,e]),le.useEffect(()=>{t&&(t.addListener("click",()=>{u.current&&u.current.setMap(null),c(!1),a(!1)}),t.addListener("zoom_changed",()=>{c(!1)}),t.addListener("drag",()=>{c(!1)}))},[t]),X.jsx("div",{id:"VehicleMap",children:X.jsxs(ry,{mapId:"d76d2a63e869bc81",zoom:12,center:{lat:d.lat,lng:d.lng},gestureHandling:"greedy",disableDefaultUI:!0,zoomControl:!0,minZoom:10,maxZoom:16,restriction:{latLngBounds:{north:49.1,south:46.1,east:-120.33,west:-124.33}},children:[e.map(m=>X.jsx(HA,{name:m.name,vehicleType:m.vehicleType,location:m.location,health:m.health,id:m.id,onVehicleClick:f,children:o&&n===m.id&&X.jsx("div",{className:"vehicle-icon-name",children:m.name})},m.id)),l&&r&&X.jsxs("div",{className:"vehicle-ring-wrapper",children:[X.jsx("div",{className:"vehicle-ring"}),X.jsxs("div",{className:"vehicle-engine",children:[X.jsx(Rp,{type:"engine",fill:xy(r.health.engine)}),X.jsxs("div",{style:{width:"fit-content",backgroundColor:"white",padding:"2px",borderRadius:"4px",margin:"auto"},children:["Engine ",r.health.engine]})]}),X.jsxs("div",{className:"vehicle-tire-wrapper",style:{left:"-6%"},children:[X.jsx("div",{className:"vehicle-tire",id:"tire-front-left",children:X.jsx(Ml,{psi:r.health.tires.front_left})}),X.jsx("div",{className:"vehicle-tire",id:"tire-rear-left",children:X.jsx(Ml,{psi:r.health.tires.rear_left})}),X.jsx("div",{style:{width:"fit-content",backgroundColor:"white",padding:"2px",borderRadius:"4px",margin:"auto"},children:"Tire pressure"})]}),X.jsxs("div",{className:"vehicle-tire-wrapper",style:{right:"-6%"},children:[X.jsx("div",{className:"vehicle-tire",id:"tire-front-right",children:X.jsx(Ml,{psi:r.health.tires.front_right})}),X.jsxs("div",{className:"vehicle-tire",id:"tire-rear-right",children:[X.jsx(Ml,{psi:r.health.tires.rear_right}),X.jsx("div",{className:"tire-label"})]}),X.jsx("div",{style:{width:"fit-content",backgroundColor:"white",padding:"2px",borderRadius:"4px",margin:"auto"},children:"Tire pressure"})]}),X.jsx("div",{className:"vehicle-model",children:X.jsx($3,{...r.health})})]})]})})},Q3=t=>{const{setShowAbout:e,clientCount:n}=t,[i,r]=le.useState(!1);return X.jsxs("div",{id:"About",style:{animation:`${i?"slide-out-top":"slide-in-top"} 0.5s forwards`},onAnimationEnd:()=>{i&&e(!1)},children:[X.jsxs("div",{className:"about-description",children:[X.jsx("h2",{children:"Real time map made by Michael Kovacsik"}),X.jsx("p",{children:"Display the location and health of vehicles in real time. Each vehicle is a bot individually streaming their data to the server."}),X.jsxs("p",{children:["Tire charts animate when PSI changes. Made with ",X.jsx("a",{href:"https://d3js.org/",target:"_parent",children:"d3.js"}),X.jsx("br",{}),"3D vehicle made with ",X.jsx("a",{href:"https://threejs.org/",target:"_parent",children:"three.js"}),X.jsx("br",{}),"Icons made by ",X.jsx("a",{href:"https://www.flaticon.com/",target:"_parent",children:"flaticon"})]}),X.jsxs("div",{className:"how-it-works",children:[X.jsxs("ul",{children:[X.jsx("li",{children:"20 bots"}),X.jsx("li",{children:"Server"}),X.jsx("li",{children:"Connected clients to server (including you) in real time"})]}),X.jsxs("svg",{width:"400",height:"300",viewBox:"0,0,400,300",style:{width:"100%"},children:[X.jsxs("g",{stroke:"#333",strokeOpacity:"1",strokeWidth:"2",children:[X.jsx("line",{className:"path",x1:"10",y1:"265",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"10",cy:"265"}),X.jsx("line",{className:"path",x1:"10",y1:"240",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"10",cy:"240"}),X.jsx("line",{className:"path",x1:"10",y1:"215",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"10",cy:"215"}),X.jsx("line",{className:"path",x1:"10",y1:"190",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"10",cy:"190"}),X.jsx("line",{className:"path",x1:"10",y1:"165",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"10",cy:"165"}),X.jsx("line",{className:"path",x1:"10",y1:"140",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"10",cy:"140"}),X.jsx("line",{className:"path",x1:"10",y1:"115",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"10",cy:"115"}),X.jsx("line",{className:"path",x1:"10",y1:"90",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"10",cy:"90"}),X.jsx("line",{className:"path",x1:"10",y1:"65",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"10",cy:"65"}),X.jsx("line",{className:"path",x1:"10",y1:"40",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"10",cy:"40"}),X.jsx("line",{className:"path",x1:"60",y1:"265",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"60",cy:"265"}),X.jsx("line",{className:"path",x1:"60",y1:"240",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"60",cy:"240"}),X.jsx("line",{className:"path",x1:"60",y1:"215",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"60",cy:"215"}),X.jsx("line",{className:"path",x1:"60",y1:"190",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"60",cy:"190"}),X.jsx("line",{className:"path",x1:"60",y1:"165",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"60",cy:"165"}),X.jsx("line",{className:"path",x1:"60",y1:"140",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"60",cy:"140"}),X.jsx("line",{className:"path",x1:"60",y1:"115",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"60",cy:"115"}),X.jsx("line",{className:"path",x1:"60",y1:"90",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"60",cy:"90"}),X.jsx("line",{className:"path",x1:"60",y1:"65",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"60",cy:"65"}),X.jsx("line",{className:"path",x1:"60",y1:"40",x2:"180",y2:"150"}),X.jsx("circle",{r:"8",fill:"#1f77b4",cx:"60",cy:"40"})]}),X.jsxs("g",{stroke:"#fff",strokeWidth:"1.5",children:[X.jsx("line",{className:"path",stroke:"#333",strokeOpacity:"1",strokeWidth:"2",x1:"180",y1:"150",x2:"350",y2:"150"}),X.jsx("circle",{r:"40",fill:"#009933",cx:"180",cy:"150"})]}),X.jsxs("g",{stroke:"#fff",strokeWidth:"1.5",children:[X.jsx("circle",{r:"40",fill:"#b30059",cx:"350",cy:"150"}),X.jsx("text",{x:"350",y:"160",textAnchor:"middle",fill:"#fff",children:n})]})]})]}),X.jsxs("p",{children:["Bots with the ",X.jsx(Rp,{type:"bus",fill:"#ccc"})," icon will always toggle an issue. This is to demonstrate real time updates of vehicle health"]})]}),X.jsx("div",{className:"close-button",onClick:()=>{r(!0)},children:X.jsx("div",{className:"btn-close",children:X.jsx("img",{src:Sy})})})]})},J3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUiSURBVHic7dtpqFVVFMDx30tTy2hSy2ySEqPB5kKaKDKTCqN5gr5EEjRRETRRQaRQH8yI5iAyGwgbLBo+NNEkViYNiJXRLDZrhpnvefuwzuU+H3c459x7z31P3h8O57279l53rX322cPa65KPyXgev2MtluBKbJ5T34DiYnSjVOV6C1t2zLICOFQ4vwF3YQK2xdn4WTTCvR2zrgCeEk7eU0V2MNYn16gijSqS70UDTKohfy+Rn1SYRU0yNGP54cl9dQ35qj7lGnEtpma0ISsP4plWKXtTPOFLqsi2xx+JfGJKfZ+oPpi28nq8ngFZe8AjOBaz8CXeSD4fjbnYDu8ksjScgAMz2pCFHnzYSoVdmC9adgM+E1Pf38lnv2OvVn5hf6ILF2C52t1tHe7GmA7ZmJmulOVG4DGclfy/DC/gC+H0LjgO0zAEK3AKFrfS2HaQpgE2wytitP4Nl+Np8cT7MgH343iswZH4tI7uyzA9pR196cZ9WJCjbiZuEs7+JBxsxBDRW0pYipF1yn6quRF+XmZv+tCo5UfhBzGvHyMWOmkYhoU4CFeJZXM1xmGflDqrsUjtNUlLuE609NM56h6f1P1GvEYDkpeFE2fkqNuFX5L6u7bSqFbSaCH0XXK/Wrr3vzdjxQLpHzF4Dkh2F1Na3kFqA64o3OoMpJl+xogF0NiMutfhNbyf1ahBBhmkMIY0UXeY2MpOEO/7Py2xaAAwBDfgT5XRvgcvYXznzCqGLhFhKTv+jQg4/Jv8vxJ7dsy6AjhXOLoaJ/f6fKyIDpVUokSbJK8LJy+vIhuDvxJ51lXjgGGlcHB8Dfmrify0ogxqlqy7tHXJvdYef2Sfco1YoP1R4Vn1DMjaAAuT+0VVZJNwuIjUpI3Etnvq7BEDdMuYnCjtwUzsJOKFp4idYwkPtfIL+yOzbdzFenr9vQLbdM609jIaj6p9NF6+PseUzpjYPibiK+HgGnE6PEXE9EbhAJEgsTQp041LO2JpG9gO3wrH3sFudcoOxY0qr8V5DXSXw+t5rm7cnMOfzJSNfFv6U9+Lkzqr1G+w5zU3xd2WzZXs7C3CWqtFd8/Ck8LI2a02qkjmCCfuzFF3omi8VdL3nMJptBAqn/QuyqH7axEN3ho75qhfCI3C4u/iRHHeNyOj7h3EBuk7/JjdtP7BFiobnDzXrziqcKszkPZUdl+x7M3COnwkEikHGWSQ/kmezIwyR4icgS1EysyLIllqk6d3ALTviH96B+0qhJFiu1sSKXEPiMDIIpUNyrSOWVcA1wtHl9l4WuzCHYlsuQGcEdKIxcLJ6VVkQ1WSqQ8r0qhmyJoqW97aVgt6dovc311F2DxNYHRnseNsJx+J84qWsEw84SNryD9L5Mel1Fcu387rqXoGZO0Br4pt7q1isOvpJTsH+4nW/iClvvtxquam43p044lWKhynkhL/AS4UZ4RzxC9FSiI2uMkyDA+r3d1+xh4ds67NHC2Ow8vOrhVrgo9VzgxLYhc40wCZCtO+e2eKvIDhYlS9XSRQ9z4D3EckP88QSRTPiXFhfR29Y0RIPQ/lH0OsyVk/NfuLp10ST7ZRWs0RKhmijWKJSzQ3ws/N7E0fGvWALjG3HyASnq9KqfcQcYYwQkSEauUKXiP/0rkkZpFnc9ZPxdTki74WzmThlqTu/FYbVSTzhBNpn3xvthevTrf4dWm/pNFIvVVyz7NQGY7/xJiRtff0G87X/FL0raKNbjXXiJ/LZHV8rZgKsyZZF8r/ain0lKIb3m4AAAAASUVORK5CYII=",eN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAKvAAACrwG/q9D+AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAOpQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiUH6kwAAAE10Uk5TAAEDBgkKCw8QFRcZGxwlKjg5Ojw9Q0RFRk1VV1laX2JjaWttcH+KjJajpKipqqutsLKzubu+wsPMzc7S2Nrc3ubn6O7y9Pb3+Pr7/P1sVmsUAAACnUlEQVRYw61X+18BQRBfPRAJlUpRkSR5VEhJHuWRcv//v5Ob3cXt7cx1nzW/7NmZ+dqd9zKGUDBdKJZb3dGo2yoXC+kg80V7V09Ty0HTp6u9/2pv59pzS0Pzl9z2P9QD2b6FUj8b8NI/61gkdc5I9VhTkZ/0ehNlqxnD9ZPDldyskU/Fw/ZuOJ7KN2YrzjCJ6V9+S5lxJRNy8kKZylhyvy+16lt3UuCnFNEJREo/UuJuS6P/KLm1A+yIBzUp8+hGkP8/OKKsfDSQZ3DdXzBe92k3778KQcUOSWG/6o5XoOxUhSUdvogJ/xXVQIuen0fVUC0Kb67Hg4ifqqp/s0ip6Y2KIM7QXItfcX/1/Kd8/1S9hbDDMqoDPP4HLvvVuWDdZUnui448cJbLuf33zhnvbm9yRlbkP8/fmtviD1zuwc3hEdXn9SHH41cTf4lfKCQJTUzyqM7BjzZ8l3ROv/iyrK8LHacESm2of1C/xtr8YbvHx7taRgRyc27XyWvAqjCfVAG168XXM3xl/AJkQO15Uf+hfs9CfgFCUKOmQZYGpAbzTQ1QTLMCrHn/AHlQLDCeWylE6vD+/hBhpXj+sjKscb3Qic070fPioFhmLVjDeqG6Npc4hUGxxbrQP5BjQp0ZIkzoOF02spceIvNpMz8RZs9mjswByCuQAOIKpBEpAGlE0o0UgHQjGUgUgAwkMpQpABnKZDJRADKZyHQmAJbpTBYUAmBZUMiSRgCsShpVVHGAtaJKlXUcYK2sE40FB3A0Fry14QCO1oY3VxTA2Vzx9s4+7P0P5tXe0QGD3drbt8xrwMBHnOibZb1FvUccfMhiSddgrB2yjMc880HTfNQ1H7aNx33zB8cGnjzmjy7zZ98GHp7mT98NPL79Pf//AM6BbcNnNq2rAAAAAElFTkSuQmCC",tN=()=>{const[t,e]=le.useState(!1),[n,i]=le.useState(!1),[r,s]=UA(),o=()=>{i(!1),e(!0)},a=()=>{i(!0),e(!1)};return X.jsxs("div",{className:"app",children:[X.jsxs("div",{id:"buttons",children:[X.jsx("button",{type:"button",className:"button button-about",onClick:a,children:X.jsx("img",{src:eN})}),X.jsx("button",{type:"button",className:"button button-vehicle-list",onClick:o,children:X.jsx("img",{src:J3})})]}),X.jsx(Sp.Provider,{value:{vehicleData:r},children:X.jsxs(EM,{apiKey:"AIzaSyCq-2xGiMqyV1Emv3_h1wPjGtllSdmda84",libraries:["marker"],children:[n&&X.jsx(Q3,{clientCount:s,setShowAbout:()=>{i(!1)}}),t&&X.jsx(zA,{setShowVehicleList:()=>{e(!1)}}),X.jsx(Z3,{})]})})]})};zf.createRoot(document.getElementById("root")).render(X.jsx(tN,{}));
