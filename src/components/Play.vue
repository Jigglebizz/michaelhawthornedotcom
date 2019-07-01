<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex>
        <v-container fluid>
          <v-layout column wrap>
            <v-flex>
              <v-card
                color="deep-purple darken-3"
                dark
              >
                <v-card-text>
                From 2013-2015 I wrote and played for a band called Adult Science
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex>
              <v-card
                color="orange"
                dark
              >
                <v-card-text>
                  We played live often, and I mixed and released the EP and and LP available below
                </v-card-text>
              </v-card>
            </v-flex>
            <v-card
              color="amber"
              dark
            >
              <v-card-text>
                <v-container fluid>
                  <v-layout row justify-space-around>
                    <v-card tile>
                      <a
                        href="https://adultscience.bandcamp.com/album/correlations-ep"
                        target="_blank"
                      >
                        <img
                          :src="require('@/assets/correlationscover.jpg')" width="150px" height="150px"
                        />
                      </a>
                    </v-card>
                    <v-card tile>
                      <a
                        href="https://adultscience.bandcamp.com/album/causations"
                        target="_blank"
                      >
                        <img
                          :src="require('@/assets/causationscover.jpg')" width="150px" height="150px"
                        />
                      </a>
                    </v-card>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-card>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex
        justify-self-center
        align-self-center
      >
        <v-card
          color="lime"
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/D1wKyLwJvhU"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
}
</script>
