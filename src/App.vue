<template>
  <v-app>
    <v-content>
      <Page></Page>
    </v-content>
  </v-app>
</template>

<script>
import Page from './components/Page'

export default {
  name: 'App',
  components: {
    Page
  }
}
</script>
