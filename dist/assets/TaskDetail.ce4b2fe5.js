var Le=Object.defineProperty;var xe=Object.getOwnPropertySymbols;var Ye=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var Ve=(F,t,p)=>t in F?Le(F,t,{enumerable:!0,configurable:!0,writable:!0,value:p}):F[t]=p,_e=(F,t)=>{for(var p in t||(t={}))Ye.call(t,p)&&Ve(F,p,t[p]);if(xe)for(var p of xe(t))He.call(t,p)&&Ve(F,p,t[p]);return F};import{_ as Z,u as ee,r as g,o as w,c as T,w as o,a as e,b as D,t as R,d as h,Q as Y,e as ye,f as j,g as Ke,h as V,i as se,j as We,k as re,l as x,m as X,n as ke,p as A,q as pe,s as De,v as Je,x as G,C as ne,y as Ge,z as Ue,A as s,B as fe,D as be,E as Xe,F as Fe,G as Ze,H as Ee,I as oe,J as Ie,K as U,L as Ae,M as je,N as et,O as Se,P as Re,R as tt,S as Pe,T as ae,U as z,V as lt,W as Qe,X as H,Y as te,Z as at,$ as ut,a0 as ot,a1 as st,a2 as rt,a3 as Be,a4 as Te,a5 as me,a6 as nt,a7 as $e,a8 as qe}from"./index.f89dd3dd.js";import{u as it}from"./index.c4564906.js";import{C as ue}from"./Confirm.4116c3bd.js";import{a as dt,f as ie}from"./datetime.561112b0.js";import{T as le}from"./task.f3ffd066.js";import{J as Ne}from"./JSONViewer.177a839e.js";import{G as ct}from"./log.a17ac264.js";import{t as mt,b as pt}from"./thumbStyle.856de4cb.js";const ft=D("br",null,null,-1),vt=D("br",null,null,-1),wt=h(" \u63D0\u4EA4 "),gt={props:{projectId:{type:Number,required:!0},clientIp:{type:String,required:!0},version:{type:String,required:!0},weight:{type:Number,required:!0},region:{type:String,required:!0}},setup(F){const t=F,p=ee(),f=g(t.weight),k=g(!1);async function m(){k.value=!0;const d=t.clientIp.split(":")[0];try{await We(t.projectId,d,Number(f.value)),await p.dispatch("Project/fetchProjectClients",{projectId:t.projectId}),p.commit("success",{message:"\u4FEE\u6539\u6210\u529F"})}catch(l){console.error(l)}k.value=!1}return(d,l)=>(w(),T(se,{flat:"",bordered:""},{default:o(()=>[e(Y,{class:"text-center"},{default:o(()=>[D("strong",null,R(F.clientIp),1),ft,h(" "+R(F.region)+" ",1),vt,h(" "+R(F.version),1)]),_:1}),e(ye),e(Y,{class:"flex flex-center"},{default:o(()=>[e(j,{modelValue:f.value,"onUpdate:modelValue":l[0]||(l[0]=B=>f.value=B),outlined:"",dense:"",type:"number",prefix:"\u6743\u91CD\uFF1A",onKeyup:Ke(m,["enter"])},{append:o(()=>[e(V,{dense:"",unelevated:"",loading:k.value,onClick:m},{default:o(()=>[wt]),_:1},8,["loading"])]),_:1},8,["modelValue","onKeyup"])]),_:1})]),_:1}))}};var kt=Z(gt,[["__file","/Users/boyan/development/opensource/gopherCronFE/src/components/ClientNode.vue"]]);const yt=D("div",{class:"text-h6"},"\u521B\u5EFA\u4EFB\u52A1",-1),bt=D("div",{class:"text-base"}," \u4E34\u65F6\u4EFB\u52A1\u540C\u6837\u4F1A\u4E0E\u6B63\u5F0F\u7684\u5B9A\u65F6\u4EFB\u52A1\u7ADE\u4E89\u76F8\u540C\u7684\u9501\uFF0C\u8BF7\u907F\u514D\u8C03\u5EA6\u51B2\u7A81(\u6307\u8FD0\u884C\u65F6\u95F4\u6709\u4EA4\u96C6) ",-1),Ft={class:"tw-flex tw-gap-2 tw-justify-end tw-mb-2"},Et={class:"row items-center justify-end"},It={class:"row items-center justify-end"},jt=re({props:{modelValue:{type:Boolean,default:!1},task:{type:Object,default:()=>({})}},emits:["update:modelValue","created"],setup(F,{emit:t}){const p=F,f=x({get:()=>p.modelValue,set:y=>{t("update:modelValue",y),l.value=""}}),k=x(()=>{const y=[{value:"",label:"\u968F\u673A"}],c=m.state.Project.projectClients.get(p.task.projectId);return c&&c.forEach((r,P,I)=>{const _=r.clientIP;y.push({value:_,label:_})}),y}),m=ee(),d=g({taskId:p.task.taskId,projectId:p.task.projectId,command:p.task.command,remark:p.task.remark,noseize:p.task.noseize,scheduleTime:0,timeout:p.task.timeout,host:p.task.host}),l=g("");function B(y){l.value=dt(y*60,"YYYY-MM-DD HH:mm")}X(()=>{ke(()=>{f.value&&(d.value=Object.assign({},{taskId:p.task.taskId,projectId:p.task.projectId,command:p.task.command,remark:p.task.remark,noseize:p.task.noseize,scheduleTime:0,timeout:p.task.timeout,host:p.task.host}))})});const $=g(!1);async function C(){const y=d.value;if(!y.remark){m.commit("error",{error:{message:"\u4EFB\u52A1\u8BF4\u660E\u5FC5\u586B"}});return}if(!y.command){m.commit("error",{error:{message:"\u6267\u884C\u547D\u4EE4\u5FC5\u586B"}});return}$.value=!0;try{const c=await Ze({projectId:y.projectId,taskId:y.taskId,command:y.command,noseize:y.noseize,scheduleTime:Date.parse(l.value)/1e3,remark:y.remark,timeout:y.timeout,host:y.host});c.code!==0?m.commit("error",{error:{message:c.message}}):(m.commit("success",{message:"\u521B\u5EFA\u6210\u529F"}),f.value=!1,t("created"))}catch{}$.value=!1}return(y,c)=>(w(),T(Fe,{modelValue:s(f),"onUpdate:modelValue":c[11]||(c[11]=r=>Xe(f)?f.value=r:null),persistent:""},{default:o(()=>[e(se,{class:"tw-w-96 q-pa-sm"},{default:o(()=>[e(Y,null,{default:o(()=>[yt,bt]),_:1}),e(Y,{style:{"max-height":"50vh"},class:"scroll"},{default:o(()=>[F.task?(w(),T(j,{key:"id","model-value":F.task.taskId,disable:"",label:"\u5173\u8054\u4EFB\u52A1 ID",square:"",filled:"",class:"tw-mb-4"},null,8,["model-value"])):A("v-if",!0),e(j,{key:"remark",modelValue:d.value.remark,"onUpdate:modelValue":c[0]||(c[0]=r=>d.value.remark=r),type:"textarea",label:"\u4EFB\u52A1\u8BF4\u660E *",autogrow:"",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),D("div",Ft,[e(V,{dense:"",unelevated:"",class:"tw-text-xs tw-h-6 tw-px-3",color:"warning","text-color":"black",label:"\u4E00\u5206\u949F\u540E",onClick:c[1]||(c[1]=r=>B(1))}),e(V,{dense:"",unelevated:"",class:"tw-text-xs tw-h-6 tw-px-3",color:"warning","text-color":"black",label:"\u4E94\u5206\u949F\u540E",onClick:c[2]||(c[2]=r=>B(5))}),e(V,{dense:"",unelevated:"",class:"tw-text-xs tw-h-6 tw-px-3",color:"warning","text-color":"black",label:"\u4E00\u5C0F\u65F6\u540E",onClick:c[3]||(c[3]=r=>B(60))})]),e(j,{modelValue:l.value,"onUpdate:modelValue":c[6]||(c[6]=r=>l.value=r),filled:"",square:"",label:"\u8C03\u5EA6\u65F6\u95F4 *",class:"tw-mb-4"},{prepend:o(()=>[e(pe,{name:"event",class:"cursor-pointer"},{default:o(()=>[e(De,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:o(()=>[e(Je,{modelValue:l.value,"onUpdate:modelValue":c[4]||(c[4]=r=>l.value=r),"text-color":"black",mask:"YYYY-MM-DD HH:mm"},{default:o(()=>[D("div",Et,[G(e(V,{label:"\u5173\u95ED",color:"primary",flat:""},null,512),[[ne,!0]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),append:o(()=>[e(pe,{name:"access_time",class:"cursor-pointer"},{default:o(()=>[e(De,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:o(()=>[e(Ge,{modelValue:l.value,"onUpdate:modelValue":c[5]||(c[5]=r=>l.value=r),mask:"YYYY-MM-DD HH:mm","text-color":"black",format24h:""},{default:o(()=>[D("div",It,[G(e(V,{label:"\u5173\u95ED",color:"primary",flat:""},null,512),[[ne,!0]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(j,{key:"timeout",modelValue:d.value.timeout,"onUpdate:modelValue":c[7]||(c[7]=r=>d.value.timeout=r),modelModifiers:{number:!0},type:"number",label:"\u8D85\u65F6\u65F6\u95F4 * (\u5355\u4F4D:\u79D2 s)",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(j,{key:"command",modelValue:d.value.command,"onUpdate:modelValue":c[8]||(c[8]=r=>d.value.command=r),placeholder:'echo "hello word"',type:"textarea",label:"\u6267\u884C\u6307\u4EE4 *",autogrow:"",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(Ue,{modelValue:d.value.host,"onUpdate:modelValue":c[9]||(c[9]=r=>d.value.host=r),"emit-value":"","map-options":"",autogrow:"",square:"",filled:"",label:"\u6267\u884C\u8282\u70B9",options:s(k),class:"tw-mb-4"},null,8,["modelValue","options"]),e(fe,{key:"noseize",modelValue:d.value.noseize,"onUpdate:modelValue":c[10]||(c[10]=r=>d.value.noseize=r),"false-value":0,"true-value":1,label:"\u5E76\u884C\u8C03\u5EA6",class:"tw-mb-4"},null,8,["modelValue"])]),_:1}),e(be,{align:"right",class:"tw-flex tw-gap-2 tw-flex-col-reverse lg:tw-flex-row tw-justify-center lg:tw-justify-end"},{default:o(()=>[G(e(V,{flat:"",label:"\u53D6\u6D88",class:"lg:tw-w-24 tw-w-full"},null,512),[[ne,!0]]),e(V,{color:"primary","text-color":"black",label:"\u521B\u5EFA",class:"lg:tw-w-24 tw-w-full !tw-ml-0",loading:$.value,onClick:C},null,8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});var ze=Z(jt,[["__file","/Users/boyan/development/opensource/gopherCronFE/src/components/DialogTemporaryTaskForm.vue"]]);const ht={class:"tw-h-full tw-w-full tw-flex tw-flex-col"},Ct={key:0,class:"tw-flex tw-flex-row-reverse tw-pb-3 tw-flex-wrap tw-gap-2"},xt=h("\u7ED3\u675F\u8FDB\u7A0B"),Vt=h("\u7ACB\u5373\u6267\u884C"),_t=h("\u4E34\u65F6\u8C03\u5EA6 "),Dt=h(" \u6307\u5B9A\u65F6\u95F4\u8C03\u5EA6\u4E00\u6B21\u7684\u4EFB\u52A1 "),At=h("\u590D\u5236\u4EFB\u52A1 "),Bt=h(" \u4EE5\u5F53\u524D\u4EFB\u52A1\u5185\u5BB9\u4E3A\u57FA\u7840\u8FDB\u884C\u65B0\u4EFB\u52A1\u7684\u521B\u5EFA "),Tt={key:1,class:"tw-flex tw-pb-3 tw-flex-wrap tw-gap-2 text-h6"},$t={class:"q-pa-sm"},qt=re({props:{id:{type:String,default:""},projectId:{type:Number,required:!0}},setup(F){const t=F;function p(){N.push({name:"temporary_tasks",params:{projectId:t.projectId}})}const f=x(()=>({id:"",name:"",projectId:t.projectId,command:"",cronExpr:"0 0 0 * * * *",remark:"",timeout:300,createTime:0,status:0,isRunning:-1,noseize:0,exclusion:0,clientIp:"",tmpId:""}));function k(i,n){return!i||!n?!1:i.projectId===n.projectId&&i.name===n.name&&i.cronExpr===n.cronExpr&&i.remark===n.remark&&i.timeout===n.timeout&&i.status===n.status&&i.noseize===n.noseize&&i.command===n.command}const m=ee(),d=Ee(),l=x(()=>{var i;return(i=m.state.Task.tasks.get(t.projectId))==null?void 0:i.find(n=>n.id===t.id||n.id===d.query.copyid)}),B=g();function $(i){B.value={command:i.command,createTime:i.createTime,projectId:i.projectId,scheduleTime:0,taskId:i.id,userId:0,userName:"",noseize:0,timeout:i.timeout,remark:"",host:"",isRunning:-1,tmpId:""}}l.value&&$(l.value);const C=x(()=>m.state.Project.projects.find(i=>i.id===t.projectId)),y=g([]);function c(i){const n=[];i==null||i.forEach((q,J,ge)=>{n.push({value:q.id,label:q.title})}),y.value=n}m.state.Project.projects&&m.state.Project.projects.length>0&&c(m.state.Project.projects),oe(()=>m.state.Project.projects,(i,n)=>{c(n)});const r=g(Object.assign({},l.value||f.value)),P=x(()=>d.name&&d.name.toString()==="create_crontab_task"),I=x(()=>d.query.copyid&&d.query.copyid!=="");P.value&&(r.value.id="",r.value.isRunning=-1),oe(()=>t.id,(i,n)=>{var q;(t.id!==((q=l.value)==null?void 0:q.id)||!P.value&&r.value.id===""||r.value.id!==l.value.id)&&(r.value=Object.assign({},l.value||f.value)),r.value.isRunning=-1,l.value&&$(l.value)});const _=x(()=>{var i;return((i=l.value)==null?void 0:i.isRunning)===1?!1:!k(l.value,r.value)}),M=x(()=>{const{name:i,command:n,timeout:q,cronExpr:J}=r.value;return i!==""&&n!==""&&q>0&&J!==""}),O=x(()=>{const{name:i,command:n,timeout:q,cronExpr:J}=r.value;return i===""?"\u4EFB\u52A1\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A":n===""?"\u6267\u884C\u6307\u4EE4\u4E0D\u80FD\u4E3A\u7A7A":q<=0?"\u8D85\u65F6\u65F6\u95F4\u672A\u6307\u5B9A":J===""?"\u8C03\u5EA6\u8BA1\u5212\u672A\u6307\u5B9A":""});async function b(i){await m.dispatch("Task/fetchTasks",{projectId:i})}const N=Ie(),Q=g(!1);async function a(){if(m.commit("cleanError"),!M.value){m.commit("error",{error:{message:O.value}});return}Q.value=!0,(P.value||I.value)&&(r.value.id="");try{const i=await m.dispatch("saveTask",{task:JSON.parse(JSON.stringify(r.value))});P.value&&(await b(r.value.projectId),N.push({name:"crontab_task",params:{projectId:r.value.projectId,taskId:i.id}}))}catch{}Q.value=!1}function u(){r.value=Object.assign({},l.value||f.value)}const v=g(!1),L=g(!1);async function de(i,n){m.commit("cleanError"),L.value=!0,console.log("delete loading",L.value);try{await m.dispatch("deleteTask",{projectId:i,taskId:n}),m.state.Root.currentError===void 0&&(await b(t.projectId),N.push({name:"crontab_tasks",params:{projectId:t.projectId}}),v.value=!1)}catch(q){console.error(q),m.commit("error",{error:q})}L.value=!1}const K=g(!1),W=g(!1);async function S(i,n){W.value=!1,K.value=!0;try{await et(m.getters.apiv1,i,n)}catch{K.value=!1}}X(()=>{m.watch(i=>[i.Root.eventTask],([i])=>{!i||i.projectId!==t.projectId||i.taskId!==t.id||le.isFinished(i.status)&&(K.value=!1)})});const ve=g(!1),ce=g(!1),Oe=async()=>{ce.value=!1,ve.value=!0;try{await Se({projectId:t.projectId,taskId:t.id}),await b(t.projectId),r.value.status=0}catch(i){console.error(i),m.commit("error",{error:i})}ve.value=!1},we=g(!1);function Me(){var i;N.push({name:"create_crontab_task",query:{copyid:(i=l.value)==null?void 0:i.id}})}return(i,n)=>{var q,J,ge,he,Ce;return w(),U("div",ht,[e(ze,{modelValue:we.value,"onUpdate:modelValue":n[0]||(n[0]=E=>we.value=E),task:B.value,onCreated:p},null,8,["modelValue","task"]),e(ue,{modelValue:v.value,"onUpdate:modelValue":n[1]||(n[1]=E=>v.value=E),content:"\u662F\u5426\u8981\u5220\u9664\u4EFB\u52A1"+((q=s(l))==null?void 0:q.name)+"?",type:"warning",loading:L.value,onConfirm:n[2]||(n[2]=E=>s(C)&&s(l)&&de(s(C).id,s(l).id))},null,8,["modelValue","content","loading"]),e(ue,{modelValue:ce.value,"onUpdate:modelValue":n[3]||(n[3]=E=>ce.value=E),content:"\u786E\u5B9A\u8981\u7ED3\u675F\u8FDB\u7A0B\u5417\uFF1F\u5F3A\u5236\u7ED3\u675F\u540E\u4EFB\u52A1\u7684\u542F\u7528\u72B6\u6001\u4F1A\u81EA\u52A8\u53D8\u66F4\u4E3A\u505C\u7528\u72B6\u6001\u3002",type:"warning",onConfirm:Oe},null,8,["modelValue"]),e(ue,{modelValue:W.value,"onUpdate:modelValue":n[4]||(n[4]=E=>W.value=E),content:"\u786E\u5B9A\u8981\u7ACB\u5373\u6267\u884C\u5417\uFF1F",onConfirm:n[5]||(n[5]=E=>s(l)&&S(F.projectId,s(l).id))},null,8,["modelValue"]),s(P)?A("v-if",!0):(w(),U("div",Ct,[e(V,{flat:"",dense:"",class:"tw-w-24 tw-text-red-300 lg:tw-hidden",icon:"delete",onClick:n[6]||(n[6]=E=>v.value=!0)}),((J=s(l))==null?void 0:J.isRunning)===1?(w(),T(V,{key:0,flat:"","text-color":"red",disable:((ge=s(l))==null?void 0:ge.isRunning)!==1,class:"tw-w-24 tw-ml-1",loading:ve.value,onClick:n[7]||(n[7]=E=>ce.value=!0)},{default:o(()=>[xt]),_:1},8,["disable","loading"])):A("v-if",!0),e(V,{color:"primary","text-color":"black",disable:s(_)||((he=s(l))==null?void 0:he.isRunning)===1,class:"tw-w-24",loading:K.value||((Ce=s(l))==null?void 0:Ce.isRunning)===1,onClick:n[8]||(n[8]=E=>W.value=!0)},{default:o(()=>[Vt]),_:1},8,["disable","loading"]),e(V,{color:"warning","text-color":"black",class:"tw-w-24 tw-opacity-90",onClick:n[9]||(n[9]=E=>we.value=!0)},{default:o(()=>[_t,e(Ae,{class:"bg-warning tw-text-black",offset:[10,10]},{default:o(()=>[Dt]),_:1})]),_:1}),e(V,{outline:"",class:"tw-w-24 tw-opacity-90",onClick:Me},{default:o(()=>[At,e(Ae,{class:"bg-warning tw-text-black",offset:[10,10]},{default:o(()=>[Bt]),_:1})]),_:1})])),s(I)?(w(),U("div",Tt," \u590D\u5236\u4EFB\u52A1 ")):A("v-if",!0),e(je,{class:"tw-w-full",onSubmit:a,onReset:u},{default:o(()=>[s(l)&&!s(P)?(w(),T(j,{key:"id","model-value":s(l).id,disable:"",label:"\u4EFB\u52A1 ID",square:"",filled:"",class:"tw-mb-4"},null,8,["model-value"])):A("v-if",!0),s(P)?(w(),T(Ue,{key:1,modelValue:r.value.projectId,"onUpdate:modelValue":n[10]||(n[10]=E=>r.value.projectId=E),square:"",filled:"",class:"tw-w-full tw-mb-4","emit-value":"","map-options":"",label:"\u6240\u5C5E\u9879\u76EE",placeholder:"\u8BF7\u9009\u62E9\u9879\u76EE",options:y.value},null,8,["modelValue","options"])):(w(),T(j,{key:"project","model-value":s(C)?s(C).title:"",disable:"",label:"\u6240\u5C5E\u9879\u76EE",square:"",filled:"",class:"tw-mb-4"},null,8,["model-value"])),e(j,{key:"name",modelValue:r.value.name,"onUpdate:modelValue":n[11]||(n[11]=E=>r.value.name=E),label:"\u4EFB\u52A1\u540D\u79F0",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(j,{key:"cron",modelValue:r.value.cronExpr,"onUpdate:modelValue":n[12]||(n[12]=E=>r.value.cronExpr=E),label:"\u8C03\u5EA6\u8BA1\u5212 (*\u79D2 *\u5206 *\u65F6 *\u65E5 *\u6708 *\u5468 *\u5E74)",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(j,{key:"timeout",modelValue:r.value.timeout,"onUpdate:modelValue":n[13]||(n[13]=E=>r.value.timeout=E),modelModifiers:{number:!0},type:"number",label:"\u8D85\u65F6\u65F6\u95F4 (\u5355\u4F4D:\u79D2 s)",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(j,{key:"command",modelValue:r.value.command,"onUpdate:modelValue":n[14]||(n[14]=E=>r.value.command=E),placeholder:'echo "hello word"',type:"textarea",label:"\u6267\u884C\u6307\u4EE4",autogrow:"",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(j,{key:"remark",modelValue:r.value.remark,"onUpdate:modelValue":n[15]||(n[15]=E=>r.value.remark=E),type:"textarea",label:"\u4EFB\u52A1\u5907\u6CE8",autogrow:"",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(fe,{key:"noseize",modelValue:r.value.noseize,"onUpdate:modelValue":n[16]||(n[16]=E=>r.value.noseize=E),"false-value":0,"true-value":1,label:"\u5E76\u884C\u8C03\u5EA6",class:"tw-mb-4"},null,8,["modelValue"]),e(fe,{key:"status",modelValue:r.value.status,"onUpdate:modelValue":n[17]||(n[17]=E=>r.value.status=E),"false-value":0,"true-value":1,label:"\u662F\u5426\u542F\u7528",class:"tw-mb-4"},null,8,["modelValue"]),D("div",$t,[e(V,{color:"primary","text-color":"black",type:"submit",label:s(I)?"\u786E\u8BA4\u590D\u5236":"\u4FDD\u5B58",disable:!s(_),loading:Q.value,class:"lg:tw-w-24 tw-w-full lg:tw-mr-4 lg:tw-mb-0 tw-mb-4"},null,8,["label","disable","loading"]),e(V,{color:"primary",type:"reset",label:"\u91CD\u7F6E",flat:"",disable:!s(_),class:"lg:tw-w-24 tw-w-full"},null,8,["disable"])])]),_:1})])}}});var Ut=Z(qt,[["__file","/Users/boyan/development/opensource/gopherCronFE/src/components/TaskDetail.vue"]]);const St=h("\u8282\u70B9 IP"),Rt=h("\u5F00\u59CB\u65F6\u95F4"),Pt=h("\u7ED3\u675F\u65F6\u95F4"),Qt=re({props:{id:{type:String,required:!0},projectId:{type:Number,required:!0}},emits:["onpage"],setup(F,{emit:t}){const p=F,f=ee(),k=x(()=>f.state.Root.taskLogs),m=x(()=>f.state.Root.taskLogsTotal),d=x(()=>f.state.Root.loadingTaskLogs),l=g({sortBy:"",descending:!1,page:1,rowsPerPage:5,rowsNumber:0}),B=g();X(()=>{Re(()=>{var C;(C=B.value)==null||C.$el.querySelector("table.q-table").classList.add("tw-table-fixed")})});function $({pagination:{page:C,rowsPerPage:y}}){const c=l.value;c.page=C,c.rowsPerPage=y,t("onpage")}return ke(()=>{const C=l.value;C.rowsNumber=m.value}),X(async()=>{ke(async()=>{const C=l.value;await f.dispatch("fetchTaskLogs",{projectId:p.projectId,taskId:p.id,page:C.page,pageSize:C.rowsPerPage})})}),(C,y)=>(w(),T(s(lt),{ref_key:"logTable",ref:B,pagination:l.value,"onUpdate:pagination":y[0]||(y[0]=c=>l.value=c),class:"tw-w-full tw-h-full tw-bg-[#121212]","rows-per-page-options":[5,10,15],rows:s(k),loading:s(d),"row-key":"id",color:"primary",flat:"","hide-header":"",onRequest:$},{loading:o(()=>[e(tt,{showing:"",color:"primary"})]),body:o(c=>[e(se,{class:"tw-my-4 tw-x-full",flat:"",bordered:""},{default:o(()=>[e(Pe,null,{default:o(()=>[e(ae,null,{default:o(()=>[e(z,{overline:""},{default:o(()=>[St]),_:1}),e(z,null,{default:o(()=>[h(R(c.row.clientIp),1)]),_:2},1024)]),_:2},1024),e(ae,null,{default:o(()=>[e(z,{overline:""},{default:o(()=>[Rt]),_:1}),e(z,null,{default:o(()=>[h(R(s(ie)(c.row.startTime*1e3)),1)]),_:2},1024)]),_:2},1024),e(ae,null,{default:o(()=>[e(z,{overline:""},{default:o(()=>[Pt]),_:1}),e(z,null,{default:o(()=>[h(R(s(ie)(c.row.endTime*1e3)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(ye),e(Y,{class:"tw-w-full tw-overflow-x-auto"},{default:o(()=>[e(Ne,{json:c.row.result},null,8,["json"])]),_:2},1024)]),_:2},1024)]),_:1},8,["pagination","rows","loading"]))}});var Nt=Z(Qt,[["__file","/Users/boyan/development/opensource/gopherCronFE/src/components/TaskLogs.vue"]]);const zt=h("\u8282\u70B9 IP"),Ot=h("\u5F00\u59CB\u65F6\u95F4"),Mt=h("\u7ED3\u675F\u65F6\u95F4"),Lt={key:1,class:"tw-flex tw-flex-row-reverse tw-pb-3 tw-flex-wrap tw-gap-2"},Yt={key:2,class:"tw-flex tw-flex-row-reverse tw-pb-3 tw-flex-wrap tw-gap-2"},Ht=h("\u5220\u9664\u4EFB\u52A1"),Kt=h("\u7ED3\u675F\u8FDB\u7A0B"),Wt=h("\u590D\u5236\u4EFB\u52A1"),Jt={key:3},Gt=re({props:{id:{type:Number,default:0,required:!0},projectId:{type:Number,required:!0}},setup(F){const t=F,p=g(!1),f=g();function k(a){f.value={taskId:a.taskId,projectId:a.projectId,remark:a.remark,command:a.command,timeout:a.timeout,host:a.host,createTime:0,isRunning:0,noseize:0,tmpId:"",scheduleTime:0,userId:0,userName:""}}const m=g(),d=ee(),l=g();function B(){var a;l.value=(a=d.state.Task.temporaryTasks.get(t.projectId))==null?void 0:a.find(u=>u.id===Number(t.id))}oe(()=>t.id,(a,u)=>{console.log("watched",a,u),B()}),oe(l,(a,u)=>{console.log("watched task",a,u),(!m.value||(a==null?void 0:a.tmpId)!==(u==null?void 0:u.tmpId))&&Q()});function $(){l.value?(k(l.value),p.value=!0):console.error("failed to copy task, the task is not found")}const C=x(()=>d.state.Project.projects.find(a=>a.id===t.projectId));async function y(){try{await d.dispatch("Task/fetchTemporaryTasks",{projectId:t.projectId})}catch(a){console.error("failed to dispatch fetchTemporaryTasks",a)}}X(()=>{d.watch(a=>[a.Root.eventTask],async([a])=>{var u;!a||a.projectId!==t.projectId||a.tmpId!==((u=l.value)==null?void 0:u.tmpId)||!m.value&&le.isFinished(a.status)&&Q()}),B()});const c=g(!1),r=g(!1),P=async()=>{if(!!l.value){r.value=!1,c.value=!0;try{await Se({projectId:t.projectId,taskId:l.value.taskId}),await y()}catch(a){console.log(a)}c.value=!1}},I=g(!1),_=g(!1),M=Ie(),O=async()=>{_.value=!1,I.value=!0;try{await at(Number(t.id)),await y(),M.back()}catch(a){console.log(a)}I.value=!1},b=g(!0);function N(a=500){let u=!1,v=!1;return b.value=!0,setTimeout(()=>{v=!0,u&&(b.value=!1)},a),()=>{u=!0,v&&(b.value=!1)}}async function Q(){if(!l.value)return;const a=N(500);m.value=null;try{m.value=await ct({taskId:l.value.taskId,projectId:l.value.projectId,tmpId:l.value.tmpId})}catch(u){console.error(u)}a()}return(a,u)=>{var v,L,de,K,W;return w(),U(te,null,[e(ze,{modelValue:p.value,"onUpdate:modelValue":u[0]||(u[0]=S=>p.value=S),task:f.value,onCreated:y},null,8,["modelValue","task"]),e(ue,{modelValue:r.value,"onUpdate:modelValue":u[1]||(u[1]=S=>r.value=S),content:"\u786E\u5B9A\u8981\u7ED3\u675F\u8FDB\u7A0B\u5417\uFF1F",type:"warning",onConfirm:P},null,8,["modelValue"]),e(ue,{modelValue:_.value,"onUpdate:modelValue":u[2]||(u[2]=S=>_.value=S),content:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u4E34\u65F6\u4EFB\u52A1\u5417\uFF1F",type:"warning",onConfirm:O},null,8,["modelValue"]),G(e(H,{type:"QInput",class:"tw-h-52 tw-mb-4",animation:"fade"},null,512),[[Qe,b.value]]),!b.value&&m.value?(w(),T(se,{key:0,class:"tw-mb-4",flat:"",bordered:""},{default:o(()=>[e(Pe,null,{default:o(()=>[e(ae,null,{default:o(()=>[e(z,{overline:""},{default:o(()=>[zt]),_:1}),e(z,null,{default:o(()=>[h(R(m.value.clientIp),1)]),_:1})]),_:1}),e(ae,null,{default:o(()=>[e(z,{overline:""},{default:o(()=>[Ot]),_:1}),e(z,null,{default:o(()=>[h(R(s(ie)(m.value.startTime*1e3)),1)]),_:1})]),_:1}),e(ae,null,{default:o(()=>[e(z,{overline:""},{default:o(()=>[Mt]),_:1}),e(z,null,{default:o(()=>[h(R(s(ie)(m.value.endTime*1e3)),1)]),_:1})]),_:1})]),_:1}),e(ye),e(Y,{class:"tw-w-full tw-overflow-x-auto"},{default:o(()=>[e(Ne,{json:m.value.result},null,8,["json"])]),_:1})]),_:1})):A("v-if",!0),b.value?(w(),U("div",Lt,[e(H,{type:"QBtn",animation:"fade"})])):A("v-if",!0),b.value?A("v-if",!0):(w(),U("div",Yt,[(v=l.value)!=null&&v.isRunning?(w(),T(V,{key:0,loading:!0})):A("v-if",!0),((L=l.value)==null?void 0:L.isRunning)!==1&&!((de=m.value)!=null&&de.result)?(w(),T(V,{key:1,"text-color":"red",outline:"",class:"tw-w-24 tw-ml-1",loading:I.value,onClick:u[3]||(u[3]=S=>_.value=!0)},{default:o(()=>[Ht]),_:1},8,["loading"])):A("v-if",!0),((K=l.value)==null?void 0:K.isRunning)===1?(w(),T(V,{key:2,outline:"","text-color":"red",disable:((W=l.value)==null?void 0:W.isRunning)!==1,class:"tw-w-24 tw-ml-1",loading:c.value,onClick:u[4]||(u[4]=S=>r.value=!0)},{default:o(()=>[Kt]),_:1},8,["disable","loading"])):A("v-if",!0),e(V,{outline:"",class:"tw-w-24 tw-ml-1",onClick:$},{default:o(()=>[Wt]),_:1})])),b.value?(w(),U("div",Jt,[e(H,{type:"QInput",class:"tw-mb-4",square:"",animation:"fade"}),e(H,{type:"QInput",class:"tw-mb-4",square:"",animation:"fade"}),e(H,{type:"QInput",class:"tw-mb-4",square:"",animation:"fade"}),e(H,{type:"QInput",class:"tw-mb-4",square:"",animation:"fade"}),e(H,{type:"QInput",class:"tw-mb-4",square:"",animation:"fade"}),e(H,{type:"QInput",class:"tw-mb-4",square:"",animation:"fade"}),e(H,{type:"QInput",class:"tw-mb-4",square:"",animation:"fade"})])):A("v-if",!0),!b.value&&l.value?(w(),T(je,{key:4,class:"tw-w-full"},{default:o(()=>[l.value?(w(),T(j,{key:"id","model-value":l.value.taskId+" - "+l.value.tmpId,disable:"",label:"\u4EFB\u52A1 ID\uFF08task_id - tmp_id\uFF09",square:"",filled:"",class:"tw-mb-4"},null,8,["model-value"])):A("v-if",!0),e(j,{key:"project","model-value":s(C)?s(C).title:"",disable:"",label:"\u6240\u5C5E\u9879\u76EE",square:"",filled:"",class:"tw-mb-4"},null,8,["model-value"]),e(j,{key:"remark",modelValue:l.value.remark,"onUpdate:modelValue":u[5]||(u[5]=S=>l.value.remark=S),type:"textarea",label:"\u4EFB\u52A1\u5907\u6CE8",autogrow:"",disable:"",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(j,{key:"cron","model-value":s(ie)(l.value.scheduleTime*1e3,"YYYY-MM-DD HH:mm"),label:"\u8C03\u5EA6\u65F6\u95F4",square:"",disable:"",filled:"",class:"tw-mb-4"},null,8,["model-value"]),e(j,{key:"timeout",modelValue:l.value.timeout,"onUpdate:modelValue":u[6]||(u[6]=S=>l.value.timeout=S),modelModifiers:{number:!0},type:"number",label:"\u8D85\u65F6\u65F6\u95F4 (\u5355\u4F4D:\u79D2 s)",square:"",disable:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(j,{key:"command",modelValue:l.value.command,"onUpdate:modelValue":u[7]||(u[7]=S=>l.value.command=S),placeholder:'echo "hello word"',type:"textarea",label:"\u6267\u884C\u6307\u4EE4",autogrow:"",disable:"",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(j,{key:"timeout","model-value":l.value.host||"\u968F\u673A",label:"\u6307\u5B9A\u6267\u884C\u8282\u70B9",square:"",disable:"",filled:"",class:"tw-mb-4"},null,8,["model-value"]),e(j,{key:"noseize","model-value":l.value.noseize===1?"\u662F":"\u5426",type:"textarea",label:"\u5E76\u884C\u8C03\u5EA6",autogrow:"",disable:"",square:"",filled:"",class:"tw-mb-4"},null,8,["model-value"])]),_:1})):A("v-if",!0)],64)}}});var Xt=Z(Gt,[["__file","/Users/boyan/development/opensource/gopherCronFE/src/components/TemporaryTaskDetail.vue"]]);const Zt={class:"q-ml-sm"},el={key:0,class:"tw-flex tw-flex-row-reverse tw-pb-3 tw-flex-wrap tw-gap-1"},tl=h(" \u6267\u884C "),ll={class:"q-pa-sm"},al=re({props:{id:{type:String,default:""},projectId:{type:Number,required:!0}},setup(F){const t=F,p=x(()=>({id:"",name:"",projectId:t.projectId,command:"",remark:"",timeout:300,createTime:0,noseize:0})),f=ee(),k=x(()=>{var a;return(a=f.state.WorkFlowTask.tasks.get(t.projectId))==null?void 0:a.find(u=>u.id===t.id)}),m=x(()=>f.state.Project.projects.find(a=>a.id===t.projectId)),d=g(Object.assign({},k.value||p.value));oe(()=>t.id,(a,u)=>{var v;(t.id!==((v=k.value)==null?void 0:v.id)||!O.value&&d.value.id===""||d.value.id!==k.value.id)&&(d.value=Object.assign({},k.value||p.value))});const l=g(!0);oe(k,()=>{l.value&&(l.value=!1,d.value=Object.assign({},k.value||p.value))});const B=x(()=>JSON.stringify(k.value)!==JSON.stringify(d.value)),$=x(()=>{const{name:a,command:u,timeout:v}=d.value;return a!==""&&u!==""&&v>0}),C=x(()=>{const{name:a,command:u,timeout:v}=d.value;return a===""?"\u4EFB\u52A1\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A":u===""?"\u6267\u884C\u6307\u4EE4\u4E0D\u80FD\u4E3A\u7A7A":v<=0?"\u8D85\u65F6\u65F6\u95F4\u672A\u6307\u5B9A":""}),y=Ie(),c=g(!1);async function r(){c.value=!0;try{if(f.commit("cleanError"),!$.value){f.commit("error",{error:{message:C.value}});return}if(await f.dispatch("saveWorkFlowTask",{task:d.value}),l.value=!0,await f.dispatch("WorkFlowTask/fetchTasks",{projectId:t.projectId}),O.value){const a=Object.assign([],f.state.WorkFlowTask.tasks.get(t.projectId)||[]);a.sort((v,L)=>v.createTime-L.createTime);const u=a[a.length-1];y.push({name:"workflow_task",params:{projectId:t.projectId,taskId:u.id}})}}catch(a){console.error(a),f.commit("error",{error:a})}c.value=!1}function P(){d.value=Object.assign({},k.value||p.value)}const I=g(!1);async function _(a,u){f.commit("cleanError"),await f.dispatch("deleteWorkFlowTask",{projectId:a,taskId:u}),f.state.Root.currentError===void 0&&(f.dispatch("WorkFlowTask/fetchTasks",_e({},t)),y.push({name:"workflow_tasks"}),I.value=!1)}const M=Ee(),O=x(()=>M.name&&M.name.toString()==="create_workflow_task"),b=g(!1),N=g(!1);async function Q(a,u){N.value=!1,b.value=!0;try{await ot(f.getters.apiv1,a,u)}catch(v){b.value=!0,console.error(v)}}return X(()=>{f.watch(a=>[a.Root.eventWorkFlowTask],([a])=>{var u;console.log(a),!(!a||a.projectId!==t.projectId||a.taskId!==t.id)&&(f.commit("notifySuccess",{message:`\u4EFB\u52A1 ${(u=k.value)==null?void 0:u.name} \u5F53\u524D\u72B6\u6001: ${a.status}`}),le.isRunning(a.status)?b.value=!0:le.isFinished(a.status)&&(b.value=!1))}),f.watch(a=>[a.Root.eventTask],([a])=>{var u;!a||a.projectId!==t.projectId||a.taskId!==t.id||(f.commit("notifySuccess",{message:`\u4EFB\u52A1 ${(u=k.value)==null?void 0:u.name} \u5F53\u524D\u72B6\u6001: ${a.status}`}),le.isRunning(a.status)?b.value=!0:le.isFinished(a.status)&&(b.value=!1))})}),(a,u)=>(w(),U(te,null,[e(Fe,{modelValue:I.value,"onUpdate:modelValue":u[1]||(u[1]=v=>I.value=v)},{default:o(()=>[e(se,null,{default:o(()=>[e(Y,{class:"row items-center"},{default:o(()=>{var v;return[e(ut,{icon:"delete",color:"primary","text-color":"white"}),D("span",Zt," \u662F\u5426\u8981\u5220\u9664\u4EFB\u52A1 "+R((v=s(k))==null?void 0:v.name),1)]}),_:1}),e(be,{align:"right"},{default:o(()=>[G(e(V,{flat:"",label:"\u53D6\u6D88",color:"primary"},null,512),[[ne,!0]]),e(V,{flat:"",label:"\u5220\u9664",color:"red",onClick:u[0]||(u[0]=()=>s(m)&&s(k)&&_(s(m).id,s(k).id))})]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(O)?A("v-if",!0):(w(),U("div",el,[e(V,{flat:"",class:"tw-w-24 tw-text-red-300 lg:tw-hidden",icon:"delete",onClick:u[2]||(u[2]=v=>I.value=!0)}),e(V,{color:"primary","text-color":"black",disable:s(B),class:"tw-w-24",loading:b.value,onClick:u[3]||(u[3]=()=>N.value=!0)},{default:o(()=>[tl]),_:1},8,["disable","loading"])])),e(je,{class:"tw-w-full",onSubmit:r,onReset:P},{default:o(()=>[s(k)?(w(),T(j,{key:"id","model-value":s(k).id,disable:"",label:"\u4EFB\u52A1 ID",square:"",filled:"",class:"tw-mb-4"},null,8,["model-value"])):A("v-if",!0),e(j,{key:"project","model-value":s(m)?s(m).title:"",disable:"",label:"\u6240\u5C5E\u9879\u76EE",square:"",filled:"",class:"tw-mb-4"},null,8,["model-value"]),e(j,{key:"name",modelValue:d.value.name,"onUpdate:modelValue":u[4]||(u[4]=v=>d.value.name=v),label:"\u4EFB\u52A1\u540D\u79F0",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(j,{key:"timeout",modelValue:d.value.timeout,"onUpdate:modelValue":u[5]||(u[5]=v=>d.value.timeout=v),modelModifiers:{number:!0},type:"number",label:"\u8D85\u65F6\u65F6\u95F4 (\u5355\u4F4D:\u79D2 s)",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(j,{key:"command",modelValue:d.value.command,"onUpdate:modelValue":u[6]||(u[6]=v=>d.value.command=v),type:"textarea",placeholder:'echo "hello word"',label:"\u6267\u884C\u6307\u4EE4",autogrow:"",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(j,{key:"remark",modelValue:d.value.remark,"onUpdate:modelValue":u[7]||(u[7]=v=>d.value.remark=v),type:"textarea",label:"\u4EFB\u52A1\u5907\u6CE8",autogrow:"",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),e(fe,{key:"noseize",modelValue:d.value.noseize,"onUpdate:modelValue":u[8]||(u[8]=v=>d.value.noseize=v),"false-value":0,"true-value":1,label:"\u5E76\u884C\u8C03\u5EA6",class:"tw-mb-4"},null,8,["modelValue"]),D("div",ll,[e(V,{color:"primary","text-color":"black",type:"submit",label:"\u4FDD\u5B58",loading:c.value,disable:!s(B),class:"lg:tw-w-24 tw-w-full lg:tw-mr-4 lg:tw-mb-0 tw-mb-4"},null,8,["loading","disable"]),e(V,{color:"primary",type:"reset",label:"\u91CD\u7F6E",flat:"",disable:!s(B),class:"lg:tw-w-24 tw-w-full"},null,8,["disable"])])]),_:1}),e(ue,{modelValue:N.value,"onUpdate:modelValue":u[9]||(u[9]=v=>N.value=v),content:"\u786E\u5B9A\u8981\u7ACB\u5373\u6267\u884C\u5417\uFF1F",onConfirm:u[10]||(u[10]=v=>s(k)&&Q(F.projectId,s(k).id))},null,8,["modelValue"])],64))}});var ul=Z(al,[["__file","/Users/boyan/development/opensource/gopherCronFE/src/components/WorkFlowTaskDetail.vue"]]);const ol={class:"tw-px-4 tw-pt-2 tw-w-full tw-h-full tw-flex tw-flex-col"},sl={class:"tw-text-[#7e7e7e] tw-mb-4"},rl={class:"tw-flex tw-items-center tw-justify-start tw-gap-4 tw-text-lg tw-mb-4"},nl={key:0,class:"tw-pb-4"},il={class:"tw-flex tw-gap-2 tw-items-center"},dl=h(" \u5728\u7EBF\u8282\u70B9: "),cl={class:"tw-flex tw-w-full tw-grow"},ml={class:"tw-h-full tw-w-full tw-flex tw-flex-col"},pl={key:0,class:"tw-hidden lg:tw-block"},fl=D("div",{class:"text-h6"},"\u8282\u70B9\u5217\u8868",-1),vl=D("div",{class:"text-base"},"\u4EC5 v2.4.6 \u53CA\u4EE5\u4E0A\u7248\u672C\u652F\u6301\u6743\u91CD\u53D8\u66F4",-1),wl={class:"tw-text-lg"},gl=re({props:{id:{type:String,default:""},projectId:{type:Number,required:!0},type:{type:String,default:"crontab"}},setup(F){const t=F,p=g(!1);function f(){p.value=!0}const k=ee(),m=x(()=>k.state.Project.projects.find(I=>I.id===t.projectId)),d=Ee(),l=g(),B=()=>{Re(()=>{var I;(I=l.value)==null||I.setScrollPosition("vertical",0)})},$=x(()=>d.name&&d.name.toString()===`create_${t.type}_task`),C=x(()=>{var I;if($.value)return"detail";if(d.name){const _=d.name.toString();if(_===`${t.type}_task_logs`)return"logs";if(_===`${t.type}_task`)return"detail"}throw new Error(`Unknown route name ${(I=d.name)==null?void 0:I.toString()}`)}),{width:y}=it();async function c(){await k.dispatch("Project/fetchProjectClients",{projectId:t.projectId})}X(()=>{c()}),st(()=>{k.commit("Project/setProjectClients",{clients:[]})});const r=x(()=>k.state.Project.projectClients.get(t.projectId)),P=x(()=>{const I=new Map;return r.value&&r.value.forEach((_,M,O)=>{let b=I.get(_.region);b||(I.set(_.region,[]),b=I.get(_.region)),b==null||b.push(_)}),I});return(I,_)=>{var M,O;return w(),U(te,null,[D("div",ol,[D("div",sl,[D("div",rl,[D("span",null,[e(pe,{name:"folder"}),h(" "+R((M=s(m))==null?void 0:M.title),1)]),D("span",null," ID: "+R(F.projectId),1)]),s(m)&&s(m).remark.trim()!==""?(w(),U("div",nl,R(s(m).remark),1)):A("v-if",!0),D("div",il,[e(pe,{name:"hive"}),dl,D("span",{class:rt(["tw-font-extrabold",{"tw-text-primary":s(r)&&s(r).length>0,"tw-text-red-500":!s(r)||s(r).length===0}])},R(((O=s(r))==null?void 0:O.length)||0),3),G(D("span",{class:"tw-text-white tw-cursor-pointer",onClick:f},"\u67E5\u770B\u8282\u70B9",512),[[Qe,s(r)&&s(r).length>0]])])]),s($)?A("v-if",!0):(w(),T(Be,{key:0,"model-value":s(C),"active-color":"primary",align:"left",class:"lg:tw-hidden tw-display"},{default:o(()=>[e(me,{name:"detail",label:"\u8BE6\u60C5",to:{name:`${t.type}_task`,params:{taskId:t.id}},replace:""},null,8,["to"]),e(me,{name:"logs",label:"\u65E5\u5FD7",to:{name:`${t.type}_task_logs`,params:{taskId:t.id}},replace:""},null,8,["to"])]),_:1},8,["model-value"])),D("div",cl,[D("div",ml,[e(s(Te),{ref_key:"scroll",ref:l,class:"tw-grow","thumb-style":s(mt),"bar-style":s(pt)},{default:o(()=>[e(nt,{"model-value":s(C),animated:"",vertical:s(y)>=1024,class:"tw-w-full tw-h-full tw-bg-[#121212] tw-p-0 lg:tw-pr-4"},{default:o(()=>[e($e,{name:"detail",class:"tw-px-0"},{default:o(()=>[t.type==="crontab"?(w(),T(Ut,{key:0,id:t.id,"project-id":t.projectId},null,8,["id","project-id"])):t.type==="workflow"?(w(),T(ul,{key:1,id:t.id,"project-id":t.projectId},null,8,["id","project-id"])):A("v-if",!0),t.type==="temporary"?(w(),T(Xt,{key:2,id:Number(t.id),"project-id":t.projectId},null,8,["id","project-id"])):A("v-if",!0)]),_:1}),e($e,{name:"logs",class:"tw-px-0"},{default:o(()=>[e(Nt,{id:t.id,"project-id":t.projectId,onOnpage:B},null,8,["id","project-id"])]),_:1})]),_:1},8,["model-value","vertical"])]),_:1},8,["thumb-style","bar-style"])]),t.type!="temporary"?(w(),U("div",pl,[s($)?A("v-if",!0):(w(),T(Be,{key:0,"model-value":s(C),"active-color":"primary",vertical:"","switch-indicator":"",align:"left"},{default:o(()=>[e(me,{name:"detail",label:"\u8BE6\u60C5",to:{name:`${t.type}_task`,params:{taskId:t.id}},replace:""},null,8,["to"]),e(me,{name:"logs",label:"\u65E5\u5FD7",to:{name:`${t.type}_task_logs`,params:{taskId:t.id}},replace:""},null,8,["to"])]),_:1},8,["model-value"]))])):A("v-if",!0)])]),e(Fe,{modelValue:p.value,"onUpdate:modelValue":_[0]||(_[0]=b=>p.value=b)},{default:o(()=>[e(se,{class:"tw-w-full"},{default:o(()=>[e(Y,null,{default:o(()=>[fl,vl]),_:1}),e(s(Te),{style:{height:"50vh"}},{default:o(()=>[(w(!0),U(te,null,qe(s(P),([b,N])=>(w(),U(te,{key:b},[e(Y,null,{default:o(()=>[D("div",wl,"Region: "+R(b),1)]),_:2},1024),e(Y,{class:"tw-q-pt-none scroll tw-flex tw-items-center tw-justify-center tw-align-middle tw-gap-2 tw-flex-wrap",style:{"max-height":"60vh"}},{default:o(()=>[(w(!0),U(te,null,qe(N,Q=>(w(),U("div",{key:Q.clientIP,class:"md:tw-w-[48%] tw-w-full"},[e(kt,{"client-ip":Q.clientIP,weight:Q.weight,"project-id":F.projectId,version:Q.version,region:Q.region},null,8,["client-ip","weight","project-id","version","region"])]))),128))]),_:2},1024)],64))),128))]),_:1}),e(be,{align:"right",class:"text-teal"},{default:o(()=>[G(e(V,{flat:"",label:"OK"},null,512),[[ne,!0]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});var xl=Z(gl,[["__file","/Users/boyan/development/opensource/gopherCronFE/src/pages/TaskDetail.vue"]]);export{xl as default};