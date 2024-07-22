"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8773],{5961:(tt,J,_)=>{_.d(J,{GW:()=>A,dk:()=>m,oK:()=>u});var u=function(h){return h.Prompt="PROMPT",h.Camera="CAMERA",h.Photos="PHOTOS",h}(u||{}),A=function(h){return h.Rear="REAR",h.Front="FRONT",h}(A||{}),m=function(h){return h.Uri="uri",h.Base64="base64",h.DataUrl="dataUrl",h}(m||{})},2726:(tt,J,_)=>{_.d(J,{Uw:()=>H,fo:()=>$,xz:()=>E});var u=_(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var T=function(e){return e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",e}(T||{});class E extends Error{constructor(n,o,a){super(n),this.message=n,this.code=o,this.data=a}}const B=e=>{var n,o,a,l,c;const g=e.CapacitorCustomPlatform||null,s=e.Capacitor||{},b=s.Plugins=s.Plugins||{},f=e.CapacitorPlatforms,L=(null===(n=null==f?void 0:f.currentPlatform)||void 0===n?void 0:n.getPlatform)||(()=>null!==g?g.name:(e=>{var n,o;return null!=e&&e.androidBridge?"android":null!==(o=null===(n=null==e?void 0:e.webkit)||void 0===n?void 0:n.messageHandlers)&&void 0!==o&&o.bridge?"ios":"web"})(e)),ut=(null===(o=null==f?void 0:f.currentPlatform)||void 0===o?void 0:o.isNativePlatform)||(()=>"web"!==L()),gt=(null===(a=null==f?void 0:f.currentPlatform)||void 0===a?void 0:a.isPluginAvailable)||(p=>{const C=Y.get(p);return!!(null!=C&&C.platforms.has(L())||at(p))}),at=(null===(l=null==f?void 0:f.currentPlatform)||void 0===l?void 0:l.getPluginHeader)||(p=>{var C;return null===(C=s.PluginHeaders)||void 0===C?void 0:C.find(S=>S.name===p)}),Y=new Map,ht=(null===(c=null==f?void 0:f.currentPlatform)||void 0===c?void 0:c.registerPlugin)||((p,C={})=>{const S=Y.get(p);if(S)return console.warn(`Capacitor plugin "${p}" already registered. Cannot register plugins twice.`),S.proxy;const O=L(),N=at(p);let Z;const Ct=function(){var P=(0,u.Z)(function*(){return!Z&&O in C?Z=Z="function"==typeof C[O]?yield C[O]():C[O]:null!==g&&!Z&&"web"in C&&(Z=Z="function"==typeof C.web?yield C.web():C.web),Z});return function(){return P.apply(this,arguments)}}(),V=P=>{let v;const y=(...M)=>{const I=Ct().then(w=>{const U=((P,v)=>{var y,M;if(!N){if(P)return null===(M=P[v])||void 0===M?void 0:M.bind(P);throw new E(`"${p}" plugin is not implemented on ${O}`,T.Unimplemented)}{const I=null==N?void 0:N.methods.find(w=>v===w.name);if(I)return"promise"===I.rtype?w=>s.nativePromise(p,v.toString(),w):(w,U)=>s.nativeCallback(p,v.toString(),w,U);if(P)return null===(y=P[v])||void 0===y?void 0:y.bind(P)}})(w,P);if(U){const K=U(...M);return v=null==K?void 0:K.remove,K}throw new E(`"${p}.${P}()" is not implemented on ${O}`,T.Unimplemented)});return"addListener"===P&&(I.remove=(0,u.Z)(function*(){return v()})),I};return y.toString=()=>`${P.toString()}() { [capacitor code] }`,Object.defineProperty(y,"name",{value:P,writable:!1,configurable:!1}),y},ct=V("addListener"),st=V("removeListener"),Pt=(P,v)=>{const y=ct({eventName:P},v),M=function(){var w=(0,u.Z)(function*(){const U=yield y;st({eventName:P,callbackId:U},v)});return function(){return w.apply(this,arguments)}}(),I=new Promise(w=>y.then(()=>w({remove:M})));return I.remove=(0,u.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield M()}),I},X=new Proxy({},{get(P,v){switch(v){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return N?Pt:ct;case"removeListener":return st;default:return V(v)}}});return b[p]=X,Y.set(p,{name:p,proxy:X,platforms:new Set([...Object.keys(C),...N?[O]:[]])}),X});return s.convertFileSrc||(s.convertFileSrc=p=>p),s.getPlatform=L,s.handleError=p=>e.console.error(p),s.isNativePlatform=ut,s.isPluginAvailable=gt,s.pluginMethodNoop=(p,C,S)=>Promise.reject(`${S} does not have an implementation of "${C}".`),s.registerPlugin=ht,s.Exception=E,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s.platform=s.getPlatform(),s.isNative=s.isNativePlatform(),s},k=(e=>e.Capacitor=B(e))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),$=k.registerPlugin;class H{constructor(n){this.listeners={},this.windowListeners={},n&&(console.warn(`Capacitor WebPlugin "${n.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=n)}addListener(n,o){var a=this;this.listeners[n]||(this.listeners[n]=[]),this.listeners[n].push(o);const c=this.windowListeners[n];c&&!c.registered&&this.addWindowListener(c);const g=function(){var b=(0,u.Z)(function*(){return a.removeListener(n,o)});return function(){return b.apply(this,arguments)}}(),s=Promise.resolve({remove:g});return Object.defineProperty(s,"remove",{value:(b=(0,u.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield g()}),function(){return b.apply(this,arguments)})}),s;var b}removeAllListeners(){var n=this;return(0,u.Z)(function*(){n.listeners={};for(const o in n.windowListeners)n.removeWindowListener(n.windowListeners[o]);n.windowListeners={}})()}notifyListeners(n,o){const a=this.listeners[n];a&&a.forEach(l=>l(o))}hasListeners(n){return!!this.listeners[n].length}registerWindowListener(n,o){this.windowListeners[o]={registered:!1,windowEventName:n,pluginEventName:o,handler:a=>{this.notifyListeners(o,a)}}}unimplemented(n="not implemented"){return new k.Exception(n,T.Unimplemented)}unavailable(n="not available"){return new k.Exception(n,T.Unavailable)}removeListener(n,o){var a=this;return(0,u.Z)(function*(){const l=a.listeners[n];if(!l)return;const c=l.indexOf(o);a.listeners[n].splice(c,1),a.listeners[n].length||a.removeWindowListener(a.windowListeners[n])})()}addWindowListener(n){window.addEventListener(n.windowEventName,n.handler),n.registered=!0}removeWindowListener(n){n&&(window.removeEventListener(n.windowEventName,n.handler),n.registered=!1)}}const j=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),G=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class W extends H{getCookies(){return(0,u.Z)(function*(){const n=document.cookie,o={};return n.split(";").forEach(a=>{if(a.length<=0)return;let[l,c]=a.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");l=G(l).trim(),c=G(c).trim(),o[l]=c}),o})()}setCookie(n){return(0,u.Z)(function*(){try{const o=j(n.key),a=j(n.value),l=`; expires=${(n.expires||"").replace("expires=","")}`,c=(n.path||"/").replace("path=",""),g=null!=n.url&&n.url.length>0?`domain=${n.url}`:"";document.cookie=`${o}=${a||""}${l}; path=${c}; ${g};`}catch(o){return Promise.reject(o)}})()}deleteCookie(n){return(0,u.Z)(function*(){try{document.cookie=`${n.key}=; Max-Age=0`}catch(o){return Promise.reject(o)}})()}clearCookies(){return(0,u.Z)(function*(){try{const n=document.cookie.split(";")||[];for(const o of n)document.cookie=o.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(n){return Promise.reject(n)}})()}clearAllCookies(){var n=this;return(0,u.Z)(function*(){try{yield n.clearCookies()}catch(o){return Promise.reject(o)}})()}}$("CapacitorCookies",{web:()=>new W});const Q=function(){var e=(0,u.Z)(function*(n){return new Promise((o,a)=>{const l=new FileReader;l.onload=()=>{const c=l.result;o(c.indexOf(",")>=0?c.split(",")[1]:c)},l.onerror=c=>a(c),l.readAsDataURL(n)})});return function(o){return e.apply(this,arguments)}}();class d extends H{request(n){return(0,u.Z)(function*(){const o=((e,n={})=>{const o=Object.assign({method:e.method||"GET",headers:e.headers},n),l=((e={})=>{const n=Object.keys(e);return Object.keys(e).map(l=>l.toLocaleLowerCase()).reduce((l,c,g)=>(l[c]=e[n[g]],l),{})})(e.headers)["content-type"]||"";if("string"==typeof e.data)o.body=e.data;else if(l.includes("application/x-www-form-urlencoded")){const c=new URLSearchParams;for(const[g,s]of Object.entries(e.data||{}))c.set(g,s);o.body=c.toString()}else if(l.includes("multipart/form-data")||e.data instanceof FormData){const c=new FormData;if(e.data instanceof FormData)e.data.forEach((s,b)=>{c.append(b,s)});else for(const s of Object.keys(e.data))c.append(s,e.data[s]);o.body=c;const g=new Headers(o.headers);g.delete("content-type"),o.headers=g}else(l.includes("application/json")||"object"==typeof e.data)&&(o.body=JSON.stringify(e.data));return o})(n,n.webFetchExtra),a=((e,n=!0)=>e?Object.entries(e).reduce((a,l)=>{const[c,g]=l;let s,b;return Array.isArray(g)?(b="",g.forEach(f=>{s=n?encodeURIComponent(f):f,b+=`${c}=${s}&`}),b.slice(0,-1)):(s=n?encodeURIComponent(g):g,b=`${c}=${s}`),`${a}&${b}`},"").substr(1):null)(n.params,n.shouldEncodeUrlParams),l=a?`${n.url}?${a}`:n.url,c=yield fetch(l,o),g=c.headers.get("content-type")||"";let b,f,{responseType:s="text"}=c.ok?n:{};switch(g.includes("application/json")&&(s="json"),s){case"arraybuffer":case"blob":f=yield c.blob(),b=yield Q(f);break;case"json":b=yield c.json();break;default:b=yield c.text()}const q={};return c.headers.forEach((L,D)=>{q[D]=L}),{data:b,headers:q,status:c.status,url:c.url}})()}get(n){var o=this;return(0,u.Z)(function*(){return o.request(Object.assign(Object.assign({},n),{method:"GET"}))})()}post(n){var o=this;return(0,u.Z)(function*(){return o.request(Object.assign(Object.assign({},n),{method:"POST"}))})()}put(n){var o=this;return(0,u.Z)(function*(){return o.request(Object.assign(Object.assign({},n),{method:"PUT"}))})()}patch(n){var o=this;return(0,u.Z)(function*(){return o.request(Object.assign(Object.assign({},n),{method:"PATCH"}))})()}delete(n){var o=this;return(0,u.Z)(function*(){return o.request(Object.assign(Object.assign({},n),{method:"DELETE"}))})()}}$("CapacitorHttp",{web:()=>new d})},8773:(tt,J,_)=>{_.r(J),_.d(J,{ContactsPageModule:()=>z});var u=_(6814),A=_(95),m=_(878),h=_(1147),x=_(5861);class et{constructor(d,r,e,n){this.nombre=d,this.telefono=r,this.mail=e,this.photo=n}}var F=_(2726),T=_(5961);const E=(0,F.fo)("Camera",{web:()=>_.e(6468).then(_.bind(_,6468)).then(i=>new i.CameraWeb)});var t=_(9212),B=_(7346);let nt=(()=>{var i;class d{constructor(){}AddNewToGallery(){return(0,x.Z)(function*(){return yield E.getPhoto({resultType:T.dk.Uri,source:T.oK.Camera,quality:100})})()}}return(i=d).\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),d})();function k(i,d){if(1&i&&t._UZ(0,"img",10),2&i){const r=t.oxw().$implicit;t.Q6J("src",r.photo,t.LSH)}}function $(i,d){1&i&&t._UZ(0,"ion-icon",11)}function ot(i,d){if(1&i){const r=t.EpF();t.TgZ(0,"ion-item",7),t.NdJ("click",function(){const o=t.CHM(r).$implicit,a=t.oxw();return t.KtG(a.abrirModal(o))}),t.YNc(1,k,1,1,"img",8)(2,$,1,0,"ion-icon",9),t.TgZ(3,"ion-label",5),t.NdJ("click",function(){t.CHM(r);const n=t.oxw();return t.KtG(n.setOpen(!0))}),t._uU(4),t.qZA()()}if(2&i){const r=d.$implicit;t.xp6(),t.Q6J("ngIf",""!==r.photo),t.xp6(),t.Q6J("ngIf",""===r.photo),t.xp6(2),t.Oqu(r.nombre)}}function rt(i,d){if(1&i){const r=t.EpF();t.TgZ(0,"img",28),t.NdJ("click",function(){t.CHM(r);const n=t.oxw(2);return t.KtG(n.newPhoto(!1))}),t.qZA()}if(2&i){const r=t.oxw(2);t.Q6J("src",r.contactoActual.photo,t.LSH)}}function H(i,d){if(1&i){const r=t.EpF();t.TgZ(0,"ion-icon",29),t.NdJ("click",function(){t.CHM(r);const n=t.oxw(2);return t.KtG(n.newPhoto(!1))}),t.qZA()}}function it(i,d){if(1&i){const r=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"Editar contacto"),t.qZA(),t.TgZ(4,"ion-buttons",12)(5,"ion-button",5),t.NdJ("click",function(){t.CHM(r);const n=t.oxw();return t.KtG(n.setOpen(!1))}),t._uU(6,"Cancelar"),t.qZA()()()(),t.TgZ(7,"ion-content",13)(8,"div",14),t.YNc(9,rt,1,1,"img",15)(10,H,1,0,"ion-icon",16),t.qZA(),t.TgZ(11,"h2"),t._uU(12),t.qZA(),t.TgZ(13,"div",17)(14,"button",5),t.NdJ("click",function(){t.CHM(r);const n=t.oxw();return t.KtG(n.llamar())}),t._UZ(15,"ion-icon",18),t.qZA(),t.TgZ(16,"button",5),t.NdJ("click",function(){t.CHM(r);const n=t.oxw();return t.KtG(n.sms())}),t._UZ(17,"ion-icon",19),t.qZA(),t.TgZ(18,"button",5),t.NdJ("click",function(){t.CHM(r);const n=t.oxw();return t.KtG(n.correo())}),t._UZ(19,"ion-icon",20),t.qZA(),t.TgZ(20,"p"),t._uU(21,"Llamar"),t.qZA(),t.TgZ(22,"p"),t._uU(23,"Mensaje"),t.qZA(),t.TgZ(24,"p"),t._uU(25,"Correo"),t.qZA()(),t._UZ(26,"br")(27,"ion-label"),t.TgZ(28,"ion-content",13)(29,"ion-item"),t._UZ(30,"ion-icon",21),t._uU(31,"* "),t.TgZ(32,"ion-input",22),t.NdJ("ngModelChange",function(n){t.CHM(r);const o=t.oxw();return t.KtG(o.nombreInput=n)}),t.qZA()(),t.TgZ(33,"ion-item"),t._UZ(34,"ion-icon",18),t._uU(35,"* "),t.TgZ(36,"ion-input",23),t.NdJ("ngModelChange",function(n){t.CHM(r);const o=t.oxw();return t.KtG(o.telefonoInput=n)}),t.qZA()(),t.TgZ(37,"ion-item"),t._UZ(38,"ion-icon",20),t.TgZ(39,"ion-input",24),t.NdJ("ngModelChange",function(n){t.CHM(r);const o=t.oxw();return t.KtG(o.mailInput=n)}),t.qZA()(),t.TgZ(40,"ion-button",25),t.NdJ("click",function(){t.CHM(r);const n=t.oxw();return t.KtG(n.guardarCambios())}),t._uU(41,"Guardar"),t.qZA(),t.TgZ(42,"ion-button",26),t._uU(43,"Eliminar"),t.qZA(),t._UZ(44,"ion-alert",27),t.qZA()()}if(2&i){const r=t.oxw();t.xp6(9),t.Q6J("ngIf",""!==r.contactoActual.photo),t.xp6(),t.Q6J("ngIf",""===r.contactoActual.photo),t.xp6(2),t.Oqu(null==r.contactoActual?null:r.contactoActual.nombre),t.xp6(20),t.Q6J("ngModel",r.nombreInput),t.xp6(4),t.Q6J("ngModel",r.telefonoInput),t.xp6(3),t.Q6J("ngModel",r.mailInput),t.xp6(5),t.Q6J("buttons",r.alertButtons)}}function j(i,d){if(1&i){const r=t.EpF();t.TgZ(0,"ion-icon",29),t.NdJ("click",function(){t.CHM(r);const n=t.oxw(2);return t.KtG(n.newPhoto(!0))}),t.qZA()}}function G(i,d){if(1&i){const r=t.EpF();t.TgZ(0,"img",28),t.NdJ("click",function(){t.CHM(r);const n=t.oxw(2);return t.KtG(n.newPhoto(!0))}),t.qZA()}if(2&i){const r=t.oxw(2);t.Q6J("src",r.newContactPhotoSrc,t.LSH)}}function W(i,d){if(1&i){const r=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title",30),t._uU(3,"A\xf1adir contacto"),t.qZA(),t.TgZ(4,"ion-buttons",31)(5,"ion-button",5),t.NdJ("click",function(){t.CHM(r);const n=t.oxw();return t.KtG(n.abrirNuevoContacto(!1))}),t._UZ(6,"ion-icon",32),t.qZA()(),t.TgZ(7,"ion-buttons",12)(8,"ion-button",5),t.NdJ("click",function(){t.CHM(r);const n=t.oxw();return t.KtG(n.agregarContacto())}),t._UZ(9,"ion-icon",33),t.qZA()()()(),t.TgZ(10,"ion-content",13)(11,"div",14),t.YNc(12,j,1,0,"ion-icon",16)(13,G,1,1,"img",15),t.qZA(),t.TgZ(14,"ion-item"),t._UZ(15,"ion-icon",21),t._uU(16,"* "),t.TgZ(17,"ion-input",22),t.NdJ("ngModelChange",function(n){t.CHM(r);const o=t.oxw();return t.KtG(o.nombreInput=n)}),t.qZA()(),t.TgZ(18,"ion-item"),t._UZ(19,"ion-icon",18),t._uU(20,"* "),t.TgZ(21,"ion-input",23),t.NdJ("ngModelChange",function(n){t.CHM(r);const o=t.oxw();return t.KtG(o.telefonoInput=n)}),t.qZA()(),t.TgZ(22,"ion-item"),t._UZ(23,"ion-icon",20),t.TgZ(24,"ion-input",24),t.NdJ("ngModelChange",function(n){t.CHM(r);const o=t.oxw();return t.KtG(o.mailInput=n)}),t.qZA()()()}if(2&i){const r=t.oxw();t.xp6(12),t.Q6J("ngIf",""===r.newContactPhotoSrc),t.xp6(),t.Q6J("ngIf",""!==r.newContactPhotoSrc),t.xp6(4),t.Q6J("ngModel",r.nombreInput),t.xp6(4),t.Q6J("ngModel",r.telefonoInput),t.xp6(3),t.Q6J("ngModel",r.mailInput)}}const Q=[{path:"",component:(()=>{var i;class d{constructor(e,n,o){this.alertController=e,this.photoService=n,this.platform=o,this.contactos=[{nombre:"Juan S",telefono:"1234567890",mail:"juan@example.com",photo:""},{nombre:"Mateo",telefono:"9876543210",mail:"mateo@example.com",photo:""}],this.nombreInput="",this.telefonoInput="",this.mailInput="",this.photoSrc="",this.photoEdited=!1,this.newContactPhotoSrc="",this.isModalOpen=!1,this.anadirContacto=!1,this.alertButtons=[{text:"Cancelar",role:"cancel",handler:()=>{console.log("Eliminar contacto Cancelado")}},{text:"Eliminar",role:"confirm",handler:()=>{console.log("Eliminar contacto"),this.eliminarContacto()}}]}ngOnInit(){this.loadContacts(),this.updateSearchedContacts(),this.organizeArray(),E.requestPermissions()}loadContacts(){var e=this;return(0,x.Z)(function*(){let n=localStorage.getItem("dataUser");null!==n&&(e.contactos=JSON.parse(n),e.updateSearchedContacts()),e.nombreInput="",e.telefonoInput="",e.mailInput=""})()}agregarContacto(){var e=this;return(0,x.Z)(function*(){""!==e.nombreInput.trim()&&""!==e.telefonoInput?isNaN(Number(e.telefonoInput))?yield e.showAlert("Error","El telefono contiene caracteres invalidos"):10==e.telefonoInput.length?(e.contactos.push(new et(e.nombreInput,e.telefonoInput,e.mailInput,e.newContactPhotoSrc)),localStorage.setItem("dataUser",JSON.stringify(e.contactos)),e.nombreInput="",e.telefonoInput="",e.mailInput="",e.anadirContacto=!1,e.newContactPhotoSrc="",e.loadContacts(),e.organizeArray()):yield e.showAlert("Error","El telefono debe tener 10 digitos"):yield e.showAlert("Error","Por favor, complete los campos requeridos (*).")})()}showAlert(e,n){var o=this;return(0,x.Z)(function*(){yield(yield o.alertController.create({header:e,message:n,buttons:["Aceptar"]})).present()})()}abrirNuevoContacto(e){this.anadirContacto=e,this.nombreInput="",this.telefonoInput="",this.mailInput="",this.photoSrc=""}setOpen(e){this.isModalOpen=e,!1===e&&(this.nombreInput="",this.telefonoInput="",this.mailInput="")}abrirModal(e){var n=this;return(0,x.Z)(function*(){n.contactoActual=e,n.isModalOpen=!0,n.nombreInput=n.contactoActual.nombre,n.telefonoInput=n.contactoActual.telefono,n.mailInput=n.contactoActual.mail})()}guardarCambios(){var e=this;return(0,x.Z)(function*(){e.contactoActual.nombre=e.nombreInput,e.contactoActual.telefono=e.telefonoInput,e.contactoActual.mail=e.mailInput,""!==e.nombreInput.trim()&&""!==e.telefonoInput?isNaN(Number(e.telefonoInput))?yield e.showAlert("Error","El telefono contiene caracteres invalidos"):10==e.telefonoInput.length?(e.photoEdited&&(e.contactoActual.photo=e.photoSrc),e.isModalOpen=!1,e.organizeArray(),localStorage.setItem("dataUser",JSON.stringify(e.contactos)),e.photoEdited=!1,e.photoSrc=""):yield e.showAlert("Error","El telefono debe tener 10 digitos"):yield e.showAlert("Error","Por favor, complete los campos requeridos (*).")})()}eliminarContacto(){var e=this;return(0,x.Z)(function*(){console.log("Se elimino el contacto con nombre: "+e.contactoActual);const n=e.contactos.indexOf(e.contactoActual);n>-1?(e.contactos.splice(n,1),localStorage.setItem("dataUser",JSON.stringify(e.contactos)),e.isModalOpen=!1,e.organizeArray(),yield e.showAlert("Eliminar Contacto","Se elimin\xf3 correctamente el contacto con nombre: "+e.contactoActual.nombre)):yield e.showAlert("Error","No se encontr\xf3 el contacto: "+e.contactoActual.nombre+"en tu lista de contactos")})()}organizeArray(){this.contactos.sort(function(e,n){let o=e.nombre.toLowerCase(),a=n.nombre.toLowerCase();return o<a?-1:o>a?1:0})}searchContact(e){this.searchText=e.detail.value,this.updateSearchedContacts()}updateSearchedContacts(){var e;const n=null===(e=this.searchText)||void 0===e?void 0:e.trim().toLowerCase();this.searchedContact=n&&""!==n?this.contactos.filter(o=>o.nombre.toLowerCase().includes(n)):this.contactos}newPhoto(e){var n=this;return(0,x.Z)(function*(){try{const o=yield n.photoService.AddNewToGallery();o&&o.webPath&&!1===e?(n.photoSrc=o.webPath,n.photoEdited=!0,n.contactoActual.photo=n.photoSrc):!0===e&&o.webPath?n.newContactPhotoSrc=o.webPath:console.error("No se pudo obtener la URL de la foto.")}catch(o){console.error("Error al tomar la foto:",o)}})()}llamar(){if(this.platform.is("cordova")){const e=this.contactoActual.telefono;e?window.open(`tel:${e}`,"_system"):console.error("El n\xfamero de tel\xe9fono no est\xe1 definido.")}else console.log("Esta funcionalidad solo est\xe1 disponible en dispositivos m\xf3viles.")}correo(){var e=this;return(0,x.Z)(function*(){if(e.platform.is("cordova")){const n=e.contactoActual.mail;n?window.open(`mailto:${n}`,"_system"):yield e.showAlert("Error","El contacto: "+e.contactoActual.nombre+"no tiene un email registrado")}else console.log("Esta funcionalidad solo est\xe1 disponible en dispositivos m\xf3viles.")})()}sms(){if(this.platform.is("cordova")){const e=this.contactoActual.telefono;e?window.open(`sms:${e}`,"_system"):console.error("El n\xfamero de tel\xe9fono no est\xe1 definido.")}else console.log("Esta funcionalidad solo est\xe1 disponible en dispositivos m\xf3viles.")}}return(i=d).\u0275fac=function(e){return new(e||i)(t.Y36(m.Br),t.Y36(nt),t.Y36(B.t4))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-contacts"]],decls:14,vars:4,consts:[[3,"translucent"],["placeholder","Buscar contacto",3,"ionInput"],["id","open-modal",3,"click",4,"ngFor","ngForOf"],[3,"isOpen"],["slot","fixed","vertical","bottom","horizontal","end"],[3,"click"],["name","add"],["id","open-modal",3,"click"],["class","image-icon",3,"src",4,"ngIf"],["style","margin-right: 10px","name","person-outline",4,"ngIf"],[1,"image-icon",3,"src"],["name","person-outline",2,"margin-right","10px"],["slot","end"],[1,"ion-padding"],[1,"contenedorContacto"],["class","fotoContacto",3,"src","click",4,"ngIf"],["name","person-outline","class","BImage-icon",3,"click",4,"ngIf"],[1,"botonesContacto"],["name","call-outline"],["name","chatbubble-ellipses-outline"],["name","mail-outline"],["name","person-outline"],["placeholder","Nombre",3,"ngModel","ngModelChange"],["type","tel","placeholder","000-000-0000",3,"ngModel","ngModelChange"],["type","email","placeholder","ejemplo@dominio.com",3,"ngModel","ngModelChange"],["color","success",1,"ion-margin-vertical",3,"click"],["color","danger","id","present-alert",1,"ion-margin-vertical"],["trigger","present-alert","header","\xbfEliminar contacto definitivamente?",3,"buttons"],[1,"fotoContacto",3,"src","click"],["name","person-outline",1,"BImage-icon",3,"click"],[2,"text-align","center"],["slot","start"],["name","close-outline"],["name","checkmark-outline"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"Contactos"),t.qZA()()(),t.TgZ(4,"ion-content")(5,"ion-searchbar",1),t.NdJ("ionInput",function(a){return n.searchContact(a)}),t.qZA(),t.YNc(6,ot,5,3,"ion-item",2),t.TgZ(7,"ion-modal",3),t.YNc(8,it,45,7,"ng-template"),t.qZA(),t.TgZ(9,"ion-fab",4)(10,"ion-fab-button",5),t.NdJ("click",function(){return n.abrirNuevoContacto(!0)}),t._UZ(11,"ion-icon",6),t.qZA()(),t.TgZ(12,"ion-modal",3),t.YNc(13,W,25,5,"ng-template"),t.qZA()()),2&e&&(t.Q6J("translucent",!0),t.xp6(6),t.Q6J("ngForOf",n.searchedContact),t.xp6(),t.Q6J("isOpen",n.isModalOpen),t.xp6(5),t.Q6J("isOpen",n.anadirContacto))},dependencies:[u.sg,u.O5,A.JJ,A.On,m.Ge,m.YG,m.Sm,m.W2,m.IJ,m.W4,m.Gu,m.gu,m.pK,m.Ie,m.Q$,m.VI,m.wd,m.sr,m.ki,m.j9],styles:[".contenedorContacto[_ngcontent-%COMP%]{margin:10px auto;width:100px;height:100px;border-radius:100%;overflow:hidden;align-items:center;justify-content:center;display:flex;background-color:#353535}.BImage-icon[_ngcontent-%COMP%]{width:82%;height:82%;object-fit:cover;align-items:center;justify-content:center}.fotoContacto[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.image-icon[_ngcontent-%COMP%]{width:30px;height:30px;margin-right:10px;border-radius:100%}.botonesContacto[_ngcontent-%COMP%]{display:grid;margin:10px auto;overflow:hidden;align-items:center;justify-content:center;grid-template-columns:auto auto auto}.botonesContacto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:5px 20px;height:60px;width:60px;border-radius:100%;font-size:24px;background-color:#353535}.botonesContacto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}h2[_ngcontent-%COMP%]{text-align:center;color:#fff}"]}),d})()}];let R=(()=>{var i;class d{}return(i=d).\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[h.Bz.forChild(Q),h.Bz]}),d})(),z=(()=>{var i;class d{}return(i=d).\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.ez,A.u5,m.Pc,R]}),d})()}}]);