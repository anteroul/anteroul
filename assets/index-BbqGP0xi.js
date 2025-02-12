(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Tf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function rx(){if(Sg)return se;Sg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,w={};function M(U,nt,Et){this.props=U,this.context=nt,this.refs=w,this.updater=Et||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,nt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,nt,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=M.prototype;function P(U,nt,Et){this.props=U,this.context=nt,this.refs=w,this.updater=Et||y}var O=P.prototype=new g;O.constructor=P,R(O,M.prototype),O.isPureReactComponent=!0;var L=Array.isArray,G={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function B(U,nt,Et,Rt,q,dt){return Et=dt.ref,{$$typeof:o,type:U,key:nt,ref:Et!==void 0?Et:null,props:dt}}function K(U,nt){return B(U.type,nt,void 0,void 0,void 0,U.props)}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function A(U){var nt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Et){return nt[Et]})}var F=/\/+/g;function ct(U,nt){return typeof U=="object"&&U!==null&&U.key!=null?A(""+U.key):nt.toString(36)}function it(){}function mt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(it,it):(U.status="pending",U.then(function(nt){U.status==="pending"&&(U.status="fulfilled",U.value=nt)},function(nt){U.status==="pending"&&(U.status="rejected",U.reason=nt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ht(U,nt,Et,Rt,q){var dt=typeof U;(dt==="undefined"||dt==="boolean")&&(U=null);var xt=!1;if(U===null)xt=!0;else switch(dt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(U.$$typeof){case o:case e:xt=!0;break;case _:return xt=U._init,ht(xt(U._payload),nt,Et,Rt,q)}}if(xt)return q=q(U),xt=Rt===""?"."+ct(U,0):Rt,L(q)?(Et="",xt!=null&&(Et=xt.replace(F,"$&/")+"/"),ht(q,nt,Et,"",function(Bt){return Bt})):q!=null&&(C(q)&&(q=K(q,Et+(q.key==null||U&&U.key===q.key?"":(""+q.key).replace(F,"$&/")+"/")+xt)),nt.push(q)),1;xt=0;var Tt=Rt===""?".":Rt+":";if(L(U))for(var Ct=0;Ct<U.length;Ct++)Rt=U[Ct],dt=Tt+ct(Rt,Ct),xt+=ht(Rt,nt,Et,dt,q);else if(Ct=S(U),typeof Ct=="function")for(U=Ct.call(U),Ct=0;!(Rt=U.next()).done;)Rt=Rt.value,dt=Tt+ct(Rt,Ct++),xt+=ht(Rt,nt,Et,dt,q);else if(dt==="object"){if(typeof U.then=="function")return ht(mt(U),nt,Et,Rt,q);throw nt=String(U),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return xt}function W(U,nt,Et){if(U==null)return U;var Rt=[],q=0;return ht(U,Rt,"","",function(dt){return nt.call(Et,dt,q++)}),Rt}function at(U){if(U._status===-1){var nt=U._result;nt=nt(),nt.then(function(Et){(U._status===0||U._status===-1)&&(U._status=1,U._result=Et)},function(Et){(U._status===0||U._status===-1)&&(U._status=2,U._result=Et)}),U._status===-1&&(U._status=0,U._result=nt)}if(U._status===1)return U._result.default;throw U._result}var j=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function St(){}return se.Children={map:W,forEach:function(U,nt,Et){W(U,function(){nt.apply(this,arguments)},Et)},count:function(U){var nt=0;return W(U,function(){nt++}),nt},toArray:function(U){return W(U,function(nt){return nt})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},se.Component=M,se.Fragment=i,se.Profiler=l,se.PureComponent=P,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,se.act=function(){throw Error("act(...) is not supported in production builds of React.")},se.cache=function(U){return function(){return U.apply(null,arguments)}},se.cloneElement=function(U,nt,Et){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Rt=R({},U.props),q=U.key,dt=void 0;if(nt!=null)for(xt in nt.ref!==void 0&&(dt=void 0),nt.key!==void 0&&(q=""+nt.key),nt)!H.call(nt,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&nt.ref===void 0||(Rt[xt]=nt[xt]);var xt=arguments.length-2;if(xt===1)Rt.children=Et;else if(1<xt){for(var Tt=Array(xt),Ct=0;Ct<xt;Ct++)Tt[Ct]=arguments[Ct+2];Rt.children=Tt}return B(U.type,q,void 0,void 0,dt,Rt)},se.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},se.createElement=function(U,nt,Et){var Rt,q={},dt=null;if(nt!=null)for(Rt in nt.key!==void 0&&(dt=""+nt.key),nt)H.call(nt,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(q[Rt]=nt[Rt]);var xt=arguments.length-2;if(xt===1)q.children=Et;else if(1<xt){for(var Tt=Array(xt),Ct=0;Ct<xt;Ct++)Tt[Ct]=arguments[Ct+2];q.children=Tt}if(U&&U.defaultProps)for(Rt in xt=U.defaultProps,xt)q[Rt]===void 0&&(q[Rt]=xt[Rt]);return B(U,dt,void 0,void 0,null,q)},se.createRef=function(){return{current:null}},se.forwardRef=function(U){return{$$typeof:d,render:U}},se.isValidElement=C,se.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:at}},se.memo=function(U,nt){return{$$typeof:p,type:U,compare:nt===void 0?null:nt}},se.startTransition=function(U){var nt=G.T,Et={};G.T=Et;try{var Rt=U(),q=G.S;q!==null&&q(Et,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(St,j)}catch(dt){j(dt)}finally{G.T=nt}},se.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},se.use=function(U){return G.H.use(U)},se.useActionState=function(U,nt,Et){return G.H.useActionState(U,nt,Et)},se.useCallback=function(U,nt){return G.H.useCallback(U,nt)},se.useContext=function(U){return G.H.useContext(U)},se.useDebugValue=function(){},se.useDeferredValue=function(U,nt){return G.H.useDeferredValue(U,nt)},se.useEffect=function(U,nt){return G.H.useEffect(U,nt)},se.useId=function(){return G.H.useId()},se.useImperativeHandle=function(U,nt,Et){return G.H.useImperativeHandle(U,nt,Et)},se.useInsertionEffect=function(U,nt){return G.H.useInsertionEffect(U,nt)},se.useLayoutEffect=function(U,nt){return G.H.useLayoutEffect(U,nt)},se.useMemo=function(U,nt){return G.H.useMemo(U,nt)},se.useOptimistic=function(U,nt){return G.H.useOptimistic(U,nt)},se.useReducer=function(U,nt,Et){return G.H.useReducer(U,nt,Et)},se.useRef=function(U){return G.H.useRef(U)},se.useState=function(U){return G.H.useState(U)},se.useSyncExternalStore=function(U,nt,Et){return G.H.useSyncExternalStore(U,nt,Et)},se.useTransition=function(){return G.H.useTransition()},se.version="19.0.0",se}var Mg;function Yh(){return Mg||(Mg=1,Tf.exports=rx()),Tf.exports}var hc=Yh(),bf={exports:{}},xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function sx(){if(yg)return xo;yg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return xo.Fragment=e,xo.jsx=i,xo.jsxs=i,xo}var Eg;function ox(){return Eg||(Eg=1,bf.exports=sx()),bf.exports}var bt=ox(),Af={exports:{}},So={},Rf={exports:{}},Cf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function lx(){return Tg||(Tg=1,function(o){function e(W,at){var j=W.length;W.push(at);t:for(;0<j;){var St=j-1>>>1,U=W[St];if(0<l(U,at))W[St]=at,W[j]=U,j=St;else break t}}function i(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var at=W[0],j=W.pop();if(j!==at){W[0]=j;t:for(var St=0,U=W.length,nt=U>>>1;St<nt;){var Et=2*(St+1)-1,Rt=W[Et],q=Et+1,dt=W[q];if(0>l(Rt,j))q<U&&0>l(dt,Rt)?(W[St]=dt,W[q]=j,St=q):(W[St]=Rt,W[Et]=j,St=Et);else if(q<U&&0>l(dt,j))W[St]=dt,W[q]=j,St=q;else break t}}return at}function l(W,at){var j=W.sortIndex-at.sortIndex;return j!==0?j:W.id-at.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,x=null,S=3,y=!1,R=!1,w=!1,M=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function O(W){for(var at=i(p);at!==null;){if(at.callback===null)r(p);else if(at.startTime<=W)r(p),at.sortIndex=at.expirationTime,e(m,at);else break;at=i(p)}}function L(W){if(w=!1,O(W),!R)if(i(m)!==null)R=!0,mt();else{var at=i(p);at!==null&&ht(L,at.startTime-W)}}var G=!1,H=-1,B=5,K=-1;function C(){return!(o.unstable_now()-K<B)}function A(){if(G){var W=o.unstable_now();K=W;var at=!0;try{t:{R=!1,w&&(w=!1,g(H),H=-1),y=!0;var j=S;try{e:{for(O(W),x=i(m);x!==null&&!(x.expirationTime>W&&C());){var St=x.callback;if(typeof St=="function"){x.callback=null,S=x.priorityLevel;var U=St(x.expirationTime<=W);if(W=o.unstable_now(),typeof U=="function"){x.callback=U,O(W),at=!0;break e}x===i(m)&&r(m),O(W)}else r(m);x=i(m)}if(x!==null)at=!0;else{var nt=i(p);nt!==null&&ht(L,nt.startTime-W),at=!1}}break t}finally{x=null,S=j,y=!1}at=void 0}}finally{at?F():G=!1}}}var F;if(typeof P=="function")F=function(){P(A)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,it=ct.port2;ct.port1.onmessage=A,F=function(){it.postMessage(null)}}else F=function(){M(A,0)};function mt(){G||(G=!0,F())}function ht(W,at){H=M(function(){W(o.unstable_now())},at)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(W){W.callback=null},o.unstable_continueExecution=function(){R||y||(R=!0,mt())},o.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<W?Math.floor(1e3/W):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_getFirstCallbackNode=function(){return i(m)},o.unstable_next=function(W){switch(S){case 1:case 2:case 3:var at=3;break;default:at=S}var j=S;S=at;try{return W()}finally{S=j}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(W,at){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var j=S;S=W;try{return at()}finally{S=j}},o.unstable_scheduleCallback=function(W,at,j){var St=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?St+j:St):j=St,W){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=j+U,W={id:_++,callback:at,priorityLevel:W,startTime:j,expirationTime:U,sortIndex:-1},j>St?(W.sortIndex=j,e(p,W),i(m)===null&&W===i(p)&&(w?(g(H),H=-1):w=!0,ht(L,j-St))):(W.sortIndex=U,e(m,W),R||y||(R=!0,mt())),W},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(W){var at=S;return function(){var j=S;S=at;try{return W.apply(this,arguments)}finally{S=j}}}}(Cf)),Cf}var bg;function cx(){return bg||(bg=1,Rf.exports=lx()),Rf.exports}var wf={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function ux(){if(Ag)return Mn;Ag=1;var o=Yh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Mn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},Mn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Mn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Mn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Mn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:y}):_==="script"&&r.d.X(m,{crossOrigin:x,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Mn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Mn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Mn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Mn.requestFormReset=function(m){r.d.r(m)},Mn.unstable_batchedUpdates=function(m,p){return m(p)},Mn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Mn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Mn.version="19.0.0",Mn}var Rg;function fx(){if(Rg)return wf.exports;Rg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),wf.exports=ux(),wf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function hx(){if(Cg)return So;Cg=1;var o=cx(),e=Yh(),i=fx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),S=Symbol.for("react.consumer"),y=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),L=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function H(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var B=Symbol.for("react.client.reference");function K(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===B?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case m:return"Fragment";case d:return"Portal";case _:return"Profiler";case p:return"StrictMode";case w:return"Suspense";case M:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y:return(t.displayName||"Context")+".Provider";case S:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case g:return n=t.displayName||null,n!==null?n:K(t.type)||"Memo";case P:n=t._payload,t=t._init;try{return K(t(n))}catch{}}return null}var C=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign,F,ct;function it(t){if(F===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);F=n&&n[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+F+t+ct}var mt=!1;function ht(t,n){if(!t||mt)return"";mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ot){var et=ot}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(ot){et=ot}t.call(_t.prototype)}}else{try{throw Error()}catch(ot){et=ot}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ot){if(ot&&et&&typeof ot.stack=="string")return[ot.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var N=v.split(`
`),V=T.split(`
`);for(c=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;c<V.length&&!V[c].includes("DetermineComponentFrameRoot");)c++;if(s===N.length||c===V.length)for(s=N.length-1,c=V.length-1;1<=s&&0<=c&&N[s]!==V[c];)c--;for(;1<=s&&0<=c;s--,c--)if(N[s]!==V[c]){if(s!==1||c!==1)do if(s--,c--,0>c||N[s]!==V[c]){var lt=`
`+N[s].replace(" at new "," at ");return t.displayName&&lt.includes("<anonymous>")&&(lt=lt.replace("<anonymous>",t.displayName)),lt}while(1<=s&&0<=c);break}}}finally{mt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?it(a):""}function W(t){switch(t.tag){case 26:case 27:case 5:return it(t.type);case 16:return it("Lazy");case 13:return it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return t=ht(t.type,!1),t;case 11:return t=ht(t.type.render,!1),t;case 1:return t=ht(t.type,!0),t;default:return""}}function at(t){try{var n="";do n+=W(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function j(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function St(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function U(t){if(j(t)!==t)throw Error(r(188))}function nt(t){var n=t.alternate;if(!n){if(n=j(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return U(c),t;if(f===s)return U(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var v=!1,T=c.child;T;){if(T===a){v=!0,a=c,s=f;break}if(T===s){v=!0,s=c,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,s=c;break}if(T===s){v=!0,s=f,a=c;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function Et(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=Et(t),n!==null)return n;t=t.sibling}return null}var Rt=Array.isArray,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},xt=[],Tt=-1;function Ct(t){return{current:t}}function Bt(t){0>Tt||(t.current=xt[Tt],xt[Tt]=null,Tt--)}function Gt(t,n){Tt++,xt[Tt]=t.current,t.current=n}var Se=Ct(null),ce=Ct(null),Re=Ct(null),z=Ct(null);function pn(t,n){switch(Gt(Re,n),Gt(ce,t),Gt(Se,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Zm(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=Zm(t),n=Km(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Bt(Se),Gt(Se,n)}function re(){Bt(Se),Bt(ce),Bt(Re)}function fe(t){t.memoizedState!==null&&Gt(z,t);var n=Se.current,a=Km(n,t.type);n!==a&&(Gt(ce,t),Gt(Se,a))}function Wt(t){ce.current===t&&(Bt(Se),Bt(ce)),z.current===t&&(Bt(z),po._currentValue=dt)}var Ce=Object.prototype.hasOwnProperty,qt=o.unstable_scheduleCallback,D=o.unstable_cancelCallback,E=o.unstable_shouldYield,tt=o.unstable_requestPaint,ut=o.unstable_now,vt=o.unstable_getCurrentPriorityLevel,ft=o.unstable_ImmediatePriority,Vt=o.unstable_UserBlockingPriority,Dt=o.unstable_NormalPriority,zt=o.unstable_LowPriority,pe=o.unstable_IdlePriority,yt=o.log,Ft=o.unstable_setDisableYieldValue,jt=null,kt=null;function It(t){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(jt,t,void 0,(t.current.flags&128)===128)}catch{}}function ae(t){if(typeof yt=="function"&&Ft(t),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(jt,t)}catch{}}var Kt=Math.clz32?Math.clz32:Nt,we=Math.log,k=Math.LN2;function Nt(t){return t>>>=0,t===0?32:31-(we(t)/k|0)|0}var st=128,gt=4194304;function wt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ut(t,n){var a=t.pendingLanes;if(a===0)return 0;var s=0,c=t.suspendedLanes,f=t.pingedLanes,v=t.warmLanes;t=t.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~c,a!==0?s=wt(a):(f&=T,f!==0?s=wt(f):t||(v=T&~v,v!==0&&(s=wt(v))))):(T=a&~c,T!==0?s=wt(T):f!==0?s=wt(f):t||(v=a&~v,v!==0&&(s=wt(v)))),s===0?0:n!==0&&n!==s&&!(n&c)&&(c=s&-s,v=n&-n,c>=v||c===32&&(v&4194176)!==0)?n:s}function $t(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function He(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tn(){var t=st;return st<<=1,!(st&4194176)&&(st=128),t}function ye(){var t=gt;return gt<<=1,!(gt&62914560)&&(gt=4194304),t}function Tn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function bn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Lo(t,n,a,s,c,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,N=t.expirationTimes,V=t.hiddenUpdates;for(a=v&~a;0<a;){var lt=31-Kt(a),_t=1<<lt;T[lt]=0,N[lt]=-1;var et=V[lt];if(et!==null)for(V[lt]=null,lt=0;lt<et.length;lt++){var ot=et[lt];ot!==null&&(ot.lane&=-536870913)}a&=~_t}s!==0&&Ts(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Ts(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Kt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194218}function _i(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Kt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function _r(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function bs(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:pg(t.type))}function No(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var Fn=Math.random().toString(36).slice(2),en="__reactFiber$"+Fn,nn="__reactProps$"+Fn,Ri="__reactContainer$"+Fn,vr="__reactEvents$"+Fn,Mc="__reactListeners$"+Fn,yc="__reactHandles$"+Fn,Oo="__reactResources$"+Fn,Pa="__reactMarker$"+Fn;function As(t){delete t[en],delete t[nn],delete t[vr],delete t[Mc],delete t[yc]}function Ci(t){var n=t[en];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ri]||a[en]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=$m(t);t!==null;){if(a=t[en])return a;t=$m(t)}return n}t=a,a=t.parentNode}return null}function b(t){if(t=t[en]||t[Ri]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function X(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function $(t){var n=t[Oo];return n||(n=t[Oo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(t){t[Pa]=!0}var Y=new Set,Mt={};function At(t,n){Pt(t,n),Pt(t+"Capture",n)}function Pt(t,n){for(Mt[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},Zt={};function me(t){return Ce.call(Zt,t)?!0:Ce.call(ee,t)?!1:te.test(t)?Zt[t]=!0:(ee[t]=!0,!1)}function ge(t,n,a){if(me(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ie(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ee(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function ne(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function an(t){var n=Qt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){s=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function _e(t){t._valueTracker||(t._valueTracker=an(t))}function Un(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Qt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function si(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var An=/[\n"\\]/g;function cn(t){return t.replace(An,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function De(t,n,a,s,c,f,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ne(n)):t.value!==""+ne(n)&&(t.value=""+ne(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?xn(t,v,ne(n)):a!=null?xn(t,v,ne(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ne(T):t.removeAttribute("name")}function Rn(t,n,a,s,c,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function xn(t,n,a){n==="number"&&si(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ke(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function mn(t,n,a){if(n!=null&&(n=""+ne(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ne(a):""}function xr(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Rt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ne(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function Ln(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var n0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function id(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||n0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ad(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&id(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&id(t,f,n[f])}function Ec(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var i0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),a0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Po(t){return a0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Tc=null;function bc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sr=null,Mr=null;function rd(t){var n=b(t);if(n&&(t=n.stateNode)){var a=t[nn]||null;t:switch(t=n.stateNode,n.type){case"input":if(De(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+cn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[nn]||null;if(!c)throw Error(r(90));De(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Un(s)}break t;case"textarea":mn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ke(t,!!a.multiple,n,!1)}}}var Ac=!1;function sd(t,n,a){if(Ac)return t(n,a);Ac=!0;try{var s=t(n);return s}finally{if(Ac=!1,(Sr!==null||Mr!==null)&&(vl(),Sr&&(n=Sr,t=Mr,Mr=Sr=null,rd(n),t)))for(n=0;n<t.length;n++)rd(t[n])}}function Rs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[nn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Rc=!1;if(Ot)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){Rc=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{Rc=!1}var na=null,Cc=null,zo=null;function od(){if(zo)return zo;var t,n=Cc,a=n.length,s,c="value"in na?na.value:na.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var v=a-t;for(s=1;s<=v&&n[a-s]===c[f-s];s++);return zo=c.slice(t,1<s?1-s:void 0)}function Bo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Fo(){return!0}function ld(){return!1}function Nn(t){function n(a,s,c,f,v){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Fo:ld,this.isPropagationStopped=ld,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),n}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Io=Nn(za),ws=A({},za,{view:0,detail:0}),r0=Nn(ws),wc,Dc,Ds,Ho=A({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ds&&(Ds&&t.type==="mousemove"?(wc=t.screenX-Ds.screenX,Dc=t.screenY-Ds.screenY):Dc=wc=0,Ds=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),cd=Nn(Ho),s0=A({},Ho,{dataTransfer:0}),o0=Nn(s0),l0=A({},ws,{relatedTarget:0}),Uc=Nn(l0),c0=A({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),u0=Nn(c0),f0=A({},za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),h0=Nn(f0),d0=A({},za,{data:0}),ud=Nn(d0),p0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=g0[t])?!!n[t]:!1}function Lc(){return _0}var v0=A({},ws,{key:function(t){if(t.key){var n=p0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lc,charCode:function(t){return t.type==="keypress"?Bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),x0=Nn(v0),S0=A({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fd=Nn(S0),M0=A({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lc}),y0=Nn(M0),E0=A({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),T0=Nn(E0),b0=A({},Ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),A0=Nn(b0),R0=A({},za,{newState:0,oldState:0}),C0=Nn(R0),w0=[9,13,27,32],Nc=Ot&&"CompositionEvent"in window,Us=null;Ot&&"documentMode"in document&&(Us=document.documentMode);var D0=Ot&&"TextEvent"in window&&!Us,hd=Ot&&(!Nc||Us&&8<Us&&11>=Us),dd=" ",pd=!1;function md(t,n){switch(t){case"keyup":return w0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yr=!1;function U0(t,n){switch(t){case"compositionend":return gd(n);case"keypress":return n.which!==32?null:(pd=!0,dd);case"textInput":return t=n.data,t===dd&&pd?null:t;default:return null}}function L0(t,n){if(yr)return t==="compositionend"||!Nc&&md(t,n)?(t=od(),zo=Cc=na=null,yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hd&&n.locale!=="ko"?null:n.data;default:return null}}var N0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _d(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!N0[t.type]:n==="textarea"}function vd(t,n,a,s){Sr?Mr?Mr.push(s):Mr=[s]:Sr=s,n=El(n,"onChange"),0<n.length&&(a=new Io("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ls=null,Ns=null;function O0(t){Xm(t,0)}function Go(t){var n=X(t);if(Un(n))return t}function xd(t,n){if(t==="change")return n}var Sd=!1;if(Ot){var Oc;if(Ot){var Pc="oninput"in document;if(!Pc){var Md=document.createElement("div");Md.setAttribute("oninput","return;"),Pc=typeof Md.oninput=="function"}Oc=Pc}else Oc=!1;Sd=Oc&&(!document.documentMode||9<document.documentMode)}function yd(){Ls&&(Ls.detachEvent("onpropertychange",Ed),Ns=Ls=null)}function Ed(t){if(t.propertyName==="value"&&Go(Ns)){var n=[];vd(n,Ns,t,bc(t)),sd(O0,n)}}function P0(t,n,a){t==="focusin"?(yd(),Ls=n,Ns=a,Ls.attachEvent("onpropertychange",Ed)):t==="focusout"&&yd()}function z0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Go(Ns)}function B0(t,n){if(t==="click")return Go(n)}function F0(t,n){if(t==="input"||t==="change")return Go(n)}function I0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var In=typeof Object.is=="function"?Object.is:I0;function Os(t,n){if(In(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ce.call(n,c)||!In(t[c],n[c]))return!1}return!0}function Td(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bd(t,n){var a=Td(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Td(a)}}function Ad(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ad(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Rd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=si(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=si(t.document)}return n}function zc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function H0(t,n){var a=Rd(n);n=t.focusedElem;var s=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&Ad(n.ownerDocument.documentElement,n)){if(s!==null&&zc(n)){if(t=s.start,a=s.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(s.start,c);s=s.end===void 0?f:Math.min(s.end,c),!a.extend&&f>s&&(c=s,s=f,f=c),c=bd(n,f);var v=bd(n,s);c&&v&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==v.node||a.focusOffset!==v.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),a.removeAllRanges(),f>s?(a.addRange(t),a.extend(v.node,v.offset)):(t.setEnd(v.node,v.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var G0=Ot&&"documentMode"in document&&11>=document.documentMode,Er=null,Bc=null,Ps=null,Fc=!1;function Cd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fc||Er==null||Er!==si(s)||(s=Er,"selectionStart"in s&&zc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ps&&Os(Ps,s)||(Ps=s,s=El(Bc,"onSelect"),0<s.length&&(n=new Io("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Er)))}function Ba(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Tr={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionrun:Ba("Transition","TransitionRun"),transitionstart:Ba("Transition","TransitionStart"),transitioncancel:Ba("Transition","TransitionCancel"),transitionend:Ba("Transition","TransitionEnd")},Ic={},wd={};Ot&&(wd=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Fa(t){if(Ic[t])return Ic[t];if(!Tr[t])return t;var n=Tr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in wd)return Ic[t]=n[a];return t}var Dd=Fa("animationend"),Ud=Fa("animationiteration"),Ld=Fa("animationstart"),V0=Fa("transitionrun"),k0=Fa("transitionstart"),X0=Fa("transitioncancel"),Nd=Fa("transitionend"),Od=new Map,Pd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function oi(t,n){Od.set(t,n),At(n,[t])}var Yn=[],br=0,Hc=0;function Vo(){for(var t=br,n=Hc=br=0;n<t;){var a=Yn[n];Yn[n++]=null;var s=Yn[n];Yn[n++]=null;var c=Yn[n];Yn[n++]=null;var f=Yn[n];if(Yn[n++]=null,s!==null&&c!==null){var v=s.pending;v===null?c.next=c:(c.next=v.next,v.next=c),s.pending=c}f!==0&&zd(a,c,f)}}function ko(t,n,a,s){Yn[br++]=t,Yn[br++]=n,Yn[br++]=a,Yn[br++]=s,Hc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Gc(t,n,a,s){return ko(t,n,a,s),Xo(t)}function ia(t,n){return ko(t,null,null,n),Xo(t)}function zd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;c&&n!==null&&t.tag===3&&(f=t.stateNode,c=31-Kt(a),f=f.hiddenUpdates,t=f[c],t===null?f[c]=[n]:t.push(n),n.lane=a|536870912)}function Xo(t){if(50<so)throw so=0,Yu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ar={},Bd=new WeakMap;function jn(t,n){if(typeof t=="object"&&t!==null){var a=Bd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:at(n)},Bd.set(t,n),n)}return{value:t,source:n,stack:at(n)}}var Rr=[],Cr=0,Wo=null,qo=0,Zn=[],Kn=0,Ia=null,wi=1,Di="";function Ha(t,n){Rr[Cr++]=qo,Rr[Cr++]=Wo,Wo=t,qo=n}function Fd(t,n,a){Zn[Kn++]=wi,Zn[Kn++]=Di,Zn[Kn++]=Ia,Ia=t;var s=wi;t=Di;var c=32-Kt(s)-1;s&=~(1<<c),a+=1;var f=32-Kt(n)+c;if(30<f){var v=c-c%5;f=(s&(1<<v)-1).toString(32),s>>=v,c-=v,wi=1<<32-Kt(n)+c|a<<c|s,Di=f+t}else wi=1<<f|a<<c|s,Di=t}function Vc(t){t.return!==null&&(Ha(t,1),Fd(t,1,0))}function kc(t){for(;t===Wo;)Wo=Rr[--Cr],Rr[Cr]=null,qo=Rr[--Cr],Rr[Cr]=null;for(;t===Ia;)Ia=Zn[--Kn],Zn[Kn]=null,Di=Zn[--Kn],Zn[Kn]=null,wi=Zn[--Kn],Zn[Kn]=null}var Cn=null,gn=null,Te=!1,li=null,vi=!1,Xc=Error(r(519));function Ga(t){var n=Error(r(418,""));throw Fs(jn(n,t)),Xc}function Id(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[en]=t,n[nn]=s,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<lo.length;a++)ve(lo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Rn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),_e(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),xr(n,s.value,s.defaultValue,s.children),_e(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||jm(n.textContent,a)?(s.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),s.onScroll!=null&&ve("scroll",n),s.onScrollEnd!=null&&ve("scrollend",n),s.onClick!=null&&(n.onclick=Tl),n=!0):n=!1,n||Ga(t)}function Hd(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 3:case 27:vi=!0;return;case 5:case 13:vi=!1;return;default:Cn=Cn.return}}function zs(t){if(t!==Cn)return!1;if(!Te)return Hd(t),Te=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ff(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&gn&&Ga(t),Hd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){gn=ui(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}gn=null}}else gn=Cn?ui(t.stateNode.nextSibling):null;return!0}function Bs(){gn=Cn=null,Te=!1}function Fs(t){li===null?li=[t]:li.push(t)}var Is=Error(r(460)),Gd=Error(r(474)),Wc={then:function(){}};function Vd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Yo(){}function kd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yo,Yo),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Is?Error(r(483)):t;default:if(typeof n.status=="string")n.then(Yo,Yo);else{if(t=Be,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Is?Error(r(483)):t}throw Hs=n,Is}}var Hs=null;function Xd(){if(Hs===null)throw Error(r(459));var t=Hs;return Hs=null,t}var wr=null,Gs=0;function jo(t){var n=Gs;return Gs+=1,wr===null&&(wr=[]),kd(wr,t,n)}function Vs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Zo(t,n){throw n.$$typeof===u?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Wd(t){var n=t._init;return n(t._payload)}function qd(t){function n(Z,I){if(t){var J=Z.deletions;J===null?(Z.deletions=[I],Z.flags|=16):J.push(I)}}function a(Z,I){if(!t)return null;for(;I!==null;)n(Z,I),I=I.sibling;return null}function s(Z){for(var I=new Map;Z!==null;)Z.key!==null?I.set(Z.key,Z):I.set(Z.index,Z),Z=Z.sibling;return I}function c(Z,I){return Z=ma(Z,I),Z.index=0,Z.sibling=null,Z}function f(Z,I,J){return Z.index=J,t?(J=Z.alternate,J!==null?(J=J.index,J<I?(Z.flags|=33554434,I):J):(Z.flags|=33554434,I)):(Z.flags|=1048576,I)}function v(Z){return t&&Z.alternate===null&&(Z.flags|=33554434),Z}function T(Z,I,J,pt){return I===null||I.tag!==6?(I=Iu(J,Z.mode,pt),I.return=Z,I):(I=c(I,J),I.return=Z,I)}function N(Z,I,J,pt){var Ht=J.type;return Ht===m?lt(Z,I,J.props.children,pt,J.key):I!==null&&(I.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===P&&Wd(Ht)===I.type)?(I=c(I,J.props),Vs(I,J),I.return=Z,I):(I=dl(J.type,J.key,J.props,null,Z.mode,pt),Vs(I,J),I.return=Z,I)}function V(Z,I,J,pt){return I===null||I.tag!==4||I.stateNode.containerInfo!==J.containerInfo||I.stateNode.implementation!==J.implementation?(I=Hu(J,Z.mode,pt),I.return=Z,I):(I=c(I,J.children||[]),I.return=Z,I)}function lt(Z,I,J,pt,Ht){return I===null||I.tag!==7?(I=Qa(J,Z.mode,pt,Ht),I.return=Z,I):(I=c(I,J),I.return=Z,I)}function _t(Z,I,J){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return I=Iu(""+I,Z.mode,J),I.return=Z,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case h:return J=dl(I.type,I.key,I.props,null,Z.mode,J),Vs(J,I),J.return=Z,J;case d:return I=Hu(I,Z.mode,J),I.return=Z,I;case P:var pt=I._init;return I=pt(I._payload),_t(Z,I,J)}if(Rt(I)||H(I))return I=Qa(I,Z.mode,J,null),I.return=Z,I;if(typeof I.then=="function")return _t(Z,jo(I),J);if(I.$$typeof===y)return _t(Z,ul(Z,I),J);Zo(Z,I)}return null}function et(Z,I,J,pt){var Ht=I!==null?I.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ht!==null?null:T(Z,I,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case h:return J.key===Ht?N(Z,I,J,pt):null;case d:return J.key===Ht?V(Z,I,J,pt):null;case P:return Ht=J._init,J=Ht(J._payload),et(Z,I,J,pt)}if(Rt(J)||H(J))return Ht!==null?null:lt(Z,I,J,pt,null);if(typeof J.then=="function")return et(Z,I,jo(J),pt);if(J.$$typeof===y)return et(Z,I,ul(Z,J),pt);Zo(Z,J)}return null}function ot(Z,I,J,pt,Ht){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Z=Z.get(J)||null,T(I,Z,""+pt,Ht);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case h:return Z=Z.get(pt.key===null?J:pt.key)||null,N(I,Z,pt,Ht);case d:return Z=Z.get(pt.key===null?J:pt.key)||null,V(I,Z,pt,Ht);case P:var he=pt._init;return pt=he(pt._payload),ot(Z,I,J,pt,Ht)}if(Rt(pt)||H(pt))return Z=Z.get(J)||null,lt(I,Z,pt,Ht,null);if(typeof pt.then=="function")return ot(Z,I,J,jo(pt),Ht);if(pt.$$typeof===y)return ot(Z,I,J,ul(I,pt),Ht);Zo(I,pt)}return null}function Xt(Z,I,J,pt){for(var Ht=null,he=null,Yt=I,Jt=I=0,hn=null;Yt!==null&&Jt<J.length;Jt++){Yt.index>Jt?(hn=Yt,Yt=null):hn=Yt.sibling;var be=et(Z,Yt,J[Jt],pt);if(be===null){Yt===null&&(Yt=hn);break}t&&Yt&&be.alternate===null&&n(Z,Yt),I=f(be,I,Jt),he===null?Ht=be:he.sibling=be,he=be,Yt=hn}if(Jt===J.length)return a(Z,Yt),Te&&Ha(Z,Jt),Ht;if(Yt===null){for(;Jt<J.length;Jt++)Yt=_t(Z,J[Jt],pt),Yt!==null&&(I=f(Yt,I,Jt),he===null?Ht=Yt:he.sibling=Yt,he=Yt);return Te&&Ha(Z,Jt),Ht}for(Yt=s(Yt);Jt<J.length;Jt++)hn=ot(Yt,Z,Jt,J[Jt],pt),hn!==null&&(t&&hn.alternate!==null&&Yt.delete(hn.key===null?Jt:hn.key),I=f(hn,I,Jt),he===null?Ht=hn:he.sibling=hn,he=hn);return t&&Yt.forEach(function(ya){return n(Z,ya)}),Te&&Ha(Z,Jt),Ht}function ie(Z,I,J,pt){if(J==null)throw Error(r(151));for(var Ht=null,he=null,Yt=I,Jt=I=0,hn=null,be=J.next();Yt!==null&&!be.done;Jt++,be=J.next()){Yt.index>Jt?(hn=Yt,Yt=null):hn=Yt.sibling;var ya=et(Z,Yt,be.value,pt);if(ya===null){Yt===null&&(Yt=hn);break}t&&Yt&&ya.alternate===null&&n(Z,Yt),I=f(ya,I,Jt),he===null?Ht=ya:he.sibling=ya,he=ya,Yt=hn}if(be.done)return a(Z,Yt),Te&&Ha(Z,Jt),Ht;if(Yt===null){for(;!be.done;Jt++,be=J.next())be=_t(Z,be.value,pt),be!==null&&(I=f(be,I,Jt),he===null?Ht=be:he.sibling=be,he=be);return Te&&Ha(Z,Jt),Ht}for(Yt=s(Yt);!be.done;Jt++,be=J.next())be=ot(Yt,Z,Jt,be.value,pt),be!==null&&(t&&be.alternate!==null&&Yt.delete(be.key===null?Jt:be.key),I=f(be,I,Jt),he===null?Ht=be:he.sibling=be,he=be);return t&&Yt.forEach(function(ax){return n(Z,ax)}),Te&&Ha(Z,Jt),Ht}function qe(Z,I,J,pt){if(typeof J=="object"&&J!==null&&J.type===m&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case h:t:{for(var Ht=J.key;I!==null;){if(I.key===Ht){if(Ht=J.type,Ht===m){if(I.tag===7){a(Z,I.sibling),pt=c(I,J.props.children),pt.return=Z,Z=pt;break t}}else if(I.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===P&&Wd(Ht)===I.type){a(Z,I.sibling),pt=c(I,J.props),Vs(pt,J),pt.return=Z,Z=pt;break t}a(Z,I);break}else n(Z,I);I=I.sibling}J.type===m?(pt=Qa(J.props.children,Z.mode,pt,J.key),pt.return=Z,Z=pt):(pt=dl(J.type,J.key,J.props,null,Z.mode,pt),Vs(pt,J),pt.return=Z,Z=pt)}return v(Z);case d:t:{for(Ht=J.key;I!==null;){if(I.key===Ht)if(I.tag===4&&I.stateNode.containerInfo===J.containerInfo&&I.stateNode.implementation===J.implementation){a(Z,I.sibling),pt=c(I,J.children||[]),pt.return=Z,Z=pt;break t}else{a(Z,I);break}else n(Z,I);I=I.sibling}pt=Hu(J,Z.mode,pt),pt.return=Z,Z=pt}return v(Z);case P:return Ht=J._init,J=Ht(J._payload),qe(Z,I,J,pt)}if(Rt(J))return Xt(Z,I,J,pt);if(H(J)){if(Ht=H(J),typeof Ht!="function")throw Error(r(150));return J=Ht.call(J),ie(Z,I,J,pt)}if(typeof J.then=="function")return qe(Z,I,jo(J),pt);if(J.$$typeof===y)return qe(Z,I,ul(Z,J),pt);Zo(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,I!==null&&I.tag===6?(a(Z,I.sibling),pt=c(I,J),pt.return=Z,Z=pt):(a(Z,I),pt=Iu(J,Z.mode,pt),pt.return=Z,Z=pt),v(Z)):a(Z,I)}return function(Z,I,J,pt){try{Gs=0;var Ht=qe(Z,I,J,pt);return wr=null,Ht}catch(Yt){if(Yt===Is)throw Yt;var he=ti(29,Yt,null,Z.mode);return he.lanes=pt,he.return=Z,he}finally{}}}var Va=qd(!0),Yd=qd(!1),Dr=Ct(null),Ko=Ct(0);function jd(t,n){t=Gi,Gt(Ko,t),Gt(Dr,n),Gi=t|n.baseLanes}function qc(){Gt(Ko,Gi),Gt(Dr,Dr.current)}function Yc(){Gi=Ko.current,Bt(Dr),Bt(Ko)}var Qn=Ct(null),xi=null;function aa(t){var n=t.alternate;Gt(rn,rn.current&1),Gt(Qn,t),xi===null&&(n===null||Dr.current!==null||n.memoizedState!==null)&&(xi=t)}function Zd(t){if(t.tag===22){if(Gt(rn,rn.current),Gt(Qn,t),xi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(xi=t)}}else ra()}function ra(){Gt(rn,rn.current),Gt(Qn,Qn.current)}function Ui(t){Bt(Qn),xi===t&&(xi=null),Bt(rn)}var rn=Ct(0);function Qo(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var W0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},q0=o.unstable_scheduleCallback,Y0=o.unstable_NormalPriority,sn={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jc(){return{controller:new W0,data:new Map,refCount:0}}function ks(t){t.refCount--,t.refCount===0&&q0(Y0,function(){t.controller.abort()})}var Xs=null,Zc=0,Ur=0,Lr=null;function j0(t,n){if(Xs===null){var a=Xs=[];Zc=0,Ur=ef(),Lr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Zc++,n.then(Kd,Kd),n}function Kd(){if(--Zc===0&&Xs!==null){Lr!==null&&(Lr.status="fulfilled");var t=Xs;Xs=null,Ur=0,Lr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Z0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Qd=C.S;C.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&j0(t,n),Qd!==null&&Qd(t,n)};var ka=Ct(null);function Kc(){var t=ka.current;return t!==null?t:Be.pooledCache}function Jo(t,n){n===null?Gt(ka,ka.current):Gt(ka,n.pool)}function Jd(){var t=Kc();return t===null?null:{parent:sn._currentValue,pool:t}}var sa=0,ue=null,Ue=null,Ze=null,$o=!1,Nr=!1,Xa=!1,tl=0,Ws=0,Or=null,K0=0;function Ye(){throw Error(r(321))}function Qc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!In(t[a],n[a]))return!1;return!0}function Jc(t,n,a,s,c,f){return sa=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=t===null||t.memoizedState===null?Wa:oa,Xa=!1,f=a(s,c),Xa=!1,Nr&&(f=tp(n,a,s,c)),$d(t),f}function $d(t){C.H=Si;var n=Ue!==null&&Ue.next!==null;if(sa=0,Ze=Ue=ue=null,$o=!1,Ws=0,Or=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&cl(t)&&(un=!0))}function tp(t,n,a,s){ue=t;var c=0;do{if(Nr&&(Or=null),Ws=0,Nr=!1,25<=c)throw Error(r(301));if(c+=1,Ze=Ue=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}C.H=qa,f=n(a,s)}while(Nr);return f}function Q0(){var t=C.H,n=t.useState()[0];return n=typeof n.then=="function"?qs(n):n,t=t.useState()[0],(Ue!==null?Ue.memoizedState:null)!==t&&(ue.flags|=1024),n}function $c(){var t=tl!==0;return tl=0,t}function tu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function eu(t){if($o){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}$o=!1}sa=0,Ze=Ue=ue=null,Nr=!1,Ws=tl=0,Or=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?ue.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function Ke(){if(Ue===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var n=Ze===null?ue.memoizedState:Ze.next;if(n!==null)Ze=n,Ue=t;else{if(t===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ze===null?ue.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}var el;el=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function qs(t){var n=Ws;return Ws+=1,Or===null&&(Or=[]),t=kd(Or,t,n),n=ue,(Ze===null?n.memoizedState:Ze.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?Wa:oa),t}function nl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return qs(t);if(t.$$typeof===y)return Sn(t)}throw Error(r(438,String(t)))}function nu(t){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=el(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=L;return n.index++,a}function Li(t,n){return typeof n=="function"?n(t):n}function il(t){var n=Ke();return iu(n,Ue,t)}function iu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=v=null,N=null,V=n,lt=!1;do{var _t=V.lane&-536870913;if(_t!==V.lane?(Me&_t)===_t:(sa&_t)===_t){var et=V.revertLane;if(et===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),_t===Ur&&(lt=!0);else if((sa&et)===et){V=V.next,et===Ur&&(lt=!0);continue}else _t={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},N===null?(T=N=_t,v=f):N=N.next=_t,ue.lanes|=et,ga|=et;_t=V.action,Xa&&a(f,_t),f=V.hasEagerState?V.eagerState:a(f,_t)}else et={lane:_t,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},N===null?(T=N=et,v=f):N=N.next=et,ue.lanes|=_t,ga|=_t;V=V.next}while(V!==null&&V!==n);if(N===null?v=f:N.next=T,!In(f,t.memoizedState)&&(un=!0,lt&&(a=Lr,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=N,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function au(t){var n=Ke(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=t(f,v.action),v=v.next;while(v!==c);In(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function ep(t,n,a){var s=ue,c=Ke(),f=Te;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!In((Ue||c).memoizedState,a);if(v&&(c.memoizedState=a,un=!0),c=c.queue,ou(ap.bind(null,s,c,t),[t]),c.getSnapshot!==n||v||Ze!==null&&Ze.memoizedState.tag&1){if(s.flags|=2048,Pr(9,ip.bind(null,s,c,a,n),{destroy:void 0},null),Be===null)throw Error(r(349));f||sa&60||np(s,n,a)}return a}function np(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=el(),ue.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function ip(t,n,a,s){n.value=a,n.getSnapshot=s,rp(n)&&sp(t)}function ap(t,n,a){return a(function(){rp(n)&&sp(t)})}function rp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!In(t,a)}catch{return!0}}function sp(t){var n=ia(t,2);n!==null&&wn(n,t,2)}function ru(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),Xa){ae(!0);try{a()}finally{ae(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:t},n}function op(t,n,a,s){return t.baseState=a,iu(t,Ue,typeof s=="function"?s:Li)}function J0(t,n,a,s,c){if(sl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};C.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,lp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function lp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=C.T,v={};C.T=v;try{var T=a(c,s),N=C.S;N!==null&&N(v,T),cp(t,n,T)}catch(V){su(t,n,V)}finally{C.T=f}}else try{f=a(c,s),cp(t,n,f)}catch(V){su(t,n,V)}}function cp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){up(t,n,s)},function(s){return su(t,n,s)}):up(t,n,a)}function up(t,n,a){n.status="fulfilled",n.value=a,fp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,lp(t,a)))}function su(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,fp(n),n=n.next;while(n!==s)}t.action=null}function fp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function hp(t,n){return n}function dp(t,n){if(Te){var a=Be.formState;if(a!==null){t:{var s=ue;if(Te){if(gn){e:{for(var c=gn,f=vi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){gn=ui(c.nextSibling),s=c.data==="F!";break t}}Ga(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hp,lastRenderedState:n},a.queue=s,a=Up.bind(null,ue,s),s.dispatch=a,s=ru(!1),f=hu.bind(null,ue,!1,s.queue),s=On(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=J0.bind(null,ue,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function pp(t){var n=Ke();return mp(n,Ue,t)}function mp(t,n,a){n=iu(t,n,hp)[0],t=il(Li)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?qs(n):n;var s=Ke(),c=s.queue,f=c.dispatch;return a!==s.memoizedState&&(ue.flags|=2048,Pr(9,$0.bind(null,c,a),{destroy:void 0},null)),[n,f,t]}function $0(t,n){t.action=n}function gp(t){var n=Ke(),a=Ue;if(a!==null)return mp(n,a,t);Ke(),n=n.memoizedState,a=Ke();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Pr(t,n,a,s){return t={tag:t,create:n,inst:a,deps:s,next:null},n=ue.updateQueue,n===null&&(n=el(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function _p(){return Ke().memoizedState}function al(t,n,a,s){var c=On();ue.flags|=t,c.memoizedState=Pr(1|n,a,{destroy:void 0},s===void 0?null:s)}function rl(t,n,a,s){var c=Ke();s=s===void 0?null:s;var f=c.memoizedState.inst;Ue!==null&&s!==null&&Qc(s,Ue.memoizedState.deps)?c.memoizedState=Pr(n,a,f,s):(ue.flags|=t,c.memoizedState=Pr(1|n,a,f,s))}function vp(t,n){al(8390656,8,t,n)}function ou(t,n){rl(2048,8,t,n)}function xp(t,n){return rl(4,2,t,n)}function Sp(t,n){return rl(4,4,t,n)}function Mp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function yp(t,n,a){a=a!=null?a.concat([t]):null,rl(4,4,Mp.bind(null,n,t),a)}function lu(){}function Ep(t,n){var a=Ke();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Qc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Tp(t,n){var a=Ke();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Qc(n,s[1]))return s[0];if(s=t(),Xa){ae(!0);try{t()}finally{ae(!1)}}return a.memoizedState=[s,n],s}function cu(t,n,a){return a===void 0||sa&1073741824?t.memoizedState=n:(t.memoizedState=a,t=Am(),ue.lanes|=t,ga|=t,a)}function bp(t,n,a,s){return In(a,n)?a:Dr.current!==null?(t=cu(t,a,s),In(t,n)||(un=!0),t):sa&42?(t=Am(),ue.lanes|=t,ga|=t,n):(un=!0,t.memoizedState=a)}function Ap(t,n,a,s,c){var f=q.p;q.p=f!==0&&8>f?f:8;var v=C.T,T={};C.T=T,hu(t,!1,n,a);try{var N=c(),V=C.S;if(V!==null&&V(T,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var lt=Z0(N,s);Ys(t,n,lt,kn(t))}else Ys(t,n,s,kn(t))}catch(_t){Ys(t,n,{then:function(){},status:"rejected",reason:_t},kn())}finally{q.p=f,C.T=v}}function tv(){}function uu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Rp(t).queue;Ap(t,c,n,dt,a===null?tv:function(){return Cp(t),a(s)})}function Rp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:dt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Cp(t){var n=Rp(t).next.queue;Ys(t,n,{},kn())}function fu(){return Sn(po)}function wp(){return Ke().memoizedState}function Dp(){return Ke().memoizedState}function ev(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=kn();t=ua(a);var s=fa(n,t,a);s!==null&&(wn(s,n,a),Ks(s,n,a)),n={cache:jc()},t.payload=n;return}n=n.return}}function nv(t,n,a){var s=kn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},sl(t)?Lp(n,a):(a=Gc(t,n,a,s),a!==null&&(wn(a,t,s),Np(a,n,s)))}function Up(t,n,a){var s=kn();Ys(t,n,a,s)}function Ys(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(sl(t))Lp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(c.hasEagerState=!0,c.eagerState=T,In(T,v))return ko(t,n,c,0),Be===null&&Vo(),!1}catch{}finally{}if(a=Gc(t,n,c,s),a!==null)return wn(a,t,s),Np(a,n,s),!0}return!1}function hu(t,n,a,s){if(s={lane:2,revertLane:ef(),action:s,hasEagerState:!1,eagerState:null,next:null},sl(t)){if(n)throw Error(r(479))}else n=Gc(t,a,s,2),n!==null&&wn(n,t,2)}function sl(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function Lp(t,n){Nr=$o=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Np(t,n,a){if(a&4194176){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,_i(t,a)}}var Si={readContext:Sn,use:nl,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye};Si.useCacheRefresh=Ye,Si.useMemoCache=Ye,Si.useHostTransitionStatus=Ye,Si.useFormState=Ye,Si.useActionState=Ye,Si.useOptimistic=Ye;var Wa={readContext:Sn,use:nl,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:vp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,al(4194308,4,Mp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return al(4194308,4,t,n)},useInsertionEffect:function(t,n){al(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var s=t();if(Xa){ae(!0);try{t()}finally{ae(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=On();if(a!==void 0){var c=a(n);if(Xa){ae(!0);try{a(n)}finally{ae(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=nv.bind(null,ue,t),[s.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=ru(t);var n=t.queue,a=Up.bind(null,ue,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:lu,useDeferredValue:function(t,n){var a=On();return cu(a,t,n)},useTransition:function(){var t=ru(!1);return t=Ap.bind(null,ue,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ue,c=On();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Be===null)throw Error(r(349));Me&60||np(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,vp(ap.bind(null,s,f,t),[t]),s.flags|=2048,Pr(9,ip.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var t=On(),n=Be.identifierPrefix;if(Te){var a=Di,s=wi;a=(s&~(1<<32-Kt(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=tl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=K0++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return On().memoizedState=ev.bind(null,ue)}};Wa.useMemoCache=nu,Wa.useHostTransitionStatus=fu,Wa.useFormState=dp,Wa.useActionState=dp,Wa.useOptimistic=function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=hu.bind(null,ue,!0,a),a.dispatch=n,[t,n]};var oa={readContext:Sn,use:nl,useCallback:Ep,useContext:Sn,useEffect:ou,useImperativeHandle:yp,useInsertionEffect:xp,useLayoutEffect:Sp,useMemo:Tp,useReducer:il,useRef:_p,useState:function(){return il(Li)},useDebugValue:lu,useDeferredValue:function(t,n){var a=Ke();return bp(a,Ue.memoizedState,t,n)},useTransition:function(){var t=il(Li)[0],n=Ke().memoizedState;return[typeof t=="boolean"?t:qs(t),n]},useSyncExternalStore:ep,useId:wp};oa.useCacheRefresh=Dp,oa.useMemoCache=nu,oa.useHostTransitionStatus=fu,oa.useFormState=pp,oa.useActionState=pp,oa.useOptimistic=function(t,n){var a=Ke();return op(a,Ue,t,n)};var qa={readContext:Sn,use:nl,useCallback:Ep,useContext:Sn,useEffect:ou,useImperativeHandle:yp,useInsertionEffect:xp,useLayoutEffect:Sp,useMemo:Tp,useReducer:au,useRef:_p,useState:function(){return au(Li)},useDebugValue:lu,useDeferredValue:function(t,n){var a=Ke();return Ue===null?cu(a,t,n):bp(a,Ue.memoizedState,t,n)},useTransition:function(){var t=au(Li)[0],n=Ke().memoizedState;return[typeof t=="boolean"?t:qs(t),n]},useSyncExternalStore:ep,useId:wp};qa.useCacheRefresh=Dp,qa.useMemoCache=nu,qa.useHostTransitionStatus=fu,qa.useFormState=gp,qa.useActionState=gp,qa.useOptimistic=function(t,n){var a=Ke();return Ue!==null?op(a,Ue,t,n):(a.baseState=t,[t,a.queue.dispatch])};function du(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:A({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var pu={isMounted:function(t){return(t=t._reactInternals)?j(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var s=kn(),c=ua(s);c.payload=n,a!=null&&(c.callback=a),n=fa(t,c,s),n!==null&&(wn(n,t,s),Ks(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=kn(),c=ua(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=fa(t,c,s),n!==null&&(wn(n,t,s),Ks(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=kn(),s=ua(a);s.tag=2,n!=null&&(s.callback=n),n=fa(t,s,a),n!==null&&(wn(n,t,a),Ks(n,t,a))}};function Op(t,n,a,s,c,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!Os(a,s)||!Os(c,f):!0}function Pp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&pu.enqueueReplaceState(n,n.state,null)}function Ya(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=A({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var ol=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function zp(t){ol(t)}function Bp(t){console.error(t)}function Fp(t){ol(t)}function ll(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Ip(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function mu(t,n,a){return a=ua(a),a.tag=3,a.payload={element:null},a.callback=function(){ll(t,n)},a}function Hp(t){return t=ua(t),t.tag=3,t}function Gp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Ip(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Ip(n,a,s),typeof c!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function iv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Zs(n,a,c,!0),a=Qn.current,a!==null){switch(a.tag){case 13:return xi===null?Ku():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Wc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Ju(t,s,c)),!1;case 22:return a.flags|=65536,s===Wc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Ju(t,s,c)),!1}throw Error(r(435,a.tag))}return Ju(t,s,c),Ku(),!1}if(Te)return n=Qn.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Xc&&(t=Error(r(422),{cause:s}),Fs(jn(t,a)))):(s!==Xc&&(n=Error(r(423),{cause:s}),Fs(jn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=jn(s,a),c=mu(t.stateNode,s,c),Du(t,c),We!==4&&(We=2)),!1;var f=Error(r(520),{cause:s});if(f=jn(f,a),ao===null?ao=[f]:ao.push(f),We!==4&&(We=2),n===null)return!0;s=jn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=mu(a.stateNode,s,t),Du(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(_a===null||!_a.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Hp(c),Gp(c,t,a,s),Du(a,c),!1}a=a.return}while(a!==null);return!1}var Vp=Error(r(461)),un=!1;function _n(t,n,a,s){n.child=t===null?Yd(n,null,a,s):Va(n,t.child,a,s)}function kp(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var T in s)T!=="ref"&&(v[T]=s[T])}else v=s;return Za(n),s=Jc(t,n,a,v,f,c),T=$c(),t!==null&&!un?(tu(t,n,c),Ni(t,n,c)):(Te&&T&&Vc(n),n.flags|=1,_n(t,n,s,c),n.child)}function Xp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Wp(t,n,f,s,c)):(t=dl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Tu(t,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Os,a(v,s)&&t.ref===n.ref)return Ni(t,n,c)}return n.flags|=1,t=ma(f,s),t.ref=n.ref,t.return=n,n.child=t}function Wp(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Os(f,s)&&t.ref===n.ref)if(un=!1,n.pendingProps=s=f,Tu(t,c))t.flags&131072&&(un=!0);else return n.lanes=t.lanes,Ni(t,n,c)}return gu(t,n,a,s,c)}function qp(t,n,a){var s=n.pendingProps,c=s.children,f=(n.stateNode._pendingVisibility&2)!==0,v=t!==null?t.memoizedState:null;if(js(t,n),s.mode==="hidden"||f){if(n.flags&128){if(s=v!==null?v.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Yp(t,n,s,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jo(n,v!==null?v.cachePool:null),v!==null?jd(n,v):qc(),Zd(n);else return n.lanes=n.childLanes=536870912,Yp(t,n,v!==null?v.baseLanes|a:a,a)}else v!==null?(Jo(n,v.cachePool),jd(n,v),ra(),n.memoizedState=null):(t!==null&&Jo(n,null),qc(),ra());return _n(t,n,c,a),n.child}function Yp(t,n,a,s){var c=Kc();return c=c===null?null:{parent:sn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Jo(n,null),qc(),Zd(n),t!==null&&Zs(t,n,s,!0),null}function js(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function gu(t,n,a,s,c){return Za(n),a=Jc(t,n,a,s,void 0,c),s=$c(),t!==null&&!un?(tu(t,n,c),Ni(t,n,c)):(Te&&s&&Vc(n),n.flags|=1,_n(t,n,a,c),n.child)}function jp(t,n,a,s,c,f){return Za(n),n.updateQueue=null,a=tp(n,s,a,c),$d(t),s=$c(),t!==null&&!un?(tu(t,n,f),Ni(t,n,f)):(Te&&s&&Vc(n),n.flags|=1,_n(t,n,a,f),n.child)}function Zp(t,n,a,s,c){if(Za(n),n.stateNode===null){var f=Ar,v=a.contextType;typeof v=="object"&&v!==null&&(f=Sn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=pu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Cu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Sn(v):Ar,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(du(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&pu.enqueueReplaceState(f,f.state,null),Js(n,s,f,c),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,N=Ya(a,T);f.props=N;var V=f.context,lt=a.contextType;v=Ar,typeof lt=="object"&&lt!==null&&(v=Sn(lt));var _t=a.getDerivedStateFromProps;lt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,lt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||V!==v)&&Pp(n,f,s,v),ca=!1;var et=n.memoizedState;f.state=et,Js(n,s,f,c),Qs(),V=n.memoizedState,T||et!==V||ca?(typeof _t=="function"&&(du(n,a,_t,s),V=n.memoizedState),(N=ca||Op(n,a,N,s,et,V,v))?(lt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=V),f.props=s,f.state=V,f.context=v,s=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,wu(t,n),v=n.memoizedProps,lt=Ya(a,v),f.props=lt,_t=n.pendingProps,et=f.context,V=a.contextType,N=Ar,typeof V=="object"&&V!==null&&(N=Sn(V)),T=a.getDerivedStateFromProps,(V=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==_t||et!==N)&&Pp(n,f,s,N),ca=!1,et=n.memoizedState,f.state=et,Js(n,s,f,c),Qs();var ot=n.memoizedState;v!==_t||et!==ot||ca||t!==null&&t.dependencies!==null&&cl(t.dependencies)?(typeof T=="function"&&(du(n,a,T,s),ot=n.memoizedState),(lt=ca||Op(n,a,lt,s,et,ot,N)||t!==null&&t.dependencies!==null&&cl(t.dependencies))?(V||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=N,s=lt):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,js(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Va(n,t.child,null,c),n.child=Va(n,null,a,c)):_n(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Ni(t,n,c),t}function Kp(t,n,a,s){return Bs(),n.flags|=256,_n(t,n,a,s),n.child}var _u={dehydrated:null,treeContext:null,retryLane:0};function vu(t){return{baseLanes:t,cachePool:Jd()}}function xu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function Qp(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Te){if(c?aa(n):ra(),Te){var T=gn,N;if(N=T){t:{for(N=T,T=vi;N.nodeType!==8;){if(!T){T=null;break t}if(N=ui(N.nextSibling),N===null){T=null;break t}}T=N}T!==null?(n.memoizedState={dehydrated:T,treeContext:Ia!==null?{id:wi,overflow:Di}:null,retryLane:536870912},N=ti(18,null,null,0),N.stateNode=T,N.return=n,n.child=N,Cn=n,gn=null,N=!0):N=!1}N||Ga(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?n.lanes=16:n.lanes=536870912,null;Ui(n)}return T=s.children,s=s.fallback,c?(ra(),c=n.mode,T=Mu({mode:"hidden",children:T},c),s=Qa(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,c=n.child,c.memoizedState=vu(a),c.childLanes=xu(t,v,a),n.memoizedState=_u,s):(aa(n),Su(n,T))}if(N=t.memoizedState,N!==null&&(T=N.dehydrated,T!==null)){if(f)n.flags&256?(aa(n),n.flags&=-257,n=yu(t,n,a)):n.memoizedState!==null?(ra(),n.child=t.child,n.flags|=128,n=null):(ra(),c=s.fallback,T=n.mode,s=Mu({mode:"visible",children:s.children},T),c=Qa(c,T,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Va(n,t.child,null,a),s=n.child,s.memoizedState=vu(a),s.childLanes=xu(t,v,a),n.memoizedState=_u,n=c);else if(aa(n),T.data==="$!"){if(v=T.nextSibling&&T.nextSibling.dataset,v)var V=v.dgst;v=V,s=Error(r(419)),s.stack="",s.digest=v,Fs({value:s,source:null,stack:null}),n=yu(t,n,a)}else if(un||Zs(t,n,a,!1),v=(a&t.childLanes)!==0,un||v){if(v=Be,v!==null){if(s=a&-a,s&42)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=s&(v.suspendedLanes|a)?0:s,s!==0&&s!==N.retryLane)throw N.retryLane=s,ia(t,s),wn(v,t,s),Vp}T.data==="$?"||Ku(),n=yu(t,n,a)}else T.data==="$?"?(n.flags|=128,n.child=t.child,n=vv.bind(null,t),T._reactRetry=n,n=null):(t=N.treeContext,gn=ui(T.nextSibling),Cn=n,Te=!0,li=null,vi=!1,t!==null&&(Zn[Kn++]=wi,Zn[Kn++]=Di,Zn[Kn++]=Ia,wi=t.id,Di=t.overflow,Ia=n),n=Su(n,s.children),n.flags|=4096);return n}return c?(ra(),c=s.fallback,T=n.mode,N=t.child,V=N.sibling,s=ma(N,{mode:"hidden",children:s.children}),s.subtreeFlags=N.subtreeFlags&31457280,V!==null?c=ma(V,c):(c=Qa(c,T,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,T=t.child.memoizedState,T===null?T=vu(a):(N=T.cachePool,N!==null?(V=sn._currentValue,N=N.parent!==V?{parent:V,pool:V}:N):N=Jd(),T={baseLanes:T.baseLanes|a,cachePool:N}),c.memoizedState=T,c.childLanes=xu(t,v,a),n.memoizedState=_u,s):(aa(n),a=t.child,t=a.sibling,a=ma(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Su(t,n){return n=Mu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Mu(t,n){return Em(t,n,0,null)}function yu(t,n,a){return Va(n,t.child,null,a),t=Su(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Jp(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Au(t.return,n,a)}function Eu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function $p(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(_n(t,n,s.children,a),s=rn.current,s&2)s=s&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jp(t,a,n);else if(t.tag===19)Jp(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(Gt(rn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Qo(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Eu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Qo(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Eu(n,!0,a,null,f);break;case"together":Eu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ni(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ga|=n.lanes,!(a&n.childLanes))if(t!==null){if(Zs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ma(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ma(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Tu(t,n){return t.lanes&n?!0:(t=t.dependencies,!!(t!==null&&cl(t)))}function av(t,n,a){switch(n.tag){case 3:pn(n,n.stateNode.containerInfo),la(n,sn,t.memoizedState.cache),Bs();break;case 27:case 5:fe(n);break;case 4:pn(n,n.stateNode.containerInfo);break;case 10:la(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(aa(n),n.flags|=128,null):a&n.child.childLanes?Qp(t,n,a):(aa(n),t=Ni(t,n,a),t!==null?t.sibling:null);aa(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Zs(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return $p(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Gt(rn,rn.current),s)break;return null;case 22:case 23:return n.lanes=0,qp(t,n,a);case 24:la(n,sn,t.memoizedState.cache)}return Ni(t,n,a)}function tm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Tu(t,a)&&!(n.flags&128))return un=!1,av(t,n,a);un=!!(t.flags&131072)}else un=!1,Te&&n.flags&1048576&&Fd(n,qo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Fu(s)?(t=Ya(s,t),n.tag=1,n=Zp(null,n,s,t,a)):(n.tag=0,n=gu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===R){n.tag=11,n=kp(null,n,s,t,a);break t}else if(c===g){n.tag=14,n=Xp(null,n,s,t,a);break t}}throw n=K(s)||s,Error(r(306,n,""))}}return n;case 0:return gu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Ya(s,n.pendingProps),Zp(t,n,s,c,a);case 3:t:{if(pn(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,s=c.element,wu(t,n),Js(n,f,null,a);var v=n.memoizedState;if(f=v.cache,la(n,sn,f),f!==c.cache&&Ru(n,[sn],a,!0),Qs(),f=v.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Kp(t,n,f,a);break t}else if(f!==s){s=jn(Error(r(424)),n),Fs(s),n=Kp(t,n,f,a);break t}else for(gn=ui(n.stateNode.containerInfo.firstChild),Cn=n,Te=!0,li=null,vi=!0,a=Yd(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Bs(),f===s){n=Ni(t,n,a);break t}_n(t,n,f,a)}n=n.child}return n;case 26:return js(t,n),t===null?(a=ig(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,t=n.pendingProps,s=bl(Re.current).createElement(a),s[en]=n,s[nn]=t,vn(s,a,t),Q(s),n.stateNode=s):n.memoizedState=ig(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return fe(n),t===null&&Te&&(s=n.stateNode=tg(n.type,n.pendingProps,Re.current),Cn=n,vi=!0,gn=ui(s.firstChild)),s=n.pendingProps.children,t!==null||Te?_n(t,n,s,a):n.child=Va(n,null,s,a),js(t,n),n.child;case 5:return t===null&&Te&&((c=s=gn)&&(s=Ov(s,n.type,n.pendingProps,vi),s!==null?(n.stateNode=s,Cn=n,gn=ui(s.firstChild),vi=!1,c=!0):c=!1),c||Ga(n)),fe(n),c=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,s=f.children,ff(c,f)?s=null:v!==null&&ff(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Jc(t,n,Q0,null,null,a),po._currentValue=c),js(t,n),_n(t,n,s,a),n.child;case 6:return t===null&&Te&&((t=a=gn)&&(a=Pv(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Cn=n,gn=null,t=!0):t=!1),t||Ga(n)),null;case 13:return Qp(t,n,a);case 4:return pn(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Va(n,null,s,a):_n(t,n,s,a),n.child;case 11:return kp(t,n,n.type,n.pendingProps,a);case 7:return _n(t,n,n.pendingProps,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,la(n,n.type,s.value),_n(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,Za(n),c=Sn(c),s=s(c),n.flags|=1,_n(t,n,s,a),n.child;case 14:return Xp(t,n,n.type,n.pendingProps,a);case 15:return Wp(t,n,n.type,n.pendingProps,a);case 19:return $p(t,n,a);case 22:return qp(t,n,a);case 24:return Za(n),s=Sn(sn),t===null?(c=Kc(),c===null&&(c=Be,f=jc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Cu(n),la(n,sn,c)):(t.lanes&a&&(wu(t,n),Js(n,null,null,a),Qs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),la(n,sn,s)):(s=f.cache,la(n,sn,s),s!==c.cache&&Ru(n,[sn],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var bu=Ct(null),ja=null,Oi=null;function la(t,n,a){Gt(bu,n._currentValue),n._currentValue=a}function Pi(t){t._currentValue=bu.current,Bt(bu)}function Au(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Ru(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var N=0;N<n.length;N++)if(T.context===n[N]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Au(f.return,a,t),s||(v=null);break t}f=T.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Au(v,a,t),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===t){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Zs(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=c.type;In(c.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(c===z.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(po):t=[po])}c=c.return}t!==null&&Ru(n,t,a,s),n.flags|=262144}function cl(t){for(t=t.firstContext;t!==null;){if(!In(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Za(t){ja=t,Oi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return em(ja,t)}function ul(t,n){return ja===null&&Za(t),em(t,n)}function em(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Oi===null){if(t===null)throw Error(r(308));Oi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Oi=Oi.next=n;return a}var ca=!1;function Cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function fa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,Ve&2){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Xo(t),zd(t,null,a),n}return ko(t,s,n,a),Xo(t)}function Ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,_i(t,a)}}function Du(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Uu=!1;function Qs(){if(Uu){var t=Lr;if(t!==null)throw t}}function Js(t,n,a,s){Uu=!1;var c=t.updateQueue;ca=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var N=T,V=N.next;N.next=null,v===null?f=V:v.next=V,v=N;var lt=t.alternate;lt!==null&&(lt=lt.updateQueue,T=lt.lastBaseUpdate,T!==v&&(T===null?lt.firstBaseUpdate=V:T.next=V,lt.lastBaseUpdate=N))}if(f!==null){var _t=c.baseState;v=0,lt=V=N=null,T=f;do{var et=T.lane&-536870913,ot=et!==T.lane;if(ot?(Me&et)===et:(s&et)===et){et!==0&&et===Ur&&(Uu=!0),lt!==null&&(lt=lt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Xt=t,ie=T;et=n;var qe=a;switch(ie.tag){case 1:if(Xt=ie.payload,typeof Xt=="function"){_t=Xt.call(qe,_t,et);break t}_t=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ie.payload,et=typeof Xt=="function"?Xt.call(qe,_t,et):Xt,et==null)break t;_t=A({},_t,et);break t;case 2:ca=!0}}et=T.callback,et!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[et]:ot.push(et))}else ot={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},lt===null?(V=lt=ot,N=_t):lt=lt.next=ot,v|=et;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);lt===null&&(N=_t),c.baseState=N,c.firstBaseUpdate=V,c.lastBaseUpdate=lt,f===null&&(c.shared.lanes=0),ga|=v,t.lanes=v,t.memoizedState=_t}}function nm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function im(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)nm(a[t],n)}function $s(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==c)}}catch(T){Pe(n,n.return,T)}}function ha(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var v=s.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,c=n;var N=a;try{T()}catch(V){Pe(c,N,V)}}}s=s.next}while(s!==f)}}catch(V){Pe(n,n.return,V)}}function am(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{im(n,a)}catch(s){Pe(t,t.return,s)}}}function rm(t,n,a){a.props=Ya(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Pe(t,n,s)}}function Ka(t,n){try{var a=t.ref;if(a!==null){var s=t.stateNode;switch(t.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof a=="function"?t.refCleanup=a(c):a.current=c}}catch(f){Pe(t,n,f)}}function Hn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Pe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(t,n,c)}else a.current=null}function sm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Pe(t,t.return,c)}}function om(t,n,a){try{var s=t.stateNode;wv(s,t.type,a,n),s[nn]=n}catch(c){Pe(t,t.return,c)}}function lm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Lu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||lm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Tl));else if(s!==4&&s!==27&&(t=t.child,t!==null))for(Nu(t,n,a),t=t.sibling;t!==null;)Nu(t,n,a),t=t.sibling}function fl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&s!==27&&(t=t.child,t!==null))for(fl(t,n,a),t=t.sibling;t!==null;)fl(t,n,a),t=t.sibling}var zi=!1,Xe=!1,Ou=!1,cm=typeof WeakSet=="function"?WeakSet:Set,fn=null,um=!1;function rv(t,n){if(t=t.containerInfo,cf=Ul,t=Rd(t),zc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,T=-1,N=-1,V=0,lt=0,_t=t,et=null;e:for(;;){for(var ot;_t!==a||c!==0&&_t.nodeType!==3||(T=v+c),_t!==f||s!==0&&_t.nodeType!==3||(N=v+s),_t.nodeType===3&&(v+=_t.nodeValue.length),(ot=_t.firstChild)!==null;)et=_t,_t=ot;for(;;){if(_t===t)break e;if(et===a&&++V===c&&(T=v),et===f&&++lt===s&&(N=v),(ot=_t.nextSibling)!==null)break;_t=et,et=_t.parentNode}_t=ot}a=T===-1||N===-1?null:{start:T,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(uf={focusedElem:t,selectionRange:a},Ul=!1,fn=n;fn!==null;)if(n=fn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,fn=t;else for(;fn!==null;){switch(n=fn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Xt=Ya(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(Xt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(ie){Pe(a,a.return,ie)}}break;case 3:if(t&1024){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)pf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":pf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,fn=t;break}fn=n.return}return Xt=um,um=!1,Xt}function fm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Fi(t,a),s&4&&$s(5,a);break;case 1:if(Fi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(T){Pe(a,a.return,T)}else{var c=Ya(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(T){Pe(a,a.return,T)}}s&64&&am(a),s&512&&Ka(a,a.return);break;case 3:if(Fi(t,a),s&64&&(s=a.updateQueue,s!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{im(s,t)}catch(T){Pe(a,a.return,T)}}break;case 26:Fi(t,a),s&512&&Ka(a,a.return);break;case 27:case 5:Fi(t,a),n===null&&s&4&&sm(a),s&512&&Ka(a,a.return);break;case 12:Fi(t,a);break;case 13:Fi(t,a),s&4&&pm(t,a);break;case 22:if(c=a.memoizedState!==null||zi,!c){n=n!==null&&n.memoizedState!==null||Xe;var f=zi,v=Xe;zi=c,(Xe=n)&&!v?da(t,a,(a.subtreeFlags&8772)!==0):Fi(t,a),zi=f,Xe=v}s&512&&(a.memoizedProps.mode==="manual"?Ka(a,a.return):Hn(a,a.return));break;default:Fi(t,a)}}function hm(t){var n=t.alternate;n!==null&&(t.alternate=null,hm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&As(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qe=null,Gn=!1;function Bi(t,n,a){for(a=a.child;a!==null;)dm(t,n,a),a=a.sibling}function dm(t,n,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:Xe||Hn(a,n),Bi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||Hn(a,n);var s=Qe,c=Gn;for(Qe=a.stateNode,Bi(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);As(a),Qe=s,Gn=c;break;case 5:Xe||Hn(a,n);case 6:c=Qe;var f=Gn;if(Qe=null,Bi(t,n,a),Qe=c,Gn=f,Qe!==null)if(Gn)try{t=Qe,s=a.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)}catch(v){Pe(a,n,v)}else try{Qe.removeChild(a.stateNode)}catch(v){Pe(a,n,v)}break;case 18:Qe!==null&&(Gn?(n=Qe,a=a.stateNode,n.nodeType===8?df(n.parentNode,a):n.nodeType===1&&df(n,a),vo(n)):df(Qe,a.stateNode));break;case 4:s=Qe,c=Gn,Qe=a.stateNode.containerInfo,Gn=!0,Bi(t,n,a),Qe=s,Gn=c;break;case 0:case 11:case 14:case 15:Xe||ha(2,a,n),Xe||ha(4,a,n),Bi(t,n,a);break;case 1:Xe||(Hn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&rm(a,n,s)),Bi(t,n,a);break;case 21:Bi(t,n,a);break;case 22:Xe||Hn(a,n),Xe=(s=Xe)||a.memoizedState!==null,Bi(t,n,a),Xe=s;break;default:Bi(t,n,a)}}function pm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vo(t)}catch(a){Pe(n,n.return,a)}}function sv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new cm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new cm),n;default:throw Error(r(435,t.tag))}}function Pu(t,n){var a=sv(t);n.forEach(function(s){var c=xv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Jn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,v=n,T=v;t:for(;T!==null;){switch(T.tag){case 27:case 5:Qe=T.stateNode,Gn=!1;break t;case 3:Qe=T.stateNode.containerInfo,Gn=!0;break t;case 4:Qe=T.stateNode.containerInfo,Gn=!0;break t}T=T.return}if(Qe===null)throw Error(r(160));dm(f,v,c),Qe=null,Gn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)mm(n,t),n=n.sibling}var ci=null;function mm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Jn(n,t),$n(t),s&4&&(ha(3,t,t.return),$s(3,t),ha(5,t,t.return));break;case 1:Jn(n,t),$n(t),s&512&&(Xe||a===null||Hn(a,a.return)),s&64&&zi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=ci;if(Jn(n,t),$n(t),s&512&&(Xe||a===null||Hn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Pa]||f[en]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),vn(f,s,a),f[en]=t,Q(f),s=f;break t;case"link":var v=sg("link","href",c).get(s+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}f=c.createElement(s),vn(f,s,a),c.head.appendChild(f);break;case"meta":if(v=sg("meta","content",c).get(s+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}f=c.createElement(s),vn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[en]=t,Q(f),s=f}t.stateNode=s}else og(c,t.type,t.stateNode);else t.stateNode=rg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?og(c,t.type,t.stateNode):rg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&om(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&t.alternate===null){c=t.stateNode,f=t.memoizedProps;try{for(var N=c.firstChild;N;){var V=N.nextSibling,lt=N.nodeName;N[Pa]||lt==="HEAD"||lt==="BODY"||lt==="SCRIPT"||lt==="STYLE"||lt==="LINK"&&N.rel.toLowerCase()==="stylesheet"||c.removeChild(N),N=V}for(var _t=t.type,et=c.attributes;et.length;)c.removeAttributeNode(et[0]);vn(c,_t,f),c[en]=t,c[nn]=f}catch(Xt){Pe(t,t.return,Xt)}}case 5:if(Jn(n,t),$n(t),s&512&&(Xe||a===null||Hn(a,a.return)),t.flags&32){c=t.stateNode;try{Ln(c,"")}catch(Xt){Pe(t,t.return,Xt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,om(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Ou=!0);break;case 6:if(Jn(n,t),$n(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Xt){Pe(t,t.return,Xt)}}break;case 3:if(Cl=null,c=ci,ci=Al(n.containerInfo),Jn(n,t),ci=c,$n(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{vo(n.containerInfo)}catch(Xt){Pe(t,t.return,Xt)}Ou&&(Ou=!1,gm(t));break;case 4:s=ci,ci=Al(t.stateNode.containerInfo),Jn(n,t),$n(t),ci=s;break;case 12:Jn(n,t),$n(t);break;case 13:Jn(n,t),$n(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xu=ut()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Pu(t,s)));break;case 22:if(s&512&&(Xe||a===null||Hn(a,a.return)),N=t.memoizedState!==null,V=a!==null&&a.memoizedState!==null,lt=zi,_t=Xe,zi=lt||N,Xe=_t||V,Jn(n,t),Xe=_t,zi=lt,$n(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=N?n._visibility&-2:n._visibility|1,N&&(n=zi||Xe,a===null||V||n||zr(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){V=a=n;try{if(c=V.stateNode,N)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{v=V.stateNode,T=V.memoizedProps.style;var ot=T!=null&&T.hasOwnProperty("display")?T.display:null;v.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Xt){Pe(V,V.return,Xt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=N?"":V.memoizedProps}catch(Xt){Pe(V,V.return,Xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Pu(t,a))));break;case 19:Jn(n,t),$n(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Pu(t,s)));break;case 21:break;default:Jn(n,t),$n(t)}}function $n(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(lm(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,f=Lu(t);fl(t,f,c);break;case 5:var v=s.stateNode;s.flags&32&&(Ln(v,""),s.flags&=-33);var T=Lu(t);fl(t,T,v);break;case 3:case 4:var N=s.stateNode.containerInfo,V=Lu(t);Nu(t,V,N);break;default:throw Error(r(161))}}}catch(lt){Pe(t,t.return,lt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function gm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;gm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Fi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)fm(t,n.alternate,n),n=n.sibling}function zr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ha(4,n,n.return),zr(n);break;case 1:Hn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&rm(n,n.return,a),zr(n);break;case 26:case 27:case 5:Hn(n,n.return),zr(n);break;case 22:Hn(n,n.return),n.memoizedState===null&&zr(n);break;default:zr(n)}t=t.sibling}}function da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:da(c,f,a),$s(4,f);break;case 1:if(da(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(V){Pe(s,s.return,V)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)nm(N[c],T)}catch(V){Pe(s,s.return,V)}}a&&v&64&&am(f),Ka(f,f.return);break;case 26:case 27:case 5:da(c,f,a),a&&s===null&&v&4&&sm(f),Ka(f,f.return);break;case 12:da(c,f,a);break;case 13:da(c,f,a),a&&v&4&&pm(c,f);break;case 22:f.memoizedState===null&&da(c,f,a),Ka(f,f.return);break;default:da(c,f,a)}n=n.sibling}}function zu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ks(a))}function Bu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ks(t))}function pa(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_m(t,n,a,s),n=n.sibling}function _m(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:pa(t,n,a,s),c&2048&&$s(9,n);break;case 3:pa(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ks(t)));break;case 12:if(c&2048){pa(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(N){Pe(n,n.return,N)}}else pa(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?pa(t,n,a,s):to(t,n):f._visibility&4?pa(t,n,a,s):(f._visibility|=4,Br(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&zu(n.alternate,n);break;case 24:pa(t,n,a,s),c&2048&&Bu(n.alternate,n);break;default:pa(t,n,a,s)}}function Br(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,v=n,T=a,N=s,V=v.flags;switch(v.tag){case 0:case 11:case 15:Br(f,v,T,N,c),$s(8,v);break;case 23:break;case 22:var lt=v.stateNode;v.memoizedState!==null?lt._visibility&4?Br(f,v,T,N,c):to(f,v):(lt._visibility|=4,Br(f,v,T,N,c)),c&&V&2048&&zu(v.alternate,v);break;case 24:Br(f,v,T,N,c),c&&V&2048&&Bu(v.alternate,v);break;default:Br(f,v,T,N,c)}n=n.sibling}}function to(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:to(a,s),c&2048&&zu(s.alternate,s);break;case 24:to(a,s),c&2048&&Bu(s.alternate,s);break;default:to(a,s)}n=n.sibling}}var eo=8192;function Fr(t){if(t.subtreeFlags&eo)for(t=t.child;t!==null;)vm(t),t=t.sibling}function vm(t){switch(t.tag){case 26:Fr(t),t.flags&eo&&t.memoizedState!==null&&jv(ci,t.memoizedState,t.memoizedProps);break;case 5:Fr(t);break;case 3:case 4:var n=ci;ci=Al(t.stateNode.containerInfo),Fr(t),ci=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=eo,eo=16777216,Fr(t),eo=n):Fr(t));break;default:Fr(t)}}function xm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function no(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,Mm(s,t)}xm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sm(t),t=t.sibling}function Sm(t){switch(t.tag){case 0:case 11:case 15:no(t),t.flags&2048&&ha(9,t,t.return);break;case 3:no(t);break;case 12:no(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,hl(t)):no(t);break;default:no(t)}}function hl(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,Mm(s,t)}xm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ha(8,n,n.return),hl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,hl(n));break;default:hl(n)}t=t.sibling}}function Mm(t,n){for(;fn!==null;){var a=fn;switch(a.tag){case 0:case 11:case 15:ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ks(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,fn=s;else t:for(a=t;fn!==null;){s=fn;var c=s.sibling,f=s.return;if(hm(s),s===a){fn=null;break t}if(c!==null){c.return=f,fn=c;break t}fn=f}}}function ov(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,n,a,s){return new ov(t,n,a,s)}function Fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ma(t,n){var a=t.alternate;return a===null?(a=ti(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ym(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function dl(t,n,a,s,c,f){var v=0;if(s=t,typeof t=="function")Fu(t)&&(v=1);else if(typeof t=="string")v=qv(t,a,Se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case m:return Qa(a.children,c,f,n);case p:v=8,c|=24;break;case _:return t=ti(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case w:return t=ti(13,a,n,c),t.elementType=w,t.lanes=f,t;case M:return t=ti(19,a,n,c),t.elementType=M,t.lanes=f,t;case O:return Em(a,c,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case y:v=10;break t;case S:v=9;break t;case R:v=11;break t;case g:v=14;break t;case P:v=16,s=null;break t}v=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=ti(v,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Qa(t,n,a,s){return t=ti(7,t,s,n),t.lanes=a,t}function Em(t,n,a,s){t=ti(22,t,s,n),t.elementType=O,t.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if(!(c._pendingVisibility&2)){var v=ia(f,2);v!==null&&(c._pendingVisibility|=2,wn(v,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if(c._pendingVisibility&2){var v=ia(f,2);v!==null&&(c._pendingVisibility&=-3,wn(v,f,2))}}};return t.stateNode=c,t}function Iu(t,n,a){return t=ti(6,t,null,n),t.lanes=a,t}function Hu(t,n,a){return n=ti(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Ii(t){t.flags|=4}function Tm(t,n){if(n.type!=="stylesheet"||n.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!lg(n)){if(n=Qn.current,n!==null&&((Me&4194176)===Me?xi!==null:(Me&62914560)!==Me&&!(Me&536870912)||n!==xi))throw Hs=Wc,Gd;t.flags|=8192}}function pl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ye():536870912,t.lanes|=n,Hr|=n)}function io(t,n){if(!Te)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ge(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function lv(t,n,a){var s=n.pendingProps;switch(kc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(n),null;case 1:return Ge(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Pi(sn),re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(zs(n)?Ii(n):t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,li!==null&&(ju(li),li=null))),Ge(n),null;case 26:return a=n.memoizedState,t===null?(Ii(n),a!==null?(Ge(n),Tm(n,a)):(Ge(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Ii(n),Ge(n),Tm(n,a)):(Ge(n),n.flags&=-16777217):(t.memoizedProps!==s&&Ii(n),Ge(n),n.flags&=-16777217),null;case 27:Wt(n),a=Re.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ge(n),null}t=Se.current,zs(n)?Id(n):(t=tg(c,s,a),n.stateNode=t,Ii(n))}return Ge(n),null;case 5:if(Wt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ge(n),null}if(t=Se.current,zs(n))Id(n);else{switch(c=bl(Re.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[en]=n,t[nn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(vn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Ii(n)}}return Ge(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Re.current,zs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Cn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[en]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||jm(t.nodeValue,a)),t||Ga(n)}else t=bl(t).createTextNode(s),t[en]=n,n.stateNode=t}return Ge(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=zs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[en]=n}else Bs(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ge(n),c=!1}else li!==null&&(ju(li),li=null),c=!0;if(!c)return n.flags&256?(Ui(n),n):(Ui(n),null)}if(Ui(n),n.flags&128)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),pl(n,n.updateQueue),Ge(n),null;case 4:return re(),t===null&&sf(n.stateNode.containerInfo),Ge(n),null;case 10:return Pi(n.type),Ge(n),null;case 19:if(Bt(rn),c=n.memoizedState,c===null)return Ge(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)io(c,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(f=Qo(t),f!==null){for(n.flags|=128,io(c,!1),t=f.updateQueue,n.updateQueue=t,pl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ym(a,t),a=a.sibling;return Gt(rn,rn.current&1|2),n.child}t=t.sibling}c.tail!==null&&ut()>ml&&(n.flags|=128,s=!0,io(c,!1),n.lanes=4194304)}else{if(!s)if(t=Qo(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,pl(n,t),io(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Te)return Ge(n),null}else 2*ut()-c.renderingStartTime>ml&&a!==536870912&&(n.flags|=128,s=!0,io(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ut(),n.sibling=null,t=rn.current,Gt(rn,s?t&1|2:t&1),n):(Ge(n),null);case 22:case 23:return Ui(n),Yc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?a&536870912&&!(n.flags&128)&&(Ge(n),n.subtreeFlags&6&&(n.flags|=8192)):Ge(n),a=n.updateQueue,a!==null&&pl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Bt(ka),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Pi(sn),Ge(n),null;case 25:return null}throw Error(r(156,n.tag))}function cv(t,n){switch(kc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Pi(sn),re(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Wt(n),null;case 13:if(Ui(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Bs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Bt(rn),null;case 4:return re(),null;case 10:return Pi(n.type),null;case 22:case 23:return Ui(n),Yc(),t!==null&&Bt(ka),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Pi(sn),null;case 25:return null;default:return null}}function bm(t,n){switch(kc(n),n.tag){case 3:Pi(sn),re();break;case 26:case 27:case 5:Wt(n);break;case 4:re();break;case 13:Ui(n);break;case 19:Bt(rn);break;case 10:Pi(n.type);break;case 22:case 23:Ui(n),Yc(),t!==null&&Bt(ka);break;case 24:Pi(sn)}}var uv={getCacheForType:function(t){var n=Sn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},fv=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Be=null,de=null,Me=0,Fe=0,Vn=null,Hi=!1,Ir=!1,Gu=!1,Gi=0,We=0,ga=0,Ja=0,Vu=0,ei=0,Hr=0,ao=null,Mi=null,ku=!1,Xu=0,ml=1/0,gl=null,_a=null,_l=!1,$a=null,ro=0,Wu=0,qu=null,so=0,Yu=null;function kn(){if(Ve&2&&Me!==0)return Me&-Me;if(C.T!==null){var t=Ur;return t!==0?t:ef()}return bs()}function Am(){ei===0&&(ei=!(Me&536870912)||Te?tn():536870912);var t=Qn.current;return t!==null&&(t.flags|=32),ei}function wn(t,n,a){(t===Be&&Fe===2||t.cancelPendingCommit!==null)&&(Gr(t,0),Vi(t,Me,ei,!1)),bn(t,a),(!(Ve&2)||t!==Be)&&(t===Be&&(!(Ve&2)&&(Ja|=a),We===4&&Vi(t,Me,ei,!1)),yi(t))}function Rm(t,n,a){if(Ve&6)throw Error(r(327));var s=!a&&(n&60)===0&&(n&t.expiredLanes)===0||$t(t,n),c=s?pv(t,n):Qu(t,n,!0),f=s;do{if(c===0){Ir&&!s&&Vi(t,n,0,!1);break}else if(c===6)Vi(t,n,0,!Hi);else{if(a=t.current.alternate,f&&!hv(a)){c=Qu(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=t;c=ao;var N=T.current.memoizedState.isDehydrated;if(N&&(Gr(T,v).flags|=256),v=Qu(T,v,!1),v!==2){if(Gu&&!N){T.errorRecoveryDisabledLanes|=f,Ja|=f,c=4;break t}f=Mi,Mi=c,f!==null&&ju(f)}c=v}if(f=!1,c!==2)continue}}if(c===1){Gr(t,0),Vi(t,n,0,!0);break}t:{switch(s=t,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Vi(s,n,ei,!Hi);break t}break;case 2:Mi=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=Xu+300-ut(),10<f)){if(Vi(s,n,ei,!Hi),Ut(s,0)!==0)break t;s.timeoutHandle=Qm(Cm.bind(null,s,a,Mi,gl,ku,n,ei,Ja,Hr,Hi,2,-0,0),f);break t}Cm(s,a,Mi,gl,ku,n,ei,Ja,Hr,Hi,0,-0,0)}}break}while(!0);yi(t)}function ju(t){Mi===null?Mi=t:Mi.push.apply(Mi,t)}function Cm(t,n,a,s,c,f,v,T,N,V,lt,_t,et){var ot=n.subtreeFlags;if((ot&8192||(ot&16785408)===16785408)&&(ho={stylesheets:null,count:0,unsuspend:Yv},vm(n),n=Zv(),n!==null)){t.cancelPendingCommit=n(Pm.bind(null,t,a,s,c,v,T,N,1,_t,et)),Vi(t,f,v,!V);return}Pm(t,a,s,c,v,T,N,lt,_t,et)}function hv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!In(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Vi(t,n,a,s){n&=~Vu,n&=~Ja,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Kt(c),v=1<<f;s[f]=-1,c&=~v}a!==0&&Ts(t,a,n)}function vl(){return Ve&6?!0:(oo(0),!1)}function Zu(){if(de!==null){if(Fe===0)var t=de.return;else t=de,Oi=ja=null,eu(t),wr=null,Gs=0,t=de;for(;t!==null;)bm(t.alternate,t),t=t.return;de=null}}function Gr(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Uv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Zu(),Be=t,de=a=ma(t.current,null),Me=n,Fe=0,Vn=null,Hi=!1,Ir=$t(t,n),Gu=!1,Hr=ei=Vu=Ja=ga=We=0,Mi=ao=null,ku=!1,n&8&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Kt(s),f=1<<c;n|=t[c],s&=~f}return Gi=n,Vo(),a}function wm(t,n){ue=null,C.H=Si,n===Is?(n=Xd(),Fe=3):n===Gd?(n=Xd(),Fe=4):Fe=n===Vp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Vn=n,de===null&&(We=1,ll(t,jn(n,t.current)))}function Dm(){var t=C.H;return C.H=Si,t===null?Si:t}function Um(){var t=C.A;return C.A=uv,t}function Ku(){We=4,Hi||(Me&4194176)!==Me&&Qn.current!==null||(Ir=!0),!(ga&134217727)&&!(Ja&134217727)||Be===null||Vi(Be,Me,ei,!1)}function Qu(t,n,a){var s=Ve;Ve|=2;var c=Dm(),f=Um();(Be!==t||Me!==n)&&(gl=null,Gr(t,n)),n=!1;var v=We;t:do try{if(Fe!==0&&de!==null){var T=de,N=Vn;switch(Fe){case 8:Zu(),v=6;break t;case 3:case 2:case 6:Qn.current===null&&(n=!0);var V=Fe;if(Fe=0,Vn=null,Vr(t,T,N,V),a&&Ir){v=0;break t}break;default:V=Fe,Fe=0,Vn=null,Vr(t,T,N,V)}}dv(),v=We;break}catch(lt){wm(t,lt)}while(!0);return n&&t.shellSuspendCounter++,Oi=ja=null,Ve=s,C.H=c,C.A=f,de===null&&(Be=null,Me=0,Vo()),v}function dv(){for(;de!==null;)Lm(de)}function pv(t,n){var a=Ve;Ve|=2;var s=Dm(),c=Um();Be!==t||Me!==n?(gl=null,ml=ut()+500,Gr(t,n)):Ir=$t(t,n);t:do try{if(Fe!==0&&de!==null){n=de;var f=Vn;e:switch(Fe){case 1:Fe=0,Vn=null,Vr(t,n,f,1);break;case 2:if(Vd(f)){Fe=0,Vn=null,Nm(n);break}n=function(){Fe===2&&Be===t&&(Fe=7),yi(t)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Vd(f)?(Fe=0,Vn=null,Nm(n)):(Fe=0,Vn=null,Vr(t,n,f,7));break;case 5:var v=null;switch(de.tag){case 26:v=de.memoizedState;case 5:case 27:var T=de;if(!v||lg(v)){Fe=0,Vn=null;var N=T.sibling;if(N!==null)de=N;else{var V=T.return;V!==null?(de=V,xl(V)):de=null}break e}}Fe=0,Vn=null,Vr(t,n,f,5);break;case 6:Fe=0,Vn=null,Vr(t,n,f,6);break;case 8:Zu(),We=6;break t;default:throw Error(r(462))}}mv();break}catch(lt){wm(t,lt)}while(!0);return Oi=ja=null,C.H=s,C.A=c,Ve=a,de!==null?0:(Be=null,Me=0,Vo(),We)}function mv(){for(;de!==null&&!E();)Lm(de)}function Lm(t){var n=tm(t.alternate,t,Gi);t.memoizedProps=t.pendingProps,n===null?xl(t):de=n}function Nm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=jp(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=jp(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:eu(n);default:bm(a,n),n=de=ym(n,Gi),n=tm(a,n,Gi)}t.memoizedProps=t.pendingProps,n===null?xl(t):de=n}function Vr(t,n,a,s){Oi=ja=null,eu(n),wr=null,Gs=0;var c=n.return;try{if(iv(t,c,n,a,Me)){We=1,ll(t,jn(a,t.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;We=1,ll(t,jn(a,t.current)),de=null;return}n.flags&32768?(Te||s===1?t=!0:Ir||Me&536870912?t=!1:(Hi=t=!0,(s===2||s===3||s===6)&&(s=Qn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Om(n,t)):xl(n)}function xl(t){var n=t;do{if(n.flags&32768){Om(n,Hi);return}t=n.return;var a=lv(n.alternate,n,Gi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=t}while(n!==null);We===0&&(We=5)}function Om(t,n){do{var a=cv(t.alternate,t);if(a!==null){a.flags&=32767,de=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){de=t;return}de=t=a}while(t!==null);We=6,de=null}function Pm(t,n,a,s,c,f,v,T,N,V){var lt=C.T,_t=q.p;try{q.p=2,C.T=null,gv(t,n,a,s,_t,c,f,v,T,N,V)}finally{C.T=lt,q.p=_t}}function gv(t,n,a,s,c,f,v,T){do kr();while($a!==null);if(Ve&6)throw Error(r(327));var N=t.finishedWork;if(s=t.finishedLanes,N===null)return null;if(t.finishedWork=null,t.finishedLanes=0,N===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var V=N.lanes|N.childLanes;if(V|=Hc,Lo(t,s,V,f,v,T),t===Be&&(de=Be=null,Me=0),!(N.subtreeFlags&10256)&&!(N.flags&10256)||_l||(_l=!0,Wu=V,qu=a,Sv(Dt,function(){return kr(),null})),a=(N.flags&15990)!==0,N.subtreeFlags&15990||a?(a=C.T,C.T=null,f=q.p,q.p=2,v=Ve,Ve|=4,rv(t,N),mm(N,t),H0(uf,t.containerInfo),Ul=!!cf,uf=cf=null,t.current=N,fm(t,N.alternate,N),tt(),Ve=v,q.p=f,C.T=a):t.current=N,_l?(_l=!1,$a=t,ro=s):zm(t,V),V=t.pendingLanes,V===0&&(_a=null),It(N.stateNode),yi(t),n!==null)for(c=t.onRecoverableError,N=0;N<n.length;N++)V=n[N],c(V.value,{componentStack:V.stack});return ro&3&&kr(),V=t.pendingLanes,s&4194218&&V&42?t===Yu?so++:(so=0,Yu=t):so=0,oo(0),null}function zm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ks(n)))}function kr(){if($a!==null){var t=$a,n=Wu;Wu=0;var a=_r(ro),s=C.T,c=q.p;try{if(q.p=32>a?32:a,C.T=null,$a===null)var f=!1;else{a=qu,qu=null;var v=$a,T=ro;if($a=null,ro=0,Ve&6)throw Error(r(331));var N=Ve;if(Ve|=4,Sm(v.current),_m(v,v.current,T,a),Ve=N,oo(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(jt,v)}catch{}f=!0}return f}finally{q.p=c,C.T=s,zm(t,n)}}return!1}function Bm(t,n,a){n=jn(a,n),n=mu(t.stateNode,n,2),t=fa(t,n,2),t!==null&&(bn(t,2),yi(t))}function Pe(t,n,a){if(t.tag===3)Bm(t,t,a);else for(;n!==null;){if(n.tag===3){Bm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(_a===null||!_a.has(s))){t=jn(a,t),a=Hp(2),s=fa(n,a,2),s!==null&&(Gp(a,s,n,t),bn(s,2),yi(s));break}}n=n.return}}function Ju(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new fv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Gu=!0,c.add(a),t=_v.bind(null,t,n,a),n.then(t,t))}function _v(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Be===t&&(Me&a)===a&&(We===4||We===3&&(Me&62914560)===Me&&300>ut()-Xu?!(Ve&2)&&Gr(t,0):Vu|=a,Hr===Me&&(Hr=0)),yi(t)}function Fm(t,n){n===0&&(n=ye()),t=ia(t,n),t!==null&&(bn(t,n),yi(t))}function vv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Fm(t,a)}function xv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Fm(t,a)}function Sv(t,n){return qt(t,n)}var Sl=null,Xr=null,$u=!1,Ml=!1,tf=!1,tr=0;function yi(t){t!==Xr&&t.next===null&&(Xr===null?Sl=Xr=t:Xr=Xr.next=t),Ml=!0,$u||($u=!0,yv(Mv))}function oo(t,n){if(!tf&&Ml){tf=!0;do for(var a=!1,s=Sl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var v=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Kt(42|t)+1)-1,f&=c&~(v&~T),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,Gm(s,f))}else f=Me,f=Ut(s,s===Be?f:0),!(f&3)||$t(s,f)||(a=!0,Gm(s,f));s=s.next}while(a);tf=!1}}function Mv(){Ml=$u=!1;var t=0;tr!==0&&(Dv()&&(t=tr),tr=0);for(var n=ut(),a=null,s=Sl;s!==null;){var c=s.next,f=Im(s,n);f===0?(s.next=null,a===null?Sl=c:a.next=c,c===null&&(Xr=a)):(a=s,(t!==0||f&3)&&(Ml=!0)),s=c}oo(t)}function Im(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Kt(f),T=1<<v,N=c[v];N===-1?(!(T&a)||T&s)&&(c[v]=He(T,n)):N<=n&&(t.expiredLanes|=T),f&=~T}if(n=Be,a=Me,a=Ut(t,t===n?a:0),s=t.callbackNode,a===0||t===n&&Fe===2||t.cancelPendingCommit!==null)return s!==null&&s!==null&&D(s),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||$t(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&D(s),_r(a)){case 2:case 8:a=Vt;break;case 32:a=Dt;break;case 268435456:a=pe;break;default:a=Dt}return s=Hm.bind(null,t),a=qt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&D(s),t.callbackPriority=2,t.callbackNode=null,2}function Hm(t,n){var a=t.callbackNode;if(kr()&&t.callbackNode!==a)return null;var s=Me;return s=Ut(t,t===Be?s:0),s===0?null:(Rm(t,s,n),Im(t,ut()),t.callbackNode!=null&&t.callbackNode===a?Hm.bind(null,t):null)}function Gm(t,n){if(kr())return null;Rm(t,n,!0)}function yv(t){Lv(function(){Ve&6?qt(ft,t):t()})}function ef(){return tr===0&&(tr=tn()),tr}function Vm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Po(""+t)}function km(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Ev(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Vm((c[nn]||null).action),v=s.submitter;v&&(n=(n=v[nn]||null)?Vm(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new Io("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(tr!==0){var N=v?km(c,v):new FormData(c);uu(a,{pending:!0,data:N,method:c.method,action:f},null,N)}}else typeof f=="function"&&(T.preventDefault(),N=v?km(c,v):new FormData(c),uu(a,{pending:!0,data:N,method:c.method,action:f},f,N))},currentTarget:c}]})}}for(var nf=0;nf<Pd.length;nf++){var af=Pd[nf],Tv=af.toLowerCase(),bv=af[0].toUpperCase()+af.slice(1);oi(Tv,"on"+bv)}oi(Dd,"onAnimationEnd"),oi(Ud,"onAnimationIteration"),oi(Ld,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(V0,"onTransitionRun"),oi(k0,"onTransitionStart"),oi(X0,"onTransitionCancel"),oi(Nd,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),At("onBeforeInput",["compositionend","keypress","textInput","paste"]),At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Av=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lo));function Xm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var T=s[v],N=T.instance,V=T.currentTarget;if(T=T.listener,N!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=V;try{f(c)}catch(lt){ol(lt)}c.currentTarget=null,f=N}else for(v=0;v<s.length;v++){if(T=s[v],N=T.instance,V=T.currentTarget,T=T.listener,N!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=V;try{f(c)}catch(lt){ol(lt)}c.currentTarget=null,f=N}}}}function ve(t,n){var a=n[vr];a===void 0&&(a=n[vr]=new Set);var s=t+"__bubble";a.has(s)||(Wm(n,t,2,!1),a.add(s))}function rf(t,n,a){var s=0;n&&(s|=4),Wm(a,t,s,n)}var yl="_reactListening"+Math.random().toString(36).slice(2);function sf(t){if(!t[yl]){t[yl]=!0,Y.forEach(function(a){a!=="selectionchange"&&(Av.has(a)||rf(a,!1,t),rf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[yl]||(n[yl]=!0,rf("selectionchange",!1,n))}}function Wm(t,n,a,s){switch(pg(n)){case 2:var c=Jv;break;case 8:c=$v;break;default:c=xf}a=c.bind(null,n,a,t),c=void 0,!Rc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function of(t,n,a,s,c){var f=s;if(!(n&1)&&!(n&2)&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var T=s.stateNode.containerInfo;if(T===c||T.nodeType===8&&T.parentNode===c)break;if(v===4)for(v=s.return;v!==null;){var N=v.tag;if((N===3||N===4)&&(N=v.stateNode.containerInfo,N===c||N.nodeType===8&&N.parentNode===c))return;v=v.return}for(;T!==null;){if(v=Ci(T),v===null)return;if(N=v.tag,N===5||N===6||N===26||N===27){s=f=v;continue t}T=T.parentNode}}s=s.return}sd(function(){var V=f,lt=bc(a),_t=[];t:{var et=Od.get(t);if(et!==void 0){var ot=Io,Xt=t;switch(t){case"keypress":if(Bo(a)===0)break t;case"keydown":case"keyup":ot=x0;break;case"focusin":Xt="focus",ot=Uc;break;case"focusout":Xt="blur",ot=Uc;break;case"beforeblur":case"afterblur":ot=Uc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=o0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=y0;break;case Dd:case Ud:case Ld:ot=u0;break;case Nd:ot=T0;break;case"scroll":case"scrollend":ot=r0;break;case"wheel":ot=A0;break;case"copy":case"cut":case"paste":ot=h0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=fd;break;case"toggle":case"beforetoggle":ot=C0}var ie=(n&4)!==0,qe=!ie&&(t==="scroll"||t==="scrollend"),Z=ie?et!==null?et+"Capture":null:et;ie=[];for(var I=V,J;I!==null;){var pt=I;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||Z===null||(pt=Rs(I,Z),pt!=null&&ie.push(co(I,pt,J))),qe)break;I=I.return}0<ie.length&&(et=new ot(et,Xt,null,a,lt),_t.push({event:et,listeners:ie}))}}if(!(n&7)){t:{if(et=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",et&&a!==Tc&&(Xt=a.relatedTarget||a.fromElement)&&(Ci(Xt)||Xt[Ri]))break t;if((ot||et)&&(et=lt.window===lt?lt:(et=lt.ownerDocument)?et.defaultView||et.parentWindow:window,ot?(Xt=a.relatedTarget||a.toElement,ot=V,Xt=Xt?Ci(Xt):null,Xt!==null&&(qe=j(Xt),ie=Xt.tag,Xt!==qe||ie!==5&&ie!==27&&ie!==6)&&(Xt=null)):(ot=null,Xt=V),ot!==Xt)){if(ie=cd,pt="onMouseLeave",Z="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(ie=fd,pt="onPointerLeave",Z="onPointerEnter",I="pointer"),qe=ot==null?et:X(ot),J=Xt==null?et:X(Xt),et=new ie(pt,I+"leave",ot,a,lt),et.target=qe,et.relatedTarget=J,pt=null,Ci(lt)===V&&(ie=new ie(Z,I+"enter",Xt,a,lt),ie.target=J,ie.relatedTarget=qe,pt=ie),qe=pt,ot&&Xt)e:{for(ie=ot,Z=Xt,I=0,J=ie;J;J=Wr(J))I++;for(J=0,pt=Z;pt;pt=Wr(pt))J++;for(;0<I-J;)ie=Wr(ie),I--;for(;0<J-I;)Z=Wr(Z),J--;for(;I--;){if(ie===Z||Z!==null&&ie===Z.alternate)break e;ie=Wr(ie),Z=Wr(Z)}ie=null}else ie=null;ot!==null&&qm(_t,et,ot,ie,!1),Xt!==null&&qe!==null&&qm(_t,qe,Xt,ie,!0)}}t:{if(et=V?X(V):window,ot=et.nodeName&&et.nodeName.toLowerCase(),ot==="select"||ot==="input"&&et.type==="file")var Ht=xd;else if(_d(et))if(Sd)Ht=F0;else{Ht=z0;var he=P0}else ot=et.nodeName,!ot||ot.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?V&&Ec(V.elementType)&&(Ht=xd):Ht=B0;if(Ht&&(Ht=Ht(t,V))){vd(_t,Ht,a,lt);break t}he&&he(t,et,V),t==="focusout"&&V&&et.type==="number"&&V.memoizedProps.value!=null&&xn(et,"number",et.value)}switch(he=V?X(V):window,t){case"focusin":(_d(he)||he.contentEditable==="true")&&(Er=he,Bc=V,Ps=null);break;case"focusout":Ps=Bc=Er=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,Cd(_t,a,lt);break;case"selectionchange":if(G0)break;case"keydown":case"keyup":Cd(_t,a,lt)}var Yt;if(Nc)t:{switch(t){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else yr?md(t,a)&&(Jt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(hd&&a.locale!=="ko"&&(yr||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&yr&&(Yt=od()):(na=lt,Cc="value"in na?na.value:na.textContent,yr=!0)),he=El(V,Jt),0<he.length&&(Jt=new ud(Jt,t,null,a,lt),_t.push({event:Jt,listeners:he}),Yt?Jt.data=Yt:(Yt=gd(a),Yt!==null&&(Jt.data=Yt)))),(Yt=D0?U0(t,a):L0(t,a))&&(Jt=El(V,"onBeforeInput"),0<Jt.length&&(he=new ud("onBeforeInput","beforeinput",null,a,lt),_t.push({event:he,listeners:Jt}),he.data=Yt)),Ev(_t,t,V,a,lt)}Xm(_t,n)})}function co(t,n,a){return{instance:t,listener:n,currentTarget:a}}function El(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Rs(t,a),c!=null&&s.unshift(co(t,c,f)),c=Rs(t,n),c!=null&&s.push(co(t,c,f))),t=t.return}return s}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function qm(t,n,a,s,c){for(var f=n._reactName,v=[];a!==null&&a!==s;){var T=a,N=T.alternate,V=T.stateNode;if(T=T.tag,N!==null&&N===s)break;T!==5&&T!==26&&T!==27||V===null||(N=V,c?(V=Rs(a,f),V!=null&&v.unshift(co(a,V,N))):c||(V=Rs(a,f),V!=null&&v.push(co(a,V,N)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var Rv=/\r\n?/g,Cv=/\u0000|\uFFFD/g;function Ym(t){return(typeof t=="string"?t:""+t).replace(Rv,`
`).replace(Cv,"")}function jm(t,n){return n=Ym(n),Ym(t)===n}function Tl(){}function Le(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ln(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ln(t,""+s);break;case"className":Ie(t,"class",s);break;case"tabIndex":Ie(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(t,a,s);break;case"style":ad(t,s,f);break;case"data":if(n!=="object"){Ie(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Po(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Le(t,n,"name",c.name,c,null),Le(t,n,"formEncType",c.formEncType,c,null),Le(t,n,"formMethod",c.formMethod,c,null),Le(t,n,"formTarget",c.formTarget,c,null)):(Le(t,n,"encType",c.encType,c,null),Le(t,n,"method",c.method,c,null),Le(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Po(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Tl);break;case"onScroll":s!=null&&ve("scroll",t);break;case"onScrollEnd":s!=null&&ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Po(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ve("beforetoggle",t),ve("toggle",t),ge(t,"popover",s);break;case"xlinkActuate":Ee(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ee(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ee(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ee(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ee(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ee(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ge(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=i0.get(a)||a,ge(t,a,s))}}function lf(t,n,a,s,c,f){switch(a){case"style":ad(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ln(t,s):(typeof s=="number"||typeof s=="bigint")&&Ln(t,""+s);break;case"onScroll":s!=null&&ve("scroll",t);break;case"onScrollEnd":s!=null&&ve("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Tl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[nn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):ge(t,a,s)}}}function vn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",t),ve("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,f,v,a,null)}}c&&Le(t,n,"srcSet",a.srcSet,a,null),s&&Le(t,n,"src",a.src,a,null);return;case"input":ve("invalid",t);var T=f=v=c=null,N=null,V=null;for(s in a)if(a.hasOwnProperty(s)){var lt=a[s];if(lt!=null)switch(s){case"name":c=lt;break;case"type":v=lt;break;case"checked":N=lt;break;case"defaultChecked":V=lt;break;case"value":f=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:Le(t,n,s,lt,a,null)}}Rn(t,f,T,N,V,v,c,!1),_e(t);return;case"select":ve("invalid",t),s=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":s=T;default:Le(t,n,c,T,a,null)}n=f,a=v,t.multiple=!!s,n!=null?ke(t,!!s,n,!1):a!=null&&ke(t,!!s,a,!0);return;case"textarea":ve("invalid",t),f=c=s=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Le(t,n,v,T,a,null)}xr(t,s,c,f),_e(t);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Le(t,n,N,s,a,null)}return;case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":ve("load",t);break;case"video":case"audio":for(s=0;s<lo.length;s++)ve(lo[s],t);break;case"image":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"embed":case"source":case"link":ve("error",t),ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(s=a[V],s!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,V,s,a,null)}return;default:if(Ec(n)){for(lt in a)a.hasOwnProperty(lt)&&(s=a[lt],s!==void 0&&lf(t,n,lt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Le(t,n,T,s,a,null))}function wv(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,T=null,N=null,V=null,lt=null;for(ot in a){var _t=a[ot];if(a.hasOwnProperty(ot)&&_t!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":N=_t;default:s.hasOwnProperty(ot)||Le(t,n,ot,null,s,_t)}}for(var et in s){var ot=s[et];if(_t=a[et],s.hasOwnProperty(et)&&(ot!=null||_t!=null))switch(et){case"type":f=ot;break;case"name":c=ot;break;case"checked":V=ot;break;case"defaultChecked":lt=ot;break;case"value":v=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==_t&&Le(t,n,et,ot,s,_t)}}De(t,v,T,N,V,lt,f,c);return;case"select":ot=v=T=et=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":ot=N;default:s.hasOwnProperty(f)||Le(t,n,f,null,s,N)}for(c in s)if(f=s[c],N=a[c],s.hasOwnProperty(c)&&(f!=null||N!=null))switch(c){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==N&&Le(t,n,c,f,s,N)}n=T,a=v,s=ot,et!=null?ke(t,!!a,et,!1):!!s!=!!a&&(n!=null?ke(t,!!a,n,!0):ke(t,!!a,a?[]:"",!1));return;case"textarea":ot=et=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Le(t,n,T,null,s,c)}for(v in s)if(c=s[v],f=a[v],s.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":et=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Le(t,n,v,c,s,f)}mn(t,et,ot);return;case"option":for(var Xt in a)if(et=a[Xt],a.hasOwnProperty(Xt)&&et!=null&&!s.hasOwnProperty(Xt))switch(Xt){case"selected":t.selected=!1;break;default:Le(t,n,Xt,null,s,et)}for(N in s)if(et=s[N],ot=a[N],s.hasOwnProperty(N)&&et!==ot&&(et!=null||ot!=null))switch(N){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Le(t,n,N,et,s,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)et=a[ie],a.hasOwnProperty(ie)&&et!=null&&!s.hasOwnProperty(ie)&&Le(t,n,ie,null,s,et);for(V in s)if(et=s[V],ot=a[V],s.hasOwnProperty(V)&&et!==ot&&(et!=null||ot!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Le(t,n,V,et,s,ot)}return;default:if(Ec(n)){for(var qe in a)et=a[qe],a.hasOwnProperty(qe)&&et!==void 0&&!s.hasOwnProperty(qe)&&lf(t,n,qe,void 0,s,et);for(lt in s)et=s[lt],ot=a[lt],!s.hasOwnProperty(lt)||et===ot||et===void 0&&ot===void 0||lf(t,n,lt,et,s,ot);return}}for(var Z in a)et=a[Z],a.hasOwnProperty(Z)&&et!=null&&!s.hasOwnProperty(Z)&&Le(t,n,Z,null,s,et);for(_t in s)et=s[_t],ot=a[_t],!s.hasOwnProperty(_t)||et===ot||et==null&&ot==null||Le(t,n,_t,et,s,ot)}var cf=null,uf=null;function bl(t){return t.nodeType===9?t:t.ownerDocument}function Zm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Km(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ff(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hf=null;function Dv(){var t=window.event;return t&&t.type==="popstate"?t===hf?!1:(hf=t,!0):(hf=null,!1)}var Qm=typeof setTimeout=="function"?setTimeout:void 0,Uv=typeof clearTimeout=="function"?clearTimeout:void 0,Jm=typeof Promise=="function"?Promise:void 0,Lv=typeof queueMicrotask=="function"?queueMicrotask:typeof Jm<"u"?function(t){return Jm.resolve(null).then(t).catch(Nv)}:Qm;function Nv(t){setTimeout(function(){throw t})}function df(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(s===0){t.removeChild(c),vo(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=c}while(a);vo(n)}function pf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":pf(a),As(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ov(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Pa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function Pv(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function $m(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function tg(t,n,a){switch(n=bl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var ni=new Map,eg=new Set;function Al(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var ki=q.d;q.d={f:zv,r:Bv,D:Fv,C:Iv,L:Hv,m:Gv,X:kv,S:Vv,M:Xv};function zv(){var t=ki.f(),n=vl();return t||n}function Bv(t){var n=b(t);n!==null&&n.tag===5&&n.type==="form"?Cp(n):ki.r(t)}var qr=typeof document>"u"?null:document;function ng(t,n,a){var s=qr;if(s&&typeof n=="string"&&n){var c=cn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),eg.has(c)||(eg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),vn(n,"link",t),Q(n),s.head.appendChild(n)))}}function Fv(t){ki.D(t),ng("dns-prefetch",t,null)}function Iv(t,n){ki.C(t,n),ng("preconnect",t,n)}function Hv(t,n,a){ki.L(t,n,a);var s=qr;if(s&&t&&n){var c='link[rel="preload"][as="'+cn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+cn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+cn(a.imageSizes)+'"]')):c+='[href="'+cn(t)+'"]';var f=c;switch(n){case"style":f=Yr(t);break;case"script":f=jr(t)}ni.has(f)||(t=A({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ni.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(uo(f))||n==="script"&&s.querySelector(fo(f))||(n=s.createElement("link"),vn(n,"link",t),Q(n),s.head.appendChild(n)))}}function Gv(t,n){ki.m(t,n);var a=qr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+cn(s)+'"][href="'+cn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=jr(t)}if(!ni.has(f)&&(t=A({rel:"modulepreload",href:t},n),ni.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fo(f)))return}s=a.createElement("link"),vn(s,"link",t),Q(s),a.head.appendChild(s)}}}function Vv(t,n,a){ki.S(t,n,a);var s=qr;if(s&&t){var c=$(s).hoistableStyles,f=Yr(t);n=n||"default";var v=c.get(f);if(!v){var T={loading:0,preload:null};if(v=s.querySelector(uo(f)))T.loading=5;else{t=A({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ni.get(f))&&mf(t,a);var N=v=s.createElement("link");Q(N),vn(N,"link",t),N._p=new Promise(function(V,lt){N.onload=V,N.onerror=lt}),N.addEventListener("load",function(){T.loading|=1}),N.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Rl(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:T},c.set(f,v)}}}function kv(t,n){ki.X(t,n);var a=qr;if(a&&t){var s=$(a).hoistableScripts,c=jr(t),f=s.get(c);f||(f=a.querySelector(fo(c)),f||(t=A({src:t,async:!0},n),(n=ni.get(c))&&gf(t,n),f=a.createElement("script"),Q(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Xv(t,n){ki.M(t,n);var a=qr;if(a&&t){var s=$(a).hoistableScripts,c=jr(t),f=s.get(c);f||(f=a.querySelector(fo(c)),f||(t=A({src:t,async:!0,type:"module"},n),(n=ni.get(c))&&gf(t,n),f=a.createElement("script"),Q(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function ig(t,n,a,s){var c=(c=Re.current)?Al(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Yr(a.href),a=$(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Yr(a.href);var f=$(c).hoistableStyles,v=f.get(t);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=c.querySelector(uo(t)))&&!f._p&&(v.instance=f,v.state.loading=5),ni.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ni.set(t,a),f||Wv(c,t,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=jr(a),a=$(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Yr(t){return'href="'+cn(t)+'"'}function uo(t){return'link[rel="stylesheet"]['+t+"]"}function ag(t){return A({},t,{"data-precedence":t.precedence,precedence:null})}function Wv(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),vn(n,"link",a),Q(n),t.head.appendChild(n))}function jr(t){return'[src="'+cn(t)+'"]'}function fo(t){return"script[async]"+t}function rg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+cn(a.href)+'"]');if(s)return n.instance=s,Q(s),s;var c=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Q(s),vn(s,"style",c),Rl(s,a.precedence,t),n.instance=s;case"stylesheet":c=Yr(a.href);var f=t.querySelector(uo(c));if(f)return n.state.loading|=4,n.instance=f,Q(f),f;s=ag(a),(c=ni.get(c))&&mf(s,c),f=(t.ownerDocument||t).createElement("link"),Q(f);var v=f;return v._p=new Promise(function(T,N){v.onload=T,v.onerror=N}),vn(f,"link",s),n.state.loading|=4,Rl(f,a.precedence,t),n.instance=f;case"script":return f=jr(a.src),(c=t.querySelector(fo(f)))?(n.instance=c,Q(c),c):(s=a,(c=ni.get(f))&&(s=A({},a),gf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Q(c),vn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(s=n.instance,n.state.loading|=4,Rl(s,a.precedence,t));return n.instance}function Rl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,v=0;v<s.length;v++){var T=s[v];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Cl=null;function sg(t,n,a){if(Cl===null){var s=new Map,c=Cl=new Map;c.set(a,s)}else c=Cl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Pa]||f[en]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var T=s.get(v);T?T.push(f):s.set(v,[f])}}return s}function og(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function qv(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function lg(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var ho=null;function Yv(){}function jv(t,n,a){if(ho===null)throw Error(r(475));var s=ho;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=Yr(a.href),f=t.querySelector(uo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=wl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,Q(f);return}f=t.ownerDocument||t,a=ag(a),(c=ni.get(c))&&mf(a,c),f=f.createElement("link"),Q(f);var v=f;v._p=new Promise(function(T,N){v.onload=T,v.onerror=N}),vn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(s.count++,n=wl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function Zv(){if(ho===null)throw Error(r(475));var t=ho;return t.stylesheets&&t.count===0&&_f(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&_f(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function wl(){if(this.count--,this.count===0){if(this.stylesheets)_f(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Dl=null;function _f(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Dl=new Map,n.forEach(Kv,t),Dl=null,wl.call(t))}function Kv(t,n){if(!(n.state.loading&4)){var a=Dl.get(t);if(a)var s=a.get(null);else{a=new Map,Dl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,c),a.set(v,c),this.count++,s=wl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var po={$$typeof:y,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function Qv(t,n,a,s,c,f,v,T){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tn(0),this.hiddenUpdates=Tn(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function cg(t,n,a,s,c,f,v,T,N,V,lt,_t){return t=new Qv(t,n,a,v,T,N,V,_t),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),t.current=f,f.stateNode=t,n=jc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Cu(f),t}function ug(t){return t?(t=Ar,t):Ar}function fg(t,n,a,s,c,f){c=ug(c),s.context===null?s.context=c:s.pendingContext=c,s=ua(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=fa(t,s,n),a!==null&&(wn(a,t,n),Ks(a,t,n))}function hg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function vf(t,n){hg(t,n),(t=t.alternate)&&hg(t,n)}function dg(t){if(t.tag===13){var n=ia(t,67108864);n!==null&&wn(n,t,67108864),vf(t,67108864)}}var Ul=!0;function Jv(t,n,a,s){var c=C.T;C.T=null;var f=q.p;try{q.p=2,xf(t,n,a,s)}finally{q.p=f,C.T=c}}function $v(t,n,a,s){var c=C.T;C.T=null;var f=q.p;try{q.p=8,xf(t,n,a,s)}finally{q.p=f,C.T=c}}function xf(t,n,a,s){if(Ul){var c=Sf(s);if(c===null)of(t,n,s,Ll,a),mg(t,s);else if(ex(c,t,n,a,s))s.stopPropagation();else if(mg(t,s),n&4&&-1<tx.indexOf(t)){for(;c!==null;){var f=b(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=wt(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var N=1<<31-Kt(v);T.entanglements[1]|=N,v&=~N}yi(f),!(Ve&6)&&(ml=ut()+500,oo(0))}}break;case 13:T=ia(f,2),T!==null&&wn(T,f,2),vl(),vf(f,2)}if(f=Sf(s),f===null&&of(t,n,s,Ll,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else of(t,n,s,null,a)}}function Sf(t){return t=bc(t),Mf(t)}var Ll=null;function Mf(t){if(Ll=null,t=Ci(t),t!==null){var n=j(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=St(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ll=t,null}function pg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case ft:return 2;case Vt:return 8;case Dt:case zt:return 32;case pe:return 268435456;default:return 32}default:return 32}}var yf=!1,va=null,xa=null,Sa=null,mo=new Map,go=new Map,Ma=[],tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mg(t,n){switch(t){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":xa=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(n.pointerId)}}function _o(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=b(n),n!==null&&dg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function ex(t,n,a,s,c){switch(n){case"focusin":return va=_o(va,t,n,a,s,c),!0;case"dragenter":return xa=_o(xa,t,n,a,s,c),!0;case"mouseover":return Sa=_o(Sa,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return mo.set(f,_o(mo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,go.set(f,_o(go.get(f)||null,t,n,a,s,c)),!0}return!1}function gg(t){var n=Ci(t.target);if(n!==null){var a=j(n);if(a!==null){if(n=a.tag,n===13){if(n=St(a),n!==null){t.blockedOn=n,No(t.priority,function(){if(a.tag===13){var s=kn(),c=ia(a,s);c!==null&&wn(c,a,s),vf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Sf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Tc=s,a.target.dispatchEvent(s),Tc=null}else return n=b(a),n!==null&&dg(n),t.blockedOn=a,!1;n.shift()}return!0}function _g(t,n,a){Nl(t)&&a.delete(n)}function nx(){yf=!1,va!==null&&Nl(va)&&(va=null),xa!==null&&Nl(xa)&&(xa=null),Sa!==null&&Nl(Sa)&&(Sa=null),mo.forEach(_g),go.forEach(_g)}function Ol(t,n){t.blockedOn===n&&(t.blockedOn=null,yf||(yf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,nx)))}var Pl=null;function vg(t){Pl!==t&&(Pl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Pl===t&&(Pl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Mf(s||a)===null)continue;break}var f=b(a);f!==null&&(t.splice(n,3),n-=3,uu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function vo(t){function n(N){return Ol(N,t)}va!==null&&Ol(va,t),xa!==null&&Ol(xa,t),Sa!==null&&Ol(Sa,t),mo.forEach(n),go.forEach(n);for(var a=0;a<Ma.length;a++){var s=Ma[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)gg(a),a.blockedOn===null&&Ma.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],v=c[nn]||null;if(typeof f=="function")v||vg(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[nn]||null)T=v.formAction;else if(Mf(c)!==null)continue}else T=v.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),vg(a)}}}function Ef(t){this._internalRoot=t}zl.prototype.render=Ef.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=kn();fg(a,s,t,n,null,null)},zl.prototype.unmount=Ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&kr(),fg(t.current,2,null,t,null,null),vl(),n[Ri]=null}};function zl(t){this._internalRoot=t}zl.prototype.unstable_scheduleHydration=function(t){if(t){var n=bs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ma.length&&n!==0&&n<Ma[a].priority;a++);Ma.splice(a,0,t),a===0&&gg(t)}};var xg=e.version;if(xg!=="19.0.0")throw Error(r(527,xg,"19.0.0"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=nt(n),t=t!==null?Et(t):null,t=t===null?null:t.stateNode,t};var ix={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:C,findFiberByHostInstance:Ci,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{jt=Bl.inject(ix),kt=Bl}catch{}}return So.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=zp,f=Bp,v=Fp,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=cg(t,1,!1,null,null,a,s,c,f,v,T,null),t[Ri]=n.current,sf(t.nodeType===8?t.parentNode:t),new Ef(n)},So.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=zp,v=Bp,T=Fp,N=null,V=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(V=a.formState)),n=cg(t,1,!0,n,a??null,s,c,f,v,T,N,V),n.context=ug(null),a=n.current,s=kn(),c=ua(s),c.callback=null,fa(a,c,s),n.current.lanes=s,bn(n,s),yi(n),t[Ri]=n.current,sf(t),new zl(n)},So.version="19.0.0",So}var wg;function dx(){if(wg)return Af.exports;wg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Af.exports=hx(),Af.exports}var px=dx();function mx({onPageChange:o}){return bt.jsx(bt.Fragment,{children:bt.jsxs("nav",{id:"navigation",children:[bt.jsx("br",{}),bt.jsx("button",{onClick:()=>o(1),children:"ABOUT ME"}),bt.jsx("button",{onClick:()=>o(2),children:"SKILLSETS"}),bt.jsx("button",{onClick:()=>o(3),children:"PORTFOLIO"}),bt.jsx("button",{onClick:()=>o(4),children:"CONTACT"}),bt.jsx("br",{})]})})}const gx=({toggle:o})=>o?bt.jsx("div",{className:"sidebar",children:bt.jsxs("ul",{children:[bt.jsx("li",{children:"📄 Graphics Programming"}),bt.jsx("li",{children:"📄 C/C++"}),bt.jsx("li",{children:"📄 JavaScript"}),bt.jsx("li",{children:"📄 .NET Framework"}),bt.jsx("li",{children:"📄 Go Programming Language"}),bt.jsx("li",{children:"📄 Networking"}),bt.jsx("li",{children:"📄 Embedded Systems"}),bt.jsx("li",{children:"📄 Assembly Language"}),bt.jsx("li",{children:"📄 Linux"}),bt.jsx("li",{children:bt.jsx("a",{href:"https://valiantinteractive.itch.io/",children:"📂 Game Development"})})]})}):null;function gc({title:o,content:e,toggleSidebar:i,onPageChange:r}){return bt.jsxs("div",{className:"content-window",children:[bt.jsxs("div",{className:"title-bar",children:[bt.jsx("span",{className:"title-text",children:o}),bt.jsx("div",{className:"title-buttons",children:bt.jsx("button",{onClick:()=>r(0),children:"X"})})]}),bt.jsxs("div",{className:"menu-bar",children:[bt.jsx("button",{children:"Contents"}),bt.jsx("button",{children:"Index"}),bt.jsx("button",{children:"Search"}),bt.jsx("button",{children:"Web Help"})]}),bt.jsxs("div",{className:"main-content",children:[bt.jsx(gx,{toggle:i}),bt.jsx("div",{className:"content-area",style:{width:i?"60%":"100%",transition:"width 0.3s ease"},children:e})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jh="172",_x=0,Dg=1,vx=2,b_=1,xx=2,Zi=3,Na=0,zn=1,Ki=2,Ua=0,fs=1,Ug=2,Lg=3,Ng=4,Sx=5,cr=100,Mx=101,yx=102,Ex=103,Tx=104,bx=200,Ax=201,Rx=202,Cx=203,sh=204,oh=205,wx=206,Dx=207,Ux=208,Lx=209,Nx=210,Ox=211,Px=212,zx=213,Bx=214,lh=0,ch=1,uh=2,ps=3,fh=4,hh=5,dh=6,ph=7,A_=0,Fx=1,Ix=2,La=0,Hx=1,Gx=2,Vx=3,kx=4,Xx=5,Wx=6,qx=7,R_=300,ms=301,gs=302,mh=303,gh=304,_c=306,_h=1e3,fr=1001,vh=1002,gi=1003,Yx=1004,Fl=1005,Ti=1006,Df=1007,hr=1008,ta=1009,C_=1010,w_=1011,Ro=1012,Zh=1013,pr=1014,Qi=1015,Co=1016,Kh=1017,Qh=1018,_s=1020,D_=35902,U_=1021,L_=1022,mi=1023,N_=1024,O_=1025,hs=1026,vs=1027,P_=1028,Jh=1029,z_=1030,$h=1031,td=1033,sc=33776,oc=33777,lc=33778,cc=33779,xh=35840,Sh=35841,Mh=35842,yh=35843,Eh=36196,Th=37492,bh=37496,Ah=37808,Rh=37809,Ch=37810,wh=37811,Dh=37812,Uh=37813,Lh=37814,Nh=37815,Oh=37816,Ph=37817,zh=37818,Bh=37819,Fh=37820,Ih=37821,uc=36492,Hh=36494,Gh=36495,B_=36283,Vh=36284,kh=36285,Xh=36286,jx=3200,Zx=3201,Kx=0,Qx=1,Da="",ai="srgb",xs="srgb-linear",dc="linear",Ne="srgb",Zr=7680,Og=519,Jx=512,$x=513,tS=514,F_=515,eS=516,nS=517,iS=518,aS=519,Pg=35044,zg="300 es",Ji=2e3,pc=2001;class Ms{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uf=Math.PI/180,Wh=180/Math.PI;function wo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[o&255]+yn[o>>8&255]+yn[o>>16&255]+yn[o>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[i&63|128]+yn[i>>8&255]+"-"+yn[i>>16&255]+yn[i>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function xe(o,e,i){return Math.max(e,Math.min(i,o))}function rS(o,e){return(o%e+e)%e}function Lf(o,e,i){return(1-i)*o+i*e}function Mo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,i=0){ze.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(e,i,r,l,u,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],x=r[7],S=r[2],y=r[5],R=r[8],w=l[0],M=l[3],g=l[6],P=l[1],O=l[4],L=l[7],G=l[2],H=l[5],B=l[8];return u[0]=h*w+d*P+m*G,u[3]=h*M+d*O+m*H,u[6]=h*g+d*L+m*B,u[1]=p*w+_*P+x*G,u[4]=p*M+_*O+x*H,u[7]=p*g+_*L+x*B,u[2]=S*w+y*P+R*G,u[5]=S*M+y*O+R*H,u[8]=S*g+y*L+R*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-r*u*_+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],x=_*h-d*p,S=d*m-_*u,y=p*u-h*m,R=i*x+r*S+l*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=x*w,e[1]=(l*p-_*r)*w,e[2]=(d*r-l*h)*w,e[3]=S*w,e[4]=(_*i-l*m)*w,e[5]=(l*u-d*i)*w,e[6]=y*w,e[7]=(r*m-p*i)*w,e[8]=(h*i-r*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Nf.makeScale(e,i)),this}rotate(e){return this.premultiply(Nf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Nf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nf=new oe;function I_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function mc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function sS(){const o=mc("canvas");return o.style.display="block",o}const Bg={};function cs(o){o in Bg||(Bg[o]=!0,console.warn(o))}function oS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function lS(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cS(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fg=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ig=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uS(){const o={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ne&&(l.r=$i(l.r),l.g=$i(l.g),l.b=$i(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ne&&(l.r=ds(l.r),l.g=ds(l.g),l.b=ds(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Da?dc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[xs]:{primaries:e,whitePoint:r,transfer:dc,toXYZ:Fg,fromXYZ:Ig,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:Ne,toXYZ:Fg,fromXYZ:Ig,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),o}const Ae=uS();function $i(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ds(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Kr;class fS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Kr===void 0&&(Kr=mc("canvas")),Kr.width=e.width,Kr.height=e.height;const r=Kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Kr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=mc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=$i(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor($i(i[r]/255)*255):i[r]=$i(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hS=0;class H_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Of(l[h].image)):u.push(Of(l[h]))}else u=Of(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Of(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?fS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dS=0;class Bn extends Ms{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=fr,l=fr,u=Ti,h=hr,d=mi,m=ta,p=Bn.DEFAULT_ANISOTROPY,_=Da){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=wo(),this.name="",this.source=new H_(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==R_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _h:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _h:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=R_;Bn.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,i=0,r=0,l=1){je.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],_=m[4],x=m[8],S=m[1],y=m[5],R=m[9],w=m[2],M=m[6],g=m[10];if(Math.abs(_-S)<.01&&Math.abs(x-w)<.01&&Math.abs(R-M)<.01){if(Math.abs(_+S)<.1&&Math.abs(x+w)<.1&&Math.abs(R+M)<.1&&Math.abs(p+y+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,L=(y+1)/2,G=(g+1)/2,H=(_+S)/4,B=(x+w)/4,K=(R+M)/4;return O>L&&O>G?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=H/r,u=B/r):L>G?L<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),r=H/l,u=K/l):G<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(G),r=B/u,l=K/u),this.set(r,l,u,i),this}let P=Math.sqrt((M-R)*(M-R)+(x-w)*(x-w)+(S-_)*(S-_));return Math.abs(P)<.001&&(P=1),this.x=(M-R)/P,this.y=(x-w)/P,this.z=(S-_)/P,this.w=Math.acos((p+y+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this.w=xe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this.w=xe(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pS extends Ms{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new je(0,0,e,i),this.scissorTest=!1,this.viewport=new je(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Bn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const i=Object.assign({},e.texture.image);return this.texture.source=new H_(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends pS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class G_ extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mS extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],x=r[l+3];const S=u[h+0],y=u[h+1],R=u[h+2],w=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=x;return}if(d===1){e[i+0]=S,e[i+1]=y,e[i+2]=R,e[i+3]=w;return}if(x!==w||m!==S||p!==y||_!==R){let M=1-d;const g=m*S+p*y+_*R+x*w,P=g>=0?1:-1,O=1-g*g;if(O>Number.EPSILON){const G=Math.sqrt(O),H=Math.atan2(G,g*P);M=Math.sin(M*H)/G,d=Math.sin(d*H)/G}const L=d*P;if(m=m*M+S*L,p=p*M+y*L,_=_*M+R*L,x=x*M+w*L,M===1-d){const G=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=G,p*=G,_*=G,x*=G}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],x=u[h],S=u[h+1],y=u[h+2],R=u[h+3];return e[i]=d*R+_*x+m*y-p*S,e[i+1]=m*R+_*S+p*x-d*y,e[i+2]=p*R+_*y+d*S-m*x,e[i+3]=_*R-d*x-m*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),x=d(u/2),S=m(r/2),y=m(l/2),R=m(u/2);switch(h){case"XYZ":this._x=S*_*x+p*y*R,this._y=p*y*x-S*_*R,this._z=p*_*R+S*y*x,this._w=p*_*x-S*y*R;break;case"YXZ":this._x=S*_*x+p*y*R,this._y=p*y*x-S*_*R,this._z=p*_*R-S*y*x,this._w=p*_*x+S*y*R;break;case"ZXY":this._x=S*_*x-p*y*R,this._y=p*y*x+S*_*R,this._z=p*_*R+S*y*x,this._w=p*_*x-S*y*R;break;case"ZYX":this._x=S*_*x-p*y*R,this._y=p*y*x+S*_*R,this._z=p*_*R-S*y*x,this._w=p*_*x+S*y*R;break;case"YZX":this._x=S*_*x+p*y*R,this._y=p*y*x+S*_*R,this._z=p*_*R-S*y*x,this._w=p*_*x-S*y*R;break;case"XZY":this._x=S*_*x-p*y*R,this._y=p*y*x-S*_*R,this._z=p*_*R+S*y*x,this._w=p*_*x+S*y*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],x=i[10],S=r+d+x;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(r>d&&r>x){const y=2*Math.sqrt(1+r-d-x);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-r-x);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+x-r-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-r*p,this._z=u*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),x=Math.sin((1-i)*_)/p,S=Math.sin(i*_)/p;return this._w=h*x+this._w*S,this._x=r*x+this._x*S,this._y=l*x+this._y*S,this._z=u*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Hg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Hg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),_=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+m*p+h*x-d*_,this.y=r+m*_+d*p-u*x,this.z=l+m*x+u*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Pf.copy(this).projectOnVector(e),this.sub(Pf)}reflect(e){return this.sub(Pf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pf=new rt,Hg=new Do;class Uo{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(fi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(fi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=fi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,fi):fi.fromBufferAttribute(u,h),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Il.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Il.copy(r.boundingBox)),Il.applyMatrix4(e.matrixWorld),this.union(Il)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),Hl.subVectors(this.max,yo),Qr.subVectors(e.a,yo),Jr.subVectors(e.b,yo),$r.subVectors(e.c,yo),Ea.subVectors(Jr,Qr),Ta.subVectors($r,Jr),er.subVectors(Qr,$r);let i=[0,-Ea.z,Ea.y,0,-Ta.z,Ta.y,0,-er.z,er.y,Ea.z,0,-Ea.x,Ta.z,0,-Ta.x,er.z,0,-er.x,-Ea.y,Ea.x,0,-Ta.y,Ta.x,0,-er.y,er.x,0];return!zf(i,Qr,Jr,$r,Hl)||(i=[1,0,0,0,1,0,0,0,1],!zf(i,Qr,Jr,$r,Hl))?!1:(Gl.crossVectors(Ea,Ta),i=[Gl.x,Gl.y,Gl.z],zf(i,Qr,Jr,$r,Hl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],fi=new rt,Il=new Uo,Qr=new rt,Jr=new rt,$r=new rt,Ea=new rt,Ta=new rt,er=new rt,yo=new rt,Hl=new rt,Gl=new rt,nr=new rt;function zf(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){nr.fromArray(o,u);const d=l.x*Math.abs(nr.x)+l.y*Math.abs(nr.y)+l.z*Math.abs(nr.z),m=e.dot(nr),p=i.dot(nr),_=r.dot(nr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const gS=new Uo,Eo=new rt,Bf=new rt;class ed{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):gS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);const i=Eo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Eo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(Bf)),this.expandByPoint(Eo.copy(e.center).sub(Bf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wi=new rt,Ff=new rt,Vl=new rt,ba=new rt,If=new rt,kl=new rt,Hf=new rt;class _S{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Wi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,i),Wi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Ff.copy(e).add(i).multiplyScalar(.5),Vl.copy(i).sub(e).normalize(),ba.copy(this.origin).sub(Ff);const u=e.distanceTo(i)*.5,h=-this.direction.dot(Vl),d=ba.dot(this.direction),m=-ba.dot(Vl),p=ba.lengthSq(),_=Math.abs(1-h*h);let x,S,y,R;if(_>0)if(x=h*m-d,S=h*d-m,R=u*_,x>=0)if(S>=-R)if(S<=R){const w=1/_;x*=w,S*=w,y=x*(x+h*S+2*d)+S*(h*x+S+2*m)+p}else S=u,x=Math.max(0,-(h*S+d)),y=-x*x+S*(S+2*m)+p;else S=-u,x=Math.max(0,-(h*S+d)),y=-x*x+S*(S+2*m)+p;else S<=-R?(x=Math.max(0,-(-h*u+d)),S=x>0?-u:Math.min(Math.max(-u,-m),u),y=-x*x+S*(S+2*m)+p):S<=R?(x=0,S=Math.min(Math.max(-u,-m),u),y=S*(S+2*m)+p):(x=Math.max(0,-(h*u+d)),S=x>0?u:Math.min(Math.max(-u,-m),u),y=-x*x+S*(S+2*m)+p);else S=h>0?-u:u,x=Math.max(0,-(h*S+d)),y=-x*x+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Ff).addScaledVector(Vl,S),y}intersectSphere(e,i){Wi.subVectors(e.center,this.origin);const r=Wi.dot(this.direction),l=Wi.dot(Wi)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),_>=0?(u=(e.min.y-S.y)*_,h=(e.max.y-S.y)*_):(u=(e.max.y-S.y)*_,h=(e.min.y-S.y)*_),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-S.z)*x,m=(e.max.z-S.z)*x):(d=(e.max.z-S.z)*x,m=(e.min.z-S.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,i,r,l,u){If.subVectors(i,e),kl.subVectors(r,e),Hf.crossVectors(If,kl);let h=this.direction.dot(Hf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ba.subVectors(this.origin,e);const m=d*this.direction.dot(kl.crossVectors(ba,kl));if(m<0)return null;const p=d*this.direction.dot(If.cross(ba));if(p<0||m+p>h)return null;const _=-d*ba.dot(Hf);return _<0?null:this.at(_/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,i,r,l,u,h,d,m,p,_,x,S,y,R,w,M){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,_,x,S,y,R,w,M)}set(e,i,r,l,u,h,d,m,p,_,x,S,y,R,w,M){const g=this.elements;return g[0]=e,g[4]=i,g[8]=r,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=x,g[14]=S,g[3]=y,g[7]=R,g[11]=w,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ts.setFromMatrixColumn(e,0).length(),u=1/ts.setFromMatrixColumn(e,1).length(),h=1/ts.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const S=h*_,y=h*x,R=d*_,w=d*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=y+R*p,i[5]=S-w*p,i[9]=-d*m,i[2]=w-S*p,i[6]=R+y*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*_,y=m*x,R=p*_,w=p*x;i[0]=S+w*d,i[4]=R*d-y,i[8]=h*p,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=y*d-R,i[6]=w+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*_,y=m*x,R=p*_,w=p*x;i[0]=S-w*d,i[4]=-h*x,i[8]=R+y*d,i[1]=y+R*d,i[5]=h*_,i[9]=w-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*_,y=h*x,R=d*_,w=d*x;i[0]=m*_,i[4]=R*p-y,i[8]=S*p+w,i[1]=m*x,i[5]=w*p+S,i[9]=y*p-R,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,y=h*p,R=d*m,w=d*p;i[0]=m*_,i[4]=w-S*x,i[8]=R*x+y,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*x+R,i[10]=S-w*x}else if(e.order==="XZY"){const S=h*m,y=h*p,R=d*m,w=d*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=S*x+w,i[5]=h*_,i[9]=y*x-R,i[2]=R*x-y,i[6]=d*_,i[10]=w*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vS,e,xS)}lookAt(e,i,r){const l=this.elements;return Xn.subVectors(e,i),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Aa.crossVectors(r,Xn),Aa.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Aa.crossVectors(r,Xn)),Aa.normalize(),Xl.crossVectors(Xn,Aa),l[0]=Aa.x,l[4]=Xl.x,l[8]=Xn.x,l[1]=Aa.y,l[5]=Xl.y,l[9]=Xn.y,l[2]=Aa.z,l[6]=Xl.z,l[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],x=r[5],S=r[9],y=r[13],R=r[2],w=r[6],M=r[10],g=r[14],P=r[3],O=r[7],L=r[11],G=r[15],H=l[0],B=l[4],K=l[8],C=l[12],A=l[1],F=l[5],ct=l[9],it=l[13],mt=l[2],ht=l[6],W=l[10],at=l[14],j=l[3],St=l[7],U=l[11],nt=l[15];return u[0]=h*H+d*A+m*mt+p*j,u[4]=h*B+d*F+m*ht+p*St,u[8]=h*K+d*ct+m*W+p*U,u[12]=h*C+d*it+m*at+p*nt,u[1]=_*H+x*A+S*mt+y*j,u[5]=_*B+x*F+S*ht+y*St,u[9]=_*K+x*ct+S*W+y*U,u[13]=_*C+x*it+S*at+y*nt,u[2]=R*H+w*A+M*mt+g*j,u[6]=R*B+w*F+M*ht+g*St,u[10]=R*K+w*ct+M*W+g*U,u[14]=R*C+w*it+M*at+g*nt,u[3]=P*H+O*A+L*mt+G*j,u[7]=P*B+O*F+L*ht+G*St,u[11]=P*K+O*ct+L*W+G*U,u[15]=P*C+O*it+L*at+G*nt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],x=e[6],S=e[10],y=e[14],R=e[3],w=e[7],M=e[11],g=e[15];return R*(+u*m*x-l*p*x-u*d*S+r*p*S+l*d*y-r*m*y)+w*(+i*m*y-i*p*S+u*h*S-l*h*y+l*p*_-u*m*_)+M*(+i*p*x-i*d*y-u*h*x+r*h*y+u*d*_-r*p*_)+g*(-l*d*_-i*m*x+i*d*S+l*h*x-r*h*S+r*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],x=e[9],S=e[10],y=e[11],R=e[12],w=e[13],M=e[14],g=e[15],P=x*M*p-w*S*p+w*m*y-d*M*y-x*m*g+d*S*g,O=R*S*p-_*M*p-R*m*y+h*M*y+_*m*g-h*S*g,L=_*w*p-R*x*p+R*d*y-h*w*y-_*d*g+h*x*g,G=R*x*m-_*w*m-R*d*S+h*w*S+_*d*M-h*x*M,H=i*P+r*O+l*L+u*G;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return e[0]=P*B,e[1]=(w*S*u-x*M*u-w*l*y+r*M*y+x*l*g-r*S*g)*B,e[2]=(d*M*u-w*m*u+w*l*p-r*M*p-d*l*g+r*m*g)*B,e[3]=(x*m*u-d*S*u-x*l*p+r*S*p+d*l*y-r*m*y)*B,e[4]=O*B,e[5]=(_*M*u-R*S*u+R*l*y-i*M*y-_*l*g+i*S*g)*B,e[6]=(R*m*u-h*M*u-R*l*p+i*M*p+h*l*g-i*m*g)*B,e[7]=(h*S*u-_*m*u+_*l*p-i*S*p-h*l*y+i*m*y)*B,e[8]=L*B,e[9]=(R*x*u-_*w*u-R*r*y+i*w*y+_*r*g-i*x*g)*B,e[10]=(h*w*u-R*d*u+R*r*p-i*w*p-h*r*g+i*d*g)*B,e[11]=(_*d*u-h*x*u-_*r*p+i*x*p+h*r*y-i*d*y)*B,e[12]=G*B,e[13]=(_*w*l-R*x*l+R*r*S-i*w*S-_*r*M+i*x*M)*B,e[14]=(R*d*l-h*w*l-R*r*m+i*w*m+h*r*M-i*d*M)*B,e[15]=(h*x*l-_*d*l+_*r*m-i*x*m-h*r*S+i*d*S)*B,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,_=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,x=d+d,S=u*p,y=u*_,R=u*x,w=h*_,M=h*x,g=d*x,P=m*p,O=m*_,L=m*x,G=r.x,H=r.y,B=r.z;return l[0]=(1-(w+g))*G,l[1]=(y+L)*G,l[2]=(R-O)*G,l[3]=0,l[4]=(y-L)*H,l[5]=(1-(S+g))*H,l[6]=(M+P)*H,l[7]=0,l[8]=(R+O)*B,l[9]=(M-P)*B,l[10]=(1-(S+w))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ts.set(l[0],l[1],l[2]).length();const h=ts.set(l[4],l[5],l[6]).length(),d=ts.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],hi.copy(this);const p=1/u,_=1/h,x=1/d;return hi.elements[0]*=p,hi.elements[1]*=p,hi.elements[2]*=p,hi.elements[4]*=_,hi.elements[5]*=_,hi.elements[6]*=_,hi.elements[8]*=x,hi.elements[9]*=x,hi.elements[10]*=x,i.setFromRotationMatrix(hi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=Ji){const m=this.elements,p=2*u/(i-e),_=2*u/(r-l),x=(i+e)/(i-e),S=(r+l)/(r-l);let y,R;if(d===Ji)y=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===pc)y=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=Ji){const m=this.elements,p=1/(i-e),_=1/(r-l),x=1/(h-u),S=(i+e)*p,y=(r+l)*_;let R,w;if(d===Ji)R=(h+u)*x,w=-2*x;else if(d===pc)R=u*x,w=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=w,m[14]=-R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ts=new rt,hi=new $e,vS=new rt(0,0,0),xS=new rt(1,1,1),Aa=new rt,Xl=new rt,Xn=new rt,Gg=new $e,Vg=new Do;class ea{constructor(e=0,i=0,r=0,l=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],x=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xe(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Vg.setFromEuler(this),this.setFromQuaternion(Vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class V_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SS=0;const kg=new rt,es=new Do,qi=new $e,Wl=new rt,To=new rt,MS=new rt,yS=new Do,Xg=new rt(1,0,0),Wg=new rt(0,1,0),qg=new rt(0,0,1),Yg={type:"added"},ES={type:"removed"},ns={type:"childadded",child:null},Gf={type:"childremoved",child:null};class qn extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new rt,i=new ea,r=new Do,l=new rt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new oe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new V_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return es.setFromAxisAngle(e,i),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,i){return es.setFromAxisAngle(e,i),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Xg,e)}rotateY(e){return this.rotateOnAxis(Wg,e)}rotateZ(e){return this.rotateOnAxis(qg,e)}translateOnAxis(e,i){return kg.copy(e).applyQuaternion(this.quaternion),this.position.add(kg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Xg,e)}translateY(e){return this.translateOnAxis(Wg,e)}translateZ(e){return this.translateOnAxis(qg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Wl.copy(e):Wl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(To,Wl,this.up):qi.lookAt(Wl,To,this.up),this.quaternion.setFromRotationMatrix(qi),l&&(qi.extractRotation(l.matrixWorld),es.setFromRotationMatrix(qi),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yg),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ES),Gf.child=e,this.dispatchEvent(Gf),Gf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yg),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,MS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,yS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),x=h(e.shapes),S=h(e.skeletons),y=h(e.animations),R=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),R.length>0&&(r.nodes=R)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}qn.DEFAULT_UP=new rt(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new rt,Yi=new rt,Vf=new rt,ji=new rt,is=new rt,as=new rt,jg=new rt,kf=new rt,Xf=new rt,Wf=new rt,qf=new je,Yf=new je,jf=new je;class pi{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),di.subVectors(e,i),l.cross(di);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){di.subVectors(l,i),Yi.subVectors(r,i),Vf.subVectors(e,i);const h=di.dot(di),d=di.dot(Yi),m=di.dot(Vf),p=Yi.dot(Yi),_=Yi.dot(Vf),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const S=1/x,y=(p*m-d*_)*S,R=(h*_-d*m)*S;return u.set(1-y-R,R,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ji.x),m.addScaledVector(h,ji.y),m.addScaledVector(d,ji.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return qf.setScalar(0),Yf.setScalar(0),jf.setScalar(0),qf.fromBufferAttribute(e,i),Yf.fromBufferAttribute(e,r),jf.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(qf,u.x),h.addScaledVector(Yf,u.y),h.addScaledVector(jf,u.z),h}static isFrontFacing(e,i,r,l){return di.subVectors(r,i),Yi.subVectors(e,i),di.cross(Yi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),di.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return pi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;is.subVectors(l,r),as.subVectors(u,r),kf.subVectors(e,r);const m=is.dot(kf),p=as.dot(kf);if(m<=0&&p<=0)return i.copy(r);Xf.subVectors(e,l);const _=is.dot(Xf),x=as.dot(Xf);if(_>=0&&x<=_)return i.copy(l);const S=m*x-_*p;if(S<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(is,h);Wf.subVectors(e,u);const y=is.dot(Wf),R=as.dot(Wf);if(R>=0&&y<=R)return i.copy(u);const w=y*p-m*R;if(w<=0&&p>=0&&R<=0)return d=p/(p-R),i.copy(r).addScaledVector(as,d);const M=_*R-y*x;if(M<=0&&x-_>=0&&y-R>=0)return jg.subVectors(u,l),d=(x-_)/(x-_+(y-R)),i.copy(l).addScaledVector(jg,d);const g=1/(M+w+S);return h=w*g,d=S*g,i.copy(r).addScaledVector(is,h).addScaledVector(as,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const k_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ra={h:0,s:0,l:0},ql={h:0,s:0,l:0};function Zf(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Oe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ae.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ae.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ae.workingColorSpace){if(e=rS(e,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=Zf(h,u,e+1/3),this.g=Zf(h,u,e),this.b=Zf(h,u,e-1/3)}return Ae.toWorkingColorSpace(this,l),this}setStyle(e,i=ai){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ai){const r=k_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Ae.fromWorkingColorSpace(En.copy(this),e),Math.round(xe(En.r*255,0,255))*65536+Math.round(xe(En.g*255,0,255))*256+Math.round(xe(En.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ae.workingColorSpace){Ae.fromWorkingColorSpace(En.copy(this),i);const r=En.r,l=En.g,u=En.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=_<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(En.copy(this),i),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=ai){Ae.fromWorkingColorSpace(En.copy(this),e);const i=En.r,r=En.g,l=En.b;return e!==ai?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ra),this.setHSL(Ra.h+e,Ra.s+i,Ra.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ra),e.getHSL(ql);const r=Lf(Ra.h,ql.h,i),l=Lf(Ra.s,ql.s,i),u=Lf(Ra.l,ql.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new Oe;Oe.NAMES=k_;let TS=0;class vc extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=fs,this.side=Na,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=oh,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(r.blending=this.blending),this.side!==Na&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sh&&(r.blendSrc=this.blendSrc),this.blendDst!==oh&&(r.blendDst=this.blendDst),this.blendEquation!==cr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Og&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wa extends vc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.combine=A_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Je=new rt,Yl=new ze;class Ai{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Pg,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Yl.fromBufferAttribute(this,i),Yl.applyMatrix3(e),this.setXY(i,Yl.x,Yl.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyMatrix3(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyMatrix4(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyNormalMatrix(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.transformDirection(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Mo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Mo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Mo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Mo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Mo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array),l=Pn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array),l=Pn(l,this.array),u=Pn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pg&&(e.usage=this.usage),e}}class X_ extends Ai{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class W_ extends Ai{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class dr extends Ai{constructor(e,i,r){super(new Float32Array(e),i,r)}}let bS=0;const ii=new $e,Kf=new qn,rs=new rt,Wn=new Uo,bo=new Uo,dn=new rt;class gr extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I_(e)?W_:X_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new oe().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,i,r){return ii.makeTranslation(e,i,r),this.applyMatrix4(ii),this}scale(e,i,r){return ii.makeScale(e,i,r),this.applyMatrix4(ii),this}lookAt(e){return Kf.lookAt(e),Kf.updateMatrix(),this.applyMatrix4(Kf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new dr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Wn.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ed);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];bo.setFromBufferAttribute(d),this.morphTargetsRelative?(dn.addVectors(Wn.min,bo.min),Wn.expandByPoint(dn),dn.addVectors(Wn.max,bo.max),Wn.expandByPoint(dn)):(Wn.expandByPoint(bo.min),Wn.expandByPoint(bo.max))}Wn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)dn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(dn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)dn.fromBufferAttribute(d,p),m&&(rs.fromBufferAttribute(e,p),dn.add(rs)),l=Math.max(l,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<r.count;K++)d[K]=new rt,m[K]=new rt;const p=new rt,_=new rt,x=new rt,S=new ze,y=new ze,R=new ze,w=new rt,M=new rt;function g(K,C,A){p.fromBufferAttribute(r,K),_.fromBufferAttribute(r,C),x.fromBufferAttribute(r,A),S.fromBufferAttribute(u,K),y.fromBufferAttribute(u,C),R.fromBufferAttribute(u,A),_.sub(p),x.sub(p),y.sub(S),R.sub(S);const F=1/(y.x*R.y-R.x*y.y);isFinite(F)&&(w.copy(_).multiplyScalar(R.y).addScaledVector(x,-y.y).multiplyScalar(F),M.copy(x).multiplyScalar(y.x).addScaledVector(_,-R.x).multiplyScalar(F),d[K].add(w),d[C].add(w),d[A].add(w),m[K].add(M),m[C].add(M),m[A].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let K=0,C=P.length;K<C;++K){const A=P[K],F=A.start,ct=A.count;for(let it=F,mt=F+ct;it<mt;it+=3)g(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const O=new rt,L=new rt,G=new rt,H=new rt;function B(K){G.fromBufferAttribute(l,K),H.copy(G);const C=d[K];O.copy(C),O.sub(G.multiplyScalar(G.dot(C))).normalize(),L.crossVectors(H,C);const F=L.dot(m[K])<0?-1:1;h.setXYZW(K,O.x,O.y,O.z,F)}for(let K=0,C=P.length;K<C;++K){const A=P[K],F=A.start,ct=A.count;for(let it=F,mt=F+ct;it<mt;it+=3)B(e.getX(it+0)),B(e.getX(it+1)),B(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new rt,u=new rt,h=new rt,d=new rt,m=new rt,p=new rt,_=new rt,x=new rt;if(e)for(let S=0,y=e.count;S<y;S+=3){const R=e.getX(S+0),w=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),_.subVectors(h,u),x.subVectors(l,u),_.cross(x),d.fromBufferAttribute(r,R),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),d.add(_),m.add(_),p.add(_),r.setXYZ(R,d.x,d.y,d.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,u),x.subVectors(l,u),_.cross(x),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)dn.fromBufferAttribute(e,i),dn.normalize(),e.setXYZ(i,dn.x,dn.y,dn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,x=d.normalized,S=new p.constructor(m.length*_);let y=0,R=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?y=m[w]*d.data.stride+d.offset:y=m[w]*_;for(let g=0;g<_;g++)S[R++]=p[y++]}return new Ai(S,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new gr,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,x=p.length;_<x;_++){const S=p[_],y=e(S,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,S=p.length;x<S;x++){const y=p[x];_.push(y.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],x=u[p];for(let S=0,y=x.length;S<y;S++)_.push(x[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zg=new $e,ir=new _S,jl=new ed,Kg=new rt,Zl=new rt,Kl=new rt,Ql=new rt,Qf=new rt,Jl=new rt,Qg=new rt,$l=new rt;class bi extends qn{constructor(e=new gr,i=new wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){Jl.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],x=u[m];_!==0&&(Qf.fromBufferAttribute(x,e),h?Jl.addScaledVector(Qf,_):Jl.addScaledVector(Qf.sub(i),_))}i.add(Jl)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),jl.copy(r.boundingSphere),jl.applyMatrix4(u),ir.copy(e.ray).recast(e.near),!(jl.containsPoint(ir.origin)===!1&&(ir.intersectSphere(jl,Kg)===null||ir.origin.distanceToSquared(Kg)>(e.far-e.near)**2))&&(Zg.copy(u).invert(),ir.copy(e.ray).applyMatrix4(Zg),!(r.boundingBox!==null&&ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ir)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,S=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,w=S.length;R<w;R++){const M=S[R],g=h[M.materialIndex],P=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let L=P,G=O;L<G;L+=3){const H=d.getX(L),B=d.getX(L+1),K=d.getX(L+2);l=tc(this,g,e,r,p,_,x,H,B,K),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=R,g=w;M<g;M+=3){const P=d.getX(M),O=d.getX(M+1),L=d.getX(M+2);l=tc(this,h,e,r,p,_,x,P,O,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let R=0,w=S.length;R<w;R++){const M=S[R],g=h[M.materialIndex],P=Math.max(M.start,y.start),O=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let L=P,G=O;L<G;L+=3){const H=L,B=L+1,K=L+2;l=tc(this,g,e,r,p,_,x,H,B,K),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=R,g=w;M<g;M+=3){const P=M,O=M+1,L=M+2;l=tc(this,h,e,r,p,_,x,P,O,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function AS(o,e,i,r,l,u,h,d){let m;if(e.side===zn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Na,d),m===null)return null;$l.copy(d),$l.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo($l);return p<i.near||p>i.far?null:{distance:p,point:$l.clone(),object:o}}function tc(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,Zl),o.getVertexPosition(m,Kl),o.getVertexPosition(p,Ql);const _=AS(o,e,i,r,Zl,Kl,Ql,Qg);if(_){const x=new rt;pi.getBarycoord(Qg,Zl,Kl,Ql,x),l&&(_.uv=pi.getInterpolatedAttribute(l,d,m,p,x,new ze)),u&&(_.uv1=pi.getInterpolatedAttribute(u,d,m,p,x,new ze)),h&&(_.normal=pi.getInterpolatedAttribute(h,d,m,p,x,new rt),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new rt,materialIndex:0};pi.getNormal(Zl,Kl,Ql,S.normal),_.face=S,_.barycoord=x}return _}class ys extends gr{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],x=[];let S=0,y=0;R("z","y","x",-1,-1,r,i,e,h,u,0),R("z","y","x",1,-1,r,i,-e,h,u,1),R("x","z","y",1,1,e,r,i,l,h,2),R("x","z","y",1,-1,e,r,-i,l,h,3),R("x","y","z",1,-1,e,i,r,l,u,4),R("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new dr(p,3)),this.setAttribute("normal",new dr(_,3)),this.setAttribute("uv",new dr(x,2));function R(w,M,g,P,O,L,G,H,B,K,C){const A=L/B,F=G/K,ct=L/2,it=G/2,mt=H/2,ht=B+1,W=K+1;let at=0,j=0;const St=new rt;for(let U=0;U<W;U++){const nt=U*F-it;for(let Et=0;Et<ht;Et++){const Rt=Et*A-ct;St[w]=Rt*P,St[M]=nt*O,St[g]=mt,p.push(St.x,St.y,St.z),St[w]=0,St[M]=0,St[g]=H>0?1:-1,_.push(St.x,St.y,St.z),x.push(Et/B),x.push(1-U/K),at+=1}}for(let U=0;U<K;U++)for(let nt=0;nt<B;nt++){const Et=S+nt+ht*U,Rt=S+nt+ht*(U+1),q=S+(nt+1)+ht*(U+1),dt=S+(nt+1)+ht*U;m.push(Et,Rt,dt),m.push(Rt,q,dt),j+=6}d.addGroup(y,j,C),y+=j,S+=at}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Dn(o){const e={};for(let i=0;i<o.length;i++){const r=Ss(o[i]);for(const l in r)e[l]=r[l]}return e}function RS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function q_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ae.workingColorSpace}const CS={clone:Ss,merge:Dn};var wS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oa extends vc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wS,this.fragmentShader=DS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=RS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Y_ extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Ji}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ca=new rt,Jg=new ze,$g=new ze;class ri extends Y_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Wh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wh*2*Math.atan(Math.tan(Uf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ca.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ca.x,Ca.y).multiplyScalar(-e/Ca.z),Ca.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ca.x,Ca.y).multiplyScalar(-e/Ca.z)}getViewSize(e,i){return this.getViewBounds(e,Jg,$g),i.subVectors($g,Jg)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Uf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ss=-90,os=1;class US extends qn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ri(ss,os,e,i);l.layers=this.layers,this.add(l);const u=new ri(ss,os,e,i);u.layers=this.layers,this.add(u);const h=new ri(ss,os,e,i);h.layers=this.layers,this.add(h);const d=new ri(ss,os,e,i);d.layers=this.layers,this.add(d);const m=new ri(ss,os,e,i);m.layers=this.layers,this.add(m);const p=new ri(ss,os,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===pc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,x=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(x,S,y),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class j_ extends Bn{constructor(e,i,r,l,u,h,d,m,p,_){e=e!==void 0?e:[],i=i!==void 0?i:ms,super(e,i,r,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LS extends mr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new j_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ti}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ys(5,5,5),u=new Oa({name:"CubemapFromEquirect",uniforms:Ss(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Ua});u.uniforms.tEquirect.value=i;const h=new bi(l,u),d=i.minFilter;return i.minFilter===hr&&(i.minFilter=Ti),new US(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class NS extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ea,this.environmentIntensity=1,this.environmentRotation=new ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Jf=new rt,OS=new rt,PS=new oe;class or{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Jf.subVectors(r,i).cross(OS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Jf),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||PS.getNormalMatrix(e),l=this.coplanarPoint(Jf).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new ed,ec=new rt;class Z_{constructor(e=new or,i=new or,r=new or,l=new or,u=new or,h=new or){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ji){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],_=l[5],x=l[6],S=l[7],y=l[8],R=l[9],w=l[10],M=l[11],g=l[12],P=l[13],O=l[14],L=l[15];if(r[0].setComponents(m-u,S-p,M-y,L-g).normalize(),r[1].setComponents(m+u,S+p,M+y,L+g).normalize(),r[2].setComponents(m+h,S+_,M+R,L+P).normalize(),r[3].setComponents(m-h,S-_,M-R,L-P).normalize(),r[4].setComponents(m-d,S-x,M-w,L-O).normalize(),i===Ji)r[5].setComponents(m+d,S+x,M+w,L+O).normalize();else if(i===pc)r[5].setComponents(d,x,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(ec.x=l.normal.x>0?e.max.x:e.min.x,ec.y=l.normal.y>0?e.max.y:e.min.y,ec.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(ec)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nc extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class K_ extends Bn{constructor(e,i,r,l,u,h,d,m,p,_=hs){if(_!==hs&&_!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===hs&&(r=pr),r===void 0&&_===vs&&(r=_s),super(null,l,u,h,d,m,_,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:gi,this.minFilter=m!==void 0?m:gi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class xc extends gr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,x=e/d,S=i/m,y=[],R=[],w=[],M=[];for(let g=0;g<_;g++){const P=g*S-h;for(let O=0;O<p;O++){const L=O*x-u;R.push(L,-P,0),w.push(0,0,1),M.push(O/d),M.push(1-g/m)}}for(let g=0;g<m;g++)for(let P=0;P<d;P++){const O=P+p*g,L=P+p*(g+1),G=P+1+p*(g+1),H=P+1+p*g;y.push(O,L,H),y.push(L,G,H)}this.setIndex(y),this.setAttribute("position",new dr(R,3)),this.setAttribute("normal",new dr(w,3)),this.setAttribute("uv",new dr(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.width,e.height,e.widthSegments,e.heightSegments)}}class zS extends vc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BS extends vc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class FS extends Y_{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class IS extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function t_(o,e,i,r){const l=HS(r);switch(i){case U_:return o*e;case N_:return o*e;case O_:return o*e*2;case P_:return o*e/l.components*l.byteLength;case Jh:return o*e/l.components*l.byteLength;case z_:return o*e*2/l.components*l.byteLength;case $h:return o*e*2/l.components*l.byteLength;case L_:return o*e*3/l.components*l.byteLength;case mi:return o*e*4/l.components*l.byteLength;case td:return o*e*4/l.components*l.byteLength;case sc:case oc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case lc:case cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sh:case yh:return Math.max(o,16)*Math.max(e,8)/4;case xh:case Mh:return Math.max(o,8)*Math.max(e,8)/2;case Eh:case Th:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case bh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case wh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case zh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case uc:case Hh:case Gh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case B_:case Vh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case kh:case Xh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function HS(o){switch(o){case ta:case C_:return{byteLength:1,components:1};case Ro:case w_:case Co:return{byteLength:2,components:1};case Kh:case Qh:return{byteLength:2,components:4};case pr:case Zh:case Qi:return{byteLength:4,components:1};case D_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Q_(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function GS(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,x=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const _=m.array,x=m.updateRanges;if(o.bindBuffer(p,d),x.length===0)o.bufferSubData(p,0,_);else{x.sort((y,R)=>y.start-R.start);let S=0;for(let y=1;y<x.length;y++){const R=x[S],w=x[y];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++S,x[S]=w)}x.length=S+1;for(let y=0,R=x.length;y<R;y++){const w=x[y];o.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var VS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kS=`#ifdef USE_ALPHAHASH
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
#endif`,XS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jS=`#ifdef USE_AOMAP
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
#endif`,ZS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KS=`#ifdef USE_BATCHING
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
#endif`,QS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eM=`#ifdef USE_IRIDESCENCE
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
#endif`,nM=`#ifdef USE_BUMPMAP
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
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fM=`#define PI 3.141592653589793
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
} // validated`,hM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dM=`vec3 transformedNormal = objectNormal;
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
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vM="gl_FragColor = linearToOutputTexel( gl_FragColor );",xM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,EM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wM=`#ifdef USE_GRADIENTMAP
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
}`,DM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
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
#endif`,OM=`#ifdef USE_ENVMAP
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
#endif`,PM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IM=`PhysicalMaterial material;
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
#endif`,HM=`struct PhysicalMaterial {
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
}`,GM=`
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
#endif`,VM=`#if defined( RE_IndirectDiffuse )
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
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QM=`#if defined( USE_POINTS_UV )
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
#endif`,JM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$M=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ty=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ey=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ny=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iy=`#ifdef USE_MORPHTARGETS
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
#endif`,ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ry=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uy=`#ifdef USE_NORMALMAP
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
#endif`,fy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,my=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,_y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,My=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,by=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ay=`float getShadowMask() {
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
}`,Ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cy=`#ifdef USE_SKINNING
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
#endif`,wy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dy=`#ifdef USE_SKINNING
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
#endif`,Uy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ly=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ny=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Oy=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Py=`#ifdef USE_TRANSMISSION
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
#endif`,zy=`#ifdef USE_TRANSMISSION
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
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vy=`uniform sampler2D t2D;
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
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`#include <common>
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
}`,jy=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zy=`#define DISTANCE
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
}`,Ky=`#define DISTANCE
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
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`uniform float scale;
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
}`,tE=`uniform vec3 diffuse;
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
}`,eE=`#include <common>
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
}`,nE=`uniform vec3 diffuse;
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
}`,iE=`#define LAMBERT
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
}`,aE=`#define LAMBERT
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
}`,rE=`#define MATCAP
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
}`,sE=`#define MATCAP
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
}`,oE=`#define NORMAL
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
}`,lE=`#define NORMAL
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
}`,cE=`#define PHONG
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
}`,uE=`#define PHONG
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
}`,fE=`#define STANDARD
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
}`,hE=`#define STANDARD
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
}`,dE=`#define TOON
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
}`,pE=`#define TOON
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
}`,mE=`uniform float size;
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
}`,gE=`uniform vec3 diffuse;
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
}`,_E=`#include <common>
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
}`,vE=`uniform vec3 color;
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
}`,xE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,SE=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:VS,alphahash_pars_fragment:kS,alphamap_fragment:XS,alphamap_pars_fragment:WS,alphatest_fragment:qS,alphatest_pars_fragment:YS,aomap_fragment:jS,aomap_pars_fragment:ZS,batching_pars_vertex:KS,batching_vertex:QS,begin_vertex:JS,beginnormal_vertex:$S,bsdfs:tM,iridescence_fragment:eM,bumpmap_pars_fragment:nM,clipping_planes_fragment:iM,clipping_planes_pars_fragment:aM,clipping_planes_pars_vertex:rM,clipping_planes_vertex:sM,color_fragment:oM,color_pars_fragment:lM,color_pars_vertex:cM,color_vertex:uM,common:fM,cube_uv_reflection_fragment:hM,defaultnormal_vertex:dM,displacementmap_pars_vertex:pM,displacementmap_vertex:mM,emissivemap_fragment:gM,emissivemap_pars_fragment:_M,colorspace_fragment:vM,colorspace_pars_fragment:xM,envmap_fragment:SM,envmap_common_pars_fragment:MM,envmap_pars_fragment:yM,envmap_pars_vertex:EM,envmap_physical_pars_fragment:OM,envmap_vertex:TM,fog_vertex:bM,fog_pars_vertex:AM,fog_fragment:RM,fog_pars_fragment:CM,gradientmap_pars_fragment:wM,lightmap_pars_fragment:DM,lights_lambert_fragment:UM,lights_lambert_pars_fragment:LM,lights_pars_begin:NM,lights_toon_fragment:PM,lights_toon_pars_fragment:zM,lights_phong_fragment:BM,lights_phong_pars_fragment:FM,lights_physical_fragment:IM,lights_physical_pars_fragment:HM,lights_fragment_begin:GM,lights_fragment_maps:VM,lights_fragment_end:kM,logdepthbuf_fragment:XM,logdepthbuf_pars_fragment:WM,logdepthbuf_pars_vertex:qM,logdepthbuf_vertex:YM,map_fragment:jM,map_pars_fragment:ZM,map_particle_fragment:KM,map_particle_pars_fragment:QM,metalnessmap_fragment:JM,metalnessmap_pars_fragment:$M,morphinstance_vertex:ty,morphcolor_vertex:ey,morphnormal_vertex:ny,morphtarget_pars_vertex:iy,morphtarget_vertex:ay,normal_fragment_begin:ry,normal_fragment_maps:sy,normal_pars_fragment:oy,normal_pars_vertex:ly,normal_vertex:cy,normalmap_pars_fragment:uy,clearcoat_normal_fragment_begin:fy,clearcoat_normal_fragment_maps:hy,clearcoat_pars_fragment:dy,iridescence_pars_fragment:py,opaque_fragment:my,packing:gy,premultiplied_alpha_fragment:_y,project_vertex:vy,dithering_fragment:xy,dithering_pars_fragment:Sy,roughnessmap_fragment:My,roughnessmap_pars_fragment:yy,shadowmap_pars_fragment:Ey,shadowmap_pars_vertex:Ty,shadowmap_vertex:by,shadowmask_pars_fragment:Ay,skinbase_vertex:Ry,skinning_pars_vertex:Cy,skinning_vertex:wy,skinnormal_vertex:Dy,specularmap_fragment:Uy,specularmap_pars_fragment:Ly,tonemapping_fragment:Ny,tonemapping_pars_fragment:Oy,transmission_fragment:Py,transmission_pars_fragment:zy,uv_pars_fragment:By,uv_pars_vertex:Fy,uv_vertex:Iy,worldpos_vertex:Hy,background_vert:Gy,background_frag:Vy,backgroundCube_vert:ky,backgroundCube_frag:Xy,cube_vert:Wy,cube_frag:qy,depth_vert:Yy,depth_frag:jy,distanceRGBA_vert:Zy,distanceRGBA_frag:Ky,equirect_vert:Qy,equirect_frag:Jy,linedashed_vert:$y,linedashed_frag:tE,meshbasic_vert:eE,meshbasic_frag:nE,meshlambert_vert:iE,meshlambert_frag:aE,meshmatcap_vert:rE,meshmatcap_frag:sE,meshnormal_vert:oE,meshnormal_frag:lE,meshphong_vert:cE,meshphong_frag:uE,meshphysical_vert:fE,meshphysical_frag:hE,meshtoon_vert:dE,meshtoon_frag:pE,points_vert:mE,points_frag:gE,shadow_vert:_E,shadow_frag:vE,sprite_vert:xE,sprite_frag:SE},Lt={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ei={basic:{uniforms:Dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Dn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Dn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Dn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Dn([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Dn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Dn([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Dn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Dn([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Dn([Lt.common,Lt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Dn([Lt.lights,Lt.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ei.physical={uniforms:Dn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const ic={r:0,b:0,g:0},rr=new ea,ME=new $e;function yE(o,e,i,r,l,u,h){const d=new Oe(0);let m=u===!0?0:1,p,_,x=null,S=0,y=null;function R(O){let L=O.isScene===!0?O.background:null;return L&&L.isTexture&&(L=(O.backgroundBlurriness>0?i:e).get(L)),L}function w(O){let L=!1;const G=R(O);G===null?g(d,m):G&&G.isColor&&(g(G,1),L=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,L){const G=R(L);G&&(G.isCubeTexture||G.mapping===_c)?(_===void 0&&(_=new bi(new ys(1,1,1),new Oa({name:"BackgroundCubeMaterial",uniforms:Ss(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(H,B,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),rr.copy(L.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),_.material.uniforms.envMap.value=G,_.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(ME.makeRotationFromEuler(rr)),_.material.toneMapped=Ae.getTransfer(G.colorSpace)!==Ne,(x!==G||S!==G.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,x=G,S=G.version,y=o.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new bi(new xc(2,2),new Oa({name:"BackgroundMaterial",uniforms:Ss(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Na,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(G.colorSpace)!==Ne,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(x!==G||S!==G.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,x=G,S=G.version,y=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function g(O,L){O.getRGB(ic,q_(o)),r.buffers.color.setClear(ic.r,ic.g,ic.b,L,h)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(O,L=1){d.set(O),m=L,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,g(d,m)},render:w,addToRenderList:M,dispose:P}}function EE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,h=!1;function d(A,F,ct,it,mt){let ht=!1;const W=x(it,ct,F);u!==W&&(u=W,p(u.object)),ht=y(A,it,ct,mt),ht&&R(A,it,ct,mt),mt!==null&&e.update(mt,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,L(A,F,ct,it),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(mt).buffer))}function m(){return o.createVertexArray()}function p(A){return o.bindVertexArray(A)}function _(A){return o.deleteVertexArray(A)}function x(A,F,ct){const it=ct.wireframe===!0;let mt=r[A.id];mt===void 0&&(mt={},r[A.id]=mt);let ht=mt[F.id];ht===void 0&&(ht={},mt[F.id]=ht);let W=ht[it];return W===void 0&&(W=S(m()),ht[it]=W),W}function S(A){const F=[],ct=[],it=[];for(let mt=0;mt<i;mt++)F[mt]=0,ct[mt]=0,it[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ct,attributeDivisors:it,object:A,attributes:{},index:null}}function y(A,F,ct,it){const mt=u.attributes,ht=F.attributes;let W=0;const at=ct.getAttributes();for(const j in at)if(at[j].location>=0){const U=mt[j];let nt=ht[j];if(nt===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(nt=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(nt=A.instanceColor)),U===void 0||U.attribute!==nt||nt&&U.data!==nt.data)return!0;W++}return u.attributesNum!==W||u.index!==it}function R(A,F,ct,it){const mt={},ht=F.attributes;let W=0;const at=ct.getAttributes();for(const j in at)if(at[j].location>=0){let U=ht[j];U===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(U=A.instanceColor));const nt={};nt.attribute=U,U&&U.data&&(nt.data=U.data),mt[j]=nt,W++}u.attributes=mt,u.attributesNum=W,u.index=it}function w(){const A=u.newAttributes;for(let F=0,ct=A.length;F<ct;F++)A[F]=0}function M(A){g(A,0)}function g(A,F){const ct=u.newAttributes,it=u.enabledAttributes,mt=u.attributeDivisors;ct[A]=1,it[A]===0&&(o.enableVertexAttribArray(A),it[A]=1),mt[A]!==F&&(o.vertexAttribDivisor(A,F),mt[A]=F)}function P(){const A=u.newAttributes,F=u.enabledAttributes;for(let ct=0,it=F.length;ct<it;ct++)F[ct]!==A[ct]&&(o.disableVertexAttribArray(ct),F[ct]=0)}function O(A,F,ct,it,mt,ht,W){W===!0?o.vertexAttribIPointer(A,F,ct,mt,ht):o.vertexAttribPointer(A,F,ct,it,mt,ht)}function L(A,F,ct,it){w();const mt=it.attributes,ht=ct.getAttributes(),W=F.defaultAttributeValues;for(const at in ht){const j=ht[at];if(j.location>=0){let St=mt[at];if(St===void 0&&(at==="instanceMatrix"&&A.instanceMatrix&&(St=A.instanceMatrix),at==="instanceColor"&&A.instanceColor&&(St=A.instanceColor)),St!==void 0){const U=St.normalized,nt=St.itemSize,Et=e.get(St);if(Et===void 0)continue;const Rt=Et.buffer,q=Et.type,dt=Et.bytesPerElement,xt=q===o.INT||q===o.UNSIGNED_INT||St.gpuType===Zh;if(St.isInterleavedBufferAttribute){const Tt=St.data,Ct=Tt.stride,Bt=St.offset;if(Tt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<j.locationSize;Gt++)g(j.location+Gt,Tt.meshPerAttribute);A.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Gt=0;Gt<j.locationSize;Gt++)M(j.location+Gt);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let Gt=0;Gt<j.locationSize;Gt++)O(j.location+Gt,nt/j.locationSize,q,U,Ct*dt,(Bt+nt/j.locationSize*Gt)*dt,xt)}else{if(St.isInstancedBufferAttribute){for(let Tt=0;Tt<j.locationSize;Tt++)g(j.location+Tt,St.meshPerAttribute);A.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Tt=0;Tt<j.locationSize;Tt++)M(j.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let Tt=0;Tt<j.locationSize;Tt++)O(j.location+Tt,nt/j.locationSize,q,U,nt*dt,nt/j.locationSize*Tt*dt,xt)}}else if(W!==void 0){const U=W[at];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(j.location,U);break;case 3:o.vertexAttrib3fv(j.location,U);break;case 4:o.vertexAttrib4fv(j.location,U);break;default:o.vertexAttrib1fv(j.location,U)}}}}P()}function G(){K();for(const A in r){const F=r[A];for(const ct in F){const it=F[ct];for(const mt in it)_(it[mt].object),delete it[mt];delete F[ct]}delete r[A]}}function H(A){if(r[A.id]===void 0)return;const F=r[A.id];for(const ct in F){const it=F[ct];for(const mt in it)_(it[mt].object),delete it[mt];delete F[ct]}delete r[A.id]}function B(A){for(const F in r){const ct=r[F];if(ct[A.id]===void 0)continue;const it=ct[A.id];for(const mt in it)_(it[mt].object),delete it[mt];delete ct[A.id]}}function K(){C(),h=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:C,dispose:G,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:M,disableUnusedAttributes:P}}function TE(o,e,i){let r;function l(p){r=p}function u(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,x){x!==0&&(o.drawArraysInstanced(r,p,_,x),i.update(_,r,x))}function d(p,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,x);let y=0;for(let R=0;R<x;R++)y+=_[R];i.update(y,r,1)}function m(p,_,x,S){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let R=0;R<p.length;R++)h(p[R],_[R],S[R]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,x);let R=0;for(let w=0;w<x;w++)R+=_[w]*S[w];i.update(R,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function bE(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==mi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const K=B===Co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==ta&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Qi&&!K)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=R>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:S,maxTextures:y,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:L,vertexTextures:G,maxSamples:H}}function AE(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new or,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const y=x.length!==0||S||r!==0||l;return l=S,r=x.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){i=_(x,S,0)},this.setState=function(x,S,y){const R=x.clippingPlanes,w=x.clipIntersection,M=x.clipShadows,g=o.get(x);if(!l||R===null||R.length===0||u&&!M)u?_(null):p();else{const P=u?0:r,O=P*4;let L=g.clippingState||null;m.value=L,L=_(R,S,O,y);for(let G=0;G!==O;++G)L[G]=i[G];g.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,S,y,R){const w=x!==null?x.length:0;let M=null;if(w!==0){if(M=m.value,R!==!0||M===null){const g=y+w*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<g)&&(M=new Float32Array(g));for(let O=0,L=y;O!==w;++O,L+=4)h.copy(x[O]).applyMatrix4(P,d),h.normal.toArray(M,L),M[L+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}function RE(o){let e=new WeakMap;function i(h,d){return d===mh?h.mapping=ms:d===gh&&(h.mapping=gs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===mh||d===gh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new LS(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const us=4,e_=[.125,.215,.35,.446,.526,.582],ur=20,$f=new FS,n_=new Oe;let th=null,eh=0,nh=0,ih=!1;const lr=(1+Math.sqrt(5))/2,ls=1/lr,i_=[new rt(-lr,ls,0),new rt(lr,ls,0),new rt(-ls,0,lr),new rt(ls,0,lr),new rt(0,lr,-ls),new rt(0,lr,ls),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)];class a_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){th=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=o_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=s_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(th,eh,nh),this._renderer.xr.enabled=ih,e.scissorTest=!1,ac(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),th=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Co,format:mi,colorSpace:xs,depthBuffer:!1},l=r_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CE(u)),this._blurMaterial=wE(u,e,i)}return l}_compileMaterial(e){const i=new bi(this._lodPlanes[0],e);this._renderer.compile(i,$f)}_sceneToCubeUV(e,i,r,l){const d=new ri(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,S=_.toneMapping;_.getClearColor(n_),_.toneMapping=La,_.autoClear=!1;const y=new wa({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),R=new bi(new ys,y);let w=!1;const M=e.background;M?M.isColor&&(y.color.copy(M),e.background=null,w=!0):(y.color.copy(n_),w=!0);for(let g=0;g<6;g++){const P=g%3;P===0?(d.up.set(0,m[g],0),d.lookAt(p[g],0,0)):P===1?(d.up.set(0,0,m[g]),d.lookAt(0,p[g],0)):(d.up.set(0,m[g],0),d.lookAt(0,0,p[g]));const O=this._cubeSize;ac(l,P*O,g>2?O:0,O,O),_.setRenderTarget(l),w&&_.render(R,d),_.render(e,d)}R.geometry.dispose(),R.material.dispose(),_.toneMapping=S,_.autoClear=x,e.background=M}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ms||e.mapping===gs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=o_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=s_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new bi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;ac(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,$f)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=i_[(l-u-1)%i_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new bi(this._lodPlanes[l],p),S=p.uniforms,y=this._sizeLods[r]-1,R=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*ur-1),w=u/R,M=isFinite(u)?1+Math.floor(_*w):ur;M>ur&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ur}`);const g=[];let P=0;for(let B=0;B<ur;++B){const K=B/w,C=Math.exp(-K*K/2);g.push(C),B===0?P+=C:B<M&&(P+=2*C)}for(let B=0;B<g.length;B++)g[B]=g[B]/P;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=g,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=R,S.mipInt.value=O-r;const L=this._sizeLods[l],G=3*L*(l>O-us?l-O+us:0),H=4*(this._cubeSize-L);ac(i,G,H,3*L,2*L),m.setRenderTarget(i),m.render(x,$f)}}function CE(o){const e=[],i=[],r=[];let l=o;const u=o-us+1+e_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-us?m=e_[h-o+us-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,x=1+p,S=[_,_,x,_,x,x,_,_,x,x,_,x],y=6,R=6,w=3,M=2,g=1,P=new Float32Array(w*R*y),O=new Float32Array(M*R*y),L=new Float32Array(g*R*y);for(let H=0;H<y;H++){const B=H%3*2/3-1,K=H>2?0:-1,C=[B,K,0,B+2/3,K,0,B+2/3,K+1,0,B,K,0,B+2/3,K+1,0,B,K+1,0];P.set(C,w*R*H),O.set(S,M*R*H);const A=[H,H,H,H,H,H];L.set(A,g*R*H)}const G=new gr;G.setAttribute("position",new Ai(P,w)),G.setAttribute("uv",new Ai(O,M)),G.setAttribute("faceIndex",new Ai(L,g)),e.push(G),l>us&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function r_(o,e,i){const r=new mr(o,e,i);return r.texture.mapping=_c,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ac(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function wE(o,e,i){const r=new Float32Array(ur),l=new rt(0,1,0);return new Oa({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:nd(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function s_(){return new Oa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nd(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function o_(){return new Oa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function nd(){return`

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
	`}function DE(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===mh||m===gh,_=m===ms||m===gs;if(p||_){let x=e.get(d);const S=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new a_(o)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new a_(o)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function UE(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&cs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function LE(o,e,i,r){const l={},u=new WeakMap;function h(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const R in S.attributes)e.remove(S.attributes[R]);S.removeEventListener("dispose",h),delete l[S.id];const y=u.get(S);y&&(e.remove(y),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(x,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(x){const S=x.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function p(x){const S=[],y=x.index,R=x.attributes.position;let w=0;if(y!==null){const P=y.array;w=y.version;for(let O=0,L=P.length;O<L;O+=3){const G=P[O+0],H=P[O+1],B=P[O+2];S.push(G,H,H,B,B,G)}}else if(R!==void 0){const P=R.array;w=R.version;for(let O=0,L=P.length/3-1;O<L;O+=3){const G=O+0,H=O+1,B=O+2;S.push(G,H,H,B,B,G)}}else return;const M=new(I_(S)?W_:X_)(S,1);M.version=w;const g=u.get(x);g&&e.remove(g),u.set(x,M)}function _(x){const S=u.get(x);if(S){const y=x.index;y!==null&&S.version<y.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:_}}function NE(o,e,i){let r;function l(S){r=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,y){o.drawElements(r,y,u,S*h),i.update(y,r,1)}function p(S,y,R){R!==0&&(o.drawElementsInstanced(r,y,u,S*h,R),i.update(y,r,R))}function _(S,y,R){if(R===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,S,0,R);let M=0;for(let g=0;g<R;g++)M+=y[g];i.update(M,r,1)}function x(S,y,R,w){if(R===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let g=0;g<S.length;g++)p(S[g]/h,y[g],w[g]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,S,0,w,0,R);let g=0;for(let P=0;P<R;P++)g+=y[P]*w[P];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function OE(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function PE(o,e,i){const r=new WeakMap,l=new je;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let S=r.get(d);if(S===void 0||S.count!==x){let A=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var y=A;S!==void 0&&S.texture.dispose();const R=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let L=0;R===!0&&(L=1),w===!0&&(L=2),M===!0&&(L=3);let G=d.attributes.position.count*L,H=1;G>e.maxTextureSize&&(H=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const B=new Float32Array(G*H*4*x),K=new G_(B,G,H,x);K.type=Qi,K.needsUpdate=!0;const C=L*4;for(let F=0;F<x;F++){const ct=g[F],it=P[F],mt=O[F],ht=G*H*4*F;for(let W=0;W<ct.count;W++){const at=W*C;R===!0&&(l.fromBufferAttribute(ct,W),B[ht+at+0]=l.x,B[ht+at+1]=l.y,B[ht+at+2]=l.z,B[ht+at+3]=0),w===!0&&(l.fromBufferAttribute(it,W),B[ht+at+4]=l.x,B[ht+at+5]=l.y,B[ht+at+6]=l.z,B[ht+at+7]=0),M===!0&&(l.fromBufferAttribute(mt,W),B[ht+at+8]=l.x,B[ht+at+9]=l.y,B[ht+at+10]=l.z,B[ht+at+11]=mt.itemSize===4?l.w:1)}}S={count:x,texture:K,size:new ze(G,H)},r.set(d,S),d.addEventListener("dispose",A)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let R=0;for(let M=0;M<p.length;M++)R+=p[M];const w=d.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function zE(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,x=e.get(m,_);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const J_=new Bn,l_=new K_(1,1),$_=new G_,t0=new mS,e0=new j_,c_=[],u_=[],f_=new Float32Array(16),h_=new Float32Array(9),d_=new Float32Array(4);function Es(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=c_[l];if(u===void 0&&(u=new Float32Array(l),c_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function on(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function ln(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Sc(o,e){let i=u_[e];i===void 0&&(i=new Int32Array(e),u_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function BE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function FE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2fv(this.addr,e),ln(i,e)}}function IE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(on(i,e))return;o.uniform3fv(this.addr,e),ln(i,e)}}function HE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4fv(this.addr,e),ln(i,e)}}function GE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;d_.set(r),o.uniformMatrix2fv(this.addr,!1,d_),ln(i,r)}}function VE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;h_.set(r),o.uniformMatrix3fv(this.addr,!1,h_),ln(i,r)}}function kE(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;f_.set(r),o.uniformMatrix4fv(this.addr,!1,f_),ln(i,r)}}function XE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function WE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2iv(this.addr,e),ln(i,e)}}function qE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3iv(this.addr,e),ln(i,e)}}function YE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4iv(this.addr,e),ln(i,e)}}function jE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function ZE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2uiv(this.addr,e),ln(i,e)}}function KE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3uiv(this.addr,e),ln(i,e)}}function QE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4uiv(this.addr,e),ln(i,e)}}function JE(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(l_.compareFunction=F_,u=l_):u=J_,i.setTexture2D(e||u,l)}function $E(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||t0,l)}function tT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||e0,l)}function eT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||$_,l)}function nT(o){switch(o){case 5126:return BE;case 35664:return FE;case 35665:return IE;case 35666:return HE;case 35674:return GE;case 35675:return VE;case 35676:return kE;case 5124:case 35670:return XE;case 35667:case 35671:return WE;case 35668:case 35672:return qE;case 35669:case 35673:return YE;case 5125:return jE;case 36294:return ZE;case 36295:return KE;case 36296:return QE;case 35678:case 36198:case 36298:case 36306:case 35682:return JE;case 35679:case 36299:case 36307:return $E;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return eT}}function iT(o,e){o.uniform1fv(this.addr,e)}function aT(o,e){const i=Es(e,this.size,2);o.uniform2fv(this.addr,i)}function rT(o,e){const i=Es(e,this.size,3);o.uniform3fv(this.addr,i)}function sT(o,e){const i=Es(e,this.size,4);o.uniform4fv(this.addr,i)}function oT(o,e){const i=Es(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function lT(o,e){const i=Es(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function cT(o,e){const i=Es(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function uT(o,e){o.uniform1iv(this.addr,e)}function fT(o,e){o.uniform2iv(this.addr,e)}function hT(o,e){o.uniform3iv(this.addr,e)}function dT(o,e){o.uniform4iv(this.addr,e)}function pT(o,e){o.uniform1uiv(this.addr,e)}function mT(o,e){o.uniform2uiv(this.addr,e)}function gT(o,e){o.uniform3uiv(this.addr,e)}function _T(o,e){o.uniform4uiv(this.addr,e)}function vT(o,e,i){const r=this.cache,l=e.length,u=Sc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||J_,u[h])}function xT(o,e,i){const r=this.cache,l=e.length,u=Sc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||t0,u[h])}function ST(o,e,i){const r=this.cache,l=e.length,u=Sc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||e0,u[h])}function MT(o,e,i){const r=this.cache,l=e.length,u=Sc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||$_,u[h])}function yT(o){switch(o){case 5126:return iT;case 35664:return aT;case 35665:return rT;case 35666:return sT;case 35674:return oT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return hT;case 35669:case 35673:return dT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}class ET{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=nT(i.type)}}class TT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=yT(i.type)}}class bT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const ah=/(\w+)(\])?(\[|\.)?/g;function p_(o,e){o.seq.push(e),o.map[e.id]=e}function AT(o,e,i){const r=o.name,l=r.length;for(ah.lastIndex=0;;){const u=ah.exec(r),h=ah.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){p_(i,p===void 0?new ET(d,o,e):new TT(d,o,e));break}else{let x=i.map[d];x===void 0&&(x=new bT(d),p_(i,x)),i=x}}}class fc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);AT(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function m_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const RT=37297;let CT=0;function wT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const g_=new oe;function DT(o){Ae._getMatrix(g_,Ae.workingColorSpace,o);const e=`mat3( ${g_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case dc:return[e,"LinearTransferOETF"];case Ne:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function __(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+wT(o.getShaderSource(e),h)}else return l}function UT(o,e){const i=DT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function LT(o,e){let i;switch(e){case Hx:i="Linear";break;case Gx:i="Reinhard";break;case Vx:i="Cineon";break;case kx:i="ACESFilmic";break;case Wx:i="AgX";break;case qx:i="Neutral";break;case Xx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const rc=new rt;function NT(){Ae.getLuminanceCoefficients(rc);const o=rc.x.toFixed(4),e=rc.y.toFixed(4),i=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function PT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function zT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ao(o){return o!==""}function v_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(o){return o.replace(BT,IT)}const FT=new Map;function IT(o,e){let i=le[e];if(i===void 0){const r=FT.get(e);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return qh(i)}const HT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S_(o){return o.replace(HT,GT)}function GT(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function M_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function VT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===b_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===xx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function kT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case _c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function WT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case A_:e="ENVMAP_BLENDING_MULTIPLY";break;case Fx:e="ENVMAP_BLENDING_MIX";break;case Ix:e="ENVMAP_BLENDING_ADD";break}return e}function qT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function YT(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=VT(i),p=kT(i),_=XT(i),x=WT(i),S=qT(i),y=OT(i),R=PT(u),w=l.createProgram();let M,g,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ao).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ao).join(`
`),g.length>0&&(g+=`
`)):(M=[M_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),g=[M_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==La?"#define TONE_MAPPING":"",i.toneMapping!==La?le.tonemapping_pars_fragment:"",i.toneMapping!==La?LT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,UT("linearToOutputTexel",i.outputColorSpace),NT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ao).join(`
`)),h=qh(h),h=v_(h,i),h=x_(h,i),d=qh(d),d=v_(d,i),d=x_(d,i),h=S_(h),d=S_(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===zg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===zg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const O=P+M+h,L=P+g+d,G=m_(l,l.VERTEX_SHADER,O),H=m_(l,l.FRAGMENT_SHADER,L);l.attachShader(w,G),l.attachShader(w,H),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(F){if(o.debug.checkShaderErrors){const ct=l.getProgramInfoLog(w).trim(),it=l.getShaderInfoLog(G).trim(),mt=l.getShaderInfoLog(H).trim();let ht=!0,W=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,G,H);else{const at=__(l,G,"vertex"),j=__(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ct+`
`+at+`
`+j)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(it===""||mt==="")&&(W=!1);W&&(F.diagnostics={runnable:ht,programLog:ct,vertexShader:{log:it,prefix:M},fragmentShader:{log:mt,prefix:g}})}l.deleteShader(G),l.deleteShader(H),K=new fc(l,w),C=zT(l,w)}let K;this.getUniforms=function(){return K===void 0&&B(this),K};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(w,RT)),A},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=CT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=H,this}let jT=0;class ZT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new KT(e),i.set(e,r)),r}}class KT{constructor(e){this.id=jT++,this.code=e,this.usedTimes=0}}function QT(o,e,i,r,l,u,h){const d=new V_,m=new ZT,p=new Set,_=[],x=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,A,F,ct,it){const mt=ct.fog,ht=it.geometry,W=C.isMeshStandardMaterial?ct.environment:null,at=(C.isMeshStandardMaterial?i:e).get(C.envMap||W),j=at&&at.mapping===_c?at.image.height:null,St=R[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const U=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,nt=U!==void 0?U.length:0;let Et=0;ht.morphAttributes.position!==void 0&&(Et=1),ht.morphAttributes.normal!==void 0&&(Et=2),ht.morphAttributes.color!==void 0&&(Et=3);let Rt,q,dt,xt;if(St){const ye=Ei[St];Rt=ye.vertexShader,q=ye.fragmentShader}else Rt=C.vertexShader,q=C.fragmentShader,m.update(C),dt=m.getVertexShaderID(C),xt=m.getFragmentShaderID(C);const Tt=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Bt=it.isInstancedMesh===!0,Gt=it.isBatchedMesh===!0,Se=!!C.map,ce=!!C.matcap,Re=!!at,z=!!C.aoMap,pn=!!C.lightMap,re=!!C.bumpMap,fe=!!C.normalMap,Wt=!!C.displacementMap,Ce=!!C.emissiveMap,qt=!!C.metalnessMap,D=!!C.roughnessMap,E=C.anisotropy>0,tt=C.clearcoat>0,ut=C.dispersion>0,vt=C.iridescence>0,ft=C.sheen>0,Vt=C.transmission>0,Dt=E&&!!C.anisotropyMap,zt=tt&&!!C.clearcoatMap,pe=tt&&!!C.clearcoatNormalMap,yt=tt&&!!C.clearcoatRoughnessMap,Ft=vt&&!!C.iridescenceMap,jt=vt&&!!C.iridescenceThicknessMap,kt=ft&&!!C.sheenColorMap,It=ft&&!!C.sheenRoughnessMap,ae=!!C.specularMap,Kt=!!C.specularColorMap,we=!!C.specularIntensityMap,k=Vt&&!!C.transmissionMap,Nt=Vt&&!!C.thicknessMap,st=!!C.gradientMap,gt=!!C.alphaMap,wt=C.alphaTest>0,Ut=!!C.alphaHash,$t=!!C.extensions;let He=La;C.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(He=o.toneMapping);const tn={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:Rt,fragmentShader:q,defines:C.defines,customVertexShaderID:dt,customFragmentShaderID:xt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Gt,batchingColor:Gt&&it._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&it.instanceColor!==null,instancingMorph:Bt&&it.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Tt===null?o.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:xs,alphaToCoverage:!!C.alphaToCoverage,map:Se,matcap:ce,envMap:Re,envMapMode:Re&&at.mapping,envMapCubeUVHeight:j,aoMap:z,lightMap:pn,bumpMap:re,normalMap:fe,displacementMap:S&&Wt,emissiveMap:Ce,normalMapObjectSpace:fe&&C.normalMapType===Qx,normalMapTangentSpace:fe&&C.normalMapType===Kx,metalnessMap:qt,roughnessMap:D,anisotropy:E,anisotropyMap:Dt,clearcoat:tt,clearcoatMap:zt,clearcoatNormalMap:pe,clearcoatRoughnessMap:yt,dispersion:ut,iridescence:vt,iridescenceMap:Ft,iridescenceThicknessMap:jt,sheen:ft,sheenColorMap:kt,sheenRoughnessMap:It,specularMap:ae,specularColorMap:Kt,specularIntensityMap:we,transmission:Vt,transmissionMap:k,thicknessMap:Nt,gradientMap:st,opaque:C.transparent===!1&&C.blending===fs&&C.alphaToCoverage===!1,alphaMap:gt,alphaTest:wt,alphaHash:Ut,combine:C.combine,mapUv:Se&&w(C.map.channel),aoMapUv:z&&w(C.aoMap.channel),lightMapUv:pn&&w(C.lightMap.channel),bumpMapUv:re&&w(C.bumpMap.channel),normalMapUv:fe&&w(C.normalMap.channel),displacementMapUv:Wt&&w(C.displacementMap.channel),emissiveMapUv:Ce&&w(C.emissiveMap.channel),metalnessMapUv:qt&&w(C.metalnessMap.channel),roughnessMapUv:D&&w(C.roughnessMap.channel),anisotropyMapUv:Dt&&w(C.anisotropyMap.channel),clearcoatMapUv:zt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:pe&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:It&&w(C.sheenRoughnessMap.channel),specularMapUv:ae&&w(C.specularMap.channel),specularColorMapUv:Kt&&w(C.specularColorMap.channel),specularIntensityMapUv:we&&w(C.specularIntensityMap.channel),transmissionMapUv:k&&w(C.transmissionMap.channel),thicknessMapUv:Nt&&w(C.thicknessMap.channel),alphaMapUv:gt&&w(C.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(fe||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!ht.attributes.uv&&(Se||gt),fog:!!mt,useFog:C.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ct,skinning:it.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Et,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:He,decodeVideoTexture:Se&&C.map.isVideoTexture===!0&&Ae.getTransfer(C.map.colorSpace)===Ne,decodeVideoTextureEmissive:Ce&&C.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(C.emissiveMap.colorSpace)===Ne,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ki,flipSided:C.side===zn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:$t&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&C.extensions.multiDraw===!0||Gt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function g(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)A.push(F),A.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(P(A,C),O(A,C),A.push(o.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function P(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function O(C,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),C.push(d.mask)}function L(C){const A=R[C.type];let F;if(A){const ct=Ei[A];F=CS.clone(ct.uniforms)}else F=C.uniforms;return F}function G(C,A){let F;for(let ct=0,it=_.length;ct<it;ct++){const mt=_[ct];if(mt.cacheKey===A){F=mt,++F.usedTimes;break}}return F===void 0&&(F=new YT(o,A,C,u),_.push(F)),F}function H(C){if(--C.usedTimes===0){const A=_.indexOf(C);_[A]=_[_.length-1],_.pop(),C.destroy()}}function B(C){m.remove(C)}function K(){m.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:L,acquireProgram:G,releaseProgram:H,releaseShaderCache:B,programs:_,dispose:K}}function JT(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function $T(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function y_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function E_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(x,S,y,R,w,M){let g=o[e];return g===void 0?(g={id:x.id,object:x,geometry:S,material:y,groupOrder:R,renderOrder:x.renderOrder,z:w,group:M},o[e]=g):(g.id=x.id,g.object=x,g.geometry=S,g.material=y,g.groupOrder=R,g.renderOrder=x.renderOrder,g.z=w,g.group=M),e++,g}function d(x,S,y,R,w,M){const g=h(x,S,y,R,w,M);y.transmission>0?r.push(g):y.transparent===!0?l.push(g):i.push(g)}function m(x,S,y,R,w,M){const g=h(x,S,y,R,w,M);y.transmission>0?r.unshift(g):y.transparent===!0?l.unshift(g):i.unshift(g)}function p(x,S){i.length>1&&i.sort(x||$T),r.length>1&&r.sort(S||y_),l.length>1&&l.sort(S||y_)}function _(){for(let x=e,S=o.length;x<S;x++){const y=o[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function tb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new E_,o.set(r,[h])):l>=u.length?(h=new E_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function eb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Oe};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":i={color:new Oe,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function nb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let ib=0;function ab(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function rb(o){const e=new eb,i=nb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,u=new $e,h=new $e;function d(p){let _=0,x=0,S=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,R=0,w=0,M=0,g=0,P=0,O=0,L=0,G=0,H=0,B=0;p.sort(ab);for(let C=0,A=p.length;C<A;C++){const F=p[C],ct=F.color,it=F.intensity,mt=F.distance,ht=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=ct.r*it,x+=ct.g*it,S+=ct.b*it;else if(F.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(F.sh.coefficients[W],it);B++}else if(F.isDirectionalLight){const W=e.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const at=F.shadow,j=i.get(F);j.shadowIntensity=at.intensity,j.shadowBias=at.bias,j.shadowNormalBias=at.normalBias,j.shadowRadius=at.radius,j.shadowMapSize=at.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=ht,r.directionalShadowMatrix[y]=F.shadow.matrix,P++}r.directional[y]=W,y++}else if(F.isSpotLight){const W=e.get(F);W.position.setFromMatrixPosition(F.matrixWorld),W.color.copy(ct).multiplyScalar(it),W.distance=mt,W.coneCos=Math.cos(F.angle),W.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),W.decay=F.decay,r.spot[w]=W;const at=F.shadow;if(F.map&&(r.spotLightMap[G]=F.map,G++,at.updateMatrices(F),F.castShadow&&H++),r.spotLightMatrix[w]=at.matrix,F.castShadow){const j=i.get(F);j.shadowIntensity=at.intensity,j.shadowBias=at.bias,j.shadowNormalBias=at.normalBias,j.shadowRadius=at.radius,j.shadowMapSize=at.mapSize,r.spotShadow[w]=j,r.spotShadowMap[w]=ht,L++}w++}else if(F.isRectAreaLight){const W=e.get(F);W.color.copy(ct).multiplyScalar(it),W.halfWidth.set(F.width*.5,0,0),W.halfHeight.set(0,F.height*.5,0),r.rectArea[M]=W,M++}else if(F.isPointLight){const W=e.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity),W.distance=F.distance,W.decay=F.decay,F.castShadow){const at=F.shadow,j=i.get(F);j.shadowIntensity=at.intensity,j.shadowBias=at.bias,j.shadowNormalBias=at.normalBias,j.shadowRadius=at.radius,j.shadowMapSize=at.mapSize,j.shadowCameraNear=at.camera.near,j.shadowCameraFar=at.camera.far,r.pointShadow[R]=j,r.pointShadowMap[R]=ht,r.pointShadowMatrix[R]=F.shadow.matrix,O++}r.point[R]=W,R++}else if(F.isHemisphereLight){const W=e.get(F);W.skyColor.copy(F.color).multiplyScalar(it),W.groundColor.copy(F.groundColor).multiplyScalar(it),r.hemi[g]=W,g++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=S;const K=r.hash;(K.directionalLength!==y||K.pointLength!==R||K.spotLength!==w||K.rectAreaLength!==M||K.hemiLength!==g||K.numDirectionalShadows!==P||K.numPointShadows!==O||K.numSpotShadows!==L||K.numSpotMaps!==G||K.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=M,r.point.length=R,r.hemi.length=g,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=L+G-H,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=B,K.directionalLength=y,K.pointLength=R,K.spotLength=w,K.rectAreaLength=M,K.hemiLength=g,K.numDirectionalShadows=P,K.numPointShadows=O,K.numSpotShadows=L,K.numSpotMaps=G,K.numLightProbes=B,r.version=ib++)}function m(p,_){let x=0,S=0,y=0,R=0,w=0;const M=_.matrixWorldInverse;for(let g=0,P=p.length;g<P;g++){const O=p[g];if(O.isDirectionalLight){const L=r.directional[x];L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),x++}else if(O.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const L=r.rectArea[R];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),h.identity(),u.copy(O.matrixWorld),u.premultiply(M),h.extractRotation(u),L.halfWidth.set(O.width*.5,0,0),L.halfHeight.set(0,O.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),R++}else if(O.isPointLight){const L=r.point[S];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),S++}else if(O.isHemisphereLight){const L=r.hemi[w];L.direction.setFromMatrixPosition(O.matrixWorld),L.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:r}}function T_(o){const e=new rb(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function sb(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new T_(o),e.set(l,[d])):u>=h.length?(d=new T_(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lb=`uniform sampler2D shadow_pass;
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
}`;function cb(o,e,i){let r=new Z_;const l=new ze,u=new ze,h=new je,d=new zS({depthPacking:Zx}),m=new BS,p={},_=i.maxTextureSize,x={[Na]:zn,[zn]:Na,[Ki]:Ki},S=new Oa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:ob,fragmentShader:lb}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const R=new gr;R.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new bi(R,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b_;let g=this.type;this.render=function(H,B,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const C=o.getRenderTarget(),A=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),ct=o.state;ct.setBlending(Ua),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const it=g!==Zi&&this.type===Zi,mt=g===Zi&&this.type!==Zi;for(let ht=0,W=H.length;ht<W;ht++){const at=H[ht],j=at.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const St=j.getFrameExtents();if(l.multiply(St),u.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/St.x),l.x=u.x*St.x,j.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/St.y),l.y=u.y*St.y,j.mapSize.y=u.y)),j.map===null||it===!0||mt===!0){const nt=this.type!==Zi?{minFilter:gi,magFilter:gi}:{};j.map!==null&&j.map.dispose(),j.map=new mr(l.x,l.y,nt),j.map.texture.name=at.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const U=j.getViewportCount();for(let nt=0;nt<U;nt++){const Et=j.getViewport(nt);h.set(u.x*Et.x,u.y*Et.y,u.x*Et.z,u.y*Et.w),ct.viewport(h),j.updateMatrices(at,nt),r=j.getFrustum(),L(B,K,j.camera,at,this.type)}j.isPointLightShadow!==!0&&this.type===Zi&&P(j,K),j.needsUpdate=!1}g=this.type,M.needsUpdate=!1,o.setRenderTarget(C,A,F)};function P(H,B){const K=e.update(w);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new mr(l.x,l.y)),S.uniforms.shadow_pass.value=H.map.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(B,null,K,S,w,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(B,null,K,y,w,null)}function O(H,B,K,C){let A=null;const F=K.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(F!==void 0)A=F;else if(A=K.isPointLight===!0?m:d,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const ct=A.uuid,it=B.uuid;let mt=p[ct];mt===void 0&&(mt={},p[ct]=mt);let ht=mt[it];ht===void 0&&(ht=A.clone(),mt[it]=ht,B.addEventListener("dispose",G)),A=ht}if(A.visible=B.visible,A.wireframe=B.wireframe,C===Zi?A.side=B.shadowSide!==null?B.shadowSide:B.side:A.side=B.shadowSide!==null?B.shadowSide:x[B.side],A.alphaMap=B.alphaMap,A.alphaTest=B.alphaTest,A.map=B.map,A.clipShadows=B.clipShadows,A.clippingPlanes=B.clippingPlanes,A.clipIntersection=B.clipIntersection,A.displacementMap=B.displacementMap,A.displacementScale=B.displacementScale,A.displacementBias=B.displacementBias,A.wireframeLinewidth=B.wireframeLinewidth,A.linewidth=B.linewidth,K.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ct=o.properties.get(A);ct.light=K}return A}function L(H,B,K,C,A){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&A===Zi)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,H.matrixWorld);const it=e.update(H),mt=H.material;if(Array.isArray(mt)){const ht=it.groups;for(let W=0,at=ht.length;W<at;W++){const j=ht[W],St=mt[j.materialIndex];if(St&&St.visible){const U=O(H,St,C,A);H.onBeforeShadow(o,H,B,K,it,U,j),o.renderBufferDirect(K,null,it,U,H,j),H.onAfterShadow(o,H,B,K,it,U,j)}}}else if(mt.visible){const ht=O(H,mt,C,A);H.onBeforeShadow(o,H,B,K,it,ht,null),o.renderBufferDirect(K,null,it,ht,H,null),H.onAfterShadow(o,H,B,K,it,ht,null)}}const ct=H.children;for(let it=0,mt=ct.length;it<mt;it++)L(ct[it],B,K,C,A)}function G(H){H.target.removeEventListener("dispose",G);for(const K in p){const C=p[K],A=H.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const ub={[lh]:ch,[uh]:dh,[fh]:ph,[ps]:hh,[ch]:lh,[dh]:uh,[ph]:fh,[hh]:ps};function fb(o,e){function i(){let k=!1;const Nt=new je;let st=null;const gt=new je(0,0,0,0);return{setMask:function(wt){st!==wt&&!k&&(o.colorMask(wt,wt,wt,wt),st=wt)},setLocked:function(wt){k=wt},setClear:function(wt,Ut,$t,He,tn){tn===!0&&(wt*=He,Ut*=He,$t*=He),Nt.set(wt,Ut,$t,He),gt.equals(Nt)===!1&&(o.clearColor(wt,Ut,$t,He),gt.copy(Nt))},reset:function(){k=!1,st=null,gt.set(-1,0,0,0)}}}function r(){let k=!1,Nt=!1,st=null,gt=null,wt=null;return{setReversed:function(Ut){if(Nt!==Ut){const $t=e.get("EXT_clip_control");Nt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const He=wt;wt=null,this.setClear(He)}Nt=Ut},getReversed:function(){return Nt},setTest:function(Ut){Ut?Tt(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(Ut){st!==Ut&&!k&&(o.depthMask(Ut),st=Ut)},setFunc:function(Ut){if(Nt&&(Ut=ub[Ut]),gt!==Ut){switch(Ut){case lh:o.depthFunc(o.NEVER);break;case ch:o.depthFunc(o.ALWAYS);break;case uh:o.depthFunc(o.LESS);break;case ps:o.depthFunc(o.LEQUAL);break;case fh:o.depthFunc(o.EQUAL);break;case hh:o.depthFunc(o.GEQUAL);break;case dh:o.depthFunc(o.GREATER);break;case ph:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}gt=Ut}},setLocked:function(Ut){k=Ut},setClear:function(Ut){wt!==Ut&&(Nt&&(Ut=1-Ut),o.clearDepth(Ut),wt=Ut)},reset:function(){k=!1,st=null,gt=null,wt=null,Nt=!1}}}function l(){let k=!1,Nt=null,st=null,gt=null,wt=null,Ut=null,$t=null,He=null,tn=null;return{setTest:function(ye){k||(ye?Tt(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(ye){Nt!==ye&&!k&&(o.stencilMask(ye),Nt=ye)},setFunc:function(ye,Tn,bn){(st!==ye||gt!==Tn||wt!==bn)&&(o.stencilFunc(ye,Tn,bn),st=ye,gt=Tn,wt=bn)},setOp:function(ye,Tn,bn){(Ut!==ye||$t!==Tn||He!==bn)&&(o.stencilOp(ye,Tn,bn),Ut=ye,$t=Tn,He=bn)},setLocked:function(ye){k=ye},setClear:function(ye){tn!==ye&&(o.clearStencil(ye),tn=ye)},reset:function(){k=!1,Nt=null,st=null,gt=null,wt=null,Ut=null,$t=null,He=null,tn=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},x={},S=new WeakMap,y=[],R=null,w=!1,M=null,g=null,P=null,O=null,L=null,G=null,H=null,B=new Oe(0,0,0),K=0,C=!1,A=null,F=null,ct=null,it=null,mt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,at=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=at>=1):j.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=at>=2);let St=null,U={};const nt=o.getParameter(o.SCISSOR_BOX),Et=o.getParameter(o.VIEWPORT),Rt=new je().fromArray(nt),q=new je().fromArray(Et);function dt(k,Nt,st,gt){const wt=new Uint8Array(4),Ut=o.createTexture();o.bindTexture(k,Ut),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<st;$t++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,gt,0,o.RGBA,o.UNSIGNED_BYTE,wt):o.texImage2D(Nt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,wt);return Ut}const xt={};xt[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),xt[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xt[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Tt(o.DEPTH_TEST),h.setFunc(ps),re(!1),fe(Dg),Tt(o.CULL_FACE),z(Ua);function Tt(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function Ct(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function Bt(k,Nt){return x[k]!==Nt?(o.bindFramebuffer(k,Nt),x[k]=Nt,k===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Nt),k===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Gt(k,Nt){let st=y,gt=!1;if(k){st=S.get(Nt),st===void 0&&(st=[],S.set(Nt,st));const wt=k.textures;if(st.length!==wt.length||st[0]!==o.COLOR_ATTACHMENT0){for(let Ut=0,$t=wt.length;Ut<$t;Ut++)st[Ut]=o.COLOR_ATTACHMENT0+Ut;st.length=wt.length,gt=!0}}else st[0]!==o.BACK&&(st[0]=o.BACK,gt=!0);gt&&o.drawBuffers(st)}function Se(k){return R!==k?(o.useProgram(k),R=k,!0):!1}const ce={[cr]:o.FUNC_ADD,[Mx]:o.FUNC_SUBTRACT,[yx]:o.FUNC_REVERSE_SUBTRACT};ce[Ex]=o.MIN,ce[Tx]=o.MAX;const Re={[bx]:o.ZERO,[Ax]:o.ONE,[Rx]:o.SRC_COLOR,[sh]:o.SRC_ALPHA,[Nx]:o.SRC_ALPHA_SATURATE,[Ux]:o.DST_COLOR,[wx]:o.DST_ALPHA,[Cx]:o.ONE_MINUS_SRC_COLOR,[oh]:o.ONE_MINUS_SRC_ALPHA,[Lx]:o.ONE_MINUS_DST_COLOR,[Dx]:o.ONE_MINUS_DST_ALPHA,[Ox]:o.CONSTANT_COLOR,[Px]:o.ONE_MINUS_CONSTANT_COLOR,[zx]:o.CONSTANT_ALPHA,[Bx]:o.ONE_MINUS_CONSTANT_ALPHA};function z(k,Nt,st,gt,wt,Ut,$t,He,tn,ye){if(k===Ua){w===!0&&(Ct(o.BLEND),w=!1);return}if(w===!1&&(Tt(o.BLEND),w=!0),k!==Sx){if(k!==M||ye!==C){if((g!==cr||L!==cr)&&(o.blendEquation(o.FUNC_ADD),g=cr,L=cr),ye)switch(k){case fs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ug:o.blendFunc(o.ONE,o.ONE);break;case Lg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ng:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case fs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ug:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Lg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ng:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}P=null,O=null,G=null,H=null,B.set(0,0,0),K=0,M=k,C=ye}return}wt=wt||Nt,Ut=Ut||st,$t=$t||gt,(Nt!==g||wt!==L)&&(o.blendEquationSeparate(ce[Nt],ce[wt]),g=Nt,L=wt),(st!==P||gt!==O||Ut!==G||$t!==H)&&(o.blendFuncSeparate(Re[st],Re[gt],Re[Ut],Re[$t]),P=st,O=gt,G=Ut,H=$t),(He.equals(B)===!1||tn!==K)&&(o.blendColor(He.r,He.g,He.b,tn),B.copy(He),K=tn),M=k,C=!1}function pn(k,Nt){k.side===Ki?Ct(o.CULL_FACE):Tt(o.CULL_FACE);let st=k.side===zn;Nt&&(st=!st),re(st),k.blending===fs&&k.transparent===!1?z(Ua):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const gt=k.stencilWrite;d.setTest(gt),gt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ce(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Tt(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function re(k){A!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),A=k)}function fe(k){k!==_x?(Tt(o.CULL_FACE),k!==F&&(k===Dg?o.cullFace(o.BACK):k===vx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),F=k}function Wt(k){k!==ct&&(W&&o.lineWidth(k),ct=k)}function Ce(k,Nt,st){k?(Tt(o.POLYGON_OFFSET_FILL),(it!==Nt||mt!==st)&&(o.polygonOffset(Nt,st),it=Nt,mt=st)):Ct(o.POLYGON_OFFSET_FILL)}function qt(k){k?Tt(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function D(k){k===void 0&&(k=o.TEXTURE0+ht-1),St!==k&&(o.activeTexture(k),St=k)}function E(k,Nt,st){st===void 0&&(St===null?st=o.TEXTURE0+ht-1:st=St);let gt=U[st];gt===void 0&&(gt={type:void 0,texture:void 0},U[st]=gt),(gt.type!==k||gt.texture!==Nt)&&(St!==st&&(o.activeTexture(st),St=st),o.bindTexture(k,Nt||xt[k]),gt.type=k,gt.texture=Nt)}function tt(){const k=U[St];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ut(){try{o.compressedTexImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{o.texSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{o.texSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{o.texStorage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{o.texStorage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{o.texImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{o.texImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(k){Rt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),Rt.copy(k))}function It(k){q.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function ae(k,Nt){let st=p.get(Nt);st===void 0&&(st=new WeakMap,p.set(Nt,st));let gt=st.get(k);gt===void 0&&(gt=o.getUniformBlockIndex(Nt,k.name),st.set(k,gt))}function Kt(k,Nt){const gt=p.get(Nt).get(k);m.get(Nt)!==gt&&(o.uniformBlockBinding(Nt,gt,k.__bindingPointIndex),m.set(Nt,gt))}function we(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},St=null,U={},x={},S=new WeakMap,y=[],R=null,w=!1,M=null,g=null,P=null,O=null,L=null,G=null,H=null,B=new Oe(0,0,0),K=0,C=!1,A=null,F=null,ct=null,it=null,mt=null,Rt.set(0,0,o.canvas.width,o.canvas.height),q.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Tt,disable:Ct,bindFramebuffer:Bt,drawBuffers:Gt,useProgram:Se,setBlending:z,setMaterial:pn,setFlipSided:re,setCullFace:fe,setLineWidth:Wt,setPolygonOffset:Ce,setScissorTest:qt,activeTexture:D,bindTexture:E,unbindTexture:tt,compressedTexImage2D:ut,compressedTexImage3D:vt,texImage2D:Ft,texImage3D:jt,updateUBOMapping:ae,uniformBlockBinding:Kt,texStorage2D:pe,texStorage3D:yt,texSubImage2D:ft,texSubImage3D:Vt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:zt,scissor:kt,viewport:It,reset:we}}function hb(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ze,_=new WeakMap;let x;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,E){return y?new OffscreenCanvas(D,E):mc("canvas")}function w(D,E,tt){let ut=1;const vt=qt(D);if((vt.width>tt||vt.height>tt)&&(ut=tt/Math.max(vt.width,vt.height)),ut<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ft=Math.floor(ut*vt.width),Vt=Math.floor(ut*vt.height);x===void 0&&(x=R(ft,Vt));const Dt=E?R(ft,Vt):x;return Dt.width=ft,Dt.height=Vt,Dt.getContext("2d").drawImage(D,0,0,ft,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ft+"x"+Vt+")."),Dt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),D;return D}function M(D){return D.generateMipmaps}function g(D){o.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(D,E,tt,ut,vt=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ft=E;if(E===o.RED&&(tt===o.FLOAT&&(ft=o.R32F),tt===o.HALF_FLOAT&&(ft=o.R16F),tt===o.UNSIGNED_BYTE&&(ft=o.R8)),E===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ft=o.R8UI),tt===o.UNSIGNED_SHORT&&(ft=o.R16UI),tt===o.UNSIGNED_INT&&(ft=o.R32UI),tt===o.BYTE&&(ft=o.R8I),tt===o.SHORT&&(ft=o.R16I),tt===o.INT&&(ft=o.R32I)),E===o.RG&&(tt===o.FLOAT&&(ft=o.RG32F),tt===o.HALF_FLOAT&&(ft=o.RG16F),tt===o.UNSIGNED_BYTE&&(ft=o.RG8)),E===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ft=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ft=o.RG16UI),tt===o.UNSIGNED_INT&&(ft=o.RG32UI),tt===o.BYTE&&(ft=o.RG8I),tt===o.SHORT&&(ft=o.RG16I),tt===o.INT&&(ft=o.RG32I)),E===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),tt===o.UNSIGNED_INT&&(ft=o.RGB32UI),tt===o.BYTE&&(ft=o.RGB8I),tt===o.SHORT&&(ft=o.RGB16I),tt===o.INT&&(ft=o.RGB32I)),E===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ft=o.RGBA32UI),tt===o.BYTE&&(ft=o.RGBA8I),tt===o.SHORT&&(ft=o.RGBA16I),tt===o.INT&&(ft=o.RGBA32I)),E===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),E===o.RGBA){const Vt=vt?dc:Ae.getTransfer(ut);tt===o.FLOAT&&(ft=o.RGBA32F),tt===o.HALF_FLOAT&&(ft=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ft=Vt===Ne?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function L(D,E){let tt;return D?E===null||E===pr||E===_s?tt=o.DEPTH24_STENCIL8:E===Qi?tt=o.DEPTH32F_STENCIL8:E===Ro&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===pr||E===_s?tt=o.DEPTH_COMPONENT24:E===Qi?tt=o.DEPTH_COMPONENT32F:E===Ro&&(tt=o.DEPTH_COMPONENT16),tt}function G(D,E){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==gi&&D.minFilter!==Ti?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function H(D){const E=D.target;E.removeEventListener("dispose",H),K(E),E.isVideoTexture&&_.delete(E)}function B(D){const E=D.target;E.removeEventListener("dispose",B),A(E)}function K(D){const E=r.get(D);if(E.__webglInit===void 0)return;const tt=D.source,ut=S.get(tt);if(ut){const vt=ut[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&C(D),Object.keys(ut).length===0&&S.delete(tt)}r.remove(D)}function C(D){const E=r.get(D);o.deleteTexture(E.__webglTexture);const tt=D.source,ut=S.get(tt);delete ut[E.__cacheKey],h.memory.textures--}function A(D){const E=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let vt=0;vt<E.__webglFramebuffer[ut].length;vt++)o.deleteFramebuffer(E.__webglFramebuffer[ut][vt]);else o.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)o.deleteFramebuffer(E.__webglFramebuffer[ut]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=D.textures;for(let ut=0,vt=tt.length;ut<vt;ut++){const ft=r.get(tt[ut]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),r.remove(tt[ut])}r.remove(D)}let F=0;function ct(){F=0}function it(){const D=F;return D>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),F+=1,D}function mt(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ht(D,E){const tt=r.get(D);if(D.isVideoTexture&&Wt(D),D.isRenderTargetTexture===!1&&D.version>0&&tt.__version!==D.version){const ut=D.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(tt,D,E);return}}i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+E)}function W(D,E){const tt=r.get(D);if(D.version>0&&tt.__version!==D.version){q(tt,D,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+E)}function at(D,E){const tt=r.get(D);if(D.version>0&&tt.__version!==D.version){q(tt,D,E);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+E)}function j(D,E){const tt=r.get(D);if(D.version>0&&tt.__version!==D.version){dt(tt,D,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+E)}const St={[_h]:o.REPEAT,[fr]:o.CLAMP_TO_EDGE,[vh]:o.MIRRORED_REPEAT},U={[gi]:o.NEAREST,[Yx]:o.NEAREST_MIPMAP_NEAREST,[Fl]:o.NEAREST_MIPMAP_LINEAR,[Ti]:o.LINEAR,[Df]:o.LINEAR_MIPMAP_NEAREST,[hr]:o.LINEAR_MIPMAP_LINEAR},nt={[Jx]:o.NEVER,[aS]:o.ALWAYS,[$x]:o.LESS,[F_]:o.LEQUAL,[tS]:o.EQUAL,[iS]:o.GEQUAL,[eS]:o.GREATER,[nS]:o.NOTEQUAL};function Et(D,E){if(E.type===Qi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ti||E.magFilter===Df||E.magFilter===Fl||E.magFilter===hr||E.minFilter===Ti||E.minFilter===Df||E.minFilter===Fl||E.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,St[E.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,St[E.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,St[E.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,U[E.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,nt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===gi||E.minFilter!==Fl&&E.minFilter!==hr||E.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Rt(D,E){let tt=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",H));const ut=E.source;let vt=S.get(ut);vt===void 0&&(vt={},S.set(ut,vt));const ft=mt(E);if(ft!==D.__cacheKey){vt[ft]===void 0&&(vt[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),vt[ft].usedTimes++;const Vt=vt[D.__cacheKey];Vt!==void 0&&(vt[D.__cacheKey].usedTimes--,Vt.usedTimes===0&&C(E)),D.__cacheKey=ft,D.__webglTexture=vt[ft].texture}return tt}function q(D,E,tt){let ut=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=o.TEXTURE_3D);const vt=Rt(D,E),ft=E.source;i.bindTexture(ut,D.__webglTexture,o.TEXTURE0+tt);const Vt=r.get(ft);if(ft.version!==Vt.__version||vt===!0){i.activeTexture(o.TEXTURE0+tt);const Dt=Ae.getPrimaries(Ae.workingColorSpace),zt=E.colorSpace===Da?null:Ae.getPrimaries(E.colorSpace),pe=E.colorSpace===Da||Dt===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let yt=w(E.image,!1,l.maxTextureSize);yt=Ce(E,yt);const Ft=u.convert(E.format,E.colorSpace),jt=u.convert(E.type);let kt=O(E.internalFormat,Ft,jt,E.colorSpace,E.isVideoTexture);Et(ut,E);let It;const ae=E.mipmaps,Kt=E.isVideoTexture!==!0,we=Vt.__version===void 0||vt===!0,k=ft.dataReady,Nt=G(E,yt);if(E.isDepthTexture)kt=L(E.format===vs,E.type),we&&(Kt?i.texStorage2D(o.TEXTURE_2D,1,kt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,kt,yt.width,yt.height,0,Ft,jt,null));else if(E.isDataTexture)if(ae.length>0){Kt&&we&&i.texStorage2D(o.TEXTURE_2D,Nt,kt,ae[0].width,ae[0].height);for(let st=0,gt=ae.length;st<gt;st++)It=ae[st],Kt?k&&i.texSubImage2D(o.TEXTURE_2D,st,0,0,It.width,It.height,Ft,jt,It.data):i.texImage2D(o.TEXTURE_2D,st,kt,It.width,It.height,0,Ft,jt,It.data);E.generateMipmaps=!1}else Kt?(we&&i.texStorage2D(o.TEXTURE_2D,Nt,kt,yt.width,yt.height),k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,yt.width,yt.height,Ft,jt,yt.data)):i.texImage2D(o.TEXTURE_2D,0,kt,yt.width,yt.height,0,Ft,jt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Kt&&we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,kt,ae[0].width,ae[0].height,yt.depth);for(let st=0,gt=ae.length;st<gt;st++)if(It=ae[st],E.format!==mi)if(Ft!==null)if(Kt){if(k)if(E.layerUpdates.size>0){const wt=t_(It.width,It.height,E.format,E.type);for(const Ut of E.layerUpdates){const $t=It.data.subarray(Ut*wt/It.data.BYTES_PER_ELEMENT,(Ut+1)*wt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,st,0,0,Ut,It.width,It.height,1,Ft,$t)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,st,0,0,0,It.width,It.height,yt.depth,Ft,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,st,kt,It.width,It.height,yt.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,st,0,0,0,It.width,It.height,yt.depth,Ft,jt,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,st,kt,It.width,It.height,yt.depth,0,Ft,jt,It.data)}else{Kt&&we&&i.texStorage2D(o.TEXTURE_2D,Nt,kt,ae[0].width,ae[0].height);for(let st=0,gt=ae.length;st<gt;st++)It=ae[st],E.format!==mi?Ft!==null?Kt?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,st,0,0,It.width,It.height,Ft,It.data):i.compressedTexImage2D(o.TEXTURE_2D,st,kt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?k&&i.texSubImage2D(o.TEXTURE_2D,st,0,0,It.width,It.height,Ft,jt,It.data):i.texImage2D(o.TEXTURE_2D,st,kt,It.width,It.height,0,Ft,jt,It.data)}else if(E.isDataArrayTexture)if(Kt){if(we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,kt,yt.width,yt.height,yt.depth),k)if(E.layerUpdates.size>0){const st=t_(yt.width,yt.height,E.format,E.type);for(const gt of E.layerUpdates){const wt=yt.data.subarray(gt*st/yt.data.BYTES_PER_ELEMENT,(gt+1)*st/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,yt.width,yt.height,1,Ft,jt,wt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Ft,jt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,yt.width,yt.height,yt.depth,0,Ft,jt,yt.data);else if(E.isData3DTexture)Kt?(we&&i.texStorage3D(o.TEXTURE_3D,Nt,kt,yt.width,yt.height,yt.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Ft,jt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,kt,yt.width,yt.height,yt.depth,0,Ft,jt,yt.data);else if(E.isFramebufferTexture){if(we)if(Kt)i.texStorage2D(o.TEXTURE_2D,Nt,kt,yt.width,yt.height);else{let st=yt.width,gt=yt.height;for(let wt=0;wt<Nt;wt++)i.texImage2D(o.TEXTURE_2D,wt,kt,st,gt,0,Ft,jt,null),st>>=1,gt>>=1}}else if(ae.length>0){if(Kt&&we){const st=qt(ae[0]);i.texStorage2D(o.TEXTURE_2D,Nt,kt,st.width,st.height)}for(let st=0,gt=ae.length;st<gt;st++)It=ae[st],Kt?k&&i.texSubImage2D(o.TEXTURE_2D,st,0,0,Ft,jt,It):i.texImage2D(o.TEXTURE_2D,st,kt,Ft,jt,It);E.generateMipmaps=!1}else if(Kt){if(we){const st=qt(yt);i.texStorage2D(o.TEXTURE_2D,Nt,kt,st.width,st.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ft,jt,yt)}else i.texImage2D(o.TEXTURE_2D,0,kt,Ft,jt,yt);M(E)&&g(ut),Vt.__version=ft.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function dt(D,E,tt){if(E.image.length!==6)return;const ut=Rt(D,E),vt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+tt);const ft=r.get(vt);if(vt.version!==ft.__version||ut===!0){i.activeTexture(o.TEXTURE0+tt);const Vt=Ae.getPrimaries(Ae.workingColorSpace),Dt=E.colorSpace===Da?null:Ae.getPrimaries(E.colorSpace),zt=E.colorSpace===Da||Vt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const pe=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,Ft=[];for(let gt=0;gt<6;gt++)!pe&&!yt?Ft[gt]=w(E.image[gt],!0,l.maxCubemapSize):Ft[gt]=yt?E.image[gt].image:E.image[gt],Ft[gt]=Ce(E,Ft[gt]);const jt=Ft[0],kt=u.convert(E.format,E.colorSpace),It=u.convert(E.type),ae=O(E.internalFormat,kt,It,E.colorSpace),Kt=E.isVideoTexture!==!0,we=ft.__version===void 0||ut===!0,k=vt.dataReady;let Nt=G(E,jt);Et(o.TEXTURE_CUBE_MAP,E);let st;if(pe){Kt&&we&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,ae,jt.width,jt.height);for(let gt=0;gt<6;gt++){st=Ft[gt].mipmaps;for(let wt=0;wt<st.length;wt++){const Ut=st[wt];E.format!==mi?kt!==null?Kt?k&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt,0,0,Ut.width,Ut.height,kt,Ut.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt,ae,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt,0,0,Ut.width,Ut.height,kt,It,Ut.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt,ae,Ut.width,Ut.height,0,kt,It,Ut.data)}}}else{if(st=E.mipmaps,Kt&&we){st.length>0&&Nt++;const gt=qt(Ft[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,ae,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(yt){Kt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ft[gt].width,Ft[gt].height,kt,It,Ft[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ae,Ft[gt].width,Ft[gt].height,0,kt,It,Ft[gt].data);for(let wt=0;wt<st.length;wt++){const $t=st[wt].image[gt].image;Kt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt+1,0,0,$t.width,$t.height,kt,It,$t.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt+1,ae,$t.width,$t.height,0,kt,It,$t.data)}}else{Kt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,kt,It,Ft[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ae,kt,It,Ft[gt]);for(let wt=0;wt<st.length;wt++){const Ut=st[wt];Kt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt+1,0,0,kt,It,Ut.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt+1,ae,kt,It,Ut.image[gt])}}}M(E)&&g(o.TEXTURE_CUBE_MAP),ft.__version=vt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function xt(D,E,tt,ut,vt,ft){const Vt=u.convert(tt.format,tt.colorSpace),Dt=u.convert(tt.type),zt=O(tt.internalFormat,Vt,Dt,tt.colorSpace),pe=r.get(E),yt=r.get(tt);if(yt.__renderTarget=E,!pe.__hasExternalTextures){const Ft=Math.max(1,E.width>>ft),jt=Math.max(1,E.height>>ft);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ft,zt,Ft,jt,E.depth,0,Vt,Dt,null):i.texImage2D(vt,ft,zt,Ft,jt,0,Vt,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),fe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,vt,yt.__webglTexture,0,re(E)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,vt,yt.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Tt(D,E,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,D),E.depthBuffer){const ut=E.depthTexture,vt=ut&&ut.isDepthTexture?ut.type:null,ft=L(E.stencilBuffer,vt),Vt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=re(E);fe(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,ft,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,ft,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ft,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Vt,o.RENDERBUFFER,D)}else{const ut=E.textures;for(let vt=0;vt<ut.length;vt++){const ft=ut[vt],Vt=u.convert(ft.format,ft.colorSpace),Dt=u.convert(ft.type),zt=O(ft.internalFormat,Vt,Dt,ft.colorSpace),pe=re(E);tt&&fe(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,zt,E.width,E.height):fe(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pe,zt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,zt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ct(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=r.get(E.depthTexture);ut.__renderTarget=E,(!ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const vt=ut.__webglTexture,ft=re(E);if(E.depthTexture.format===hs)fe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(E.depthTexture.format===vs)fe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Bt(D){const E=r.get(D),tt=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ut=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",vt)};ut.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ut}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Ct(E.__webglFramebuffer,D)}else if(tt){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=o.createRenderbuffer(),Tt(E.__webglDepthbuffer[ut],D,!1);else{const vt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[ut];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ft)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Tt(E.__webglDepthbuffer,D,!1);else{const ut=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,vt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ut,o.RENDERBUFFER,vt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Gt(D,E,tt){const ut=r.get(D);E!==void 0&&xt(ut.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&Bt(D)}function Se(D){const E=D.texture,tt=r.get(D),ut=r.get(E);D.addEventListener("dispose",B);const vt=D.textures,ft=D.isWebGLCubeRenderTarget===!0,Vt=vt.length>1;if(Vt||(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=E.version,h.memory.textures++),ft){tt.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[Dt]=[];for(let zt=0;zt<E.mipmaps.length;zt++)tt.__webglFramebuffer[Dt][zt]=o.createFramebuffer()}else tt.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)tt.__webglFramebuffer[Dt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Vt)for(let Dt=0,zt=vt.length;Dt<zt;Dt++){const pe=r.get(vt[Dt]);pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&fe(D)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Dt=0;Dt<vt.length;Dt++){const zt=vt[Dt];tt.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Dt]);const pe=u.convert(zt.format,zt.colorSpace),yt=u.convert(zt.type),Ft=O(zt.internalFormat,pe,yt,zt.colorSpace,D.isXRRenderTarget===!0),jt=re(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Ft,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),Tt(tt.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),Et(o.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)xt(tt.__webglFramebuffer[Dt][zt],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,zt);else xt(tt.__webglFramebuffer[Dt],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let Dt=0,zt=vt.length;Dt<zt;Dt++){const pe=vt[Dt],yt=r.get(pe);i.bindTexture(o.TEXTURE_2D,yt.__webglTexture),Et(o.TEXTURE_2D,pe),xt(tt.__webglFramebuffer,D,pe,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),M(pe)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Dt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ut.__webglTexture),Et(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)xt(tt.__webglFramebuffer[zt],D,E,o.COLOR_ATTACHMENT0,Dt,zt);else xt(tt.__webglFramebuffer,D,E,o.COLOR_ATTACHMENT0,Dt,0);M(E)&&g(Dt),i.unbindTexture()}D.depthBuffer&&Bt(D)}function ce(D){const E=D.textures;for(let tt=0,ut=E.length;tt<ut;tt++){const vt=E[tt];if(M(vt)){const ft=P(D),Vt=r.get(vt).__webglTexture;i.bindTexture(ft,Vt),g(ft),i.unbindTexture()}}}const Re=[],z=[];function pn(D){if(D.samples>0){if(fe(D)===!1){const E=D.textures,tt=D.width,ut=D.height;let vt=o.COLOR_BUFFER_BIT;const ft=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Vt=r.get(D),Dt=E.length>1;if(Dt)for(let zt=0;zt<E.length;zt++)i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let zt=0;zt<E.length;zt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[zt]);const pe=r.get(E[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pe,0)}o.blitFramebuffer(0,0,tt,ut,0,0,tt,ut,vt,o.NEAREST),m===!0&&(Re.length=0,z.length=0,Re.push(o.COLOR_ATTACHMENT0+zt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Re.push(ft),z.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,z)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let zt=0;zt<E.length;zt++){i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[zt]);const pe=r.get(E[zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,pe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function re(D){return Math.min(l.maxSamples,D.samples)}function fe(D){const E=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Wt(D){const E=h.render.frame;_.get(D)!==E&&(_.set(D,E),D.update())}function Ce(D,E){const tt=D.colorSpace,ut=D.format,vt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||tt!==xs&&tt!==Da&&(Ae.getTransfer(tt)===Ne?(ut!==mi||vt!==ta)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function qt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=ct,this.setTexture2D=ht,this.setTexture2DArray=W,this.setTexture3D=at,this.setTextureCube=j,this.rebindTextures=Gt,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=fe}function db(o,e){function i(r,l=Da){let u;const h=Ae.getTransfer(l);if(r===ta)return o.UNSIGNED_BYTE;if(r===Kh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Qh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===D_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===C_)return o.BYTE;if(r===w_)return o.SHORT;if(r===Ro)return o.UNSIGNED_SHORT;if(r===Zh)return o.INT;if(r===pr)return o.UNSIGNED_INT;if(r===Qi)return o.FLOAT;if(r===Co)return o.HALF_FLOAT;if(r===U_)return o.ALPHA;if(r===L_)return o.RGB;if(r===mi)return o.RGBA;if(r===N_)return o.LUMINANCE;if(r===O_)return o.LUMINANCE_ALPHA;if(r===hs)return o.DEPTH_COMPONENT;if(r===vs)return o.DEPTH_STENCIL;if(r===P_)return o.RED;if(r===Jh)return o.RED_INTEGER;if(r===z_)return o.RG;if(r===$h)return o.RG_INTEGER;if(r===td)return o.RGBA_INTEGER;if(r===sc||r===oc||r===lc||r===cc)if(h===Ne)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===sc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===sc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===oc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xh||r===Sh||r===Mh||r===yh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===xh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Eh||r===Th||r===bh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Eh||r===Th)return h===Ne?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===bh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ah||r===Rh||r===Ch||r===wh||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===zh||r===Bh||r===Fh||r===Ih)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ah)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ch)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Oh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ph)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ih)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uc||r===Hh||r===Gh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===uc)return h===Ne?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===B_||r===Vh||r===kh||r===Xh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===uc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Vh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_s?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const pb={type:"move"};class rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,r),g=this._getHandJoint(p,w);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],S=_.position.distanceTo(x.position),y=.02,R=.005;p.inputState.pinching&&S>y+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(pb)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new nc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gb=`
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

}`;class _b{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Bn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Oa({vertexShader:mb,fragmentShader:gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bi(new xc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vb extends Ms{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,x=null,S=null,y=null,R=null;const w=new _b,M=i.getContextAttributes();let g=null,P=null;const O=[],L=[],G=new ze;let H=null;const B=new ri;B.viewport=new je;const K=new ri;K.viewport=new je;const C=[B,K],A=new IS;let F=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let dt=O[q];return dt===void 0&&(dt=new rh,O[q]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(q){let dt=O[q];return dt===void 0&&(dt=new rh,O[q]=dt),dt.getGripSpace()},this.getHand=function(q){let dt=O[q];return dt===void 0&&(dt=new rh,O[q]=dt),dt.getHandSpace()};function it(q){const dt=L.indexOf(q.inputSource);if(dt===-1)return;const xt=O[dt];xt!==void 0&&(xt.update(q.inputSource,q.frame,p||h),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function mt(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",mt),l.removeEventListener("inputsourceschange",ht);for(let q=0;q<O.length;q++){const dt=L[q];dt!==null&&(L[q]=null,O[q].disconnect(dt))}F=null,ct=null,w.reset(),e.setRenderTarget(g),y=null,S=null,x=null,l=null,P=null,Rt.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return x},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(g=e.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",mt),l.addEventListener("inputsourceschange",ht),M.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(G),l.enabledFeatures!==void 0&&l.enabledFeatures.includes("layers")){let xt=null,Tt=null,Ct=null;M.depth&&(Ct=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=M.stencil?vs:hs,Tt=M.stencil?_s:pr);const Bt={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:u};x=new XRWebGLBinding(l,i),S=x.createProjectionLayer(Bt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),P=new mr(S.textureWidth,S.textureHeight,{format:mi,type:ta,depthTexture:new K_(S.textureWidth,S.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}else{const xt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new mr(y.framebufferWidth,y.framebufferHeight,{format:mi,type:ta,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Rt.setContext(l),Rt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ht(q){for(let dt=0;dt<q.removed.length;dt++){const xt=q.removed[dt],Tt=L.indexOf(xt);Tt>=0&&(L[Tt]=null,O[Tt].disconnect(xt))}for(let dt=0;dt<q.added.length;dt++){const xt=q.added[dt];let Tt=L.indexOf(xt);if(Tt===-1){for(let Bt=0;Bt<O.length;Bt++)if(Bt>=L.length){L.push(xt),Tt=Bt;break}else if(L[Bt]===null){L[Bt]=xt,Tt=Bt;break}if(Tt===-1)break}const Ct=O[Tt];Ct&&Ct.connect(xt)}}const W=new rt,at=new rt;function j(q,dt,xt){W.setFromMatrixPosition(dt.matrixWorld),at.setFromMatrixPosition(xt.matrixWorld);const Tt=W.distanceTo(at),Ct=dt.projectionMatrix.elements,Bt=xt.projectionMatrix.elements,Gt=Ct[14]/(Ct[10]-1),Se=Ct[14]/(Ct[10]+1),ce=(Ct[9]+1)/Ct[5],Re=(Ct[9]-1)/Ct[5],z=(Ct[8]-1)/Ct[0],pn=(Bt[8]+1)/Bt[0],re=Gt*z,fe=Gt*pn,Wt=Tt/(-z+pn),Ce=Wt*-z;if(dt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ce),q.translateZ(Wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ct[10]===-1)q.projectionMatrix.copy(dt.projectionMatrix),q.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const qt=Gt+Wt,D=Se+Wt,E=re-Ce,tt=fe+(Tt-Ce),ut=ce*Se/D*qt,vt=Re*Se/D*qt;q.projectionMatrix.makePerspective(E,tt,ut,vt,qt,D),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function St(q,dt){dt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(dt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let dt=q.near,xt=q.far;w.texture!==null&&(w.depthNear>0&&(dt=w.depthNear),w.depthFar>0&&(xt=w.depthFar)),A.near=K.near=B.near=dt,A.far=K.far=B.far=xt,(F!==A.near||ct!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,ct=A.far),B.layers.mask=q.layers.mask|2,K.layers.mask=q.layers.mask|4,A.layers.mask=B.layers.mask|K.layers.mask;const Tt=q.parent,Ct=A.cameras;St(A,Tt);for(let Bt=0;Bt<Ct.length;Bt++)St(Ct[Bt],Tt);Ct.length===2?j(A,B,K):A.projectionMatrix.copy(B.projectionMatrix),U(q,A,Tt)};function U(q,dt,xt){xt===null?q.matrix.copy(dt.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(dt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(dt.projectionMatrix),q.projectionMatrixInverse.copy(dt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Wh*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(q){m=q,S!==null&&(S.fixedFoveation=q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let nt=null;function Et(q,dt){if(_=dt.getViewerPose(p||h),R=dt,_!==null){const xt=_.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Tt=!1;xt.length!==A.cameras.length&&(A.cameras.length=0,Tt=!0);for(let Bt=0;Bt<xt.length;Bt++){const Gt=xt[Bt];let Se=null;if(y!==null)Se=y.getViewport(Gt);else{const Re=x.getViewSubImage(S,Gt);Se=Re.viewport,Bt===0&&(e.setRenderTargetTextures(P,Re.colorTexture,S.ignoreDepthValues?void 0:Re.depthStencilTexture),e.setRenderTarget(P))}let ce=C[Bt];ce===void 0&&(ce=new ri,ce.layers.enable(Bt),ce.viewport=new je,C[Bt]=ce),ce.matrix.fromArray(Gt.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Gt.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Se.x,Se.y,Se.width,Se.height),Bt===0&&(A.matrix.copy(ce.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Tt===!0&&A.cameras.push(ce)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Bt=x.getDepthInformation(xt[0]);Bt&&Bt.isValid&&Bt.texture&&w.init(e,Bt,l.renderState)}}for(let xt=0;xt<O.length;xt++){const Tt=L[xt],Ct=O[xt];Tt!==null&&Ct!==void 0&&Ct.update(Tt,dt,p||h)}nt&&nt(q,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),R=null}const Rt=new Q_;Rt.setAnimationLoop(Et),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}}const sr=new ea,xb=new $e;function Sb(o,e){function i(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function r(M,g){g.color.getRGB(M.fogColor.value,q_(o)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function l(M,g,P,O,L){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(M,g):g.isMeshToonMaterial?(u(M,g),x(M,g)):g.isMeshPhongMaterial?(u(M,g),_(M,g)):g.isMeshStandardMaterial?(u(M,g),S(M,g),g.isMeshPhysicalMaterial&&y(M,g,L)):g.isMeshMatcapMaterial?(u(M,g),R(M,g)):g.isMeshDepthMaterial?u(M,g):g.isMeshDistanceMaterial?(u(M,g),w(M,g)):g.isMeshNormalMaterial?u(M,g):g.isLineBasicMaterial?(h(M,g),g.isLineDashedMaterial&&d(M,g)):g.isPointsMaterial?m(M,g,P,O):g.isSpriteMaterial?p(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,i(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===zn&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,i(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===zn&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,i(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,i(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const P=e.get(g),O=P.envMap,L=P.envMapRotation;O&&(M.envMap.value=O,sr.copy(L),sr.x*=-1,sr.y*=-1,sr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),M.envMapRotation.value.setFromMatrix4(xb.makeRotationFromEuler(sr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap&&(M.lightMap.value=g.lightMap,M.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,M.lightMapTransform)),g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,M.aoMapTransform))}function h(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform))}function d(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function m(M,g,P,O){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*P,M.scale.value=O*.5,g.map&&(M.map.value=g.map,i(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function p(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function _(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function x(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function S(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,M.roughnessMapTransform)),g.envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function y(M,g,P){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===zn&&M.clearcoatNormalScale.value.negate())),g.dispersion>0&&(M.dispersion.value=g.dispersion),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(M.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(M.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,g){g.matcap&&(M.matcap.value=g.matcap)}function w(M,g){const P=e.get(g).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Mb(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,O){const L=O.program;r.uniformBlockBinding(P,L)}function p(P,O){let L=l[P.id];L===void 0&&(R(P),L=_(P),l[P.id]=L,P.addEventListener("dispose",M));const G=O.program;r.updateUBOMapping(P,G);const H=e.render.frame;u[P.id]!==H&&(S(P),u[P.id]=H)}function _(P){const O=x();P.__bindingPointIndex=O;const L=o.createBuffer(),G=P.__size,H=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,G,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,L),L}function x(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const O=l[P.id],L=P.uniforms,G=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let H=0,B=L.length;H<B;H++){const K=Array.isArray(L[H])?L[H]:[L[H]];for(let C=0,A=K.length;C<A;C++){const F=K[C];if(y(F,H,C,G)===!0){const ct=F.__offset,it=Array.isArray(F.value)?F.value:[F.value];let mt=0;for(let ht=0;ht<it.length;ht++){const W=it[ht],at=w(W);typeof W=="number"||typeof W=="boolean"?(F.__data[0]=W,o.bufferSubData(o.UNIFORM_BUFFER,ct+mt,F.__data)):W.isMatrix3?(F.__data[0]=W.elements[0],F.__data[1]=W.elements[1],F.__data[2]=W.elements[2],F.__data[3]=0,F.__data[4]=W.elements[3],F.__data[5]=W.elements[4],F.__data[6]=W.elements[5],F.__data[7]=0,F.__data[8]=W.elements[6],F.__data[9]=W.elements[7],F.__data[10]=W.elements[8],F.__data[11]=0):(W.toArray(F.__data,mt),mt+=at.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ct,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(P,O,L,G){const H=P.value,B=O+"_"+L;if(G[B]===void 0)return typeof H=="number"||typeof H=="boolean"?G[B]=H:G[B]=H.clone(),!0;{const K=G[B];if(typeof H=="number"||typeof H=="boolean"){if(K!==H)return G[B]=H,!0}else if(K.equals(H)===!1)return K.copy(H),!0}return!1}function R(P){const O=P.uniforms;let L=0;const G=16;for(let B=0,K=O.length;B<K;B++){const C=Array.isArray(O[B])?O[B]:[O[B]];for(let A=0,F=C.length;A<F;A++){const ct=C[A],it=Array.isArray(ct.value)?ct.value:[ct.value];for(let mt=0,ht=it.length;mt<ht;mt++){const W=it[mt],at=w(W),j=L%G,St=j%at.boundary,U=j+St;L+=St,U!==0&&G-U<at.storage&&(L+=G-U),ct.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=L,L+=at.storage}}}const H=L%G;return H>0&&(L+=G-H),P.__size=L,P.__cache={},this}function w(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function M(P){const O=P.target;O.removeEventListener("dispose",M);const L=h.indexOf(O.__bindingPointIndex);h.splice(L,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function g(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class yb{constructor(e={}){const{canvas:i=sS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const R=new Uint32Array(4),w=new Int32Array(4);let M=null,g=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ai,this.toneMapping=La,this.toneMappingExposure=1;const L=this;let G=!1,H=0,B=0,K=null,C=-1,A=null;const F=new je,ct=new je;let it=null;const mt=new Oe(0);let ht=0,W=i.width,at=i.height,j=1,St=null,U=null;const nt=new je(0,0,W,at),Et=new je(0,0,W,at);let Rt=!1;const q=new Z_;let dt=!1,xt=!1;this.transmissionResolutionScale=1;const Tt=new $e,Ct=new $e,Bt=new rt,Gt=new je,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function Re(){return K===null?j:1}let z=r;function pn(b,X){return i.getContext(b,X)}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${jh}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",wt,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),z===null){const X="webgl2";if(z=pn(X,b),z===null)throw pn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let re,fe,Wt,Ce,qt,D,E,tt,ut,vt,ft,Vt,Dt,zt,pe,yt,Ft,jt,kt,It,ae,Kt,we,k;function Nt(){re=new UE(z),re.init(),Kt=new db(z,re),fe=new bE(z,re,e,Kt),Wt=new fb(z,re),fe.reverseDepthBuffer&&S&&Wt.buffers.depth.setReversed(!0),Ce=new OE(z),qt=new JT,D=new hb(z,re,Wt,qt,fe,Kt,Ce),E=new RE(L),tt=new DE(L),ut=new GS(z),we=new EE(z,ut),vt=new LE(z,ut,Ce,we),ft=new zE(z,vt,ut,Ce),kt=new PE(z,fe,D),yt=new AE(qt),Vt=new QT(L,E,tt,re,fe,we,yt),Dt=new Sb(L,qt),zt=new tb,pe=new sb(re),jt=new yE(L,E,tt,Wt,ft,y,m),Ft=new cb(L,ft,fe),k=new Mb(z,Ce,fe,Wt),It=new TE(z,re,Ce),ae=new NE(z,re,Ce),Ce.programs=Vt.programs,L.capabilities=fe,L.extensions=re,L.properties=qt,L.renderLists=zt,L.shadowMap=Ft,L.state=Wt,L.info=Ce}Nt();const st=new vb(L,z);this.xr=st,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(b){b!==void 0&&(j=b,this.setSize(W,at,!1))},this.getSize=function(b){return b.set(W,at)},this.setSize=function(b,X,$=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,at=X,i.width=Math.floor(b*j),i.height=Math.floor(X*j),$===!0&&(i.style.width=b+"px",i.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(W*j,at*j).floor()},this.setDrawingBufferSize=function(b,X,$){W=b,at=X,j=$,i.width=Math.floor(b*$),i.height=Math.floor(X*$),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(F)},this.getViewport=function(b){return b.copy(nt)},this.setViewport=function(b,X,$,Q){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,X,$,Q),Wt.viewport(F.copy(nt).multiplyScalar(j).round())},this.getScissor=function(b){return b.copy(Et)},this.setScissor=function(b,X,$,Q){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,X,$,Q),Wt.scissor(ct.copy(Et).multiplyScalar(j).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(b){Wt.setScissorTest(Rt=b)},this.setOpaqueSort=function(b){St=b},this.setTransparentSort=function(b){U=b},this.getClearColor=function(b){return b.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(b=!0,X=!0,$=!0){let Q=0;if(b){let Y=!1;if(K!==null){const Mt=K.texture.format;Y=Mt===td||Mt===$h||Mt===Jh}if(Y){const Mt=K.texture.type,At=Mt===ta||Mt===pr||Mt===Ro||Mt===_s||Mt===Kh||Mt===Qh,Pt=jt.getClearColor(),Ot=jt.getClearAlpha(),te=Pt.r,ee=Pt.g,Zt=Pt.b;At?(R[0]=te,R[1]=ee,R[2]=Zt,R[3]=Ot,z.clearBufferuiv(z.COLOR,0,R)):(w[0]=te,w[1]=ee,w[2]=Zt,w[3]=Ot,z.clearBufferiv(z.COLOR,0,w))}else Q|=z.COLOR_BUFFER_BIT}X&&(Q|=z.DEPTH_BUFFER_BIT),$&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",wt,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),jt.dispose(),zt.dispose(),pe.dispose(),qt.dispose(),E.dispose(),tt.dispose(),ft.dispose(),we.dispose(),k.dispose(),Vt.dispose(),st.dispose(),st.removeEventListener("sessionstart",Lo),st.removeEventListener("sessionend",Ts),_i.stop()};function gt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const b=Ce.autoReset,X=Ft.enabled,$=Ft.autoUpdate,Q=Ft.needsUpdate,Y=Ft.type;Nt(),Ce.autoReset=b,Ft.enabled=X,Ft.autoUpdate=$,Ft.needsUpdate=Q,Ft.type=Y}function Ut(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $t(b){const X=b.target;X.removeEventListener("dispose",$t),He(X)}function He(b){tn(b),qt.remove(b)}function tn(b){const X=qt.get(b).programs;X!==void 0&&(X.forEach(function($){Vt.releaseProgram($)}),b.isShaderMaterial&&Vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,$,Q,Y,Mt){X===null&&(X=Se);const At=Y.isMesh&&Y.matrixWorld.determinant()<0,Pt=Mc(b,X,$,Q,Y);Wt.setMaterial(Q,At);let Ot=$.index,te=1;if(Q.wireframe===!0){if(Ot=vt.getWireframeAttribute($),Ot===void 0)return;te=2}const ee=$.drawRange,Zt=$.attributes.position;let me=ee.start*te,ge=(ee.start+ee.count)*te;Mt!==null&&(me=Math.max(me,Mt.start*te),ge=Math.min(ge,(Mt.start+Mt.count)*te)),Ot!==null?(me=Math.max(me,0),ge=Math.min(ge,Ot.count)):Zt!=null&&(me=Math.max(me,0),ge=Math.min(ge,Zt.count));const Ie=ge-me;if(Ie<0||Ie===1/0)return;we.setup(Y,Q,Pt,$,Ot);let Ee,ne=It;if(Ot!==null&&(Ee=ut.get(Ot),ne=ae,ne.setIndex(Ee)),Y.isMesh)Q.wireframe===!0?(Wt.setLineWidth(Q.wireframeLinewidth*Re()),ne.setMode(z.LINES)):ne.setMode(z.TRIANGLES);else if(Y.isLine){let Qt=Q.linewidth;Qt===void 0&&(Qt=1),Wt.setLineWidth(Qt*Re()),Y.isLineSegments?ne.setMode(z.LINES):Y.isLineLoop?ne.setMode(z.LINE_LOOP):ne.setMode(z.LINE_STRIP)}else Y.isPoints?ne.setMode(z.POINTS):Y.isSprite&&ne.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ne.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))ne.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Qt=Y._multiDrawStarts,an=Y._multiDrawCounts,_e=Y._multiDrawCount,Un=Ot?ut.get(Ot).bytesPerElement:1,si=qt.get(Q).currentProgram.getUniforms();for(let An=0;An<_e;An++)si.setValue(z,"_gl_DrawID",An),ne.render(Qt[An]/Un,an[An])}else if(Y.isInstancedMesh)ne.renderInstances(me,Ie,Y.count);else if($.isInstancedBufferGeometry){const Qt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,an=Math.min($.instanceCount,Qt);ne.renderInstances(me,Ie,an)}else ne.render(me,Ie)};function ye(b,X,$){b.transparent===!0&&b.side===Ki&&b.forceSinglePass===!1?(b.side=zn,b.needsUpdate=!0,nn(b,X,$),b.side=Na,b.needsUpdate=!0,nn(b,X,$),b.side=Ki):nn(b,X,$)}this.compile=function(b,X,$=null){$===null&&($=b),g=pe.get($),g.init(X),O.push(g),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),b!==$&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const Q=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Mt=Y.material;if(Mt)if(Array.isArray(Mt))for(let At=0;At<Mt.length;At++){const Pt=Mt[At];ye(Pt,$,Y),Q.add(Pt)}else ye(Mt,$,Y),Q.add(Mt)}),O.pop(),g=null,Q},this.compileAsync=function(b,X,$=null){const Q=this.compile(b,X,$);return new Promise(Y=>{function Mt(){if(Q.forEach(function(At){qt.get(At).currentProgram.isReady()&&Q.delete(At)}),Q.size===0){Y(b);return}setTimeout(Mt,10)}re.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Tn=null;function bn(b){Tn&&Tn(b)}function Lo(){_i.stop()}function Ts(){_i.start()}const _i=new Q_;_i.setAnimationLoop(bn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(b){Tn=b,st.setAnimationLoop(b),b===null?_i.stop():_i.start()},st.addEventListener("sessionstart",Lo),st.addEventListener("sessionend",Ts),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(X),X=st.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,X,K),g=pe.get(b,O.length),g.init(X),O.push(g),Ct.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),q.setFromProjectionMatrix(Ct),xt=this.localClippingEnabled,dt=yt.init(this.clippingPlanes,xt),M=zt.get(b,P.length),M.init(),P.push(M),st.enabled===!0&&st.isPresenting===!0){const Mt=L.xr.getDepthSensingMesh();Mt!==null&&_r(Mt,X,-1/0,L.sortObjects)}_r(b,X,0,L.sortObjects),M.finish(),L.sortObjects===!0&&M.sort(St,U),ce=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,ce&&jt.addToRenderList(M,b),this.info.render.frame++,dt===!0&&yt.beginShadows();const $=g.state.shadowsArray;Ft.render($,b,X),dt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=M.opaque,Y=M.transmissive;if(g.setupLights(),X.isArrayCamera){const Mt=X.cameras;if(Y.length>0)for(let At=0,Pt=Mt.length;At<Pt;At++){const Ot=Mt[At];No(Q,Y,b,Ot)}ce&&jt.render(b);for(let At=0,Pt=Mt.length;At<Pt;At++){const Ot=Mt[At];bs(M,b,Ot,Ot.viewport)}}else Y.length>0&&No(Q,Y,b,X),ce&&jt.render(b),bs(M,b,X);K!==null&&B===0&&(D.updateMultisampleRenderTarget(K),D.updateRenderTargetMipmap(K)),b.isScene===!0&&b.onAfterRender(L,b,X),we.resetDefaultState(),C=-1,A=null,O.pop(),O.length>0?(g=O[O.length-1],dt===!0&&yt.setGlobalState(L.clippingPlanes,g.state.camera)):g=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function _r(b,X,$,Q){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){Q&&Gt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ct);const At=ft.update(b),Pt=b.material;Pt.visible&&M.push(b,At,Pt,$,Gt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const At=ft.update(b),Pt=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Gt.copy(b.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Gt.copy(At.boundingSphere.center)),Gt.applyMatrix4(b.matrixWorld).applyMatrix4(Ct)),Array.isArray(Pt)){const Ot=At.groups;for(let te=0,ee=Ot.length;te<ee;te++){const Zt=Ot[te],me=Pt[Zt.materialIndex];me&&me.visible&&M.push(b,At,me,$,Gt.z,Zt)}}else Pt.visible&&M.push(b,At,Pt,$,Gt.z,null)}}const Mt=b.children;for(let At=0,Pt=Mt.length;At<Pt;At++)_r(Mt[At],X,$,Q)}function bs(b,X,$,Q){const Y=b.opaque,Mt=b.transmissive,At=b.transparent;g.setupLightsView($),dt===!0&&yt.setGlobalState(L.clippingPlanes,$),Q&&Wt.viewport(F.copy(Q)),Y.length>0&&Fn(Y,X,$),Mt.length>0&&Fn(Mt,X,$),At.length>0&&Fn(At,X,$),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function No(b,X,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new mr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Co:ta,minFilter:hr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const Mt=g.state.transmissionRenderTarget[Q.id],At=Q.viewport||F;Mt.setSize(At.z*L.transmissionResolutionScale,At.w*L.transmissionResolutionScale);const Pt=L.getRenderTarget();L.setRenderTarget(Mt),L.getClearColor(mt),ht=L.getClearAlpha(),ht<1&&L.setClearColor(16777215,.5),L.clear(),ce&&jt.render($);const Ot=L.toneMapping;L.toneMapping=La;const te=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),dt===!0&&yt.setGlobalState(L.clippingPlanes,Q),Fn(b,$,Q),D.updateMultisampleRenderTarget(Mt),D.updateRenderTargetMipmap(Mt),re.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Zt=0,me=X.length;Zt<me;Zt++){const ge=X[Zt],Ie=ge.object,Ee=ge.geometry,ne=ge.material,Qt=ge.group;if(ne.side===Ki&&Ie.layers.test(Q.layers)){const an=ne.side;ne.side=zn,ne.needsUpdate=!0,en(Ie,$,Q,Ee,ne,Qt),ne.side=an,ne.needsUpdate=!0,ee=!0}}ee===!0&&(D.updateMultisampleRenderTarget(Mt),D.updateRenderTargetMipmap(Mt))}L.setRenderTarget(Pt),L.setClearColor(mt,ht),te!==void 0&&(Q.viewport=te),L.toneMapping=Ot}function Fn(b,X,$){const Q=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Mt=b.length;Y<Mt;Y++){const At=b[Y],Pt=At.object,Ot=At.geometry,te=Q===null?At.material:Q,ee=At.group;Pt.layers.test($.layers)&&en(Pt,X,$,Ot,te,ee)}}function en(b,X,$,Q,Y,Mt){b.onBeforeRender(L,X,$,Q,Y,Mt),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(L,X,$,Q,b,Mt),Y.transparent===!0&&Y.side===Ki&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,L.renderBufferDirect($,X,Q,Y,b,Mt),Y.side=Na,Y.needsUpdate=!0,L.renderBufferDirect($,X,Q,Y,b,Mt),Y.side=Ki):L.renderBufferDirect($,X,Q,Y,b,Mt),b.onAfterRender(L,X,$,Q,Y,Mt)}function nn(b,X,$){X.isScene!==!0&&(X=Se);const Q=qt.get(b),Y=g.state.lights,Mt=g.state.shadowsArray,At=Y.state.version,Pt=Vt.getParameters(b,Y.state,Mt,X,$),Ot=Vt.getProgramCacheKey(Pt);let te=Q.programs;Q.environment=b.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(b.isMeshStandardMaterial?tt:E).get(b.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,te===void 0&&(b.addEventListener("dispose",$t),te=new Map,Q.programs=te);let ee=te.get(Ot);if(ee!==void 0){if(Q.currentProgram===ee&&Q.lightsStateVersion===At)return vr(b,Pt),ee}else Pt.uniforms=Vt.getUniforms(b),b.onBeforeCompile(Pt,L),ee=Vt.acquireProgram(Pt,Ot),te.set(Ot,ee),Q.uniforms=Pt.uniforms;const Zt=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Zt.clippingPlanes=yt.uniform),vr(b,Pt),Q.needsLights=Oo(b),Q.lightsStateVersion=At,Q.needsLights&&(Zt.ambientLightColor.value=Y.state.ambient,Zt.lightProbe.value=Y.state.probe,Zt.directionalLights.value=Y.state.directional,Zt.directionalLightShadows.value=Y.state.directionalShadow,Zt.spotLights.value=Y.state.spot,Zt.spotLightShadows.value=Y.state.spotShadow,Zt.rectAreaLights.value=Y.state.rectArea,Zt.ltc_1.value=Y.state.rectAreaLTC1,Zt.ltc_2.value=Y.state.rectAreaLTC2,Zt.pointLights.value=Y.state.point,Zt.pointLightShadows.value=Y.state.pointShadow,Zt.hemisphereLights.value=Y.state.hemi,Zt.directionalShadowMap.value=Y.state.directionalShadowMap,Zt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Zt.spotShadowMap.value=Y.state.spotShadowMap,Zt.spotLightMatrix.value=Y.state.spotLightMatrix,Zt.spotLightMap.value=Y.state.spotLightMap,Zt.pointShadowMap.value=Y.state.pointShadowMap,Zt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=ee,Q.uniformsList=null,ee}function Ri(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=fc.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function vr(b,X){const $=qt.get(b);$.outputColorSpace=X.outputColorSpace,$.batching=X.batching,$.batchingColor=X.batchingColor,$.instancing=X.instancing,$.instancingColor=X.instancingColor,$.instancingMorph=X.instancingMorph,$.skinning=X.skinning,$.morphTargets=X.morphTargets,$.morphNormals=X.morphNormals,$.morphColors=X.morphColors,$.morphTargetsCount=X.morphTargetsCount,$.numClippingPlanes=X.numClippingPlanes,$.numIntersection=X.numClipIntersection,$.vertexAlphas=X.vertexAlphas,$.vertexTangents=X.vertexTangents,$.toneMapping=X.toneMapping}function Mc(b,X,$,Q,Y){X.isScene!==!0&&(X=Se),D.resetTextureUnits();const Mt=X.fog,At=Q.isMeshStandardMaterial?X.environment:null,Pt=K===null?L.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:xs,Ot=(Q.isMeshStandardMaterial?tt:E).get(Q.envMap||At),te=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ee=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Zt=!!$.morphAttributes.position,me=!!$.morphAttributes.normal,ge=!!$.morphAttributes.color;let Ie=La;Q.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ie=L.toneMapping);const Ee=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ne=Ee!==void 0?Ee.length:0,Qt=qt.get(Q),an=g.state.lights;if(dt===!0&&(xt===!0||b!==A)){const ke=b===A&&Q.id===C;yt.setState(Q,b,ke)}let _e=!1;Q.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==an.state.version||Qt.outputColorSpace!==Pt||Y.isBatchedMesh&&Qt.batching===!1||!Y.isBatchedMesh&&Qt.batching===!0||Y.isBatchedMesh&&Qt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Qt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Qt.instancing===!1||!Y.isInstancedMesh&&Qt.instancing===!0||Y.isSkinnedMesh&&Qt.skinning===!1||!Y.isSkinnedMesh&&Qt.skinning===!0||Y.isInstancedMesh&&Qt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Qt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Qt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Qt.instancingMorph===!1&&Y.morphTexture!==null||Qt.envMap!==Ot||Q.fog===!0&&Qt.fog!==Mt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==yt.numPlanes||Qt.numIntersection!==yt.numIntersection)||Qt.vertexAlphas!==te||Qt.vertexTangents!==ee||Qt.morphTargets!==Zt||Qt.morphNormals!==me||Qt.morphColors!==ge||Qt.toneMapping!==Ie||Qt.morphTargetsCount!==ne)&&(_e=!0):(_e=!0,Qt.__version=Q.version);let Un=Qt.currentProgram;_e===!0&&(Un=nn(Q,X,Y));let si=!1,An=!1,cn=!1;const De=Un.getUniforms(),Rn=Qt.uniforms;if(Wt.useProgram(Un.program)&&(si=!0,An=!0,cn=!0),Q.id!==C&&(C=Q.id,An=!0),si||A!==b){Wt.buffers.depth.getReversed()?(Tt.copy(b.projectionMatrix),lS(Tt),cS(Tt),De.setValue(z,"projectionMatrix",Tt)):De.setValue(z,"projectionMatrix",b.projectionMatrix),De.setValue(z,"viewMatrix",b.matrixWorldInverse);const mn=De.map.cameraPosition;mn!==void 0&&mn.setValue(z,Bt.setFromMatrixPosition(b.matrixWorld)),fe.logarithmicDepthBuffer&&De.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&De.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,An=!0,cn=!0)}if(Y.isSkinnedMesh){De.setOptional(z,Y,"bindMatrix"),De.setOptional(z,Y,"bindMatrixInverse");const ke=Y.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),De.setValue(z,"boneTexture",ke.boneTexture,D))}Y.isBatchedMesh&&(De.setOptional(z,Y,"batchingTexture"),De.setValue(z,"batchingTexture",Y._matricesTexture,D),De.setOptional(z,Y,"batchingIdTexture"),De.setValue(z,"batchingIdTexture",Y._indirectTexture,D),De.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&De.setValue(z,"batchingColorTexture",Y._colorsTexture,D));const xn=$.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&kt.update(Y,$,Un),(An||Qt.receiveShadow!==Y.receiveShadow)&&(Qt.receiveShadow=Y.receiveShadow,De.setValue(z,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Rn.envMap.value=Ot,Rn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(Rn.envMapIntensity.value=X.environmentIntensity),An&&(De.setValue(z,"toneMappingExposure",L.toneMappingExposure),Qt.needsLights&&yc(Rn,cn),Mt&&Q.fog===!0&&Dt.refreshFogUniforms(Rn,Mt),Dt.refreshMaterialUniforms(Rn,Q,j,at,g.state.transmissionRenderTarget[b.id]),fc.upload(z,Ri(Qt),Rn,D)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(fc.upload(z,Ri(Qt),Rn,D),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&De.setValue(z,"center",Y.center),De.setValue(z,"modelViewMatrix",Y.modelViewMatrix),De.setValue(z,"normalMatrix",Y.normalMatrix),De.setValue(z,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const ke=Q.uniformsGroups;for(let mn=0,xr=ke.length;mn<xr;mn++){const Ln=ke[mn];k.update(Ln,Un),k.bind(Ln,Un)}}return Un}function yc(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Oo(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,X,$){qt.get(b.texture).__webglTexture=X,qt.get(b.depthTexture).__webglTexture=$;const Q=qt.get(b);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,X){const $=qt.get(b);$.__webglFramebuffer=X,$.__useDefaultFramebuffer=X===void 0};const Pa=z.createFramebuffer();this.setRenderTarget=function(b,X=0,$=0){K=b,H=X,B=$;let Q=!0,Y=null,Mt=!1,At=!1;if(b){const Ot=qt.get(b);if(Ot.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1;else if(Ot.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(Ot.__hasExternalTextures)D.rebindTextures(b,qt.get(b.texture).__webglTexture,qt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Zt=b.depthTexture;if(Ot.__boundDepthTexture!==Zt){if(Zt!==null&&qt.has(Zt)&&(b.width!==Zt.image.width||b.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const te=b.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(At=!0);const ee=qt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ee[X])?Y=ee[X][$]:Y=ee[X],Mt=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?Y=qt.get(b).__webglMultisampledFramebuffer:Array.isArray(ee)?Y=ee[$]:Y=ee,F.copy(b.viewport),ct.copy(b.scissor),it=b.scissorTest}else F.copy(nt).multiplyScalar(j).floor(),ct.copy(Et).multiplyScalar(j).floor(),it=Rt;if($!==0&&(Y=Pa),Wt.bindFramebuffer(z.FRAMEBUFFER,Y)&&Q&&Wt.drawBuffers(b,Y),Wt.viewport(F),Wt.scissor(ct),Wt.setScissorTest(it),Mt){const Ot=qt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ot.__webglTexture,$)}else if(At){const Ot=qt.get(b.texture),te=X;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ot.__webglTexture,$,te)}else if(b!==null&&$!==0){const Ot=qt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ot.__webglTexture,$)}C=-1},this.readRenderTargetPixels=function(b,X,$,Q,Y,Mt,At){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=qt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){Wt.bindFramebuffer(z.FRAMEBUFFER,Pt);try{const Ot=b.texture,te=Ot.format,ee=Ot.type;if(!fe.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-Q&&$>=0&&$<=b.height-Y&&z.readPixels(X,$,Q,Y,Kt.convert(te),Kt.convert(ee),Mt)}finally{const Ot=K!==null?qt.get(K).__webglFramebuffer:null;Wt.bindFramebuffer(z.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(b,X,$,Q,Y,Mt,At){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=qt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){const Ot=b.texture,te=Ot.format,ee=Ot.type;if(!fe.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=b.width-Q&&$>=0&&$<=b.height-Y){Wt.bindFramebuffer(z.FRAMEBUFFER,Pt);const Zt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Zt),z.bufferData(z.PIXEL_PACK_BUFFER,Mt.byteLength,z.STREAM_READ),z.readPixels(X,$,Q,Y,Kt.convert(te),Kt.convert(ee),0);const me=K!==null?qt.get(K).__webglFramebuffer:null;Wt.bindFramebuffer(z.FRAMEBUFFER,me);const ge=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await oS(z,ge,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Zt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Mt),z.deleteBuffer(Zt),z.deleteSync(ge),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,X=null,$=0){b.isTexture!==!0&&(cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1]);const Q=Math.pow(2,-$),Y=Math.floor(b.image.width*Q),Mt=Math.floor(b.image.height*Q),At=X!==null?X.x:0,Pt=X!==null?X.y:0;D.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,At,Pt,Y,Mt),Wt.unbindTexture()};const As=z.createFramebuffer(),Ci=z.createFramebuffer();this.copyTextureToTexture=function(b,X,$=null,Q=null,Y=0,Mt=null){b.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,b=arguments[1],X=arguments[2],Mt=arguments[3]||0,$=null),Mt===null&&(Y!==0?(cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=Y,Y=0):Mt=0);let At,Pt,Ot,te,ee,Zt,me,ge,Ie;const Ee=b.isCompressedTexture?b.mipmaps[Mt]:b.image;if($!==null)At=$.max.x-$.min.x,Pt=$.max.y-$.min.y,Ot=$.isBox3?$.max.z-$.min.z:1,te=$.min.x,ee=$.min.y,Zt=$.isBox3?$.min.z:0;else{const xn=Math.pow(2,-Y);At=Math.floor(Ee.width*xn),Pt=Math.floor(Ee.height*xn),b.isDataArrayTexture?Ot=Ee.depth:b.isData3DTexture?Ot=Math.floor(Ee.depth*xn):Ot=1,te=0,ee=0,Zt=0}Q!==null?(me=Q.x,ge=Q.y,Ie=Q.z):(me=0,ge=0,Ie=0);const ne=Kt.convert(X.format),Qt=Kt.convert(X.type);let an;X.isData3DTexture?(D.setTexture3D(X,0),an=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),an=z.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),an=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const _e=z.getParameter(z.UNPACK_ROW_LENGTH),Un=z.getParameter(z.UNPACK_IMAGE_HEIGHT),si=z.getParameter(z.UNPACK_SKIP_PIXELS),An=z.getParameter(z.UNPACK_SKIP_ROWS),cn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ee.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ee.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,te),z.pixelStorei(z.UNPACK_SKIP_ROWS,ee),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Zt);const De=b.isDataArrayTexture||b.isData3DTexture,Rn=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const xn=qt.get(b),ke=qt.get(X),mn=qt.get(xn.__renderTarget),xr=qt.get(ke.__renderTarget);Wt.bindFramebuffer(z.READ_FRAMEBUFFER,mn.__webglFramebuffer),Wt.bindFramebuffer(z.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let Ln=0;Ln<Ot;Ln++)De&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qt.get(b).__webglTexture,Y,Zt+Ln),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qt.get(X).__webglTexture,Mt,Ie+Ln)),z.blitFramebuffer(te,ee,At,Pt,me,ge,At,Pt,z.DEPTH_BUFFER_BIT,z.NEAREST);Wt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||qt.has(b)){const xn=qt.get(b),ke=qt.get(X);Wt.bindFramebuffer(z.READ_FRAMEBUFFER,As),Wt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ci);for(let mn=0;mn<Ot;mn++)De?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,xn.__webglTexture,Y,Zt+mn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,xn.__webglTexture,Y),Rn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.__webglTexture,Mt,Ie+mn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ke.__webglTexture,Mt),Y!==0?z.blitFramebuffer(te,ee,At,Pt,me,ge,At,Pt,z.COLOR_BUFFER_BIT,z.NEAREST):Rn?z.copyTexSubImage3D(an,Mt,me,ge,Ie+mn,te,ee,At,Pt):z.copyTexSubImage2D(an,Mt,me,ge,te,ee,At,Pt);Wt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Rn?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(an,Mt,me,ge,Ie,At,Pt,Ot,ne,Qt,Ee.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(an,Mt,me,ge,Ie,At,Pt,Ot,ne,Ee.data):z.texSubImage3D(an,Mt,me,ge,Ie,At,Pt,Ot,ne,Qt,Ee):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Mt,me,ge,At,Pt,ne,Qt,Ee.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Mt,me,ge,Ee.width,Ee.height,ne,Ee.data):z.texSubImage2D(z.TEXTURE_2D,Mt,me,ge,At,Pt,ne,Qt,Ee);z.pixelStorei(z.UNPACK_ROW_LENGTH,_e),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Un),z.pixelStorei(z.UNPACK_SKIP_PIXELS,si),z.pixelStorei(z.UNPACK_SKIP_ROWS,An),z.pixelStorei(z.UNPACK_SKIP_IMAGES,cn),Mt===0&&X.generateMipmaps&&z.generateMipmap(an),Wt.unbindTexture()},this.copyTextureToTexture3D=function(b,X,$=null,Q=null,Y=0){return b.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Q=arguments[1]||null,b=arguments[2],X=arguments[3],Y=arguments[4]||0),cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,X,$,Q,Y)},this.initRenderTarget=function(b){qt.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),Wt.unbindTexture()},this.resetState=function(){H=0,B=0,K=null,Wt.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const Eb=()=>bt.jsxs(bt.Fragment,{children:[bt.jsx("p",{children:"Welcome to my personal website!"}),bt.jsx("p",{children:"My name is Antero Lindell. I'm a programmer and a professional nerd. I studied at Metropolia UAS majoring in Game Development. I'm especially experienced in game engine design, low-level programming languages, and graphics APIs and multimedia libraries such as OpenGL, WebGPU, SDL, Raylib, DirectX and Vulkan."}),bt.jsx("p",{children:"The first programming language I learned was ActionScript at the early age of 12 which was the language used for making Flash games. After experimenting some time with Flash I quickly upgraded to languages such as C# and JavaScript eventually falling in love with C."})]}),Tb=()=>{const o=["./images/cpp.png","./images/c.png","./images/linux.png","./images/go.png","./images/unity.png","./images/git.png","./images/java.png","./images/aws.png","./images/cs.png","./images/js.png","./images/gl.png","./images/vulkan.png","./images/directx.png","./images/wgpu.png","./images/py.png"];return bt.jsx("div",{className:"grid gap-4 p-4",style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridAutoRows:"auto",maxWidth:"600px",margin:"0 auto"},children:o.map((e,i)=>bt.jsx("div",{className:"bg-gray-200 rounded-xl",style:{width:"100%",aspectRatio:"1",overflow:"auto"},children:bt.jsx("img",{src:e,alt:`Image ${i+1}`,className:"w-full h-full object-cover"})},i))})},bb=()=>{const o=hc.useRef(null);return hc.useEffect(()=>{const e=o.current,i=new NS,r=new ri(75,e.clientWidth/e.clientHeight,.1,1e3),l=new yb;l.setSize(e.clientWidth,e.clientHeight),e.appendChild(l.domElement);const u=new ys,h=[new wa({color:"red"}),new wa({color:"blue"}),new wa({color:"green"}),new wa({color:"yellow"}),new wa({color:"purple"}),new wa({color:"orange"})],d=new bi(u,h);i.add(d),r.position.z=3;const m=()=>{d.rotation.x+=.01,d.rotation.y+=.01,l.render(i,r),requestAnimationFrame(m)};return m(),()=>{e.removeChild(l.domElement)}},[]),bt.jsxs(bt.Fragment,{children:[bt.jsx("div",{ref:o,style:{width:"100%",height:"85%"}}),bt.jsxs("div",{className:"github-link-banner",children:[bt.jsx("img",{src:"./github.png",alt:"GitHub icon"}),bt.jsx("a",{href:"https://github.com/anteroul",children:"👉 ☕Link to my GitHub 🖥️ 👈"}),bt.jsx("img",{src:"./github.png",alt:"GitHub icon"})]})]})},Ab=()=>bt.jsxs(bt.Fragment,{children:[bt.jsx("h5",{children:"CONTACT ME!"}),bt.jsx("br",{}),bt.jsxs("div",{class:"socials",children:[bt.jsxs("a",{href:"https://github.com/anteroul",children:[bt.jsx("img",{src:"./github_small.png"})," - GitHub"]}),bt.jsxs("a",{href:"https://www.linkedin.com/in/uljas-lindell/",children:[bt.jsx("img",{src:"./linkedin.png"})," - LinkedIn"]}),bt.jsxs("a",{href:"mailto:valiant.lindenvalley@proton.me",children:[bt.jsx("img",{src:"./email.png"})," - Email"]})]})]});function Rb({onPageChange:o}){return bt.jsx(gc,{title:"About Me",content:bt.jsx(Eb,{}),toggleSidebar:!0,onPageChange:o})}function Cb({onPageChange:o}){return bt.jsx(gc,{title:"My Skills",content:bt.jsx(Tb,{}),toggleSidebar:!1,onPageChange:o})}function wb({onPageChange:o}){return bt.jsx(gc,{title:"Portfolio",content:bt.jsx(bb,{}),toggleSidebar:!1,onPageChange:o})}function Db({onPageChange:o}){return bt.jsx(gc,{title:"Portfolio",content:bt.jsx(Ab,{}),toggleSidebar:!0,onPageChange:o})}function Ub(){const[o,e]=hc.useState(0),i=new Date().getFullYear(),r=()=>{switch(o){default:break;case 1:return bt.jsx(Rb,{onPageChange:e});case 2:return bt.jsx(Cb,{onPageChange:e});case 3:return bt.jsx(wb,{onPageChange:e});case 4:return bt.jsx(Db,{onPageChange:e})}};return bt.jsxs(bt.Fragment,{children:[bt.jsx("h1",{children:"Uljas Antero Lindell | Everything Close to the Hardware"}),bt.jsx(mx,{onPageChange:e}),bt.jsx("br",{}),bt.jsx("div",{id:"page-content",children:r()}),bt.jsxs("p",{id:"footer",children:["© Uljas Antero Lindell ",i]})]})}px.createRoot(document.getElementById("root")).render(bt.jsx(hc.StrictMode,{children:bt.jsx(Ub,{})}));
