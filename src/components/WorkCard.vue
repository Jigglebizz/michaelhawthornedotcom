<template>
  <v-container>
    <v-layout align-center>
      <v-flex ma-1 md-12 lg-9>
        <span v-html="content.text"></span>
      </v-flex>
      <v-flex v-if="content.image!==null" ma-1 md-12 lg-3>
        <img :src="content.image" height="150px"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['content']
}
</script>
