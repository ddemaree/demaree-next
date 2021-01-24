<template>
  <div class="dd-menu justify-self-end">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello friend!"
    }
  }
}
</script>

<style scoped>
.dd-menu {
  @apply bg-red-500;
}
</style>