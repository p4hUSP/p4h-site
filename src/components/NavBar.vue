<template lang="html">
  <nav class= "bg-black fixed fixed w-screen mx-auto flex flex-row flex-wrap items-center justify-between px-16 py-4" id="nav">
      <div class="flex flex-wrap">
        <a href="#"><img class= "h-12" src="@/assets/logo_min.png" alt="Logo da P4HUSP"></a>
        <ul class="flex items-center list-reset text-xl">
          <li class="ml-6">
            <a class="no-underline text-grey-dark hover:text-grey" href="#">Home</a>
          </li>
          <li class="ml-4">
            <a class="no-underline text-grey-dark hover:text-grey" href="#sobre">Sobre</a>
          </li>
          <li class="ml-4">
            <a class="no-underline text-grey-dark hover:text-grey" href="#services">Serviços</a>
          </li>
          <li class="ml-4">
            <a class="no-underline text-grey-dark hover:text-grey" href="#contato">Contato</a>
          </li>
        </ul>
      </div>
      <div class="flex flex-wrap">
        <ul class="flex items-center list-reset text-xl">
          <li class="ml-6">
            <a class="no-underline text-grey-dark hover:text-grey" href="https:/medium.com/p4husp">Blog</a>
          </li>
          <li class="ml-4">
            <a class="no-underline text-grey-dark hover:text-grey" href="https:/p4husp.github.io/material">Material</a>
          </li>
        </ul>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
