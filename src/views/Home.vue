<template>
<div>
  <NavBar v-if="getMediaWidth() > 720" :navLinksLeft="navLinksLeft" :navLinksRight="navLinksRight" />
  <NavBarMobile v-else :navLinksLeft="navLinksLeft" :navLinksRight="navLinksRight" />
  <Header />
  <About />
  <Service />
  <Footer />
</div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import NavBarMobile from "@/components/NavBarMobile.vue";
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import Service from "@/components/Service.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    NavBar,
    NavBarMobile,
    Header,
    About,
    Service,
    Footer
  },
  data() {
    return {
      navLinksLeft: [{
          name: 'Home',
          redirect: '#'
        },
        {
          name: 'Sobre',
          redirect: '#about'
        },
        {
          name: 'Serviços',
          redirect: '#services'
        },
        {
          name: 'Contato',
          redirect: '#contact'
        }
      ],
      navLinksRight: [{
          name: 'Blog',
          redirect: 'https://medium.com/p4husp'
        },
        {
          name: 'Material',
          redirect: 'https://p4husp.github.io/material'
        }
      ]
    }
  },
  methods: {
    getMediaWidth() {
      return screen.width
    }
  }
};
</script>
