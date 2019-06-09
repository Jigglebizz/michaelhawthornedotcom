<template>
  <v-container pa-0 fluid>
    <v-layout justify-start align-space-around column fill-height>
      <!--<v-flex pa-6 ma-0 hidden-sm-and-down md12 fluid>
        <v-card ma-0 pa-3> &nbsp;
        </v-card>
      </v-flex>-->
      <v-flex ma-0 pa-0 xs12 fluid>
        <v-card dark tile color="primary">
          <v-card-text>
            <v-container pl-3 py-1>
              <v-layout row justify-space-around>
                <v-flex>
                  <h2>Michael Hawthorne's Website</h2>
                </v-flex>
                <v-flex shrink>
                  <router-link to="/">
                    <v-btn fab small dark color="light-blue">
                      <v-icon>home</v-icon>
                    </v-btn>
                  </router-link>
                  <router-link to="/Work">
                    <v-btn fab small dark color="light-blue">
                      <v-icon>work</v-icon>
                    </v-btn>
                  </router-link>
                  <router-link to="/Play">
                    <v-btn fab small dark color="light-blue">
                      <v-icon>music_note</v-icon>
                    </v-btn>
                  </router-link>
                  <router-link to="/Contact">
                    <v-btn fab small dark color="light-blue">
                      <v-icon>chat</v-icon>
                    </v-btn>
                  </router-link>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
      <router-view />
    </v-layout>
  </v-container>
</template>

<style scoped>
</style>

<script>
import ImageTracer from '@/components/toys/ImageTracer'
import Home from '@/components/Home'
import Work from '@/components/Work'
import Play from '@/components/Play'
import Contact from '@/components/Contact'

export default {
  name: 'Page',
  components: {
    ImageTracer,
    Home,
    Work,
    Play,
    Contact
  },
  computed: {
    bigScreen: function () {
      console.log(this.$vuetify.breakpoint.mdAndUp)
      return this.$vuetify.breakpoint.mdAndUp
    }
  },

  data: function () {
    return {
      portrait: require('@/assets/portrait.jpg'),
      currentPage: 0
    }
  }
}
</script>
