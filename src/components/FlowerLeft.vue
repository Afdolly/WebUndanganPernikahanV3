<template>
  <img
    src="../assets/bunga2.png"
    alt="Gambar Bunga 2"
    class="animate-pulse-sway absolute -bottom-36 -left-36 z-20 w-[400px]"
  />
</template>

<script>
export default {
  name: "FlowerLeft",
};
</script>

<style scoped>
.animate-pulse-sway {
  animation: pulse-sway 3s ease-in-out infinite alternate;
}

@keyframes pulse-sway {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.05) rotate(3deg);
  }
}
</style>
