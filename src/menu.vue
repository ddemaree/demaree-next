<template>
<div class="dd-menu justify-self-end">
  <button type="button" @click="open = !open">
    <i class="fas fa-bars"></i>
    <span class="ml-1">Menu {{ open }}</span>
  </button>
</div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      word: "MENU"
    }
  }
}
</script>