var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var E=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function D(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,D(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(E,`$&/`)+`/`),D(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(E,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=D(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=D(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return D(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return D(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,T());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():S=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,E=re.port2;re.port1.onmessage=ne,T=function(){E.postMessage(null)}}else T=function(){_(ne,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,T()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),E=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var D=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===D?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function j(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function M(e,t){le++,ce[le]=e.current,e.current=t}var N=ue(null),de=ue(null),fe=ue(null),pe=ue(null);function me(e,t){switch(M(fe,t),M(de,e),M(N,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}j(N),M(N,e)}function he(){j(N),j(de),j(fe)}function ge(e){e.memoizedState!==null&&M(pe,e);var t=N.current,n=Hd(t,e.type);t!==n&&(M(de,e),M(N,n))}function _e(e){de.current===e&&(j(N),j(de)),pe.current===e&&(j(pe),Qf._currentValue=A)}var ve,ye;function be(e){if(ve===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ve=t&&t[1]||``,ye=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ve+e+ye}var xe=!1;function Se(e,t){if(!e||xe)return``;xe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{xe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?be(n):``}function Ce(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be(`Lazy`);case 13:return e.child!==t&&t!==null?be(`Suspense Fallback`):be(`Suspense`);case 19:return be(`SuspenseList`);case 0:case 15:return Se(e.type,!1);case 11:return Se(e.type.render,!1);case 1:return Se(e.type,!0);case 31:return be(`Activity`);default:return``}}function we(e){try{var t=``,n=null;do t+=Ce(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Te=Object.prototype.hasOwnProperty,Ee=t.unstable_scheduleCallback,De=t.unstable_cancelCallback,Oe=t.unstable_shouldYield,ke=t.unstable_requestPaint,Ae=t.unstable_now,je=t.unstable_getCurrentPriorityLevel,Me=t.unstable_ImmediatePriority,Ne=t.unstable_UserBlockingPriority,Pe=t.unstable_NormalPriority,Fe=t.unstable_LowPriority,Ie=t.unstable_IdlePriority,Le=t.log,Re=t.unstable_setDisableYieldValue,ze=null,Be=null;function Ve(e){if(typeof Le==`function`&&Re(e),Be&&typeof Be.setStrictMode==`function`)try{Be.setStrictMode(ze,e)}catch{}}var P=Math.clz32?Math.clz32:We,He=Math.log,Ue=Math.LN2;function We(e){return e>>>=0,e===0?32:31-(He(e)/Ue|0)|0}var F=256,Ge=262144,Ke=4194304;function qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Je(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=qe(n))):i=qe(o):i=qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=qe(n))):i=qe(o)):i=qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ye(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ze(){var e=Ke;return Ke<<=1,!(Ke&62914560)&&(Ke=4194304),e}function Qe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $e(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function et(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-P(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&tt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function tt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-P(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function nt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-P(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function rt(e,t){var n=t&-t;return n=n&42?1:it(n),(n&(e.suspendedLanes|t))===0?n:0}function it(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function at(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ot(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function st(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var ct=Math.random().toString(36).slice(2),I=`__reactFiber$`+ct,lt=`__reactProps$`+ct,ut=`__reactContainer$`+ct,dt=`__reactEvents$`+ct,ft=`__reactListeners$`+ct,pt=`__reactHandles$`+ct,mt=`__reactResources$`+ct,ht=`__reactMarker$`+ct;function gt(e){delete e[I],delete e[lt],delete e[dt],delete e[ft],delete e[pt]}function _t(e){var t=e[I];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[I]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[I])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function vt(e){if(e=e[I]||e[ut]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function yt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function bt(e){var t=e[mt];return t||=e[mt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function xt(e){e[ht]=!0}var St=new Set,Ct={};function wt(e,t){Tt(e,t),Tt(e+`Capture`,t)}function Tt(e,t){for(Ct[e]=t,e=0;e<t.length;e++)St.add(t[e])}var Et=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Dt={},Ot={};function kt(e){return Te.call(Ot,e)?!0:Te.call(Dt,e)?!1:Et.test(e)?Ot[e]=!0:(Dt[e]=!0,!1)}function At(e,t,n){if(kt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function jt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Mt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Nt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Pt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ft(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function It(e){if(!e._valueTracker){var t=Pt(e)?`checked`:`value`;e._valueTracker=Ft(e,t,``+e[t])}}function Lt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Pt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Rt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var zt=/[\n"\\]/g;function Bt(e){return e.replace(zt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Vt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Nt(t)):e.value!==``+Nt(t)&&(e.value=``+Nt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ut(e,o,Nt(n)):Ut(e,o,Nt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Nt(s):e.removeAttribute(`name`)}function Ht(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){It(e);return}n=n==null?``:``+Nt(n),t=t==null?n:``+Nt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),It(e)}function Ut(e,t,n){t===`number`&&Rt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Wt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Nt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gt(e,t,n){if(t!=null&&(t=``+Nt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Nt(n)}function Kt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Nt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),It(e)}function qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Yt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Jt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Xt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Yt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Yt(e,o,t[o])}function Zt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Qt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),$t=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function en(e){return $t.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function tn(){}var nn=null;function rn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var an=null,on=null;function sn(e){var t=vt(e);if(t&&(e=t.stateNode)){var n=e[lt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Vt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Bt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[lt]||null;if(!a)throw Error(i(90));Vt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Lt(r)}break a;case`textarea`:Gt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Wt(e,!!n.multiple,t,!1)}}}var cn=!1;function ln(e,t,n){if(cn)return e(t,n);cn=!0;try{return e(t)}finally{if(cn=!1,(an!==null||on!==null)&&(bu(),an&&(t=an,e=on,on=an=null,sn(t),e)))for(t=0;t<e.length;t++)sn(e[t])}}function un(e,t){var n=e.stateNode;if(n===null)return null;var r=n[lt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var dn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),fn=!1;if(dn)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){fn=!0}}),window.addEventListener(`test`,pn,pn),window.removeEventListener(`test`,pn,pn)}catch{fn=!1}var mn=null,hn=null,gn=null;function _n(){if(gn)return gn;var e,t=hn,n=t.length,r,i=`value`in mn?mn.value:mn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return gn=i.slice(e,1<r?1-r:void 0)}function vn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yn(){return!0}function bn(){return!1}function xn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?yn:bn,this.isPropagationStopped=bn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=yn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=yn)},persist:function(){},isPersistent:yn}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cn=xn(Sn),wn=h({},Sn,{view:0,detail:0}),Tn=xn(wn),En,Dn,On,kn=h({},wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==On&&(On&&e.type===`mousemove`?(En=e.screenX-On.screenX,Dn=e.screenY-On.screenY):Dn=En=0,On=e),En)},movementY:function(e){return`movementY`in e?e.movementY:Dn}}),An=xn(kn),jn=xn(h({},kn,{dataTransfer:0})),Mn=xn(h({},wn,{relatedTarget:0})),Nn=xn(h({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0})),Pn=xn(h({},Sn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Fn=xn(h({},Sn,{data:0})),In={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Ln={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Rn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function zn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rn[e])?!!t[e]:!1}function Bn(){return zn}var Vn=xn(h({},wn,{key:function(e){if(e.key){var t=In[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=vn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Ln[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bn,charCode:function(e){return e.type===`keypress`?vn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?vn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Hn=xn(h({},kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Un=xn(h({},wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bn})),Wn=xn(h({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Gn=xn(h({},kn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Kn=xn(h({},Sn,{newState:0,oldState:0})),qn=[9,13,27,32],Jn=dn&&`CompositionEvent`in window,Yn=null;dn&&`documentMode`in document&&(Yn=document.documentMode);var Xn=dn&&`TextEvent`in window&&!Yn,Zn=dn&&(!Jn||Yn&&8<Yn&&11>=Yn),Qn=` `,$n=!1;function er(e,t){switch(e){case`keyup`:return qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function tr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var nr=!1;function rr(e,t){switch(e){case`compositionend`:return tr(t);case`keypress`:return t.which===32?($n=!0,Qn):null;case`textInput`:return e=t.data,e===Qn&&$n?null:e;default:return null}}function ir(e,t){if(nr)return e===`compositionend`||!Jn&&er(e,t)?(e=_n(),gn=hn=mn=null,nr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Zn&&t.locale!==`ko`?null:t.data;default:return null}}var ar={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ar[e.type]:t===`textarea`}function sr(e,t,n,r){an?on?on.push(r):on=[r]:an=r,t=Ed(t,`onChange`),0<t.length&&(n=new Cn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var cr=null,lr=null;function ur(e){yd(e,0)}function dr(e){if(Lt(yt(e)))return e}function fr(e,t){if(e===`change`)return t}var pr=!1;if(dn){var mr;if(dn){var hr=`oninput`in document;if(!hr){var gr=document.createElement(`div`);gr.setAttribute(`oninput`,`return;`),hr=typeof gr.oninput==`function`}mr=hr}else mr=!1;pr=mr&&(!document.documentMode||9<document.documentMode)}function _r(){cr&&(cr.detachEvent(`onpropertychange`,vr),lr=cr=null)}function vr(e){if(e.propertyName===`value`&&dr(lr)){var t=[];sr(t,lr,e,rn(e)),ln(ur,t)}}function yr(e,t,n){e===`focusin`?(_r(),cr=t,lr=n,cr.attachEvent(`onpropertychange`,vr)):e===`focusout`&&_r()}function br(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return dr(lr)}function xr(e,t){if(e===`click`)return dr(t)}function Sr(e,t){if(e===`input`||e===`change`)return dr(t)}function Cr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var wr=typeof Object.is==`function`?Object.is:Cr;function Tr(e,t){if(wr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Te.call(t,i)||!wr(e[i],t[i]))return!1}return!0}function Er(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dr(e,t){var n=Er(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Er(n)}}function Or(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Or(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Rt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rt(e.document)}return t}function Ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var jr=dn&&`documentMode`in document&&11>=document.documentMode,Mr=null,Nr=null,Pr=null,Fr=!1;function Ir(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fr||Mr==null||Mr!==Rt(r)||(r=Mr,`selectionStart`in r&&Ar(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&Tr(Pr,r)||(Pr=r,r=Ed(Nr,`onSelect`),0<r.length&&(t=new Cn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Mr)))}function Lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Rr={animationend:Lr(`Animation`,`AnimationEnd`),animationiteration:Lr(`Animation`,`AnimationIteration`),animationstart:Lr(`Animation`,`AnimationStart`),transitionrun:Lr(`Transition`,`TransitionRun`),transitionstart:Lr(`Transition`,`TransitionStart`),transitioncancel:Lr(`Transition`,`TransitionCancel`),transitionend:Lr(`Transition`,`TransitionEnd`)},zr={},Br={};dn&&(Br=document.createElement(`div`).style,`AnimationEvent`in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),`TransitionEvent`in window||delete Rr.transitionend.transition);function Vr(e){if(zr[e])return zr[e];if(!Rr[e])return e;var t=Rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Br)return zr[e]=t[n];return e}var Hr=Vr(`animationend`),Ur=Vr(`animationiteration`),Wr=Vr(`animationstart`),Gr=Vr(`transitionrun`),Kr=Vr(`transitionstart`),qr=Vr(`transitioncancel`),Jr=Vr(`transitionend`),Yr=new Map,Xr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Xr.push(`scrollEnd`);function Zr(e,t){Yr.set(e,t),wt(t,[e])}var Qr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},$r=[],ei=0,ti=0;function ni(){for(var e=ei,t=ti=ei=0;t<e;){var n=$r[t];$r[t++]=null;var r=$r[t];$r[t++]=null;var i=$r[t];$r[t++]=null;var a=$r[t];if($r[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&oi(n,i,a)}}function ri(e,t,n,r){$r[ei++]=e,$r[ei++]=t,$r[ei++]=n,$r[ei++]=r,ti|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ii(e,t,n,r){return ri(e,t,n,r),si(e)}function ai(e,t){return ri(e,null,null,t),si(e)}function oi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-P(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function si(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ci={};function li(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(e,t,n,r){return new li(e,t,n,r)}function di(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fi(e,t){var n=e.alternate;return n===null?(n=ui(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function pi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)di(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,N.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=ui(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return hi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ui(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=ui(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=ui(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ui(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function hi(e,t,n,r){return e=ui(7,e,r,t),e.lanes=n,e}function gi(e,t,n){return e=ui(6,e,null,t),e.lanes=n,e}function _i(e){var t=ui(18,null,null,0);return t.stateNode=e,t}function vi(e,t,n){return t=ui(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var yi=new WeakMap;function bi(e,t){if(typeof e==`object`&&e){var n=yi.get(e);return n===void 0?(t={value:e,source:t,stack:we(t)},yi.set(e,t),t):n}return{value:e,source:t,stack:we(t)}}var xi=[],Si=0,Ci=null,wi=0,Ti=[],Ei=0,Di=null,Oi=1,ki=``;function Ai(e,t){xi[Si++]=wi,xi[Si++]=Ci,Ci=e,wi=t}function ji(e,t,n){Ti[Ei++]=Oi,Ti[Ei++]=ki,Ti[Ei++]=Di,Di=e;var r=Oi;e=ki;var i=32-P(r)-1;r&=~(1<<i),n+=1;var a=32-P(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Oi=1<<32-P(t)+i|n<<i|r,ki=a+e}else Oi=1<<a|n<<i|r,ki=e}function Mi(e){e.return!==null&&(Ai(e,1),ji(e,1,0))}function Ni(e){for(;e===Ci;)Ci=xi[--Si],xi[Si]=null,wi=xi[--Si],xi[Si]=null;for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,ki=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null}function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=ki,Ti[Ei++]=Di,Oi=t.id,ki=t.overflow,Di=e}var Fi=null,L=null,R=!1,Ii=null,Li=!1,Ri=Error(i(519));function zi(e){throw Gi(bi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ri}function Bi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[I]=e,t[lt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Ht(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Kt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=tn),t=!0):t=!1,t||zi(e,!0)}function Vi(e){for(Fi=e.return;Fi;)switch(Fi.tag){case 5:case 31:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Fi=Fi.return}}function Hi(e){if(e!==Fi)return!1;if(!R)return Vi(e),R=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&L&&zi(e),Vi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=uf(e)}else t===27?(t=L,Zd(e.type)?(e=lf,lf=null,L=e):L=t):L=Fi?cf(e.stateNode.nextSibling):null;return!0}function Ui(){L=Fi=null,R=!1}function Wi(){var e=Ii;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ii=null),e}function Gi(e){Ii===null?Ii=[e]:Ii.push(e)}var Ki=ue(null),qi=null,Ji=null;function Yi(e,t,n){M(Ki,t._currentValue),t._currentValue=n}function Xi(e){e._currentValue=Ki.current,j(Ki)}function Zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Zi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Zi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function $i(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;wr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===pe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Qi(t,e,n,r),t.flags|=262144}function ea(e){for(e=e.firstContext;e!==null;){if(!wr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ta(e){qi=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function na(e){return ia(qi,e)}function ra(e,t){return qi===null&&ta(e),ia(e,t)}function ia(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ji===null){if(e===null)throw Error(i(308));Ji=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ji=Ji.next=t;return n}var aa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},oa=t.unstable_scheduleCallback,sa=t.unstable_NormalPriority,ca={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function la(){return{controller:new aa,data:new Map,refCount:0}}function ua(e){e.refCount--,e.refCount===0&&oa(sa,function(){e.controller.abort()})}var da=null,fa=0,pa=0,ma=null;function ha(e,t){if(da===null){var n=da=[];fa=0,pa=dd(),ma={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return fa++,t.then(ga,ga),t}function ga(){if(--fa===0&&da!==null){ma!==null&&(ma.status=`fulfilled`);var e=da;da=null,pa=0,ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _a(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var va=O.S;O.S=function(e,t){eu=Ae(),typeof t==`object`&&t&&typeof t.then==`function`&&ha(e,t),va!==null&&va(e,t)};var ya=ue(null);function ba(){var e=ya.current;return e===null?K.pooledCache:e}function xa(e,t){t===null?M(ya,ya.current):M(ya,t.pool)}function Sa(){var e=ba();return e===null?null:{parent:ca._currentValue,pool:e}}var Ca=Error(i(460)),wa=Error(i(474)),Ta=Error(i(542)),Ea={then:function(){}};function Da(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Oa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(tn,tn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e;default:if(typeof t.status==`string`)t.then(tn,tn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e}throw Aa=t,Ca}}function ka(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Aa=e,Ca):e}}var Aa=null;function ja(){if(Aa===null)throw Error(i(459));var e=Aa;return Aa=null,e}function Ma(e){if(e===Ca||e===Ta)throw Error(i(483))}var Na=null,Pa=0;function Fa(e){var t=Pa;return Pa+=1,Na===null&&(Na=[]),Oa(Na,e,t)}function Ia(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function La(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ra(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=fi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=gi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&ka(i)===t.type)?(t=a(t,n.props),Ia(t,n),t.return=e,t):(t=mi(n.type,n.key,n.props,null,e.mode,r),Ia(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=vi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=hi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=gi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=mi(t.type,t.key,t.props,null,e.mode,n),Ia(n,t),n.return=e,n;case v:return t=vi(t,e.mode,n),t.return=e,t;case T:return t=ka(t),f(e,t,n)}if(se(t)||ae(t))return t=hi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Fa(t),n);if(t.$$typeof===C)return f(e,ra(e,t),n);La(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=ka(n),p(e,t,n,r)}if(se(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Fa(n),r);if(n.$$typeof===C)return p(e,t,ra(e,n),r);La(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=ka(r),m(e,t,n,r,i)}if(se(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Fa(r),i);if(r.$$typeof===C)return m(e,t,n,ra(t,r),i);La(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),R&&Ai(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return R&&Ai(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),R&&Ai(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),R&&Ai(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return R&&Ai(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),R&&Ai(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&ka(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ia(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=hi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=mi(o.type,o.key,o.props,null,e.mode,c),Ia(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=vi(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=ka(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Fa(o),c);if(o.$$typeof===C)return b(e,r,ra(e,o),c);La(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=gi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Pa=0;var i=b(e,t,n,r);return Na=null,i}catch(t){if(t===Ca||t===Ta)throw t;var a=ui(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var za=Ra(!0),Ba=Ra(!1),Va=!1;function Ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ua(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=si(e),oi(e,null,n),t}return ri(e,r,t,n),si(e)}function Ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nt(e,n)}}function qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ja=!1;function Ya(){if(Ja){var e=ma;if(e!==null)throw e}}function Xa(e,t,n,r){Ja=!1;var i=e.updateQueue;Va=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===pa&&(Ja=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Va=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Za(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Za(n[e],t)}var $a=ue(null),eo=ue(0);function to(e,t){e=Wl,M(eo,e),M($a,t),Wl=e|t.baseLanes}function no(){M(eo,Wl),M($a,$a.current)}function ro(){Wl=eo.current,j($a),j(eo)}var io=ue(null),ao=null;function oo(e){var t=e.alternate;M(z,z.current&1),M(io,e),ao===null&&(t===null||$a.current!==null||t.memoizedState!==null)&&(ao=e)}function so(e){M(z,z.current),M(io,e),ao===null&&(ao=e)}function co(e){e.tag===22?(M(z,z.current),M(io,e),ao===null&&(ao=e)):lo(e)}function lo(){M(z,z.current),M(io,io.current)}function uo(e){j(io),ao===e&&(ao=null),j(z)}var z=ue(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var po=0,B=null,V=null,mo=null,ho=!1,go=!1,_o=!1,vo=0,yo=0,bo=null,xo=0;function H(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wr(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return po=a,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Bs:Vs,_o=!1,a=n(r,i),_o=!1,go&&(a=To(t,n,r,i)),wo(e),a}function wo(e){O.H=zs;var t=V!==null&&V.next!==null;if(po=0,mo=V=B=null,ho=!1,yo=0,bo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ea(e)&&(ic=!0))}function To(e,t,n,r){B=e;var a=0;do{if(go&&(bo=null),yo=0,go=!1,25<=a)throw Error(i(301));if(a+=1,mo=V=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=Hs,o=t(n,r)}while(go);return o}function Eo(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(V===null?null:V.memoizedState)!==e&&(B.flags|=1024),t}function Do(){var e=vo!==0;return vo=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(ho){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ho=!1}po=0,mo=V=B=null,go=!1,yo=vo=0,bo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mo===null?B.memoizedState=mo=e:mo=mo.next=e,mo}function jo(){if(V===null){var e=B.alternate;e=e===null?null:e.memoizedState}else e=V.next;var t=mo===null?B.memoizedState:mo.next;if(t!==null)mo=t,V=e;else{if(e===null)throw B.alternate===null?Error(i(467)):Error(i(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},mo===null?B.memoizedState=mo=e:mo=mo.next=e}return mo}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=yo;return yo+=1,bo===null&&(bo=[]),e=Oa(bo,e,t),t=B,(mo===null?t.memoizedState:mo.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return na(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=B.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=B.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),B.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=E;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),V,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(po&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===pa&&(d=!0);else if((po&p)===p){u=u.next,p===pa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,B.lanes|=p,Gl|=p;f=u.action,_o&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,B.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!wr(o,e.memoizedState)&&(ic=!0,d&&(n=ma,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);wr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=B,a=jo(),o=R;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!wr((V||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||mo!==null&&mo.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||po&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t=Mo(),B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wr(e,n)}catch{return!0}}function Go(e){var t=ai(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),_o){Ve(!0);try{n()}finally{Ve(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,V,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(R){var n=K.formState;if(n!==null){a:{var r=B;if(R){if(L){b:{for(var i=L,a=Li;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){L=cf(i.nextSibling),r=i.data===`F!`;break a}}zi(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,B,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,B,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,B,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(jo(),V,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===Ca?Ta:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(B.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=jo(),n=V;if(n!==null)return rs(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=B.updateQueue,t===null&&(t=Mo(),B.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return jo().memoizedState}function cs(e,t,n,r){var i=Ao();B.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;V!==null&&r!==null&&So(r,V.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(B.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=Mo(),B.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=jo().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),_o){Ve(!0);try{e()}finally{Ve(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||po&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),B.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return wr(n,t)?n:$a.current===null?!(po&42)||po&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),B.lanes|=e,Gl|=e,t):(e=xs(e,n,r),wr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Fs(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,_a(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,A,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:A,baseState:A,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:A},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return na(Qf)}function ks(){return jo().memoizedState}function As(){return jo().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Wa(n);var r=Ga(t,e,n);r!==null&&(hu(r,t,n),Ka(r,t,n)),t={cache:la()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ii(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,wr(s,o))return ri(e,t,i,0),K===null&&ni(),!1}catch{}if(n=ii(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ii(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===B||t!==null&&t===B}function Ls(e,t){go=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nt(e,n)}}var zs={readContext:na,use:Po,useCallback:H,useContext:H,useEffect:H,useImperativeHandle:H,useLayoutEffect:H,useInsertionEffect:H,useMemo:H,useReducer:H,useRef:H,useState:H,useDebugValue:H,useDeferredValue:H,useTransition:H,useSyncExternalStore:H,useId:H,useHostTransitionStatus:H,useFormState:H,useActionState:H,useOptimistic:H,useMemoCache:H,useCacheRefresh:H};zs.useEffectEvent=H;var Bs={readContext:na,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:na,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(_o){Ve(!0);try{e()}finally{Ve(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(_o){Ve(!0);try{n(t)}finally{Ve(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,B,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Ao(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,B,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=B,a=Ao();if(R){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=K.identifierPrefix;if(R){var n=ki,r=Oi;n=(r&~(1<<32-P(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=vo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=xo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,B,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=js.bind(null,B)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:na,use:Po,useCallback:ys,useContext:na,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(jo(),V.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(jo(),V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:na,use:Po,useCallback:ys,useContext:na,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=jo();return V===null?xs(n,e,t):Ss(n,V.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=jo();return V===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Wa(r);i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(hu(t,e,r),Ka(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Wa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(hu(t,e,r),Ka(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Wa(n);r.tag=2,t!=null&&(r.callback=t),t=Ga(e,r,n),t!==null&&(hu(t,e,n),Ka(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Tr(n,r)||!Tr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){Qr(e)}function Ys(e){console.error(e)}function Xs(e){Qr(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Wa(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Wa(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&$i(t,n,a,!0),n=io.current,n!==null){switch(n.tag){case 31:case 13:return ao===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(R)return t=io.current,t===null?(r!==Ri&&(t=Error(i(423),{cause:r}),Gi(bi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=bi(r,n),a=$s(e.stateNode,r,a),qa(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ri&&(e=Error(i(422),{cause:r}),Gi(bi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=bi(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=bi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),qa(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Ba(t,null,n,r):za(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ta(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(R&&s&&Mi(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!di(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=mi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Tr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=fi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Tr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&xa(t,a===null?null:a.cachePool),a===null?no():to(t,a),co(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&xa(t,null),no(),lo(t)):(xa(t,a.cachePool),to(t,a),lo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=ba();return a=a===null?null:{parent:ca._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&xa(t,null),no(),co(t),e!==null&&$i(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return za(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,uo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(R){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(so(t),(e=L)?(e=rf(e,Li),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Di===null?null:{id:Oi,overflow:ki},retryLane:536870912,hydrationErrors:null},n=_i(e),n.return=t,t.child=n,Fi=t,L=null)):e=null,e===null)throw zi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(so(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||$i(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=rt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ai(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,L=cf(s.nextSibling),Fi=t,R=!0,Ii=null,Li=!1,e!==null&&Pi(t,e),t=fc(t,r),t.flags|=4096;return t}return e=fi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ta(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(R&&r&&Mi(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ta(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!ic?(Oo(e,t,a),Ac(e,t,a)):(R&&r&&Mi(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ta(t),t.stateNode===null){var a=ci,o=n.contextType;typeof o==`object`&&o&&(a=na(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ha(t),o=n.contextType,a.context=typeof o==`object`&&o?na(o):ci,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Xa(t,r,a,i),Ya(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ci,typeof u==`object`&&u&&(o=na(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Va=!1;var f=t.memoizedState;a.state=f,Xa(t,r,a,i),Ya(),l=t.memoizedState,s||f!==l||Va?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Va||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ua(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ci,typeof l==`object`&&l&&(c=na(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Va=!1,f=t.memoizedState,a.state=f,Xa(t,r,a,i),Ya();var p=t.memoizedState;o!==d||f!==p||Va||e!==null&&e.dependencies!==null&&ea(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Va||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ea(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=za(t,e.child,null,i),t.child=za(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Ui(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Sa()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(z.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(R){if(a?oo(t):lo(t),(e=L)?(e=rf(e,Li),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Di===null?null:{id:Oi,overflow:ki},retryLane:536870912,hydrationErrors:null},n=_i(e),n.return=t,t.child=n,Fi=t,L=null)):e=null,e===null)throw zi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(lo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=hi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(oo(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(oo(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(lo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=hi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,za(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(lo(t),t.child=e.child,t.flags|=128,t=null);else if(oo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Gi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||$i(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=rt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ai(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,L=cf(c.nextSibling),Fi=t,R=!0,Ii=null,Li=!1,e!==null&&Pi(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(lo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=fi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=hi(c,a,n,null),c.flags|=2):c=fi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Sa():(l=ca._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(oo(t),n=e.child,e=n.sibling,n=fi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=ui(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return za(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=z.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,M(z,o),ac(e,t,r,n),r=R?wi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if($i(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=fi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ea(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),Yi(t,ca,e.memoizedState.cache),Ui();break;case 27:case 5:ge(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:Yi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,so(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(oo(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(oo(t),t.flags|=128,null);oo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=($i(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(z,z.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Yi(t,ca,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,R&&t.flags&1048576&&ji(t,wi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e==`function`)di(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===ne){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ua(e,t),Xa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Yi(t,ca,r),r!==o.cache&&Qi(t,[ca],n,!0),Ya(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=bi(Error(i(424)),t),Gi(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(L=cf(e.firstChild),Fi=t,R=!0,Ii=null,Li=!0,n=Ba(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ui(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:R||(n=t.type,e=t.pendingProps,r=Bd(fe.current).createElement(n),r[I]=t,r[lt]=e,Pd(r,n,e),xt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ge(t),e===null&&R&&(r=t.stateNode=ff(t.type,t.pendingProps,fe.current),Fi=t,Li=!0,a=L,Zd(t.type)?(lf=a,L=cf(r.firstChild)):L=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&R&&((a=r=L)&&(r=tf(r,t.type,t.pendingProps,Li),r===null?a=!1:(t.stateNode=r,Fi=t,L=cf(r.firstChild),Li=!1,a=!0)),a||zi(t)),ge(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&R&&((e=n=L)&&(n=nf(n,t.pendingProps,Li),n===null?e=!1:(t.stateNode=n,Fi=t,L=null,e=!0)),e||zi(t)),null;case 13:return Cc(e,t,n);case 4:return me(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=za(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Yi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ta(t),a=na(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return ta(t),r=na(ca),e===null?(a=ba(),a===null&&(a=K,o=la(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ha(t),Yi(t,ca,a)):((e.lanes&n)!==0&&(Ua(e,t),Xa(t,null,null,n),Ya()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Yi(t,ca,r),r!==a.cache&&Qi(t,[ca],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Yi(t,ca,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Aa=Ea,wa}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Aa=Ea,wa}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ze(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!R)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Ni(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Xi(ca),he(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wi())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(_e(t),n=fe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=N.current,Hi(t)?Bi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(_e(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=N.current,Hi(t))Bi(t,o);else{var s=Bd(fe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[I]=t,o[lt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=fe.current,Hi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Fi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[I]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||zi(t,!0)}else e=Bd(e).createTextNode(r),e[I]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Hi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[I]=t}else Ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(uo(t),t):(uo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[I]=t}else Ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(uo(t),t):(uo(t),null)}return uo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return he(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Xi(t.type),U(t),null;case 19:if(j(z),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)pi(n,e),n=n.sibling;return M(z,z.current&1|2),R&&Ai(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ae()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=fo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!R)return U(t),null}else 2*Ae()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ae(),e.sibling=null,n=z.current,M(z,a?n&1|2:n&1),R&&Ai(t,r.treeForkCount),e);case 22:case 23:return uo(t),ro(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&j(ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Xi(ca),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Ni(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xi(ca),he(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _e(t),null;case 31:if(t.memoizedState!==null){if(uo(t),t.alternate===null)throw Error(i(340));Ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(uo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(z),null;case 4:return he(),null;case 10:return Xi(t.type),null;case 22:case 23:return uo(t),ro(),e!==null&&j(ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xi(ca),null;case 25:return null;default:return null}}function Vc(e,t){switch(Ni(t),t.tag){case 3:Xi(ca),he();break;case 26:case 27:case 5:_e(t);break;case 4:he();break;case 31:t.memoizedState!==null&&uo(t);break;case 13:uo(t);break;case 19:j(z);break;case 10:Xi(t.type);break;case 22:case 23:uo(t),ro(),e!==null&&j(ya);break;case 24:Xi(ca)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Qa(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[lt]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[I]=e,t[lt]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=kr(e),Ar(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount==`function`)try{Be.onCommitFiberUnmount(ze,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[ht]||o[I]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[I]=e,xt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[I]=e,xt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ae()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(qt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Za(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ua(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ua(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=na(ca),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return na(ca).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:O.T===null?ot():dd()}function mu(){if(Jl===0)if(!(J&536870912)||R){var e=Ge;Ge<<=1,!(Ge&3932160)&&(Ge=262144),Jl=e}else Jl=536870912;return e=io.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),$e(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ye(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ae(),10<a)){if(yu(r,t,Jl,!Vl),Je(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tn},Ml(t,a,d);var m=(a&62914560)===a?$l-Ae():(a&4194048)===a?eu-Ae():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!wr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-P(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&tt(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Ji=qi=null,ko(e),Na=null,Pa=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=fi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=Ye(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-P(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ni(),n}function Cu(e,t){B=null,O.H=zs,t===Ca||t===Ta?(t=ja(),Y=3):t===wa?(t=ja(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,bi(t,e.current)))}function wu(){var e=io.current;return e===null?!0:(J&4194048)===J?ao===null:(J&62914560)===J||J&536870912?e===ao:!1}function Tu(){var e=O.H;return O.H=zs,e===null?zs:e}function Eu(){var e=O.A;return O.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&io.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:io.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ji=qi=null,G=r,O.H=i,O.A=a,q===null&&(K=null,J=0,ni()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Ae()+500,Su(e,t)):Hl=Ye(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Da(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Da(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ji=qi=null,O.H=r,O.A=a,G=n,q===null?(K=null,J=0,ni(),X):0}function ju(){for(;q!==null&&!Oe();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:ko(t);default:Vc(n,t),t=q=pi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Ji=qi=null,ko(t),Na=null,Pa=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,bi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,bi(n,e.current)),q=null;return}t.flags&32768?(R||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=io.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ti,et(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Pe,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,k.p=a,O.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=kr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Or(s.ownerDocument.documentElement,s)){if(c!==null&&Ar(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Dr(s,h),v=Dr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,k.p=r,O.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,k.p=r,O.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,ke();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),at(n),t=t.stateNode,Be&&typeof Be.onCommitFiberRoot==`function`)try{Be.onCommitFiberRoot(ze,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ua(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=at(su),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Be&&typeof Be.onPostCommitFiberRoot==`function`)try{Be.onPostCommitFiberRoot(ze,o)}catch{}return!0}finally{k.p=a,O.T=r,Vu(e,t)}}function Wu(e,t,n){t=bi(n,t),t=$s(e.stateNode,t,2),e=Ga(e,t,2),e!==null&&($e(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=bi(n,e),n=ec(2),r=Ga(t,n,2),r!==null&&(tc(n,r,t,e),$e(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Ae()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Ze()),e=ai(e,t),e!==null&&($e(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ee(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-P(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=Je(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ye(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ae(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-P(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Xe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Je(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&De(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ye(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&De(r),at(n)){case 2:case 8:n=Ne;break;case 32:n=Pe;break;case 268435456:n=Ie;break;default:n=Pe}return r=cd.bind(null,e),n=Ee(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&De(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=Je(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ae()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Ee(Me,ad):od()})}function dd(){if(nd===0){var e=pa;e===0&&(e=F,F<<=1,!(F&261888)&&(F=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:en(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[lt]||null).action),o=r.submitter;o&&(t=(t=o[lt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Cn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Xr.length;hd++){var gd=Xr[hd];Zr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Zr(Hr,`onAnimationEnd`),Zr(Ur,`onAnimationIteration`),Zr(Wr,`onAnimationStart`),Zr(`dblclick`,`onDoubleClick`),Zr(`focusin`,`onFocus`),Zr(`focusout`,`onBlur`),Zr(Gr,`onTransitionRun`),Zr(Kr,`onTransitionStart`),Zr(qr,`onTransitionCancel`),Zr(Jr,`onTransitionEnd`),Tt(`onMouseEnter`,[`mouseout`,`mouseover`]),Tt(`onMouseLeave`,[`mouseout`,`mouseover`]),Tt(`onPointerEnter`,[`pointerout`,`pointerover`]),Tt(`onPointerLeave`,[`pointerout`,`pointerover`]),wt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),wt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),wt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),wt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),wt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),wt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Qr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Qr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[dt];n===void 0&&(n=t[dt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,St.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!fn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=_t(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}ln(function(){var r=a,i=rn(n),s=[];a:{var c=Yr.get(e);if(c!==void 0){var l=Cn,u=e;switch(e){case`keypress`:if(vn(n)===0)break a;case`keydown`:case`keyup`:l=Vn;break;case`focusin`:u=`focus`,l=Mn;break;case`focusout`:u=`blur`,l=Mn;break;case`beforeblur`:case`afterblur`:l=Mn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=An;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=jn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Un;break;case Hr:case Ur:case Wr:l=Nn;break;case Jr:l=Wn;break;case`scroll`:case`scrollend`:l=Tn;break;case`wheel`:l=Gn;break;case`copy`:case`cut`:case`paste`:l=Pn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Hn;break;case`toggle`:case`beforetoggle`:l=Kn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=un(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==nn&&(u=n.relatedTarget||n.fromElement)&&(_t(u)||u[ut]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?_t(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=An,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Hn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:yt(l),h=u==null?c:yt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,_t(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?yt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=fr;else if(or(c))if(pr)v=Sr;else{v=br;var y=yr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Zt(r.elementType)&&(v=fr):v=xr;if(v&&=v(e,r)){sr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ut(c,`number`,c.value)}switch(y=r?yt(r):window,e){case`focusin`:(or(y)||y.contentEditable===`true`)&&(Mr=y,Nr=r,Pr=null);break;case`focusout`:Pr=Nr=Mr=null;break;case`mousedown`:Fr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Fr=!1,Ir(s,n,i);break;case`selectionchange`:if(jr)break;case`keydown`:case`keyup`:Ir(s,n,i)}var b;if(Jn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else nr?er(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Zn&&n.locale!==`ko`&&(nr||x!==`onCompositionStart`?x===`onCompositionEnd`&&nr&&(b=_n()):(mn=i,hn=`value`in mn?mn.value:mn.textContent,nr=!0)),y=Ed(r,x),0<y.length&&(x=new Fn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=tr(n),b!==null&&(x.data=b)))),(b=Xn?rr(e,n):ir(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Fn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=un(e,n),i!=null&&r.unshift(Td(e,i,a)),i=un(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=un(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=un(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&qt(e,``+r);break;case`className`:jt(e,`class`,r);break;case`tabIndex`:jt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:jt(e,n,r);break;case`style`:Xt(e,r,o);break;case`data`:if(t!==`object`){jt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=en(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=en(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=tn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=en(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),At(e,`popover`,r);break;case`xlinkActuate`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:At(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Qt.get(n)||n,At(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Xt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=tn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ct.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[lt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):At(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Ht(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Wt(e,!!r,n,!0):Wt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Kt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Zt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Vt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Wt(e,!!n,n?[]:``,!1):Wt(e,!!n,t,!0)):Wt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Gt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Zt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[ht]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),gt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[ht])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);gt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=k.d;k.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=vt(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Bt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),xt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Bt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Bt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Bt(n.imageSizes)+`"]`)):i+=`[href="`+Bt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),xt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Bt(r)+`"][href="`+Bt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),xt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=bt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);xt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=bt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),xt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=bt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),xt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=fe.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=bt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=bt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=bt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Bt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),xt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Bt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Bt(n.href)+`"]`);if(r)return t.instance=r,xt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),xt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,xt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),xt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,xt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),xt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[ht]||a[I]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,xt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),xt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:A,_currentValue2:A,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ui(3,null,null,t),e.current=a,a.stateNode=e,t=la(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ha(a),e}function tp(e){return e?(e=ci,e):ci}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Wa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ga(e,r,t),n!==null&&(hu(n,e,t),Ka(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ai(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=it(t);var n=ai(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=vt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-P(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Ae()+500,id(0,!1))}}break;case 31:case 13:s=ai(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=rn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=_t(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(je()){case Me:return 2;case Ne:return 8;case Pe:case Fe:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=vt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=_t(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,st(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,st(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nn=r,n.target.dispatchEvent(r),nn=null}else return t=vt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=vt(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[lt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[lt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ut]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ot();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{ze=zp.inject(Rp),Be=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ut]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),b=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),x=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),S=e=>{let t=x(e);return t.charAt(0).toUpperCase()+t.slice(1)},C={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},w=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},ee=(0,_.createContext)({}),te=()=>(0,_.useContext)(ee),ne=(0,_.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=te()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,_.createElement)(`svg`,{ref:c,...C,width:t??l??C.width,height:t??l??C.height,stroke:e??f,strokeWidth:m,className:y(`lucide`,p,i),...!a&&!w(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),T=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(ne,{ref:i,iconNode:t,className:y(`lucide-${b(S(e))}`,`lucide-${e}`,n),...r}));return n.displayName=S(e),n},re=T(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),E=T(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),ie=T(`arrow-up-narrow-wide`,[[`path`,{d:`m3 8 4-4 4 4`,key:`11wl7u`}],[`path`,{d:`M7 4v16`,key:`1glfcx`}],[`path`,{d:`M11 12h4`,key:`q8tih4`}],[`path`,{d:`M11 16h7`,key:`uosisv`}],[`path`,{d:`M11 20h10`,key:`jvxblo`}]]),ae=T(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),D=T(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),oe=T(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),se=T(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),O=T(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),k=T(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),A=T(`eye-off`,[[`path`,{d:`M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,key:`ct8e1f`}],[`path`,{d:`M14.084 14.158a3 3 0 0 1-4.242-4.242`,key:`151rxh`}],[`path`,{d:`M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,key:`13bj9a`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}]]),ce=T(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),le=T(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),ue=T(`film`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M7 3v18`,key:`bbkbws`}],[`path`,{d:`M3 7.5h4`,key:`zfgn84`}],[`path`,{d:`M3 12h18`,key:`1i2n21`}],[`path`,{d:`M3 16.5h4`,key:`1230mu`}],[`path`,{d:`M17 3v18`,key:`in4fa5`}],[`path`,{d:`M17 7.5h4`,key:`myr1c1`}],[`path`,{d:`M17 16.5h4`,key:`go4c1d`}]]),j=T(`heart`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}]]),M=T(`image`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`,key:`1m3agn`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}],[`path`,{d:`m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`,key:`1xmnt7`}]]),N=T(`key-round`,[[`path`,{d:`M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z`,key:`1s6t7t`}],[`circle`,{cx:`16.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`w0ekpg`}]]),de=T(`link`,[[`path`,{d:`M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71`,key:`1cjeqo`}],[`path`,{d:`M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71`,key:`19qd67`}]]),fe=T(`list-ordered`,[[`path`,{d:`M11 5h10`,key:`1cz7ny`}],[`path`,{d:`M11 12h10`,key:`1438ji`}],[`path`,{d:`M11 19h10`,key:`11t30w`}],[`path`,{d:`M4 4h1v5`,key:`10yrso`}],[`path`,{d:`M4 9h2`,key:`r1h2o0`}],[`path`,{d:`M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02`,key:`xtkcd5`}]]),pe=T(`loader-circle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),me=T(`lock`,[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`,key:`1w4ew1`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`,key:`fwvmzm`}]]),he=T(`log-out`,[[`path`,{d:`m16 17 5-5-5-5`,key:`1bji2h`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}]]),ge=T(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),_e=T(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),ve=T(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),ye=T(`minus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}]]),be=T(`pen-line`,[[`path`,{d:`M13 21h8`,key:`1jsn5i`}],[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}]]),xe=T(`phone`,[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]),Se=T(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),Ce=T(`ruler`,[[`path`,{d:`M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z`,key:`icamh8`}],[`path`,{d:`m14.5 12.5 2-2`,key:`inckbg`}],[`path`,{d:`m11.5 9.5 2-2`,key:`fmmyf7`}],[`path`,{d:`m8.5 6.5 2-2`,key:`vc6u1g`}],[`path`,{d:`m17.5 15.5 2-2`,key:`wo5hmg`}]]),we=T(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Te=T(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),Ee=T(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),De=T(`shield-alert`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M12 16h.01`,key:`1drbdi`}]]),Oe=T(`shopping-bag`,[[`path`,{d:`M16 10a4 4 0 0 1-8 0`,key:`1ltviw`}],[`path`,{d:`M3.103 6.034h17.794`,key:`awc11p`}],[`path`,{d:`M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,key:`o988cm`}]]),ke=T(`sliders-horizontal`,[[`path`,{d:`M10 5H3`,key:`1qgfaw`}],[`path`,{d:`M12 19H3`,key:`yhmn1j`}],[`path`,{d:`M14 3v4`,key:`1sua03`}],[`path`,{d:`M16 17v4`,key:`1q0r14`}],[`path`,{d:`M21 12h-9`,key:`1o4lsq`}],[`path`,{d:`M21 19h-5`,key:`1rlt1p`}],[`path`,{d:`M21 5h-7`,key:`1oszz2`}],[`path`,{d:`M8 10v4`,key:`tgpxqk`}],[`path`,{d:`M8 12H3`,key:`a7s4jb`}]]),Ae=T(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),je=T(`square-pen`,[[`path`,{d:`M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7`,key:`1m0v6g`}],[`path`,{d:`M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z`,key:`ohrbg2`}]]),Me=T(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),Ne=T(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),Pe=T(`upload`,[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]),Fe=T(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),Ie=T(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),Le=T(`volume-2`,[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`path`,{d:`M16 9a5 5 0 0 1 0 6`,key:`1q6k2b`}],[`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`,key:`ijwkga`}]]),Re=T(`volume-x`,[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`line`,{x1:`22`,x2:`16`,y1:`9`,y2:`15`,key:`1ewh16`}],[`line`,{x1:`16`,x2:`22`,y1:`9`,y2:`15`,key:`5ykzw1`}]]),ze=T(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Be=`/api`,Ve=(e=!1)=>{let t={},n=e?`adminToken`:`userToken`,r=localStorage.getItem(n);return r&&(t.Authorization=`Bearer ${r}`),t},P=async(e,t={},n=!1)=>{let r=`${Be}${e}`,i={...Ve(n),...t.headers};t.body instanceof FormData||(i[`Content-Type`]=`application/json`);let a={...t,headers:i},o=await fetch(r,a),s;try{s=await o.json()}catch{s={message:`Failed to parse response`}}if(!o.ok)throw Error(s.message||`Something went wrong`);return s},He={sendOtp:async e=>await P(`/auth/send-otp`,{method:`POST`,body:JSON.stringify({phone:e})}),login:async(e,t)=>await P(`/auth/login`,{method:`POST`,body:JSON.stringify({phone:e,password:t})}),loginOtp:async(e,t)=>await P(`/auth/login-otp`,{method:`POST`,body:JSON.stringify({phone:e,otp:t})}),register:async(e,t,n,r)=>await P(`/auth/signup`,{method:`POST`,body:JSON.stringify({name:e,phone:t,password:n,otp:r})}),getProfile:async()=>await P(`/auth/profile`,{method:`GET`}),updateProfile:async e=>await P(`/auth/profile`,{method:`PUT`,body:JSON.stringify(e)}),changePassword:async(e,t)=>await P(`/auth/change-password`,{method:`PUT`,body:JSON.stringify({currentPassword:e,newPassword:t})})},Ue={login:async(e,t)=>await P(`/admin/login`,{method:`POST`,body:JSON.stringify({email:e,password:t})}),getStats:async()=>await P(`/admin/stats`,{method:`GET`},!0),createProduct:async e=>await P(`/admin/products`,{method:`POST`,body:e},!0),updateProduct:async(e,t)=>await P(`/admin/products/${e}`,{method:`PUT`,body:t},!0),deleteProduct:async e=>await P(`/admin/products/${e}`,{method:`DELETE`},!0),getOrders:async()=>await P(`/admin/orders`,{method:`GET`},!0),updateOrderStatus:async(e,t)=>await P(`/admin/orders/${e}/status`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({status:t})},!0),refundOrder:async e=>await P(`/admin/orders/${e}/refund`,{method:`POST`,headers:{"Content-Type":`application/json`}},!0)},We=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),F=o(((e,t)=>{t.exports=We()}))(),Ge=(0,_.createContext)(),Ke=({children:e})=>{let[t,n]=(0,_.useState)(null),[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(!0);return(0,_.useEffect)(()=>{(async()=>{let e=localStorage.getItem(`userToken`),t=localStorage.getItem(`adminToken`);if(e)try{n(await He.getProfile())}catch(e){console.error(`Session expired or invalid user token`,e),localStorage.removeItem(`userToken`),n(null)}if(t){let e=localStorage.getItem(`adminInfo`);if(e)try{i(JSON.parse(e))}catch{localStorage.removeItem(`adminToken`),localStorage.removeItem(`adminInfo`)}}o(!1)})()},[]),(0,F.jsx)(Ge.Provider,{value:{user:t,admin:r,loading:a,login:async(e,t)=>{o(!0);try{let r=await He.login(e,t);return localStorage.setItem(`userToken`,r.token),n({_id:r._id,name:r.name,phone:r.phone}),o(!1),r}catch(e){throw o(!1),e}},loginOtp:async(e,t)=>{o(!0);try{let r=await He.loginOtp(e,t);return localStorage.setItem(`userToken`,r.token),n({_id:r._id,name:r.name,phone:r.phone}),o(!1),r}catch(e){throw o(!1),e}},signup:async(e,t,r,i)=>{o(!0);try{let a=await He.register(e,t,r,i);return localStorage.setItem(`userToken`,a.token),n({_id:a._id,name:a.name,phone:a.phone}),o(!1),a}catch(e){throw o(!1),e}},logout:()=>{localStorage.removeItem(`userToken`),n(null)},loginWithToken:e=>{localStorage.setItem(`userToken`,e.token),n({_id:e._id,name:e.name,phone:e.phone})},loginAdmin:async(e,t)=>{o(!0);try{let n=await Ue.login(e,t);return localStorage.setItem(`adminToken`,n.token),localStorage.setItem(`adminInfo`,JSON.stringify({_id:n._id,name:n.name,email:n.email,role:n.role})),i({_id:n._id,name:n.name,email:n.email,role:n.role}),o(!1),n}catch(e){throw o(!1),e}},logoutAdmin:()=>{localStorage.removeItem(`adminToken`),localStorage.removeItem(`adminInfo`),i(null)},updateUserProfile:async e=>{let t=await He.updateProfile(e);return n(e=>({...e,...t})),t},isAuthenticated:!!t,isAdminAuthenticated:!!r},children:e})},qe=()=>(0,_.useContext)(Ge),Je={getCart:async()=>await P(`/cart`,{method:`GET`}),addToCart:async({productId:e,quantity:t,size:n,color:r})=>await P(`/cart/add`,{method:`POST`,body:JSON.stringify({productId:e,quantity:t,size:n,color:r})}),updateQuantity:async({productId:e,size:t,quantity:n})=>await P(`/cart/update`,{method:`PUT`,body:JSON.stringify({productId:e,size:t,quantity:n})}),removeFromCart:async({productId:e,size:t})=>await P(`/cart/remove`,{method:`DELETE`,body:JSON.stringify({productId:e,size:t})}),mergeCart:async e=>await P(`/cart/merge`,{method:`POST`,body:JSON.stringify({items:e})})},Ye=(0,_.createContext)(),Xe=({children:e})=>{let{user:t}=qe(),[n,r]=(0,_.useState)([]),[i,a]=(0,_.useState)(!0);return(0,_.useEffect)(()=>{(async()=>{if(a(!0),t)try{r((await Je.getCart()).items||[]);let e=localStorage.getItem(`guestCart`);if(e){try{let t=JSON.parse(e);t.length>0&&r((await Je.mergeCart(t.map(e=>({productId:e.productId._id||e.productId,quantity:e.quantity,size:e.size,color:e.color})))).items||[])}catch(e){console.error(`Error merging guest cart on login:`,e)}localStorage.removeItem(`guestCart`)}}catch(e){console.error(`Error loading user cart:`,e)}else{let e=localStorage.getItem(`guestCart`);if(e)try{r(JSON.parse(e))}catch{r([])}else r([])}a(!1)})()},[t]),(0,F.jsx)(Ye.Provider,{value:{cartItems:n,loading:i,addToCart:async(e,i,a,o=``)=>{let s=e.sizes.find(e=>e.size===a);if(!s)throw Error(`Size ${a} is not available for this product`);if(t)r((await Je.addToCart({productId:e._id,quantity:i,size:a,color:o})).items||[]);else{let t=[...n],c=t.findIndex(t=>(t.productId._id===e._id||t.productId===e._id)&&t.size===a),l=(c>-1?t[c].quantity:0)+i;if(s.stock<l)throw Error(`Insufficient stock. Only ${s.stock} items available in size ${a}`);c>-1?t[c].quantity=l:t.push({productId:e,quantity:i,size:a,color:o}),r(t),localStorage.setItem(`guestCart`,JSON.stringify(t))}},updateQuantity:async(e,i,a)=>{if(!(a<1))if(t)r((await Je.updateQuantity({productId:e,size:i,quantity:a})).items||[]);else{let t=[...n],o=t.findIndex(t=>(t.productId._id===e||t.productId===e)&&t.size===i);if(o>-1){let e=t[o].productId.sizes.find(e=>e.size===i);if(e&&e.stock<a)throw Error(`Insufficient stock. Only ${e.stock} items available in size ${i}`);t[o].quantity=a,r(t),localStorage.setItem(`guestCart`,JSON.stringify(t))}}},removeFromCart:async(e,i)=>{if(t)r((await Je.removeFromCart({productId:e,size:i})).items||[]);else{let t=n.filter(t=>!((t.productId._id===e||t.productId===e)&&t.size===i));r(t),localStorage.setItem(`guestCart`,JSON.stringify(t))}},getCartTotal:()=>n.reduce((e,t)=>{let n=t.productId;return n?e+(n.discountPrice||n.price)*t.quantity:e},0),getCartCount:()=>n.reduce((e,t)=>e+t.quantity,0),clearCart:()=>{r([]),t||localStorage.removeItem(`guestCart`)}},children:e})},Ze=()=>(0,_.useContext)(Ye),Qe={getWishlist:async()=>await P(`/wishlist`,{method:`GET`}),toggleWishlist:async e=>await P(`/wishlist/toggle`,{method:`POST`,body:JSON.stringify({productId:e})})},$e=(0,_.createContext)(),et=({children:e})=>{let{user:t}=qe(),[n,r]=(0,_.useState)([]),[i,a]=(0,_.useState)(!0);return(0,_.useEffect)(()=>{(async()=>{if(a(!0),t)try{r((await Qe.getWishlist()).products||[])}catch(e){console.error(`Error fetching database wishlist:`,e)}else{let e=localStorage.getItem(`guestWishlist`);if(e)try{r(JSON.parse(e))}catch{r([])}else r([])}a(!1)})()},[t]),(0,F.jsx)($e.Provider,{value:{wishlistItems:n,loading:i,toggleWishlist:async e=>{if(t)try{r((await Qe.toggleWishlist(e._id)).products||[])}catch(e){console.error(`Error updating DB wishlist:`,e)}else{let t=[...n],i=t.findIndex(t=>t._id===e._id);i>-1?t.splice(i,1):t.push(e),r(t),localStorage.setItem(`guestWishlist`,JSON.stringify(t))}},isInWishlist:e=>n.some(t=>t._id===e)},children:e})},tt=()=>(0,_.useContext)($e);function nt({activeTab:e,setActiveTab:t}){let[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(!1),{user:o,admin:s,logout:c,logoutAdmin:l}=qe(),{getCartCount:u}=Ze(),{wishlistItems:d}=tt(),f=[{id:`home`,label:`Home`},{id:`collections`,label:`Shop Collection`},{id:`contact`,label:`Contact Us`}],p=e=>{t(e),r(!1),a(!1),window.scrollTo({top:0,behavior:`smooth`})},m=()=>{c(),p(`home`)},h=()=>{l(),p(`home`)},g=u(),v=d.length;return(0,F.jsxs)(`header`,{className:`navbar-header`,children:[(0,F.jsxs)(`div`,{className:`container navbar-container`,children:[(0,F.jsxs)(`div`,{className:`navbar-logo`,onClick:()=>p(`home`),children:[(0,F.jsx)(`span`,{children:`Bhawna`}),` Closet`]}),(0,F.jsxs)(`nav`,{className:`navbar-desktop`,children:[f.map(t=>(0,F.jsx)(`button`,{className:`nav-link ${e===t.id?`active`:``}`,onClick:()=>p(t.id),children:t.label},t.id)),s&&(0,F.jsx)(`button`,{className:`nav-link ${e===`admin`?`active`:``}`,onClick:()=>p(`admin`),style:{color:`var(--primary-pink-dark)`,fontWeight:`700`},children:`Admin Dashboard`})]}),(0,F.jsxs)(`div`,{className:`navbar-actions`,children:[(0,F.jsxs)(`a`,{href:`tel:9266991136`,className:`nav-phone-btn`,title:`Call Us`,children:[(0,F.jsx)(xe,{size:16}),(0,F.jsx)(`span`,{className:`phone-text`,children:`9266991136`})]}),(0,F.jsxs)(`button`,{className:`nav-action-btn ${e===`wishlist`?`active-icon`:``}`,onClick:()=>p(`wishlist`),title:`Wishlist`,children:[(0,F.jsx)(j,{size:20}),v>0&&(0,F.jsx)(`span`,{className:`action-badge`,children:v})]}),(0,F.jsxs)(`button`,{className:`nav-action-btn ${e===`cart`?`active-icon`:``}`,onClick:()=>p(`cart`),title:`Shopping Cart`,children:[(0,F.jsx)(Oe,{size:20}),g>0&&(0,F.jsx)(`span`,{className:`action-badge badge-primary`,children:g})]}),s?(0,F.jsxs)(`div`,{className:`profile-dropdown-wrapper`,children:[(0,F.jsxs)(`button`,{className:`nav-profile-trigger btn-outline`,onClick:()=>a(!i),children:[(0,F.jsx)(Ee,{size:18}),(0,F.jsx)(`span`,{className:`user-name-text`,children:`Admin`}),(0,F.jsx)(D,{size:14})]}),i&&(0,F.jsxs)(`div`,{className:`profile-dropdown-menu glass-card animate-fade-in`,children:[(0,F.jsx)(`button`,{onClick:()=>p(`admin`),children:`Dashboard`}),(0,F.jsxs)(`button`,{onClick:h,className:`logout-btn-link`,children:[(0,F.jsx)(he,{size:14}),` Logout`]})]})]}):o?(0,F.jsxs)(`div`,{className:`profile-dropdown-wrapper`,children:[(0,F.jsxs)(`button`,{className:`nav-profile-trigger btn-outline`,onClick:()=>a(!i),children:[(0,F.jsx)(Fe,{size:18}),(0,F.jsx)(`span`,{className:`user-name-text`,children:o.name.split(` `)[0]}),(0,F.jsx)(D,{size:14})]}),i&&(0,F.jsxs)(`div`,{className:`profile-dropdown-menu glass-card animate-fade-in`,children:[(0,F.jsx)(`button`,{onClick:()=>p(`profile`),children:`My Account`}),(0,F.jsx)(`button`,{onClick:()=>p(`profile`),style:{color:`var(--text-muted)`},children:`Orders History`}),(0,F.jsxs)(`button`,{onClick:m,className:`logout-btn-link`,children:[(0,F.jsx)(he,{size:14}),` Logout`]})]})]}):(0,F.jsxs)(`div`,{className:`navbar-auth-buttons`,children:[(0,F.jsx)(`button`,{className:`btn-auth-link`,onClick:()=>p(`login`),children:`Login`}),(0,F.jsx)(`button`,{className:`btn-auth-signup btn-primary-small`,onClick:()=>p(`signup`),children:`Sign Up`})]}),(0,F.jsx)(`button`,{className:`mobile-menu-toggle`,onClick:()=>r(!n),children:n?(0,F.jsx)(ze,{size:24}):(0,F.jsx)(ve,{size:24})})]})]}),n&&(0,F.jsxs)(`div`,{className:`mobile-menu-drawer animate-fade-in`,children:[f.map(t=>(0,F.jsx)(`button`,{className:`mobile-nav-link ${e===t.id?`active`:``}`,onClick:()=>p(t.id),children:t.label},t.id)),s&&(0,F.jsx)(`button`,{className:`mobile-nav-link ${e===`admin`?`active`:``}`,onClick:()=>p(`admin`),style:{color:`var(--primary-pink-dark)`,fontWeight:`700`},children:`Admin Dashboard`}),(0,F.jsx)(`div`,{className:`mobile-auth-section`,children:s?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`button`,{className:`mobile-nav-link`,onClick:()=>p(`admin`),children:`Admin Panel`}),(0,F.jsxs)(`button`,{className:`mobile-nav-link logout-btn-link`,onClick:h,children:[(0,F.jsx)(he,{size:18}),` Admin Logout`]})]}):o?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`button`,{className:`mobile-nav-link`,onClick:()=>p(`profile`),children:`My Account`}),(0,F.jsx)(`button`,{className:`mobile-nav-link`,onClick:()=>p(`profile`),children:`Orders History`}),(0,F.jsxs)(`button`,{className:`mobile-nav-link logout-btn-link`,onClick:m,children:[(0,F.jsx)(he,{size:18}),` Logout`]})]}):(0,F.jsxs)(`div`,{className:`mobile-auth-btns`,children:[(0,F.jsx)(`button`,{className:`btn btn-outline`,style:{width:`100%`},onClick:()=>p(`login`),children:`Login`}),(0,F.jsx)(`button`,{className:`btn btn-primary`,style:{width:`100%`},onClick:()=>p(`signup`),children:`Sign Up`})]})}),(0,F.jsxs)(`a`,{href:`tel:9266991136`,className:`mobile-phone-link`,children:[(0,F.jsx)(xe,{size:18}),(0,F.jsx)(`span`,{children:`9266991136`})]})]}),(0,F.jsx)(`style`,{children:`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border-bottom: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
        }
        .navbar-container {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-logo {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--dark-charcoal);
          cursor: pointer;
          user-select: none;
        }
        .navbar-logo span {
          color: var(--primary-pink);
          position: relative;
        }
        .navbar-logo span::after {
          content: '💖';
          font-size: 0.8rem;
          position: absolute;
          top: -2px;
          right: -15px;
        }
        .navbar-desktop {
          display: flex;
          gap: 2.5rem;
        }
        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--dark-charcoal);
          padding: 0.5rem 0;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-pink);
          transition: var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--primary-pink);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link.active {
          color: var(--primary-pink);
          font-weight: 600;
        }
        .nav-link.active::after {
          width: 100%;
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .nav-phone-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--soft-pink);
          color: var(--primary-pink-dark);
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .nav-phone-btn:hover {
          background: var(--primary-pink);
          color: var(--pure-white);
        }
        
        /* Action buttons & Badges */
        .nav-action-btn {
          position: relative;
          color: var(--dark-charcoal);
          padding: 0.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav-action-btn:hover, .nav-action-btn.active-icon {
          background: var(--light-pink);
          color: var(--primary-pink);
        }
        .action-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          background: var(--primary-pink-dark);
          color: var(--pure-white);
          font-size: 0.7rem;
          font-weight: 700;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--pure-white);
        }
        .action-badge.badge-primary {
          background: var(--primary-pink);
        }

        /* Profile Dropdown Styling */
        .profile-dropdown-wrapper {
          position: relative;
        }
        .nav-profile-trigger {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--dark-charcoal);
          border: 1px solid var(--border-light);
        }
        .nav-profile-trigger:hover {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
        }
        .profile-dropdown-menu {
          position: absolute;
          top: 48px;
          right: 0;
          width: 180px;
          padding: 0.5rem;
          z-index: 100;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-md);
        }
        .profile-dropdown-menu button {
          text-align: left;
          padding: 0.6rem 1rem;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--dark-charcoal);
          border-radius: 8px;
          width: 100%;
        }
        .profile-dropdown-menu button:hover {
          background: var(--light-pink);
          color: var(--primary-pink-dark);
        }
        .profile-dropdown-menu .logout-btn-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-top: 1px solid var(--border-light);
          margin-top: 0.25rem;
          padding-top: 0.6rem;
          border-radius: 0 0 8px 8px;
          color: #dc3545;
        }
        .profile-dropdown-menu .logout-btn-link:hover {
          background: #ffebe9;
          color: #c82333;
        }

        /* Auth Buttons */
        .navbar-auth-buttons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .btn-auth-link {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--dark-charcoal);
          padding: 0.5rem 0.75rem;
        }
        .btn-auth-link:hover {
          color: var(--primary-pink);
        }
        .btn-auth-signup {
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 20px;
          transition: all var(--transition-normal);
        }
        .btn-primary-small {
          background: var(--primary-pink);
          color: var(--pure-white);
          box-shadow: 0 2px 8px rgba(240, 84, 138, 0.2);
        }
        .btn-primary-small:hover {
          background: var(--primary-pink-hover);
          transform: translateY(-1px);
        }

        .mobile-menu-toggle {
          display: none;
          color: var(--dark-charcoal);
        }
        .mobile-menu-drawer {
          display: none;
          position: absolute;
          top: 80px;
          left: 0;
          width: 100%;
          background: var(--pure-white);
          border-bottom: 1px solid var(--border-light);
          padding: 1.5rem 2rem;
          flex-direction: column;
          gap: 1.25rem;
          box-shadow: var(--shadow-md);
        }
        .mobile-nav-link {
          font-size: 1.1rem;
          font-weight: 500;
          text-align: left;
          color: var(--dark-charcoal);
          padding: 0.5rem 0;
        }
        .mobile-nav-link.active {
          color: var(--primary-pink);
          border-left: 3px solid var(--primary-pink);
          padding-left: 0.75rem;
        }
        .mobile-auth-section {
          border-top: 1px solid var(--border-light);
          padding-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .mobile-auth-btns {
          display: flex;
          gap: 1rem;
          width: 100%;
        }
        .mobile-phone-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--primary-pink-dark);
          background: var(--soft-pink);
          padding: 0.75rem;
          border-radius: 8px;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        /* Responsive Navbar */
        @media (max-width: 992px) {
          .user-name-text, .phone-text {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .navbar-desktop, .nav-phone-btn, .navbar-auth-buttons, .profile-dropdown-wrapper {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block;
          }
          .mobile-menu-drawer {
            display: flex;
          }
          .navbar-logo {
            font-size: 1.3rem !important;
            white-space: nowrap !important;
          }
          .navbar-actions {
            gap: 0.75rem !important;
          }
        }
      `})]})}function rt({story:e,onClose:t}){let[n,r]=(0,_.useState)(0),[i,a]=(0,_.useState)(0),[o,s]=(0,_.useState)(!0),c=(0,_.useRef)(null),l=(0,_.useRef)(null),u=e.subStories||[],d=u[n],f=d?.mediaType===`video`?15e3:5e3,p=()=>{n<u.length-1?(r(e=>e+1),a(0)):t()},m=()=>{n>0?(r(e=>e-1),a(0)):(r(0),a(0))};return(0,_.useEffect)(()=>{let e=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{document.body.style.overflow=e||``}},[]),(0,_.useEffect)(()=>{if(!d)return;a(0);let e=Date.now(),t=f;d.mediaType===`video`&&c.current&&(c.current.currentTime=0,c.current.play().catch(e=>console.log(`Video autoplay blocked:`,e)));let n=setInterval(()=>{let r=Date.now()-e,i=Math.min(r/t*100,100);a(i),i>=100&&(clearInterval(n),p())},50);return l.current=n,()=>{clearInterval(n)}},[n,e]),(0,F.jsxs)(`div`,{className:`stories-viewer-overlay`,onClick:t,children:[d?(0,F.jsxs)(`div`,{className:`stories-viewer-container`,onClick:e=>e.stopPropagation(),children:[(0,F.jsx)(`div`,{className:`stories-progress-container`,children:u.map((e,t)=>{let r=0;return t<n?r=100:t===n&&(r=i),(0,F.jsx)(`div`,{className:`story-progress-bg`,children:(0,F.jsx)(`div`,{className:`story-progress-bar`,style:{width:`${r}%`}})},t)})}),(0,F.jsxs)(`div`,{className:`stories-viewer-header`,children:[(0,F.jsxs)(`div`,{className:`stories-viewer-profile`,children:[(0,F.jsx)(`img`,{src:e.coverImage,alt:e.name,className:`story-header-avatar`}),(0,F.jsx)(`span`,{className:`story-header-name`,children:e.name})]}),(0,F.jsxs)(`div`,{className:`stories-viewer-controls`,children:[d.mediaType===`video`&&(0,F.jsx)(`button`,{className:`story-control-btn`,onClick:()=>s(!o),children:o?(0,F.jsx)(Re,{size:18}):(0,F.jsx)(Le,{size:18})}),(0,F.jsx)(`button`,{className:`story-control-btn close-btn`,onClick:t,children:(0,F.jsx)(ze,{size:20})})]})]}),(0,F.jsx)(`div`,{className:`stories-media-content`,children:d.mediaType===`video`?(0,F.jsx)(`video`,{ref:c,src:d.url,autoPlay:!0,playsInline:!0,muted:o,onLoadedMetadata:()=>{if(c.current){let e=c.current.duration*1e3;if(e>0){clearInterval(l.current);let t=Date.now(),n=setInterval(()=>{let r=Date.now()-t,i=Math.min(r/e*100,100);a(i),i>=100&&(clearInterval(n),p())},50);l.current=n}}},className:`story-media-element`}):(0,F.jsx)(`img`,{src:d.url,alt:`Story Content`,className:`story-media-element`})}),(0,F.jsx)(`button`,{className:`story-nav-chevron nav-chevron-left`,onClick:m,children:(0,F.jsx)(oe,{size:24})}),(0,F.jsx)(`button`,{className:`story-nav-chevron nav-chevron-right`,onClick:p,children:(0,F.jsx)(se,{size:24})}),(0,F.jsx)(`div`,{className:`story-tap-zone left-tap`,onClick:m}),(0,F.jsx)(`div`,{className:`story-tap-zone right-tap`,onClick:p})]}):(0,F.jsx)(`div`,{className:`stories-viewer-container glass-card`,onClick:e=>e.stopPropagation(),children:(0,F.jsxs)(`div`,{className:`no-substories`,children:[(0,F.jsx)(`p`,{children:`No stories added yet.`}),(0,F.jsx)(`button`,{className:`btn btn-primary`,onClick:t,children:`Close`})]})}),(0,F.jsx)(`style`,{children:`
        .stories-viewer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.92);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(15px);
        }
        .stories-viewer-container {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: 90vh;
          max-height: 800px;
          background: #000;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 576px) {
          .stories-viewer-container {
            width: 100%;
            height: 100%;
            max-height: 100%;
            border-radius: 0;
          }
        }
        
        /* Progress Indicators */
        .stories-progress-container {
          position: absolute;
          top: 12px;
          left: 10px;
          right: 10px;
          display: flex;
          gap: 4px;
          z-index: 100;
        }
        .story-progress-bg {
          flex: 1;
          height: 3px;
          background: rgba(255, 255, 255, 0.35);
          border-radius: 2px;
          overflow: hidden;
        }
        .story-progress-bar {
          height: 100%;
          background: var(--pure-white);
          border-radius: 2px;
          width: 0;
        }

        /* Header */
        .stories-viewer-header {
          position: absolute;
          top: 24px;
          left: 12px;
          right: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          text-shadow: 0 1px 3px rgba(0,0,0,0.6);
        }
        .stories-viewer-profile {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .story-header-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid rgba(255,255,255,0.8);
        }
        .story-header-name {
          color: var(--pure-white);
          font-weight: 600;
          font-size: 0.9rem;
        }
        .stories-viewer-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .story-control-btn {
          background: none;
          border: none;
          color: var(--pure-white);
          opacity: 0.85;
          cursor: pointer;
        }
        .story-control-btn:hover {
          opacity: 1;
          transform: scale(1.05);
        }
        .story-control-btn.close-btn {
          background: rgba(0,0,0,0.3);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Media */
        .stories-media-content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #111;
        }
        .story-media-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Navigation chevrons (desktop-only hover) */
        .story-nav-chevron {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.25);
          border: none;
          color: var(--pure-white);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 105;
          opacity: 0;
          transition: opacity 0.2s, background 0.2s;
        }
        .stories-viewer-container:hover .story-nav-chevron {
          opacity: 1;
        }
        .story-nav-chevron:hover {
          background: rgba(255, 255, 255, 0.4);
        }
        .nav-chevron-left {
          left: 12px;
        }
        .nav-chevron-right {
          right: 12px;
        }

        /* Tap Zones */
        .story-tap-zone {
          position: absolute;
          top: 80px;
          bottom: 0;
          width: 45%;
          z-index: 90;
          cursor: pointer;
        }
        .left-tap {
          left: 0;
        }
        .right-tap {
          right: 0;
        }

        /* Fallback */
        .no-substories {
          padding: 2rem;
          text-align: center;
          color: var(--pure-white);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          margin: auto;
        }
        .no-substories p {
          font-size: 1.1rem;
          font-weight: 500;
        }
      `})]})}function it({onExploreClick:e,newArrivals:t=[],onSelectProduct:n,stories:r=[],banners:i=[]}){let[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)(0),l=(0,_.useRef)(null),u=i;(0,_.useEffect)(()=>{if(u.length<=1)return;let e=setInterval(()=>{c(e=>(e+1)%u.length)},3e3);return()=>clearInterval(e)},[u.length]);let d=()=>{u.length!==0&&c(e=>(e+1)%u.length)},f=()=>{u.length!==0&&c(e=>(e-1+u.length)%u.length)},p=e=>{if(l.current){let t=e===`left`?-250:250;l.current.scrollBy({left:t,behavior:`smooth`})}};return(0,F.jsxs)(`section`,{className:`hero-section`,children:[(0,F.jsxs)(`div`,{className:`container hero-container`,children:[(0,F.jsxs)(`div`,{className:`hero-banner-slideshow animate-fade-in`,children:[u.length===0?(0,F.jsx)(`div`,{className:`banner-slide-skeleton`}):u.map((e,t)=>(0,F.jsx)(`div`,{className:`banner-slide-item ${t===s?`active`:``}`,children:e.linkUrl?(0,F.jsx)(`a`,{href:e.linkUrl,children:(0,F.jsx)(`img`,{src:e.imageUrl,alt:`Bhawna Closet Banner`,className:`banner-slide-img`})}):(0,F.jsx)(`img`,{src:e.imageUrl,alt:`Bhawna Closet Banner`,className:`banner-slide-img`})},e._id)),u.length>1&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`button`,{className:`banner-nav-btn banner-nav-left`,onClick:f,title:`Previous Banner`,children:(0,F.jsx)(oe,{size:20})}),(0,F.jsx)(`button`,{className:`banner-nav-btn banner-nav-right`,onClick:d,title:`Next Banner`,children:(0,F.jsx)(se,{size:20})}),(0,F.jsx)(`div`,{className:`banner-pagination`,children:u.map((e,t)=>(0,F.jsx)(`div`,{className:`banner-page-dot ${t===s?`active`:``}`,onClick:()=>c(t)},t))})]})]}),r&&r.length>0&&(0,F.jsx)(`div`,{className:`hero-stories-container mobile-only-stories`,children:r.slice(0,4).map(e=>(0,F.jsxs)(`div`,{className:`hero-story-bubble-wrapper`,onClick:()=>o(e),children:[(0,F.jsxs)(`div`,{className:`hero-story-bubble`,children:[(0,F.jsx)(`div`,{className:`hero-story-ring`}),(0,F.jsx)(`img`,{src:e.coverImage,alt:e.name,className:`hero-story-img`})]}),(0,F.jsx)(`span`,{className:`hero-story-name`,children:e.name})]},e._id))}),(0,F.jsxs)(`div`,{className:`hero-image-wrapper`,children:[r&&r.length>0&&(0,F.jsx)(`div`,{className:`hero-stories-container desktop-only-stories`,children:r.slice(0,4).map(e=>(0,F.jsxs)(`div`,{className:`hero-story-bubble-wrapper`,onClick:()=>o(e),children:[(0,F.jsxs)(`div`,{className:`hero-story-bubble`,children:[(0,F.jsx)(`div`,{className:`hero-story-ring`}),(0,F.jsx)(`img`,{src:e.coverImage,alt:e.name,className:`hero-story-img`})]}),(0,F.jsx)(`span`,{className:`hero-story-name`,children:e.name})]},e._id))}),(0,F.jsx)(`div`,{className:`hero-image-backdrop`}),(0,F.jsx)(`img`,{src:`https://res.cloudinary.com/jbhylwfb/image/upload/v1782921971/bhawna_closet_products/f6c6ykyn8wgxvfa4xtsn.jpg`,alt:`Bhawna Closet Premium Fashion`,className:`hero-main-image`}),(0,F.jsxs)(`div`,{className:`floating-glass-card glass-card`,children:[(0,F.jsx)(`span`,{className:`floating-emoji`,children:`🌸`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{children:`Trending Cordsets`}),(0,F.jsx)(`p`,{children:`Now in store`})]})]}),(0,F.jsxs)(`div`,{className:`floating-glass-card-2 glass-card`,children:[(0,F.jsx)(`span`,{className:`floating-emoji`,children:`👗`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{children:`Dresses & Tops`}),(0,F.jsx)(`p`,{children:`Soft pastel hues`})]})]})]}),(0,F.jsxs)(`div`,{className:`hero-products-block animate-fade-in`,children:[(0,F.jsxs)(`div`,{className:`hero-badge`,style:{marginBottom:`0.75rem`},children:[(0,F.jsx)(Ae,{size:14}),(0,F.jsx)(`span`,{children:`New Arrivals 2026`})]}),(0,F.jsxs)(`div`,{className:`hero-new-arrivals-wrapper`,children:[(0,F.jsx)(`button`,{className:`swiper-arrow swiper-arrow-left`,onClick:()=>p(`left`),title:`Scroll Left`,children:(0,F.jsx)(oe,{size:20})}),(0,F.jsx)(`div`,{className:`hero-new-arrivals`,children:t.length===0?(0,F.jsx)(`div`,{className:`hero-new-arrivals-loading`,children:`Loading New Arrivals...`}):(0,F.jsx)(`div`,{ref:l,className:`hero-new-arrivals-scroll`,children:t.map(e=>(0,F.jsxs)(`div`,{className:`hero-product-card animate-fade-in`,onClick:()=>n(e),children:[(0,F.jsxs)(`div`,{className:`hero-product-img-wrapper`,children:[(0,F.jsx)(`img`,{src:e.image,alt:e.name}),(0,F.jsx)(`span`,{className:`hero-product-badge`,children:e.category})]}),(0,F.jsxs)(`div`,{className:`hero-product-info`,children:[(0,F.jsx)(`h4`,{children:e.name}),(0,F.jsxs)(`div`,{className:`hero-product-price-row`,children:[(0,F.jsx)(`span`,{className:`hero-product-price`,children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(e.discountPrice||e.price)}),e.discountPrice&&(0,F.jsx)(`span`,{className:`hero-product-old-price`,children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(e.price)})]})]})]},e._id))})}),(0,F.jsx)(`button`,{className:`swiper-arrow swiper-arrow-right`,onClick:()=>p(`right`),title:`Scroll Right`,children:(0,F.jsx)(se,{size:20})})]}),(0,F.jsxs)(`div`,{className:`hero-actions`,children:[(0,F.jsxs)(`button`,{className:`btn btn-primary`,onClick:e,children:[`Explore Collection `,(0,F.jsx)(E,{size:18})]}),(0,F.jsx)(`a`,{href:`#about-brand`,className:`btn btn-secondary`,children:`Our Story`})]}),(0,F.jsxs)(`div`,{className:`hero-metrics`,children:[(0,F.jsxs)(`div`,{className:`metric-item`,children:[(0,F.jsx)(`h3`,{children:`100%`}),(0,F.jsx)(`p`,{children:`Premium Fabrics`})]}),(0,F.jsx)(`div`,{className:`metric-line`}),(0,F.jsxs)(`div`,{className:`metric-item`,children:[(0,F.jsx)(`h3`,{children:`Custom`}),(0,F.jsx)(`p`,{children:`Tailored Fitting`})]}),(0,F.jsx)(`div`,{className:`metric-line`}),(0,F.jsxs)(`div`,{className:`metric-item`,children:[(0,F.jsx)(`h3`,{children:`Gurgaon`}),(0,F.jsx)(`p`,{children:`In-Store Boutique`})]})]})]})]}),a&&(0,F.jsx)(rt,{story:a,onClose:()=>o(null)}),(0,F.jsx)(`style`,{children:`
        .hero-section {
          position: relative;
          background: linear-gradient(135deg, var(--pure-white) 0%, var(--light-pink) 100%);
          padding: 2.25rem 0 1.75rem 0;
          overflow: hidden;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          grid-template-rows: auto auto;
          align-items: center;
          gap: 2rem 3rem;
        }
        .hero-banner-slideshow {
          grid-column: 1;
          grid-row: 1;
          z-index: 10;
          position: relative;
          width: 100%;
          height: auto;
          aspect-ratio: 2.5;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          background: var(--border-light);
        }
        .banner-slide-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.6s ease-in-out;
          z-index: 1;
        }
        .banner-slide-item.active {
          opacity: 1;
          z-index: 2;
        }
        .banner-slide-img {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
        .banner-slide-skeleton {
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #fff5f7 25%, #ffeef2 50%, #fff5f7 75%);
          background-size: 200% 100%;
          animation: banner-shimmer 1.5s infinite;
        }
        @keyframes banner-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .banner-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.85);
          color: var(--dark-charcoal);
          border: none;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: var(--shadow-sm);
          transition: all 0.2s ease;
        }
        .banner-nav-btn:hover {
          background: var(--primary-pink);
          color: var(--pure-white);
          transform: translateY(-50%) scale(1.05);
        }
        .banner-nav-left {
          left: 12px;
        }
        .banner-nav-right {
          right: 12px;
        }
        .banner-pagination {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 10;
        }
        .banner-page-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .banner-page-dot:hover, .banner-page-dot.active {
          background: var(--pure-white);
          transform: scale(1.2);
        }
        .hero-products-block {
          grid-column: 1;
          grid-row: 2;
          z-index: 10;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--soft-pink);
          color: var(--primary-pink-dark);
          padding: 0.4rem 0.85rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.03em;
        }
        .hero-new-arrivals-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 760px;
          margin: 0.75rem 0 1.25rem 0;
        }
        .hero-new-arrivals {
          width: 100%;
          margin: 0 !important;
        }
        .swiper-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid var(--border-light);
          color: var(--dark-charcoal);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
        }
        .swiper-arrow:hover {
          background: var(--primary-pink);
          color: var(--pure-white);
          border-color: var(--primary-pink);
          transform: translateY(-50%) scale(1.1);
        }
        .swiper-arrow-left {
          left: -17px;
        }
        .swiper-arrow-right {
          right: -17px;
        }
        @media (max-width: 768px) {
          .swiper-arrow {
            display: none !important;
          }
        }
        .hero-new-arrivals-loading {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-style: italic;
        }
        .hero-new-arrivals-scroll {
          display: flex;
          overflow-x: auto;
          gap: 1rem;
          padding: 0.5rem 0.25rem;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
        }
        .hero-new-arrivals-scroll::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Edge */
        }
        .hero-product-card {
          flex: 0 0 170px;
          width: 170px;
          background: var(--pure-white);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: all var(--transition-normal);
        }
        .hero-product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-pink);
        }
        .hero-product-img-wrapper {
          position: relative;
          height: 195px;
          background-color: var(--light-pink);
          overflow: hidden;
        }
        .hero-product-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .hero-product-card:hover .hero-product-img-wrapper img {
          transform: scale(1.08);
        }
        .hero-product-badge {
          position: absolute;
          top: 6px;
          left: 6px;
          background: var(--primary-pink);
          color: var(--pure-white);
          font-size: 0.6rem;
          font-weight: 700;
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .hero-product-info {
          padding: 0.75rem;
          text-align: left;
        }
        .hero-product-info h4 {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.25rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .hero-product-price-row {
          display: flex;
          align-items: baseline;
          gap: 0.3rem;
        }
        .hero-product-price {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--primary-pink-dark);
        }
        .hero-product-old-price {
          font-size: 0.75rem;
          text-decoration: line-through;
          color: var(--text-muted);
        }
        .hero-actions {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
        }
        .hero-metrics {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .metric-item h3 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--primary-pink-dark);
          margin-bottom: 0.25rem;
        }
        .metric-item p {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .metric-line {
          width: 1px;
          height: 40px;
          background: var(--border-light);
        }
        
        /* Right Side Image styles */
        .hero-image-wrapper {
          grid-column: 2;
          grid-row: 1 / span 2;
          align-self: center;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-stories-container {
          position: absolute;
          top: -125px;
          left: 20px;
          display: flex;
          gap: 1.25rem;
          justify-content: flex-start;
          align-items: center;
          z-index: 12;
          width: max-content;
        }
        .hero-story-bubble-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          cursor: pointer;
          transition: transform var(--transition-fast);
        }
        .hero-story-bubble-wrapper:hover {
          transform: scale(1.05);
        }
        .hero-story-bubble {
          position: relative;
          width: 98px;
          height: 98px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--pure-white);
          box-shadow: var(--shadow-sm);
        }
        .hero-story-ring {
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border-radius: 50%;
          padding: 2.5px;
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          z-index: 1;
        }
        .hero-story-img {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--pure-white);
          z-index: 2;
        }
        .hero-story-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--dark-charcoal);
          text-transform: capitalize;
          text-align: center;
          max-width: 98px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .mobile-only-stories {
          display: none !important;
        }
        .desktop-only-stories {
          display: flex !important;
        }
        .hero-image-backdrop {
          position: absolute;
          width: 78%;
          height: 88%;
          background: var(--soft-pink);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          filter: blur(10px);
          z-index: 1;
          transform: rotate(-5deg);
        }
        .hero-main-image {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 370px;
          height: 470px;
          object-fit: cover;
          border-radius: 185px 185px 20px 20px;
          box-shadow: var(--shadow-md);
          border: 5px solid var(--pure-white);
        }
        .floating-glass-card {
          position: absolute;
          left: -20px;
          bottom: 60px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
        }
        .floating-glass-card-2 {
          position: absolute;
          right: -10px;
          top: 40px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
        }
        .floating-emoji {
          font-size: 1.5rem;
        }
        .floating-glass-card h4, .floating-glass-card-2 h4 {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .floating-glass-card p, .floating-glass-card-2 p {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        /* Responsive Hero */
        @media (max-width: 1024px) {
          .hero-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            text-align: center;
          }
          .hero-banner-slideshow {
            order: 1;
            width: 100%;
            height: 320px;
            border-radius: 12px;
          }
          .mobile-only-stories {
            display: flex !important;
            order: 2;
            position: static;
            transform: none !important;
            margin: 1rem auto;
            justify-content: center;
          }
          .desktop-only-stories {
            display: none !important;
          }
          .hero-image-wrapper {
            order: 3;
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 0 !important;
          }
          .hero-products-block {
            order: 4;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-badge, .hero-actions, .hero-metrics {
            justify-content: center;
          }
          .hero-new-arrivals {
            margin: 1.5rem auto;
          }
          .hero-new-arrivals-scroll {
            justify-content: flex-start;
          }
          .hero-main-image {
            max-width: 280px;
            height: 380px;
          }
          .floating-glass-card {
            left: 10px;
          }
          .floating-glass-card-2 {
            right: 10px;
          }
        }
        @media (max-width: 576px) {
          .hero-section {
            padding: 0 0 1.5rem 0 !important; /* start from very top edge on mobile */
          }
          .hero-container {
            gap: 1rem !important;
            padding: 0 1.25rem !important;
          }
          .hero-banner-slideshow {
            order: 1;
            width: calc(100% + 2.5rem) !important;
            margin-left: -1.25rem !important;
            margin-right: -1.25rem !important;
            height: 22vh !important;
            min-height: 135px;
            max-height: 170px;
            border-radius: 0 !important;
          }
          .hero-badge {
            margin-bottom: 0.5rem !important;
            margin-top: 0.25rem !important;
            padding: 0.35rem 0.75rem !important;
            font-size: 0.75rem !important;
          }
          .mobile-only-stories {
            margin: 0.5rem auto !important;
            top: auto !important;
            left: auto !important;
            transform: none !important;
            position: static !important;
            gap: 0.75rem !important;
          }
          .mobile-only-stories .hero-story-bubble {
            width: 72px !important;
            height: 72px !important;
          }
          .mobile-only-stories .hero-story-img {
            width: 66px !important;
            height: 66px !important;
          }
          .mobile-only-stories .hero-story-name {
            font-size: 0.75rem !important;
            max-width: 76px !important;
          }
          .hero-image-wrapper {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          .hero-new-arrivals-wrapper {
            margin: 0.25rem 0 0.75rem 0 !important;
          }
          .hero-new-arrivals {
            margin: 0.75rem 0 !important;
          }
          .hero-new-arrivals-scroll {
            justify-content: flex-start !important;
            padding: 0.25rem;
          }
          .hero-product-card {
            flex: 0 0 130px;
            width: 130px;
          }
          .hero-product-img-wrapper {
            height: 140px;
          }
          .hero-actions {
            flex-direction: row !important;
            justify-content: center !important;
            gap: 0.75rem !important;
            margin-bottom: 1rem !important;
          }
          .hero-actions .btn {
            padding: 0.7rem 1.15rem !important;
            font-size: 0.8rem !important;
            width: auto !important;
          }
          .hero-metrics {
            display: none !important;
          }
          .hero-main-image {
            max-width: 220px !important;
            height: 300px !important;
          }
          .floating-glass-card {
            left: -15px !important;
            bottom: 20px !important;
            padding: 0.4rem 0.65rem !important;
          }
          .floating-glass-card-2 {
            right: -15px !important;
            top: 20px !important;
            padding: 0.4rem 0.65rem !important;
          }
          .floating-emoji {
            font-size: 1rem !important;
          }
        }
      `})]})}function at({product:e,onSelectProduct:t}){let n=new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(e.price),r=e.discountPrice?new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(e.discountPrice):null;return(0,F.jsxs)(`div`,{className:`product-card animate-fade-in`,onClick:()=>t(e),children:[(0,F.jsxs)(`div`,{className:`product-image-container`,children:[(0,F.jsx)(`img`,{src:e.image,alt:e.name,className:`product-image`,loading:`lazy`}),(0,F.jsx)(`div`,{className:`product-hover-overlay`,children:(0,F.jsx)(`button`,{className:`overlay-action-btn`,title:`Quick View`,children:(0,F.jsx)(we,{size:18})})}),(0,F.jsx)(`span`,{className:`product-category-badge badge badge-pink`,children:e.category})]}),(0,F.jsxs)(`div`,{className:`product-info`,children:[(0,F.jsx)(`h3`,{className:`product-name`,children:e.name}),(0,F.jsxs)(`div`,{className:`product-footer`,children:[(0,F.jsx)(`div`,{className:`product-price-container`,children:r?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{className:`product-price`,children:r}),(0,F.jsx)(`span`,{className:`product-original-price-strike`,children:n})]}):(0,F.jsx)(`span`,{className:`product-price`,children:n})}),(0,F.jsx)(`span`,{className:`product-sizes`,children:e.sizes.map(e=>typeof e==`object`&&e.size?e.size:e).join(`, `)})]})]}),(0,F.jsx)(`style`,{children:`
        .product-card {
          background: var(--pure-white);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: all var(--transition-normal);
          width: 100%;
          min-width: 0;
          max-width: 100%;
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-pink);
        }
        .product-image-container {
          position: relative;
          width: 100%;
          height: 320px;
          background-color: var(--light-pink);
          overflow: hidden;
        }
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .product-card:hover .product-image {
          transform: scale(1.08);
        }
        .product-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(240, 84, 138, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
          z-index: 2;
        }
        .product-card:hover .product-hover-overlay {
          opacity: 1;
        }
        .overlay-action-btn {
          background: var(--pure-white);
          color: var(--primary-pink-dark);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .overlay-action-btn:hover {
          background: var(--primary-pink);
          color: var(--pure-white);
          transform: scale(1.1);
        }
        .product-category-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 3;
        }
        
        .product-info {
          padding: 1.25rem;
        }
        .product-name {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .product-price-container {
          display: flex;
          align-items: baseline;
          gap: 0.4rem;
        }
        .product-price {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--primary-pink-dark);
        }
        .product-original-price-strike {
          font-size: 0.85rem;
          text-decoration: line-through;
          color: var(--text-muted);
          font-weight: 500;
        }
        .product-sizes {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          background: var(--cream-white);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          border: 1px solid var(--border-light);
        }
        @media (max-width: 576px) {
          .product-image-container {
            height: 200px !important;
          }
          .product-info {
            padding: 0.75rem !important;
          }
          .product-name {
            font-size: 0.9rem !important;
            margin-bottom: 0.25rem !important;
          }
          .product-price {
            font-size: 0.95rem !important;
          }
          .product-original-price-strike {
            font-size: 0.75rem !important;
          }
          .product-sizes {
            display: none !important;
          }
          .product-category-badge {
            font-size: 0.6rem !important;
            padding: 0.15rem 0.5rem !important;
            top: 8px !important;
            left: 8px !important;
          }
        }
      `})]})}function ot(){let[e,t]=(0,_.useState)({name:``,email:``,phone:``,message:``}),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(``),c=e=>{let{name:n,value:r}=e.target;t(e=>({...e,[n]:r}))};return(0,F.jsxs)(`div`,{className:`contact-form-wrapper`,children:[(0,F.jsxs)(`div`,{className:`contact-grid`,children:[(0,F.jsxs)(`div`,{className:`store-info-panel glass-card`,children:[(0,F.jsx)(`h3`,{children:`Bhawna Closet`}),(0,F.jsx)(`p`,{className:`panel-desc`,children:`Visit our physical boutique in Gurgaon or get in touch for custom stitching, sizing availability, or direct orders.`}),(0,F.jsxs)(`div`,{className:`info-list`,children:[(0,F.jsxs)(`div`,{className:`info-item`,children:[(0,F.jsx)(`div`,{className:`icon-badge`,children:(0,F.jsx)(_e,{size:18})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{children:`Our Location`}),(0,F.jsx)(`p`,{children:`Shop no R6/020 Sec 67 M3M Urbana Gurgaon, Haryana`})]})]}),(0,F.jsxs)(`div`,{className:`info-item`,children:[(0,F.jsx)(`div`,{className:`icon-badge`,children:(0,F.jsx)(xe,{size:18})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{children:`Call Us`}),(0,F.jsx)(`p`,{children:(0,F.jsx)(`a`,{href:`tel:9266991136`,children:`9266991136`})})]})]}),(0,F.jsxs)(`div`,{className:`info-item`,children:[(0,F.jsx)(`div`,{className:`icon-badge`,children:(0,F.jsx)(ge,{size:18})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{children:`Email Address`}),(0,F.jsx)(`p`,{children:(0,F.jsx)(`a`,{href:`mailto:bhawnacloset.in@gmail.com`,children:`bhawnacloset.in@gmail.com`})})]})]}),(0,F.jsxs)(`div`,{className:`info-item`,children:[(0,F.jsx)(`div`,{className:`icon-badge`,children:(0,F.jsx)(k,{size:18})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{children:`Store Hours`}),(0,F.jsx)(`p`,{children:`11:00 AM - 9:00 PM (Tuesday Closed)`})]})]})]})]}),(0,F.jsxs)(`div`,{className:`form-panel glass-card`,children:[(0,F.jsx)(`h3`,{children:`Send Us a Message`}),(0,F.jsx)(`p`,{className:`panel-desc`,children:`Have a question? Fill in the details below and our styling team will reach out to you.`}),i?(0,F.jsxs)(`div`,{className:`contact-success-box animate-fade-in`,children:[(0,F.jsx)(`div`,{className:`success-icon`,children:(0,F.jsx)(ae,{size:32})}),(0,F.jsx)(`h4`,{children:`Message Sent Successfully!`}),(0,F.jsx)(`p`,{children:`Thank you for reaching out to Bhawna Closet. We will get back to you shortly.`}),(0,F.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>a(!1),children:`Send Another Message`})]}):(0,F.jsxs)(`form`,{onSubmit:async n=>{n.preventDefault(),r(!0),s(``);try{let n=await fetch(`http://localhost:5000/api/inquiries`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)}),r=await n.json();n.ok?(a(!0),t({name:``,email:``,phone:``,message:``})):s(r.message||`Error sending message.`)}catch{s(`Connection error. Please call us directly at 9266991136.`)}finally{r(!1)}},className:`actual-form`,children:[(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{htmlFor:`contact-name`,children:`Full Name`}),(0,F.jsx)(`input`,{id:`contact-name`,type:`text`,name:`name`,value:e.name,onChange:c,placeholder:`Enter Full Name`,required:!0})]}),(0,F.jsxs)(`div`,{className:`form-row-contact`,children:[(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{htmlFor:`contact-email`,children:`Email Address`}),(0,F.jsx)(`input`,{id:`contact-email`,type:`email`,name:`email`,value:e.email,onChange:c,placeholder:`Enter Email Address`,required:!0})]}),(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{htmlFor:`contact-phone`,children:`Phone Number`}),(0,F.jsx)(`input`,{id:`contact-phone`,type:`tel`,name:`phone`,value:e.phone,onChange:c,placeholder:`Enter Mobile Number`,required:!0})]})]}),(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{htmlFor:`contact-message`,children:`Your Message`}),(0,F.jsx)(`textarea`,{id:`contact-message`,name:`message`,rows:`4`,value:e.message,onChange:c,placeholder:`Enter Your Message`,required:!0})]}),o&&(0,F.jsx)(`p`,{className:`contact-error`,children:o}),(0,F.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-send-message`,disabled:n,children:[n?`Sending...`:`Send Message`,` `,(0,F.jsx)(Te,{size:16})]})]})]})]}),(0,F.jsx)(`style`,{children:`
        .contact-form-wrapper {
          width: 100%;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 2.5rem;
        }
        
        .store-info-panel {
          padding: 2.5rem;
          background: linear-gradient(135deg, var(--pure-white) 0%, var(--light-pink) 100%);
        }
        .store-info-panel h3 {
          font-size: 1.8rem;
          color: var(--dark-charcoal);
          margin-bottom: 0.75rem;
        }
        .panel-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .icon-badge {
          background: var(--pure-white);
          color: var(--primary-pink-dark);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          flex-shrink: 0;
          border: 1px solid var(--border-pink);
        }
        .info-item h4 {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.2rem;
        }
        .info-item p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .info-item a {
          color: var(--text-muted);
        }
        .info-item a:hover {
          color: var(--primary-pink);
        }
        
        .form-panel {
          padding: 2.5rem;
          background: var(--pure-white);
        }
        .form-panel h3 {
          font-size: 1.8rem;
          color: var(--dark-charcoal);
          margin-bottom: 0.75rem;
        }
        
        .actual-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .form-row-contact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .form-group input, .form-group textarea {
          font-family: var(--font-sans);
          padding: 0.85rem 1rem;
          border: 1px solid var(--border-light);
          border-radius: 10px;
          outline: none;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--primary-pink);
          box-shadow: 0 0 0 3px rgba(240, 84, 138, 0.1);
          background: var(--cream-white);
        }
        .btn-send-message {
          align-self: flex-start;
          border-radius: 10px;
          padding: 0.85rem 2rem;
        }
        .contact-error {
          color: red;
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        /* Success Presentation Box */
        .contact-success-box {
          text-align: center;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .success-icon {
          width: 64px;
          height: 64px;
          background: #d4edda;
          color: #155724;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #c3e6cb;
          margin-bottom: 0.5rem;
        }
        .contact-success-box h4 {
          font-family: var(--font-sans);
          font-size: 1.25rem;
          color: #155724;
        }
        .contact-success-box p {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 320px;
          margin-bottom: 1.5rem;
        }

        /* Responsive Contact */
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 576px) {
          .form-row-contact {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .form-panel, .store-info-panel {
            padding: 1.5rem;
          }
        }
      `})]})}function st({setActiveTab:e}){let t=t=>{e(t),window.scrollTo({top:0,behavior:`smooth`})};return(0,F.jsxs)(`footer`,{className:`footer-section`,children:[(0,F.jsxs)(`div`,{className:`container footer-grid`,children:[(0,F.jsxs)(`div`,{className:`footer-col footer-about`,children:[(0,F.jsxs)(`h3`,{children:[(0,F.jsx)(`span`,{children:`Bhawna`}),` Closet`]}),(0,F.jsx)(`p`,{children:`Bhawna Closet brings you the perfect blend of style, elegance, and trend. Discover fashionable dresses and girls’ wear collections curated for modern fashion lovers who love to stand out with confidence. 💖`}),(0,F.jsx)(`div`,{className:`social-links`,children:(0,F.jsxs)(`a`,{href:`https://instagram.com/bhawna_closet123`,target:`_blank`,rel:`noopener noreferrer`,className:`social-btn instagram-btn`,title:`Follow us on Instagram`,children:[(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,F.jsx)(`rect`,{width:`20`,height:`20`,x:`2`,y:`2`,rx:`5`,ry:`5`}),(0,F.jsx)(`path`,{d:`M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`}),(0,F.jsx)(`line`,{x1:`17.5`,x2:`17.51`,y1:`6.5`,y2:`6.5`})]}),(0,F.jsx)(`span`,{children:`@bhawna_closet123`})]})})]}),(0,F.jsxs)(`div`,{className:`footer-col`,children:[(0,F.jsx)(`h4`,{children:`Explore Shop`}),(0,F.jsxs)(`ul`,{className:`footer-links`,children:[(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>t(`home`),children:`Home`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>t(`collections`),children:`Cordsets Collection`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>t(`collections`),children:`Dresses Collection`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>t(`collections`),children:`Tops & Shirts Collection`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>t(`collections`),children:`Bottoms Collection`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>t(`contact`),children:`Contact & Location`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`button`,{onClick:()=>t(`admin`),style:{opacity:.6,fontSize:`0.8rem`},children:`Admin Portal`})})]})]}),(0,F.jsxs)(`div`,{className:`footer-col`,children:[(0,F.jsx)(`h4`,{children:`Boutique Info`}),(0,F.jsxs)(`ul`,{className:`footer-contact-list`,children:[(0,F.jsxs)(`li`,{children:[(0,F.jsx)(_e,{size:18,className:`footer-icon`}),(0,F.jsx)(`span`,{children:`Shop no R6/020 Sec 67 M3M Urbana Gurgaon, Haryana`})]}),(0,F.jsxs)(`li`,{children:[(0,F.jsx)(xe,{size:18,className:`footer-icon`}),(0,F.jsx)(`span`,{children:(0,F.jsx)(`a`,{href:`tel:9266991136`,children:`9266991136`})})]}),(0,F.jsxs)(`li`,{children:[(0,F.jsx)(ge,{size:18,className:`footer-icon`}),(0,F.jsx)(`span`,{children:(0,F.jsx)(`a`,{href:`mailto:bhawnacloset.in@gmail.com`,children:`bhawnacloset.in@gmail.com`})})]})]})]})]}),(0,F.jsx)(`div`,{className:`footer-bottom`,children:(0,F.jsxs)(`div`,{className:`container footer-bottom-container`,children:[(0,F.jsxs)(`p`,{children:[`© `,new Date().getFullYear(),` Bhawna Closet. All Rights Reserved.`]}),(0,F.jsx)(`p`,{className:`footer-tagline`,children:`Curated with love 🌸`})]})}),(0,F.jsx)(`style`,{children:`
        .footer-section {
          background-color: var(--dark-charcoal);
          color: var(--pure-white);
          padding: 5rem 0 0 0;
          margin-top: auto;
          border-top: 4px solid var(--primary-pink);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.85fr 0.85fr;
          gap: 4rem;
          padding-bottom: 4rem;
        }
        
        .footer-col h3 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--pure-white);
          margin-bottom: 1.25rem;
        }
        .footer-col h3 span {
          color: var(--primary-pink);
        }
        .footer-col h4 {
          font-family: var(--font-sans);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--pure-white);
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
          padding-bottom: 0.5rem;
        }
        .footer-col h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--primary-pink);
        }
        .footer-col p {
          color: #adb5bd;
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }
        .instagram-btn {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          color: var(--pure-white);
        }
        .instagram-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(220, 39, 67, 0.4);
        }
        
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links button {
          font-size: 0.95rem;
          color: #adb5bd;
          text-align: left;
          width: 100%;
        }
        .footer-links button:hover {
          color: var(--primary-pink);
          padding-left: 5px;
        }
        
        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .footer-contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #adb5bd;
          font-size: 0.95rem;
        }
        .footer-contact-list a {
          color: #adb5bd;
        }
        .footer-contact-list a:hover {
          color: var(--primary-pink);
        }
        .footer-icon {
          color: var(--primary-pink);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        
        .footer-bottom {
          border-top: 1px solid #2b303b;
          padding: 2rem 0;
          background-color: #16191f;
        }
        .footer-bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: #6c757d;
        }
        .footer-tagline {
          color: var(--primary-pink);
          font-weight: 500;
        }

        /* Responsive Footer */
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
          .footer-about {
            grid-column: span 2;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-about {
            grid-column: span 1;
          }
          .footer-bottom-container {
            flex-direction: column;
            gap: 0.75rem;
            text-align: center;
          }
        }
      `})]})}var ct={getProducts:async({page:e=1,limit:t=12,category:n=`All`,search:r=``,sort:i=`newest`,groupVariants:a=!1}={})=>{let o=new URLSearchParams;return o.append(`page`,e),o.append(`limit`,t),n&&o.append(`category`,n),r&&o.append(`search`,r),i&&o.append(`sort`,i),a&&o.append(`groupVariants`,`true`),await P(`/products?${o.toString()}`,{method:`GET`})},getProductBySlug:async e=>await P(`/products/slug/${e}`,{method:`GET`}),getCategories:async()=>await P(`/categories`,{method:`GET`})},I={getStories:async()=>await P(`/stories`,{method:`GET`}),createStory:async e=>await P(`/stories/admin`,{method:`POST`,body:e},!0),deleteStory:async e=>await P(`/stories/admin/${e}`,{method:`DELETE`},!0),addSubStory:async(e,t)=>await P(`/stories/admin/${e}/substories`,{method:`POST`,body:t},!0),deleteSubStory:async(e,t)=>await P(`/stories/admin/${e}/substories/${t}`,{method:`DELETE`},!0)},lt={getBanners:async()=>await P(`/banners`,{method:`GET`}),createBanner:async e=>await P(`/banners`,{method:`POST`,body:e},!0),deleteBanner:async e=>await P(`/banners/${e}`,{method:`DELETE`},!0)};function ut({onSwitchToSignup:e,onLoginSuccess:t}){let{login:n,loginOtp:r,loginWithToken:i}=qe(),[a,o]=(0,_.useState)(`login`),[s,c]=(0,_.useState)(`password`),[l,u]=(0,_.useState)({phone:``,password:``}),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(!1),[h,g]=(0,_.useState)(``),[v,y]=(0,_.useState)(!1),[b,x]=(0,_.useState)(``),[S,C]=(0,_.useState)(!1),[w,ee]=(0,_.useState)(``),[te,ne]=(0,_.useState)(``),[T,re]=(0,_.useState)(!1),ie=e=>{let{name:t,value:n}=e.target;u(e=>({...e,[t]:n}))},ae=()=>{let e=a===`forgot`?w:l.phone,t=e?e.trim():``;if(!t||t.length<10)throw Error(`Please enter a valid 10-digit phone number`);return t},D=async e=>{e.preventDefault(),g(``),C(!0);try{let e=ae();await He.sendOtp(e),y(!0)}catch(e){console.error(e),g(e.message||`Please enter a valid 10-digit phone number.`)}finally{C(!1)}},oe=async e=>{if(e.preventDefault(),!b||b.length!==6){g(`Please enter a valid 6-digit OTP code`);return}m(!0),g(``);try{await r(ae(),b),t&&t()}catch(e){console.error(e),g(e.message||`OTP verification failed. Invalid code.`)}finally{m(!1)}},se=async e=>{if(e.preventDefault(),!l.phone||!l.password){g(`Please fill in all fields`);return}m(!0),g(``);try{await n(l.phone,l.password),t&&t()}catch(e){g(e.message||`Invalid phone number or password`)}finally{m(!1)}},O=async e=>{if(e.preventDefault(),!b||b.length!==6||!te){g(`Please complete all fields`);return}m(!0),g(``);try{i(await P(`/auth/reset-password`,{method:`POST`,body:JSON.stringify({phone:w,newPassword:te,otp:b})})),t&&t()}catch(e){console.error(e),g(e.message||`Password reset failed. Invalid verification code.`)}finally{m(!1)}},k=()=>{c(e=>e===`password`?`otp`:`password`),y(!1),x(``),g(``)};return a===`forgot`?(0,F.jsxs)(`div`,{className:`login-card glass-card animate-fade-in`,children:[v?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`div`,{className:`login-header`,children:[(0,F.jsx)(`h2`,{children:`Verify Reset OTP`}),(0,F.jsxs)(`p`,{children:[`We have sent a 6-digit OTP code to `,(0,F.jsx)(`strong`,{children:w}),`. Please enter the code and set your new password.`]})]}),h&&(0,F.jsxs)(`div`,{className:`error-alert`,children:[(0,F.jsx)(Ne,{size:18}),(0,F.jsx)(`span`,{children:h})]}),(0,F.jsxs)(`form`,{onSubmit:O,className:`auth-form`,children:[(0,F.jsxs)(`div`,{className:`form-field`,children:[(0,F.jsx)(`label`,{htmlFor:`reset-otp`,children:`6-Digit OTP`}),(0,F.jsxs)(`div`,{className:`input-wrapper`,children:[(0,F.jsx)(me,{size:18,className:`input-icon`}),(0,F.jsx)(`input`,{id:`reset-otp`,type:`text`,maxLength:6,value:b,onChange:e=>x(e.target.value.replace(/\D/g,``).substring(0,6)),placeholder:`Enter 6-Digit OTP`,required:!0})]})]}),(0,F.jsxs)(`div`,{className:`form-field`,children:[(0,F.jsx)(`label`,{htmlFor:`new-password`,children:`New Password`}),(0,F.jsxs)(`div`,{className:`input-wrapper`,children:[(0,F.jsx)(me,{size:18,className:`input-icon`}),(0,F.jsx)(`input`,{id:`new-password`,type:T?`text`:`password`,value:te,onChange:e=>ne(e.target.value),placeholder:`Enter New Password`,required:!0}),(0,F.jsx)(`button`,{type:`button`,className:`password-toggle-btn`,onClick:()=>re(!T),children:T?(0,F.jsx)(A,{size:18}):(0,F.jsx)(ce,{size:18})})]})]}),(0,F.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-auth-submit`,disabled:p,children:[p?`Updating Password...`:`Verify OTP & Reset Password`,` `,(0,F.jsx)(E,{size:18})]})]}),(0,F.jsx)(`div`,{className:`auth-footer`,style:{marginTop:`2rem`},children:(0,F.jsx)(`button`,{className:`back-to-login-btn`,onClick:()=>{o(`login`),g(``),y(!1)},children:`Cancel & Log In`})})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`div`,{className:`login-header`,children:[(0,F.jsx)(`h2`,{children:`Reset Password`}),(0,F.jsx)(`p`,{children:`Enter your registered phone number below, and we will send you a 6-digit OTP code to verify your identity.`})]}),h&&(0,F.jsxs)(`div`,{className:`error-alert`,children:[(0,F.jsx)(Ne,{size:18}),(0,F.jsx)(`span`,{children:h})]}),(0,F.jsxs)(`form`,{onSubmit:D,className:`auth-form`,children:[(0,F.jsxs)(`div`,{className:`form-field`,children:[(0,F.jsx)(`label`,{htmlFor:`forgot-phone`,children:`Phone Number`}),(0,F.jsxs)(`div`,{className:`input-wrapper`,children:[(0,F.jsx)(xe,{size:18,className:`input-icon`}),(0,F.jsx)(`input`,{id:`forgot-phone`,type:`tel`,value:w,onChange:e=>ee(e.target.value),placeholder:`Enter Mobile Number`,required:!0})]})]}),(0,F.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-auth-submit`,disabled:S,children:[S?`Sending SMS OTP...`:`Send Verification OTP`,` `,(0,F.jsx)(E,{size:18})]})]}),(0,F.jsx)(`div`,{className:`auth-footer`,style:{marginTop:`2rem`},children:(0,F.jsx)(`button`,{className:`back-to-login-btn`,onClick:()=>{o(`login`),g(``)},children:`Back to Log In`})})]}),(0,F.jsx)(`style`,{children:dt})]}):(0,F.jsxs)(`div`,{className:`login-card glass-card animate-fade-in`,children:[(0,F.jsxs)(`div`,{className:`login-header`,children:[(0,F.jsx)(`h2`,{children:`Welcome Back`}),(0,F.jsx)(`p`,{children:`Login to your Bhawna Closet account using your phone number.`})]}),h&&(0,F.jsxs)(`div`,{className:`error-alert`,children:[(0,F.jsx)(Ne,{size:18}),(0,F.jsx)(`span`,{children:h})]}),s===`password`?(0,F.jsxs)(`form`,{onSubmit:se,className:`auth-form`,children:[(0,F.jsxs)(`div`,{className:`form-field`,children:[(0,F.jsx)(`label`,{htmlFor:`login-phone`,children:`Phone Number`}),(0,F.jsxs)(`div`,{className:`input-wrapper`,children:[(0,F.jsx)(xe,{size:18,className:`input-icon`}),(0,F.jsx)(`input`,{id:`login-phone`,type:`tel`,name:`phone`,value:l.phone,onChange:ie,placeholder:`Enter Mobile Number`,required:!0})]})]}),(0,F.jsxs)(`div`,{className:`form-field`,children:[(0,F.jsx)(`label`,{htmlFor:`login-password`,children:`Password`}),(0,F.jsxs)(`div`,{className:`input-wrapper`,children:[(0,F.jsx)(me,{size:18,className:`input-icon`}),(0,F.jsx)(`input`,{id:`login-password`,type:d?`text`:`password`,name:`password`,value:l.password,onChange:ie,placeholder:`Enter Password`,required:!0}),(0,F.jsx)(`button`,{type:`button`,className:`password-toggle-btn`,onClick:()=>f(!d),children:d?(0,F.jsx)(A,{size:18}):(0,F.jsx)(ce,{size:18})})]}),(0,F.jsx)(`div`,{className:`forgot-password-link-container`,children:(0,F.jsx)(`button`,{type:`button`,className:`forgot-password-link`,onClick:()=>{o(`forgot`),g(``)},children:`Forgot Password?`})})]}),(0,F.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-auth-submit`,disabled:p,children:[p?`Logging In...`:`Log In with Password`,` `,(0,F.jsx)(E,{size:18})]}),(0,F.jsx)(`button`,{type:`button`,className:`btn btn-outline`,onClick:k,style:{width:`100%`,borderRadius:`10px`},children:`Login with SMS OTP`})]}):(0,F.jsx)(F.Fragment,{children:v?(0,F.jsxs)(`form`,{onSubmit:oe,className:`auth-form animate-fade-in`,children:[(0,F.jsxs)(`div`,{className:`form-field`,children:[(0,F.jsx)(`label`,{htmlFor:`login-otp-code`,children:`6-Digit Verification Code`}),(0,F.jsxs)(`div`,{className:`input-wrapper`,children:[(0,F.jsx)(me,{size:18,className:`input-icon`}),(0,F.jsx)(`input`,{id:`login-otp-code`,type:`text`,maxLength:6,value:b,onChange:e=>x(e.target.value.replace(/\D/g,``).substring(0,6)),placeholder:`Enter 6-Digit OTP`,required:!0})]})]}),(0,F.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-auth-submit`,disabled:p,children:[p?`Verifying OTP...`:`Verify & Log In`,` `,(0,F.jsx)(E,{size:18})]}),(0,F.jsxs)(`div`,{className:`auth-footer`,style:{marginTop:`1rem`},children:[(0,F.jsxs)(`p`,{children:[`Didn't receive the SMS? `,(0,F.jsx)(`button`,{onClick:D,disabled:S,style:{color:`var(--primary-pink-dark)`},children:S?`Resending...`:`Resend SMS`})]}),(0,F.jsx)(`button`,{type:`button`,className:`back-to-login-btn`,style:{marginTop:`0.85rem`},onClick:()=>{y(!1),x(``)},children:`Change Phone Number`})]})]}):(0,F.jsxs)(`form`,{onSubmit:D,className:`auth-form`,children:[(0,F.jsxs)(`div`,{className:`form-field`,children:[(0,F.jsx)(`label`,{htmlFor:`login-phone-otp`,children:`Phone Number`}),(0,F.jsxs)(`div`,{className:`input-wrapper`,children:[(0,F.jsx)(xe,{size:18,className:`input-icon`}),(0,F.jsx)(`input`,{id:`login-phone-otp`,type:`tel`,name:`phone`,value:l.phone,onChange:ie,placeholder:`Enter Mobile Number`,required:!0})]})]}),(0,F.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-auth-submit`,disabled:S,children:[S?`Sending SMS OTP...`:`Send Login OTP`,` `,(0,F.jsx)(E,{size:18})]}),(0,F.jsx)(`button`,{type:`button`,className:`btn btn-outline`,onClick:k,style:{width:`100%`,borderRadius:`10px`},children:`Login with Password`})]})}),(0,F.jsx)(`div`,{className:`auth-footer`,children:(0,F.jsxs)(`p`,{children:[`Don't have an account? `,(0,F.jsx)(`button`,{onClick:e,children:`Sign Up`})]})}),(0,F.jsx)(`style`,{children:dt})]})}var dt=`
  .login-card {
    max-width: 450px;
    margin: 4rem auto;
    padding: 3rem;
    background: var(--pure-white);
  }
  .login-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  .login-header h2 {
    font-size: 2.2rem;
    color: var(--dark-charcoal);
    margin-bottom: 0.5rem;
    font-family: var(--font-serif);
  }
  .login-header p {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.5;
  }
  
  .error-alert {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: #fff3cd;
    color: #856404;
    padding: 0.85rem 1rem;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    border: 1px solid #ffeeba;
    margin-bottom: 1.5rem;
  }
  
  .auth-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .form-field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .form-field label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--dark-charcoal);
  }
  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  .input-icon {
    position: absolute;
    left: 12px;
    color: var(--text-muted);
  }
  .input-wrapper input {
    font-family: var(--font-sans);
    width: 100%;
    padding: 0.85rem 1rem 0.85rem 2.5rem;
    border: 1px solid var(--border-light);
    border-radius: 10px;
    outline: none;
    font-size: 0.9rem;
    transition: all var(--transition-fast);
  }
  .input-wrapper input:focus {
    border-color: var(--primary-pink);
    box-shadow: 0 0 0 3px rgba(240, 84, 138, 0.1);
    background: var(--cream-white);
  }
  
  .password-toggle-btn {
    position: absolute;
    right: 12px;
    color: var(--text-muted);
    padding: 4px;
  }
  .password-toggle-btn:hover {
    color: var(--primary-pink);
  }

  .forgot-password-link-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.15rem;
  }
  .forgot-password-link {
    background: none;
    border: none;
    color: var(--primary-pink-dark);
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    font-family: var(--font-sans);
  }
  .forgot-password-link:hover {
    color: var(--primary-pink-hover);
    text-decoration: underline;
  }

  .back-to-login-btn {
    background: none;
    border: none;
    color: var(--primary-pink-dark);
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    font-family: var(--font-sans);
  }
  .back-to-login-btn:hover {
    color: var(--primary-pink-hover);
    text-decoration: underline;
  }
  
  .btn-auth-submit {
    width: 100%;
    padding: 0.85rem;
    border-radius: 10px;
    margin-top: 0.5rem;
  }
  
  .auth-footer {
    text-align: center;
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-muted);
  }
  .auth-footer button {
    color: var(--primary-pink-dark);
    font-weight: 600;
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-sans);
  }
  .auth-footer button:hover {
    color: var(--primary-pink-hover);
    text-decoration: underline;
  }
  
  @media (max-width: 576px) {
    .login-card {
      padding: 2rem 1.5rem;
      margin: 2rem auto;
    }
  }
`;function ft({onSwitchToLogin:e,onSignupSuccess:t}){let{signup:n}=qe(),[r,i]=(0,_.useState)({name:``,phone:``,password:``,confirmPassword:``}),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(``),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(``),[h,g]=(0,_.useState)(!1),v=e=>{let{name:t,value:n}=e.target;i(e=>({...e,[t]:n}))},y=async e=>{e.preventDefault();let{name:t,phone:n,password:i,confirmPassword:a}=r;if(!t||!n||!i||!a){u(`Please fill in all fields`);return}if(i!==a){u(`Passwords do not match`);return}if(i.length<6){u(`Password must be at least 6 characters long`);return}let o=n.trim();if(o.length<10){u(`Please enter a valid 10-digit phone number`);return}g(!0),u(``);try{await He.sendOtp(o),f(!0)}catch(e){console.error(`SMS send error:`,e),u(e.message||`Please enter a valid 10-digit phone number.`)}finally{g(!1)}};return(0,F.jsxs)(`div`,{className:`login-card glass-card animate-fade-in`,style:{maxWidth:`480px`},children:[d?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`div`,{className:`login-header animate-fade-in`,children:[(0,F.jsx)(`h2`,{children:`Enter OTP Code`}),(0,F.jsxs)(`p`,{children:[`We've sent a 6-digit verification code to `,(0,F.jsx)(`strong`,{children:r.phone}),`. Enter it below to complete registration.`]})]}),l&&(0,F.jsxs)(`div`,{className:`error-alert animate-fade-in`,children:[(0,F.jsx)(Ne,{size:18}),(0,F.jsx)(`span`,{children:l})]}),(0,F.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),!p||p.length!==6){u(`Please enter a valid 6-digit OTP code`);return}c(!0),u(``);try{await n(r.name,r.phone,r.password,p),t&&t()}catch(e){console.error(`Verify OTP signup error:`,e),u(e.message||`Invalid or expired OTP code. Please try again.`)}finally{c(!1)}},className:`auth-form animate-fade-in`,children:[(0,F.jsxs)(`div`,{className:`form-field`,children:[(0,F.jsx)(`label`,{htmlFor:`signup-otp`,children:`6-Digit Verification Code (OTP)`}),(0,F.jsxs)(`div`,{className:`input-wrapper`,children:[(0,F.jsx)(me,{size:18,className:`input-icon`}),(0,F.jsx)(`input`,{id:`signup-otp`,type:`text`,name:`otp`,value:p,onChange:e=>m(e.target.value.replace(/\D/g,``).substring(0,6)),placeholder:`Enter 6-Digit OTP`,maxLength:6,required:!0})]})]}),(0,F.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-auth-submit`,disabled:s,children:[s?`Verifying OTP...`:`Verify & Create Account`,` `,(0,F.jsx)(E,{size:18})]})]}),(0,F.jsxs)(`div`,{className:`auth-footer animate-fade-in`,children:[(0,F.jsxs)(`p`,{children:[`Didn't receive the SMS? `,(0,F.jsx)(`button`,{onClick:y,disabled:h,style:{color:`var(--primary-pink-dark)`},children:h?`Resending...`:`Resend SMS`})]}),(0,F.jsx)(`p`,{style:{marginTop:`0.85rem`},children:(0,F.jsx)(`button`,{onClick:()=>{f(!1),u(``)},style:{color:`var(--text-muted)`},children:`Edit Phone Number`})})]})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`div`,{className:`login-header`,children:[(0,F.jsx)(`h2`,{children:`Create Account`}),(0,F.jsx)(`p`,{children:`Register to start shopping elegant dresses and outfits.`})]}),l&&(0,F.jsxs)(`div`,{className:`error-alert`,children:[(0,F.jsx)(Ne,{size:18}),(0,F.jsx)(`span`,{children:l})]}),(0,F.jsxs)(`form`,{onSubmit:y,className:`auth-form`,children:[(0,F.jsxs)(`div`,{className:`form-field`,children:[(0,F.jsx)(`label`,{htmlFor:`signup-name`,children:`Full Name`}),(0,F.jsxs)(`div`,{className:`input-wrapper`,children:[(0,F.jsx)(Fe,{size:18,className:`input-icon`}),(0,F.jsx)(`input`,{id:`signup-name`,type:`text`,name:`name`,value:r.name,onChange:v,placeholder:`Enter Full Name`,required:!0})]})]}),(0,F.jsxs)(`div`,{className:`form-field`,children:[(0,F.jsx)(`label`,{htmlFor:`signup-phone`,children:`Phone Number`}),(0,F.jsxs)(`div`,{className:`input-wrapper`,children:[(0,F.jsx)(xe,{size:18,className:`input-icon`}),(0,F.jsx)(`input`,{id:`signup-phone`,type:`tel`,name:`phone`,value:r.phone,onChange:v,placeholder:`Enter Mobile Number`,required:!0})]})]}),(0,F.jsxs)(`div`,{className:`form-field`,children:[(0,F.jsx)(`label`,{htmlFor:`signup-password`,children:`Password`}),(0,F.jsxs)(`div`,{className:`input-wrapper`,children:[(0,F.jsx)(me,{size:18,className:`input-icon`}),(0,F.jsx)(`input`,{id:`signup-password`,type:a?`text`:`password`,name:`password`,value:r.password,onChange:v,placeholder:`Enter Password`,required:!0}),(0,F.jsx)(`button`,{type:`button`,className:`password-toggle-btn`,onClick:()=>o(!a),children:a?(0,F.jsx)(A,{size:18}):(0,F.jsx)(ce,{size:18})})]})]}),(0,F.jsxs)(`div`,{className:`form-field`,children:[(0,F.jsx)(`label`,{htmlFor:`signup-confirm-password`,children:`Confirm Password`}),(0,F.jsxs)(`div`,{className:`input-wrapper`,children:[(0,F.jsx)(me,{size:18,className:`input-icon`}),(0,F.jsx)(`input`,{id:`signup-confirm-password`,type:a?`text`:`password`,name:`confirmPassword`,value:r.confirmPassword,onChange:v,placeholder:`Confirm Password`,required:!0})]})]}),(0,F.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-auth-submit`,disabled:h,children:[h?`Sending verification SMS...`:`Sign Up`,` `,(0,F.jsx)(E,{size:18})]})]}),(0,F.jsx)(`div`,{className:`auth-footer`,children:(0,F.jsxs)(`p`,{children:[`Already have an account? `,(0,F.jsx)(`button`,{onClick:e,children:`Login`})]})})]}),(0,F.jsx)(`style`,{children:`
        .login-card {
          max-width: 450px;
          margin: 4rem auto;
          padding: 3rem;
          background: var(--pure-white);
        }
        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .login-header h2 {
          font-size: 2.2rem;
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
          font-family: var(--font-serif);
        }
        .login-header p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0;
        }
        
        .error-alert {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #fff3cd;
          color: #856404;
          padding: 0.85rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid #ffeeba;
          margin-bottom: 1.5rem;
        }
        
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-field label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 12px;
          color: var(--text-muted);
        }
        .input-wrapper input {
          font-family: var(--font-sans);
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.5rem;
          border: 1px solid var(--border-light);
          border-radius: 10px;
          outline: none;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }
        .input-wrapper input:focus {
          border-color: var(--primary-pink);
          box-shadow: 0 0 0 3px rgba(240, 84, 138, 0.1);
          background: var(--cream-white);
        }
        
        .password-toggle-btn {
          position: absolute;
          right: 12px;
          color: var(--text-muted);
          padding: 4px;
        }
        .password-toggle-btn:hover {
          color: var(--primary-pink);
        }
        
        .btn-auth-submit {
          width: 100%;
          padding: 0.85rem;
          border-radius: 10px;
          margin-top: 0.5rem;
        }
        
        .auth-footer {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .auth-footer button {
          color: var(--primary-pink-dark);
          font-weight: 600;
        }
        .auth-footer button:hover {
          color: var(--primary-pink-hover);
          text-decoration: underline;
        }
        
        @media (max-width: 576px) {
          .login-card {
            padding: 2rem 1.5rem;
            margin: 2rem auto;
          }
        }
      `})]})}function pt({productSlug:e,onBack:t,onSelectProduct:n}){let[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(!0),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(``),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(0),[h,g]=(0,_.useState)(``),[v,y]=(0,_.useState)(``),[b,x]=(0,_.useState)(!1),[S,C]=(0,_.useState)(!1),[w,ee]=(0,_.useState)(!1),[te,ne]=(0,_.useState)(``),[T,E]=(0,_.useState)([]),{addToCart:ie}=Ze(),{toggleWishlist:D,isInWishlist:oe}=tt(),{user:se}=qe();if((0,_.useEffect)(()=>{(async()=>{o(!0),c(``);try{let t=await ct.getProductBySlug(e);i(t),t.images&&t.images.length>0?u(t.images[0]):u(t.image);let n=t.sizes.find(e=>e.stock>0);n?g(n.size):t.sizes.length>0&&g(t.sizes[0].size),t.colors&&t.colors.length>0&&y(t.colors[0]),E((await ct.getProducts({category:t.category,limit:5})).products.filter(e=>e._id!==t._id).slice(0,4))}catch(e){console.error(`Error fetching product detail:`,e),c(`Failed to load product details.`)}finally{o(!1)}})()},[e]),a)return(0,F.jsx)(`div`,{className:`container detail-loading-container`,children:(0,F.jsx)(`div`,{className:`pink-loader`})});if(s||!r)return(0,F.jsxs)(`div`,{className:`container detail-error-container glass-card`,children:[(0,F.jsx)(O,{size:40,className:`error-icon`}),(0,F.jsx)(`h3`,{children:`Error Loading Product`}),(0,F.jsx)(`p`,{children:s||`We could not find the outfit you were looking for.`}),(0,F.jsxs)(`button`,{className:`btn btn-primary`,onClick:t,children:[(0,F.jsx)(re,{size:16}),` Back to Collection`]})]});let k=oe(r._id),A=new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(r.price),ce=r.discountPrice?new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(r.discountPrice):null,le=r.sizes.find(e=>e.size===h),ue=le?le.stock:0,M=async()=>{if(!se){window.location.hash=`#login`;return}if(!h){ne(`Please select a size`);return}C(!0),ne(``),ee(!1);try{await ie(r,1,h,v),ee(!0),setTimeout(()=>ee(!1),3e3)}catch(e){ne(e.message||`Failed to add to cart`)}finally{C(!1)}},N=r.images&&r.images.length>0?r.images:[r.image];return(0,F.jsxs)(F.Fragment,{children:[d&&(0,F.jsxs)(`div`,{className:`image-lightbox-overlay`,onClick:()=>f(!1),children:[(0,F.jsx)(`button`,{className:`lightbox-close-btn`,onClick:()=>f(!1),children:`×`}),N.length>1&&(0,F.jsx)(`button`,{className:`lightbox-nav-btn prev-btn`,onClick:e=>{e.stopPropagation(),m(e=>e===0?N.length-1:e-1)},children:`❮`}),(0,F.jsxs)(`div`,{className:`lightbox-content`,onClick:e=>e.stopPropagation(),children:[(0,F.jsx)(`img`,{src:N[p],alt:`${r.name} full view`,className:`lightbox-image`}),(0,F.jsxs)(`div`,{className:`lightbox-counter`,children:[p+1,` / `,N.length]})]}),N.length>1&&(0,F.jsx)(`button`,{className:`lightbox-nav-btn next-btn`,onClick:e=>{e.stopPropagation(),m(e=>e===N.length-1?0:e+1)},children:`❯`})]}),(0,F.jsxs)(`main`,{className:`product-detail-view section animate-fade-in`,children:[(0,F.jsxs)(`div`,{className:`container`,children:[(0,F.jsxs)(`button`,{className:`back-link-btn`,onClick:t,children:[(0,F.jsx)(re,{size:18}),` Back to Collection`]}),(0,F.jsxs)(`div`,{className:`detail-grid`,children:[(0,F.jsxs)(`div`,{className:`gallery-section`,children:[(0,F.jsxs)(`div`,{className:`main-image-box glass-card`,style:{cursor:`zoom-in`},onClick:()=>{let e=N.indexOf(l);m(e>=0?e:0),f(!0)},children:[(0,F.jsx)(`img`,{src:l,alt:r.name,className:`main-image`}),r.isNewArrival&&(0,F.jsx)(`span`,{className:`detail-badge badge badge-pink position-badge`,children:`New Arrival`})]}),N.length>1&&(0,F.jsx)(`div`,{className:`thumbnails-grid`,children:N.map((e,t)=>(0,F.jsx)(`div`,{className:`thumbnail-card glass-card ${l===e?`active-thumbnail`:``}`,onClick:()=>u(e),children:(0,F.jsx)(`img`,{src:e,alt:`${r.name} gallery ${t+1}`,className:`thumbnail-img`})},t))})]}),(0,F.jsxs)(`div`,{className:`info-section glass-card`,children:[(0,F.jsx)(`span`,{className:`info-category`,children:r.category}),(0,F.jsx)(`h1`,{className:`info-title`,children:r.name}),r.brand&&(0,F.jsxs)(`span`,{className:`info-brand`,children:[`Brand: `,r.brand]}),(0,F.jsx)(`div`,{className:`info-price-row`,children:ce?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{className:`discount-price`,children:ce}),(0,F.jsx)(`span`,{className:`original-price strike-through`,children:A}),(0,F.jsxs)(`span`,{className:`save-badge`,children:[`Save `,new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(r.price-r.discountPrice)]})]}):(0,F.jsx)(`span`,{className:`price-tag`,children:A})}),(0,F.jsx)(`p`,{className:`info-desc`,children:r.description}),(0,F.jsxs)(`div`,{className:`options-section`,children:[(0,F.jsxs)(`div`,{className:`size-header-row`,children:[(0,F.jsx)(`h4`,{children:`Select Size`}),(0,F.jsxs)(`button`,{type:`button`,className:`size-chart-btn`,onClick:()=>x(!0),children:[(0,F.jsx)(Ce,{size:16}),` Size Chart`]})]}),(0,F.jsx)(`div`,{className:`size-badges-list`,children:[`M`,`L`,`XL`,`XXL`].map(e=>{let t=r.sizes.find(t=>t.size===e),n=t&&t.stock>0;return(0,F.jsx)(`button`,{onClick:()=>n&&g(e),className:`size-btn ${h===e?`active-size`:``} ${n?``:`disabled-size`}`,disabled:!n,children:e},e)})})]}),r.colorName||r.colorVariants&&r.colorVariants.length>0?(0,F.jsxs)(`div`,{className:`options-section`,children:[(0,F.jsx)(`h4`,{children:`Select Color`}),(0,F.jsxs)(`div`,{className:`color-variants-list`,children:[(0,F.jsxs)(`div`,{className:`color-variant-item active-variant`,children:[r.image&&(0,F.jsx)(`img`,{src:r.image,className:`color-variant-thumb`,alt:r.colorName}),(0,F.jsx)(`span`,{children:r.colorName||`Default`})]}),r.colorVariants&&r.colorVariants.map(e=>e.product?(0,F.jsxs)(`button`,{onClick:()=>n(e.product),className:`color-variant-btn-link`,title:`Switch to ${e.colorName}`,children:[e.product.image&&(0,F.jsx)(`img`,{src:e.product.image,className:`color-variant-thumb`,alt:e.colorName}),(0,F.jsx)(`span`,{children:e.colorName})]},e.product._id||e.product):null)]})]}):r.colors&&r.colors.length>0&&(0,F.jsxs)(`div`,{className:`options-section`,children:[(0,F.jsx)(`h4`,{children:`Select Color`}),(0,F.jsx)(`div`,{className:`color-badges-list`,children:r.colors.map(e=>(0,F.jsx)(`button`,{onClick:()=>y(e),className:`color-btn ${v===e?`active-color`:``}`,children:e},e))})]}),(0,F.jsx)(`div`,{className:`stock-status-row`,children:ue<=0?(0,F.jsxs)(`div`,{className:`stock-alert out-of-stock`,children:[(0,F.jsx)(O,{size:16}),(0,F.jsx)(`span`,{children:`Out of Stock in selected size`})]}):ue<=2?(0,F.jsxs)(`div`,{className:`stock-alert low-stock`,children:[(0,F.jsx)(O,{size:16}),(0,F.jsxs)(`span`,{children:[`Hurry! Only `,ue,` items left in selected size`]})]}):(0,F.jsxs)(`div`,{className:`stock-alert in-stock`,children:[(0,F.jsx)(ae,{size:16}),(0,F.jsx)(`span`,{children:`In Stock - ready to ship`})]})}),(0,F.jsxs)(`div`,{className:`purchase-actions-row`,children:[(0,F.jsx)(`button`,{className:`btn btn-primary btn-add-to-cart`,onClick:M,disabled:ue<=0||S,children:S?`Adding...`:w?(0,F.jsxs)(F.Fragment,{children:[`Added to Bag! `,(0,F.jsx)(ae,{size:18})]}):(0,F.jsxs)(F.Fragment,{children:[`Add to Cart `,(0,F.jsx)(Oe,{size:18})]})}),(0,F.jsx)(`button`,{className:`btn-wishlist-toggle ${k?`wishlisted`:``}`,onClick:()=>D(r),title:k?`Remove from Wishlist`:`Add to Wishlist`,children:(0,F.jsx)(j,{size:22,fill:k?`var(--primary-pink)`:`none`})})]}),te&&(0,F.jsx)(`p`,{className:`cart-error-message`,children:te})]})]}),T.length>0&&(0,F.jsxs)(`section`,{className:`related-section`,children:[(0,F.jsxs)(`div`,{className:`section-header`,children:[(0,F.jsx)(`h2`,{children:`You May Also Like`}),(0,F.jsx)(`p`,{children:`Explore matching cordsets or dresses from the same collection.`})]}),(0,F.jsx)(`div`,{className:`products-grid`,children:T.map(e=>(0,F.jsx)(at,{product:e,onSelectProduct:n},e._id))})]})]}),(0,F.jsx)(`style`,{children:`
        .detail-loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 8rem 0;
        }
        .detail-error-container {
          text-align: center;
          padding: 4rem 2rem;
          max-width: 500px;
          margin: 4rem auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .detail-error-container .error-icon {
          color: var(--primary-pink-dark);
        }
        
        .back-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }
        .back-link-btn:hover {
          color: var(--primary-pink);
        }
        
        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }
        
        /* Gallery */
        .gallery-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .main-image-box {
          position: relative;
          height: 520px;
          overflow: hidden;
          background: var(--light-pink);
        }
        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .position-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          z-index: 5;
        }
        .thumbnails-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .thumbnail-card {
          height: 100px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          background: var(--light-pink);
          transition: all var(--transition-fast);
        }
        .thumbnail-card:hover, .thumbnail-card.active-thumbnail {
          border-color: var(--primary-pink);
          transform: translateY(-2px);
        }
        .thumbnail-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Info side */
        .info-section {
          padding: 3rem;
          background: var(--pure-white);
          display: flex;
          flex-direction: column;
        }
        .info-category {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--primary-pink);
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }
        .info-title {
          font-size: 2.2rem;
          color: var(--dark-charcoal);
          margin-bottom: 0.25rem;
          line-height: 1.2;
        }
        .info-sku {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .info-brand {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          font-weight: 500;
        }
        
        .info-price-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .price-tag {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-pink-dark);
        }
        .discount-price {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-pink-dark);
        }
        .original-price {
          font-size: 1.25rem;
          color: var(--text-muted);
        }
        .strike-through {
          text-decoration: line-through;
        }
        .save-badge {
          background: #d4edda;
          color: #155724;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.35rem 0.75rem;
          border-radius: 4px;
        }
        
        .info-desc {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        
        .options-section {
          margin-bottom: 1.5rem;
        }
        .options-section h4 {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
        }
        .size-badges-list, .color-badges-list {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }
        
        .size-btn {
          border: 1px solid var(--border-light);
          min-width: 44px;
          height: 44px;
          font-size: 0.85rem;
          font-weight: 700;
          border-radius: 8px;
          background: var(--cream-white);
          color: var(--dark-charcoal);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 0.5rem;
        }
        .size-btn:hover:not(.disabled-size) {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
          background: var(--light-pink);
        }
        .size-btn.active-size {
          background: var(--primary-pink);
          color: var(--pure-white);
          border-color: var(--primary-pink);
        }
        .size-btn.disabled-size {
          opacity: 0.45;
          cursor: not-allowed;
          background: #e9ecef;
          text-decoration: line-through;
          color: #868e96;
        }
        
        .color-btn {
          border: 1px solid var(--border-light);
          padding: 0.4rem 1rem;
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: 20px;
          background: var(--cream-white);
          color: var(--dark-charcoal);
        }
        .color-btn:hover {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
        }
        .color-btn.active-color {
          border-color: var(--primary-pink);
          background: var(--light-pink);
          color: var(--primary-pink-dark);
          font-weight: 700;
        }
        
        .color-variants-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        .color-variant-thumb {
          width: 24px;
          height: 24px;
          object-fit: cover;
          border-radius: 4px;
          margin-right: 0.5rem;
          border: 1px solid var(--border-light);
        }
        .color-variant-item.active-variant {
          display: inline-flex;
          align-items: center;
          background: var(--primary-pink);
          border: 1.5px solid var(--primary-pink);
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--pure-white);
        }
        .color-variant-btn-link {
          display: inline-flex;
          align-items: center;
          background: var(--cream-white);
          border: 1.5px solid var(--border-light);
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--dark-charcoal);
          cursor: pointer;
          transition: all var(--transition-normal);
        }
        .color-variant-btn-link:hover {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
          background: var(--light-pink);
        }
        
        .stock-status-row {
          margin-bottom: 2rem;
        }
        .stock-alert {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.5rem 1rem;
          border-radius: 8px;
        }
        .stock-alert.in-stock {
          background: #e2f0d9;
          color: #385723;
        }
        .stock-alert.low-stock {
          background: #fff3cd;
          color: #856404;
        }
        .stock-alert.out-of-stock {
          background: #f8d7da;
          color: #721c24;
        }
        
        .purchase-actions-row {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .btn-add-to-cart {
          flex-grow: 1;
          padding: 0.95rem;
          border-radius: 12px;
          font-size: 1rem;
        }
        .btn-add-to-cart:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          box-shadow: none;
        }
        .btn-wishlist-toggle {
          border: 1px solid var(--border-light);
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          background: var(--cream-white);
          transition: all var(--transition-fast);
        }
        .btn-wishlist-toggle:hover {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
          background: var(--light-pink);
          transform: scale(1.04);
        }
        .btn-wishlist-toggle.wishlisted {
          border-color: var(--primary-pink-dark);
          background: var(--light-pink);
          color: var(--primary-pink);
        }
        
        .cart-error-message {
          color: red;
          font-size: 0.85rem;
          font-weight: 500;
          margin-top: 0.75rem;
        }
        
        .related-section {
          margin-top: 6rem;
        }
        
        @media (max-width: 992px) {
          .detail-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .main-image-box {
            height: 400px;
          }
          .info-section {
            padding: 2rem;
          }
        }
        @media (max-width: 576px) {
          .product-detail-view {
            padding-top: 1rem !important;
            padding-bottom: 1.5rem !important;
          }
          .back-link-btn {
            margin-bottom: 1rem !important;
            font-size: 0.85rem !important;
          }
          .detail-grid {
            gap: 1.25rem !important;
          }
          .main-image-box {
            height: 320px !important;
          }
          .thumbnail-card {
            height: 70px !important;
          }
          .info-section {
            padding: 1.25rem !important;
          }
          .info-category {
            font-size: 0.75rem !important;
          }
          .info-title {
            font-size: 1.6rem !important;
            margin-bottom: 0.25rem !important;
          }
          .info-price-row {
            margin-bottom: 1rem !important;
          }
          .price-tag, .discount-price {
            font-size: 1.6rem !important;
          }
          .info-desc {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
            margin-bottom: 1rem !important;
          }
          .options-section {
            margin-bottom: 1rem !important;
          }
          .options-section h4 {
            font-size: 0.85rem !important;
            margin-bottom: 0.35rem !important;
          }
          .size-btn {
            min-width: 38px !important;
            height: 38px !important;
            font-size: 0.8rem !important;
          }
          .color-btn {
            padding: 0.35rem 0.85rem !important;
            font-size: 0.75rem !important;
          }
          .stock-status-row {
            margin-bottom: 1rem !important;
          }
          .stock-alert {
            font-size: 0.75rem !important;
            padding: 0.4rem 0.75rem !important;
          }
          .purchase-actions-row {
            gap: 0.75rem !important;
          }
          .btn-add-to-cart {
            padding: 0.75rem !important;
            font-size: 0.9rem !important;
            border-radius: 8px !important;
          }
          .btn-wishlist-toggle {
            width: 44px !important;
            height: 44px !important;
            border-radius: 8px !important;
          }
        }

        /* Fullscreen Lightbox Photo Gallery */
        .image-lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--pure-white);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease-out;
        }
        .lightbox-close-btn {
          position: absolute;
          top: 25px;
          right: 30px;
          background: transparent;
          color: var(--dark-charcoal);
          border: none;
          font-size: 3.5rem;
          line-height: 1;
          cursor: pointer;
          z-index: 100000;
          transition: color 0.2s;
        }
        .lightbox-close-btn:hover {
          color: var(--primary-pink);
        }
        .lightbox-nav-btn {
          position: absolute;
          background: rgba(0, 0, 0, 0.05);
          color: var(--dark-charcoal);
          border: none;
          width: 60px;
          height: 60px;
          font-size: 1.75rem;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100000;
          transition: all 0.2s;
        }
        .lightbox-nav-btn:hover {
          background: var(--primary-pink);
          color: #fff;
          transform: scale(1.08);
        }
        .prev-btn {
          left: 40px;
        }
        .next-btn {
          right: 40px;
        }
        .lightbox-content {
          position: relative;
          max-width: 80%;
          max-height: 80%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .lightbox-image {
          max-width: 100%;
          max-height: 75vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        }
        .lightbox-counter {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-top: 1.25rem;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .lightbox-nav-btn {
            width: 44px;
            height: 44px;
            font-size: 1.25rem;
          }
          .prev-btn {
            left: 20px;
          }
          .next-btn {
            right: 20px;
          }
          .lightbox-content {
            max-width: 90%;
          }
          .lightbox-image {
            max-height: 65vh;
          }
        }

        .size-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }
        .size-header-row h4 {
          margin-bottom: 0;
        }
        .size-chart-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: none;
          border: none;
          color: var(--primary-pink-dark);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-sans);
          padding: 2px 6px;
          border-radius: 4px;
          transition: all var(--transition-fast);
        }
        .size-chart-btn:hover {
          color: var(--primary-pink-hover);
          background: rgba(240, 84, 138, 0.08);
          text-decoration: underline;
        }

        /* Size Chart Modal Overlay */
        .size-chart-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(30, 34, 41, 0.55);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .size-chart-modal {
          width: 100%;
          max-width: 440px;
          background: var(--pure-white);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          position: relative;
        }
        .size-chart-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.75rem;
        }
        .size-chart-header h3 {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          color: var(--dark-charcoal);
          margin: 0;
        }
        .size-chart-close-btn {
          background: none;
          border: none;
          font-size: 1.8rem;
          line-height: 1;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0 4px;
        }
        .size-chart-close-btn:hover {
          color: var(--dark-charcoal);
        }
        .size-chart-intro {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          line-height: 1.4;
        }
        .size-chart-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background: var(--cream-white);
          padding: 1.25rem;
          border-radius: 12px;
          border: 1px solid var(--border-light);
          margin-bottom: 1.5rem;
        }
        .size-chart-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.5rem;
          border-bottom: 1px dashed var(--border-light);
        }
        .size-chart-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .size-chart-name {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--dark-charcoal);
        }
        .size-chart-val {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--primary-pink-dark);
        }
        .btn-size-close {
          width: 100%;
          padding: 0.75rem;
          border-radius: 10px;
        }
      `})]}),b&&(0,F.jsx)(`div`,{className:`size-chart-overlay animate-fade-in`,onClick:()=>x(!1),children:(0,F.jsxs)(`div`,{className:`size-chart-modal glass-card`,onClick:e=>e.stopPropagation(),children:[(0,F.jsxs)(`div`,{className:`size-chart-header`,children:[(0,F.jsx)(`h3`,{children:`Bust Size Guide`}),(0,F.jsx)(`button`,{className:`size-chart-close-btn`,onClick:()=>x(!1),children:`×`})]}),(0,F.jsx)(`p`,{className:`size-chart-intro`,children:`Standard bust size measurements to help you find your perfect fit:`}),(0,F.jsxs)(`div`,{className:`size-chart-list`,children:[(0,F.jsxs)(`div`,{className:`size-chart-item`,children:[(0,F.jsx)(`span`,{className:`size-chart-name`,children:`Medium (M)`}),(0,F.jsx)(`span`,{className:`size-chart-val`,children:`36 / 38 inches`})]}),(0,F.jsxs)(`div`,{className:`size-chart-item`,children:[(0,F.jsx)(`span`,{className:`size-chart-name`,children:`Large (L)`}),(0,F.jsx)(`span`,{className:`size-chart-val`,children:`40 inches`})]}),(0,F.jsxs)(`div`,{className:`size-chart-item`,children:[(0,F.jsx)(`span`,{className:`size-chart-name`,children:`XL`}),(0,F.jsx)(`span`,{className:`size-chart-val`,children:`42 inches`})]}),(0,F.jsxs)(`div`,{className:`size-chart-item`,children:[(0,F.jsx)(`span`,{className:`size-chart-name`,children:`XXL`}),(0,F.jsx)(`span`,{className:`size-chart-val`,children:`44 inches`})]})]}),(0,F.jsx)(`div`,{className:`size-chart-actions`,children:(0,F.jsx)(`button`,{type:`button`,className:`btn btn-primary btn-size-close`,onClick:()=>x(!1),children:`Close Size Guide`})})]})})]})}var mt={createOrder:async e=>await P(`/orders`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)},!1),getUserOrders:async()=>await P(`/orders`,{method:`GET`},!1)},ht=e=>{if(!e)return``;let t=e.replace(/\D/g,``);return t.length>10&&t.startsWith(`91`)&&(t=t.substring(2)),t.slice(0,10)};function gt({onContinueShopping:e,onSelectProductBySlug:t}){let{user:n}=qe(),{cartItems:r,updateQuantity:i,removeFromCart:a,getCartTotal:o,clearCart:s}=Ze(),[c,l]=(0,_.useState)(`cart`),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)({name:n?n.name:``,phone:n?ht(n.phone):``,street:``,city:``,state:``,pincode:``,paymentMethod:`Partial COD`});(0,_.useEffect)(()=>{n&&v(e=>({...e,name:e.name||n.name||``,phone:e.phone||ht(n.phone)}))},[n]);let y=o(),b=e=>{let{name:t,value:n}=e.target;if(t===`phone`){let e=n.replace(/\D/g,``);e.startsWith(`0`)&&(e=e.substring(1)),e.startsWith(`91`)&&e.length>10&&(e=e.substring(2)),e=e.slice(0,10),v(n=>({...n,[t]:e}))}else v(e=>({...e,[t]:n}))},x=async(e,t)=>{let n=e.productId._id||e.productId;try{await i(n,e.size,t)}catch(e){alert(e.message||`Failed to update quantity`)}},S=async e=>{await a(e.productId._id||e.productId,e.size)},C=()=>{if(!n){window.location.hash=`#login`;return}p(``),l(`checkout`)},w=()=>new Promise(e=>{if(window.Razorpay){e(!0);return}let t=document.createElement(`script`);t.src=`https://checkout.razorpay.com/v1/checkout.js`,t.onload=()=>e(!0),t.onerror=()=>e(!1),document.body.appendChild(t)});return(0,F.jsxs)(`main`,{className:`cart-view section animate-fade-in`,children:[(0,F.jsxs)(`div`,{className:`container`,children:[!n&&(0,F.jsxs)(`div`,{className:`empty-cart-card glass-card`,children:[(0,F.jsx)(Oe,{size:64,className:`empty-icon`}),(0,F.jsx)(`h2`,{children:`Login Required`}),(0,F.jsx)(`p`,{children:`Please log in to your account to manage your shopping cart and place orders.`}),(0,F.jsxs)(`button`,{className:`btn btn-primary`,onClick:()=>window.location.hash=`#login`,children:[`Log In Now `,(0,F.jsx)(E,{size:18})]})]}),n&&c===`success`&&m&&(0,F.jsxs)(`div`,{className:`checkout-success-card glass-card`,children:[(0,F.jsx)(`div`,{className:`success-icon-circle`,children:(0,F.jsx)(ae,{size:44})}),(0,F.jsx)(`h2`,{children:`Order Placed Successfully!`}),(0,F.jsx)(`p`,{className:`success-sub`,children:`Thank you for shopping with Bhawna Closet. Your order is pending verification.`}),(0,F.jsxs)(`div`,{className:`order-details-box`,children:[(0,F.jsxs)(`div`,{className:`detail-row`,children:[(0,F.jsx)(`span`,{children:`Order ID:`}),(0,F.jsx)(`strong`,{style:{wordBreak:`break-all`},children:m._id})]}),(0,F.jsxs)(`div`,{className:`detail-row`,children:[(0,F.jsx)(`span`,{children:`Total Amount:`}),(0,F.jsx)(`strong`,{className:`pink-text`,children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(m.totalAmount)})]}),(0,F.jsxs)(`div`,{className:`detail-row`,children:[(0,F.jsx)(`span`,{children:`Payment Method:`}),(0,F.jsxs)(`strong`,{children:[m.paymentMethod,` (Pending Verification)`]})]}),(0,F.jsxs)(`div`,{className:`detail-row`,children:[(0,F.jsx)(`span`,{children:`Shipping Address:`}),(0,F.jsx)(`span`,{className:`address-text`,children:m.shippingAddress})]}),(0,F.jsxs)(`div`,{className:`detail-row`,children:[(0,F.jsx)(`span`,{children:`Order Status:`}),(0,F.jsx)(`span`,{className:`status-badge-pending`,children:`Pending Approval`})]})]}),(0,F.jsx)(`p`,{className:`status-note`,children:`Our admin will review your order. You can check the approval status in your Account History.`}),(0,F.jsxs)(`button`,{className:`btn btn-primary`,onClick:e,children:[`Continue Shopping `,(0,F.jsx)(E,{size:18})]})]}),n&&c!==`success`&&r.length===0&&(0,F.jsxs)(`div`,{className:`empty-cart-card glass-card`,children:[(0,F.jsx)(Oe,{size:52,className:`empty-icon`}),(0,F.jsx)(`h2`,{children:`Your Shopping Cart is Empty`}),(0,F.jsx)(`p`,{children:`You haven't added any gorgeous coordinates or elegant Sakura dresses to your bag yet.`}),(0,F.jsxs)(`button`,{className:`btn btn-primary`,onClick:e,children:[`Shop Collections `,(0,F.jsx)(E,{size:18})]})]}),n&&c===`cart`&&r.length>0&&(0,F.jsxs)(`div`,{className:`cart-content-wrapper`,children:[(0,F.jsxs)(`div`,{className:`cart-banner glass-card`,children:[(0,F.jsx)(`h1`,{children:`Your Shopping Cart`}),(0,F.jsx)(`p`,{children:`Review items in your shopping bag before submitting details.`})]}),(0,F.jsxs)(`div`,{className:`cart-grid`,children:[(0,F.jsx)(`div`,{className:`cart-items-panel`,children:r.map((e,n)=>{let r=e.productId;if(!r)return null;let i=r.discountPrice||r.price,a=new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(i),o=new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(i*e.quantity),s=r.sizes.find(t=>t.size===e.size),c=s?s.stock:0;return(0,F.jsxs)(`div`,{className:`cart-item-card glass-card`,children:[(0,F.jsx)(`div`,{className:`item-image-wrapper`,onClick:()=>t(r.slug),children:(0,F.jsx)(`img`,{src:r.image,alt:r.name,className:`item-image`})}),(0,F.jsxs)(`div`,{className:`item-details`,children:[(0,F.jsx)(`h3`,{className:`item-name`,onClick:()=>t(r.slug),children:r.name}),(0,F.jsxs)(`div`,{className:`item-meta`,children:[(0,F.jsxs)(`span`,{children:[`Size: `,(0,F.jsx)(`strong`,{children:e.size})]}),e.color&&(0,F.jsxs)(`span`,{children:[`Color: `,(0,F.jsx)(`strong`,{children:e.color})]}),(0,F.jsxs)(`span`,{children:[`SKU: `,r.sku]})]}),(0,F.jsxs)(`div`,{className:`item-price-info`,children:[(0,F.jsx)(`span`,{className:`single-price`,children:a}),(0,F.jsxs)(`span`,{className:`price-multiplier`,children:[`x `,e.quantity]})]})]}),(0,F.jsxs)(`div`,{className:`item-qty-controls`,children:[(0,F.jsx)(`button`,{className:`qty-btn`,onClick:()=>x(e,e.quantity-1),disabled:e.quantity<=1,children:(0,F.jsx)(ye,{size:14})}),(0,F.jsx)(`span`,{className:`qty-value`,children:e.quantity}),(0,F.jsx)(`button`,{className:`qty-btn`,onClick:()=>x(e,e.quantity+1),disabled:e.quantity>=c,children:(0,F.jsx)(Se,{size:14})})]}),(0,F.jsxs)(`div`,{className:`item-total-col`,children:[(0,F.jsx)(`span`,{className:`subtotal-value`,children:o}),(0,F.jsx)(`button`,{className:`remove-item-btn`,onClick:()=>S(e),title:`Remove item`,children:(0,F.jsx)(Me,{size:16})})]})]},`${r._id}-${e.size}-${n}`)})}),(0,F.jsxs)(`div`,{className:`cart-summary-panel glass-card`,children:[(0,F.jsx)(`h3`,{children:`Order Summary`}),(0,F.jsxs)(`div`,{className:`summary-rows`,children:[(0,F.jsxs)(`div`,{className:`summary-row`,children:[(0,F.jsx)(`span`,{children:`Subtotal`}),(0,F.jsx)(`span`,{children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(y)})]}),(0,F.jsxs)(`div`,{className:`summary-row`,children:[(0,F.jsx)(`span`,{children:`Shipping`}),(0,F.jsx)(`span`,{className:`shipping-value`,children:`Free Shipping`})]}),(0,F.jsxs)(`div`,{className:`summary-row divider`,children:[(0,F.jsx)(`span`,{children:`Estimated Total`}),(0,F.jsx)(`span`,{className:`total-value`,children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(y)})]})]}),(0,F.jsxs)(`div`,{className:`checkout-note`,children:[(0,F.jsx)(O,{size:16,className:`note-icon`}),(0,F.jsx)(`span`,{children:`Shipping is free! Click checkout to enter shipping address details.`})]}),(0,F.jsxs)(`button`,{className:`btn btn-primary btn-checkout`,onClick:C,children:[`Proceed to Checkout `,(0,F.jsx)(E,{size:18})]}),(0,F.jsx)(`button`,{className:`btn-continue-shopping-text`,onClick:e,children:`Or Continue Shopping`})]})]})]}),n&&c===`checkout`&&r.length>0&&(0,F.jsxs)(`div`,{className:`checkout-content-wrapper`,children:[(0,F.jsxs)(`button`,{className:`back-link-btn`,onClick:()=>l(`cart`),style:{marginBottom:`2rem`},children:[(0,F.jsx)(re,{size:18}),` Back to Bag`]}),(0,F.jsxs)(`div`,{className:`cart-banner glass-card`,style:{marginBottom:`3rem`},children:[(0,F.jsx)(`h1`,{children:`Delivery & Payment Details`}),(0,F.jsx)(`p`,{children:`Please enter your shipping address and select a payment method.`})]}),f&&(0,F.jsxs)(`div`,{className:`order-error-alert`,children:[(0,F.jsx)(O,{size:18}),(0,F.jsx)(`span`,{children:f})]}),(0,F.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),!g.name||!g.phone||!g.street||!g.city||!g.state||!g.pincode){p(`Please fill in all shipping details.`),window.scrollTo({top:0,behavior:`smooth`});return}if(g.phone.replace(/\D/g,``).length!==10){p(`Please enter a valid 10-digit phone number.`),window.scrollTo({top:0,behavior:`smooth`});return}d(!0),p(``);let t=`${g.name}, Phone: ${g.phone}, Address: ${g.street}, ${g.city}, ${g.state} - ${g.pincode}`,i={items:r.map(e=>({productId:e.productId._id,quantity:e.quantity,price:e.productId.discountPrice||e.productId.price,size:e.size,color:e.color||``,name:e.productId.name})),totalAmount:y,shippingAddress:t,paymentMethod:g.paymentMethod};try{if(g.paymentMethod===`COD`)h((await mt.createOrder(i)).order),s(),l(`success`);else{if(!await w())throw Error(`Failed to load Razorpay SDK. Please check your internet connection.`);let e=g.paymentMethod===`Partial COD`,t=await P(`/payments/razorpay/order`,{method:`POST`,body:JSON.stringify({items:i.items,totalAmount:i.totalAmount,shippingAddress:i.shippingAddress,isPartialCod:e})},!1),r={key:`rzp_live_TDIymjqPZZxw53`,amount:t.amount,currency:t.currency,name:`Bhawna Closet`,description:`Secure Payment for your Order`,order_id:t.id,handler:async function(e){try{d(!0),p(`Verifying your payment, please do not close this window...`),h((await P(`/payments/razorpay/verify`,{method:`POST`,body:JSON.stringify({razorpay_order_id:e.razorpay_order_id,razorpay_payment_id:e.razorpay_payment_id,razorpay_signature:e.razorpay_signature,shippingDetails:{shippingAddress:i.shippingAddress,items:i.items}})},!1)).order),s(),l(`success`)}catch(e){p(e.message||`Payment verification failed. Please contact support.`)}finally{d(!1)}},prefill:{name:g.name,contact:g.phone,email:n.email},theme:{color:`#f0548a`},modal:{ondismiss:function(){d(!1),p(`Payment cancelled by user.`)}}},a=new window.Razorpay(r);a.on(`payment.failed`,function(e){p(`Payment failed: ${e.error.description||`Unknown error`}`),d(!1)}),a.open()}}catch(e){p(e.message||`Failed to place order. Please try again.`),d(!1)}},className:`checkout-grid`,children:[(0,F.jsxs)(`div`,{className:`checkout-form-panel glass-card`,children:[(0,F.jsx)(`h3`,{children:`Shipping Address`}),(0,F.jsxs)(`div`,{className:`form-row-double`,children:[(0,F.jsxs)(`div`,{className:`checkout-field`,children:[(0,F.jsx)(`label`,{htmlFor:`chk-name`,children:`Full Name`}),(0,F.jsx)(`input`,{id:`chk-name`,type:`text`,name:`name`,value:g.name,onChange:b,placeholder:`Enter Full Name`,required:!0})]}),(0,F.jsxs)(`div`,{className:`checkout-field`,children:[(0,F.jsx)(`label`,{htmlFor:`chk-phone`,children:`Phone Number`}),(0,F.jsx)(`input`,{id:`chk-phone`,type:`tel`,name:`phone`,value:g.phone,onChange:b,placeholder:`Enter Mobile Number`,required:!0})]})]}),(0,F.jsxs)(`div`,{className:`checkout-field`,children:[(0,F.jsx)(`label`,{htmlFor:`chk-street`,children:`Street Address & House/Flat No.`}),(0,F.jsx)(`input`,{id:`chk-street`,type:`text`,name:`street`,value:g.street,onChange:b,placeholder:`Enter Street Address & House/Flat No.`,required:!0})]}),(0,F.jsxs)(`div`,{className:`form-row-triple`,children:[(0,F.jsxs)(`div`,{className:`checkout-field`,children:[(0,F.jsx)(`label`,{htmlFor:`chk-city`,children:`City`}),(0,F.jsx)(`input`,{id:`chk-city`,type:`text`,name:`city`,value:g.city,onChange:b,placeholder:`Enter City`,required:!0})]}),(0,F.jsxs)(`div`,{className:`checkout-field`,children:[(0,F.jsx)(`label`,{htmlFor:`chk-state`,children:`State`}),(0,F.jsx)(`input`,{id:`chk-state`,type:`text`,name:`state`,value:g.state,onChange:b,placeholder:`Enter State`,required:!0})]}),(0,F.jsxs)(`div`,{className:`checkout-field`,children:[(0,F.jsx)(`label`,{htmlFor:`chk-pincode`,children:`Pin Code`}),(0,F.jsx)(`input`,{id:`chk-pincode`,type:`text`,name:`pincode`,value:g.pincode,onChange:b,placeholder:`Enter Pin Code`,required:!0})]})]}),(0,F.jsx)(`hr`,{className:`checkout-hr`}),(0,F.jsx)(`h3`,{children:`Payment Options`}),(0,F.jsxs)(`div`,{className:`payment-options-list`,children:[(0,F.jsxs)(`label`,{className:`payment-option-label ${g.paymentMethod===`Partial COD`?`active-payment`:``}`,children:[(0,F.jsx)(`input`,{type:`radio`,name:`paymentMethod`,value:`Partial COD`,checked:g.paymentMethod===`Partial COD`,onChange:b}),(0,F.jsxs)(`div`,{className:`payment-label-text`,children:[(0,F.jsx)(`strong`,{children:`Partial Cash on Delivery (COD)`}),(0,F.jsx)(`span`,{children:`Pay ₹500 online now, pay remaining amount on delivery.`})]})]}),(0,F.jsxs)(`label`,{className:`payment-option-label ${g.paymentMethod===`Online`?`active-payment`:``}`,children:[(0,F.jsx)(`input`,{type:`radio`,name:`paymentMethod`,value:`Online`,checked:g.paymentMethod===`Online`,onChange:b}),(0,F.jsxs)(`div`,{className:`payment-label-text`,children:[(0,F.jsx)(`strong`,{children:`Pay Full Online`}),(0,F.jsx)(`span`,{children:`Pay the complete amount securely online via Razorpay (UPI, Card, etc.).`})]})]})]}),g.paymentMethod===`Partial COD`&&(0,F.jsxs)(`div`,{style:{marginTop:`0.75rem`,padding:`0.75rem 1rem`,background:`rgba(240, 84, 138, 0.08)`,border:`1px solid rgba(240, 84, 138, 0.2)`,borderRadius:`8px`,fontSize:`0.85rem`,color:`var(--primary-pink-dark)`,display:`flex`,flexDirection:`column`,gap:`0.25rem`},children:[(0,F.jsx)(`span`,{style:{fontWeight:`600`},children:`Partial COD Terms:`}),(0,F.jsxs)(`span`,{children:[`• You will pay `,(0,F.jsx)(`strong`,{children:`₹500`}),` online now.`]}),(0,F.jsxs)(`span`,{children:[`• The remaining balance of `,(0,F.jsxs)(`strong`,{children:[`₹`,Math.max(0,y-500)]}),` will be collected as Cash/UPI on delivery.`]})]})]}),(0,F.jsxs)(`div`,{className:`cart-summary-panel glass-card`,children:[(0,F.jsx)(`h3`,{children:`Summary & Items`}),(0,F.jsx)(`div`,{className:`checkout-items-preview-list`,children:r.map((e,t)=>(0,F.jsxs)(`div`,{className:`checkout-item-preview-row`,children:[(0,F.jsxs)(`span`,{className:`item-prev-name`,children:[e.productId.name,` (`,e.size,`)`]}),(0,F.jsxs)(`span`,{className:`item-prev-qty`,children:[`x`,e.quantity]}),(0,F.jsx)(`span`,{className:`item-prev-sub`,children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format((e.productId.discountPrice||e.productId.price)*e.quantity)})]},t))}),(0,F.jsx)(`hr`,{style:{border:`none`,borderTop:`1px solid var(--border-light)`,margin:`1.25rem 0`}}),(0,F.jsxs)(`div`,{className:`summary-rows`,style:{marginBottom:`1.5rem`},children:[(0,F.jsxs)(`div`,{className:`summary-row`,children:[(0,F.jsx)(`span`,{children:`Subtotal`}),(0,F.jsx)(`span`,{children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(y)})]}),(0,F.jsxs)(`div`,{className:`summary-row`,children:[(0,F.jsx)(`span`,{children:`Shipping`}),(0,F.jsx)(`span`,{className:`shipping-value`,children:`Free Shipping`})]}),(0,F.jsxs)(`div`,{className:`summary-row divider`,children:[(0,F.jsx)(`span`,{children:`Final Total`}),(0,F.jsx)(`span`,{className:`total-value`,children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(y)})]})]}),f&&(0,F.jsxs)(`div`,{className:`order-error-alert`,style:{marginBottom:`1rem`},children:[(0,F.jsx)(O,{size:18}),(0,F.jsx)(`span`,{children:f})]}),(0,F.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-checkout`,disabled:u,children:[u?`Submitting Order...`:g.paymentMethod===`Partial COD`?`Pay ₹500 & Place Order`:`Pay Full & Place Order`,` `,(0,F.jsx)(E,{size:18})]})]})]})]})]}),(0,F.jsx)(`style`,{children:`
        /* Cart Page specific styles */
        .cart-banner {
          background: linear-gradient(135deg, var(--primary-pink) 0%, var(--primary-pink-dark) 100%);
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
          color: var(--pure-white);
          margin-bottom: 3rem;
        }
        .cart-banner h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--pure-white);
          font-family: var(--font-serif);
        }
        .cart-banner p {
          font-size: 1.05rem;
          color: var(--light-pink);
          margin: 0;
        }

        .cart-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 2.5rem;
          align-items: start;
        }

        .cart-items-panel {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .cart-item-card {
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          gap: 1.5rem;
          padding: 1.5rem;
          background: var(--pure-white);
          align-items: center;
        }

        .item-image-wrapper {
          width: 80px;
          height: 100px;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid var(--border-light);
        }

        .item-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-normal);
        }

        .item-image-wrapper:hover .item-image {
          transform: scale(1.08);
        }

        .item-details {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .item-name {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: var(--dark-charcoal);
          cursor: pointer;
          margin: 0;
        }
        .item-name:hover {
          color: var(--primary-pink);
        }

        .item-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          flex-wrap: wrap;
        }

        .item-price-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .single-price {
          font-weight: 700;
          color: var(--dark-charcoal);
          font-size: 0.95rem;
        }
        .price-multiplier {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Quantity controls */
        .item-qty-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border: 1px solid var(--border-light);
          border-radius: 20px;
          padding: 0.4rem 0.75rem;
          background: var(--cream-white);
        }
        .qty-btn {
          color: var(--dark-charcoal);
          padding: 0.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .qty-btn:hover:not(:disabled) {
          color: var(--primary-pink);
        }
        .qty-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .qty-value {
          font-size: 0.9rem;
          font-weight: 600;
          min-width: 20px;
          text-align: center;
          color: var(--dark-charcoal);
        }

        /* Total column */
        .item-total-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1rem;
          min-width: 100px;
        }
        .subtotal-value {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--primary-pink-dark);
        }
        .remove-item-btn {
          color: var(--text-muted);
          transition: color var(--transition-fast);
        }
        .remove-item-btn:hover {
          color: #dc3545;
        }

        /* Summary panel */
        .cart-summary-panel {
          padding: 2.5rem;
          background: var(--pure-white);
        }
        .cart-summary-panel h3 {
          font-size: 1.4rem;
          color: var(--dark-charcoal);
          margin: 0;
          margin-bottom: 1.5rem;
          border-bottom: 1px dashed var(--border-light);
          padding-bottom: 1rem;
          font-family: var(--font-serif);
        }
        .summary-rows {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          color: var(--text-muted);
        }
        .summary-row.divider {
          border-top: 1px solid var(--border-light);
          padding-top: 1.25rem;
          margin-top: 0.5rem;
        }
        .shipping-value {
          color: #28a745;
          font-weight: 600;
        }
        .total-value {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--dark-charcoal);
        }

        .checkout-note {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 1.5rem 0;
          background: var(--light-pink);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-pink);
        }
        .note-icon {
          color: var(--primary-pink);
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .btn-checkout {
          width: 100%;
          padding: 1rem;
          border-radius: 30px;
          font-size: 1rem;
        }

        .btn-continue-shopping-text {
          width: 100%;
          text-align: center;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary-pink-dark);
          margin-top: 1rem;
          transition: color var(--transition-fast);
        }
        .btn-continue-shopping-text:hover {
          color: var(--primary-pink-hover);
          text-decoration: underline;
        }

        /* Empty Cart View */
        .empty-cart-card {
          text-align: center;
          padding: 5rem 2rem;
          max-width: 600px;
          margin: 4rem auto;
          background: var(--pure-white);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .empty-icon {
          color: var(--primary-pink);
        }
        .empty-cart-card h2 {
          font-size: 2rem;
          color: var(--dark-charcoal);
          margin: 0;
          font-family: var(--font-serif);
        }
        .empty-cart-card p {
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* Success Card */
        .checkout-success-card {
          max-width: 650px;
          margin: 3rem auto;
          padding: 3.5rem;
          text-align: center;
          background: var(--pure-white);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .success-icon-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #e2f9e9;
          color: #28a745;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #a3e8b4;
        }
        .checkout-success-card h2 {
          font-size: 2.2rem;
          color: #28a745;
          margin: 0;
          font-family: var(--font-serif);
        }
        .success-sub {
          color: var(--text-muted);
          font-size: 1rem;
          margin: 0;
        }
        .order-details-box {
          width: 100%;
          background: var(--cream-white);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin: 0.5rem 0;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          font-size: 0.9rem;
          gap: 1.5rem;
        }
        .detail-row span {
          color: var(--text-muted);
        }
        .detail-row strong {
          color: var(--dark-charcoal);
        }
        .pink-text {
          color: var(--primary-pink-dark) !important;
        }
        .address-text {
          text-align: right;
          max-width: 70%;
          font-weight: 500;
          color: var(--dark-charcoal);
        }
        .status-badge-pending {
          background: #fff3cd;
          color: #856404;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          border: 1px solid #ffeeba;
        }
        .status-note {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.5;
          max-width: 90%;
          margin: 0;
        }

        /* Checkout Form View */
        .order-error-alert {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #f8d7da;
          color: #721c24;
          padding: 1rem 1.5rem;
          border-radius: 10px;
          border: 1px solid #f5c6cb;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .checkout-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 2.5rem;
          align-items: start;
        }
        .checkout-form-panel {
          padding: 2.5rem;
          background: var(--pure-white);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .checkout-form-panel h3 {
          font-size: 1.3rem;
          color: var(--dark-charcoal);
          margin: 0;
          font-family: var(--font-serif);
        }
        .form-row-double {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .form-row-triple {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 1.5rem;
        }
        .checkout-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .checkout-field label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        .checkout-field input {
          font-family: var(--font-sans);
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          outline: none;
          font-size: 0.9rem;
          background: var(--cream-white);
        }
        .checkout-field input:focus {
          border-color: var(--primary-pink);
          background: var(--pure-white);
        }

        .checkout-hr {
          border: none;
          border-top: 1px solid var(--border-light);
          margin: 0.5rem 0;
        }

        /* Payment selection */
        .payment-options-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .payment-option-label {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem;
          border: 1px solid var(--border-light);
          border-radius: 10px;
          cursor: pointer;
          background: var(--cream-white);
          transition: all var(--transition-fast);
        }
        .payment-option-label input[type="radio"] {
          margin-top: 0.3rem;
          accent-color: var(--primary-pink);
        }
        .payment-option-label.active-payment {
          border-color: var(--primary-pink);
          background: var(--light-pink);
        }
        .payment-label-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .payment-label-text strong {
          font-size: 0.95rem;
          color: var(--dark-charcoal);
        }
        .payment-label-text span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .disabled-payment-option {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Items Preview List on Side */
        .checkout-items-preview-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          max-height: 250px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }
        .checkout-item-preview-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          gap: 1rem;
        }
        .item-prev-name {
          color: var(--dark-charcoal);
          font-weight: 500;
          flex-grow: 1;
        }
        .item-prev-qty {
          color: var(--text-muted);
        }
        .item-prev-sub {
          color: var(--dark-charcoal);
          font-weight: 600;
        }

        /* Back to bag button */
        .back-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--primary-pink-dark);
          transition: transform var(--transition-fast);
        }
        .back-link-btn:hover {
          transform: translateX(-4px);
        }

        @media (max-width: 992px) {
          .cart-grid, .checkout-grid {
            grid-template-columns: 1fr;
          }
          .cart-item-card {
            grid-template-columns: auto 1fr;
            gap: 1.25rem;
          }
          .item-qty-controls {
            grid-row: 2;
            grid-column: 1 / span 2;
            width: fit-content;
          }
          .item-total-col {
            grid-row: 2;
            grid-column: 2;
            align-items: flex-end;
          }
        }
        @media (max-width: 576px) {
          .cart-view {
            padding-top: 1rem !important;
            padding-bottom: 1.5rem !important;
          }
          .form-row-double, .form-row-triple {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .cart-banner {
            padding: 1rem 0.75rem !important;
            margin-bottom: 1rem !important;
          }
          .cart-banner h1 {
            font-size: 1.5rem !important;
            margin-bottom: 0 !important;
          }
          .cart-banner p {
            display: none !important;
          }
          .cart-summary-panel, .checkout-form-panel {
            padding: 1.25rem !important;
          }
          .checkout-success-card {
            padding: 1.5rem 1rem !important;
          }
          .cart-item-card {
            padding: 1rem !important;
            gap: 1rem !important;
          }
          .item-name {
            font-size: 1rem !important;
          }
        }
      `})]})}function _t({onContinueShopping:e,onSelectProduct:t}){let{wishlistItems:n,toggleWishlist:r}=tt();return n.length===0?(0,F.jsxs)(`main`,{className:`wishlist-view section animate-fade-in`,children:[(0,F.jsx)(`div`,{className:`container`,children:(0,F.jsxs)(`div`,{className:`empty-wishlist-card glass-card`,children:[(0,F.jsx)(j,{size:52,className:`empty-heart-icon`}),(0,F.jsx)(`h2`,{children:`Your Wishlist is Empty`}),(0,F.jsx)(`p`,{children:`Save outfits you love to your wishlist, so you can easily find them later.`}),(0,F.jsxs)(`button`,{className:`btn btn-primary`,onClick:e,children:[`Browse Shop `,(0,F.jsx)(E,{size:18})]})]})}),(0,F.jsx)(`style`,{children:`
          .empty-wishlist-card {
            text-align: center;
            padding: 5rem 2rem;
            max-width: 600px;
            margin: 4rem auto;
            background: var(--pure-white);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          .empty-heart-icon {
            color: var(--primary-pink);
          }
          .empty-wishlist-card h2 {
            font-size: 2rem;
            color: var(--dark-charcoal);
          }
          .empty-wishlist-card p {
            color: var(--text-muted);
            line-height: 1.6;
          }
        `})]}):(0,F.jsxs)(`main`,{className:`wishlist-view section animate-fade-in`,children:[(0,F.jsxs)(`div`,{className:`container`,children:[(0,F.jsxs)(`div`,{className:`wishlist-banner glass-card`,children:[(0,F.jsx)(`h1`,{children:`Your Wishlist`}),(0,F.jsx)(`p`,{children:`Saved styles that caught your eye. Tap to view or add them to bag!`})]}),(0,F.jsxs)(`div`,{className:`wishlist-grid-wrapper`,children:[(0,F.jsxs)(`p`,{className:`wishlist-count`,children:[`Saved Items (`,n.length,`)`]}),(0,F.jsx)(`div`,{className:`wishlist-cards-grid`,children:n.map(e=>(0,F.jsxs)(`div`,{className:`wishlist-item-wrapper`,children:[(0,F.jsx)(at,{product:e,onSelectProduct:t}),(0,F.jsxs)(`button`,{className:`btn btn-outline wishlist-remove-btn`,onClick:()=>r(e),children:[(0,F.jsx)(Me,{size:14}),` Remove Item`]})]},e._id))})]})]}),(0,F.jsx)(`style`,{children:`
        .wishlist-banner {
          background: linear-gradient(135deg, var(--primary-pink) 0%, var(--primary-pink-dark) 100%);
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
          color: var(--pure-white);
          margin-bottom: 2rem;
        }
        .wishlist-banner h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--pure-white);
        }
        .wishlist-banner p {
          font-size: 1.05rem;
          color: var(--light-pink);
        }
        
        .wishlist-count {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        
        .wishlist-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.5rem;
          width: 100%;
        }
        .wishlist-cards-grid > * {
          min-width: 0;
        }
        
        .wishlist-item-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
          min-width: 0;
          overflow: hidden;
        }
        
        .wishlist-remove-btn {
          width: 100%;
          padding: 0.6rem;
          font-size: 0.8rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }
        .wishlist-remove-btn:hover {
          background: #ffebe9;
          border-color: #dc3545;
          color: #c82333;
        }

        @media (max-width: 992px) {
          .wishlist-cards-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1.25rem;
          }
        }
        @media (max-width: 576px) {
          .wishlist-view {
            padding-top: 1rem !important;
            padding-bottom: 2rem !important;
          }
          .wishlist-banner {
            padding: 1.25rem 1rem !important;
            margin-bottom: 1rem !important;
          }
          .wishlist-banner h1 {
            font-size: 1.5rem !important;
            margin-bottom: 0.25rem !important;
          }
          .wishlist-banner p {
            font-size: 0.85rem !important;
          }
          .wishlist-grid-wrapper {
            width: 100%;
            overflow: hidden;
          }
          .wishlist-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
            width: 100% !important;
          }
          .wishlist-count {
            font-size: 0.8rem !important;
            margin-bottom: 0.85rem !important;
          }
          .wishlist-remove-btn {
            padding: 0.45rem 0.2rem !important;
            font-size: 0.72rem !important;
            gap: 0.2rem !important;
            white-space: nowrap;
          }
        }
      `})]})}function vt(){let{user:e,updateUserProfile:t}=qe(),[n,r]=(0,_.useState)({name:e?.name||``,phone:e?.phone||``}),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)({currentPassword:``,newPassword:``,confirmPassword:``}),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(!1),[y,b]=(0,_.useState)([]),[x,S]=(0,_.useState)(!0);(0,_.useEffect)(()=>{e&&(async()=>{S(!0);try{b(await mt.getUserOrders()||[])}catch(e){console.error(`Error fetching user orders history:`,e)}finally{S(!1)}})()},[e]);let C=e=>{let{name:t,value:n}=e.target;r(e=>({...e,[t]:n}))},w=e=>{let{name:t,value:n}=e.target;d(e=>({...e,[t]:n}))};return(0,F.jsxs)(`main`,{className:`profile-view section animate-fade-in`,children:[(0,F.jsxs)(`div`,{className:`container`,children:[(0,F.jsxs)(`div`,{className:`profile-banner glass-card`,children:[(0,F.jsx)(`h1`,{children:`My Account`}),(0,F.jsx)(`p`,{children:`Manage your profile details, password, and track your boutique orders.`})]}),(0,F.jsxs)(`div`,{className:`profile-grid`,children:[(0,F.jsxs)(`div`,{className:`profile-settings-col`,children:[(0,F.jsxs)(`div`,{className:`profile-details-card glass-card`,children:[(0,F.jsxs)(`div`,{className:`card-header`,children:[(0,F.jsx)(`h3`,{children:`Profile Information`}),!i&&(0,F.jsxs)(`button`,{className:`edit-btn`,onClick:()=>a(!0),children:[(0,F.jsx)(be,{size:16}),` Edit Profile`]})]}),o&&(0,F.jsxs)(`div`,{className:`alert alert-success animate-fade-in`,children:[(0,F.jsx)(ae,{size:16}),` Profile updated successfully!`]}),c&&(0,F.jsxs)(`div`,{className:`alert alert-danger animate-fade-in`,children:[(0,F.jsx)(Ne,{size:16}),` `,c]}),i?(0,F.jsxs)(`form`,{onSubmit:async e=>{e.preventDefault(),l(``),s(!1);try{await t(n),s(!0),a(!1)}catch(e){l(e.message||`Failed to update profile`)}},className:`profile-form`,children:[(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{children:`Full Name`}),(0,F.jsx)(`input`,{type:`text`,name:`name`,value:n.name,onChange:C,required:!0})]}),(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{children:`Phone Number`}),(0,F.jsx)(`input`,{type:`tel`,name:`phone`,value:n.phone,onChange:C,required:!0})]}),(0,F.jsxs)(`div`,{className:`form-btns-row`,children:[(0,F.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-save`,children:`Save Changes`}),(0,F.jsx)(`button`,{type:`button`,className:`btn btn-outline btn-cancel`,onClick:()=>{a(!1),r({name:e?.name||``,phone:e?.phone||``})},children:`Cancel`})]})]}):(0,F.jsxs)(`div`,{className:`profile-info-display`,children:[(0,F.jsxs)(`div`,{className:`info-row`,children:[(0,F.jsx)(`span`,{className:`info-label`,children:`Full Name`}),(0,F.jsx)(`span`,{className:`info-val`,children:e?.name})]}),(0,F.jsxs)(`div`,{className:`info-row`,children:[(0,F.jsx)(`span`,{className:`info-label`,children:`Phone Number`}),(0,F.jsx)(`span`,{className:`info-val`,children:e?.phone})]})]})]}),(0,F.jsxs)(`div`,{className:`profile-details-card glass-card`,style:{marginTop:`2rem`},children:[(0,F.jsx)(`div`,{className:`card-header`,children:(0,F.jsxs)(`h3`,{className:`card-title-icon`,children:[(0,F.jsx)(N,{size:20,className:`icon-pink`}),` Change Password`]})}),f&&(0,F.jsxs)(`div`,{className:`alert alert-success animate-fade-in`,children:[(0,F.jsx)(ae,{size:16}),` Password updated successfully!`]}),m&&(0,F.jsxs)(`div`,{className:`alert alert-danger animate-fade-in`,children:[(0,F.jsx)(Ne,{size:16}),` `,m]}),(0,F.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),h(``),p(!1),u.newPassword!==u.confirmPassword){h(`New passwords do not match`);return}if(u.newPassword.length<6){h(`New password must be at least 6 characters long`);return}v(!0);try{let e=await fetch(`http://localhost:5000/api/auth/change-password`,{method:`PUT`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${localStorage.getItem(`userToken`)}`},body:JSON.stringify({currentPassword:u.currentPassword,newPassword:u.newPassword})}),t=await e.json();e.ok?(p(!0),d({currentPassword:``,newPassword:``,confirmPassword:``})):h(t.message||`Failed to change password`)}catch{h(`Connection error changing password`)}finally{v(!1)}},className:`profile-form`,children:[(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{children:`Current Password`}),(0,F.jsx)(`input`,{type:`password`,name:`currentPassword`,value:u.currentPassword,onChange:w,placeholder:`Enter Current Password`,required:!0})]}),(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{children:`New Password`}),(0,F.jsx)(`input`,{type:`password`,name:`newPassword`,value:u.newPassword,onChange:w,placeholder:`Enter New Password`,required:!0})]}),(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{children:`Confirm New Password`}),(0,F.jsx)(`input`,{type:`password`,name:`confirmPassword`,value:u.confirmPassword,onChange:w,placeholder:`Confirm New Password`,required:!0})]}),(0,F.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-save`,disabled:g,children:g?`Updating...`:`Update Password`})]})]})]}),(0,F.jsx)(`div`,{className:`profile-orders-col`,children:(0,F.jsxs)(`div`,{className:`profile-details-card glass-card h-full`,children:[(0,F.jsx)(`div`,{className:`card-header`,children:(0,F.jsxs)(`h3`,{className:`card-title-icon`,children:[(0,F.jsx)(fe,{size:20,className:`icon-pink`}),` Order History`]})}),x?(0,F.jsx)(`div`,{className:`orders-loader`,children:(0,F.jsx)(`div`,{className:`pink-loader`})}):y.length===0?(0,F.jsxs)(`div`,{className:`orders-placeholder`,children:[(0,F.jsx)(`div`,{className:`placeholder-circle`,children:(0,F.jsx)(fe,{size:32})}),(0,F.jsx)(`h4`,{children:`No Orders Placed Yet`}),(0,F.jsx)(`p`,{children:`Your orders record is empty. Once you proceed to checkout and place orders, details will appear here.`})]}):(0,F.jsx)(`div`,{className:`customer-orders-list`,children:y.map(e=>(0,F.jsxs)(`div`,{className:`customer-order-card glass-card animate-fade-in`,children:[(0,F.jsxs)(`div`,{className:`order-card-header`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`order-lbl`,children:`Order ID`}),(0,F.jsxs)(`span`,{className:`order-val-id`,children:[`#`,e._id.substring(e._id.length-8)]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`order-lbl`,children:`Placed On`}),(0,F.jsx)(`span`,{className:`order-val-date`,children:new Date(e.createdAt).toLocaleDateString(`en-IN`,{day:`numeric`,month:`short`,year:`numeric`})})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`order-lbl`,children:`Status`}),(0,F.jsx)(`span`,{className:`order-status-badge badge-${e.status.toLowerCase()}`,children:e.status})]})]}),(0,F.jsx)(`div`,{className:`order-card-items`,children:e.items.map((e,t)=>(0,F.jsxs)(`div`,{className:`order-card-item-row`,children:[(0,F.jsx)(`img`,{src:e.productId?.image||`https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=150`,alt:`outfit`,className:`order-item-img`}),(0,F.jsxs)(`div`,{className:`order-item-details`,children:[(0,F.jsx)(`h5`,{children:e.productId?.name||`Unknown Outfit`}),(0,F.jsxs)(`p`,{children:[`Size: `,(0,F.jsx)(`strong`,{children:e.size}),` `,e.color&&`| Color: ${e.color}`]}),(0,F.jsxs)(`span`,{className:`order-item-qty-price`,children:[new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(e.price),` x `,e.quantity]})]})]},t))}),e.trackingNumber&&(0,F.jsxs)(`div`,{className:`order-tracking-box`,children:[(0,F.jsxs)(`div`,{className:`tracking-header`,children:[(0,F.jsxs)(`span`,{children:[`Courier Carrier: `,(0,F.jsx)(`strong`,{className:`pink-text`,children:e.courierName||`Shiprocket`})]}),(0,F.jsxs)(`span`,{children:[`AWB Tracking: `,(0,F.jsx)(`strong`,{children:e.trackingNumber})]})]}),e.trackingUrl&&(0,F.jsx)(`a`,{href:e.trackingUrl,target:`_blank`,rel:`noopener noreferrer`,className:`btn-track-package`,children:`Track Package`})]}),e.timeline&&e.timeline.length>0&&(0,F.jsxs)(`div`,{className:`order-timeline-wrapper`,children:[(0,F.jsx)(`span`,{className:`timeline-title`,children:`Delivery Status Updates`}),(0,F.jsx)(`div`,{className:`timeline-items`,children:e.timeline.map((t,n)=>(0,F.jsxs)(`div`,{className:`timeline-event-item`,children:[(0,F.jsxs)(`div`,{className:`event-indicator`,children:[(0,F.jsx)(`div`,{className:`event-dot`}),n<e.timeline.length-1&&(0,F.jsx)(`div`,{className:`event-line`})]}),(0,F.jsxs)(`div`,{className:`event-details`,children:[(0,F.jsxs)(`div`,{className:`event-header`,children:[(0,F.jsx)(`span`,{className:`event-status`,children:t.status}),(0,F.jsx)(`span`,{className:`event-date`,children:new Date(t.createdAt).toLocaleDateString(`en-IN`,{day:`numeric`,month:`short`,hour:`2-digit`,minute:`2-digit`})})]}),t.note&&(0,F.jsx)(`span`,{className:`event-note`,children:t.note})]})]},n))})]}),(0,F.jsxs)(`div`,{className:`order-card-footer`,children:[(0,F.jsx)(`div`,{className:`footer-meta`,children:(0,F.jsxs)(`span`,{children:[`Payment: `,(0,F.jsxs)(`strong`,{children:[e.paymentMethod,` (`,e.paymentStatus,`)`]})]})}),(0,F.jsxs)(`div`,{className:`footer-total`,children:[(0,F.jsx)(`span`,{children:`Total Amount:`}),(0,F.jsx)(`strong`,{children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(e.totalAmount)})]})]})]},e._id))})]})})]})]}),(0,F.jsx)(`style`,{children:`
        .profile-banner {
          background: linear-gradient(135deg, var(--primary-pink) 0%, var(--primary-pink-dark) 100%);
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
          color: var(--pure-white);
          margin-bottom: 2rem;
        }
        .profile-banner h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--pure-white);
        }
        .profile-banner p {
          font-size: 1.05rem;
          color: var(--light-pink);
        }
        
        .profile-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        
        .profile-details-card {
          padding: 2.5rem;
          background: var(--pure-white);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px dashed var(--border-light);
          padding-bottom: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .card-header h3 {
          font-size: 1.3rem;
          color: var(--dark-charcoal);
          margin: 0;
        }
        .card-title-icon {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .icon-pink {
          color: var(--primary-pink);
        }
        .edit-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary-pink-dark);
        }
        .edit-btn:hover {
          color: var(--primary-pink-hover);
        }
        
        .alert {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 500;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          margin-bottom: 1.25rem;
        }
        .alert-success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }
        .alert-danger {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }
        
        .profile-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .profile-form .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .profile-form label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .profile-form input {
          font-family: var(--font-sans);
          padding: 0.8rem 1rem;
          border: 1px solid var(--border-light);
          border-radius: 10px;
          outline: none;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }
        .profile-form input:focus {
          border-color: var(--primary-pink);
          box-shadow: 0 0 0 3px rgba(240, 84, 138, 0.1);
        }
        
        .form-btns-row {
          display: flex;
          gap: 1rem;
        }
        .btn-save {
          padding: 0.75rem 1.5rem;
          font-size: 0.85rem;
          border-radius: 8px;
          align-self: flex-start;
        }
        .btn-cancel {
          padding: 0.75rem 1.5rem;
          font-size: 0.85rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          color: var(--dark-charcoal);
        }
        .btn-cancel:hover {
          background: var(--cream-white);
        }
        
        .profile-info-display {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .info-row {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .info-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        .info-val {
          font-size: 1.05rem;
          color: var(--dark-charcoal);
          font-weight: 500;
        }
        
        /* Customer Orders List */
        .customer-orders-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-height: 550px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }
        .customer-order-card {
          background: var(--pure-white);
          padding: 1.5rem;
          border: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .order-card-header {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.75rem;
        }
        .order-lbl {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.15rem;
          text-transform: uppercase;
          font-weight: 600;
        }
        .order-val-id {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--dark-charcoal);
        }
        .order-val-date {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--dark-charcoal);
        }
        .order-card-items {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .order-card-item-row {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .order-item-img {
          width: 50px;
          height: 60px;
          object-fit: cover;
          border-radius: 6px;
          border: 1px solid var(--border-light);
        }
        .order-item-details {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .order-item-details h5 {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin: 0;
        }
        .order-item-details p {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin: 0;
        }
        .order-item-qty-price {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary-pink-dark);
        }
        .order-card-footer {
          border-top: 1px solid var(--border-light);
          padding-top: 0.75rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
        }
        .footer-meta {
          color: var(--text-muted);
        }
        .footer-total {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .footer-total strong {
          font-size: 1.05rem;
          color: var(--primary-pink-dark);
        }
        .orders-loader {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4rem 0;
        }

        /* Order status badges */
        .order-status-badge {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          text-transform: uppercase;
          display: inline-block;
          text-align: center;
        }
        .badge-pending { background: #fff3cd; color: #856404; border: 1px solid #ffeeba; }
        .badge-accepted { background: #d1ecf1; color: #0c5460; border: 1px solid #bee5eb; }
        .badge-rejected { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        .badge-processing { background: #e2e3e5; color: #383d41; border: 1px solid #d6d8db; }
        .badge-shipped { background: #cce5ff; color: #004085; border: 1px solid #b8daff; }
        .badge-delivered { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .badge-cancelled { background: #e2e3e5; color: #383d41; border: 1px solid #d6d8db; }

        .pink-loader {
          width: 32px;
          height: 32px;
          border: 3px solid var(--soft-pink);
          border-top-color: var(--primary-pink);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .orders-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 1.5rem;
          gap: 1rem;
        }
        .placeholder-circle {
          width: 64px;
          height: 64px;
          background: var(--light-pink);
          color: var(--primary-pink);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-pink);
        }
        .orders-placeholder h4 {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          color: var(--dark-charcoal);
          margin: 0;
        }
        .orders-placeholder p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
          max-width: 300px;
          margin: 0;
        }
        
        .h-full {
          height: 100%;
        }
        
        /* Shipping Tracking Styles */
        .order-tracking-box {
          background: var(--light-pink);
          border: 1px solid var(--border-pink);
          border-radius: 12px;
          padding: 1.25rem;
          margin-top: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .tracking-header {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          font-size: 0.85rem;
          color: var(--dark-charcoal);
        }
        .pink-text {
          color: var(--primary-pink-dark);
        }
        .btn-track-package {
          background: var(--primary-pink);
          color: var(--pure-white);
          padding: 0.6rem 1.2rem;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(240, 84, 138, 0.2);
          transition: all var(--transition-fast);
        }
        .btn-track-package:hover {
          background: var(--primary-pink-hover);
          transform: translateY(-1px);
        }
        
        .order-timeline-wrapper {
          border-top: 1px dashed var(--border-light);
          padding-top: 1.25rem;
          margin-top: 1rem;
        }
        .timeline-title {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--dark-charcoal);
          margin-bottom: 1rem;
        }
        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding-left: 0.5rem;
        }
        .timeline-event-item {
          display: flex;
          gap: 1.25rem;
        }
        .event-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .event-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--primary-pink);
          border: 2px solid var(--pure-white);
          box-shadow: 0 0 0 2px var(--primary-pink);
          z-index: 2;
        }
        .event-line {
          width: 2px;
          background: var(--border-pink);
          position: absolute;
          top: 10px;
          bottom: -20px;
          z-index: 1;
        }
        .event-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex-grow: 1;
        }
        .event-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 1rem;
        }
        .event-status {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--dark-charcoal);
        }
        .event-date {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .event-note {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        
        @media (max-width: 992px) {
          .profile-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 576px) {
          .my-account-view {
            padding-top: 1rem !important;
            padding-bottom: 1.5rem !important;
          }
          .profile-banner {
            padding: 1rem 0.75rem !important;
            margin-bottom: 1rem !important;
          }
          .profile-banner h1 {
            font-size: 1.5rem !important;
            margin-bottom: 0 !important;
          }
          .profile-banner p {
            display: none !important;
          }
          .profile-details-card {
            padding: 1.25rem !important;
          }
          .order-card {
            padding: 1.25rem !important;
          }
          .order-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          .order-tracking-box {
            padding: 0.75rem !important;
          }
          .tracking-header {
            flex-direction: column;
            gap: 0.25rem;
          }
          .event-header {
            flex-direction: column;
            gap: 0.15rem;
          }
          .order-card-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `})]})}function yt(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(!0),[i,a]=(0,_.useState)(``),[o,s]=(0,_.useState)(``),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(!1),x=async()=>{r(!0),a(``);try{let e=await I.getStories();t(e||[]),m&&h(e.find(e=>e._id===m._id)||null)}catch(e){a(e.message||`Failed to load stories.`)}finally{r(!1)}};(0,_.useEffect)(()=>{x()},[]);let S=e=>{e.target.files&&e.target.files[0]&&d(e.target.files[0])},C=async t=>{if(t.preventDefault(),a(``),s(``),e.length>=4){a(`Maximum limit of 4 stories reached. Delete an existing story first.`);return}if(!c.trim()){a(`Please enter a story name.`);return}if(!u){a(`Please select a cover image.`);return}p(!0);try{let e=new FormData;e.append(`name`,c.trim()),e.append(`coverImage`,u),await I.createStory(e),s(`Story created successfully!`),l(``),d(null);let t=document.getElementById(`cover-image-input`);t&&(t.value=``),await x()}catch(e){a(e.message||`Failed to create story.`)}finally{p(!1)}},w=async e=>{if(window.confirm(`Are you sure you want to delete this story? This will permanently delete the cover image and all uploaded sub-stories from Cloudinary.`)){a(``),s(``);try{await I.deleteStory(e),s(`Story deleted successfully!`),m?._id===e&&h(null),await x()}catch(e){a(e.message||`Failed to delete story.`)}}},ee=async e=>{if(e.preventDefault(),m){if(a(``),s(``),!g){a(`Please select a photo or video file.`);return}b(!0);try{let e=new FormData;e.append(`mediaFile`,g);let t=await I.addSubStory(m._id,e);s(`Sub-story added successfully!`),v(null);let n=document.getElementById(`substory-file-input`);n&&(n.value=``),h(t),await x()}catch(e){a(e.message||`Failed to upload sub-story. Make sure video size is less than 100MB.`)}finally{b(!1)}}},te=async e=>{if(m&&window.confirm(`Are you sure you want to delete this slide from the story?`)){a(``),s(``);try{let t=await I.deleteSubStory(m._id,e);s(`Slide deleted successfully!`),h(t.story),await x()}catch(e){a(e.message||`Failed to delete slide.`)}}};return(0,F.jsxs)(`div`,{className:`admin-stories-manager`,children:[(0,F.jsxs)(`div`,{className:`section-header`,children:[(0,F.jsx)(`h2`,{children:`Manage Instagram Stories`}),(0,F.jsx)(`p`,{className:`subtitle`,children:`Configure up to 4 homepage stories with image and video slide decks.`})]}),i&&(0,F.jsx)(`div`,{className:`alert alert-danger`,children:i}),o&&(0,F.jsx)(`div`,{className:`alert alert-success`,children:o}),(0,F.jsxs)(`div`,{className:`stories-grid-layout`,children:[(0,F.jsxs)(`div`,{className:`stories-column-left`,children:[(0,F.jsxs)(`div`,{className:`admin-card story-create-card`,children:[(0,F.jsxs)(`h3`,{children:[`Create New Story (`,e.length,`/4)`]}),e.length>=4?(0,F.jsx)(`div`,{className:`limit-warning`,children:`⚠️ Maximum limit of 4 stories reached. You must delete an existing story before creating a new one.`}):(0,F.jsxs)(`form`,{onSubmit:C,className:`story-form`,children:[(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{htmlFor:`storyName`,children:`Story Title`}),(0,F.jsx)(`input`,{type:`text`,id:`storyName`,value:c,onChange:e=>l(e.target.value),placeholder:`e.g. Cordsets, New Arrivals`,className:`form-control`,disabled:f})]}),(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{htmlFor:`cover-image-input`,children:`Cover Thumbnail Image`}),(0,F.jsx)(`input`,{type:`file`,id:`cover-image-input`,accept:`image/*`,onChange:S,className:`form-control file-input`,disabled:f}),(0,F.jsx)(`small`,{className:`help-text`,children:`This will be the circular bubble image on the homepage.`})]}),(0,F.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-submit`,disabled:f,children:f?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(pe,{size:16,className:`animate-spin`}),` Creating Story...`]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Se,{size:16}),` Create Story`]})})]})]}),(0,F.jsxs)(`div`,{className:`admin-card story-list-card`,children:[(0,F.jsx)(`h3`,{children:`Active Stories`}),n&&e.length===0?(0,F.jsxs)(`div`,{className:`loading-state`,children:[(0,F.jsx)(pe,{size:24,className:`animate-spin`}),` Loading stories...`]}):e.length===0?(0,F.jsx)(`div`,{className:`empty-state`,children:`No stories created. Add your first story above!`}):(0,F.jsx)(`div`,{className:`stories-list`,children:e.map(e=>(0,F.jsxs)(`div`,{className:`story-list-item ${m?._id===e._id?`selected`:``}`,onClick:()=>h(e),children:[(0,F.jsx)(`div`,{className:`story-item-avatar`,children:(0,F.jsx)(`img`,{src:e.coverImage,alt:e.name})}),(0,F.jsxs)(`div`,{className:`story-item-details`,children:[(0,F.jsx)(`h4`,{children:e.name}),(0,F.jsxs)(`p`,{children:[e.subStories?.length||0,` slides (photos/videos)`]})]}),(0,F.jsx)(`div`,{className:`story-item-actions`,onClick:e=>e.stopPropagation(),children:(0,F.jsx)(`button`,{className:`btn-icon-danger`,onClick:()=>w(e._id),title:`Delete Story`,children:(0,F.jsx)(Me,{size:16})})})]},e._id))})]})]}),(0,F.jsx)(`div`,{className:`stories-column-right`,children:m?(0,F.jsxs)(`div`,{className:`admin-card story-details-card`,children:[(0,F.jsx)(`div`,{className:`story-details-header`,children:(0,F.jsxs)(`div`,{className:`story-details-title-row`,children:[(0,F.jsx)(`img`,{src:m.coverImage,alt:m.name,className:`selected-story-avatar`}),(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`h3`,{children:[`Managing Slides: `,m.name]}),(0,F.jsx)(`p`,{children:`Add and delete photos or short video clips inside this story.`})]})]})}),(0,F.jsxs)(`form`,{onSubmit:ee,className:`add-substory-form`,children:[(0,F.jsx)(`h4`,{children:`Add New Slide (Photo / Video)`}),(0,F.jsxs)(`div`,{className:`form-row-align`,children:[(0,F.jsx)(`input`,{type:`file`,id:`substory-file-input`,accept:`image/*,video/*`,onChange:e=>v(e.target.files?e.target.files[0]:null),className:`form-control file-input-inline`,disabled:y}),(0,F.jsx)(`button`,{type:`submit`,className:`btn btn-primary`,disabled:y,children:y?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(pe,{size:16,className:`animate-spin`}),` Uploading...`]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Se,{size:16}),` Add Slide`]})})]}),(0,F.jsx)(`small`,{className:`help-text`,children:`Supports images (JPG, PNG, WebP) and short video clips (MP4, MOV up to 100MB).`})]}),(0,F.jsxs)(`div`,{className:`substories-section`,children:[(0,F.jsxs)(`h4`,{children:[`Story Slides (`,m.subStories?.length||0,`)`]}),m.subStories?.length===0?(0,F.jsx)(`div`,{className:`empty-substories`,children:`No slides added yet. Select a photo/video and add one above!`}):(0,F.jsx)(`div`,{className:`substories-grid`,children:m.subStories.map((e,t)=>(0,F.jsxs)(`div`,{className:`substory-card`,children:[(0,F.jsxs)(`span`,{className:`slide-index-badge`,children:[`Slide `,t+1]}),(0,F.jsx)(`div`,{className:`substory-preview`,children:e.mediaType===`video`?(0,F.jsxs)(`div`,{className:`video-preview-wrapper`,children:[(0,F.jsx)(`video`,{src:e.url,muted:!0,className:`substory-video-tag`}),(0,F.jsxs)(`div`,{className:`video-type-badge`,children:[(0,F.jsx)(ue,{size:12}),` Video`]})]}):(0,F.jsx)(`img`,{src:e.url,alt:`Slide preview`,className:`substory-img-tag`})}),(0,F.jsxs)(`div`,{className:`substory-meta`,children:[(0,F.jsx)(`span`,{className:`media-type-lbl capitalize`,children:e.mediaType}),(0,F.jsx)(`button`,{className:`btn-icon-danger`,onClick:()=>te(e._id),title:`Delete Slide`,children:(0,F.jsx)(Me,{size:14})})]})]},e._id))})]})]}):(0,F.jsxs)(`div`,{className:`admin-card select-story-placeholder`,children:[(0,F.jsx)(ue,{size:48,className:`placeholder-icon`}),(0,F.jsx)(`h3`,{children:`No Story Selected`}),(0,F.jsx)(`p`,{children:`Select an active story from the list on the left to add slides (photos and videos) or manage existing ones.`})]})})]}),(0,F.jsx)(`style`,{children:`
        .admin-stories-manager {
          color: var(--dark-charcoal);
        }
        .section-header {
          margin-bottom: 2rem;
        }
        .subtitle {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .stories-grid-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2rem;
          align-items: start;
        }
        @media (max-width: 992px) {
          .stories-grid-layout {
            grid-template-columns: 1fr;
          }
        }
        .admin-card {
          background: var(--pure-white);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
          margin-bottom: 1.5rem;
        }
        .admin-card h3 {
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          color: var(--dark-charcoal);
        }
        .limit-warning {
          background: #fff9e6;
          color: #b27a00;
          border: 1px solid #ffe89e;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .form-group {
          margin-bottom: 1.25rem;
        }
        .form-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-muted);
        }
        .form-control {
          width: 100%;
          padding: 0.65rem 0.85rem;
          border: 1px solid var(--border-light);
          border-radius: 6px;
          font-size: 0.9rem;
          transition: border-color var(--transition-fast);
        }
        .form-control:focus {
          border-color: var(--primary-pink);
          outline: none;
        }
        .file-input {
          padding: 0.4rem;
        }
        .help-text {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.35rem;
        }
        .btn-submit {
          width: 100%;
          justify-content: center;
          padding: 0.75rem !important;
        }
        
        /* Stories list item styles */
        .stories-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .story-list-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .story-list-item:hover {
          border-color: var(--primary-pink);
          background: var(--light-pink);
        }
        .story-list-item.selected {
          border-color: var(--primary-pink);
          background: var(--light-pink);
          box-shadow: 0 0 0 1px var(--primary-pink);
        }
        .story-item-avatar img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--pure-white);
          box-shadow: var(--shadow-sm);
        }
        .story-item-details {
          flex: 1;
        }
        .story-item-details h4 {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.15rem;
        }
        .story-item-details p {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .btn-icon-danger {
          background: none;
          border: none;
          color: #e02424;
          cursor: pointer;
          padding: 0.4rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background var(--transition-fast);
        }
        .btn-icon-danger:hover {
          background: #fee2e2;
        }

        /* Right Column (Substories) styling */
        .story-details-header {
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .story-details-title-row {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .selected-story-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--primary-pink);
        }
        .story-details-card h3 {
          margin-bottom: 0.15rem;
        }
        .story-details-card p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        
        .add-substory-form {
          background: var(--light-pink);
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          margin-bottom: 1.5rem;
        }
        .add-substory-form h4 {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .form-row-align {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .file-input-inline {
          flex: 1;
          background: var(--pure-white);
          padding: 0.45rem;
        }
        
        .substories-section h4 {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.5rem;
        }
        .empty-substories {
          text-align: center;
          color: var(--text-muted);
          font-size: 0.85rem;
          padding: 2rem;
          font-style: italic;
        }
        .substories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 1rem;
        }
        .substory-card {
          border: 1px solid var(--border-light);
          border-radius: 8px;
          overflow: hidden;
          background: var(--pure-white);
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .slide-index-badge {
          position: absolute;
          top: 6px;
          left: 6px;
          background: rgba(0, 0, 0, 0.65);
          color: var(--pure-white);
          font-size: 0.65rem;
          padding: 0.15rem 0.35rem;
          border-radius: 4px;
          font-weight: 500;
          z-index: 5;
        }
        .substory-preview {
          height: 140px;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .substory-img-tag, .substory-video-tag {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .video-preview-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .video-type-badge {
          position: absolute;
          bottom: 6px;
          right: 6px;
          background: var(--primary-pink);
          color: var(--pure-white);
          font-size: 0.6rem;
          font-weight: 700;
          padding: 0.15rem 0.35rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .substory-meta {
          padding: 0.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--pure-white);
          border-top: 1px solid var(--border-light);
        }
        .media-type-lbl {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        
        .select-story-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 5rem 2rem;
          text-align: center;
          color: var(--text-muted);
          border: 2px dashed var(--border-light);
          background: none;
        }
        .placeholder-icon {
          color: var(--border-light);
          margin-bottom: 1.5rem;
        }
        .select-story-placeholder h3 {
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
        }
        .select-story-placeholder p {
          font-size: 0.9rem;
          max-width: 320px;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .capitalize {
          text-transform: capitalize;
        }
      `})]})}function bt(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(``),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(`0`);(0,_.useEffect)(()=>{y()},[]);let y=async()=>{r(!0),s(``);try{t(await lt.getBanners()||[])}catch(e){s(e.message||`Failed to load banners`)}finally{r(!1)}},b=e=>{let t=e.target.files[0];if(t){d(t);let e=new FileReader;e.onloadend=()=>{p(e.result)},e.readAsDataURL(t)}},x=async e=>{if(e.preventDefault(),!u){s(`Please select an image file first`);return}a(!0),s(``),l(``);try{let e=new FormData;e.append(`image`,u),e.append(`linkUrl`,m),e.append(`order`,g);let n=await lt.createBanner(e);t(e=>[...e,n].sort((e,t)=>e.order-t.order)),l(`Banner uploaded successfully!`),d(null),p(``),h(``),v(`0`)}catch(e){s(e.message||`Failed to upload banner`)}finally{a(!1)}},S=async e=>{if(window.confirm(`Are you sure you want to delete this banner?`)){s(``),l(``);try{await lt.deleteBanner(e),t(t=>t.filter(t=>t._id!==e)),l(`Banner deleted successfully!`)}catch(e){s(e.message||`Failed to delete banner`)}}};return(0,F.jsxs)(`div`,{className:`admin-banners-manager`,children:[(0,F.jsxs)(`div`,{className:`admin-header-row`,children:[(0,F.jsx)(`h2`,{children:`Manage Homepage Banners`}),(0,F.jsx)(`p`,{className:`admin-subtitle`,children:`Upload and arrange banner slideshow images for your homepage`})]}),o&&(0,F.jsxs)(`div`,{className:`admin-alert error-alert`,children:[(0,F.jsx)(O,{size:18}),(0,F.jsx)(`span`,{children:o})]}),c&&(0,F.jsxs)(`div`,{className:`admin-alert success-alert`,children:[(0,F.jsx)(O,{size:18}),(0,F.jsx)(`span`,{children:c})]}),(0,F.jsxs)(`div`,{className:`banners-grid-container`,children:[(0,F.jsxs)(`div`,{className:`admin-card upload-banner-card`,children:[(0,F.jsx)(`h3`,{children:`Add New Banner Slide`}),(0,F.jsxs)(`form`,{onSubmit:x,className:`banner-form`,children:[(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{children:`Banner Image`}),(0,F.jsx)(`div`,{className:`banner-file-uploader`,children:f?(0,F.jsxs)(`div`,{className:`preview-container`,children:[(0,F.jsx)(`img`,{src:f,alt:`Banner Preview`,className:`banner-img-preview`}),(0,F.jsx)(`button`,{type:`button`,className:`remove-preview-btn`,onClick:()=>{d(null),p(``)},children:`Change Image`})]}):(0,F.jsxs)(`label`,{className:`file-select-label`,children:[(0,F.jsx)(M,{size:24}),(0,F.jsx)(`span`,{children:`Choose Banner Image`}),(0,F.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:b,required:!0,style:{display:`none`}})]})})]}),(0,F.jsxs)(`div`,{className:`form-row`,children:[(0,F.jsxs)(`div`,{className:`form-group col`,children:[(0,F.jsxs)(`label`,{children:[(0,F.jsx)(de,{size:14,style:{marginRight:`4px`}}),` Redirect Link (Optional)`]}),(0,F.jsx)(`input`,{type:`text`,value:m,onChange:e=>h(e.target.value),placeholder:`e.g., #shop-collection`})]}),(0,F.jsxs)(`div`,{className:`form-group col-short`,children:[(0,F.jsxs)(`label`,{children:[(0,F.jsx)(ie,{size:14,style:{marginRight:`4px`}}),` Sort Order`]}),(0,F.jsx)(`input`,{type:`number`,value:g,onChange:e=>v(e.target.value),min:`0`,required:!0})]})]}),(0,F.jsx)(`button`,{type:`submit`,className:`btn btn-primary w-full`,disabled:i,children:i?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(pe,{className:`spinner`,size:18}),` Uploading banner...`]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Se,{size:18}),` Add Banner Slide`]})})]})]}),(0,F.jsxs)(`div`,{className:`admin-card existing-banners-card`,children:[(0,F.jsx)(`h3`,{children:`Active Banners`}),n?(0,F.jsxs)(`div`,{className:`banners-loading`,children:[(0,F.jsx)(pe,{className:`spinner`,size:24}),(0,F.jsx)(`span`,{children:`Loading banners...`})]}):e.length===0?(0,F.jsxs)(`div`,{className:`no-banners-state`,children:[(0,F.jsx)(M,{size:36}),(0,F.jsx)(`p`,{children:`No custom banners uploaded. Serving default seed slides.`})]}):(0,F.jsx)(`div`,{className:`banners-list-grid`,children:e.map(e=>(0,F.jsxs)(`div`,{className:`banner-item-card`,children:[(0,F.jsxs)(`div`,{className:`banner-image-preview-wrapper`,children:[(0,F.jsx)(`img`,{src:e.imageUrl,alt:`Banner Slide`}),(0,F.jsx)(`button`,{className:`delete-banner-badge`,onClick:()=>S(e._id),title:`Delete Banner`,children:(0,F.jsx)(Me,{size:16})})]}),(0,F.jsxs)(`div`,{className:`banner-meta`,children:[(0,F.jsxs)(`span`,{className:`banner-order-tag`,children:[`Order: `,e.order]}),e.linkUrl&&(0,F.jsxs)(`span`,{className:`banner-link-tag`,title:e.linkUrl,children:[(0,F.jsx)(de,{size:12}),` Link Set`]})]})]},e._id))})]})]}),(0,F.jsx)(`style`,{children:`
        .banners-grid-container {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2rem;
          margin-top: 1.5rem;
        }
        .banner-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 1rem;
        }
        .banner-file-uploader {
          border: 2px dashed var(--border-light);
          border-radius: 12px;
          min-height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.4);
          overflow: hidden;
          transition: border-color 0.2s ease;
        }
        .banner-file-uploader:hover {
          border-color: var(--primary-pink);
        }
        .file-select-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          color: var(--text-muted);
          width: 100%;
          padding: 2rem;
          text-align: center;
        }
        .file-select-label:hover {
          color: var(--primary-pink);
        }
        .preview-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .banner-img-preview {
          width: 100%;
          height: 140px;
          object-fit: cover;
        }
        .remove-preview-btn {
          background: var(--dark-charcoal);
          color: var(--pure-white);
          border: none;
          padding: 0.35rem 0.85rem;
          font-size: 0.75rem;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 0.5rem;
          font-weight: 600;
          transition: background 0.2s ease;
        }
        .remove-preview-btn:hover {
          background: var(--primary-pink);
        }
        .form-row {
          display: flex;
          gap: 1rem;
        }
        .col {
          flex: 1;
        }
        .col-short {
          width: 90px;
        }
        .banners-loading, .no-banners-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 240px;
          gap: 0.75rem;
          color: var(--text-muted);
        }
        .banners-list-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 1.25rem;
          margin-top: 1rem;
        }
        .banner-item-card {
          background: var(--pure-white);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-light);
        }
        .banner-image-preview-wrapper {
          position: relative;
          width: 100%;
          height: 110px;
          background: var(--border-light);
        }
        .banner-image-preview-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .delete-banner-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(220, 53, 69, 0.9);
          color: var(--pure-white);
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .delete-banner-badge:hover {
          transform: scale(1.1);
          background: rgba(220, 53, 69, 1);
        }
        .banner-meta {
          padding: 0.65rem;
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .banner-order-tag {
          background: var(--soft-pink);
          color: var(--primary-pink-dark);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
        }
        .banner-link-tag {
          color: var(--primary-pink);
          display: flex;
          align-items: center;
          gap: 3px;
        }
        @media (max-width: 992px) {
          .banners-grid-container {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function xt(){let[e,t]=(0,_.useState)(`overview`),[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)(!0),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(``),[f,p]=(0,_.useState)(`All`),[m,h]=(0,_.useState)([]),[g,v]=(0,_.useState)({currentPage:1,totalPages:1}),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(``),[C,w]=(0,_.useState)(1),[ee,te]=(0,_.useState)(`All`),[ne,T]=(0,_.useState)(!1),[re,E]=(0,_.useState)(null),[ie,D]=(0,_.useState)(``),[oe,se]=(0,_.useState)(!1),[O,k]=(0,_.useState)(!1),[A,ce]=(0,_.useState)({name:``,brand:``,description:``,price:``,discountPrice:``,category:`Cordsets`,isFeatured:!1,isNewArrival:!1}),[ue,j]=(0,_.useState)({M:0,L:0,XL:0,XXL:0}),[M,N]=(0,_.useState)([]),[de,fe]=(0,_.useState)(``),[pe,me]=(0,_.useState)([]),[he,ge]=(0,_.useState)(``),[_e,ve]=(0,_.useState)([]),[ye,be]=(0,_.useState)(``),[xe,Ce]=(0,_.useState)(``),[Te,Ee]=(0,_.useState)([]),[De,ke]=(0,_.useState)(null),Ae=[`Cordsets`,`Dresses`,`Tops & Shirts`,`Bottoms`],Fe=async()=>{a(!0);try{r(await Ue.getStats())}catch(e){console.error(`Error fetching dashboard stats`,e)}finally{a(!1)}},Le=async()=>{b(!0);try{let e=await ct.getProducts({page:C,limit:10,category:ee,search:x});h(e.products||[]),v(e.pagination||{currentPage:1,totalPages:1})}catch(e){console.error(`Error fetching admin products list`,e)}finally{b(!1)}},Re=async()=>{try{me((await ct.getProducts({page:1,limit:1e3})).products||[])}catch(e){console.error(`Error fetching all products list`,e)}},Be=async()=>{l(!0);try{s(await Ue.getOrders()||[])}catch(e){console.error(`Error fetching admin orders list`,e)}finally{l(!1)}},Ve=async(e,t)=>{if(window.confirm(`Are you sure you want to mark this order as ${t}?`))try{await Ue.updateOrderStatus(e,t),alert(`Order status successfully updated to "${t}"`),Be()}catch(e){alert(e.message||`Failed to update order status`)}},P=async e=>{if(window.confirm(`Are you sure you want to trigger a full refund in Razorpay for the online paid amount and cancel this order? This action is irreversible.`))try{l(!0);let t=await Ue.refundOrder(e);alert(t.message||`Refund successfully issued in Razorpay!`),Be()}catch(e){alert(e.message||`Failed to issue refund.`)}finally{l(!1)}};(0,_.useEffect)(()=>{e===`overview`?Fe():e===`products`?Le():e===`orders`&&Be()},[e,C,ee]);let He=e=>{e.preventDefault(),w(1),Le()},We=e=>{let{name:t,value:n,type:r,checked:i}=e.target;ce(e=>({...e,[t]:r===`checkbox`?i:n}))},Ge=e=>{let{name:t,value:n}=e.target;j(e=>({...e,[t]:parseInt(n)||0}))},Ke=()=>{if(!ye){alert(`Please select a product to link as a variant.`);return}if(!xe.trim()){alert(`Please specify the color name for this variant.`);return}if(_e.some(e=>e.product===ye)){alert(`This product is already linked as a variant.`);return}ve(e=>[...e,{colorName:xe.trim(),product:ye}]),be(``),Ce(``)},qe=e=>{ve(t=>t.filter((t,n)=>n!==e))},Je=e=>{let t=Array.from(e.target.files);if(Te.length+t.length>4){D(`A product can support a maximum of 4 images`);return}D(``);let n=t.map((e,t)=>({id:`new-${Date.now()}-${t}-${Math.random()}`,type:`new`,url:URL.createObjectURL(e),file:e}));Ee(e=>[...e,...n])},Ye=e=>{e.type===`new`&&URL.revokeObjectURL(e.url),Ee(t=>t.filter(t=>t.id!==e.id))},Xe=(e,t)=>{ke(t),e.dataTransfer.effectAllowed=`move`},Ze=(e,t)=>{if(e.preventDefault(),De===null||De===t)return;let n=[...Te],r=n[De];n.splice(De,1),n.splice(t,0,r),ke(t),Ee(n)},Qe=()=>{ke(null)},$e=()=>{T(!1),E(null),D(``),se(!1),ce({name:``,brand:``,description:``,price:``,discountPrice:``,category:`Cordsets`,isFeatured:!1,isNewArrival:!1}),j({M:0,L:0,XL:0,XXL:0}),N([]),ge(``),ve([]),be(``),Ce(``),Re(),Ee([]),t(`form`)},et=e=>{T(!0),E(e._id),D(``),se(!1),ce({name:e.name,brand:e.brand||``,description:e.description,price:e.price,discountPrice:e.discountPrice||``,category:e.category,isFeatured:e.isFeatured||!1,isNewArrival:e.isNewArrival||!1});let n={M:0,L:0,XL:0,XXL:0};e.sizes.forEach(e=>{n[e.size]=e.stock}),j(n),N(e.colors||[]),ge(e.colorName||``),ve(e.colorVariants?e.colorVariants.map(e=>({colorName:e.colorName,product:e.product?._id||e.product})):[]),be(``),Ce(``),Re(),Ee((e.images&&e.images.length>0?e.images:[e.image]).map((e,t)=>({id:`existing-${t}-${e}`,type:`existing`,url:e,file:null}))),t(`form`)},tt=async e=>{if(window.confirm(`Are you sure you want to delete this product? (This will perform a soft-delete)`))try{await Ue.deleteProduct(e),alert(`Product deleted successfully (soft-delete)`),Le()}catch(e){alert(e.message||`Failed to delete product`)}},nt=async e=>{e.preventDefault(),D(``),se(!1);let n=Te.length;if(n===0){D(`At least one product image is required`);return}if(n>4){D(`A maximum of 4 product images is allowed`);return}if(A.discountPrice&&parseFloat(A.discountPrice)>=parseFloat(A.price)){D(`Discount price must be lower than the original price`);return}k(!0);try{let e=new FormData;e.append(`name`,A.name.trim()),e.append(`brand`,A.brand.trim()),e.append(`description`,A.description.trim()),e.append(`price`,A.price),e.append(`category`,A.category),e.append(`isFeatured`,A.isFeatured),e.append(`isNewArrival`,A.isNewArrival),A.discountPrice&&e.append(`discountPrice`,A.discountPrice);let n=Object.keys(ue).map(e=>({size:e,stock:ue[e]}));e.append(`sizes`,JSON.stringify(n)),e.append(`colors`,JSON.stringify(M)),e.append(`colorName`,he.trim()),e.append(`colorVariants`,JSON.stringify(_e));let r=Te.filter(e=>e.type===`existing`).map(e=>e.url);if(ne){e.append(`existingImages`,JSON.stringify(r));let t=Te.map(e=>({type:e.type,url:e.type===`existing`?e.url:void 0}));e.append(`imageOrder`,JSON.stringify(t))}Te.filter(e=>e.type===`new`).forEach(t=>{e.append(`images`,t.file)}),ne?await Ue.updateProduct(re,e):await Ue.createProduct(e),se(!0),setTimeout(()=>{t(`products`),se(!1)},1500)}catch(e){D(e.message||`Failed to save product`)}finally{k(!1)}},rt=(o||[]).filter(e=>{if(!e)return!1;let t=e.userId&&e.userId.name?e.userId.name.toLowerCase():`guest`,n=e.userId&&e.userId.email?e.userId.email.toLowerCase():``,r=e._id?e._id.toLowerCase():``,i=(u||``).toLowerCase(),a=r.includes(i)||t.includes(i)||n.includes(i);return f===`All`?a:a&&e.status===f});return(0,F.jsxs)(`main`,{className:`admin-view section animate-fade-in`,children:[(0,F.jsxs)(`div`,{className:`container`,children:[(0,F.jsxs)(`div`,{className:`admin-banner glass-card`,children:[(0,F.jsx)(`h1`,{children:`Admin Control Panel`}),(0,F.jsx)(`p`,{children:`Manage product catalog, check low stock alerts, and upload outfits to Cloudinary.`}),(0,F.jsxs)(`div`,{className:`admin-nav-tabs`,children:[(0,F.jsx)(`button`,{className:`admin-tab-btn ${e===`overview`?`active`:``}`,onClick:()=>t(`overview`),children:`Overview Dashboard`}),(0,F.jsx)(`button`,{className:`admin-tab-btn ${e===`products`?`active`:``}`,onClick:()=>t(`products`),children:`Product Inventory`}),(0,F.jsx)(`button`,{className:`admin-tab-btn ${e===`orders`?`active`:``}`,onClick:()=>t(`orders`),children:`Manage Orders`}),(0,F.jsx)(`button`,{className:`admin-tab-btn ${e===`stories`?`active`:``}`,onClick:()=>t(`stories`),children:`Manage Stories`}),(0,F.jsx)(`button`,{className:`admin-tab-btn ${e===`banners`?`active`:``}`,onClick:()=>t(`banners`),children:`Manage Banners`}),(0,F.jsxs)(`button`,{className:`btn btn-primary admin-add-btn`,onClick:$e,children:[(0,F.jsx)(Se,{size:16}),` Add Product`]})]})]}),e===`overview`&&(0,F.jsx)(`div`,{className:`admin-content-area`,children:i?(0,F.jsx)(`div`,{className:`admin-loader-box`,children:(0,F.jsx)(`div`,{className:`pink-loader`})}):n?(0,F.jsxs)(`div`,{className:`stats-dashboard-layout`,children:[(0,F.jsxs)(`div`,{className:`stats-cards-grid`,children:[(0,F.jsxs)(`div`,{className:`stat-card glass-card`,children:[(0,F.jsx)(Oe,{size:28,className:`stat-icon pink`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{children:n.totalProducts}),(0,F.jsx)(`p`,{children:`Total Products`})]})]}),(0,F.jsxs)(`div`,{className:`stat-card glass-card`,children:[(0,F.jsx)(Ie,{size:28,className:`stat-icon blue`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{children:n.totalUsers}),(0,F.jsx)(`p`,{children:`Registered Customers`})]})]}),(0,F.jsxs)(`div`,{className:`stat-card glass-card`,children:[(0,F.jsx)(le,{size:28,className:`stat-icon purple`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{children:n.totalInquiries}),(0,F.jsx)(`p`,{children:`Customer Inquiries`})]})]}),(0,F.jsxs)(`div`,{className:`stat-card glass-card`,children:[(0,F.jsx)(ae,{size:28,className:`stat-icon green`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{children:n.totalOrders}),(0,F.jsx)(`p`,{children:`Simulated Orders`})]})]})]}),(0,F.jsxs)(`div`,{className:`low-stock-panel glass-card`,children:[(0,F.jsxs)(`div`,{className:`panel-header`,children:[(0,F.jsx)(Ne,{size:20,className:`alert-yellow-icon`}),(0,F.jsx)(`h3`,{children:`Low Inventory Alerts`})]}),(0,F.jsx)(`p`,{className:`panel-subtitle`,children:`Outfits with sizes that have 2 or fewer items remaining in stock.`}),n.lowStockProducts.length===0?(0,F.jsxs)(`div`,{className:`low-stock-empty`,children:[(0,F.jsx)(ae,{size:24,className:`green-check`}),(0,F.jsx)(`span`,{children:`All product sizes are adequately stocked!`})]}):(0,F.jsx)(`div`,{className:`low-stock-table-wrapper`,children:(0,F.jsxs)(`table`,{className:`stats-table`,children:[(0,F.jsx)(`thead`,{children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{children:`Product Name`}),(0,F.jsx)(`th`,{children:`Size Stocks`})]})}),(0,F.jsx)(`tbody`,{children:n.lowStockProducts.map(e=>(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{className:`font-semibold`,children:e.name}),(0,F.jsx)(`td`,{children:(0,F.jsx)(`div`,{className:`stock-badges-row`,children:e.sizes.map(e=>(0,F.jsxs)(`span`,{className:`stock-badge ${e.stock===0?`out-badge`:e.stock<=2?`low-badge`:`ok-badge`}`,children:[e.size,`: `,e.stock]},e.size))})})]},e._id))})]})})]})]}):(0,F.jsx)(`div`,{className:`admin-error-box glass-card`,children:`Failed to load statistics.`})}),e===`products`&&(0,F.jsxs)(`div`,{className:`admin-content-area`,children:[(0,F.jsxs)(`div`,{className:`admin-filters-bar glass-card`,children:[(0,F.jsxs)(`form`,{onSubmit:He,className:`admin-search-wrapper`,children:[(0,F.jsx)(we,{size:18,className:`search-icon`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`Search products by name...`,value:x,onChange:e=>S(e.target.value)}),(0,F.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-search-go`,children:`Go`})]}),(0,F.jsx)(`div`,{className:`admin-category-selector`,children:(0,F.jsxs)(`select`,{value:ee,onChange:e=>{w(1),te(e.target.value)},children:[(0,F.jsx)(`option`,{value:`All`,children:`All Categories`}),Ae.map(e=>(0,F.jsx)(`option`,{value:e,children:e},e))]})})]}),y?(0,F.jsx)(`div`,{className:`admin-loader-box`,children:(0,F.jsx)(`div`,{className:`pink-loader`})}):m.length===0?(0,F.jsxs)(`div`,{className:`empty-results-box glass-card`,children:[(0,F.jsx)(`h3`,{children:`No Inventory Found`}),(0,F.jsx)(`p`,{children:`We couldn't find any products matching your query.`})]}):(0,F.jsxs)(`div`,{className:`products-table-panel glass-card`,children:[(0,F.jsx)(`div`,{className:`table-responsive`,children:(0,F.jsxs)(`table`,{className:`inventory-table`,children:[(0,F.jsx)(`thead`,{children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{children:`Image`}),(0,F.jsx)(`th`,{children:`Name`}),(0,F.jsx)(`th`,{children:`Category`}),(0,F.jsx)(`th`,{children:`Price`}),(0,F.jsx)(`th`,{children:`Size Stocks`}),(0,F.jsx)(`th`,{children:`Actions`})]})}),(0,F.jsx)(`tbody`,{children:m.map(e=>(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{children:(0,F.jsx)(`img`,{src:e.image,alt:e.name,className:`table-thumb`})}),(0,F.jsx)(`td`,{children:(0,F.jsxs)(`div`,{className:`table-prod-info`,children:[(0,F.jsx)(`span`,{className:`prod-name-title`,children:e.name}),(0,F.jsxs)(`div`,{className:`prod-tags`,children:[e.isFeatured&&(0,F.jsx)(`span`,{className:`small-tag featured`,children:`Featured`}),e.isNewArrival&&(0,F.jsx)(`span`,{className:`small-tag new-arr`,children:`New`})]})]})}),(0,F.jsx)(`td`,{children:e.category}),(0,F.jsx)(`td`,{children:e.discountPrice?(0,F.jsxs)(`div`,{className:`table-price-col`,children:[(0,F.jsxs)(`span`,{className:`disc-price`,children:[`₹`,e.discountPrice]}),(0,F.jsxs)(`span`,{className:`orig-price-strike`,children:[`₹`,e.price]})]}):(0,F.jsxs)(`span`,{children:[`₹`,e.price]})}),(0,F.jsx)(`td`,{children:(0,F.jsx)(`div`,{className:`stock-badges-row`,children:e.sizes.map(e=>(0,F.jsxs)(`span`,{className:`stock-badge ${e.stock===0?`out-badge`:e.stock<=2?`low-badge`:`ok-badge`}`,children:[e.size,`: `,e.stock]},e.size))})}),(0,F.jsx)(`td`,{children:(0,F.jsxs)(`div`,{className:`table-actions-row`,children:[(0,F.jsx)(`button`,{className:`action-icon-btn edit`,onClick:()=>et(e),title:`Edit product`,children:(0,F.jsx)(je,{size:16})}),(0,F.jsx)(`button`,{className:`action-icon-btn delete`,onClick:()=>tt(e._id),title:`Delete product`,children:(0,F.jsx)(Me,{size:16})})]})})]},e._id))})]})}),g.totalPages>1&&(0,F.jsxs)(`div`,{className:`pagination-wrapper`,children:[(0,F.jsx)(`button`,{disabled:C<=1,onClick:()=>w(e=>e-1),className:`pagination-btn`,children:`Prev`}),(0,F.jsxs)(`span`,{className:`pagination-text`,children:[`Page `,g.currentPage,` of `,g.totalPages]}),(0,F.jsx)(`button`,{disabled:C>=g.totalPages,onClick:()=>w(e=>e+1),className:`pagination-btn`,children:`Next`})]})]})]}),e===`form`&&(0,F.jsx)(`div`,{className:`admin-content-area`,children:(0,F.jsxs)(`div`,{className:`form-container-card glass-card`,children:[(0,F.jsxs)(`div`,{className:`card-header`,children:[(0,F.jsx)(`h2`,{children:ne?`Edit Product: ${A.name}`:`Add New Clothing Product`}),(0,F.jsx)(`button`,{className:`edit-btn`,onClick:()=>t(`products`),children:`Cancel`})]}),oe&&(0,F.jsxs)(`div`,{className:`alert alert-success animate-fade-in`,children:[(0,F.jsx)(ae,{size:18}),` Product saved successfully! Redirecting...`]}),ie&&(0,F.jsxs)(`div`,{className:`alert alert-danger animate-fade-in`,children:[(0,F.jsx)(Ne,{size:18}),` `,ie]}),(0,F.jsxs)(`form`,{onSubmit:nt,className:`admin-input-form`,children:[(0,F.jsx)(`div`,{className:`form-fields-grid`,children:(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{children:`Product Name *`}),(0,F.jsx)(`input`,{type:`text`,name:`name`,value:A.name,onChange:We,placeholder:`e.g. Blossom Satin Midi Dress`,required:!0})]})}),(0,F.jsxs)(`div`,{className:`form-fields-grid`,children:[(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{children:`Category *`}),(0,F.jsx)(`select`,{name:`category`,value:A.category,onChange:We,children:Ae.map(e=>(0,F.jsx)(`option`,{value:e,children:e},e))})]}),(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{children:`Brand (Optional)`}),(0,F.jsx)(`input`,{type:`text`,name:`brand`,value:A.brand,onChange:We,placeholder:`e.g. Bhawna Closet Boutique`})]})]}),(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{children:`Description *`}),(0,F.jsx)(`textarea`,{name:`description`,rows:`4`,value:A.description,onChange:We,placeholder:`Provide details about fabrics, texture, styling inspiration, etc...`,required:!0})]}),(0,F.jsxs)(`div`,{className:`form-fields-grid`,children:[(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{children:`Original Price (INR) *`}),(0,F.jsx)(`input`,{type:`number`,name:`price`,value:A.price,onChange:We,placeholder:`e.g. 2999`,min:`0`,required:!0})]}),(0,F.jsxs)(`div`,{className:`form-group`,children:[(0,F.jsx)(`label`,{children:`Discount Price (INR, Optional)`}),(0,F.jsx)(`input`,{type:`number`,name:`discountPrice`,value:A.discountPrice,onChange:We,placeholder:`e.g. 2499`,min:`0`})]})]}),(0,F.jsxs)(`div`,{className:`sizes-stock-section`,children:[(0,F.jsx)(`h4`,{children:`Inventory Stock Levels (Sizes M to XXL) *`}),(0,F.jsx)(`p`,{className:`section-note`,children:`Specify item stocks for size configuration.`}),(0,F.jsx)(`div`,{className:`sizes-inputs-grid`,children:[`M`,`L`,`XL`,`XXL`].map(e=>(0,F.jsxs)(`div`,{className:`size-stock-input-box`,children:[(0,F.jsxs)(`label`,{children:[`Size `,e]}),(0,F.jsx)(`input`,{type:`number`,name:e,value:ue[e],onChange:Ge,min:`0`,required:!0})]},e))})]}),(0,F.jsxs)(`div`,{className:`colors-input-section`,children:[(0,F.jsx)(`h4`,{children:`Color & Linked Variants`}),(0,F.jsx)(`p`,{className:`section-note`,children:`Define this product's color and link it to other color versions of the same dress/cordset design.`}),(0,F.jsxs)(`div`,{className:`form-group`,style:{marginBottom:`1.25rem`},children:[(0,F.jsx)(`label`,{style:{fontWeight:600,fontSize:`0.85rem`,display:`block`,marginBottom:`0.35rem`},children:`Color Name of This Product`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`e.g. Blush Pink`,value:he,onChange:e=>ge(e.target.value),style:{width:`100%`,padding:`0.5rem`,borderRadius:`6px`,border:`1px solid var(--border-light)`}})]}),(0,F.jsxs)(`div`,{className:`variant-linking-box`,style:{background:`rgba(0,0,0,0.02)`,border:`1px dashed var(--border-light)`,padding:`1rem`,borderRadius:`8px`,marginBottom:`1.25rem`},children:[(0,F.jsx)(`h5`,{style:{margin:`0 0 0.5rem 0`,fontSize:`0.85rem`,fontWeight:600},children:`Link Another Product as a Color Variant`}),(0,F.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr auto`,gap:`0.75rem`,alignItems:`end`},children:[(0,F.jsxs)(`div`,{className:`form-group`,style:{margin:0},children:[(0,F.jsx)(`label`,{style:{fontSize:`0.72rem`,color:`var(--text-muted)`},children:`Select Product`}),(0,F.jsxs)(`select`,{value:ye,onChange:e=>be(e.target.value),style:{width:`100%`,height:`40px`,padding:`0.5rem`,borderRadius:`6px`,border:`1px solid var(--border-light)`,background:`#fff`,fontSize:`0.8rem`},children:[(0,F.jsx)(`option`,{value:``,children:`-- Choose Product --`}),pe.filter(e=>e._id!==re&&e.category===A.category).map(e=>(0,F.jsxs)(`option`,{value:e._id,children:[e.name,` (`,e.slug,`)`]},e._id))]})]}),(0,F.jsxs)(`div`,{className:`form-group`,style:{margin:0},children:[(0,F.jsx)(`label`,{style:{fontSize:`0.72rem`,color:`var(--text-muted)`},children:`Color Name of Variant`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`e.g. Pastel Green`,value:xe,onChange:e=>Ce(e.target.value),style:{height:`40px`,padding:`0.5rem`,borderRadius:`6px`,border:`1px solid var(--border-light)`}})]}),(0,F.jsx)(`button`,{type:`button`,className:`btn btn-outline`,onClick:Ke,style:{height:`40px`,padding:`0 1rem`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:`Link`})]})]}),_e.length>0&&(0,F.jsxs)(`div`,{className:`linked-variants-list`,style:{marginTop:`0.75rem`},children:[(0,F.jsx)(`label`,{style:{fontSize:`0.8rem`,fontWeight:600,display:`block`,marginBottom:`0.5rem`},children:`Linked Color Variants:`}),(0,F.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:_e.map((e,t)=>{let n=pe.find(t=>t._id===e.product);return(0,F.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,background:`#f8f9fa`,padding:`0.5rem 0.75rem`,borderRadius:`6px`,fontSize:`0.8rem`,border:`1px solid #e9ecef`},children:[(0,F.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[n&&n.image&&(0,F.jsx)(`img`,{src:n.image,style:{width:`20px`,height:`20px`,objectFit:`cover`,borderRadius:`4px`},alt:``}),(0,F.jsx)(`strong`,{children:e.colorName}),` → `,n?n.name:`Unknown Product`]}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>qe(t),style:{background:`none`,border:`none`,color:`#dc3545`,cursor:`pointer`,display:`flex`,alignItems:`center`,padding:`2px`},children:(0,F.jsx)(ze,{size:14})})]},t)})})]})]}),(0,F.jsxs)(`div`,{className:`form-toggles-row`,children:[(0,F.jsxs)(`label`,{className:`checkbox-label`,children:[(0,F.jsx)(`input`,{type:`checkbox`,name:`isFeatured`,checked:A.isFeatured,onChange:We}),(0,F.jsx)(`span`,{children:`Featured Product`})]}),(0,F.jsxs)(`label`,{className:`checkbox-label`,children:[(0,F.jsx)(`input`,{type:`checkbox`,name:`isNewArrival`,checked:A.isNewArrival,onChange:We}),(0,F.jsx)(`span`,{children:`New Arrival`})]})]}),(0,F.jsxs)(`div`,{className:`images-uploader-section`,children:[(0,F.jsx)(`h4`,{children:`Product Images (Max 4) *`}),(0,F.jsx)(`p`,{className:`section-note`,children:`Choose files to upload. Accepted formats: JPG, PNG, WEBP. Drag images to rearrange their display order.`}),(0,F.jsxs)(`div`,{className:`uploader-picker-row`,children:[(0,F.jsxs)(`label`,{className:`picker-btn btn btn-outline`,children:[(0,F.jsx)(Pe,{size:16}),` Choose Images`,(0,F.jsx)(`input`,{type:`file`,accept:`image/*`,multiple:!0,onChange:Je,disabled:Te.length>=4,style:{display:`none`}})]}),(0,F.jsxs)(`span`,{className:`total-images-counter`,children:[`Selected: `,Te.length,` of 4`]})]}),Te.length>0&&(0,F.jsx)(`div`,{className:`form-previews-grid`,children:Te.map((e,t)=>(0,F.jsxs)(`div`,{className:`form-preview-card glass-card ${De===t?`dragging`:``}`,draggable:!0,onDragStart:e=>Xe(e,t),onDragOver:e=>Ze(e,t),onDragEnd:Qe,title:`Drag to reorder`,children:[(0,F.jsx)(`img`,{src:e.url,alt:`product preview`,className:`preview-img`}),(0,F.jsx)(`span`,{className:`preview-label ${e.type===`existing`?`existing`:`local`}`,children:e.type===`existing`?`Cloud`:`Local`}),(0,F.jsx)(`button`,{type:`button`,className:`remove-preview-btn`,onClick:()=>Ye(e),children:(0,F.jsx)(ze,{size:16})})]},e.id))})]}),(0,F.jsx)(`div`,{className:`form-submit-row`,children:(0,F.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-form-submit`,disabled:O,children:O?`Uploading to Cloudinary...`:`Save Product Details`})})]})]})}),e===`orders`&&(0,F.jsx)(`div`,{className:`admin-content-area animate-fade-in`,children:(0,F.jsxs)(`div`,{className:`orders-dashboard-panel glass-card`,children:[(0,F.jsxs)(`div`,{className:`panel-header-row`,children:[(0,F.jsx)(`h2`,{children:`Customer Orders`}),(0,F.jsxs)(`div`,{className:`orders-filters-controls`,children:[(0,F.jsxs)(`div`,{className:`admin-search-wrapper`,style:{maxWidth:`280px`,position:`relative`},children:[(0,F.jsx)(we,{size:18,className:`search-icon-field`,style:{position:`absolute`,left:`12px`,top:`50%`,transform:`translateY(-50%)`,color:`var(--text-muted)`}}),(0,F.jsx)(`input`,{type:`text`,placeholder:`Search Order ID or Name...`,value:u,onChange:e=>d(e.target.value),style:{paddingLeft:`2.5rem`,width:`100%`}})]}),(0,F.jsxs)(`select`,{value:f,onChange:e=>p(e.target.value),className:`orders-status-select`,children:[(0,F.jsx)(`option`,{value:`All`,children:`All Statuses`}),(0,F.jsx)(`option`,{value:`Pending`,children:`Pending`}),(0,F.jsx)(`option`,{value:`Accepted`,children:`Accepted`}),(0,F.jsx)(`option`,{value:`Rejected`,children:`Rejected`}),(0,F.jsx)(`option`,{value:`Processing`,children:`Processing`}),(0,F.jsx)(`option`,{value:`Shipped`,children:`Shipped`}),(0,F.jsx)(`option`,{value:`Delivered`,children:`Delivered`}),(0,F.jsx)(`option`,{value:`Cancelled`,children:`Cancelled`})]})]})]}),c?(0,F.jsx)(`div`,{className:`admin-loader-box`,children:(0,F.jsx)(`div`,{className:`pink-loader`})}):rt.length===0?(0,F.jsxs)(`div`,{className:`empty-results-box`,style:{padding:`3rem`,textAlign:`center`},children:[(0,F.jsx)(`h3`,{children:`No Orders Found`}),(0,F.jsx)(`p`,{children:`No customer orders match your search filters.`})]}):(0,F.jsx)(`div`,{className:`orders-list-table-wrapper`,style:{overflowX:`auto`},children:(0,F.jsxs)(`table`,{className:`stats-table`,children:[(0,F.jsx)(`thead`,{children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{children:`Order ID`}),(0,F.jsx)(`th`,{children:`Customer`}),(0,F.jsx)(`th`,{children:`Products Ordered`}),(0,F.jsx)(`th`,{children:`Amount`}),(0,F.jsx)(`th`,{children:`Payment`}),(0,F.jsx)(`th`,{children:`Address`}),(0,F.jsx)(`th`,{children:`Status`}),(0,F.jsx)(`th`,{children:`Actions`})]})}),(0,F.jsx)(`tbody`,{children:rt.map(e=>{if(!e)return null;let t=e.userId&&e.userId.name?e.userId.name:`Guest User`,n=e.userId&&e.userId.email?e.userId.email:`N/A`;return(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{children:(0,F.jsx)(`code`,{className:`order-id-code`,title:e._id,children:e._id?e._id.substring(e._id.length-8):`N/A`})}),(0,F.jsx)(`td`,{children:(0,F.jsxs)(`div`,{className:`customer-info-col`,children:[(0,F.jsx)(`strong`,{style:{display:`block`,color:`var(--dark-charcoal)`},children:t}),(0,F.jsx)(`span`,{style:{fontSize:`0.8rem`,color:`var(--text-muted)`},children:n})]})}),(0,F.jsx)(`td`,{children:(0,F.jsx)(`div`,{className:`order-items-col`,style:{display:`flex`,flexDirection:`column`,gap:`0.25rem`},children:(e.items||[]).map((e,t)=>(0,F.jsxs)(`div`,{className:`order-item-list-row`,style:{fontSize:`0.85rem`,display:`flex`,gap:`0.5rem`},children:[(0,F.jsxs)(`span`,{style:{color:`var(--text-muted)`},children:[e.productId?e.productId.name:`Unknown Product`,` (`,e.size,`)`]}),(0,F.jsxs)(`strong`,{style:{color:`var(--dark-charcoal)`},children:[`x`,e.quantity]})]},t))})}),(0,F.jsx)(`td`,{className:`font-bold pink-text`,style:{fontWeight:`700`,color:`var(--primary-pink-dark)`},children:new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(e.totalAmount||0)}),(0,F.jsx)(`td`,{children:(0,F.jsxs)(`div`,{className:`payment-info-col`,style:{display:`flex`,flexDirection:`column`,gap:`0.2rem`},children:[(0,F.jsx)(`span`,{className:`payment-method-badge`,style:{fontSize:`0.75rem`,fontWeight:`700`,color:`var(--dark-charcoal)`},children:e.paymentMethod||`COD`}),(0,F.jsx)(`span`,{className:`payment-status-badge ${(e.paymentStatus||`Unpaid`).toLowerCase()===`paid`?`paid`:`unpaid`}`,style:{fontSize:`0.7rem`,fontWeight:`600`,color:(e.paymentStatus||`Unpaid`).toLowerCase()===`paid`?`#28a745`:`#dc3545`},children:e.paymentStatus||`Unpaid`})]})}),(0,F.jsx)(`td`,{children:(0,F.jsx)(`div`,{className:`address-text-col`,title:e.shippingAddress,style:{fontSize:`0.8rem`,color:`var(--text-muted)`,maxWidth:`160px`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e.shippingAddress||`N/A`})}),(0,F.jsx)(`td`,{children:(0,F.jsx)(`span`,{className:`order-status-badge badge-${(e.status||`Pending`).toLowerCase()}`,children:e.status||`Pending`})}),(0,F.jsx)(`td`,{children:(0,F.jsxs)(`div`,{className:`order-actions-buttons-row`,style:{display:`flex`,gap:`0.5rem`,flexWrap:`wrap`},children:[e.status===`Pending`&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`button`,{className:`order-btn-accept`,onClick:()=>Ve(e._id,`Accepted`),children:`Accept`}),(0,F.jsx)(`button`,{className:`order-btn-reject`,onClick:()=>Ve(e._id,`Rejected`),children:`Reject`})]}),e.status===`Accepted`&&(0,F.jsx)(`button`,{className:`order-btn-ship`,onClick:()=>Ve(e._id,`Shipped`),children:`Ship Order`}),e.status===`Shipped`&&(0,F.jsx)(`button`,{className:`order-btn-deliver`,onClick:()=>Ve(e._id,`Delivered`),children:`Deliver Order`}),[`Online`,`Partial COD`].includes(e.paymentMethod)&&[`Paid`,`Partially Paid`].includes(e.paymentStatus)&&![`Cancelled`,`Rejected`].includes(e.status)&&(0,F.jsx)(`button`,{className:`order-btn-reject`,onClick:()=>P(e._id),style:{backgroundColor:`#dc3545`,color:`#fff`,border:`none`,padding:`0.25rem 0.5rem`,borderRadius:`4px`,cursor:`pointer`,fontSize:`0.75rem`,fontWeight:`bold`},children:`Refund & Cancel`}),[`Rejected`,`Cancelled`,`Delivered`].includes(e.status)&&(0,F.jsx)(`span`,{style:{fontSize:`0.8rem`,color:`var(--text-muted)`},children:`Completed`})]})})]},e._id||Math.random())})})]})})]})}),e===`stories`&&(0,F.jsx)(`div`,{className:`admin-content-area animate-fade-in`,children:(0,F.jsx)(yt,{})}),e===`banners`&&(0,F.jsx)(`div`,{className:`admin-content-area animate-fade-in`,children:(0,F.jsx)(bt,{})})]}),(0,F.jsx)(`style`,{children:`
        /* Order status badges */
        .order-status-badge {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .badge-pending { background: #fff3cd; color: #856404; border: 1px solid #ffeeba; }
        .badge-accepted { background: #d1ecf1; color: #0c5460; border: 1px solid #bee5eb; }
        .badge-rejected { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        .badge-processing { background: #e2e3e5; color: #383d41; border: 1px solid #d6d8db; }
        .badge-shipped { background: #cce5ff; color: #004085; border: 1px solid #b8daff; }
        .badge-delivered { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .badge-cancelled { background: #e2e3e5; color: #383d41; border: 1px solid #d6d8db; }

        /* Order buttons */
        .order-btn-accept {
          background: #28a745;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
        }
        .order-btn-accept:hover { background: #218838; }
        .order-btn-reject {
          background: #dc3545;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
        }
        .order-btn-reject:hover { background: #c82333; }
        .order-btn-ship {
          background: #007bff;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
        }
        .order-btn-ship:hover { background: #0069d9; }
        .order-btn-deliver {
          background: #28a745;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
        }
        .order-btn-deliver:hover { background: #218838; }

        .panel-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .panel-header-row h2 {
          font-size: 1.5rem;
          color: var(--dark-charcoal);
          margin: 0;
        }
        .orders-filters-controls {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .orders-status-select {
          font-family: var(--font-sans);
          padding: 0.65rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          outline: none;
          font-size: 0.85rem;
          background: var(--cream-white);
          cursor: pointer;
        }

        .admin-banner {
          background: linear-gradient(135deg, var(--dark-charcoal) 0%, #2b303b 100%);
          padding: 3rem;
          border-radius: 16px;
          color: var(--pure-white);
          margin-bottom: 2rem;
        }
        .admin-banner h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--pure-white);
        }
        .admin-banner p {
          font-size: 1.05rem;
          color: #adb5bd;
          margin-bottom: 2rem;
        }
        .admin-nav-tabs {
          display: flex;
          gap: 1rem;
          border-top: 1px solid #495057;
          padding-top: 1.5rem;
          align-items: center;
          flex-wrap: wrap;
        }
        .admin-tab-btn {
          padding: 0.65rem 1.25rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: #ced4da;
          border-radius: 8px;
        }
        .admin-tab-btn:hover {
          color: var(--pure-white);
          background: rgba(255,255,255,0.05);
        }
        .admin-tab-btn.active {
          background: var(--primary-pink);
          color: var(--pure-white);
        }
        .admin-add-btn {
          margin-left: auto;
          padding: 0.65rem 1.25rem;
          font-size: 0.85rem;
        }
        
        /* Stats Dashboard Overview */
        .stats-dashboard-layout {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .stats-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        .stat-card {
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: var(--pure-white);
        }
        .stat-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .stat-icon.pink { background: var(--soft-pink); color: var(--primary-pink); }
        .stat-icon.blue { background: #e3f2fd; color: #1e88e5; }
        .stat-icon.purple { background: #f3e5f5; color: #8e24aa; }
        .stat-icon.green { background: #e8f5e9; color: #43a047; }
        
        .stat-card h3 {
          font-family: var(--font-sans);
          font-size: 1.8rem;
          line-height: 1.1;
          color: var(--dark-charcoal);
          margin-bottom: 0.15rem;
        }
        .stat-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0;
        }
        
        .low-stock-panel {
          padding: 2.5rem;
          background: var(--pure-white);
        }
        .panel-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.25rem;
        }
        .panel-header h3 {
          font-family: var(--font-sans);
          font-size: 1.3rem;
          color: var(--dark-charcoal);
        }
        .alert-yellow-icon {
          color: #ffc107;
        }
        .panel-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        
        .low-stock-empty {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #e2f0d9;
          color: #385723;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .low-stock-table-wrapper {
          overflow-x: auto;
        }
        .stats-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .stats-table th {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          padding: 0.75rem 1rem;
          border-bottom: 2px solid var(--border-light);
        }
        .stats-table td {
          padding: 1rem;
          border-bottom: 1px solid var(--border-light);
          font-size: 0.9rem;
        }
        .font-semibold {
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        
        /* Stock Badges */
        .stock-badges-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .stock-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        .stock-badge.out-badge { background: #f8d7da; color: #721c24; }
        .stock-badge.low-badge { background: #fff3cd; color: #856404; }
        .stock-badge.ok-badge { background: #e9ecef; color: #495057; }
        
        .sku-code {
          background: var(--light-pink);
          color: var(--primary-pink-dark);
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        /* Product Listing Subtab */
        .admin-filters-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2rem;
          margin-bottom: 2rem;
          background: var(--pure-white);
          gap: 1.5rem;
        }
        .admin-search-wrapper {
          display: flex;
          align-items: center;
          position: relative;
          flex-grow: 1;
          max-width: 480px;
        }
        .admin-search-wrapper .search-icon {
          position: absolute;
          left: 12px;
          color: var(--text-muted);
        }
        .admin-search-wrapper input {
          font-family: var(--font-sans);
          width: 100%;
          padding: 0.65rem 1rem 0.65rem 2.5rem;
          border-radius: 8px 0 0 8px;
          border: 1px solid var(--border-light);
          outline: none;
          font-size: 0.85rem;
        }
        .admin-search-wrapper input:focus {
          border-color: var(--primary-pink);
        }
        .btn-search-go {
          padding: 0.65rem 1.25rem;
          border-radius: 0 8px 8px 0;
          font-size: 0.85rem;
        }
        .admin-category-selector select {
          font-family: var(--font-sans);
          padding: 0.65rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          outline: none;
          font-size: 0.85rem;
          cursor: pointer;
          background: var(--pure-white);
        }
        
        .products-table-panel {
          padding: 2rem;
          background: var(--pure-white);
        }
        .table-responsive {
          overflow-x: auto;
        }
        .inventory-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .inventory-table th {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--text-muted);
          padding: 1rem;
          border-bottom: 2px solid var(--border-light);
          letter-spacing: 0.05em;
        }
        .inventory-table td {
          padding: 1rem;
          border-bottom: 1px solid var(--border-light);
          vertical-align: middle;
          font-size: 0.9rem;
        }
        
        .table-thumb {
          width: 48px;
          height: 60px;
          object-fit: cover;
          border-radius: 4px;
          background: var(--light-pink);
        }
        .table-prod-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .prod-name-title {
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .prod-tags {
          display: flex;
          gap: 0.35rem;
        }
        .small-tag {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .small-tag.featured { background: #e3f2fd; color: #1565c0; }
        .small-tag.new-arr { background: var(--soft-pink); color: var(--primary-pink-dark); }
        
        .table-price-col {
          display: flex;
          flex-direction: column;
        }
        .disc-price { font-weight: 700; color: var(--primary-pink-dark); }
        .orig-price-strike { font-size: 0.75rem; text-decoration: line-through; color: var(--text-muted); }
        
        .table-actions-row {
          display: flex;
          gap: 0.5rem;
        }
        .action-icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-light);
        }
        .action-icon-btn.edit { color: #007bff; }
        .action-icon-btn.edit:hover { background: #e6f2ff; border-color: #007bff; }
        .action-icon-btn.delete { color: #dc3545; }
        .action-icon-btn.delete:hover { background: #ffebe9; border-color: #dc3545; }
        
        /* Pagination */
        .pagination-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;
        }
        .pagination-btn {
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid var(--border-light);
          border-radius: 6px;
        }
        .pagination-btn:hover:not(:disabled) {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
        }
        .pagination-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .pagination-text {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        
        /* Add/Edit Form styling */
        .form-container-card {
          padding: 3rem;
          background: var(--pure-white);
        }
        .admin-input-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-fields-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .admin-input-form .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .admin-input-form label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
        }
        .admin-input-form input[type="text"],
        .admin-input-form input[type="number"],
        .admin-input-form textarea,
        .admin-input-form select {
          font-family: var(--font-sans);
          padding: 0.8rem 1rem;
          border: 1px solid var(--border-light);
          border-radius: 10px;
          outline: none;
          font-size: 0.9rem;
          background: var(--cream-white);
        }
        .admin-input-form input:focus,
        .admin-input-form textarea:focus,
        .admin-input-form select:focus {
          border-color: var(--primary-pink);
          background: var(--pure-white);
          box-shadow: 0 0 0 3px rgba(240, 84, 138, 0.1);
        }
        
        .section-note {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
          margin-top: -0.25rem;
        }
        
        /* Size stocks list */
        .sizes-stock-section {
          border-top: 1px dashed var(--border-light);
          padding-top: 1.5rem;
        }
        .sizes-stock-section h4, .colors-input-section h4, .images-uploader-section h4 {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.25rem;
        }
        .sizes-inputs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .size-stock-input-box {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        
        /* Colors configuration */
        .colors-input-section {
          border-top: 1px dashed var(--border-light);
          padding-top: 1.5rem;
        }
        .colors-adder-row {
          display: flex;
          gap: 0.75rem;
          max-width: 320px;
        }
        .colors-adder-row input {
          flex-grow: 1;
        }
        .colors-chips-list {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: 0.75rem;
        }
        .color-chip {
          background: var(--light-pink);
          color: var(--primary-pink-dark);
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border: 1px solid var(--border-pink);
        }
        .color-chip button {
          color: var(--primary-pink);
          display: flex;
          align-items: center;
        }
        
        /* Toggles */
        .form-toggles-row {
          display: flex;
          gap: 2rem;
          border-top: 1px dashed var(--border-light);
          padding-top: 1.5rem;
        }
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          cursor: pointer;
        }
        .checkbox-label input {
          width: 18px;
          height: 18px;
          accent-color: var(--primary-pink);
        }
        
        /* Image Uploader */
        .images-uploader-section {
          border-top: 1px dashed var(--border-light);
          padding-top: 1.5rem;
        }
        .uploader-picker-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .picker-btn {
          cursor: pointer;
          gap: 0.5rem;
          border-radius: 8px;
          padding: 0.65rem 1.25rem;
          font-size: 0.85rem;
        }
        .total-images-counter {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-muted);
        }
        .form-previews-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin-top: 1.5rem;
        }
        .form-preview-card {
          position: relative;
          height: 140px;
          overflow: hidden;
          background: var(--light-pink);
          cursor: move;
          transition: transform 0.15s ease, opacity 0.15s ease;
          user-select: none;
        }
        .form-preview-card.dragging {
          opacity: 0.5;
          transform: scale(0.95);
          border: 2px dashed var(--primary-pink) !important;
        }
        .preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .preview-label {
          position: absolute;
          bottom: 8px;
          left: 8px;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
        }
        .preview-label.existing { background: #343a40; color: #fff; }
        .preview-label.local { background: var(--primary-pink); color: #fff; }
        
        .remove-preview-btn {
          position: absolute;
          top: 6px;
          right: 6px;
          background: rgba(255,255,255,0.8);
          color: #dc3545;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .remove-preview-btn:hover {
          background: #dc3545;
          color: #fff;
        }
        
        .form-submit-row {
          border-top: 1px dashed var(--border-light);
          padding-top: 2rem;
          margin-top: 1rem;
        }
        .btn-form-submit {
          padding: 0.95rem 2.5rem;
          border-radius: 12px;
          font-size: 1rem;
        }
        
        .admin-loader-box {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4rem 0;
        }
        .admin-error-box {
          padding: 2rem;
          text-align: center;
          color: #dc3545;
        }
        
        @media (max-width: 768px) {
          .form-fields-grid, .sizes-inputs-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .form-previews-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .admin-banner {
            padding: 2rem 1.5rem;
          }
          .form-container-card {
            padding: 1.5rem;
          }
        }
      `})]})}function St({onLoginSuccess:e}){let{loginAdmin:t}=qe(),[n,r]=(0,_.useState)({email:``,password:``}),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(``),c=e=>{let{name:t,value:n}=e.target;r(e=>({...e,[t]:n}))};return(0,F.jsxs)(`div`,{className:`admin-login-card glass-card animate-fade-in`,children:[(0,F.jsxs)(`div`,{className:`admin-login-header`,children:[(0,F.jsx)(De,{size:36,className:`admin-shield-icon`}),(0,F.jsx)(`h2`,{children:`Admin Authentication`}),(0,F.jsx)(`p`,{children:`Bhawna Closet staff login only. Please provide your admin access credentials.`})]}),o&&(0,F.jsxs)(`div`,{className:`error-alert`,children:[(0,F.jsx)(Ne,{size:18}),(0,F.jsx)(`span`,{children:o})]}),(0,F.jsxs)(`form`,{onSubmit:async r=>{if(r.preventDefault(),!n.email||!n.password){s(`Please enter email and password`);return}a(!0),s(``);try{await t(n.email,n.password),e&&e()}catch(e){s(e.message||`Invalid admin credentials`)}finally{a(!1)}},className:`auth-form`,children:[(0,F.jsxs)(`div`,{className:`form-field`,children:[(0,F.jsx)(`label`,{htmlFor:`admin-email`,children:`Admin Email`}),(0,F.jsxs)(`div`,{className:`input-wrapper`,children:[(0,F.jsx)(ge,{size:18,className:`input-icon`}),(0,F.jsx)(`input`,{id:`admin-email`,type:`email`,name:`email`,value:n.email,onChange:c,placeholder:`admin@bhawnacloset.com`,required:!0})]})]}),(0,F.jsxs)(`div`,{className:`form-field`,children:[(0,F.jsx)(`label`,{htmlFor:`admin-password`,children:`Password`}),(0,F.jsxs)(`div`,{className:`input-wrapper`,children:[(0,F.jsx)(me,{size:18,className:`input-icon`}),(0,F.jsx)(`input`,{id:`admin-password`,type:`password`,name:`password`,value:n.password,onChange:c,placeholder:`••••••••`,required:!0})]})]}),(0,F.jsxs)(`button`,{type:`submit`,className:`btn btn-primary btn-auth-submit`,disabled:i,children:[i?`Authenticating...`:`Enter Admin Panel`,` `,(0,F.jsx)(E,{size:18})]})]}),(0,F.jsx)(`style`,{children:`
        .admin-login-card {
          max-width: 460px;
          margin: 6rem auto;
          padding: 3rem;
          background: var(--dark-charcoal);
          color: var(--pure-white);
          border: 1px solid #343a40;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .admin-login-header {
          text-align: center;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .admin-shield-icon {
          color: var(--primary-pink);
          margin-bottom: 0.25rem;
        }
        .admin-login-header h2 {
          font-size: 2rem;
          color: var(--pure-white);
          margin: 0;
        }
        .admin-login-header p {
          font-size: 0.85rem;
          color: #adb5bd;
          line-height: 1.5;
        }
        
        .error-alert {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #3a2223;
          color: #f8d7da;
          padding: 0.85rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid #4a1d1e;
          margin-bottom: 1.5rem;
        }
        
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-field label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #ced4da;
        }
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 12px;
          color: #adb5bd;
        }
        .input-wrapper input {
          font-family: var(--font-sans);
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.5rem;
          border: 1px solid #495057;
          border-radius: 10px;
          outline: none;
          font-size: 0.9rem;
          background: #212529;
          color: var(--pure-white);
          transition: all var(--transition-fast);
        }
        .input-wrapper input:focus {
          border-color: var(--primary-pink);
          box-shadow: 0 0 0 3px rgba(240, 84, 138, 0.2);
          background: #1a1e24;
        }
        
        .btn-auth-submit {
          width: 100%;
          padding: 0.85rem;
          border-radius: 10px;
          margin-top: 0.5rem;
        }
        
        @media (max-width: 576px) {
          .admin-login-card {
            padding: 2rem 1.5rem;
            margin: 3rem auto;
          }
        }
      `})]})}var Ct=({size:e=20,className:t=``})=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:t,children:[(0,F.jsx)(`rect`,{width:`20`,height:`20`,x:`2`,y:`2`,rx:`5`,ry:`5`}),(0,F.jsx)(`path`,{d:`M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`}),(0,F.jsx)(`line`,{x1:`17.5`,x2:`17.51`,y1:`6.5`,y2:`6.5`})]});function wt(){let{admin:e}=qe(),[t,n]=(0,_.useState)(`home`),[r,i]=(0,_.useState)(!0);(0,_.useEffect)(()=>{let e=()=>{let e=window.location.hash.replace(`#`,``);[`home`,`collections`,`contact`,`admin`,`cart`,`wishlist`,`profile`,`login`,`signup`].includes(e)&&(n(e),window.scrollTo({top:0,behavior:`smooth`}))};return e(),window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)},[]);let[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)([]),[l,u]=(0,_.useState)([]),[d,f]=(0,_.useState)(`All`),[p,m]=(0,_.useState)(``),[h,g]=(0,_.useState)(`newest`),[v,y]=(0,_.useState)(1),[b,x]=(0,_.useState)(1);(0,_.useEffect)(()=>{(async()=>{try{c((await ct.getProducts({page:1,limit:10,sort:`newest`,isNewArrival:!0,groupVariants:!0})).products||[])}catch(e){console.error(`Error fetching home page products:`,e)}})()},[]);let[S,C]=(0,_.useState)([]),[w,ee]=(0,_.useState)([]);(0,_.useEffect)(()=>{t===`home`&&(async()=>{try{C(await I.getStories()||[])}catch(e){console.error(`Error fetching stories:`,e)}try{ee(await lt.getBanners()||[])}catch(e){console.error(`Error fetching banners:`,e)}})()},[t]),(0,_.useEffect)(()=>{t===`collections`&&(async()=>{i(!0);try{let e=await ct.getProducts({page:v,limit:8,category:d,search:p,sort:h,groupVariants:!0});u(e.products||[]),x(e.pagination?.totalPages||1)}catch(e){console.error(`Error fetching shop products:`,e)}finally{i(!1)}})()},[t,d,p,h,v]);let te=e=>{f(e),m(``),y(1),n(`collections`),window.scrollTo({top:0,behavior:`smooth`})},ne=()=>{f(`All`),m(``),y(1),n(`collections`)},T=e=>{o(e.slug),n(`product-detail`),window.scrollTo({top:0,behavior:`smooth`})},re=e=>{o(e),n(`product-detail`),window.scrollTo({top:0,behavior:`smooth`})},ie=()=>{f(`All`),y(1),n(`collections`)};return(0,F.jsxs)(`div`,{className:`app-wrapper`,children:[(0,F.jsx)(nt,{activeTab:t,setActiveTab:n}),t===`home`&&(0,F.jsxs)(`main`,{className:`home-view animate-fade-in`,children:[(0,F.jsx)(it,{newArrivals:s,stories:S,banners:w,onExploreClick:ne,onSelectProduct:T}),(0,F.jsx)(`section`,{className:`section categories-section`,children:(0,F.jsxs)(`div`,{className:`container`,children:[(0,F.jsxs)(`div`,{className:`section-header`,children:[(0,F.jsx)(`h2`,{children:`Our Curated Collections`}),(0,F.jsx)(`p`,{children:`Explore girls' styles designed for comfort, trend-alignment, and absolute confidence.`})]}),(0,F.jsx)(`div`,{className:`categories-grid`,children:[{name:`Cordsets`,title:`Cordsets Collection`,desc:`Perfect matching sets for effortless styling.`,img:`https://res.cloudinary.com/jbhylwfb/image/upload/v1782904627/bhawna_closet_products/xe17qrmuztgeb3afmyil.jpg`},{name:`Dresses`,title:`Dresses Collection`,desc:`Flowy, elegant dresses for every occasion.`,img:`https://res.cloudinary.com/jbhylwfb/image/upload/v1782921971/bhawna_closet_products/f6c6ykyn8wgxvfa4xtsn.jpg`},{name:`Tops & Shirts`,title:`Tops & Shirts Collection`,desc:`Classic silhouettes blended with modern flair.`,img:`https://res.cloudinary.com/jbhylwfb/image/upload/v1782924572/bhawna_closet_products/cmjsodena4ei2zmim00r.jpg`},{name:`Bottoms`,title:`Bottoms Collection`,desc:`Tailored trousers, skirts, and relaxed fits.`,img:`https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop`}].map(e=>(0,F.jsxs)(`div`,{className:`category-card`,onClick:()=>te(e.name),children:[(0,F.jsx)(`img`,{src:e.img,alt:e.title,className:`category-card-img`}),(0,F.jsxs)(`div`,{className:`category-card-overlay`,children:[(0,F.jsx)(`h3`,{children:e.title}),(0,F.jsx)(`p`,{children:e.desc}),(0,F.jsxs)(`button`,{className:`category-card-btn`,children:[`View Collection `,(0,F.jsx)(E,{size:14})]})]})]},e.name))})]})}),(0,F.jsx)(`section`,{id:`about-brand`,className:`section about-brand-section`,children:(0,F.jsxs)(`div`,{className:`container about-container`,children:[(0,F.jsx)(`div`,{className:`about-image-side`,children:(0,F.jsx)(`img`,{src:`https://res.cloudinary.com/jbhylwfb/image/upload/v1782904627/bhawna_closet_products/xe17qrmuztgeb3afmyil.jpg`,alt:`Bhawna Closet Boutique Collection`,className:`about-image`})}),(0,F.jsxs)(`div`,{className:`about-text-side`,children:[(0,F.jsx)(`span`,{className:`brand-accent-tag`,children:`ESTD. 2026`}),(0,F.jsx)(`h2`,{children:`Elegant. Trendy. Confidence.`}),(0,F.jsxs)(`p`,{children:[`At `,(0,F.jsx)(`strong`,{children:`Bhawna Closet`}),`, we believe that clothes are not just garments—they are expressions of confidence. Curated specifically for girls who appreciate style, grace, and premium fabrics, our collections are handpicked to provide the perfect fit for your lifestyle.`]}),(0,F.jsx)(`p`,{children:`Whether you are stepping into a business lunch with a sharp pink blazer-set, going for a picnic in our flowy pastel Sakura midi dress, or enjoying a brunch in our comfortable cordsets, we have you covered.`}),(0,F.jsxs)(`div`,{className:`about-store-badges`,children:[(0,F.jsxs)(`div`,{className:`store-badge-card glass-card`,children:[(0,F.jsx)(_e,{size:20,className:`badge-pink-icon`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h5`,{children:`Physical Boutique`}),(0,F.jsx)(`p`,{children:`M3M Urbana Sector 67, Gurgaon`})]})]}),(0,F.jsxs)(`div`,{className:`store-badge-card glass-card`,children:[(0,F.jsx)(Ct,{size:20,className:`badge-pink-icon`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h5`,{children:`Socially Active`}),(0,F.jsx)(`p`,{children:`@bhawna_closet123`})]})]})]})]})]})})]}),t===`collections`&&(0,F.jsx)(`main`,{className:`collections-view section animate-fade-in`,children:(0,F.jsxs)(`div`,{className:`container`,children:[(0,F.jsxs)(`div`,{className:`collections-banner glass-card`,children:[(0,F.jsx)(`h1`,{children:`Shop Our Collections`}),(0,F.jsx)(`p`,{children:`Explore fashion-forward garments curated in our signature pink & white colors.`})]}),(0,F.jsxs)(`div`,{className:`filters-row glass-card`,children:[(0,F.jsxs)(`div`,{className:`filter-group`,children:[(0,F.jsx)(ke,{size:18,className:`filter-icon`}),(0,F.jsx)(`div`,{className:`filter-tabs`,children:[`All`,`Cordsets`,`Dresses`,`Tops & Shirts`,`Bottoms`].map(e=>(0,F.jsx)(`button`,{className:`filter-tab-btn ${d===e?`active`:``}`,onClick:()=>{f(e),m(``),y(1)},children:e},e))})]}),(0,F.jsxs)(`div`,{className:`search-bar-wrapper`,children:[(0,F.jsx)(we,{size:18,className:`search-input-icon`}),(0,F.jsx)(`input`,{type:`text`,placeholder:`Search outfits...`,value:p,onChange:e=>{m(e.target.value),y(1)}}),p&&(0,F.jsx)(`button`,{type:`button`,className:`clear-search-btn`,onClick:()=>{m(``),y(1)},title:`Clear search`,children:`×`})]}),(0,F.jsx)(`div`,{className:`sort-wrapper`,children:(0,F.jsxs)(`select`,{value:h,onChange:e=>{g(e.target.value),y(1)},children:[(0,F.jsx)(`option`,{value:`newest`,children:`Newest First`}),(0,F.jsx)(`option`,{value:`price-asc`,children:`Price: Low to High`}),(0,F.jsx)(`option`,{value:`price-desc`,children:`Price: High to Low`})]})})]}),r?(0,F.jsx)(`div`,{className:`loader-container`,children:(0,F.jsx)(`div`,{className:`pink-loader`})}):l.length===0?(0,F.jsxs)(`div`,{className:`empty-results-box glass-card`,children:[(0,F.jsx)(`h3`,{children:`No Outfits Found`}),(0,F.jsxs)(`p`,{children:[`We couldn't find any products matching `,(0,F.jsxs)(`strong`,{children:[`"`,p||d,`"`]}),`. Click below to view all outfits.`]}),(0,F.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>{f(`All`),m(``),y(1)},children:`Clear Search & View All`})]}):(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`p`,{className:`results-count`,children:[`Showing page `,v,` of `,b]}),(0,F.jsx)(`div`,{className:`products-grid`,children:l.map(e=>(0,F.jsx)(at,{product:e,onSelectProduct:T},e._id))}),b>1&&(0,F.jsxs)(`div`,{className:`pagination-controls`,children:[(0,F.jsx)(`button`,{className:`pagination-btn`,onClick:()=>y(e=>Math.max(e-1,1)),disabled:v<=1,children:`Previous`}),(0,F.jsxs)(`span`,{className:`pagination-info`,children:[`Page `,v,` of `,b]}),(0,F.jsx)(`button`,{className:`pagination-btn`,onClick:()=>y(e=>Math.min(e+1,b)),disabled:v>=b,children:`Next`})]})]})]})}),t===`contact`&&(0,F.jsx)(`main`,{className:`contact-view section animate-fade-in`,children:(0,F.jsxs)(`div`,{className:`container`,children:[(0,F.jsxs)(`div`,{className:`collections-banner glass-card`,style:{marginBottom:`3rem`},children:[(0,F.jsx)(`h1`,{children:`Contact Us & Visit`}),(0,F.jsx)(`p`,{children:`Find us in Sector 67 Gurgaon or send an online enquiry instantly.`})]}),(0,F.jsx)(ot,{}),(0,F.jsxs)(`div`,{className:`map-section-wrapper glass-card`,children:[(0,F.jsx)(`h3`,{children:`Our Boutique Location`}),(0,F.jsxs)(`p`,{className:`map-desc`,children:[`Located inside `,(0,F.jsx)(`strong`,{children:`M3M Urbana`}),`, Sector 67 Gurgaon. Parking is available. Stop by and explore our fabric collections in person!`]}),(0,F.jsx)(`div`,{className:`iframe-map-container`,children:(0,F.jsx)(`iframe`,{title:`Bhawna Closet location inside M3M Urbana Gurgaon`,src:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.309062635955!2d77.06527587630737!3d28.394858975459384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d226a27aaaaab%3A0xe54d924619d9b4b0!2sM3M%20Urbana!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin`,width:`100%`,height:`450`,style:{border:0},allowFullScreen:``,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`})})]})]})}),t===`login`&&(0,F.jsx)(ut,{onSwitchToSignup:()=>n(`signup`),onLoginSuccess:()=>n(`home`)}),t===`signup`&&(0,F.jsx)(ft,{onSwitchToLogin:()=>n(`login`),onSignupSuccess:()=>n(`home`)}),t===`product-detail`&&a&&(0,F.jsx)(pt,{productSlug:a,onBack:()=>n(`collections`),onSelectProduct:T}),t===`cart`&&(0,F.jsx)(gt,{onContinueShopping:ie,onSelectProductBySlug:re}),t===`wishlist`&&(0,F.jsx)(_t,{onContinueShopping:ie,onSelectProduct:T}),t===`profile`&&(0,F.jsx)(vt,{}),t===`admin`&&(e?(0,F.jsx)(xt,{}):(0,F.jsx)(St,{onLoginSuccess:()=>n(`admin`)})),(0,F.jsx)(st,{setActiveTab:n}),(0,F.jsx)(`style`,{children:`
        .app-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5rem 0;
        }
        .pink-loader {
          width: 50px;
          height: 50px;
          border: 4px solid var(--soft-pink);
          border-top-color: var(--primary-pink);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        /* Category Section Grid */
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }
        .category-card {
          position: relative;
          height: 380px;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-normal);
        }
        .category-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }
        .category-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .category-card:hover .category-card-img {
          transform: scale(1.06);
        }
        .category-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(30, 34, 41, 0.8) 0%, rgba(30, 34, 41, 0.1) 60%, rgba(240, 84, 138, 0.15) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
          color: var(--pure-white);
        }
        .category-card-overlay h3 {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          margin-bottom: 0.4rem;
        }
        .category-card-overlay p {
          font-size: 0.85rem;
          color: #dee2e6;
          margin-bottom: 1.25rem;
          line-height: 1.4;
        }
        .category-card-btn {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--primary-pink);
          color: var(--pure-white);
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .category-card:hover .category-card-btn {
          background: var(--primary-pink-hover);
        }
        
        /* Products Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 2rem;
        }
        .view-all-box {
          text-align: center;
          margin-top: 3.5rem;
        }
        
        /* About Section */
        .about-brand-section {
          background-color: var(--light-pink);
        }
        .about-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: center;
        }
        .about-image-side {
          position: relative;
        }
        .about-image {
          border-radius: 20px;
          box-shadow: var(--shadow-md);
          width: 100%;
          height: 480px;
          object-fit: cover;
          border: 6px solid var(--pure-white);
        }
        .about-text-side {
          display: flex;
          flex-direction: column;
        }
        .brand-accent-tag {
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          color: var(--primary-pink-dark);
          margin-bottom: 0.5rem;
        }
        .about-text-side h2 {
          font-size: 2.5rem;
          color: var(--dark-charcoal);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        .about-text-side p {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }
        .about-store-badges {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        .store-badge-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
        }
        .badge-pink-icon {
          color: var(--primary-pink);
          flex-shrink: 0;
        }
        .store-badge-card h5 {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin-bottom: 0.15rem;
        }
        .store-badge-card p {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 0;
        }
        
        /* Instagram grid */
        .insta-link {
          color: var(--primary-pink-dark);
          font-weight: 600;
        }
        .insta-link:hover {
          color: var(--primary-pink-hover);
          text-decoration: underline;
        }
        .insta-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
        }
        .insta-item-box {
          position: relative;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .insta-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .insta-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(240, 84, 138, 0.4);
          color: var(--pure-white);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }
        .insta-item-box:hover .insta-hover-overlay {
          opacity: 1;
        }
        
        /* Collections Page Styles */
        .collections-banner {
          background: linear-gradient(135deg, var(--primary-pink) 0%, var(--primary-pink-dark) 100%);
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
          color: var(--pure-white);
          margin-bottom: 2rem;
        }
        .collections-banner h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--pure-white);
        }
        .collections-banner p {
          font-size: 1.05rem;
          color: var(--light-pink);
        }
        
        .filters-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2rem;
          margin-bottom: 2rem;
          gap: 1.5rem;
        }
        .filter-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .filter-icon {
          color: var(--text-muted);
        }
        .filter-tabs {
          display: flex;
          gap: 0.5rem;
        }
        .filter-tab-btn {
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 500;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          background: var(--cream-white);
          color: var(--dark-charcoal);
        }
        .filter-tab-btn.active {
          background: var(--primary-pink);
          color: var(--pure-white);
          border-color: var(--primary-pink);
          font-weight: 600;
        }
        .filter-tab-btn:hover:not(.active) {
          background: var(--light-pink);
          border-color: var(--primary-pink);
          color: var(--primary-pink);
        }
        
        .search-bar-wrapper {
          position: relative;
          flex-grow: 1;
          max-width: 320px;
        }
        .search-input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }
        .search-bar-wrapper input {
          font-family: var(--font-sans);
          width: 100%;
          padding: 0.65rem 1rem 0.65rem 2.5rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          outline: none;
          font-size: 0.85rem;
        }
        .search-bar-wrapper input:focus {
          border-color: var(--primary-pink);
        }
        .clear-search-btn {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 1.25rem;
          line-height: 1;
          cursor: pointer;
          padding: 2px;
        }
        .clear-search-btn:hover {
          color: var(--primary-pink);
        }
        
        .sort-wrapper select {
          font-family: var(--font-sans);
          padding: 0.65rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          outline: none;
          font-size: 0.85rem;
          background: var(--pure-white);
          cursor: pointer;
        }
        .sort-wrapper select:focus {
          border-color: var(--primary-pink);
        }
        .results-count {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
          font-weight: 500;
        }
        
        .empty-results-box {
          padding: 4rem 2rem;
          text-align: center;
        }
        .empty-results-box h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .empty-results-box p {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        
        /* Pagination Controls */
        .pagination-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          margin-top: 3.5rem;
        }
        .pagination-btn {
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          background: var(--pure-white);
        }
        .pagination-btn:hover:not(:disabled) {
          border-color: var(--primary-pink);
          color: var(--primary-pink);
          background: var(--light-pink);
        }
        .pagination-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .pagination-info {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* Map Integration Wrapper */
        .map-section-wrapper {
          margin-top: 4rem;
          padding: 2.5rem;
          background-color: var(--pure-white);
        }
        .map-section-wrapper h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
        .map-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 2rem;
        }
        .iframe-map-container {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-light);
        }

        /* Responsive Overrides */
        @media (max-width: 1024px) {
          .about-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .about-text-side h2 {
            margin-top: 1.5rem;
          }
          .about-store-badges {
            text-align: left;
          }
          .insta-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .filters-row {
            flex-direction: column;
            align-items: stretch;
            padding: 1.5rem;
          }
          .search-bar-wrapper {
            max-width: 100%;
          }
        }
        @media (max-width: 768px) {
          .filter-group {
            width: 100%;
            overflow-x: auto;
            white-space: nowrap;
            display: flex;
            align-items: center;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; /* Firefox */
          }
          .filter-group::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Edge */
          }
          .filter-tabs {
            display: flex;
            flex-wrap: nowrap;
            gap: 0.5rem;
            padding: 0.25rem 0;
          }
        }
        @media (max-width: 576px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
          .category-card {
            height: 280px !important;
          }
          .category-card-overlay {
            padding: 1.25rem !important;
          }
          .category-card-overlay h3 {
            font-size: 1.2rem !important;
          }
          .category-card-overlay p {
            font-size: 0.75rem !important;
            margin-bottom: 0.75rem !important;
          }
          .about-image {
            height: 320px !important;
          }
          .collections-banner {
            padding: 2rem 1.25rem !important;
            margin-bottom: 1.5rem !important;
          }
          .collections-banner h1 {
            font-size: 1.8rem !important;
          }
          .collections-banner p {
            font-size: 0.9rem !important;
          }
          .filters-row {
            gap: 1rem !important;
            padding: 1rem !important;
            margin-bottom: 1.5rem !important;
          }
          .about-store-badges {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Tt(){return(0,F.jsx)(Ke,{children:(0,F.jsx)(Xe,{children:(0,F.jsx)(et,{children:(0,F.jsx)(wt,{})})})})}(0,v.createRoot)(document.getElementById(`root`)).render((0,F.jsx)(_.StrictMode,{children:(0,F.jsx)(Tt,{})}));