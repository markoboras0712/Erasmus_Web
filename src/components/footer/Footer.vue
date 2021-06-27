<template>
  <v-footer class="font-weight-medium" dark dense color="blue">
    <v-container fluid>
      <v-row>
        <v-col md="6">
          <OwnersInfo />
        </v-col>
        <v-col md="6">
          <CreatorsInfo />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import OwnersInfo from './OwnersInfo.vue'
import CreatorsInfo from './CreatorsInfo.vue'

export default {
  components: {
    OwnersInfo,
    CreatorsInfo
  }
}
</script>
