const Ne=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}};Ne();function y(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var c=s.length-1;c>=0;c--)(n=s[c])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=window,ne=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,le=Symbol(),de=new WeakMap;class xe{constructor(e,t,i){if(this._$cssResult$=!0,i!==le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ne&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=de.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&de.set(t,e))}return e}toString(){return this.cssText}}const Le=s=>new xe(typeof s=="string"?s:s+"",void 0,le),C=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,o,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[r+1],s[0]);return new xe(t,s,le)},Me=(s,e)=>{ne?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),o=z.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,s.appendChild(i)})},he=ne?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Le(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F;const W=window,ue=W.trustedTypes,Ie=ue?ue.emptyScript:"",pe=W.reactiveElementPolyfillSupport,ee={toAttribute(s,e){switch(e){case Boolean:s=s?Ie:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Ee=(s,e)=>e!==s&&(e==e||s==s),K={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:Ee};class T extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,t=K){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||K}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(he(o))}else e!==void 0&&t.push(he(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Me(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=K){var o;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const n=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:ee).toAttribute(t,i.type);this._$El=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,r=o._$Ev.get(e);if(r!==void 0&&this._$El!==r){const n=o.getPropertyOptions(r),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:ee;this._$El=r,this[r]=c.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Ee)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}T.finalized=!0,T.elementProperties=new Map,T.elementStyles=[],T.shadowRootOptions={mode:"open"},pe==null||pe({ReactiveElement:T}),((F=W.reactiveElementVersions)!==null&&F!==void 0?F:W.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Y;const G=window,R=G.trustedTypes,me=R?R.createPolicy("lit-html",{createHTML:s=>s}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,ae="?"+_,De=`<${ae}>`,H=document,M=(s="")=>H.createComment(s),I=s=>s===null||typeof s!="object"&&typeof s!="function",ke=Array.isArray,Ce=s=>ke(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ve=/-->/g,ge=/>/g,A=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fe=/'/g,ye=/"/g,Se=/^(?:script|style|textarea|title)$/i,Be=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),f=Be(1),x=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),$e=new WeakMap,O=H.createTreeWalker(H,129,null,!1),Te=(s,e)=>{const t=s.length-1,i=[];let o,r=e===2?"<svg>":"",n=N;for(let a=0;a<t;a++){const l=s[a];let g,h,d=-1,u=0;for(;u<l.length&&(n.lastIndex=u,h=n.exec(l),h!==null);)u=n.lastIndex,n===N?h[1]==="!--"?n=ve:h[1]!==void 0?n=ge:h[2]!==void 0?(Se.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=A):h[3]!==void 0&&(n=A):n===A?h[0]===">"?(n=o!=null?o:N,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,g=h[1],n=h[3]===void 0?A:h[3]==='"'?ye:fe):n===ye||n===fe?n=A:n===ve||n===ge?n=N:(n=A,o=void 0);const p=n===A&&s[a+1].startsWith("/>")?" ":"";r+=n===N?l+De:d>=0?(i.push(g),l.slice(0,d)+"$lit$"+l.slice(d)+_+p):l+_+(d===-2?(i.push(void 0),a):p)}const c=r+(s[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[me!==void 0?me.createHTML(c):c,i]};class D{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,n=0;const c=e.length-1,a=this.parts,[l,g]=Te(e,t);if(this.el=D.createElement(l,i),O.currentNode=this.el.content,t===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(o=O.nextNode())!==null&&a.length<c;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const d of o.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(_)){const u=g[n++];if(h.push(d),u!==void 0){const p=o.getAttribute(u.toLowerCase()+"$lit$").split(_),m=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:m[2],strings:p,ctor:m[1]==="."?Re:m[1]==="?"?He:m[1]==="@"?Pe:j})}else a.push({type:6,index:r})}for(const d of h)o.removeAttribute(d)}if(Se.test(o.tagName)){const h=o.textContent.split(_),d=h.length-1;if(d>0){o.textContent=R?R.emptyScript:"";for(let u=0;u<d;u++)o.append(h[u],M()),O.nextNode(),a.push({type:2,index:++r});o.append(h[d],M())}}}else if(o.nodeType===8)if(o.data===ae)a.push({type:2,index:r});else{let h=-1;for(;(h=o.data.indexOf(_,h+1))!==-1;)a.push({type:7,index:r}),h+=_.length-1}r++}}static createElement(e,t){const i=H.createElement("template");return i.innerHTML=e,i}}function E(s,e,t=s,i){var o,r,n,c;if(e===x)return e;let a=i!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[i]:t._$Cl;const l=I(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(s),a._$AT(s,t,i)),i!==void 0?((n=(c=t)._$Co)!==null&&n!==void 0?n:c._$Co=[])[i]=a:t._$Cl=a),a!==void 0&&(e=E(s,a._$AS(s,e.values),a,i)),e}class Oe{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:o}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:H).importNode(i,!0);O.currentNode=r;let n=O.nextNode(),c=0,a=0,l=o[0];for(;l!==void 0;){if(c===l.index){let g;l.type===2?g=new P(n,n.nextSibling,this,e):l.type===1?g=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(g=new Ue(n,this,e)),this.u.push(g),l=o[++a]}c!==(l==null?void 0:l.index)&&(n=O.nextNode(),c++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class P{constructor(e,t,i,o){var r;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cm=(r=o==null?void 0:o.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),I(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==x&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ce(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==v&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T(H.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=D.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const n=new Oe(r,this),c=n.v(this.options);n.p(i),this.T(c),this._$AH=n}}_$AC(e){let t=$e.get(e.strings);return t===void 0&&$e.set(e.strings,t=new D(e)),t}k(e){ke(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new P(this.O(M()),this.O(M()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class j{constructor(e,t,i,o,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const r=this.strings;let n=!1;if(r===void 0)e=E(this,e,t,0),n=!I(e)||e!==this._$AH&&e!==x,n&&(this._$AH=e);else{const c=e;let a,l;for(e=r[0],a=0;a<r.length-1;a++)l=E(this,c[i+a],t,a),l===x&&(l=this._$AH[a]),n||(n=!I(l)||l!==this._$AH[a]),l===v?e=v:e!==v&&(e+=(l!=null?l:"")+r[a+1]),this._$AH[a]=l}n&&!o&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Re extends j{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}}const je=R?R.emptyScript:"";class He extends j{constructor(){super(...arguments),this.type=4}j(e){e&&e!==v?this.element.setAttribute(this.name,je):this.element.removeAttribute(this.name)}}class Pe extends j{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=E(this,e,t,0))!==null&&i!==void 0?i:v)===x)return;const o=this._$AH,r=e===v&&o!==v||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==v&&(o===v||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Ue{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const ze={P:"$lit$",A:_,M:ae,C:1,L:Te,R:Oe,D:Ce,V:E,I:P,H:j,N:He,U:Pe,B:Re,F:Ue},be=G.litHtmlPolyfillSupport;be==null||be(D,P),((Y=G.litHtmlVersions)!==null&&Y!==void 0?Y:G.litHtmlVersions=[]).push("2.4.0");const We=(s,e,t)=>{var i,o;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let n=r._$litPart$;if(n===void 0){const c=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:null;r._$litPart$=n=new P(e.insertBefore(M(),c),c,void 0,t!=null?t:{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J,q;class $ extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=We(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return x}}$.finalized=!0,$._$litElement$=!0,(J=globalThis.litElementHydrateSupport)===null||J===void 0||J.call(globalThis,{LitElement:$});const _e=globalThis.litElementPolyfillSupport;_e==null||_e({LitElement:$});((q=globalThis.litElementVersions)!==null&&q!==void 0?q:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=s=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(s,e):((t,i)=>{const{kind:o,elements:r}=i;return{kind:o,elements:r,finisher(n){customElements.define(t,n)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}};function U(s){return(e,t)=>t!==void 0?((i,o,r)=>{o.constructor.createProperty(r,i)})(s,e,t):Ge(s,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z;((Z=window.HTMLSlotElement)===null||Z===void 0?void 0:Z.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Fe=s=>(...e)=>({_$litDirective$:s,values:e});class Ke{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ye}=ze,Ae=()=>document.createComment(""),L=(s,e,t)=>{var i;const o=s._$AA.parentNode,r=e===void 0?s._$AB:e._$AA;if(t===void 0){const n=o.insertBefore(Ae(),r),c=o.insertBefore(Ae(),r);t=new Ye(n,c,s,s.options)}else{const n=t._$AB.nextSibling,c=t._$AM,a=c!==s;if(a){let l;(i=t._$AQ)===null||i===void 0||i.call(t,s),t._$AM=s,t._$AP!==void 0&&(l=s._$AU)!==c._$AU&&t._$AP(l)}if(n!==r||a){let l=t._$AA;for(;l!==n;){const g=l.nextSibling;o.insertBefore(l,r),l=g}}}return t},w=(s,e,t=s)=>(s._$AI(e,t),s),Je={},qe=(s,e=Je)=>s._$AH=e,Ze=s=>s._$AH,Q=s=>{var e;(e=s._$AP)===null||e===void 0||e.call(s,!1,!0);let t=s._$AA;const i=s._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=(s,e,t)=>{const i=new Map;for(let o=e;o<=t;o++)i.set(s[o],o);return i},Qe=Fe(class extends Ke{constructor(s){if(super(s),s.type!==Ve.CHILD)throw Error("repeat() can only be used in text expressions")}ht(s,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const o=[],r=[];let n=0;for(const c of s)o[n]=i?i(c,n):n,r[n]=t(c,n),n++;return{values:r,keys:o}}render(s,e,t){return this.ht(s,e,t).values}update(s,[e,t,i]){var o;const r=Ze(s),{values:n,keys:c}=this.ht(e,t,i);if(!Array.isArray(r))return this.ut=c,n;const a=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],l=[];let g,h,d=0,u=r.length-1,p=0,m=n.length-1;for(;d<=u&&p<=m;)if(r[d]===null)d++;else if(r[u]===null)u--;else if(a[d]===c[p])l[p]=w(r[d],n[p]),d++,p++;else if(a[u]===c[m])l[m]=w(r[u],n[m]),u--,m--;else if(a[d]===c[m])l[m]=w(r[d],n[m]),L(s,l[m+1],r[d]),d++,m--;else if(a[u]===c[p])l[p]=w(r[u],n[p]),L(s,r[d],r[u]),u--,p++;else if(g===void 0&&(g=we(c,p,m),h=we(a,d,u)),g.has(a[d]))if(g.has(a[u])){const b=h.get(c[p]),V=b!==void 0?r[b]:null;if(V===null){const ce=L(s,r[d]);w(ce,n[p]),l[p]=ce}else l[p]=w(V,n[p]),L(s,r[d],V),r[b]=null;p++}else Q(r[u]),u--;else Q(r[d]),d++;for(;p<=m;){const b=L(s,l[m+1]);w(b,n[p]),l[p++]=b}for(;d<=u;){const b=r[d++];b!==null&&Q(b)}return this.ut=c,qe(s,l),x}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Xe(s,e){if(s!==void 0){let t=0;for(const i of s)yield e(i,t++)}}let B=class extends ${constructor(){super(...arguments),this.src="",this.alt=""}render(){return f`
      <div>
        <img src=${this.src} alt=${this.alt} />
        <div id="overlay"></div>
      </div>
    `}};B.styles=C`
    :host {
      display: block;
    }

    :host(.yellow) div#overlay {
      background-color: #fefe81;
    }

    :host(.green) div#overlay {
      background-color: #e3fdd5;
    }

    :host(.blue) div#overlay {
      background-color: #e5f1fa;
    }

    :host(.yellow) img,
    :host(.green) img,
    :host(.blue) img {
      mix-blend-mode: darken;
    }

    div {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    img {
      object-fit: cover;
      width: var(--ia-dl-resource-card-img-width, 160px);
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
  `;y([U({type:String})],B.prototype,"src",void 0);y([U({type:String})],B.prototype,"alt",void 0);B=y([S("item-preview-image")],B);const et=[{title:"JAN 6th COMMITTEE DOCS",collectionTitle:"Jan 6th Committee Docs",id:"report-final-report-jan-6-select-committee",blurb:"The United States House Select Committee to Investigate the January 6th Attack on the United States Capitol (the January 6th Committee) is a bipartisan select committee of the U.S. House of Representatives established to investigate the U.S. Capitol attack.",link:"https://archive.org/details/jan-6th-committee-docs",image:"https://archive.org/services/img/report-final-report-jan-6-select-committee"},{title:"EXCAVATION OF HUMMINGBIRD SHELTER",collectionTitle:"Bureau of Land Management Library",id:"excavationofhumm00conn",blurb:"The Bureau of Land Management's report on the excavation of Hummingbird Shelter, part of the White River Resource Area in Colorado, United States.",link:"https://archive.org/details/blmlibrary",image:"https://archive.org/services/img/excavationofhumm00conn"},{title:"ORGANIZED CRIME ON WALL STREET",collectionTitle:"U.S. Congressional Hearings",id:"gov.gpo.fdsys.CHRG-106hhrg67115",blurb:"The Committee on Commerce's hearing on the topic of organized crime on Wall Street. Part of the 106th Congress' second session, this hearing took place September 13, 2000.",link:"https://archive.org/details/us_house_hearings",image:"https://archive.org/services/img/gov.gpo.fdsys.CHRG-106hhrg67115"},{title:"WEATHER MODIFICATION IN ALBERTA",collectionTitle:"Government of Alberta Publications",id:"potentialforweat00advi",blurb:"Report to the Minister of Agriculture, Government of Alberta from the Advisory Committee on Weather Modification",link:"https://archive.org/details/albertagovernmentpublications",image:"https://archive.org/services/img/potentialforweat00advi"},{title:"EDIBLE & POISONOUS MUSHROOMS OF CANADA",collectionTitle:"Agriculture and Agri-Food Canada Library",id:"ediblepoisonousm00grov",blurb:'From the guide: "Actually there is only one test to find out whether a mushroom or any other plant is poisonous and that is to eat it. If it makes you sick or kills you it is poisonous."',link:"https://archive.org/details/canadianagriculturallibrary",image:"https://archive.org/services/img/ediblepoisonousm00grov"}];let te=class extends ${render(){return f` <slot></slot> `}};te.styles=C`
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
  `;te=y([S("resources-highlights")],te);const tt="COLLECTION HIGHLIGHTS",it=[{id:"MH07D7178",title:"Fundraising for Social Change, Part One",image:"https://archive.org/services/img/MH07D7178"},{id:"CAT92272736",title:"Two keys for appraising forest fire fuels",image:"https://archive.org/services/img/CAT92272736"},{id:"CAT79708698031",title:"Hamburger\u2014Questions and Answers",image:"https://archive.org/services/img/CAT79708698031"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"selectedpolishso00army",title:"Selected Polish songs",image:"https://archive.org/services/img/selectedpolishso00army"},{id:"blueprintforfutu9611unit",title:"Blueprint for the future",image:"https://archive.org/services/img/blueprintforfutu9611unit"},{id:"introductionlapt00albe",title:"Introduction \xE0 la p\xE2tisserie",image:"https://archive.org/services/img/introductionlapt00albe"},{id:"hintsonmountainl94youn",title:"Hints on mountain-lion trapping",image:"https://archive.org/services/img/hintsonmountainl94youn"},{id:"drylandfarmingin00cott",title:"Dry land farming in the Southwest",image:"https://archive.org/services/img/drylandfarmingin00cott"}],ot=[{cardTitle:"ABOUT THIS PROJECT",details:"Democracy's Library brings together more than 700 collections from over 50 government organizations, archived by the Internet Archive since 2006. With more than half a million documents (and counting) from local, regional, and national governments, we're just getting started!",link:"http://blog.archive.org/2022/09/06/building-democracys-library-celebrate-with-the-internet-archive-on-october-19/",linkText:"Learn more"},{cardTitle:"WHAT'S NEXT?",details:"This is just the beginning. Democracy's Library will continue to grow and be updated over time. We'll be adding more information from all over the world, along with useful tools to help find and access what you need. You can help us grow by making a contribution today!",link:"https://archive.org/donate/?origin=iawww-democlibrycllctn",linkText:"DONATE",donateCard:!0}];let ie=class extends ${render(){return f` <span><slot></slot></span> `}};ie.styles=C`
    :host,
    ::slotted(*) {
      font-size: 2.5rem;
    }
    :host {
      font-family: 'Teko', sans-serif;
      padding: 10px 5px 5px 0;
      background-repeat: no-repeat;
      background-size: cover;
      margin-bottom: 10px;
      display: inline-block;
      text-transform: uppercase;
      line-height: 20px;
      letter-spacing: 0.025em;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 379 115'%3E%3Cpath d='m2.41535907.06436505 93.98160413 2.05968771 93.9636758.42943203 93.981604 2.05968771 93.963677.42943203-.665728 8.52369197-2.808745 8.5057642-.665728 8.523692-2.808745 8.5057641-1.871974-.0001517-.305648 2.5778912 2.129108 16.5918028-.996866 8.389818-90.463508 2.9353281-90.36899 4.449321-70.310096 2.2808389 70.18701.1005118 94.051638 1.4916745 94.184497.1335401.687706 8.9709079-1.47682 9.4913393.690908 8.8960033-1.472546 9.39132-94.020429-3.36343-94.324131-2.010171-93.1214334-3.337782-94.27554848-2.008784 1.27882743-7.2656845-.85881548-7.374232 1.27882743-7.2656841-.85881547-7.3742321 7.71912497.1217028.0436635-1.448196 2.2974858-8.048923.2360666-7.9550062 2.2974858-8.0489229 89.0683703-4.7902162 158.503928-5.8247357-167.8631141-2.9324015-92.63274412.0113194 1.47781288-8.9465155-2.26795466-14.9397675z' fill='%23fefe81' fill-rule='evenodd'/%3E%3C/svg%3E");
    }

    :host(.green) {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 379 115' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m2.41535907.06436505 93.98160413 2.05968771 93.9636758.42943203 93.981604 2.05968771 93.963677.42943203-.665728 8.52369197-2.808745 8.5057642-.665728 8.523692-2.808745 8.5057641-1.871974-.0001517-.305648 2.5778912 2.129108 16.5918028-.996866 8.389818-90.463508 2.9353281-90.36899 4.449321-70.310096 2.2808389 70.18701.1005118 94.051638 1.4916745 94.184497.1335401.687706 8.9709079-1.47682 9.4913393.690908 8.8960033-1.472546 9.39132-94.020429-3.36343-94.324131-2.010171-93.1214334-3.337782-94.27554848-2.008784 1.27882743-7.2656845-.85881548-7.374232 1.27882743-7.2656841-.85881547-7.3742321 7.71912497.1217028.0436635-1.448196 2.2974858-8.048923.2360666-7.9550062 2.2974858-8.0489229 89.0683703-4.7902162 158.503928-5.8247357-167.8631141-2.9324015-92.63274412.0113194 1.47781288-8.9465155-2.26795466-14.9397675z' fill='%23e3fdd5' fill-rule='evenodd'/%3E%3C/svg%3E");
    }

    :host(.black) {
      background-image: none;
      background-color: #000000;
      padding: 10px 5px 5px 5px;
      color: #ffffff;
    }
  `;ie=y([S("dl-title")],ie);let oe=class extends ${render(){return f`<slot></slot>`}};oe.styles=C`
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
      grid-area: 2 / 1 / 7 / 8;
      margin-left: 0;
    }

    ::slotted(div.factoid-link) {
      grid-column-end: 8;
      grid-column-start: 1;
    }

    ::slotted(p) {
      grid-area: 2 / 3 / 7 / 8;
      overflow: auto;
      padding: 0px 10px 10px 0;
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
  `;oe=y([S("dl-article")],oe);let se=class extends ${render(){return f`
      <section class="celebration-header">
        <span class="celebration-title"
          >Welcome to Democracy's Library collection.</span
        >
        <div class="pic"></div>
        <div class="left"></div>
        <div class="action-bar-section">
          <slot name="action-bar-section"></slot>
        </div>
      </section>
    `}};se.styles=C`
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
      position: absolute;
      top: 0;
      bottom: 0;
      margin-left: 10px;
      width: 100%;
      background-repeat: no-repeat;
      height: 100%;
      z-index: 2;
      pointer-events: none;
      background-image: url('https://archive.org/download/democracys-library/web-component/banner-logo-rebrand.svg');
    }

    .pic {
      z-index: 1;
      top: 0px;
      bottom: 0px;
      margin: auto;
      height: 100%;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center bottom;
      background-image: url('https://archive.org/download/democracys-library/web-component/banner-image-rebrand.webp');
    }

    .action-bar-section {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      min-width: 27px;
    }

    @media only screen and (min-width: 768px) {
      .action-bar-section {
        margin-right: 5px;
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
    }

    @media only screen and (max-width: 767px) {
      :host {
        height: var(--ia-dl-header-mobile-height, 88px) !important;
      }
      .left {
        margin-left: 5px;
      }
    }
  `;se=y([S("welcome-header")],se);const X={link:"https://webservices.archive.org/wgw/",linkText:"Government websites of the world"};let k=class extends ${constructor(){super(...arguments),this.carousel1=it,this.didYouKnow=ot,this.highlights=et,this.availableResources=void 0}firstUpdated(){this.fetchAvailableResources();const e=document.createElement("style");e.innerHTML=`
    @font-face {
      font-family: "Teko";
      src: url(https://archive.org/cors/democracys-library/web-component/Teko-SemiBold.ttf);
    }`,e.setAttribute("id","teko-font"),document.head.appendChild(e)}disconnectedCallback(){const e=document.head.querySelector("#teko-font");e&&document.head.removeChild(e)}async fetchAvailableResources(){const t=await(await fetch("https://archive.org/cors/democracys-library/web-component/regional-resources.json")).json();Object.keys(t).length?this.availableResources=t:this.availableResources=void 0}get factoids(){return this.didYouKnow.map(e=>f`
        <dl-article tabindex="0">
          <div class="title">
            <dl-title class=${"black"}>
              <h3 class="did-you-know-title">${e.cardTitle}</h3>
            </dl-title>
          </div>
          <p class="full-width" tabindex="0">${e.details}</p>
          <div class="factoid-link">
            <a
              href=${e.link}
              target="_blank"
              class="factoid-link ${e.donateCard?"donate":""}"
              @click=${()=>{var i;window.archive_analytics&&((i=window.archive_analytics)===null||i===void 0||i.send_event("DemocracysLibrary","FactoidLinkClicked",e.link))}}
              >${e.linkText}</a
            >
          </div>
        </dl-article>
      `)}resourceCard(e,t){return f`
      <dl-article tabindex="0">
        <div class="title">
          <dl-title class="black"><h3>${e.title}</h3></dl-title>
        </div>
        <a
          class="item-preview"
          href=${`https://archive.org/details/${e.id}`}
          target="_blank"
          title=${`Explore item: ${e.id}`}
          @click=${()=>{var i;window.archive_analytics&&((i=window.archive_analytics)===null||i===void 0||i.send_event("DemocracysLibrary","ResourceCardItemImageClick",e.id))}}
        >
          <item-preview-image
            src=${e.image}
            class=${t!=null?t:""}
          ></item-preview-image>
        </a>
        <p tabindex="0">${e.blurb}</p>
        <a
          class="link-to-collection"
          href=${e.link}
          tab="_blank"
          @click=${()=>{var i;window.archive_analytics&&((i=window.archive_analytics)===null||i===void 0||i.send_event("DemocracysLibrary","ResourceCardCollectionLinkClick",e.link))}}
          >Browse the ${e.collectionTitle}</a
        >
      </dl-article>
    `}carouselCard(e,t){const i=`https://archive.org/details/${e.id}`;return f`
      <a
        href=${i}
        target="_blank"
        title=${`Explore item: ${e.title}`}
        @click=${()=>{var o;window.archive_analytics&&((o=window.archive_analytics)===null||o===void 0||o.send_event("DemocracysLibrary","CaroselCardClick",e.id))}}
      >
        <item-preview-image
          src=${e.image}
          class=${t!=null?t:""}
        ></item-preview-image>
      </a>
    `}get topCarousel(){return f`
      <dl-title class="black"><h3>${tt}</h3></dl-title>
      <section id="carousel-1" class="carousel">
        ${this.carousel1.map(e=>{const t="blue";return this.carouselCard(e,t)})}
      </section>
    `}get resourcesOptions(){var e;const t=Object.keys((e=this.availableResources)!==null&&e!==void 0?e:{});return f`
      <option>Select an organization</option>
      ${Qe(t,i=>i,i=>{var o,r;const n=(r=(o=this.availableResources)===null||o===void 0?void 0:o[i])!==null&&r!==void 0?r:[];return f`
            <optgroup label=${i}>
              ${Xe(n,c=>{const a=c.URL,l=c["Organization Name"];return f`
                  <option .value=${a} data-url=${a}>${l}</option>
                `})}
            </optgroup>
          `})}
    `}resourceSelected(e){var t;const i=(e==null?void 0:e.target).value;window.archive_analytics&&((t=window.archive_analytics)===null||t===void 0||t.send_event("DemocracysLibrary","ResourceSelected",i)),window.location.href=i}render(){return f`
      <section id="democracys-library-main">
        <welcome-header>
          <div slot="action-bar-section">
            <slot name="action-bar-section"></slot>
          </div>
        </welcome-header>
        <section id="top-carousel" class="one-col-margin">
          ${this.topCarousel}
        </section>
        <section id="did-you-know" class="one-col-margin">
          ${this.factoids}
        </section>
        <resources-highlights class="one-col-margin">
          <dl-article tabindex="0">
            <div class="title">
              <dl-title class="black"><h3>REGIONAL ORGANIZATIONS</h3></dl-title>
            </div>
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
                style="position: absolute; height: 1px; width: 1px; margin-left: -1000px; overflow: hidden;"
                >Here are some resources:</label
              >
              <select
                id="select-resources"
                @change=${e=>this.resourceSelected(e)}
              >
                ${this.resourcesOptions}
              </select>
              <a
                class="gov-world-sites"
                href=${X.link}
                @click=${()=>{var e;window.archive_analytics&&((e=window.archive_analytics)===null||e===void 0||e.send_event("DemocracysLibrary","AitGovWorldSites",X.link))}}
                >${X.linkText}</a
              >
            </div>
          </dl-article>
          ${this.highlights.map(e=>{const t="blue";return this.resourceCard(e,t)})}
        </resources-highlights>
      </section>
    `}};k.styles=C`
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

    h3 {
      margin: 0;
      /** Teko is already bold, adding for safari's default styling */
      font-weight: initial;
    }

    a {
      color: #4b64ff;
      text-decoration: none;
    }

    @media only screen and (min-width: 501px) and (max-width: 650px) {
      resources-highlights {
        --ia-dl-resource-card-img-width: 110px !important;
      }
    }

    welcome-header {
      background-color: #e5f1fa;
    }

    section#democracys-library-main {
      display: flex;
      flex-direction: column;
    }
    section#democracys-library-main > *:not(:first-child) {
      margin-top: 10px;
    }

    /** Did You Know */
    section#did-you-know {
      display: flex;
      gap: 20px;
    }
    section#did-you-know > * {
      border: 1px solid transparent;
      width: 50%;
      padding-bottom: 10px;
    }
    .did-you-know-title {
      vertical-align: initial;
      background-size: 28px;
      background-position: 0 25%;
    }

    @media only screen and (max-width: 550px) {
      section#did-you-know > * {
        width: 100%;
      }
    }
    @media only screen and (max-width: 768px) {
      section > .one-col-margin {
        margin-left: 10px;
        margin-right: 10px;
        overflow: hidden;
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
      background-color: #e5f1fa;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      mix-blend-mode: color;
    }
    .gov-world-sites {
      padding: 5px 5px 5px 0;
      display: block;
    }
    /* End MAP */

    /** Resources */
    #resources-options {
      grid-area: 6 / 1 / 6 / 8;
      width: 95%;
      left: auto;
    }

    #resources-options > select {
      width: 100%;
      display: block;
    }

    a.donate {
      border: 1px solid black;
      padding: 5px 20px;
      font-family: 'Teko', sans-serif;
      font-size: 20px;
      text-decoration: none;
      color: #000 !important;
      background-color: #e3fdd5;
      box-shadow: 5px 5px #333;
    }
    a.donate:active {
      background-color: #b5caaa;
      box-shadow: 2px 2px #333;
      border: 2px inner solid #e3fdd5;
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
  `;y([U({type:Array})],k.prototype,"carousel1",void 0);y([U({type:Array})],k.prototype,"didYouKnow",void 0);y([U({type:Array})],k.prototype,"highlights",void 0);y([U({type:Object})],k.prototype,"availableResources",void 0);k=y([S("ia-democracys-library")],k);let re=class extends ${render(){return f`
      <div class="match-ia-coll-margins">
        <ia-democracys-library> </ia-democracys-library>
      </div>
    `}};re.styles=C`
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
  `;re=y([S("app-root")],re);
