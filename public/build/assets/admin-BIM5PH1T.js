import{a as X4}from"./axios-ByLvdZbW.js";import{r as eS,p as tS,a as nS,b as iS,c as oS,d as rS,e as sS,f as aS,F as cS}from"./filepond-plugin-image-edit-D88b7BcX.js";import{c as bd,g as lS}from"./_commonjsHelpers-Cpj98o6Y.js";/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function LA(y,b){var E=Object.keys(y);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(y);b&&(D=D.filter(function(S){return Object.getOwnPropertyDescriptor(y,S).enumerable})),E.push.apply(E,D)}return E}function hn(y){for(var b=1;b<arguments.length;b++){var E=arguments[b]!=null?arguments[b]:{};b%2?LA(Object(E),!0).forEach(function(D){dS(y,D,E[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(y,Object.getOwnPropertyDescriptors(E)):LA(Object(E)).forEach(function(D){Object.defineProperty(y,D,Object.getOwnPropertyDescriptor(E,D))})}return y}function yd(y){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?yd=function(b){return typeof b}:yd=function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},yd(y)}function dS(y,b,E){return b in y?Object.defineProperty(y,b,{value:E,enumerable:!0,configurable:!0,writable:!0}):y[b]=E,y}function yn(){return yn=Object.assign||function(y){for(var b=1;b<arguments.length;b++){var E=arguments[b];for(var D in E)Object.prototype.hasOwnProperty.call(E,D)&&(y[D]=E[D])}return y},yn.apply(this,arguments)}function uS(y,b){if(y==null)return{};var E={},D=Object.keys(y),S,O;for(O=0;O<D.length;O++)S=D[O],!(b.indexOf(S)>=0)&&(E[S]=y[S]);return E}function hS(y,b){if(y==null)return{};var E=uS(y,b),D,S;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(y);for(S=0;S<O.length;S++)D=O[S],!(b.indexOf(D)>=0)&&Object.prototype.propertyIsEnumerable.call(y,D)&&(E[D]=y[D])}return E}var mS="1.15.6";function vn(y){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(y)}var xn=vn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),oa=vn(/Edge/i),OA=vn(/firefox/i),Xs=vn(/safari/i)&&!vn(/chrome/i)&&!vn(/android/i),Mm=vn(/iP(ad|od|hone)/i),YA=vn(/chrome/i)&&vn(/android/i),QA={capture:!1,passive:!1};function fe(y,b,E){y.addEventListener(b,E,!xn&&QA)}function ge(y,b,E){y.removeEventListener(b,E,!xn&&QA)}function Sd(y,b){if(b){if(b[0]===">"&&(b=b.substring(1)),y)try{if(y.matches)return y.matches(b);if(y.msMatchesSelector)return y.msMatchesSelector(b);if(y.webkitMatchesSelector)return y.webkitMatchesSelector(b)}catch{return!1}return!1}}function ZA(y){return y.host&&y!==document&&y.host.nodeType?y.host:y.parentNode}function Jt(y,b,E,D){if(y){E=E||document;do{if(b!=null&&(b[0]===">"?y.parentNode===E&&Sd(y,b):Sd(y,b))||D&&y===E)return y;if(y===E)break}while(y=ZA(y))}return null}var FA=/\s+/g;function Mt(y,b,E){if(y&&b)if(y.classList)y.classList[E?"add":"remove"](b);else{var D=(" "+y.className+" ").replace(FA," ").replace(" "+b+" "," ");y.className=(D+(E?" "+b:"")).replace(FA," ")}}function re(y,b,E){var D=y&&y.style;if(D){if(E===void 0)return document.defaultView&&document.defaultView.getComputedStyle?E=document.defaultView.getComputedStyle(y,""):y.currentStyle&&(E=y.currentStyle),b===void 0?E:E[b];!(b in D)&&b.indexOf("webkit")===-1&&(b="-webkit-"+b),D[b]=E+(typeof E=="string"?"":"px")}}function io(y,b){var E="";if(typeof y=="string")E=y;else do{var D=re(y,"transform");D&&D!=="none"&&(E=D+" "+E)}while(!b&&(y=y.parentNode));var S=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return S&&new S(E)}function JA(y,b,E){if(y){var D=y.getElementsByTagName(b),S=0,O=D.length;if(E)for(;S<O;S++)E(D[S],S);return D}return[]}function un(){var y=document.scrollingElement;return y||document.documentElement}function Ye(y,b,E,D,S){if(!(!y.getBoundingClientRect&&y!==window)){var O,_,w,m,x,I,v;if(y!==window&&y.parentNode&&y!==un()?(O=y.getBoundingClientRect(),_=O.top,w=O.left,m=O.bottom,x=O.right,I=O.height,v=O.width):(_=0,w=0,m=window.innerHeight,x=window.innerWidth,I=window.innerHeight,v=window.innerWidth),(b||E)&&y!==window&&(S=S||y.parentNode,!xn))do if(S&&S.getBoundingClientRect&&(re(S,"transform")!=="none"||E&&re(S,"position")!=="static")){var f=S.getBoundingClientRect();_-=f.top+parseInt(re(S,"border-top-width")),w-=f.left+parseInt(re(S,"border-left-width")),m=_+O.height,x=w+O.width;break}while(S=S.parentNode);if(D&&y!==window){var A=io(S||y),M=A&&A.a,P=A&&A.d;A&&(_/=P,w/=M,v/=M,I/=P,m=_+I,x=w+v)}return{top:_,left:w,bottom:m,right:x,width:v,height:I}}}function RA(y,b,E){for(var D=Gn(y,!0),S=Ye(y)[b];D;){var O=Ye(D)[E],_=void 0;if(_=S>=O,!_)return D;if(D===un())break;D=Gn(D,!1)}return!1}function oo(y,b,E,D){for(var S=0,O=0,_=y.children;O<_.length;){if(_[O].style.display!=="none"&&_[O]!==se.ghost&&(D||_[O]!==se.dragged)&&Jt(_[O],E.draggable,y,!1)){if(S===b)return _[O];S++}O++}return null}function Bm(y,b){for(var E=y.lastElementChild;E&&(E===se.ghost||re(E,"display")==="none"||b&&!Sd(E,b));)E=E.previousElementSibling;return E||null}function jt(y,b){var E=0;if(!y||!y.parentNode)return-1;for(;y=y.previousElementSibling;)y.nodeName.toUpperCase()!=="TEMPLATE"&&y!==se.clone&&(!b||Sd(y,b))&&E++;return E}function VA(y){var b=0,E=0,D=un();if(y)do{var S=io(y),O=S.a,_=S.d;b+=y.scrollLeft*O,E+=y.scrollTop*_}while(y!==D&&(y=y.parentNode));return[b,E]}function gS(y,b){for(var E in y)if(y.hasOwnProperty(E)){for(var D in b)if(b.hasOwnProperty(D)&&b[D]===y[E][D])return Number(E)}return-1}function Gn(y,b){if(!y||!y.getBoundingClientRect)return un();var E=y,D=!1;do if(E.clientWidth<E.scrollWidth||E.clientHeight<E.scrollHeight){var S=re(E);if(E.clientWidth<E.scrollWidth&&(S.overflowX=="auto"||S.overflowX=="scroll")||E.clientHeight<E.scrollHeight&&(S.overflowY=="auto"||S.overflowY=="scroll")){if(!E.getBoundingClientRect||E===document.body)return un();if(D||b)return E;D=!0}}while(E=E.parentNode);return un()}function pS(y,b){if(y&&b)for(var E in b)b.hasOwnProperty(E)&&(y[E]=b[E]);return y}function fm(y,b){return Math.round(y.top)===Math.round(b.top)&&Math.round(y.left)===Math.round(b.left)&&Math.round(y.height)===Math.round(b.height)&&Math.round(y.width)===Math.round(b.width)}var ea;function XA(y,b){return function(){if(!ea){var E=arguments,D=this;E.length===1?y.call(D,E[0]):y.apply(D,E),ea=setTimeout(function(){ea=void 0},b)}}}function fS(){clearTimeout(ea),ea=void 0}function e_(y,b,E){y.scrollLeft+=b,y.scrollTop+=E}function t_(y){var b=window.Polymer,E=window.jQuery||window.Zepto;return b&&b.dom?b.dom(y).cloneNode(!0):E?E(y).clone(!0)[0]:y.cloneNode(!0)}function n_(y,b,E){var D={};return Array.from(y.children).forEach(function(S){var O,_,w,m;if(!(!Jt(S,b.draggable,y,!1)||S.animated||S===E)){var x=Ye(S);D.left=Math.min((O=D.left)!==null&&O!==void 0?O:1/0,x.left),D.top=Math.min((_=D.top)!==null&&_!==void 0?_:1/0,x.top),D.right=Math.max((w=D.right)!==null&&w!==void 0?w:-1/0,x.right),D.bottom=Math.max((m=D.bottom)!==null&&m!==void 0?m:-1/0,x.bottom)}}),D.width=D.right-D.left,D.height=D.bottom-D.top,D.x=D.left,D.y=D.top,D}var _t="Sortable"+new Date().getTime();function kS(){var y=[],b;return{captureAnimationState:function(){if(y=[],!!this.options.animation){var D=[].slice.call(this.el.children);D.forEach(function(S){if(!(re(S,"display")==="none"||S===se.ghost)){y.push({target:S,rect:Ye(S)});var O=hn({},y[y.length-1].rect);if(S.thisAnimationDuration){var _=io(S,!0);_&&(O.top-=_.f,O.left-=_.e)}S.fromRect=O}})}},addAnimationState:function(D){y.push(D)},removeAnimationState:function(D){y.splice(gS(y,{target:D}),1)},animateAll:function(D){var S=this;if(!this.options.animation){clearTimeout(b),typeof D=="function"&&D();return}var O=!1,_=0;y.forEach(function(w){var m=0,x=w.target,I=x.fromRect,v=Ye(x),f=x.prevFromRect,A=x.prevToRect,M=w.rect,P=io(x,!0);P&&(v.top-=P.f,v.left-=P.e),x.toRect=v,x.thisAnimationDuration&&fm(f,v)&&!fm(I,v)&&(M.top-v.top)/(M.left-v.left)===(I.top-v.top)/(I.left-v.left)&&(m=wS(M,f,A,S.options)),fm(v,I)||(x.prevFromRect=I,x.prevToRect=v,m||(m=S.options.animation),S.animate(x,M,v,m)),m&&(O=!0,_=Math.max(_,m),clearTimeout(x.animationResetTimer),x.animationResetTimer=setTimeout(function(){x.animationTime=0,x.prevFromRect=null,x.fromRect=null,x.prevToRect=null,x.thisAnimationDuration=null},m),x.thisAnimationDuration=m)}),clearTimeout(b),O?b=setTimeout(function(){typeof D=="function"&&D()},_):typeof D=="function"&&D(),y=[]},animate:function(D,S,O,_){if(_){re(D,"transition",""),re(D,"transform","");var w=io(this.el),m=w&&w.a,x=w&&w.d,I=(S.left-O.left)/(m||1),v=(S.top-O.top)/(x||1);D.animatingX=!!I,D.animatingY=!!v,re(D,"transform","translate3d("+I+"px,"+v+"px,0)"),this.forRepaintDummy=bS(D),re(D,"transition","transform "+_+"ms"+(this.options.easing?" "+this.options.easing:"")),re(D,"transform","translate3d(0,0,0)"),typeof D.animated=="number"&&clearTimeout(D.animated),D.animated=setTimeout(function(){re(D,"transition",""),re(D,"transform",""),D.animated=!1,D.animatingX=!1,D.animatingY=!1},_)}}}}function bS(y){return y.offsetWidth}function wS(y,b,E,D){return Math.sqrt(Math.pow(b.top-y.top,2)+Math.pow(b.left-y.left,2))/Math.sqrt(Math.pow(b.top-E.top,2)+Math.pow(b.left-E.left,2))*D.animation}var Xi=[],km={initializeByDefault:!0},ra={mount:function(b){for(var E in km)km.hasOwnProperty(E)&&!(E in b)&&(b[E]=km[E]);Xi.forEach(function(D){if(D.pluginName===b.pluginName)throw"Sortable: Cannot mount plugin ".concat(b.pluginName," more than once")}),Xi.push(b)},pluginEvent:function(b,E,D){var S=this;this.eventCanceled=!1,D.cancel=function(){S.eventCanceled=!0};var O=b+"Global";Xi.forEach(function(_){E[_.pluginName]&&(E[_.pluginName][O]&&E[_.pluginName][O](hn({sortable:E},D)),E.options[_.pluginName]&&E[_.pluginName][b]&&E[_.pluginName][b](hn({sortable:E},D)))})},initializePlugins:function(b,E,D,S){Xi.forEach(function(w){var m=w.pluginName;if(!(!b.options[m]&&!w.initializeByDefault)){var x=new w(b,E,b.options);x.sortable=b,x.options=b.options,b[m]=x,yn(D,x.defaults)}});for(var O in b.options)if(b.options.hasOwnProperty(O)){var _=this.modifyOption(b,O,b.options[O]);typeof _<"u"&&(b.options[O]=_)}},getEventProperties:function(b,E){var D={};return Xi.forEach(function(S){typeof S.eventProperties=="function"&&yn(D,S.eventProperties.call(E[S.pluginName],b))}),D},modifyOption:function(b,E,D){var S;return Xi.forEach(function(O){b[O.pluginName]&&O.optionListeners&&typeof O.optionListeners[E]=="function"&&(S=O.optionListeners[E].call(b[O.pluginName],D))}),S}};function AS(y){var b=y.sortable,E=y.rootEl,D=y.name,S=y.targetEl,O=y.cloneEl,_=y.toEl,w=y.fromEl,m=y.oldIndex,x=y.newIndex,I=y.oldDraggableIndex,v=y.newDraggableIndex,f=y.originalEvent,A=y.putSortable,M=y.extraEventProperties;if(b=b||E&&E[_t],!!b){var P,z=b.options,H="on"+D.charAt(0).toUpperCase()+D.substr(1);window.CustomEvent&&!xn&&!oa?P=new CustomEvent(D,{bubbles:!0,cancelable:!0}):(P=document.createEvent("Event"),P.initEvent(D,!0,!0)),P.to=_||E,P.from=w||E,P.item=S||E,P.clone=O,P.oldIndex=m,P.newIndex=x,P.oldDraggableIndex=I,P.newDraggableIndex=v,P.originalEvent=f,P.pullMode=A?A.lastPutMode:void 0;var V=hn(hn({},M),ra.getEventProperties(D,b));for(var q in V)P[q]=V[q];E&&E.dispatchEvent(P),z[H]&&z[H].call(b,P)}}var _S=["evt"],At=function(b,E){var D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},S=D.evt,O=hS(D,_S);ra.pluginEvent.bind(se)(b,E,hn({dragEl:X,parentEl:Ge,ghostEl:ue,rootEl:Le,nextEl:fi,lastDownEl:xd,cloneEl:Ve,cloneHidden:qn,dragStarted:Ys,putSortable:rt,activeSortable:se.active,originalEvent:S,oldIndex:no,oldDraggableIndex:ta,newIndex:Bt,newDraggableIndex:Un,hideGhostForTarget:s_,unhideGhostForTarget:a_,cloneNowHidden:function(){qn=!0},cloneNowShown:function(){qn=!1},dispatchSortableEvent:function(w){ut({sortable:E,name:w,originalEvent:S})}},O))};function ut(y){AS(hn({putSortable:rt,cloneEl:Ve,targetEl:X,rootEl:Le,oldIndex:no,oldDraggableIndex:ta,newIndex:Bt,newDraggableIndex:Un},y))}var X,Ge,ue,Le,fi,xd,Ve,qn,no,Bt,ta,Un,wd,rt,to=!1,Td=!1,Md=[],mi,Zt,bm,wm,jA,HA,Ys,eo,na,ia=!1,Ad=!1,Ed,ct,Am=[],Em=!1,Bd=[],Pd=typeof document<"u",_d=Mm,UA=oa||xn?"cssFloat":"float",CS=Pd&&!YA&&!Mm&&"draggable"in document.createElement("div"),i_=function(){if(Pd){if(xn)return!1;var y=document.createElement("x");return y.style.cssText="pointer-events:auto",y.style.pointerEvents==="auto"}}(),o_=function(b,E){var D=re(b),S=parseInt(D.width)-parseInt(D.paddingLeft)-parseInt(D.paddingRight)-parseInt(D.borderLeftWidth)-parseInt(D.borderRightWidth),O=oo(b,0,E),_=oo(b,1,E),w=O&&re(O),m=_&&re(_),x=w&&parseInt(w.marginLeft)+parseInt(w.marginRight)+Ye(O).width,I=m&&parseInt(m.marginLeft)+parseInt(m.marginRight)+Ye(_).width;if(D.display==="flex")return D.flexDirection==="column"||D.flexDirection==="column-reverse"?"vertical":"horizontal";if(D.display==="grid")return D.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(O&&w.float&&w.float!=="none"){var v=w.float==="left"?"left":"right";return _&&(m.clear==="both"||m.clear===v)?"vertical":"horizontal"}return O&&(w.display==="block"||w.display==="flex"||w.display==="table"||w.display==="grid"||x>=S&&D[UA]==="none"||_&&D[UA]==="none"&&x+I>S)?"vertical":"horizontal"},vS=function(b,E,D){var S=D?b.left:b.top,O=D?b.right:b.bottom,_=D?b.width:b.height,w=D?E.left:E.top,m=D?E.right:E.bottom,x=D?E.width:E.height;return S===w||O===m||S+_/2===w+x/2},yS=function(b,E){var D;return Md.some(function(S){var O=S[_t].options.emptyInsertThreshold;if(!(!O||Bm(S))){var _=Ye(S),w=b>=_.left-O&&b<=_.right+O,m=E>=_.top-O&&E<=_.bottom+O;if(w&&m)return D=S}}),D},r_=function(b){function E(O,_){return function(w,m,x,I){var v=w.options.group.name&&m.options.group.name&&w.options.group.name===m.options.group.name;if(O==null&&(_||v))return!0;if(O==null||O===!1)return!1;if(_&&O==="clone")return O;if(typeof O=="function")return E(O(w,m,x,I),_)(w,m,x,I);var f=(_?w:m).options.group.name;return O===!0||typeof O=="string"&&O===f||O.join&&O.indexOf(f)>-1}}var D={},S=b.group;(!S||yd(S)!="object")&&(S={name:S}),D.name=S.name,D.checkPull=E(S.pull,!0),D.checkPut=E(S.put),D.revertClone=S.revertClone,b.group=D},s_=function(){!i_&&ue&&re(ue,"display","none")},a_=function(){!i_&&ue&&re(ue,"display","")};Pd&&!YA&&document.addEventListener("click",function(y){if(Td)return y.preventDefault(),y.stopPropagation&&y.stopPropagation(),y.stopImmediatePropagation&&y.stopImmediatePropagation(),Td=!1,!1},!0);var gi=function(b){if(X){b=b.touches?b.touches[0]:b;var E=yS(b.clientX,b.clientY);if(E){var D={};for(var S in b)b.hasOwnProperty(S)&&(D[S]=b[S]);D.target=D.rootEl=E,D.preventDefault=void 0,D.stopPropagation=void 0,E[_t]._onDragOver(D)}}},xS=function(b){X&&X.parentNode[_t]._isOutsideThisEl(b.target)};function se(y,b){if(!(y&&y.nodeType&&y.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(y));this.el=y,this.options=b=yn({},b),y[_t]=this;var E={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(y.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return o_(y,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(_,w){_.setData("Text",w.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:se.supportPointer!==!1&&"PointerEvent"in window&&(!Xs||Mm),emptyInsertThreshold:5};ra.initializePlugins(this,y,E);for(var D in E)!(D in b)&&(b[D]=E[D]);r_(b);for(var S in this)S.charAt(0)==="_"&&typeof this[S]=="function"&&(this[S]=this[S].bind(this));this.nativeDraggable=b.forceFallback?!1:CS,this.nativeDraggable&&(this.options.touchStartThreshold=1),b.supportPointer?fe(y,"pointerdown",this._onTapStart):(fe(y,"mousedown",this._onTapStart),fe(y,"touchstart",this._onTapStart)),this.nativeDraggable&&(fe(y,"dragover",this),fe(y,"dragenter",this)),Md.push(this.el),b.store&&b.store.get&&this.sort(b.store.get(this)||[]),yn(this,kS())}se.prototype={constructor:se,_isOutsideThisEl:function(b){!this.el.contains(b)&&b!==this.el&&(eo=null)},_getDirection:function(b,E){return typeof this.options.direction=="function"?this.options.direction.call(this,b,E,X):this.options.direction},_onTapStart:function(b){if(b.cancelable){var E=this,D=this.el,S=this.options,O=S.preventOnFilter,_=b.type,w=b.touches&&b.touches[0]||b.pointerType&&b.pointerType==="touch"&&b,m=(w||b).target,x=b.target.shadowRoot&&(b.path&&b.path[0]||b.composedPath&&b.composedPath()[0])||m,I=S.filter;if(NS(D),!X&&!(/mousedown|pointerdown/.test(_)&&b.button!==0||S.disabled)&&!x.isContentEditable&&!(!this.nativeDraggable&&Xs&&m&&m.tagName.toUpperCase()==="SELECT")&&(m=Jt(m,S.draggable,D,!1),!(m&&m.animated)&&xd!==m)){if(no=jt(m),ta=jt(m,S.draggable),typeof I=="function"){if(I.call(this,b,m,this)){ut({sortable:E,rootEl:x,name:"filter",targetEl:m,toEl:D,fromEl:D}),At("filter",E,{evt:b}),O&&b.preventDefault();return}}else if(I&&(I=I.split(",").some(function(v){if(v=Jt(x,v.trim(),D,!1),v)return ut({sortable:E,rootEl:v,name:"filter",targetEl:m,fromEl:D,toEl:D}),At("filter",E,{evt:b}),!0}),I)){O&&b.preventDefault();return}S.handle&&!Jt(x,S.handle,D,!1)||this._prepareDragStart(b,w,m)}}},_prepareDragStart:function(b,E,D){var S=this,O=S.el,_=S.options,w=O.ownerDocument,m;if(D&&!X&&D.parentNode===O){var x=Ye(D);if(Le=O,X=D,Ge=X.parentNode,fi=X.nextSibling,xd=D,wd=_.group,se.dragged=X,mi={target:X,clientX:(E||b).clientX,clientY:(E||b).clientY},jA=mi.clientX-x.left,HA=mi.clientY-x.top,this._lastX=(E||b).clientX,this._lastY=(E||b).clientY,X.style["will-change"]="all",m=function(){if(At("delayEnded",S,{evt:b}),se.eventCanceled){S._onDrop();return}S._disableDelayedDragEvents(),!OA&&S.nativeDraggable&&(X.draggable=!0),S._triggerDragStart(b,E),ut({sortable:S,name:"choose",originalEvent:b}),Mt(X,_.chosenClass,!0)},_.ignore.split(",").forEach(function(I){JA(X,I.trim(),_m)}),fe(w,"dragover",gi),fe(w,"mousemove",gi),fe(w,"touchmove",gi),_.supportPointer?(fe(w,"pointerup",S._onDrop),!this.nativeDraggable&&fe(w,"pointercancel",S._onDrop)):(fe(w,"mouseup",S._onDrop),fe(w,"touchend",S._onDrop),fe(w,"touchcancel",S._onDrop)),OA&&this.nativeDraggable&&(this.options.touchStartThreshold=4,X.draggable=!0),At("delayStart",this,{evt:b}),_.delay&&(!_.delayOnTouchOnly||E)&&(!this.nativeDraggable||!(oa||xn))){if(se.eventCanceled){this._onDrop();return}_.supportPointer?(fe(w,"pointerup",S._disableDelayedDrag),fe(w,"pointercancel",S._disableDelayedDrag)):(fe(w,"mouseup",S._disableDelayedDrag),fe(w,"touchend",S._disableDelayedDrag),fe(w,"touchcancel",S._disableDelayedDrag)),fe(w,"mousemove",S._delayedDragTouchMoveHandler),fe(w,"touchmove",S._delayedDragTouchMoveHandler),_.supportPointer&&fe(w,"pointermove",S._delayedDragTouchMoveHandler),S._dragStartTimer=setTimeout(m,_.delay)}else m()}},_delayedDragTouchMoveHandler:function(b){var E=b.touches?b.touches[0]:b;Math.max(Math.abs(E.clientX-this._lastX),Math.abs(E.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){X&&_m(X),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var b=this.el.ownerDocument;ge(b,"mouseup",this._disableDelayedDrag),ge(b,"touchend",this._disableDelayedDrag),ge(b,"touchcancel",this._disableDelayedDrag),ge(b,"pointerup",this._disableDelayedDrag),ge(b,"pointercancel",this._disableDelayedDrag),ge(b,"mousemove",this._delayedDragTouchMoveHandler),ge(b,"touchmove",this._delayedDragTouchMoveHandler),ge(b,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(b,E){E=E||b.pointerType=="touch"&&b,!this.nativeDraggable||E?this.options.supportPointer?fe(document,"pointermove",this._onTouchMove):E?fe(document,"touchmove",this._onTouchMove):fe(document,"mousemove",this._onTouchMove):(fe(X,"dragend",this),fe(Le,"dragstart",this._onDragStart));try{document.selection?Dd(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(b,E){if(to=!1,Le&&X){At("dragStarted",this,{evt:E}),this.nativeDraggable&&fe(document,"dragover",xS);var D=this.options;!b&&Mt(X,D.dragClass,!1),Mt(X,D.ghostClass,!0),se.active=this,b&&this._appendGhost(),ut({sortable:this,name:"start",originalEvent:E})}else this._nulling()},_emulateDragOver:function(){if(Zt){this._lastX=Zt.clientX,this._lastY=Zt.clientY,s_();for(var b=document.elementFromPoint(Zt.clientX,Zt.clientY),E=b;b&&b.shadowRoot&&(b=b.shadowRoot.elementFromPoint(Zt.clientX,Zt.clientY),b!==E);)E=b;if(X.parentNode[_t]._isOutsideThisEl(b),E)do{if(E[_t]){var D=void 0;if(D=E[_t]._onDragOver({clientX:Zt.clientX,clientY:Zt.clientY,target:b,rootEl:E}),D&&!this.options.dragoverBubble)break}b=E}while(E=ZA(E));a_()}},_onTouchMove:function(b){if(mi){var E=this.options,D=E.fallbackTolerance,S=E.fallbackOffset,O=b.touches?b.touches[0]:b,_=ue&&io(ue,!0),w=ue&&_&&_.a,m=ue&&_&&_.d,x=_d&&ct&&VA(ct),I=(O.clientX-mi.clientX+S.x)/(w||1)+(x?x[0]-Am[0]:0)/(w||1),v=(O.clientY-mi.clientY+S.y)/(m||1)+(x?x[1]-Am[1]:0)/(m||1);if(!se.active&&!to){if(D&&Math.max(Math.abs(O.clientX-this._lastX),Math.abs(O.clientY-this._lastY))<D)return;this._onDragStart(b,!0)}if(ue){_?(_.e+=I-(bm||0),_.f+=v-(wm||0)):_={a:1,b:0,c:0,d:1,e:I,f:v};var f="matrix(".concat(_.a,",").concat(_.b,",").concat(_.c,",").concat(_.d,",").concat(_.e,",").concat(_.f,")");re(ue,"webkitTransform",f),re(ue,"mozTransform",f),re(ue,"msTransform",f),re(ue,"transform",f),bm=I,wm=v,Zt=O}b.cancelable&&b.preventDefault()}},_appendGhost:function(){if(!ue){var b=this.options.fallbackOnBody?document.body:Le,E=Ye(X,!0,_d,!0,b),D=this.options;if(_d){for(ct=b;re(ct,"position")==="static"&&re(ct,"transform")==="none"&&ct!==document;)ct=ct.parentNode;ct!==document.body&&ct!==document.documentElement?(ct===document&&(ct=un()),E.top+=ct.scrollTop,E.left+=ct.scrollLeft):ct=un(),Am=VA(ct)}ue=X.cloneNode(!0),Mt(ue,D.ghostClass,!1),Mt(ue,D.fallbackClass,!0),Mt(ue,D.dragClass,!0),re(ue,"transition",""),re(ue,"transform",""),re(ue,"box-sizing","border-box"),re(ue,"margin",0),re(ue,"top",E.top),re(ue,"left",E.left),re(ue,"width",E.width),re(ue,"height",E.height),re(ue,"opacity","0.8"),re(ue,"position",_d?"absolute":"fixed"),re(ue,"zIndex","100000"),re(ue,"pointerEvents","none"),se.ghost=ue,b.appendChild(ue),re(ue,"transform-origin",jA/parseInt(ue.style.width)*100+"% "+HA/parseInt(ue.style.height)*100+"%")}},_onDragStart:function(b,E){var D=this,S=b.dataTransfer,O=D.options;if(At("dragStart",this,{evt:b}),se.eventCanceled){this._onDrop();return}At("setupClone",this),se.eventCanceled||(Ve=t_(X),Ve.removeAttribute("id"),Ve.draggable=!1,Ve.style["will-change"]="",this._hideClone(),Mt(Ve,this.options.chosenClass,!1),se.clone=Ve),D.cloneId=Dd(function(){At("clone",D),!se.eventCanceled&&(D.options.removeCloneOnHide||Le.insertBefore(Ve,X),D._hideClone(),ut({sortable:D,name:"clone"}))}),!E&&Mt(X,O.dragClass,!0),E?(Td=!0,D._loopId=setInterval(D._emulateDragOver,50)):(ge(document,"mouseup",D._onDrop),ge(document,"touchend",D._onDrop),ge(document,"touchcancel",D._onDrop),S&&(S.effectAllowed="move",O.setData&&O.setData.call(D,S,X)),fe(document,"drop",D),re(X,"transform","translateZ(0)")),to=!0,D._dragStartId=Dd(D._dragStarted.bind(D,E,b)),fe(document,"selectstart",D),Ys=!0,window.getSelection().removeAllRanges(),Xs&&re(document.body,"user-select","none")},_onDragOver:function(b){var E=this.el,D=b.target,S,O,_,w=this.options,m=w.group,x=se.active,I=wd===m,v=w.sort,f=rt||x,A,M=this,P=!1;if(Em)return;function z($n,zd){At($n,M,hn({evt:b,isOwner:I,axis:A?"vertical":"horizontal",revert:_,dragRect:S,targetRect:O,canSort:v,fromSortable:f,target:D,completed:V,onMove:function(ki,Ut){return Cd(Le,E,X,S,ki,Ye(ki),b,Ut)},changed:q},zd))}function H(){z("dragOverAnimationCapture"),M.captureAnimationState(),M!==f&&f.captureAnimationState()}function V($n){return z("dragOverCompleted",{insertion:$n}),$n&&(I?x._hideClone():x._showClone(M),M!==f&&(Mt(X,rt?rt.options.ghostClass:x.options.ghostClass,!1),Mt(X,w.ghostClass,!0)),rt!==M&&M!==se.active?rt=M:M===se.active&&rt&&(rt=null),f===M&&(M._ignoreWhileAnimating=D),M.animateAll(function(){z("dragOverAnimationComplete"),M._ignoreWhileAnimating=null}),M!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(D===X&&!X.animated||D===E&&!D.animated)&&(eo=null),!w.dragoverBubble&&!b.rootEl&&D!==document&&(X.parentNode[_t]._isOutsideThisEl(b.target),!$n&&gi(b)),!w.dragoverBubble&&b.stopPropagation&&b.stopPropagation(),P=!0}function q(){Bt=jt(X),Un=jt(X,w.draggable),ut({sortable:M,name:"change",toEl:E,newIndex:Bt,newDraggableIndex:Un,originalEvent:b})}if(b.preventDefault!==void 0&&b.cancelable&&b.preventDefault(),D=Jt(D,w.draggable,E,!0),z("dragOver"),se.eventCanceled)return P;if(X.contains(b.target)||D.animated&&D.animatingX&&D.animatingY||M._ignoreWhileAnimating===D)return V(!1);if(Td=!1,x&&!w.disabled&&(I?v||(_=Ge!==Le):rt===this||(this.lastPutMode=wd.checkPull(this,x,X,b))&&m.checkPut(this,x,X,b))){if(A=this._getDirection(b,D)==="vertical",S=Ye(X),z("dragOverValid"),se.eventCanceled)return P;if(_)return Ge=Le,H(),this._hideClone(),z("revert"),se.eventCanceled||(fi?Le.insertBefore(X,fi):Le.appendChild(X)),V(!0);var te=Bm(E,w.draggable);if(!te||SS(b,A,this)&&!te.animated){if(te===X)return V(!1);if(te&&E===b.target&&(D=te),D&&(O=Ye(D)),Cd(Le,E,X,S,D,O,b,!!D)!==!1)return H(),te&&te.nextSibling?E.insertBefore(X,te.nextSibling):E.appendChild(X),Ge=E,q(),V(!0)}else if(te&&IS(b,A,this)){var le=oo(E,0,w,!0);if(le===X)return V(!1);if(D=le,O=Ye(D),Cd(Le,E,X,S,D,O,b,!1)!==!1)return H(),E.insertBefore(X,le),Ge=E,q(),V(!0)}else if(D.parentNode===E){O=Ye(D);var me=0,Ne,Qe=X.parentNode!==E,_e=!vS(X.animated&&X.toRect||S,D.animated&&D.toRect||O,A),Je=A?"top":"left",tt=RA(D,"top","top")||RA(X,"top","top"),En=tt?tt.scrollTop:void 0;eo!==D&&(Ne=O[Je],ia=!1,Ad=!_e&&w.invertSwap||Qe),me=TS(b,D,O,A,_e?1:w.swapThreshold,w.invertedSwapThreshold==null?w.swapThreshold:w.invertedSwapThreshold,Ad,eo===D);var B;if(me!==0){var de=jt(X);do de-=me,B=Ge.children[de];while(B&&(re(B,"display")==="none"||B===ue))}if(me===0||B===D)return V(!1);eo=D,na=me;var mn=D.nextElementSibling,Ht=!1;Ht=me===1;var Wn=Cd(Le,E,X,S,D,O,b,Ht);if(Wn!==!1)return(Wn===1||Wn===-1)&&(Ht=Wn===1),Em=!0,setTimeout(DS,30),H(),Ht&&!mn?E.appendChild(X):D.parentNode.insertBefore(X,Ht?mn:D),tt&&e_(tt,0,En-tt.scrollTop),Ge=X.parentNode,Ne!==void 0&&!Ad&&(Ed=Math.abs(Ne-Ye(D)[Je])),q(),V(!0)}if(E.contains(X))return V(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){ge(document,"mousemove",this._onTouchMove),ge(document,"touchmove",this._onTouchMove),ge(document,"pointermove",this._onTouchMove),ge(document,"dragover",gi),ge(document,"mousemove",gi),ge(document,"touchmove",gi)},_offUpEvents:function(){var b=this.el.ownerDocument;ge(b,"mouseup",this._onDrop),ge(b,"touchend",this._onDrop),ge(b,"pointerup",this._onDrop),ge(b,"pointercancel",this._onDrop),ge(b,"touchcancel",this._onDrop),ge(document,"selectstart",this)},_onDrop:function(b){var E=this.el,D=this.options;if(Bt=jt(X),Un=jt(X,D.draggable),At("drop",this,{evt:b}),Ge=X&&X.parentNode,Bt=jt(X),Un=jt(X,D.draggable),se.eventCanceled){this._nulling();return}to=!1,Ad=!1,ia=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Dm(this.cloneId),Dm(this._dragStartId),this.nativeDraggable&&(ge(document,"drop",this),ge(E,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Xs&&re(document.body,"user-select",""),re(X,"transform",""),b&&(Ys&&(b.cancelable&&b.preventDefault(),!D.dropBubble&&b.stopPropagation()),ue&&ue.parentNode&&ue.parentNode.removeChild(ue),(Le===Ge||rt&&rt.lastPutMode!=="clone")&&Ve&&Ve.parentNode&&Ve.parentNode.removeChild(Ve),X&&(this.nativeDraggable&&ge(X,"dragend",this),_m(X),X.style["will-change"]="",Ys&&!to&&Mt(X,rt?rt.options.ghostClass:this.options.ghostClass,!1),Mt(X,this.options.chosenClass,!1),ut({sortable:this,name:"unchoose",toEl:Ge,newIndex:null,newDraggableIndex:null,originalEvent:b}),Le!==Ge?(Bt>=0&&(ut({rootEl:Ge,name:"add",toEl:Ge,fromEl:Le,originalEvent:b}),ut({sortable:this,name:"remove",toEl:Ge,originalEvent:b}),ut({rootEl:Ge,name:"sort",toEl:Ge,fromEl:Le,originalEvent:b}),ut({sortable:this,name:"sort",toEl:Ge,originalEvent:b})),rt&&rt.save()):Bt!==no&&Bt>=0&&(ut({sortable:this,name:"update",toEl:Ge,originalEvent:b}),ut({sortable:this,name:"sort",toEl:Ge,originalEvent:b})),se.active&&((Bt==null||Bt===-1)&&(Bt=no,Un=ta),ut({sortable:this,name:"end",toEl:Ge,originalEvent:b}),this.save()))),this._nulling()},_nulling:function(){At("nulling",this),Le=X=Ge=ue=fi=Ve=xd=qn=mi=Zt=Ys=Bt=Un=no=ta=eo=na=rt=wd=se.dragged=se.ghost=se.clone=se.active=null,Bd.forEach(function(b){b.checked=!0}),Bd.length=bm=wm=0},handleEvent:function(b){switch(b.type){case"drop":case"dragend":this._onDrop(b);break;case"dragenter":case"dragover":X&&(this._onDragOver(b),ES(b));break;case"selectstart":b.preventDefault();break}},toArray:function(){for(var b=[],E,D=this.el.children,S=0,O=D.length,_=this.options;S<O;S++)E=D[S],Jt(E,_.draggable,this.el,!1)&&b.push(E.getAttribute(_.dataIdAttr)||BS(E));return b},sort:function(b,E){var D={},S=this.el;this.toArray().forEach(function(O,_){var w=S.children[_];Jt(w,this.options.draggable,S,!1)&&(D[O]=w)},this),E&&this.captureAnimationState(),b.forEach(function(O){D[O]&&(S.removeChild(D[O]),S.appendChild(D[O]))}),E&&this.animateAll()},save:function(){var b=this.options.store;b&&b.set&&b.set(this)},closest:function(b,E){return Jt(b,E||this.options.draggable,this.el,!1)},option:function(b,E){var D=this.options;if(E===void 0)return D[b];var S=ra.modifyOption(this,b,E);typeof S<"u"?D[b]=S:D[b]=E,b==="group"&&r_(D)},destroy:function(){At("destroy",this);var b=this.el;b[_t]=null,ge(b,"mousedown",this._onTapStart),ge(b,"touchstart",this._onTapStart),ge(b,"pointerdown",this._onTapStart),this.nativeDraggable&&(ge(b,"dragover",this),ge(b,"dragenter",this)),Array.prototype.forEach.call(b.querySelectorAll("[draggable]"),function(E){E.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Md.splice(Md.indexOf(this.el),1),this.el=b=null},_hideClone:function(){if(!qn){if(At("hideClone",this),se.eventCanceled)return;re(Ve,"display","none"),this.options.removeCloneOnHide&&Ve.parentNode&&Ve.parentNode.removeChild(Ve),qn=!0}},_showClone:function(b){if(b.lastPutMode!=="clone"){this._hideClone();return}if(qn){if(At("showClone",this),se.eventCanceled)return;X.parentNode==Le&&!this.options.group.revertClone?Le.insertBefore(Ve,X):fi?Le.insertBefore(Ve,fi):Le.appendChild(Ve),this.options.group.revertClone&&this.animate(X,Ve),re(Ve,"display",""),qn=!1}}};function ES(y){y.dataTransfer&&(y.dataTransfer.dropEffect="move"),y.cancelable&&y.preventDefault()}function Cd(y,b,E,D,S,O,_,w){var m,x=y[_t],I=x.options.onMove,v;return window.CustomEvent&&!xn&&!oa?m=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(m=document.createEvent("Event"),m.initEvent("move",!0,!0)),m.to=b,m.from=y,m.dragged=E,m.draggedRect=D,m.related=S||b,m.relatedRect=O||Ye(b),m.willInsertAfter=w,m.originalEvent=_,y.dispatchEvent(m),I&&(v=I.call(x,m,_)),v}function _m(y){y.draggable=!1}function DS(){Em=!1}function IS(y,b,E){var D=Ye(oo(E.el,0,E.options,!0)),S=n_(E.el,E.options,ue),O=10;return b?y.clientX<S.left-O||y.clientY<D.top&&y.clientX<D.right:y.clientY<S.top-O||y.clientY<D.bottom&&y.clientX<D.left}function SS(y,b,E){var D=Ye(Bm(E.el,E.options.draggable)),S=n_(E.el,E.options,ue),O=10;return b?y.clientX>S.right+O||y.clientY>D.bottom&&y.clientX>D.left:y.clientY>S.bottom+O||y.clientX>D.right&&y.clientY>D.top}function TS(y,b,E,D,S,O,_,w){var m=D?y.clientY:y.clientX,x=D?E.height:E.width,I=D?E.top:E.left,v=D?E.bottom:E.right,f=!1;if(!_){if(w&&Ed<x*S){if(!ia&&(na===1?m>I+x*O/2:m<v-x*O/2)&&(ia=!0),ia)f=!0;else if(na===1?m<I+Ed:m>v-Ed)return-na}else if(m>I+x*(1-S)/2&&m<v-x*(1-S)/2)return MS(b)}return f=f||_,f&&(m<I+x*O/2||m>v-x*O/2)?m>I+x/2?1:-1:0}function MS(y){return jt(X)<jt(y)?1:-1}function BS(y){for(var b=y.tagName+y.className+y.src+y.href+y.textContent,E=b.length,D=0;E--;)D+=b.charCodeAt(E);return D.toString(36)}function NS(y){Bd.length=0;for(var b=y.getElementsByTagName("input"),E=b.length;E--;){var D=b[E];D.checked&&Bd.push(D)}}function Dd(y){return setTimeout(y,0)}function Dm(y){return clearTimeout(y)}Pd&&fe(document,"touchmove",function(y){(se.active||to)&&y.cancelable&&y.preventDefault()});se.utils={on:fe,off:ge,css:re,find:JA,is:function(b,E){return!!Jt(b,E,b,!1)},extend:pS,throttle:XA,closest:Jt,toggleClass:Mt,clone:t_,index:jt,nextTick:Dd,cancelNextTick:Dm,detectDirection:o_,getChild:oo,expando:_t};se.get=function(y){return y[_t]};se.mount=function(){for(var y=arguments.length,b=new Array(y),E=0;E<y;E++)b[E]=arguments[E];b[0].constructor===Array&&(b=b[0]),b.forEach(function(D){if(!D.prototype||!D.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(D));D.utils&&(se.utils=hn(hn({},se.utils),D.utils)),ra.mount(D)})};se.create=function(y,b){return new se(y,b)};se.version=mS;var Ke=[],Qs,Im,Sm=!1,Cm,vm,Nd,Zs;function PS(){function y(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var b in this)b.charAt(0)==="_"&&typeof this[b]=="function"&&(this[b]=this[b].bind(this))}return y.prototype={dragStarted:function(E){var D=E.originalEvent;this.sortable.nativeDraggable?fe(document,"dragover",this._handleAutoScroll):this.options.supportPointer?fe(document,"pointermove",this._handleFallbackAutoScroll):D.touches?fe(document,"touchmove",this._handleFallbackAutoScroll):fe(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(E){var D=E.originalEvent;!this.options.dragOverBubble&&!D.rootEl&&this._handleAutoScroll(D)},drop:function(){this.sortable.nativeDraggable?ge(document,"dragover",this._handleAutoScroll):(ge(document,"pointermove",this._handleFallbackAutoScroll),ge(document,"touchmove",this._handleFallbackAutoScroll),ge(document,"mousemove",this._handleFallbackAutoScroll)),qA(),Id(),fS()},nulling:function(){Nd=Im=Qs=Sm=Zs=Cm=vm=null,Ke.length=0},_handleFallbackAutoScroll:function(E){this._handleAutoScroll(E,!0)},_handleAutoScroll:function(E,D){var S=this,O=(E.touches?E.touches[0]:E).clientX,_=(E.touches?E.touches[0]:E).clientY,w=document.elementFromPoint(O,_);if(Nd=E,D||this.options.forceAutoScrollFallback||oa||xn||Xs){ym(E,this.options,w,D);var m=Gn(w,!0);Sm&&(!Zs||O!==Cm||_!==vm)&&(Zs&&qA(),Zs=setInterval(function(){var x=Gn(document.elementFromPoint(O,_),!0);x!==m&&(m=x,Id()),ym(E,S.options,x,D)},10),Cm=O,vm=_)}else{if(!this.options.bubbleScroll||Gn(w,!0)===un()){Id();return}ym(E,this.options,Gn(w,!1),!1)}}},yn(y,{pluginName:"scroll",initializeByDefault:!0})}function Id(){Ke.forEach(function(y){clearInterval(y.pid)}),Ke=[]}function qA(){clearInterval(Zs)}var ym=XA(function(y,b,E,D){if(b.scroll){var S=(y.touches?y.touches[0]:y).clientX,O=(y.touches?y.touches[0]:y).clientY,_=b.scrollSensitivity,w=b.scrollSpeed,m=un(),x=!1,I;Im!==E&&(Im=E,Id(),Qs=b.scroll,I=b.scrollFn,Qs===!0&&(Qs=Gn(E,!0)));var v=0,f=Qs;do{var A=f,M=Ye(A),P=M.top,z=M.bottom,H=M.left,V=M.right,q=M.width,te=M.height,le=void 0,me=void 0,Ne=A.scrollWidth,Qe=A.scrollHeight,_e=re(A),Je=A.scrollLeft,tt=A.scrollTop;A===m?(le=q<Ne&&(_e.overflowX==="auto"||_e.overflowX==="scroll"||_e.overflowX==="visible"),me=te<Qe&&(_e.overflowY==="auto"||_e.overflowY==="scroll"||_e.overflowY==="visible")):(le=q<Ne&&(_e.overflowX==="auto"||_e.overflowX==="scroll"),me=te<Qe&&(_e.overflowY==="auto"||_e.overflowY==="scroll"));var En=le&&(Math.abs(V-S)<=_&&Je+q<Ne)-(Math.abs(H-S)<=_&&!!Je),B=me&&(Math.abs(z-O)<=_&&tt+te<Qe)-(Math.abs(P-O)<=_&&!!tt);if(!Ke[v])for(var de=0;de<=v;de++)Ke[de]||(Ke[de]={});(Ke[v].vx!=En||Ke[v].vy!=B||Ke[v].el!==A)&&(Ke[v].el=A,Ke[v].vx=En,Ke[v].vy=B,clearInterval(Ke[v].pid),(En!=0||B!=0)&&(x=!0,Ke[v].pid=setInterval((function(){D&&this.layer===0&&se.active._onTouchMove(Nd);var mn=Ke[this.layer].vy?Ke[this.layer].vy*w:0,Ht=Ke[this.layer].vx?Ke[this.layer].vx*w:0;typeof I=="function"&&I.call(se.dragged.parentNode[_t],Ht,mn,y,Nd,Ke[this.layer].el)!=="continue"||e_(Ke[this.layer].el,Ht,mn)}).bind({layer:v}),24))),v++}while(b.bubbleScroll&&f!==m&&(f=Gn(f,!1)));Sm=x}},30),c_=function(b){var E=b.originalEvent,D=b.putSortable,S=b.dragEl,O=b.activeSortable,_=b.dispatchSortableEvent,w=b.hideGhostForTarget,m=b.unhideGhostForTarget;if(E){var x=D||O;w();var I=E.changedTouches&&E.changedTouches.length?E.changedTouches[0]:E,v=document.elementFromPoint(I.clientX,I.clientY);m(),x&&!x.el.contains(v)&&(_("spill"),this.onSpill({dragEl:S,putSortable:D}))}};function Nm(){}Nm.prototype={startIndex:null,dragStart:function(b){var E=b.oldDraggableIndex;this.startIndex=E},onSpill:function(b){var E=b.dragEl,D=b.putSortable;this.sortable.captureAnimationState(),D&&D.captureAnimationState();var S=oo(this.sortable.el,this.startIndex,this.options);S?this.sortable.el.insertBefore(E,S):this.sortable.el.appendChild(E),this.sortable.animateAll(),D&&D.animateAll()},drop:c_};yn(Nm,{pluginName:"revertOnSpill"});function Pm(){}Pm.prototype={onSpill:function(b){var E=b.dragEl,D=b.putSortable,S=D||this.sortable;S.captureAnimationState(),E.parentNode&&E.parentNode.removeChild(E),S.animateAll()},drop:c_};yn(Pm,{pluginName:"removeOnSpill"});se.mount(new PS);se.mount(Pm,Nm);var Js={exports:{}};Js.exports;var GA;function zS(){return GA||(GA=1,function(y,b){(function(E){const D=E.en=E.en||{};D.dictionary=Object.assign(D.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept",Accessibility:"Accessibility","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align center":"Align center","Align left":"Align left","Align right":"Align right","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Big:"Big",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Custom:"Custom","Custom image size":"Custom image size",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent",Default:"Default","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc","Document colors":"Document colors",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown menu":"Dropdown menu","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor menu bar":"Editor menu bar","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Entering a to-do list":"Entering a to-do list","Error during image upload":"Error during image upload","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.","Failed to determine category of edited image.":"Failed to determine category of edited image.",File:"File","Font Background Color":"Font Background Color","Font Color":"Font Color","Font Family":"Font Family","Font Size":"Font Size","From computer":"From computer","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar",Huge:"Huge",Image:"Image","Image from computer":"Image from computer","Image resize list":"Image resize list","Image toolbar":"Image toolbar","Image upload complete":"Image upload complete","Image via URL":"Image via URL","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert via URL":"Insert via URL","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text",Justify:"Justify","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Leaving a to-do list":"Leaving a to-do list","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","Link URL must not be empty.":"Link URL must not be empty.","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman",Media:"Media","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",MENU_BAR_MENU_EDIT:"Edit",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Font",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Help",MENU_BAR_MENU_INSERT:"Insert",MENU_BAR_MENU_TEXT:"Text",MENU_BAR_MENU_TOOLS:"Tools",MENU_BAR_MENU_VIEW:"View","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus from an editable area back to the parent widget":"Move focus from an editable area back to the parent widget","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the menu bar, navigate between menu bars":"Move focus to the menu bar, navigate between menu bars","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar or menu bar":"Navigate through the toolbar or menu bar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.",'Please enter a valid color (e.g. "ff0000").':'Please enter a valid color (e.g. "ff0000").',"Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image (in %0)":"Resize image (in %0)","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor","Rich Text Editor. Editing area: %0":"Rich Text Editor. Editing area: %0",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Small:"Small",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript",Table:"Table","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alignment":"Text alignment","Text alignment toolbar":"Text alignment toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"The value must not be empty.":"The value must not be empty.","The value should be a plain number.":"The value should be a plain number.","These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.",Tiny:"Tiny","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Uploading image":"Uploading image","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar","Via URL":"Via URL",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","With file manager":"With file manager","Wrap text":"Wrap text",Yellow:"Yellow","You have no image editing permissions.":"You have no image editing permissions.","You have no image upload permissions.":"You have no image upload permissions."}),D.getPluralForm=function(S){return S!=1}})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(E,D){y.exports=D()}(self,()=>(()=>{var E={9246:(_,w,m)=>{const x=m(6931),I={};for(const f of Object.keys(x))I[x[f]]=f;const v={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};_.exports=v;for(const f of Object.keys(v)){if(!("channels"in v[f]))throw new Error("missing channels property: "+f);if(!("labels"in v[f]))throw new Error("missing channel labels property: "+f);if(v[f].labels.length!==v[f].channels)throw new Error("channel and label counts mismatch: "+f);const{channels:A,labels:M}=v[f];delete v[f].channels,delete v[f].labels,Object.defineProperty(v[f],"channels",{value:A}),Object.defineProperty(v[f],"labels",{value:M})}v.rgb.hsl=function(f){const A=f[0]/255,M=f[1]/255,P=f[2]/255,z=Math.min(A,M,P),H=Math.max(A,M,P),V=H-z;let q,te;H===z?q=0:A===H?q=(M-P)/V:M===H?q=2+(P-A)/V:P===H&&(q=4+(A-M)/V),q=Math.min(60*q,360),q<0&&(q+=360);const le=(z+H)/2;return te=H===z?0:le<=.5?V/(H+z):V/(2-H-z),[q,100*te,100*le]},v.rgb.hsv=function(f){let A,M,P,z,H;const V=f[0]/255,q=f[1]/255,te=f[2]/255,le=Math.max(V,q,te),me=le-Math.min(V,q,te),Ne=function(Qe){return(le-Qe)/6/me+.5};return me===0?(z=0,H=0):(H=me/le,A=Ne(V),M=Ne(q),P=Ne(te),V===le?z=P-M:q===le?z=.3333333333333333+A-P:te===le&&(z=.6666666666666666+M-A),z<0?z+=1:z>1&&(z-=1)),[360*z,100*H,100*le]},v.rgb.hwb=function(f){const A=f[0],M=f[1];let P=f[2];const z=v.rgb.hsl(f)[0],H=1/255*Math.min(A,Math.min(M,P));return P=1-.00392156862745098*Math.max(A,Math.max(M,P)),[z,100*H,100*P]},v.rgb.cmyk=function(f){const A=f[0]/255,M=f[1]/255,P=f[2]/255,z=Math.min(1-A,1-M,1-P);return[100*((1-A-z)/(1-z)||0),100*((1-M-z)/(1-z)||0),100*((1-P-z)/(1-z)||0),100*z]},v.rgb.keyword=function(f){const A=I[f];if(A)return A;let M,P=1/0;for(const V of Object.keys(x)){const q=x[V],te=(H=q,((z=f)[0]-H[0])**2+(z[1]-H[1])**2+(z[2]-H[2])**2);te<P&&(P=te,M=V)}var z,H;return M},v.keyword.rgb=function(f){return x[f]},v.rgb.xyz=function(f){let A=f[0]/255,M=f[1]/255,P=f[2]/255;return A=A>.04045?((A+.055)/1.055)**2.4:A/12.92,M=M>.04045?((M+.055)/1.055)**2.4:M/12.92,P=P>.04045?((P+.055)/1.055)**2.4:P/12.92,[100*(.4124*A+.3576*M+.1805*P),100*(.2126*A+.7152*M+.0722*P),100*(.0193*A+.1192*M+.9505*P)]},v.rgb.lab=function(f){const A=v.rgb.xyz(f);let M=A[0],P=A[1],z=A[2];return M/=95.047,P/=100,z/=108.883,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,P=P>.008856?P**.3333333333333333:7.787*P+.13793103448275862,z=z>.008856?z**.3333333333333333:7.787*z+.13793103448275862,[116*P-16,500*(M-P),200*(P-z)]},v.hsl.rgb=function(f){const A=f[0]/360,M=f[1]/100,P=f[2]/100;let z,H,V;if(M===0)return V=255*P,[V,V,V];z=P<.5?P*(1+M):P+M-P*M;const q=2*P-z,te=[0,0,0];for(let le=0;le<3;le++)H=A+.3333333333333333*-(le-1),H<0&&H++,H>1&&H--,V=6*H<1?q+6*(z-q)*H:2*H<1?z:3*H<2?q+(z-q)*(.6666666666666666-H)*6:q,te[le]=255*V;return te},v.hsl.hsv=function(f){const A=f[0];let M=f[1]/100,P=f[2]/100,z=M;const H=Math.max(P,.01);return P*=2,M*=P<=1?P:2-P,z*=H<=1?H:2-H,[A,100*(P===0?2*z/(H+z):2*M/(P+M)),100*((P+M)/2)]},v.hsv.rgb=function(f){const A=f[0]/60,M=f[1]/100;let P=f[2]/100;const z=Math.floor(A)%6,H=A-Math.floor(A),V=255*P*(1-M),q=255*P*(1-M*H),te=255*P*(1-M*(1-H));switch(P*=255,z){case 0:return[P,te,V];case 1:return[q,P,V];case 2:return[V,P,te];case 3:return[V,q,P];case 4:return[te,V,P];case 5:return[P,V,q]}},v.hsv.hsl=function(f){const A=f[0],M=f[1]/100,P=f[2]/100,z=Math.max(P,.01);let H,V;V=(2-M)*P;const q=(2-M)*z;return H=M*z,H/=q<=1?q:2-q,H=H||0,V/=2,[A,100*H,100*V]},v.hwb.rgb=function(f){const A=f[0]/360;let M=f[1]/100,P=f[2]/100;const z=M+P;let H;z>1&&(M/=z,P/=z);const V=Math.floor(6*A),q=1-P;H=6*A-V,1&V&&(H=1-H);const te=M+H*(q-M);let le,me,Ne;switch(V){default:case 6:case 0:le=q,me=te,Ne=M;break;case 1:le=te,me=q,Ne=M;break;case 2:le=M,me=q,Ne=te;break;case 3:le=M,me=te,Ne=q;break;case 4:le=te,me=M,Ne=q;break;case 5:le=q,me=M,Ne=te}return[255*le,255*me,255*Ne]},v.cmyk.rgb=function(f){const A=f[0]/100,M=f[1]/100,P=f[2]/100,z=f[3]/100;return[255*(1-Math.min(1,A*(1-z)+z)),255*(1-Math.min(1,M*(1-z)+z)),255*(1-Math.min(1,P*(1-z)+z))]},v.xyz.rgb=function(f){const A=f[0]/100,M=f[1]/100,P=f[2]/100;let z,H,V;return z=3.2406*A+-1.5372*M+-.4986*P,H=-.9689*A+1.8758*M+.0415*P,V=.0557*A+-.204*M+1.057*P,z=z>.0031308?1.055*z**.4166666666666667-.055:12.92*z,H=H>.0031308?1.055*H**.4166666666666667-.055:12.92*H,V=V>.0031308?1.055*V**.4166666666666667-.055:12.92*V,z=Math.min(Math.max(0,z),1),H=Math.min(Math.max(0,H),1),V=Math.min(Math.max(0,V),1),[255*z,255*H,255*V]},v.xyz.lab=function(f){let A=f[0],M=f[1],P=f[2];return A/=95.047,M/=100,P/=108.883,A=A>.008856?A**.3333333333333333:7.787*A+.13793103448275862,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,P=P>.008856?P**.3333333333333333:7.787*P+.13793103448275862,[116*M-16,500*(A-M),200*(M-P)]},v.lab.xyz=function(f){let A,M,P;M=(f[0]+16)/116,A=f[1]/500+M,P=M-f[2]/200;const z=M**3,H=A**3,V=P**3;return M=z>.008856?z:(M-.13793103448275862)/7.787,A=H>.008856?H:(A-.13793103448275862)/7.787,P=V>.008856?V:(P-.13793103448275862)/7.787,A*=95.047,M*=100,P*=108.883,[A,M,P]},v.lab.lch=function(f){const A=f[0],M=f[1],P=f[2];let z;return z=360*Math.atan2(P,M)/2/Math.PI,z<0&&(z+=360),[A,Math.sqrt(M*M+P*P),z]},v.lch.lab=function(f){const A=f[0],M=f[1],P=f[2]/360*2*Math.PI;return[A,M*Math.cos(P),M*Math.sin(P)]},v.rgb.ansi16=function(f,A=null){const[M,P,z]=f;let H=A===null?v.rgb.hsv(f)[2]:A;if(H=Math.round(H/50),H===0)return 30;let V=30+(Math.round(z/255)<<2|Math.round(P/255)<<1|Math.round(M/255));return H===2&&(V+=60),V},v.hsv.ansi16=function(f){return v.rgb.ansi16(v.hsv.rgb(f),f[2])},v.rgb.ansi256=function(f){const A=f[0],M=f[1],P=f[2];return A===M&&M===P?A<8?16:A>248?231:Math.round((A-8)/247*24)+232:16+36*Math.round(A/255*5)+6*Math.round(M/255*5)+Math.round(P/255*5)},v.ansi16.rgb=function(f){let A=f%10;if(A===0||A===7)return f>50&&(A+=3.5),A=A/10.5*255,[A,A,A];const M=.5*(1+~~(f>50));return[(1&A)*M*255,(A>>1&1)*M*255,(A>>2&1)*M*255]},v.ansi256.rgb=function(f){if(f>=232){const M=10*(f-232)+8;return[M,M,M]}let A;return f-=16,[Math.floor(f/36)/5*255,Math.floor((A=f%36)/6)/5*255,A%6/5*255]},v.rgb.hex=function(f){const A=(((255&Math.round(f[0]))<<16)+((255&Math.round(f[1]))<<8)+(255&Math.round(f[2]))).toString(16).toUpperCase();return"000000".substring(A.length)+A},v.hex.rgb=function(f){const A=f.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!A)return[0,0,0];let M=A[0];A[0].length===3&&(M=M.split("").map(z=>z+z).join(""));const P=parseInt(M,16);return[P>>16&255,P>>8&255,255&P]},v.rgb.hcg=function(f){const A=f[0]/255,M=f[1]/255,P=f[2]/255,z=Math.max(Math.max(A,M),P),H=Math.min(Math.min(A,M),P),V=z-H;let q,te;return q=V<1?H/(1-V):0,te=V<=0?0:z===A?(M-P)/V%6:z===M?2+(P-A)/V:4+(A-M)/V,te/=6,te%=1,[360*te,100*V,100*q]},v.hsl.hcg=function(f){const A=f[1]/100,M=f[2]/100,P=M<.5?2*A*M:2*A*(1-M);let z=0;return P<1&&(z=(M-.5*P)/(1-P)),[f[0],100*P,100*z]},v.hsv.hcg=function(f){const A=f[1]/100,M=f[2]/100,P=A*M;let z=0;return P<1&&(z=(M-P)/(1-P)),[f[0],100*P,100*z]},v.hcg.rgb=function(f){const A=f[0]/360,M=f[1]/100,P=f[2]/100;if(M===0)return[255*P,255*P,255*P];const z=[0,0,0],H=A%1*6,V=H%1,q=1-V;let te=0;switch(Math.floor(H)){case 0:z[0]=1,z[1]=V,z[2]=0;break;case 1:z[0]=q,z[1]=1,z[2]=0;break;case 2:z[0]=0,z[1]=1,z[2]=V;break;case 3:z[0]=0,z[1]=q,z[2]=1;break;case 4:z[0]=V,z[1]=0,z[2]=1;break;default:z[0]=1,z[1]=0,z[2]=q}return te=(1-M)*P,[255*(M*z[0]+te),255*(M*z[1]+te),255*(M*z[2]+te)]},v.hcg.hsv=function(f){const A=f[1]/100,M=A+f[2]/100*(1-A);let P=0;return M>0&&(P=A/M),[f[0],100*P,100*M]},v.hcg.hsl=function(f){const A=f[1]/100,M=f[2]/100*(1-A)+.5*A;let P=0;return M>0&&M<.5?P=A/(2*M):M>=.5&&M<1&&(P=A/(2*(1-M))),[f[0],100*P,100*M]},v.hcg.hwb=function(f){const A=f[1]/100,M=A+f[2]/100*(1-A);return[f[0],100*(M-A),100*(1-M)]},v.hwb.hcg=function(f){const A=f[1]/100,M=1-f[2]/100,P=M-A;let z=0;return P<1&&(z=(M-P)/(1-P)),[f[0],100*P,100*z]},v.apple.rgb=function(f){return[f[0]/65535*255,f[1]/65535*255,f[2]/65535*255]},v.rgb.apple=function(f){return[f[0]/255*65535,f[1]/255*65535,f[2]/255*65535]},v.gray.rgb=function(f){return[f[0]/100*255,f[0]/100*255,f[0]/100*255]},v.gray.hsl=function(f){return[0,0,f[0]]},v.gray.hsv=v.gray.hsl,v.gray.hwb=function(f){return[0,100,f[0]]},v.gray.cmyk=function(f){return[0,0,0,f[0]]},v.gray.lab=function(f){return[f[0],0,0]},v.gray.hex=function(f){const A=255&Math.round(f[0]/100*255),M=((A<<16)+(A<<8)+A).toString(16).toUpperCase();return"000000".substring(M.length)+M},v.rgb.gray=function(f){return[(f[0]+f[1]+f[2])/3/255*100]}},9047:(_,w,m)=>{const x=m(9246),I=m(802),v={};Object.keys(x).forEach(f=>{v[f]={},Object.defineProperty(v[f],"channels",{value:x[f].channels}),Object.defineProperty(v[f],"labels",{value:x[f].labels});const A=I(f);Object.keys(A).forEach(M=>{const P=A[M];v[f][M]=function(z){const H=function(...V){const q=V[0];if(q==null)return q;q.length>1&&(V=q);const te=z(V);if(typeof te=="object")for(let le=te.length,me=0;me<le;me++)te[me]=Math.round(te[me]);return te};return"conversion"in z&&(H.conversion=z.conversion),H}(P),v[f][M].raw=function(z){const H=function(...V){const q=V[0];return q==null?q:(q.length>1&&(V=q),z(V))};return"conversion"in z&&(H.conversion=z.conversion),H}(P)})}),_.exports=v},802:(_,w,m)=>{const x=m(9246);function I(A){const M=function(){const z={},H=Object.keys(x);for(let V=H.length,q=0;q<V;q++)z[H[q]]={distance:-1,parent:null};return z}(),P=[A];for(M[A].distance=0;P.length;){const z=P.pop(),H=Object.keys(x[z]);for(let V=H.length,q=0;q<V;q++){const te=H[q],le=M[te];le.distance===-1&&(le.distance=M[z].distance+1,le.parent=z,P.unshift(te))}}return M}function v(A,M){return function(P){return M(A(P))}}function f(A,M){const P=[M[A].parent,A];let z=x[M[A].parent][A],H=M[A].parent;for(;M[H].parent;)P.unshift(M[H].parent),z=v(x[M[H].parent][H],z),H=M[H].parent;return z.conversion=P,z}_.exports=function(A){const M=I(A),P={},z=Object.keys(M);for(let H=z.length,V=0;V<H;V++){const q=z[V];M[q].parent!==null&&(P[q]=f(q,M))}return P}},6931:_=>{_.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},4199:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const A=f},8708:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const A=f},1866:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Based on default CKBox theme colors */
	--ck-image-processing-highlight-color: hsl(220, 10%, 98%);
	--ck-image-processing-background-color: hsl(220, 10%, 90%);
}

.ck.ck-editor__editable {
	& .image {
		&.image-processing {
			position: relative;

			&:before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				height: 100%;
				width: 100%;

				background: linear-gradient(
					90deg,
					var(--ck-image-processing-background-color),
					var(--ck-image-processing-highlight-color),
					var(--ck-image-processing-background-color)
				);
				background-size: 200% 100%;

				animation: ck-image-processing-animation 2s linear infinite;
			}

			& img {
				height: 100%;
			}
		}
	}
}

@keyframes ck-image-processing-animation {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
`],sourceRoot:""}]);const A=f},7793:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CCjFA,mDDwEE,sFAAuF,CADvF,+JAAoK,CAFpK,SCnEF,CAFA,mDD+EE,sFAAuF,CADvF,+JAAmK,CAFnK,UC1EF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},4098:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}@media (forced-colors:active){.ck .ck-placeholder,.ck.ck-placeholder{forced-color-adjust:preserve-parent-color}}.ck .ck-placeholder:before,.ck.ck-placeholder:before{cursor:text}@media (forced-colors:none){.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text)}}@media (forced-colors:active){.ck .ck-placeholder:before,.ck.ck-placeholder:before{font-style:italic;margin-left:1px}}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC7BC,8BACC,uCCOA,yCDLA,CACD,CCOA,qDACC,WAmBD,CDvBA,4BACC,qDCMC,6CDJD,CACD,CAZA,8BACC,qDCsBC,iBAAkB,CAMlB,eD1BD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	@mixin ck-media-forced-colors {
		/*
		 * This is needed for Edge on Windows to use the right color for the placeholder content (::before).
		 * See https://github.com/ckeditor/ckeditor5/issues/14907.
		 */
		forced-color-adjust: preserve-parent-color;
	}

	&::before {
		cursor: text;

		@mixin ck-media-default-colors {
			color: var(--ck-color-engine-placeholder-text);
		}

		@mixin ck-media-forced-colors {
			/*
			 * In the high contrast mode there is no telling between regular and placeholder text. Using
			 * italic text to address that issue. See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			font-style: italic;

			/*
			 * Without this margin, the caret will not show up and blink when the user puts the selection
			 * in the placeholder (Edge on Windows). See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			margin-left: 1px;
		}
	}
}
`],sourceRoot:""}]);const A=f},8264:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const A=f},1058:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck-content .text-tiny{font-size:.7em}.ck-content .text-small{font-size:.85em}.ck-content .text-big{font-size:1.4em}.ck-content .text-huge{font-size:1.8em}","",{version:3,sources:["webpack://./../ckeditor5-font/theme/fontsize.css"],names:[],mappings:"AAUC,uBACC,cACD,CAEA,wBACC,eACD,CAEA,sBACC,eACD,CAEA,uBACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* The values should be synchronized with the "FONT_SIZE_PRESET_UNITS" object in the "/src/fontsize/utils.js" file. */

/* Styles should be prefixed with the \`.ck-content\` class.
See https://github.com/ckeditor/ckeditor5/issues/6636 */
.ck-content {
	& .text-tiny {
		font-size: .7em;
	}

	& .text-small {
		font-size: .85em;
	}

	& .text-big {
		font-size: 1.4em;
	}

	& .text-huge {
		font-size: 1.8em;
	}
}
`],sourceRoot:""}]);const A=f},6269:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-heading_heading1 .ck-button__label{font-size:20px}.ck.ck-heading_heading2 .ck-button__label{font-size:17px}.ck.ck-heading_heading3 .ck-button__label{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,0CACC,cACD,CAEA,0CACC,cACD,CAEA,0CACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 .ck-button__label {
	font-size: 20px;
}

.ck.ck-heading_heading2 .ck-button__label {
	font-size: 17px;
}

.ck.ck-heading_heading3 .ck-button__label {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const A=f},265:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const A=f},5247:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highlighted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}@media (forced-colors:active){.ck-content .image>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:none}}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAYD,CAJC,8BAXD,8BAYE,sBAAuB,CACvB,WAEF,CADC,CCdA,4BACC,qEDmBA,iDCjBA,CACD,CDmBA,uCALD,qEAME,cAEF,CADC,CAGD,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@media (forced-colors: active) {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	@mixin ck-media-default-colors {
		animation: ck-image-caption-highlight .6s ease-out;
	}

	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const A=f},4642:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-image-custom-resize-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{display:inline-block}.ck.ck-image-custom-resize-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-image-custom-resize-form{flex-wrap:wrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-image-custom-resize-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecustomresizeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,gCAIC,sBAAuB,CAHvB,YAAa,CACb,kBAAmB,CACnB,gBAsBD,CAnBC,uDACC,oBACD,CAEA,0CACC,YACD,CCbA,oCDCD,gCAeE,cAUF,CARE,uDACC,eACD,CAEA,2CACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-image-custom-resize-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: flex-start;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},3350:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-image-insert-url{padding:var(--ck-spacing-large) var(--ck-spacing-large) 0;width:400px}.ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width);padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAKA,wBAEC,yDAA0D,CAD1D,WAOD,CAJC,yDACC,YAAa,CACb,mCACD,CCLD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CACd,UASD,CCpCA,iDD8BE,eC5BF,CAFA,iDDkCE,gBChCF,CDoCA,4CASC,oDACD,CATC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,iDACC,oDAAqD,CACrD,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	width: 400px;
	padding: var(--ck-spacing-large) var(--ck-spacing-large) 0;

	& .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},7378:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const A=f},3469:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const A=f},6386:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image.image-style-block-align-left,.ck-content .image.image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image.image-style-align-left,.ck-content .image.image-style-align-right{clear:none}.ck-content .image.image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image.image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image.image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image.image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image.image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content p+.image.image-style-align-left,.ck-content p+.image.image-style-align-right,.ck-content p+.image.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAQE,iGAEC,oDACD,CAIA,qFAEC,UACD,CAEA,oCACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,0CACC,UAAW,CACX,0CACD,CAEA,2CACC,WAAY,CACZ,yCACD,CAEA,iDAEC,gBAAiB,CADjB,cAED,CAEA,gDACC,aAAc,CACd,iBACD,CAGD,sCACC,gBAAiB,CACjB,iBACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAGA,+HAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* See: https://github.com/ckeditor/ckeditor5/issues/16317 */
	& .image {
		/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
		confirming successful application of the style if image width exceeds the editor's size.
		See https://github.com/ckeditor/ckeditor5/issues/9342 */
		&.image-style-block-align-left,
		&.image-style-block-align-right {
			max-width: calc(100% - var(--ck-image-style-spacing));
		}

		/* Allows displaying multiple floating images in the same line.
		See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
		&.image-style-align-left,
		&.image-style-align-right {
			clear: none;
		}

		&.image-style-side {
			float: right;
			margin-left: var(--ck-image-style-spacing);
			max-width: 50%;
		}

		&.image-style-align-left {
			float: left;
			margin-right: var(--ck-image-style-spacing);
		}

		&.image-style-align-right {
			float: right;
			margin-left: var(--ck-image-style-spacing);
		}

		&.image-style-block-align-right {
			margin-right: 0;
			margin-left: auto;
		}

		&.image-style-block-align-left {
			margin-left: 0;
			margin-right: auto;
		}
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image.image-style-align-left,
	& p + .image.image-style-align-right,
	& p + .image.image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},7693:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0s,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@media (prefers-reduced-motion:reduce){.ck-image-upload-complete-icon{animation-duration:0s}.ck-image-upload-complete-icon:after{animation:none;height:.45em;opacity:1;width:.3em}}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,qBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFAqCD,CAjCC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAEA,uCA7CD,+BA8CE,qBASF,CAPE,qCACC,cAAe,CAGf,YAAc,CAFd,SAAU,CACV,UAED,CACD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 0ms;

		&::after {
			animation: none;
			opacity: 1;
			width: 0.3em;
			height: 0.45em;
		}
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const A=f},1559:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const A=f},2267:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:none;opacity:1}}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBAMD,CAJC,uCAHD,yFAKE,cAAe,CADf,SAGF,CADC,CAKF,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;

			@media (prefers-reduced-motion: reduce) {
				opacity: 1;
				animation: none;
			}
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const A=f},4062:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},7719:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const A=f},8762:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CChEF,gJDyEG,aCvEH,CFAA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},3817:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-link-form{align-items:flex-start;display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:0 var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAOA,iBAEC,sBAAuB,CADvB,YAkBD,CAfC,2BACC,YACD,CCPA,oCDCD,iBASE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CChBD,CDwBD,iCACC,aAYD,CALE,wHAEC,mCACD,CEhCF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CC1BD,4GDiCE,aC/BF,CDiCE,mEACC,kDACD,CAKF,6CACC,gCAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;
	align-items: flex-start;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: 0 var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},4808:(_,w,m)=>{m.d(w,{A:()=>V});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v),A=m(62),M=m.n(A),P=new URL(m(4782),m.b),z=f()(I()),H=M()(P);z.push([_.id,`.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url(${H});background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}`,"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,wDAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const V=z},1232:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const A=f},6903:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},9968:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const A=f},7141:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const A=f},8991:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-content .todo-list .todo-list__label>input:before{transition:none}}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{transition:none}}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CA4EA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAtFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqFC,CAvED,wDACC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAED,CAEA,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sDAYE,eAEF,CADC,CAGD,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FAxHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAuHA,CAzGA,wGACC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAED,CAEA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sGAYE,eAEF,CADC,CAGD,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	[dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const A=f},70:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const A=f},7048:(_,w,m)=>{m.d(w,{A:()=>Qe});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v),A=m(62),M=m.n(A),P=new URL(m(657),m.b),z=new URL(m(9736),m.b),H=new URL(m(6341),m.b),V=new URL(m(7784),m.b),q=f()(I()),te=M()(P),le=M()(z),me=M()(H),Ne=M()(V);q.push([_.id,`.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(${te})}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(${le})}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(${me})}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(${Ne})}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}`,"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wDACD,CAEA,2EACC,kBAaD,CAXC,wGACC,wDACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,wDACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wDACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const Qe=q},5651:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap;width:400px}.ck.ck-media-form .ck-labeled-field-view{display:inline-block;width:100%}.ck.ck-media-form .ck-label{display:none}.ck.ck-media-form .ck-input{width:100%}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAAiB,CACjB,WA0BD,CAxBC,yCACC,oBAAqB,CACrB,UACD,CAEA,4BACC,YACD,CAEA,4BACC,UACD,CCnBA,oCDCD,kBAqBE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CC5BD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;
	width: 400px;

	& .ck-labeled-field-view {
		display: inline-block;
		width: 100%;
	}

	& .ck-label {
		display: none;
	}

	& .ck-input {
		width: 100%;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},5506:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);border-radius:0;height:20px;width:20px}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC7BF,+CCME,4BAA6B,CAD7B,yBDHF,CAFA,+CCWE,2BAA4B,CAD5B,wBDRF,CCcC,2CACC,SACD,CAIA,wEACC,SA0CD,CDjED,kFC2BG,2BAA4B,CAD5B,wBDxBH,CC2BG,8FACC,iCACD,CD/BH,kFCoCG,4BAA6B,CAD7B,yBDjCH,CCoCG,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GAKC,6CAA8C,CC/CjD,eAAgB,CD8Cb,WAAY,CADZ,UAcD,CCzDF,+PAEC,qCAED,CD2CG,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CD7ED,8DCgFE,yBD9EF,CAFA,8DCoFE,wBDlFF,CCqFC,gEACC,uCAMD,CD9FD,0EC4FG,sCAAuC,CADvC,cDzFH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},4043:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},2655:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CC7BC,6CDQG,mCCNH,CAFA,6CDYG,oCCVH,CDeA,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},5032:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}@media (prefers-reduced-motion:reduce){.ck .ck-insert-table-dropdown-grid-box{transition:none}}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAcD,CAZC,uCATD,uCAUE,eAWF,CAVC,CAEA,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const A=f},2329:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}@media print{.ck-content .table table{height:auto}}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAeF,aACC,yBACC,WACD,CACD,CAIA,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/**
 * Expanding the table to the full height of the parent container is necessary because tables
 * are rendered inside <figure> elements, which is kinda buggy in table height calculation.
 * While setting \`height: 100%\` fixes the issue in the editing mode described here:
 * https://github.com/ckeditor/ckeditor5/issues/6186
 *
 * it's causing another issue with the table height in the print preview mode here:
 * https://github.com/ckeditor/ckeditor5/issues/16856
 *
 * For now, resetting the height to \`initial\` in the print mode works as a workaround.
 */
@media print {
	.ck-content .table table {
		height: initial;
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const A=f},4143:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}@media (forced-colors:active){.ck-content .table>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAaD,CCxBC,8BACC,8BDoBA,sBAAuB,CACvB,WCnBA,CACD,CAIA,4BDqBC,qEACC,iDACD,CCnBD,CDsBA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@mixin ck-media-forced-colors {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	@mixin ck-media-default-colors {
		&.table__caption_highlighted {
			animation: ck-table-caption-highlight .6s ease-out;
		}
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const A=f},8986:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},8795:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const A=f},8137:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAWE,8QAGC,2DAA4D,CAC5D,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		/**
		 * While setting outline is fine, the border should not be modified here
		 * because it overrides the default table cell border color which is not expected.
		 * So do not use \`@mixin ck-focus-ring;\` here, or any other border styles.
		 * See more: https://github.com/ckeditor/ckeditor5/issues/16979
		 */
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const A=f},1623:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both;background:var(--ck-color-base-error);border-radius:0;color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}@media (prefers-reduced-motion:reduce){.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:none}}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCA6BD,CA3BC,8EAgBC,iEAAkE,CAblE,qCAAsC,CC3CxC,eAAgB,CD4Cd,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAcD,CC3DD,mMAEC,qCAED,CD4CE,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAIA,uCAlBD,8EAmBE,cAEF,CADC,CAID,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;

			@media (prefers-reduced-motion: reduce) {
				animation: none;
			}
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},5562:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},8423:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},1801:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}.ck.ck-aria-live-region-list{list-style-type:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD,CAEA,6BACC,oBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}

.ck.ck-aria-live-region-list {
	list-style-type: none;
}
`],sourceRoot:""}]);const A=f},5727:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);border-radius:0;max-height:200px;min-width:auto;overflow-y:auto}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{box-shadow:var(--ck-drop-shadow),0 0}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCAMC,0CAA2C,CAC3C,sDAAuD,CCLxD,eAAgB,CDEf,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CCrBA,uHAEC,qCAED,CDRA,wCEAA,oCFyBA,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=f},9715:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;background:var(--ck-color-button-default-background);border:1px solid transparent;border-radius:0;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}@media (prefers-reduced-motion:reduce){.ck.ck-button,a.ck.ck-button{transition:none}}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit;opacity:.5}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-medium)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background);color:var(--ck-color-button-on-color)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background);color:var(--ck-color-button-action-text)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CEhCC,iDFWC,oBETD,CAFA,iDFeC,qBEbD,CFgBA,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CGzBD,6BA6BC,uBAAwB,CC7BxB,oDAAqC,CDuBrC,4BAA6B,CExB7B,eAAgB,CFOhB,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAwID,CC1IE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CCdA,wIAEC,qCAED,CF0BA,uCA/BD,6BAgCE,eA6GF,CA5GC,CAEA,oFGpCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHyCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CDzEA,qFCmEE,eDjEF,CAFA,qFCuEE,gBDrEF,CCyEA,yEACC,aAAc,CAUd,UACD,CDvFA,6FC+EE,mCD7EF,CAFA,6FCmFE,oCDjFF,CCyFC,oIIxFD,oDJ4FC,CAOA,gLKnGD,kCLqGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAYD,CD5HA,2HCqHG,qCDnHH,CAFA,2HCyHG,oCDvHH,CC8HC,mHACC,WACD,CAID,yCChIA,+CAAqC,CDmIpC,qCACD,CCjIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDuHA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CChJC,mDAAqC,CDoJrC,wCACD,CClJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDwID,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		opacity: .5;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-right: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				margin-left: var(--ck-spacing-medium);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const A=f},278:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-list-item-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list-item-button{text-align:left}[dir=rtl] .ck.ck-list-item-button{text-align:right}[dir=ltr] .ck.ck-list-item-button.ck-list-item-button_toggleable{padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-list-item-button.ck-list-item-button_toggleable{padding-right:var(--ck-spacing-small)}.ck.ck-list-item-button .ck-list-item-button__check-holder{display:inline-flex;height:.9em;width:.9em}[dir=ltr] .ck.ck-list-item-button .ck-list-item-button__check-holder{margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-list-item-button .ck-list-item-button__check-holder{margin-left:var(--ck-spacing-small)}.ck.ck-list-item-button .ck-list-item-button__check-icon{height:100%}.ck.ck-button.ck-list-item-button{padding:var(--ck-spacing-tiny) calc(var(--ck-spacing-standard)*2)}.ck.ck-button.ck-list-item-button,.ck.ck-button.ck-list-item-button.ck-on{background:var(--ck-color-list-background);color:var(--ck-color-text)}[dir=ltr] .ck.ck-button.ck-list-item-button:has(.ck-list-item-button__check-holder){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-list-item-button:has(.ck-list-item-button__check-holder){padding-right:var(--ck-spacing-small)}.ck.ck-button.ck-list-item-button.ck-button.ck-on:hover,.ck.ck-button.ck-list-item-button.ck-on:hover,.ck.ck-button.ck-list-item-button.ck-on:not(.ck-list-item-button_toggleable),.ck.ck-button.ck-list-item-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-button.ck-list-item-button.ck-button.ck-on:hover:not(.ck-disabled),.ck.ck-button.ck-list-item-button.ck-on:hover:not(.ck-disabled),.ck.ck-button.ck-list-item-button.ck-on:not(.ck-list-item-button_toggleable):not(.ck-disabled),.ck.ck-button.ck-list-item-button:hover:not(.ck-disabled):not(.ck-disabled){color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/listitembutton.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/listitembutton.css"],names:[],mappings:"AAOA,wBAGC,eAAgB,CAFhB,gBAAiB,CACjB,UAsCD,CCzCC,kCDOC,eCLD,CAFA,kCDWC,gBCTD,CAFA,iEDgBE,oCCdF,CAFA,iEDoBE,qCClBF,CDsBA,2DACC,mBAAoB,CAEpB,WAAY,CADZ,UAUD,CCpCA,qED8BE,oCC5BF,CAFA,qEDkCE,mCChCF,CDoCA,yDACC,WACD,CEvCD,kCACC,iEAiCD,CA/BC,0EAEC,0CAA2C,CAC3C,0BACD,CDRA,oFCYE,oCDVF,CAFA,oFCgBE,qCDdF,CCuBA,6OAIC,uDAKD,CAHC,qTACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_dir.css";

.ck.ck-list-item-button {
	min-height: unset;
	width: 100%;
	border-radius: 0;

	@mixin ck-dir ltr {
		text-align: left;
	}

	@mixin ck-dir rtl {
		text-align: right;
	}

	&.ck-list-item-button_toggleable {
		@mixin ck-dir ltr {
			padding-left: var(--ck-spacing-small);
		}

		@mixin ck-dir rtl {
			padding-right: var(--ck-spacing-small);
		}
	}

	& .ck-list-item-button__check-holder {
		display: inline-flex;
		width: .9em;
		height: .9em;

		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-small);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-small);
		}
	}

	& .ck-list-item-button__check-icon {
		height: 100%;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button.ck-list-item-button {
	padding: var(--ck-spacing-tiny) calc(2 * var(--ck-spacing-standard));

	&,
	&.ck-on {
		background: var(--ck-color-list-background);
		color: var(--ck-color-text);
	}

	&:has(.ck-list-item-button__check-holder) {
		@mixin ck-dir ltr {
			padding-left: var(--ck-spacing-small);
		}

		@mixin ck-dir rtl {
			padding-right: var(--ck-spacing-small);
		}
	}

	/*
	 * \`.ck-on\` class and background styling is overridden for \`ck-button\` in many places.
	 * This is a workaround to make sure that the background is not overridden and uses similar
	 * selector specificity as the other overrides.
	 */
	&:hover:not(.ck-disabled),
	&.ck-button.ck-on:hover,
	&.ck-on:not(.ck-list-item-button_toggleable),
	&.ck-on:hover {
		background: var(--ck-color-list-button-hover-background);

		&:not(.ck-disabled) {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const A=f},4391:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;border-radius:0;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);border-radius:0;height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}@media (prefers-reduced-motion:reduce){.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{transition:none}}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CC3BA,0DDgCE,4CC9BF,CAFA,0DDqCE,2CCnCF,CDuCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CEpD9B,eAAgB,CFmDf,iFAAsF,CAEtF,0CA2BD,CE9EA,yIAEC,qCAED,CDXA,2DD8CE,gBC5CF,CAFA,2DDmDE,iBCjDF,CD2DC,2EAOC,yDAA0D,CE/D5D,eAAgB,CF8Dd,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAUD,CErED,6LAEC,qCAAsC,CFsDpC,8CEpDH,CF8DE,uCAZD,2EAaE,eAEF,CADC,CAGD,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DGpFA,kCHsFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CC/GF,2FDsHI,2DCpHJ,CAFA,2FD0HI,oECxHJ",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const A=f},25:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAGC,eAAgB,CAChB,aAAc,CAFd,eAAiB,CADjB,UAmBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const A=f},7317:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{transition:box-shadow .2s ease}@media (forced-colors:none){.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}}@media (forced-colors:active){.ck.ck-color-grid__tile{height:unset;min-height:unset;min-width:unset;padding:0 var(--ck-spacing-small);width:unset}.ck.ck-color-grid__tile .ck-button__label{display:inline-block}}@media (prefers-reduced-motion:reduce){.ck.ck-color-grid__tile{transition:none}}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,kBACC,YACD,CCCA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBACC,8BAkED,CC3EC,4BACC,wBDgBA,QAAS,CAJT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CAJV,oCCTA,CDgBA,8HAIC,QACD,CAEA,+DACC,gDACD,CAEA,8BACC,8FACD,CAEA,gGAEC,iGACD,CCjCD,CAZA,8BACC,wBDqDA,YAAa,CAEb,gBAAiB,CADjB,eAAgB,CAEhB,iCAAkC,CAJlC,WClDA,CDwDA,0CACC,oBACD,CCzDD,CD4DA,uCAhDD,wBAiDE,eAkBF,CAjBC,CAEA,oCACC,YAAa,CACb,gBACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAGC,0CACC,aACD,CAIF,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	transition: .2s ease box-shadow;

	@mixin ck-media-default-colors {
		width: var(--ck-color-grid-tile-size);
		height: var(--ck-color-grid-tile-size);
		min-width: var(--ck-color-grid-tile-size);
		min-height: var(--ck-color-grid-tile-size);
		padding: 0;
		border: 0;

		&.ck-on,
		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			/* Disable the default .ck-button's border ring. */
			border: 0;
		}

		&.ck-color-selector__color-tile_bordered {
			box-shadow: 0 0 0 1px var(--ck-color-base-border);
		}

		&.ck-on {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);
		}

		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
		}
	}

	/*
	 * In high contrast mode, the colors are replaced with text labels.
	 * See https://github.com/ckeditor/ckeditor5/issues/14907.
	 */
	@mixin ck-media-forced-colors {
		width: unset;
		height: unset;
		min-width: unset;
		min-height: unset;
		padding: 0 var(--ck-spacing-small);

		& .ck-button__label {
			display: inline-block;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		& .ck.ck-icon {
			display: block;
		}
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const A=f},1905:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const A=f},6309:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CCZD,wMDUG,0BCRH,CDeC,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CErBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CDhBF,gHCoBI,uCDlBJ,CAFA,gHCwBI,sCDtBJ,CC2BC,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const A=f},9819:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog:not(.ck-dialog_modal) .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0;--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width);overscroll-behavior:contain}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{box-shadow:var(--ck-drop-shadow),0 0}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}.ck-dialog-scroll-locked{overflow:hidden}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAiBD,CAdC,kCACC,aACD,CAIC,gFACC,WACD,CAGD,mEACC,kBACD,CC/BD,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eAAgB,CDiBhB,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CAF7C,sCAAuC,CACvC,oCAAqC,CAErC,2BAKD,CC1BC,mEAEC,qCAED,CDOD,cEfC,oCF8BD,CAHC,kCACC,iEACD,CAGD,yBACC,eACD,CAEA,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}
}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;

	& .ck.ck-form__header  {
		flex-shrink: 0;
	}

	/* Modals should not be draggable. */
	&:not(.ck-dialog_modal) {
		& .ck.ck-form__header .ck-form__header__label {
			cursor: grab;
		}
	}

	.ck.ck-dialog-overlay.ck-dialog-overlay__transparent & {
		pointer-events: all;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
	--ck-color-dialog-background: var(--ck-color-base-background);
	--ck-color-dialog-form-header-border: var(--ck-color-base-border);
}

.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}

.ck.ck-dialog {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-dialog-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);
	overscroll-behavior: contain;

	& .ck.ck-form__header {
		border-bottom: 1px solid var(--ck-color-dialog-form-header-border);
	}
}

.ck-dialog-scroll-locked {
	overflow: hidden;
}

@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=f},9822:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);

		& > * + * {
			margin-left: var(--ck-spacing-large);
		}
	}
}
`],sourceRoot:""}]);const A=f},8149:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);border-radius:0;bottom:0;min-width:100%}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{box-shadow:var(--ck-drop-shadow),0 0}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBAIC,oDAAqD,CACrD,sDAAuD,CGvFvD,eAAgB,CHwFhB,QAAS,CAGT,cAuBD,CGhHC,qFAEC,qCAED,CH4ED,uBEpFC,oCFoHD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},3629:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CCnBC,iIAEC,qCAAsC,CDJtC,wBCMD,CDAC,mFCND,eDYC,CCVD,6MAEC,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBCFH,CDQC,kFCdD,eDmBC,CCjBD,2MAEC,qCAAsC,CDYpC,wBAAyB,CACzB,yBCXH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown > .ck-dropdown__panel > .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},7218:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-dropdown-menu-list__nested-menu{display:block}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/menu/dropdownmenu.css"],names:[],mappings:"AAKA,uCACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dropdown-menu-list__nested-menu {
	display: block;
}
`],sourceRoot:""}]);const A=f},9554:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button{border-radius:0;padding:var(--ck-spacing-tiny) calc(var(--ck-spacing-standard)*2);width:100%}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button.ck-icon-spacing:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{margin-right:calc(var(--ck-spacing-small)*-1);transform:rotate(-90deg)}[dir=rtl] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{margin-left:calc(var(--ck-spacing-small)*-1);transform:rotate(90deg)}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button.ck-disabled>.ck-dropdown-menu-list__nested-menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=ltr] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/menu/dropdownmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/menu/dropdownmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAKA,kGACC,mBAAoB,CACpB,2BACD,CCIA,yDAGC,eAAgB,CADhB,iEAAoE,CADpE,UA2ED,CAvEC,+DACC,wBAAyB,CACzB,eAKD,CAHC,2EACC,0DACD,CAGD,2EACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,uFCvBA,kCDyBA,CAGA,uHACC,+DACD,CAEA,4GACC,mCAeD,CEnDA,sHF0CE,6CAAgD,CAHhD,wBErCF,CAFA,sHFiDE,4CAA+C,CAH/C,uBE5CF,CFmDA,wHClDA,kCDoDA,CAGC,6FACC,oCACD,CAEA,sHAIC,sCAAuC,CAHvC,gCAID,CAIA,6FACC,qCACD,CAEA,sHACC,+BAAgC,CAGhC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dropdown-menu-list__nested-menu__button > .ck-dropdown-menu-list__nested-menu__button__arrow {
	pointer-events: none;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../../mixins/_disabled.css";
@import "../../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * All menu buttons.
 */
.ck.ck-button.ck-dropdown-menu-list__nested-menu__button {
	width: 100%;
	padding: var(--ck-spacing-tiny) calc(2 * var(--ck-spacing-standard));
	border-radius: 0;

	&:focus {
		border-color: transparent;
		box-shadow: none;

		&:not(.ck-on) {
			background: var(--ck-color-button-default-hover-background);
		}
	}

	& > .ck-button__label {
		flex-grow: 1;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	&.ck-disabled > .ck-button__label {
		@mixin ck-disabled;
	}

	/* Spacing in buttons that miss the icon. */
	&.ck-icon-spacing:not(:has(.ck-button__icon)) > .ck-button__label {
		margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
	}

	& > .ck-dropdown-menu-list__nested-menu__button__arrow {
		width: var(--ck-dropdown-arrow-size);

		@mixin ck-dir ltr {
			transform: rotate(-90deg);

			/* Nudge the arrow gently to the right because its center of gravity is to the left */
			margin-right: calc(-1 * var(--ck-spacing-small));
		}

		@mixin ck-dir rtl {
			transform: rotate(90deg);

			/* Nudge the arrow gently to the left because its center of gravity is to the right (after rotation). */
			margin-left: calc(-1 * var(--ck-spacing-small));
		}
	}

	&.ck-disabled > .ck-dropdown-menu-list__nested-menu__button__arrow {
		@mixin ck-disabled;
	}

	@mixin ck-dir ltr {
		&:not(.ck-button_with-text) {
			padding-left: var(--ck-spacing-small);
		}

		& > .ck-dropdown-menu-list__nested-menu__button__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		&:not(.ck-button_with-text) {
			padding-right: var(--ck-spacing-small);
		}

		& > .ck-dropdown-menu-list__nested-menu__button__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},2171:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,":root{--ck-dropdown-menu-menu-item-min-width:18em}.ck.ck-dropdown-menu-list__nested-menu__item{min-width:var(--ck-dropdown-menu-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/menu/dropdownmenulistitem.css"],names:[],mappings:"AAKA,MACC,2CACD,CAEA,6CACC,qDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-menu-menu-item-min-width: 18em;
}

.ck.ck-dropdown-menu-list__nested-menu__item {
	min-width: var(--ck-dropdown-menu-menu-item-min-width);
}
`],sourceRoot:""}]);const A=f},4767:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck-button.ck-dropdown-menu-list__nested-menu__item__button{border-radius:0}.ck-button.ck-dropdown-menu-list__nested-menu__item__button>.ck-spinner-container,.ck-button.ck-dropdown-menu-list__nested-menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck-button.ck-dropdown-menu-list__nested-menu__item__button>.ck-spinner-container{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}.ck-button.ck-dropdown-menu-list__nested-menu__item__button:focus{border-color:transparent;box-shadow:none}.ck-button.ck-dropdown-menu-list__nested-menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/menu/dropdownmenulistitembutton.css"],names:[],mappings:"AAQA,4DACC,eA0BD,CAxBC,gLAGC,8BACD,CAEA,kFAEC,4CAA+C,CAC/C,oCACD,CAMA,kEACC,wBAAyB,CACzB,eAKD,CAHC,8EACC,0DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * List item buttons.
 */
.ck-button.ck-dropdown-menu-list__nested-menu__item__button {
	border-radius: 0;

	& > .ck-spinner-container,
	& > .ck-spinner-container .ck-spinner {
		/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
		--ck-toolbar-spinner-size: 20px;
	}

	& > .ck-spinner-container {
		/* These margins are the same as for .ck-icon. */
		margin-left: calc(-1 * var(--ck-spacing-small));
		margin-right: var(--ck-spacing-small);
	}

	/*
	 * Hovered items automatically get focused. Default focus styles look odd
	 * while moving across a huge list of items so let's get rid of them
	 */
	&:focus {
		border-color: transparent;
		box-shadow: none;

		&:not(.ck-on) {
			background: var(--ck-color-button-default-hover-background);
		}
	}
}
`],sourceRoot:""}]);const A=f},3610:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel{max-height:314px;overflow-y:auto;position:absolute;z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-menu-menu-panel-max-width:75vw}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;height:fit-content;max-width:var(--ck-dropdown-menu-menu-panel-max-width)}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel:after,.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel:before{display:none}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_es,.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_se{border-top-left-radius:0}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_sw,.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_ws{border-top-right-radius:0}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_en,.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_ne{border-bottom-left-radius:0}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_nw,.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_wn{border-bottom-right-radius:0}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/menu/dropdownmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/menu/dropdownmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,0DAEC,gBAAiB,CACjB,eAAgB,CAFhB,iBAAkB,CAGlB,mCACD,CCFA,MACC,4CACD,CAEA,0DAGC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CCRT,oCAA8B,CDS9B,kBAAmB,CACnB,sDAgCD,CA7BC,iIAEC,YACD,CAGA,4JAEC,wBACD,CAEA,4JAEC,yBACD,CAEA,4JAEC,2BACD,CAEA,4JAEC,4BACD,CAEA,gEACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel {
	position: absolute;
	max-height: 314px; /* With the default settings, this is equal to 10 menu items. */
	overflow-y: auto;
	z-index: calc(var(--ck-z-panel) + 1);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../../mixins/_rounded.css";
@import "../../../../mixins/_shadow.css";

:root {
	--ck-dropdown-menu-menu-panel-max-width: 75vw;
}

.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel {
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-dropdown-menu-menu-panel-max-width);

	/* Reset balloon styling */
	&::after,
	&::before {
		display: none;
	}

	/* Corner border radius consistent with the button. */
	&.ck-balloon-panel_es,
	&.ck-balloon-panel_se {
		border-top-left-radius: 0;
	}

	&.ck-balloon-panel_ws,
	&.ck-balloon-panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-balloon-panel_en,
	&.ck-balloon-panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-balloon-panel_wn,
	&.ck-balloon-panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=f},1792:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAQE,oIAGC,gCAAiC,CADjC,6BAED,CAEA,oIAGC,+BAAgC,CADhC,4BAED,CAGD,0CAGC,eAiBD,CAfC,oDAGC,+BAAgC,CADhC,4BAED,CAEA,oDAGC,gCAAiC,CADjC,6BAED,CAEA,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAIA,uCCnDA,eD6DA,CC3DA,qHAEC,qCAED,CD+CE,qKACC,2BACD,CAEA,mKACC,4BACD,CAUD,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		[dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		[dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		[dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		[dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		[dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		[dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},1666:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const A=f},8527:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content *{white-space:normal}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAEA,0EACC,kBACD,CAGA,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-accessibility-help-dialog-max-width: 600px;
	--ck-accessibility-help-dialog-max-height: 400px;
	--ck-accessibility-help-dialog-border-color: hsl(220, 6%, 81%);
	--ck-accessibility-help-dialog-code-background-color: hsl(0deg 0% 92.94%);
	--ck-accessibility-help-dialog-kbd-shadow-color: hsl(0deg 0% 61%);
}

.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content {
	padding: var(--ck-spacing-large);
	max-width: var(--ck-accessibility-help-dialog-max-width);
	max-height: var(--ck-accessibility-help-dialog-max-height);
	overflow: auto;
	user-select: text;

	border: 1px solid transparent;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	* {
		white-space: normal;
	}

	/* Hide the main label of the content container. */
	& .ck-label {
		display: none;
	}

	& h3 {
		font-weight: bold;
		font-size: 1.2em;
	}

	& h4 {
		font-weight: bold;
		font-size: 1em;
	}

	& p,
	& h3,
	& h4,
	& table {
		margin: 1em 0;
	}

	& dl {
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-top: 1px solid var(--ck-accessibility-help-dialog-border-color);
		border-bottom: none;

		& dt, & dd {
			border-bottom: 1px solid var(--ck-accessibility-help-dialog-border-color);
			padding: .4em 0;
		}

		& dt {
			grid-column-start: 1;
		}

		& dd {
			grid-column-start: 2;
			text-align: right;
		}
	}

	& kbd, & code {
		display: inline-block;
		background: var(--ck-accessibility-help-dialog-code-background-color);
		padding: .4em;
		vertical-align: middle;
		line-height: 1;
		border-radius: 2px;
		text-align: center;
		font-size: .9em;
	}

	& code {
		font-family: monospace;
	}

	& kbd {
		min-width: 1.8em;
		box-shadow: 0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);
		margin: 0 1px;

		& + kbd {
			margin-left: 2px;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=f},1185:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CCTC,yJAEC,qCAED,CDCA,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=f},7913:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CCzBC,uCDaE,qCCXF,CAFA,uCDiBE,oCCfF,CDmBA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 44px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& > .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},9529:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const A=f},7621:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal));--ck-icon-font-size:.8333350694em}.ck.ck-icon{font-size:var(--ck-icon-font-size);height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EAA6E,CAC7E,iCACD,CAEA,YAKC,kCAAmC,CAHnC,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
	--ck-icon-font-size: .8333350694em;
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: var(--ck-icon-font-size);

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const A=f},253:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);border-radius:0;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}@media (prefers-reduced-motion:reduce){.ck.ck-input{transition:none}}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}@media (prefers-reduced-motion:reduce){.ck.ck-input.ck-error{animation:none}}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aAGC,2CAA4C,CAC5C,6CAA8C,CCT9C,eAAgB,CDchB,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DAkCD,CCjDC,iEAEC,qCAED,CDaA,uCAdD,aAeE,eA+BF,CA9BC,CAEA,mBEvBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YF2BA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BGnCD,oDHsCC,CAGD,sBAEC,sCAAuC,CADvC,+CAUD,CAPC,uCAJD,sBAKE,cAMF,CALC,CAEA,4BGjDD,iDHmDC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		@media (prefers-reduced-motion: reduce) {
			animation: none;
		}

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=f},7801:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const A=f},4962:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;top:0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}@media (prefers-reduced-motion:reduce){.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transition:none}}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eDmHD,CCjHC,2FAEC,qCAED,CDEA,mEACC,UAwCD,CAtCC,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAvBvB,KAAQ,CA4BR,+JAQD,CErDD,0FFoBG,MAAS,CAGT,6DAA+D,CAF/D,oBEnBH,CAFA,0FF2BG,OAAU,CAEV,sEAA0E,CAD1E,uBE1BH,CFgDE,uCAlCD,gFAmCE,eAEF,CADC,CASD,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CEtGA,2XF0FE,+HExFF,CAFA,2XF8FE,wIE5FF,CFyGA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},5199:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{background:var(--ck-color-list-background);border-radius:0;list-style-type:none;padding:var(--ck-spacing-small) 0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list__item{cursor:default;min-width:15em}.ck.ck-list__item>.ck-button:not(.ck-list-item-button){border-radius:0;min-height:unset;padding:var(--ck-spacing-tiny) calc(var(--ck-spacing-standard)*2);width:100%}[dir=ltr] .ck.ck-list__item>.ck-button:not(.ck-list-item-button){text-align:left}[dir=rtl] .ck.ck-list__item>.ck-button:not(.ck-list-item-button){text-align:right}.ck.ck-list__item>.ck-button:not(.ck-list-item-button) .ck-button__label{line-height:calc(var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item>.ck-button:not(.ck-list-item-button):active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:not(.ck-list-item-button){background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:not(.ck-list-item-button):active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:not(.ck-list-item-button):hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:not(.ck-list-item-button):focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:not(.ck-list-item-button):hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-button.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-button.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium)}.ck-list .ck-list__group:first-child{padding-top:0}:not(.ck-hidden)~.ck-list .ck-list__group{border-top:1px solid var(--ck-color-base-border)}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large) 0}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;margin:var(--ck-spacing-small) 0;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,YAIC,0CAA2C,CCH3C,eAAgB,CDEhB,oBAAqB,CAIrB,iCACD,CCLC,+DAEC,qCAED,CDGD,kBACC,cAAe,CAGf,cA4DD,CA1DC,uDAIC,eAAgB,CAFhB,gBAAiB,CADjB,iEAAoE,CAEpE,UAwCD,CE/DA,iEF2BE,eEzBF,CAFA,iEF+BE,gBE7BF,CFgCC,yEAEC,qEACD,CAEA,8DACC,eACD,CAEA,6DACC,oDAAqD,CACrD,yCAaD,CAXC,oEACC,eACD,CAEA,qFACC,0DACD,CAEA,qFACC,4CACD,CAGD,+EACC,uDACD,CAMA,mDACC,0CAA2C,CAC3C,aAMD,CAJC,2EACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAiBD,CAdC,qCACC,aACD,CAGA,0CACC,gDACD,CAEA,mCACC,cAAe,CACf,eAAiB,CACjB,0DACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CAKX,gCAAiC,CAJjC,UAKD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);

	/* A spacing at the beginning and end of the list */
	padding: var(--ck-spacing-small) 0;
}

.ck.ck-list__item {
	cursor: default;

	/* Almost as wide as menu bar items. */
	min-width: 15em;

	& > .ck-button:not(.ck-list-item-button) {
		padding: var(--ck-spacing-tiny) calc(2 * var(--ck-spacing-standard));
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& > .ck-button.ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* Lists come with an inner vertical padding. Don't duplicate it. */
	&:first-child {
		padding-top: 0;
	}

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) 0;
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);

	/* Give the separator some air */
	margin: var(--ck-spacing-small) 0;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},497:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-menu-bar{background:var(--ck-color-base-background);border:1px solid var(--ck-color-toolbar-border);display:flex;flex-wrap:wrap;gap:var(--ck-spacing-small);justify-content:flex-start;padding:var(--ck-spacing-small);width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubar.css"],names:[],mappings:"AAKA,gBAIC,0CAA2C,CAG3C,+CAAgD,CANhD,YAAa,CACb,cAAe,CAIf,2BAA4B,CAH5B,0BAA2B,CAE3B,+BAAgC,CAGhC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	background: var(--ck-color-base-background);
	padding: var(--ck-spacing-small);
	gap: var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);
	width: 100%;
}
`],sourceRoot:""}]);const A=f},4:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-menu-bar__menu{display:block;font-size:inherit;position:relative}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenu.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenu.css"],names:[],mappings:"AAKA,sBACC,aAAc,CCCd,iBAAkB,CDAlB,iBACD,CCCC,kDACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	display: block;
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	&.ck-menu-bar__menu_top-level {
		max-width: 100%;
	}
}
`],sourceRoot:""}]);const A=f},3344:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{min-height:unset;padding:var(--ck-spacing-small) var(--ck-spacing-medium)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{line-height:unset;width:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{margin-left:var(--ck-spacing-standard);margin-right:calc(var(--ck-spacing-small)*-1);transform:rotate(-90deg)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{left:var(--ck-spacing-standard);margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small);transform:rotate(90deg)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAMC,mFACC,mBAAoB,CACpB,2BACD,CCIA,iDACC,UAuBD,CArBC,mEACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,+ECbD,kCDeC,CAGC,qFACC,oCACD,CAIA,qFACC,qCACD,CAOF,6EAEC,gBAAiB,CADjB,wDAgBD,CAbC,+FAEC,iBAAkB,CADlB,WAED,CAEA,mFACC,2BAA4B,CAC5B,4BACD,CAEA,sFACC,YACD,CAMD,mFACC,eA+BD,CA7BC,qHACC,mCAuBD,CErFD,+HFoEG,sCAAuC,CAGvC,6CAAgD,CANhD,wBE/DH,CAFA,+HF6EG,+BAAgC,CAMhC,4CAA+C,CAH/C,oCAAqC,CALrC,uBEzEH,CFqFC,iICpFD,kCDsFC",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu  {
	& > .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-menu-bar__menu {
	/*
	 * All menu buttons.
	 */
	& > .ck-menu-bar__menu__button {
		width: 100%;

		& > .ck-button__label {
			flex-grow: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.ck-disabled > .ck-button__label {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				padding-right: var(--ck-spacing-small);
			}
		}
	}

	/*
	 * Top-level menu buttons only.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button {
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		min-height: unset;

		& .ck-button__label {
			width: unset;
			line-height: unset;
		}

		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		& .ck-icon {
			display: none;
		}
	}

	/*
	 * Sub-menu buttons.
	 */
	&:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button {
		border-radius: 0;

		& > .ck-menu-bar__menu__button__arrow {
			width: var(--ck-dropdown-arrow-size);

			@mixin ck-dir ltr {
				transform: rotate(-90deg);

				/* A space to accommodate the triangle. */
				margin-left: var(--ck-spacing-standard);

				/* Nudge the arrow gently to the right because its center of gravity is to the left */
				margin-right: calc(-1 * var(--ck-spacing-small));
			}

			@mixin ck-dir rtl {
				transform: rotate(90deg);

				left: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-right: var(--ck-spacing-small);

				/* Nudge the arrow gently to the left because its center of gravity is to the right (after rotation). */
				margin-left: calc(-1 * var(--ck-spacing-small));
			}
		}

		&.ck-disabled > .ck-menu-bar__menu__button__arrow {
			@mixin ck-disabled;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},9481:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,":root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitem.css"],names:[],mappings:"AAKA,MACC,sCACD,CAEA,kDACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}

.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
`],sourceRoot:""}]);const A=f},977:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{font-size:var(--ck-icon-font-size)}[dir=ltr] .ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitembutton.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAWC,iEACC,eAoBD,CAlBC,0LAGC,8BACD,CAEA,uFAEC,kCASD,CCzBD,iGDmBG,qCCjBH,CAFA,iGDuBG,oCCrBH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-menu-bar__menu {
	/*
	 * List item buttons.
	 */
	& .ck-button.ck-menu-bar__menu__item__button {
		border-radius: 0;

		& > .ck-spinner-container,
		& > .ck-spinner-container .ck-spinner {
			/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
			--ck-toolbar-spinner-size: 20px;
		}

		& > .ck-spinner-container {
			/* This ensures margins corresponding to the .ck-icon. */
			font-size: var(--ck-icon-font-size);

			@mixin ck-dir ltr {
				margin-right: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				margin-left: var(--ck-spacing-medium);
			}
		}
	}
}


`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},9108:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,":root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{max-width:var(--ck-menu-bar-menu-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{bottom:auto;top:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{left:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{right:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);border-radius:0;bottom:0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width)}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{box-shadow:var(--ck-drop-shadow),0 0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}.ck.ck-menu-bar .ck-list-item-button:active,.ck.ck-menu-bar .ck-list-item-button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar.ck-menu-bar_focus-border-enabled .ck-list-item-button:active,.ck.ck-menu-bar.ck-menu-bar_focus-border-enabled .ck-list-item-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none;position:relative;z-index:2}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css"],names:[],mappings:"AAKA,MACC,iCAAkC,CAClC,+CACD,CAEA,mDAEC,2CAA4C,CAC5C,iBAAkB,CAFlB,yBAkDD,CA9CC,gLAEC,WACD,CAEA,gLAGC,WAAY,CADZ,QAED,CAEA,gLAEC,MACD,CAEA,gLAEC,OACD,CAEA,gLAEC,kEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CAEA,gLAEC,mEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CCnDD,MACC,uCACD,CAEA,mDAIC,oDAAqD,CACrD,sDAAuD,CCPvD,eAAgB,CDQhB,QAAS,CACT,kBAAmB,CACnB,iDA0BD,CClCC,6IAEC,qCAED,CDJD,mDEJC,oCFsCD,CAvBC,gLAEC,wBACD,CAEA,gLAEC,yBACD,CAEA,gLAEC,2BACD,CAEA,gLAEC,4BACD,CAEA,yDACC,YACD,CAKC,uFAEC,wBAAyB,CACzB,eACD,CAIA,yJGhDD,2BAA2B,CDF3B,2CAA8B,CCC9B,YAAa,CHoDX,iBAAkB,CAClB,SAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-max-width: 75vw;
	--ck-menu-bar-nested-menu-horizontal-offset: 5px;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	z-index: var(--ck-z-panel);
	max-width: var(--ck-menu-bar-menu-max-width);
	position: absolute;

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_nw {
		bottom: 100%;
	}

	&.ck-menu-bar__menu__panel_position_se,
	&.ck-menu-bar__menu__panel_position_sw {
		top: 100%;
		bottom: auto;
	}

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_se {
		left: 0px;
	}

	&.ck-menu-bar__menu__panel_position_nw,
	&.ck-menu-bar__menu__panel_position_sw {
		right: 0px;
	}

	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_en {
		left: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_es {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_en {
		bottom: 0px;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_wn {
		right: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_ws {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_wn {
		bottom: 0px;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";

:root {
	--ck-menu-bar-menu-panel-max-width: 75vw;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-menu-bar-menu-panel-max-width);

	/* Corner border radius consistent with the button. */
	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_se {
		border-top-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_sw {
		border-top-right-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_en,
	&.ck-menu-bar__menu__panel_position_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_wn,
	&.ck-menu-bar__menu__panel_position_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}

.ck.ck-menu-bar {
	& .ck-list-item-button {
		&:focus,
		&:active {
			border-color: transparent;
			box-shadow: none;
		}
	}

	&.ck-menu-bar_focus-border-enabled .ck-list-item-button {
		&:focus,
		&:active {
			/* Fix truncated shadows due to rendering order. */
			position: relative;
			z-index: 2;

			@mixin ck-focus-ring;
			@mixin ck-box-shadow var(--ck-focus-outer-shadow);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`],sourceRoot:""}]);const A=f},3710:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);border-radius:0;min-height:15px}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBAMC,2CAA4C,CAC5C,wEAAyE,CCZzE,eAAgB,CDShB,eA0LD,CCjMC,iFAEC,qCAED,CDDD,qBEPC,oCFqMD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=f},991:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const A=f},5380:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=f},8298:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=f},2722:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-number,.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAoED,CAlEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA+CF,CA7CE,8CACC,wDAYD,CAVC,4HAEC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CC5DF,0ODmEG,aCjEH,CDmEG,+IACC,kDACD,CDrEH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text,
			& .ck-input-number {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},8107:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CCfD,8FDSG,6BCPH,CAFA,8FDaG,8BCXH,CDeC,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CEhCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CD5DF,6FCkDI,8BDhDJ,CAFA,6FCsDI,6BDpDJ,CCuDG,yFACC,SACD,CAGD,2EACC,UAWD,CD1EF,oMCwEI,4DDtEJ,CC4EA,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const A=f},109:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:ck-spinner-rotate 1.5s linear infinite;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-spinner-container{animation-duration:3s}}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@keyframes ck-spinner-rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,gDAAiD,CADjD,qCAAsC,CADtC,oCAOD,CAHC,uCALD,yBAME,qBAEF,CADC,CAGD,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCAA6B,CAH7B,qCAAsC,CADtC,oCAKD,CAEA,6BACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite ck-spinner-rotate linear;

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 3s;
	}
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes ck-spinner-rotate {
	to {
		transform: rotate(360deg)
	}
}
`],sourceRoot:""}]);const A=f},1671:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const A=f},2710:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const A=f},9677:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);border-radius:0;padding:0 var(--ck-spacing-small)}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar .ck.ck-toolbar__separator{background:var(--ck-color-toolbar-border);height:var(--ck-icon-size);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eAGC,6CAA8C,CAE9C,+CAAgD,CCFhD,eAAgB,CDChB,iCAuGD,CCtGC,qEAEC,qCAED,CDFA,yCAIC,yCAA0C,CAH1C,0BAA2B,CAU3B,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAEA,qCACC,QACD,CAaA,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		height: var(--ck-icon-size);
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	.ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=f},9205:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck.ck-balloon-panel.ck-tooltip{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;z-index:calc(var(--ck-z-dialog) + 100);--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);box-shadow:none;padding:0 var(--ck-spacing-medium)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAOA,gCCEC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBAAgB,CDFhB,sCAAyC,CEFzC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAkB/D,eAAgB,CAhBhB,kCFJD,CEMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CAMA,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-balloon-panel.ck-tooltip {
	@mixin ck-unselectable;

	z-index: calc( var(--ck-z-dialog) + 100 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
		max-width: 200px;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const A=f},7676:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck-hidden{display:none!important}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{background:transparent;border:0;box-sizing:border-box;height:auto;margin:0;padding:0;position:static;text-decoration:none;transition:none;vertical-align:middle;width:auto;word-wrap:break-word}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAYC,sBAAuB,CADvB,QAAS,CART,qBAAsB,CAEtB,WAAY,CAIZ,QAAS,CACT,SAAU,CAJV,eAAgB,CAOhB,oBAAqB,CAErB,eAAgB,CADhB,qBAAsB,CAVtB,UAAW,CAcX,oBACD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCxFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Dialog -------------------------------------------------------------------------------- */

	--ck-color-dialog-background: 								var(--ck-custom-background);
	--ck-color-dialog-form-header-border: 						var(--ck-custom-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;

	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const A=f},695:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget{transition:none}}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{box-shadow:var(--ck-inner-shadow),0 0}@media (forced-colors:none){.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background)}}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused:not(td,th),.ck .ck-editor__nested-editable:focus:not(td,th){border:var(--ck-focus-ring);outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CChFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAcD,CAZC,uCAND,eAOE,eAWF,CAVC,CAEA,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAoBD,CAhBC,yGCrCA,qCDoDA,CE/CA,4BACC,yGFmCC,iEEjCD,CACD,CFwCC,+HG/CD,2BAA2B,CAD3B,YHkDC,CAKD,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAwCD,CA3BC,uCAzBD,4EA0BE,eA0BF,CAzBC,CAEA,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAeD,CAVC,kHACC,SAAU,CAGV,+DAKD,CAHC,uCAND,kHAOE,eAEF,CADC,CAKF,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-box-shadow var(--ck-inner-shadow);
		@mixin ck-media-default-colors {
			background-color: var(--ck-color-widget-editable-focus-background);
		}

		/**
		 * Focus border should not be applied to table cells because it overrides the default table cell border color.
		 * In other words - in some scenarios, the part of the table cell border has focus color style, which is not expected behavior
		 * because it should be the same as the table cell border color.
		 */
		&:not(td, th) {
			@mixin ck-focus-ring;
		}
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);

				@media (prefers-reduced-motion: reduce) {
					transition: none;
				}
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`],sourceRoot:""}]);const A=f},4095:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const A=f},8508:(_,w,m)=>{m.d(w,{A:()=>A});var x=m(2001),I=m.n(x),v=m(935),f=m.n(v)()(I());f.push([_.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button svg{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button:hover,.ck .ck-widget .ck-widget__type-around__button:hover svg line,.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:none}}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAwED,CAhEC,uCATD,+CAUE,eA+DF,CA9DC,CAEA,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAwBD,CAlBC,uCAPD,mDAQE,eAiBF,CAhBC,CAEA,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DA4BD,CAtBE,kEACC,oDACD,CAEA,8DACC,wDACD,CAGD,uCAQE,qLACC,cACD,CAEF,CASD,uKA7FD,SAAU,CACV,mBA8FC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAxKD,SAAU,CACV,mBAyKC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAxNF,SAAU,CACV,mBAyNE,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}

			@media (prefers-reduced-motion: reduce) {
				animation: none;

				& svg {
					& polyline {
						animation: none;
					}

					& line {
						animation: none;
					}
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const A=f},935:_=>{_.exports=function(w){var m=[];return m.toString=function(){return this.map(function(x){var I="",v=x[5]!==void 0;return x[4]&&(I+="@supports (".concat(x[4],") {")),x[2]&&(I+="@media ".concat(x[2]," {")),v&&(I+="@layer".concat(x[5].length>0?" ".concat(x[5]):""," {")),I+=w(x),v&&(I+="}"),x[2]&&(I+="}"),x[4]&&(I+="}"),I}).join("")},m.i=function(x,I,v,f,A){typeof x=="string"&&(x=[[null,x,void 0]]);var M={};if(v)for(var P=0;P<this.length;P++){var z=this[P][0];z!=null&&(M[z]=!0)}for(var H=0;H<x.length;H++){var V=[].concat(x[H]);v&&M[V[0]]||(A!==void 0&&(V[5]===void 0||(V[1]="@layer".concat(V[5].length>0?" ".concat(V[5]):""," {").concat(V[1],"}")),V[5]=A),I&&(V[2]&&(V[1]="@media ".concat(V[2]," {").concat(V[1],"}")),V[2]=I),f&&(V[4]?(V[1]="@supports (".concat(V[4],") {").concat(V[1],"}"),V[4]=f):V[4]="".concat(f)),m.push(V))}},m}},62:_=>{_.exports=function(w,m){return m||(m={}),w&&(w=String(w.__esModule?w.default:w),/^['"].*['"]$/.test(w)&&(w=w.slice(1,-1)),m.hash&&(w+=m.hash),/["'() \t\n]|(%20)/.test(w)||m.needQuotes?'"'.concat(w.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):w)}},2001:_=>{_.exports=function(w){var m=w[1],x=w[3];if(!x)return m;if(typeof btoa=="function"){var I=btoa(unescape(encodeURIComponent(JSON.stringify(x)))),v="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(I),f="/*# ".concat(v," */");return[m].concat([f]).join(`
`)}return[m].join(`
`)}},2591:_=>{var w=[];function m(v){for(var f=-1,A=0;A<w.length;A++)if(w[A].identifier===v){f=A;break}return f}function x(v,f){for(var A={},M=[],P=0;P<v.length;P++){var z=v[P],H=f.base?z[0]+f.base:z[0],V=A[H]||0,q="".concat(H," ").concat(V);A[H]=V+1;var te=m(q),le={css:z[1],media:z[2],sourceMap:z[3],supports:z[4],layer:z[5]};if(te!==-1)w[te].references++,w[te].updater(le);else{var me=I(le,f);f.byIndex=P,w.splice(P,0,{identifier:q,updater:me,references:1})}M.push(q)}return M}function I(v,f){var A=f.domAPI(f);return A.update(v),function(M){if(M){if(M.css===v.css&&M.media===v.media&&M.sourceMap===v.sourceMap&&M.supports===v.supports&&M.layer===v.layer)return;A.update(v=M)}else A.remove()}}_.exports=function(v,f){var A=x(v=v||[],f=f||{});return function(M){M=M||[];for(var P=0;P<A.length;P++){var z=m(A[P]);w[z].references--}for(var H=x(M,f),V=0;V<A.length;V++){var q=m(A[V]);w[q].references===0&&(w[q].updater(),w.splice(q,1))}A=H}}},8128:_=>{var w={};_.exports=function(m,x){var I=function(v){if(w[v]===void 0){var f=document.querySelector(v);if(window.HTMLIFrameElement&&f instanceof window.HTMLIFrameElement)try{f=f.contentDocument.head}catch{f=null}w[v]=f}return w[v]}(m);if(!I)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");I.appendChild(x)}},3051:_=>{_.exports=function(w){var m=document.createElement("style");return w.setAttributes(m,w.attributes),w.insert(m,w.options),m}},8021:_=>{_.exports=function(w,m){Object.keys(m).forEach(function(x){w.setAttribute(x,m[x])})}},8639:_=>{var w,m=(w=[],function(v,f){return w[v]=f,w.filter(Boolean).join(`
`)});function x(v,f,A,M){var P;if(A)P="";else{P="",M.supports&&(P+="@supports (".concat(M.supports,") {")),M.media&&(P+="@media ".concat(M.media," {"));var z=M.layer!==void 0;z&&(P+="@layer".concat(M.layer.length>0?" ".concat(M.layer):""," {")),P+=M.css,z&&(P+="}"),M.media&&(P+="}"),M.supports&&(P+="}")}if(v.styleSheet)v.styleSheet.cssText=m(f,P);else{var H=document.createTextNode(P),V=v.childNodes;V[f]&&v.removeChild(V[f]),V.length?v.insertBefore(H,V[f]):v.appendChild(H)}}var I={singleton:null,singletonCounter:0};_.exports=function(v){if(typeof document>"u")return{update:function(){},remove:function(){}};var f=I.singletonCounter++,A=I.singleton||(I.singleton=v.insertStyleElement(v));return{update:function(M){x(A,f,!1,M)},remove:function(M){x(A,f,!0,M)}}}},4782:_=>{_.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzUuNzUgMCAwIDEtLjIxNy4yMDYgNS4yNTEgNS4yNTEgMCAwIDEtOC41MDMtNS45NTUuNy43IDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NHptNS40OTQtNS4zMzVhLjc1Ljc1IDAgMCAxLS4xMi4yNzRsLTEuMTQ3IDEuNjM5YS43NS43NSAwIDEgMS0xLjIyOC0uODZsLjg2LTEuMjNhMy43NSAzLjc1IDAgMCAwLTYuMTQ0LTQuMzAxbC0uODYgMS4yMjlhLjc1Ljc1IDAgMCAxLTEuMjI5LS44NmwxLjE0OC0xLjY0YS43NS43NSAwIDAgMSAuMjE3LS4yMDYgNS4yNTEgNS4yNTEgMCAwIDEgOC41MDMgNS45NTVtLTQuNTYzLTIuNTMyYS43NS43NSAwIDAgMSAuMTg0IDEuMDQ1bC0zLjE1NSA0LjUwNWEuNzUuNzUgMCAxIDEtMS4yMjktLjg2bDMuMTU1LTQuNTA2YS43NS43NSAwIDAgMSAxLjA0NS0uMTg0Ii8+PC9zdmc+"},9736:_=>{_.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjx0aXRsZT5GaWxsIDE8L3RpdGxlPjxwYXRoIGZpbGw9IiNGRkZGRkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTk2Ny40ODQgMEg1Ni41MTdDMjUuMzA0IDAgMCAyNS4zMDQgMCA1Ni41MTd2OTEwLjk2NkMwIDk5OC42OTQgMjUuMjk3IDEwMjQgNTYuNTIyIDEwMjRINTQ3VjYyOEg0MTRWNDczaDEzM1YzNTkuMDI5YzAtMTMyLjI2MiA4MC43NzMtMjA0LjI4MiAxOTguNzU2LTIwNC4yODIgNTYuNTEzIDAgMTA1LjA4NiA0LjIwOCAxMTkuMjQ0IDYuMDg5VjI5OWwtODEuNjE2LjAzN2MtNjMuOTkzIDAtNzYuMzg0IDMwLjQ5Mi03Ni4zODQgNzUuMjM2VjQ3M2gxNTMuNDg3bC0xOS45ODYgMTU1SDcwN3YzOTZoMjYwLjQ4NGMzMS4yMTMgMCA1Ni41MTYtMjUuMzAzIDU2LjUxNi01Ni41MTZWNTYuNTE1QzEwMjQgMjUuMzAzIDk5OC42OTcgMCA5NjcuNDg0IDAiLz48L3N2Zz4="},657:_=>{_.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSlzY2FsZSguOTgwMTIpIj48cmVjdCB3aWR0aD0iNjAuMDk5IiBoZWlnaHQ9IjYwLjA5OSIgeD0iMTc2LjAzMSIgeT0iMjMxLjM5OSIgZmlsbD0iIzM0YTY2OCIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjIzOCIgcnk9IjUuMjM4Ii8+PHBhdGggZmlsbD0iIzVjODhjNSIgZD0ibTIwNi40NzcgMjYwLjktMjguOTg3IDI4Ljk4N2E1LjIyIDUuMjIgMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiLz48cGF0aCBmaWxsPSIjZGQ0YjNlIiBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwN3EuNS43NTMuOTUgMS41MDguNTE1LjcxNS45ODggMS40NGMxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5cS40NzMtLjcyMy45ODgtMS40MzkuNDUtLjc1NS45NS0xLjUwOGMuMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIGN4PSIyMjYuNzQyIiBjeT0iMjM5LjAwMiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjgyOCIgcnk9IjUuNTY0Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjlxLS4wMDEtLjU0My0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhxLS4wMDEtLjAwMy0uMDA0LS4wMDVjLTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTVtNC40MyA1LjY2LjAwMy4wMDZ2LS4wMDN6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGZpbGw9IiNjM2MzYzMiIGQ9Im0yMTUuMTg0IDI1MS45MjktNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMiA1LjIgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjl6Ii8+PHBhdGggZmlsbD0iI2ZkZGM0ZiIgZD0ibTIxMi45ODMgMjQ4LjQ5NS0zNi45NTIgMzYuOTUzdi44MTJhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYgMTM2IDAgMCAwLTIuNzY0LTMuOSAzOCAzOCAwIDAgMC0uOTg5LTEuNDQgMzUgMzUgMCAwIDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4="},7784:_=>{_.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwME0xNjMuNCAzMDUuNWM4OC43IDAgMTM3LjItNzMuNSAxMzcuMi0xMzcuMiAwLTIuMSAwLTQuMi0uMS02LjIgOS40LTYuOCAxNy42LTE1LjMgMjQuMS0yNS04LjYgMy44LTE3LjkgNi40LTI3LjcgNy42IDEwLTYgMTcuNi0xNS40IDIxLjItMjYuNy05LjMgNS41LTE5LjYgOS41LTMwLjYgMTEuNy04LjgtOS40LTIxLjMtMTUuMi0zNS4yLTE1LjItMjYuNiAwLTQ4LjIgMjEuNi00OC4yIDQ4LjIgMCAzLjguNCA3LjUgMS4zIDExLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40LTQuMSA3LjEtNi41IDE1LjQtNi41IDI0LjIgMCAxNi43IDguNSAzMS41IDIxLjUgNDAuMS03LjktLjItMTUuMy0yLjQtMjEuOC02di42YzAgMjMuNCAxNi42IDQyLjggMzguNyA0Ny4zLTQgMS4xLTguMyAxLjctMTIuNyAxLjctMy4xIDAtNi4xLS4zLTkuMS0uOSA2LjEgMTkuMiAyMy45IDMzLjEgNDUgMzMuNS0xNi41IDEyLjktMzcuMyAyMC42LTU5LjkgMjAuNi0zLjkgMC03LjctLjItMTEuNS0uNyAyMS4xIDEzLjggNDYuNSAyMS44IDczLjcgMjEuOCIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg=="},6341:_=>{_.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgdmlld0JveD0iMCAwIDUwNCA1MDQiPjx0aXRsZT5nbHlwaC1sb2dvX01heTIwMTY8L3RpdGxlPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCAuMTU5aDUwMy44NDFWNTAzLjk0SDB6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI1MS45MjEuMTU5Yy02OC40MTggMC03Ni45OTcuMjktMTAzLjg2NyAxLjUxNi0yNi44MTQgMS4yMjMtNDUuMTI3IDUuNDgyLTYxLjE1MSAxMS43MS0xNi41NjYgNi40MzctMzAuNjE1IDE1LjA1MS00NC42MjEgMjkuMDU2LTE0LjAwNSAxNC4wMDYtMjIuNjE5IDI4LjA1NS0yOS4wNTYgNDQuNjIxLTYuMjI4IDE2LjAyNC0xMC40ODcgMzQuMzM3LTExLjcxIDYxLjE1MUMuMjkgMTc1LjA4MyAwIDE4My42NjIgMCAyNTIuMDhjMCA2OC40MTcuMjkgNzYuOTk2IDEuNTE2IDEwMy44NjYgMS4yMjMgMjYuODE0IDUuNDgyIDQ1LjEyNyAxMS43MSA2MS4xNTEgNi40MzcgMTYuNTY2IDE1LjA1MSAzMC42MTUgMjkuMDU2IDQ0LjYyMSAxNC4wMDYgMTQuMDA1IDI4LjA1NSAyMi42MTkgNDQuNjIxIDI5LjA1NyAxNi4wMjQgNi4yMjcgMzQuMzM3IDEwLjQ4NiA2MS4xNTEgMTEuNzA5IDI2Ljg3IDEuMjI2IDM1LjQ0OSAxLjUxNiAxMDMuODY3IDEuNTE2IDY4LjQxNyAwIDc2Ljk5Ni0uMjkgMTAzLjg2Ni0xLjUxNiAyNi44MTQtMS4yMjMgNDUuMTI3LTUuNDgyIDYxLjE1MS0xMS43MDkgMTYuNTY2LTYuNDM4IDMwLjYxNS0xNS4wNTIgNDQuNjIxLTI5LjA1NyAxNC4wMDUtMTQuMDA2IDIyLjYxOS0yOC4wNTUgMjkuMDU3LTQ0LjYyMSA2LjIyNy0xNi4wMjQgMTAuNDg2LTM0LjMzNyAxMS43MDktNjEuMTUxIDEuMjI2LTI2Ljg3IDEuNTE2LTM1LjQ0OSAxLjUxNi0xMDMuODY2IDAtNjguNDE4LS4yOS03Ni45OTctMS41MTYtMTAzLjg2Ny0xLjIyMy0yNi44MTQtNS40ODItNDUuMTI3LTExLjcwOS02MS4xNTEtNi40MzgtMTYuNTY2LTE1LjA1Mi0zMC42MTUtMjkuMDU3LTQ0LjYyMS0xNC4wMDYtMTQuMDA1LTI4LjA1NS0yMi42MTktNDQuNjIxLTI5LjA1Ni0xNi4wMjQtNi4yMjgtMzQuMzM3LTEwLjQ4Ny02MS4xNTEtMTEuNzFDMzI4LjkxNy40NDkgMzIwLjMzOC4xNTkgMjUxLjkyMS4xNTltMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1czE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NmMzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjZzLTE3LjIwNyAxNC4yNzUtMjguOTY2IDE4Ljg0NWMtOC44NzcgMy40NS0yMi4yMTYgNy41NTQtNDYuNzc4IDguNjc0LTI2LjU2IDEuMjEyLTM0LjUyNyAxLjQ2OS0xMDEuNzk3IDEuNDY5LTY3LjI3MSAwLTc1LjIzNy0uMjU3LTEwMS43OTgtMS40NjktMjQuNTYyLTEuMTItMzcuOTAxLTUuMjI0LTQ2Ljc3OC04LjY3NC0xMS43NTktNC41Ny0yMC4xNTEtMTAuMDI5LTI4Ljk2Ni0xOC44NDVzLTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2NmMtMy40NS04Ljg3Ny03LjU1NC0yMi4yMTYtOC42NzQtNDYuNzc4LTEuMjEyLTI2LjU2NC0xLjQ2OS0zNC41MzItMS40NjktMTAxLjc5NyAwLTY3LjI2Ni4yNTctNzUuMjM0IDEuNDY5LTEwMS43OTggMS4xMi0yNC41NjIgNS4yMjQtMzcuOTAxIDguNjc0LTQ2Ljc3OCA0LjU3LTExLjc1OSAxMC4wMjktMjAuMTUxIDE4Ljg0NS0yOC45NjZzMTcuMjA3LTE0LjI3NSAyOC45NjYtMTguODQ1YzguODc3LTMuNDUgMjIuMjE2LTcuNTU0IDQ2Ljc3OC04LjY3NCAyNi41NjQtMS4yMTIgMzQuNTMyLTEuNDY5IDEwMS43OTgtMS40NjkiIG1hc2s9InVybCgjYikiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzNzMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0YzQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNtMC0yMTMuMzM4Yy03MS40NDcgMC0xMjkuMzY1IDU3LjkxOC0xMjkuMzY1IDEyOS4zNjUgMCA3MS40NDYgNTcuOTE4IDEyOS4zNjQgMTI5LjM2NSAxMjkuMzY0IDcxLjQ0NiAwIDEyOS4zNjQtNTcuOTE4IDEyOS4zNjQtMTI5LjM2NCAwLTcxLjQ0Ny01Ny45MTgtMTI5LjM2NS0xMjkuMzY0LTEyOS4zNjVNNDE2LjYyNyAxMTcuNjA0YzAgMTYuNjk2LTEzLjUzNSAzMC4yMy0zMC4yMzEgMzAuMjMtMTYuNjk1IDAtMzAuMjMtMTMuNTM0LTMwLjIzLTMwLjIzczEzLjUzNS0zMC4yMzEgMzAuMjMtMzAuMjMxYzE2LjY5NiAwIDMwLjIzMSAxMy41MzUgMzAuMjMxIDMwLjIzMSIvPjwvZz48L3N2Zz4="}},D={};function S(_){var w=D[_];if(w!==void 0)return w.exports;var m=D[_]={id:_,exports:{}};return E[_](m,m.exports,S),m.exports}S.m=E,S.n=_=>{var w=_&&_.__esModule?()=>_.default:()=>_;return S.d(w,{a:w}),w},S.d=(_,w)=>{for(var m in w)S.o(w,m)&&!S.o(_,m)&&Object.defineProperty(_,m,{enumerable:!0,get:w[m]})},S.o=(_,w)=>Object.prototype.hasOwnProperty.call(_,w),S.b=document.baseURI||self.location.href;var O={};return(()=>{let _;S.d(O,{default:()=>gm});try{_={window,document}}catch{_={window:{},document:{}}}const w=_;function m(){try{return navigator.userAgent.toLowerCase()}catch{return""}}const x=m(),I={isMac:v(x),isWindows:f(x),isGecko:A(x),isSafari:M(x),isiOS:P(x),isAndroid:z(x),isBlink:H(x),get isMediaForcedColors(){return!!w.window.matchMedia&&w.window.matchMedia("(forced-colors: active)").matches},get isMotionReduced(){return!!w.window.matchMedia&&w.window.matchMedia("(prefers-reduced-motion)").matches},features:{isRegExpUnicodePropertySupported:V()}};function v(o){return o.indexOf("macintosh")>-1}function f(o){return o.indexOf("windows")>-1}function A(o){return!!o.match(/gecko\/\d+/)}function M(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}function P(o){return!!o.match(/iphone|ipad/i)||v(o)&&navigator.maxTouchPoints>0}function z(o){return o.indexOf("android")>-1}function H(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}function V(){let o=!1;try{o="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}function q(o,e,t,n){t=t||function(c,l){return c===l};const i=Array.isArray(o)?o:Array.prototype.slice.call(o),r=Array.isArray(e)?e:Array.prototype.slice.call(e),s=function(c,l,d){const u=te(c,l,d);if(u===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const h=le(c,u),g=le(l,u),p=te(h,g,d),k=c.length-p,C=l.length-p;return{firstIndex:u,lastIndexOld:k,lastIndexNew:C}}(i,r,t);return n?function(c,l){const{firstIndex:d,lastIndexOld:u,lastIndexNew:h}=c;if(d===-1)return Array(l).fill("equal");let g=[];return d>0&&(g=g.concat(Array(d).fill("equal"))),h-d>0&&(g=g.concat(Array(h-d).fill("insert"))),u-d>0&&(g=g.concat(Array(u-d).fill("delete"))),h<l&&(g=g.concat(Array(l-h).fill("equal"))),g}(s,r.length):function(c,l){const d=[],{firstIndex:u,lastIndexOld:h,lastIndexNew:g}=l;return g-u>0&&d.push({index:u,type:"insert",values:c.slice(u,g)}),h-u>0&&d.push({index:u+(g-u),type:"delete",howMany:h-u}),d}(r,s)}function te(o,e,t){for(let n=0;n<Math.max(o.length,e.length);n++)if(o[n]===void 0||e[n]===void 0||!t(o[n],e[n]))return n;return-1}function le(o,e){return o.slice(e).reverse()}function me(o,e,t){t=t||function(k,C){return k===C};const n=o.length,i=e.length;if(n>200||i>200||n+i>300)return me.fastDiff(o,e,t,!0);let r,s;if(i<n){const k=o;o=e,e=k,r="delete",s="insert"}else r="insert",s="delete";const a=o.length,c=e.length,l=c-a,d={},u={};function h(k){const C=(u[k-1]!==void 0?u[k-1]:-1)+1,T=u[k+1]!==void 0?u[k+1]:-1,N=C>T?-1:1;d[k+N]&&(d[k]=d[k+N].slice(0)),d[k]||(d[k]=[]),d[k].push(C>T?r:s);let L=Math.max(C,T),j=L-k;for(;j<a&&L<c&&t(o[j],e[L]);)j++,L++,d[k].push("equal");return L}let g,p=0;do{for(g=-p;g<l;g++)u[g]=h(g);for(g=l+p;g>l;g--)u[g]=h(g);u[l]=h(l),p++}while(u[l]!==c);return d[l].slice(1)}me.fastDiff=q;const Ne=function(){return function o(){o.called=!0}};class Qe{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=Ne(),this.off=Ne()}}const _e=new Array(256).fill("").map((o,e)=>("0"+e.toString(16)).slice(-2));function Je(){const[o,e,t,n]=crypto.getRandomValues(new Uint32Array(4));return"e"+_e[255&o]+_e[o>>8&255]+_e[o>>16&255]+_e[o>>24&255]+_e[255&e]+_e[e>>8&255]+_e[e>>16&255]+_e[e>>24&255]+_e[255&t]+_e[t>>8&255]+_e[t>>16&255]+_e[t>>24&255]+_e[255&n]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]}const tt={get(o="normal"){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function En(o,e){const t=tt.get(e.priority);for(let n=0;n<o.length;n++)if(tt.get(o[n].priority)<t)return void o.splice(n,0,e);o.push(e)}class B extends Error{constructor(e,t,n){super(function(i,r){const s=new WeakSet,a=(d,u)=>{if(typeof u=="object"&&u!==null){if(s.has(u))return`[object ${u.constructor.name}]`;s.add(u)}return u},c=r?` ${JSON.stringify(r,a)}`:"",l=Ht(i);return i+c+l}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new B(e.message,t);throw n.stack=e.stack,n}}function de(o,e){console.warn(...Wn(o,e))}function mn(o,e){console.error(...Wn(o,e))}function Ht(o){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${o}`}function Wn(o,e){const t=Ht(o);return e?[o,e,t]:[o,t]}const $n="43.3.1",zd=new Date(2024,10,6);if(globalThis.CKEDITOR_VERSION)throw new B("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=$n;const Kn=Symbol("listeningTo"),ki=Symbol("emitterId"),Ut=Symbol("delegations"),zm=Ce(Object);function Ce(o){return o?class extends o{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let i=!1;this.listenTo(this,e,(r,...s)=>{i||(i=!0,r.off(),t.call(this,r,...s))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,i={}){let r,s;this[Kn]||(this[Kn]={});const a=this[Kn];Ld(e)||Lm(e);const c=Ld(e);(r=a[c])||(r=a[c]={emitter:e,callbacks:{}}),(s=r.callbacks[t])||(s=r.callbacks[t]=[]),s.push(n),function(l,d,u,h,g){d._addEventListener?d._addEventListener(u,h,g):l._addEventListener.call(d,u,h,g)}(this,e,t,n,i)}stopListening(e,t,n){const i=this[Kn];let r=e&&Ld(e);const s=i&&r?i[r]:void 0,a=s&&t?s.callbacks[t]:void 0;if(!(!i||e&&!s||t&&!a))if(n)Fd(this,e,t,n),a.indexOf(n)!==-1&&(a.length===1?delete s.callbacks[t]:Fd(this,e,t,n));else if(a){for(;n=a.pop();)Fd(this,e,t,n);delete s.callbacks[t]}else if(s){for(t in s.callbacks)this.stopListening(e,t);delete i[r]}else{for(r in i)this.stopListening(i[r].emitter);delete this[Kn]}}fire(e,...t){try{const n=e instanceof Qe?e:new Qe(this,e),i=n.name;let r=Fm(this,i);if(n.path.push(this),r){const a=[n,...t];r=Array.from(r);for(let c=0;c<r.length&&(r[c].callback.apply(this,a),n.off.called&&(delete n.off.called,this._removeEventListener(i,r[c].callback)),!n.stop.called);c++);}const s=this[Ut];if(s){const a=s.get(i),c=s.get("*");a&&Rm(a,n,t),c&&Rm(c,n,t)}return n.return}catch(n){B.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[Ut]||(this[Ut]=new Map),e.forEach(i=>{const r=this[Ut].get(i);r?r.set(t,n):this[Ut].set(i,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[Ut])if(e)if(t){const n=this[Ut].get(e);n&&n.delete(t)}else this[Ut].delete(e);else this[Ut].clear()}_addEventListener(e,t,n){(function(s,a){const c=Om(s);if(c[a])return;let l=a,d=null;const u=[];for(;l!==""&&!c[l];)c[l]={callbacks:[],childEvents:[]},u.push(c[l]),d&&c[l].childEvents.push(d),d=l,l=l.substr(0,l.lastIndexOf(":"));if(l!==""){for(const h of u)h.callbacks=c[l].callbacks.slice();c[l].childEvents.push(d)}})(this,e);const i=Od(this,e),r={callback:t,priority:tt.get(n.priority)};for(const s of i)En(s,r)}_removeEventListener(e,t){const n=Od(this,e);for(const i of n)for(let r=0;r<i.length;r++)i[r].callback==t&&(i.splice(r,1),r--)}}:zm}function Lm(o,e){o[ki]||(o[ki]=e||Je())}function Ld(o){return o[ki]}function Om(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function Od(o,e){const t=Om(o)[e];if(!t)return[];let n=[t.callbacks];for(let i=0;i<t.childEvents.length;i++){const r=Od(o,t.childEvents[i]);n=n.concat(r)}return n}function Fm(o,e){let t;return o._events&&(t=o._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?Fm(o,e.substr(0,e.lastIndexOf(":"))):null}function Rm(o,e,t){for(let[n,i]of o){i?typeof i=="function"&&(i=i(e.name)):i=e.name;const r=new Qe(e.source,i);r.path=[...e.path],n.fire(r,...t)}}function Fd(o,e,t,n){e._removeEventListener?e._removeEventListener(t,n):o._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{Ce[o]=zm.prototype[o]});const Se=function(o){var e=typeof o;return o!=null&&(e=="object"||e=="function")},sa=Symbol("observableProperties"),aa=Symbol("boundObservables"),ca=Symbol("boundProperties"),bi=Symbol("decoratedMethods"),Vm=Symbol("decoratedOriginal"),jm=Ae(Ce());function Ae(o){var e;if(!o)return jm;class t extends(e=o,e){set(i,r){if(Se(i))return void Object.keys(i).forEach(a=>{this.set(a,i[a])},this);Rd(this);const s=this[sa];if(i in this&&!s.has(i))throw new B("observable-set-cannot-override",this);Object.defineProperty(this,i,{enumerable:!0,configurable:!0,get:()=>s.get(i),set(a){const c=s.get(i);let l=this.fire(`set:${i}`,i,a,c);l===void 0&&(l=a),c===l&&s.has(i)||(s.set(i,l),this.fire(`change:${i}`,i,l,c))}}),this[i]=r}bind(...i){if(!i.length||!Hm(i))throw new B("observable-bind-wrong-properties",this);if(new Set(i).size!==i.length)throw new B("observable-bind-duplicate-properties",this);Rd(this);const r=this[ca];i.forEach(a=>{if(r.has(a))throw new B("observable-bind-rebind",this)});const s=new Map;return i.forEach(a=>{const c={property:a,to:[]};r.set(a,c),s.set(a,c)}),{to:l_,toMany:d_,_observable:this,_bindProperties:i,_to:[],_bindings:s}}unbind(...i){if(!this[sa])return;const r=this[ca],s=this[aa];if(i.length){if(!Hm(i))throw new B("observable-unbind-wrong-properties",this);i.forEach(a=>{const c=r.get(a);c&&(c.to.forEach(([l,d])=>{const u=s.get(l),h=u[d];h.delete(c),h.size||delete u[d],Object.keys(u).length||(s.delete(l),this.stopListening(l,"change"))}),r.delete(a))})}else s.forEach((a,c)=>{this.stopListening(c,"change")}),s.clear(),r.clear()}decorate(i){Rd(this);const r=this[i];if(!r)throw new B("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:i});this.on(i,(s,a)=>{s.return=r.apply(this,a)}),this[i]=function(...s){return this.fire(i,s)},this[i][Vm]=r,this[bi]||(this[bi]=[]),this[bi].push(i)}stopListening(i,r,s){if(!i&&this[bi]){for(const a of this[bi])this[a]=this[a][Vm];delete this[bi]}super.stopListening(i,r,s)}}return t}function Rd(o){o[sa]||(Object.defineProperty(o,sa,{value:new Map}),Object.defineProperty(o,aa,{value:new Map}),Object.defineProperty(o,ca,{value:new Map}))}function l_(...o){const e=function(...r){if(!r.length)throw new B("observable-bind-to-parse-error",null);const s={to:[]};let a;return typeof r[r.length-1]=="function"&&(s.callback=r.pop()),r.forEach(c=>{if(typeof c=="string")a.properties.push(c);else{if(typeof c!="object")throw new B("observable-bind-to-parse-error",null);a={observable:c,properties:[]},s.to.push(a)}}),s}(...o),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new B("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new B("observable-bind-to-extra-callback",this);var i;e.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new B("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),i=this._observable,this._to.forEach(r=>{const s=i[aa];let a;s.get(r.observable)||i.listenTo(r.observable,"change",(c,l)=>{a=s.get(r.observable)[l],a&&a.forEach(d=>{Um(i,d.property)})})}),function(r){let s;r._bindings.forEach((a,c)=>{r._to.forEach(l=>{s=l.properties[a.callback?0:r._bindProperties.indexOf(c)],a.to.push([l.observable,s]),function(d,u,h,g){const p=d[aa],k=p.get(h),C=k||{};C[g]||(C[g]=new Set),C[g].add(u),k||p.set(h,C)}(r._observable,a,l.observable,s)})})}(this),this._bindProperties.forEach(r=>{Um(this._observable,r)})}function d_(o,e,t){if(this._bindings.size>1)throw new B("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const r=n.map(s=>[s,i]);return Array.prototype.concat.apply([],r)}(o,e),t)}function Hm(o){return o.every(e=>typeof e=="string")}function Um(o,e){const t=o[ca].get(e);let n;t.callback?n=t.callback.apply(o,t.to.map(i=>i[0][i[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(o,e)?o[e]=n:o.set(e,n)}function Vd(o){let e=0;for(const t of o)e++;return e}function st(o,e){const t=Math.min(o.length,e.length);for(let n=0;n<t;n++)if(o[n]!=e[n])return n;return o.length==e.length?"same":o.length<e.length?"prefix":"extension"}function Ct(o){return!(!o||!o[Symbol.iterator])}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{Ae[o]=jm.prototype[o]});const qm=typeof bd=="object"&&bd&&bd.Object===Object&&bd;var u_=typeof self=="object"&&self&&self.Object===Object&&self;const qt=qm||u_||Function("return this")(),Xt=qt.Symbol;var Gm=Object.prototype,h_=Gm.hasOwnProperty,m_=Gm.toString,ro=Xt?Xt.toStringTag:void 0;const g_=function(o){var e=h_.call(o,ro),t=o[ro];try{o[ro]=void 0;var n=!0}catch{}var i=m_.call(o);return n&&(e?o[ro]=t:delete o[ro]),i};var p_=Object.prototype.toString;const f_=function(o){return p_.call(o)};var Wm=Xt?Xt.toStringTag:void 0;const Dn=function(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":Wm&&Wm in Object(o)?g_(o):f_(o)},ht=Array.isArray,Nt=function(o){return o!=null&&typeof o=="object"},$m=function(o){return typeof o=="string"||!ht(o)&&Nt(o)&&Dn(o)=="[object String]"};function Pt(o,e,t={},n=[]){const i=t&&t.xmlns,r=i?o.createElementNS(i,e):o.createElement(e);for(const s in t)r.setAttribute(s,t[s]);!$m(n)&&Ct(n)||(n=[n]);for(let s of n)$m(s)&&(s=o.createTextNode(s)),r.appendChild(s);return r}const Km=function(o,e){return function(t){return o(e(t))}},jd=Km(Object.getPrototypeOf,Object);var k_=Function.prototype,b_=Object.prototype,Ym=k_.toString,w_=b_.hasOwnProperty,A_=Ym.call(Object);const vt=function(o){if(!Nt(o)||Dn(o)!="[object Object]")return!1;var e=jd(o);if(e===null)return!0;var t=w_.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Ym.call(t)==A_},__=function(){this.__data__=[],this.size=0},so=function(o,e){return o===e||o!=o&&e!=e},la=function(o,e){for(var t=o.length;t--;)if(so(o[t][0],e))return t;return-1};var C_=Array.prototype.splice;const v_=function(o){var e=this.__data__,t=la(e,o);return!(t<0)&&(t==e.length-1?e.pop():C_.call(e,t,1),--this.size,!0)},y_=function(o){var e=this.__data__,t=la(e,o);return t<0?void 0:e[t][1]},x_=function(o){return la(this.__data__,o)>-1},E_=function(o,e){var t=this.__data__,n=la(t,o);return n<0?(++this.size,t.push([o,e])):t[n][1]=e,this};function wi(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}wi.prototype.clear=__,wi.prototype.delete=v_,wi.prototype.get=y_,wi.prototype.has=x_,wi.prototype.set=E_;const da=wi,D_=function(){this.__data__=new da,this.size=0},I_=function(o){var e=this.__data__,t=e.delete(o);return this.size=e.size,t},S_=function(o){return this.__data__.get(o)},T_=function(o){return this.__data__.has(o)},ao=function(o){if(!Se(o))return!1;var e=Dn(o);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},Hd=qt["__core-js_shared__"];var Qm=function(){var o=/[^.]+$/.exec(Hd&&Hd.keys&&Hd.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();const M_=function(o){return!!Qm&&Qm in o};var B_=Function.prototype.toString;const Yn=function(o){if(o!=null){try{return B_.call(o)}catch{}try{return o+""}catch{}}return""};var N_=/^\[object .+?Constructor\]$/,P_=Function.prototype,z_=Object.prototype,L_=P_.toString,O_=z_.hasOwnProperty,F_=RegExp("^"+L_.call(O_).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const R_=function(o){return!(!Se(o)||M_(o))&&(ao(o)?F_:N_).test(Yn(o))},V_=function(o,e){return o==null?void 0:o[e]},Qn=function(o,e){var t=V_(o,e);return R_(t)?t:void 0},co=Qn(qt,"Map"),lo=Qn(Object,"create"),j_=function(){this.__data__=lo?lo(null):{},this.size=0},H_=function(o){var e=this.has(o)&&delete this.__data__[o];return this.size-=e?1:0,e};var U_=Object.prototype.hasOwnProperty;const q_=function(o){var e=this.__data__;if(lo){var t=e[o];return t==="__lodash_hash_undefined__"?void 0:t}return U_.call(e,o)?e[o]:void 0};var G_=Object.prototype.hasOwnProperty;const W_=function(o){var e=this.__data__;return lo?e[o]!==void 0:G_.call(e,o)},$_=function(o,e){var t=this.__data__;return this.size+=this.has(o)?0:1,t[o]=lo&&e===void 0?"__lodash_hash_undefined__":e,this};function Ai(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}Ai.prototype.clear=j_,Ai.prototype.delete=H_,Ai.prototype.get=q_,Ai.prototype.has=W_,Ai.prototype.set=$_;const Zm=Ai,K_=function(){this.size=0,this.__data__={hash:new Zm,map:new(co||da),string:new Zm}},Y_=function(o){var e=typeof o;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?o!=="__proto__":o===null},ua=function(o,e){var t=o.__data__;return Y_(e)?t[typeof e=="string"?"string":"hash"]:t.map},Q_=function(o){var e=ua(this,o).delete(o);return this.size-=e?1:0,e},Z_=function(o){return ua(this,o).get(o)},J_=function(o){return ua(this,o).has(o)},X_=function(o,e){var t=ua(this,o),n=t.size;return t.set(o,e),this.size+=t.size==n?0:1,this};function _i(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}_i.prototype.clear=K_,_i.prototype.delete=Q_,_i.prototype.get=Z_,_i.prototype.has=J_,_i.prototype.set=X_;const ha=_i,eC=function(o,e){var t=this.__data__;if(t instanceof da){var n=t.__data__;if(!co||n.length<199)return n.push([o,e]),this.size=++t.size,this;t=this.__data__=new ha(n)}return t.set(o,e),this.size=t.size,this};function Ci(o){var e=this.__data__=new da(o);this.size=e.size}Ci.prototype.clear=D_,Ci.prototype.delete=I_,Ci.prototype.get=S_,Ci.prototype.has=T_,Ci.prototype.set=eC;const vi=Ci,tC=function(o,e){for(var t=-1,n=o==null?0:o.length;++t<n&&e(o[t],t,o)!==!1;);return o},ma=function(){try{var o=Qn(Object,"defineProperty");return o({},"",{}),o}catch{}}(),ga=function(o,e,t){e=="__proto__"&&ma?ma(o,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):o[e]=t};var nC=Object.prototype.hasOwnProperty;const Ud=function(o,e,t){var n=o[e];nC.call(o,e)&&so(n,t)&&(t!==void 0||e in o)||ga(o,e,t)},yi=function(o,e,t,n){var i=!t;t||(t={});for(var r=-1,s=e.length;++r<s;){var a=e[r],c=void 0;c===void 0&&(c=o[a]),i?ga(t,a,c):Ud(t,a,c)}return t},iC=function(o,e){for(var t=-1,n=Array(o);++t<o;)n[t]=e(t);return n},Jm=function(o){return Nt(o)&&Dn(o)=="[object Arguments]"};var Xm=Object.prototype,oC=Xm.hasOwnProperty,rC=Xm.propertyIsEnumerable;const pa=Jm(function(){return arguments}())?Jm:function(o){return Nt(o)&&oC.call(o,"callee")&&!rC.call(o,"callee")},sC=function(){return!1};var eg=b&&!b.nodeType&&b,tg=eg&&!0&&y&&!y.nodeType&&y,ng=tg&&tg.exports===eg?qt.Buffer:void 0;const uo=(ng?ng.isBuffer:void 0)||sC;var aC=/^(?:0|[1-9]\d*)$/;const fa=function(o,e){var t=typeof o;return!!(e=e??9007199254740991)&&(t=="number"||t!="symbol"&&aC.test(o))&&o>-1&&o%1==0&&o<e},qd=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991};var Me={};Me["[object Float32Array]"]=Me["[object Float64Array]"]=Me["[object Int8Array]"]=Me["[object Int16Array]"]=Me["[object Int32Array]"]=Me["[object Uint8Array]"]=Me["[object Uint8ClampedArray]"]=Me["[object Uint16Array]"]=Me["[object Uint32Array]"]=!0,Me["[object Arguments]"]=Me["[object Array]"]=Me["[object ArrayBuffer]"]=Me["[object Boolean]"]=Me["[object DataView]"]=Me["[object Date]"]=Me["[object Error]"]=Me["[object Function]"]=Me["[object Map]"]=Me["[object Number]"]=Me["[object Object]"]=Me["[object RegExp]"]=Me["[object Set]"]=Me["[object String]"]=Me["[object WeakMap]"]=!1;const cC=function(o){return Nt(o)&&qd(o.length)&&!!Me[Dn(o)]},Gd=function(o){return function(e){return o(e)}};var ig=b&&!b.nodeType&&b,ho=ig&&!0&&y&&!y.nodeType&&y,Wd=ho&&ho.exports===ig&&qm.process;const xi=function(){try{var o=ho&&ho.require&&ho.require("util").types;return o||Wd&&Wd.binding&&Wd.binding("util")}catch{}}();var og=xi&&xi.isTypedArray;const $d=og?Gd(og):cC;var lC=Object.prototype.hasOwnProperty;const rg=function(o,e){var t=ht(o),n=!t&&pa(o),i=!t&&!n&&uo(o),r=!t&&!n&&!i&&$d(o),s=t||n||i||r,a=s?iC(o.length,String):[],c=a.length;for(var l in o)!e&&!lC.call(o,l)||s&&(l=="length"||i&&(l=="offset"||l=="parent")||r&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||fa(l,c))||a.push(l);return a};var dC=Object.prototype;const Kd=function(o){var e=o&&o.constructor;return o===(typeof e=="function"&&e.prototype||dC)},uC=Km(Object.keys,Object);var hC=Object.prototype.hasOwnProperty;const mC=function(o){if(!Kd(o))return uC(o);var e=[];for(var t in Object(o))hC.call(o,t)&&t!="constructor"&&e.push(t);return e},Ei=function(o){return o!=null&&qd(o.length)&&!ao(o)},mo=function(o){return Ei(o)?rg(o):mC(o)},gC=function(o,e){return o&&yi(e,mo(e),o)},pC=function(o){var e=[];if(o!=null)for(var t in Object(o))e.push(t);return e};var fC=Object.prototype.hasOwnProperty;const kC=function(o){if(!Se(o))return pC(o);var e=Kd(o),t=[];for(var n in o)(n!="constructor"||!e&&fC.call(o,n))&&t.push(n);return t},Di=function(o){return Ei(o)?rg(o,!0):kC(o)},bC=function(o,e){return o&&yi(e,Di(e),o)};var sg=b&&!b.nodeType&&b,ag=sg&&!0&&y&&!y.nodeType&&y,cg=ag&&ag.exports===sg?qt.Buffer:void 0,lg=cg?cg.allocUnsafe:void 0;const dg=function(o,e){if(e)return o.slice();var t=o.length,n=lg?lg(t):new o.constructor(t);return o.copy(n),n},ug=function(o,e){var t=-1,n=o.length;for(e||(e=Array(n));++t<n;)e[t]=o[t];return e},wC=function(o,e){for(var t=-1,n=o==null?0:o.length,i=0,r=[];++t<n;){var s=o[t];e(s,t,o)&&(r[i++]=s)}return r},hg=function(){return[]};var AC=Object.prototype.propertyIsEnumerable,mg=Object.getOwnPropertySymbols;const Yd=mg?function(o){return o==null?[]:(o=Object(o),wC(mg(o),function(e){return AC.call(o,e)}))}:hg,_C=function(o,e){return yi(o,Yd(o),e)},gg=function(o,e){for(var t=-1,n=e.length,i=o.length;++t<n;)o[i+t]=e[t];return o},pg=Object.getOwnPropertySymbols?function(o){for(var e=[];o;)gg(e,Yd(o)),o=jd(o);return e}:hg,CC=function(o,e){return yi(o,pg(o),e)},fg=function(o,e,t){var n=e(o);return ht(o)?n:gg(n,t(o))},Qd=function(o){return fg(o,mo,Yd)},vC=function(o){return fg(o,Di,pg)},Zd=Qn(qt,"DataView"),Jd=Qn(qt,"Promise"),Xd=Qn(qt,"Set"),eu=Qn(qt,"WeakMap");var kg="[object Map]",bg="[object Promise]",wg="[object Set]",Ag="[object WeakMap]",_g="[object DataView]",yC=Yn(Zd),xC=Yn(co),EC=Yn(Jd),DC=Yn(Xd),IC=Yn(eu),Zn=Dn;(Zd&&Zn(new Zd(new ArrayBuffer(1)))!=_g||co&&Zn(new co)!=kg||Jd&&Zn(Jd.resolve())!=bg||Xd&&Zn(new Xd)!=wg||eu&&Zn(new eu)!=Ag)&&(Zn=function(o){var e=Dn(o),t=e=="[object Object]"?o.constructor:void 0,n=t?Yn(t):"";if(n)switch(n){case yC:return _g;case xC:return kg;case EC:return bg;case DC:return wg;case IC:return Ag}return e});const go=Zn;var SC=Object.prototype.hasOwnProperty;const TC=function(o){var e=o.length,t=new o.constructor(e);return e&&typeof o[0]=="string"&&SC.call(o,"index")&&(t.index=o.index,t.input=o.input),t},ka=qt.Uint8Array,tu=function(o){var e=new o.constructor(o.byteLength);return new ka(e).set(new ka(o)),e},MC=function(o,e){var t=e?tu(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.byteLength)};var BC=/\w*$/;const NC=function(o){var e=new o.constructor(o.source,BC.exec(o));return e.lastIndex=o.lastIndex,e};var Cg=Xt?Xt.prototype:void 0,vg=Cg?Cg.valueOf:void 0;const PC=function(o){return vg?Object(vg.call(o)):{}},yg=function(o,e){var t=e?tu(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.length)},zC=function(o,e,t){var n=o.constructor;switch(e){case"[object ArrayBuffer]":return tu(o);case"[object Boolean]":case"[object Date]":return new n(+o);case"[object DataView]":return MC(o,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return yg(o,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(o);case"[object RegExp]":return NC(o);case"[object Symbol]":return PC(o)}};var xg=Object.create;const LC=function(){function o(){}return function(e){if(!Se(e))return{};if(xg)return xg(e);o.prototype=e;var t=new o;return o.prototype=void 0,t}}(),Eg=function(o){return typeof o.constructor!="function"||Kd(o)?{}:LC(jd(o))},OC=function(o){return Nt(o)&&go(o)=="[object Map]"};var Dg=xi&&xi.isMap;const FC=Dg?Gd(Dg):OC,RC=function(o){return Nt(o)&&go(o)=="[object Set]"};var Ig=xi&&xi.isSet;const VC=Ig?Gd(Ig):RC;var Sg="[object Arguments]",Tg="[object Function]",Mg="[object Object]",Te={};Te[Sg]=Te["[object Array]"]=Te["[object ArrayBuffer]"]=Te["[object DataView]"]=Te["[object Boolean]"]=Te["[object Date]"]=Te["[object Float32Array]"]=Te["[object Float64Array]"]=Te["[object Int8Array]"]=Te["[object Int16Array]"]=Te["[object Int32Array]"]=Te["[object Map]"]=Te["[object Number]"]=Te[Mg]=Te["[object RegExp]"]=Te["[object Set]"]=Te["[object String]"]=Te["[object Symbol]"]=Te["[object Uint8Array]"]=Te["[object Uint8ClampedArray]"]=Te["[object Uint16Array]"]=Te["[object Uint32Array]"]=!0,Te["[object Error]"]=Te[Tg]=Te["[object WeakMap]"]=!1;const nu=function o(e,t,n,i,r,s){var a,c=1&t,l=2&t,d=4&t;if(n&&(a=r?n(e,i,r,s):n(e)),a!==void 0)return a;if(!Se(e))return e;var u=ht(e);if(u){if(a=TC(e),!c)return ug(e,a)}else{var h=go(e),g=h==Tg||h=="[object GeneratorFunction]";if(uo(e))return dg(e,c);if(h==Mg||h==Sg||g&&!r){if(a=l||g?{}:Eg(e),!c)return l?CC(e,bC(a,e)):_C(e,gC(a,e))}else{if(!Te[h])return r?e:{};a=zC(e,h,c)}}s||(s=new vi);var p=s.get(e);if(p)return p;s.set(e,a),VC(e)?e.forEach(function(C){a.add(o(C,t,n,C,e,s))}):FC(e)&&e.forEach(function(C,T){a.set(T,o(C,t,n,T,e,s))});var k=u?void 0:(d?l?vC:Qd:l?Di:mo)(e);return tC(k||e,function(C,T){k&&(C=e[T=C]),Ud(a,T,o(C,t,n,T,e,s))}),a},iu=function(o,e){return nu(o,5,e=typeof e=="function"?e:void 0)},In=function(o){return Nt(o)&&o.nodeType===1&&!vt(o)};class Bg{constructor(e,t){this._config=Object.create(null),t&&this.define(Ng(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,i=!1){if(vt(t))return void this._setObjectToTarget(e,t,i);const r=t.split(".");t=r.pop();for(const s of r)vt(e[s])||(e[s]=Object.create(null)),e=e[s];if(vt(n))return vt(e[t])||(e[t]=Object.create(null)),e=e[t],void this._setObjectToTarget(e,n,i);i&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const i of n){if(!vt(e[i])){e=null;break}e=e[i]}return e?Ng(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(i=>{this._setToTarget(e,i,t[i],n)})}}function Ng(o){return iu(o,jC)}function jC(o){return In(o)||typeof o=="function"?o:void 0}function Sn(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}function ba(o){const e=Object.prototype.toString.apply(o);return e=="[object Window]"||e=="[object global]"}const Pg=yt(Ce());function yt(o){return o?class extends o{listenTo(e,t,n,i={}){if(Sn(e)||ba(e)){const r={capture:!!i.useCapture,passive:!!i.usePassive},s=this._getProxyEmitter(e,r)||new HC(e,r);this.listenTo(s,t,n,i)}else super.listenTo(e,t,n,i)}stopListening(e,t,n){if(Sn(e)||ba(e)){const i=this._getAllProxyEmitters(e);for(const r of i)this.stopListening(r,t,n)}else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(n,i){const r=n[Kn];return r&&r[i]?r[i].emitter:null}(this,zg(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:Pg}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{yt[o]=Pg.prototype[o]});class HC extends Ce(){constructor(e,t){super(),Lm(this,zg(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),Ce().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){Ce().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function zg(o,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=Je())}(o);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}function UC(o){const e=[];let t=o;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}function Lg(o){const e=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}function Og(o){if(!o.target)return null;const e=o.target.ownerDocument,t=o.clientX,n=o.clientY;let i=null;return e.caretRangeFromPoint&&e.caretRangeFromPoint(t,n)?i=e.caretRangeFromPoint(t,n):o.rangeParent&&(i=e.createRange(),i.setStart(o.rangeParent,o.rangeOffset),i.collapse(!0)),i}function Oe(o){return Object.prototype.toString.call(o)=="[object Text]"}function wa(o){return Object.prototype.toString.apply(o)=="[object Range]"}function Fg(o){return o&&o.parentNode?o.offsetParent===w.document.body?null:o.offsetParent:null}const Rg=["top","right","bottom","left","width","height"];class he{constructor(e){const t=wa(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),ou(e)||t)if(t){const n=he.getDomRangeRects(e);Aa(this,he.getBoundingRect(n))}else Aa(this,e.getBoundingClientRect());else if(ba(e)){const{innerWidth:n,innerHeight:i}=e;Aa(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else Aa(this,e)}clone(){return new he(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};if(t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0)return null;{const n=new he(t);return n._source=this._source,n}}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(Vg(e))return t;let n,i=e,r=e.parentNode||e.commonAncestorContainer;for(;r&&!Vg(r);){const a=((s=r)instanceof HTMLElement?s.ownerDocument.defaultView.getComputedStyle(s).overflow:"visible")==="visible";i instanceof HTMLElement&&jg(i)==="absolute"&&(n=i);const c=jg(r);if(a||n&&(c==="relative"&&a||c!=="relative")){i=r,r=r.parentNode;continue}const l=new he(r),d=t.getIntersection(l);if(!d)return null;d.getArea()<t.getArea()&&(t=d),i=r,r=r.parentNode}var s;return t}isEqual(e){for(const t of Rg)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}toAbsoluteRect(){const{scrollX:e,scrollY:t}=w.window,n=this.clone().moveBy(e,t);if(ou(n._source)){const i=Fg(n._source);i&&function(r,s){const a=new he(s),c=Lg(s);let l=0,d=0;l-=a.left,d-=a.top,l+=s.scrollLeft,d+=s.scrollTop,l-=c.left,d-=c.top,r.moveBy(l,d)}(n,i)}return n}excludeScrollbarsAndBorders(){const e=this._source;let t,n,i;if(ba(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,i=e.getComputedStyle(e.document.documentElement).direction;else{const r=Lg(e);t=e.offsetWidth-e.clientWidth-r.left-r.right,n=e.offsetHeight-e.clientHeight-r.top-r.bottom,i=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,i==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const i of n)t.push(new he(i));else{let i=e.startContainer;Oe(i)&&(i=i.parentNode);const r=new he(i.getBoundingClientRect());r.right=r.left,r.width=0,t.push(r)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of e)n++,t.left=Math.min(t.left,i.left),t.top=Math.min(t.top,i.top),t.right=Math.max(t.right,i.right),t.bottom=Math.max(t.bottom,i.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new he(t))}}function Aa(o,e){for(const t of Rg)o[t]=e[t]}function Vg(o){return!!ou(o)&&o===o.ownerDocument.body}function ou(o){return o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.getBoundingClientRect=="function"}function jg(o){return o instanceof HTMLElement?o.ownerDocument.defaultView.getComputedStyle(o).position:"static"}const ze=class ze{constructor(e,t){ze._observerInstance||ze._createObserver(),this._element=e,this._callback=t,ze._addElementCallback(e,t),ze._observerInstance.observe(e)}get element(){return this._element}destroy(){ze._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){ze._elementCallbacks||(ze._elementCallbacks=new Map);let n=ze._elementCallbacks.get(e);n||(n=new Set,ze._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=ze._getElementCallbacks(e);n&&(n.delete(t),n.size||(ze._elementCallbacks.delete(e),ze._observerInstance.unobserve(e))),ze._elementCallbacks&&!ze._elementCallbacks.size&&(ze._observerInstance=null,ze._elementCallbacks=null)}static _getElementCallbacks(e){return ze._elementCallbacks?ze._elementCallbacks.get(e):null}static _createObserver(){ze._observerInstance=new w.window.ResizeObserver(e=>{for(const t of e){const n=ze._getElementCallbacks(t.target);if(n)for(const i of n)i(t)}})}};ze._observerInstance=null,ze._elementCallbacks=null;let po=ze;function Hg(o,e){o instanceof HTMLTextAreaElement&&(o.value=e),o.innerHTML=e}function fo(o){return e=>e+o}function ko(o){let e=0;for(;o.previousSibling;)o=o.previousSibling,e++;return e}function Ug(o,e,t){o.insertBefore(t,o.childNodes[e]||null)}function bo(o){return o&&o.nodeType===Node.COMMENT_NODE}function gn(o){return!!o&&(Oe(o)?gn(o.parentElement):!!o.getClientRects&&!!o.getClientRects().length)}function _a({element:o,target:e,positions:t,limiter:n,fitInViewport:i,viewportOffsetConfig:r}){ao(e)&&(e=e()),ao(n)&&(n=n());const s=Fg(o),a=function(h){h=Object.assign({top:0,bottom:0,left:0,right:0},h);const g=new he(w.window);return g.top+=h.top,g.height-=h.top,g.bottom-=h.bottom,g.height-=h.bottom,g}(r),c=new he(o),l=qg(e,a);let d;if(!l||!a.getIntersection(l))return null;const u={targetRect:l,elementRect:c,positionedElementAncestor:s,viewportRect:a};if(n||i){if(n){const h=qg(n,a);h&&(u.limiterRect=h)}d=function(h,g){const{elementRect:p}=g,k=p.getArea(),C=h.map(L=>new Gg(L,g)).filter(L=>!!L.name);let T=0,N=null;for(const L of C){const{limiterIntersectionArea:j,viewportIntersectionArea:Q}=L;if(j===k)return L;const ne=Q**2+j**2;ne>T&&(T=ne,N=L)}return N}(t,u)}else d=new Gg(t[0],u);return d}function qg(o,e){const t=new he(o).getVisible();return t?t.getIntersection(e):null}class Gg{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect,t.limiterRect);if(!n)return;const{left:i,top:r,name:s,config:a}=n;this.name=s,this.config=a,this._positioningFunctionCoordinates={left:i,top:r},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;return e?e.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function Wg(o){const e=o.parentNode;e&&e.removeChild(o)}function qC({window:o,rect:e,alignToTop:t,forceScroll:n,viewportOffset:i}){const r=e.clone().moveBy(0,i.bottom),s=e.clone().moveBy(0,-i.top),a=new he(o).excludeScrollbarsAndBorders(),c=t&&n,l=[s,r].every(p=>a.contains(p));let{scrollX:d,scrollY:u}=o;const h=d,g=u;c?u-=a.top-e.top+i.top:l||(Kg(s,a)?u-=a.top-e.top+i.top:$g(r,a)&&(u+=t?e.top-a.top-i.top:e.bottom-a.bottom+i.bottom)),l||(Yg(e,a)?d-=a.left-e.left+i.left:Qg(e,a)&&(d+=e.right-a.right+i.right)),d==h&&u===g||o.scrollTo(d,u)}function GC({parent:o,getRect:e,alignToTop:t,forceScroll:n,ancestorOffset:i=0,limiterElement:r}){const s=ru(o),a=t&&n;let c,l,d;const u=r||s.document.body;for(;o!=u;)l=e(),c=new he(o).excludeScrollbarsAndBorders(),d=c.contains(l),a?o.scrollTop-=c.top-l.top+i:d||(Kg(l,c)?o.scrollTop-=c.top-l.top+i:$g(l,c)&&(o.scrollTop+=t?l.top-c.top-i:l.bottom-c.bottom+i)),d||(Yg(l,c)?o.scrollLeft-=c.left-l.left+i:Qg(l,c)&&(o.scrollLeft+=l.right-c.right+i)),o=o.parentNode}function $g(o,e){return o.bottom>e.bottom}function Kg(o,e){return o.top<e.top}function Yg(o,e){return o.left<e.left}function Qg(o,e){return o.right>e.right}function ru(o){return wa(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function WC(o){if(wa(o)){let e=o.commonAncestorContainer;return Oe(e)&&(e=e.parentNode),e}return o.parentNode}function Zg(o,e){const t=ru(o),n=new he(o);if(t===e)return n;{let i=t;for(;i!=e;){const r=i.frameElement,s=new he(r).excludeScrollbarsAndBorders();n.moveBy(s.left,s.top),i=i.parent}}return n}const $C={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},KC={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Jg={37:"←",38:"↑",39:"→",40:"↓",9:"⇥",33:"Page Up",34:"Page Down"},pe=QC(),YC=Object.fromEntries(Object.entries(pe).map(([o,e])=>{let t;return t=e in Jg?Jg[e]:o.charAt(0).toUpperCase()+o.slice(1),[e,t]}));function Ii(o){let e;if(typeof o=="string"){if(e=pe[o.toLowerCase()],!e)throw new B("keyboard-unknown-key",null,{key:o})}else e=o.keyCode+(o.altKey?pe.alt:0)+(o.ctrlKey?pe.ctrl:0)+(o.shiftKey?pe.shift:0)+(o.metaKey?pe.cmd:0);return e}function su(o){return typeof o=="string"&&(o=function(e){return e.split("+").map(t=>t.trim())}(o)),o.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return Ii(t.slice(0,-1));const n=Ii(t);return(I.isMac||I.isiOS)&&n==pe.ctrl?pe.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function Ca(o){let e=su(o);return Object.entries(I.isMac||I.isiOS?$C:KC).reduce((t,[n,i])=>(e&pe[n]&&(e&=~pe[n],t+=i),t),"")+(e?YC[e]:"")}function au(o,e){const t=e==="ltr";switch(o){case pe.arrowleft:return t?"left":"right";case pe.arrowright:return t?"right":"left";case pe.arrowup:return"up";case pe.arrowdown:return"down"}}function QC(){const o={pageup:33,pagedown:34,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)o[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)o[e-48]=e;for(let e=112;e<=123;e++)o["f"+(e-111)]=e;return Object.assign(o,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),o}function ve(o){return Array.isArray(o)?o:[o]}const cu=function(o,e,t){(t!==void 0&&!so(o[e],t)||t===void 0&&!(e in o))&&ga(o,e,t)},Xg=function(o){return function(e,t,n){for(var i=-1,r=Object(e),s=n(e),a=s.length;a--;){var c=s[++i];if(t(r[c],c,r)===!1)break}return e}}(),ZC=function(o){return Nt(o)&&Ei(o)},ep=function(o,e){if((e!=="constructor"||typeof o[e]!="function")&&e!="__proto__")return o[e]},JC=function(o){return yi(o,Di(o))},XC=function(o,e,t,n,i,r,s){var a=ep(o,t),c=ep(e,t),l=s.get(c);if(l)cu(o,t,l);else{var d=void 0,u=d===void 0;if(u){var h=ht(c),g=!h&&uo(c),p=!h&&!g&&$d(c);d=c,h||g||p?ht(a)?d=a:ZC(a)?d=ug(a):g?(u=!1,d=dg(c,!0)):p?(u=!1,d=yg(c,!0)):d=[]:vt(c)||pa(c)?(d=a,pa(a)?d=JC(a):Se(a)&&!ao(a)||(d=Eg(c))):u=!1}u&&(s.set(c,d),i(d,c,n,r,s),s.delete(c)),cu(o,t,d)}},e1=function o(e,t,n,i,r){e!==t&&Xg(t,function(s,a){if(r||(r=new vi),Se(s))XC(e,t,a,n,o,i,r);else{var c=void 0;c===void 0&&(c=s),cu(e,a,c)}},Di)},Tn=function(o){return o},t1=function(o,e,t){switch(t.length){case 0:return o.call(e);case 1:return o.call(e,t[0]);case 2:return o.call(e,t[0],t[1]);case 3:return o.call(e,t[0],t[1],t[2])}return o.apply(e,t)};var tp=Math.max;const n1=function(o,e,t){return e=tp(e===void 0?o.length-1:e,0),function(){for(var n=arguments,i=-1,r=tp(n.length-e,0),s=Array(r);++i<r;)s[i]=n[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=n[i];return a[e]=t(s),t1(o,this,a)}},i1=function(o){return function(){return o}},o1=ma?function(o,e){return ma(o,"toString",{configurable:!0,enumerable:!1,value:i1(e),writable:!0})}:Tn;var r1=Date.now;const s1=function(o){var e=0,t=0;return function(){var n=r1(),i=16-(n-t);if(t=n,i>0){if(++e>=800)return arguments[0]}else e=0;return o.apply(void 0,arguments)}}(o1),a1=function(o,e){return s1(n1(o,e,Tn),o+"")},c1=function(o,e,t){if(!Se(t))return!1;var n=typeof e;return!!(n=="number"?Ei(t)&&fa(e,t.length):n=="string"&&e in t)&&so(t[e],o)},np=function(o){return a1(function(e,t){var n=-1,i=t.length,r=i>1?t[i-1]:void 0,s=i>2?t[2]:void 0;for(r=o.length>3&&typeof r=="function"?(i--,r):void 0,s&&c1(t[0],t[1],s)&&(r=i<3?void 0:r,i=1),e=Object(e);++n<i;){var a=t[n];a&&o(e,a,n,r)}return e})},lu=np(function(o,e,t){e1(o,e,t)});function l1(o,e,t=1,n){if(typeof t!="number")throw new B("translation-service-quantity-not-a-number",null,{quantity:t});const i=n||w.window.CKEDITOR_TRANSLATIONS,r=function(d){return Object.keys(d).length}(i);r===1&&(o=Object.keys(i)[0]);const s=e.id||e.string;if(r===0||!function(d,u,h){return!!h[d]&&!!h[d].dictionary[u]}(o,s,i))return t!==1?e.plural:e.string;const a=i[o].dictionary,c=i[o].getPluralForm||(d=>d===1?0:1),l=a[s];return typeof l=="string"?l:l[Number(c(t))]}w.window.CKEDITOR_TRANSLATIONS||(w.window.CKEDITOR_TRANSLATIONS={});const d1=["ar","ara","dv","div","fa","per","fas","he","heb","ku","kur","ug","uig"];function ip(o){return d1.includes(o)?"rtl":"ltr"}class u1{constructor({uiLanguage:e="en",contentLanguage:t,translations:n}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=ip(this.uiLanguage),this.contentLanguageDirection=ip(this.contentLanguage),this.translations=function(i){return Array.isArray(i)?i.reduce((r,s)=>lu(r,s)):i}(n),this.t=(i,r)=>this._t(i,r)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=ve(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(i,r){return i.replace(/%(\d+)/g,(s,a)=>a<r.length?r[a]:s)}(l1(this.uiLanguage,e,n,this.translations),t)}}class lt extends Ce(){constructor(e={},t={}){super();const n=Ct(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of e)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new B("collection-add-item-invalid-index",this);let n=0;for(const i of e){const r=this._getItemIdBeforeAdding(i),s=t+n;this._items.splice(s,0,i),this._itemMap.set(r,i),this.fire("add",i,s),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new B("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}forEach(e,t){this._items.forEach(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new B("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(i,r,s)=>{const a=t._bindToCollection==this,c=t._bindToInternalToExternalMap.get(r);if(a&&c)this._bindToExternalToInternalMap.set(r,c),this._bindToInternalToExternalMap.set(c,r);else{const l=e(r);if(!l)return void this._skippedIndexesFromExternal.push(s);let d=s;for(const u of this._skippedIndexesFromExternal)s>u&&d--;for(const u of t._skippedIndexesFromExternal)d>=u&&d++;this._bindToExternalToInternalMap.set(r,l),this._bindToInternalToExternalMap.set(l,r),this.add(l,d);for(let u=0;u<t._skippedIndexesFromExternal.length;u++)d<=t._skippedIndexesFromExternal[u]&&t._skippedIndexesFromExternal[u]++}};for(const i of t)n(0,i,t.getIndex(i));this.listenTo(t,"add",n),this.listenTo(t,"remove",(i,r,s)=>{const a=this._bindToExternalToInternalMap.get(r);a&&this.remove(a),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((c,l)=>(s<l&&c.push(l-1),s>l&&c.push(l),c),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new B("collection-add-invalid-id",this);if(this.get(n))throw new B("collection-add-item-already-exists",this)}else e[t]=n=Je();return n}_remove(e){let t,n,i,r=!1;const s=this._idProperty;if(typeof e=="string"?(n=e,i=this._itemMap.get(n),r=!i,i&&(t=this._items.indexOf(i))):typeof e=="number"?(t=e,i=this._items[t],r=!i,i&&(n=i[s])):(i=e,n=i[s],t=this._items.indexOf(i),r=t==-1||!this._itemMap.get(n)),r)throw new B("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const a=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(a),this.fire("remove",i,t),[i,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function Fe(o){const e=o.next();return e.done?null:e.value}class Be extends yt(Ae()){constructor(){super(),this._elements=new Set,this._externalViews=new Set,this._blurTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}get elements(){return Array.from(this._elements.values())}get externalViews(){return Array.from(this._externalViews.values())}add(e){if(rp(e))this._addElement(e);else if(op(e))this._addView(e);else{if(!e.element)throw new B("focustracker-add-view-missing-element",{focusTracker:this,view:e});this._addElement(e.element)}}remove(e){rp(e)?this._removeElement(e):op(e)?this._removeView(e):this._removeElement(e.element)}_addElement(e){if(this._elements.has(e))throw new B("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>{const t=this.externalViews.find(n=>function(i,r){return sp(i,r)?!0:!!r.focusTracker.externalViews.find(s=>sp(i,s))}(e,n));t?this._focus(t.element):this._focus(e)},{useCapture:!0}),this.listenTo(e,"blur",()=>{this._blur()},{useCapture:!0}),this._elements.add(e)}_removeElement(e){this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e)),e===this.focusedElement&&this._blur()}_addView(e){e.element&&this._addElement(e.element),this.listenTo(e.focusTracker,"change:focusedElement",()=>{e.focusTracker.focusedElement?e.element&&this._focus(e.element):this._blur()}),this._externalViews.add(e)}_removeView(e){e.element&&this._removeElement(e.element),this.stopListening(e.focusTracker),this._externalViews.delete(e)}destroy(){this.stopListening(),this._elements.clear(),this._externalViews.clear(),this.isFocused=!1,this.focusedElement=null}_focus(e){this._clearBlurTimeout(),this.focusedElement=e,this.isFocused=!0}_blur(){this.elements.find(e=>e.contains(document.activeElement))||this.externalViews.find(e=>e.focusTracker.isFocused&&!e.focusTracker._blurTimeout)||(this._clearBlurTimeout(),this._blurTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0))}_clearBlurTimeout(){clearTimeout(this._blurTimeout),this._blurTimeout=null}}function op(o){return"focusTracker"in o&&o.focusTracker instanceof Be}function rp(o){return In(o)}function sp(o,e){return!!e.element&&e.element.contains(document.activeElement)&&o.contains(e.element)}class We{constructor(){this._listener=new(yt())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+Ii(n),n)})}set(e,t,n={}){const i=su(e),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(s,a)=>{n.filter&&!n.filter(a)||(t(a,()=>{a.preventDefault(),a.stopPropagation(),s.stop()}),s.return=!0)},{priority:r})}press(e){return!!this._listener.fire("_keydown:"+Ii(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function en(o){return Ct(o)?new Map(o):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(o)}function ap(o,e,t,n){if(Math.max(e.length,o.length)>1e4)return o.slice(0,t).concat(e).concat(o.slice(t+n,o.length));{const i=Array.from(o);return i.splice(t,n,...e),i}}function du(o,e){let t;function n(...i){n.cancel(),t=setTimeout(()=>o(...i),e)}return n.cancel=()=>{clearTimeout(t)},n}function uu(o,e){return!!(t=o.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(o.charAt(e));var t}function hu(o,e){return!!(t=o.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const h1=m1();function cp(o,e){const t=String(o).matchAll(h1);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}function m1(){const o=new RegExp("\\p{Regional_Indicator}{2}","u").source,e="(?:"+[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")].map(t=>t.source).join("|")+")";return new RegExp(`${o}|${e}(?:‍${e})*`,"ug")}class R extends Ae(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",lp,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",lp),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}static get isOfficialPlugin(){return!1}static get isPremiumPlugin(){return!1}}function lp(o){o.return=!1,o.stop()}class ae extends Ae(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{if(!this.affectsData)return;const n=e.model.document.selection,i=n.getFirstPosition().root.rootName!="$graveyard"&&e.model.canEditAt(n);(e.isReadOnly||this._isEnabledBasedOnSelection&&!i)&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",dp,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",dp),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function dp(o){o.return=!1,o.stop()}class up extends ae{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){En(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class hp extends Ce(){constructor(e,t=[],n=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const i of t)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,r]of n)this._contextPlugins.set(i,r),this._contextPlugins.set(r,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new B("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const i=this,r=this._context;(function p(k,C=new Set){k.forEach(T=>{c(T)&&(C.has(T)||(C.add(T),T.pluginName&&!i._availablePlugins.has(T.pluginName)&&i._availablePlugins.set(T.pluginName,T),T.requires&&p(T.requires,C)))})})(e),h(e);const s=[...function p(k,C=new Set){return k.map(T=>c(T)?T:i._availablePlugins.get(T)).reduce((T,N)=>C.has(N)?T:(C.add(N),N.requires&&(h(N.requires,N),p(N.requires,C).forEach(L=>T.add(L))),T.add(N)),new Set)}(e.filter(p=>!d(p,t)))];(function(p,k){for(const C of k){if(typeof C!="function")throw new B("plugincollection-replace-plugin-invalid-type",null,{pluginItem:C});const T=C.pluginName;if(!T)throw new B("plugincollection-replace-plugin-missing-name",null,{pluginItem:C});if(C.requires&&C.requires.length)throw new B("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:T});const N=i._availablePlugins.get(T);if(!N)throw new B("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:T});const L=p.indexOf(N);if(L===-1){if(i._contextPlugins.has(N))return;throw new B("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:T})}if(N.requires&&N.requires.length)throw new B("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:T});p.splice(L,1,C),i._availablePlugins.set(T,C)}})(s,n);const a=s.map(p=>{let k=i._contextPlugins.get(p);return k=k||new p(r),i._add(p,k),k});return g(a,"init").then(()=>g(a,"afterInit")).then(()=>a);function c(p){return typeof p=="function"}function l(p){return c(p)&&!!p.isContextPlugin}function d(p,k){return k.some(C=>C===p||u(p)===C||u(C)===p)}function u(p){return c(p)?p.pluginName||p.name:p}function h(p,k=null){p.map(C=>c(C)?C:i._availablePlugins.get(C)||C).forEach(C=>{(function(T,N){if(!c(T))throw N?new B("plugincollection-soft-required",r,{missingPlugin:T,requiredBy:u(N)}):new B("plugincollection-plugin-not-found",r,{plugin:T})})(C,k),function(T,N){if(l(N)&&!l(T))throw new B("plugincollection-context-required",r,{plugin:u(T),requiredBy:u(N)})}(C,k),function(T,N){if(N&&d(T,t))throw new B("plugincollection-required",r,{plugin:u(T),requiredBy:u(N)})}(C,k)})}function g(p,k){return p.reduce((C,T)=>T[k]?i._contextPlugins.has(T)?C:C.then(T[k].bind(T)):C,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new B("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}class mp{constructor(e){this._contextOwner=null;const{translations:t,...n}=e||{};this.config=new Bg(n,this.constructor.defaultConfig);const i=this.constructor.builtinPlugins;this.config.define("plugins",i),this.plugins=new hp(this,i);const r=this.config.get("language")||{};this.locale=new u1({uiLanguage:typeof r=="string"?r:r.ui,contentLanguage:this.config.get("language.content"),translations:t}),this.t=this.locale.t,this.editors=new lt}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new B("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new B("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new B("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class va extends Ae(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}static get isOfficialPlugin(){return!1}static get isPremiumPlugin(){return!1}}var g1=S(2591),G=S.n(g1),p1=S(8639),W=S.n(p1),f1=S(8128),$=S.n(f1),k1=S(8021),K=S.n(k1),b1=S(3051),Y=S.n(b1),ya=S(4098),wo={attributes:{"data-cke":!0}};wo.setAttributes=K(),wo.insert=$().bind(null,"head"),wo.domAPI=W(),wo.insertStyleElement=Y(),G()(ya.A,wo),ya.A&&ya.A.locals&&ya.A.locals;const xa=new WeakMap;let gp=!1;function pp({view:o,element:e,text:t,isDirectHost:n=!0,keepOnFocus:i=!1}){const r=o.document;function s(a){xa.get(r).set(e,{text:a,isDirectHost:n,keepOnFocus:i,hostElement:n?e:null}),o.change(c=>mu(r,c))}xa.has(r)||(xa.set(r,new Map),r.registerPostFixer(a=>mu(r,a)),r.on("change:isComposing",()=>{o.change(a=>mu(r,a))},{priority:"high"})),e.is("editableElement")&&e.on("change:placeholder",(a,c,l)=>{s(l)}),e.placeholder?s(e.placeholder):t&&s(t),t&&function(){gp||de("enableplaceholder-deprecated-text-option"),gp=!0}()}function w1(o,e){return!e.hasClass("ck-placeholder")&&(o.addClass("ck-placeholder",e),!0)}function A1(o,e){return!!e.hasClass("ck-placeholder")&&(o.removeClass("ck-placeholder",e),!0)}function _1(o,e){if(!o.isAttached()||Array.from(o.getChildren()).some(i=>!i.is("uiElement")))return!1;const t=o.document,n=t.selection.anchor;return(!t.isComposing||!n||n.parent!==o)&&(!!e||!t.isFocused||!!n&&n.parent!==o)}function mu(o,e){const t=xa.get(o),n=[];let i=!1;for(const[r,s]of t)s.isDirectHost&&(n.push(r),fp(e,r,s)&&(i=!0));for(const[r,s]of t){if(s.isDirectHost)continue;const a=C1(r);a&&(n.includes(a)||(s.hostElement=a,fp(e,r,s)&&(i=!0)))}return i}function fp(o,e,t){const{text:n,isDirectHost:i,hostElement:r}=t;let s=!1;return r.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,r),s=!0),(i||e.childCount==1)&&_1(r,t.keepOnFocus)?w1(o,r)&&(s=!0):A1(o,r)&&(s=!0),s}function C1(o){if(o.childCount){const e=o.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class Jn{is(){throw new Error("is() method is abstract")}}const kp=function(o){return nu(o,4)};class Xn extends Ce(Jn){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new B("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),i=e.getAncestors(t);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),i=st(t,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return t[i]<n[i]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=kp(this);return delete e.parent,e}}Xn.prototype.is=function(o){return o==="node"||o==="view:node"};class Ee extends Xn{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof Ee&&(this===e||this.data===e.data)}_clone(){return new Ee(this.document,this.data)}}Ee.prototype.is=function(o){return o==="$text"||o==="view:$text"||o==="text"||o==="view:text"||o==="node"||o==="view:node"};class tn extends Jn{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new B("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new B("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}tn.prototype.is=function(o){return o==="$textProxy"||o==="view:$textProxy"||o==="textProxy"||o==="view:textProxy"};class nn{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const i=bp(t,n);if(i)return{element:t,pattern:n,match:i}}return null}matchAll(...e){const t=[];for(const n of e)for(const i of this._patterns){const r=bp(n,i);r&&t.push({element:n,pattern:i,match:r})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function bp(o,e){if(typeof e=="function")return e(o);const t={};return e.name&&(t.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(e.name,o.name),!t.name)||e.attributes&&(t.attributes=function(n,i){const r=new Set(i.getAttributeKeys());return vt(n)?(n.style!==void 0&&de("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&de("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),gu(n,r,s=>i.getAttribute(s))}(e.attributes,o),!t.attributes)||e.classes&&(t.classes=function(n,i){return gu(n,i.getClassNames(),()=>{})}(e.classes,o),!t.classes)||e.styles&&(t.styles=function(n,i){return gu(n,i.getStyleNames(!0),r=>i.getStyle(r))}(e.styles,o),!t.styles)?null:t}function gu(o,e,t){const n=function(s){return Array.isArray(s)?s.map(a=>vt(a)?(a.key!==void 0&&a.value!==void 0||de("matcher-pattern-missing-key-or-value",a),[a.key,a.value]):[a,!0]):vt(s)?Object.entries(s):[[s,!0]]}(o),i=Array.from(e),r=[];if(n.forEach(([s,a])=>{i.forEach(c=>{(function(l,d){return l===!0||l===d||l instanceof RegExp&&d.match(l)})(s,c)&&function(l,d,u){if(l===!0)return!0;const h=u(d);return l===h||l instanceof RegExp&&!!String(h).match(l)}(a,c,t)&&r.push(c)})}),n.length&&!(r.length<n.length))return r}const Ea=function(o){return typeof o=="symbol"||Nt(o)&&Dn(o)=="[object Symbol]"};var v1=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,y1=/^\w*$/;const pu=function(o,e){if(ht(o))return!1;var t=typeof o;return!(t!="number"&&t!="symbol"&&t!="boolean"&&o!=null&&!Ea(o))||y1.test(o)||!v1.test(o)||e!=null&&o in Object(e)};function fu(o,e){if(typeof o!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,i=e?e.apply(this,n):n[0],r=t.cache;if(r.has(i))return r.get(i);var s=o.apply(this,n);return t.cache=r.set(i,s)||r,s};return t.cache=new(fu.Cache||ha),t}fu.Cache=ha;const x1=fu,E1=function(o){var e=x1(o,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e};var D1=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,I1=/\\(\\)?/g,S1=E1(function(o){var e=[];return o.charCodeAt(0)===46&&e.push(""),o.replace(D1,function(t,n,i,r){e.push(i?r.replace(I1,"$1"):n||t)}),e});const T1=S1,wp=function(o,e){for(var t=-1,n=o==null?0:o.length,i=Array(n);++t<n;)i[t]=e(o[t],t,o);return i};var Ap=Xt?Xt.prototype:void 0,_p=Ap?Ap.toString:void 0;const M1=function o(e){if(typeof e=="string")return e;if(ht(e))return wp(e,o)+"";if(Ea(e))return _p?_p.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},ku=function(o){return o==null?"":M1(o)},Da=function(o,e){return ht(o)?o:pu(o,e)?[o]:T1(ku(o))},B1=function(o){var e=o==null?0:o.length;return e?o[e-1]:void 0},Si=function(o){if(typeof o=="string"||Ea(o))return o;var e=o+"";return e=="0"&&1/o==-1/0?"-0":e},bu=function(o,e){for(var t=0,n=(e=Da(e,o)).length;o!=null&&t<n;)o=o[Si(e[t++])];return t&&t==n?o:void 0},Cp=function(o,e,t){var n=-1,i=o.length;e<0&&(e=-e>i?0:i+e),(t=t>i?i:t)<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var r=Array(i);++n<i;)r[n]=o[n+e];return r},N1=function(o,e){return e.length<2?o:bu(o,Cp(e,0,-1))},P1=function(o,e){return e=Da(e,o),(o=N1(o,e))==null||delete o[Si(B1(e))]},z1=function(o,e){return o==null||P1(o,e)},Ao=function(o,e,t){var n=o==null?void 0:bu(o,e);return n===void 0?t:n},L1=function(o,e,t,n){if(!Se(o))return o;for(var i=-1,r=(e=Da(e,o)).length,s=r-1,a=o;a!=null&&++i<r;){var c=Si(e[i]),l=t;if(c==="__proto__"||c==="constructor"||c==="prototype")return o;if(i!=s){var d=a[c];(l=void 0)==void 0&&(l=Se(d)?d:fa(e[i+1])?[]:{})}Ud(a,c,l),a=a[c]}return o},O1=function(o,e,t){return o==null?o:L1(o,e,t)};class wu{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=function(n){let i=null,r=0,s=0,a=null;const c=new Map;if(n==="")return c;n.charAt(n.length-1)!=";"&&(n+=";");for(let l=0;l<n.length;l++){const d=n.charAt(l);if(i===null)switch(d){case":":a||(a=n.substr(r,l-r),s=l+1);break;case'"':case"'":i=d;break;case";":{const u=n.substr(s,l-s);a&&c.set(a.trim(),u.trim()),a=null,r=l+1;break}}else d===i&&(i=null)}return c}(e);for(const[n,i]of t)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(Se(e))for(const[n,i]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Au(e);z1(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this.getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!Se(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this.getStylesEntries().map(([t])=>t)}clear(){this._styles={}}getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),i=Ao(this._styles,n);i&&!Object.keys(i).length&&this.remove(n)}}class F1{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(Se(t))_u(n,Au(e),t);else if(this._normalizers.has(e)){const i=this._normalizers.get(e),{path:r,value:s}=i(t);_u(n,r,s)}else _u(n,e,t)}getNormalized(e,t){if(!e)return lu({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return Ao(t,n);const i=n(e,t);if(i)return i}return Ao(t,Au(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=new Set;for(const n of this._consumables.keys()){const i=this.getNormalized(n,e);i&&(typeof i!="object"||Object.keys(i).length)&&t.add(n)}for(const n of Object.keys(e))t.add(n);return Array.from(t)}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function Au(o){return o.replace("-",".")}function _u(o,e,t){let n=t;Se(t)&&(n=lu({},Ao(o,e),t)),O1(o,e,n)}class xt extends Xn{constructor(e,t,n,i){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=function(r){const s=en(r);for(const[a,c]of s)c===null?s.delete(a):typeof c!="string"&&s.set(a,String(c));return s}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");vp(this._classes,r),this._attrs.delete("class")}this._styles=new wu(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof xt))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new nn(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const i of this.getChildren())t.push(i._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(r,s){return typeof s=="string"?[new Ee(r,s)]:(Ct(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new Ee(r,a):a instanceof tn?new Ee(r,a.data):a))}(this.document,t);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const n=String(t);this._fireChange("attributes",this),e=="class"?vp(this._classes,n):e=="style"?this._styles.setTo(n):this._attrs.set(e,n)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of ve(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of ve(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of ve(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function vp(o,e){const t=e.split(/\s+/);o.clear(),t.forEach(n=>o.add(n))}xt.prototype.is=function(o,e){return e?e===this.name&&(o==="element"||o==="view:element"):o==="element"||o==="view:element"||o==="node"||o==="view:node"};class _o extends xt{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=R1}}function R1(){const o=[...this.getChildren()],e=o[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of o)if(!t.is("uiElement"))return null;return this.childCount}_o.prototype.is=function(o,e){return e?e===this.name&&(o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Ia extends Ae(_o){constructor(e,t,n,i){super(e,t,n,i),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",r=>r&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}Ia.prototype.is=function(o,e){return e?e===this.name&&(o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const yp=Symbol("rootName");class xp extends Ia{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(yp)}set rootName(e){this._setCustomProperty(yp,e)}set _name(e){this.name=e}}xp.prototype.is=function(o,e){return e?e===this.name&&(o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class ei{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new B("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new B("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=Z._createAt(e.startPosition):this._position=Z._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,n;do n=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let i;if(n instanceof Ee){if(e.isAtEnd)return this._position=Z._createAfter(n),this._next();i=n.data[e.offset]}else i=n.getChild(e.offset);if(i instanceof xt){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e=new Z(i,0);return this._position=e,this._formatReturnValue("elementStart",i,t,e,1)}if(i instanceof Ee){if(this.singleCharacters)return e=new Z(i,0),this._position=e,this._next();let r,s=i.data.length;return i==this._boundaryEndParent?(s=this.boundaries.end.offset,r=new tn(i,0,s),e=Z._createAfter(r)):(r=new tn(i,0,i.data.length),e.offset++),this._position=e,this._formatReturnValue("text",r,t,e,s)}if(typeof i=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const s=new tn(n,e.offset,r);return e.offset+=r,this._position=e,this._formatReturnValue("text",s,t,e,r)}return e=Z._createAfter(n),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let i;if(n instanceof Ee){if(e.isAtStart)return this._position=Z._createBefore(n),this._previous();i=n.data[e.offset-1]}else i=n.getChild(e.offset-1);if(i instanceof xt)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",i,t,e,1)):(e=new Z(i,i.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,t,e));if(i instanceof Ee){if(this.singleCharacters)return e=new Z(i,i.data.length),this._position=e,this._previous();let r,s=i.data.length;if(i==this._boundaryStartParent){const a=this.boundaries.start.offset;r=new tn(i,a,i.data.length-a),s=r.data.length,e=Z._createBefore(r)}else r=new tn(i,0,i.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",r,t,e,s)}if(typeof i=="string"){let r;if(this.singleCharacters)r=1;else{const a=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=e.offset-a}e.offset-=r;const s=new tn(n,e.offset,r);return this._position=e,this._formatReturnValue("text",s,t,e,r)}return e=Z._createBefore(n),this._position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,i,r){return t instanceof tn&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=Z._createAfter(t.textNode):(i=Z._createAfter(t.textNode),this._position=i)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=Z._createBefore(t.textNode):(i=Z._createBefore(t.textNode),this._position=i))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:i,length:r}}}}class Z extends Jn{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Ia);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=Z._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new ei(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let i=0;for(;t[i]==n[i]&&t[i];)i++;return i===0?null:t[i-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const i=st(t,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return t[i]<n[i]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new ei(e)}clone(){return new Z(this.parent,this.offset)}static _createAt(e,t){if(e instanceof Z)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new B("view-createpositionat-offset-required",n)}return new Z(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new Z(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new B("view-position-after-root",e,{root:e});return new Z(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new Z(e.textNode,e.offsetInText);if(!e.parent)throw new B("view-position-before-root",e,{root:e});return new Z(e.parent,e.index)}}Z.prototype.is=function(o){return o==="position"||o==="view:position"};class oe extends Jn{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new ei({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Sa,{direction:"backward"}),t=this.end.getLastMatchingPosition(Sa);return e.parent.is("$text")&&e.isAtStart&&(e=Z._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=Z._createAfter(t.parent)),new oe(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Sa);if(e.isAfter(this.end)||e.isEqual(this.end))return new oe(e,e);let t=this.end.getLastMatchingPosition(Sa,{direction:"backward"});const n=e.nodeAfter,i=t.nodeBefore;return n&&n.is("$text")&&(e=new Z(n,0)),i&&i.is("$text")&&(t=new Z(i,i.data.length)),new oe(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),i=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&i}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new oe(this.start,e.start)),this.containsPosition(e.end)&&t.push(new oe(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new oe(t,n)}return null}getWalker(e={}){return e.boundaries=this,new ei(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new oe(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new ei(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new ei(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,i){return new this(new Z(e,t),new Z(n,i))}static _createFromPositionAndShift(e,t){const n=e,i=e.getShiftedBy(t);return t>0?new this(n,i):new this(i,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(Z._createBefore(e),t)}}function Sa(o){return!(!o.item.is("attributeElement")&&!o.item.is("uiElement"))}oe.prototype.is=function(o){return o==="range"||o==="view:range"};class Gt extends Ce(Jn){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const i of e._ranges)if(t.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Vd(this.getRanges());if(t!=Vd(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let r of e.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,i]=e;if(typeof n=="object"&&(i=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(i);else if(t instanceof Gt||t instanceof Cu)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof oe)this._setRanges([t],i&&i.backward),this._setFakeOptions(i);else if(t instanceof Z)this._setRanges([new oe(t)]),this._setFakeOptions(i);else if(t instanceof Xn){const r=!!i&&!!i.backward;let s;if(n===void 0)throw new B("view-selection-setto-required-second-parameter",this);s=n=="in"?oe._createIn(t):n=="on"?oe._createOn(t):new oe(Z._createAt(t,n)),this._setRanges([s],r),this._setFakeOptions(i)}else{if(!Ct(t))throw new B("view-selection-setto-not-selectable",this);this._setRanges(t,i&&i.backward),this._setFakeOptions(i)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new B("view-selection-setfocus-no-ranges",this);const n=Z._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new oe(n,i),!0):this._addRange(new oe(i,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof oe))throw new B("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new B("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new oe(e.start,e.end))}}Gt.prototype.is=function(o){return o==="selection"||o==="view:selection"};class Cu extends Ce(Jn){constructor(...e){super(),this._selection=new Gt,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}Cu.prototype.is=function(o){return o==="selection"||o=="documentSelection"||o=="view:selection"||o=="view:documentSelection"};class Ti extends Qe{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const vu=Symbol("bubbling contexts");function yu(o){return class extends o{fire(e,...t){try{const n=e instanceof Qe?e:new Qe(this,e),i=xu(this);if(!i.size)return;if(Co(n,"capturing",this),Mi(i,"$capture",n,...t))return n.return;const r=n.startRange||this.selection.getFirstRange(),s=r?r.getContainedElement():null,a=!!s&&!!Ep(i,s);let c=s||function(l){if(!l)return null;const d=l.start.parent,u=l.end.parent,h=d.getPath(),g=u.getPath();return h.length>g.length?d:u}(r);if(Co(n,"atTarget",c),!a){if(Mi(i,"$text",n,...t))return n.return;Co(n,"bubbling",c)}for(;c;){if(c.is("rootElement")){if(Mi(i,"$root",n,...t))return n.return}else if(c.is("element")&&Mi(i,c.name,n,...t))return n.return;if(Mi(i,c,n,...t))return n.return;c=c.parent,Co(n,"bubbling",c)}return Co(n,"bubbling",this),Mi(i,"$document",n,...t),n.return}catch(n){B.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const i=ve(n.context||"$document"),r=xu(this);for(const s of i){let a=r.get(s);a||(a=new(Ce()),r.set(s,a)),this.listenTo(a,e,t,n)}}_removeEventListener(e,t){const n=xu(this);for(const i of n.values())this.stopListening(i,e,t)}}}{const o=yu(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{yu[e]=o.prototype[e]})}function Co(o,e,t){o instanceof Ti&&(o._eventPhase=e,o._currentTarget=t)}function Mi(o,e,t,...n){const i=typeof e=="string"?o.get(e):Ep(o,e);return!!i&&(i.fire(t,...n),t.stop.called)}function Ep(o,e){for(const[t,n]of o)if(typeof t=="function"&&t(e))return n;return null}function xu(o){return o[vu]||(o[vu]=new Map),o[vu]}class Ta extends yu(Ae()){constructor(e){super(),this._postFixers=new Set,this.selection=new Cu,this.roots=new lt({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.forEach(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}const pm=class pm extends xt{constructor(e,t,n,i){super(e,t,n,i),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=V1}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new B("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}};pm.DEFAULT_PRIORITY=10;let Mn=pm;function V1(){if(Eu(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(Eu(o)>1)return null;o=o.parent}return!o||Eu(o)>1?null:this.childCount}function Eu(o){return Array.from(o.getChildren()).filter(e=>!e.is("uiElement")).length}Mn.prototype.is=function(o,e){return e?e===this.name&&(o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"):o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Du extends xt{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=j1}_insertChild(e,t){if(t&&(t instanceof Xn||Array.from(t).length>0))throw new B("view-emptyelement-cannot-add",[this,t]);return 0}}function j1(){return null}Du.prototype.is=function(o,e){return e?e===this.name&&(o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"):o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Ma extends xt{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=U1}_insertChild(e,t){if(t&&(t instanceof Xn||Array.from(t).length>0))throw new B("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function H1(o){o.document.on("arrowKey",(e,t)=>function(n,i,r){if(i.keyCode==pe.arrowright){const s=i.domTarget.ownerDocument.defaultView.getSelection(),a=s.rangeCount==1&&s.getRangeAt(0).collapsed;if(a||i.shiftKey){const c=s.focusNode,l=s.focusOffset,d=r.domPositionToView(c,l);if(d===null)return;let u=!1;const h=d.getLastMatchingPosition(g=>(g.item.is("uiElement")&&(u=!0),!(!g.item.is("uiElement")&&!g.item.is("attributeElement"))));if(u){const g=r.viewPositionToDom(h);a?s.collapse(g.parent,g.offset):s.extend(g.parent,g.offset)}}}}(0,t,o.domConverter),{priority:"low"})}function U1(){return null}Ma.prototype.is=function(o,e){return e?e===this.name&&(o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"):o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Iu extends xt{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=q1}_insertChild(e,t){if(t&&(t instanceof Xn||Array.from(t).length>0))throw new B("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}function q1(){return null}Iu.prototype.is=function(o,e){return e?e===this.name&&(o==="rawElement"||o==="view:rawElement"||o==="element"||o==="view:element"):o==="rawElement"||o==="view:rawElement"||o===this.name||o==="view:"+this.name||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class ti extends Ce(Jn){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(r,s){return typeof s=="string"?[new Ee(r,s)]:(Ct(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new Ee(r,a):a instanceof tn?new Ee(r,a.data):a))}(this.document,t);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}ti.prototype.is=function(o){return o==="documentFragment"||o==="view:documentFragment"};class Dp{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new ti(this.document,e)}createText(e){return new Ee(this.document,e)}createAttributeElement(e,t,n={}){const i=new Mn(this.document,e,t);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(e,t,n={},i={}){let r=null;vt(n)?i=n:r=n;const s=new _o(this.document,e,t,r);return i.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),s}createEditableElement(e,t,n={}){const i=new Ia(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(e,t,n={}){const i=new Du(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(e,t,n){const i=new Ma(this.document,e,t);return n&&(i.render=n),i}createRawElement(e,t,n,i={}){const r=new Iu(this.document,e,t);return n&&(r.render=n),i.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),r}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){vt(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof Z?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new B("view-writer-break-non-container-element",this.document);if(!t.parent)throw new B("view-writer-break-root",this.document);if(e.isAtStart)return Z._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(Z._createAfter(t),n);const i=new oe(e,Z._createAt(t,"end")),r=new Z(n,0);this.move(i,r)}return Z._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const s=n.parent,a=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new Z(s,a))}const i=n.getChild(t-1),r=n.getChild(t);if(!i||!r)return e;if(i.is("$text")&&r.is("$text"))return Sp(i,r);if(i.is("attributeElement")&&r.is("attributeElement")&&i.isSimilar(r)){const s=i.childCount;return i._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new Z(i,s))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new B("view-writer-merge-containers-invalid-position",this.document);const i=t.getChild(t.childCount-1),r=i instanceof Ee?Z._createAt(i,"end"):Z._createAt(t,"end");return this.move(oe._createIn(n),Z._createAt(t,"end")),this.remove(oe._createOn(n)),r}insert(e,t){Tp(t=Ct(t)?[...t]:[t],this.document);const n=t.reduce((s,a)=>{const c=s[s.length-1],l=!a.is("uiElement");return c&&c.breakAttributes==l?c.nodes.push(a):s.push({breakAttributes:l,nodes:[a]}),s},[]);let i=null,r=e;for(const{nodes:s,breakAttributes:a}of n){const c=this._insertNodes(r,s,a);i||(i=c.start),r=c.end}return i?new oe(i,r):new oe(e)}remove(e){const t=e instanceof oe?e:oe._createOn(e);if(vo(t,this.document),t.isCollapsed)return new ti(this.document);const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,s=i.offset-n.offset,a=r._removeChildren(n.offset,s);for(const l of a)this._removeFromClonedElementsGroup(l);const c=this.mergeAttributes(n);return t.start=c,t.end=c.clone(),new ti(this.document,a)}clear(e,t){vo(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const r=i.item;let s;if(r.is("element")&&t.isSimilar(r))s=oe._createOn(r);else if(!i.nextPosition.isAfter(e.start)&&r.is("$textProxy")){const a=r.getAncestors().find(c=>c.is("element")&&t.isSimilar(c));a&&(s=oe._createIn(a))}s&&(s.end.isAfter(e.end)&&(s.end=e.end),s.start.isBefore(e.start)&&(s.start=e.start),this.remove(s))}}move(e,t){let n;if(t.isAfter(e.end)){const i=(t=this._breakAttributes(t,!0)).parent,r=i.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=i.childCount-r}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof Mn))throw new B("view-writer-wrap-invalid-attribute",this.document);if(vo(e,this.document),e.isCollapsed){let i=e.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(s=>!s.is("uiElement")))&&(i=i.getLastMatchingPosition(s=>s.item.is("uiElement"))),i=this._wrapPosition(i,t);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(e.start)&&this.setSelection(i),new oe(i)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof Mn))throw new B("view-writer-unwrap-invalid-attribute",this.document);if(vo(e,this.document),e.isCollapsed)return e;const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,s=this._unwrapChildren(r,n.offset,i.offset,t),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new oe(a,c)}rename(e,t){const n=new _o(this.document,e,t.getAttributes());return this.insert(Z._createAfter(t),n),this.move(oe._createIn(t),Z._createAt(n,0)),this.remove(oe._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return Z._createAt(e,t)}createPositionAfter(e){return Z._createAfter(e)}createPositionBefore(e){return Z._createBefore(e)}createRange(e,t){return new oe(e,t)}createRangeOn(e){return oe._createOn(e)}createRangeIn(e){return oe._createIn(e)}createSelection(...e){return new Gt(...e)}createSlot(e="children"){if(!this._slotFactory)throw new B("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let i,r;if(i=n?Su(e):e.parent.is("$text")?e.parent.parent:e.parent,!i)throw new B("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(e,!0):e.parent.is("$text")?Tu(e):e;const s=i._insertChild(r.offset,t);for(const d of t)this._addToClonedElementsGroup(d);const a=r.getShiftedBy(s),c=this.mergeAttributes(r);c.isEqual(r)||a.offset--;const l=this.mergeAttributes(a);return new oe(c,l)}_wrapChildren(e,t,n,i){let r=t;const s=[];for(;r<n;){const c=e.getChild(r),l=c.is("$text"),d=c.is("attributeElement");if(d&&this._wrapAttributeElement(i,c))s.push(new Z(e,r));else if(l||!d||G1(i,c)){const u=i._clone();c._remove(),u._appendChild(c),e._insertChild(r,u),this._addToClonedElementsGroup(u),s.push(new Z(e,r))}else this._wrapChildren(c,0,c.childCount,i);r++}let a=0;for(const c of s)c.offset-=a,c.offset!=t&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return oe._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,i){let r=t;const s=[];for(;r<n;){const c=e.getChild(r);if(c.is("attributeElement"))if(c.isSimilar(i)){const l=c.getChildren(),d=c.childCount;c._remove(),e._insertChild(r,l),this._removeFromClonedElementsGroup(c),s.push(new Z(e,r),new Z(e,r+d)),r+=d,n+=d-1}else this._unwrapAttributeElement(i,c)?(s.push(new Z(e,r),new Z(e,r+1)),r++):(this._unwrapChildren(c,0,c.childCount,i),r++);else r++}let a=0;for(const c of s)c.offset-=a,!(c.offset==t||c.offset==n)&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return oe._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,s=this._wrapChildren(r,n.offset,i.offset,t),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new oe(a,c)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return Ip(e.clone());e.parent.is("$text")&&(e=Tu(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const i=new oe(e,e.getShiftedBy(1));this.wrap(i,t);const r=new Z(n.parent,n.index);n._remove();const s=r.nodeBefore,a=r.nodeAfter;return s instanceof Ee&&a instanceof Ee?Sp(s,a):Ip(r)}_wrapAttributeElement(e,t){if(!Mp(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!Mp(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,i=e.end;if(vo(e,this.document),e.isCollapsed){const c=this._breakAttributes(e.start,t);return new oe(c,c)}const r=this._breakAttributes(i,t),s=r.parent.childCount,a=this._breakAttributes(n,t);return r.offset+=r.parent.childCount-s,new oe(a,r)}_breakAttributes(e,t=!1){const n=e.offset,i=e.parent;if(e.parent.is("emptyElement"))throw new B("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new B("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new B("view-writer-cannot-break-raw-element",this.document);if(!t&&i.is("$text")&&Mu(i.parent)||Mu(i))return e.clone();if(i.is("$text"))return this._breakAttributes(Tu(e),t);if(n==i.childCount){const r=new Z(i.parent,i.index+1);return this._breakAttributes(r,t)}if(n===0){const r=new Z(i.parent,i.index);return this._breakAttributes(r,t)}{const r=i.index+1,s=i._clone();i.parent._insertChild(r,s),this._addToClonedElementsGroup(s);const a=i.childCount-n,c=i._removeChildren(n,a);s._appendChild(c);const l=new Z(i.parent,r);return this._breakAttributes(l,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const i of e.getChildren())this._addToClonedElementsGroup(i);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const i of e.getChildren())this._removeFromClonedElementsGroup(i);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function Su(o){let e=o.parent;for(;!Mu(e);){if(!e)return;e=e.parent}return e}function G1(o,e){return o.priority<e.priority||!(o.priority>e.priority)&&o.getIdentity()<e.getIdentity()}function Ip(o){const e=o.nodeBefore;if(e&&e.is("$text"))return new Z(e,e.data.length);const t=o.nodeAfter;return t&&t.is("$text")?new Z(t,0):o}function Tu(o){if(o.offset==o.parent.data.length)return new Z(o.parent.parent,o.parent.index+1);if(o.offset===0)return new Z(o.parent.parent,o.parent.index);const e=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new Ee(o.root.document,e)),new Z(o.parent.parent,o.parent.index+1)}function Sp(o,e){const t=o.data.length;return o._data+=e.data,e._remove(),new Z(o,t)}const W1=[Ee,Mn,_o,Du,Iu,Ma];function Tp(o,e){for(const t of o){if(!W1.some(n=>t instanceof n))throw new B("view-writer-insert-invalid-node-type",e);t.is("$text")||Tp(t.getChildren(),e)}}function Mu(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function vo(o,e){const t=Su(o.start),n=Su(o.end);if(!t||!n||t!==n)throw new B("view-writer-invalid-range-container",e)}function Mp(o,e){return o.id===null&&e.id===null}const Bp=o=>o.createTextNode(" "),Np=o=>{const e=o.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},Pp=o=>{const e=o.createElement("br");return e.dataset.ckeFiller="true",e},yo="⁠".repeat(7);function Et(o){return typeof o=="string"?o.substr(0,7)===yo:Oe(o)&&o.data.substr(0,7)===yo}function Bi(o){return o.data.length==7&&Et(o)}function zp(o){const e=typeof o=="string"?o:o.data;return Et(o)?e.slice(7):e}function $1(o,e){if(e.keyCode==pe.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,i=t.getRangeAt(0).startOffset;Et(n)&&i<=7&&t.collapse(n,0)}}}var Ba=S(8264),xo={attributes:{"data-cke":!0}};xo.setAttributes=K(),xo.insert=$().bind(null,"head"),xo.domAPI=W(),xo.insertStyleElement=Y(),G()(Ba.A,xo),Ba.A&&Ba.A.locals&&Ba.A.locals;class K1 extends Ae(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),I.isBlink&&!I.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new B("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!I.isAndroid)return;let e=null;const t=!(I.isBlink&&!I.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=Z._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),i=n.parent.ownerDocument;Et(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Lp(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.childNodes),i=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),r=this._diffNodeLists(n,i),s=this._findUpdateActions(r,n,i,Y1);if(s.indexOf("update")!==-1){const a={equal:0,insert:0,delete:0};for(const c of s)if(c==="update"){const l=a.equal+a.insert,d=a.equal+a.delete,u=e.getChild(l);!u||u.is("uiElement")||u.is("rawElement")||this._updateElementMappings(u,n[d]),Wg(i[l]),a.equal++}else a[c]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?Z._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&Oe(t.parent)&&Et(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Et(e))throw new B("view-renderer-filler-was-lost",this);Bi(e)?e.remove():e.data=e.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(s){if(s.getAttribute("contenteditable")=="false")return!1;const a=s.findAncestor(c=>c.hasAttribute("contenteditable"));return!a||a.getAttribute("contenteditable")=="true"}(t))return!1;const i=e.nodeBefore,r=e.nodeAfter;return!(i instanceof Ee||r instanceof Ee)&&!!(n!==t.getFillerOffset()||i&&i.is("element","br"))&&(!I.isAndroid||!i&&!r)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let i=this.domConverter.viewToDom(e).data;const r=t.inlineFillerPosition;r&&r.parent==e.parent&&r.offset==e.index&&(i=yo+i),this._updateTextNode(n,i)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(t){for(const n of t.attributes){const i=n.name;e.hasAttribute(i)||this.domConverter.removeDomElementAttribute(t,i)}for(const n of e.getAttributeKeys())this.domConverter.setDomElementAttribute(t,n,e.getAttribute(n),e)}}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(I.isAndroid){let u=null;for(const h of Array.from(n.childNodes)){if(u&&Oe(u)&&Oe(h)){n.normalize();break}u=h}}const i=t.inlineFillerPosition,r=n.childNodes,s=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));i&&i.parent===e&&Lp(n.ownerDocument,s,i.offset);const a=this._diffNodeLists(r,s),c=this._findUpdateActions(a,r,s,Q1);let l=0;const d=new Set;for(const u of c)u==="delete"?(d.add(r[l]),Wg(r[l])):u!=="equal"&&u!=="update"||l++;l=0;for(const u of c)u==="insert"?(Ug(n,l,s[l]),l++):u==="update"?(this._updateTextNode(r[l],s[l].data),l++):u==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(s[l])),l++);for(const u of d)u.parentNode||this.domConverter.unbindDomElement(u)}_diffNodeLists(e,t){return e=function(n,i){const r=Array.from(n);return r.length==0||!i||r[r.length-1]==i&&r.pop(),r}(e,this._fakeSelectionContainer),me(e,t,Z1.bind(null,this.domConverter))}_findUpdateActions(e,t,n,i){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let r=[],s=[],a=[];const c={equal:0,insert:0,delete:0};for(const l of e)l==="insert"?a.push(n[c.equal+c.insert]):l==="delete"?s.push(t[c.equal+c.delete]):(r=r.concat(me(s,a,i).map(d=>d==="equal"?"update":d)),r.push("equal"),s=[],a=[]),c[l]++;return r.concat(me(s,a,i).map(l=>l==="equal"?"update":l))}_updateTextNode(e,t){const n=e.data;n!=t&&(I.isAndroid&&this.isComposing&&n.replace(/\u00A0/g," ")==t.replace(/\u00A0/g," ")||this._updateTextNodeInternal(e,t))}_updateTextNodeInternal(e,t){const n=q(e.data,t);for(const i of n)i.type==="insert"?e.insertData(i.index,i.values.join("")):e.deleteData(i.index,i.howMany)}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(I.isBlink&&!I.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&I.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(s){const a=s.createElement("div");return a.className="ck-fake-selection-container",Object.assign(a.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),a.textContent=" ",a}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=t.getSelection(),r=t.createRange();i.removeAllRanges(),r.selectNodeContents(n),i.addRange(r)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);t.setBaseAndExtent(n.parent,n.offset,i.parent,i.offset),I.isGecko&&function(r,s){let a=r.parent,c=r.offset;if(Oe(a)&&Bi(a)&&(c=ko(a)+1,a=a.parentNode),a.nodeType!=Node.ELEMENT_NODE||c!=a.childNodes.length-1)return;const l=a.childNodes[c];l&&l.tagName=="BR"&&s.addRange(s.getRangeAt(0))}(i,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,i=this.domConverter.mapDomToView(n);n&&i&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Lp(o,e,t){const n=e instanceof Array?e:e.childNodes,i=n[t];if(Oe(i))return i.data=yo+i.data,i;{const r=o.createTextNode(yo);return Array.isArray(e)?n.splice(t,0,r):Ug(e,t,r),r}}function Y1(o,e){return Sn(o)&&Sn(e)&&!Oe(o)&&!Oe(e)&&!bo(o)&&!bo(e)&&o.tagName.toLowerCase()===e.tagName.toLowerCase()}function Q1(o,e){return Sn(o)&&Sn(e)&&Oe(o)&&Oe(e)}function Z1(o,e,t){return e===t||(Oe(e)&&Oe(t)?e.data===t.data:!(!o.isBlockFiller(e)||!o.isBlockFiller(t)))}const J1=Pp(w.document),X1=Bp(w.document),ev=Np(w.document),Na="data-ck-unsafe-attribute-",Op="data-ck-unsafe-element";class Pa{constructor(e,{blockFillerMode:t,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new nn,this._inlineObjectElementMatcher=new nn,this._elementsWithTemporaryCustomProperties=new Set,this.document=e,this.renderingMode=n,this.blockFillerMode=t||(n==="editing"?"br":"nbsp"),this.preElements=["pre","textarea"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?w.document:w.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Gt(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of e.children)this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),i=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)i.appendChild(r[0]);const s=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),a=[];let c;for(;c=s.nextNode();)a.push(c);for(const l of a){for(const u of l.getAttributeNames())this.setDomElementAttribute(l,u,l.getAttribute(u));const d=l.tagName.toLowerCase();this._shouldRenameElement(d)&&(Vp(d),l.replaceWith(this._createReplacementDomElement(d,l)))}for(;e.firstChild;)e.firstChild.remove();e.append(i)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{const n=e;if(this.mapViewToDom(n)){if(!n.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(n);this._elementsWithTemporaryCustomProperties.add(n)}let i;if(n.is("documentFragment"))i=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(i,n);else{if(n.is("uiElement"))return i=n.name==="$comment"?this._domDocument.createComment(n.getCustomProperty("$rawContent")):n.render(this._domDocument,this),t.bind&&this.bindElements(i,n),i;this._shouldRenameElement(n.name)?(Vp(n.name),i=this._createReplacementDomElement(n.name)):i=n.hasAttribute("xmlns")?this._domDocument.createElementNS(n.getAttribute("xmlns"),n.name):this._domDocument.createElement(n.name),n.is("rawElement")&&n.render(i,this),t.bind&&this.bindElements(i,n);for(const r of n.getAttributeKeys())this.setDomElementAttribute(i,r,n.getAttribute(r),n)}if(t.withChildren!==!1)for(const r of this.viewChildrenToDom(n,t))i instanceof HTMLTemplateElement?i.content.appendChild(r):i.appendChild(r);return i}}setDomElementAttribute(e,t,n,i){const r=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(t);r||de("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),function(s){try{w.document.createAttribute(s)}catch{return!1}return!0}(t)?(e.hasAttribute(t)&&!r?e.removeAttribute(t):e.hasAttribute(Na+t)&&r&&e.removeAttribute(Na+t),e.setAttribute(r?t:Na+t,n)):de("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:n})}removeDomElementAttribute(e,t){t!=Op&&(e.removeAttribute(t),e.removeAttribute(Na+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let i=0;for(const r of e.getChildren()){n===i&&(yield this._getBlockFiller());const s=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!Fe(r.getAttributes());if(s&&this.renderingMode=="data")if(r.is("rawElement")){const a=this._domDocument.createElement(r.name);r.render(a,this),yield*[...a.childNodes]}else yield*this.viewChildrenToDom(r,t);else s&&de("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,t);i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),i=this._domDocument.createRange();return i.setStart(t.parent,t.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let i=e.offset;return Et(n)&&(i+=7),{parent:n,offset:i}}{let n,i,r;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;r=n.childNodes[0]}else{const s=e.nodeBefore;if(i=s.is("$text")?this.findCorrespondingDomText(s):this.mapViewToDom(s),!i)return null;n=i.parentNode,r=i.nextSibling}return Oe(r)&&Et(r)?{parent:r,offset:7}:{parent:n,offset:i?ko(i)+1:0}}}domToView(e,t={}){const n=[],i=this._domToView(e,t,n),r=i.next().value;return r?(i.next(),this._processDomInlineNodes(null,n,t),r.is("$text")&&r.data.length==0?null:r):null}*domChildrenToView(e,t={},n=[]){let i=[];i=e instanceof HTMLTemplateElement?[...e.content.childNodes]:[...e.childNodes];for(let r=0;r<i.length;r++){const s=i[r],a=this._domToView(s,t,n),c=a.next().value;c!==null&&(this._isBlockViewElement(c)&&this._processDomInlineNodes(e,n,t),yield c,a.next())}this._processDomInlineNodes(e,n,t)}domSelectionToView(e){if(function(i){if(!I.isGecko||!i.rangeCount)return!1;const r=i.getRangeAt(0).startContainer;try{Object.prototype.toString.call(r)}catch{return!0}return!1}(e))return new Gt([]);if(e.rangeCount===1){let i=e.getRangeAt(0).startContainer;Oe(i)&&(i=i.parentNode);const r=this.fakeSelectionToView(i);if(r)return r}const t=this.isDomSelectionBackward(e),n=[];for(let i=0;i<e.rangeCount;i++){const r=e.getRangeAt(i),s=this.domRangeToView(r);s&&n.push(s)}return new Gt(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new oe(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,ko(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return Z._createBefore(n);if(Oe(e)){if(Bi(e))return this.domPositionToView(e.parentNode,ko(e));const i=this.findCorrespondingViewText(e);let r=t;return i?(Et(e)&&(r-=7,r=r<0?0:r),new Z(i,r)):null}if(t===0){const i=this.mapDomToView(e);if(i)return new Z(i,0)}else{const i=e.childNodes[t-1];if(Oe(i)&&Bi(i)||i&&this.isBlockFiller(i))return this.domPositionToView(i.parentNode,ko(i));const r=Oe(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(r&&r.parent)return new Z(r.parent,r.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Bi(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i){const r=i.nextSibling;return r instanceof Ee?r:null}}else{const i=this.mapDomToView(e.parentNode);if(i){const r=i.getChild(0);return r instanceof Ee?r:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:i}=w.window,r=[];Fp(t,s=>{const{scrollLeft:a,scrollTop:c}=s;r.push([a,c])}),t.focus(),Fp(t,s=>{const[a,c]=r.shift();s.scrollLeft=a,s.scrollTop=c}),w.window.scrollTo(n,i)}}_clearDomSelection(){const e=this.mapViewToDom(this.document.selection.editableElement);if(!e)return;const t=e.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(t);n&&n.rangeCount>0&&t.removeAllRanges()}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(J1):!(e.tagName!=="BR"||!Rp(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(ev)||function(t,n){return t.isEqualNode(X1)&&Rp(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=UC(e);for(t.pop();t.length;){const n=t.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}registerInlineObjectMatcher(e){this._inlineObjectElementMatcher.add(e)}_clearTemporaryCustomProperties(){for(const e of this._elementsWithTemporaryCustomProperties)e._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Bp(this._domDocument);case"markedNbsp":return Np(this._domDocument);case"br":return Pp(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(Oe(e)&&Et(e)&&t<7||this.isElement(e)&&Et(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(e,t,n){if(this.isBlockFiller(e))return null;const i=this.getHostViewElement(e);if(i)return i;if(bo(e)&&t.skipComments)return null;if(Oe(e)){if(Bi(e))return null;{const r=e.data;if(r==="")return null;const s=new Ee(this.document,r);return n.push(s),s}}{let r=this.mapDomToView(e);if(r)return this._isInlineObjectElement(r)&&n.push(r),r;if(this.isDocumentFragment(e))r=new ti(this.document),t.bind&&this.bindDocumentFragments(e,r);else{r=this._createViewElement(e,t),t.bind&&this.bindElements(e,r);const a=e.attributes;if(a)for(let c=a.length,l=0;l<c;l++)r._setAttribute(a[l].name,a[l].value);if(this._isViewElementWithRawContent(r,t))return r._setCustomProperty("$rawContent",e.innerHTML),this._isBlockViewElement(r)||n.push(r),r;if(bo(e))return r._setCustomProperty("$rawContent",e.data),r}yield r;const s=[];if(t.withChildren!==!1)for(const a of this.domChildrenToView(e,t,s))r._appendChild(a);if(this._isInlineObjectElement(r))n.push(r),this._processDomInlineNodes(null,s,t);else for(const a of s)n.push(a)}}_processDomInlineNodes(e,t,n){if(!t.length||e&&!this.isDocumentFragment(e)&&!this._isBlockDomElement(e))return;let i=!1;for(let r=0;r<t.length;r++){const s=t[r];if(!s.is("$text")){i=!1;continue}let a,c=!1;if(this._isPreFormatted(s))a=zp(s.data);else{a=s.data.replace(/[ \n\t\r]{1,}/g," "),c=/[^\S\u00A0]/.test(a.charAt(a.length-1));const l=r>0?t[r-1]:null,d=r+1<t.length?t[r+1]:null,u=!l||l.is("element")&&l.name=="br"||i,h=!d&&!Et(s.data);n.withChildren!==!1&&(u&&(a=a.replace(/^ /,"")),h&&(a=a.replace(/ $/,""))),a=zp(a),a=a.replace(/ \u00A0/g,"  ");const g=d&&d.is("element")&&d.name!="br",p=d&&d.is("$text")&&d.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(a)||!d||g||p)&&(a=a.replace(/\u00A0$/," ")),(u||l&&l.is("element")&&l.name!="br")&&(a=a.replace(/^\u00A0/," "))}a.length==0&&s.parent?(s._remove(),t.splice(r,1),r--):(s._data=a,i=c)}t.length=0}_processDataFromViewText(e){let t=e.data;if(this._isPreFormatted(e))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!i||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(this._isPreFormatted(e))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_isPreFormatted(e){if(function(t,n){return t.getAncestors().some(i=>i.is("element")&&n.includes(i.name))}(e,this.preElements))return!0;for(const t of e.getAncestors({parentFirst:!0}))if(t.is("element")&&t.hasStyle("white-space")&&t.getStyle("white-space")!=="inherit")return["pre","pre-wrap","break-spaces"].includes(t.getStyle("white-space"));return!1}_getTouchingInlineViewNode(e,t){const n=new ei({startPosition:t?Z._createAfter(e):Z._createBefore(e),direction:t?"forward":"backward"});for(const{item:i}of n){if(i.is("$textProxy"))return i;if(!i.is("element")||!i.getCustomProperty("dataPipeline:transparentRendering")){if(i.is("element","br"))return null;if(this._isInlineObjectElement(i))return i;if(i.is("containerElement"))return null}}return null}_isBlockDomElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isBlockViewElement(e){return e.is("element")&&this.blockElements.includes(e.name)}_isInlineObjectElement(e){return!!e.is("element")&&(e.name=="br"||this.inlineObjectElements.includes(e.name)||!!this._inlineObjectElementMatcher.match(e))}_createViewElement(e,t){if(bo(e))return new Ma(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new xt(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&e.is("element")&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(Op,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const i of t.getAttributeNames())n.setAttribute(i,t.getAttribute(i))}return n}}function Fp(o,e){let t=o;for(;t;)e(t),t=t.parentElement}function Rp(o,e){const t=o.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function Vp(o){o==="script"&&de("domconverter-unsafe-script-element-detected"),o==="style"&&de("domconverter-unsafe-style-element-detected")}class on extends yt(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const jp=np(function(o,e){yi(e,Di(e),o)});class Ni{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,jp(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Bn extends on{constructor(){super(...arguments),this.useCapture=!1,this.usePassive=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture,usePassive:this.usePassive})})}stopObserving(e){this.stopListening(e)}fire(e,t,n){this.isEnabled&&this.document.fire(e,new Ni(this.view,t,n))}}class tv extends Bn{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Ii(this)}};this.fire(e.type,e,t)}}const Bu=function(){return qt.Date.now()};var nv=/\s/;const iv=function(o){for(var e=o.length;e--&&nv.test(o.charAt(e)););return e};var ov=/^\s+/;const rv=function(o){return o&&o.slice(0,iv(o)+1).replace(ov,"")};var sv=/^[-+]0x[0-9a-f]+$/i,av=/^0b[01]+$/i,cv=/^0o[0-7]+$/i,lv=parseInt;const Hp=function(o){if(typeof o=="number")return o;if(Ea(o))return NaN;if(Se(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=Se(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=rv(o);var t=av.test(o);return t||cv.test(o)?lv(o.slice(2),t?2:8):sv.test(o)?NaN:+o};var dv=Math.max,uv=Math.min;const Nn=function(o,e,t){var n,i,r,s,a,c,l=0,d=!1,u=!1,h=!0;if(typeof o!="function")throw new TypeError("Expected a function");function g(N){var L=n,j=i;return n=i=void 0,l=N,s=o.apply(j,L)}function p(N){var L=N-c;return c===void 0||L>=e||L<0||u&&N-l>=r}function k(){var N=Bu();if(p(N))return C(N);a=setTimeout(k,function(L){var j=e-(L-c);return u?uv(j,r-(L-l)):j}(N))}function C(N){return a=void 0,h&&n?g(N):(n=i=void 0,s)}function T(){var N=Bu(),L=p(N);if(n=arguments,i=this,c=N,L){if(a===void 0)return function(j){return l=j,a=setTimeout(k,e),d?g(j):s}(c);if(u)return clearTimeout(a),a=setTimeout(k,e),g(c)}return a===void 0&&(a=setTimeout(k,e)),s}return e=Hp(e)||0,Se(t)&&(d=!!t.leading,r=(u="maxWait"in t)?dv(Hp(t.maxWait)||0,e):r,h="trailing"in t?!!t.trailing:h),T.cancel=function(){a!==void 0&&clearTimeout(a),l=0,n=c=i=a=void 0},T.flush=function(){return a===void 0?s:C(Bu())},T};class hv extends on{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=Nn(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Gt(t.getRanges(),{backward:t.isBackward,fake:!1});e!=pe.arrowleft&&e!=pe.arrowup||n.setTo(n.getFirstPosition()),e!=pe.arrowright&&e!=pe.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}const mv=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this},gv=function(o){return this.__data__.has(o)};function za(o){var e=-1,t=o==null?0:o.length;for(this.__data__=new ha;++e<t;)this.add(o[e])}za.prototype.add=za.prototype.push=mv,za.prototype.has=gv;const pv=za,fv=function(o,e){for(var t=-1,n=o==null?0:o.length;++t<n;)if(e(o[t],t,o))return!0;return!1},kv=function(o,e){return o.has(e)},Up=function(o,e,t,n,i,r){var s=1&t,a=o.length,c=e.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(o),d=r.get(e);if(l&&d)return l==e&&d==o;var u=-1,h=!0,g=2&t?new pv:void 0;for(r.set(o,e),r.set(e,o);++u<a;){var p=o[u],k=e[u];if(n)var C=s?n(k,p,u,e,o,r):n(p,k,u,o,e,r);if(C!==void 0){if(C)continue;h=!1;break}if(g){if(!fv(e,function(T,N){if(!kv(g,N)&&(p===T||i(p,T,t,n,r)))return g.push(N)})){h=!1;break}}else if(p!==k&&!i(p,k,t,n,r)){h=!1;break}}return r.delete(o),r.delete(e),h},bv=function(o){var e=-1,t=Array(o.size);return o.forEach(function(n,i){t[++e]=[i,n]}),t},wv=function(o){var e=-1,t=Array(o.size);return o.forEach(function(n){t[++e]=n}),t};var qp=Xt?Xt.prototype:void 0,Nu=qp?qp.valueOf:void 0;const Av=function(o,e,t,n,i,r,s){switch(t){case"[object DataView]":if(o.byteLength!=e.byteLength||o.byteOffset!=e.byteOffset)return!1;o=o.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(o.byteLength!=e.byteLength||!r(new ka(o),new ka(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return so(+o,+e);case"[object Error]":return o.name==e.name&&o.message==e.message;case"[object RegExp]":case"[object String]":return o==e+"";case"[object Map]":var a=bv;case"[object Set]":var c=1&n;if(a||(a=wv),o.size!=e.size&&!c)return!1;var l=s.get(o);if(l)return l==e;n|=2,s.set(o,e);var d=Up(a(o),a(e),n,i,r,s);return s.delete(o),d;case"[object Symbol]":if(Nu)return Nu.call(o)==Nu.call(e)}return!1};var _v=Object.prototype.hasOwnProperty;const Cv=function(o,e,t,n,i,r){var s=1&t,a=Qd(o),c=a.length;if(c!=Qd(e).length&&!s)return!1;for(var l=c;l--;){var d=a[l];if(!(s?d in e:_v.call(e,d)))return!1}var u=r.get(o),h=r.get(e);if(u&&h)return u==e&&h==o;var g=!0;r.set(o,e),r.set(e,o);for(var p=s;++l<c;){var k=o[d=a[l]],C=e[d];if(n)var T=s?n(C,k,d,e,o,r):n(k,C,d,o,e,r);if(!(T===void 0?k===C||i(k,C,t,n,r):T)){g=!1;break}p||(p=d=="constructor")}if(g&&!p){var N=o.constructor,L=e.constructor;N==L||!("constructor"in o)||!("constructor"in e)||typeof N=="function"&&N instanceof N&&typeof L=="function"&&L instanceof L||(g=!1)}return r.delete(o),r.delete(e),g};var Gp="[object Arguments]",Wp="[object Array]",La="[object Object]",$p=Object.prototype.hasOwnProperty;const vv=function(o,e,t,n,i,r){var s=ht(o),a=ht(e),c=s?Wp:go(o),l=a?Wp:go(e),d=(c=c==Gp?La:c)==La,u=(l=l==Gp?La:l)==La,h=c==l;if(h&&uo(o)){if(!uo(e))return!1;s=!0,d=!1}if(h&&!d)return r||(r=new vi),s||$d(o)?Up(o,e,t,n,i,r):Av(o,e,c,t,n,i,r);if(!(1&t)){var g=d&&$p.call(o,"__wrapped__"),p=u&&$p.call(e,"__wrapped__");if(g||p){var k=g?o.value():o,C=p?e.value():e;return r||(r=new vi),i(k,C,t,n,r)}}return!!h&&(r||(r=new vi),Cv(o,e,t,n,i,r))},Oa=function o(e,t,n,i,r){return e===t||(e==null||t==null||!Nt(e)&&!Nt(t)?e!=e&&t!=t:vv(e,t,n,i,o,r))},yv=function(o,e,t){var n=(t=typeof t=="function"?t:void 0)?t(o,e):void 0;return n===void 0?Oa(o,e,void 0,t):!!n};class Kp extends on{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,i=new Set;for(const s of e){const a=t.mapDomToView(s.target);a&&(a.is("uiElement")||a.is("rawElement")||s.type!=="childList"||this._isBogusBrMutation(s)||i.add(a))}for(const s of e){const a=t.mapDomToView(s.target);if((!a||!a.is("uiElement")&&!a.is("rawElement"))&&s.type==="characterData"){const c=t.findCorrespondingViewText(s.target);c&&!i.has(c.parent)?n.add(c):!c&&Et(s.target)&&i.add(t.mapDomToView(s.target.parentNode))}}const r=[];for(const s of n)r.push({type:"text",node:s});for(const s of i){const a=t.mapViewToDom(s),c=Array.from(s.getChildren()),l=Array.from(t.domChildrenToView(a,{withChildren:!1}));yv(c,l,xv)||r.push({type:"children",node:s})}r.length&&this.document.fire("mutations",{mutations:r})}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function xv(o,e){if(!Array.isArray(o))return o===e||!(!o.is("$text")||!e.is("$text"))&&o.data===e.data}class Fa extends Bn{constructor(e){super(e),this._renderTimeoutId=null,this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>this._handleFocus()),t.on("blur",(n,i)=>this._handleBlur(i)),t.on("beforeinput",()=>{t.isFocused||this._handleFocus()},{priority:"highest"})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._clearTimeout(),super.destroy()}_handleFocus(){this._clearTimeout(),this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this._renderTimeoutId=null,this.flush(),this.view.change(()=>{})},50)}_handleBlur(e){const t=this.document.selection.editableElement;t!==null&&t!==e.target||(this.document.isFocused=!1,this._isFocusChanging=!1,this.view.change(()=>{}))}_clearTimeout(){this._renderTimeoutId&&(clearTimeout(this._renderTimeoutId),this._renderTimeoutId=null)}}class Ev extends on{constructor(e){super(e),this.mutationObserver=e.getObserver(Kp),this.focusObserver=e.getObserver(Fa),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Nn(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=Nn(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",()=>{this.document.isComposing&&!I.isAndroid||(this._handleSelectionChange(t),this._documentIsSelectingInactivityTimeoutDebounced())}),this.listenTo(this.view.document,"compositionstart",()=>{this._handleSelectionChange(t)},{priority:"lowest"}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e){if(!this.isEnabled)return;const t=e.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(t.anchorNode))return;this.mutationObserver.flush();const n=this.domConverter.domSelectionToView(t);if(n.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(n)||!this.domConverter.isDomSelectionCorrect(t))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(n))this.view.forceRender();else{const i={oldSelection:this.selection,newSelection:n,domSelection:t};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class Dv extends Bn{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class Yp{constructor(e,t={}){this._files=t.cacheFiles?Qp(e):null,this._native=e}get files(){return this._files||(this._files=Qp(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,n){this._native.setDragImage(e,t,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function Qp(o){const e=Array.from(o.files||[]),t=Array.from(o.items||[]);return e.length?e:t.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class Iv extends Bn{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,i=n.document;let r=null,s=null,a=[];if(e.dataTransfer&&(r=new Yp(e.dataTransfer)),e.data!==null?s=e.data:r&&(s=r.getData("text/plain")),i.selection.isFake)a=Array.from(i.selection.getRanges());else if(t.length)a=t.map(c=>{const l=n.domConverter.domPositionToView(c.startContainer,c.startOffset),d=n.domConverter.domPositionToView(c.endContainer,c.endOffset);return l?n.createRange(l,d):d?n.createRange(d):void 0}).filter(c=>!!c);else if(I.isAndroid){const c=e.target.ownerDocument.defaultView.getSelection();a=Array.from(n.domConverter.domSelectionToView(c).getRanges())}if(I.isAndroid&&e.inputType=="insertCompositionText"&&s&&s.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(a[0].end)]});else if(e.inputType=="insertText"&&s&&s.includes(`
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/powered-by-ckeditor/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],n],on:{dragstart:i.to(r=>r.preventDefault())}}]})}}function Yk(o,e,t){return(n,i)=>{const r=new he(o);if(r.width<350||r.height<50)return null;let s;s=e.position==="inside"?r.bottom-i.height:r.bottom-i.height/2,s-=e.verticalOffset;const a=t(r,i),c=n.clone().moveTo(a,s).getIntersection(i.clone().moveTo(a,s)).getVisible();return!c||c.getArea()<i.getArea()?null:{top:s,left:a,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function Qk(o){const e=o.config.get("ui.poweredBy"),t=e&&e.position||"border";return{position:t,label:"Powered by",verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:o.locale.contentLanguageDirection==="ltr"?"right":"left",...e}}var Bc=S(1801),yr={attributes:{"data-cke":!0}};yr.setAttributes=K(),yr.insert=$().bind(null,"head"),yr.domAPI=W(),yr.insertStyleElement=Y(),G()(Bc.A,yr),Bc.A&&Bc.A.locals&&Bc.A.locals;const Zk={POLITE:"polite",ASSERTIVE:"assertive"};class fx{constructor(e){this.editor=e,e.once("ready",()=>{for(const t of Object.values(Zk))this.announce("",t)})}announce(e,t=Zk.POLITE){const n=this.editor;if(!n.ui.view)return;this.view||(this.view=new kx(n.locale),n.ui.view.body.add(this.view));const{politeness:i,isUnsafeHTML:r}=typeof t=="string"?{politeness:t}:t;let s=this.view.regionViews.find(a=>a.politeness===i);s||(s=new bx(n,i),this.view.regionViews.add(s)),s.announce({announcement:e,isUnsafeHTML:r})}}class kx extends ee{constructor(e){super(e),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class bx extends ee{constructor(e,t){super(e.locale),this.setTemplate({tag:"div",attributes:{"aria-live":t,"aria-relevant":"additions"},children:[{tag:"ul",attributes:{class:["ck","ck-aria-live-region-list"]}}]}),e.on("destroy",()=>{this._pruneAnnouncementsInterval!==null&&(clearInterval(this._pruneAnnouncementsInterval),this._pruneAnnouncementsInterval=null)}),this.politeness=t,this._domConverter=e.data.htmlProcessor.domConverter,this._pruneAnnouncementsInterval=setInterval(()=>{this.element&&this._listElement.firstChild&&this._listElement.firstChild.remove()},5e3)}announce({announcement:e,isUnsafeHTML:t}){if(!e.trim().length)return;const n=document.createElement("li");t?this._domConverter.setContentOf(n,e):n.innerText=e,this._listElement.appendChild(n)}get _listElement(){return this.element.querySelector("ul")}}var Nc=S(9481),xr={attributes:{"data-cke":!0}};xr.setAttributes=K(),xr.insert=$().bind(null,"head"),xr.domAPI=W(),xr.insertStyleElement=Y(),G()(Nc.A,xr),Nc.A&&Nc.A.locals&&Nc.A.locals;class si extends On{constructor(e,t){super(e);const n=this.bindTemplate;this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item"]},on:{mouseenter:n.to("mouseenter")}}),this.delegate("mouseenter").to(t)}}const Vi={toggleMenusAndFocusItemsOnHover(o){o.on("menu:mouseenter",e=>{if(o.isFocusBorderEnabled||o.isOpen){if(o.isOpen)for(const t of o.menus){const n=e.path[0],i=n instanceof si&&n.children.first===t;t.isOpen=(e.path.includes(t)||i)&&t.isEnabled}e.source.focus()}})},focusCycleMenusOnArrows(o){const e=o.locale.uiLanguageDirection==="rtl";function t(n,i){const r=o.children.getIndex(n),s=n.isOpen,a=o.children.length,c=o.children.get((r+a+i)%a);n.isOpen=!1,s&&(c.isOpen=!0),c.buttonView.focus()}o.on("menu:arrowright",n=>{t(n.source,e?-1:1)}),o.on("menu:arrowleft",n=>{t(n.source,e?1:-1)})},closeMenusWhenTheBarCloses(o){o.on("change:isOpen",()=>{o.isOpen||o.menus.forEach(e=>{e.isOpen=!1})})},closeMenuWhenAnotherOnTheSameLevelOpens(o){o.on("menu:change:isOpen",(e,t,n)=>{n&&o.menus.filter(i=>e.source.parentMenuView===i.parentMenuView&&e.source!==i&&i.isOpen).forEach(i=>{i.isOpen=!1})})},closeOnClickOutside(o){Ro({emitter:o,activator:()=>o.isOpen,callback:()=>o.close(),contextElements:()=>o.children.map(e=>e.element)})},enableFocusHighlightOnInteraction(o){let e=!1;o.on("change:isOpen",(t,n,i)=>{i||(e||(o.isFocusBorderEnabled=!1),e=!1)}),o.listenTo(o.element,"keydown",()=>{e=!0},{useCapture:!0}),o.listenTo(o.element,"keyup",()=>{e=!1},{useCapture:!0}),o.listenTo(o.element,"focus",()=>{e&&(o.isFocusBorderEnabled=!0)},{useCapture:!0})}},Fn={openAndFocusPanelOnArrowDownKey(o){o.keystrokes.set("arrowdown",(e,t)=>{o.focusTracker.focusedElement===o.buttonView.element&&(o.isOpen||(o.isOpen=!0),o.panelView.focus(),t())})},openOnArrowRightKey(o){const e=o.locale.uiLanguageDirection==="rtl"?"arrowleft":"arrowright";o.keystrokes.set(e,(t,n)=>{o.focusTracker.focusedElement===o.buttonView.element&&o.isEnabled&&(o.isOpen||(o.isOpen=!0),o.panelView.focus(),n())})},openOnButtonClick(o){o.buttonView.on("execute",()=>{o.isOpen=!0})},toggleOnButtonClick(o){o.buttonView.on("execute",()=>{o.isOpen=!o.isOpen})},openAndFocusOnEnterKeyPress(o){o.keystrokes.set("enter",(e,t)=>{o.focusTracker.focusedElement===o.buttonView.element&&(o.isOpen=!0,o.panelView.focus(),t())})},closeOnArrowLeftKey(o){const e=o.locale.uiLanguageDirection==="rtl"?"arrowright":"arrowleft";o.keystrokes.set(e,(t,n)=>{o.isOpen&&(o.isOpen=!1,o.focus(),n())})},closeOnEscKey(o){o.keystrokes.set("esc",(e,t)=>{o.isOpen&&(o.isOpen=!1,o.focus(),t())})},closeOnParentClose(o){o.parentMenuView.on("change:isOpen",(e,t,n)=>{n||e.source!==o.parentMenuView||(o.isOpen=!1)})}},wx={southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,e)=>({top:o.bottom,left:o.left-e.width+o.width,name:"sw"}),northEast:(o,e)=>({top:o.top-e.height,left:o.left,name:"ne"}),northWest:(o,e)=>({top:o.top-e.height,left:o.left-e.width+o.width,name:"nw"}),eastSouth:o=>({top:o.top,left:o.right-5,name:"es"}),eastNorth:(o,e)=>({top:o.top-e.height,left:o.right-5,name:"en"}),westSouth:(o,e)=>({top:o.top,left:o.left-e.width+5,name:"ws"}),westNorth:(o,e)=>({top:o.top-e.height,left:o.left-e.width+5,name:"wn"})},Ax=[{menuId:"file",label:"File",groups:[{groupId:"export",items:["menuBar:exportPdf","menuBar:exportWord"]},{groupId:"import",items:["menuBar:importWord"]},{groupId:"revisionHistory",items:["menuBar:revisionHistory"]}]},{menuId:"edit",label:"Edit",groups:[{groupId:"undo",items:["menuBar:undo","menuBar:redo"]},{groupId:"selectAll",items:["menuBar:selectAll"]},{groupId:"findAndReplace",items:["menuBar:findAndReplace"]}]},{menuId:"view",label:"View",groups:[{groupId:"sourceEditing",items:["menuBar:sourceEditing"]},{groupId:"showBlocks",items:["menuBar:showBlocks"]},{groupId:"previewMergeFields",items:["menuBar:previewMergeFields"]},{groupId:"restrictedEditing",items:["menuBar:restrictedEditing"]}]},{menuId:"insert",label:"Insert",groups:[{groupId:"insertMainWidgets",items:["menuBar:insertImage","menuBar:ckbox","menuBar:ckfinder","menuBar:insertTable"]},{groupId:"insertInline",items:["menuBar:link","menuBar:comment","menuBar:insertMergeField"]},{groupId:"insertMinorWidgets",items:["menuBar:mediaEmbed","menuBar:insertTemplate","menuBar:specialCharacters","menuBar:blockQuote","menuBar:codeBlock","menuBar:htmlEmbed"]},{groupId:"insertStructureWidgets",items:["menuBar:horizontalLine","menuBar:pageBreak","menuBar:tableOfContents"]},{groupId:"restrictedEditingException",items:["menuBar:restrictedEditingException"]}]},{menuId:"format",label:"Format",groups:[{groupId:"textAndFont",items:[{menuId:"text",label:"Text",groups:[{groupId:"basicStyles",items:["menuBar:bold","menuBar:italic","menuBar:underline","menuBar:strikethrough","menuBar:superscript","menuBar:subscript","menuBar:code"]},{groupId:"textPartLanguage",items:["menuBar:textPartLanguage"]}]},{menuId:"font",label:"Font",groups:[{groupId:"fontProperties",items:["menuBar:fontSize","menuBar:fontFamily"]},{groupId:"fontColors",items:["menuBar:fontColor","menuBar:fontBackgroundColor"]},{groupId:"highlight",items:["menuBar:highlight"]}]},"menuBar:heading"]},{groupId:"list",items:["menuBar:bulletedList","menuBar:numberedList","menuBar:multiLevelList","menuBar:todoList"]},{groupId:"indent",items:["menuBar:alignment","menuBar:indent","menuBar:outdent"]},{groupId:"caseChange",items:["menuBar:caseChange"]},{groupId:"removeFormat",items:["menuBar:removeFormat"]}]},{menuId:"tools",label:"Tools",groups:[{groupId:"aiTools",items:["menuBar:aiAssistant","menuBar:aiCommands"]},{groupId:"tools",items:["menuBar:trackChanges","menuBar:commentsArchive"]}]},{menuId:"help",label:"Help",groups:[{groupId:"help",items:["menuBar:accessibilityHelp"]}]}];function _x({normalizedConfig:o,locale:e,componentFactory:t,extraItems:n}){const i=Wt(o);return Jk(o,i,n),function(r,s){const a=s.removeItems,c=[];s.items=s.items.filter(({menuId:l})=>!a.includes(l)||(c.push(l),!1)),ji(s.items,l=>{l.groups=l.groups.filter(({groupId:d})=>!a.includes(d)||(c.push(d),!1));for(const d of l.groups)d.items=d.items.filter(u=>{const h=tb(u);return!a.includes(h)||(c.push(h),!1)})});for(const l of a)c.includes(l)||de("menu-bar-item-could-not-be-removed",{menuBarConfig:r,itemName:l})}(o,i),Jk(o,i,i.addItems),function(r,s,a){ji(s.items,c=>{for(const l of c.groups)l.items=l.items.filter(d=>{const u=typeof d=="string"&&!a.has(d);return u&&!s.isUsingDefaultConfig&&de("menu-bar-item-unavailable",{menuBarConfig:r,parentMenuConfig:Wt(c),componentName:d}),!u})})}(o,i,t),eb(o,i),function(r,s){const a=s.t,c={File:a({string:"File",id:"MENU_BAR_MENU_FILE"}),Edit:a({string:"Edit",id:"MENU_BAR_MENU_EDIT"}),View:a({string:"View",id:"MENU_BAR_MENU_VIEW"}),Insert:a({string:"Insert",id:"MENU_BAR_MENU_INSERT"}),Format:a({string:"Format",id:"MENU_BAR_MENU_FORMAT"}),Tools:a({string:"Tools",id:"MENU_BAR_MENU_TOOLS"}),Help:a({string:"Help",id:"MENU_BAR_MENU_HELP"}),Text:a({string:"Text",id:"MENU_BAR_MENU_TEXT"}),Font:a({string:"Font",id:"MENU_BAR_MENU_FONT"})};ji(r.items,l=>{l.label in c&&(l.label=c[l.label])})}(i,e),i}function Jk(o,e,t){const n=[];if(t.length!=0){for(const r of t){const s=vx(r.position),a=yx(r.position);if(typeof(i=r)=="object"&&"menu"in i)if(a){const c=e.items.findIndex(l=>l.menuId===a);c!=-1?s==="before"?(e.items.splice(c,0,r.menu),n.push(r)):s==="after"&&(e.items.splice(c+1,0,r.menu),n.push(r)):Xk(e,r.menu,a,s)&&n.push(r)}else s==="start"?(e.items.unshift(r.menu),n.push(r)):s==="end"&&(e.items.push(r.menu),n.push(r));else Cx(r)?ji(e.items,c=>{if(c.menuId===a)s==="start"?(c.groups.unshift(r.group),n.push(r)):s==="end"&&(c.groups.push(r.group),n.push(r));else{const l=c.groups.findIndex(d=>d.groupId===a);l!==-1&&(s==="before"?(c.groups.splice(l,0,r.group),n.push(r)):s==="after"&&(c.groups.splice(l+1,0,r.group),n.push(r)))}}):Xk(e,r.item,a,s)&&n.push(r)}var i;for(const r of t)n.includes(r)||de("menu-bar-item-could-not-be-added",{menuBarConfig:o,addedItemConfig:r})}}function Xk(o,e,t,n){let i=!1;return ji(o.items,r=>{for(const{groupId:s,items:a}of r.groups){if(i)return;if(s===t)n==="start"?(a.unshift(e),i=!0):n==="end"&&(a.push(e),i=!0);else{const c=a.findIndex(l=>tb(l)===t);c!==-1&&(n==="before"?(a.splice(c,0,e),i=!0):n==="after"&&(a.splice(c+1,0,e),i=!0))}}}),i}function eb(o,e){const t=e.isUsingDefaultConfig;let n=!1;e.items=e.items.filter(i=>!!i.groups.length||(ph(o,i,t),!1)),e.items.length?(ji(e.items,i=>{i.groups=i.groups.filter(r=>!!r.items.length||(n=!0,!1));for(const r of i.groups)r.items=r.items.filter(s=>!(nb(s)&&!s.groups.length)||(ph(o,s,t),n=!0,!1))}),n&&eb(o,e)):ph(o,o,t)}function ph(o,e,t){t||de("menu-bar-menu-empty",{menuBarConfig:o,emptyMenuConfig:e})}function ji(o,e){if(Array.isArray(o))for(const n of o)t(n);function t(n){e(n);for(const i of n.groups)for(const r of i.items)nb(r)&&t(r)}}function Cx(o){return typeof o=="object"&&"group"in o}function vx(o){return o.startsWith("start")?"start":o.startsWith("end")?"end":o.startsWith("after")?"after":"before"}function yx(o){const e=o.match(/^[^:]+:(.+)/);return e?e[1]:null}function tb(o){return typeof o=="string"?o:o.menuId}function nb(o){return typeof o=="object"&&"menuId"in o}class xx extends Ae(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[],this._extraMenuBarElements=[],this._lastFocusedForeignElement=null;const t=e.editing.view;this.editor=e,this.componentFactory=new mx(e),this.focusTracker=new Be,this.tooltipManager=new hh(e),this.poweredBy=new gx(e),this.ariaLiveAnnouncer=new fx(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this._bindBodyCollectionWithFocusTracker(),this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}extendMenuBar(e){this._extraMenuBarElements.push(e)}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_initMenuBar(e){const t=e.element;this.focusTracker.add(t),this.editor.keystrokes.listenTo(t);const n=function(i){let r;return r="items"in i&&i.items?{items:i.items,removeItems:[],addItems:[],isVisible:!0,isUsingDefaultConfig:!1,...i}:{items:Wt(Ax),addItems:[],removeItems:[],isVisible:!0,isUsingDefaultConfig:!0,...i},r}(this.editor.config.get("menuBar")||{});e.fillFromConfig(n,this.componentFactory,this._extraMenuBarElements),this.editor.keystrokes.set("Esc",(i,r)=>{t.contains(this.editor.ui.focusTracker.focusedElement)&&(this._lastFocusedForeignElement?(this._lastFocusedForeignElement.focus(),this._lastFocusedForeignElement=null):this.editor.editing.view.focus(),r())}),this.editor.keystrokes.set("Alt+F9",(i,r)=>{t.contains(this.editor.ui.focusTracker.focusedElement)||(this._saveLastFocusedForeignElement(),e.isFocusBorderEnabled=!0,e.focus(),r())})}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor;let t;e.keystrokes.set("Alt+F10",(n,i)=>{this._saveLastFocusedForeignElement();const r=this._getCurrentFocusedToolbarDefinition();r&&t||(t=this._getFocusableCandidateToolbarDefinitions());for(let s=0;s<t.length;s++){const a=t.shift();if(t.push(a),a!==r&&this._focusFocusableCandidateToolbar(a)){r&&r.options.afterBlur&&r.options.afterBlur();break}}i()}),e.keystrokes.set("Esc",(n,i)=>{const r=this._getCurrentFocusedToolbarDefinition();r&&(this._lastFocusedForeignElement?(this._lastFocusedForeignElement.focus(),this._lastFocusedForeignElement=null):e.editing.view.focus(),r.options.afterBlur&&r.options.afterBlur(),i())})}_saveLastFocusedForeignElement(){const e=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(e)&&!Array.from(this.editor.editing.view.domRoots.values()).includes(e)&&(this._lastFocusedForeignElement=e)}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:i}=t;(gn(n.element)||i.beforeFocus)&&e.push(t)}return e.sort((t,n)=>ib(t)-ib(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!gn(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const n={top:0,bottom:0,left:0,right:0,...this.viewportOffset};t.viewportOffset.top+=n.top,t.viewportOffset.bottom+=n.bottom,t.viewportOffset.left+=n.left,t.viewportOffset.right+=n.right}_bindBodyCollectionWithFocusTracker(){const e=this.view.body;for(const t of e)this.focusTracker.add(t.element);e.on("add",(t,n)=>{this.focusTracker.add(n.element)}),e.on("remove",(t,n)=>{this.focusTracker.remove(n.element)})}}function ib(o){const{toolbarView:e,options:t}=o;let n=10;return gn(e.element)&&n--,t.isContextual&&n--,n}var Pc=S(1185),Er={attributes:{"data-cke":!0}};Er.setAttributes=K(),Er.insert=$().bind(null,"head"),Er.domAPI=W(),Er.insertStyleElement=Y(),G()(Pc.A,Er),Pc.A&&Pc.A.locals&&Pc.A.locals;class Ex extends ee{constructor(e){super(e),this.body=new T2(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class Dx extends ee{constructor(e,t,n){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(i=>{const r=e.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",r),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}e.isRenderingInProgress?function n(i){e.once("change:isRenderingInProgress",(r,s,a)=>{a?n(i):t(i)})}(this):t(this)}}class Ix extends Dx{constructor(e,t,n,i={}){super(e,t,n),this._options=i,this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}})}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this.getEditableAriaLabel(),n)})}getEditableAriaLabel(){const e=this.locale.t,t=this._options.label,n=this._editableElement,i=this.name;if(typeof t=="string")return t;if(typeof t=="object")return t[i];if(typeof t=="function")return t(this);if(n){const r=n.getAttribute("aria-label");if(r)return r}return e("Rich Text Editor. Editing area: %0",i)}}class fh extends va{static get pluginName(){return"Notification"}static get isOfficialPlugin(){return!0}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class Hi extends Ae(){constructor(e,t){super(),t&&jp(this,t),e&&this.set(e)}}var zc=S(991),Dr={attributes:{"data-cke":!0}};Dr.setAttributes=K(),Dr.insert=$().bind(null,"head"),Dr.domAPI=W(),Dr.insertStyleElement=Y(),G()(zc.A,Dr),zc.A&&zc.A.locals&&zc.A.locals;var Lc=S(5380),Ir={attributes:{"data-cke":!0}};Ir.setAttributes=K(),Ir.insert=$().bind(null,"head"),Ir.domAPI=W(),Ir.insertStyleElement=Y(),G()(Lc.A,Ir),Lc.A&&Lc.A.locals&&Lc.A.locals;const Oc=fo("px");class Sr extends R{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.decorate("getPositionOptions"),this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}static get isOfficialPlugin(){return!0}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new B("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new B("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this.getPositionOptions()),this._fakePanelsView.updatePosition()}getPositionOptions(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new B("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new bn(this.editor.locale),this.editor.ui.view.body.add(this._view),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new Sx(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[r,i])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new Tx(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this.getPositionOptions()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}}class Sx extends ee{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Be,this.buttonPrevView=this._createButtonView(t("Previous"),J.previousArrow),this.buttonNextView=this._createButtonView(t("Next"),J.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new ce(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class Tx extends ee{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",Oc),left:n.to("left",Oc),width:n.to("width",Oc),height:n.to("height",Oc)}},children:this.content}),this.on("change:numberOfPanels",(i,r,s,a)=>{s>a?this._addPanels(s-a):this._removePanels(a-s),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new ee;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:i}=new he(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:i})}}}var Fc=S(8298),Tr={attributes:{"data-cke":!0}};Tr.setAttributes=K(),Tr.insert=$().bind(null,"head"),Tr.domAPI=W(),Tr.insertStyleElement=Y(),G()(Fc.A,Tr),Fc.A&&Fc.A.locals&&Fc.A.locals;class Mx extends ri{constructor(e,t){const n=e.t,i=Object.assign({},{showResetButton:!0,showIcon:!0,creator:wr},t);super(e,i.creator),this.label=t.label,this._viewConfig=i,this._viewConfig.showIcon&&(this.iconView=new Ot,this.iconView.content=J.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new ce(e),this.resetButtonView.set({label:n("Clear"),icon:J.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",r=>!r),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class Bx extends ee{constructor(){super();const e=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",e.if("isVisible","ck-hidden",t=>!t)],tabindex:-1},children:[{tag:"span",children:[{text:[e.to("primaryText")]}]},{tag:"span",children:[{text:[e.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class Nx extends ee{constructor(e){super(e),this.children=this.createCollection(),this.focusTracker=new Be,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new ft({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const e of this.children)this.focusTracker.add(e.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var ob=/[\\^$.*+?()[\]{}|]/g,Px=RegExp(ob.source);const rb=function(o){return(o=ku(o))&&Px.test(o)?o.replace(ob,"\\$&"):o};var Rc=S(8107),Mr={attributes:{"data-cke":!0}};Mr.setAttributes=K(),Mr.insert=$().bind(null,"head"),Mr.domAPI=W(),Mr.insertStyleElement=Y(),G()(Rc.A,Mr),Rc.A&&Rc.A.locals&&Rc.A.locals;class zx extends ee{constructor(e,t){super(e),this._config=t,this.filteredView=t.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new Be,this.keystrokes=new We,this.resultsView=new Nx(e),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),t.infoView&&t.infoView.instance?this.infoView=t.infoView.instance:(this.infoView=new Bx,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new ft({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:i,totalItemsCount:r})=>{this.resultsCount=i,this.totalItemsCount=r}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",t.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const e=t=>t.stopPropagation();for(const t of this.focusableChildren)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search(""),this.filteredView.element.scrollTo(0,0)}search(e){const t=e?new RegExp(rb(e),"ig"):null,n=this.filteredView.filter(t);this.fire("search",{query:e,...n})}_createSearchTextQueryView(){const e=new Mx(this.locale,this._config.queryView);return this.listenTo(e.fieldView,"input",()=>{this.search(e.fieldView.element.value)}),e.on("reset",()=>this.reset()),e.bind("isEnabled").to(this),e}_enableDefaultInfoViewBehavior(){const e=this.locale.t,t=this.infoView;function n(i,{query:r,resultsCount:s,totalItemsCount:a}){return typeof i=="function"?i(r,s,a):i}this.on("search",(i,r)=>{if(r.resultsCount)t.set({isVisible:!1});else{const s=this._config.infoView&&this._config.infoView.text;let a,c;r.totalItemsCount?s&&s.notFound?(a=s.notFound.primary,c=s.notFound.secondary):(a=e("No results found"),c=""):s&&s.noSearchableItems?(a=s.noSearchableItems.primary,c=s.noSearchableItems.secondary):(a=e("No searchable items"),c=""),t.set({primaryText:n(a,r),secondaryText:n(c,r),isVisible:!0})}})}}var Vc=S(5727),Br={attributes:{"data-cke":!0}};Br.setAttributes=K(),Br.insert=$().bind(null,"head"),Br.domAPI=W(),Br.insertStyleElement=Y(),G()(Vc.A,Br),Vc.A&&Vc.A.locals&&Vc.A.locals;const Ji=class Ji extends zx{constructor(e,t){super(e,t),this._config=t;const n=fo("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const i=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[i.if("isVisible","ck-hidden",r=>!r),i.to("_position",r=>`ck-search__results_${r}`)],style:{width:i.to("_width",n)}}}),this.focusTracker.on("change:isFocused",(r,s,a)=>{this._updateResultsVisibility(),a?this.resultsView.element.scrollTop=0:t.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(r,s)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,s())}),this.listenTo(w.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(r,{value:s})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=s,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new he(this.queryView.fieldView.element).width;const e=Ji._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:Ji.defaultResultsPositions});this.resultsView._position=e?e.name:"s"}_updateResultsVisibility(){const e=this._config.queryMinChars===void 0?0:this._config.queryMinChars,t=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&t>=e}};Ji.defaultResultsPositions=[e=>({top:e.bottom,left:e.left,name:"s"}),(e,t)=>({top:e.top-t.height,left:e.left,name:"n"})],Ji._getOptimalPosition=_a;let sb=Ji;var jc=S(9529),Nr={attributes:{"data-cke":!0}};Nr.setAttributes=K(),Nr.insert=$().bind(null,"head"),Nr.domAPI=W(),Nr.insertStyleElement=Y(),G()(jc.A,Nr),jc.A&&jc.A.locals&&jc.A.locals;var Hc=S(109),Pr={attributes:{"data-cke":!0}};Pr.setAttributes=K(),Pr.insert=$().bind(null,"head"),Pr.domAPI=W(),Pr.insertStyleElement=Y(),G()(Hc.A,Pr),Hc.A&&Hc.A.locals&&Hc.A.locals;var Uc=S(2710),zr={attributes:{"data-cke":!0}};zr.setAttributes=K(),zr.insert=$().bind(null,"head"),zr.domAPI=W(),zr.insertStyleElement=Y(),G()(Uc.A,zr),Uc.A&&Uc.A.locals&&Uc.A.locals;var qc=S(3344),Lr={attributes:{"data-cke":!0}};Lr.setAttributes=K(),Lr.insert=$().bind(null,"head"),Lr.domAPI=W(),Lr.insertStyleElement=Y(),G()(qc.A,Lr),qc.A&&qc.A.locals&&qc.A.locals;class Lx extends oi{constructor(e){super(e);const t=this.bindTemplate;this.set({withText:!0,role:"menuitem"}),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__button"],"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",n=>String(n)),"data-cke-tooltip-disabled":t.to("isOn")},on:{mouseenter:t.to("mouseenter")}})}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new Ot;return e.content=Xo,e.extendTemplate({attributes:{class:"ck-menu-bar__menu__button__arrow"}}),e}}var Gc=S(9108),Or={attributes:{"data-cke":!0}};Or.setAttributes=K(),Or.insert=$().bind(null,"head"),Or.domAPI=W(),Or.insertStyleElement=Y(),G()(Gc.A,Or),Gc.A&&Gc.A.locals&&Gc.A.locals;class Ox extends ee{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-menu-bar__menu__panel",t.to("position",n=>`ck-menu-bar__menu__panel_position_${n}`),t.if("isVisible","ck-hidden",n=>!n)],tabindex:"-1"},children:this.children,on:{selectstart:t.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(e=1){this.children.length&&(e===1?this.children.first.focus():this.children.last.focus())}}var Wc=S(4),Fr={attributes:{"data-cke":!0}};Fr.setAttributes=K(),Fr.insert=$().bind(null,"head"),Fr.domAPI=W(),Fr.insertStyleElement=Y(),G()(Wc.A,Fr),Wc.A&&Wc.A.locals&&Wc.A.locals;const pd=class pd extends ee{constructor(e){super(e);const t=this.bindTemplate;this.buttonView=new Lx(e),this.buttonView.delegate("mouseenter").to(this),this.buttonView.bind("isOn","isEnabled").to(this,"isOpen","isEnabled"),this.panelView=new Ox(e),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new We,this.focusTracker=new Be,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("panelPosition","w"),this.set("class",void 0),this.set("parentMenuView",null),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar__menu",t.to("class"),t.if("isEnabled","ck-disabled",n=>!n),t.if("parentMenuView","ck-menu-bar__menu_top-level",n=>!n)]},children:[this.buttonView,this.panelView]})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.keystrokes.listenTo(this.element),Fn.closeOnEscKey(this),this._repositionPanelOnOpen()}_attachBehaviors(){this.parentMenuView?(Fn.openOnButtonClick(this),Fn.openOnArrowRightKey(this),Fn.closeOnArrowLeftKey(this),Fn.openAndFocusOnEnterKeyPress(this),Fn.closeOnParentClose(this)):(this._propagateArrowKeystrokeEvents(),Fn.openAndFocusPanelOnArrowDownKey(this),Fn.toggleOnButtonClick(this))}_propagateArrowKeystrokeEvents(){this.keystrokes.set("arrowright",(e,t)=>{this.fire("arrowright"),t()}),this.keystrokes.set("arrowleft",(e,t)=>{this.fire("arrowleft"),t()})}_repositionPanelOnOpen(){this.on("change:isOpen",(e,t,n)=>{if(!n)return;const i=pd._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=i?i.name:this._panelPositions[0].name})}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:e,southWest:t,northEast:n,northWest:i,westSouth:r,eastSouth:s,westNorth:a,eastNorth:c}=wx;return this.locale.uiLanguageDirection==="ltr"?this.parentMenuView?[s,c,r,a]:[e,t,n,i]:this.parentMenuView?[r,a,s,c]:[t,e,i,n]}};pd._getOptimalPosition=_a;let St=pd;class ai extends pc{constructor(e){super(e),this.role="menu",this.items.on("change",this._setItemsCheckSpace.bind(this))}_setItemsCheckSpace(){const e=Array.from(this.items).some(t=>{const n=ab(t);return n&&n.isToggleable});this.items.forEach(t=>{const n=ab(t);n&&(n.hasCheckSpace=e)})}}function ab(o){return o instanceof On?o.children.map(e=>function(t){return typeof t=="object"&&"buttonView"in t&&t.buttonView instanceof ce}(e)?e.buttonView:e).find(e=>e instanceof oi):null}class cb extends M2{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}var $c=S(497),Rr={attributes:{"data-cke":!0}};Rr.setAttributes=K(),Rr.insert=$().bind(null,"head"),Rr.domAPI=W(),Rr.insertStyleElement=Y(),G()($c.A,Rr),$c.A&&$c.A.locals&&$c.A.locals;const lb=["mouseenter","arrowleft","arrowright","change:isOpen"];class Fx extends ee{constructor(e){super(e),this.menus=[];const t=e.t,n=this.bindTemplate;this.set({isOpen:!1,isFocusBorderEnabled:!1}),this._setupIsOpenUpdater(),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar",n.if("isFocusBorderEnabled","ck-menu-bar_focus-border-enabled")],"aria-label":t("Editor menu bar"),role:"menubar"},children:this.children})}fillFromConfig(e,t,n=[]){const i=_x({normalizedConfig:e,locale:this.locale,componentFactory:t,extraItems:n}).items.map(r=>this._createMenu({componentFactory:t,menuDefinition:r}));this.children.addMany(i)}render(){super.render(),Vi.toggleMenusAndFocusItemsOnHover(this),Vi.closeMenusWhenTheBarCloses(this),Vi.closeMenuWhenAnotherOnTheSameLevelOpens(this),Vi.focusCycleMenusOnArrows(this),Vi.closeOnClickOutside(this),Vi.enableFocusHighlightOnInteraction(this)}focus(){this.children.first&&this.children.first.focus()}close(){for(const e of this.children)e.isOpen=!1}registerMenu(e,t=null){t?(e.delegate(...lb).to(t),e.parentMenuView=t):e.delegate(...lb).to(this,n=>"menu:"+n),e._attachBehaviors(),this.menus.push(e)}_createMenu({componentFactory:e,menuDefinition:t,parentMenuView:n}){const i=this.locale,r=new St(i);return this.registerMenu(r,n),r.buttonView.set({label:t.label}),r.once("change:isOpen",()=>{const s=new ai(i);s.ariaLabel=t.label,r.panelView.children.add(s),s.items.addMany(this._createMenuItems({menuDefinition:t,parentMenuView:r,componentFactory:e}))}),r}_createMenuItems({menuDefinition:e,parentMenuView:t,componentFactory:n}){const i=this.locale,r=[];for(const s of e.groups){for(const a of s.items){const c=new si(i,t);if(Se(a))c.children.add(this._createMenu({componentFactory:n,menuDefinition:a,parentMenuView:t}));else{const l=this._createMenuItemContentFromFactory({componentName:a,componentFactory:n,parentMenuView:t});if(!l)continue;c.children.add(l)}r.push(c)}s!==e.groups[e.groups.length-1]&&r.push(new nh(i))}return r}_createMenuItemContentFromFactory({componentName:e,parentMenuView:t,componentFactory:n}){const i=n.create(e);return i instanceof St||i instanceof He||i instanceof cb?(this._registerMenuTree(i,t),i.on("execute",()=>{this.close()}),i):(de("menu-bar-component-unsupported",{componentName:e,componentView:i}),null)}_registerMenuTree(e,t){if(!(e instanceof St))return void e.delegate("mouseenter").to(t);this.registerMenu(e,t);const n=e.panelView.children.filter(r=>r instanceof ai)[0];if(!n)return void e.delegate("mouseenter").to(t);const i=n.items.filter(r=>r instanceof On);for(const r of i)this._registerMenuTree(r.children.get(0),e)}_setupIsOpenUpdater(){let e;this.on("menu:change:isOpen",(t,n,i)=>{clearTimeout(e),i?this.isOpen=!0:e=setTimeout(()=>{this.isOpen=Array.from(this.children).some(r=>r.isOpen)},0)})}}class Rx extends xx{constructor(e,t){super(e),this.view=t}init(){const e=this.editor,t=this.view,n=e.editing.view,i=t.editable,r=n.document.getRoot();i.name=r.rootName,t.render();const s=i.element;this.setEditableElement(i.name,s),t.editable.bind("isFocused").to(this.focusTracker),n.attachDomRoot(s),this._initPlaceholder(),this._initToolbar(),this._initMenuBar(this.view.menuBarView),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;t.getDomRoot(e.editable.name)&&t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.editor,t=this.view;t.toolbar.fillFromConfig(e.config.get("toolbar"),this.componentFactory),this.addToolbar(t.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),i=e.config.get("placeholder");if(i){const r=typeof i=="string"?i:i[n.rootName];r&&(n.placeholder=r)}pp({view:t,element:n,isDirectHost:!1,keepOnFocus:!0})}}class Vx extends Ex{constructor(e,t,n={}){super(e),this.toolbar=new ih(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.menuBarView=new Fx(e),this.editable=new Ix(e,t,n.editableElement,{label:n.label}),this.toolbar.extendTemplate({attributes:{class:["ck-reset_all","ck-rounded-corners"],dir:e.uiLanguageDirection}}),this.menuBarView.extendTemplate({attributes:{class:["ck-reset_all","ck-rounded-corners"],dir:e.uiLanguageDirection}})}render(){super.render(),this.registerChild([this.menuBarView,this.toolbar,this.editable])}}class jx extends Ku($u){constructor(e,t={}){if(!Kc(e)&&t.initialData!==void 0)throw new B("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(r){return Kc(r)?(s=r,s instanceof HTMLTextAreaElement?s.value:s.innerHTML):r;var s}(e)),Kc(e)&&(this.sourceElement=e,function(r,s){if(s.ckeditorInstance)throw new B("editor-source-element-already-used",r);s.ckeditorInstance=r,r.once("destroy",()=>{delete s.ckeditorInstance})}(this,e)),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=new Vx(this.locale,this.editing.view,{editableElement:this.sourceElement,shouldToolbarGroupWhenFull:n,label:this.config.get("label")});this.ui=new Rx(this,i)}destroy(){const e=this.getData();return this.ui.destroy(),super.destroy().then(()=>{this.sourceElement&&this.updateSourceElement(e)})}static create(e,t={}){return new Promise(n=>{if(Kc(e)&&e.tagName==="TEXTAREA")throw new B("editor-wrong-element",null);const i=new this(e,t);n(i.initPlugins().then(()=>i.ui.init()).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}function Kc(o){return In(o)}class Vr extends Bn{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function n(i){return(r,s)=>{s.preventDefault();const a=s.dropRange?[s.dropRange]:null,c=new Qe(t,i);t.fire(c,{dataTransfer:s.dataTransfer,method:r.name,targetRanges:a,target:s.target,domEvent:s.domEvent}),c.stop.called&&s.stopPropagation()}}this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,n=e.type=="drop"||e.type=="paste",i={dataTransfer:new Yp(t,{cacheFiles:n})};if(e.type=="drop"||e.type=="dragover"){const r=Og(e);i.dropRange=r&&this.view.domConverter.domRangeToView(r)}this.fire(e.type,e,i)}}const db=["figcaption","li"],ub=["ol","ul"];function hb(o){if(o.is("$text")||o.is("$textProxy"))return o.data;if(o.is("element","img")&&o.hasAttribute("alt"))return o.getAttribute("alt");if(o.is("element","br"))return`
`;let e="",t=null;for(const n of o.getChildren())e+=Hx(n,t)+hb(n),t=n;return e}function Hx(o,e){return e?o.is("element","li")&&!o.isEmpty&&o.getChild(0).is("containerElement")||ub.includes(o.name)&&ub.includes(e.name)?`

`:o.is("containerElement")||e.is("containerElement")?db.includes(o.name)||db.includes(e.name)?`
`:o.is("element")&&o.getCustomProperty("dataPipeline:transparentRendering")||e.is("element")&&e.getCustomProperty("dataPipeline:transparentRendering")?"":`

                    <div class="mt-2 select-none flex justify-between items-center bg-gray-300 dark:bg-gray-700 rounded-full p-3">
                        <img class=" select-none rounded-full size-20"
                            src="/storage/${JSON.parse(z.img)[0]}"
                            alt="">
                        <span class="text select-none  text-xl">${z.name}</span>
                        <span class="text select-none  text-xl ml-5">${z.type} ${z.count}</span>
                    </div>
                    `)}),D.classList.remove("hidden"),E.classList.add("hidden")}).catch(function(v){alert("مشکلی پیش آمده است")}).then(function(){}))};window.addEventListener("load",()=>{var y;(y=document.querySelector("div.leaflet-bottom.leaflet-right"))===null||y===void 0||y.remove()});