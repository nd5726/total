"use strict";(self["webpackChunktotal"]=self["webpackChunktotal"]||[]).push([[664],{2664:function(t,e,s){s.r(e),s.d(e,{default:function(){return w}});var o=s(3396),c=s(9242);const a={class:"fixed w-full top-0 bg-brown-light mb-6 z-20"},i={class:"flex px-4 text-white py-4 justify-start mx-auto items-center backend container"},u={class:"text-lg mx-3"},l=(0,o.Uk)("回到前台"),n={class:"text-lg mx-3"},r=(0,o.Uk)("後台產品列表"),h={class:"text-lg mx-3"},d=(0,o.Uk)("訂單列表"),m={class:"text-lg mx-3"},p=(0,o.Uk)("問與答列表"),k={class:"relative mt-20"};function x(t,e,s,x,g,v){const f=(0,o.up)("router-link"),w=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",a,[(0,o._)("nav",i,[(0,o._)("div",u,[(0,o.Wm)(f,{to:"/"},{default:(0,o.w5)((()=>[l])),_:1})]),(0,o._)("div",n,[(0,o.Wm)(f,{to:"/admin"},{default:(0,o.w5)((()=>[r])),_:1})]),(0,o._)("div",h,[(0,o.Wm)(f,{to:"/admin/orders"},{default:(0,o.w5)((()=>[d])),_:1})]),(0,o._)("div",m,[(0,o.Wm)(f,{to:"/admin/question"},{default:(0,o.w5)((()=>[p])),_:1})]),(0,o._)("a",{href:"#",class:"text-lg mx-3",onClick:e[0]||(e[0]=(0,c.iM)(((...t)=>v.logout&&v.logout(...t)),["prevent"]))},"登出")])]),(0,o._)("div",k,[g.checkSuccess?((0,o.wg)(),(0,o.j4)(w,{key:0})):(0,o.kq)("",!0)])],64)}var g={name:"DashBoard",data(){return{checkSuccess:!1}},methods:{checkLogin(){this.$http.post("https://vue3-course-api.hexschool.io/v2/api/user/check").then((()=>{this.checkSuccess=!0})).catch((t=>{t&&(alert("您尚未登入"),this.$router.push("/login"))}))},logout(){this.$http.post("https://vue3-course-api.hexschool.io/v2/logout").then((t=>{document.cookie="hextoken=;expires=;",alert(t.data.message),this.$router.push("/login")}))}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hextoken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t,t?this.checkLogin():(alert("您尚未登入"),this.$router.push("/login"))}},v=s(89);const f=(0,v.Z)(g,[["render",x]]);var w=f}}]);
//# sourceMappingURL=664.5fc27a8d.js.map