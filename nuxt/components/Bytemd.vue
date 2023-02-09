<template>
  <Editor :value="value" :plugins="plugins" @change="handleChange" />
  <Viewer :value="value" :plugins="plugins" />
</template>

<script>
import 'bytemd/dist/index.css'
import gfm from '@bytemd/plugin-gfm'
import { Editor, Viewer } from '@bytemd/vue-next'

const plugins = [
  gfm(),
  // Add more plugins here
]

export default {
  components: { Editor, Viewer, toc },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleChange(v) {
      this.value = v
    },
  },
}
</script>