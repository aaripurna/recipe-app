<template>
  <main role="main" id="app">
    <div class="container is-fullhd">
      <div class="notification">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Home"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
