<template>
  <div id="header">
    <div class="header_header">
      <div>
        <img src="../img/logo.png" alt="">
      </div>
      <ul class="header_ul">
        <li>
          <router-link to="">首页</router-link>
        </li>
        <li class="product">
          <router-link to="">产品</router-link>
        </li>
        <li>
          <router-link to="">商城</router-link>
        </li>
        <li>
          <router-link to="">剃须文化</router-link>
        </li>
        <li>
          <router-link to="">体验中心</router-link>
        </li>
        <li>
          <router-link to="">产品服务</router-link>
        </li>
      </ul>
      <div class="header_img">
        <a href=""><img src="../img/header_icons.png" alt=""></a>
        <a href=""><img src="../img/person-icon.png" alt=""></a>
      </div>
      <div class="clear"></div>
    </div>
    <div class="header_product">
      <ul>
        <li><a href="">作品集</a></li>
        <li><a href="">剃须护理</a></li>
        <li><a href="">旅行套装</a></li>
        <li><a href="">剃须配件</a></li>
        <li><a href="">毛刷</a></li>
        <li><a href="">手柄材质</a></li>
        <li><a href="">刀头</a></li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../css/header.css";
</style>
