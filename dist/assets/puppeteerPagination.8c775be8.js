import{a as t,r as e,L as a,M as r,S as s,V as i,R as n,o,d as c,f as g,t as u,F as d,h as m,O as p}from"./vendor.d4080a92.js";const l={name:"puppeteerPagination",components:{},setup(a,r){const o=t();let c={"贝壳":["https://t0113/1-210113221352.jpg","https://timg/210113/1-210113221352-50.jpg"],"平":["https://t210113/1-210113220617.jpg"]},g=e([]),u=0;var d;return o.query.key?(d=o.query.key,g.value=c[d],document.title=d):n.confirm("打开所有页面，请保持内存足够, 或者只留部分数据，是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{let t=0;for(const e in c)setTimeout((()=>{window.open(`/#/puppeteerPagination?key=${e}`)}),2e3*t),t++})).catch((()=>{})),{currList:g,viewBigImage:t=>{s({images:[t],transition:"123"})},imgErr:()=>{i({title:"提示",message:"有图片err了",type:"error",duration:0})},imgLoad:()=>{u++,u==g.value.length&&i({title:"提示",message:"图片都ok了",type:"success",duration:0})}}}},h=p();a("data-v-189a0ad1");const v={id:"home"};r();const y=h(((t,e,a,r,s,i)=>(o(),c("div",v,[g("div",null,u(r.currList&&r.currList.length),1),(o(!0),c(d,null,m(r.currList,((t,a)=>(o(),c("img",{onClick:e=>r.viewBigImage(t),onError:e[1]||(e[1]=(...t)=>r.imgErr&&r.imgErr(...t)),onLoad:e[2]||(e[2]=(...t)=>r.imgLoad&&r.imgLoad(...t)),src:t,key:a,width:"250"},null,40,["onClick","src"])))),128))]))));l.render=y,l.__scopeId="data-v-189a0ad1";export default l;
