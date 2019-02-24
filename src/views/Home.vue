<template>
  <div>
    <NavBar />
    <Header />
    <About />
    <Service />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import Service from "@/components/Service.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    NavBar,
    Header,
    About,
    Service,
    Footer
  }
};
</script>
