<template>
  <div class="home">
    <v-carousel hide-delimiters>
      <v-carousel-item
      v-for="(beach,i) in beaches"
      :key="i"
      :src="beach.image"
    ></v-carousel-item>
    </v-carousel>
    <homepage-tab></homepage-tab>
  </div>
</template>

<script>
import HomepageTab from '../components/HomepageTab.vue'
import beaches from '../data/novalja/beaches.js'
export default {
  name: 'Home',
  components: {
    HomepageTab
  },
  computed: {
    beaches () {
      return beaches
    }
  }
}
</script>
