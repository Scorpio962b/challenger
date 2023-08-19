<template>
  <NavBarcomp/>
  <router-view/>
  <Footercomp/>
</template>
<script>
import NavBarcomp from "./components/NavComp.vue";
import Footercomp from "./components/footerComp.vue";

export default{
  components:{NavBarcomp , Footercomp}
}
</script>
<style>
@import url('https://fonts.cdnfonts.com/css/all-pony');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}
.collapse{
  margin-right: 70px!important;
}
nav a {
  font-size: 30px!important;
  color: #ff71e0!important;
}
nav a.router-link{
  font-size:80px!important;
  font-family: 'All Pony', sans-serif!important;
}
nav a.router-link-exact-active {
  color: rgb(254, 129, 221) !important;
  font-family: 'All Pony', sans-serif!important;
  box-shadow: 12px 12px 2px 1px rgba(63, 63, 63, 0.2)!important;
}
</style>


