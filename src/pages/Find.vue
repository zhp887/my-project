<template lang="html">
<div>
  <h2>发现</h2>
  <div class='tabs2'>
    <!-- 二级路由 -->
    <!-- 大多数情况下，exact-active-class 和 active-class 用哪个都可以 -->
    <router-link to='/find/good' tag='span' exact-active-class='on'>发现好货</router-link>
    <router-link to='/find/price' tag='span' exact-active-class='on'>发现优惠</router-link>
  </div>
  <!-- 这是二级路由的位置 -->
  <router-view></router-view>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
div>h2{
    text-align :center
}
.tabs2 {
  display: flex;
}
.tabs2>span {
  flex: 1;
  border: 1px solid #ccc;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
}
.tabs2>span.on {
  color: red;
}
</style>
