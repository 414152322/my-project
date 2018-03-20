<template>
  <div class="navlist">
        <ul>
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/into">走进</router-link>
            </li>
            <li>
                <router-link to="/about">关于</router-link>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
  name:'navlist'
}
</script>

<style lang="css" scoped>
.navlist{ text-align:center;}
.navlist ul{ display:inline-block; }
.navlist ul li{float: left; margin: 0 0 0 10px}
.router-link-exact-active{ color: red}
</style>
