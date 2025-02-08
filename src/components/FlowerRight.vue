<template>
  <img
    src="../assets/bunga2.png"
    alt="Gambar Bunga 2"
    class="animate-pulse-sway-mirror absolute -bottom-36 -right-36 z-20 w-[400px] scale-x-[-1]"
  />
</template>

<script>
export default {
  name: "FlowerRight",
};
</script>

<style scoped>
@keyframes pulse-sway-mirror {
  0%,
  100% {
    transform: scaleX(-1) scale(1) rotate(0deg);
  }
  50% {
    transform: scaleX(-1) scale(1.05) rotate(3deg);
  }
}

.animate-pulse-sway-mirror {
  animation: pulse-sway-mirror 3s ease-in-out infinite alternate;
}
</style>
