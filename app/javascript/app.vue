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

<style lang="scss">
@import url('//fonts.googleapis.com/css?family=Nunito:400,600,700,800');
body {
  font-family: "Nunito";

  .notification a:not(.button):not(.dropdown-item) {
    text-decoration: none;

    &.pagination-link.is-current {
      color: white;
    }
  }
}
</style>
