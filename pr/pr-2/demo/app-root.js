const ue=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}};ue();function m(s,e,t,i){var r=arguments.length,o=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,i);else for(var h=s.length-1;h>=0;h--)(n=s[h])&&(o=(r<3?n(o):r>3?n(e,t,o):n(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),F=new WeakMap;class ae{constructor(e,t,i){if(this._$cssResult$=!0,i!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(J&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=F.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&F.set(t,e))}return e}toString(){return this.cssText}}const me=s=>new ae(typeof s=="string"?s:s+"",void 0,Z),H=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new ae(t,s,Z)},ge=(s,e)=>{J?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=window.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)})},G=J?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return me(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const Q=window.trustedTypes,ve=Q?Q.emptyScript:"",X=window.reactiveElementPolyfillSupport,W={toAttribute(s,e){switch(e){case Boolean:s=s?ve:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},he=(s,e)=>e!==s&&(e==e||s==s),j={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:he};class w extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=j){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||j}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(G(r))}else e!==void 0&&t.push(G(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ge(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=j){var r,o;const n=this.constructor._$Ep(e,i);if(n!==void 0&&i.reflect===!0){const h=((o=(r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&o!==void 0?o:W.toAttribute)(t,i.type);this._$El=e,h==null?this.removeAttribute(n):this.setAttribute(n,h),this._$El=null}}_$AK(e,t){var i,r;const o=this.constructor,n=o._$Ev.get(e);if(n!==void 0&&this._$El!==n){const h=o.getPropertyOptions(n),l=h.converter,a=(r=(i=l==null?void 0:l.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&r!==void 0?r:W.fromAttribute;this._$El=n,this[n]=a(t,h.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||he)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,o)=>this[o]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}w.finalized=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},X==null||X({ReactiveElement:w}),((L=globalThis.reactiveElementVersions)!==null&&L!==void 0?L:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;const S=globalThis.trustedTypes,ee=S?S.createPolicy("lit-html",{createHTML:s=>s}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,ce="?"+v,fe=`<${ce}>`,C=document,T=(s="")=>C.createComment(s),k=s=>s===null||typeof s!="object"&&typeof s!="function",de=Array.isArray,ye=s=>{var e;return de(s)||typeof((e=s)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,te=/-->/g,ie=/>/g,A=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,re=/'/g,se=/"/g,pe=/^(?:script|style|textarea|title)$/i,$e=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),f=$e(1),x=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),oe=new WeakMap,Ae=(s,e,t)=>{var i,r;const o=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let n=o._$litPart$;if(n===void 0){const h=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=n=new I(e.insertBefore(T(),h),h,void 0,t!=null?t:{})}return n._$AI(s),n},b=C.createTreeWalker(C,129,null,!1),_e=(s,e)=>{const t=s.length-1,i=[];let r,o=e===2?"<svg>":"",n=P;for(let l=0;l<t;l++){const a=s[l];let g,c,d=-1,u=0;for(;u<a.length&&(n.lastIndex=u,c=n.exec(a),c!==null);)u=n.lastIndex,n===P?c[1]==="!--"?n=te:c[1]!==void 0?n=ie:c[2]!==void 0?(pe.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=A):c[3]!==void 0&&(n=A):n===A?c[0]===">"?(n=r!=null?r:P,d=-1):c[1]===void 0?d=-2:(d=n.lastIndex-c[2].length,g=c[1],n=c[3]===void 0?A:c[3]==='"'?se:re):n===se||n===re?n=A:n===te||n===ie?n=P:(n=A,r=void 0);const U=n===A&&s[l+1].startsWith("/>")?" ":"";o+=n===P?a+fe:d>=0?(i.push(g),a.slice(0,d)+"$lit$"+a.slice(d)+v+U):a+v+(d===-2?(i.push(void 0),l):U)}const h=o+(s[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ee!==void 0?ee.createHTML(h):h,i]};class N{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,n=0;const h=e.length-1,l=this.parts,[a,g]=_e(e,t);if(this.el=N.createElement(a,i),b.currentNode=this.el.content,t===2){const c=this.el.content,d=c.firstChild;d.remove(),c.append(...d.childNodes)}for(;(r=b.nextNode())!==null&&l.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const c=[];for(const d of r.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(v)){const u=g[n++];if(c.push(d),u!==void 0){const U=r.getAttribute(u.toLowerCase()+"$lit$").split(v),R=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:R[2],strings:U,ctor:R[1]==="."?be:R[1]==="?"?Ce:R[1]==="@"?xe:O})}else l.push({type:6,index:o})}for(const d of c)r.removeAttribute(d)}if(pe.test(r.tagName)){const c=r.textContent.split(v),d=c.length-1;if(d>0){r.textContent=S?S.emptyScript:"";for(let u=0;u<d;u++)r.append(c[u],T()),b.nextNode(),l.push({type:2,index:++o});r.append(c[d],T())}}}else if(r.nodeType===8)if(r.data===ce)l.push({type:2,index:o});else{let c=-1;for(;(c=r.data.indexOf(v,c+1))!==-1;)l.push({type:7,index:o}),c+=v.length-1}o++}}static createElement(e,t){const i=C.createElement("template");return i.innerHTML=e,i}}function E(s,e,t=s,i){var r,o,n,h;if(e===x)return e;let l=i!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[i]:t._$Cu;const a=k(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(s),l._$AT(s,t,i)),i!==void 0?((n=(h=t)._$Cl)!==null&&n!==void 0?n:h._$Cl=[])[i]=l:t._$Cu=l),l!==void 0&&(e=E(s,l._$AS(s,e.values),l,i)),e}class we{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:r}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:C).importNode(i,!0);b.currentNode=o;let n=b.nextNode(),h=0,l=0,a=r[0];for(;a!==void 0;){if(h===a.index){let g;a.type===2?g=new I(n,n.nextSibling,this,e):a.type===1?g=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(g=new Ee(n,this,e)),this.v.push(g),a=r[++l]}h!==(a==null?void 0:a.index)&&(n=b.nextNode(),h++)}return o}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class I{constructor(e,t,i,r){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cg=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),k(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==x&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):ye(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==p&&k(this._$AH)?this._$AA.nextSibling.data=e:this.k(C.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=N.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.m(i);else{const n=new we(o,this),h=n.p(this.options);n.m(i),this.k(h),this._$AH=n}}_$AC(e){let t=oe.get(e.strings);return t===void 0&&oe.set(e.strings,t=new N(e)),t}S(e){de(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const o of e)r===t.length?t.push(i=new I(this.M(T()),this.M(T()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class O{constructor(e,t,i,r,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const o=this.strings;let n=!1;if(o===void 0)e=E(this,e,t,0),n=!k(e)||e!==this._$AH&&e!==x,n&&(this._$AH=e);else{const h=e;let l,a;for(e=o[0],l=0;l<o.length-1;l++)a=E(this,h[i+l],t,l),a===x&&(a=this._$AH[l]),n||(n=!k(a)||a!==this._$AH[l]),a===p?e=p:e!==p&&(e+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}n&&!r&&this.C(e)}C(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class be extends O{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===p?void 0:e}}const Se=S?S.emptyScript:"";class Ce extends O{constructor(){super(...arguments),this.type=4}C(e){e&&e!==p?this.element.setAttribute(this.name,Se):this.element.removeAttribute(this.name)}}class xe extends O{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=E(this,e,t,0))!==null&&i!==void 0?i:p)===x)return;const r=this._$AH,o=e===p&&r!==p||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==p&&(r===p||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Ee{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const ne=window.litHtmlPolyfillSupport;ne==null||ne(N,I),((z=globalThis.litHtmlVersions)!==null&&z!==void 0?z:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B,K;class y extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ae(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return x}}y.finalized=!0,y._$litElement$=!0,(B=globalThis.litElementHydrateSupport)===null||B===void 0||B.call(globalThis,{LitElement:y});const le=globalThis.litElementPolyfillSupport;le==null||le({LitElement:y});((K=globalThis.litElementVersions)!==null&&K!==void 0?K:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=s=>e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(s,e):((t,i)=>{const{kind:r,elements:o}=i;return{kind:r,elements:o,finisher(n){window.customElements.define(t,n)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}};function _(s){return(e,t)=>t!==void 0?((i,r,o)=>{r.constructor.createProperty(o,i)})(s,e,t):Pe(s,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V;((V=window.HTMLSlotElement)===null||V===void 0?void 0:V.prototype.assignedElements)!=null;let M=class extends y{constructor(){super(...arguments),this.src="",this.alt=""}render(){return f`
      <div>
        <img src=${this.src} alt=${this.alt} />
      </div>
    `}};M.styles=H`
    :host {
      display: block;
      border: 1px dotted red;
      height: 260px;
      width: 160px;
    }

    div {
      height: 260px;
      width: 160px;
      display: flex;
    }

    img {
      object-fit: contain;
      max-width: 100%;
      max-height: 100%;
      vertical-align: middle;
    }
  `;m([_({type:String})],M.prototype,"src",void 0);m([_({type:String})],M.prototype,"alt",void 0);M=m([D("item-preview-image")],M);const Te=[{title:"Military Industrial Powerpoint Complex","item-identifier":"MiclitaryIndustrialPowerpointComplex",blurb:"This collection was a special project originally done as part of the Internet Archive's 20th Anniversary celebration on October 26, 2016 highlighting IA's web archive. The collection consists of all the Powerpoint files (57,489) from the .mil web domain that were crawled from the public web (with no special login or credentials) by the Internet Archive and partners from 1996-2017.  Surprisingly good for karaoke.",link:"https://archive.org/details/MilitaryIndustrialPowerpointComplex",image:"https://archive.org/services/img/MilitaryIndustrialPowerpointComplex"},{title:"Military Industrial Powerpoint Complex","item-identifier":"MilitaryIndustrialPowerpointComplex",blurb:"This collection was a special project originally done as part of the Internet Archive's 20th Anniversary celebration on October 26, 2016 highlighting IA's web archive. The collection consists of all the Powerpoint files (57,489) from the .mil web domain that were crawled from the public web (with no special login or credentials) by the Internet Archive and partners from 1996-2017.  Surprisingly good for karaoke.",link:"https://archive.org/details/MilitaryIndustrialPowerpointComplex",image:"https://archive.org/services/img/MilitaryIndustrialPowerpointComplex"},{title:"Military Industrial Powerpoint Complex","item-identifier":"MilitaryIndustrialPowerpointComplex",blurb:"This collection was a special project originally done as part of the Internet Archive's 20th Anniversary celebration on October 26, 2016 highlighting IA's web archive. The collection consists of all the Powerpoint files (57,489) from the .mil web domain that were crawled from the public web (with no special login or credentials) by the Internet Archive and partners from 1996-2017.  Surprisingly good for karaoke.",link:"https://archive.org/details/MilitaryIndustrialPowerpointComplex",image:"https://archive.org/services/img/MilitaryIndustrialPowerpointComplex"},{title:"Military Industrial Powerpoint Complex","item-identifier":"MilitaryIndustrialPowerpointComplex",blurb:"This collection was a special project originally done as part of the Internet Archive's 20th Anniversary celebration on October 26, 2016 highlighting IA's web archive. The collection consists of all the Powerpoint files (57,489) from the .mil web domain that were crawled from the public web (with no special login or credentials) by the Internet Archive and partners from 1996-2017.  Surprisingly good for karaoke.",link:"https://archive.org/details/MilitaryIndustrialPowerpointComplex",image:"https://archive.org/services/img/MilitaryIndustrialPowerpointComplex"},{title:"Military Industrial Powerpoint Complex","item-identifier":"MilitaryIndustrialPowerpointComplex",blurb:"This collection was a special project originally done as part of the Internet Archive's 20th Anniversary celebration on October 26, 2016 highlighting IA's web archive. The collection consists of all the Powerpoint files (57,489) from the .mil web domain that were crawled from the public web (with no special login or credentials) by the Internet Archive and partners from 1996-2017.  Surprisingly good for karaoke.",link:"https://archive.org/details/MilitaryIndustrialPowerpointComplex",image:"https://archive.org/services/img/MilitaryIndustrialPowerpointComplex"}];let q=class extends y{render(){return f` <slot></slot> `}};q.styles=H`
    :host {
      display: flex;
      justify-content: space-around;
      flex-flow: wrap;
    }

    ::slotted(*) {
      width: 32%;
      border: 1px solid rgb(204, 204, 204);
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

    @media only screen and (min-width: 501px) and (max-width: 1000px) {
      ::slotted(*) {
        width: 48%;
      }
    }
  `;q=m([D("resources-highlights")],q);const ke=[{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"}],Ne=[{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"NASA_NTRS_Archive_20070019742",title:"NASA Technical Reports Server (NTRS) 20070019742: Solar Schematic",image:"https://archive.org/services/img/NASA_NTRS_Archive_20070019742"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"NASA_NTRS_Archive_20070019742",title:"NASA Technical Reports Server (NTRS) 20070019742: Solar Schematic",image:"https://archive.org/services/img/NASA_NTRS_Archive_20070019742"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"NASA_NTRS_Archive_20070019742",title:"NASA Technical Reports Server (NTRS) 20070019742: Solar Schematic",image:"https://archive.org/services/img/NASA_NTRS_Archive_20070019742"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"NASA_NTRS_Archive_20070019742",title:"NASA Technical Reports Server (NTRS) 20070019742: Solar Schematic",image:"https://archive.org/services/img/NASA_NTRS_Archive_20070019742"}];let $=class extends y{constructor(){super(...arguments),this.carousel1=ke,this.carousel2=Ne,this.didYouKnow=[],this.highlights=Te,this.fontSource=""}firstUpdated(){const e=this.fontSource||"/assets/Teko-SemiBold.ttf",t=document.createElement("style");t.innerHTML=`
    @font-face {
      font-family: "Teko";
      src: url(${e});
    }`,t.setAttribute("id","teko-font"),document.head.appendChild(t)}disconnectedCallback(){const e=document.head.querySelector("#teko-font");e&&document.head.removeChild(e)}createCard(e){return f`
      <article>
        <ti-tle>${e.title}</ti-tle>
        <item-preview-image
          src=${e.image}
          alt="preview image."
        ></item-preview-image>
        <p>${e.blurb}</p>
        <a href=${e.link} tab="_blank"
          >Browse the ${e.title} collection</a
        >
      </article>
    `}carouselCard(e){const t=`https://archive.org/details/${e.id}`;return f`
      <a href=${t}>
        <item-preview-image
          src=${e.image}
          alt=${`Go to: ${e.title}`}
        ></item-preview-image>
      </a>
    `}get topCarousel(){return f`
      <section id="carousel-1" class="carousel">
        ${this.carousel1.map(e=>this.carouselCard(e))}
      </section>
    `}get bottomCarousel(){return f`
      <section id="carousel-2" class="carousel">
        ${this.carousel2.map(e=>this.carouselCard(e))}
      </section>
    `}render(){return f`
      <section id="democracys-library-main">
        <header>cool image goes here</header>
        ${this.topCarousel}
        <section id="did-you-know">
          <article no-image>
            <ti-tle>Did You Know</ti-tle>
            <p>Did you know text</p>
            <a href="#">Read More about this</a>
          </article>
          <article no-image>
            <ti-tle>Did You Know</ti-tle>
            <p>Did you know text</p>
            <a href="#">Read More about this</a>
          </article>
        </section>
        <resources-highlights>
          <ait-map></ait-map>
          ${this.highlights.map(e=>this.createCard(e))}
        </resources-highlights>
        ${this.bottomCarousel}
      </section>
    `}};$.styles=H`
    :host {
      display: block;
      color: var(--ia-democracys-library-text-color, #000);
      font-size: 1.5rem;
      font-family: Helvetica Neue, Helvetica, sans-serif;
      border: 1px solid red;
      height: auto;
    }

    :host(:focus) {
      outline: none;
    }

    header {
      height: 150px;
      width: 100%;
      background-color: lightseagreen;
      margin: 0 auto;
    }

    ti-tle {
      font-family: 'Teko', sans-serif;
      font-size: 2rem;
    }

    section#democracys-library-main > *:not(:first-child) {
      margin: 10px auto;
    }

    section#did-you-know {
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    section#did-you-know > * {
      width: 50%;
    }
    article[no-image] {
      display: grid;
    }
    article[no-image] > p {
      grid-area: 2 / 1 / 6 / 6;
    }
    article[no-image] > a {
      grid-area: 5 / 1 / 6 / 6;
    }

    article {
      display: grid;
    }
    article ti-tle {
      font-family: Teko, sans-serif;
    }
    article {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(8, 1fr);
      gap: 0px 20px;
      border: 1px dotted purple;
    }
    article > ti-tle {
      grid-area: 1 / 1 / 2 / 6;
    }
    article > item-preview-image {
      grid-area: 3 / 1 / 8 / 3;
    }
    article > p {
      grid-area: 3 / 3 / 8 / 8;
      margin: 0px;
      overflow: auto;
    }
    article > a {
      grid-area: 8 / 3 / 8 / 8;
    }

    .carousel {
      border: 1px solid blue;
      overflow-x: auto;
      overflow-y: none;
      width: 100%;
      display: flex;
      height: 260px;
      gap: 20px;
      padding-bottom: 10px;
      scroll-snap-type: x mandatory;
    }

    .carousel > * {
      scroll-snap-align: center;
    }
  `;m([_({type:Array})],$.prototype,"carousel1",void 0);m([_({type:Array})],$.prototype,"carousel2",void 0);m([_({type:Array})],$.prototype,"didYouKnow",void 0);m([_({type:Array})],$.prototype,"highlights",void 0);m([_({type:String})],$.prototype,"fontSource",void 0);$=m([D("ia-democracys-library")],$);let Y=class extends y{render(){return f`
      <ia-democracys-library title="Hello">
        <div slot="my-slot">Some slotted content</div>
      </ia-democracys-library>
    `}};Y.styles=H`
    :host {
      display: block;
    }
  `;Y=m([D("app-root")],Y);
