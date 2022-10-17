const Ne=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}};Ne();function y(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var c=s.length-1;c>=0;c--)(n=s[c])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=window,re=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ne=Symbol(),ce=new WeakMap;class we{constructor(e,t,i){if(this._$cssResult$=!0,i!==ne)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(re&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ce.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ce.set(t,e))}return e}toString(){return this.cssText}}const Ue=s=>new we(typeof s=="string"?s:s+"",void 0,ne),C=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,o,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[r+1],s[0]);return new we(t,s,ne)},Me=(s,e)=>{re?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),o=j.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,s.appendChild(i)})},de=re?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ue(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F;const W=window,he=W.trustedTypes,Ie=he?he.emptyScript:"",pe=W.reactiveElementPolyfillSupport,X={toAttribute(s,e){switch(e){case Boolean:s=s?Ie:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},xe=(s,e)=>e!==s&&(e==e||s==s),G={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:xe};class T extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,t=G){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||G}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(de(o))}else e!==void 0&&t.push(de(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Me(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=G){var o;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const n=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:X).toAttribute(t,i.type);this._$El=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,r=o._$Ev.get(e);if(r!==void 0&&this._$El!==r){const n=o.getPropertyOptions(r),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:X;this._$El=r,this[r]=c.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||xe)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}T.finalized=!0,T.elementProperties=new Map,T.elementStyles=[],T.shadowRootOptions={mode:"open"},pe==null||pe({ReactiveElement:T}),((F=W.reactiveElementVersions)!==null&&F!==void 0?F:W.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Y;const V=window,O=V.trustedTypes,ue=O?O.createPolicy("lit-html",{createHTML:s=>s}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,le="?"+A,Le=`<${le}>`,H=document,I=(s="")=>H.createComment(s),L=s=>s===null||typeof s!="object"&&typeof s!="function",Ee=Array.isArray,Se=s=>Ee(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,ge=/>/g,_=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ve=/'/g,fe=/"/g,Ce=/^(?:script|style|textarea|title)$/i,De=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),f=De(1),x=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),ye=new WeakMap,R=H.createTreeWalker(H,129,null,!1),ke=(s,e)=>{const t=s.length-1,i=[];let o,r=e===2?"<svg>":"",n=U;for(let a=0;a<t;a++){const l=s[a];let v,h,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,h=n.exec(l),h!==null);)p=n.lastIndex,n===U?h[1]==="!--"?n=me:h[1]!==void 0?n=ge:h[2]!==void 0?(Ce.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=_):h[3]!==void 0&&(n=_):n===_?h[0]===">"?(n=o!=null?o:U,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,v=h[1],n=h[3]===void 0?_:h[3]==='"'?fe:ve):n===fe||n===ve?n=_:n===me||n===ge?n=U:(n=_,o=void 0);const u=n===_&&s[a+1].startsWith("/>")?" ":"";r+=n===U?l+Le:d>=0?(i.push(v),l.slice(0,d)+"$lit$"+l.slice(d)+A+u):l+A+(d===-2?(i.push(void 0),a):u)}const c=r+(s[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ue!==void 0?ue.createHTML(c):c,i]};class D{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,n=0;const c=e.length-1,a=this.parts,[l,v]=ke(e,t);if(this.el=D.createElement(l,i),R.currentNode=this.el.content,t===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(o=R.nextNode())!==null&&a.length<c;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const d of o.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(A)){const p=v[n++];if(h.push(d),p!==void 0){const u=o.getAttribute(p.toLowerCase()+"$lit$").split(A),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:r,name:m[2],strings:u,ctor:m[1]==="."?Re:m[1]==="?"?Oe:m[1]==="@"?He:z})}else a.push({type:6,index:r})}for(const d of h)o.removeAttribute(d)}if(Ce.test(o.tagName)){const h=o.textContent.split(A),d=h.length-1;if(d>0){o.textContent=O?O.emptyScript:"";for(let p=0;p<d;p++)o.append(h[p],I()),R.nextNode(),a.push({type:2,index:++r});o.append(h[d],I())}}}else if(o.nodeType===8)if(o.data===le)a.push({type:2,index:r});else{let h=-1;for(;(h=o.data.indexOf(A,h+1))!==-1;)a.push({type:7,index:r}),h+=A.length-1}r++}}static createElement(e,t){const i=H.createElement("template");return i.innerHTML=e,i}}function E(s,e,t=s,i){var o,r,n,c;if(e===x)return e;let a=i!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[i]:t._$Cl;const l=L(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(s),a._$AT(s,t,i)),i!==void 0?((n=(c=t)._$Co)!==null&&n!==void 0?n:c._$Co=[])[i]=a:t._$Cl=a),a!==void 0&&(e=E(s,a._$AS(s,e.values),a,i)),e}class Te{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:o}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:H).importNode(i,!0);R.currentNode=r;let n=R.nextNode(),c=0,a=0,l=o[0];for(;l!==void 0;){if(c===l.index){let v;l.type===2?v=new P(n,n.nextSibling,this,e):l.type===1?v=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(v=new Pe(n,this,e)),this.u.push(v),l=o[++a]}c!==(l==null?void 0:l.index)&&(n=R.nextNode(),c++)}return r}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class P{constructor(e,t,i,o){var r;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cm=(r=o==null?void 0:o.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),L(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==x&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Se(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==g&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(H.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=D.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const n=new Te(r,this),c=n.v(this.options);n.p(i),this.T(c),this._$AH=n}}_$AC(e){let t=ye.get(e.strings);return t===void 0&&ye.set(e.strings,t=new D(e)),t}k(e){Ee(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new P(this.O(I()),this.O(I()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class z{constructor(e,t,i,o,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const r=this.strings;let n=!1;if(r===void 0)e=E(this,e,t,0),n=!L(e)||e!==this._$AH&&e!==x,n&&(this._$AH=e);else{const c=e;let a,l;for(e=r[0],a=0;a<r.length-1;a++)l=E(this,c[i+a],t,a),l===x&&(l=this._$AH[a]),n||(n=!L(l)||l!==this._$AH[a]),l===g?e=g:e!==g&&(e+=(l!=null?l:"")+r[a+1]),this._$AH[a]=l}n&&!o&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Re extends z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}const Be=O?O.emptyScript:"";class Oe extends z{constructor(){super(...arguments),this.type=4}j(e){e&&e!==g?this.element.setAttribute(this.name,Be):this.element.removeAttribute(this.name)}}class He extends z{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=E(this,e,t,0))!==null&&i!==void 0?i:g)===x)return;const o=this._$AH,r=e===g&&o!==g||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==g&&(o===g||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Pe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const ze={P:"$lit$",A,M:le,C:1,L:ke,R:Te,D:Se,V:E,I:P,H:z,N:Oe,U:He,B:Re,F:Pe},$e=V.litHtmlPolyfillSupport;$e==null||$e(D,P),((Y=V.litHtmlVersions)!==null&&Y!==void 0?Y:V.litHtmlVersions=[]).push("2.4.0");const je=(s,e,t)=>{var i,o;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let n=r._$litPart$;if(n===void 0){const c=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:null;r._$litPart$=n=new P(e.insertBefore(I(),c),c,void 0,t!=null?t:{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q,Z;class $ extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=je(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return x}}$.finalized=!0,$._$litElement$=!0,(q=globalThis.litElementHydrateSupport)===null||q===void 0||q.call(globalThis,{LitElement:$});const be=globalThis.litElementPolyfillSupport;be==null||be({LitElement:$});((Z=globalThis.litElementVersions)!==null&&Z!==void 0?Z:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=s=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(s,e):((t,i)=>{const{kind:o,elements:r}=i;return{kind:o,elements:r,finisher(n){customElements.define(t,n)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}};function N(s){return(e,t)=>t!==void 0?((i,o,r)=>{o.constructor.createProperty(r,i)})(s,e,t):We(s,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J;((J=window.HTMLSlotElement)===null||J===void 0?void 0:J.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ke=s=>(...e)=>({_$litDirective$:s,values:e});class Fe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ge}=ze,Ae=()=>document.createComment(""),M=(s,e,t)=>{var i;const o=s._$AA.parentNode,r=e===void 0?s._$AB:e._$AA;if(t===void 0){const n=o.insertBefore(Ae(),r),c=o.insertBefore(Ae(),r);t=new Ge(n,c,s,s.options)}else{const n=t._$AB.nextSibling,c=t._$AM,a=c!==s;if(a){let l;(i=t._$AQ)===null||i===void 0||i.call(t,s),t._$AM=s,t._$AP!==void 0&&(l=s._$AU)!==c._$AU&&t._$AP(l)}if(n!==r||a){let l=t._$AA;for(;l!==n;){const v=l.nextSibling;o.insertBefore(l,r),l=v}}}return t},w=(s,e,t=s)=>(s._$AI(e,t),s),Ye={},qe=(s,e=Ye)=>s._$AH=e,Ze=s=>s._$AH,Q=s=>{var e;(e=s._$AP)===null||e===void 0||e.call(s,!1,!0);let t=s._$AA;const i=s._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=(s,e,t)=>{const i=new Map;for(let o=e;o<=t;o++)i.set(s[o],o);return i},Je=Ke(class extends Fe{constructor(s){if(super(s),s.type!==Ve.CHILD)throw Error("repeat() can only be used in text expressions")}ht(s,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const o=[],r=[];let n=0;for(const c of s)o[n]=i?i(c,n):n,r[n]=t(c,n),n++;return{values:r,keys:o}}render(s,e,t){return this.ht(s,e,t).values}update(s,[e,t,i]){var o;const r=Ze(s),{values:n,keys:c}=this.ht(e,t,i);if(!Array.isArray(r))return this.ut=c,n;const a=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],l=[];let v,h,d=0,p=r.length-1,u=0,m=n.length-1;for(;d<=p&&u<=m;)if(r[d]===null)d++;else if(r[p]===null)p--;else if(a[d]===c[u])l[u]=w(r[d],n[u]),d++,u++;else if(a[p]===c[m])l[m]=w(r[p],n[m]),p--,m--;else if(a[d]===c[m])l[m]=w(r[d],n[m]),M(s,l[m+1],r[d]),d++,m--;else if(a[p]===c[u])l[u]=w(r[p],n[u]),M(s,r[d],r[p]),p--,u++;else if(v===void 0&&(v=_e(c,u,m),h=_e(a,d,p)),v.has(a[d]))if(v.has(a[p])){const b=h.get(c[u]),K=b!==void 0?r[b]:null;if(K===null){const ae=M(s,r[d]);w(ae,n[u]),l[u]=ae}else l[u]=w(K,n[u]),M(s,r[d],K),r[b]=null;u++}else Q(r[p]),p--;else Q(r[d]),d++;for(;u<=m;){const b=M(s,l[m+1]);w(b,n[u]),l[u++]=b}for(;d<=p;){const b=r[d++];b!==null&&Q(b)}return this.ut=c,qe(s,l),x}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Qe(s,e){if(s!==void 0){let t=0;for(const i of s)yield e(i,t++)}}let B=class extends ${constructor(){super(...arguments),this.src="",this.alt=""}render(){return f`
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
  `;y([N({type:String})],B.prototype,"src",void 0);y([N({type:String})],B.prototype,"alt",void 0);B=y([k("item-preview-image")],B);const Xe=[{title:"TROPICA ROADSTER CRASH REPORT",collectionTitle:"National Transportation Library",id:"finalreportofren00look",blurb:"What happens when you crash a Tropica Roadster straight into a barrier at 47kph? Find out in this report from the Vehicle Research and Test Center.",link:"https://archive.org/details/nationaltransportationlibrary",image:"https://archive.org/services/img/finalreportofren00look"},{title:"EXCAVATION OF HUMMINGBIRD SHELTER",collectionTitle:"Bureau of Land Management Library",id:"excavationofhumm00conn",blurb:"The Bureau of Land Management's report on the excavation of Hummingbird Shelter, part of the White River Resource Area in Colorado, United States.",link:"https://archive.org/details/blmlibrary",image:"https://archive.org/services/img/excavationofhumm00conn"},{title:"ORGANIZED CRIME ON WALL STREET",collectionTitle:"U.S. Congressional Hearings",id:"gov.gpo.fdsys.CHRG-106hhrg67115",blurb:"The Committee on Commerce's hearing on the topic of organized crime on Wall Street. Part of the 106th Congress' second session, this hearing took place September 13, 2000.",link:"https://archive.org/details/us_house_hearings",image:"https://archive.org/services/img/gov.gpo.fdsys.CHRG-106hhrg67115"},{title:"WEATHER MODIFICATION IN ALBERTA",collectionTitle:"Government of Alberta Publications",id:"potentialforweat00advi",blurb:"Report to the Minister of Agriculture, Government of Alberta from the Advisory Committee on Weather Modification",link:"https://archive.org/details/albertagovernmentpublications",image:"https://archive.org/services/img/potentialforweat00advi"},{title:"EDIBLE & POISONOUS MUSHROOMS OF CANADA",collectionTitle:"Agriculture and Agri-Food Canada Library",id:"ediblepoisonousm00grov",blurb:'From the guide: "Actually there is only one test to find out whether a mushroom or any other plant is poisonous and that is to eat it. If it makes you sick or kills you it is poisonous."',link:"https://archive.org/details/canadianagriculturallibrary",image:"https://archive.org/services/img/ediblepoisonousm00grov"}];let ee=class extends ${render(){return f` <slot></slot> `}};ee.styles=C`
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
  `;ee=y([k("resources-highlights")],ee);const et="INTERESTING GOVERNMENT DOCS",tt=[{id:"MH07D7178",title:"Fundraising for Social Change, Part One",image:"https://archive.org/services/img/MH07D7178"},{id:"CAT92272736",title:"Two keys for appraising forest fire fuels",image:"https://archive.org/services/img/CAT92272736"},{id:"CAT79708698031",title:"Hamburger\u2014Questions and Answers",image:"https://archive.org/services/img/CAT79708698031"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"selectedpolishso00army",title:"Selected Polish songs",image:"https://archive.org/services/img/selectedpolishso00army"},{id:"blueprintforfutu9611unit",title:"Blueprint for the future",image:"https://archive.org/services/img/blueprintforfutu9611unit"},{id:"introductionlapt00albe",title:"Introduction \xE0 la p\xE2tisserie",image:"https://archive.org/services/img/introductionlapt00albe"},{id:"hintsonmountainl94youn",title:"Hints on mountain-lion trapping",image:"https://archive.org/services/img/hintsonmountainl94youn"},{id:"drylandfarmingin00cott",title:"Dry land farming in the Southwest",image:"https://archive.org/services/img/drylandfarmingin00cott"}],it=[{cardTitle:"ABOUT THIS PROJECT",details:"Democracy's Library brings together more than 700 collections from over 50 government organizations, archived by the Internet Archive since 2006. With more than half a million documents (and counting) from local, regional, and national governments, we're just getting started!",link:"http://blog.archive.org/2022/09/06/building-democracys-library-celebrate-with-the-internet-archive-on-october-19/",linkText:"Learn more"},{cardTitle:"WHAT'S NEXT?",details:"This is just the beginning. Democracy's Library will continue to grow and be updated over time. We'll be adding more information from all over the world, along with useful tools to help find and access what you need. You can help us grow by making a contribution today!",link:"https://archive.org/donate/?origin=iawww-democlibrycllctn",linkText:"DONATE",donateCard:!0}];let te=class extends ${render(){return f` <span><slot></slot></span> `}};te.styles=C`
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
  `;te=y([k("ti-tle")],te);let ie=class extends ${render(){return f`<slot></slot>`}};ie.styles=C`
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
      max-height: 175px;
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
  `;ie=y([k("arti-cle")],ie);let oe=class extends ${render(){return f`
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
    `}};oe.styles=C`
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
      z-index: 1;
      background-image: url('https://archive.org/download/democracys-library/web-component/banner-text.svg');
    }

    .pic {
      z-index: 2;
      position: absolute;
      top: 0px;
      bottom: 0px;
      right: 35px;
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
      min-width: 27px;
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
      .left {
        margin-left: 10px;
      }
    }

    @media only screen and (max-width: 500px) {
      .pic {
        background-image: url('https://archive.org/download/democracys-library/web-component/banner-image-mini.webp');
      }
    }
  `;oe=y([k("welcome-header")],oe);let S=class extends ${constructor(){super(...arguments),this.carousel1=tt,this.didYouKnow=it,this.highlights=Xe,this.availableResources=void 0}firstUpdated(){this.fetchAvailableResources();const e=document.createElement("style");e.innerHTML=`
    @font-face {
      font-family: "Teko";
      src: url(https://archive.org/cors/democracys-library/web-component/Teko-SemiBold.ttf);
    }`,e.setAttribute("id","teko-font"),document.head.appendChild(e)}disconnectedCallback(){const e=document.head.querySelector("#teko-font");e&&document.head.removeChild(e)}async fetchAvailableResources(){const t=await(await fetch("https://archive.org/cors/democracys-library/web-component/regional-resources.json")).json();Object.keys(t).length?this.availableResources=t:this.availableResources=void 0}get factoids(){return this.didYouKnow.map((e,t)=>{const i=t%2===0?"yellow":"green";return f`
        <arti-cle>
          <div class="title">
            <ti-tle class=${i}
              ><span class="did-you-know-title">DID YOU KNOW?</span></ti-tle
            >
          </div>
          <p class="full-width" tabindex="0">${e.details}</p>
        </arti-cle>
      `})}resourceCard(e,t){return f`
      <arti-cle tabindex="0">
        <div class="title">
          <ti-tle class=${t!=null?t:""}>${e.title}</ti-tle>
        </div>
        <a
          class="item-preview"
          href=${`https://archive.org/details/${e.id}`}
          target="_blank"
          title=${`Explore item: ${e.id}`}
        >
          <item-preview-image
            src=${e.image}
            class=${t!=null?t:""}
          ></item-preview-image>
        </a>
        <p tabindex="0">${e.blurb}</p>
        <a class="link-to-collection" href=${e.link} tab="_blank"
          >Browse the ${e.collectionTitle}</a
        >
      </arti-cle>
    `}carouselCard(e,t){const i=`https://archive.org/details/${e.id}`;return f`
      <a href=${i} target="_blank" title=${`Explore item: ${e.title}`}>
        <item-preview-image
          src=${e.image}
          class=${t!=null?t:""}
        ></item-preview-image>
      </a>
    `}get topCarousel(){return f`
      <ti-tle class="green">${et}</ti-tle>
      <section id="carousel-1" class="carousel">
        ${this.carousel1.map((e,t)=>{const i=t%2===0?"yellow":"green";return this.carouselCard(e,i)})}
      </section>
    `}get resourcesOptions(){var e;const t=Object.keys((e=this.availableResources)!==null&&e!==void 0?e:{});return f`
      <option>Select an organization</option>
      ${Je(t,i=>i,i=>{var o,r;const n=(r=(o=this.availableResources)===null||o===void 0?void 0:o[i])!==null&&r!==void 0?r:[];return f`
            <optgroup label=${i}>
              ${Qe(n,c=>{const a=c.URL,l=c["Organization Name"];return f`
                  <option .value=${a} data-url=${a}>${l}</option>
                `})}
            </optgroup>
          `})}
    `}resourceSelected(e){const t=(e==null?void 0:e.target).value;window.location.href=t}render(){return f`
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
          <arti-cle>
            <div class="title">
              <ti-tle class="green">REGIONAL ORGANIZATIONS</ti-tle>
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
            </div>
          </arti-cle>
          ${this.highlights.map((e,t)=>{const i=t%2===0?"yellow":"green";return this.resourceCard(e,i)})}
        </resources-highlights>
      </section>
    `}};S.styles=C`
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
      background-color: #e3fdd5;
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
      width: 95%;
      left: auto;
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
  `;y([N({type:Array})],S.prototype,"carousel1",void 0);y([N({type:Array})],S.prototype,"didYouKnow",void 0);y([N({type:Array})],S.prototype,"highlights",void 0);y([N({type:Object})],S.prototype,"availableResources",void 0);S=y([k("ia-democracys-library")],S);let se=class extends ${render(){return f`
      <div class="match-ia-coll-margins">
        <ia-democracys-library> </ia-democracys-library>
      </div>
    `}};se.styles=C`
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
  `;se=y([k("app-root")],se);
