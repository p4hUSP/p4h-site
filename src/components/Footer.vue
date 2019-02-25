<template lang="html">
  <footer id="contact" class="bg-black py-8 px-16 px">
    <div class="flex flex-wrap items-center justify-around">
      <div class="flex flex-col items-center content-around">
        <div class="px-4 py-6">
          <span class="text-grey text-2xl">
            Siga-nos nas redes sociais!
          </span>
        </div>
        <div class="px-4 py-6">
          <span class="text-grey">
            Caso tenha alguma dúvida, fique a vontade para enviar um e-mail!
          </span>
        </div>
      </div>
      <div class="flex flex-col items-center content-around">
        <div class="px-4 py-6">
          <span class="text-grey">
            <SocialMediaIcon v-for="socialinfo in socialinfos" :socialinfo="socialinfo"/>
          </span>
        </div>
        <div class="px-4 py-6">
          <span class="text-grey">
            Email: p4husp@gmail.com
          </span>
        </div>
      </div>
    </div>
    <br />
    <p class="text-grey">&copy; 2019 P4H - Programação para Humanidades</p>
  </footer>
</template>

<script>
import socialInfos from "@/json/socialInfos.json";
import SocialMediaIcon from "@/components/SocialMediaIcon.vue";

export default {
  components: {
    SocialMediaIcon
  },
  data () {
    return {
      socialinfos: socialInfos
    }
  }
};
</script>

<style lang="css" scoped></style>
