<template lang="html">
  <div class="flex-1 sm:flex-col shadow mx-4 px-4 py-8 rounded-lg">
    <div class="pb-6">
      <svg class="w-32 text-black">
        <font-awesome-icon :icon="serviceInfo.icon" />
      </svg>
    </div>
    <h3 class="fton-sanstext-2xl text-black">
      {{ serviceInfo.title }}
    </h3>
    <div class="py-4 px-4">
      <span class="font-serif text-grey-darker">
        {{ serviceInfo.description }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    serviceInfo: Object
    }
  }
</script>

<style lang="css" scoped>
</style>
