const ve=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}};ve();function m(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var d=s.length-1;d>=0;d--)(n=s[d])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),X=new WeakMap;class he{constructor(e,t,i){if(this._$cssResult$=!0,i!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(J&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=X.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&X.set(t,e))}return e}toString(){return this.cssText}}const fe=s=>new he(typeof s=="string"?s:s+"",void 0,Q),b=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,o,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[r+1],s[0]);return new he(t,s,Q)},ye=(s,e)=>{J?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),o=window.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,s.appendChild(i)})},ee=J?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return fe(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var D;const te=window.trustedTypes,$e=te?te.emptyScript:"",ie=window.reactiveElementPolyfillSupport,V={toAttribute(s,e){switch(e){case Boolean:s=s?$e:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},pe=(s,e)=>e!==s&&(e==e||s==s),z={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:pe};class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,t=z){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(ee(o))}else e!==void 0&&t.push(ee(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ye(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=z){var o,r;const n=this.constructor._$Ep(e,i);if(n!==void 0&&i.reflect===!0){const d=((r=(o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&r!==void 0?r:V.toAttribute)(t,i.type);this._$El=e,d==null?this.removeAttribute(n):this.setAttribute(n,d),this._$El=null}}_$AK(e,t){var i,o;const r=this.constructor,n=r._$Ev.get(e);if(n!==void 0&&this._$El!==n){const d=r.getPropertyOptions(n),l=d.converter,a=(o=(i=l==null?void 0:l.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&o!==void 0?o:V.fromAttribute;this._$El=n,this[n]=a(t,d.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||pe)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},ie==null||ie({ReactiveElement:_}),((D=globalThis.reactiveElementVersions)!==null&&D!==void 0?D:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B;const x=globalThis.trustedTypes,oe=x?x.createPolicy("lit-html",{createHTML:s=>s}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,ue="?"+y,be=`<${ue}>`,E=document,O=(s="")=>E.createComment(s),R=s=>s===null||typeof s!="object"&&typeof s!="function",me=Array.isArray,we=s=>{var e;return me(s)||typeof((e=s)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,se=/-->/g,re=/>/g,$=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ne=/'/g,le=/"/g,ge=/^(?:script|style|textarea|title)$/i,_e=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),u=_e(1),S=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ae=new WeakMap,Ae=(s,e,t)=>{var i,o;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let n=r._$litPart$;if(n===void 0){const d=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:null;r._$litPart$=n=new N(e.insertBefore(O(),d),d,void 0,t!=null?t:{})}return n._$AI(s),n},A=E.createTreeWalker(E,129,null,!1),xe=(s,e)=>{const t=s.length-1,i=[];let o,r=e===2?"<svg>":"",n=T;for(let l=0;l<t;l++){const a=s[l];let f,c,h=-1,g=0;for(;g<a.length&&(n.lastIndex=g,c=n.exec(a),c!==null);)g=n.lastIndex,n===T?c[1]==="!--"?n=se:c[1]!==void 0?n=re:c[2]!==void 0?(ge.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=$):c[3]!==void 0&&(n=$):n===$?c[0]===">"?(n=o!=null?o:T,h=-1):c[1]===void 0?h=-2:(h=n.lastIndex-c[2].length,f=c[1],n=c[3]===void 0?$:c[3]==='"'?le:ne):n===le||n===ne?n=$:n===se||n===re?n=T:(n=$,o=void 0);const M=n===$&&s[l+1].startsWith("/>")?" ":"";r+=n===T?a+be:h>=0?(i.push(f),a.slice(0,h)+"$lit$"+a.slice(h)+y+M):a+y+(h===-2?(i.push(void 0),l):M)}const d=r+(s[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[oe!==void 0?oe.createHTML(d):d,i]};class H{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,n=0;const d=e.length-1,l=this.parts,[a,f]=xe(e,t);if(this.el=H.createElement(a,i),A.currentNode=this.el.content,t===2){const c=this.el.content,h=c.firstChild;h.remove(),c.append(...h.childNodes)}for(;(o=A.nextNode())!==null&&l.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const h of o.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(y)){const g=f[n++];if(c.push(h),g!==void 0){const M=o.getAttribute(g.toLowerCase()+"$lit$").split(y),L=/([.?@])?(.*)/.exec(g);l.push({type:1,index:r,name:L[2],strings:M,ctor:L[1]==="."?Se:L[1]==="?"?ke:L[1]==="@"?Te:I})}else l.push({type:6,index:r})}for(const h of c)o.removeAttribute(h)}if(ge.test(o.tagName)){const c=o.textContent.split(y),h=c.length-1;if(h>0){o.textContent=x?x.emptyScript:"";for(let g=0;g<h;g++)o.append(c[g],O()),A.nextNode(),l.push({type:2,index:++r});o.append(c[h],O())}}}else if(o.nodeType===8)if(o.data===ue)l.push({type:2,index:r});else{let c=-1;for(;(c=o.data.indexOf(y,c+1))!==-1;)l.push({type:7,index:r}),c+=y.length-1}r++}}static createElement(e,t){const i=E.createElement("template");return i.innerHTML=e,i}}function C(s,e,t=s,i){var o,r,n,d;if(e===S)return e;let l=i!==void 0?(o=t._$Cl)===null||o===void 0?void 0:o[i]:t._$Cu;const a=R(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(s),l._$AT(s,t,i)),i!==void 0?((n=(d=t)._$Cl)!==null&&n!==void 0?n:d._$Cl=[])[i]=l:t._$Cu=l),l!==void 0&&(e=C(s,l._$AS(s,e.values),l,i)),e}class Ee{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:o}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:E).importNode(i,!0);A.currentNode=r;let n=A.nextNode(),d=0,l=0,a=o[0];for(;a!==void 0;){if(d===a.index){let f;a.type===2?f=new N(n,n.nextSibling,this,e):a.type===1?f=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(f=new Oe(n,this,e)),this.v.push(f),a=o[++l]}d!==(a==null?void 0:a.index)&&(n=A.nextNode(),d++)}return r}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class N{constructor(e,t,i,o){var r;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cg=(r=o==null?void 0:o.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),R(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==S&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):we(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==p&&R(this._$AH)?this._$AA.nextSibling.data=e:this.k(E.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=H.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.m(i);else{const n=new Ee(r,this),d=n.p(this.options);n.m(i),this.k(d),this._$AH=n}}_$AC(e){let t=ae.get(e.strings);return t===void 0&&ae.set(e.strings,t=new H(e)),t}S(e){me(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new N(this.M(O()),this.M(O()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class I{constructor(e,t,i,o,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const r=this.strings;let n=!1;if(r===void 0)e=C(this,e,t,0),n=!R(e)||e!==this._$AH&&e!==S,n&&(this._$AH=e);else{const d=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=C(this,d[i+l],t,l),a===S&&(a=this._$AH[l]),n||(n=!R(a)||a!==this._$AH[l]),a===p?e=p:e!==p&&(e+=(a!=null?a:"")+r[l+1]),this._$AH[l]=a}n&&!o&&this.C(e)}C(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Se extends I{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===p?void 0:e}}const Ce=x?x.emptyScript:"";class ke extends I{constructor(){super(...arguments),this.type=4}C(e){e&&e!==p?this.element.setAttribute(this.name,Ce):this.element.removeAttribute(this.name)}}class Te extends I{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=C(this,e,t,0))!==null&&i!==void 0?i:p)===S)return;const o=this._$AH,r=e===p&&o!==p||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==p&&(o===p||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Oe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const de=window.litHtmlPolyfillSupport;de==null||de(H,N),((B=globalThis.litHtmlVersions)!==null&&B!==void 0?B:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j,W;class v extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ae(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return S}}v.finalized=!0,v._$litElement$=!0,(j=globalThis.litElementHydrateSupport)===null||j===void 0||j.call(globalThis,{LitElement:v});const ce=globalThis.litElementPolyfillSupport;ce==null||ce({LitElement:v});((W=globalThis.litElementVersions)!==null&&W!==void 0?W:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=s=>e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(s,e):((t,i)=>{const{kind:o,elements:r}=i;return{kind:o,elements:r,finisher(n){window.customElements.define(t,n)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}};function U(s){return(e,t)=>t!==void 0?((i,o,r)=>{o.constructor.createProperty(r,i)})(s,e,t):Re(s,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;((K=window.HTMLSlotElement)===null||K===void 0?void 0:K.prototype.assignedElements)!=null;let P=class extends v{constructor(){super(...arguments),this.src="",this.alt=""}render(){return u`
      <div>
        <img src=${this.src} alt=${this.alt} />
        <div id="overlay"></div>
      </div>
    `}};P.styles=b`
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
  `;m([U({type:String})],P.prototype,"src",void 0);m([U({type:String})],P.prototype,"alt",void 0);P=m([w("item-preview-image")],P);const He=[{title:"TROPICA ROADSTER CRASH REPORT",collectionTitle:"National Transportation Library",id:"finalreportofren00look",blurb:"What happens when you crash a Tropica Roadster straight into a barrier at 47kph? Find out in this report from the Vehicle Research and Test Center.",link:"https://archive.org/details/nationaltransportationlibrary",image:"https://archive.org/services/img/finalreportofren00look"},{title:"EXCAVATION OF HUMMINGBIRD SHELTER",collectionTitle:"Bureau of Land Management Library",id:"excavationofhumm00conn",blurb:"The Bureau of Land Management's report on the excavation of Hummingbird Shelter, part of the White River Resource Area in Colorado, United States.",link:"https://archive.org/details/blmlibrary",image:"https://archive.org/services/img/excavationofhumm00conn"},{title:"ORGANIZED CRIME ON WALL STREET",collectionTitle:"U.S. Congressional Hearings",id:"gov.gpo.fdsys.CHRG-106hhrg67115",blurb:"The Committee on Commerce's hearing on the topic of organized crime on Wall Street. Part of the 106th Congress' second session, this hearing took place September 13, 2000.",link:"https://archive.org/details/us_house_hearings",image:"https://archive.org/services/img/gov.gpo.fdsys.CHRG-106hhrg67115"},{title:"WEATHER MODIFICATION IN ALBERTA",collectionTitle:"Government of Alberta Publications",id:"potentialforweat00advi",blurb:"Report to the Minister of Agriculture, Government of Alberta from the Advisory Committee on Weather Modification",link:"https://archive.org/details/albertagovernmentpublications",image:"https://archive.org/services/img/potentialforweat00advi"},{title:"EDIBLE & POISONOUS MUSHROOMS OF CANADA",collectionTitle:"Agriculture and Agri-Food Canada Library",id:"ediblepoisonousm00grov",blurb:"From this guide from Agriculture Canada\u2014'Actually there is only one test to find out whether a mushroom or any other plant is poisonous and that is to eat it. If it makes you sick or kills you it is poisonous...' ",link:"https://archive.org/details/canadianagriculturallibrary",image:"https://archive.org/services/img/ediblepoisonousm00grov"}];let F=class extends v{render(){return u` <slot></slot> `}};F.styles=b`
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
  `;F=m([w("resources-highlights")],F);const Pe="INTERESTING GOVERNMENT DOCS",Ne=[{id:"MH07D7178",title:"Fundraising for Social Change, Part One",image:"https://archive.org/services/img/MH07D7178"},{id:"CAT92272736",title:"Two keys for appraising forest fire fuels",image:"https://archive.org/services/img/CAT92272736"},{id:"CAT79708698031",title:"Hamburger\u2014Questions and Answers",image:"https://archive.org/services/img/CAT79708698031"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"selectedpolishso00army",title:"Selected Polish songs",image:"https://archive.org/services/img/selectedpolishso00army"},{id:"blueprintforfutu9611unit",title:"Blueprint for the future",image:"https://archive.org/services/img/blueprintforfutu9611unit"},{id:"introductionlapt00albe",title:"Introduction \xE0 la p\xE2tisserie",image:"https://archive.org/services/img/introductionlapt00albe"},{id:"hintsonmountainl94youn",title:"Hints on mountain-lion trapping",image:"https://archive.org/services/img/hintsonmountainl94youn"},{id:"drylandfarmingin00cott",title:"Dry land farming in the Southwest",image:"https://archive.org/services/img/drylandfarmingin00cott"}],Ue=[{details:"There are 5,000,000,000,000,000,000,000,000,000,000 grains of sand on Earth."},{details:"You can sign up for a free Account and be able to create your own archive."}];let G=class extends v{render(){return u` <span><slot></slot></span> `}};G.styles=b`
    :host {
      font-family: 'Teko', sans-serif;
      font-size: 2.5rem;
      padding: 10px 10px 5px 0;
      background-repeat: no-repeat;
      background-size: cover;
      margin-bottom: 10px;
      display: inline-block;
      text-transform: uppercase;
      line-height: 20px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 379 115'%3E%3Cpath d='m2.41535907.06436505 93.98160413 2.05968771 93.9636758.42943203 93.981604 2.05968771 93.963677.42943203-.665728 8.52369197-2.808745 8.5057642-.665728 8.523692-2.808745 8.5057641-1.871974-.0001517-.305648 2.5778912 2.129108 16.5918028-.996866 8.389818-90.463508 2.9353281-90.36899 4.449321-70.310096 2.2808389 70.18701.1005118 94.051638 1.4916745 94.184497.1335401.687706 8.9709079-1.47682 9.4913393.690908 8.8960033-1.472546 9.39132-94.020429-3.36343-94.324131-2.010171-93.1214334-3.337782-94.27554848-2.008784 1.27882743-7.2656845-.85881548-7.374232 1.27882743-7.2656841-.85881547-7.3742321 7.71912497.1217028.0436635-1.448196 2.2974858-8.048923.2360666-7.9550062 2.2974858-8.0489229 89.0683703-4.7902162 158.503928-5.8247357-167.8631141-2.9324015-92.63274412.0113194 1.47781288-8.9465155-2.26795466-14.9397675z' fill='%23fefe81' fill-rule='evenodd'/%3E%3C/svg%3E");
    }

    :host(.green) {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 379 115' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m2.41535907.06436505 93.98160413 2.05968771 93.9636758.42943203 93.981604 2.05968771 93.963677.42943203-.665728 8.52369197-2.808745 8.5057642-.665728 8.523692-2.808745 8.5057641-1.871974-.0001517-.305648 2.5778912 2.129108 16.5918028-.996866 8.389818-90.463508 2.9353281-90.36899 4.449321-70.310096 2.2808389 70.18701.1005118 94.051638 1.4916745 94.184497.1335401.687706 8.9709079-1.47682 9.4913393.690908 8.8960033-1.472546 9.39132-94.020429-3.36343-94.324131-2.010171-93.1214334-3.337782-94.27554848-2.008784 1.27882743-7.2656845-.85881548-7.374232 1.27882743-7.2656841-.85881547-7.3742321 7.71912497.1217028.0436635-1.448196 2.2974858-8.048923.2360666-7.9550062 2.2974858-8.0489229 89.0683703-4.7902162 158.503928-5.8247357-167.8631141-2.9324015-92.63274412.0113194 1.47781288-8.9465155-2.26795466-14.9397675z' fill='%23e3fdd5' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
  `;G=m([w("ti-tle")],G);let Y=class extends v{render(){return u`<slot></slot>`}};Y.styles=b`
    :host {
      display: grid;
      gap: 0px 20px;
    }

    ::slotted(*) {
      border: 1px solid transparent;
    }

    ::slotted(*.title) {
      grid-area: 1 / 1 / 2 / 8;
    }

    ::slotted(*.item-preview) {
      grid-area: 2 / 1 / 8 / 3;
    }

    ::slotted(p.full-width) {
      grid-area: 2 / 1 / 7 / 7;
      margin-left: 0;
    }

    ::slotted(p) {
      grid-area: 2 / 3 / 7 / 8;
      overflow: auto;
      padding: 0px 10px 10px 0;
      max-height: 220px;
      margin: 0 auto;
      word-break: break-word;
    }

    ::slotted(a.link-to-collection),
    ::slotted(select) {
      grid-area: 7 / 3 / 7 / 8;
      vertical-align: baseline;
      display: flex;
    }

    ::slotted(*.map-img) {
      grid-area: 2 / 1 / 6 / 8;
    }
  `;Y=m([w("arti-cle")],Y);let q=class extends v{render(){return u`
      <section class="celebration-header">
        <span class="celebration-title"
          >Welcome to Democracy's Library collection.</span
        >
        <div class="left"></div>
        <div class="pic"></div>
        <div class="action-bar-section">
          <slot name="action-bar-section"></slot>
        </div>
      </section>
    `}};q.styles=b`
    :host {
      position: relative;
      display: block;
      width: 100%;
      height: 230px;
      margin-bottom: 10px;
    }

    ::slotted(*.action-bar-section) {
      height: 100%;
      float: right;
      padding: 0 10px;
    }

    section,
    section > * {
      height: inherit;
    }

    .celebration-title {
      height: 1px;
      width: 1px;
      position: absolute;
      margin-left: -1000px;
      overflow: hidden;
    }

    .left {
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
      z-index: 1;
      background-image: url('https://archive.org/download/democracys-library/web-component/banner-text.svg');
    }

    .pic {
      z-index: 2;
      position: absolute;
      top: 0px;
      bottom: 0px;
      right: 38px;
      height: 100%;
      width: 610px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: right bottom;
      background-image: url('https://archive.org/download/democracys-library/web-component/banner-image.webp');
    }

    .action-bar-section {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      min-width: 35px;
    }

    @media only screen and (min-width: 768px) {
      .pic {
        right: 88px;
      }
      .action-bar-section {
        width: 82px;
      }
    }

    @media only screen and (min-width: 1301px) {
      :host {
        height: 230px !important;
      }
    }

    @media only screen and (max-width: 1300px) {
      :host {
        height: 180px !important;
      }
    }

    @media only screen and (max-width: 990px) {
      :host {
        height: 150px !important;
      }
      .left {
        background-image: url('https://archive.org/download/democracys-library/web-component/banner-text-mini.svg');
      }
    }

    @media only screen and (max-width: 767px) {
      :host {
        height: var(--ia-dl-header-mobile-height, 88px) !important;
      }
    }

    @media only screen and (max-width: 500px) {
      .pic {
        background-image: url('https://archive.org/download/democracys-library/web-component/banner-image-mini.webp');
      }
    }
  `;q=m([w("welcome-header")],q);let k=class extends v{constructor(){super(...arguments),this.carousel1=Ne,this.didYouKnow=Ue,this.highlights=He}firstUpdated(){const e=document.createElement("style");e.innerHTML=`
    @font-face {
      font-family: "Teko";
      src: url(https://archive.org/cors/democracys-library/web-component/Teko-SemiBold.ttf);
    }`,e.setAttribute("id","teko-font"),document.head.appendChild(e)}disconnectedCallback(){const e=document.head.querySelector("#teko-font");e&&document.head.removeChild(e)}get factoids(){return this.didYouKnow.map((e,t)=>{const i=t%2===0?"yellow":"green";return u`
        <arti-cle>
          <div class="title">
            <ti-tle class=${i}
              ><span class="did-you-know-title">DID YOU KNOW?</span></ti-tle
            >
          </div>
          <p class="full-width">${e.details}</p>
        </arti-cle>
      `})}resourceCard(e,t){return u`
      <arti-cle>
        <div class="title">
          <ti-tle class=${t!=null?t:""}>${e.title}</ti-tle>
        </div>
        <a
          class="item-preview"
          href=${`https://archive.org/details/${e.id}`}
          target="_blank"
          title=${`Explore item: ${e.id}`}>
          <item-preview-image
            src=${e.image}
            class=${t!=null?t:""}
          ></item-preview-image>
        </a>
        <p>${e.blurb}</p>
        <a class="link-to-collection" href=${e.link} tab="_blank">Browse the ${e.collectionTitle}</a>
      </article>
    `}carouselCard(e,t){const i=`https://archive.org/details/${e.id}`;return u`
      <a href=${i} target="_blank" title=${`Explore item: ${e.title}`}>
        <item-preview-image
          src=${e.image}
          class=${t!=null?t:""}
        ></item-preview-image>
      </a>
    `}get topCarousel(){return u`
      <ti-tle class="green">${Pe}</ti-tle>
      <section id="carousel-1" class="carousel">
        ${this.carousel1.map((e,t)=>{const i=t%2===0?"yellow":"green";return this.carouselCard(e,i)})}
      </section>
    `}get resourcesOptions(){return u`<option>Select a resource</option>`}resourceSelected(e){console.log("resource selected ********",e)}render(){return u`
      <section id="democracys-library-main">
        <welcome-header>
          <div slot="action-bar-section">
            <slot name="action-bar-section"></slot>
          </div>
        </welcome-header>
        <section id="top-carousel">${this.topCarousel}</section>
        <section id="did-you-know">${this.factoids}</section>
        <resources-highlights>
          <arti-cle>
            <div class="title"><ti-tle class="green">Resources</ti-tle></div>
            <div class="map-img">
              <img
                src="https://archive.org/cors/democracys-library/web-component/US%2BCA%20map.png"
                alt="map of united states and canada"
              />
              <div class="map-overlay"></div>
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
          </arti-cle>
          ${this.highlights.map((e,t)=>{const i=t%2===0?"yellow":"green";return this.resourceCard(e,i)})}
        </resources-highlights>
      </section>
    `}};k.styles=b`
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

    welcome-header {
      background-color: #e3fdd5;
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
      margin-left: auto;
      margin-right: auto;
    }

    /** Did You Know */
    section#did-you-know {
      display: flex;
      gap: 20px;
    }
    section#did-you-know > * {
      border: 1px solid transparent;
      width: 50%;
    }
    .did-you-know-title {
      background-image: url(https://archive.org/download/democracys-library/web-component/help.svg);
      padding-left: 30px;
      background-repeat: no-repeat;
      vertical-align: initial;
      background-size: 28px;
      background-position: 0 25%;
    }
    @media only screen and (max-width: 550px) {
      section#did-you-know > * {
        width: 100%;
      }
    }
    @media only screen and (min-width: 551px) and (max-width: 1300px) {
      section#did-you-know > * {
        width: 50%;
      }
    }
    /** End Did You Know */

    /* MAP */
    .map-img {
      width: 100%;
      overflow: hidden;
      position: relative;
      max-height: 220px;
    }

    .map-img img {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }

    .map-overlay {
      background-color: #ebebff;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      mix-blend-mode: color;
    }
    /* End MAP */

    /** Resources */
    #resources-options {
      grid-area: 6 / 1 / 6 / 8;
    }

    #resources-options > select {
      width: 100%;
      display: block;
    }
    /** End Resources */

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
      display: block;
      position: relative;
    }
    .carousel::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
    /* End Carousel */
  `;m([U({type:Array})],k.prototype,"carousel1",void 0);m([U({type:Array})],k.prototype,"didYouKnow",void 0);m([U({type:Array})],k.prototype,"highlights",void 0);k=m([w("ia-democracys-library")],k);let Z=class extends v{render(){return u`
      <div class="match-ia-coll-margins">
        <ia-democracys-library> </ia-democracys-library>
      </div>
    `}};Z.styles=b`
    :host {
      display: block;
    }

    .match-ia-coll-margins {
      margin-right: auto;
      margin-left: auto;
      padding-left: 15px;
      padding-right: 15px;
    }
    @media (min-width: 768px) {
      .match-ia-coll-margins {
        max-width: 750px;
      }
    }
    @media (min-width: 992px) {
      .match-ia-coll-margins {
        max-width: 970px;
      }
    }
    @media (min-width: 1200px) {
      .match-ia-coll-margins {
        max-width: 1170px;
      }
    }
  `;Z=m([w("app-root")],Z);
