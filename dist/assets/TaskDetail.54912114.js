var ze=Object.defineProperty;var Ce=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var xe=(F,t,f)=>t in F?ze(F,t,{enumerable:!0,configurable:!0,writable:!0,value:f}):F[t]=f,he=(F,t)=>{for(var f in t||(t={}))Oe.call(t,f)&&xe(F,f,t[f]);if(Ce)for(var f of Ce(t))Me.call(t,f)&&xe(F,f,t[f]);return F};import{_ as X,u as Z,r as b,o as k,c as $,w as a,a as e,b as V,t as R,d as j,Q as M,e as ge,f as x,g as Le,h,i as ue,j as Ye,k as oe,l as C,m as G,n as we,p as B,q as me,s as _e,v as He,x as J,C as se,y as Ke,z as Te,A as u,B as pe,D as ke,E as We,F as ye,G as Je,H as be,I as ie,J as Fe,K as Q,L as Ve,M as Ee,N as Ge,O as $e,P as qe,R as Xe,S as Se,T as ae,U as O,V as Ze,W as Ue,X as L,Y as te,Z as et,$ as tt,a0 as lt,a1 as at,a2 as ut,a3 as De,a4 as ot,a5 as ce,a6 as st,a7 as Ae,a8 as Be}from"./index.ef3a0838.js";import{u as rt}from"./index.fdb4cf18.js";import{C as re}from"./Confirm.90fefe4f.js";import{a as nt,f as ne}from"./datetime.561112b0.js";import{T as le}from"./task.f3ffd066.js";import{J as Pe}from"./JSONViewer.caf10598.js";import{G as it}from"./log.44b0106a.js";import{t as dt,b as ct}from"./thumbStyle.856de4cb.js";const mt=V("br",null,null,-1),pt=V("br",null,null,-1),ft=j(" \u63D0\u4EA4 "),vt={props:{projectId:{type:Number,required:!0},clientIp:{type:String,required:!0},version:{type:String,required:!0},weight:{type:Number,required:!0},region:{type:String,required:!0}},setup(F){const t=F,f=Z(),w=b(t.weight),y=b(!1);async function d(){y.value=!0;const i=t.clientIp.split(":")[0];try{await Ye(t.projectId,i,Number(w.value)),await f.dispatch("Project/fetchProjectClients",{projectId:t.projectId}),f.commit("success",{message:"\u4FEE\u6539\u6210\u529F"})}catch(l){console.error(l)}y.value=!1}return(i,l)=>(k(),$(ue,{flat:"",bordered:""},{default:a(()=>[e(M,{class:"text-center"},{default:a(()=>[V("strong",null,R(F.clientIp),1),mt,j(" "+R(F.region)+" ",1),pt,j(" "+R(F.version),1)]),_:1}),e(ge),e(M,{class:"flex flex-center"},{default:a(()=>[e(x,{modelValue:w.value,"onUpdate:modelValue":l[0]||(l[0]=T=>w.value=T),outlined:"",dense:"",type:"number",prefix:"\u6743\u91CD\uFF1A",onKeyup:Le(d,["enter"])},{append:a(()=>[e(h,{dense:"",unelevated:"",loading:y.value,onClick:d},{default:a(()=>[ft]),_:1},8,["loading"])]),_:1},8,["modelValue","onKeyup"])]),_:1})]),_:1}))}};var wt=X(vt,[["__file","/Users/boyan/development/opensource/gopherCronFE/src/components/ClientNode.vue"]]);const gt=V("div",{class:"text-h6"},"\u521B\u5EFA\u4EFB\u52A1",-1),kt=V("div",{class:"text-base"}," \u4E34\u65F6\u4EFB\u52A1\u540C\u6837\u4F1A\u4E0E\u6B63\u5F0F\u7684\u5B9A\u65F6\u4EFB\u52A1\u7ADE\u4E89\u76F8\u540C\u7684\u9501\uFF0C\u8BF7\u907F\u514D\u8C03\u5EA6\u51B2\u7A81(\u6307\u8FD0\u884C\u65F6\u95F4\u6709\u4EA4\u96C6) ",-1),yt={class:"tw-flex tw-gap-2 tw-justify-end tw-mb-2"},bt={class:"row items-center justify-end"},Ft={class:"row items-center justify-end"},Et=oe({props:{modelValue:{type:Boolean,default:!1},task:{type:Object,default:()=>({})}},emits:["update:modelValue","created"],setup(F,{emit:t}){const f=F,w=C({get:()=>f.modelValue,set:s=>{t("update:modelValue",s),l.value=""}}),y=C(()=>{const s=[{value:"",label:"\u968F\u673A"}],n=d.state.Project.projectClients.get(f.task.projectId);return n&&n.forEach((v,N,A)=>{const D=v.clientIP;s.push({value:D,label:D})}),s}),d=Z(),i=b({taskId:f.task.id,projectId:f.task.projectId,command:f.task.command,remark:f.task.remark,noseize:f.task.noseize,scheduleTime:0,timeout:f.task.timeout,host:""}),l=b("");function T(s){l.value=nt(s*60,"YYYY-MM-DD HH:mm")}G(()=>{we(()=>{w.value&&(i.value=Object.assign({},{taskId:f.task.id,projectId:f.task.projectId,command:f.task.command,remark:f.task.remark,noseize:f.task.noseize,scheduleTime:0,timeout:f.task.timeout,host:""}))})});const U=b(!1);async function _(){const s=i.value;if(!s.remark){d.commit("error",{error:{message:"\u4EFB\u52A1\u8BF4\u660E\u5FC5\u586B"}});return}if(!s.command){d.commit("error",{error:{message:"\u6267\u884C\u547D\u4EE4\u5FC5\u586B"}});return}U.value=!0;try{const n=await Je({projectId:s.projectId,taskId:s.taskId,command:s.command,noseize:s.noseize,scheduleTime:Date.parse(l.value)/1e3,remark:s.remark,timeout:s.timeout,host:s.host});n.code!==0?d.commit("error",{error:{message:n.message}}):(d.commit("success",{message:"\u521B\u5EFA\u6210\u529F"}),w.value=!1,t("created"))}catch{}U.value=!1}return(s,n)=>(k(),$(ye,{modelValue:u(w),"onUpdate:modelValue":n[11]||(n[11]=v=>We(w)?w.value=v:null),persistent:""},{default:a(()=>[e(ue,{class:"tw-w-96 q-pa-sm"},{default:a(()=>[e(M,null,{default:a(()=>[gt,kt]),_:1}),e(M,{style:{"max-height":"50vh"},class:"scroll"},{default:a(()=>[F.task?(k(),$(x,{key:"id","model-value":F.task.id,disable:"",label:"\u5173\u8054\u4EFB\u52A1 ID",square:"",filled:"",class:"tw-mb-4"},null,8,["model-value"])):B("v-if",!0),e(x,{key:"remark",modelValue:i.value.remark,"onUpdate:modelValue":n[0]||(n[0]=v=>i.value.remark=v),type:"textarea",label:"\u4EFB\u52A1\u8BF4\u660E *",autogrow:"",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),V("div",yt,[e(h,{dense:"",unelevated:"",class:"tw-text-xs tw-h-6 tw-px-3",color:"warning","text-color":"black",label:"\u4E00\u5206\u949F\u540E",onClick:n[1]||(n[1]=v=>T(1))}),e(h,{dense:"",unelevated:"",class:"tw-text-xs tw-h-6 tw-px-3",color:"warning","text-color":"black",label:"\u4E94\u5206\u949F\u540E",onClick:n[2]||(n[2]=v=>T(5))}),e(h,{dense:"",unelevated:"",class:"tw-text-xs tw-h-6 tw-px-3",color:"warning","text-color":"black",label:"\u4E00\u5C0F\u65F6\u540E",onClick:n[3]||(n[3]=v=>T(60))})]),e(x,{modelValue:l.value,"onUpdate:modelValue":n[6]||(n[6]=v=>l.value=v),filled:"",square:"",label:"\u8C03\u5EA6\u65F6\u95F4 *",class:"tw-mb-4"},{prepend:a(()=>[e(me,{name:"event",class:"cursor-pointer"},{default:a(()=>[e(_e,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:a(()=>[e(He,{modelValue:l.value,"onUpdate:modelValue":n[4]||(n[4]=v=>l.value=v),"text-color":"black",mask:"YYYY-MM-DD HH:mm"},{default:a(()=>[V("div",bt,[J(e(h,{label:"\u5173\u95ED",color:"primary",flat:""},null,512),[[se,!0]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),append:a(()=>[e(me,{name:"access_time",class:"cursor-pointer"},{default:a(()=>[e(_e,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:a(()=>[e(Ke,{modelValue:l.value,"onUpdate:modelValue":n[5]||(n[5]=v=>l.value=v),mask:"YYYY-MM-DD HH:mm","text-color":"black",format24h:""},{default:a(()=>[V("div",Ft,[J(e(h,{label:"\u5173\u95ED",color:"primary",flat:""},null,512),[[se,!0]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(x,{key:"timeout",modelValue:i.value.timeout,"onUpdate:modelValue":n[7]||(n[7]=v=>i.value.timeout=v),modelModifiers:{number:!0},type:"number",label:"\u8D85\u65F6\u65F6\u95F4 * (\u5355\u4F4D:\u79D2 s)",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(x,{key:"command",modelValue:i.value.command,"onUpdate:modelValue":n[8]||(n[8]=v=>i.value.command=v),placeholder:'echo "hello word"',type:"textarea",label:"\u6267\u884C\u6307\u4EE4 *",autogrow:"",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(Te,{modelValue:i.value.host,"onUpdate:modelValue":n[9]||(n[9]=v=>i.value.host=v),"emit-value":"","map-options":"",autogrow:"",square:"",filled:"",label:"\u6267\u884C\u8282\u70B9",options:u(y),class:"tw-mb-4"},null,8,["modelValue","options"]),e(pe,{key:"noseize",modelValue:i.value.noseize,"onUpdate:modelValue":n[10]||(n[10]=v=>i.value.noseize=v),"false-value":0,"true-value":1,label:"\u5E76\u884C\u8C03\u5EA6",class:"tw-mb-4"},null,8,["modelValue"])]),_:1}),e(ke,{align:"right",class:"tw-flex tw-gap-2 tw-flex-col-reverse lg:tw-flex-row tw-justify-center lg:tw-justify-end"},{default:a(()=>[J(e(h,{flat:"",label:"\u53D6\u6D88",class:"lg:tw-w-24 tw-w-full"},null,512),[[se,!0]]),e(h,{color:"primary","text-color":"black",label:"\u521B\u5EFA",class:"lg:tw-w-24 tw-w-full !tw-ml-0",loading:U.value,onClick:_},null,8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});var Qe=X(Et,[["__file","/Users/boyan/development/opensource/gopherCronFE/src/components/DialogTemporaryTaskForm.vue"]]);const jt={class:"tw-h-full tw-w-full tw-flex tw-flex-col"},It={key:0,class:"tw-flex tw-flex-row-reverse tw-pb-3 tw-flex-wrap tw-gap-2"},Ct=j("\u7ED3\u675F\u8FDB\u7A0B"),xt=j("\u7ACB\u5373\u6267\u884C"),ht=j("\u4E34\u65F6\u8C03\u5EA6 "),_t=j(" \u6307\u5B9A\u65F6\u95F4\u8C03\u5EA6\u4E00\u6B21\u7684\u4EFB\u52A1 "),Vt=j("\u590D\u5236\u4EFB\u52A1 "),Dt=j(" \u4EE5\u5F53\u524D\u4EFB\u52A1\u5185\u5BB9\u4E3A\u57FA\u7840\u8FDB\u884C\u65B0\u4EFB\u52A1\u7684\u521B\u5EFA "),At={key:1,class:"tw-flex tw-pb-3 tw-flex-wrap tw-gap-2 text-h6"},Bt={class:"q-pa-sm"},Tt=oe({props:{id:{type:String,default:""},projectId:{type:Number,required:!0}},setup(F){const t=F;function f(){q.push({name:"temporary_tasks",params:{projectId:t.projectId}})}const w=C(()=>({id:"",name:"",projectId:t.projectId,command:"",cronExpr:"0 0 0 * * * *",remark:"",timeout:300,createTime:0,status:0,isRunning:-1,noseize:0,exclusion:0,clientIp:"",tmpId:""}));function y(m,r){return!m||!r?!1:m.projectId===r.projectId&&m.name===r.name&&m.cronExpr===r.cronExpr&&m.remark===r.remark&&m.timeout===r.timeout&&m.status===r.status&&m.noseize===r.noseize&&m.command===r.command}const d=Z(),i=be(),l=C(()=>{var m;return(m=d.state.Task.tasks.get(t.projectId))==null?void 0:m.find(r=>r.id===t.id||r.id===i.query.copyid)}),T=C(()=>d.state.Project.projects.find(m=>m.id===t.projectId)),U=b([]);function _(m){const r=[];m==null||m.forEach((P,W,ve)=>{r.push({value:P.id,label:P.title})}),U.value=r}d.state.Project.projects&&d.state.Project.projects.length>0&&_(d.state.Project.projects),ie(()=>d.state.Project.projects,(m,r)=>{_(r)});const s=b(Object.assign({},l.value||w.value)),n=C(()=>i.name&&i.name.toString()==="create_crontab_task"),v=C(()=>i.query.copyid&&i.query.copyid!=="");n.value&&(s.value.id="",s.value.isRunning=-1),ie(()=>t.id,(m,r)=>{var P;(t.id!==((P=l.value)==null?void 0:P.id)||!n.value&&s.value.id===""||s.value.id!==l.value.id)&&(s.value=Object.assign({},l.value||w.value)),s.value.isRunning=-1});const N=C(()=>{var m;return((m=l.value)==null?void 0:m.isRunning)===1?!1:!y(l.value,s.value)}),A=C(()=>{const{name:m,command:r,timeout:P,cronExpr:W}=s.value;return m!==""&&r!==""&&P>0&&W!==""}),D=C(()=>{const{name:m,command:r,timeout:P,cronExpr:W}=s.value;return m===""?"\u4EFB\u52A1\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A":r===""?"\u6267\u884C\u6307\u4EE4\u4E0D\u80FD\u4E3A\u7A7A":P<=0?"\u8D85\u65F6\u65F6\u95F4\u672A\u6307\u5B9A":W===""?"\u8C03\u5EA6\u8BA1\u5212\u672A\u6307\u5B9A":""});async function z(){await d.dispatch("Task/fetchTasks",{projectId:t.projectId})}const q=Fe(),I=b(!1);async function p(){if(d.commit("cleanError"),!A.value){d.commit("error",{error:{message:D.value}});return}I.value=!0,(n.value||v.value)&&(s.value.id="");try{const m=await d.dispatch("saveTask",{task:JSON.parse(JSON.stringify(s.value))});n.value&&(await z(),q.push({name:"crontab_task",params:{projectId:s.value.projectId,taskId:m.id}}))}catch{}I.value=!1}function c(){s.value=Object.assign({},l.value||w.value)}const o=b(!1),g=b(!1);async function H(m,r){d.commit("cleanError"),g.value=!0,console.log("delete loading",g.value);try{await d.dispatch("deleteTask",{projectId:m,taskId:r}),d.state.Root.currentError===void 0&&(await z(),q.push({name:"crontab_tasks",params:{projectId:i.params.projectId}}),o.value=!1)}catch(P){console.error(P),d.commit("error",{error:P})}g.value=!1}const Y=b(!1),K=b(!1);async function de(m,r){K.value=!1,Y.value=!0;try{await Ge(d.getters.apiv1,m,r)}catch{Y.value=!1}}G(()=>{d.watch(m=>[m.Root.eventTask],([m])=>{!m||m.projectId!==t.projectId||m.taskId!==t.id||le.isFinished(m.status)&&(Y.value=!1)})});const ee=b(!1),S=b(!1),Re=async()=>{S.value=!1,ee.value=!0;try{await $e({projectId:t.projectId,taskId:t.id}),await z(),s.value.status=0}catch(m){console.error(m),d.commit("error",{error:m})}ee.value=!1},fe=b(!1);function Ne(){var m;q.push({name:"create_crontab_task",query:{copyid:(m=l.value)==null?void 0:m.id}})}return(m,r)=>{var P,W,ve,je,Ie;return k(),Q("div",jt,[e(Qe,{modelValue:fe.value,"onUpdate:modelValue":r[0]||(r[0]=E=>fe.value=E),task:u(l),onCreated:f},null,8,["modelValue","task"]),e(re,{modelValue:o.value,"onUpdate:modelValue":r[1]||(r[1]=E=>o.value=E),content:"\u662F\u5426\u8981\u5220\u9664\u4EFB\u52A1"+((P=u(l))==null?void 0:P.name)+"?",type:"warning",loading:g.value,onConfirm:r[2]||(r[2]=E=>u(T)&&u(l)&&H(u(T).id,u(l).id))},null,8,["modelValue","content","loading"]),e(re,{modelValue:S.value,"onUpdate:modelValue":r[3]||(r[3]=E=>S.value=E),content:"\u786E\u5B9A\u8981\u7ED3\u675F\u8FDB\u7A0B\u5417\uFF1F\u5F3A\u5236\u7ED3\u675F\u540E\u4EFB\u52A1\u7684\u542F\u7528\u72B6\u6001\u4F1A\u81EA\u52A8\u53D8\u66F4\u4E3A\u505C\u7528\u72B6\u6001\u3002",type:"warning",onConfirm:Re},null,8,["modelValue"]),e(re,{modelValue:K.value,"onUpdate:modelValue":r[4]||(r[4]=E=>K.value=E),content:"\u786E\u5B9A\u8981\u7ACB\u5373\u6267\u884C\u5417\uFF1F",onConfirm:r[5]||(r[5]=E=>u(l)&&de(F.projectId,u(l).id))},null,8,["modelValue"]),u(n)?B("v-if",!0):(k(),Q("div",It,[e(h,{flat:"",dense:"",class:"tw-w-24 tw-text-red-300 lg:tw-hidden",icon:"delete",onClick:r[6]||(r[6]=E=>o.value=!0)}),((W=u(l))==null?void 0:W.isRunning)===1?(k(),$(h,{key:0,flat:"","text-color":"red",disable:((ve=u(l))==null?void 0:ve.isRunning)!==1,class:"tw-w-24 tw-ml-1",loading:ee.value,onClick:r[7]||(r[7]=E=>S.value=!0)},{default:a(()=>[Ct]),_:1},8,["disable","loading"])):B("v-if",!0),e(h,{color:"primary","text-color":"black",disable:u(N)||((je=u(l))==null?void 0:je.isRunning)===1,class:"tw-w-24",loading:Y.value||((Ie=u(l))==null?void 0:Ie.isRunning)===1,onClick:r[8]||(r[8]=E=>K.value=!0)},{default:a(()=>[xt]),_:1},8,["disable","loading"]),e(h,{color:"warning","text-color":"black",class:"tw-w-24 tw-opacity-90",onClick:r[9]||(r[9]=E=>fe.value=!0)},{default:a(()=>[ht,e(Ve,{class:"bg-warning tw-text-black",offset:[10,10]},{default:a(()=>[_t]),_:1})]),_:1}),e(h,{outline:"",class:"tw-w-24 tw-opacity-90",onClick:Ne},{default:a(()=>[Vt,e(Ve,{class:"bg-warning tw-text-black",offset:[10,10]},{default:a(()=>[Dt]),_:1})]),_:1})])),u(v)?(k(),Q("div",At," \u590D\u5236\u4EFB\u52A1 ")):B("v-if",!0),e(Ee,{class:"tw-w-full",onSubmit:p,onReset:c},{default:a(()=>[u(l)&&!u(n)?(k(),$(x,{key:"id","model-value":u(l).id,disable:"",label:"\u4EFB\u52A1 ID",square:"",filled:"",class:"tw-mb-4"},null,8,["model-value"])):B("v-if",!0),u(n)?(k(),$(Te,{key:1,modelValue:s.value.projectId,"onUpdate:modelValue":r[10]||(r[10]=E=>s.value.projectId=E),square:"",filled:"",class:"tw-w-full tw-mb-4","emit-value":"","map-options":"",label:"\u6240\u5C5E\u9879\u76EE",placeholder:"\u8BF7\u9009\u62E9\u9879\u76EE",options:U.value},null,8,["modelValue","options"])):(k(),$(x,{key:"project","model-value":u(T)?u(T).title:"",disable:"",label:"\u6240\u5C5E\u9879\u76EE",square:"",filled:"",class:"tw-mb-4"},null,8,["model-value"])),e(x,{key:"name",modelValue:s.value.name,"onUpdate:modelValue":r[11]||(r[11]=E=>s.value.name=E),label:"\u4EFB\u52A1\u540D\u79F0",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(x,{key:"cron",modelValue:s.value.cronExpr,"onUpdate:modelValue":r[12]||(r[12]=E=>s.value.cronExpr=E),label:"\u8C03\u5EA6\u8BA1\u5212 (*\u79D2 *\u5206 *\u65F6 *\u65E5 *\u6708 *\u5468 *\u5E74)",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(x,{key:"timeout",modelValue:s.value.timeout,"onUpdate:modelValue":r[13]||(r[13]=E=>s.value.timeout=E),modelModifiers:{number:!0},type:"number",label:"\u8D85\u65F6\u65F6\u95F4 (\u5355\u4F4D:\u79D2 s)",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(x,{key:"command",modelValue:s.value.command,"onUpdate:modelValue":r[14]||(r[14]=E=>s.value.command=E),placeholder:'echo "hello word"',type:"textarea",label:"\u6267\u884C\u6307\u4EE4",autogrow:"",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(x,{key:"remark",modelValue:s.value.remark,"onUpdate:modelValue":r[15]||(r[15]=E=>s.value.remark=E),type:"textarea",label:"\u4EFB\u52A1\u5907\u6CE8",autogrow:"",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(pe,{key:"noseize",modelValue:s.value.noseize,"onUpdate:modelValue":r[16]||(r[16]=E=>s.value.noseize=E),"false-value":0,"true-value":1,label:"\u5E76\u884C\u8C03\u5EA6",class:"tw-mb-4"},null,8,["modelValue"]),e(pe,{key:"status",modelValue:s.value.status,"onUpdate:modelValue":r[17]||(r[17]=E=>s.value.status=E),"false-value":0,"true-value":1,label:"\u662F\u5426\u542F\u7528",class:"tw-mb-4"},null,8,["modelValue"]),V("div",Bt,[e(h,{color:"primary","text-color":"black",type:"submit",label:u(v)?"\u786E\u8BA4\u590D\u5236":"\u4FDD\u5B58",disable:!u(N),loading:I.value,class:"lg:tw-w-24 tw-w-full lg:tw-mr-4 lg:tw-mb-0 tw-mb-4"},null,8,["label","disable","loading"]),e(h,{color:"primary",type:"reset",label:"\u91CD\u7F6E",flat:"",disable:!u(N),class:"lg:tw-w-24 tw-w-full"},null,8,["disable"])])]),_:1})])}}});var $t=X(Tt,[["__file","/Users/boyan/development/opensource/gopherCronFE/src/components/TaskDetail.vue"]]);const qt=j("\u8282\u70B9 IP"),St=j("\u5F00\u59CB\u65F6\u95F4"),Ut=j("\u7ED3\u675F\u65F6\u95F4"),Pt=oe({props:{id:{type:String,required:!0},projectId:{type:Number,required:!0}},emits:["onpage"],setup(F,{emit:t}){const f=F,w=Z(),y=C(()=>w.state.Root.taskLogs),d=C(()=>w.state.Root.taskLogsTotal),i=C(()=>w.state.Root.loadingTaskLogs),l=b({sortBy:"",descending:!1,page:1,rowsPerPage:5,rowsNumber:0}),T=b();G(()=>{qe(()=>{var _;(_=T.value)==null||_.$el.querySelector("table.q-table").classList.add("tw-table-fixed")})});function U({pagination:{page:_,rowsPerPage:s}}){const n=l.value;n.page=_,n.rowsPerPage=s,t("onpage")}return we(()=>{const _=l.value;_.rowsNumber=d.value}),G(async()=>{we(async()=>{const _=l.value;await w.dispatch("fetchTaskLogs",{projectId:f.projectId,taskId:f.id,page:_.page,pageSize:_.rowsPerPage})})}),(_,s)=>(k(),$(u(Ze),{ref_key:"logTable",ref:T,pagination:l.value,"onUpdate:pagination":s[0]||(s[0]=n=>l.value=n),class:"tw-w-full tw-h-full tw-bg-[#121212]","rows-per-page-options":[5,10,15],rows:u(y),loading:u(i),"row-key":"id",color:"primary",flat:"","hide-header":"",onRequest:U},{loading:a(()=>[e(Xe,{showing:"",color:"primary"})]),body:a(n=>[e(ue,{class:"tw-my-4 tw-x-full",flat:"",bordered:""},{default:a(()=>[e(Se,null,{default:a(()=>[e(ae,null,{default:a(()=>[e(O,{overline:""},{default:a(()=>[qt]),_:1}),e(O,null,{default:a(()=>[j(R(n.row.clientIp),1)]),_:2},1024)]),_:2},1024),e(ae,null,{default:a(()=>[e(O,{overline:""},{default:a(()=>[St]),_:1}),e(O,null,{default:a(()=>[j(R(u(ne)(n.row.startTime*1e3)),1)]),_:2},1024)]),_:2},1024),e(ae,null,{default:a(()=>[e(O,{overline:""},{default:a(()=>[Ut]),_:1}),e(O,null,{default:a(()=>[j(R(u(ne)(n.row.endTime*1e3)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(ge),e(M,{class:"tw-w-full tw-overflow-x-auto"},{default:a(()=>[e(Pe,{json:n.row.result},null,8,["json"])]),_:2},1024)]),_:2},1024)]),_:1},8,["pagination","rows","loading"]))}});var Qt=X(Pt,[["__file","/Users/boyan/development/opensource/gopherCronFE/src/components/TaskLogs.vue"]]);const Rt=j("\u8282\u70B9 IP"),Nt=j("\u5F00\u59CB\u65F6\u95F4"),zt=j("\u7ED3\u675F\u65F6\u95F4"),Ot={key:1,class:"tw-flex tw-flex-row-reverse tw-pb-3 tw-flex-wrap tw-gap-2"},Mt={key:2,class:"tw-flex tw-flex-row-reverse tw-pb-3 tw-flex-wrap tw-gap-2"},Lt=j("\u5220\u9664\u4EFB\u52A1"),Yt=j("\u7ED3\u675F\u8FDB\u7A0B"),Ht=j("\u590D\u5236\u4EFB\u52A1"),Kt={key:3},Wt=oe({props:{id:{type:Number,default:0,required:!0},projectId:{type:Number,required:!0}},setup(F){const t=F,f=b(!1),w=b();function y(o){w.value={id:o.taskId,projectId:o.projectId,remark:o.remark,command:o.command,timeout:o.timeout,cronExpr:"",createTime:0,name:"",status:0,isRunning:0,noseize:0,exclusion:0,clientIp:"",tmpId:""}}const d=b(),i=Z(),l=b();function T(){var o;l.value=(o=i.state.Task.temporaryTasks.get(t.projectId))==null?void 0:o.find(g=>g.id===Number(t.id))}ie(()=>t.id,(o,g)=>{console.log("watched",o,g),T()}),ie(l,(o,g)=>{console.log("watched task",o,g),(!d.value||(o==null?void 0:o.tmpId)!==(g==null?void 0:g.tmpId))&&c()});function U(){l.value?(y(l.value),f.value=!0):console.error("failed to copy task, the task is not found")}const _=C(()=>i.state.Project.projects.find(o=>o.id===t.projectId));async function s(){try{await i.dispatch("Task/fetchTemporaryTasks",{projectId:t.projectId})}catch(o){console.error("failed to dispatch fetchTemporaryTasks",o)}}G(()=>{i.watch(o=>[o.Root.eventTask],async([o])=>{var g;!o||o.projectId!==t.projectId||o.tmpId!==((g=l.value)==null?void 0:g.tmpId)||!d.value&&le.isFinished(o.status)&&c()}),T()});const n=b(!1),v=b(!1),N=async()=>{if(!!l.value){v.value=!1,n.value=!0;try{await $e({projectId:t.projectId,taskId:l.value.taskId}),await s()}catch(o){console.log(o)}n.value=!1}},A=b(!1),D=b(!1),z=Fe(),q=async()=>{D.value=!1,A.value=!0;try{await et(Number(t.id)),await s(),z.back()}catch(o){console.log(o)}A.value=!1},I=b(!0);function p(o=500){let g=!1,H=!1;return I.value=!0,setTimeout(()=>{H=!0,g&&(I.value=!1)},o),()=>{g=!0,H&&(I.value=!1)}}async function c(){if(!l.value)return;const o=p(500);d.value=null;try{d.value=await it({taskId:l.value.taskId,projectId:l.value.projectId,tmpId:l.value.tmpId})}catch(g){console.error(g)}o()}return(o,g)=>{var H,Y,K,de,ee;return k(),Q(te,null,[e(Qe,{modelValue:f.value,"onUpdate:modelValue":g[0]||(g[0]=S=>f.value=S),task:w.value,onCreated:s},null,8,["modelValue","task"]),e(re,{modelValue:v.value,"onUpdate:modelValue":g[1]||(g[1]=S=>v.value=S),content:"\u786E\u5B9A\u8981\u7ED3\u675F\u8FDB\u7A0B\u5417\uFF1F",type:"warning",onConfirm:N},null,8,["modelValue"]),e(re,{modelValue:D.value,"onUpdate:modelValue":g[2]||(g[2]=S=>D.value=S),content:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u4E34\u65F6\u4EFB\u52A1\u5417\uFF1F",type:"warning",onConfirm:q},null,8,["modelValue"]),J(e(L,{type:"QInput",class:"tw-h-52 tw-mb-4",animation:"fade"},null,512),[[Ue,I.value]]),!I.value&&d.value?(k(),$(ue,{key:0,class:"tw-mb-4",flat:"",bordered:""},{default:a(()=>[e(Se,null,{default:a(()=>[e(ae,null,{default:a(()=>[e(O,{overline:""},{default:a(()=>[Rt]),_:1}),e(O,null,{default:a(()=>[j(R(d.value.clientIp),1)]),_:1})]),_:1}),e(ae,null,{default:a(()=>[e(O,{overline:""},{default:a(()=>[Nt]),_:1}),e(O,null,{default:a(()=>[j(R(u(ne)(d.value.startTime*1e3)),1)]),_:1})]),_:1}),e(ae,null,{default:a(()=>[e(O,{overline:""},{default:a(()=>[zt]),_:1}),e(O,null,{default:a(()=>[j(R(u(ne)(d.value.endTime*1e3)),1)]),_:1})]),_:1})]),_:1}),e(ge),e(M,{class:"tw-w-full tw-overflow-x-auto"},{default:a(()=>[e(Pe,{json:d.value.result},null,8,["json"])]),_:1})]),_:1})):B("v-if",!0),I.value?(k(),Q("div",Ot,[e(L,{type:"QBtn",animation:"fade"})])):B("v-if",!0),I.value?B("v-if",!0):(k(),Q("div",Mt,[(H=l.value)!=null&&H.isRunning?(k(),$(h,{key:0,loading:!0})):B("v-if",!0),((Y=l.value)==null?void 0:Y.isRunning)!==1&&!((K=d.value)!=null&&K.result)?(k(),$(h,{key:1,"text-color":"red",outline:"",class:"tw-w-24 tw-ml-1",loading:A.value,onClick:g[3]||(g[3]=S=>D.value=!0)},{default:a(()=>[Lt]),_:1},8,["loading"])):B("v-if",!0),((de=l.value)==null?void 0:de.isRunning)===1?(k(),$(h,{key:2,outline:"","text-color":"red",disable:((ee=l.value)==null?void 0:ee.isRunning)!==1,class:"tw-w-24 tw-ml-1",loading:n.value,onClick:g[4]||(g[4]=S=>v.value=!0)},{default:a(()=>[Yt]),_:1},8,["disable","loading"])):B("v-if",!0),e(h,{outline:"",class:"tw-w-24 tw-ml-1",onClick:U},{default:a(()=>[Ht]),_:1})])),I.value?(k(),Q("div",Kt,[e(L,{type:"QInput",class:"tw-mb-4",square:"",animation:"fade"}),e(L,{type:"QInput",class:"tw-mb-4",square:"",animation:"fade"}),e(L,{type:"QInput",class:"tw-mb-4",square:"",animation:"fade"}),e(L,{type:"QInput",class:"tw-mb-4",square:"",animation:"fade"}),e(L,{type:"QInput",class:"tw-mb-4",square:"",animation:"fade"}),e(L,{type:"QInput",class:"tw-mb-4",square:"",animation:"fade"}),e(L,{type:"QInput",class:"tw-mb-4",square:"",animation:"fade"})])):B("v-if",!0),!I.value&&l.value?(k(),$(Ee,{key:4,class:"tw-w-full"},{default:a(()=>[l.value?(k(),$(x,{key:"id","model-value":l.value.taskId+" - "+l.value.tmpId,disable:"",label:"\u4EFB\u52A1 ID\uFF08task_id - tmp_id\uFF09",square:"",filled:"",class:"tw-mb-4"},null,8,["model-value"])):B("v-if",!0),e(x,{key:"project","model-value":u(_)?u(_).title:"",disable:"",label:"\u6240\u5C5E\u9879\u76EE",square:"",filled:"",class:"tw-mb-4"},null,8,["model-value"]),e(x,{key:"remark",modelValue:l.value.remark,"onUpdate:modelValue":g[5]||(g[5]=S=>l.value.remark=S),type:"textarea",label:"\u4EFB\u52A1\u5907\u6CE8",autogrow:"",disable:"",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(x,{key:"cron","model-value":u(ne)(l.value.scheduleTime*1e3,"YYYY-MM-DD HH:mm"),label:"\u8C03\u5EA6\u65F6\u95F4",square:"",disable:"",filled:"",class:"tw-mb-4"},null,8,["model-value"]),e(x,{key:"timeout",modelValue:l.value.timeout,"onUpdate:modelValue":g[6]||(g[6]=S=>l.value.timeout=S),modelModifiers:{number:!0},type:"number",label:"\u8D85\u65F6\u65F6\u95F4 (\u5355\u4F4D:\u79D2 s)",square:"",disable:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(x,{key:"command",modelValue:l.value.command,"onUpdate:modelValue":g[7]||(g[7]=S=>l.value.command=S),placeholder:'echo "hello word"',type:"textarea",label:"\u6267\u884C\u6307\u4EE4",autogrow:"",disable:"",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(x,{key:"noseize","model-value":l.value.noseize===1?"\u662F":"\u5426",type:"textarea",label:"\u5E76\u884C\u8C03\u5EA6",autogrow:"",disable:"",square:"",filled:"",class:"tw-mb-4"},null,8,["model-value"])]),_:1})):B("v-if",!0)],64)}}});var Jt=X(Wt,[["__file","/Users/boyan/development/opensource/gopherCronFE/src/components/TemporaryTaskDetail.vue"]]);const Gt={class:"q-ml-sm"},Xt={key:0,class:"tw-flex tw-flex-row-reverse tw-pb-3 tw-flex-wrap tw-gap-1"},Zt=j(" \u6267\u884C "),el={class:"q-pa-sm"},tl=oe({props:{id:{type:String,default:""},projectId:{type:Number,required:!0}},setup(F){const t=F,f=C(()=>({id:"",name:"",projectId:t.projectId,command:"",remark:"",timeout:300,createTime:0,noseize:0})),w=Z(),y=C(()=>{var p;return(p=w.state.WorkFlowTask.tasks.get(t.projectId))==null?void 0:p.find(c=>c.id===t.id)}),d=C(()=>w.state.Project.projects.find(p=>p.id===t.projectId)),i=b(Object.assign({},y.value||f.value));ie(()=>t.id,(p,c)=>{var o;(t.id!==((o=y.value)==null?void 0:o.id)||!z.value&&i.value.id===""||i.value.id!==y.value.id)&&(i.value=Object.assign({},y.value||f.value))});const l=C(()=>JSON.stringify(y.value)!==JSON.stringify(i.value)),T=C(()=>{const{name:p,command:c,timeout:o}=i.value;return p!==""&&c!==""&&o>0}),U=C(()=>{const{name:p,command:c,timeout:o}=i.value;return p===""?"\u4EFB\u52A1\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A":c===""?"\u6267\u884C\u6307\u4EE4\u4E0D\u80FD\u4E3A\u7A7A":o<=0?"\u8D85\u65F6\u65F6\u95F4\u672A\u6307\u5B9A":""}),_=Fe(),s=b(!1);async function n(){s.value=!0;try{if(w.commit("cleanError"),!T.value){w.commit("error",{error:{message:U.value}});return}if(await w.dispatch("saveWorkFlowTask",{task:i.value}),await w.dispatch("WorkFlowTask/fetchTasks",{projectId:t.projectId}),z.value){const p=Object.assign([],w.state.WorkFlowTask.tasks.get(t.projectId)||[]);p.sort((o,g)=>o.createTime-g.createTime);const c=p[p.length-1];_.push({name:"workflow_task",params:{projectId:t.projectId,taskId:c.id}})}}catch(p){console.error(p),w.commit("error",{error:p})}s.value=!1}function v(){i.value=Object.assign({},y.value||f.value)}const N=b(!1);async function A(p,c){w.commit("cleanError"),await w.dispatch("deleteWorkFlowTask",{projectId:p,taskId:c}),w.state.Root.currentError===void 0&&(w.dispatch("WorkFlowTask/fetchTasks",he({},t)),_.push({name:"workflow_tasks"}),N.value=!1)}const D=be(),z=C(()=>D.name&&D.name.toString()==="create_workflow_task"),q=b(!1);async function I(p,c){q.value=!0;try{await lt(w.getters.apiv1,p,c)}catch(o){q.value=!1,console.error(o)}}return G(()=>{w.watch(p=>[p.Root.eventWorkFlowTask],([p])=>{var c;console.log(p),!(!p||p.projectId!==t.projectId||p.taskId!==t.id)&&(w.commit("notifySuccess",{message:`\u4EFB\u52A1 ${(c=y.value)==null?void 0:c.name} \u5F53\u524D\u72B6\u6001: ${p.status}`}),le.isRunning(p.status)?q.value=!0:le.isFinished(p.status)&&(q.value=!1))}),w.watch(p=>[p.Root.eventTask],([p])=>{var c;console.log(33333,p),!(!p||p.projectId!==t.projectId||p.taskId!==t.id)&&(w.commit("notifySuccess",{message:`\u4EFB\u52A1 ${(c=y.value)==null?void 0:c.name} \u5F53\u524D\u72B6\u6001: ${p.status}`}),le.isRunning(p.status)?q.value=!0:le.isFinished(p.status)&&(q.value=!1))})}),(p,c)=>(k(),Q(te,null,[e(ye,{modelValue:N.value,"onUpdate:modelValue":c[1]||(c[1]=o=>N.value=o)},{default:a(()=>[e(ue,null,{default:a(()=>[e(M,{class:"row items-center"},{default:a(()=>{var o;return[e(tt,{icon:"delete",color:"primary","text-color":"white"}),V("span",Gt," \u662F\u5426\u8981\u5220\u9664\u4EFB\u52A1 "+R((o=u(y))==null?void 0:o.name),1)]}),_:1}),e(ke,{align:"right"},{default:a(()=>[J(e(h,{flat:"",label:"\u53D6\u6D88",color:"primary"},null,512),[[se,!0]]),e(h,{flat:"",label:"\u5220\u9664",color:"red",onClick:c[0]||(c[0]=()=>u(d)&&u(y)&&A(u(d).id,u(y).id))})]),_:1})]),_:1})]),_:1},8,["modelValue"]),u(z)?B("v-if",!0):(k(),Q("div",Xt,[e(h,{flat:"",class:"tw-w-24 tw-text-red-300 lg:tw-hidden",icon:"delete",onClick:c[2]||(c[2]=o=>N.value=!0)}),e(h,{color:"primary","text-color":"black",disable:u(l),class:"tw-w-24",loading:q.value,onClick:c[3]||(c[3]=()=>u(y)&&I(F.projectId,u(y).id))},{default:a(()=>[Zt]),_:1},8,["disable","loading"])])),e(Ee,{class:"tw-w-full",onSubmit:n,onReset:v},{default:a(()=>[u(y)?(k(),$(x,{key:"id","model-value":u(y).id,disable:"",label:"\u4EFB\u52A1 ID",square:"",filled:"",class:"tw-mb-4"},null,8,["model-value"])):B("v-if",!0),e(x,{key:"project","model-value":u(d)?u(d).title:"",disable:"",label:"\u6240\u5C5E\u9879\u76EE",square:"",filled:"",class:"tw-mb-4"},null,8,["model-value"]),e(x,{key:"name",modelValue:i.value.name,"onUpdate:modelValue":c[4]||(c[4]=o=>i.value.name=o),label:"\u4EFB\u52A1\u540D\u79F0",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(x,{key:"timeout",modelValue:i.value.timeout,"onUpdate:modelValue":c[5]||(c[5]=o=>i.value.timeout=o),modelModifiers:{number:!0},type:"number",label:"\u8D85\u65F6\u65F6\u95F4 (\u5355\u4F4D:\u79D2 s)",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(x,{key:"command",modelValue:i.value.command,"onUpdate:modelValue":c[6]||(c[6]=o=>i.value.command=o),type:"textarea",placeholder:'echo "hello word"',label:"\u6267\u884C\u6307\u4EE4",autogrow:"",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(x,{key:"remark",modelValue:i.value.remark,"onUpdate:modelValue":c[7]||(c[7]=o=>i.value.remark=o),type:"textarea",label:"\u4EFB\u52A1\u5907\u6CE8",autogrow:"",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(pe,{key:"noseize",modelValue:i.value.noseize,"onUpdate:modelValue":c[8]||(c[8]=o=>i.value.noseize=o),"false-value":0,"true-value":1,label:"\u5E76\u884C\u8C03\u5EA6",class:"tw-mb-4"},null,8,["modelValue"]),V("div",el,[e(h,{color:"primary","text-color":"black",type:"submit",label:"\u4FDD\u5B58",loading:s.value,disable:!u(l),class:"lg:tw-w-24 tw-w-full lg:tw-mr-4 lg:tw-mb-0 tw-mb-4"},null,8,["loading","disable"]),e(h,{color:"primary",type:"reset",label:"\u91CD\u7F6E",flat:"",disable:!u(l),class:"lg:tw-w-24 tw-w-full"},null,8,["disable"])])]),_:1})],64))}});var ll=X(tl,[["__file","/Users/boyan/development/opensource/gopherCronFE/src/components/WorkFlowTaskDetail.vue"]]);const al={class:"tw-px-4 tw-pt-2 tw-w-full tw-h-full tw-flex tw-flex-col"},ul={class:"tw-text-[#7e7e7e] tw-mb-4"},ol={class:"tw-flex tw-items-center tw-justify-start tw-gap-4 tw-text-lg tw-mb-4"},sl={key:0,class:"tw-pb-4"},rl={class:"tw-flex tw-gap-2 tw-items-center"},nl=j(" \u5728\u7EBF\u8282\u70B9: "),il={class:"tw-flex tw-w-full tw-grow"},dl={class:"tw-h-full tw-w-full tw-flex tw-flex-col"},cl={key:0,class:"tw-hidden lg:tw-block"},ml=V("div",{class:"text-h6"},"\u8282\u70B9\u5217\u8868",-1),pl=V("div",{class:"text-base"},"\u4EC5 v2.4.6 \u53CA\u4EE5\u4E0A\u7248\u672C\u652F\u6301\u6743\u91CD\u53D8\u66F4",-1),fl={class:"tw-text-lg"},vl=oe({props:{id:{type:String,default:""},projectId:{type:Number,required:!0},type:{type:String,default:"crontab"}},setup(F){const t=F,f=b(!1);function w(){f.value=!0}const y=Z(),d=C(()=>y.state.Project.projects.find(A=>A.id===t.projectId)),i=be(),l=b(),T=()=>{qe(()=>{var A;(A=l.value)==null||A.setScrollPosition("vertical",0)})},U=C(()=>i.name&&i.name.toString()===`create_${t.type}_task`),_=C(()=>{var A;if(U.value)return"detail";if(i.name){const D=i.name.toString();if(D===`${t.type}_task_logs`)return"logs";if(D===`${t.type}_task`)return"detail"}throw new Error(`Unknown route name ${(A=i.name)==null?void 0:A.toString()}`)}),{width:s}=rt();async function n(){await y.dispatch("Project/fetchProjectClients",{projectId:t.projectId})}G(()=>{n()}),at(()=>{y.commit("Project/setProjectClients",{clients:[]})});const v=C(()=>y.state.Project.projectClients.get(t.projectId)),N=C(()=>{const A=new Map;return v.value&&v.value.forEach((D,z,q)=>{let I=A.get(D.region);I||(A.set(D.region,[]),I=A.get(D.region)),I==null||I.push(D)}),A});return(A,D)=>{var z,q;return k(),Q(te,null,[V("div",al,[V("div",ul,[V("div",ol,[V("span",null,[e(me,{name:"folder"}),j(" "+R((z=u(d))==null?void 0:z.title),1)]),V("span",null," ID: "+R(F.projectId),1)]),u(d)&&u(d).remark.trim()!==""?(k(),Q("div",sl,R(u(d).remark),1)):B("v-if",!0),V("div",rl,[e(me,{name:"hive"}),nl,V("span",{class:ut(["tw-font-extrabold",{"tw-text-primary":u(v)&&u(v).length>0,"tw-text-red-500":!u(v)||u(v).length===0}])},R(((q=u(v))==null?void 0:q.length)||0),3),J(V("span",{class:"tw-text-white tw-cursor-pointer",onClick:w},"\u67E5\u770B\u8282\u70B9",512),[[Ue,u(v)&&u(v).length>0]])])]),u(U)?B("v-if",!0):(k(),$(De,{key:0,"model-value":u(_),"active-color":"primary",align:"left",class:"lg:tw-hidden tw-display"},{default:a(()=>[e(ce,{name:"detail",label:"\u8BE6\u60C5",to:{name:`${t.type}_task`,params:{taskId:t.id}},replace:""},null,8,["to"]),e(ce,{name:"logs",label:"\u65E5\u5FD7",to:{name:`${t.type}_task_logs`,params:{taskId:t.id}},replace:""},null,8,["to"])]),_:1},8,["model-value"])),V("div",il,[V("div",dl,[e(u(ot),{ref_key:"scroll",ref:l,class:"tw-grow","thumb-style":u(dt),"bar-style":u(ct)},{default:a(()=>[e(st,{"model-value":u(_),animated:"",vertical:u(s)>=1024,class:"tw-w-full tw-h-full tw-bg-[#121212] tw-p-0 lg:tw-pr-4"},{default:a(()=>[e(Ae,{name:"detail",class:"tw-px-0"},{default:a(()=>[t.type==="crontab"?(k(),$($t,{key:0,id:t.id,"project-id":t.projectId},null,8,["id","project-id"])):t.type==="workflow"?(k(),$(ll,{key:1,id:t.id,"project-id":t.projectId},null,8,["id","project-id"])):B("v-if",!0),t.type==="temporary"?(k(),$(Jt,{key:2,id:Number(t.id),"project-id":t.projectId},null,8,["id","project-id"])):B("v-if",!0)]),_:1}),e(Ae,{name:"logs",class:"tw-px-0"},{default:a(()=>[e(Qt,{id:t.id,"project-id":t.projectId,onOnpage:T},null,8,["id","project-id"])]),_:1})]),_:1},8,["model-value","vertical"])]),_:1},8,["thumb-style","bar-style"])]),t.type!="temporary"?(k(),Q("div",cl,[u(U)?B("v-if",!0):(k(),$(De,{key:0,"model-value":u(_),"active-color":"primary",vertical:"","switch-indicator":"",align:"left"},{default:a(()=>[e(ce,{name:"detail",label:"\u8BE6\u60C5",to:{name:`${t.type}_task`,params:{taskId:t.id}},replace:""},null,8,["to"]),e(ce,{name:"logs",label:"\u65E5\u5FD7",to:{name:`${t.type}_task_logs`,params:{taskId:t.id}},replace:""},null,8,["to"])]),_:1},8,["model-value"]))])):B("v-if",!0)])]),e(ye,{modelValue:f.value,"onUpdate:modelValue":D[0]||(D[0]=I=>f.value=I)},{default:a(()=>[e(ue,{class:"tw-w-full"},{default:a(()=>[e(M,null,{default:a(()=>[ml,pl]),_:1}),(k(!0),Q(te,null,Be(u(N),([I,p])=>(k(),Q(te,{key:I},[e(M,null,{default:a(()=>[V("div",fl,"Region: "+R(I),1)]),_:2},1024),e(M,{class:"tw-q-pt-none scroll tw-flex tw-items-center tw-justify-center tw-align-middle tw-gap-2 tw-flex-wrap",style:{"max-height":"60vh"}},{default:a(()=>[(k(!0),Q(te,null,Be(p,c=>(k(),Q("div",{key:c.clientIP,class:"md:tw-w-[48%] tw-w-full"},[e(wt,{"client-ip":c.clientIP,weight:c.weight,"project-id":F.projectId,version:c.version,region:c.region},null,8,["client-ip","weight","project-id","version","region"])]))),128))]),_:2},1024)],64))),128)),e(ke,{align:"right",class:"text-teal"},{default:a(()=>[J(e(h,{flat:"",label:"OK"},null,512),[[se,!0]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});var Cl=X(vl,[["__file","/Users/boyan/development/opensource/gopherCronFE/src/pages/TaskDetail.vue"]]);export{Cl as default};