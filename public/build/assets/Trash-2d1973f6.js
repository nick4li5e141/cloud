import{s as I,a as B,A as $}from"./AuthenticatedLayout-9dff438f.js";import{J as V,v as A,j as u,o as f,f as p,b as l,d as _,a as d,F as b,i as j,m as M,p as D,c as N,w as q,u as k,q as L,g as O,n as E,t as C}from"./app-8a2a7654.js";import{h as U,_ as z}from"./http-helper-2c9ad9b0.js";import{_ as S}from"./Checkbox-80c24160.js";import{_ as F}from"./ConfirmationDialog-766546d3.js";import"./ApplicationLogo-4ac50b4f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SecondaryButton-28540b69.js";import"./TextInput-5ea0ff6d.js";import"./PrimaryButton-26dffdcd.js";import"./DangerButton-1ce0d0ff.js";const P=l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-2"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"})],-1),R={__name:"RestoreFilesButton",props:{allSelected:{type:Boolean,required:!1,default:!1},selectedIds:{type:Array,required:!1}},emits:["restore"],setup(m,{emit:n}){const e=m;V();const t=A({all:null,ids:[],parent_id:null}),r=u(!1);function a(){if(!e.allSelected&&!e.selectedIds.length){I("Please select at least one file to restore");return}r.value=!0}function i(){r.value=!1}function h(){e.allSelected?t.all=!0:t.ids=e.selectedIds,t.post(route("file.restore"),{onSuccess:()=>{r.value=!1,n("restore"),B("Selected files have been restored")}})}return(v,x)=>(f(),p(b,null,[l("button",{onClick:a,class:"inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"},[P,_(" Restore ")]),d(F,{show:r.value,message:"Are you sure you want to restore selected files?",onCancel:i,onConfirm:h},null,8,["show"])],64))}},T=l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-2"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),G={__name:"DeleteForeverButton",props:{allSelected:{type:Boolean,required:!1,default:!1},selectedIds:{type:Array,required:!1}},emits:["delete"],setup(m,{emit:n}){const e=m;V();const t=A({all:null,ids:[],parent_id:null}),r=u(!1);function a(){if(!e.allSelected&&!e.selectedIds.length){I("Please select at least one file to delete");return}r.value=!0}function i(){r.value=!1}function h(){e.allSelected?(t.all=!0,t.ids=[]):t.ids=e.selectedIds,t.delete(route("file.deleteForever"),{onSuccess:()=>{r.value=!1,n("delete"),B("Selected files have been deleted forever")}})}return(v,x)=>(f(),p(b,null,[l("button",{onClick:a,class:"inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white mr-3"},[T,_(" Delete Forever ")]),d(F,{show:r.value,message:"Are you sure you want to delete selected files?",onCancel:i,onConfirm:h},null,8,["show"])],64))}},H={class:"flex items-center justify-end p-1 mb-3"},J={class:"flex-1 overflow-auto"},K={class:"min-w-full"},Q={class:"bg-gray-100 border-b"},W={class:"text-sm font-medium text-gray-900 px-6 py-4 text-left w-[30px] max-w-[30px] pr-0"},X=l("th",{class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Name ",-1),Y=l("th",{class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Path ",-1),Z=["onClick"],ee={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-[30px] max-w-[30px] pr-0"},te={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center"},le={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"},se={key:0,class:"py-8 text-center text-sm text-gray-400"},pe={__name:"Trash",props:{files:Object,folder:Object,ancestors:Object},setup(m){const n=m,e=u(!1),t=u({}),r=u(null),a=u({data:n.files.data,next:n.files.links.next}),i=j(()=>Object.entries(t.value).filter(s=>s[1]).map(s=>s[0]));function h(){console.log("load more"),console.log(a.value.next),a.value.next!==null&&U(a.value.next).then(s=>{a.value.data=[...a.value.data,...s.data],a.value.next=s.links.next})}function v(){a.value.data.forEach(s=>{t.value[s.id]=e.value})}function x(s){t.value[s.id]=!t.value[s.id],w(s)}function w(s){if(!t.value[s.id])e.value=!1;else{let c=!0;for(let o of a.value.data)if(!t.value[o.id]){c=!1;break}e.value=c}}function y(){e.value=!1,t.value={}}return M(()=>{a.value={data:n.files.data,next:n.files.links.next}}),D(()=>{new IntersectionObserver(c=>c.forEach(o=>o.isIntersecting&&h()),{rootMargin:"-250px 0px 0px 0px"}).observe(r.value)}),(s,c)=>(f(),N($,null,{default:q(()=>[l("nav",H,[l("div",null,[d(G,{"all-selected":e.value,"selected-ids":k(i),onDelete:y},null,8,["all-selected","selected-ids"]),d(R,{"all-selected":e.value,"selected-ids":k(i),onRestore:y},null,8,["all-selected","selected-ids"])])]),l("div",J,[l("table",K,[l("thead",Q,[l("tr",null,[l("th",W,[d(S,{onChange:v,checked:e.value,"onUpdate:checked":c[0]||(c[0]=o=>e.value=o)},null,8,["checked"])]),X,Y])]),l("tbody",null,[(f(!0),p(b,null,L(a.value.data,o=>(f(),p("tr",{key:o.id,onClick:g=>x(o),class:E(["border-b transition duration-300 ease-in-out hover:bg-blue-100 cursor-pointer",t.value[o.id]||e.value?"bg-blue-50":"bg-white"])},[l("td",ee,[d(S,{onChange:g=>w(o),modelValue:t.value[o.id],"onUpdate:modelValue":g=>t.value[o.id]=g,checked:t.value[o.id]||e.value},null,8,["onChange","modelValue","onUpdate:modelValue","checked"])]),l("td",te,[d(z,{file:o},null,8,["file"]),_(" "+C(o.name),1)]),l("td",le,C(o.path),1)],10,Z))),128))])]),a.value.data.length?O("",!0):(f(),p("div",se," There is no data in this folder ")),l("div",{ref_key:"loadMoreIntersect",ref:r},null,512)])]),_:1}))}};export{pe as default};
