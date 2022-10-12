const ge=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};ge();function u(o,e,t,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,i);else for(var c=o.length-1;c>=0;c--)(n=o[c])&&(s=(r<3?n(s):r>3?n(e,t,s):n(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),J=new WeakMap;class ce{constructor(e,t,i){if(this._$cssResult$=!0,i!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(q&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=J.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&J.set(t,e))}return e}toString(){return this.cssText}}const me=o=>new ce(typeof o=="string"?o:o+"",void 0,Z),P=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,r,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[s+1],o[0]);return new ce(t,o,Z)},ve=(o,e)=>{q?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=window.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,o.appendChild(i)})},Q=q?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return me(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var D;const X=window.trustedTypes,fe=X?X.emptyScript:"",ee=window.reactiveElementPolyfillSupport,V={toAttribute(o,e){switch(e){case Boolean:o=o?fe:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},de=(o,e)=>e!==o&&(e==e||o==o),B={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:de};class A extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=B){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||B}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Q(r))}else e!==void 0&&t.push(Q(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ve(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=B){var r,s;const n=this.constructor._$Ep(e,i);if(n!==void 0&&i.reflect===!0){const c=((s=(r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&s!==void 0?s:V.toAttribute)(t,i.type);this._$El=e,c==null?this.removeAttribute(n):this.setAttribute(n,c),this._$El=null}}_$AK(e,t){var i,r;const s=this.constructor,n=s._$Ev.get(e);if(n!==void 0&&this._$El!==n){const c=s.getPropertyOptions(n),l=c.converter,a=(r=(i=l==null?void 0:l.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&r!==void 0?r:V.fromAttribute;this._$El=n,this[n]=a(t,c.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||de)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},ee==null||ee({ReactiveElement:A}),((D=globalThis.reactiveElementVersions)!==null&&D!==void 0?D:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;const x=globalThis.trustedTypes,te=x?x.createPolicy("lit-html",{createHTML:o=>o}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,he="?"+y,ye=`<${he}>`,E=document,T=(o="")=>E.createComment(o),R=o=>o===null||typeof o!="object"&&typeof o!="function",pe=Array.isArray,$e=o=>{var e;return pe(o)||typeof((e=o)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ie=/-->/g,re=/>/g,b=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,oe=/'/g,se=/"/g,ue=/^(?:script|style|textarea|title)$/i,be=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),m=be(1),S=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ne=new WeakMap,_e=(o,e,t)=>{var i,r;const s=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let n=s._$litPart$;if(n===void 0){const c=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=n=new N(e.insertBefore(T(),c),c,void 0,t!=null?t:{})}return n._$AI(o),n},w=E.createTreeWalker(E,129,null,!1),Ae=(o,e)=>{const t=o.length-1,i=[];let r,s=e===2?"<svg>":"",n=C;for(let l=0;l<t;l++){const a=o[l];let v,d,h=-1,g=0;for(;g<a.length&&(n.lastIndex=g,d=n.exec(a),d!==null);)g=n.lastIndex,n===C?d[1]==="!--"?n=ie:d[1]!==void 0?n=re:d[2]!==void 0?(ue.test(d[2])&&(r=RegExp("</"+d[2],"g")),n=b):d[3]!==void 0&&(n=b):n===b?d[0]===">"?(n=r!=null?r:C,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,v=d[1],n=d[3]===void 0?b:d[3]==='"'?se:oe):n===se||n===oe?n=b:n===ie||n===re?n=C:(n=b,r=void 0);const M=n===b&&o[l+1].startsWith("/>")?" ":"";s+=n===C?a+ye:h>=0?(i.push(v),a.slice(0,h)+"$lit$"+a.slice(h)+y+M):a+y+(h===-2?(i.push(void 0),l):M)}const c=s+(o[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[te!==void 0?te.createHTML(c):c,i]};class O{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,n=0;const c=e.length-1,l=this.parts,[a,v]=Ae(e,t);if(this.el=O.createElement(a,i),w.currentNode=this.el.content,t===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(r=w.nextNode())!==null&&l.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const d=[];for(const h of r.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(y)){const g=v[n++];if(d.push(h),g!==void 0){const M=r.getAttribute(g.toLowerCase()+"$lit$").split(y),I=/([.?@])?(.*)/.exec(g);l.push({type:1,index:s,name:I[2],strings:M,ctor:I[1]==="."?xe:I[1]==="?"?Se:I[1]==="@"?ke:L})}else l.push({type:6,index:s})}for(const h of d)r.removeAttribute(h)}if(ue.test(r.tagName)){const d=r.textContent.split(y),h=d.length-1;if(h>0){r.textContent=x?x.emptyScript:"";for(let g=0;g<h;g++)r.append(d[g],T()),w.nextNode(),l.push({type:2,index:++s});r.append(d[h],T())}}}else if(r.nodeType===8)if(r.data===he)l.push({type:2,index:s});else{let d=-1;for(;(d=r.data.indexOf(y,d+1))!==-1;)l.push({type:7,index:s}),d+=y.length-1}s++}}static createElement(e,t){const i=E.createElement("template");return i.innerHTML=e,i}}function k(o,e,t=o,i){var r,s,n,c;if(e===S)return e;let l=i!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[i]:t._$Cu;const a=R(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),a===void 0?l=void 0:(l=new a(o),l._$AT(o,t,i)),i!==void 0?((n=(c=t)._$Cl)!==null&&n!==void 0?n:c._$Cl=[])[i]=l:t._$Cu=l),l!==void 0&&(e=k(o,l._$AS(o,e.values),l,i)),e}class we{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:E).importNode(i,!0);w.currentNode=s;let n=w.nextNode(),c=0,l=0,a=r[0];for(;a!==void 0;){if(c===a.index){let v;a.type===2?v=new N(n,n.nextSibling,this,e):a.type===1?v=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(v=new Ce(n,this,e)),this.v.push(v),a=r[++l]}c!==(a==null?void 0:a.index)&&(n=w.nextNode(),c++)}return s}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class N{constructor(e,t,i,r){var s;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cg=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),R(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==S&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):$e(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==p&&R(this._$AH)?this._$AA.nextSibling.data=e:this.k(E.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=O.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.m(i);else{const n=new we(s,this),c=n.p(this.options);n.m(i),this.k(c),this._$AH=n}}_$AC(e){let t=ne.get(e.strings);return t===void 0&&ne.set(e.strings,t=new O(e)),t}S(e){pe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new N(this.M(T()),this.M(T()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class L{constructor(e,t,i,r,s){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const s=this.strings;let n=!1;if(s===void 0)e=k(this,e,t,0),n=!R(e)||e!==this._$AH&&e!==S,n&&(this._$AH=e);else{const c=e;let l,a;for(e=s[0],l=0;l<s.length-1;l++)a=k(this,c[i+l],t,l),a===S&&(a=this._$AH[l]),n||(n=!R(a)||a!==this._$AH[l]),a===p?e=p:e!==p&&(e+=(a!=null?a:"")+s[l+1]),this._$AH[l]=a}n&&!r&&this.C(e)}C(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class xe extends L{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===p?void 0:e}}const Ee=x?x.emptyScript:"";class Se extends L{constructor(){super(...arguments),this.type=4}C(e){e&&e!==p?this.element.setAttribute(this.name,Ee):this.element.removeAttribute(this.name)}}class ke extends L{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=k(this,e,t,0))!==null&&i!==void 0?i:p)===S)return;const r=this._$AH,s=e===p&&r!==p||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==p&&(r===p||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Ce{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}}const le=window.litHtmlPolyfillSupport;le==null||le(O,N),((z=globalThis.litHtmlVersions)!==null&&z!==void 0?z:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j,W;class f extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_e(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return S}}f.finalized=!0,f._$litElement$=!0,(j=globalThis.litElementHydrateSupport)===null||j===void 0||j.call(globalThis,{LitElement:f});const ae=globalThis.litElementPolyfillSupport;ae==null||ae({LitElement:f});((W=globalThis.litElementVersions)!==null&&W!==void 0?W:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=o=>e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(o,e):((t,i)=>{const{kind:r,elements:s}=i;return{kind:r,elements:s,finisher(n){window.customElements.define(t,n)}}})(o,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function _(o){return(e,t)=>t!==void 0?((i,r,s)=>{r.constructor.createProperty(s,i)})(o,e,t):Te(o,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F;((F=window.HTMLSlotElement)===null||F===void 0?void 0:F.prototype.assignedElements)!=null;let H=class extends f{constructor(){super(...arguments),this.src="",this.alt=""}render(){return m`
      <div>
        <img src=${this.src} alt=${this.alt} />
        <div id="overlay"></div>
      </div>
    `}};H.styles=P`
    :host {
      display: block;
    }

    :host(.yellow) div#overlay {
      background-color: #fefe81;
    }

    :host(.green) div#overlay {
      background-color: #e3fdd5;
    }

    :host(.yellow) img,
    :host(.green) img {
      mix-blend-mode: darken;
    }

    div {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    img {
      object-fit: cover;
      width: 160px;
      height: 260px;
    }

    div#overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      mix-blend-mode: color;
    }
  `;u([_({type:String})],H.prototype,"src",void 0);u([_({type:String})],H.prototype,"alt",void 0);H=u([U("item-preview-image")],H);const Re=[{title:"TROPICA ROADSTER CRASH REPORT",collectionTitle:"National Transportation Library",id:"finalreportofren00look",blurb:"What happens when you crash a Tropica Roadster straight into a barrier at 47kph? Find out in this report from the Vehicle Research and Test Center.",link:"https://archive.org/details/nationaltransportationlibrary",image:"https://archive.org/services/img/finalreportofren00look"},{title:"EXCAVATION OF HUMMINGBIRD SHELTER",collectionTitle:"Bureau of Land Management Library",id:"excavationofhumm00conn",blurb:"The Bureau of Land Management's report on the excavation of Hummingbird Shelter, part of the White River Resource Area in Colorado, United States.",link:"https://archive.org/details/blmlibrary",image:"https://archive.org/services/img/excavationofhumm00conn"},{title:"ORGANIZED CRIME ON WALL STREET",collectionTitle:"U.S. Congressional Hearings",id:"gov.gpo.fdsys.CHRG-106hhrg67115",blurb:"The Committee on Commerce's hearing on the topic of organized crime on Wall Street. Part of the 106th Congress' second session, this hearing took place September 13, 2000.",link:"https://archive.org/details/us_house_hearings",image:"https://archive.org/services/img/gov.gpo.fdsys.CHRG-106hhrg67115"},{title:"WEATHER MODIFICATION IN ALBERTA",collectionTitle:"Government of Alberta Publications",id:"potentialforweat00advi",blurb:"Report to the Minister of Agriculture, Government of Alberta from the Advisory Committee on Weather Modification",link:"https://archive.org/details/albertagovernmentpublications",image:"https://archive.org/services/img/potentialforweat00advi"},{title:"EDIBLE AND POISONOUS MUSHROOMS OF CANADA",collectionTitle:"Agriculture and Agri-Food Canada Library",id:"ediblepoisonousm00grov",blurb:"From this guide from Agriculture Canada\u2014'Actually there is only one test to find out whether a mushroom or any other plant is poisonous and that is to eat it. If it makes you sick or kills you it is poisonous...' ",link:"https://archive.org/details/canadianagriculturallibrary",image:"https://archive.org/services/img/ediblepoisonousm00grov"}];let K=class extends f{render(){return m` <slot></slot> `}};K.styles=P`
    :host {
      display: flex;
      justify-content: space-around;
      flex-flow: wrap;
    }

    ::slotted(*) {
      width: 32%;
      border: 1px solid transparent;
      margin-bottom: 10px;
      max-height: 350px;
    }

    @media only screen and (max-width: 500px) {
      :host {
        display: block;
      }
      ::slotted(*) {
        width: 100%;
      }
    }

    @media only screen and (min-width: 501px) and (max-width: 1300px) {
      ::slotted(*) {
        width: 48%;
      }
    }
  `;K=u([U("resources-highlights")],K);const Oe="INTERESTING GOVERNMENT DOCS",He=[{id:"MH07D7178",title:"Fundraising for Social Change, Part One",image:"https://archive.org/services/img/MH07D7178"},{id:"CAT92272736",title:"Two keys for appraising forest fire fuels",image:"https://archive.org/services/img/CAT92272736"},{id:"CAT79708698031",title:"Hamburger\u2014Questions and Answers",image:"https://archive.org/services/img/CAT79708698031"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"selectedpolishso00army",title:"Selected Polish songs",image:"https://archive.org/services/img/selectedpolishso00army"},{id:"blueprintforfutu9611unit",title:"Blueprint for the future",image:"https://archive.org/services/img/blueprintforfutu9611unit"},{id:"introductionlapt00albe",title:"Introduction \xE0 la p\xE2tisserie",image:"https://archive.org/services/img/introductionlapt00albe"},{id:"hintsonmountainl94youn",title:"Hints on mountain-lion trapping",image:"https://archive.org/services/img/hintsonmountainl94youn"},{id:"drylandfarmingin00cott",title:"Dry land farming in the Southwest",image:"https://archive.org/services/img/drylandfarmingin00cott"}],Pe="FEDLINK - United States Federal Collection",Ne=[{id:"magicofmindhowco00unse",title:"The magic of the mind",image:"https://archive.org/services/img/magicofmindhowco00unse"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"}],Ue="https://archive.org/download/democracys-library/web-component/placeholder-header.png",Me=[{details:"There are 5,000,000,000,000,000,000,000,000,000,000 grains of sand on Earth."},{details:"You can sign up for a free Account and be able to create your own archive."}];let G=class extends f{render(){return m` <span><slot></slot></span> `}};G.styles=P`
    :host {
      font-family: 'Teko', sans-serif;
      font-size: 2.4rem;
      padding-right: 10px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 379 115' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m2.41535907.06436505 93.98160413 2.05968771 93.9636758.42943203 93.981604 2.05968771 93.963677.42943203-.665728 8.52369197-2.808745 8.5057642-.665728 8.523692-2.808745 8.5057641-1.871974-.0001517-.305648 2.5778912 2.129108 16.5918028-.996866 8.389818-90.463508 2.9353281-90.36899 4.449321-70.310096 2.2808389 70.18701.1005118 94.051638 1.4916745 94.184497.1335401.687706 8.9709079-1.47682 9.4913393.690908 8.8960033-1.472546 9.39132-94.020429-3.36343-94.324131-2.010171-93.1214334-3.337782-94.27554848-2.008784 1.27882743-7.2656845-.85881548-7.374232 1.27882743-7.2656841-.85881547-7.3742321 7.71912497.1217028.0436635-1.448196 2.2974858-8.048923.2360666-7.9550062 2.2974858-8.0489229 89.0683703-4.7902162 158.503928-5.8247357-167.8631141-2.9324015-92.63274412.0113194 1.47781288-8.9465155-2.26795466-14.9397675z' fill='%23e3fdd5' fill-rule='evenodd'/%3E%3C/svg%3E");
      margin-bottom: 10px;
      display: inline-block;
    }

    :host(.green) {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 379 115'%3E%3Cpath d='m2.41535907.06436505 93.98160413 2.05968771 93.9636758.42943203 93.981604 2.05968771 93.963677.42943203-.665728 8.52369197-2.808745 8.5057642-.665728 8.523692-2.808745 8.5057641-1.871974-.0001517-.305648 2.5778912 2.129108 16.5918028-.996866 8.389818-90.463508 2.9353281-90.36899 4.449321-70.310096 2.2808389 70.18701.1005118 94.051638 1.4916745 94.184497.1335401.687706 8.9709079-1.47682 9.4913393.690908 8.8960033-1.472546 9.39132-94.020429-3.36343-94.324131-2.010171-93.1214334-3.337782-94.27554848-2.008784 1.27882743-7.2656845-.85881548-7.374232 1.27882743-7.2656841-.85881547-7.3742321 7.71912497.1217028.0436635-1.448196 2.2974858-8.048923.2360666-7.9550062 2.2974858-8.0489229 89.0683703-4.7902162 158.503928-5.8247357-167.8631141-2.9324015-92.63274412.0113194 1.47781288-8.9465155-2.26795466-14.9397675z' fill='%23fefe81' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
  `;G=u([U("ti-tle")],G);let $=class extends f{constructor(){super(...arguments),this.carousel1=He,this.carousel2=Ne,this.didYouKnow=Me,this.highlights=Re,this.fontSource=""}firstUpdated(){const e=document.createElement("style");e.innerHTML=`
    @font-face {
      font-family: "Teko";
      src: url(https://archive.org/cors/democracys-library/web-component/Teko-SemiBold.ttf);
    }`,e.setAttribute("id","teko-font"),document.head.appendChild(e)}disconnectedCallback(){const e=document.head.querySelector("#teko-font");e&&document.head.removeChild(e)}get factoids(){return this.didYouKnow.map((e,t)=>{const i=t%2===0?"green":"yellow";return m`
        <article>
          <div class="title">
            <ti-tle class=${i}><span>DID YOU KNOW?</span></ti-tle>
          </div>
          <p class="full-width">${e.details}</p>
        </article>
      `})}resourceCard(e,t){return m`
      <article>
        <div class="title">
          <ti-tle class=${t!=null?t:""}>${e.title}</ti-tle>
        </div>
        <item-preview-image
          src=${e.image}
          alt="preview image."
          class=${t!=null?t:""}
        ></item-preview-image>
        <p>${e.blurb}</p>
        <a href=${e.link} tab="_blank">Browse the ${e.collectionTitle}</a>
      </article>
    `}carouselCard(e,t){const i=`https://archive.org/details/${e.id}`;return m`
      <a href=${i}>
        <item-preview-image
          src=${e.image}
          alt=${`Go to: ${e.title}`}
          class=${t!=null?t:""}
        ></item-preview-image>
      </a>
    `}get topCarousel(){return m`
      <ti-tle class="green">${Oe}</ti-tle>
      <section id="carousel-1" class="carousel">
        ${this.carousel1.map((e,t)=>{const i=t%2===0?"green":"yellow";return this.carouselCard(e,i)})}
      </section>
    `}get bottomCarousel(){return m`
      <ti-tle class="green">${Pe}</ti-tle>
      <section id="carousel-2" class="carousel">
        ${this.carousel2.map((e,t)=>{const i=t%2===0?"green":"yellow";return this.carouselCard(e,i)})}
      </section>
    `}get resourcesOptions(){return m`<option>Select a resource</option>`}resourceSelected(e){console.log("resource selected ********",e)}render(){return m`
      <section id="democracys-library-main">
        <div id="header-img">
          <img src=${Ue} alt="Welcome to Democracy's Library" />
        </div>
        <section id="top-carousel">${this.topCarousel}</section>
        <section id="did-you-know">${this.factoids}</section>
        <resources-highlights>
          <article>
            <div class="title"><ti-tle>Resources</ti-tle></div>
            <div id="map-img">
              <img
                src="https://archive.org/cors/democracys-library/web-component/US%2BCA%20map.png"
                alt="map of united states and canada"
              />
              <div id="map-overlay"></div>
            </div>
            <div id="resources-options">
              <label
                for="select-resources"
                style="position: absolute; height: 1px; width: 1px; margin-left: -1000px"
                >Select a resource:</label
              >
              <select
                name="select-resources"
                @select=${e=>this.resourceSelected(e)}
              >
                ${this.resourcesOptions}
              </select>
            </div>
          </article>
          ${this.highlights.map((e,t)=>{const i=t%2===0?"green":"yellow";return this.resourceCard(e,i)})}
        </resources-highlights>
        <section id="bottom-carousel">${this.bottomCarousel}</section>
      </section>
    `}};$.styles=P`
    :host {
      display: block;
      color: var(--ia-democracys-library-text-color, #000);
      font-size: 1.5rem;
      font-family: Helvetica Neue, Helvetica, sans-serif;
      height: auto;
    }

    :host(:focus) {
      outline: none;
    }

    #header-img {
      max-height: 150px;
      width: 100%;
      background-color: rgb(227, 253, 213);
      margin: 0px auto;
      overflow: hidden;
    }

    #header-img img {
      display: block;
      object-fit: contain;
      margin: 0px auto;
      max-height: inherit;
    }

    @media (max-width: 500px) {
      #header-img {
        max-height: 70px;
      }
    }
    @media (max-width: 999px) {
      #header-img {
        max-height: 100px;
      }
    }

    section#democracys-library-main {
      margin-bottom: 20px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
    }
    section#democracys-library-main > section {
      margin-left: 10px !important;
      margin-right: 10px !important;
    }
    section#democracys-library-main > *:not(:first-child) {
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: auto;
      margin-right: auto;
    }

    section#did-you-know {
      display: flex;
      gap: 20px;
    }
    section#did-you-know > * {
      border: 1px solid transparent;
    }
    @media only screen and (max-width: 500px) {
      section#did-you-know > * {
        width: 100%;
      }
    }
    @media only screen and (min-width: 501px) and (max-width: 1300px) {
      section#did-you-know > * {
        width: 50%;
      }
    }

    /* Resource/Collection Highlight */
    article {
      display: grid;
      gap: 0px 20px;
    }
    article > * {
      border: 1px solid transparent;
    }
    article > .title {
      grid-area: 1 / 1 / 2 / 8;
    }
    article > item-preview-image {
      grid-area: 2 / 1 / 8 / 3;
    }
    article > p.full-width {
      grid-area: 2 / 1 / 7 / 7;
    }
    article > p {
      grid-area: 2 / 3 / 7 / 8;
      overflow: auto;
      padding: 0px 10px 10px 0;
      max-height: 220px;
      margin: 0 auto;
      word-break: break-word;
    }
    article > a,
    article > select {
      grid-area: 7 / 3 / 7 / 8;
      vertical-align: baseline;
      display: flex;
    }

    /* subparts of article */
    #map-img {
      width: 100%;
      grid-area: 2 / 1 / 7 / 8;
      overflow: hidden;
      position: relative;
    }

    #map-img img {
      object-fit: contain;
      max-height: 100%;
      max-width: 100%;
    }

    #map-overlay {
      background-color: #ebebff;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      mix-blend-mode: color;
    }

    #resources-options {
      grid-area: 8 / 1 / 8 / 8;
    }

    #resources-options > select {
      width: 100%;
      display: block;
    }
    /* end subparts of article */

    /* Carousel */
    .carousel {
      overflow-x: auto;
      display: flex;
      gap: 20px;
      scroll-snap-type: x mandatory;
      padding-bottom: 10px;
      scrollbar-width: none; /* Firefox */
    }

    .carousel > * {
      scroll-snap-align: center;
    }

    .carousel::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
    /* End Carousel */
  `;u([_({type:Array})],$.prototype,"carousel1",void 0);u([_({type:Array})],$.prototype,"carousel2",void 0);u([_({type:Array})],$.prototype,"didYouKnow",void 0);u([_({type:Array})],$.prototype,"highlights",void 0);u([_({type:String})],$.prototype,"fontSource",void 0);$=u([U("ia-democracys-library")],$);let Y=class extends f{render(){return m`
      <ia-democracys-library title="Hello">
        <div slot="my-slot">Some slotted content</div>
      </ia-democracys-library>
    `}};Y.styles=P`
    :host {
      display: block;
    }
  `;Y=u([U("app-root")],Y);
