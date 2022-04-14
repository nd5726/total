"use strict";(self["webpackChunktotal"]=self["webpackChunktotal"]||[]).push([[592],{1592:function(t,e,l){l.r(e),l.d(e,{default:function(){return Z}});var r=l(3396),s=l(7139),o=l(9242),a=l(2798);const c={class:"product w-full lg:pl-[240px] pt-[150px] lg:pt-8 pb-16"},i={class:"mainbody-limit px-8 md:px-8 pt-12"},n=(0,r._)("img",{class:"mr-4",src:a,alt:"回上頁"},null,-1),d=(0,r.Uk)("回上頁 "),m=[n,d],u={class:"flex mb-6 text-brown-dark"},p={class:"mr-2"},g=(0,r.Uk)("妥妥手做"),b=(0,r.Uk)("/"),x={class:"mr-2"},w=(0,r.Uk)("手做烘焙"),h=(0,r.Uk)("/"),A={class:"flex item-start justify-between mb-16 flex-wrap"},f={class:"flex w-full md:w-1/2 pr-0 md:pr-8 flex-shrink-0 flex-col items-stretch mb-8 md:mb-0"},k={class:"md:sticky top-10"},v={key:0,class:"w-full"},_={class:"w-full mt-4 flex imageslist"},y={key:0,class:"mb-4 w-1/5 pr-2"},U={class:"content flex flex-col justify-between p-12 md:p-16 border border-[#707070] w-full md:w-6/12 md:max-w-[500px]"},C={class:""},P={class:"flex items-center mb-5 flex-wrap-reverse"},B={class:"text-brown-dark text-2xl sm:text-3xl font-bold mr-4"},Y={class:"text-white bg-brown-dark rounded text-sm px-2 py-1 my-1"},I={class:"text-[#707070] text-base sm:text-lg font-bold mr-4 mb-4"},z={class:"text-gray-400 line-through mr-2"},D={class:"text-brown-light text-base sm:text-lg font-bold leading-7 sm:leading-8 my-2"},V={class:"text-brown-light text-base sm:text-lg font-bold leading-7 sm:leading-8 my-2"},E={class:"flex flex-col mt-24 md:mt-8"},j={class:"flex items-center mb-8"},q=(0,r._)("label",{class:"mr-2 text-[#707070]",for:"cart_number"},"選擇數量 :",-1);function R(t,e,l,a,n,d){const R=(0,r.up)("router-link"),$=(0,r.up)("VLoading");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",c,[(0,r._)("section",i,[(0,r._)("button",{class:"flex items-center text-brown-dark font-bold py-2 mb-8 transition-all relative left-0 hover:-left-2",onClick:e[0]||(e[0]=e=>t.$router.go(-1))},m),(0,r._)("ol",u,[(0,r._)("li",p,[(0,r.Wm)(R,{class:"mr-2",to:"/"},{default:(0,r.w5)((()=>[g])),_:1}),b]),(0,r._)("li",x,[(0,r.Wm)(R,{class:"mr-2",to:"/product"},{default:(0,r.w5)((()=>[w])),_:1}),h]),(0,r._)("li",null,[(0,r._)("a",null,(0,s.zw)(n.tempProduct.title),1)])]),(0,r._)("div",A,[(0,r._)("div",f,[(0,r._)("div",k,[n.tempProduct.imageUrl?((0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("div",{class:"product-image w-full bg-cover",style:(0,s.j5)({backgroundImage:`url( ${n.tempProduct.imageUrl} )`})},null,4)])):(0,r.kq)("",!0),(0,r._)("ul",_,[n.tempProduct.imageUrl?((0,r.wg)(),(0,r.iD)("li",y,[(0,r._)("div",{class:"product-image w-full bg-cover",style:(0,s.j5)({backgroundImage:`url( ${n.tempProduct.imageUrl} )`})},null,4)])):(0,r.kq)("",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.tempProduct.imagesUrl,(t=>((0,r.wg)(),(0,r.iD)("li",{key:t.id,class:"mb-4 w-1/5 pr-2"},[(0,r._)("div",{class:"product-image w-full bg-cover",style:(0,s.j5)({backgroundImage:`url( ${t} )`})},null,4)])))),128))])])]),(0,r._)("div",U,[(0,r._)("div",C,[(0,r._)("div",P,[(0,r._)("h1",B,(0,s.zw)(n.tempProduct.title),1),(0,r._)("span",Y,(0,s.zw)(n.tempProduct.category),1)]),(0,r._)("p",I,[(0,r._)("span",z,"$ "+(0,s.zw)(n.tempProduct.origin_price),1),(0,r.Uk)(" $ "+(0,s.zw)(n.tempProduct.price)+" /"+(0,s.zw)(n.tempProduct.unit),1)]),(0,r._)("p",D,(0,s.zw)(n.tempProduct.description),1),(0,r._)("p",V,(0,s.zw)(n.tempProduct.content),1)]),(0,r._)("div",E,[(0,r._)("div",j,[q,(0,r.wy)((0,r._)("input",{id:"cart_number",onChange:e[1]||(e[1]=t=>d.numberCheck()),type:"number",min:"1",max:"10","onUpdate:modelValue":e[2]||(e[2]=t=>n.qty=t),class:"w-28 p-2 border border-[#707070] rounded-none bg-transparent appearance-none text-center"},null,544),[[o.nr,n.qty]])]),(0,r._)("button",{type:"button",onClick:e[3]||(e[3]=t=>d.addtoCart(n.tempProduct.id,n.qty)),class:"w-full text-lg border border-[#707070] text-[#707070] py-3 transition-all hover:bg-[#707070] hover:text-white relative top-0 left-0 cursor-pointer hover:-top-1 hover:-left-1"},"加入購物車")])])])])]),(0,r.Wm)($,{active:n.isLoading},null,8,["active"])],64)}var $=l(5820),Q={data(){return{tempProduct:[],qty:1,isLoading:!0}},mounted(){this.getProducts()},methods:{getProducts(){const{id:t}=this.$route.params;this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/nd5726-hexschool/product/${t}`).then((t=>{this.tempProduct=t.data.product,this.isLoading=!1}))},numberCheck(){this.qty<=0&&(alert("數量不得小於1"),this.qty=1)},addtoCart(t,e=1){e<1&&(e=1),this.isLoading=!0;const l={product_id:t,qty:e};this.$http.post("https://vue3-course-api.hexschool.io/v2/api/nd5726-hexschool/cart",{data:l}).then((t=>{console.log(t),alert(t.data.message),this.isLoading=!1,$.Z.emit("get-carts")})).catch((t=>{console.log(t)}))}}},J=l(89);const L=(0,J.Z)(Q,[["render",R]]);var Z=L},2798:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAALCAYAAADVymv/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADUSURBVHgB7ZXBDYIwFIb/IlcTR3AE3OBxNWjiBgUHkA3UCXQCywZiwgDdwBVcwQGkvibGYATEc/sdmh56+vK+V+BP1kvapAkd4Sjh0IeSaBKMcUCNyIRYwVGCIY/knCKWdTUG90eIuCj1DY7yc8JsgrVBzte9qnQBx+kU9kpQcYJTTjBWDk9Vk1ZhMiEKBBQneDlV2tl91caXMJsgi9oJg5RllfB88BZmExyNceYEUYeYubzY+xD2aCbIiz2HpxORJbRlbZJ/wrSotIanF5EtyMAzmCdQPUOzVN63ZgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=592.d22159b0.js.map