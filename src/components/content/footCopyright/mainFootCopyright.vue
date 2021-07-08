<template>
  <foot-copyright>
    <foot-copyright-item>

    </foot-copyright-item>
  </foot-copyright>
</template>

<script>
import footCopyright from "@/components/content/footCopyright/footCopyright";
import footCopyrightItem from "@/components/content/footCopyright/footCopyrightItem";

export default {
  name: "mainFootCopyright",
  components: {
    footCopyright,
    footCopyrightItem
  }
}
</script>

<style scoped>
  .imgg img {
    width: 40px;
  }
</style>
