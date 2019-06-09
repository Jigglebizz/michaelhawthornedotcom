<template>
  <v-container fluid>
    <v-layout row justify-center fill-height align-center>
      <v-flex shrink ma-6 pa-6>
        <v-avatar
            size="128px"
        >
            <img src="@/assets/portrait.jpg">
        </v-avatar>
      </v-flex>
      <v-flex ma-6 md6>
        <v-card pa-2>
          <v-card-text>
            <p>What is a Michael Hawthorne?</p>
            <p>What makes an anteater eat ants? Or a Domino's pan pizza taste so stupidly good? Now I'm not saying it's me, I would never mean to imply something as bold and self-serving as that.
               All I'm saying is that I'm actually very good at <span ref="myskills" /> and playing it <i>cool</i> </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row align-center justify-center>
    <v-flex md6>
      <v-layout row justify-space-around align-center ma-4>
        <v-btn icon href="http://www.linkedin.com/in/michael-hawthorne-90a4429b" target="_blank">
          <img src="@/assets/linkedin-Blue-34.png" height="32px" />
        </v-btn>
        <v-btn icon href="http://www.github.com/Jigglebizz" target="_blank">
          <img src="@/assets/GitHub-Mark-32px.png" height="32px" />
        </v-btn>
        <v-btn icon href="https://www.instagram.com/jigglebizz/" target="_blank">
          <img src="@/assets/igicon.png" height="32px"/>
        </v-btn>
        <v-btn icon href="https://open.spotify.com/user/1218184340?si=CNlrca21RF2iVyXhrzfkxg" target="_blank">
          <img src="@/assets/Spotify_Icon_RGB_Green.png" height="32px" />
        </v-btn>
      </v-layout>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  mounted: function () {
    var skillsHtml = '<strong>' + this.skills.join('</strong>, <strong>') + '</strong>,'
    this.$refs.myskills.innerHTML = skillsHtml
  },
  data: function () {
    return {
      skills: [
        'C++',
        'project management',
        'customer relationships',
        'continuous testing strategies',
        'web architectures',
        'software development as a discipline',
        'piano',
        'woodworking'
      ]
    }
  }
}
</script>
