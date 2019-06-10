<template>
  <v-container fluid grid-list-xl>
    <v-layout align-center v-bind="displayBinding()">
      <v-flex ma-1 > <!--md12 lg9>-->
        <span v-html="content.text"></span>
      </v-flex>
      <v-flex v-if="content.image!==null" ma-1 >
        <img ref="image" :src="content.image" :style="imageStyle"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['content'],
  mounted: function () {
    this.isMounted = true
  },
  methods: {
    displayBinding: function () {
      const binding = {
        alignCenter: true
      }
      if (this.$vuetify.breakpoint.smAndUp) {
        binding.row = true
        binding.column = false
      } else {
        binding.column = true
        binding.row = false
      }

      return binding
    }
  },
  computed: {
    imageStyle: function () {
      if (!this.isMounted) {
        return ''
      }
      if (typeof this.$refs.image === 'undefined') {
        return ''
      }

      if (this.$vuetify.breakpoint.smAndUp) {
        return 'height: 150px'
      } else {
        var parentWidth = this.$refs.image.parentElement.parentElement.offsetWidth
        return 'width: ' + parentWidth + 'px'
      }
    }
  },
  data: function () {
    return {
      isMounted: false
    }
  }
}
</script>
