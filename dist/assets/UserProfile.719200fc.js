import{_ as i,d as n,u as c,r as u,F as x,i as t,R as l,s as e,ab as m,h as p,f as d,j as _,W as f,I as r,a as h}from"./index.8f86c916.js";import{M as v}from"./ModifyBox.d8c282ae.js";const b={class:"tw-bg-gradient-to-r tw-from-primary tw-to-purple-500"},g={class:"tw-mx-auto tw-container tw-px-6"},y={class:"xl:tw-flex tw-items-center tw-flex-wrap"},F=t("div",{class:"xl:tw-w-3/4 2xl:tw-w-4/5"},null,-1),B={class:"xl:tw-w-1/4 2xl:tw-w-1/5 tw-flex tw-flex-col tw-items-center xl:tw-pl-8 tw-py-12 md:tw-pt-12 md:tw-pb-12 xl:tw-pb-6"},E={class:"tw-w-full tw-flex tw-items-center tw-justify-center"},k={class:"tw-flex tw-flex-col tw-items-center"},j={class:"tw-w-20 tw-h-20 tw-bg-gray-700 tw-rounded-full tw-flex tw-items-center tw-justify-center"},V={class:"tw-text-lg tw-font-bold tw-rounded tw-leading-3 tw-text-white"},D={class:"tw-mt-2 tw-text-xs sm:tw-text-sm md:tw-text-base tw-font-semibold tw-text-center tw-text-white"},U={class:"tw-px-4 xl:tw-px-0"},q={class:"tw-mx-auto tw-container"},C={class:"xl:tw-flex"},N=t("div",{class:"xl:tw-w-3/4 2xl:tw-w-4/5 tw--mt-8 xl:tw--mt-36"},[t("div",{class:"tw-pl-4 md:tw-pl-10 tw-py-4 md:tw-py-7 tw-bg-gray-100 tw-rounded-tl-lg tw-rounded-tr-lg tw-shadow"},[t("p",{class:"tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl tw-font-bold tw-leading-normal tw-text-gray-800"}," \u66F4\u65B0\u65E5\u5FD7 ")]),t("div",{class:"q-dark tw-shadow-lg tw-pb-8 tw-px-4 md:tw-px-8 xl:tw-px-10 tw-h-5/6 tw-py-6"},[r(" V2.0.0-Beta"),t("br"),r(" \u589E\u52A0 workflow \u529F\u80FD ")])],-1),A={class:"xl:tw-w-1/4 2xl:tw-w-1/5 tw-pt-7 xl:tw-pl-8 tw-pb-7"},M=t("p",{class:"tw-text-base tw-font-semibold tw-text-gray-100"}," \u8D26\u53F7\u4FE1\u606F ",-1),P={class:"tw-mt-4"},S={class:"tw-flex tw-box-border tw-px-2 q-dark tw-h-10 tw-border-dashed tw-shadow tw-items-center tw-w-full tw-justify-between tw-rounded"},I={class:"tw-flex tw-box-border tw-px-2 tw-mt-4 q-dark tw-h-10 tw-border-dashed tw-shadow tw-items-center tw-w-full tw-justify-between tw-rounded"},Q={class:"tw-mt-7"},R=t("p",{class:"tw-text-base tw-font-semibold tw-text-gray-100"}," \u4E2A\u4EBA\u8BBE\u7F6E ",-1),T={class:"tw-flex tw-mt-4 q-dark tw-h-12 tw-shadow tw-items-center tw-w-full tw-justify-between tw-rounded"},W=n({setup($){const s=c().getters.currentUser,o=u(!1);return(G,w)=>(h(),x(f,null,[t("div",null,[t("div",b,[t("div",g,[t("div",y,[F,t("div",B,[t("div",E,[t("div",k,[t("div",j,[t("p",V,l(e(m)(e(s).name)),1)]),t("p",D,l(e(s).name),1)])]),p(` <div class="tw-flex tw-items-center tw-mt-7">
              <div class="">
                <p class="tw-text-base tw-text-gray-300">\u8D26\u53F7</p>
                <p class="tw-mt-2 tw-text-xs tw-text-gray-50"></p>
              </div>

              <div class="tw-ml-12">
                <p class="tw-text-base tw-text-gray-300">\u89D2\u8272</p>
                <p class="tw-mt-2 tw-text-xs tw-text-gray-50">
                  {{ user.permissions ? user.permissions.join(',') : '-' }}
                </p>
              </div>
            </div> `)])])])]),t("div",U,[t("div",q,[t("div",C,[N,t("div",A,[t("div",null,[M,t("div",P,[t("div",S,l(e(s).account),1),t("div",I,l(e(s).permissions?e(s).permissions.join(","):"-"),1)])]),t("div",Q,[R,t("div",T,[d(_,{unelevated:"",class:"q-dark tw-w-full tw-h-full",label:"\u4FEE\u6539\u5BC6\u7801",onClick:w[0]||(w[0]=a=>o.value=!0)})])])])])])])]),d(v,{modelValue:o.value,"onUpdate:modelValue":w[1]||(w[1]=a=>o.value=a),user:e(s)},null,8,["modelValue","user"])],64))}});var K=i(W,[["__file","/Users/boyan/development/opensource/gopherCronFE/src/pages/User/UserProfile.vue"]]);export{K as default};