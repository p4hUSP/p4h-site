<template lang="html">
  <svg class="w-16 h-16">
    <font-awesome-icon :icon="{ prefix: socialinfo.iconPrefix, iconName: socialinfo.iconName }"/>
  </svg>
</template>

<script>
export default {
  props: {
    socialinfo: Object
  }
}
</script>

<style lang="css" scoped>
</style>
