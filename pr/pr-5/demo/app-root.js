const Oe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}};Oe();function $(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var c=s.length-1;c>=0;c--)(n=s[c])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol(),ne=new WeakMap;class be{constructor(e,t,i){if(this._$cssResult$=!0,i!==oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ie&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ne.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ne.set(t,e))}return e}toString(){return this.cssText}}const He=s=>new be(typeof s=="string"?s:s+"",void 0,oe),C=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,o,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[r+1],s[0]);return new be(t,s,oe)},Pe=(s,e)=>{ie?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),o=window.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,s.appendChild(i)})},le=ie?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return He(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W;const ae=window.trustedTypes,Ne=ae?ae.emptyScript:"",ce=window.reactiveElementPolyfillSupport,Z={toAttribute(s,e){switch(e){case Boolean:s=s?Ne:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Ae=(s,e)=>e!==s&&(e==e||s==s),V={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:Ae};class T extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,t=V){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||V}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(le(o))}else e!==void 0&&t.push(le(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Pe(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=V){var o,r;const n=this.constructor._$Ep(e,i);if(n!==void 0&&i.reflect===!0){const c=((r=(o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&r!==void 0?r:Z.toAttribute)(t,i.type);this._$El=e,c==null?this.removeAttribute(n):this.setAttribute(n,c),this._$El=null}}_$AK(e,t){var i,o;const r=this.constructor,n=r._$Ev.get(e);if(n!==void 0&&this._$El!==n){const c=r.getPropertyOptions(n),l=c.converter,a=(o=(i=l==null?void 0:l.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&o!==void 0?o:Z.fromAttribute;this._$El=n,this[n]=a(t,c.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Ae)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}T.finalized=!0,T.elementProperties=new Map,T.elementStyles=[],T.shadowRootOptions={mode:"open"},ce==null||ce({ReactiveElement:T}),((W=globalThis.reactiveElementVersions)!==null&&W!==void 0?W:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;const O=globalThis.trustedTypes,de=O?O.createPolicy("lit-html",{createHTML:s=>s}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,se="?"+A,Ue=`<${se}>`,H=document,L=(s="")=>H.createComment(s),I=s=>s===null||typeof s!="object"&&typeof s!="function",_e=Array.isArray,we=s=>{var e;return _e(s)||typeof((e=s)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,he=/-->/g,pe=/>/g,_=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ue=/'/g,me=/"/g,xe=/^(?:script|style|textarea|title)$/i,Me=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),f=Me(1),x=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),ge=new WeakMap,Le=(s,e,t)=>{var i,o;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let n=r._$litPart$;if(n===void 0){const c=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:null;r._$litPart$=n=new P(e.insertBefore(L(),c),c,void 0,t!=null?t:{})}return n._$AI(s),n},R=H.createTreeWalker(H,129,null,!1),Ee=(s,e)=>{const t=s.length-1,i=[];let o,r=e===2?"<svg>":"",n=U;for(let l=0;l<t;l++){const a=s[l];let v,h,d=-1,p=0;for(;p<a.length&&(n.lastIndex=p,h=n.exec(a),h!==null);)p=n.lastIndex,n===U?h[1]==="!--"?n=he:h[1]!==void 0?n=pe:h[2]!==void 0?(xe.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=_):h[3]!==void 0&&(n=_):n===_?h[0]===">"?(n=o!=null?o:U,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,v=h[1],n=h[3]===void 0?_:h[3]==='"'?me:ue):n===me||n===ue?n=_:n===he||n===pe?n=U:(n=_,o=void 0);const u=n===_&&s[l+1].startsWith("/>")?" ":"";r+=n===U?a+Ue:d>=0?(i.push(v),a.slice(0,d)+"$lit$"+a.slice(d)+A+u):a+A+(d===-2?(i.push(void 0),l):u)}const c=r+(s[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[de!==void 0?de.createHTML(c):c,i]};class B{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,n=0;const c=e.length-1,l=this.parts,[a,v]=Ee(e,t);if(this.el=B.createElement(a,i),R.currentNode=this.el.content,t===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(o=R.nextNode())!==null&&l.length<c;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const d of o.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(A)){const p=v[n++];if(h.push(d),p!==void 0){const u=o.getAttribute(p.toLowerCase()+"$lit$").split(A),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:m[2],strings:u,ctor:m[1]==="."?Ce:m[1]==="?"?ke:m[1]==="@"?Te:z})}else l.push({type:6,index:r})}for(const d of h)o.removeAttribute(d)}if(xe.test(o.tagName)){const h=o.textContent.split(A),d=h.length-1;if(d>0){o.textContent=O?O.emptyScript:"";for(let p=0;p<d;p++)o.append(h[p],L()),R.nextNode(),l.push({type:2,index:++r});o.append(h[d],L())}}}else if(o.nodeType===8)if(o.data===se)l.push({type:2,index:r});else{let h=-1;for(;(h=o.data.indexOf(A,h+1))!==-1;)l.push({type:7,index:r}),h+=A.length-1}r++}}static createElement(e,t){const i=H.createElement("template");return i.innerHTML=e,i}}function E(s,e,t=s,i){var o,r,n,c;if(e===x)return e;let l=i!==void 0?(o=t._$Cl)===null||o===void 0?void 0:o[i]:t._$Cu;const a=I(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(s),l._$AT(s,t,i)),i!==void 0?((n=(c=t)._$Cl)!==null&&n!==void 0?n:c._$Cl=[])[i]=l:t._$Cu=l),l!==void 0&&(e=E(s,l._$AS(s,e.values),l,i)),e}class Se{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:o}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:H).importNode(i,!0);R.currentNode=r;let n=R.nextNode(),c=0,l=0,a=o[0];for(;a!==void 0;){if(c===a.index){let v;a.type===2?v=new P(n,n.nextSibling,this,e):a.type===1?v=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(v=new Re(n,this,e)),this.v.push(v),a=o[++l]}c!==(a==null?void 0:a.index)&&(n=R.nextNode(),c++)}return r}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class P{constructor(e,t,i,o){var r;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cg=(r=o==null?void 0:o.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),I(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==x&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):we(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==g&&I(this._$AH)?this._$AA.nextSibling.data=e:this.k(H.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=B.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.m(i);else{const n=new Se(r,this),c=n.p(this.options);n.m(i),this.k(c),this._$AH=n}}_$AC(e){let t=ge.get(e.strings);return t===void 0&&ge.set(e.strings,t=new B(e)),t}S(e){_e(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new P(this.M(L()),this.M(L()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class z{constructor(e,t,i,o,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const r=this.strings;let n=!1;if(r===void 0)e=E(this,e,t,0),n=!I(e)||e!==this._$AH&&e!==x,n&&(this._$AH=e);else{const c=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=E(this,c[i+l],t,l),a===x&&(a=this._$AH[l]),n||(n=!I(a)||a!==this._$AH[l]),a===g?e=g:e!==g&&(e+=(a!=null?a:"")+r[l+1]),this._$AH[l]=a}n&&!o&&this.C(e)}C(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Ce extends z{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===g?void 0:e}}const Ie=O?O.emptyScript:"";class ke extends z{constructor(){super(...arguments),this.type=4}C(e){e&&e!==g?this.element.setAttribute(this.name,Ie):this.element.removeAttribute(this.name)}}class Te extends z{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=E(this,e,t,0))!==null&&i!==void 0?i:g)===x)return;const o=this._$AH,r=e===g&&o!==g||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==g&&(o===g||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Re{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const Be={L:"$lit$",P:A,V:se,I:1,N:Ee,R:Se,j:we,D:E,H:P,F:z,O:ke,W:Te,B:Ce,Z:Re},ve=window.litHtmlPolyfillSupport;ve==null||ve(B,P),((K=globalThis.litHtmlVersions)!==null&&K!==void 0?K:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F,Y;class y extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Le(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return x}}y.finalized=!0,y._$litElement$=!0,(F=globalThis.litElementHydrateSupport)===null||F===void 0||F.call(globalThis,{LitElement:y});const fe=globalThis.litElementPolyfillSupport;fe==null||fe({LitElement:y});((Y=globalThis.litElementVersions)!==null&&Y!==void 0?Y:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=s=>e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(s,e):((t,i)=>{const{kind:o,elements:r}=i;return{kind:o,elements:r,finisher(n){window.customElements.define(t,n)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}};function N(s){return(e,t)=>t!==void 0?((i,o,r)=>{o.constructor.createProperty(r,i)})(s,e,t):De(s,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var G;((G=window.HTMLSlotElement)===null||G===void 0?void 0:G.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},je=s=>(...e)=>({_$litDirective$:s,values:e});class We{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:Ve}=Be,$e=()=>document.createComment(""),M=(s,e,t)=>{var i;const o=s._$AA.parentNode,r=e===void 0?s._$AB:e._$AA;if(t===void 0){const n=o.insertBefore($e(),r),c=o.insertBefore($e(),r);t=new Ve(n,c,s,s.options)}else{const n=t._$AB.nextSibling,c=t._$AM,l=c!==s;if(l){let a;(i=t._$AQ)===null||i===void 0||i.call(t,s),t._$AM=s,t._$AP!==void 0&&(a=s._$AU)!==c._$AU&&t._$AP(a)}if(n!==r||l){let a=t._$AA;for(;a!==n;){const v=a.nextSibling;o.insertBefore(a,r),a=v}}}return t},w=(s,e,t=s)=>(s._$AI(e,t),s),Ke={},Fe=(s,e=Ke)=>s._$AH=e,Ye=s=>s._$AH,q=s=>{var e;(e=s._$AP)===null||e===void 0||e.call(s,!1,!0);let t=s._$AA;const i=s._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=(s,e,t)=>{const i=new Map;for(let o=e;o<=t;o++)i.set(s[o],o);return i},Ge=je(class extends We{constructor(s){if(super(s),s.type!==ze.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const o=[],r=[];let n=0;for(const c of s)o[n]=i?i(c,n):n,r[n]=t(c,n),n++;return{values:r,keys:o}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,i]){var o;const r=Ye(s),{values:n,keys:c}=this.dt(e,t,i);if(!Array.isArray(r))return this.ut=c,n;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],a=[];let v,h,d=0,p=r.length-1,u=0,m=n.length-1;for(;d<=p&&u<=m;)if(r[d]===null)d++;else if(r[p]===null)p--;else if(l[d]===c[u])a[u]=w(r[d],n[u]),d++,u++;else if(l[p]===c[m])a[m]=w(r[p],n[m]),p--,m--;else if(l[d]===c[m])a[m]=w(r[d],n[m]),M(s,a[m+1],r[d]),d++,m--;else if(l[p]===c[u])a[u]=w(r[p],n[u]),M(s,r[d],r[p]),p--,u++;else if(v===void 0&&(v=ye(c,u,m),h=ye(l,d,p)),v.has(l[d]))if(v.has(l[p])){const b=h.get(c[u]),j=b!==void 0?r[b]:null;if(j===null){const re=M(s,r[d]);w(re,n[u]),a[u]=re}else a[u]=w(j,n[u]),M(s,r[d],j),r[b]=null;u++}else q(r[p]),p--;else q(r[d]),d++;for(;u<=m;){const b=M(s,a[m+1]);w(b,n[u]),a[u++]=b}for(;d<=p;){const b=r[d++];b!==null&&q(b)}return this.ut=c,Fe(s,a),x}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*qe(s,e){if(s!==void 0){let t=0;for(const i of s)yield e(i,t++)}}let D=class extends y{constructor(){super(...arguments),this.src="",this.alt=""}render(){return f`
      <div>
        <img src=${this.src} alt=${this.alt} />
        <div id="overlay"></div>
      </div>
    `}};D.styles=C`
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
  `;$([N({type:String})],D.prototype,"src",void 0);$([N({type:String})],D.prototype,"alt",void 0);D=$([k("item-preview-image")],D);const Ze=[{title:"TROPICA ROADSTER CRASH REPORT",collectionTitle:"National Transportation Library",id:"finalreportofren00look",blurb:"What happens when you crash a Tropica Roadster straight into a barrier at 47kph? Find out in this report from the Vehicle Research and Test Center.",link:"https://archive.org/details/nationaltransportationlibrary",image:"https://archive.org/services/img/finalreportofren00look"},{title:"EXCAVATION OF HUMMINGBIRD SHELTER",collectionTitle:"Bureau of Land Management Library",id:"excavationofhumm00conn",blurb:"The Bureau of Land Management's report on the excavation of Hummingbird Shelter, part of the White River Resource Area in Colorado, United States.",link:"https://archive.org/details/blmlibrary",image:"https://archive.org/services/img/excavationofhumm00conn"},{title:"ORGANIZED CRIME ON WALL STREET",collectionTitle:"U.S. Congressional Hearings",id:"gov.gpo.fdsys.CHRG-106hhrg67115",blurb:"The Committee on Commerce's hearing on the topic of organized crime on Wall Street. Part of the 106th Congress' second session, this hearing took place September 13, 2000.",link:"https://archive.org/details/us_house_hearings",image:"https://archive.org/services/img/gov.gpo.fdsys.CHRG-106hhrg67115"},{title:"WEATHER MODIFICATION IN ALBERTA",collectionTitle:"Government of Alberta Publications",id:"potentialforweat00advi",blurb:"Report to the Minister of Agriculture, Government of Alberta from the Advisory Committee on Weather Modification",link:"https://archive.org/details/albertagovernmentpublications",image:"https://archive.org/services/img/potentialforweat00advi"},{title:"EDIBLE & POISONOUS MUSHROOMS OF CANADA",collectionTitle:"Agriculture and Agri-Food Canada Library",id:"ediblepoisonousm00grov",blurb:"From this guide from Agriculture Canada\u2014'Actually there is only one test to find out whether a mushroom or any other plant is poisonous and that is to eat it. If it makes you sick or kills you it is poisonous...' ",link:"https://archive.org/details/canadianagriculturallibrary",image:"https://archive.org/services/img/ediblepoisonousm00grov"}];let J=class extends y{render(){return f` <slot></slot> `}};J.styles=C`
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
  `;J=$([k("resources-highlights")],J);const Je="INTERESTING GOVERNMENT DOCS",Qe=[{id:"MH07D7178",title:"Fundraising for Social Change, Part One",image:"https://archive.org/services/img/MH07D7178"},{id:"CAT92272736",title:"Two keys for appraising forest fire fuels",image:"https://archive.org/services/img/CAT92272736"},{id:"CAT79708698031",title:"Hamburger\u2014Questions and Answers",image:"https://archive.org/services/img/CAT79708698031"},{id:"usda-posters",title:"U.S. Department of Agriculture Poster Collection",image:"https://archive.org/services/img/CAT31123678"},{id:"selectedpolishso00army",title:"Selected Polish songs",image:"https://archive.org/services/img/selectedpolishso00army"},{id:"blueprintforfutu9611unit",title:"Blueprint for the future",image:"https://archive.org/services/img/blueprintforfutu9611unit"},{id:"introductionlapt00albe",title:"Introduction \xE0 la p\xE2tisserie",image:"https://archive.org/services/img/introductionlapt00albe"},{id:"hintsonmountainl94youn",title:"Hints on mountain-lion trapping",image:"https://archive.org/services/img/hintsonmountainl94youn"},{id:"drylandfarmingin00cott",title:"Dry land farming in the Southwest",image:"https://archive.org/services/img/drylandfarmingin00cott"}],Xe=[{details:"There are 5,000,000,000,000,000,000,000,000,000,000 grains of sand on Earth."},{details:"You can sign up for a free Account and be able to create your own archive."}];let Q=class extends y{render(){return f` <span><slot></slot></span> `}};Q.styles=C`
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
  `;Q=$([k("ti-tle")],Q);let X=class extends y{render(){return f`<slot></slot>`}};X.styles=C`
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
  `;X=$([k("arti-cle")],X);let ee=class extends y{render(){return f`
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
    `}};ee.styles=C`
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
  `;ee=$([k("welcome-header")],ee);let S=class extends y{constructor(){super(...arguments),this.carousel1=Qe,this.didYouKnow=Xe,this.highlights=Ze,this.availableResources=void 0}firstUpdated(){this.fetchAvailableResources();const e=document.createElement("style");e.innerHTML=`
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
          <p class="full-width">${e.details}</p>
        </arti-cle>
      `})}resourceCard(e,t){return f`
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
    `}carouselCard(e,t){const i=`https://archive.org/details/${e.id}`;return f`
      <a href=${i} target="_blank" title=${`Explore item: ${e.title}`}>
        <item-preview-image
          src=${e.image}
          class=${t!=null?t:""}
        ></item-preview-image>
      </a>
    `}get topCarousel(){return f`
      <ti-tle class="green">${Je}</ti-tle>
      <section id="carousel-1" class="carousel">
        ${this.carousel1.map((e,t)=>{const i=t%2===0?"yellow":"green";return this.carouselCard(e,i)})}
      </section>
    `}get resourcesOptions(){var e;const t=Object.keys((e=this.availableResources)!==null&&e!==void 0?e:{});return f`
      <option>Select a resource</option>
      ${Ge(t,i=>i,i=>{var o,r;const n=(r=(o=this.availableResources)===null||o===void 0?void 0:o[i])!==null&&r!==void 0?r:[];return f`
            <optgroup label=${i}>
              ${qe(n,c=>{const l=c.URL,a=c["Organization Name"];return f`
                  <option .value=${l} data-url=${l}>${a}</option>
                `})}
            </optgroup>
          `})}
    `}resourceSelected(e){const t=(e==null?void 0:e.target).value;window.open(t,"_blank")}render(){return f`
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
  `;$([N({type:Array})],S.prototype,"carousel1",void 0);$([N({type:Array})],S.prototype,"didYouKnow",void 0);$([N({type:Array})],S.prototype,"highlights",void 0);$([N({type:Object})],S.prototype,"availableResources",void 0);S=$([k("ia-democracys-library")],S);let te=class extends y{render(){return f`
      <div class="match-ia-coll-margins">
        <ia-democracys-library> </ia-democracys-library>
      </div>
    `}};te.styles=C`
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
  `;te=$([k("app-root")],te);
