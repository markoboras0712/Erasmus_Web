<template>
  <v-container>
    <apartment
      v-for="(apartment, index) in apartments"
      :key="(apartment, index)"
      class="mt-15"
      :apartment="apartment"
    ></apartment>
    <AddApartmentFrom v-if="admin"/>
  </v-container>
</template>

<script>
import Apartment from '../components/Apartment.vue'
import AddApartmentFrom from '../components/AddApartmentForm.vue'

export default {
  computed: {
    apartments () {
      return this.$store.getters.apartments
    },
    currentUser () {
      return this.$store.getters.user
    },
    admin () {
      const response = this.$store.getters.user(localStorage.getItem('email'))
      console.log(response)
      return response
    }
  },
  components: {
    Apartment,
    AddApartmentFrom
  }
}
</script>
