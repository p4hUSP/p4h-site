<template lang="html">
  <div>
    <button
      class="fixed z-50 pin-l ml-2 mt-2 bg-white shadow-lg rounded-full w-16 h-16"
      type="button"
      name="button"
      v-on:click="ToggleMenuChange"
    >
      <span class="text-2xl">&#9776;</span>
    </button>
    <nav
      :class="[
        'fixed flex flex-col h-screen z-40 pt-12 bg-grey-lightest toggled-menu',
        toggled ? 'visible w-4/5' : 'invisible w-1'
      ]"
    >
      <ul
        :class="[
          'list-reset text-3xl toggled-items',
          toggled ? 'visible' : 'invisible ml-0 opacity-0'
        ]"
      >
        <li
          v-for="navlink in navLinksLeft"
          v-bind:key="navlink.name"
          class="my-8"
        >
          <a
            v-on:click="ToggleMenuChange"
            class="no-underline text-grey-dark hover:text-grey"
            :href="navlink.redirect"
            >{{ navlink.name }}</a
          >
        </li>
      </ul>
      <ul
        :class="[
          'list-reset text-3xl toggled-items',
          toggled ? 'visible' : 'invisible ml-0 opacity-0'
        ]"
      >
        <li
          v-for="navlink in navLinksRight"
          v-bind:key="navlink.name"
          class="my-8"
        >
          <a
            class="no-underline text-grey-dark hover:text-grey"
            :href="navlink.redirect"
            >{{ navlink.name }}</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    navLinksLeft: {
      type: Array,
      default() {
        return [];
      }
    },
    navLinksRight: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      toggled: false
    };
  },
  methods: {
    ToggleMenuChange() {
      this.toggled = !this.toggled;
    }
  }
};
</script>

<style lang="css" scoped>
.toggled-menu {
  opacity: .97;
  transition: all 0.4s ease-in-out;
}

.toggled-items {
  transition: all 0.1s ease-in-out;
}
</style>
