<template lang="html">
  <section id="services" class="mx-auto py-16 bg-grey-lighter">
    <h2 class="text-5xl text-center text-black">
      Serviços
    </h2>
    <div class="flex flex-wrap justify-around items-center px-8 py-12">
      <ServiceBox v-for="service in servicesInfos" :serviceInfo="service"/>
    </div>
  </section>
</template>

<script>
import servicesInfos from "@/json/servicesInfos.json";
import ServiceBox from "@/components/ServiceBox.vue";

export default {
  components: {
    ServiceBox
  },
  data () {
    return {
      servicesInfos: servicesInfos
    }
  }
};
</script>

<style lang="css" scoped></style>
