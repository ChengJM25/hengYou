<template>
  <tab-index/>
  <header-up/>
  <nav-menu/>
  <router-view/>

  <main-foot-copyright/>
</template>

<script>
  import tabIndex from "components/content/tabIndex/tabIndex";
  import mainFootCopyright from "@/components/content/footCopyright/mainFootCopyright";
  import headerUp from "@/components/content/header/headerUp";
  import navMenu from "@/components/content/navMenu/navMenu";




  export default {
    components: {
      tabIndex,
      mainFootCopyright,
      headerUp,
      navMenu,



    }
  }
</script>


<style>
  @import "assets/css/base.css";
</style>
