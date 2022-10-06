const ge=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};ge();function u(o,e,t,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,i);else for(var c=o.length-1;c>=0;c--)(n=o[c])&&(s=(r<3?n(s):r>3?n(e,t,s):n(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),G=new WeakMap;class ce{constructor(e,t,i){if(this._$cssResult$=!0,i!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(J&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=G.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&G.set(t,e))}return e}toString(){return this.cssText}}const ve=o=>new ce(typeof o=="string"?o:o+"",void 0,Z),U=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,r,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[s+1],o[0]);return new ce(t,o,Z)},me=(o,e)=>{J?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=window.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,o.appendChild(i)})},Q=J?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ve(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;const X=window.trustedTypes,fe=X?X.emptyScript:"",ee=window.reactiveElementPolyfillSupport,F={toAttribute(o,e){switch(e){case Boolean:o=o?fe:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},he=(o,e)=>e!==o&&(e==e||o==o),B={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:he};class A extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=B){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||B}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Q(r))}else e!==void 0&&t.push(Q(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return me(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=B){var r,s;const n=this.constructor._$Ep(e,i);if(n!==void 0&&i.reflect===!0){const c=((s=(r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&s!==void 0?s:F.toAttribute)(t,i.type);this._$El=e,c==null?this.removeAttribute(n):this.setAttribute(n,c),this._$El=null}}_$AK(e,t){var i,r;const s=this.constructor,n=s._$Ev.get(e);if(n!==void 0&&this._$El!==n){const c=s.getPropertyOptions(n),l=c.converter,a=(r=(i=l==null?void 0:l.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&r!==void 0?r:F.fromAttribute;this._$El=n,this[n]=a(t,c.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||he)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},ee==null||ee({ReactiveElement:A}),((z=globalThis.reactiveElementVersions)!==null&&z!==void 0?z:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var D;const C=globalThis.trustedTypes,te=C?C.createPolicy("lit-html",{createHTML:o=>o}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,de="?"+y,ye=`<${de}>`,x=document,P=(o="")=>x.createComment(o),T=o=>o===null||typeof o!="object"&&typeof o!="function",pe=Array.isArray,$e=o=>{var e;return pe(o)||typeof((e=o)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ie=/-->/g,re=/>/g,w=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,oe=/'/g,se=/"/g,ue=/^(?:script|style|textarea|title)$/i,we=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),m=we(1),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ne=new WeakMap,be=(o,e,t)=>{var i,r;const s=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let n=s._$litPart$;if(n===void 0){const c=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=n=new H(e.insertBefore(P(),c),c,void 0,t!=null?t:{})}return n._$AI(o),n},_=x.createTreeWalker(x,129,null,!1),Ae=(o,e)=>{const t=o.length-1,i=[];let r,s=e===2?"<svg>":"",n=S;for(let l=0;l<t;l++){const a=o[l];let v,h,d=-1,g=0;for(;g<a.length&&(n.lastIndex=g,h=n.exec(a),h!==null);)g=n.lastIndex,n===S?h[1]==="!--"?n=ie:h[1]!==void 0?n=re:h[2]!==void 0?(ue.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=w):h[3]!==void 0&&(n=w):n===w?h[0]===">"?(n=r!=null?r:S,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,v=h[1],n=h[3]===void 0?w:h[3]==='"'?se:oe):n===se||n===oe?n=w:n===ie||n===re?n=S:(n=w,r=void 0);const O=n===w&&o[l+1].startsWith("/>")?" ":"";s+=n===S?a+ye:d>=0?(i.push(v),a.slice(0,d)+"$lit$"+a.slice(d)+y+O):a+y+(d===-2?(i.push(void 0),l):O)}const c=s+(o[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[te!==void 0?te.createHTML(c):c,i]};class I{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,n=0;const c=e.length-1,l=this.parts,[a,v]=Ae(e,t);if(this.el=I.createElement(a,i),_.currentNode=this.el.content,t===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(r=_.nextNode())!==null&&l.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const h=[];for(const d of r.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(y)){const g=v[n++];if(h.push(d),g!==void 0){const O=r.getAttribute(g.toLowerCase()+"$lit$").split(y),N=/([.?@])?(.*)/.exec(g);l.push({type:1,index:s,name:N[2],strings:O,ctor:N[1]==="."?Ce:N[1]==="?"?Ee:N[1]==="@"?ke:L})}else l.push({type:6,index:s})}for(const d of h)r.removeAttribute(d)}if(ue.test(r.tagName)){const h=r.textContent.split(y),d=h.length-1;if(d>0){r.textContent=C?C.emptyScript:"";for(let g=0;g<d;g++)r.append(h[g],P()),_.nextNode(),l.push({type:2,index:++s});r.append(h[d],P())}}}else if(r.nodeType===8)if(r.data===de)l.push({type:2,index:s});else{let h=-1;for(;(h=r.data.indexOf(y,h+1))!==-1;)l.push({type:7,index:s}),h+=y.length-1}s++}}static createElement(e,t){const i=x.createElement("template");return i.innerHTML=e,i}}function k(o,e,t=o,i){var r,s,n,c;if(e===E)return e;let l=i!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[i]:t._$Cu;const a=T(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),a===void 0?l=void 0:(l=new a(o),l._$AT(o,t,i)),i!==void 0?((n=(c=t)._$Cl)!==null&&n!==void 0?n:c._$Cl=[])[i]=l:t._$Cu=l),l!==void 0&&(e=k(o,l._$AS(o,e.values),l,i)),e}class _e{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:x).importNode(i,!0);_.currentNode=s;let n=_.nextNode(),c=0,l=0,a=r[0];for(;a!==void 0;){if(c===a.index){let v;a.type===2?v=new H(n,n.nextSibling,this,e):a.type===1?v=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(v=new Se(n,this,e)),this.v.push(v),a=r[++l]}c!==(a==null?void 0:a.index)&&(n=_.nextNode(),c++)}return s}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class H{constructor(e,t,i,r){var s;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cg=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),T(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==E&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):$e(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==p&&T(this._$AH)?this._$AA.nextSibling.data=e:this.k(x.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=I.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.m(i);else{const n=new _e(s,this),c=n.p(this.options);n.m(i),this.k(c),this._$AH=n}}_$AC(e){let t=ne.get(e.strings);return t===void 0&&ne.set(e.strings,t=new I(e)),t}S(e){pe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new H(this.M(P()),this.M(P()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class L{constructor(e,t,i,r,s){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const s=this.strings;let n=!1;if(s===void 0)e=k(this,e,t,0),n=!T(e)||e!==this._$AH&&e!==E,n&&(this._$AH=e);else{const c=e;let l,a;for(e=s[0],l=0;l<s.length-1;l++)a=k(this,c[i+l],t,l),a===E&&(a=this._$AH[l]),n||(n=!T(a)||a!==this._$AH[l]),a===p?e=p:e!==p&&(e+=(a!=null?a:"")+s[l+1]),this._$AH[l]=a}n&&!r&&this.C(e)}C(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Ce extends L{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===p?void 0:e}}const xe=C?C.emptyScript:"";class Ee extends L{constructor(){super(...arguments),this.type=4}C(e){e&&e!==p?this.element.setAttribute(this.name,xe):this.element.removeAttribute(this.name)}}class ke extends L{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=k(this,e,t,0))!==null&&i!==void 0?i:p)===E)return;const r=this._$AH,s=e===p&&r!==p||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==p&&(r===p||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Se{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}}const le=window.litHtmlPolyfillSupport;le==null||le(I,H),((D=globalThis.litHtmlVersions)!==null&&D!==void 0?D:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j,K;class f extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=be(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return E}}f.finalized=!0,f._$litElement$=!0,(j=globalThis.litElementHydrateSupport)===null||j===void 0||j.call(globalThis,{LitElement:f});const ae=globalThis.litElementPolyfillSupport;ae==null||ae({LitElement:f});((K=globalThis.litElementVersions)!==null&&K!==void 0?K:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=o=>e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(o,e):((t,i)=>{const{kind:r,elements:s}=i;return{kind:r,elements:s,finisher(n){window.customElements.define(t,n)}}})(o,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function b(o){return(e,t)=>t!==void 0?((i,r,s)=>{r.constructor.createProperty(s,i)})(o,e,t):Pe(o,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V;((V=window.HTMLSlotElement)===null||V===void 0?void 0:V.prototype.assignedElements)!=null;let M=class extends f{constructor(){super(...arguments),this.src="",this.alt=""}render(){return m`
      <div>
        <img src=${this.src} alt=${this.alt} />
      </div>
    `}};M.styles=U`
    :host {
      display: block;
    }

    div {
      height: 260px;
      width: 160px;
      display: flex;
      flex-direction: column;
    }

    img {
      object-fit: contain;
      max-width: 100%;
      max-height: 100%;
    }
  `;u([b({type:String})],M.prototype,"src",void 0);u([b({type:String})],M.prototype,"alt",void 0);M=u([R("item-preview-image")],M);const Te=[{title:"Military Industrial Powerpoint Complex","item-identifier":"MiclitaryIndustrialPowerpointComplex",blurb:"This collection was a special project originally done as part of the Internet Archive's 20th Anniversary celebration on October 26, 2016 highlighting IA's web archive. The collection consists of all the Powerpoint files (57,489) from the .mil web domain that were crawled from the public web (with no special login or credentials) by the Internet Archive and partners from 1996-2017.  Surprisingly good for karaoke.",link:"https://archive.org/details/MilitaryIndustrialPowerpointComplex",image:"https://archive.org/services/img/MilitaryIndustrialPowerpointComplex"},{title:"Military Industrial Powerpoint Complex","item-identifier":"MilitaryIndustrialPowerpointComplex",blurb:"This collection was a special project originally done as part of the Internet Archive's 20th Anniversary celebration on October 26, 2016 highlighting IA's web archive. The collection consists of all the Powerpoint files (57,489) from the .mil web domain that were crawled from the public web (with no special login or credentials) by the Internet Archive and partners from 1996-2017.  Surprisingly good for karaoke.",link:"https://archive.org/details/MilitaryIndustrialPowerpointComplex",image:"https://archive.org/services/img/MilitaryIndustrialPowerpointComplex"},{title:"Military Industrial Powerpoint Complex","item-identifier":"MilitaryIndustrialPowerpointComplex",blurb:"This collection was a special project originally done as part of the Internet Archive's 20th Anniversary celebration on October 26, 2016 highlighting IA's web archive. The collection consists of all the Powerpoint files (57,489) from the .mil web domain that were crawled from the public web (with no special login or credentials) by the Internet Archive and partners from 1996-2017.  Surprisingly good for karaoke.",link:"https://archive.org/details/MilitaryIndustrialPowerpointComplex",image:"https://archive.org/services/img/MilitaryIndustrialPowerpointComplex"},{title:"Military Industrial Powerpoint Complex","item-identifier":"MilitaryIndustrialPowerpointComplex",blurb:"This collection was a special project originally done as part of the Internet Archive's 20th Anniversary celebration on October 26, 2016 highlighting IA's web archive. The collection consists of all the Powerpoint files (57,489) from the .mil web domain that were crawled from the public web (with no special login or credentials) by the Internet Archive and partners from 1996-2017.  Surprisingly good for karaoke.",link:"https://archive.org/details/MilitaryIndustrialPowerpointComplex",image:"https://archive.org/services/img/MilitaryIndustrialPowerpointComplex"},{title:"Military Industrial Powerpoint Complex","item-identifier":"MilitaryIndustrialPowerpointComplex",blurb:"This collection was a special project originally done as part of the Internet Archive's 20th Anniversary celebration on October 26, 2016 highlighting IA's web archive. The collection consists of all the Powerpoint files (57,489) from the .mil web domain that were crawled from the public web (with no special login or credentials) by the Internet Archive and partners from 1996-2017.  Surprisingly good for karaoke.",link:"https://archive.org/details/MilitaryIndustrialPowerpointComplex",image:"https://archive.org/services/img/MilitaryIndustrialPowerpointComplex"}];let W=class extends f{render(){return m` <slot></slot> `}};W.styles=U`
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
  `;W=u([R("resources-highlights")],W);const Ie="Care and Feeding of Democracy",Me=[{id:"blueprintforfutu9611unit",title:"Blueprint for the future",image:"https://archive.org/services/img/blueprintforfutu9611unit"},{id:"CAT31125286",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31125286"},{id:"blueprintforfutu9611unit",title:"Blueprint for the future",image:"https://archive.org/services/img/blueprintforfutu9611unit"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"blueprintforfutu9611unit",title:"Blueprint for the future",image:"https://archive.org/services/img/blueprintforfutu9611unit"},{id:"blueprintforfutu9611unit",title:"Blueprint for the future",image:"https://archive.org/services/img/blueprintforfutu9611unit"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"CAT31125286",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31125286"}],Ue="FEDLINK - United States Federal Collection",He=[{id:"magicofmindhowco00unse",title:"The magic of the mind",image:"https://archive.org/services/img/magicofmindhowco00unse"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"},{id:"recipesforevapor263kirk",title:"Recipes for evaporated apple rings",image:"https://archive.org/services/img/recipesforevapor263kirk"}];let q=class extends f{render(){return m` <span><slot></slot></span> `}};q.styles=U`
    :host {
      font-family: 'Teko', sans-serif;
      font-size: 2rem;
      padding-right: 10px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 379 115' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m2.41535907.06436505 93.98160413 2.05968771 93.9636758.42943203 93.981604 2.05968771 93.963677.42943203-.665728 8.52369197-2.808745 8.5057642-.665728 8.523692-2.808745 8.5057641-1.871974-.0001517-.305648 2.5778912 2.129108 16.5918028-.996866 8.389818-90.463508 2.9353281-90.36899 4.449321-70.310096 2.2808389 70.18701.1005118 94.051638 1.4916745 94.184497.1335401.687706 8.9709079-1.47682 9.4913393.690908 8.8960033-1.472546 9.39132-94.020429-3.36343-94.324131-2.010171-93.1214334-3.337782-94.27554848-2.008784 1.27882743-7.2656845-.85881548-7.374232 1.27882743-7.2656841-.85881547-7.3742321 7.71912497.1217028.0436635-1.448196 2.2974858-8.048923.2360666-7.9550062 2.2974858-8.0489229 89.0683703-4.7902162 158.503928-5.8247357-167.8631141-2.9324015-92.63274412.0113194 1.47781288-8.9465155-2.26795466-14.9397675z' fill='%23e3fdd5' fill-rule='evenodd'/%3E%3C/svg%3E");
    }

    :host(.green) {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 379 115'%3E%3Cpath d='m2.41535907.06436505 93.98160413 2.05968771 93.9636758.42943203 93.981604 2.05968771 93.963677.42943203-.665728 8.52369197-2.808745 8.5057642-.665728 8.523692-2.808745 8.5057641-1.871974-.0001517-.305648 2.5778912 2.129108 16.5918028-.996866 8.389818-90.463508 2.9353281-90.36899 4.449321-70.310096 2.2808389 70.18701.1005118 94.051638 1.4916745 94.184497.1335401.687706 8.9709079-1.47682 9.4913393.690908 8.8960033-1.472546 9.39132-94.020429-3.36343-94.324131-2.010171-93.1214334-3.337782-94.27554848-2.008784 1.27882743-7.2656845-.85881548-7.374232 1.27882743-7.2656841-.85881547-7.3742321 7.71912497.1217028.0436635-1.448196 2.2974858-8.048923.2360666-7.9550062 2.2974858-8.0489229 89.0683703-4.7902162 158.503928-5.8247357-167.8631141-2.9324015-92.63274412.0113194 1.47781288-8.9465155-2.26795466-14.9397675z' fill='%23fefe81' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
  `;q=u([R("ti-tle")],q);let $=class extends f{constructor(){super(...arguments),this.carousel1=Me,this.carousel2=He,this.didYouKnow=[],this.highlights=Te,this.fontSource=""}firstUpdated(){const e=this.fontSource||"/assets/Teko-SemiBold.ttf",t=document.createElement("style");t.innerHTML=`
    @font-face {
      font-family: "Teko";
      src: url(${e});
    }`,t.setAttribute("id","teko-font"),document.head.appendChild(t)}disconnectedCallback(){const e=document.head.querySelector("#teko-font");e&&document.head.removeChild(e)}createCard(e){return m`
      <article>
        <div class="title"><ti-tle>${e.title}</ti-tle></div>
        <item-preview-image
          src=${e.image}
          alt="preview image."
        ></item-preview-image>
        <p>${e.blurb}</p>
        <a href=${e.link} tab="_blank"
          >Browse the ${e.title} collection</a
        >
      </article>
    `}carouselCard(e){const t=`https://archive.org/details/${e.id}`;return m`
      <a href=${t}>
        <item-preview-image
          src=${e.image}
          alt=${`Go to: ${e.title}`}
        ></item-preview-image>
      </a>
    `}get topCarousel(){return m`
      <ti-tle class="green">${Ie}</ti-tle>
      <section id="carousel-1" class="carousel">
        ${this.carousel1.map(e=>this.carouselCard(e))}
      </section>
    `}get bottomCarousel(){return m`
      <ti-tle class="green">${Ue}</ti-tle>
      <section id="carousel-2" class="carousel">
        ${this.carousel2.map(e=>this.carouselCard(e))}
      </section>
    `}render(){return m`
      <section id="democracys-library-main">
        <header>cool image goes here</header>
        <section id="top-carousel">${this.topCarousel}</section>
        <section id="did-you-know">${this.didYouKnow}</section>
        <resources-highlights>
          <div id="map">
            <ti-tle class="green">Resources</ti-tle>
            <div id="map-img"></div>
          </div>
          ${this.highlights.map(e=>this.createCard(e))}
        </resources-highlights>
        <section id="bottom-carousel">${this.bottomCarousel}</section>
      </section>
    `}};$.styles=U`
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

    header {
      height: 150px;
      width: 100%;
      background-color: lightseagreen;
      margin: 0 auto;
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
    article > p {
      grid-area: 2 / 3 / 7 / 8;
      overflow: auto;
      padding: 0px 10px 10px 0;
      max-height: 220px;
      margin: 0 auto;
    }
    article > a {
      grid-area: 7 / 3 / 7 / 8;
      vertical-align: baseline;
      display: flex;
    }

    /* Carousel */
    .carousel {
      overflow-x: scroll;
      display: flex;
      height: 260px;
      gap: 20px;
      scroll-snap-type: x mandatory;
      padding: 10px 20px;
    }

    .carousel > * {
      scroll-snap-align: center;
    }

    .carousel > *:nth-child(odd) {
      background-color: #e3fdd5;
    }
    .carousel > *:nth-child(even) {
      background-color: #fefe81;
    }
    /* End Carousel */

    resources-highlights > *:nth-child(odd) ti-tle {
      /* green */
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 379 115'%3E%3Cpath d='m2.41535907.06436505 93.98160413 2.05968771 93.9636758.42943203 93.981604 2.05968771 93.963677.42943203-.665728 8.52369197-2.808745 8.5057642-.665728 8.523692-2.808745 8.5057641-1.871974-.0001517-.305648 2.5778912 2.129108 16.5918028-.996866 8.389818-90.463508 2.9353281-90.36899 4.449321-70.310096 2.2808389 70.18701.1005118 94.051638 1.4916745 94.184497.1335401.687706 8.9709079-1.47682 9.4913393.690908 8.8960033-1.472546 9.39132-94.020429-3.36343-94.324131-2.010171-93.1214334-3.337782-94.27554848-2.008784 1.27882743-7.2656845-.85881548-7.374232 1.27882743-7.2656841-.85881547-7.3742321 7.71912497.1217028.0436635-1.448196 2.2974858-8.048923.2360666-7.9550062 2.2974858-8.0489229 89.0683703-4.7902162 158.503928-5.8247357-167.8631141-2.9324015-92.63274412.0113194 1.47781288-8.9465155-2.26795466-14.9397675z' fill='%23fefe81' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
    resources-highlights > *:nth-child(even) ti-tle {
      /* yellow */
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 379 115' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m2.41535907.06436505 93.98160413 2.05968771 93.9636758.42943203 93.981604 2.05968771 93.963677.42943203-.665728 8.52369197-2.808745 8.5057642-.665728 8.523692-2.808745 8.5057641-1.871974-.0001517-.305648 2.5778912 2.129108 16.5918028-.996866 8.389818-90.463508 2.9353281-90.36899 4.449321-70.310096 2.2808389 70.18701.1005118 94.051638 1.4916745 94.184497.1335401.687706 8.9709079-1.47682 9.4913393.690908 8.8960033-1.472546 9.39132-94.020429-3.36343-94.324131-2.010171-93.1214334-3.337782-94.27554848-2.008784 1.27882743-7.2656845-.85881548-7.374232 1.27882743-7.2656841-.85881547-7.3742321 7.71912497.1217028.0436635-1.448196 2.2974858-8.048923.2360666-7.9550062 2.2974858-8.0489229 89.0683703-4.7902162 158.503928-5.8247357-167.8631141-2.9324015-92.63274412.0113194 1.47781288-8.9465155-2.26795466-14.9397675z' fill='%23e3fdd5' fill-rule='evenodd'/%3E%3C/svg%3E");
    }

    div#map > #map-img {
      background-color: rgb(235, 235, 255);
      height: 70%;
    }
  `;u([b({type:Array})],$.prototype,"carousel1",void 0);u([b({type:Array})],$.prototype,"carousel2",void 0);u([b({type:Array})],$.prototype,"didYouKnow",void 0);u([b({type:Array})],$.prototype,"highlights",void 0);u([b({type:String})],$.prototype,"fontSource",void 0);$=u([R("ia-democracys-library")],$);let Y=class extends f{render(){return m`
      <ia-democracys-library title="Hello">
        <div slot="my-slot">Some slotted content</div>
      </ia-democracys-library>
    `}};Y.styles=U`
    :host {
      display: block;
    }
  `;Y=u([R("app-root")],Y);
