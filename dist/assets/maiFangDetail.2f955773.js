import{u as e,a as t,r as a,X as n,o as r,d as l}from"./vendor.d4080a92.js";import{m as i}from"./maiFangData.2f1014bf.js";const s={name:"maiFangDetail",components:{},setup(r,l){e();const s=t();let u=a(""),o=a(""),m=a("");return n((()=>{o.value=s.query.title,m.value=s.query.tabIndex;let e=i[`tab${m.value}`];for(let t=0;t<e.length;t++){const a=e[t];if(a.title===o.value){u.value=a.html;break}}})),{result:u,title:o,tabIndex:m}}};s.render=function(e,t,a,n,i,s){return r(),l("div",{id:"maiFangDetail",innerHTML:n.result},null,8,["innerHTML"])};export default s;
