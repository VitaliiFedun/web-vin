!function(e,t){ 
 "use strict"; 
 "object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){ 
 if(!e.document)throw new Error("jQuery requires a window with a document"); 
 return t(e)
 }
 :t(e)} 
 ("undefined"!=typeof window?window:this,function(e,t){ 
 "use strict"; 
 var n=[],a=e.document,r=Object.getPrototypeOf,i=n.slice,o=n.concat,s=n.push,l=n.indexOf,c={ 
 } 
 ,u=c.toString,d=c.hasOwnProperty,p=d.toString,f=p.call(Object),h={ 
 } 
 ; 
 function m(e,t){ 
 var n=(t=t||a).createElement("script"); 
 n.text=e,t.head.appendChild(n).parentNode.removeChild(n)
 }

 var g=function(e,t){
 return new g.fn.init(e,t)} 
 ,v=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,y=/^-ms-/,k=/-([a-z])/g,b=function(e,t){ 
 return t.toUpperCase()
 };
 g.fn=g.prototype={ 
 jquery:"3.1.1",constructor:g,length:0,toArray:function(){ 
 return i.call(this)
 }
 ,get:function(e){ 
 return null==e?i.call(this):e<0?this[e+this.length]:this[e]
 }
 ,pushStack:function(e){ 
 var t=g.merge(this.constructor(),e); 
 return t.prevObject=this,t
 }
 ,each:function(e){ 
 return g.each(this,e)
 }
 ,map:function(e){ 
 return this.pushStack(g.map(this,function(t,n){ 
 return e.call(t,n,t)
 }
 ))
 }
 ,slice:function(){ 
 return this.pushStack(i.apply(this,arguments))
 }
 ,first:function(){ 
 return this.eq(0)
 }
 ,last:function(){ 
 return this.eq(-1)
 }
 ,eq:function(e){ 
 var t=this.length,n=+e+(e<0?t:0); 
 return this.pushStack(n>=0&&n<t?[this[n]]:[])
 }
 ,end:function(){ 
 return this.prevObject||this.constructor()
 }
 ,push:s,sort:n.sort,splice:n.splice
 }
 ,g.extend=g.fn.extend=function(){ 
 var e,t,n,a,r,i,o=arguments[0]||{ 
 } 
 ,s=1,l=arguments.length,c=!1; 
 for("boolean"==typeof o&&(c=o,o=arguments[s]||{ 
 } 
 ,s++),"object"==typeof o||g.isFunction(o)||(o={ 
 } 
 ),s===l&&(o=this,s--); 
 s<l; s++)
  if(null!=(e=arguments[s]))
   for(t in e)
    n=o[t],a=e[t],o!==a&&(c&&a&&(g.isPlainObject(a)||(r=g.isArray(a)))?(r?(r=!1,i=n&&g.isArray(n)?n:[]):i=n&&g.isPlainObject(n)?n:{
 } 
 ,o[t]=g.extend(c,i,a)):void 0!==a&&(o[t]=a)); 
 return o} 
 ,g.extend({ 
 expando:"jQuery"+("3.1.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){ 
 throw new Error(e)
 }
 ,noop:function(){ 
 } 
 ,isFunction:function(e){ 
 return"function"===g.type(e)
 },isArray:Array.isArray,isWindow:function(e){
 return null!=e&&e===e.window
 }
 ,isNumeric:function(e){ 
 var t=g.type(e); 
 return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))
 }
 ,isPlainObject:function(e){ 
 var t,n; 
 return!(!e||"[object Object]"!==u.call(e)||(t=r(e))&&(n=d.call(t,"constructor")&&t.constructor,"function"!=typeof n||p.call(n)!==f))
 },
         isEmptyObject:function(e){
 var t; 
 for(t in e)return!1; 
 return!0
 }
 ,type:function(e){ 
 return null==e?e+"":"object"==typeof e||"function"==typeof e?c[u.call(e)]||"object":typeof e
         }
 ,globalEval:function(e){ 
 m(e)} 
 ,camelCase:function(e){ 
 return e.replace(y,"ms-").replace(k,b)
 }
 ,nodeName:function(e,t){ 
 return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
 }
 ,each:function(e,t){ 
 var n,a=0; 
 if(w(e))
  for(n=e.length; a<n&&!1!==t.call(e[a],a,e[a]);  a++);
 else
  for(a in e)
      if(!1===t.call(e[a],a,e[a]))
       break;
 return e
 }
 ,trim:function(e){ 
 return null==e?"":(e+"").replace(v,"")
 }
 ,makeArray:function(e,t){ 
 var n=t||[]; 
 return null!=e&&(w(Object(e))?g.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n
 }
 ,inArray:function(e,t,n){ 
 return null==t?-1:l.call(t,e,n)
 }
 ,merge:function(e,t){ 
 for(var n=+t.length,a=0,r=e.length; a<n;  a++)
  e[r++]=t[a];
 return e.length=r,e
 }
 ,grep:function(e,t,n){ 
 for(var a,r=[],i=0,o=e.length,s=!n; i<o;  i++)
  a=!t(e[i],i),a!==s&&r.push(e[i]);
 return r
 }
 ,map:function(e,t,n){ 
 var a,r,i=0,s=[]; 
 if(w(e))
  for(a=e.length; i<a; i++)
   r=t(e[i],i,n),
   null!=r&&s.push(r);
 else
  for(i in e)
   r=t(e[i],i,n),
   null!=r&&s.push(r);
 return o.apply([],s)
 }
 ,guid:1,proxy:function(e,t){ 
 var n,a,r; 
 if("string"==typeof t&&(n=e[t],t=e,e=n),g.isFunction(e))
  return a=i.call(arguments,2),r=function(){
 return e.apply(t||this,a.concat(i.call(arguments)))
 }
 ,r.guid=e.guid=e.guid||g.guid++,r
 }
 ,now:Date.now,support:h
 }
 ),
 "function"==typeof Symbol&&(g.fn[Symbol.iterator]=n[Symbol.iterator]),g.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
     function(e,t){
 c["[object "+t+"]"]=t.toLowerCase()
 }
 ); 
 function w(e){ 
 var t=!!e&&"length"in e&&e.length,n=g.type(e); 
 return"function"!==n&&!g.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)
 }
 var x=function(e){ 
 var t,n,a,r,i,o,s,l,c,u,d,p,f,h,m,g,v,y,k,
     b="sizzle"+1*new Date,
     w=e.document,
     x=0,
     C=0,
     j=oe(),
     T=oe(),
     E=oe(),
     _=function(e,t){
 return e===t&&(d=!0),0
 }
 ,S={ 
 } 
 .hasOwnProperty,z=[],N=z.pop,A=z.push,R=z.push,D=z.slice,L=function(e,t){ 
 for(var n=0,a=e.length; n<a; n++)
  if(e[n]===t)return n;
 return-1
     }
 ,$="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
     I="[\\x20\\t\\r\\n\\f]",
     q="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
     P="\\["+I+"*("+q+")(?:"+I+"*([*^$|!~]?=)"+I+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+q+"))|)"+I+"*\\]",O=":("+q+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",
     M=new RegExp(I+"+","g"),
     H=new RegExp("^"+I+"+|((?:^|[^\\\\])(?:\\\\.)*)"+I+"+$","g"),
     F=new RegExp("^"+I+"*,"+I+"*"),
     Q=new RegExp("^"+I+"*([>+~]|"+I+")"+I+"*"),
     B=new RegExp("="+I+"*([^\\]'\"]*?)"+I+"*\\]","g"),
     W=new RegExp(O),
     U=new RegExp("^"+q+"$"),
     G={
      ID:new RegExp("^#("+q+")"),
         CLASS:new RegExp("^\\.("+q+")"),
         TAG:new RegExp("^("+q+"|[*])"),
         ATTR:new RegExp("^"+P),
         PSEUDO:new RegExp("^"+O),
         CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+I+"*(even|odd|(([+-]|)(\\d*)n|)"+I+"*(?:([+-]|)"+I+"*(\\d+)|))"+I+"*\\)|)","i"),
         bool:new RegExp("^(?:"+$+")$","i"),
         needsContext:new RegExp("^"+I+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+I+"*((?:-\\d)?\\d*)"+I+"*\\)|)(?=[^-]|$)","i")
 }
 ,V=/^(?:input|select|textarea|button)$/i,
     K=/^h\d$/i,
     X=/^[^{]+\{\s*\[native \w/,Y=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,
     Z=new RegExp("\\\\([\\da-f]{ 1,6} "+I+"?|("+I+")|.)","ig"),
     ee=function(e,t,n){
 var a="0x"+t-65536; 
 return a!=a||n?t:a<0?String.fromCharCode(a+65536):String.fromCharCode(a>>10|55296,1023&a|56320)
 }
 ,te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){ 
 return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e
 }
 ,ae=function(){ 
 p()
 }
 ,re=ye(function(e){ 
 return!0===e.disabled&&("form"in e||"label"in e)
 }
 ,{ 
 dir:"parentNode",
         next:"legend"
 }
 ); 
 try{ 
 R.apply(z=D.call(w.childNodes),w.childNodes),
     z[w.childNodes.length].nodeType
 }
 catch(e){ 
 R={ 
 apply:z.length?function(e,t){ 
 A.apply(e,D.call(t))
 }
 :function(e,t){ 
 for(var n=e.length,a=0; 
 e[n++]=t[a++]; 
 ); 
 e.length=n-1} 
 } 
 } 
 function ie(e,t,a,r){ 
 var i,s,c,u,d,h,v,y=t&&t.ownerDocument,x=t?t.nodeType:9; 
 if(a=a||[],"string"!=typeof e||!e||1!==x&&9!==x&&11!==x)return a; 
 if(!r&&((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,m)){ 
 if(11!==x&&(d=Y.exec(e)))if(i=d[1]){ 
 if(9===x){ 
 if(!(c=t.getElementById(i)))return a; 
 if(c.id===i)return a.push(c),a} 
 else if(y&&(c=y.getElementById(i))&&k(t,c)&&c.id===i)return a.push(c),a} 
 else{ 
 if(d[2])return R.apply(a,t.getElementsByTagName(e)),a; 
 if((i=d[3])&&n.getElementsByClassName&&t.getElementsByClassName)return R.apply(a,t.getElementsByClassName(i)),a} 
 if(n.qsa&&!E[e+" "]&&(!g||!g.test(e))){ 
 if(1!==x)y=t,v=e; 
 else if("object"!==t.nodeName.toLowerCase()){ 
 for((u=t.getAttribute("id"))
         ?u=u.replace(te,ne):t.setAttribute("id",u=b),
         s=(h=o(e)).length;
 s--; 
 )
  h[s]="#"+u+" "+ve(h[s]);
 v=h.join(","),y=J.test(e)&&me(t.parentNode)||t
 }
 if(v)try{ 
 return R.apply(a,y.querySelectorAll(v)),a
 }
 catch(e){ 
 } 
 finally{ 
 u===b&&t.removeAttribute("id")
 }
 } 
 } 
 return l(e.replace(H,"$1"),t,a,r)
 }
 function oe(){ 
 var e=[]; 
 return function t(n,r){ 
 return e.push(n+" ")>a.cacheLength&&delete t[e.shift()],t[n+" "]=r} 
 } 
 function se(e){ 
 return e[b]=!0,e} 
 function le(e){ 
 var t=f.createElement("fieldset"); 
 try{ 
 return!!e(t)} 
 catch(e){ 
 return!1} 
 finally{ 
 t.parentNode&&t.parentNode.removeChild(t),t=null} 
 } 
 function ce(e,t){ 
 for(var n=e.split("|"),r=n.length; 
 r--; 
 )a.attrHandle[n[r]]=t} 
 function ue(e,t){ 
 var n=t&&e,a=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex; 
 if(a)return a; 
 if(n)for(; 
 n=n.nextSibling; 
 )if(n===t)return-1; 
 return e?1:-1} 
 function de(e){ 
 return function(t){ 
 return"input"===t.nodeName.toLowerCase()&&t.type===e} 
 } 
 function pe(e){ 
 return function(t){ 
 var n=t.nodeName.toLowerCase(); 
 return("input"===n||"button"===n)&&t.type===e} 
 } 
 function fe(e){ 
 return function(t){ 
 return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&re(t)===e:t.disabled===e:"label"in t&&t.disabled===e} 
 } 
 function he(e){ 
 return se(function(t){ 
 return t=+t,se(function(n,a){ 
 for(var r,i=e([],n.length,t),o=i.length; 
 o--; 
 )n[r=i[o]]&&(n[r]=!(a[r]=n[r]))} 
 )} 
 )} 
 function me(e){ 
 return e&&void 0!==e.getElementsByTagName&&e} 
 n=ie.support={ 
 } 
 ,i=ie.isXML=function(e){ 
 var t=e&&(e.ownerDocument||e).documentElement; 
 return!!t&&"HTML"!==t.nodeName} 
 ,p=ie.setDocument=function(e){ 
 var t,r,o=e?e.ownerDocument||e:w; 
 return o!==f&&9===o.nodeType&&o.documentElement?(h=(f=o).documentElement,m=!i(f),w!==f&&(r=f.defaultView)&&r.top!==r&&(r.addEventListener?r.addEventListener("unload",ae,!1):r.attachEvent&&r.attachEvent("onunload",ae)),n.attributes=le(function(e){ 
 return e.className="i",!e.getAttribute("className")} 
 ),n.getElementsByTagName=le(function(e){ 
 return e.appendChild(f.createComment("")),!e.getElementsByTagName("*").length} 
 ),n.getElementsByClassName=X.test(f.getElementsByClassName),n.getById=le(function(e){ 
 return h.appendChild(e).id=b,!f.getElementsByName||!f.getElementsByName(b).length} 
 ),n.getById?(a.filter.ID=function(e){ 
 var t=e.replace(Z,ee); 
 return function(e){ 
 return e.getAttribute("id")===t} 
 } 
 ,a.find.ID=function(e,t){ 
 if(void 0!==t.getElementById&&m){ 
 var n=t.getElementById(e); 
 return n?[n]:[]} 
 } 
 ):(a.filter.ID=function(e){ 
 var t=e.replace(Z,ee); 
 return function(e){ 
 var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id"); 
 return n&&n.value===t} 
 } 
 ,a.find.ID=function(e,t){ 
 if(void 0!==t.getElementById&&m){ 
 var n,a,r,i=t.getElementById(e); 
 if(i){ 
 if((n=i.getAttributeNode("id"))&&n.value===e)return[i]; 
 for(r=t.getElementsByName(e),a=0;  i=r[a++];  )
  if(n=i.getAttributeNode("id"),n&&n.value===e)return[i]
 }
 return[]} 
 } 
 ),a.find.TAG=n.getElementsByTagName?function(e,t){ 
 return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0
 }
 :function(e,t){ 
 var n,
     a=[],
     r=0,
     i=t.getElementsByTagName(e);
 if("*"===e){ 
 for(; n=i[r++]; )
  1===n.nodeType&&a.push(n);
 return a
 }
 return i
 }
 ,a.find.CLASS=n.getElementsByClassName&&function(e,t){ 
 if(void 0!==t.getElementsByClassName&&m)
  return t.getElementsByClassName(e)
 }
 ,v=[],g=[],(n.qsa=X.test(f.querySelectorAll))&&(le(function(e){ 
 h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",
 e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+I+"*(?:''|\"\")"),
 e.querySelectorAll("[selected]").length||g.push("\\["+I+"*(?:value|"+$+")"),
 e.querySelectorAll("[id~="+b+"-]").length||g.push("~="),
 e.querySelectorAll(":checked").length||g.push(":checked"),
 e.querySelectorAll("a#"+b+"+*").length||g.push(".#.+[+~]")
 }
 ),le(function(e){ 
 e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; 
 var t=f.createElement("input"); 
 t.setAttribute("type","hidden"),
     e.appendChild(t).setAttribute("name","D"),
 e.querySelectorAll("[name=d]").length&&g.push("name"+I+"*[*^$|!~]?="),
 2!==e.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),
     h.appendChild(e).disabled=!0,
 2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),
     e.querySelectorAll("*,:x"),g.push(",.*:")
 }
 )),
     (n.matchesSelector=X.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&le(function(e){
 n.disconnectedMatch=y.call(e,"*"),
     y.call(e,"[s!='']:x"),v.push("!=",O)
     }
 ),
         g=g.length&&new RegExp(g.join("|")),
         v=v.length&&new RegExp(v.join("|")),
         t=X.test(h.compareDocumentPosition),
         k=t||X.test(h.contains)?function(e,t){
 var n=9===e.nodeType?e.documentElement:e,
     a=t&&t.parentNode;
 return e===a||!(!a||1!==a.nodeType||!(n.contains?n.contains(a):e.compareDocumentPosition&&16&e.compareDocumentPosition(a)))
 }
 :function(e,t){ 
 if(t)
  for(; t=t.parentNode; )
   if(t===e)return!0;
 return!1} 
 ,_=t?function(e,t){ 
 if(e===t)return d=!0,0; 
 var a=!e.compareDocumentPosition-!t.compareDocumentPosition; 
 return a||(a=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&a||!n.sortDetached&&t.compareDocumentPosition(e)===a?e===f||e.ownerDocument===w&&k(w,e)?-1:t===f||t.ownerDocument===w&&k(w,t)?1:u?L(u,e)-L(u,t):0:4&a?-1:1)} 
 :function(e,t){ 
 if(e===t)return d=!0,0; 
 var n,a=0,r=e.parentNode,i=t.parentNode,o=[e],s=[t]; 
 if(!r||!i)return e===f?-1:t===f?1:r?-1:i?1:u?L(u,e)-L(u,t):0; 
 if(r===i)return ue(e,t); 
 for(n=e; n=n.parentNode; )
  o.unshift(n);
 for(n=t; n=n.parentNode; )
  s.unshift(n);
 for(; o[a]===s[a]; )
  a++;
 return a?ue(o[a],s[a]):o[a]===w?-1:s[a]===w?1:0} 
 ,f):f} 
 ,ie.matches=function(e,t){ 
 return ie(e,null,null,t)} 
 ,ie.matchesSelector=function(e,t){ 
 if((e.ownerDocument||e)!==f&&p(e),t=t.replace(B,"='$1']"),n.matchesSelector&&m&&!E[t+" "]&&(!v||!v.test(t))&&(!g||!g.test(t)))try{ 
 var a=y.call(e,t); 
 if(a||n.disconnectedMatch||e.document&&11!==e.document.nodeType) return a
 }
 catch(e){ 
 } 
 return ie(t,f,null,[e]).length>0
 }
 ,ie.contains=function(e,t){ 
 return(e.ownerDocument||e)!==f&&p(e),k(e,t)
 }
 ,ie.attr=function(e,t){ 
 (e.ownerDocument||e)!==f&&p(e); 
 var r=a.attrHandle[t.toLowerCase()],
     i=r&&S.call(a.attrHandle,
         t.toLowerCase())?r(e,t,!m):void 0;
 return
     void 0!==i?i:n.attributes||!m?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null
 }
 ,ie.escape=function(e){ 
 return(e+"").replace(te,ne)} 
 ,ie.error=function(e){ 
 throw new Error("Syntax error, unrecognized expression: "+e)} 
 ,ie.uniqueSort=function(e){ 
 var t,a=[],r=0,i=0; 
 if(d=!n.detectDuplicates,u=!n.sortStable&&e.slice(0),e.sort(_),d){ 
 for(; t=e[i++]; )
  t===e[i]&&(r=a.push(i));
 for(; r--; )
  e.splice(a[r],1)
 }
 return u=null,e
 }
 ,r=ie.getText=function(e){ 
 var t,n="",a=0,i=e.nodeType; 
 if(i){ 
 if(1===i||9===i||11===i){ 
 if("string"==typeof e.textContent)return e.textContent; 
 for(e=e.firstChild; e; e=e.nextSibling)
  n+=r(e)
 }
 else
  if(3===i||4===i)return e.nodeValue}
 else
  for(; t=e[a++]; )
   n+=r(t);
 return n} 
 ,(a=ie.selectors={ 
 cacheLength:50,createPseudo:se,match:G,attrHandle:{ 
 } 
 ,find:{ }
 ,relative:{ ">":{
 dir:"parentNode",first:!0} 
 ," ":{ 
 dir:"parentNode"} 
 ,"+":{ 
 dir:"previousSibling",first:!0} 
 ,"~":{ 
 dir:"previousSibling"} 
 } 
 ,preFilter:{ 
 ATTR:function(e){ 
 return e[1]=e[1].replace(Z,ee),
     e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),
 "~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)
 }
 ,CHILD:function(e){ 
 return e[1]=e[1].toLowerCase(),
     "nth"===e[1].slice(0,3)?(e[3]||ie.error(e[0]),
             e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),
             e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ie.error(e[0]),e
 }
 ,PSEUDO:function(e){ 
 var t,n=!e[6]&&e[2]; 
 return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&W.test(n)&&(t=o(n,!0))&&(t=n.indexOf(")",
                 n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),
             e[2]=n.slice(0,t)),e.slice(0,3))
 }
 } 
 ,filter:{ 
 TAG:function(e){ 
 var t=e.replace(Z,ee).toLowerCase(); 
 return"*"===e?function(){ 
 return!0} 
 :function(e){ 
 return e.nodeName&&e.nodeName.toLowerCase()===t} 
 } 
 ,CLASS:function(e){ 
 var t=j[e+" "]; 
 return t||(t=new RegExp("(^|"+I+")"+e+"("+I+"|$)"))&&j(e,function(e){ 
 return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")} 
 )} 
 ,ATTR:function(e,t,n){ 
 return function(a){ 
 var r=ie.attr(a,e); 
 return null==r?"!="===t:!t||(r+="","="===t?r===n:"!="===t?r!==n:"^="===t?n&&0===r.indexOf(n):"*="===t?n&&r.indexOf(n)>-1:"$="===t?n&&r.slice(-n.length)===n:"~="===t?(" "+r.replace(M," ")+" ").indexOf(n)>-1:"|="===t&&(r===n||r.slice(0,n.length+1)===n+"-"))} 
 } 
 ,CHILD:function(e,t,n,a,r){ 
 var i="nth"!==e.slice(0,3),o="last"!==e.slice(-4),s="of-type"===t; 
 return 1===a&&0===r?function(e){ 
 return!!e.parentNode} 
 :function(t,n,l){ 
 var c,u,d,p,f,h,m=i!==o?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s,k=!1; 
 if(g){ 
 if(i){ 
 for(; 
 m; 
 ){ 
 for(p=t; 
 p=p[m]; 
 )if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1; 
 h=m="only"===e&&!h&&"nextSibling"} 
 return!0} 
 if(h=[o?g.firstChild:g.lastChild],o&&y){ 
 for(k=(f=(c=(u=(d=(p=g)[b]||(p[b]={ 
 } 
 ))[p.uniqueID]||(d[p.uniqueID]={ 
 } 
 ))[e]||[])[0]===x&&c[1])&&c[2],p=f&&g.childNodes[f]; 
 p=++f&&p&&p[m]||(k=f=0)||h.pop(); 
 )if(1===p.nodeType&&++k&&p===t){ 
 u[e]=[x,f,k]; 
 break} 
 } 
 else if(y&&(p=t,d=p[b]||(p[b]={ 
 } 
 ),u=d[p.uniqueID]||(d[p.uniqueID]={ 
 } 
 ),c=u[e]||[],f=c[0]===x&&c[1],k=f),!1===k)for(; 
 (p=++f&&p&&p[m]||(k=f=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==v:1!==p.nodeType)||!++k||(y&&(d=p[b]||(p[b]={ 
 } 
 ),u=d[p.uniqueID]||(d[p.uniqueID]={ 
 } 
 ),u[e]=[x,k]),p!==t)); 
 ); 
 return(k-=r)===a||k%a==0&&k/a>=0} 
 } 
 } 
 ,PSEUDO:function(e,t){ 
 var n,r=a.pseudos[e]||a.setFilters[e.toLowerCase()]||ie.error("unsupported pseudo: "+e); 
 return r[b]?r(t):r.length>1?(n=[e,e,"",t],a.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){ 
 for(var a,i=r(e,t),o=i.length; 
 o--; 
 )a=L(e,i[o]),e[a]=!(n[a]=i[o])} 
 ):function(e){ 
 return r(e,0,n)} 
 ):r} 
 } 
 ,pseudos:{ 
 not:se(function(e){ 
 var t=[],n=[],a=s(e.replace(H,"$1")); 
 return a[b]?se(function(e,t,n,r){ 
 for(var i,o=a(e,null,r,[]),s=e.length; 
 s--; 
 )(i=o[s])&&(e[s]=!(t[s]=i))} 
 ):function(e,r,i){ 
 return t[0]=e,a(t,null,i,n),t[0]=null,!n.pop()} 
 } 
 ),has:se(function(e){ 
 return function(t){ 
 return ie(e,t).length>0} 
 } 
 ),contains:se(function(e){ 
 return e=e.replace(Z,ee),function(t){ 
 return(t.textContent||t.innerText||r(t)).indexOf(e)>-1} 
 } 
 ),lang:se(function(e){ 
 return U.test(e||"")||ie.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){ 
 var n; 
 do{ 
 if(n=m?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")} 
 while((t=t.parentNode)&&1===t.nodeType); 
 return!1} 
 } 
 ),target:function(t){ 
 var n=e.location&&e.location.hash; 
 return n&&n.slice(1)===t.id} 
 ,root:function(e){ 
 return e===h} 
 ,focus:function(e){ 
 return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)} 
 ,enabled:fe(!1),disabled:fe(!0),checked:function(e){ 
 var t=e.nodeName.toLowerCase(); 
 return"input"===t&&!!e.checked||"option"===t&&!!e.selected} 
 ,selected:function(e){ 
 return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected} 
 ,empty:function(e){ 
 for(e=e.firstChild; 
 e; 
 e=e.nextSibling)if(e.nodeType<6)return!1; 
 return!0} 
 ,parent:function(e){ 
 return!a.pseudos.empty(e)} 
 ,header:function(e){ 
 return K.test(e.nodeName)} 
 ,input:function(e){ 
 return V.test(e.nodeName)} 
 ,button:function(e){ 
 var t=e.nodeName.toLowerCase(); 
 return"input"===t&&"button"===e.type||"button"===t} 
 ,text:function(e){ 
 var t; 
 return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())} 
 ,first:he(function(){ 
 return[0]} 
 ),last:he(function(e,t){ 
 return[t-1]} 
 ),eq:he(function(e,t,n){ 
 return[n<0?n+t:n]} 
 ),even:he(function(e,t){ 
 for(var n=0; 
 n<t; 
 n+=2)e.push(n); 
 return e} 
 ),odd:he(function(e,t){ 
 for(var n=1; 
 n<t; 
 n+=2)e.push(n); 
 return e} 
 ),lt:he(function(e,t,n){ 
 for(var a=n<0?n+t:n; 
 --a>=0; 
 )e.push(a); 
 return e} 
 ),gt:he(function(e,t,n){ 
 for(var a=n<0?n+t:n; 
 ++a<t; 
 )e.push(a); 
 return e} 
 )} 
 } 
 ).pseudos.nth=a.pseudos.eq; 
 for(t in{ 
 radio:!0,checkbox:!0,file:!0,password:!0,image:!0} 
 )a.pseudos[t]=de(t); 
 for(t in{ 
 submit:!0,reset:!0} 
 )a.pseudos[t]=pe(t); 
 function ge(){ 
 } 
 ge.prototype=a.filters=a.pseudos,a.setFilters=new ge,o=ie.tokenize=function(e,t){ 
 var n,r,i,o,s,l,c,u=T[e+" "]; 
 if(u)return t?0:u.slice(0); 
 for(s=e,l=[],c=a.preFilter; 
 s; 
 ){ 
 n&&!(r=F.exec(s))||(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=Q.exec(s))&&(n=r.shift(),i.push({ 
 value:n,type:r[0].replace(H," ")} 
 ),s=s.slice(n.length)); 
 for(o in a.filter)!(r=G[o].exec(s))||c[o]&&!(r=c[o](r))||(n=r.shift(),i.push({ 
 value:n,type:o,matches:r} 
 ),s=s.slice(n.length)); 
 if(!n)break} 
 return t?s.length:s?ie.error(e):T(e,l).slice(0)} 
 ; 
 function ve(e){ 
 for(var t=0,n=e.length,a=""; 
 t<n; 
 t++)a+=e[t].value; 
 return a} 
 function ye(e,t,n){ 
 var a=t.dir,r=t.next,i=r||a,o=n&&"parentNode"===i,s=C++; 
 return t.first?function(t,n,r){ 
 for(; 
 t=t[a]; 
 )if(1===t.nodeType||o)return e(t,n,r); 
 return!1} 
 :function(t,n,l){ 
 var c,u,d,p=[x,s]; 
 if(l){ 
 for(; 
 t=t[a]; 
 )if((1===t.nodeType||o)&&e(t,n,l))return!0} 
 else for(; 
 t=t[a]; 
 )if(1===t.nodeType||o)if(d=t[b]||(t[b]={ 
 } 
 ),u=d[t.uniqueID]||(d[t.uniqueID]={ 
 } 
 ),r&&r===t.nodeName.toLowerCase())t=t[a]||t; 
 else{ 
 if((c=u[i])&&c[0]===x&&c[1]===s)return p[2]=c[2]; 
 if(u[i]=p,p[2]=e(t,n,l))return!0} 
 return!1} 
 } 
 function ke(e){ 
 return e.length>1?function(t,n,a){ 
 for(var r=e.length; 
 r--; 
 )if(!e[r](t,n,a))return!1; 
 return!0} 
 :e[0]} 
 function be(e,t,n,a,r){ 
 for(var i,o=[],s=0,l=e.length,c=null!=t; 
 s<l; 
 s++)(i=e[s])&&(n&&!n(i,a,r)||(o.push(i),c&&t.push(s))); 
 return o} 
 function we(e,t,n,a,r,i){ 
 return a&&!a[b]&&(a=we(a)),r&&!r[b]&&(r=we(r,i)),se(function(i,o,s,l){ 
 var c,u,d,p=[],f=[],h=o.length,m=i||function(e,t,n){ 
 for(var a=0,r=t.length; 
 a<r; 
 a++)ie(e,t[a],n); 
 return n} 
 (t||"*",s.nodeType?[s]:s,[]),g=!e||!i&&t?m:be(m,p,e,s,l),v=n?r||(i?e:h||a)?[]:o:g; 
 if(n&&n(g,v,s,l),a)for(c=be(v,f),a(c,[],s,l),u=c.length; 
 u--; 
 )(d=c[u])&&(v[f[u]]=!(g[f[u]]=d)); 
 if(i){ 
 if(r||e){ 
 if(r){ 
 for(c=[],u=v.length; 
 u--; 
 )(d=v[u])&&c.push(g[u]=d); 
 r(null,v=[],c,l)} 
 for(u=v.length; 
 u--; 
 )(d=v[u])&&(c=r?L(i,d):p[u])>-1&&(i[c]=!(o[c]=d))} 
 } 
 else v=be(v===o?v.splice(h,v.length):v),r?r(null,o,v,l):R.apply(o,v)} 
 )} 
 function xe(e){ 
 for(var t,n,r,i=e.length,o=a.relative[e[0].type],s=o||a.relative[" "],l=o?1:0,u=ye(function(e){ 
 return e===t} 
 ,s,!0),d=ye(function(e){ 
 return L(t,e)>-1} 
 ,s,!0),p=[function(e,n,a){ 
 var r=!o&&(a||n!==c)||((t=n).nodeType?u(e,n,a):d(e,n,a)); 
 return t=null,r} 
 ]; 
 l<i; 
 l++)if(n=a.relative[e[l].type])p=[ye(ke(p),n)]; 
 else{ 
 if((n=a.filter[e[l].type].apply(null,e[l].matches))[b]){ 
 for(r=++l; 
 r<i&&!a.relative[e[r].type]; 
 r++); 
 return we(l>1&&ke(p),l>1&&ve(e.slice(0,l-1).concat({ 
 value:" "===e[l-2].type?"*":""} 
 )).replace(H,"$1"),n,l<r&&xe(e.slice(l,r)),r<i&&xe(e=e.slice(r)),r<i&&ve(e))} 
 p.push(n)} 
 return ke(p)} 
 return s=ie.compile=function(e,t){ 
 var n,r=[],i=[],s=E[e+" "]; 
 if(!s){ 
 for(t||(t=o(e)),n=t.length; 
 n--; 
 )s=xe(t[n]),s[b]?r.push(s):i.push(s); 
 (s=E(e,function(e,t){ 
 var n=t.length>0,r=e.length>0,i=function(i,o,s,l,u){ 
 var d,h,g,v=0,y="0",k=i&&[],b=[],w=c,C=i||r&&a.find.TAG("*",u),j=x+=null==w?1:Math.random()||.1,T=C.length; 
 for(u&&(c=o===f||o||u); 
 y!==T&&null!=(d=C[y]); 
 y++){ 
 if(r&&d){ 
 for(h=0,o||d.ownerDocument===f||(p(d),s=!m); 
 g=e[h++]; 
 )if(g(d,o||f,s)){ 
 l.push(d); 
 break} 
 u&&(x=j)} 
 n&&((d=!g&&d)&&v--,i&&k.push(d))} 
 if(v+=y,n&&y!==v){ 
 for(h=0; 
 g=t[h++]; 
 )g(k,b,o,s); 
 if(i){ 
 if(v>0)for(; 
 y--; 
 )k[y]||b[y]||(b[y]=N.call(l)); 
 b=be(b)} 
 R.apply(l,b),u&&!i&&b.length>0&&v+t.length>1&&ie.uniqueSort(l)} 
 return u&&(x=j,c=w),k} 
 ; 
 return n?se(i):i} 
 (i,r))).selector=e} 
 return s} 
 ,l=ie.select=function(e,t,n,r){ 
 var i,l,c,u,d,p="function"==typeof e&&e,f=!r&&o(e=p.selector||e); 
 if(n=n||[],1===f.length){ 
 if((l=f[0]=f[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&9===t.nodeType&&m&&a.relative[l[1].type]){ 
 if(!(t=(a.find.ID(c.matches[0].replace(Z,ee),t)||[])[0]))return n; 
 p&&(t=t.parentNode),e=e.slice(l.shift().value.length)} 
 for(i=G.needsContext.test(e)?0:l.length; 
 i--&&(c=l[i],!a.relative[u=c.type]); 
 )if((d=a.find[u])&&(r=d(c.matches[0].replace(Z,ee),J.test(l[0].type)&&me(t.parentNode)||t))){ 
 if(l.splice(i,1),!(e=r.length&&ve(l)))return R.apply(n,r),n; 
 break} 
 } 
 return(p||s(e,f))(r,t,!m,n,!t||J.test(e)&&me(t.parentNode)||t),n} 
 ,n.sortStable=b.split("").sort(_).join("")===b,n.detectDuplicates=!!d,p(),n.sortDetached=le(function(e){ 
 return 1&e.compareDocumentPosition(f.createElement("fieldset"))} 
 ),le(function(e){ 
 return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")} 
 )||ce("type|href|height|width",function(e,t,n){ 
 if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)} 
 ),n.attributes&&le(function(e){ 
 return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")} 
 )||ce("value",function(e,t,n){ 
 if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue} 
 ),le(function(e){ 
 return null==e.getAttribute("disabled")} 
 )||ce($,function(e,t,n){ 
 var a; 
 if(!n)return!0===e[t]?t.toLowerCase():(a=e.getAttributeNode(t))&&a.specified?a.value:null} 
 ),ie} 
 (e); 
 g.find=x,g.expr=x.selectors,g.expr[":"]=g.expr.pseudos,g.uniqueSort=g.unique=x.uniqueSort,g.text=x.getText,g.isXMLDoc=x.isXML,g.contains=x.contains,g.escapeSelector=x.escape; 
 var C=function(e,t,n){ 
 for(var a=[],r=void 0!==n; 
 (e=e[t])&&9!==e.nodeType; 
 )if(1===e.nodeType){ 
 if(r&&g(e).is(n))break; 
 a.push(e)} 
 return a} 
 ,j=function(e,t){ 
 for(var n=[]; 
 e; 
 e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e); 
 return n} 
 ,T=g.expr.match.needsContext,E=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,_=/^.[^:#\[\.,]*$/; 
 function S(e,t,n){ 
 return g.isFunction(t)?g.grep(e,function(e,a){ 
 return!!t.call(e,a,e)!==n} 
 ):t.nodeType?g.grep(e,function(e){ 
 return e===t!==n} 
 ):"string"!=typeof t?g.grep(e,function(e){ 
 return l.call(t,e)>-1!==n} 
 ):_.test(t)?g.filter(t,e,n):(t=g.filter(t,e),g.grep(e,function(e){ 
 return l.call(t,e)>-1!==n&&1===e.nodeType} 
 ))} 
 g.filter=function(e,t,n){ 
 var a=t[0]; 
 return n&&(e=":not("+e+")"),1===t.length&&1===a.nodeType?g.find.matchesSelector(a,e)?[a]:[]:g.find.matches(e,g.grep(t,function(e){ 
 return 1===e.nodeType} 
 ))} 
 ,g.fn.extend({ 
 find:function(e){ 
 var t,n,a=this.length,r=this; 
 if("string"!=typeof e)return this.pushStack(g(e).filter(function(){ 
 for(t=0; 
 t<a; 
 t++)if(g.contains(r[t],this))return!0} 
 )); 
 for(n=this.pushStack([]),t=0; 
 t<a; 
 t++)g.find(e,r[t],n); 
 return a>1?g.uniqueSort(n):n} 
 ,filter:function(e){ 
 return this.pushStack(S(this,e||[],!1))} 
 ,not:function(e){ 
 return this.pushStack(S(this,e||[],!0))} 
 ,is:function(e){ 
 return!!S(this,"string"==typeof e&&T.test(e)?g(e):e||[],!1).length} 
 } 
 ); 
 var z,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; 
 (g.fn.init=function(e,t,n){ 
 var r,i; 
 if(!e)return this; 
 if(n=n||z,"string"==typeof e){ 
 if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:N.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e); 
 if(r[1]){ 
 if(t=t instanceof g?t[0]:t,g.merge(this,g.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:a,!0)),E.test(r[1])&&g.isPlainObject(t))for(r in t)g.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]); 
 return this} 
 return(i=a.getElementById(r[2]))&&(this[0]=i,this.length=1),this} 
 return e.nodeType?(this[0]=e,this.length=1,this):g.isFunction(e)?void 0!==n.ready?n.ready(e):e(g):g.makeArray(e,this)} 
 ).prototype=g.fn,z=g(a); 
 var A=/^(?:parents|prev(?:Until|All))/,R={ 
 children:!0,contents:!0,next:!0,prev:!0} 
 ; 
 g.fn.extend({ 
 has:function(e){ 
 var t=g(e,this),n=t.length; 
 return this.filter(function(){ 
 for(var e=0; 
 e<n; 
 e++)if(g.contains(this,t[e]))return!0} 
 )} 
 ,closest:function(e,t){ 
 var n,a=0,r=this.length,i=[],o="string"!=typeof e&&g(e); 
 if(!T.test(e))for(; 
 a<r; 
 a++)for(n=this[a]; 
 n&&n!==t; 
 n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&g.find.matchesSelector(n,e))){ 
 i.push(n); 
 break} 
 return this.pushStack(i.length>1?g.uniqueSort(i):i)} 
 ,index:function(e){ 
 return e?"string"==typeof e?l.call(g(e),this[0]):l.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1} 
 ,add:function(e,t){ 
 return this.pushStack(g.uniqueSort(g.merge(this.get(),g(e,t))))} 
 ,addBack:function(e){ 
 return this.add(null==e?this.prevObject:this.prevObject.filter(e))} 
 } 
 ); 
 function D(e,t){ 
 for(; 
 (e=e[t])&&1!==e.nodeType; 
 ); 
 return e} 
 g.each({ 
 parent:function(e){ 
 var t=e.parentNode; 
 return t&&11!==t.nodeType?t:null} 
 ,parents:function(e){ 
 return C(e,"parentNode")} 
 ,parentsUntil:function(e,t,n){ 
 return C(e,"parentNode",n)} 
 ,next:function(e){ 
 return D(e,"nextSibling")} 
 ,prev:function(e){ 
 return D(e,"previousSibling")} 
 ,nextAll:function(e){ 
 return C(e,"nextSibling")} 
 ,prevAll:function(e){ 
 return C(e,"previousSibling")} 
 ,nextUntil:function(e,t,n){ 
 return C(e,"nextSibling",n)} 
 ,prevUntil:function(e,t,n){ 
 return C(e,"previousSibling",n)} 
 ,siblings:function(e){ 
 return j((e.parentNode||{ 
 } 
 ).firstChild,e)} 
 ,children:function(e){ 
 return j(e.firstChild)} 
 ,contents:function(e){ 
 return e.contentDocument||g.merge([],e.childNodes)} 
 } 
 ,function(e,t){ 
 g.fn[e]=function(n,a){ 
 var r=g.map(this,t,n); 
 return"Until"!==e.slice(-5)&&(a=n),a&&"string"==typeof a&&(r=g.filter(a,r)),this.length>1&&(R[e]||g.uniqueSort(r),A.test(e)&&r.reverse()),this.pushStack(r)} 
 } 
 ); 
 var L=/[^\x20\t\r\n\f]+/g; 
 g.Callbacks=function(e){ 
 e="string"==typeof e?function(e){ 
 var t={ 
 } 
 ; 
 return g.each(e.match(L)||[],function(e,n){ 
 t[n]=!0} 
 ),t} 
 (e):g.extend({ 
 } 
 ,e); 
 var t,n,a,r,i=[],o=[],s=-1,l=function(){ 
 for(r=e.once,a=t=!0; 
 o.length; 
 s=-1)for(n=o.shift(); 
 ++s<i.length; 
 )!1===i[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=i.length,n=!1); 
 e.memory||(n=!1),t=!1,r&&(i=n?[]:"")} 
 ,c={ 
 add:function(){ 
 return i&&(n&&!t&&(s=i.length-1,o.push(n)),function t(n){ 
 g.each(n,function(n,a){ 
 g.isFunction(a)?e.unique&&c.has(a)||i.push(a):a&&a.length&&"string"!==g.type(a)&&t(a)} 
 )} 
 (arguments),n&&!t&&l()),this} 
 ,remove:function(){ 
 return g.each(arguments,function(e,t){ 
 for(var n; 
 (n=g.inArray(t,i,n))>-1; 
 )i.splice(n,1),n<=s&&s--} 
 ),this} 
 ,has:function(e){ 
 return e?g.inArray(e,i)>-1:i.length>0} 
 ,empty:function(){ 
 return i&&(i=[]),this} 
 ,disable:function(){ 
 return r=o=[],i=n="",this} 
 ,disabled:function(){ 
 return!i} 
 ,lock:function(){ 
 return r=o=[],n||t||(i=n=""),this} 
 ,locked:function(){ 
 return!!r} 
 ,fireWith:function(e,n){ 
 return r||(n=n||[],n=[e,n.slice?n.slice():n],o.push(n),t||l()),this} 
 ,fire:function(){ 
 return c.fireWith(this,arguments),this} 
 ,fired:function(){ 
 return!!a} 
 } 
 ; 
 return c} 
 ; 
 function $(e){ 
 return e} 
 function I(e){ 
 throw e} 
 function q(e,t,n){ 
 var a; 
 try{ 
 e&&g.isFunction(a=e.promise)?a.call(e).done(t).fail(n):e&&g.isFunction(a=e.then)?a.call(e,t,n):t.call(void 0,e)} 
 catch(e){ 
 n.call(void 0,e)} 
 } 
 g.extend({ 
 Deferred:function(t){ 
 var n=[["notify","progress",g.Callbacks("memory"),g.Callbacks("memory"),2],["resolve","done",g.Callbacks("once memory"),g.Callbacks("once memory"),0,"resolved"],["reject","fail",g.Callbacks("once memory"),g.Callbacks("once memory"),1,"rejected"]],a="pending",r={ 
 state:function(){ 
 return a} 
 ,always:function(){ 
 return i.done(arguments).fail(arguments),this} 
 ,catch:function(e){ 
 return r.then(null,e)} 
 ,pipe:function(){ 
 var e=arguments; 
 return g.Deferred(function(t){ 
 g.each(n,function(n,a){ 
 var r=g.isFunction(e[a[4]])&&e[a[4]]; 
 i[a[1]](function(){ 
 var e=r&&r.apply(this,arguments); 
 e&&g.isFunction(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[a[0]+"With"](this,r?[e]:arguments)} 
 )} 
 ),e=null} 
 ).promise()} 
 ,then:function(t,a,r){ 
 var i=0; 
 function o(t,n,a,r){ 
 return function(){ 
 var s=this,l=arguments,c=function(){ 
 var e,c; 
 if(!(t<i)){ 
 if((e=a.apply(s,l))===n.promise())throw new TypeError("Thenable self-resolution"); 
 c=e&&("object"==typeof e||"function"==typeof e)&&e.then,g.isFunction(c)?r?c.call(e,o(i,n,$,r),o(i,n,I,r)):(i++,c.call(e,o(i,n,$,r),o(i,n,I,r),o(i,n,$,n.notifyWith))):(a!==$&&(s=void 0,l=[e]),(r||n.resolveWith)(s,l))} 
 } 
 ,u=r?c:function(){ 
 try{ 
 c()} 
 catch(e){ 
 g.Deferred.exceptionHook&&g.Deferred.exceptionHook(e,u.stackTrace),t+1>=i&&(a!==I&&(s=void 0,l=[e]),n.rejectWith(s,l))} 
 } 
 ; 
 t?u():(g.Deferred.getStackHook&&(u.stackTrace=g.Deferred.getStackHook()),e.setTimeout(u))} 
 } 
 return g.Deferred(function(e){ 
 n[0][3].add(o(0,e,g.isFunction(r)?r:$,e.notifyWith)),n[1][3].add(o(0,e,g.isFunction(t)?t:$)),n[2][3].add(o(0,e,g.isFunction(a)?a:I))} 
 ).promise()} 
 ,promise:function(e){ 
 return null!=e?g.extend(e,r):r} 
 } 
 ,i={ 
 } 
 ; 
 return g.each(n,function(e,t){ 
 var o=t[2],s=t[5]; 
 r[t[1]]=o.add,s&&o.add(function(){ 
 a=s} 
 ,n[3-e][2].disable,n[0][2].lock),o.add(t[3].fire),i[t[0]]=function(){ 
 return i[t[0]+"With"](this===i?void 0:this,arguments),this} 
 ,i[t[0]+"With"]=o.fireWith} 
 ),r.promise(i),t&&t.call(i,i),i} 
 ,when:function(e){ 
 var t=arguments.length,n=t,a=Array(n),r=i.call(arguments),o=g.Deferred(),s=function(e){ 
 return function(n){ 
 a[e]=this,r[e]=arguments.length>1?i.call(arguments):n,--t||o.resolveWith(a,r)} 
 } 
 ; 
 if(t<=1&&(q(e,o.done(s(n)).resolve,o.reject),"pending"===o.state()||g.isFunction(r[n]&&r[n].then)))return o.then(); 
 for(; 
 n--; 
 )q(r[n],s(n),o.reject); 
 return o.promise()} 
 } 
 ); 
 var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; 
 g.Deferred.exceptionHook=function(t,n){ 
 e.console&&e.console.warn&&t&&P.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)} 
 ,g.readyException=function(t){ 
 e.setTimeout(function(){ 
 throw t} 
 )} 
 ; 
 var O=g.Deferred(); 
 g.fn.ready=function(e){ 
 return O.then(e).catch(function(e){ 
 g.readyException(e)} 
 ),this} 
 ,g.extend({ 
 isReady:!1,readyWait:1,holdReady:function(e){ 
 e?g.readyWait++:g.ready(!0)} 
 ,ready:function(e){ 
 (!0===e?--g.readyWait:g.isReady)||(g.isReady=!0,!0!==e&&--g.readyWait>0||O.resolveWith(a,[g]))} 
 } 
 ),g.ready.then=O.then; 
 function M(){ 
 a.removeEventListener("DOMContentLoaded",M),e.removeEventListener("load",M),g.ready()} 
 "complete"===a.readyState||"loading"!==a.readyState&&!a.documentElement.doScroll?e.setTimeout(g.ready):(a.addEventListener("DOMContentLoaded",M),e.addEventListener("load",M)); 
 var H=function(e,t,n,a,r,i,o){ 
 var s=0,l=e.length,c=null==n; 
 if("object"===g.type(n)){ 
 r=!0; 
 for(s in n)H(e,t,s,n[s],!0,i,o)} 
 else if(void 0!==a&&(r=!0,g.isFunction(a)||(o=!0),c&&(o?(t.call(e,a),t=null):(c=t,t=function(e,t,n){ 
 return c.call(g(e),n)} 
 )),t))for(; 
 s<l; 
 s++)t(e[s],n,o?a:a.call(e[s],s,t(e[s],n))); 
 return r?e:c?t.call(e):l?t(e[0],n):i} 
 ,F=function(e){ 
 return 1===e.nodeType||9===e.nodeType||!+e.nodeType} 
 ; 
 function Q(){ 
 this.expando=g.expando+Q.uid++} 
 Q.uid=1,Q.prototype={ 
 cache:function(e){ 
 var t=e[this.expando]; 
 return t||(t={ 
 } 
 ,F(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{ 
 value:t,configurable:!0} 
 ))),t} 
 ,set:function(e,t,n){ 
 var a,r=this.cache(e); 
 if("string"==typeof t)r[g.camelCase(t)]=n; 
 else for(a in t)r[g.camelCase(a)]=t[a]; 
 return r} 
 ,get:function(e,t){ 
 return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][g.camelCase(t)]} 
 ,access:function(e,t,n){ 
 return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)} 
 ,remove:function(e,t){ 
 var n,a=e[this.expando]; 
 if(void 0!==a){ 
 if(void 0!==t){ 
 n=(t=g.isArray(t)?t.map(g.camelCase):(t=g.camelCase(t))in a?[t]:t.match(L)||[]).length; 
 for(; 
 n--; 
 )delete a[t[n]]} 
 (void 0===t||g.isEmptyObject(a))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])} 
 } 
 ,hasData:function(e){ 
 var t=e[this.expando]; 
 return void 0!==t&&!g.isEmptyObject(t)} 
 } 
 ; 
 var B=new Q,W=new Q,
     U=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
     G=/[A-Z]/g;
 function V(e,t,n){ 
 var a; 
 if(void 0===n&&1===e.nodeType)if(a="data-"+t.replace(G,"-$&").toLowerCase(),n=e.getAttribute(a),"string"==typeof n){ 
 try{ 
 n="true"===(r=n)||"false"!==r&&("null"===r?null:r===+r+""?+r:U.test(r)?JSON.parse(r):r)} 
 catch(e){ 
 } 
 W.set(e,t,n)} 
 else n=void 0; 
 var r; 
 return n} 
 g.extend({ 
 hasData:function(e){ 
 return W.hasData(e)||B.hasData(e)} 
 ,data:function(e,t,n){ 
 return W.access(e,t,n)} 
 ,removeData:function(e,t){ 
 W.remove(e,t)} 
 ,_data:function(e,t,n){ 
 return B.access(e,t,n)} 
 ,_removeData:function(e,t){ 
 B.remove(e,t)} 
 } 
 ),g.fn.extend({ 
 data:function(e,t){ 
 var n,a,r,i=this[0],o=i&&i.attributes; 
 if(void 0===e){ 
 if(this.length&&(r=W.get(i),1===i.nodeType&&!B.get(i,"hasDataAttrs"))){ 
 for(n=o.length; 
 n--; 
 )o[n]&&(a=o[n].name,0===a.indexOf("data-")&&(a=g.camelCase(a.slice(5)),V(i,a,r[a]))); 
 B.set(i,"hasDataAttrs",!0)} 
 return r} 
 return"object"==typeof e?this.each(function(){ 
 W.set(this,e)} 
 ):H(this,function(t){ 
 var n; 
 if(i&&void 0===t){ 
 if(void 0!==(n=W.get(i,e)))return n; 
 if(void 0!==(n=V(i,e)))return n} 
 else this.each(function(){ 
 W.set(this,e,t)} 
 )} 
 ,null,t,arguments.length>1,null,!0)} 
 ,removeData:function(e){ 
 return this.each(function(){ 
 W.remove(this,e)} 
 )} 
 } 
 ),g.extend({ 
 queue:function(e,t,n){ 
 var a; 
 if(e)return t=(t||"fx")+"queue",a=B.get(e,t),n&&(!a||g.isArray(n)?a=B.access(e,t,g.makeArray(n)):a.push(n)),a||[]} 
 ,dequeue:function(e,t){ 
 t=t||"fx"; 
 var n=g.queue(e,t),a=n.length,r=n.shift(),i=g._queueHooks(e,t); 
 "inprogress"===r&&(r=n.shift(),a--),r&&("fx"===t&&n.unshift("inprogress"),delete i.stop,r.call(e,function(){ 
 g.dequeue(e,t)} 
 ,i)),!a&&i&&i.empty.fire()} 
 ,_queueHooks:function(e,t){ 
 var n=t+"queueHooks"; 
 return B.get(e,n)||B.access(e,n,{ 
 empty:g.Callbacks("once memory").add(function(){ 
 B.remove(e,[t+"queue",n])} 
 )} 
 )} 
 } 
 ),g.fn.extend({ 
 queue:function(e,t){ 
 var n=2; 
 return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?g.queue(this[0],e):void 0===t?this:this.each(function(){ 
 var n=g.queue(this,e,t); 
 g._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&g.dequeue(this,e)} 
 )} 
 ,dequeue:function(e){ 
 return this.each(function(){ 
 g.dequeue(this,e)} 
 )} 
 ,clearQueue:function(e){ 
 return this.queue(e||"fx",[])} 
 ,promise:function(e,t){ 
 var n,a=1,r=g.Deferred(),i=this,o=this.length,s=function(){ 
 --a||r.resolveWith(i,[i])} 
 ; 
 for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx"; 
 o--; 
 )n=B.get(i[o],e+"queueHooks"),n&&n.empty&&(a++,n.empty.add(s)); 
 return s(),r.promise(t)} 
 } 
 ); 
 var K=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,X=new RegExp("^(?:([+-])=|)("+K+")([a-z%]*)$","i"),Y=["Top","Right","Bottom","Left"],J=function(e,t){ 
 return"none"===(e=t||e).style.display||""===e.style.display&&g.contains(e.ownerDocument,e)&&"none"===g.css(e,"display")} 
 ,Z=function(e,t,n,a){ 
 var r,i,o={ 
 } 
 ; 
 for(i in t)o[i]=e.style[i],e.style[i]=t[i]; 
 r=n.apply(e,a||[]); 
 for(i in t)e.style[i]=o[i]; 
 return r} 
 ; 
 function ee(e,t,n,a){ 
 var r,i=1,o=20,s=a?function(){ 
 return a.cur()} 
 :function(){ 
 return g.css(e,t,"")} 
 ,l=s(),c=n&&n[3]||(g.cssNumber[t]?"":"px"),u=(g.cssNumber[t]||"px"!==c&&+l)&&X.exec(g.css(e,t)); 
 if(u&&u[3]!==c){ 
 c=c||u[3],n=n||[],u=+l||1; 
 do{ 
 i=i||".5",u/=i,g.style(e,t,u+c)} 
 while(i!==(i=s()/l)&&1!==i&&--o)} 
 return n&&(u=+u||+l||0,r=n[1]?u+(n[1]+1)*n[2]:+n[2],a&&(a.unit=c,a.start=u,a.end=r)),r} 
 var te={ 
 } 
 ; 
 function ne(e){ 
 var t,n=e.ownerDocument,a=e.nodeName,r=te[a]; 
 return r||(t=n.body.appendChild(n.createElement(a)),r=g.css(t,"display"),t.parentNode.removeChild(t),"none"===r&&(r="block"),te[a]=r,r)} 
 function ae(e,t){ 
 for(var n,a,r=[],i=0,o=e.length; 
 i<o; 
 i++)a=e[i],a.style&&(n=a.style.display,t?("none"===n&&(r[i]=B.get(a,"display")||null,r[i]||(a.style.display="")),""===a.style.display&&J(a)&&(r[i]=ne(a))):"none"!==n&&(r[i]="none",B.set(a,"display",n))); 
 for(i=0; 
 i<o; 
 i++)null!=r[i]&&(e[i].style.display=r[i]); 
 return e} 
 g.fn.extend({ 
 show:function(){ 
 return ae(this,!0)} 
 ,hide:function(){ 
 return ae(this)} 
 ,toggle:function(e){ 
 return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ 
 J(this)?g(this).show():g(this).hide()} 
 )} 
 } 
 ); 
 var re=/^(?:checkbox|radio)$/i,ie=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,oe=/^$|\/(?:java|ecma)script/i,se={ 
 option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]} 
 ; 
 se.optgroup=se.option,se.tbody=se.tfoot=se.colgroup=se.caption=se.thead,se.th=se.td; 
 function le(e,t){ 
 var n; 
 return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&g.nodeName(e,t)?g.merge([e],n):n} 
 function ce(e,t){ 
 for(var n=0,a=e.length; 
 n<a; 
 n++)B.set(e[n],"globalEval",!t||B.get(t[n],"globalEval"))}
     var ue=/<|&#?\w+;/;
 function de(e,t,n,a,r){ 
 for(var i,o,s,l,c,u,d=t.createDocumentFragment(),p=[],f=0,h=e.length; 
 f<h; 
 f++)
  if(i=e[f],i||0===i)if("object"===g.type(i))g.merge(p,i.nodeType?[i]:i);
 else if(ue.test(i)){ 
 for(o=o||d.appendChild(t.createElement("div")),s=(ie.exec(i)||["",""])[1].toLowerCase(),l=se[s]||se._default,o.innerHTML=l[1]+g.htmlPrefilter(i)+l[2],u=l[0]; 
 u--; 
 )o=o.lastChild; 
 g.merge(p,o.childNodes),(o=d.firstChild).textContent=""} 
 else p.push(t.createTextNode(i)); 
 for(d.textContent="",f=0; i=p[f++]; )
  if(a&&g.inArray(i,a)>-1)r&&r.push(i);
 else
  if(c=g.contains(i.ownerDocument,i),o=le(d.appendChild(i),"script"),c&&ce(o),n)
   for(u=0; i=o[u++];  )
    oe.test(i.type||"")&&n.push(i);
 return d} 
 !function(){ 
 var e=a.createDocumentFragment().appendChild(a.createElement("div")),
     t=a.createElement("input");
     t.setAttribute("type","radio"),
         t.setAttribute("checked","checked"),
         t.setAttribute("name","t"),
         e.appendChild(t),
         h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,
         e.innerHTML="<textarea>x</textarea>",
         h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue
 }
 (); 
 var pe=a.documentElement,
     fe=/^key/,
     he=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,me=/^([^.]*)(?:\.(.+)|)/;
 function ge(){ 
 return!0} 
 function ve(){ 
 return!1} 
 function ye(){ 
 try{ 
 return a.activeElement} 
 catch(e){ 
 } 
 } 
 function ke(e,t,n,a,r,i){ 
 var o,s; 
 if("object"==typeof t){ 
 "string"!=typeof n&&(a=a||n,n=void 0); 
 for(s in t)ke(e,s,n,a,t[s],i); 
 return e} 
 if(null==a&&null==r?(r=n,a=n=void 0):null==r&&("string"==typeof n?(r=a,a=void 0):(r=a,a=n,n=void 0)),!1===r)r=ve; 
 else if(!r)return e; 
 return 1===i&&(o=r,r=function(e){ 
 return g().off(e),o.apply(this,arguments)} 
 ,r.guid=o.guid||(o.guid=g.guid++)),e.each(function(){ 
 g.event.add(this,t,r,a,n)} 
 )} 
 g.event={ 
 global:{ 
 } 
 ,add:function(e,t,n,a,r){ 
 var i,o,s,l,c,u,d,p,f,h,m,v=B.get(e); 
 if(v)for(n.handler&&(i=n,n=i.handler,r=i.selector),r&&g.find.matchesSelector(pe,r),n.guid||(n.guid=g.guid++),(l=v.events)||(l=v.events={ 
 } 
 ),(o=v.handle)||(o=v.handle=function(t){ 
 return void 0!==g&&g.event.triggered!==t.type?g.event.dispatch.apply(e,arguments):void 0} 
 ),c=(t=(t||"").match(L)||[""]).length; 
 c--; 
 )s=me.exec(t[c])||[],f=m=s[1],h=(s[2]||"").split(".").sort(),f&&(d=g.event.special[f]||{ 
 } 
 ,f=(r?d.delegateType:d.bindType)||f,d=g.event.special[f]||{ 
 } 
 ,u=g.extend({ 
 type:f,origType:m,data:a,handler:n,guid:n.guid,selector:r,needsContext:r&&g.expr.match.needsContext.test(r),namespace:h.join(".")} 
 ,i),(p=l[f])||(p=l[f]=[],p.delegateCount=0,d.setup&&!1!==d.setup.call(e,a,h,o)||e.addEventListener&&e.addEventListener(f,o)),d.add&&(d.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),r?p.splice(p.delegateCount++,0,u):p.push(u),g.event.global[f]=!0)} 
 ,remove:function(e,t,n,a,r){ 
 var i,o,s,l,c,u,d,p,f,h,m,v=B.hasData(e)&&B.get(e); 
 if(v&&(l=v.events)){ 
 for(c=(t=(t||"").match(L)||[""]).length; 
 c--; 
 )if(s=me.exec(t[c])||[],f=m=s[1],h=(s[2]||"").split(".").sort(),f){ 
 for(d=g.event.special[f]||{ 
 } 
 ,p=l[f=(a?d.delegateType:d.bindType)||f]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=i=p.length; 
 i--; 
 )u=p[i],!r&&m!==u.origType||n&&n.guid!==u.guid||s&&!s.test(u.namespace)||a&&a!==u.selector&&("**"!==a||!u.selector)||(p.splice(i,1),u.selector&&p.delegateCount--,d.remove&&d.remove.call(e,u)); 
 o&&!p.length&&(d.teardown&&!1!==d.teardown.call(e,h,v.handle)||g.removeEvent(e,f,v.handle),delete l[f])} 
 else for(f in l)g.event.remove(e,f+t[c],n,a,!0); 
 g.isEmptyObject(l)&&B.remove(e,"handle events")} 
 } 
 ,dispatch:function(e){ 
 var t,n,a,r,i,o,s=g.event.fix(e),l=new Array(arguments.length),c=(B.get(this,"events")||{ 
 } 
 )[s.type]||[],u=g.event.special[s.type]||{ 
 } 
 ; 
 for(l[0]=s,t=1; 
 t<arguments.length; 
 t++)l[t]=arguments[t]; 
 if(s.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,s)){ 
 for(o=g.event.handlers.call(this,s,c),t=0; 
 (r=o[t++])&&!s.isPropagationStopped(); 
 )for(s.currentTarget=r.elem,n=0; 
 (i=r.handlers[n++])&&!s.isImmediatePropagationStopped(); 
 )s.rnamespace&&!s.rnamespace.test(i.namespace)||(s.handleObj=i,s.data=i.data,a=((g.event.special[i.origType]||{ 
 } 
 ).handle||i.handler).apply(r.elem,l),void 0!==a&&!1===(s.result=a)&&(s.preventDefault(),s.stopPropagation())); 
 return u.postDispatch&&u.postDispatch.call(this,s),s.result} 
 } 
 ,handlers:function(e,t){ 
 var n,a,r,i,o,s=[],l=t.delegateCount,c=e.target; 
 if(l&&c.nodeType&&!("click"===e.type&&e.button>=1))for(; 
 c!==this; 
 c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){ 
 for(i=[],o={ 
 } 
 ,n=0; 
 n<l; 
 n++)a=t[n],r=a.selector+" ",void 0===o[r]&&(o[r]=a.needsContext?g(r,this).index(c)>-1:g.find(r,this,null,[c]).length),o[r]&&i.push(a); 
 i.length&&s.push({ 
 elem:c,handlers:i} 
 )} 
 return c=this,l<t.length&&s.push({ 
 elem:c,handlers:t.slice(l)} 
 ),s} 
 ,addProp:function(e,t){ 
 Object.defineProperty(g.Event.prototype,e,{ 
 enumerable:!0,configurable:!0,get:g.isFunction(t)?function(){ 
 if(this.originalEvent)return t(this.originalEvent)} 
 :function(){ 
 if(this.originalEvent)return this.originalEvent[e]} 
 ,set:function(t){ 
 Object.defineProperty(this,e,{ 
 enumerable:!0,configurable:!0,writable:!0,value:t} 
 )} 
 } 
 )} 
 ,fix:function(e){ 
 return e[g.expando]?e:new g.Event(e)} 
 ,special:{ 
 load:{ 
 noBubble:!0} 
 ,focus:{ 
 trigger:function(){ 
 if(this!==ye()&&this.focus)return this.focus(),!1} 
 ,delegateType:"focusin"} 
 ,blur:{ 
 trigger:function(){ 
 if(this===ye()&&this.blur)return this.blur(),!1} 
 ,delegateType:"focusout"} 
 ,click:{ 
 trigger:function(){ 
 if("checkbox"===this.type&&this.click&&g.nodeName(this,"input"))return this.click(),!1} 
 ,_default:function(e){ 
 return g.nodeName(e.target,"a")} 
 } 
 ,beforeunload:{ 
 postDispatch:function(e){ 
 void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)} 
 } 
 } 
 } 
 ,g.removeEvent=function(e,t,n){ 
 e.removeEventListener&&e.removeEventListener(t,n)} 
 ,g.Event=function(e,t){ 
 return this instanceof g.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ge:ve,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&g.extend(this,t),this.timeStamp=e&&e.timeStamp||g.now(),void(this[g.expando]=!0)):new g.Event(e,t)} 
 ,g.Event.prototype={ 
 constructor:g.Event,isDefaultPrevented:ve,isPropagationStopped:ve,isImmediatePropagationStopped:ve,isSimulated:!1,preventDefault:function(){ 
 var e=this.originalEvent; 
 this.isDefaultPrevented=ge,e&&!this.isSimulated&&e.preventDefault()} 
 ,stopPropagation:function(){ 
 var e=this.originalEvent; 
 this.isPropagationStopped=ge,e&&!this.isSimulated&&e.stopPropagation()} 
 ,stopImmediatePropagation:function(){ 
 var e=this.originalEvent; 
 this.isImmediatePropagationStopped=ge,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()} 
 } 
 ,g.each({ 
 altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){ 
 var t=e.button; 
 return null==e.which&&fe.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&he.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which} 
 } 
 ,g.event.addProp),g.each({ 
 mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"} 
 ,function(e,t){ 
 g.event.special[e]={ 
 delegateType:t,bindType:t,handle:function(e){ 
 var n,a=e.relatedTarget,r=e.handleObj; 
 return a&&(a===this||g.contains(this,a))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n} 
 } 
 } 
 ),g.fn.extend({ 
 on:function(e,t,n,a){ 
 return ke(this,e,t,n,a)} 
 ,one:function(e,t,n,a){ 
 return ke(this,e,t,n,a,1)} 
 ,off:function(e,t,n){ 
 var a,r; 
 if(e&&e.preventDefault&&e.handleObj)return a=e.handleObj,g(e.delegateTarget).off(a.namespace?a.origType+"."+a.namespace:a.origType,a.selector,a.handler),this; 
 if("object"==typeof e){ 
 for(r in e)this.off(r,t,e[r]); 
 return this} 
 return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ve),this.each(function(){ 
 g.event.remove(this,e,n,t)} 
 )} 
 } 
 ); 
 var be=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,we=/<script|<style|<link/i,xe=/checked\s*(?:[^=]|=\s*.checked.)/i,Ce=/^true\/(.*)/,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; 
 function Te(e,t){ 
 return g.nodeName(e,"table")&&g.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e:e} 
 function Ee(e){ 
 return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e} 
 function _e(e){ 
 var t=Ce.exec(e.type); 
 return t?e.type=t[1]:e.removeAttribute("type"),e} 
 function Se(e,t){ 
 var n,a,r,i,o,s,l,c; 
 if(1===t.nodeType){ 
 if(B.hasData(e)&&(i=B.access(e),o=B.set(t,i),c=i.events)){ 
 delete o.handle,o.events={ 
 } 
 ; 
 for(r in c)for(n=0,a=c[r].length; 
 n<a; 
 n++)g.event.add(t,r,c[r][n])} 
 W.hasData(e)&&(s=W.access(e),l=g.extend({ 
 } 
 ,s),W.set(t,l))} 
 } 
 function ze(e,t){ 
 var n=t.nodeName.toLowerCase(); 
 "input"===n&&re.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)} 
 function Ne(e,t,n,a){ 
 t=o.apply([],t); 
 var r,i,s,l,c,u,d=0,p=e.length,f=p-1,v=t[0],y=g.isFunction(v); 
 if(y||p>1&&"string"==typeof v&&!h.checkClone&&xe.test(v))return e.each(function(r){ 
 var i=e.eq(r); 
 y&&(t[0]=v.call(this,r,i.html())),Ne(i,t,n,a)} 
 ); 
 if(p&&(r=de(t,e[0].ownerDocument,!1,e,a),i=r.firstChild,1===r.childNodes.length&&(r=i),i||a)){ 
 for(l=(s=g.map(le(r,"script"),Ee)).length; 
 d<p; 
 d++)c=r,d!==f&&(c=g.clone(c,!0,!0),l&&g.merge(s,le(c,"script"))),n.call(e[d],c,d); 
 if(l)for(u=s[s.length-1].ownerDocument,g.map(s,_e),d=0; 
 d<l; 
 d++)c=s[d],oe.test(c.type||"")&&!B.access(c,"globalEval")&&g.contains(u,c)&&(c.src?g._evalUrl&&g._evalUrl(c.src):m(c.textContent.replace(je,""),u))} 
 return e} 
 function Ae(e,t,n){ 
 for(var a,r=t?g.filter(t,e):e,i=0; 
 null!=(a=r[i]); 
 i++)n||1!==a.nodeType||g.cleanData(le(a)),a.parentNode&&(n&&g.contains(a.ownerDocument,a)&&ce(le(a,"script")),a.parentNode.removeChild(a)); 
 return e} 
 g.extend({ 
 htmlPrefilter:function(e){ 
 return e.replace(be,"<$1></$2>")} 
 ,clone:function(e,t,n){ 
 var a,r,i,o,s=e.cloneNode(!0),l=g.contains(e.ownerDocument,e); 
 if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||g.isXMLDoc(e)))for(o=le(s),i=le(e),a=0,r=i.length; 
 a<r; 
 a++)ze(i[a],o[a]); 
 if(t)if(n)for(i=i||le(e),o=o||le(s),a=0,r=i.length; 
 a<r; 
 a++)Se(i[a],o[a]); 
 else Se(e,s); 
 return(o=le(s,"script")).length>0&&ce(o,!l&&le(e,"script")),s} 
 ,cleanData:function(e){ 
 for(var t,n,a,r=g.event.special,i=0; 
 void 0!==(n=e[i]); 
 i++)if(F(n)){ 
 if(t=n[B.expando]){ 
 if(t.events)for(a in t.events)r[a]?g.event.remove(n,a):g.removeEvent(n,a,t.handle); 
 n[B.expando]=void 0} 
 n[W.expando]&&(n[W.expando]=void 0)} 
 } 
 } 
 ),g.fn.extend({ 
 detach:function(e){ 
 return Ae(this,e,!0)} 
 ,remove:function(e){ 
 return Ae(this,e)} 
 ,text:function(e){ 
 return H(this,function(e){ 
 return void 0===e?g.text(this):this.empty().each(function(){ 
 1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)} 
 )} 
 ,null,e,arguments.length)} 
 ,append:function(){ 
 return Ne(this,arguments,function(e){ 
 1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Te(this,e).appendChild(e)} 
 )} 
 ,prepend:function(){ 
 return Ne(this,arguments,function(e){ 
 if(1===this.nodeType||11===this.nodeType||9===this.nodeType){ 
 var t=Te(this,e); 
 t.insertBefore(e,t.firstChild)} 
 } 
 )} 
 ,before:function(){ 
 return Ne(this,arguments,function(e){ 
 this.parentNode&&this.parentNode.insertBefore(e,this)} 
 )} 
 ,after:function(){ 
 return Ne(this,arguments,function(e){ 
 this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)} 
 )} 
 ,empty:function(){ 
 for(var e,t=0; 
 null!=(e=this[t]); 
 t++)1===e.nodeType&&(g.cleanData(le(e,!1)),e.textContent=""); 
 return this} 
 ,clone:function(e,t){ 
 return e=null!=e&&e,t=null==t?e:t,this.map(function(){ 
 return g.clone(this,e,t)} 
 )} 
 ,html:function(e){ 
 return H(this,function(e){ 
 var t=this[0]||{ 
 } 
 ,n=0,a=this.length; 
 if(void 0===e&&1===t.nodeType)return t.innerHTML; 
 if("string"==typeof e&&!we.test(e)&&!se[(ie.exec(e)||["",""])[1].toLowerCase()]){ 
 e=g.htmlPrefilter(e); 
 try{ 
 for(; 
 n<a; 
 n++)t=this[n]||{ 
 } 
 ,1===t.nodeType&&(g.cleanData(le(t,!1)),t.innerHTML=e); 
 t=0} 
 catch(e){ 
 } 
 } 
 t&&this.empty().append(e)} 
 ,null,e,arguments.length)} 
 ,replaceWith:function(){ 
 var e=[]; 
 return Ne(this,arguments,function(t){ 
 var n=this.parentNode; 
 g.inArray(this,e)<0&&(g.cleanData(le(this)),n&&n.replaceChild(t,this))} 
 ,e)} 
 } 
 ),g.each({ 
 appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"} 
 ,function(e,t){ 
 g.fn[e]=function(e){ 
 for(var n,a=[],r=g(e),i=r.length-1,o=0; 
 o<=i; 
 o++)n=o===i?this:this.clone(!0),g(r[o])[t](n),s.apply(a,n.get()); 
 return this.pushStack(a)} 
 } 
 ); 
 var Re=/^margin/,De=new RegExp("^("+K+")(?!px)[a-z%]+$","i"),Le=function(t){ 
 var n=t.ownerDocument.defaultView; 
 return n&&n.opener||(n=e),n.getComputedStyle(t)} 
 ; 
 !function(){ 
 function t(){ 
 if(l){ 
 l.style.cssText="box-sizing:border-box; position:relative; display:block; margin:auto; border:1px; padding:1px; top:1%; width:50%",
     l.innerHTML="",pe.appendChild(s);
 var t=e.getComputedStyle(l); 
 n="1%"!==t.top,o="2px"===t.marginLeft,r="4px"===t.width,l.style.marginRight="50%",i="4px"===t.marginRight,pe.removeChild(s),l=null} 
 } 
 var n,r,i,o,s=a.createElement("div"),l=a.createElement("div"); 
 l.style&&(l.style.backgroundClip="content-box",
     l.cloneNode(!0).style.backgroundClip="",
     h.clearCloneStyle="content-box"===l.style.backgroundClip,
     s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
     s.appendChild(l),g.extend(h,{
 pixelPosition:function(){ 
 return t(),n} 
 ,boxSizingReliable:function(){ 
 return t(),r} 
 ,pixelMarginRight:function(){ 
 return t(),i} 
 ,reliableMarginLeft:function(){ 
 return t(),o} 
 } 
 ))} 
 (); 
 function $e(e,t,n){ 
 var a,r,i,o,s=e.style; 
 return(n=n||Le(e))&&(o=n.getPropertyValue(t)||n[t],""!==o||g.contains(e.ownerDocument,e)||(o=g.style(e,t)),!h.pixelMarginRight()&&De.test(o)&&Re.test(t)&&(a=s.width,r=s.minWidth,i=s.maxWidth,s.minWidth=s.maxWidth=s.width=o,o=n.width,s.width=a,s.minWidth=r,s.maxWidth=i)),void 0!==o?o+"":o} 
 function Ie(e,t){ 
 return{ 
 get:function(){ 
 return e()?void delete this.get:(this.get=t).apply(this,arguments)} 
 } 
 } 
 var qe=/^(none|table(?!-c[ea]).+)/,Pe={ 
 position:"absolute",visibility:"hidden",display:"block"} 
 ,Oe={ 
 letterSpacing:"0",fontWeight:"400"} 
 ,Me=["Webkit","Moz","ms"],He=a.createElement("div").style; 
 function Fe(e){ 
 if(e in He)return e; 
 for(var t=e[0].toUpperCase()+e.slice(1),n=Me.length; 
 n--; 
 )if(e=Me[n]+t,e in He)return e} 
 function Qe(e,t,n){ 
 var a=X.exec(t); 
 return a?Math.max(0,a[2]-(n||0))+(a[3]||"px"):t} 
 function Be(e,t,n,a,r){ 
 var i,o=0; 
 for(i=n===(a?"border":"content")?4:"width"===t?1:0; 
 i<4; 
 i+=2)"margin"===n&&(o+=g.css(e,n+Y[i],!0,r)),a?("content"===n&&(o-=g.css(e,"padding"+Y[i],!0,r)),"margin"!==n&&(o-=g.css(e,"border"+Y[i]+"Width",!0,r))):(o+=g.css(e,"padding"+Y[i],!0,r),"padding"!==n&&(o+=g.css(e,"border"+Y[i]+"Width",!0,r))); 
 return o} 
 function We(e,t,n){ 
 var a,r=!0,i=Le(e),o="border-box"===g.css(e,"boxSizing",!1,i); 
 if(e.getClientRects().length&&(a=e.getBoundingClientRect()[t]),a<=0||null==a){ 
 if(((a=$e(e,t,i))<0||null==a)&&(a=e.style[t]),De.test(a))return a; 
 r=o&&(h.boxSizingReliable()||a===e.style[t]),a=parseFloat(a)||0} 
 return a+Be(e,t,n||(o?"border":"content"),r,i)+"px"} 
 g.extend({ 
 cssHooks:{ 
 opacity:{ 
 get:function(e,t){ 
 if(t){ 
 var n=$e(e,"opacity"); 
 return""===n?"1":n} 
 } 
 } 
 } 
 ,cssNumber:{ 
 animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0} 
 ,cssProps:{ 
 float:"cssFloat"} 
 ,style:function(e,t,n,a){ 
 if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){ 
 var r,i,o,s=g.camelCase(t),l=e.style; 
 return t=g.cssProps[s]||(g.cssProps[s]=Fe(s)||s),o=g.cssHooks[t]||g.cssHooks[s],void 0===n?o&&"get"in o&&void 0!==(r=o.get(e,!1,a))?r:l[t]:("string"==(i=typeof n)&&(r=X.exec(n))&&r[1]&&(n=ee(e,t,r),i="number"),void(null!=n&&n==n&&("number"===i&&(n+=r&&r[3]||(g.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),o&&"set"in o&&void 0===(n=o.set(e,n,a))||(l[t]=n))))} 
 } 
 ,css:function(e,t,n,a){ 
 var r,i,o,s=g.camelCase(t); 
 return t=g.cssProps[s]||(g.cssProps[s]=Fe(s)||s),(o=g.cssHooks[t]||g.cssHooks[s])&&"get"in o&&(r=o.get(e,!0,n)),void 0===r&&(r=$e(e,t,a)),"normal"===r&&t in Oe&&(r=Oe[t]),""===n||n?(i=parseFloat(r),!0===n||isFinite(i)?i||0:r):r} 
 } 
 ),g.each(["height","width"],function(e,t){ 
 g.cssHooks[t]={ 
 get:function(e,n,a){ 
 if(n)return!qe.test(g.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?We(e,t,a):Z(e,Pe,function(){ 
 return We(e,t,a)} 
 )} 
 ,set:function(e,n,a){ 
 var r,i=a&&Le(e),o=a&&Be(e,t,a,"border-box"===g.css(e,"boxSizing",!1,i),i); 
 return o&&(r=X.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=g.css(e,t)),Qe(0,n,o)} 
 } 
 } 
 ),g.cssHooks.marginLeft=Ie(h.reliableMarginLeft,function(e,t){ 
 if(t)return(parseFloat($e(e,"marginLeft"))||e.getBoundingClientRect().left-Z(e,{ 
 marginLeft:0} 
 ,function(){ 
 return e.getBoundingClientRect().left} 
 ))+"px"} 
 ),g.each({ 
 margin:"",padding:"",border:"Width"} 
 ,function(e,t){ 
 g.cssHooks[e+t]={ 
 expand:function(n){ 
 for(var a=0,r={ 
 } 
 ,i="string"==typeof n?n.split(" "):[n]; 
 a<4; 
 a++)r[e+Y[a]+t]=i[a]||i[a-2]||i[0]; 
 return r} 
 } 
 ,Re.test(e)||(g.cssHooks[e+t].set=Qe)} 
 ),g.fn.extend({ 
 css:function(e,t){ 
 return H(this,function(e,t,n){ 
 var a,r,i={ 
 } 
 ,o=0; 
 if(g.isArray(t)){ 
 for(a=Le(e),r=t.length; 
 o<r; 
 o++)i[t[o]]=g.css(e,t[o],!1,a); 
 return i} 
 return void 0!==n?g.style(e,t,n):g.css(e,t)} 
 ,e,t,arguments.length>1)} 
 } 
 ); 
 function Ue(e,t,n,a,r){ 
 return new Ue.prototype.init(e,t,n,a,r)} 
 g.Tween=Ue,Ue.prototype={ 
 constructor:Ue,init:function(e,t,n,a,r,i){ 
 this.elem=e,this.prop=n,this.easing=r||g.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=a,this.unit=i||(g.cssNumber[n]?"":"px")} 
 ,cur:function(){ 
 var e=Ue.propHooks[this.prop]; 
 return e&&e.get?e.get(this):Ue.propHooks._default.get(this)} 
 ,run:function(e){ 
 var t,n=Ue.propHooks[this.prop]; 
 return this.options.duration?this.pos=t=g.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ue.propHooks._default.set(this),this} 
 } 
 ,Ue.prototype.init.prototype=Ue.prototype,Ue.propHooks={ 
 _default:{ 
 get:function(e){ 
 var t; 
 return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=g.css(e.elem,e.prop,""))&&"auto"!==t?t:0} 
 ,set:function(e){ 
 g.fx.step[e.prop]?g.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[g.cssProps[e.prop]]&&!g.cssHooks[e.prop]?e.elem[e.prop]=e.now:g.style(e.elem,e.prop,e.now+e.unit)} 
 } 
 } 
 ,Ue.propHooks.scrollTop=Ue.propHooks.scrollLeft={ 
 set:function(e){ 
 e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)} 
 } 
 ,g.easing={ 
 linear:function(e){ 
 return e} 
 ,swing:function(e){ 
 return.5-Math.cos(e*Math.PI)/2} 
 ,_default:"swing"} 
 ,g.fx=Ue.prototype.init,g.fx.step={ 
 } 
 ; 
 var Ge,Ve,Ke=/^(?:toggle|show|hide)$/,Xe=/queueHooks$/; 
 function Ye(){ 
 Ve&&(e.requestAnimationFrame(Ye),g.fx.tick())} 
 function Je(){ 
 return e.setTimeout(function(){ 
 Ge=void 0} 
 ),Ge=g.now()} 
 function Ze(e,t){ 
 var n,a=0,r={ 
 height:e} 
 ; 
 for(t=t?1:0; 
 a<4; 
 a+=2-t)n=Y[a],r["margin"+n]=r["padding"+n]=e; 
 return t&&(r.opacity=r.width=e),r} 
 function et(e,t,n){ 
 for(var a,r=(tt.tweeners[t]||[]).concat(tt.tweeners["*"]),i=0,o=r.length; 
 i<o; 
 i++)if(a=r[i].call(n,t,e))return a} 
 function tt(e,t,n){ 
 var a,r,i=0,o=tt.prefilters.length,s=g.Deferred().always(function(){ 
 delete l.elem} 
 ),l=function(){ 
 if(r)return!1; 
 for(var t=Ge||Je(),n=Math.max(0,c.startTime+c.duration-t),a=1-(n/c.duration||0),i=0,o=c.tweens.length; 
 i<o; 
 i++)c.tweens[i].run(a); 
 return s.notifyWith(e,[c,a,n]),a<1&&o?n:(s.resolveWith(e,[c]),!1)} 
 ,c=s.promise({ 
 elem:e,props:g.extend({ 
 } 
 ,t),opts:g.extend(!0,{ 
 specialEasing:{ 
 } 
 ,easing:g.easing._default} 
 ,n),originalProperties:t,originalOptions:n,startTime:Ge||Je(),duration:n.duration,tweens:[],createTween:function(t,n){ 
 var a=g.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing); 
 return c.tweens.push(a),a} 
 ,stop:function(t){ 
 var n=0,a=t?c.tweens.length:0; 
 if(r)return this; 
 for(r=!0; 
 n<a; 
 n++)c.tweens[n].run(1); 
 return t?(s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c,t])):s.rejectWith(e,[c,t]),this} 
 } 
 ),u=c.props; 
 for(function(e,t){ 
 var n,a,r,i,o; 
 for(n in e)if(a=g.camelCase(n),r=t[a],i=e[n],g.isArray(i)&&(r=i[1],i=e[n]=i[0]),n!==a&&(e[a]=i,delete e[n]),o=g.cssHooks[a],o&&"expand"in o){ 
 i=o.expand(i),delete e[a]; 
 for(n in i)n in e||(e[n]=i[n],t[n]=r)} 
 else t[a]=r} 
 (u,c.opts.specialEasing); 
 i<o; 
 i++)if(a=tt.prefilters[i].call(c,e,u,c.opts))return g.isFunction(a.stop)&&(g._queueHooks(c.elem,c.opts.queue).stop=g.proxy(a.stop,a)),a; 
 return g.map(u,et,c),g.isFunction(c.opts.start)&&c.opts.start.call(e,c),g.fx.timer(g.extend(l,{ 
 elem:e,anim:c,queue:c.opts.queue} 
 )),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)} 
 g.Animation=g.extend(tt,{ 
 tweeners:{ 
 "*":[function(e,t){ 
 var n=this.createTween(e,t); 
 return ee(n.elem,e,X.exec(t),n),n} 
 ]} 
 ,tweener:function(e,t){ 
 g.isFunction(e)?(t=e,e=["*"]):e=e.match(L); 
 for(var n,a=0,r=e.length; 
 a<r; 
 a++)n=e[a],tt.tweeners[n]=tt.tweeners[n]||[],tt.tweeners[n].unshift(t)} 
 ,prefilters:[function(e,t,n){ 
 var a,r,i,o,s,l,c,u,d="width"in t||"height"in t,p=this,f={ 
 } 
 ,h=e.style,m=e.nodeType&&J(e),v=B.get(e,"fxshow"); 
 n.queue||(o=g._queueHooks(e,"fx"),null==o.unqueued&&(o.unqueued=0,s=o.empty.fire,o.empty.fire=function(){ 
 o.unqueued||s()} 
 ),o.unqueued++,p.always(function(){ 
 p.always(function(){ 
 o.unqueued--,g.queue(e,"fx").length||o.empty.fire()} 
 )} 
 )); 
 for(a in t)if(r=t[a],Ke.test(r)){ 
 if(delete t[a],i=i||"toggle"===r,r===(m?"hide":"show")){ 
 if("show"!==r||!v||void 0===v[a])continue; 
 m=!0} 
 f[a]=v&&v[a]||g.style(e,a)} 
 if((l=!g.isEmptyObject(t))||!g.isEmptyObject(f)){ 
 d&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],c=v&&v.display,null==c&&(c=B.get(e,"display")),u=g.css(e,"display"),"none"===u&&(c?u=c:(ae([e],!0),c=e.style.display||c,u=g.css(e,"display"),ae([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===g.css(e,"float")&&(l||(p.done(function(){ 
 h.display=c} 
 ),null==c&&(u=h.display,c="none"===u?"":u)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){ 
 h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]} 
 )),l=!1; 
 for(a in f)l||(v?"hidden"in v&&(m=v.hidden):v=B.access(e,"fxshow",{ 
 display:c} 
 ),i&&(v.hidden=!m),m&&ae([e],!0),p.done(function(){ 
 m||ae([e]),B.remove(e,"fxshow"); 
 for(a in f)g.style(e,a,f[a])} 
 )),l=et(m?v[a]:0,a,p),a in v||(v[a]=l.start,m&&(l.end=l.start,l.start=0))} 
 } 
 ],prefilter:function(e,t){ 
 t?tt.prefilters.unshift(e):tt.prefilters.push(e)} 
 } 
 ),g.speed=function(e,t,n){ 
 var r=e&&"object"==typeof e?g.extend({ 
 } 
 ,e):{ 
 complete:n||!n&&t||g.isFunction(e)&&e,duration:e,easing:n&&t||t&&!g.isFunction(t)&&t} 
 ; 
 return g.fx.off||a.hidden?r.duration=0:"number"!=typeof r.duration&&(r.duration in g.fx.speeds?r.duration=g.fx.speeds[r.duration]:r.duration=g.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){ 
 g.isFunction(r.old)&&r.old.call(this),r.queue&&g.dequeue(this,r.queue)} 
 ,r} 
 ,g.fn.extend({ 
 fadeTo:function(e,t,n,a){ 
 return this.filter(J).css("opacity",0).show().end().animate({ 
 opacity:t} 
 ,e,n,a)} 
 ,animate:function(e,t,n,a){ 
 var r=g.isEmptyObject(e),i=g.speed(t,n,a),o=function(){ 
 var t=tt(this,g.extend({ 
 } 
 ,e),i); 
 (r||B.get(this,"finish"))&&t.stop(!0)} 
 ; 
 return o.finish=o,r||!1===i.queue?this.each(o):this.queue(i.queue,o)} 
 ,stop:function(e,t,n){ 
 var a=function(e){ 
 var t=e.stop; 
 delete e.stop,t(n)} 
 ; 
 return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){ 
 var t=!0,r=null!=e&&e+"queueHooks",i=g.timers,o=B.get(this); 
 if(r)o[r]&&o[r].stop&&a(o[r]); 
 else for(r in o)o[r]&&o[r].stop&&Xe.test(r)&&a(o[r]); 
 for(r=i.length; 
 r--; 
 )i[r].elem!==this||null!=e&&i[r].queue!==e||(i[r].anim.stop(n),t=!1,i.splice(r,1)); 
 !t&&n||g.dequeue(this,e)} 
 )} 
 ,finish:function(e){ 
 return!1!==e&&(e=e||"fx"),this.each(function(){ 
 var t,n=B.get(this),a=n[e+"queue"],r=n[e+"queueHooks"],i=g.timers,o=a?a.length:0; 
 for(n.finish=!0,g.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=i.length; 
 t--; 
 )i[t].elem===this&&i[t].queue===e&&(i[t].anim.stop(!0),i.splice(t,1)); 
 for(t=0; 
 t<o; 
 t++)a[t]&&a[t].finish&&a[t].finish.call(this); 
 delete n.finish} 
 )} 
 } 
 ),g.each(["toggle","show","hide"],function(e,t){ 
 var n=g.fn[t]; 
 g.fn[t]=function(e,a,r){ 
 return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Ze(t,!0),e,a,r)} 
 } 
 ),g.each({ 
 slideDown:Ze("show"),slideUp:Ze("hide"),slideToggle:Ze("toggle"),fadeIn:{ 
 opacity:"show"} 
 ,fadeOut:{ 
 opacity:"hide"} 
 ,fadeToggle:{ 
 opacity:"toggle"} 
 } 
 ,function(e,t){ 
 g.fn[e]=function(e,n,a){ 
 return this.animate(t,e,n,a)} 
 } 
 ),g.timers=[],g.fx.tick=function(){ 
 var e,t=0,n=g.timers; 
 for(Ge=g.now(); 
 t<n.length; 
 t++)e=n[t],e()||n[t]!==e||n.splice(t--,1); 
 n.length||g.fx.stop(),Ge=void 0} 
 ,g.fx.timer=function(e){ 
 g.timers.push(e),e()?g.fx.start():g.timers.pop()} 
 ,g.fx.interval=13,g.fx.start=function(){ 
 Ve||(Ve=e.requestAnimationFrame?e.requestAnimationFrame(Ye):e.setInterval(g.fx.tick,g.fx.interval))} 
 ,g.fx.stop=function(){ 
 e.cancelAnimationFrame?e.cancelAnimationFrame(Ve):e.clearInterval(Ve),Ve=null} 
 ,g.fx.speeds={ 
 slow:600,fast:200,_default:400} 
 ,g.fn.delay=function(t,n){ 
 return t=g.fx?g.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,a){ 
 var r=e.setTimeout(n,t); 
 a.stop=function(){ 
 e.clearTimeout(r)} 
 } 
 )} 
 ,function(){ 
 var e=a.createElement("input"),t=a.createElement("select").appendChild(a.createElement("option")); 
 e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=a.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value} 
 (); 
 var nt,at=g.expr.attrHandle; 
 g.fn.extend({ 
 attr:function(e,t){ 
 return H(this,g.attr,e,t,arguments.length>1)} 
 ,removeAttr:function(e){ 
 return this.each(function(){ 
 g.removeAttr(this,e)} 
 )} 
 } 
 ),g.extend({ 
 attr:function(e,t,n){ 
 var a,r,i=e.nodeType; 
 if(3!==i&&8!==i&&2!==i)return void 0===e.getAttribute?g.prop(e,t,n):(1===i&&g.isXMLDoc(e)||(r=g.attrHooks[t.toLowerCase()]||(g.expr.match.bool.test(t)?nt:void 0)),void 0!==n?null===n?void g.removeAttr(e,t):r&&"set"in r&&void 0!==(a=r.set(e,n,t))?a:(e.setAttribute(t,n+""),n):r&&"get"in r&&null!==(a=r.get(e,t))?a:(a=g.find.attr(e,t),null==a?void 0:a))} 
 ,attrHooks:{ 
 type:{ 
 set:function(e,t){ 
 if(!h.radioValue&&"radio"===t&&g.nodeName(e,"input")){ 
 var n=e.value; 
 return e.setAttribute("type",t),n&&(e.value=n),t} 
 } 
 } 
 } 
 ,removeAttr:function(e,t){ 
 var n,a=0,r=t&&t.match(L); 
 if(r&&1===e.nodeType)for(; 
 n=r[a++]; 
 )e.removeAttribute(n)} 
 } 
 ),nt={ 
 set:function(e,t,n){ 
 return!1===t?g.removeAttr(e,n):e.setAttribute(n,n),n} 
 } 
 ,g.each(g.expr.match.bool.source.match(/\w+/g),function(e,t){ 
 var n=at[t]||g.find.attr; 
 at[t]=function(e,t,a){ 
 var r,i,o=t.toLowerCase(); 
 return a||(i=at[o],at[o]=r,r=null!=n(e,t,a)?o:null,at[o]=i),r} 
 } 
 ); 
 var rt=/^(?:input|select|textarea|button)$/i,it=/^(?:a|area)$/i; 
 g.fn.extend({ 
 prop:function(e,t){ 
 return H(this,g.prop,e,t,arguments.length>1)} 
 ,removeProp:function(e){ 
 return this.each(function(){ 
 delete this[g.propFix[e]||e]} 
 )} 
 } 
 ),g.extend({ 
 prop:function(e,t,n){ 
 var a,r,i=e.nodeType; 
 if(3!==i&&8!==i&&2!==i)return 1===i&&g.isXMLDoc(e)||(t=g.propFix[t]||t,r=g.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(a=r.set(e,n,t))?a:e[t]=n:r&&"get"in r&&null!==(a=r.get(e,t))?a:e[t]} 
 ,propHooks:{ 
 tabIndex:{ 
 get:function(e){ 
 var t=g.find.attr(e,"tabindex"); 
 return t?parseInt(t,10):rt.test(e.nodeName)||it.test(e.nodeName)&&e.href?0:-1} 
 } 
 } 
 ,propFix:{ 
 for:"htmlFor",class:"className"} 
 } 
 ),h.optSelected||(g.propHooks.selected={ 
 get:function(e){ 
 var t=e.parentNode; 
 return t&&t.parentNode&&t.parentNode.selectedIndex,null} 
 ,set:function(e){ 
 var t=e.parentNode; 
 t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)} 
 } 
 ),g.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ 
 g.propFix[this.toLowerCase()]=this} 
 ); 
 function ot(e){ 
 return(e.match(L)||[]).join(" ")} 
 function st(e){ 
 return e.getAttribute&&e.getAttribute("class")||""} 
 g.fn.extend({ 
 addClass:function(e){ 
 var t,n,a,r,i,o,s,l=0; 
 if(g.isFunction(e))return this.each(function(t){ 
 g(this).addClass(e.call(this,t,st(this)))} 
 ); 
 if("string"==typeof e&&e)for(t=e.match(L)||[]; 
 n=this[l++]; 
 )if(r=st(n),a=1===n.nodeType&&" "+ot(r)+" "){ 
 for(o=0; 
 i=t[o++]; 
 )a.indexOf(" "+i+" ")<0&&(a+=i+" "); 
 r!==(s=ot(a))&&n.setAttribute("class",s)} 
 return this} 
 ,removeClass:function(e){ 
 var t,n,a,r,i,o,s,l=0; 
 if(g.isFunction(e))return this.each(function(t){ 
 g(this).removeClass(e.call(this,t,st(this)))} 
 ); 
 if(!arguments.length)return this.attr("class",""); 
 if("string"==typeof e&&e)for(t=e.match(L)||[]; 
 n=this[l++]; 
 )if(r=st(n),a=1===n.nodeType&&" "+ot(r)+" "){ 
 for(o=0; 
 i=t[o++]; 
 )for(; 
 a.indexOf(" "+i+" ")>-1; 
 )a=a.replace(" "+i+" "," "); 
 r!==(s=ot(a))&&n.setAttribute("class",s)} 
 return this} 
 ,toggleClass:function(e,t){ 
 var n=typeof e; 
 return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):g.isFunction(e)?this.each(function(n){ 
 g(this).toggleClass(e.call(this,n,st(this),t),t)} 
 ):this.each(function(){ 
 var t,a,r,i; 
 if("string"===n)for(a=0,r=g(this),i=e.match(L)||[]; 
 t=i[a++]; 
 )r.hasClass(t)?r.removeClass(t):r.addClass(t); 
 else void 0!==e&&"boolean"!==n||(t=st(this),t&&B.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":B.get(this,"__className__")||""))} 
 )} 
 ,hasClass:function(e){ 
 var t,n,a=0; 
 for(t=" "+e+" "; 
 n=this[a++]; 
 )if(1===n.nodeType&&(" "+ot(st(n))+" ").indexOf(t)>-1)return!0; 
 return!1} 
 } 
 ); 
 var lt=/\r/g; 
 g.fn.extend({ 
 val:function(e){ 
 var t,n,a,r=this[0]; 
 return arguments.length?(a=g.isFunction(e),this.each(function(n){ 
 var r; 
 1===this.nodeType&&(r=a?e.call(this,n,g(this).val()):e,null==r?r="":"number"==typeof r?r+="":g.isArray(r)&&(r=g.map(r,function(e){ 
 return null==e?"":e+""} 
 )),t=g.valHooks[this.type]||g.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))} 
 )):r?(t=g.valHooks[r.type]||g.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:"string"==typeof(n=r.value)?n.replace(lt,""):null==n?"":n:void 0} 
 } 
 ),g.extend({ 
 valHooks:{ 
 option:{ 
 get:function(e){ 
 var t=g.find.attr(e,"value"); 
 return null!=t?t:ot(g.text(e))} 
 } 
 ,select:{ 
 get:function(e){ 
 var t,n,a,r=e.options,i=e.selectedIndex,o="select-one"===e.type,s=o?null:[],l=o?i+1:r.length; 
 for(a=i<0?l:o?i:0; 
 a<l; 
 a++)if(n=r[a],(n.selected||a===i)&&!n.disabled&&(!n.parentNode.disabled||!g.nodeName(n.parentNode,"optgroup"))){ 
 if(t=g(n).val(),o)return t; 
 s.push(t)} 
 return s} 
 ,set:function(e,t){ 
 for(var n,a,r=e.options,i=g.makeArray(t),o=r.length; 
 o--; 
 )a=r[o],(a.selected=g.inArray(g.valHooks.option.get(a),i)>-1)&&(n=!0); 
 return n||(e.selectedIndex=-1),i} 
 } 
 } 
 } 
 ),g.each(["radio","checkbox"],function(){ 
 g.valHooks[this]={ 
 set:function(e,t){ 
 if(g.isArray(t))return e.checked=g.inArray(g(e).val(),t)>-1} 
 } 
 ,h.checkOn||(g.valHooks[this].get=function(e){ 
 return null===e.getAttribute("value")?"on":e.value} 
 )} 
 ); 
 var ct=/^(?:focusinfocus|focusoutblur)$/; 
 g.extend(g.event,{ 
 trigger:function(t,n,r,i){ 
 var o,s,l,c,u,p,f,h=[r||a],m=d.call(t,"type")?t.type:t,v=d.call(t,"namespace")?t.namespace.split("."):[]; 
 if(s=l=r=r||a,3!==r.nodeType&&8!==r.nodeType&&!ct.test(m+g.event.triggered)&&(m.indexOf(".")>-1&&(v=m.split("."),m=v.shift(),v.sort()),u=m.indexOf(":")<0&&"on"+m,t=t[g.expando]?t:new g.Event(m,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=v.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:g.makeArray(n,[t]),f=g.event.special[m]||{ 
 } 
 ,i||!f.trigger||!1!==f.trigger.apply(r,n))){ 
 if(!i&&!f.noBubble&&!g.isWindow(r)){ 
 for(c=f.delegateType||m,ct.test(c+m)||(s=s.parentNode); 
 s; 
 s=s.parentNode)h.push(s),l=s; 
 l===(r.ownerDocument||a)&&h.push(l.defaultView||l.parentWindow||e)} 
 for(o=0; 
 (s=h[o++])&&!t.isPropagationStopped(); 
 )t.type=o>1?c:f.bindType||m,p=(B.get(s,"events")||{ 
 } 
 )[t.type]&&B.get(s,"handle"),p&&p.apply(s,n),p=u&&s[u],p&&p.apply&&F(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault()); 
 return t.type=m,i||t.isDefaultPrevented()||f._default&&!1!==f._default.apply(h.pop(),n)||!F(r)||u&&g.isFunction(r[m])&&!g.isWindow(r)&&(l=r[u],l&&(r[u]=null),g.event.triggered=m,r[m](),g.event.triggered=void 0,l&&(r[u]=l)),t.result} 
 } 
 ,simulate:function(e,t,n){ 
 var a=g.extend(new g.Event,n,{ 
 type:e,isSimulated:!0} 
 ); 
 g.event.trigger(a,null,t)} 
 } 
 ),g.fn.extend({ 
 trigger:function(e,t){ 
 return this.each(function(){ 
 g.event.trigger(e,t,this)} 
 )} 
 ,triggerHandler:function(e,t){ 
 var n=this[0]; 
 if(n)return g.event.trigger(e,t,n,!0)} 
 } 
 ),g.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){ 
 g.fn[t]=function(e,n){ 
 return arguments.length>0?this.on(t,null,e,n):this.trigger(t)} 
 } 
 ),g.fn.extend({ 
 hover:function(e,t){ 
 return this.mouseenter(e).mouseleave(t||e)} 
 } 
 ),h.focusin="onfocusin"in e,h.focusin||g.each({ 
 focus:"focusin",blur:"focusout"} 
 ,function(e,t){ 
 var n=function(e){ 
 g.event.simulate(t,e.target,g.event.fix(e))} 
 ; 
 g.event.special[t]={ 
 setup:function(){ 
 var a=this.ownerDocument||this,r=B.access(a,t); 
 r||a.addEventListener(e,n,!0),B.access(a,t,(r||0)+1)} 
 ,teardown:function(){ 
 var a=this.ownerDocument||this,r=B.access(a,t)-1; 
 r?B.access(a,t,r):(a.removeEventListener(e,n,!0),B.remove(a,t))} 
 } 
 } 
 ); 
 var ut=e.location,dt=g.now(),pt=/\?/; 
 g.parseXML=function(t){ 
 var n; 
 if(!t||"string"!=typeof t)return null; 
 try{ 
 n=(new e.DOMParser).parseFromString(t,"text/xml")} 
 catch(e){ 
 n=void 0} 
 return n&&!n.getElementsByTagName("parsererror").length||g.error("Invalid XML: "+t),n} 
 ; 
 var ft=/\[\]$/,ht=/\r?\n/g,mt=/^(?:submit|button|image|reset|file)$/i,gt=/^(?:input|select|textarea|keygen)/i; 
 function vt(e,t,n,a){ 
 var r; 
 if(g.isArray(t))g.each(t,function(t,r){ 
 n||ft.test(e)?a(e,r):vt(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,a)} 
 ); 
 else if(n||"object"!==g.type(t))a(e,t); 
 else for(r in t)vt(e+"["+r+"]",t[r],n,a)} 
 g.param=function(e,t){ 
 var n,a=[],r=function(e,t){ 
 var n=g.isFunction(t)?t():t; 
 a[a.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)} 
 ; 
 if(g.isArray(e)||e.jquery&&!g.isPlainObject(e))g.each(e,function(){ 
 r(this.name,this.value)} 
 ); 
 else for(n in e)vt(n,e[n],t,r); 
 return a.join("&")} 
 ,g.fn.extend({ 
 serialize:function(){ 
 return g.param(this.serializeArray())} 
 ,serializeArray:function(){ 
 return this.map(function(){ 
 var e=g.prop(this,"elements"); 
 return e?g.makeArray(e):this} 
 ).filter(function(){ 
 var e=this.type; 
 return this.name&&!g(this).is(":disabled")&&gt.test(this.nodeName)&&!mt.test(e)&&(this.checked||!re.test(e))} 
 ).map(function(e,t){ 
 var n=g(this).val(); 
 return null==n?null:g.isArray(n)?g.map(n,function(e){ 
 return{ 
 name:t.name,value:e.replace(ht,"\r\n")} 
 } 
 ):{ 
 name:t.name,value:n.replace(ht,"\r\n")} 
 } 
 ).get()} 
 } 
 ); 
 var yt=/%20/g,kt=/#.*$/,bt=/([?&])_=[^&]*/,wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,xt=/^(?:GET|HEAD)$/,Ct=/^\/\//,jt={ 
 } 
 ,Tt={ 
 } 
 ,Et="*/".concat("*"),_t=a.createElement("a"); 
 _t.href=ut.href; 
 function St(e){ 
 return function(t,n){ 
 "string"!=typeof t&&(n=t,t="*"); 
 var a,r=0,i=t.toLowerCase().match(L)||[]; 
 if(g.isFunction(n))for(; 
 a=i[r++]; 
 )"+"===a[0]?(a=a.slice(1)||"*",(e[a]=e[a]||[]).unshift(n)):(e[a]=e[a]||[]).push(n)} 
 } 
 function zt(e,t,n,a){ 
 var r={ 
 } 
 ,i=e===Tt; 
 function o(s){ 
 var l; 
 return r[s]=!0,g.each(e[s]||[],function(e,s){ 
 var c=s(t,n,a); 
 return"string"!=typeof c||i||r[c]?i?!(l=c):void 0:(t.dataTypes.unshift(c),o(c),!1)} 
 ),l} 
 return o(t.dataTypes[0])||!r["*"]&&o("*")} 
 function Nt(e,t){ 
 var n,a,r=g.ajaxSettings.flatOptions||{ 
 } 
 ; 
 for(n in t)void 0!==t[n]&&((r[n]?e:a||(a={ 
 } 
 ))[n]=t[n]); 
 return a&&g.extend(!0,e,a),e} 
 g.extend({ 
 active:0,lastModified:{ 
 } 
 ,etag:{ 
 } 
 ,ajaxSettings:{ 
 url:ut.href,
         type:"GET",
         isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ut.protocol),
         global:!0,
         processData:!0,
         async:!0,
         contentType:"application/x-www-form-urlencoded;charset=UTF-8",
             accepts:{
 "*":Et,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"} 
 ,contents:{ 
 xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/} 
 ,responseFields:{ 
 xml:"responseXML",text:"responseText",json:"responseJSON"} 
 ,converters:{ 
 "* text":String,"text html":!0,"text json":JSON.parse,"text xml":g.parseXML} 
 ,flatOptions:{ 
 url:!0,context:!0} 
 } 
 ,ajaxSetup:function(e,t){ 
 return t?Nt(Nt(e,g.ajaxSettings),t):Nt(g.ajaxSettings,e)} 
 ,ajaxPrefilter:St(jt),ajaxTransport:St(Tt),ajax:function(t,n){ 
 "object"==typeof t&&(n=t,t=void 0),n=n||{ 
 } 
 ; 
 var r,i,o,s,l,c,u,d,p,f,h=g.ajaxSetup({ 
 } 
 ,n),m=h.context||h,v=h.context&&(m.nodeType||m.jquery)?g(m):g.event,y=g.Deferred(),k=g.Callbacks("once memory"),b=h.statusCode||{ 
 } 
 ,w={ 
 } 
 ,x={ 
 } 
 ,C="canceled",j={ 
 readyState:0,getResponseHeader:function(e){ 
 var t; 
 if(u){ 
 if(!s)for(s={ 
 } 
 ; 
 t=wt.exec(o); 
 )s[t[1].toLowerCase()]=t[2]; 
 t=s[e.toLowerCase()]} 
 return null==t?null:t} 
 ,getAllResponseHeaders:function(){ 
 return u?o:null} 
 ,setRequestHeader:function(e,t){ 
 return null==u&&(e=x[e.toLowerCase()]=x[e.toLowerCase()]||e,w[e]=t),this} 
 ,overrideMimeType:function(e){ 
 return null==u&&(h.mimeType=e),this} 
 ,statusCode:function(e){ 
 var t; 
 if(e)if(u)j.always(e[j.status]); 
 else for(t in e)b[t]=[b[t],e[t]]; 
 return this} 
 ,abort:function(e){ 
 var t=e||C; 
 return r&&r.abort(t),T(0,t),this} 
 } 
 ; 
 if(y.promise(j),h.url=((t||h.url||ut.href)+"").replace(Ct,ut.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(L)||[""],null==h.crossDomain){ 
 c=a.createElement("a"); 
 try{ 
 c.href=h.url,c.href=c.href,h.crossDomain=_t.protocol+"//"+_t.host!=c.protocol+"//"+c.host} 
 catch(e){ 
 h.crossDomain=!0} 
 } 
 if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=g.param(h.data,h.traditional)),zt(jt,h,n,j),u)return j; 
 (d=g.event&&h.global)&&0==g.active++&&g.event.trigger("ajaxStart"),
     h.type=h.type.toUpperCase(),
     h.hasContent=!xt.test(h.type),
     i=h.url.replace(kt,""),
     h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(yt,"+")):(f=h.url.slice(i.length),
         h.data&&(i+=(pt.test(i)?"&":"?")+h.data,
             delete h.data),
         !1===h.cache&&(i=i.replace(bt,"$1"),
             f=(pt.test(i)?"&":"?")+"_="+dt+++f),
             h.url=i+f),h.ifModified&&(g.lastModified[i]&&j.setRequestHeader("If-Modified-Since",
     g.lastModified[i]),
 g.etag[i]&&j.setRequestHeader("If-None-Match",g.etag[i])),
 (h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&j.setRequestHeader("Content-Type",
     h.contentType),j.setRequestHeader("Accept",
     h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Et+"; q=0.01":""):h.accepts["*"]);
 for(p in h.headers)j.setRequestHeader(p,h.headers[p]); 
 if(h.beforeSend&&(!1===h.beforeSend.call(m,j,h)||u))return j.abort(); 
 if(C="abort",k.add(h.complete),j.done(h.success),j.fail(h.error),r=zt(Tt,h,n,j)){ 
 if(j.readyState=1,d&&v.trigger("ajaxSend",[j,h]),u)return j; 
 h.async&&h.timeout>0&&(l=e.setTimeout(function(){ 
 j.abort("timeout")} 
 ,h.timeout)); 
 try{ 
 u=!1,r.send(w,T)} 
 catch(e){ 
 if(u)throw e; 
 T(-1,e)} 
 } 
 else T(-1,"No Transport"); 
 function T(t,n,a,s){ 
 var c,p,f,w,x,C=n; 
 u||(u=!0,l&&e.clearTimeout(l),r=void 0,o=s||"",j.readyState=t>0?4:0,c=t>=200&&t<300||304===t,a&&(w=function(e,t,n){ 
 for(var a,r,i,o,s=e.contents,l=e.dataTypes; 
 "*"===l[0]; 
 )l.shift(),void 0===a&&(a=e.mimeType||t.getResponseHeader("Content-Type")); 
 if(a)for(r in s)if(s[r]&&s[r].test(a)){ 
 l.unshift(r); 
 break} 
 if(l[0]in n)i=l[0]; 
 else{ 
 for(r in n){ 
 if(!l[0]||e.converters[r+" "+l[0]]){ 
 i=r; 
 break} 
 o||(o=r)} 
 i=i||o} 
 if(i)return i!==l[0]&&l.unshift(i),n[i]} 
 (h,j,a)),w=function(e,t,n,a){ 
 var r,i,o,s,l,c={ 
 } 
 ,u=e.dataTypes.slice(); 
 if(u[1])for(o in e.converters)c[o.toLowerCase()]=e.converters[o]; 
 for(i=u.shift(); 
 i; 
 )if(e.responseFields[i]&&(n[e.responseFields[i]]=t),!l&&a&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=i,i=u.shift())if("*"===i)i=l; 
 else if("*"!==l&&l!==i){ 
 if(!(o=c[l+" "+i]||c["* "+i]))for(r in c)if(s=r.split(" "),s[1]===i&&(o=c[l+" "+s[0]]||c["* "+s[0]])){ 
 !0===o?o=c[r]:!0!==c[r]&&(i=s[0],u.unshift(s[1])); 
 break} 
 if(!0!==o)if(o&&e.throws)t=o(t); 
 else try{ 
 t=o(t)} 
 catch(e){ 
 return{ 
 state:"parsererror",error:o?e:"No conversion from "+l+" to "+i} 
 } 
 } 
 return{ 
 state:"success",data:t} 
 } 
 (h,w,j,c),c?(h.ifModified&&(x=j.getResponseHeader("Last-Modified"),x&&(g.lastModified[i]=x),x=j.getResponseHeader("etag"),x&&(g.etag[i]=x)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=w.state,p=w.data,f=w.error,c=!f)):(f=C,!t&&C||(C="error",t<0&&(t=0))),j.status=t,j.statusText=(n||C)+"",c?y.resolveWith(m,[p,C,j]):y.rejectWith(m,[j,C,f]),j.statusCode(b),b=void 0,d&&v.trigger(c?"ajaxSuccess":"ajaxError",[j,h,c?p:f]),k.fireWith(m,[j,C]),d&&(v.trigger("ajaxComplete",[j,h]),--g.active||g.event.trigger("ajaxStop")))} 
 return j} 
 ,getJSON:function(e,t,n){ 
 return g.get(e,t,n,"json")} 
 ,getScript:function(e,t){ 
 return g.get(e,void 0,t,"script")} 
 } 
 ),g.each(["get","post"],function(e,t){ 
 g[t]=function(e,n,a,r){ 
 return g.isFunction(n)&&(r=r||a,a=n,n=void 0),g.ajax(g.extend({ 
 url:e,type:t,dataType:r,data:n,success:a} 
 ,g.isPlainObject(e)&&e))} 
 } 
 ),g._evalUrl=function(e){ 
 return g.ajax({ 
 url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0} 
 )} 
 ,g.fn.extend({ 
 wrapAll:function(e){ 
 var t; 
 return this[0]&&(g.isFunction(e)&&(e=e.call(this[0])),t=g(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){ 
 for(var e=this; 
 e.firstElementChild; 
 )e=e.firstElementChild; 
 return e} 
 ).append(this)),this} 
 ,wrapInner:function(e){ 
 return g.isFunction(e)?this.each(function(t){ 
 g(this).wrapInner(e.call(this,t))} 
 ):this.each(function(){ 
 var t=g(this),n=t.contents(); 
 n.length?n.wrapAll(e):t.append(e)} 
 )} 
 ,wrap:function(e){ 
 var t=g.isFunction(e); 
 return this.each(function(n){ 
 g(this).wrapAll(t?e.call(this,n):e)} 
 )} 
 ,unwrap:function(e){ 
 return this.parent(e).not("body").each(function(){ 
 g(this).replaceWith(this.childNodes)} 
 ),this} 
 } 
 ),g.expr.pseudos.hidden=function(e){ 
 return!g.expr.pseudos.visible(e)} 
 ,g.expr.pseudos.visible=function(e){ 
 return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)} 
 ,g.ajaxSettings.xhr=function(){ 
 try{ 
 return new e.XMLHttpRequest} 
 catch(e){ 
 } 
 } 
 ; 
 var At={ 
 0:200,1223:204} 
 ,Rt=g.ajaxSettings.xhr(); 
 h.cors=!!Rt&&"withCredentials"in Rt,h.ajax=Rt=!!Rt,g.ajaxTransport(function(t){ 
 var n,a; 
 if(h.cors||Rt&&!t.crossDomain)return{ 
 send:function(r,i){ 
 var o,s=t.xhr(); 
 if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)s[o]=t.xhrFields[o]; 
 t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"); 
 for(o in r)s.setRequestHeader(o,r[o]); 
 n=function(e){ 
 return function(){ 
 n&&(n=a=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?i(0,"error"):i(s.status,s.statusText):i(At[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{ 
 binary:s.response} 
 :{ 
 text:s.responseText} 
 ,s.getAllResponseHeaders()))} 
 } 
 ,s.onload=n(),a=s.onerror=n("error"),void 0!==s.onabort?s.onabort=a:s.onreadystatechange=function(){ 
 4===s.readyState&&e.setTimeout(function(){ 
 n&&a()} 
 )} 
 ,n=n("abort"); 
 try{ 
 s.send(t.hasContent&&t.data||null)} 
 catch(e){ 
 if(n)throw e} 
 } 
 ,abort:function(){ 
 n&&n()} 
 } 
 } 
 ),g.ajaxPrefilter(function(e){ 
 e.crossDomain&&(e.contents.script=!1)} 
 ),g.ajaxSetup({ 
 accepts:{ 
 script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"} 
 ,contents:{ 
 script:/\b(?:java|ecma)script\b/} 
 ,converters:{ 
 "text script":function(e){ 
 return g.globalEval(e),e} 
 } 
 } 
 ),g.ajaxPrefilter("script",function(e){ 
 void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")} 
 ),g.ajaxTransport("script",function(e){ 
 if(e.crossDomain){ 
 var t,n; 
 return{ 
 send:function(r,i){ 
 t=g("<script>").prop({ 
 charset:e.scriptCharset,src:e.url} 
 ).on("load error",n=function(e){ 
 t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)} 
 ),a.head.appendChild(t[0])} 
 ,abort:function(){ 
 n&&n()} 
 } 
 } 
 } 
 ); 
 var Dt=[],Lt=/(=)\?(?=&|$)|\?\?/; 
 g.ajaxSetup({ 
 jsonp:"callback",jsonpCallback:function(){ 
 var e=Dt.pop()||g.expando+"_"+dt++; 
 return this[e]=!0,e} 
 } 
 ),g.ajaxPrefilter("json jsonp",function(t,n,a){ 
 var r,i,o,s=!1!==t.jsonp&&(Lt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Lt.test(t.data)&&"data"); 
 if(s||"jsonp"===t.dataTypes[0])return r=t.jsonpCallback=g.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Lt,"$1"+r):!1!==t.jsonp&&(t.url+=(pt.test(t.url)?"&":"?")+t.jsonp+"="+r),t.converters["script json"]=function(){ 
 return o||g.error(r+" was not called"),o[0]} 
 ,t.dataTypes[0]="json",i=e[r],e[r]=function(){ 
 o=arguments} 
 ,a.always(function(){ 
 void 0===i?g(e).removeProp(r):e[r]=i,t[r]&&(t.jsonpCallback=n.jsonpCallback,Dt.push(r)),o&&g.isFunction(i)&&i(o[0]),o=i=void 0} 
 ),"script"} 
 ),h.createHTMLDocument=function(){ 
 var e=a.implementation.createHTMLDocument("").body; 
 return e.innerHTML="<form></form><form></form>",2===e.childNodes.length} 
 (),g.parseHTML=function(e,t,n){ 
 if("string"!=typeof e)return[]; 
 "boolean"==typeof t&&(n=t,t=!1); 
 var r,i,o; 
 return t||(h.createHTMLDocument?(t=a.implementation.createHTMLDocument(""),r=t.createElement("base"),r.href=a.location.href,t.head.appendChild(r)):t=a),i=E.exec(e),o=!n&&[],i?[t.createElement(i[1])]:(i=de([e],t,o),o&&o.length&&g(o).remove(),g.merge([],i.childNodes))} 
 ,g.fn.load=function(e,t,n){ 
 var a,r,i,o=this,s=e.indexOf(" "); 
 return s>-1&&(a=ot(e.slice(s)),e=e.slice(0,s)),g.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),o.length>0&&g.ajax({ 
 url:e,type:r||"GET",dataType:"html",data:t} 
 ).done(function(e){ 
 i=arguments,o.html(a?g("<div>").append(g.parseHTML(e)).find(a):e)} 
 ).always(n&&function(e,t){ 
 o.each(function(){ 
 n.apply(this,i||[e.responseText,t,e])} 
 )} 
 ),this} 
 ,g.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ 
 g.fn[t]=function(e){ 
 return this.on(t,e)} 
 } 
 ),g.expr.pseudos.animated=function(e){ 
 return g.grep(g.timers,function(t){ 
 return e===t.elem} 
 ).length} 
 ; 
 function $t(e){ 
 return g.isWindow(e)?e:9===e.nodeType&&e.defaultView} 
 g.offset={ 
 setOffset:function(e,t,n){ 
 var a,r,i,o,s,l,c=g.css(e,"position"),u=g(e),d={ 
 } 
 ; 
 "static"===c&&(e.style.position="relative"),s=u.offset(),i=g.css(e,"top"),l=g.css(e,"left"),("absolute"===c||"fixed"===c)&&(i+l).indexOf("auto")>-1?(o=(a=u.position()).top,r=a.left):(o=parseFloat(i)||0,r=parseFloat(l)||0),g.isFunction(t)&&(t=t.call(e,n,g.extend({ 
 } 
 ,s))),null!=t.top&&(d.top=t.top-s.top+o),null!=t.left&&(d.left=t.left-s.left+r),"using"in t?t.using.call(e,d):u.css(d)} 
 } 
 ,g.fn.extend({ 
 offset:function(e){ 
 if(arguments.length)return void 0===e?this:this.each(function(t){ 
 g.offset.setOffset(this,e,t)} 
 ); 
 var t,n,a,r,i=this[0]; 
 return i?i.getClientRects().length?(a=i.getBoundingClientRect()).width||a.height?(n=$t(r=i.ownerDocument),t=r.documentElement,{ 
 top:a.top+n.pageYOffset-t.clientTop,left:a.left+n.pageXOffset-t.clientLeft} 
 ):a:{ 
 top:0,left:0} 
 :void 0} 
 ,position:function(){ 
 if(this[0]){ 
 var e,t,n=this[0],a={ 
 top:0,left:0} 
 ; 
 return"fixed"===g.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),g.nodeName(e[0],"html")||(a=e.offset()),a={ 
 top:a.top+g.css(e[0],"borderTopWidth",!0),left:a.left+g.css(e[0],"borderLeftWidth",!0)} 
 ),{ 
 top:t.top-a.top-g.css(n,"marginTop",!0),left:t.left-a.left-g.css(n,"marginLeft",!0)} 
 } 
 } 
 ,offsetParent:function(){ 
 return this.map(function(){ 
 for(var e=this.offsetParent; 
 e&&"static"===g.css(e,"position"); 
 )e=e.offsetParent; 
 return e||pe} 
 )} 
 } 
 ),g.each({ 
 scrollLeft:"pageXOffset",scrollTop:"pageYOffset"} 
 ,function(e,t){ 
 var n="pageYOffset"===t; 
 g.fn[e]=function(a){ 
 return H(this,function(e,a,r){ 
 var i=$t(e); 
 return void 0===r?i?i[t]:e[a]:void(i?i.scrollTo(n?i.pageXOffset:r,n?r:i.pageYOffset):e[a]=r)} 
 ,e,a,arguments.length)} 
 } 
 ),g.each(["top","left"],function(e,t){ 
 g.cssHooks[t]=Ie(h.pixelPosition,function(e,n){ 
 if(n)return n=$e(e,t),De.test(n)?g(e).position()[t]+"px":n} 
 )} 
 ),g.each({ 
 Height:"height",Width:"width"} 
 ,function(e,t){ 
 g.each({ 
 padding:"inner"+e,content:t,"":"outer"+e} 
 ,function(n,a){ 
 g.fn[a]=function(r,i){ 
 var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(!0===r||!0===i?"margin":"border"); 
 return H(this,function(t,n,r){ 
 var i; 
 return g.isWindow(t)?0===a.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?g.css(t,n,s):g.style(t,n,r,s)} 
 ,t,o?r:void 0,o)} 
 } 
 )} 
 ),g.fn.extend({ 
 bind:function(e,t,n){ 
 return this.on(e,null,t,n)} 
 ,unbind:function(e,t){ 
 return this.off(e,null,t)} 
 ,delegate:function(e,t,n,a){ 
 return this.on(t,e,n,a)} 
 ,undelegate:function(e,t,n){ 
 return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)} 
 } 
 ),g.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){ 
 return g} 
 ); 
 var It=e.jQuery,qt=e.$; 
 return g.noConflict=function(t){ 
 return e.$===g&&(e.$=qt),t&&e.jQuery===g&&(e.jQuery=It),g} 
 ,t||(e.jQuery=e.$=g),g} 
 ); 
 var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){ 
 return typeof e} 
 :function(e){ 
 return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e} 
 ; 
 !function(t,n){ 
 "use strict"; 
 "function"==typeof define&&define.amd?define([],function(){ 
 return t.annyang=n(t)} 
 ):"object"===("undefined"==typeof module?"undefined":e(module))&&module.exports?module.exports=n(t):t.annyang=n(t)} 
 ("undefined"!=typeof window?window:void 0,function(t,n){ 
 "use strict"; 
 var a,r=t.SpeechRecognition||t.webkitSpeechRecognition||t.mozSpeechRecognition||t.msSpeechRecognition||t.oSpeechRecognition; 
 if(!r)return null; 
 var i,o,s=[],l={ 
 start:[],
         error:[],
         end:[],
         soundstart:[],
         result:[],
         resultMatch:[],
         resultNoMatch:[],
         errorNetwork:[],
         errorPermissionBlocked:[],
         errorPermissionDenied:[]
 }
 ,c=0,
     u=0,
     d=!1,
     p=!1,
     f=!1,
     h=/\s*\((.*?)\)\s*/g,m=/(\(\?:[^)]+\))\?/g,g=/(\(\?)?:\w+/g,v=/\*\w+/g,y=/[\-{}\[\]+?.,\\\^$|#]/g,
     k=function(e){
 for(var t=arguments.length,n=Array(t>1?t-1:0),a=1; 
 a<t; 
 a++)n[a-1]=arguments[a]; 
 e.forEach(function(e){ 
 e.callback.apply(e.context,n)} 
 )} 
 ,b=function(){ 
 return i!==n} 
 ,w=function(e,t){ 
 e.indexOf("%c")} 
 ,x=function(){ 
 b()||a.init({ 
 } 
 ,!1)} 
 ,C=function(e,t,n){ 
 s.push({ 
 command:e,callback:t,originalPhrase:n} 
 ),d&&w("Command successfully loaded: %c"+n)} 
 ,j=function(e){ 
 k(l.result,e); 
 for(var t,n=0; 
 n<e.length; 
 n++){ 
 t=e[n].trim(),d&&w("Speech recognized: %c"+t); 
 for(var a=0,r=s.length; 
 a<r; 
 a++){ 
 var i=s[a],o=i.command.exec(t); 
 if(o){ 
 var c=o.slice(1); 
 return d&&(w("command matched: %c"+i.originalPhrase),c.length&&w("with parameters")),i.callback.apply(this,c),void k(l.resultMatch,t,i.originalPhrase,e)} 
 } 
 } 
 k(l.resultNoMatch,e)} 
 ; 
 return a={ 
 init:function(e){ 
 var h=!(arguments.length>1&&arguments[1]!==n)||arguments[1]; 
 i&&i.abort&&i.abort(),(i=new r).maxAlternatives=5,i.continuous="http:"===t.location.protocol,i.lang="en-US",i.onstart=function(){ 
 f=!0,k(l.start)} 
 ,i.onsoundstart=function(){ 
 k(l.soundstart)} 
 ,i.onerror=function(e){ 
 switch(k(l.error,e),e.error){ 
 case"network":k(l.errorNetwork,e); 
 break; 
 case"not-allowed":case"service-not-allowed":o=!1,(new Date).getTime()-c<200?k(l.errorPermissionBlocked,e):k(l.errorPermissionDenied,e)} 
 } 
 ,i.onend=function(){ 
 if(f=!1,k(l.end),o){ 
 var e=(new Date).getTime()-c; 
 (u+=1)%10==0&&d&&w("Speech Recognition is repeatedly stopping and starting. See http://is.gd/annyang_restarts for tips."),e<1e3?setTimeout(function(){ 
 a.start({ 
 paused:p} 
 )} 
 ,1e3-e):a.start({ 
 paused:p} 
 )} 
 } 
 ,i.onresult=function(e){ 
 if(p)return d&&w("Speech heard, but annyang is paused"),!1; 
 for(var t=e.results[e.resultIndex],n=[],a=0; 
 a<t.length; 
 a++)n[a]=t[a].transcript; 
 j(n)} 
 ,h&&(s=[]),e.length&&this.addCommands(e)} 
 ,start:function(e){ 
 x(),p=(e=e||{ 
 } 
 ).paused!==n&&!!e.paused,o=e.autoRestart===n||!!e.autoRestart,e.continuous!==n&&(i.continuous=!!e.continuous),c=(new Date).getTime(); 
 try{ 
 i.start()} 
 catch(e){ 
 d&&w(e.message)} 
 } 
 ,abort:function(){ 
 o=!1,u=0,b()&&i.abort()} 
 ,pause:function(){ 
 p=!0} 
 ,resume:function(){ 
 a.start()} 
 ,debug:function(){ 
 var e=!(arguments.length>0&&arguments[0]!==n)||arguments[0]; 
 d=!!e} 
 ,setLanguage:function(e){ 
 x(),i.lang=e} 
 ,addCommands:function(n){ 
 var a; 
 x(); 
 for(var r in n)if(n.hasOwnProperty(r))if("function"==typeof(a=t[n[r]]||n[r]))C((i=(i=r).replace(y,"\\$&").replace(h,"(?:$1)?").replace(g,function(e,t){ 
 return t?e:"([^\\s]+)"} 
 ).replace(v,"(.*?)").replace(m,"\\s*$1?\\s*"),new RegExp("^"+i+"$","i")),a,r); 
 else{ 
 if(!("object"===(void 0===a?"undefined":e(a))&&a.regexp instanceof RegExp)){ 
 d&&w("Can not register command: %c"+r); 
 continue} 
 C(new RegExp(a.regexp.source,"i"),a.callback,r)} 
 var i} 
 ,removeCommands:function(e){ 
 e===n?s=[]:(e=Array.isArray(e)?e:[e],s=s.filter(function(t){ 
 for(var n=0; 
 n<e.length; 
 n++)if(e[n]===t.originalPhrase)return!1; 
 return!0} 
 ))} 
 ,addCallback:function(e,a,r){ 
 var i=t[a]||a; 
 "function"==typeof i&&l[e]!==n&&l[e].push({ 
 callback:i,context:r||this} 
 )} 
 ,removeCallback:function(e,t){ 
 var a=function(e){ 
 return e.callback!==t} 
 ; 
 for(var r in l)l.hasOwnProperty(r)&&(e!==n&&e!==r||(l[r]=t===n?[]:l[r].filter(a)))} 
 ,isListening:function(){ 
 return f&&!p} 
 ,getSpeechRecognizer:function(){ 
 return i} 
 ,trigger:function(e){ 
 a.isListening()?(Array.isArray(e)||(e=[e]),j(e)):d&&w(f?"Speech heard, but annyang is paused":"Cannot trigger while annyang is aborted")} 
 } 
 } 
 ); 
 function t(e){ 
 var t=(e||"en").toLowerCase().substr(0,2); 
 !{
  en:{"&#8626;":"new line","&#8626;&#8626;":"new paragraph","&apos;":"apostrophe",":":"colon",",":"comma","&mdash;":"dash","&hellip;":"ellipsis","!":"exclamation mark","&ndash;":"hyphen",".":"period, point, dot or full stop","?":"question mark ",";":"semicolon","*":"asterisk","^":"caret","=":"equals sign"}
 ,hi:{"&#8626;":"नई पंक्ति","&#8626;&#8626;":"नया अनुच्छेद",":":"उपविराम",",":"अल्पविराम",":-":"विवरण चिन्ह","&mdash;":"निर्देशक चिन्ह","!":"आश्चर्य सूचक चिन्ह|संबोधन वाचक","&ndash;":"योजक चिन्ह",".":"पूर्ण विराम","?":"प्रश्न चिन्ह|प्रश्नवाचक चिन्ह",";":"अर्धविराम","*":"संकेत चिन्ह","^":"विस्मरण चिन्ह","=":"तुल्यता सूचक चिन्ह"}
 ,it:{"&#8626;":"nuova riga","&#8626;&#8626;":"nuovo paragrafo","&apos;":"apostrofo",":":"due punti",",":"virgola","&mdash;":"trattino piccolo","&hellip;":"puntini sospensivi","!":"punto esclamativo","&ndash;":"trattino",".":"punto","?":"punto di domanda",";":"punto e virgola","*":"asterisco","^":"accento circonflesso","=":"uguale"}

 ,de:{ 
 "&#8626;":"Neue Zeile","&#8626;&#8626;":"Neuer Absatz","&apos;":"Apostroph",":":"Doppelpunkt",",":"Komma",
         "&mdash;":"Gedankenstrich","&hellip;":"Ellipse|Auslassungszeichen",
         "!":"Ausrufezeichen","&ndash;":"Bindestrich",".":"Punkt","?":"Fragezeichen",
         ";":"Semikolon","*":"Sternchen","^":"Caret-Zeichen","=":"Gleichheitszeichen"}
 ,fr:{ 
 "&#8626;":"Nouvelle ligne","&#8626;&#8626;":"Nouveau paragraphe",
         "&apos;":"Apostrophe",":":"Deux-points",",":"Virgule","&mdash;":"Tiret",
         "&hellip;":"Points de suspension","!":"Point d’exclamation","&ndash;":"Trait d’union",
         ".":"Point","?":"Point d’interrogation",";":"Point-virgule","*":"Astérisque",
         "^":"Accent circonflexe","=":"Signe égal"}
 ,nl:{ 
 "&#8626;":"nieuwe regel","&#8626;&#8626;":"nieuwe alinea","&apos;":"apostrof",":":"dubbelepunt",
         ",":"komma","&mdash;":"streepje","&hellip;":"drie puntjes","!":"uitroepteken",
         "&ndash;":"koppelteken",".":"punt|dot","?":"vraagteken",";":"puntkomma",
         "*":"asterisk","^":"caret","=":"gelijkteken"}
 ,pt:{ 
 "&#8626;":"nova linha","&#8626;&#8626;":"novo parágrafo","&apos;":"apóstrofo",":":"dois pontos",
         ",":"vírgula","&mdash;":"traço","&hellip;":"reticências","!":"ponto de exclamação",
         "&ndash;":"hífen",".":"ponto|ponto final","?":"ponto de interrogação",
         ";":"ponto e vírgula","*":"asterisco","^":"acento circunflexo","=":"sinal de igual"}
 ,no:{ 
 "&#8626;":"ny linje","&#8626;&#8626;":"nytt avsnitt","&apos;":"apostrof",":":"kolon",",":"komma",
         "&mdash;":"tankestrek","&hellip;":"ellipse","!":"utropstegn","&ndash;":"bindestrek",
         ".":"punktum","?":"spørsmålstegn",";":"semikolon","*":"asterisk eller stjerne",
         "^":"cirkumfleks","=":"likhetstegn"}
 ,fi:{ 
 "&#8626;":"uusi rivi","&#8626;&#8626;":"uusi kappale","&apos;":"heittomerkki",":":"kaksoispiste",
         ",":"pilkku","&mdash;":"viiva","&hellip;":"kolme pistettä","!":"huutomerkki",
         "&ndash;":"tavuviiva",".":"piste","?":"kysymysmerkki",";":"puolipiste","*":"asteriski",
         "^":"poisjääntimerkki","=":"yhtä suuri kuin -merkki"}
 ,da:{ 
 "&#8626;":"ny linje","&#8626;&#8626;":"nyt afsnit","&apos;":"apostrof",":":"kolon",",":"komma",
         "&mdash;":"tankestreg","&hellip;":"ellipse","!":"udråbstegn","&ndash;":"bindestreg",
         ".":"punktum","?":"spørgsmålstegn",";":"semikolon","*":"asterisk","^":"cirkumfleks",
         "=":"lighedstegn"}
 ,sv:{ 
 "&#8626;":"ny rad","&#8626;&#8626;":"nytt stycke","&apos;":"apostrof",":":"kolon",",":"komma",
         "&mdash;":"talstreck","&hellip;":"ellips","!":"utropstecken","&ndash;":"bindestreck",
         ".":"punkt|slutpunkt","?":"frågetecken",";":"semikolon","*":"asterisk",
         "^":"inskjutningstecken","=":"lika med-tecken"}
 ,es:{ 
 "&#8626;":"nueva línea","&#8626;&#8626;":"nuevo párrafo","&apos;":"apóstrofo",":":"dos puntos",
         ",":"coma","&mdash;":"guion","&hellip;":"puntos suspensivos","!":"signo de exclamación",
         "&ndash;":"raya",".":"punto","?":"signo de interrogación",";":"punto y coma","*":"asterisco",
         "^":"acento circunflejo","=":"signo igual"}
 ,ar:{ 
 "&#8626;":"سطر جديد","&#8626;&#8626;":"فقرة جديدة","&apos;":"فاصلة عليا",":":"نقطتان",",":"فاصلة",
         "&mdash;":"شرطة","&hellip;":"حذف","!":"علامة تعجّب","&ndash;":"واصلة",
         ".":"نهاية أو نقطة أو جملة تامّة|علامة وقف","?":"علامة استفهام",";":"فاصلة منقوطة",
         "*":"نجمة","^":"علامة إقحام","=":"علامة يساوي"}
 ,hu:{ 
 "&#8626;":"új sor","&#8626;&#8626;":"új bekezdés","&apos;":"aposztróf",":":"kettőspont",",":"vessző",
         "&mdash;":"kötőjel","&hellip;":"három pont","!":"felkiáltójel","&ndash;":"gondolatjel",".":"pont","?":"kérdőjel",
         ";":"pontosvessző","*":"csillag","^":"kalapjel","=":"egyenlőségjel"}
 ,cs:{ 
 "&#8626;":"nový řádek","&#8626;&#8626;":"nový odstavec","&apos;":"apostrof",":":"dvojtečka",",":"čárka",
         "&mdash;":"spojovník","&hellip;":"trojtečka","!":"vykřičník","&ndash;":"pomlčka",".":"tečka","?":"otazník",
         ";":"středník","*":"hvězdička","^":"vsuvka","=":"znak rovná se"}
 ,ja:{ 
 "&#8626;":"新しい行","&#8626;&#8626;":"次の段落","&apos;":"アポストロフィー",":":"コロン",",":"コンマ",
         "&mdash;":"ダッシュ","&hellip;":"てんてんてん","!":"感嘆符","&ndash;":"ハイフン",".":"ピリオド／ドット",
         "?":"疑問符",";":"セミコロン","*":"アステリスク","^":"キャレット","=":"イコール"}
 ,th:{ 
 "&#8626;":"บรรทัดใหม่","&#8626;&#8626;":"ย่อหน้าใหม่","&apos;":"อัญประกาศเดี่ยว",":":"ทวิภาค",",":"จุลภาค","&mdash;":"ขีดกลาง",
         "&hellip;":"จุดไข่ปลา","!":"อัศเจรีย์","&ndash;":"ยัติภังค์",".":"มหัพภาพ จุด จุดทศนิยม|จุดฟุลสต๊อป","?":"เครื่องหมายคำถาม",
         ";":"อัฒภาค","*":"ดอกจัน","^":"เครื่องหมายตก","=":"เครื่องหมายเท่ากับ"}
 ,id:{
   "&#8626;":"nova linha","&#8626;&#8626;":"novo parágrafo","&apos;":"apóstrofo",":":"dois pontos",
         ",":"vírgula","&mdash;":"traço","&hellip;":"reticências","!":"ponto de exclamação",
         "&ndash;":"hífen",".":"ponto|ponto final","?":"ponto de interrogação",";":"ponto e vírgula",
         "*":"asterisco","^":"acento circunflexo","=":"sinal de igual"}
 ,tr:{"&#8626;":"baris baru","&#8626;&#8626;":"paragraf baru","&apos;":"apostrof",":":"titik dua",
         ",":"koma","&mdash;":"tanda pisah","&hellip;":"elipsis","!":"tanda seru",
         "&ndash;":"tanda hubung",".":"dot|titik","?":"tanda tanya",";":"titik koma",
         "*":"bintang","^":"tanda sisip","=":"tanda sama dengan"}
 ,pl:{ 
 "&#8626;":"yeni satır","&#8626;&#8626;":"yeni paragraf","&apos;":"kesme işareti",":":"iki nokta üst üste",
             ",":"virgül","&mdash;":"tire","&hellip;":"üç nokta","!":"ünlem işareti",
             "&ndash;":"kısa çizgi",".":"nokta","?":"soru işareti",";":"noktalı virgül",
             "*":"yıldız işareti","^":"inceltme işareti","=":"eşittir işareti"}
 } 
 [t]?$("div.commands").html(""):$("div.commands").html('🙋  &nbsp;<a href="/languages/'+t+'" target="_blank">Speech Recognition commands</a>')}
 !function(e,t){ 
 "function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)} 
 ("undefined"!=typeof global?global:this.window||this.global,function(e){ 
 "use strict"; 
 var t,n,a,r,i,o,s,l={ 
 } 
 ,c="querySelector"in document&&"addEventListener"in e,u={ 
 selector:"[data-scroll]",selectorHeader:null,speed:500,easing:"easeInOutCubic",offset:0,callback:function(){ 
 } 
 } 
 ,d=function(){ 
 var e={ 
 } 
 ,t=!1,n=0,a=arguments.length; 
 "[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++); 
 for(var r=function(n){ 
 for(var a in n)
  Object.prototype.hasOwnProperty.call(n,a)&&(t&&"[object Object]"===Object.prototype.toString.call(n[a])?e[a]=d(!0,e[a],n[a]):e[a]=n[a])}
 ; n<a; n++)
  r(arguments[n]);
 return e} 
 ,p=function(){ 
 return
         Math.max(document.body.scrollHeight,
             document.documentElement.scrollHeight,
             document.body.offsetHeight,
             document.documentElement.offsetHeight,
             document.body.clientHeight,
             document.documentElement.clientHeight)
 }
 ,f=function(e){ 
 return e?(t=e,Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)+e.offsetTop):0; 
 var t} 
 ; 
 l.animateScroll=function(n,a,o){ 
 var l,
     c=(l=a?a.getAttribute("data-options"):null,
             l&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(l):{
 } 
 ),h=d(t||u,o||{ 
 } 
 ,c),m="[object Number]"===Object.prototype.toString.call(n),g=m||!n.tagName?null:n; 
 if(m||g){ 
 var v=e.pageYOffset; 
 h.selectorHeader&&!r&&(r=document.querySelector(h.selectorHeader)),i||(i=f(r)); 
 var y,k,b=m?n:function(t,n,a){ 
 var r=0; 
 if(t.offsetParent)do{ 
 r+=t.offsetTop,t=t.offsetParent} 
 while(t); 
 return r=Math.max(r-n-a,0),
     Math.min(r,p()-Math.max(document.documentElement.clientHeight,
             e.innerHeight||0))
 }
 (g,i,parseInt(h.offset,10)),w=b-v,x=p(),C=0; 
 0===e.pageYOffset&&e.scrollTo(0,0),clearInterval(s),s=setInterval(function(){ 
 y=(y=(C+=16)/parseInt(h.speed,10))>1?1:y,
     k=v+w*function(e,t){
 var n; 
 return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t} 
 (h.easing,y),e.scrollTo(0,Math.floor(k)),function(t,r,i){ 
 var o=e.pageYOffset; 
 (t==r||o==r||e.innerHeight+o>=x)&&(clearInterval(i),s=n,l=r,c=m,c||(s.focus(),document.activeElement.id!==s.id&&(s.setAttribute("tabindex","-1"),s.focus(),s.style.outline="none"),e.scrollTo(0,l)),h.callback(n,a)); 
 var s,l,c} 
 (k,b,s)} 
 ,16)} 
 } 
 ; 
 var h=function(t){ 
 e.location.hash,n&&(n.id=n.getAttribute("data-scroll-id"),l.animateScroll(n,a),n=null,a=null)} 
 ,m=function(r){ 
 if(0===r.button&&!r.metaKey&&!r.ctrlKey&&(a=function(e,t){ 
 var n,a,r=t.charAt(0),i="classList"in document.documentElement; 
 for("["===r&&(t=t.substr(1,t.length-2),n=t.split("="),n.length>1&&(a=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,""))); 
 e&&e!==document&&1===e.nodeType; 
 e=e.parentNode){ 
 if("."===r)if(i){ 
 if(e.classList.contains(t.substr(1)))return e} 
 else if(new RegExp("(^|\\s)"+t.substr(1)+"(\\s|$)").test(e.className))return e; 
 if("#"===r&&e.id===t.substr(1))return e; 
 if("["===r&&e.hasAttribute(n[0])){ 
 if(!a)return e; 
 if(e.getAttribute(n[0])===n[1])return e} 
 if(e.tagName.toLowerCase()===t)return e} 
 return null} 
 (r.target,t.selector),a&&"a"===a.tagName.toLowerCase()&&a.hostname===e.location.hostname&&a.pathname===e.location.pathname&&/#/.test(a.href))){ 
 var i=function(e){ 
 "#"===e.charAt(0)&&(e=e.substr(1)); 
 for(var t,n=String(e),a=n.length,r=-1,i="",o=n.charCodeAt(0); 
 ++r<a; 
 ){ 
 if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000."); 
 i+=t>=1&&t<=31||127==t||0===r&&t>=48&&t<=57||1===r&&t>=48&&t<=57&&45===o?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(r):"\\"+n.charAt(r)} 
 return"#"+i} 
 (a.hash); 
 if("#"===i){ 
 r.preventDefault(); 
 var o=(n=document.body).id?n.id:"smooth-scroll-top"; 
 return n.setAttribute("data-scroll-id",o),n.id="",void(e.location.hash.substring(1)===o?h():e.location.hash=o)} 
 (n=document.querySelector(i))&&(n.setAttribute("data-scroll-id",n.id),n.id="",a.hash===e.location.hash&&(r.preventDefault(),h()))} 
 } 
 ,g=function(e){ 
 o||(o=setTimeout(function(){ 
 o=null,i=f(r)} 
 ,66))} 
 ; 
 return l.destroy=function(){ 
 t&&(document.removeEventListener("click",m,!1),e.removeEventListener("resize",g,!1),t=null,n=null,a=null,r=null,i=null,o=null,s=null)} 
 ,l.init=function(n){ 
 c&&(l.destroy(),t=d(u,n||{ 
 } 
 ),r=t.selectorHeader?document.querySelector(t.selectorHeader):null,i=f(r),document.addEventListener("click",m,!1),e.addEventListener("hashchange",h,!1),r&&e.addEventListener("resize",g,!1))} 
 ,l} 
 ),function(e){ 
 "use strict"; 
 var t=function(t,n){ 
 this.el=e(t),this.options=e.extend({ 
 } 
 ,e.fn.typed.defaults,n),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()} 
 ; 
 t.prototype={ 
 constructor:t,init:function(){ 
 var e=this; 
 e.timeout=setTimeout(function(){ 
 for(var t=0; 
 t<e.strings.length; 
 ++t)e.sequence[t]=t; 
 e.shuffle&&(e.sequence=e.shuffleArray(e.sequence)),e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos)} 
 ,e.startDelay)} 
 ,build:function(){ 
 var t=this; 
 if(!0===this.showCursor&&(this.cursor=e('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.stringsElement){ 
 this.strings=[],this.stringsElement.hide(); 
 var n=this.stringsElement.children(); 
 e.each(n,function(n,a){ 
 t.strings.push(e(a).html())} 
 )} 
 this.init()} 
 ,typewrite:function(e,t){ 
 if(!0!==this.stop){ 
 var n=Math.round(70*Math.random())+this.typeSpeed,a=this; 
 a.timeout=setTimeout(function(){ 
 var n=0,r=e.substr(t); 
 if("^"===r.charAt(0)){ 
 var i=1; 
 /^\^\d+/.test(r)&&(r=/\d+/.exec(r)[0],i+=r.length,n=parseInt(r)),e=e.substring(0,t)+e.substring(t+i)} 
 if("html"===a.contentType){ 
 var o=e.substr(t).charAt(0); 
 if("<"===o||"&"===o){ 
 var s=""; 
 for(s="<"===o?">":";"; e.substr(t+1).charAt(0)!==s&&(e.substr(t).charAt(0),t++,!(t+1>e.length)); );
 t++} 
 } 
 a.timeout=setTimeout(function(){ 
 if(t===e.length){ 
 if(a.options.onStringTyped(a.arrayPos),a.arrayPos===a.strings.length-1&&(a.options.callback(),a.curLoop++,!1===a.loop||a.curLoop===a.loopCount))return; 
 a.timeout=setTimeout(function(){ 
 a.backspace(e,t)} 
 ,a.backDelay)} 
 else{ 
 0===t&&a.options.preStringTyped(a.arrayPos); 
 var n=e.substr(0,t+1); 
 a.attr?a.el.attr(a.attr,n):a.isInput?a.el.val(n):"html"===a.contentType?a.el.html(n):a.el.text(n),t++,a.typewrite(e,t)} 
 } 
 ,n)} 
 ,n)} 
 } 
 ,backspace:function(e,t){ 
 if(!0!==this.stop){ 
 var n=Math.round(70*Math.random())+this.backSpeed,a=this; 
 a.timeout=setTimeout(function(){ 
 if("html"===a.contentType&&">"===e.substr(t).charAt(0)){ 
 for(; 
 "<"!==e.substr(t-1).charAt(0)&&(e.substr(t).charAt(0),t--,!(0>t)); 
 ); 
 t--} 
 var n=e.substr(0,t); 
 a.attr?a.el.attr(a.attr,n):a.isInput?a.el.val(n):"html"===a.contentType?a.el.html(n):a.el.text(n),t>a.stopNum?(t--,a.backspace(e,t)):t<=a.stopNum&&(a.arrayPos++,a.arrayPos===a.strings.length?(a.arrayPos=0,a.shuffle&&(a.sequence=a.shuffleArray(a.sequence)),a.init()):a.typewrite(a.strings[a.sequence[a.arrayPos]],t))} 
 ,n)} 
 } 
 ,shuffleArray:function(e){ 
 var t,n,a=e.length; 
 if(a)for(; 
 --a; 
 )n=Math.floor(Math.random()*(a+1)),t=e[n],e[n]=e[a],e[a]=t; 
 return e} 
 ,reset:function(){ 
 clearInterval(this.timeout),this.el.attr("id"),this.el.empty(),void 0!==this.cursor&&this.cursor.remove(),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()} 
 } 
 ,e.fn.typed=function(n){ 
 return this.each(function(){ 
 var a=e(this),r=a.data("typed"),i="object"==typeof n&&n; 
 r&&r.reset(),a.data("typed",r=new t(this,i)),"string"==typeof n&&r[n]()} 
 )} 
 ,e.fn.typed.defaults={ 
 strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){ 
 } 
 ,preStringTyped:function(){ 
 } 
 ,onStringTyped:function(){ 
 } 
 ,resetCallback:function(){ 
 } 
 } 
 } 
 (window.jQuery); 
 var n=null,a=null,r=window.speechSynthesis||null; 
 function i(e){ 
 $("#voiceselect option").map(function(){ 
 $(this).data().lang===e?$(this).removeClass("hidden"):$(this).addClass("hidden")} 
 ),$("#voiceselect").prop("selectedIndex",0)} 
 function o(){ 
 $("#rate").val(10),$("#pitch").val(10),$("#voiceselect").prop("selectedIndex",0),G.rate=$("#rate").val(),G.pitch=$("#pitch").val(),G.voice=$("#voiceselect").val()} 
 function s(){ 
 n=$("#voiceselect"),a=$("span.btn-tts"),"speechSynthesis"in window?(l(),r.onvoiceschanged=function(e){ 
 l()} 
 ,$("#rate").val(G.rate||10),$("#pitch").val(G.pitch||10),$("#voiceselect").val(G.voice)):$(".btn-tts-parent").hide()} 
 function l(){ 
 n.empty(),$.each(c(),function(e,t){ 
 n.append($("<option>",{ 
 value:t.name,text:t.name,"data-lang":t.lang.toLowerCase()} 
 ))} 
 )} 
 function c(){ 
 return r?r.getVoices():[]} 
 function u(){ 
 A(),$("a.tts").click()} 
 function d(){ 
 if(r){ 
 if(r.speaking)r.cancel(); 
 else{ 
 var e=new SpeechSynthesisUtterance; 
 e.text=E(),e.lang=$("#lang").val(),G.rate=$("#rate").val(),G.pitch=$("#pitch").val(),G.voice=$("#voiceselect").val(),e.rate=parseFloat(G.rate/10),e.pitch=parseFloat(G.pitch/10); 
 var t=c(),n=t.filter(function(e){ 
 return e.name==G.voice} 
 ),a=n.length?n[0]:t.length?t[0]:null; 
 a?(e.voice=a,ie("Voice: "+a.name)):ie("No voice "+t.length),r.speak(e),e.onend=function(e){ 
 p()} 
 } 
 p()} 
 } 
 function p(){ 
 a.html(r.speaking?'Stop &nbsp;<img src="images/bars.svg" height="20">':"Speak")}
 window.mr=window.mr||{ 
 } 
 ,mr=function(e,t,n,a){ 
 "use strict"; 
 var r={ 
 documentReady:[],documentReadyDeferred:[],windowLoad:[],windowLoadDeferred:[]} 
 ; 
 (e=e||{ 
 } 
 ).status={ 
 documentReadyRan:!1,windowLoadPending:!1} 
 ,t(a).ready(i),t(n).on("load",o); 
 function i(n){ 
 n=void 0===n?t:n,r.documentReady.concat(r.documentReadyDeferred).forEach(function(e){ 
 e(n)} 
 ),e.status.documentReadyRan=!0,e.status.windowLoadPending&&o(e.setContext())} 
 function o(n){ 
 e.status.documentReadyRan?(e.status.windowLoadPending=!1,n="object"==typeof n?t:n,r.windowLoad.concat(r.windowLoadDeferred).forEach(function(e){ 
 e(n)} 
 )):e.status.windowLoadPending=!0} 
 return e.setContext=function(e){ 
 return void 0!==e?function(n){ 
 return t(e).find(n)} 
 :t} 
 ,e.components=r,e.documentReady=i,e.windowLoad=o,e} 
 (window.mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.util={ 
 } 
 ,e.util.requestAnimationFrame=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||n.msRequestAnimationFrame,e.util.documentReady=function(e){ 
 var t=(new Date).getFullYear(); 
 e(".update-year").text(t)} 
 ,e.util.windowLoad=function(e){ 
 e("[data-delay-src]").each(function(){ 
 var t=e(this); 
 t.attr("src",t.attr("data-delay-src")),t.removeAttr("data-delay-src")} 
 )} 
 ,e.util.getURLParameter=function(e){ 
 return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[void 0,""])[1].replace(/\+/g,"%20"))||null}
 ,e.util.capitaliseFirstLetter=function(e){ 
 return e.charAt(0).toUpperCase()+e.slice(1)} 
 ,e.util.slugify=function(e,t){ 
 return void 0!==t?e.replace(/ +/g,""):e.toLowerCase().replace(/[\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\]\[\}\{\'\"\;\\\:\?\/\>\<\.\,]+/g,"").replace(/ +/g,"-")}
 ,e.util.sortChildrenByText=function(e,n){ 
 var a=t(e),r=a.children().get(),i=-1,o=1; 
 void 0!==n&&(i=1,o=-1),r.sort(function(e,n){ 
 var a=t(e).text(),r=t(n).text(); 
 return a<r?i:a>r?o:0} 
 ),a.empty(),t(r).each(function(e,t){ 
 a.append(t)} 
 )} 
 ,e.util.idleSrc=function(e,n){ 
 n=void 0!==n?n:"",(e.is(n+"[src]")?e:e.find(n+"[src]")).each(function(e,n){ 
 var a=(n=t(n)).attr("src"); 
 void 0===n.attr("data-src")&&n.attr("data-src",a),n.attr("src","")} 
 )} 
 ,e.util.activateIdleSrc=function(e,n){ 
 n=void 0!==n?n:"",(e.is(n+"[data-src]")?e:e.find(n+"[data-src]")).each(function(e,n){ 
 var a=(n=t(n)).attr("data-src"); 
 n.attr("src",a)} 
 )} 
 ,e.util.pauseVideo=function(e){ 
 (e.is("video")?e:e.find("video")).each(function(e,n){ 
 t(n).get(0).pause()} 
 )} 
 ,e.util.parsePixels=function(e){ 
 var a=t(n).height(); 
 return/^[1-9]{1}[0-9]*[p][x]$/.test(e)?parseInt(e.replace("px",""),10):/^[1-9]{1}[0-9]*[v][h]$/.test(e)?a*(parseInt(e.replace("vh",""),10)/100):-1}
 ,e.util.removeHash=function(){ 
 history.pushState("",a.title,n.location.pathname+n.location.search)} 
 ,e.components.documentReady.push(e.util.documentReady),e.components.windowLoad.push(e.util.windowLoad),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.window={ 
 } 
 ,e.window.height=t(n).height(),e.window.width=t(n).width(),t(n).on("resize",function(){ 
 e.window.height=t(n).height(),e.window.width=t(n).width()} 
 ),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 e.scroll={ 
 } 
 ; 
 var r=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||n.msRequestAnimationFrame; 
 e.scroll.listeners=[],e.scroll.busy=!1,e.scroll.y=0,e.scroll.x=0; 
 var i=function(t){ 
 jQuery(n).off("scroll.mr"),jQuery(n).on("scroll.mr",function(t){ 
 !1===e.scroll.busy&&(e.scroll.busy=!0,r(function(t){ 
 e.scroll.update(t)} 
 )),t.stopPropagation&&t.stopPropagation()} 
 )} 
 ; 
 return e.scroll.update=function(t){ 
 var a=void 0!==n.mr_parallax; 
 if(e.scroll.y=a?mr_parallax.mr_getScrollPosition():n.pageYOffset,e.scroll.busy=!1,a&&mr_parallax.mr_parallaxBackground(),e.scroll.listeners.length>0)for(var r=0,i=e.scroll.listeners.length; 
 r<i; 
 r++)e.scroll.listeners[r](t)} 
 ,e.scroll.documentReady=i,e.components.documentReady.push(i),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 e.scroll.classModifiers={ 
 } 
 ,e.scroll.classModifiers.rules=[],e.scroll.classModifiers.parseScrollRules=function(t){ 
 return t.attr("data-scroll-class").split(";").forEach(function(n){
 var a,r,i={ 
 } 
 ; 
 if(2===(a=n.replace(/\s/g,"").split(":")).length){ 
 if(!((r=e.util.parsePixels(a[0]))>-1))return!1; 
 if(i.scrollPoint=r,!a[1].length)return!1; 
 var o=a[1]; 
 i.toggleClass=o,i.hasClass=t.hasClass(o),i.element=t.get(0),e.scroll.classModifiers.rules.push(i)} 
 } 
 ),!!e.scroll.classModifiers.rules.length} 
 ,e.scroll.classModifiers.update=function(t){ 
 for(var n,a=e.scroll.y,r=e.scroll.classModifiers.rules,i=r.length; 
 i--; 
 )a>(n=r[i]).scrollPoint&&!n.hasClass&&(n.element.classList.add(n.toggleClass),n.hasClass=e.scroll.classModifiers.rules[i].hasClass=!0),a<n.scrollPoint&&n.hasClass&&(n.element.classList.remove(n.toggleClass),n.hasClass=e.scroll.classModifiers.rules[i].hasClass=!1)} 
 ; 
 var r=function(){ 
 t('.main-container [data-scroll-class*="pos-fixed"]').each(function(){ 
 var e=t(this); 
 e.css("max-width",e.parent().outerWidth()),e.parent().css("min-height",e.outerHeight())} 
 )} 
 ,i=function(t){ 
 t("[data-scroll-class]").each(function(){ 
 var n=t(this); 
 e.scroll.classModifiers.parseScrollRules(n)} 
 ),r(),t(n).on("resize",r),e.scroll.classModifiers.rules.length&&e.scroll.listeners.push(e.scroll.classModifiers.update)} 
 ; 
 return e.components.documentReady.push(i),e.scroll.classModifiers.documentReady=i,e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.accordions=e.accordions||{ 
 } 
 ,e.accordions.documentReady=function(t){ 
 t(".accordion__title").on("click",function(){ 
 e.accordions.activatePanel(t(this))} 
 ),t(".accordion").each(function(){ 
 var e=t(this),n=e.outerHeight(!0); 
 e.css("min-height",n)} 
 ),""!==n.location.hash&&"#"!==n.location.hash&&t(".accordion li"+t(this).attr("href")).length&&e.accordions.activatePanelById(n.location.hash,!0),jQuery(a).on("click",'a[href^="#"]:not(a[href="#"])',function(){ 
 t(".accordion > li > .accordion__title"+t(this).attr("href")).length&&e.accordions.activatePanelById(t(this).attr("href"),!0)} 
 )} 
 ,e.accordions.activatePanel=function(e,n){ 
 var r=t(e),i=r.closest(".accordion"),o=r.closest("li"),s=a.createEvent("Event"),l=a.createEvent("Event"); 
 if(s.initEvent("panelOpened.accordions.mr",!0,!0),l.initEvent("panelClosed.accordions.mr",!0,!0),o.hasClass("active"))!0!==n&&(o.removeClass("active"),r.trigger("panelClosed.accordions.mr").get(0).dispatchEvent(l)); 
 else if(i.hasClass("accordion--oneopen")){ 
 var c=i.find("li.active"); 
 c.length&&(c.removeClass("active"),c.trigger("panelClosed.accordions.mr").get(0).dispatchEvent(l)),o.addClass("active"),o.trigger("panelOpened.accordions.mr").get(0).dispatchEvent(s)} 
 else o.is(".active")||o.trigger("panelOpened.accordions.mr").get(0).dispatchEvent(s),o.addClass("active")} 
 ,e.accordions.activatePanelById=function(n,a){ 
 var r; 
 ""!==n&&"#"!==n&&(r=t(".accordion > li > .accordion__title#"+n.replace("#",""))).length&&(t("html, body").stop(!0).animate({ 
 scrollTop:r.offset().top-50} 
 ,1200),e.accordions.activatePanel(r,a))} 
 ,e.components.documentReady.push(e.accordions.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.alerts=e.alerts||{ 
 } 
 ,e.alerts.documentReady=function(e){ 
 e(".alert__close").on("click touchstart",function(){ 
 jQuery(this).closest(".alert").addClass("alert--dismissed")} 
 )} 
 ,e.components.documentReady.push(e.alerts.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.backgrounds=e.backgrounds||{ 
 } 
 ,e.backgrounds.documentReady=function(e){ 
 e(".background-image-holder").each(function(){ 
 var t=e(this).children("img").attr("src"); 
 e(this).css("background",'url("'+t+'")').css("background-position","initial").css("opacity","1")} 
 )} 
 ,e.components.documentReady.push(e.backgrounds.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.bars=e.bars||{ 
 } 
 ,e.bars.documentReady=function(e){ 
 e('.nav-container .bar[data-scroll-class*="fixed"]:not(.bar--absolute)').each(function(){ 
 var t=e(this),n=t.outerHeight(!0); 
 t.closest(".nav-container").css("min-height",n)} 
 )} 
 ,e.components.documentReady.push(e.bars.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.cookies={ 
 getItem:function(e){ 
 return e?decodeURIComponent(a.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+
         encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null}
 ,setItem:function(e,t,n,r,i,o){ 
 if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1; 
 var s=""; 
 if(n)switch(n.constructor){ 
 case Number:s=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;
 break; 
 case String:s="; expires="+n; break; case Date:s=";expires="+n.toUTCString()}
 return a.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+s+(i?"; domain="+i:"")+
     (r?"; path="+r:"")+(o?"; secure":""),!0},
         removeItem:function(e,t,n){
 return!!this.hasItem(e)&&(a.cookie=encodeURIComponent(e)+
         "=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(t?"; path="+t:""),!0)}
 ,hasItem:function(e){ 
 return!!e&&new RegExp("(?:^|;\\s*)"+
         encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(a.cookie)
         }
 ,keys:function(){ 
 for(var e=a.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),
         t=e.length,n=0;
 n<t; 
 n++)e[n]=decodeURIComponent(e[n]); 
 return e} 
 } 
 ,e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.countdown=e.countdown||{ 
 } 
 ,e.countdown.options=e.countdown.options||{ 
 } 
 ,e.countdown.documentReady=function(t){ 
 t(".countdown[data-date]").each(function(){ 
 var n,a=t(this),r=a.attr("data-date"),i=void 0!==a.attr("data-days-text")?"%D "+a.attr("data-days-text")+" %H:%M:%S":"%D days %H:%M:%S",o=(i=void 0!==e.countdown.options.format?e.countdown.options.format:i,void 0!==a.attr("data-date-format")?a.attr("data-date-format"):i); 
 void 0!==a.attr("data-date-fallback")&&(n=a.attr("data-date-fallback")||"Timer Done"),a.countdown(r,function(e){ 
 e.elapsed?a.text(n):a.text(e.strftime(o))} 
 )} 
 )} 
 ,e.components.documentReadyDeferred.push(e.countdown.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 e.datepicker=e.datepicker||{ 
 } 
 ; 
 var r=e.datepicker.options||{ 
 } 
 ; 
 return e.datepicker.documentReady=function(e){ 
 e(".datepicker").length&&e(".datepicker").pickadate(r)} 
 ,e.components.documentReadyDeferred.push(e.datepicker.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.dropdowns=e.dropdowns||{ 
 } 
 ,e.dropdowns.done=!1,e.dropdowns.documentReady=function(t){ 
 var r=!1; 
 t('html[dir="rtl"]').length&&(r=!0),e.dropdowns.done||(jQuery(a).on("click","body:not(.dropdowns--hover) .dropdown:not(.dropdown--hover), body.dropdowns--hover .dropdown.dropdown--click",function(e){ 
 var n=jQuery(this); 
 jQuery(e.target).is(".dropdown--active > .dropdown__trigger")?(n.siblings().removeClass("dropdown--active").find(".dropdown").removeClass("dropdown--active"),n.toggleClass("dropdown--active")):(t(".dropdown--active").removeClass("dropdown--active"),n.addClass("dropdown--active"))} 
 ),jQuery(a).on("click touchstart","body:not(.dropdowns--hover)",function(e){ 
 jQuery(e.target).is('[class*="dropdown"], [class*="dropdown"] *')||t(".dropdown--active").removeClass("dropdown--active")} 
 ),jQuery("body.dropdowns--hover .dropdown").on("click",function(e){ 
 e.stopPropagation(),jQuery(this).toggleClass("dropdown--active")} 
 ),jQuery("body").append('<div class="container containerMeasure" style="opacity:0;pointer-events:none;"></div>'),
     !1===r?(e.dropdowns.repositionDropdowns(t),jQuery(n).on("resize",function(){
 e.dropdowns.repositionDropdowns(t)} 
 )):(e.dropdowns.repositionDropdownsRtl(t),jQuery(n).on("resize",function(){ 
 e.dropdowns.repositionDropdownsRtl(t)} 
 )),e.dropdowns.done=!0)} 
 ,e.dropdowns.repositionDropdowns=function(e){ 
 e(".dropdown__container").each(function(){ 
 var e,t,n,a; 
 jQuery(this).css("left",""),t=(e=jQuery(this)).offset().left,n=jQuery(".containerMeasure").offset().left,a=e.closest(".dropdown").offset().left,e.css("left",-t+n),e.find('.dropdown__content:not([class*="md-12"])').length&&e.find(".dropdown__content").css("left",a-n)} 
 ),e(".dropdown__content").each(function(){ 
 var e,t,a,r,i; 
 a=(e=jQuery(this)).offset().left+(t=e.outerWidth(!0)),r=jQuery(n).outerWidth(!0),i=jQuery(".containerMeasure").outerWidth()-t,a>r&&e.css("left",i)} 
 )} 
 ,e.dropdowns.repositionDropdownsRtl=function(e){ 
 var t=jQuery(n).width(); 
 e(".dropdown__container").each(function(){ 
 var e,n,a,r; 
 jQuery(this).css("left",""),e=jQuery(this),n=t-(e.offset().left+e.outerWidth(!0)),a=jQuery(".containerMeasure").offset().left,r=t-(e.closest(".dropdown").offset().left+e.closest(".dropdown").outerWidth(!0)),e.css("right",-n+a),e.find('.dropdown__content:not([class*="md-12"])').length&&e.find(".dropdown__content").css("right",r-a)} 
 ),e(".dropdown__content").each(function(){ 
 var e,a,r,i,o; 
 e=jQuery(this),r=t-(e.offset().left+e.outerWidth(!0))+(a=e.outerWidth(!0)),i=jQuery(n).outerWidth(!0),o=jQuery(".containerMeasure").outerWidth()-a,r>i&&e.css("right",o)} 
 )} 
 ,e.components.documentReady.push(e.dropdowns.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.forms=e.forms||{ 
 } 
 ,e.forms.captcha={ 
 } 
 ,e.forms.captcha.widgets=[],e.forms.captcha.done=!1,e.forms.documentReady=function(t){ 
 e.forms.captcha.widgets=[],t('.input-checkbox input[type="checkbox"], .input-radio input[type="radio"]').each(function(e){ 
 var n=t(this),a=n.siblings("label"),r="input-assigned-"+e; 
 void 0===n.attr("id")||""===n.attr("id")?(n.attr("id",r),a.attr("for",r)):(r=n.attr("id"),a.attr("for",r))} 
 ),t(".input-number__controls > span").off("click.mr").on("click.mr",function(){ 
 var e=jQuery(this),t=e.closest(".input-number"),n=t.find('input[type="number"]'),a=n.attr("max"),r=n.attr("min"),i=1,o=parseInt(n.val(),10); 
 t.is("[data-step]")&&(i=parseInt(t.attr("data-step"),10)),e.hasClass("input-number__increase")?o+i<=a&&n.val(o+i):o-i>=r&&n.val(o-i)} 
 ),t(".input-file .btn").off("click.mr").on("click.mr",function(){ 
 return t(this).siblings("input").trigger("click"),!1} 
 ),t('form.form-email, form[action*="list-manage.com"], form[action*="createsend.com"]').attr("novalidate",!0).off("submit").on("submit",e.forms.submit),t(a).on("change, input, paste, keyup",".attempted-submit .field-error",function(){ 
 t(this).removeClass("field-error")} 
 ),t('form[data-recaptcha-sitekey]:not([data-recaptcha-sitekey=""])').each(function(){ 
 var t,n,a,r,i,o,s=jQuery(this),l=s.find("div.recaptcha"); 
 i=void 0!==(i=s.attr("data-recaptcha-theme"))?i:"",o=void 0!==(o=s.attr("data-recaptcha-size"))?o:"",e.forms.captcha.sitekey=s.attr("data-recaptcha-sitekey"),l.length||(t=s.find("button[type=submit]").closest('[class*="col-"]'),l=jQuery("<div>").addClass("recaptcha"),jQuery("<div>").addClass("col-xs-12").append(l).insertBefore(t)),n={ 
 element:l.get(0),parentForm:s,theme:i,size:o} 
 ,e.forms.captcha.widgets.push(n),!1===e.forms.captcha.done?jQuery('script[src*="recaptcha/api.js"]').length||(r="https://www.google.com/recaptcha/api.js?onload=mrFormsCaptchaInit&render=explicit",(a=jQuery("<script async defer>")).attr("src",r),jQuery("body").append(a),e.forms.captcha.done=!0):"undefined"!=typeof grecaptcha&&e.forms.captcha.renderWidgets()} 
 )} 
 ,e.forms.submit=function(a){ 
 a.preventDefault?a.preventDefault():a.returnValue=!1; 
 var r,i,o,s,l,c=t("body"),u=t(a.target).closest("form"),d=void 0!==u.attr("action")?u.attr("action"):"",p=u.find('button[type="submit"], input[type="submit"]'),f=u.attr("original-error"),h=!!u.find("div.recaptcha").length; 
 if(c.find(".form-error, .form-success").remove(),
         p.attr("data-text",p.text()),
         s=u.attr("data-error")?u.attr("data-error"):"Please fill all fields correctly",
         l=u.attr("data-success")?u.attr("data-success"):"Thanks, we'll be in touch shortly",
         c.append('<div class="form-error" style="display: none;">'+s+"</div>"),
         c.append('<div class="form-success" style="display: none;">'+l+"</div>"),
         i=c.find(".form-error"),o=c.find(".form-success"),u.addClass("attempted-submit"),
     -1!==d.indexOf("createsend.com")||-1!==d.indexOf("list-manage.com"))
  if(void 0!==f&&!1!==f&&i.html(f),1!==e.forms.validateFields(u)){
 u.removeClass("attempted-submit"),i.fadeOut(200),p.addClass("btn--loading"); 
 try{ 
 t.ajax({ 
 url:u.attr("action"),
     crossDomain:!0,
     data:u.serialize(),
     method:"GET",
     cache:!1,
     dataType:"json",
     contentType:"application/json;charset=utf-8",
         success:function(t){
         "success"!==t.result&&200!==t.Status?(i.attr("original-error",i.text()),
                 i.html(t.msg).stop(!0).fadeIn(1e3),
                 o.stop(!0).fadeOut(1e3),
                 p.removeClass("btn--loading")):(p.removeClass("btn--loading"),
                 void 0!==(r=u.attr("data-success-redirect"))&&!1!==r&&""!==r?n.location=r:(e.forms.resetForm(u),e.forms.showFormSuccess(o,i,1e3,5e3,500)))
 }
 } 
 )} 
 catch(t){ 
 i.attr("original-error",i.text()),i.html(t.message),e.forms.showFormError(o,i,1e3,5e3,500),p.removeClass("btn--loading")} 
 } 
 else e.forms.showFormError(o,i,1e3,5e3,500); 
 else void 0!==f&&!1!==f&&i.text(f),1===e.forms.validateFields(u)?e.forms.showFormError(o,i,1e3,5e3,500):(u.removeClass("attempted-submit"),i.fadeOut(200),p.addClass("btn--loading"),jQuery.ajax({ 
 type:"POST",url:""!==d?d:"mail/mail.php",data:u.serialize()+"&url="+n.location.href+"&captcha="+h,success:function(a){ 
 p.removeClass("btn--loading"),t.isNumeric(a)?parseInt(a,10)>0&&(void 0!==(r=u.attr("data-success-redirect"))&&!1!==r&&""!==r&&(n.location=r),e.forms.resetForm(u),e.forms.showFormSuccess(o,i,1e3,5e3,500),e.forms.captcha.resetWidgets()):(i.attr("original-error",i.text()),i.text(a).stop(!0).fadeIn(1e3),o.stop(!0).fadeOut(1e3))} 
 ,error:function(e,t,n){ 
 i.attr("original-error",i.text()),i.text(n).stop(!0).fadeIn(1e3),o.stop(!0).fadeOut(1e3),p.removeClass("btn--loading")} 
 } 
 )); 
 return!1} 
 ,e.forms.validateFields=function(e){ 
 var n,a=t(a),r=!1; 
 if((e=t(e)).find('.validate-required[type="checkbox"]').each(function(){ 
 var e=t(this); 
 t('[name="'+t(this).attr("name")+'"]:checked').length||(r=1,t(this).attr("data-name"),e.parent().addClass("field-error"))} 
 ),e.find(".validate-required, .required, [required]").not('input[type="checkbox"]').each(function(){ 
 ""===t(this).val()?(t(this).addClass("field-error"),r=1):t(this).removeClass("field-error")} 
 ),e.find('.validate-email, .email, [name*="cm-"][type="email"]').each(function(){ 
 /(.+)@(.+){2,}\.(.+){2,}/.test(t(this).val())?t(this).removeClass("field-error"):(t(this).addClass("field-error"),r=1)}
 ),e.find(".validate-number-dash").each(function(){ 
 /^[0-9][0-9-]+[0-9]$/.test(t(this).val())?t(this).removeClass("field-error"):(t(this).addClass("field-error"),r=1)} 
 ),e.find("div.recaptcha").length&&void 0!==e.attr("data-recaptcha-sitekey")&&(n=t(e.find("div.recaptcha")),""!==grecaptcha.getResponse(e.data("recaptchaWidgetID"))?n.removeClass("field-error"):(n.addClass("field-error"),r=1)),e.find(".field-error").length){ 
 var i=t(e).find(".field-error:first"); 
 i.length&&t("html, body").stop(!0).animate({ 
 scrollTop:i.offset().top-100} 
 ,1200,function(){ 
 i.focus()} 
 )} 
 else a.find(".form-error").fadeOut(1e3); 
 return r} 
 ,e.forms.showFormSuccess=function(e,t,n,a,r){ 
 e.stop(!0).fadeIn(n),t.stop(!0).fadeOut(n),setTimeout(function(){ 
 e.stop(!0).fadeOut(r)} 
 ,a)} 
 ,e.forms.showFormError=function(e,t,n,a,r){ 
 t.stop(!0).fadeIn(n),e.stop(!0).fadeOut(n),setTimeout(function(){ 
 t.stop(!0).fadeOut(r)} 
 ,a)} 
 ,e.forms.resetForm=function(e){ 
 (e=t(e)).get(0).reset(),e.find(".input-radio, .input-checkbox").removeClass("checked"),e.find("[data-default-value]").filter('[type="text"],[type="number"],[type="email"],[type="url"],[type="search"],[type="tel"]').each(function(){ 
 var e=jQuery(this); 
 e.val(e.attr("data-default-value"))} 
 )} 
 ,n.mrFormsCaptchaInit=function(){ 
 e.forms.captcha.renderWidgets()} 
 ,e.forms.captcha.renderWidgets=function(){ 
 e.forms.captcha.widgets.forEach(function(t){ 
 ""===t.element.innerHTML.replace(/[\s\xA0]+/g,"")&&(t.id=grecaptcha.render(t.element,{ 
 sitekey:e.forms.captcha.sitekey,theme:t.theme,size:t.size,callback:e.forms.captcha.setHuman} 
 ),t.parentForm.data("recaptchaWidgetID",t.id))} 
 )} 
 ,e.forms.captcha.resetWidgets=function(){ 
 e.forms.captcha.widgets.forEach(function(e){ 
 grecaptcha.reset(e.id)} 
 )} 
 ,e.forms.captcha.setHuman=function(){ 
 jQuery("div.recaptcha.field-error").removeClass("field-error")} 
 ,e.components.documentReadyDeferred.push(e.forms.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.granim=e.granim||{ 
 } 
 ,e.granim.documentReady=function(t){ 
 t("[data-gradient-bg]").each(function(n,a){ 
 var r,i,o,s,l=t(this),c="granim-"+n,u=l.attr("data-gradient-bg"),d=[],p=[],f={ 
 } 
 ; 
 if(l.prepend('<canvas id="'+c+'"></canvas>'),!0===/^(#[0-9|a-f|A-F]{6}){1}([ ]*,[ ]*#[0-9|a-f|A-F]{6})*$/.test(u)){
 for((r=(u=(u=u.replace(" ","")).split(",")).length)%2!=0&&u.push(u[r-1]),i=0; 
 i<r/2; 
 i++)(p=[]).push(u.shift()),p.push(u.shift()),d.push(p); 
 f.states={ 
 "default-state":{ 
 gradients:d} 
 } 
 } 
 o={ 
 element:"#"+c,name:"basic-gradient",direction:"left-right",opacity:[1,1],isPausedWhenNotInView:!0,states:{ 
 "default-state":{ 
 gradients:d} 
 } 
 } 
 ,s=jQuery.extend({ 
 } 
 ,o,e.granim.options,f),t(this).data("gradientOptions",s),t(this),new Granim(s)} 
 )} 
 ,e.components.documentReadyDeferred.push(e.granim.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.instagram=e.instagram||{ 
 } 
 ,e.instagram.documentReady=function(t){ 
 var n,a,r={ 
 } 
 ; 
 if(t(".instafeed").length){ 
 var i,o,s="4079540202.b9b1d8a.1d13c245c68d4a17bfbff87919aaeb14",l="b9b1d8ae049d4153b24a6332f0088686"; 
 t(".instafeed[data-access-token][data-client-id]").length&&(i=t(".instafeed[data-access-token][data-client-id]").first().attr("data-access-token"),o=t(".instafeed[data-access-token][data-client-id]").first().attr("data-client-id"),""!==i&&(s=i),""!==o&&(l=o)),jQuery.fn.spectragram.accessData={ 
 accessToken:s,clientID:l} 
 } 
 t(".instafeed").each(function(){ 
 var i=t(this); 
 i.attr("data-user-name"),n={ 
 query:"mediumrarethemes",max:12} 
 ,r.max=i.attr("data-amount"),r.query=i.attr("data-user-name"),a=jQuery.extend({ 
 } 
 ,n,e.instagram.options,r),i.append("<ul></ul>"),i.children("ul").spectragram("getUserFeed",a)} 
 )} 
 ,e.components.documentReadyDeferred.push(e.instagram.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.maps=e.maps||{ 
 } 
 ,e.maps.options=e.maps.options||{ 
 } 
 ,e.maps.documentReady=function(t){ 
 t(".map-holder").on("click",function(){ 
 t(this).addClass("interact")} 
 ).removeClass("interact"); 
 var n=t(".map-container[data-maps-api-key]"); 
 n.length&&(n.addClass("gmaps-active"),e.maps.initAPI(t),e.maps.init())} 
 ,e.maps.initAPI=function(e){ 
 if(a.querySelector("[data-maps-api-key]")&&!a.querySelector(".gMapsAPI")&&e("[data-maps-api-key]").length){ 
 var t=a.createElement("script"),n=e("[data-maps-api-key]:first").attr("data-maps-api-key"); 
 ""!==(n=void 0!==n?n:"")&&(t.type="text/javascript",t.src="https://maps.googleapis.com/maps/api/js?key="+n+"&callback=mr.maps.init",t.className="gMapsAPI",a.body.appendChild(t))} 
 } 
 ,e.maps.init=function(){ 
 void 0!==n.google&&void 0!==n.google.maps&&(e.maps.instances=[],jQuery(".gmaps-active").each(function(){ 
 var t,n,r,i,o,s,l=this,
     c=jQuery(this),
     u=jQuery(a).width()>766,
     d=(c.attr("data-zoom-controls"),
     void 0!==c.attr("data-zoom-controls")&&c.attr("data-zoom-controls")),
     p=void 0!==c.attr("data-latlong")&&c.attr("data-latlong"),
     f=!!p&&1*p.substr(0,p.indexOf(",")),h=!!p&&1*p.substr(p.indexOf(",")+1),m=new google.maps.Geocoder,
     g=void 0!==c.attr("data-address")?c.attr("data-address").split(";"):[""],v={}
 ,y={}
 ; 
 (s=a.createEvent("Event")).initEvent("mapCreated.maps.mr",!0,!0),r={ 
 disableDefaultUI:!0,draggable:u,scrollwheel:!1,styles:[{ 
 featureType:"landscape",stylers:[{ 
 saturation:-100} 
 ,{ 
 lightness:65} 
 ,{ 
 visibility:"on"} 
 ]} 
 ,{ 
 featureType:"poi",stylers:[{ 
 saturation:-100} 
 ,{ 
 lightness:51} 
 ,{ 
 visibility:"simplified"} 
 ]} 
 ,{ 
 featureType:"road.highway",stylers:[{ 
 saturation:-100} 
 ,{ 
 visibility:"simplified"} 
 ]} 
 ,{ 
 featureType:"road.arterial",stylers:[{ 
 saturation:-100} 
 ,{ 
 lightness:30} 
 ,{ 
 visibility:"on"} 
 ]} 
 ,{ 
 featureType:"road.local",stylers:[{ 
 saturation:-100} 
 ,{ 
 lightness:40} 
 ,{ 
 visibility:"on"} 
 ]} 
 ,{ 
 featureType:"transit",stylers:[{ 
 saturation:-100} 
 ,{ 
 visibility:"simplified"} 
 ]} 
 ,{ 
 featureType:"administrative.province",stylers:[{ 
 visibility:"off"} 
 ]} 
 ,{ 
 featureType:"water",elementType:"labels",stylers:[{ 
 visibility:"on"} 
 ,{ 
 lightness:-25} 
 ,{ 
 saturation:-100} 
 ]} 
 ,{ 
 featureType:"water",elementType:"geometry",stylers:[{ 
 hue:"#ffff00"} 
 ,{ 
 lightness:-25} 
 ,{ 
 saturation:-97} 
 ]} 
 ],zoom:17,zoomControl:!1} 
 ,v.styles=void 0!==c.attr("data-map-style")?JSON.parse(c.attr("data-map-style")):void 0,v.zoom=c.attr("data-map-zoom")?parseInt(c.attr("data-map-zoom"),10):void 0,v.zoomControlOptions=!1!==d?{ 
 position:google.maps.ControlPosition[d]} 
 :void 0,n={ 
 icon:{ 
 url:("undefined"!=typeof mr_variant?"../":"")+"img/mapmarker.png",scaledSize:new google.maps.Size(50,50)} 
 ,title:"We Are Here",optimised:!1} 
 ,y.icon=void 0!==c.attr("data-marker-image")?c.attr("data-marker-image"):void 0,y.title=c.attr("data-marker-title"),i=jQuery.extend({ 
 } 
 ,r,e.maps.options.map,v),o=jQuery.extend({ 
 } 
 ,n,e.maps.options.marker,y),void 0!==g&&""!==g[0]?m.geocode({ 
 address:g[0].replace("[nomarker]","")} 
 ,function(n,a){ 
 a===google.maps.GeocoderStatus.OK&&(t=new google.maps.Map(l,i),e.maps.instances.push(t),jQuery(l).trigger("mapCreated.maps.mr").get(0).dispatchEvent(s),t.setCenter(n[0].geometry.location),g.forEach(function(e){ 
 if(/(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)/.test(e)){ 
 var n=e.split(","); 
 new google.maps.Marker(jQuery.extend({ 
 } 
 ,o,{ 
 position:{ 
 lat:1*n[0],lng:1*n[1]} 
 ,map:t} 
 ))} 
 else e.indexOf("[nomarker]")<0&&(new google.maps.Geocoder).geocode({ 
 address:e.replace("[nomarker]","")} 
 ,function(e,n){ 
 n===google.maps.GeocoderStatus.OK&&new google.maps.Marker(jQuery.extend({ 
 } 
 ,o,{ 
 map:t,position:e[0].geometry.location} 
 ))} 
 )} 
 ))} 
 ):void 0!==f&&""!==f&&!1!==f&&void 0!==h&&""!==h&&!1!==h&&(i.center={ 
 lat:f,lng:h} 
 ,t=new google.maps.Map(l,i),new google.maps.Marker(jQuery.extend({ 
 } 
 ,o,{ 
 position:{ 
 lat:f,lng:h} 
 ,map:t} 
 )),e.maps.instances.push(t),jQuery(l).trigger("mapCreated.maps.mr").get(0).dispatchEvent(s))} 
 ))} 
 ,e.components.documentReady.push(e.maps.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.masonry=e.masonry||{ 
 } 
 ,e.masonry.documentReady=function(t){ 
 e.masonry.updateFilters(),t(a).on("click touchstart",".masonry__filters li:not(.js-no-action)",function(){ 
 var e=t(this),n=e.closest(".masonry").find(".masonry__container"),a="*"; 
 "*"!==e.attr("data-masonry-filter")&&(a=".filter-"+e.attr("data-masonry-filter")),e.siblings("li").removeClass("active"),e.addClass("active"),n.removeClass("masonry--animate"),n.on("layoutComplete",function(){ 
 t(this).addClass("masonry--active"),"undefined"!=typeof mr_parallax&&setTimeout(function(){ 
 mr_parallax.profileParallaxElements()} 
 ,100)} 
 ),n.isotope({ 
 filter:a} 
 )} 
 )} 
 ,e.masonry.windowLoad=function(){ 
 t(".masonry").each(function(){ 
 var n,a=t(this).find(".masonry__container"),r=t(this),i="*",o={ 
 } 
 ; 
 n={ 
 itemSelector:".masonry__item",filter:"*",masonry:{ 
 columnWidth:".masonry__item"} 
 } 
 ,r.is("[data-default-filter]")&&(i=".filter-"+(i=r.attr("data-default-filter").toLowerCase()),r.find("li[data-masonry-filter]").removeClass("active"),r.find('li[data-masonry-filter="'+r.attr("data-default-filter").toLowerCase()+'"]').addClass("active")),o.filter="*"!==i?i:void 0,a.on("layoutComplete",function(){ 
 a.addClass("masonry--active"),"undefined"!=typeof mr_parallax&&setTimeout(function(){ 
 mr_parallax.profileParallaxElements()} 
 ,100)} 
 ),a.isotope(jQuery.extend({ 
 } 
 ,n,e.masonry.options,o))} 
 )} 
 ,e.masonry.updateFilters=function(n){ 
 t(n=void 0!==n?n:".masonry").each(function(){ 
 var n,a=t(this),r=a.find(".masonry__container"),i=a.find(".masonry__filters"),o=void 0!==i.attr("data-filter-all-text")?i.attr("data-filter-all-text"):"All"; 
 a.is(".masonry")&&r.find(".masonry__item[data-masonry-filter]").length&&((n=i.find("> ul")).length||(n=i.append("<ul></ul>").find("> ul")),r.find(".masonry__item[data-masonry-filter]").each(function(){ 
 var a=t(this),r=a.attr("data-masonry-filter"),i=[]; 
 void 0!==r&&""!==r&&(i=r.split(",")),t(i).each(function(t,r){ 
 var i=e.util.slugify(r); 
 a.addClass("filter-"+i),n.find('[data-masonry-filter="'+i+'"]').length||n.append('<li data-masonry-filter="'+i+'">'+r+"</li>")} 
 )} 
 ),n.find("[data-masonry-filter]").each(function(){ 
 var e=t(this),n=e.text(); 
 "*"!==t(this).attr("data-masonry-filter")&&(a.find('.masonry__item[data-masonry-filter*="'+n+'"]').length||e.remove())} 
 ),e.util.sortChildrenByText(t(this).find(".masonry__filters ul")),n.find('[data-masonry-filter="*"]').length||n.prepend('<li class="active" data-masonry-filter="*">'+o+"</li>"))} 
 )} 
 ,e.masonry.updateLayout=function(e){ 
 t(e=void 0!==e?e:".masonry").each(function(){ 
 var e=t(this),n=e.find(".masonry__item:not([style])"),a=e.find(".masonry__container"); 
 e.is(".masonry")&&(n.length&&a.isotope("appended",n).isotope("layout"),a.isotope("layout"))} 
 )} 
 ,e.components.documentReady.push(e.masonry.documentReady),e.components.windowLoad.push(e.masonry.windowLoad),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.modals=e.modals||{ 
 } 
 ,e.modals.documentReady=function(t){ 
 var r='<div class="all-page-modals"></div>',i=t("div.main-container"); 
 if(i.length?(jQuery(r).insertAfter(i),e.modals.allModalsContainer=t("div.all-page-modals")):(jQuery("body").append(r),e.modals.allModalsContainer=jQuery("body div.all-page-modals")),t(".modal-container").each(function(){ 
 var a=t(this),r=(t(n),a.find(".modal-content")); 
 if(a.find(".modal-close").length||a.find(".modal-content").append('<div class="modal-close modal-close-cross"></div>'),void 0!==r.attr("data-width")){ 
 var i=1*r.attr("data-width").substr(0,r.attr("data-width").indexOf("%")); 
 r.css("width",i+"%")} 
 if(void 0!==r.attr("data-height")){ 
 var o=1*r.attr("data-height").substr(0,r.attr("data-height").indexOf("%")); 
 r.css("height",o+"%")} 
 e.util.idleSrc(a,"iframe")} 
 ),t(".modal-instance").each(function(n){ 
 var a=t(this),r=a.find(".modal-container"),i=(a.find(".modal-content"),a.find(".modal-trigger")); 
 i.attr("data-modal-index",n),r.attr("data-modal-index",n),void 0!==r.attr("data-modal-id")&&i.attr("data-modal-id",r.attr("data-modal-id")),r=r.detach(),e.modals.allModalsContainer.append(r)} 
 ),t(".modal-trigger").on("click",function(){ 
 var n,a,r=t(this); 
 return void 0!==r.attr("data-modal-id")?(n=r.attr("data-modal-id"),a=e.modals.allModalsContainer.find('.modal-container[data-modal-id="'+n+'"]')):(n=t(this).attr("data-modal-index"),a=e.modals.allModalsContainer.find('.modal-container[data-modal-index="'+n+'"]')),e.util.activateIdleSrc(a,"iframe"),e.modals.autoplayVideo(a),e.modals.showModal(a),!1} 
 ),jQuery(a).on("click",".modal-close",e.modals.closeActiveModal),jQuery(a).keyup(function(t){ 
 27===t.keyCode&&e.modals.closeActiveModal()} 
 ),t(".modal-container:not(.modal--prevent-close)").on("click",function(t){ 
 t.target===this&&e.modals.closeActiveModal()} 
 ),t(".modal-container[data-autoshow]").each(function(){ 
 var n=t(this),a=1*n.attr("data-autoshow"); 
 e.util.activateIdleSrc(n),e.modals.autoplayVideo(n),void 0!==n.attr("data-cookie")?e.cookies.hasItem(n.attr("data-cookie"))||e.modals.showModal(n,a):e.modals.showModal(n,a)} 
 ),t(".modal-container[data-show-on-exit]").each(function(){ 
 var n=jQuery(this),r=n.attr("data-show-on-exit"),i=0; 
 n.attr("data-delay")&&(i=parseInt(n.attr("data-delay"),10)||0),t(r).length&&(n.prepend(t('<i class="ti-close close-modal">')),jQuery(a).on("mouseleave",r,function(){ 
 t(".modal-active").length||(void 0!==n.attr("data-cookie")?e.cookies.hasItem(n.attr("data-cookie"))||e.modals.showModal(n,i):e.modals.showModal(n,i))} 
 ))} 
 ),2===n.location.href.split("#").length){ 
 var o=n.location.href.split("#").pop(); 
 t('[data-modal-id="'+o+'"]').length&&(e.modals.closeActiveModal(),e.modals.showModal(t('[data-modal-id="'+o+'"]')))} 
 jQuery(a).on("click",'a[href^="#"]',function(){ 
 var n=t(this).attr("href").replace("#",""); 
 t('[data-modal-id="'+n+'"]').length&&(e.modals.closeActiveModal(),setTimeout(e.modals.showModal,500,'[data-modal-id="'+n+'"]',0))} 
 ),jQuery(a).on("wheel mousewheel scroll",".modal-content, .modal-content .scrollable",function(e){ 
 e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),this.scrollTop+=e.originalEvent.deltaY} 
 )} 
 ,e.modals.showModal=function(e,n){ 
 var r=void 0!==n?1*n:0; 
 t(e).length&&setTimeout(function(){ 
 var n=a.createEvent("Event"); 
 n.initEvent("modalOpened.modals.mr",!0,!0),t(e).addClass("modal-active").trigger("modalOpened.modals.mr").get(0).dispatchEvent(n)} 
 ,r)} 
 ,e.modals.closeActiveModal=function(){ 
 var t=jQuery("body div.modal-active"),r=a.createEvent("Event"); 
 e.util.idleSrc(t,"iframe"),e.util.pauseVideo(t),void 0!==t.attr("data-cookie")&&e.cookies.setItem(t.attr("data-cookie"),"true",1/0,"/"),t.length&&(t.is("[data-modal-id]")&&n.location.hash==="#"+t.attr("data-modal-id")&&e.util.removeHash(),r.initEvent("modalClosed.modals.mr",!0,!0),t.removeClass("modal-active").trigger("modalClosed.modals.mr").get(0).dispatchEvent(r))} 
 ,e.modals.autoplayVideo=function(e){ 
 e.find("video[autoplay]").length&&e.find("video").get(0).play()} 
 ,e.components.documentReady.push(e.modals.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.newsletters=e.newsletters||{ 
 } 
 ,e.newsletters.documentReady=function(t){ 
 var n,a,r,i,o,s; 
 t('form[action*="createsend.com"]').each(function(){ 
 (n=t(this)).attr("novalidate","novalidate"),n.is(".form--no-placeholders")?n.find("input[placeholder]").removeAttr("placeholder"):n.find("input:not([checkbox]):not([radio])").each(function(){ 
 var e=t(this); 
 void 0!==e.attr("placeholder")?""===e.attr("placeholder")&&e.siblings("label").length&&(e.attr("placeholder",e.siblings("label").first().text()),n.is(".form--no-labels")&&e.siblings("label").first().remove()):e.siblings("label").length&&(e.attr("placeholder",e.siblings("label").first().text()),n.is(".form--no-labels")&&e.siblings("label").first().remove()),e.parent().is("p")&&e.unwrap()} 
 ),n.find("select").wrap('<div class="input-select"></div>'),n.find('input[type="radio"]').wrap('<div class="input-radio"></div>'),n.find('input[type="checkbox"]').each(function(){ 
 a=t(this),i=a.attr("id"),(r=n.find("label[for="+i+"]")).length||(r=t('<label for="'+i+'"></label>')),a.before('<div class="input-checkbox" data-id="'+i+'"></div>'),t('.input-checkbox[data-id="'+i+'"]').prepend(a),t('.input-checkbox[data-id="'+i+'"]').prepend(r)} 
 ),n.find('button[type="submit"]').each(function(){ 
 var e=t(this); 
 e.addClass("btn"),e.parent().is("p")&&e.unwrap()} 
 ),n.find("[required]").attr("required","required").addClass("validate-required"),n.addClass("form--active"),e.newsletters.prepareAjaxAction(n)} 
 ),t('form[action*="list-manage.com"]').each(function(){ 
 (n=t(this)).attr("novalidate","novalidate"),n.is(".form--no-placeholders")?n.find("input[placeholder]").removeAttr("placeholder"):n.find("input:not([checkbox]):not([radio])").each(function(){ 
 var e=t(this); 
 void 0!==e.attr("placeholder")?""===e.attr("placeholder")&&e.siblings("label").length&&(e.attr("placeholder",e.siblings("label").first().text()),n.is(".form--no-labels")&&e.siblings("label").first().remove()):e.siblings("label").length&&(e.attr("placeholder",e.siblings("label").first().text()),n.is(".form--no-labels")&&e.siblings("label").first().remove())} 
 ),n.is(".form--no-labels")&&n.find("input:not([checkbox]):not([radio])").each(function(){ 
 var e=t(this); 
 e.siblings("label").length&&e.siblings("label").first().remove()} 
 ),n.find("select").wrap('<div class="input-select"></div>'),n.find('input[type="checkbox"]').each(function(){ 
 a=jQuery(this),o=a.parent(),(r=o.find("label")).length||(r=jQuery("<label>")),a.before('<div class="input-checkbox"></div>'),o.find(".input-checkbox").append(a),o.find(".input-checkbox").append(r)} 
 ),n.find('input[type="radio"]').each(function(){ 
 s=jQuery(this),o=s.closest("li"),(r=o.find("label")).length||(r=jQuery("<label>")),s.before('<div class="input-radio"></div>'),o.find(".input-radio").prepend(s),o.find(".input-radio").prepend(r)} 
 ),n.find('input[type="submit"]').each(function(){ 
 var e=t(this),n=jQuery("<button/>").attr("type","submit").attr("class",e.attr("class")).addClass("btn").text(e.attr("value")); 
 e.parent().is("div.clear")&&e.unwrap(),n.insertBefore(e),e.remove()} 
 ),n.find("input").each(function(){ 
 var e=t(this); 
 e.hasClass("required")&&e.removeClass("required").addClass("validate-required")} 
 ),n.find('input[type="email"]').removeClass("email").addClass("validate-email"),n.find("#mce-responses").remove(),n.find(".mc-field-group").each(function(){ 
 t(this).children().first().unwrap()} 
 ),n.find("[required]").attr("required","required").addClass("validate-required"),n.addClass("form--active"),e.newsletters.prepareAjaxAction(n)} 
 ),e.forms.documentReady(e.setContext("form.form--active"))} 
 ,e.newsletters.prepareAjaxAction=function(e){ 
 var n=t(e).attr("action"); 
 /list-manage\.com/.test(n)&&"//"===(n=n.replace("/post?","/post-json?")+"&c=?").substr(0,2)&&(n="http:"+n),/createsend\.com/.test(n)&&(n+="?callback=?"),t(e).attr("action",n)} 
 ,e.components.documentReady.push(e.newsletters.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.notifications=e.notifications||{ 
 } 
 ,e.notifications.documentReady=function(t){ 
 t(".notification").each(function(){ 
 var e=t(this); 
 e.find(".notification-close").length||e.append('<div class="notification-close-cross notification-close"></div>')} 
 ),t(".notification[data-autoshow]").each(function(){ 
 var n=t(this),a=parseInt(n.attr("data-autoshow"),10); 
 void 0!==n.attr("data-cookie")?e.cookies.hasItem(n.attr("data-cookie"))||e.notifications.showNotification(n,a):e.notifications.showNotification(n,a)} 
 ),t("[data-notification-link]:not(.notification)").on("click",function(){ 
 var n=jQuery(this).attr("data-notification-link"),a=t('.notification[data-notification-link="'+n+'"]'); 
 return jQuery(".notification--reveal").addClass("notification--dismissed"),a.removeClass("notification--dismissed"),e.notifications.showNotification(a,0),!1} 
 ),t(".notification-close").on("click",function(){ 
 var t=jQuery(this); 
 if(e.notifications.closeNotification(t),"#"===t.attr("href"))return!1} 
 ),t(".notification .inner-link").on("click",function(){ 
 var t=jQuery(this).closest(".notification").attr("data-notification-link"); 
 e.notifications.closeNotification(t)} 
 )} 
 ,e.notifications.showNotification=function(t,n){ 
 var r=jQuery(t),i=void 0!==n?1*n:0,o=a.createEvent("Event"); 
 if(setTimeout(function(){ 
 o.initEvent("notificationOpened.notifications.mr",!0,!0),r.addClass("notification--reveal").trigger("notificationOpened.notifications.mr").get(0).dispatchEvent(o),r.closest("nav").addClass("notification--reveal"),r.find("input").length&&r.find("input").first().focus()} 
 ,i),t.is("[data-autohide]")){ 
 var s=parseInt(t.attr("data-autohide"),10); 
 setTimeout(function(){ 
 e.notifications.closeNotification(t)} 
 ,s+i)} 
 } 
 ,e.notifications.closeNotification=function(n){ 
 var r=jQuery(n),i=a.createEvent("Event"); 
 n=r.is(".notification")?r:r.is(".notification-close")?r.closest(".notification"):t('.notification[data-notification-link="'+n+'"]'),i.initEvent("notificationClosed.notifications.mr",!0,!0),n.addClass("notification--dismissed").trigger("notificationClosed.notifications.mr").get(0).dispatchEvent(i),n.closest("nav").removeClass("notification--reveal"),void 0!==n.attr("data-cookie")&&e.cookies.setItem(n.attr("data-cookie"),"true",1/0,"/")} 
 ,e.components.documentReady.push(e.notifications.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.parallax=e.parallax||{ 
 } 
 ,e.parallax.documentReady=function(e){ 
 var t=e(n),a=t.width(),r=t.height(),i=e("nav").outerHeight(!0); 
 if(a>768){ 
 var o=e(".parallax:nth-of-type(1)"),s=e(".parallax:nth-of-type(1) .background-image-holder"); 
 s.css("top",-i),o.outerHeight(!0)===r&&s.css("height",r+i)} 
 } 
 ,e.parallax.update=function(){ 
 "undefined"!=typeof mr_parallax&&(mr_parallax.profileParallaxElements(),mr_parallax.mr_parallaxBackground())} 
 ,e.components.documentReady.push(e.parallax.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.progressHorizontal=e.progressHorizontal||{ 
 } 
 ,e.progressHorizontal.documentReady=function(e){ 
 var t=[]; 
 e(".progress-horizontal").each(function(){ 
 var e=jQuery(this).find(".progress-horizontal__bar"),n={ 
 } 
 ,a=jQuery('<div class="progress-horizontal__progress"></div>'); 
 e.prepend(a),n.element=e,n.progress=a,n.value=parseInt(e.attr("data-value"),10)+"%",n.offsetTop=e.offset().top,n.animate=!1,jQuery(this).hasClass("progress-horizontal--animate")?n.animate=!0:a.css("width",n.value),t.push(n)} 
 )} 
 ,e.components.documentReady.push(e.progressHorizontal.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.easypiecharts=e.easypiecharts||{ 
 } 
 ,e.easypiecharts.pies=[],e.easypiecharts.options=e.easypiecharts.options||{ 
 } 
 ,e.easypiecharts.documentReady=function(t){ 
 t(".radial").each(function(){ 
 var t,n=jQuery(this),a=110,r={ 
 } 
 ,i={ 
 } 
 ; 
 r={ 
 animate:{ 
 duration:2e3,enabled:!0} 
 ,barColor:"#000000",scaleColor:!1,size:a,lineWidth:3} 
 ,void 0!==e.easypiecharts.options.size&&(a=e.easypiecharts.options.size),void 0!==n.attr("data-timing")&&(i.animate={ 
 duration:parseInt(n.attr("data-timing"),10),enabled:!0} 
 ),void 0!==n.attr("data-color")&&(i.barColor=n.attr("data-color")),void 0!==n.attr("data-size")&&(a=i.size=parseInt(n.attr("data-size"),10)),void 0!==n.attr("data-bar-width")&&(i.lineWidth=parseInt(n.attr("data-bar-width"),10)),n.css("height",a).css("width",a),"object"==typeof e.easypiecharts.options&&(t=jQuery.extend({ 
 } 
 ,r,e.easypiecharts.options,i)),n.easyPieChart(t),n.data("easyPieChart").update(0)} 
 ),t(".radial").length&&(e.easypiecharts.init(),e.easypiecharts.activate(),e.scroll.listeners.push(e.easypiecharts.activate))} 
 ,e.easypiecharts.init=function(){ 
 e.easypiecharts.pies=[],t(".radial").each(function(){ 
 var t={ 
 } 
 ,n=jQuery(this); 
 t.element=n,t.value=parseInt(n.attr("data-value"),10),t.top=n.offset().top,t.height=n.height()/2,t.active=!1,e.easypiecharts.pies.push(t)} 
 )} 
 ,e.easypiecharts.activate=function(){ 
 e.easypiecharts.pies.forEach(function(t){ 
 Math.round(e.scroll.y+e.window.height)>=Math.round(t.top+t.height)&&!1===t.active&&(t.element.data("easyPieChart").enableAnimation(),t.element.data("easyPieChart").update(t.value),t.element.addClass("radial--active"),t.active=!0)} 
 )} 
 ,e.components.documentReadyDeferred.push(e.easypiecharts.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.sliders=e.sliders||{ 
 } 
 ,e.sliders.documentReady=function(t){ 
 t(".slider").each(function(n){ 
 var a=t(this),r=a.find("ul.slides"); 
 r.find(">li").addClass("slide"); 
 var i=r.find("li").length,o={ 
 cellSelector:".slide",cellAlign:"left",wrapAround:!0,pageDots:!1,prevNextButtons:!1,autoPlay:!0,draggable:!(i<2),imagesLoaded:!0,accessibility:!0,rightToLeft:!1,initialIndex:0,freeScroll:!1} 
 ,s={ 
 } 
 ; 
 s.pageDots="true"===a.attr("data-paging")&&r.find("li").length>1||void 0,s.prevNextButtons="true"===a.attr("data-arrows")||void 0,s.draggable="false"!==a.attr("data-draggable")&&void 0,s.autoPlay="false"!==a.attr("data-autoplay")&&(a.attr("data-timing")?parseInt(a.attr("data-timing"),10):void 0),s.accessibility="false"!==a.attr("data-accessibility")&&void 0,s.rightToLeft="true"===a.attr("data-rtl")||void 0,s.initialIndex=a.attr("data-initial")?parseInt(a.attr("data-initial"),10):void 0,s.freeScroll="true"===a.attr("data-freescroll")||void 0,a.attr("data-children",i),t(this).data("sliderOptions",jQuery.extend({ 
 } 
 ,o,e.sliders.options,s)),t(r).flickity(t(this).data("sliderOptions")),t(r).on("scroll.flickity",function(e,t){ 
 a.find(".is-selected").hasClass("controls--dark")?a.addClass("controls--dark"):a.removeClass("controls--dark")} 
 )} 
 ),e.parallax.update&&e.parallax.update()} 
 ,e.components.documentReadyDeferred.push(e.sliders.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.smoothscroll=e.smoothscroll||{ 
 } 
 ,e.smoothscroll.sections=[],e.smoothscroll.init=function(){ 
 e.smoothscroll.sections=[],t("a.inner-link").each(function(){ 
 var n={ 
 } 
 ,a=t(this),r=a.attr("href"); 
 new RegExp("^#[^\r\n\t\f\v#.]+$","gm").test(r)&&t("section"+r).length&&(n.id=r,n.top=Math.round(t(r).offset().top),n.height=Math.round(t(r).outerHeight()),n.link=a.get(0),n.active=!1,e.smoothscroll.sections.push(n))} 
 ),e.smoothscroll.highlight()} 
 ,e.smoothscroll.highlight=function(){ 
 e.smoothscroll.sections.forEach(function(t){ 
 e.scroll.y>=t.top&&e.scroll.y<t.top+t.height?!1===t.active&&(t.link.classList.add("inner-link--active"),t.active=!0):(t.link.classList.remove("inner-link--active"),t.active=!1)} 
 )} 
 ,e.scroll.listeners.push(e.smoothscroll.highlight),e.smoothscroll.documentReady=function(t){ 
 var a,r,i=t("a.inner-link"),o={ 
 } 
 ; 
 r={ 
 selector:".inner-link",selectorHeader:null,speed:750,easing:"easeInOutCubic",offset:0} 
 ,i.length&&(i.each(function(e){ 
 var n=t(this); 
 "#"!==n.attr("href").charAt(0)&&n.removeClass("inner-link")} 
 ),e.smoothscroll.init(),t(n).on("resize",e.smoothscroll.init),a=0,t("body[data-smooth-scroll-offset]").length&&(a=t("body").attr("data-smooth-scroll-offset"),a*=1),o.offset=0!==a?a:void 0,smoothScroll.init(jQuery.extend({ 
 } 
 ,r,e.smoothscroll.options,o)))} 
 ,e.components.documentReady.push(e.smoothscroll.documentReady),e.components.windowLoad.push(e.smoothscroll.init),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.tabs=e.tabs||{ 
 } 
 ,e.tabs.documentReady=function(t){ 
 t(".tabs").each(function(){ 
 var e=t(this); 
 e.after('<ul class="tabs-content">'),e.find("li").each(function(){ 
 var e=t(this),n=e.find(".tab__content").wrap("<li></li>").parent(),a=n.clone(!0,!0); 
 n.remove(),e.closest(".tabs-container").find(".tabs-content").append(a)} 
 )} 
 ),t(".tabs > li").on("click",function(){ 
 var n,a=t(this); 
 e.tabs.activateTab(a),a.is("[id]")&&(n="#"+a.attr("id"),history.pushState?history.pushState(null,null,n):location.hash=n)} 
 ),t(".tabs li.active").each(function(){ 
 e.tabs.activateTab(this)} 
 ),""!==n.location.hash&&e.tabs.activateTabById(n.location.hash),t('a[href^="#"]').on("click",function(){ 
 e.tabs.activateTabById(t(this).attr("href"))} 
 )} 
 ,e.tabs.activateTab=function(e){ 
 var n,r=t(e),i=r.closest(".tabs-container"),o=1*r.index()+1,s=i.find("> .tabs-content > li:nth-of-type("+o+")"),l=a.createEvent("Event"); 
 l.initEvent("tabOpened.tabs.mr",!0,!0),i.find("> .tabs > li").removeClass("active"),i.find("> .tabs-content > li").removeClass("active"),r.addClass("active").trigger("tabOpened.tabs.mr").get(0).dispatchEvent(l),s.addClass("active"),(n=s.find("iframe")).length&&n.attr("src",n.attr("src"))} 
 ,e.tabs.activateTabById=function(e){ 
 ""!==e&&"#"!==e&&t(".tabs > li#"+e.replace("#","")).length&&t(".tabs > li#"+e.replace("#","")).click()} 
 ,e.components.documentReady.push(e.tabs.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.toggleClass=e.toggleClass||{ 
 } 
 ,e.toggleClass.documentReady=function(e){ 
 e("[data-toggle-class]").each(function(){ 
 var t=e(this),n=t.attr("data-toggle-class").split("|"); 
 e(n).each(function(){ 
 var n=t,a=[],r="",i=""; 
 2===(a=this.split(";")).length&&(i=a[0],r=a[1],e(n).on("click",function(){
 return n.hasClass("toggled-class")?n.removeClass("toggled-class"):n.toggleClass("toggled-class"),e(i).toggleClass(r),!1} 
 ))} 
 )} 
 )} 
 ,e.components.documentReady.push(e.toggleClass.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.typed=e.typed||{ 
 } 
 ,e.typed.documentReady=function(t){ 
 t(".typed-text").each(function(){ 
 var n=t(this),a=(n.attr("data-typed-strings")&&n.attr("data-typed-strings").split(","),{ 
 } 
 ); 
 a.strings=n.attr("data-typed-strings")?n.attr("data-typed-strings").split(","):void 0,t(n).typed(jQuery.extend({ 
 } 
 ,{ 
 strings:[],typeSpeed:100,loop:!0,showCursor:!1} 
 ,e.typed.options,a))} 
 )} 
 ,e.components.documentReady.push(e.typed.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.twitter=e.twitter||{ 
 } 
 ,e.twitter.options=e.twitter.options||{ 
 } 
 ,e.twitter.documentReady=function(t){ 
 t(".tweets-feed").each(function(e){ 
 t(this).attr("id","tweets-"+e)} 
 ).each(function(n){ 
 var a=t("#tweets-"+n),r={ 
 domId:"",maxTweets:6,enableLinks:!0,showUser:!0,showTime:!0,dateFunction:"",showRetweet:!1,customCallback:function(t){ 
 for(var n=t.length,r=0,i='<ul class="slides">'; 
 r<n; 
 )i+="<li>"+t[r]+"</li>",r++; 
 if(i+="</ul>",a.html(i),a.closest(".slider").length)return e.sliders.documentReady(e.setContext()),i} 
 } 
 ; 
 r=jQuery.extend(r,e.twitter.options),void 0!==a.attr("data-widget-id")?r.id=a.attr("data-widget-id"):void 0!==a.attr("data-feed-name")&&""!==a.attr("data-feed-name")?r.profile={ 
 screenName:a.attr("data-feed-name").replace("@","")} 
 :void 0!==e.twitter.options.profile?r.profile={ 
 screenName:e.twitter.options.profile.replace("@","")} 
 :r.profile={ 
 screenName:"twitter"} 
 ,r.maxTweets=a.attr("data-amount")?a.attr("data-amount"):r.maxTweets,a.closest(".twitter-feed--slider").length&&a.addClass("slider"),twitterFetcher.fetch(r)} 
 )} 
 ,e.components.documentReady.push(e.twitter.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.video=e.video||{ 
 } 
 ,e.video.options=e.video.options||{ 
 } 
 ,e.video.options.ytplayer=e.video.options.ytplayer||{ 
 } 
 ,e.video.documentReady=function(t){ 
 t(".youtube-background").length&&t(".youtube-background").each(function(){ 
 var n=t(this),a={ 
 } 
 ; 
 a.videoURL=t(this).attr("data-video-url"),a.startAt=t(this).attr("data-start-at")?parseInt(t(this).attr("data-start-at"),10):void 0,n.closest(".videobg").append('<div class="loading-indicator"></div>'),n.YTPlayer(jQuery.extend({ 
 } 
 ,{ 
 containment:"self",autoPlay:!0,mute:!0,opacity:1} 
 ,e.video.options.ytplayer,a)),n.on("YTPStart",function(){ 
 n.closest(".videobg").addClass("video-active")} 
 )} 
 ),t(".videobg").find("video").length&&t(".videobg").find("video").closest(".videobg").addClass("video-active"),t(".video-cover").each(function(){ 
 var e=t(this); 
 e.find("iframe[src]").length&&(e.find("iframe").attr("data-src",e.find("iframe").attr("src")),e.find("iframe").attr("src",""))} 
 ),t(".video-cover .video-play-icon").on("click",function(){ 
 var e=t(this).closest(".video-cover"); 
 if(e.find("video").length){ 
 var n=e.find("video").get(0); 
 return e.addClass("reveal-video"),n.play(),!1} 
 if(e.find("iframe").length){ 
 var a=e.find("iframe"); 
 return a.attr("src",a.attr("data-src")),e.addClass("reveal-video"),!1} 
 } 
 )} 
 ,e.components.documentReady.push(e.video.documentReady),e} 
 (mr,jQuery,window,document),mr=function(e,t,n,a){ 
 "use strict"; 
 return e.wizard=e.wizard||{ 
 } 
 ,e.wizard.documentReady=function(t){ 
 t(".wizard").each(function(){ 
 var t=jQuery(this),n={ 
 } 
 ; 
 n={ 
 headerTag:"h5",bodyTag:"section",transitionEffect:"slideLeft",autoFocus:!0} 
 ,t.is('[role="application"][id^="steps-uid"]')||(t.steps(jQuery.extend({ 
 } 
 ,n,e.wizard.options)),t.addClass("active"))} 
 )} 
 ,e.components.documentReady.push(e.wizard.documentReady),e} 
 (mr,jQuery,window,document); 
 var f={ 
 smiley:{ 
 regexp:/^(wink|winky|smile|smiley|smiling|happy|very happy|frown|frowny|sad|angry|annoyed|straight|neutral|laughing)(?: faces?)?$/,callback:function(e){ 
 "wink"===(e=(e||"").toLowerCase())?j(" ;-) "):-1!==["smile","smiley","smiling","happy"].indexOf(e)?j("very happy"===e?" :-)) ":" :-) "):-1!==["frown","sad","angry"].indexOf(e)?j(" :-( "):-1!==["straight","neutral"].indexOf(e)?j(" :-| "):"annoyed"===e?j(" :-/ "):"laughing"===e&&j(" XD ")}
 } 
 ,quotes:{ 
 regexp:/^(open|close)\s+(single|double|angle)?\s*(bracket|parentheses|quote|brace)s?$/,callback:function(e,t,n){ 
 switch(e=(e||"").toLowerCase(),t=(t||"single").toLowerCase(),n=(n||"").toLowerCase()){ 
 case"brace":j("open"===e?" { ":" } ");
 break; 
 case"bracket":j("angle"===t?"open"===e?" &lt;":"&gt; ":"open"===e?" [":" ] ");break;
 case"parentheses":j("open"===e?" (":" ) "); 
 break; 
 case"quote":j(["open"===e?" &l":" &r","double"===t?"dquo;":"squo;"].join(""))}
 } 
 } 
 ,signs:{ 
 regexp:/^(?:add |insert )?(division|equal|greater than|less than|minus|multiplication|plus|percent|dollar|cent|pound|euro|yen|at|copyright) sign$/,callback:function(e){ 
 switch(e=(e||"").toLowerCase()){ 
 case"equal":j(" = "); 
 break; 
 case"greater than":j(" &gt; ");
 break; 
 case"less than":j(" &lt; ");
 break; 
 case"minus":j("-"); 
 break; 
 case"plus":j("+"); 
 break; 
 case"division":j("÷"); 
 break; 
 case"multiplication":j("x"); 
 break; 
 case"dollar":j(" $"); 
 break; 
 case"cent":j(" &cent;");
 break; 
 case"pound":j(" &pound;");
 break; 
 case"euro":j(" &euro;");
 break; 
 case"yen":j(" &yen;");
 break; 
 case"at":j("@"); 
 break; 
 case"percent":j("%"); 
 break; 
 case"copyright":j(" &copy;")}
 } 
 } 
 ,dictation:{ 
 regexp:/^(go to sleep|wake up|start|stop|begin|end|microphone on|microphone off)\s?(dictation|listening)?$/,callback:function(e){ 
 "go to sleep"===(e=(e||"").toLowerCase().trim())?U.pause():-1!==[
     "wake up","start","begin","microphone on"].indexOf(e)?U.resume():U.abort()}
 } 
 ,punctuation:{ 
 regexp:/^(?:add |insert )?(ampersand|apostrophe|asterisk|ellipsis|degree|center dot|hashtag|vertical bar|space|period|dot|point|full stop|comma|dash|hyphen|underscore|backslash|forward slash|question mark|colon|semicolon|exclamation(?: mark| point)?)s?$/,callback:function(e){ 
 switch(e=(e||"").toLowerCase()){ 
 case"ampersand":j("&amp;");
 break; 
 case"apostrophe":j("&apos;");
 break; 
 case"asterisk":j("*"); 
 break; 
 case"center dot":addText(" &middot;");
 break; 
 case"degree":j("&deg;");
 break; 
 case"hashtag":j(" #"); 
 break; 
 case"vertical bar":j("|"); 
 break; 
 case"ellipsis":j("&hellip;");
 break; 
 case"space":j("&nbsp;");
 break; 
 case"full stop":case"dot":case"point":case"period":j(". ",!0); 
 break; 
 case"comma":j(", "); 
 break; 
 case"dash":j("&mdash;");
 break; 
 case"hyphen":j("&ndash;");
 break; 
 case"underscore":j("_"); 
 break; 
 case"backslash":j("\\"); 
 break; 
 case"forward slash":j("/"); 
 break; 
 case"question mark":j("? ",!0); 
 break; 
 case"colon":j(": "); 
 break; 
 case"semicolon":j("; ");
 break; 
 case"exclamation":case"exclamation mark":case"exclamation point":j("! ",!0)} 
 } 
 } 
 ,clipboard:{ 
 regexp:/^copy to clipboard$/,callback:function(){ 
 $(".btn-clipboard").click()} 
 } 
 ,clear:{ 
 regexp:/^(clear|delete|remove) (everything|all text)$/,callback:function(){ 
 dictation("clear")} 
 } 
 } 
 ,h={ 
 en_newline:{ 
 regexp:/^(new line|new sentence|nuova riga|neue zeile|nouvelle ligne|nieuwe regel|nova linha|ny linje|uusi rivi|ny linje|ny rad|nueva línea|سطر جديد|új sor|nový řádek|新しい行|บรรทัดใหม่|nova linha|baris baru|yeni satır|nowy wiersz|новая строка|नई पंक्ति)$/i,callback:function(){ 
 j("\n",!0)} 
 } 
 ,en_newparagraph:{ 
 regexp:/^(new para|new paragraph|nuovo paragrafo|neuer absatz|nouveau paragraphe|nieuwe alinea|novo parágrafo|nytt avsnitt|uusi kappale|nyt afsnit|nytt stycke|nuevo párrafo|فقرة جديدة|új bekezdés|nový odstavec|次の段落|ย่อหน้าใหม่|novo parágrafo|paragraf baru|yeni paragraf|nowy akapit|новый абзац|नया अनुच्छेद)$/i,callback:function(){ 
 j("\n\n",!0)} 
 } 
 ,en_apostrophe:{ 
 regexp:/^(apostrofo|apostroph|apostrophe|apostrof|apóstrofo|apostrof|heittomerkki|apostrof|apostrof|apóstrofo|فاصلة عليا|aposztróf|apostrof|アポストロフィー|อัญประกาศเดี่ยว|apóstrofo|apostrof|kesme işareti|apostrof|апостроф)$/i,callback:function(){ 
 j("&apos;")}
 } 
 ,en_colon:{ 
 regexp:/^(due punti|doppelpunkt|deux-points|dubbelepunt|dois pontos|kolon|kaksoispiste|kolon|kolon|dos puntos|نقطتان|kettőspont|dvojtečka|コロン|ทวิภาค|dois pontos|titik dua|iki nokta üst üste|dwukropek|двоеточие|उपविराम)$/i,callback:function(){ 
 j(": ")} 
 } 
 ,en_comma:{ 
 regexp:/^(virgola|komma|virgule|komma|vírgula|komma|pilkku|komma|komma|coma|فاصلة|vessző|čárka|コンマ|จุลภาค|vírgula|koma|virgül|przecinek|запятая|अल्पविराम)$/i,callback:function(){ 
 j(", ")} 
 } 
 ,en_dash:{ 
 regexp:/^(trattino piccolo|gedankenstrich|tiret|streepje|traço|tankestrek|viiva|tankestreg|talstreck|guion|شرطة|kötőjel|spojovník|ダッシュ|ขีดกลาง|traço|tanda pisah|tire|myślnik|тире|निर्देशक चिन्ह)$/i,callback:function(){ 
 j("&mdash;")}
 } 
 ,en_ellipsis:{ 
 regexp:/^(puntini sospensivi|ellipse|auslassungszeichen|points de suspension|drie puntjes|reticências|ellipse|kolme pistettä|ellipse|ellips|puntos suspensivos|حذف|három pont|trojtečka|てんてんてん|จุดไข่ปลา|reticências|elipsis|üç nokta|wielokropek|многоточие)$/i,callback:function(){ 
 j("&hellip;")}
 } 
 ,en_exclamationmark:{ 
 regexp:/^(punto esclamativo|ausrufezeichen|point d’exclamation|uitroepteken|ponto de exclamação|utropstegn|huutomerkki|udråbstegn|utropstecken|signo de exclamación|علامة تعجّب|felkiáltójel|vykřičník|感嘆符|อัศเจรีย์|ponto de exclamação|tanda seru|ünlem işareti|wykrzyknik|восклицательный знак|आश्चर्य सूचक चिन्ह|संबोधन वाचक)$/i,callback:function(){ 
 j("! ",!0)} 
 } 
 ,en_hyphen:{ 
 regexp:/^(trattino|bindestrich|trait d’union|koppelteken|hífen|bindestrek|tavuviiva|bindestreg|bindestreck|raya|واصلة|gondolatjel|pomlčka|ハイフン|ยัติภังค์|hífen|tanda hubung|kısa çizgi|kreska|дефис|योजक चिन्ह)$/i,callback:function(){ 
 j("&ndash;")}
 } 
 ,en_periodpointdotemoremfullstop:{ 
 regexp:/^(punto|punkt|point|punt|dot|ponto|ponto final|punktum|piste|punktum|punkt|slutpunkt|punto|نهاية أو نقطة أو جملة تامّة|علامة وقف|pont|tečka|ピリオド／ドット|มหัพภาพ จุด จุดทศนิยม|จุดฟุลสต๊อป|ponto|ponto final|dot|titik|nokta|kropka|точка|конец предложения)$/i,callback:function(){ 
 j(". ",!0)} 
 } 
 ,en_questionmark:{ 
 regexp:/^(punto di domanda|fragezeichen|point d’interrogation|vraagteken|ponto de interrogação|spørsmålstegn|kysymysmerkki|spørgsmålstegn|frågetecken|signo de interrogación|علامة استفهام|kérdőjel|otazník|疑問符|เครื่องหมายคำถาม|ponto de interrogação|tanda tanya|soru işareti|znak zapytania|вопросительный знак|प्रश्नवाचक चिन्ह|प्रश्न चिन्ह)$/i,callback:function(){ 
 j("? ",!0)} 
 } 
 ,en_quote:{ 
 regexp:/^(virgolette di apertura|anführungszeichen unten|guillemets ouverts|open dubbel aanhalingsteken|aspas iniciais|venstre anførselstegn|vasen lainausmerkki|anførselstegn start|citationstecken|abrir comillas|اقتباس|idézőjel|začátek uvozovek|ダブルクオーテーション|อัญประกาศ|abrir aspas|tanda kutip awal|tırnak aç|cudzysłów|открывающие кавычки)$/i,callback:function(){ 
 j(" &ldquo;")}
 } 
 ,en_endquote:{ 
 regexp:/^(virgolette di chiusura|anführungszeichen oben|guillemets fermés|sluit dubbel aanhalingsteken|aspas finais|høyre anførselstegn|oikea lainausmerkki|anførselstegn slut|sluta citationstecken|cerrar comillas|نهاية الاقتباس|idézőjel bezár|konec uvozovek|ダブルクオーテーション閉じる|อัญประกาศปิด|fechar aspas|tanda kutip akhir|tırnak kapat|zamknij cudzysłów|закрывающие кавычки)$/i,callback:function(){ 
 j("&rdquo;")}
 } 
 ,en_beginsinglequote:{ 
 regexp:/^(virgoletta singola di apertura|einfaches anführungszeichen unten|guillemet simple ouvrant|open enkel aanhalingsteken|plica inicial|venstre enkelt anførselstegn|vasen yksinkertainen lainausmerkki|enkelt anførselstegn start|börja enkla citationstecken|abrir comillas simples|بداية تنصيص مفرد|egyszeres idézőjel|začátek jednoduchých uvozovek|クオーテーション|อัญประกาศเดี่ยวเปิด|abrir aspas simples|tanda kutip tunggal awal|tek tırnak aç|otwórz cudzysłów pojedynczy|открывающие одиночные кавычки)$/i,callback:function(){ 
 j(" &lsquo;")}
 } 
 ,en_endsinglequote:{ 
 regexp:/^(virgoletta singola di chiusura|einfaches anführungszeichen oben|guillemet simple fermant|sluit enkel aanhalingsteken|plica final|høyre enkelt anførselstegn|oikea yksinkertainen lainausmerkki|enkelt anførselstegn slut|sluta enkla citationstecken|cerrar comillas simples|نهاية تنصيص مفرد|egyszeres idézőjel bezár|konec jednoduchých uvozovek|クオーテーション閉じる|อัญประกาศเดี่ยวปิด|fechar aspas simples|tanda kutip tunggal akhir|tek tırnak kapat|zamknij cudzysłów pojedynczy|закрывающие одиночные кавычки)$/i,callback:function(){ 
 j("&rsquo;")}
 } 
 ,en_semicolon:{ 
 regexp:/^(punto e virgola|semikolon|point-virgule|puntkomma|ponto e vírgula|semikolon|puolipiste|semikolon|semikolon|punto y coma|فاصلة منقوطة|pontosvessző|středník|セミコロン|อัฒภาค|ponto e vírgula|titik koma|noktalı virgül|średnik|точка с запятой|अर्धविराम)$/i,callback:function(){ 
 j("; ")}
 } 
 ,en_ampersandamp:{ 
 regexp:/^(e commerciale|und-zeichen|esperluette|ampersand|e comercial|et-tegn|et-merkki|og-tegn|et-tecken|et|علامة العطف|„és” jel|ampersand|アンパサンド|เครื่องหมายและ|e comercial|simbol dan|ve işareti|ampersand|амперсанд)$/i,callback:function(){ 
 j("&amp;")}
 } 
 ,en_asterisk:{ 
 regexp:/^(asterisco|sternchen|astérisque|asterisk|asterisco|asterisk eller stjerne|asteriski|asterisk|asterisk|asterisco|نجمة|csillag|hvězdička|アステリスク|ดอกจัน|asterisco|bintang|yıldız işareti|gwiazdka|звездочка|संकेत चिन्ह)$/i,callback:function(){ 
 j("*")} 
 } 
 ,en_atsign:{ 
 regexp:/^(chiocciola|at-zeichen|arobase|apenstaart|arroba|krøllalfa|ät-merkki|snabel-a|at-tecken|arroba|علامة|kukac|zavináč|アットマーク|เครื่องหมายแอท|símbolo da arroba|tanda at|at işareti|małpa|знак коммерческого at)$/i,callback:function(){ 
 j("@")} 
 } 
 ,en_backslash:{ 
 regexp:/^(barra rovesciata|backslash|barre oblique inversée|schuine streep naar links|barra invertida|omvendt skråstrek|kenoviiva|omvendt skråstreg|bakåtlutande snedstreck|barra invertida|خط مائل للخلف|fordított perjel|zpětné lomítko|バックスラッシュ|เครื่องหมายทับหลัง|barra invertida|garis miring terbalik|ters eğik çizgi|ukośnik wsteczny|обратная косая черта)$/i,callback:function(){ 
 j("\\")} 
 } 
 ,en_forwardslash:{ 
 regexp:/^(barra|schrägstrich|barre oblique|schuine streep|barra|skråstrek|kauttaviiva|skråstreg|snedstreck|barra diagonal|خط مائل للأمام|perjel|lomítko|スラッシュ|เครื่องหมายทับ|barra|garis miring|öne eğik çizgi|ukośnik|косая черта)$/i,callback:function(){ 
 j("/")} 
 } 
 ,en_caret:{ 
 regexp:/^(accento circonflesso|caret-zeichen|accent circonflexe|caret|acento circunflexo|cirkumfleks|poisjääntimerkki|cirkumfleks|inskjutningstecken|acento circunflejo|علامة إقحام|kalapjel|vsuvka|キャレット|เครื่องหมายตก|acento circunflexo|tanda sisip|inceltme işareti|grot|знак вставки|विस्मरण चिन्ह)$/i,callback:function(){ 
 j("^")} 
 } 
 ,en_centerdot:{ 
 regexp:/^(punto centrale|mittelpunkt|point médian|middenpunt|ponto central|midtpunkt|keskellä oleva piste|punkttegn|mittpunkt|punto central|نقطة وسطى|középső pont|puntík|中黒 ・|เครื่องหมายจุดกลาง|ponto central|dot tengah|orta nokta|kropka środkowa|центрированная точка)$/i,callback:function(){ 
 j(" &middot;")}
 } 
 ,en_largecenterdot:{ 
 regexp:/^(punto centrale grande|großer mittelpunkt|gros point médian|groot middenpunt|ponto central grande|stort midtpunkt|suuri keskellä oleva piste|stort punkttegn|stor mittpunkt|punto central grande|نقطة وسطى كبيرة|nagy középső pont|velký puntík|中黒全角|เครื่องหมายจุดกลางใหญ่|grande ponto central|dot tengah besar|büyük orta nokta|duża kropka środkowa|большая центрированная точка)$/i,callback:function(){ 
 j(" &bull;")}
 } 
 ,en_degreesign:{ 
 regexp:/^(simbolo dei gradi|gradzeichen|symbole des degrés|gradenteken|símbolo de grau|gradesymbol|astemerkki|gradtegn|gradtecken|signo de grado|علامة الدرجة|fokjel|znak stupně|度記号|เครื่องหมายองศา|símbolo de grau|simbol derajat|derece işareti|znak stopni|знак градуса)$/i,callback:function(){ 
 j("&deg;")}
 } 
 ,en_hashtag:{ 
 regexp:/^(cancelletto|hashtag|rautezeichen|hashtag|dièse|hashtag|pondteken|cardinal|nummertegn|pundtegn|hash-tunniste|punnan merkki|hashtag|hashtagg|pundtecken|almohadilla|علامة التجزئة|علامة الرطل|kettőskereszt jel|křížek|シャープ|เครื่องหมายแฮชแท็ก|เครื่องหมายปอนด์|hashtag|símbolo da libra|hashtag|tanda pagar|hashtag|diyez işareti|krzyżyk|«решетка»|знак фунта)$/i,callback:function(){ 
 j(" #")} 
 } 
 ,en_percentsign:{ 
 regexp:/^(segno di percentuale|prozentzeichen|symbole de pourcentage|procentteken|símbolo de percentagem|prosenttegn|prosenttimerkki|procenttegn|procenttecken|signo de porcentaje|علامة النسبة المئوية|százalékjel|znak procent|パーセント記号|เครื่องหมายเปอร์เซ็นต์|símbolo de porcentagem|tanda persen|yüzde işareti|procent|знак процента)$/i,callback:function(){ 
 j("%")} 
 } 
 ,en_underscore_:{ 
 regexp:/^(trattino basso|unterstrich|tiret bas|onderstrepingsteken|carácter de sublinhado|understrek|alaviiva|understreg|understreck|guion bajo|شرطة سفلية|aláhúzásjel|podtržítko|アンダースコア|ขีดล่าง|sublinhado|garis bawah|altçizgi|podkreślenie|нижнее подчеркивание)$/i,callback:function(){ 
 j("_")} 
 } 
 ,en_verticalbar:{ 
 regexp:/^(barra verticale|senkrechtstrich|barre verticale|verticale balk|barra vertical|stolpe|pystyviiva|lodret streg|lodstreck|barra vertical|شريط عمودي|függőleges vonal|svislá čára|パイプ|ขีดตั้ง|barra vertical|bar vertikal|düşey çubuk|kreska pionowa|вертикальная черта)$/i,callback:function(){ 
 j("|")} 
 } 
 ,en_laughingface:{ 
 regexp:/^(risata|lachender smiley mit zugekniffenen augen|visage hilare|lachend gezicht met gekruiste ogen|risonho com x|latterfjes|silmät ristissä naurava naama|skeløjet, grinende ansigt|skrattande smiley|cara sonriente con ojos cruzados|وجه ضاحك أحول العينين|nevető arc xd|šilhavý smajlík|爆笑|ใบหน้าหัวเราะตาเหล่|risada com olhos fechados|wajah tertawa|şaşı gözlü gülen yüz|śmiejąca się buźka|косоглазый смайлик)$/i,callback:function(){ 
 j(" XD ")} 
 } 
 ,en_frownyface:{ 
 regexp:/^(triste|trauriger smiley|visage triste|frons gezicht|careta|bistert fjes|surullinen ilme|sur smiley|ledsen smiley|cara triste|وجه مكشّر|szomorú arc|zamračený smajlík|しかめっ面|ใบหน้าเศร้า|rosto triste|wajah sedih|üzgün yüz|smutna buźka|хмурый смайлик)$/i,callback:function(){ 
 j(" :-( ")} 
 } 
 ,en_smileyface:{ 
 regexp:/^(sorriso|smiley|sourire|lachend gezicht|sorriso|smilefjes|hymiö|smiley|glad smiley|cara sonriente|وجه مبتسم|mosolygó arc|usměvavý smajlík|スマイリー|ใบหน้ายิ้ม|rosto sorridente|wajah tersenyum|gülen yüz|uśmiechnięta buźka|улыбающийся смайлик)$/i,callback:function(){ 
 j(" :-) ")} 
 } 
 ,en_winkyface:{ 
 regexp:/^(occhiolino|zwinkernder smiley|clin d’œil|knipoog|piscar o olho|blunkefjes|silmänisku|blinkesmiley|blinkande smiley|guiño|وجه يغمز|kacsintó arc|mrkající smajlík|ウインク|ใบหน้าขยิบตา|piscada|wajah berkedip sebelah mata|göz kırpan yüz|mrugająca buźka|подмигивающий смайлик)$/i,callback:function(){ 
 j(" ;-) ")}
 } 
 ,en_copyrightsign:{ 
 regexp:/^(simbolo di copyright|copyright-zeichen|symbole du copyright|copyrightteken|símbolo de copyright|opphavsrettsymbol|tekijänoikeusmerkki|ophavsretstegn|copyrighttecken|signo de copyright|علامة حقوق النشر|copyright jel|znak copyrightu|著作権記号|เครื่องหมายลิขสิทธิ์|símbolo de copyright|lambang hak cipta|copyright işareti|znak praw autorskich|знак авторского права)$/i,callback:function(){ 
 j(" &copy")} 
 } 
 ,en_registeredsign:{ 
 regexp:/^(simbolo di marchio registrato|registered-zeichen|symbole de la marque déposée|gedeponeerd|marca registada|registrert varemerke-symbol|rekisteröity-merkki|tegn for registreret varemærke|registrerat varumärkestecken|signo de registrado|علامة مسجّلة|„regisztrálva” jel|znak registrované známky|登録商標|เครื่องหมายลงทะเบียน|símbolo de marca registrada|lambang terdaftar|kayıtlı işareti|znak zarejestrowany|зарегистрированная товарная марка)$/i,callback:function(){ 
 j(" &reg;")}
 } 
 ,en_trademarksign:{ 
 regexp:/^(marchio|markensymbol|symbole de la marque commerciale|handelsmerk|símbolo de marca comercial|varemerkesymbol|tavaramerkki|varemærketegn|varumärkestecken|signo de marca comercial|العلامة التجارية|védjegyjel|znak ochranné známky|商標|เครื่องหมายการค้า|símbolo de marca comercial|lambang merek dagang|ticari marka işareti|znak towarowy|товарный знак)$/i,callback:function(){ 
 j(" &trade;")}
 } 
 ,en_equalssign:{ 
 regexp:/^(uguale|gleichheitszeichen|signe égal|gelijkteken|sinal de igual|likhetstegn|yhtä suuri kuin -merkki|lighedstegn|lika med-tecken|signo igual|علامة يساوي|egyenlőségjel|znak rovná se|イコール|เครื่องหมายเท่ากับ|sinal de igual|tanda sama dengan|eşittir işareti|znak równości|знак «равно»|तुल्यता सूचक चिन्ह)$/i,callback:function(){ 
 j("=")} 
 } 
 ,en_greaterthansigngt:{ 
 regexp:/^(maggiore|größer-als-zeichen|signe «|groterdanteken|sinal de maior|større enn-tegn|suurempi kuin -merkki|større end|större än-tecken|signo mayor que|علامة أكبر من|„nagyobb mint” jel|znak více než|大なり|เครื่องหมายมากกว่า|sinal maior que|tanda lebih dari|büyüktür işareti|znak większe niż|знак «больше»)$/i,callback:function(){ 
 j(" &gt; ")}
 } 
 ,en_lessthansignlt:{ 
 regexp:/^(minore|kleiner-als-zeichen|signe «|kleinerdanteken|sinal de menor|mindre enn-tegn|pienempi kuin -merkki|mindre end|mindre än-tecken|signo menor que|علامة أصغر من|„kisebb mint” jel|znak méně než|小なり|เครื่องหมายน้อยกว่า|sinal menor que|tanda kurang dari|küçüktür işareti|znak mniejsze niż|знак «меньше»)$/i,callback:function(){ 
 j(" &lt; ")}
 } 
 ,en_minussign:{ 
 regexp:/^(meno|minus-zeichen|signe moins|minteken|sinal de menos|minustegn|miinusmerkki|minus|minustecken|signo menos|علامة الطرح|mínuszjel|znak mínus|引く|เครื่องหมายลบ|sinal de menos|tanda minus|eksi işareti|znak minus|знак «минус»)$/i,callback:function(){ 
 j("-")} 
 } 
 ,en_multiplicationsignx:{ 
 regexp:/^(per|multiplikationszeichen|signe de multiplication|vermenigvuldigingsteken|sinal de multiplicação|multipliseringstegn|kertomerkki|multiplikationstegn|multiplikationstecken|signo de multiplicar|علامة الضرب|szorzásjel|znak krát|かける|เครื่องหมายคูณ|sinal de multiplicação|tanda kali|çarpma işareti|znak mnożenia|знак умножения)$/i,callback:function(){ 
 j("x")} 
 } 
 ,en_plussign:{ 
 regexp:/^(più|plus-zeichen|signe plus|plusteken|sinal de mais|plusstegn|plusmerkki|plus|plustecken|signo más|علامة الجمع|pluszjel|znak plus|たす|เครื่องหมายบวก|sinal de mais|tanda plus|artı işareti|znak plus|знак «плюс»)$/i,callback:function(){ 
 j("+")} 
 } 
 ,en_openbracket:{ 
 regexp:/^(parentesi quadra aperta|eckige klammer auf|crochet ouvert|open vierkant haakje|parêntesis inicial reto|venstre hakeparentes|vasen kaarisulje|kanteparentes start|vänster hakparentes|corchete de apertura|فتح قوس معقوف|szögletes zárójel|začátek hranaté závorky|大かっこ開く|วงเล็บใหญ่เปิด|abrir colchete|kurung siku buka|köşeli ayraç aç|otwórz nawias kwadratowy|открывающая скобка)$/i,callback:function(){ 
 j(" [")} 
 } 
 ,en_closebracket:{ 
 regexp:/^(parentesi quadra chiusa|eckige klammer zu|crochet fermé|sluit vierkant haakje|parêntesis final reto|høyre hakeparentes|oikea kaarisulje|kanteparentes slut|höger hakparentes|corchete de cierre|غلق قوس معقوف|szögletes zárójel bezár|konec hranaté závorky|大かっこ閉じる|วงเล็บใหญ่ปิด|fechar colchete|kurung siku tutup|köşeli ayraç kapat|zamknij nawias kwadratowy|закрывающая скобка)$/i,callback:function(){ 
 j(" ] ")} 
 } 
 ,en_openparenthesis:{ 
 regexp:/^(parentesi aperta|klammer auf|parenthèse ouverte|open rond haakje|parêntesis inicial curvo|venstreparentes|vasen sulje|parentes start|vänsterparentes|paréntesis de apertura|فتح قوس هلالي|zárójel|začátek závorky|かっこ開く|วงเล็บเปิด|abrir parênteses|kurung buka|parantez aç|otwórz nawias|открывающая круглая скобка)$/i,callback:function(){ 
 j(" (")} 
 } 
 ,en_closeparenthesis:{ 
 regexp:/^(parentesi chiusa|klammer zu|parenthèse fermée|sluit rond haakje|parêntesis final curvo|høyreparentes|oikea sulje|parentes slut|högerparentes|paréntesis de cierre|غلق قوس هلالي|zárójel bezár|konec závorky|かっこ閉じる|วงเล็บปิด|fechar parênteses|kurung tutup|parantez kapat|zamknij nawias|закрывающая круглая скобка)$/i,callback:function(){ 
 j(" ) ")} 
 } 
 ,en_openbrace:{ 
 regexp:/^(parentesi graffa aperta|geschweifte klammer auf|accolade ouverte|open accolade|chaveta inicial|venstre klamme|vasen aaltosulje|tuborgklamme start|högerklammer|llave de apertura|فتح علامة حصر|kapcsos zárójel|začátek složené závorky|中かっこ開く|วงเล็บปีกกาเปิด|abrir chave|kurung kurawal buka|kaşlı ayraç aç|otwórz klamrę|открывающая фигурная скобка)$/i,callback:function(){ 
 j(" {")}
 } 
 ,en_closebrace:{ 
 regexp:/^(parentesi graffa chiusa|geschweifte klammer zu|accolade fermée|sluit accolade|chaveta final|høyre klamme|oikea aaltosulje|tuborgklamme slut|vänsterklammer|llave de cierre|غلق علامة حصر|kapcsos zárójel bezár|konec složené závorky|中かっこ閉じる|วงเล็บปีกกาปิด|fechar chave|kurung kurawal tutup|kaşlı ayraç kapat|zamknij klamrę|закрывающая фигурная скобка)$/i,callback:function(){ 
 j(" } ")}
 } 
 ,en_openanglebracketlt:{ 
 regexp:/^(parentesi angolare aperta|spitze klammer auf|crochet oblique ouvert|open punthaakje|parêntesis inicial angular|venstre vinkelparentes|vasen hakasulje|vinkelparentes start|vänster vinkelparentes|comilla angular de apertura|فتح قوس مثلث|csúcsos zárójel|začátek špičaté závorky|山かっこ開く|วงเล็บมุมเปิด|abrir colchete angular|kurung sudut buka|açılı ayraç aç|otwórz nawias trójkątny|открывающая угловая скобка)$/i,callback:function(){ 
 j(" &lt;")}
 } 
 ,en_closeanglebracketgt:{ 
 regexp:/^(parentesi angolare chiusa|spitze klammer zu|crochet oblique fermé|sluit punthaakje|parêntesis final angular|høyre vinkelparentes|oikea hakasulje|vinkelparentes slut|höger vinkelparentes|comilla angular de cierre|غلق قوس مثلث|csúcsos zárójel bezár|konec špičaté závorky|山かっこ閉じる|วงเล็บมุมปิด|fechar colchete angular|kurung sudut tutup|açılı ayraç kapat|zamknij nawias trójkątny|закрывающая угловая скобка)$/i,callback:function(){ 
 j("&gt; ")}
 } 
 ,en_dollarsign:{ 
 regexp:/^(simbolo del dollaro|dollarzeichen|symbole du dollar|dollarteken|sinal do dólar|dollartegn|dollarimerkki|dollartegn|dollartecken|signo del dólar|علامة الدولار|dollárjel|znak dolaru|ドル記号|เครื่องหมายเงินดอลลาร์|símbolo de cifrão|lambang dolar|dolar işareti|znak dolara|знак доллара)$/i,callback:function(){ 
 j(" $")} 
 } 
 ,en_centsign:{ 
 regexp:/^(simbolo di centesimo|cent-zeichen|symbole des cents|centteken|símbolo de centavo|cent-symbol|sentin merkki|centtegn|centtecken|signo de centavo|علامة السنت|centjel|znak centu|セント記号|เครื่องหมายเงินเซนต์|símbolo de centavo|lambang sen|sent işareti|znak centa|знак цента)$/i,callback:function(){ 
 j(" &cent;")}
 } 
 ,en_poundsterlingsign:{ 
 regexp:/^(simbolo della sterlina|pfundsymbol|symbole de la livre sterling|pondteken|símbolo da libra esterlina|engelsk pund-symbol|punnan merkki|pundtegn|tecken för pund sterling|signo de la libra esterlina|علامة الجنيه الإسترليني|fontjel|znak libry|ポンド記号|เครื่องหมายเงินปอนด์|símbolo de libra esterlina|lambang poundsterling|sterlin işareti|znak funta szterlinga|знак фунта стерлинга)$/i,callback:function(){ 
 j(" &pound;")}
 } 
 ,en_eurosign:{ 
 regexp:/^(simbolo dell'euro|eurosymbol|symbole de l’euro|euroteken|símbolo do euro|euro-symbol|euron merkki|eurotegn|eurotecken|signo del euro|علامة اليورو|eurójel|znak eura|ユーロサイン|เครื่องหมายเงินยูโร|símbolo de euro|lambang euro|euro işareti|znak euro|знак евро)$/i,callback:function(){ 
 j(" &euro;")}
 } 
 ,en_yensign:{ 
 regexp:/^(simbolo dello yen|yensymbol|symbole du yen|yenteken|símbolo do yen|yen-symbol|jenin merkki|yentegn|yentecken|signo del yen|علامة الين|yenjel|znak jenu|円記号|เครื่องหมายเงินเยน|símbolo de iene|lambang yen|yen işareti|znak jena|знак йены)$/i,callback:function(){ 
 j(" &yen;")}
 } 
 ,hi_purnviram:{ 
 regexp:/^(पूर्ण विराम)$/i,callback:function(){ 
 j("। ")} 
 } 
 ,hi_vivran:{ 
 regexp:/^(विवरण चिन्ह)$/i,callback:function(){ 
 j(":- ")} 
 } 
 } 
 ,saveAs=saveAs||function(e){ 
 "use strict"; 
 if(!(void 0===e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){ 
 var t=function(){ 
 return e.URL||e.webkitURL||e} 
 ,n=e.document.createElementNS("http://www.w3.org/1999/xhtml","a"),a="download"in n,r=/constructor/i.test(e.HTMLElement)||e.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent),o=function(t){ 
 (e.setImmediate||e.setTimeout)(function(){ 
 throw t} 
 ,0)} 
 ,s=function(e){ 
 setTimeout(function(){ 
 "string"==typeof e?t().revokeObjectURL(e):e.remove()} 
 ,4e4)} 
 ,l=function(e){ 
 return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{
 type:e.type} 
 ):e} 
 ,c=function(c,u,d){ 
 d||(c=l(c)); 
 var p,f=this,h="application/octet-stream"===c.type,m=function(){ 
 !function(e,t,n){ 
 for(var a=(t=[].concat(t)).length; 
 a--; 
 ){ 
 var r=e["on"+t[a]]; 
 if("function"==typeof r)try{ 
 r.call(e,e)} 
 catch(e){ 
 o(e)} 
 } 
 } 
 (f,"writestart progress write writeend".split(" "))} 
 ; 
 if(f.readyState=f.INIT,a)return p=t().createObjectURL(c),void setTimeout(function(){ 
 n.href=p,n.download=u,function(e){ 
 var t=new MouseEvent("click"); 
 e.dispatchEvent(t)} 
 (n),m(),s(p),f.readyState=f.DONE} 
 ); 
 !function(){ 
 if((i||h&&r)&&e.FileReader){ 
 var n=new FileReader; 
 return n.onloadend=function(){ 
 var t=i?n.result:n.result.replace(/^data:[^;]*;/,"data:attachment/file;");
 e.open(t,"_blank")||(e.location.href=t),t=void 0,f.readyState=f.DONE,m()} 
 ,n.readAsDataURL(c),void(f.readyState=f.INIT)} 
 p||(p=t().createObjectURL(c)),h?e.location.href=p:e.open(p,"_blank")||(e.location.href=p),f.readyState=f.DONE,m(),s(p)} 
 ()} 
 ,u=c.prototype; 
 return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){ 
 return t=t||e.name||"download",n||(e=l(e)),navigator.msSaveOrOpenBlob(e,t)} 
 :(u.abort=function(){ 
 } 
 ,u.readyState=u.INIT=0,u.WRITING=1,u.DONE=2,u.error=u.onwritestart=u.onprogress=u.onwrite=u.onabort=u.onerror=u.onwriteend=null,function(e,t,n){ 
 return new c(e,t||e.name||"download",n)} 
 )} 
 } 
 ("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content); 
 "undefined"!=typeof module&&module.exports?module.exports.saveAs=saveAs:"undefined"!=typeof define&&null!==define&&null!==define.amd&&define("FileSaver.js",function(){ 
 return saveAs} 
 ); 
 function dictation(e){ 
 switch(e){ 
 case"gist":return void k(); 
 case"save":return void v(); 
 case"clear":return void g(); 
 case"lang":return void ee(); 
 case"langs":return void X(); 
 case"tts":return void d(); 
 case"play":return void u(); 
 case"reset":return void o(); 
 case"print":return void se(); 
 case"mail":return void m()} 
 } 
 function m(){ 
 $("a.btn-mail").attr("href","mailto:?body="+encodeURIComponent(E()))} 
 function g(){ 
 B.setText(""),I=0,J("Canvas cleared")} 
 function v(e){ 
 "html"===e?saveAs(new Blob([T()],{ 
 type:"application/xhtml+xml;charset=utf-8"}
 ),"dictation.html"):saveAs(new Blob([E().replace(/\n/g,"\n\n")],{ 
 type:"text/plain;charset=utf-8"}
 ),"dictation.txt"),J("File downloaded")} 
 function y(){ 
 document.addEventListener("copy",function e(t){ 
 t.clipboardData.setData("text/plain",E()),t.clipboardData.setData("text/html",T()),t.preventDefault(),document.removeEventListener("copy",e,!0)} 
 ,!0),document.execCommand("copy")} 
 function k(){ 
 $("p.publishing").removeClass("hidden"),$("p.published").addClass("hidden"),$("a.gist").click(); 
 var e={ 
 description:"Published via dictation.io",public:!1,files:{ 
 dictation:{ 
 content:E()+"\n\nvia dictation.io"} 
 } 
 } 
 ; 
 $.ajax({ 
 url:"https://api.github.com/gists",type:"POST",dataType:"json",data:JSON.stringify(e)} 
 ).done(function(e){ 
 e&&e.files&&e.files.dictation&&$("p.published").html('<a target="_blank" class="btn btn--primary type--uppercase" href="URL"><span class="btn__text">Open Note</span></a><a target="_blank" class="btn btn--primary type--uppercase" href="https://twitter.com/intent/tweet?related=labnol&text=I%20love%20https%3A%2F%2Fdictation.io%20for%20voice%20typing&tw_p=tweetbutton&via=labnol&url=URL"><span class="btn__text">Tweet Note</span></a>'.replace(/URL/g,e.files.dictation.raw_url))} 
 ).fail(function(e){ 
 $("p.published").html("Sorry, a technical error has occured :("),ie(JSON.stringify(e)),ie(E())} 
 ).always(function(e){ 
 $("p.publishing").addClass("hidden"),$("p.published").removeClass("hidden")} 
 )} 
 function b(e){ 
 e&&(q&&(e=e.charAt(0).toUpperCase()+e.substr(1),q=!1),C(" "+e))} 
 function w(){ 
 S()&&("undefined"!=typeof Quill?((B=new Quill("#speech",{ 
 theme:"snow",modules:{ 
 toolbar:"#toolbar"} 
 } 
 )).on("text-change",function(e,t,n){ 
 G.dictation=T(),"api"===n?setTimeout(function(){ 
 if(e&&e.ops)for(var t=0; 
 t<e.ops.length; 
 t++)if("insert"in e.ops[t])return I+=e.ops[t].insert.length,void B.setSelection(I,Quill.sources.SILENT)} 
 ,10):"user"===n&&setTimeout(function(){ 
 x(B.getSelection())} 
 ,10)} 
 ),B.on("selection-change",function(e,t,n){ 
 x(e)} 
 ),G.dictation&&B.pasteHTML(0,G.dictation),U||ne()):ie("No Quill"))} 
 function x(e){ 
 I=e?e.index+e.length:B.getLength()} 
 function C(e,t){ 
 B&&(t?B.pasteHTML(I,e.replace(/^\s|\s$/g,"&nbsp;")):B.insertText(I,e))}
 function j(e,t){ 
 q=t||!1,C(e,"&"===e.trim().charAt(0))} 
 function T(){ 
 return B?B.root.innerHTML:""} 
 function E(){ 
 return B?B.getText():""} 
 function _(){ 
 U&&S()&&(le(),ae(),U.addCallback("error",function(e){ 
 var t=""; 
 switch(e.error){ 
 case"aborted":case"no-speech":t=z()?"":"🏁 Click the microphone to resume dictation"; 
 break; 
 case"network":t="👨🏼‍💻 Please ensure that your computer is connected to the Internet?"; 
 break; 
 case"audio-capture":ie(e.error),t="We're having trouble hearing you. Is your microphone turned on? If you're experiencing issues, try moving to a quieter place or using an external microphone."; 
 break; 
 case"not-allowed":case"service-not-allowed":ie(e.error),$("a.nomic").click(),t="Dication cannot use your microphone. Go to chrome://settings/content/microphone and allow access to the microphone"; 
 break; 
 default:ie(e.error),t="👨🏼‍💻 Please ensure that no other tab in your browser is using the microphone else Dictation may not work."} 
 J(t),N()} 
 ),U.addCallback("start",Y),U.addCallback("end",Y),U.addCallback("stop",Y),U.addCallback("abort",Y),U.addCallback("pause",Y),U.addCallback("resume",Y),U.addCommands(f),U.addCommands(h),U.addCallback("resultMatch",function(e,t,n){ 
 J("⌘ "+(e=e.toLowerCase().trim())+" ⌘"),ie("Command: "+e)} 
 ),U.addCallback("resultNoMatch",function(e){ 
 b((e[0]||"").trim())} 
 ))} 
 function S(){ 
 return null!==document.getElementById("speech")} 
 function z(){ 
 return U&&U.isListening()} 
 function N(){ 
 Q=Q||$("img.bars"),z()?Q.attr("src","images/bars.svg"):Q.attr("src","images/mic.svg")} 
 function A(){ 
 U&&U.abort()} 
 function R(){ 
 if(S()){ 
 if(!U)return $("div.langdd").remove(),void $("p.log").hide(); 
 (W=U.getSpeechRecognizer()).interimResults=!0,W.onresult=function(e){ 
 for(var t=e.resultIndex; 
 t<e.results.length; 
 ++t){ 
 var n=e.results[t][0].transcript; 
 e.results[t].isFinal?n.split(/\s/)>4?b(n):(B&&(B.hasFocus()||B.focus()),U.trigger(n.replace(/^\n+$/,"new paragraph"))):n.length>2&&J(n+" &hellip;")}
 } 
 } 
 } 
 function D(e){ 
 t(e),U.setLanguage(e),i(e)} 
 var L="",I=0,q=!0,P=!1,O=null,M=null,H=null,F=null,Q=null,B=null,W=null,U=window.annyang||null,G=window.localStorage||{ 
 } 
 ; 
 function V(){ 
 $(".btn-clipboard").on("click",function(e){ 
 var t=$(".btn__copy"); 
 J("Copied to clipboard"),t.text("Copied"),setTimeout(function(){ 
 t.text("Copy")} 
 ,3e3),e.preventDefault(),y()} 
 ),$(".bars").on("click",function(e){ 
 K(),e.preventDefault()} 
 ),$(".btn-mic").on("click",function(e){ 
 K(),e.preventDefault()} 
 )} 
 function K(){ 
 U?(z()?A():(P&&(P=!1,g()),U.resume(),J("Listening..")),Y()):te()} 
 function X(){ 
 $("a.btn-languages").click()} 
 function Y(){ 
 z()?(O.addClass("bg--pinterest"),O.removeClass("btn--primary-1"),M.removeClass("hide"),H.text("Stop")):(O.removeClass("bg--pinterest"),O.addClass("btn--primary-1"),M.addClass("hide"),H.text("Start")),N()} 
 function J(e){ 
 e&&L!==e&&(F.html(e),L=e)} 
 function Z(){ 
 return $("#lang option:selected").text()} 
 function ee(){ 
 var e=$("#lang").val(); 
 D(e),G.language=e,J("Language set to "+Z()),ie("Lang: "+e),A()} 
 $(document).ready(function(){ 
 w(),_(),V(),R(),s(),H=$("span.listen"),M=$(".loading-indicator"),O=$(".btn-mic"),F=$("p.log span"),$("body").addClass("loaded")} 
 ); 
 function te(){ 
 $("a.nochrome").click()} 
 function ne(){ 
 if(!(G.dictation&&G.dictation.replace(/<.*?>/g,"").replace(/\s/g,"").length>20))var e=0,t=["\n","Sorry, ","your browser does not support speech recognition :(","\n\n","Please open dictation.io inside ","Google Chrome ","on your Windows PC or Mac OS to ","continue using ","Speech Recognition!","\n\n","For assistance, ","please email amit@labnol.org"," or tweet @labnol","\n","Thanks!"],n=setInterval(function(){ 
 b(t[e++]),e===t.length&&(clearInterval(n),P=!0,ie("No speech"))} 
 ,1200)} 
 function ae(){ 
 var e=!G.language; 
 G.language=ce(G.language),$("#lang").val(G.language),D(G.language),e&&(ie("Detected: "+G.language),re())} 
 function re(){ 
 var e=Z(); 
 if(e.length){ 
 if(!(G.dictation&&G.dictation.replace(/<.*?>/g,"").replace(/\s/g,"").length>5))var t=0,n=["\n","Hello! ","We have set your default language as ",e,"but you can easily change it from the language dropdown 👉 ","\n\n","Next, click the Start button to activate dictation. ","For assistance, ","please email amit@labnol.org"," or tweet @labnol","\n\n","Thanks!","\n\n"],a=setInterval(function(){ 
 b(n[t++]),t===n.length&&(clearInterval(a),P=!0,ie("Set: "+e))} 
 ,1200)} 
 else ie("No language set")} 
 function ie(e){ 
 window.trackJs&&trackJs.track(e)} 
 !function(e,t,n,a,r,i,o){ 
 e.GoogleAnalyticsObject="ga",e.ga=e.ga||function(){ 
 (e.ga.q=e.ga.q||[]).push(arguments)} 
 ,e.ga.l=1*new Date,i=t.createElement("script"),o=t.getElementsByTagName("script")[0],i.async=1,i.src="//www.google-analytics.com/analytics.js",o.parentNode.insertBefore(i,o)} 
 (window,document),ga("create","UA-50062-33","dictation.io"),ga("send","pageview"); 
 function oe(){ 
 return'<style>body{font:12pt Georgia,"Times New Roman",Times,serif;line-height:1.3;}body:after{font-style:italic;content:"This document was printed from dictation.io";}p a{word-wrap: break-word;} a{color:#000;}p a:after{content: " (" attr(href) ")";font-size: 80%;}</style>'}
 function se(){ 
 var e=window.open(""); 
 e.document.write(oe()+T()),e.print(),e.close()} 
 function le(){ 
 var e=$("#lang"),t=pe(),n=de(); 
 $.each(Object.keys(n),function(a,r){ 
 e.append($("<option>",{ 
 value:n[r],text:t[r]} 
 ))} 
 )} 
 function ce(e){ 
 var t=ue(); 
 if(e&&t[e.toLowerCase()])return e.toLowerCase(); 
 if(navigator.languages)for(var n=0; 
 n<navigator.languages.length; 
 n++)if(t[navigator.languages[n].toLowerCase()])return navigator.languages[n].toLowerCase(); 
 return navigator.userLanguage&&t[navigator.userLanguage.toLowerCase()]?navigator.userLanguage.toLowerCase():navigator.language&&t[navigator.language.toLowerCase()]?navigator.language.toLowerCase():(ie(["Unknown",navigator.languages||[],navigator.userLanguage||"",navigator.language||""].join(":")),"en-us")} 
 function ue(){ 
 var e=de(),t={ 
 } 
 ; 
 for(var n in e)t[n.toLowerCase().replace("_","-")]=e[n],t[e[n]]=e[n]; 
 return t} 
 function de(){ 
 return{ 
 af:"af-za",az:"az-az",id:"id-id",ms:"ms-my",jv:"jv-id",su:"su-id",ca:"ca-es",cs:"cs-cz",da:"da-dk",de:"de-de",en_AU:"en-au",en_CA:"en-ca",en_GH:"en-gh",en_IN:"en-in",en_IE:"en-ie",en_KE:"en-ke",en_NZ:"en-nz",en_NG:"en-ng",en_PH:"en-ph",en_ZA:"en-za",en_TZ:"en-tz",en_GB:"en-gb",en:"en-us",es:"es-mx",es_AR:"es-ar",es_BO:"es-bo",es_CL:"es-cl",es_CO:"es-co",es_CR:"es-cr",es_EC:"es-ec",es_SV:"es-sv",es_ES:"es-es",es_US:"es-us",es_GT:"es-gt",es_HN:"es-hn",es_419:"es-419",es_MX:"es-mx",es_NI:"es-ni",es_PA:"es-pa",es_PY:"es-py",es_PE:"es-pe",es_PR:"es-pr",es_DO:"es-do",es_UY:"es-uy",es_VE:"es-ve",eu:"eu-es",fil:"fil-ph",fr:"fr-fr",gl:"gl-es",hr:"hr-hr",zu:"zu-za",is:"is-is",it:"it-it",it_IT:"it-it",it_CH:"it-ch",sw_KE:"sw-ke",sw_TZ:"sw-tz",lv:"lv-lv",lt:"lt-lt",hu:"hu-hu",nl:"nl-nl",no:"nb-no",pl:"pl-pl",pt_BR:"pt-br",pt_PT:"pt-pt",ro:"ro-ro",sk:"sk-sk",sl:"sl-si",fi:"fi-fi",sv:"sv-se",vi:"vi-vn",tr:"tr-tr",el:"el-gr",bg:"bg-bg",ru:"ru-ru",sr:"sr-rs",uk:"uk-ua",hy:"hy-am",iw:"he-il",ur_IN:"ur-in",ur_PK:"ur-pk",ar:"ar-x-gulf",ar_IL:"ar-il",ar_JO:"ar-jo",ar_AE:"ar-ae",ar_BH:"ar-bh",ar_DZ:"ar-dz",ar_SA:"ar-sa",ar_KW:"ar-kw",ar_MA:"ar-ma",ar_TN:"ar-tn",ar_OM:"ar-om",ar_PS:"ar-ps",ar_QA:"ar-qa",ar_LB:"ar-lb",ar_EG:"ar-eg",fa:"fa-ir",ne:"ne-np",mr:"mr-in",hi:"hi-in",bn_BD:"bn-bd",bn_IN:"bn-in",gu:"gu-in",ta_IN:"ta-in",ta_LK:"ta-lk",ta_SG:"ta-sg",ta_MY:"ta-my",te:"te-in",kn:"kn-in",ml:"ml-in",si:"si-lk",th:"th-th",lo:"lo-la",ka:"ka-ge",am:"am-et",km:"km-kh",zh_CN:"cmn-hans-cn",zh_TW:"cmn-hant-tw",zh_HK:"yue-hant-hk",ja:"ja-jp",ko:"ko-kr"} 
 } 
 function pe(){ 
 return{ 
 af:"Afrikaans",am:"አማርኛ",ar:"العربية",ar_AE:"(العربية (الإمارات",ar_BH:"(العربية (البحرين",ar_DZ:"(العربية (الجزائر",ar_EG:"(العربية (مصر",ar_IL:"(العربية (إسرائيل",ar_JO:"(العربية (الأردن",ar_KW:"(العربية (الكويت",ar_LB:"(العربية (لبنان",ar_MA:"(العربية (المغرب",ar_OM:"(العربية (عُمان",ar_PS:"(العربية (فلسطين",ar_QA:"(العربية (قطر",ar_SA:"(العربية (السعودية",ar_TN:"(العربية (تونس",az:"Azərbaycan",be:"беларуская",bg:"Български",bn:"বাংলা",bn_BD:"বাংলা (বাংলাদেশ)",bn_IN:"বাংলা (ভারত)",ca:"Català",cs:"Čeština",da:"Dansk",de:"Deutsch",de_CH:"Schweizer Hochdeutsch",el:"Ελληνικά",en:"English (United States)",en_AU:"English (Australia)",en_CA:"English (Canada)",en_GB:"English (United Kingdom)",en_GH:"English (Ghana)",en_IE:"English (Ireland)",en_IN:"English (India)",en_KE:"English (Kenya)",en_NZ:"English (New Zealand)",en_NG:"English (Nigeria)",en_PH:"English (Philippines)",en_TZ:"English (Tanzania)",en_ZA:"English (South Africa)",es:"Español",es_419:"Español (Latinoamérica)",es_AR:"Español (Argentina)",es_BO:"Español (Bolivia)",es_CL:"Español (Chile)",es_CO:"Español (Colombia)",es_CR:"Español (Costa Rica)",es_DO:"Español (República Dominicana)",es_EC:"Español (Ecuador)",es_ES:"Español (España)",es_GT:"Español (Guatemala)",es_HN:"Español (Honduras)",es_MX:"Español (México)",es_NI:"Español (Nicaragua)",es_PA:"Español (Panamá)",es_PE:"Español (Perú)",es_PR:"Español (Puerto Rico)",es_PY:"Español (Paraguay)",es_SV:"Español (El Salvador)",es_US:"Español (Estados Unidos)",es_UY:"Español (Uruguay)",es_VE:"Español (Venezuela)",et:"Eesti",eu:"Euskara",fa:"فارسی",fi:"Suomi",fil:"Filipino",fr:"Français",fr_CA:"Français (Canada)",gl:"Galego",gu:"ગુજરાતી",hi:"हिन्दी",hr:"Hrvatski",hu:"Magyar",hy:"հայերեն",id:"Bahasa Indonesia",is:"Íslenska",it:"Italiano",it_CH:"Italiano (Svizzera)",it_IT:"Italiano (Italia)",iw:"עברית",ja:"日本語",jv:"Basa Jawa",ka:"ქართულად",kk:"Қазақ",km:"ខ្មែរ",kn:"ಕನ್ನಡ",ko:"한국어",lo:"ລາວ",lt:"Lietuvių",lv:"Latviešu",ml:"മലയാളം",mn:"Монгол",mr:"मराठी",ms:"Bahasa Melayu",mt:"Malti",ne:"नेपाली",nl:"Nederlands",nn:"Norsk (Nynorsk)",no:"Norsk (Bokmål)",pa:"ਪੰਜਾਬੀ",pl:"Polski",pt_BR:"Português (Brasil)",pt_PT:"Português (Portugal)",ro:"Română",ru:"Русский",si:"සිංහල",sk:"Slovenčina",sl:"Slovenščina",sr:"Српски",su:"Basa Sunda",sv:"Svenska",sw:"Kiswahili",sw_KE:"Kiswahili (Kenya)",sw_TZ:"Kiswahili (Tanzania)",ta:"தமிழ்",ta_IN:"தமிழ் (இந்தியா)",ta_LK:"தமிழ் (இலங்கை)",ta_MY:"தமிழ் (மலேஷியா)",ta_SG:"தமிழ் (சிங்கப்பூர்)",te:"తెలుగు",th:"ไทย",tr:"Türkçe",uk:"Українська",ur:"اردو",ur_IN:"(اردو (بھارت",ur_PK:"(اردو (پاکستان",vi:"Tiếng Việt",zh_CN:"中文（中国）",zh_HK:"中文（香港）",zh_TW:"中文（台灣）",zu:"Isizulu"} 
 } 
 