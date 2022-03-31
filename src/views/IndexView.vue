<template>
    <section class="w-full flex flex-col overflow-x-hidden">
      <div class="banner w-full h-[100vh] lg:pl-[240px]  flex justify-center items-end ">
        <button class="scroll-down text-white mb-16" type="button">SCROLL DOWN</button>
      </div>
      <div class="main-container">
        <div class="mainbody mainbody-limit">
            <div class="flex items-center w-full mb-24 md:mb-8 flex-wrap md:flex-nowrap justify-end md:justify-between ">
              <div class="w-full md:w-4/12">
                <img class="image" src="../assets/p02.png" alt="">
              </div>
              <div class="w-2/12 xl:w-3/12 h-[0.05em] bg-[#624D40] ml-16 mr-14 rotate-90 md:rotate-0"></div>
              <div class="w-full md:w-5/12 mt-8 md:mt-0">
                <h2 class="text-2xl xl:text-3xl font-bold text-brown-dark mb-6">巧克力生吐司</h2>
                <p class="leading-7 xl:leading-9 text-base xl:text-lg text-brown-dark ">採用55%厄瓜多爾巧克力<br>法芙娜 100%無糖純可可粉<br>柔軟濕潤的吐司體搭配濃濃的巧克力甜而不膩</p>
              </div>
            </div>
            <div class="flex items-start md:items-center w-full mb-24 md:mb-8 flex-wrap md:flex-nowrap flex-col-reverse md:flex-row md:justify-between">
              <div class="w-full md:w-5/12 pl-0 md:pl-6 mt-8 md:mt-0 text-right">
                <h2 class="text-2xl xl:text-3xl font-bold text-brown-dark mb-6">原味生吐司</h2>
                <p class="leading-7 xl:leading-9 text-base xl:text-lg text-brown-dark">凱薩琳麵粉搭配純正龍眼蜜<br>採用AOP產區發酵奶油，皮薄內裡鬆軟Q彈</p>
              </div>
              <div class="w-2/12 xl:w-3/12 max-w-[200px] h-[0.05em] bg-[#624D40] ml-16 mr-14  rotate-90 md:rotate-0"></div>
              <div class="w-full md:w-4/12">
                <img class="image" src="../assets/p03.png" alt="">
              </div>
            </div>
            <div class="flex items-center w-full mb-24 md:mb-8 flex-wrap md:flex-nowrap justify-end md:justify-between ">
              <div class="w-full md:w-4/12">
                <img class="image" src="../assets/p01.png" alt="">
              </div>
              <div class="w-2/12 xl:w-3/12 h-[0.05em] bg-[#624D40] ml-16 mr-14 rotate-90 md:rotate-0"></div>
              <div class="w-full md:w-5/12 mt-8 md:mt-0">
                <h2 class="text-2xl xl:text-3xl font-bold text-brown-dark mb-6">海鹽奶油捲</h2>
                <p class="leading-7 xl:leading-9 text-base xl:text-lg text-brown-dark ">採用AOP產區發酵奶油<br>奶香濃厚清爽不油膩<br>烘烤後外皮酥脆內裡柔軟有層次</p>
              </div>
            </div>
            <div class="flex items-start md:items-center w-full mb-24 md:mb-8 flex-wrap md:flex-nowrap flex-col-reverse md:flex-row md:justify-between">
              <div class="w-full md:w-5/12 pl-0 md:pl-6 mt-8 md:mt-0 text-right">
                <h2 class="text-2xl xl:text-3xl font-bold text-brown-dark mb-6">奶酥小餐包</h2>
                <p class="leading-7 xl:leading-9 text-base xl:text-lg text-brown-dark">麵包體鬆軟、富有空氣感<br>內餡手工自製減糖奶酥清爽無負擔</p>
              </div>
              <div class="w-2/12 xl:w-3/12 max-w-[200px] h-[0.05em] bg-[#624D40] ml-16 mr-14  rotate-90 md:rotate-0"></div>
              <div class="w-full md:w-4/12">
                <img class="image" src="../assets/p04.png" alt="">
              </div>
            </div>
        </div>
        <div class="mooncake bg-[#D9C9BE] bg-opacity-40 pt-16 pb-20 md:py-20">
          <div class="mainbody-limit flex relative">
            <div class="px-8 sm:pl-16 md:pl-20">
              <h2 class="text-3xl xl:text-4xl font-bold text-brown-dark mb-8">手做蛋黃酥</h2>
              <p class="text-base xl:text-xl text-brown-dark font-bold leading-8 xl:leading-10">採用19號無水奶油<br>AOP奶油烏豆沙<br>新鮮整顆紅土鹹鴨蛋，蛋質細膩、鬆沙，香氣十足</p>
            </div>
            <div class=" max-w-[250px] xl:max-w-[400px] bottom-[-150%] md:-bottom-48 absolute -right-16 md:right-20">
              <img src="../assets/mooncake.png" alt="">
            </div>
          </div>
        </div>
         <div class="mooncake pt-28 sm:pt-20 pb-40">
          <div class="mainbody-limit flex relative">
            <div class="bg-[#D9C9BE] bg-opacity-60 w-[500px] xl:w-[700px] mx-auto max-w-[90%]  sm:max-w-[80%] text-center pl-[100px] pr-8 py-12 sm:p-16 mt-32 relative">
              <div class="max-w-[350px] xl:max-w-[500px] absolute left-[-180px] sm:left-[-140px] xl:left-[-200px] bottom-0">
                <img src="../assets/mooncake_wrap.png" alt="">
              </div>
              <p class="text-base text-right sm:text-center xl:text-xl text-brown-dark font-bold leading-8 xl:leading-10">每個蛋黃酥有獨立封口包裝<br>方便保存及分享食用</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<style lang="scss">
  .banner{
    background-image:url(../assets/index_bg.png);
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }
  .mainbody{
    padding: 140px 80px 140px 60px;
    @media (max-width:767px){
      padding: 140px 60px 140px 60px;
    }
    @media (max-width:641px){
      padding: 60px 30px 60px 30px;
    }
  }
  .mainbody-limit{
    max-width:1160px;
    margin: 0 auto;
    @media (max-width:1280px){
      max-width:900px;
    }
  }
  .image{
    filter:drop-shadow(25px 25px 0px rgba(144,123,110,0.8));
    @media (max-width:1280px){
      filter:drop-shadow(15px 15px 0px rgba(144,123,110,0.8));
    }
    @media (max-width:767px){
      filter:none;
    }
  }
  .scroll-down{
    display: flex;
    flex-direction:column;
    align-items: center;
    &:before{
      content:'';
      height:70px;
      width:1px;
      margin-bottom:10px;
      background-color: #fff;
    }
  }
</style>
