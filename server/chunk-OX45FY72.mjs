import './polyfills.server.mjs';
import{A as s,B as A,C as te,D as h,E as P,F as ne,G as be,H as a,I as ie,J as re,K as oe,L as se,M as T,N as m,O as ae,P as Ve,R as De,W as Me,Y as Ae,Z as Ee,_ as le,a as ge,aa as xe,b as _e,ba as we,c as ve,ca as G,d as I,da as Fe,e as O,ea as Se,f as Y,g as C,h as M,ha as Ie,i as f,j as Z,k as g,l as ye,la as Oe,m as N,n as k,o as Ce,oa as Ne,p as J,pa as ke,q as p,qa as Pe,r as c,s as d,t as X,u as v,v as K,w as b,x as Q,y as ee,z as o}from"./chunk-G7T62XWN.mjs";import{a as _,b as y}from"./chunk-VVCT4QZE.mjs";var Te=n=>({strike:n}),Ge=(()=>{class n{constructor(){this.todoDelete=new p,this.todoCheckbox=new p}onClick(t){this.todoDelete.emit(t),console.log("onClick has been triggered")}onCheckboxClick(t){this.todoCheckbox.emit(t)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=f({type:n,selectors:[["app-todo-item"]],inputs:{todo:"todo",i:"i"},outputs:{todoDelete:"todoDelete",todoCheckbox:"todoCheckbox"},standalone:!0,features:[m],decls:11,vars:15,consts:[[1,"my-3"],[1,"mb-3","form-check"],["type","checkbox",1,"form-check-input",3,"click","id","checked"],[1,"form-check-label",3,"for"],[1,"btn","btn-sm","btn-danger",3,"click"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"h5"),a(2),s(),o(3,"p"),a(4),s(),o(5,"div",1)(6,"input",2),h("click",function(){return r.onCheckboxClick(r.todo)}),s(),o(7,"label",3),a(8,"Done"),s()(),o(9,"button",4),h("click",function(){return r.onClick(r.todo)}),a(10,"Delete"),s()()),i&2&&(c(),ee(ae(11,Te,!r.todo.active)),c(),ie(r.todo.title),c(),ee(ae(13,Te,!r.todo.active)),c(),ie(r.todo.desc),c(2),ne("id","todo",r.i,""),b("checked",!r.todo.active),c(),ne("for","todo",r.i,""))},styles:[`body{font-family:Roboto,sans-serif;background:linear-gradient(135deg,#1f2c33,#3a4e5e);color:#f4f4f4;padding:40px 20px;min-height:100vh;margin:0}.my-3{background:linear-gradient(135deg,#48c6ef,#6f86d6);border-radius:12px;padding:20px;margin-bottom:20px;box-shadow:0 6px 15px #0003;color:#fff;transition:transform .3s ease,box-shadow .3s ease}.my-3:hover{transform:translateY(-5px);box-shadow:0 10px 25px #0000004d}.my-3 h5{font-family:Poppins,sans-serif;font-size:1.4rem;font-weight:600;margin-bottom:10px;color:#fff}.my-3 p{font-size:1.1rem;margin-bottom:12px;color:#f0f0f0}.strike{text-decoration:line-through;color:#b3b3b3;font-style:italic}.form-check-input{accent-color:#4caf50;width:20px;height:20px;cursor:pointer}.form-check-label{font-size:1rem;margin-left:10px;color:#f8f9fa;transition:color .3s ease}.form-check-input:checked+.form-check-label{color:#4caf50}.btn-danger{background:linear-gradient(135deg,#ff6a00,#ff4500);border:none;padding:10px 20px;border-radius:8px;color:#fff;font-family:Poppins,sans-serif;font-weight:700;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease}.btn-danger:hover{transform:scale(1.05);box-shadow:0 8px 12px #ff45004d}.btn-danger:active{transform:scale(.95)}@media (max-width: 768px){.my-3{padding:15px}.my-3 h5{font-size:1.2rem}.my-3 p{font-size:1rem}.btn-danger{font-size:1rem;padding:8px 16px}}
`],encapsulation:2})}}return n})();var ze=(()=>{class n{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(i){return new(i||n)(d(X),d(J))}}static{this.\u0275dir=g({type:n})}}return n})(),mt=(()=>{class n extends ze{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Ce(n)))(r||n)}})()}static{this.\u0275dir=g({type:n,features:[v]})}}return n})(),$e=new C("");var gt={provide:$e,useExisting:O(()=>W),multi:!0};function _t(){let n=le()?le().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var vt=new C(""),W=(()=>{class n extends ze{constructor(t,i,r){super(t,i),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!_t())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(i){return new(i||n)(d(X),d(J),d(vt,8))}}static{this.\u0275dir=g({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&h("input",function(u){return r._handleInput(u.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(u){return r._compositionEnd(u.target.value)})},features:[T([gt]),v]})}}return n})();var qe=new C(""),Ye=new C("");function Ze(n){return n!=null}function Je(n){return De(n)?ge(n):n}function Xe(n){let e={};return n.forEach(t=>{e=t!=null?_(_({},e),t):e}),Object.keys(e).length===0?null:e}function Ke(n,e){return e.map(t=>t(n))}function yt(n){return!n.validate}function Qe(n){return n.map(e=>yt(e)?e:t=>e.validate(t))}function Ct(n){if(!n)return null;let e=n.filter(Ze);return e.length==0?null:function(t){return Xe(Ke(t,e))}}function ue(n){return n!=null?Ct(Qe(n)):null}function bt(n){if(!n)return null;let e=n.filter(Ze);return e.length==0?null:function(t){let i=Ke(t,e).map(Je);return ve(i).pipe(_e(Xe))}}function ce(n){return n!=null?bt(Qe(n)):null}function je(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Vt(n){return n._rawValidators}function Dt(n){return n._rawAsyncValidators}function de(n){return n?Array.isArray(n)?n:[n]:[]}function R(n,e){return Array.isArray(n)?n.includes(e):n===e}function Re(n,e){let t=de(e);return de(n).forEach(r=>{R(t,r)||t.push(r)}),t}function Be(n,e){return de(e).filter(t=>!R(n,t))}var B=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ue(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ce(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},D=class extends B{get formDirective(){return null}get path(){return null}},S=class extends B{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},U=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Mt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Vn=y(_({},Mt),{"[class.ng-submitted]":"isSubmitted"}),et=(()=>{class n extends U{constructor(t){super(t)}static{this.\u0275fac=function(i){return new(i||n)(d(S,2))}}static{this.\u0275dir=g({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&Q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[v]})}}return n})(),tt=(()=>{class n extends U{constructor(t){super(t)}static{this.\u0275fac=function(i){return new(i||n)(d(D,10))}}static{this.\u0275dir=g({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&Q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[v]})}}return n})();var x="VALID",j="INVALID",V="PENDING",w="DISABLED";function nt(n){return(z(n)?n.validators:n)||null}function At(n){return Array.isArray(n)?ue(n):n||null}function it(n,e){return(z(e)?e.asyncValidators:n)||null}function Et(n){return Array.isArray(n)?ce(n):n||null}function z(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function xt(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new I(1e3,"");if(!i[t])throw new I(1001,"")}function wt(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new I(1002,"")})}var H=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===x}get invalid(){return this.status===j}get pending(){return this.status==V}get disabled(){return this.status===w}get enabled(){return this.status!==w}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Re(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Re(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Be(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Be(e,this._rawAsyncValidators))}hasValidator(e){return R(this._rawValidators,e)}hasAsyncValidator(e){return R(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=V,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(i=>{i.disable(y(_({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(y(_({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=x,this._forEachChild(i=>{i.enable(y(_({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(y(_({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===x||this.status===V)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:x}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;let t=Je(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new p,this.statusChanges=new p}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(j)?j:x}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=At(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Et(this._rawAsyncValidators)}},L=class extends H{constructor(e,t,i){super(nt(t),it(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){wt(this,!0,e),Object.keys(e).forEach(i=>{xt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,l)=>{i=t(i,r,l)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var he=new C("CallSetDisabledState",{providedIn:"root",factory:()=>fe}),fe="always";function Ft(n,e){return[...e.path,n]}function rt(n,e,t=fe){ot(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),It(n,e),Nt(n,e),Ot(n,e),St(n,e)}function Ue(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function St(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function ot(n,e){let t=Vt(n);e.validator!==null?n.setValidators(je(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=Dt(n);e.asyncValidator!==null?n.setAsyncValidators(je(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Ue(e._rawValidators,r),Ue(e._rawAsyncValidators,r)}function It(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&st(n,e)})}function Ot(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&st(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function st(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Nt(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function kt(n,e){n==null,ot(n,e)}function Pt(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Tt(n){return Object.getPrototypeOf(n.constructor)===mt}function Gt(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function jt(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(l=>{l.constructor===W?t=l:Tt(l)?i=l:r=l}),r||i||t||null}var Rt={provide:D,useExisting:O(()=>pe)},F=Promise.resolve(),pe=(()=>{class n extends D{constructor(t,i,r){super(),this.callSetDisabledState=r,this.submitted=!1,this._directives=new Set,this.ngSubmit=new p,this.form=new L({},ue(t),ce(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){F.then(()=>{let i=this._findContainer(t.path);t.control=i.registerControl(t.name,t.control),rt(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){F.then(()=>{let i=this._findContainer(t.path);i&&i.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){F.then(()=>{let i=this._findContainer(t.path),r=new L({});kt(r,t),i.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){F.then(()=>{let i=this._findContainer(t.path);i&&i.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){F.then(()=>{this.form.get(t.path).setValue(i)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,Gt(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static{this.\u0275fac=function(i){return new(i||n)(d(qe,10),d(Ye,10),d(he,8))}}static{this.\u0275dir=g({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&h("submit",function(u){return r.onSubmit(u)})("reset",function(){return r.onReset()})},inputs:{options:[M.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[T([Rt]),v]})}}return n})();function He(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Le(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Bt=class extends H{constructor(e=null,t,i){super(nt(t),it(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Le(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){He(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){He(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Le(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ut={provide:S,useExisting:O(()=>me)},We=Promise.resolve(),me=(()=>{class n extends S{constructor(t,i,r,l,u,q){super(),this._changeDetectorRef=u,this.callSetDisabledState=q,this.control=new Bt,this._registered=!1,this.name="",this.update=new p,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=jt(this,l)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Pt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){rt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){We.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&Ae(i);We.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Ft(t,this._parent):[t]}static{this.\u0275fac=function(i){return new(i||n)(d(D,9),d(qe,10),d(Ye,10),d($e,10),d(Me,8),d(he,8))}}static{this.\u0275dir=g({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[M.None,"disabled","isDisabled"],model:[M.None,"ngModel","model"],options:[M.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[T([Ut]),v,ye]})}}return n})(),at=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275dir=g({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return n})();var Ht=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=Z({type:n})}static{this.\u0275inj=Y({})}}return n})();var $=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:he,useValue:t.callSetDisabledState??fe}]}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=Z({type:n})}static{this.\u0275inj=Y({imports:[Ht]})}}return n})();var lt=(()=>{class n{constructor(){this.title="",this.desc="",this.todoAdd=new p}onSubmit(){let t={sno:8,title:this.title,desc:this.desc,active:!0};this.todoAdd.emit(t)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=f({type:n,selectors:[["app-add-todo"]],outputs:{todoAdd:"todoAdd"},standalone:!0,features:[m],decls:14,vars:2,consts:[[1,"my-3"],[3,"ngSubmit"],[1,"form-group"],["for","title"],["type","text","id","title","name","title","aria-describedby","emailHelp",1,"form-control",3,"ngModelChange","ngModel"],[1,"mb-3"],["for","desc"],["type","text","id","desc","name","desc",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-sm","btn-primary"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"h4"),a(2,"Add a Todo"),s(),o(3,"form",1),h("ngSubmit",function(){return r.onSubmit()}),o(4,"div",2)(5,"label",3),a(6,"Todo Title"),s(),o(7,"input",4),se("ngModelChange",function(u){return oe(r.title,u)||(r.title=u),u}),s()(),o(8,"div",5)(9,"label",6),a(10,"Todo Description"),s(),o(11,"input",7),se("ngModelChange",function(u){return oe(r.desc,u)||(r.desc=u),u}),s()(),o(12,"button",8),a(13,"Add Todo"),s()()()),i&2&&(c(7),re("ngModel",r.title),c(4),re("ngModel",r.desc))},dependencies:[G,$,at,W,et,tt,me,pe],styles:[`body{font-family:Roboto,sans-serif;background:linear-gradient(135deg,#1f2c33,#3a4e5e);color:#f4f4f4;padding:20px;margin:0;min-height:100vh}.my-3{background:#2c3e50;border-radius:12px;padding:25px;box-shadow:0 4px 12px #00000026;transition:all .3s ease}.my-3:hover{transform:translateY(-5px);box-shadow:0 8px 18px #0003}.my-3 h4{font-family:Poppins,sans-serif;font-size:1.6rem;font-weight:600;color:#fff;margin-bottom:15px;text-align:center}.form-group label{font-size:1.1rem;color:#f8f9fa;font-weight:500}.form-control{border-radius:8px;background:#34495e;color:#fff;padding:10px;font-size:1rem;border:1px solid #2c3e50;margin-bottom:15px;transition:all .3s ease}.form-control:focus{background:#1abc9c;border-color:#16a085;outline:none}.btn-primary{background:linear-gradient(135deg,#3498db,#2980b9);border:none;padding:12px 25px;font-size:1.1rem;color:#fff;border-radius:8px;cursor:pointer;transition:transform .3s ease,box-shadow .3s ease;margin-top:10px}.btn-primary:hover{transform:translateY(-3px);box-shadow:0 6px 15px #0003}.btn-primary:active{transform:translateY(1px)}@media (max-width: 768px){.my-3{padding:20px}.my-3 h4{font-size:1.3rem}.form-control{font-size:.9rem}.btn-primary{font-size:1rem;padding:10px 20px}}
`],encapsulation:2})}}return n})();function Wt(n,e){n&1&&(o(0,"div"),a(1,"No Todos to display"),s())}function zt(n,e){if(n&1){let t=te();o(0,"div")(1,"app-todo-item",6),h("todoDelete",function(r){N(t);let l=P(2);return k(l.deleteTodo(r))})("todoCheckbox",function(r){N(t);let l=P(2);return k(l.toggleTodo(r))}),s()()}if(n&2){let t=e.$implicit,i=e.index;c(),b("todo",t)("i",i)}}function $t(n,e){if(n&1&&K(0,zt,2,2,"div",5),n&2){let t=P();b("ngForOf",t.todos)}}var dt=(()=>{class n{constructor(){this.isLocalStorageAvailable()?this.localItem=localStorage.getItem("todos"):this.localItem=null,this.localItem===null?this.todos=[]:this.todos=JSON.parse(this.localItem)}ngOnInit(){}deleteTodo(t){console.log(t);let i=this.todos.indexOf(t);i!==-1&&(this.todos.splice(i,1),this.updateLocalStorage())}addTodo(t){console.log(t),this.todos.push(t),this.updateLocalStorage()}toggleTodo(t){console.log(t);let i=this.todos.indexOf(t);this.todos[i].active=!this.todos[i].active,localStorage.setItem("todos",JSON.stringify(this.todos))}updateLocalStorage(){this.isLocalStorageAvailable()&&localStorage.setItem("todos",JSON.stringify(this.todos))}isLocalStorageAvailable(){try{return typeof localStorage<"u"}catch{return!1}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=f({type:n,selectors:[["app-todos"]],standalone:!0,features:[m],decls:9,vars:2,consts:[["elseBlock",""],[1,"container"],[1,"text-center","mb-3"],[3,"todoAdd"],[4,"ngIf","ngIfElse"],[4,"ngFor","ngForOf"],[3,"todoDelete","todoCheckbox","todo","i"]],template:function(i,r){if(i&1){let l=te();o(0,"div",1)(1,"h1",2),a(2,"Todo List by Puja"),s(),o(3,"app-add-todo",3),h("todoAdd",function(q){return N(l),k(r.addTodo(q))}),s(),o(4,"h4"),a(5,"Your Todos"),s(),K(6,Wt,2,0,"div",4)(7,$t,1,1,"ng-template",null,0,Ve),s()}if(i&2){let l=be(8);c(6),b("ngIf",r.todos.length===0)("ngIfElse",l)}},dependencies:[G,xe,we,Ge,lt],encapsulation:2})}}return n})();var ut=(()=>{class n{constructor(){this.title="cwh-todo-list"}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=f({type:n,selectors:[["app-root"]],standalone:!0,features:[m],decls:16,vars:0,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["routerLink","/",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","routerLink","/",1,"nav-link","active"],["routerLink","/about",1,"nav-link"],[1,"container"]],template:function(i,r){i&1&&(o(0,"nav",0)(1,"div",1)(2,"a",2),a(3,"Todos-List"),s(),o(4,"button",3),A(5,"span",4),s(),o(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),a(10,"Home"),s()(),o(11,"li",7)(12,"a",9),a(13,"About"),s()()()()()(),o(14,"div",10),A(15,"router-outlet"),s())},dependencies:[Oe,$,Pe,Ne],styles:[`body[_ngcontent-%COMP%]{margin:0;font-family:Poppins,sans-serif;background:linear-gradient(135deg,#a2d2ff,#89f7fe);min-height:100vh;display:flex;flex-direction:column;justify-content:flex-start;color:#333}.navbar[_ngcontent-%COMP%]{background:linear-gradient(90deg,#4facfe,#00f2fe);box-shadow:0 4px 12px #00000026;padding:15px 30px;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:1000;transition:background .3s ease}.navbar[_ngcontent-%COMP%]:hover{background:linear-gradient(90deg,#6a11cb,#2575fc)}.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:1px;transition:color .3s ease}.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover{color:#ffe082;text-decoration:none}.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size:1rem;color:#fff;font-weight:500;text-transform:capitalize;padding:0 10px;position:relative;transition:color .3s ease,transform .3s ease}.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{color:#ffe082;transform:translateY(-3px)}.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:after{content:"";display:block;width:0;height:2px;background-color:#ffe082;transition:width .3s ease;margin-top:5px}.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover:after{width:100%}.navbar-toggler[_ngcontent-%COMP%]{border:none;background:#ffffff4d;padding:5px 10px;border-radius:5px;transition:background .3s ease}.navbar-toggler[_ngcontent-%COMP%]:hover{background:#ffffff80}.navbar-toggler-icon[_ngcontent-%COMP%]{background-image:url('data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" fill="%23ffffff" viewBox="0 0 30 30"%3e%3cpath stroke="rgba(255, 255, 255, 1)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"/%3e%3c/svg%3e')}.container[_ngcontent-%COMP%]{margin-top:20px;padding:20px;background:linear-gradient(135deg,#fff,#f3f4f6);color:#333;box-shadow:0 8px 20px #0000001a;border-radius:15px;animation:_ngcontent-%COMP%_fadeIn 1s ease-in-out;width:auto;max-width:none}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 768px){.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{font-size:1.5rem}.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size:.9rem}.container[_ngcontent-%COMP%]{padding:20px}}`]})}}return n})();var ct=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=f({type:n,selectors:[["app-about"]],standalone:!0,features:[m],decls:32,vars:0,consts:[[1,"about-container"],[1,"about-content"],[1,"tagline"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"div",1)(2,"h1"),a(3,"About Todos-List"),s(),o(4,"p",2),a(5," A simple yet effective way to manage your tasks and boost your productivity. "),s(),o(6,"p"),a(7," Welcome to the "),o(8,"strong"),a(9,"Todos-List"),s(),a(10," application! This platform is designed to help you stay organized and focused. Add, mark, or delete your tasks with ease and never miss out on important things in your day-to-day life. "),s(),o(11,"p"),a(12," Whether you're a student, a professional, or just someone looking to stay on top of their to-dos, this app has got you covered! "),s(),A(13,"hr"),o(14,"h2"),a(15,"Features"),s(),o(16,"ul")(17,"li"),a(18,"Simple and intuitive UI for easy task management"),s(),o(19,"li"),a(20,"Mark tasks as done with a single click"),s(),o(21,"li"),a(22,"Delete tasks once completed"),s(),o(23,"li"),a(24,"Built with Angular for a seamless experience"),s()(),o(25,"h2"),a(26,"Why Use Todos-List?"),s(),o(27,"p")(28,"em"),a(29,'"Efficiency is doing things right; effectiveness is doing the right things." \u2014 Peter Drucker'),s()(),o(30,"p"),a(31," This app helps you focus on what truly matters by keeping your tasks organized and prioritized. "),s()()())},styles:[".about-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:100vh;background:linear-gradient(135deg,#3498db,#2980b9);padding:20px}.about-content[_ngcontent-%COMP%]{background:#fffffff2;box-shadow:0 10px 30px #0003;border-radius:15px;padding:40px;max-width:700px;text-align:center;transition:all .3s ease}.about-content[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.about-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-size:2.8rem;color:#2c3e50;margin-bottom:20px}.about-content[_ngcontent-%COMP%]   .tagline[_ngcontent-%COMP%]{font-size:1.3rem;color:#3498db;margin-bottom:25px;font-style:italic}.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1rem;color:#2c3e50;line-height:1.8;margin:15px 0;text-align:justify}.about-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0}.about-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:#ecf0f1;padding:12px;margin:8px 0;border-radius:8px;color:#2c3e50;font-size:1rem;transition:background .3s ease}.about-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#d5dbdb}.about-content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:25px 0;border:1px solid #D5DBDB}"]})}}return n})();var ht=[{path:"",component:dt},{path:"about",component:ct}];var ft={providers:[ke(ht),Se()]};var qt={providers:[Ie()]},pt=Ee(ft,qt);var Yt=()=>Fe(ut,pt),si=Yt;export{si as a};