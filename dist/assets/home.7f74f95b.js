import{u as t,g as e,p as i,f as a,o,c as n,F as s,h as c,t as p,w as l}from"./vendor.5b8de986.js";const u={name:"home",components:{},setup(i,a){setTimeout((()=>{document.title=(new Date).toLocaleTimeString()}),3e3);const o=t();return{navList:e([{title:"sisi",to:"/sisi"},{title:"puppeteerPagination",to:"/puppeteerPagination"},{title:"pingtiancun",to:"/pingtiancun"}]),toPage:t=>{o.push({name:t.title})}}}},d=l();i("data-v-223cee2c");const m={id:"home"};a();const r=d(((t,e,i,a,l,u)=>(o(),n("div",m,[(o(!0),n(s,null,c(a.navList,(t=>(o(),n("div",{class:"item",onClick:e=>a.toPage(t),key:t.title,to:t.to},p(t.title),9,["onClick","to"])))),128))]))));u.render=r,u.__scopeId="data-v-223cee2c";export default u;