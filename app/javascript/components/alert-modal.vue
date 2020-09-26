<template>
  <div class="modal-card" style="width: auto">
    <section class="modal-card-body">
      <p>{{ text }}</p>

      <div class="action">
        <b-button class="button is-primary" @click="$emit('accept')">Yes</b-button>
        <b-button class="button is-secondary" @click="$emit('cancel')">No</b-button>
      </div>
    </section>
</div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="scss" scoped>
.modal-card-body {
  padding: 10px;
  border-radius: 3px;
}
.action {
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
}
</style>
