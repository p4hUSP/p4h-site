<template lang="html">
  <nav
    class="bg-black fixed fixed w-screen mx-auto flex flex-row flex-wrap items-center justify-between px-16 py-4"
    id="nav"
  >
    <div class="flex flex-wrap">
      <a href="#"
        ><img class="h-12" src="@/assets/logo_min.png" alt="Logo da P4HUSP"
      /></a>
      <ul class="flex items-center list-reset font-sans text-base uppercase">
        <li v-for="navlink in navLinksLeft" class="ml-6">
          <a class="no-underline text-grey-dark hover:text-grey" :href="navlink.redirect">{{ navlink.name }}</a>
        </li>
      </ul>
    </div>
    <div class="flex flex-wrap">
      <ul class="flex items-center list-reset font-sans text-base uppercase">
        <li class="ml-6" v-for="navlink in navLinksRight">
          <a class="no-underline text-grey-dark hover:text-grey" :href="navlink.redirect">
            {{navlink.name}}
          </a>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
export default {
  props: {
    navLinksLeft: {
      type: Array,
      default () {
        return []
      }
    },
    navLinksRight: {
      type: Array,
      default () {
        return []
      }
    }
  }
};
</script>

<style lang="css" scoped></style>
