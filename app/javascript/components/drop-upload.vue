<template>
  <div class="dropzone" id="dropzone">

  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Dropzone from 'dropzone';
import "dropzone/dist/dropzone.css";


export default {
  props: ['url', 'headers'],
  ready: function() {
    const dropzone  = new Dropzone('#dropzone', {
      url,
      headers,
      removedfile: (file) => {
        this.$emit('removedfile', file)
      },
      error: (error, message) => {
        this.$emit('error', error, message)
      }
    })
  }
}
</script>
