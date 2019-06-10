<template>
  <span>
    <span v-if="content.length > 1">
      <v-card-text class="white text--primary">
        <v-window v-model="contentSelection">
          <v-window-item
            v-for="(content, j) in content"
            :key="j"
            :value="j"
          >
            <WorkDescription v-bind:content="content" />
          </v-window-item>
        </v-window>
      </v-card-text>
      <v-card-actions class="justify-space-between white text--primary">
        <v-btn
          :color="color"
          flat
          icon
          @click="prev()"
        >
          <v-icon light>chevron_left</v-icon>
        </v-btn>
        <v-item-group
          v-model="contentSelection"
          class="text-xs-center"
          mandatory
        >
          <v-item
            v-for="n in content.length"
            :key="`btn-${n}`"
          >
            <v-btn
              slot-scope="{ active, toggle }"
              :input-value="active"
              :color="color"
              flat
              icon
              @click="toggle()"
            >
              <v-icon>fiber_manual_record</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>
        <v-btn
          :color="color"
          flat
          icon
          @click="next()"
        >
          <v-icon>chevron_right</v-icon>
        </v-btn>
      </v-card-actions>
    </span>
    <span v-else>
      <v-card-text class="white text--primary">
        <WorkDescription v-bind:content="content[0]" />
      </v-card-text>
    </span>
  </span>
</template>

<script>
import WorkDescription from '@/components/WorkDescription'

export default {
  components: {WorkDescription},
  props: ['color', 'content'],
  methods: {
    prev: function () {
      this.contentSelection = this.contentSelection - 1 < 0
        ? this.content.length - 1
        : this.contentSelection - 1
    },
    next: function () {
      this.contentSelection = this.contentSelection + 1 === this.content.length
        ? 0
        : this.contentSelection + 1
    }
  },
  data: function () {
    return {
      contentSelection: 0
    }
  }
}
</script>
