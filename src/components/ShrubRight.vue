<template>
  <img
    src="../assets/bunga1.png"
    alt="Gambar Semak"
    class="animate-pulse-sway-mirror-s absolute -right-[120px] bottom-[20px] w-[350px]"
  />
</template>

<script>
export default {
  name: "ShrubRight",
};
</script>

<style scoped>
.animate-pulse-sway-mirror-s {
  animation: pulse-sway-mirror-s 3s ease-in-out infinite alternate;
}

@keyframes pulse-sway-mirror-s {
  0%,
  100% {
    transform: scale(1) scaleX(-1) rotate(-60deg);
  }
  50% {
    transform: scale(1.01) scaleX(-1) rotate(-60deg);
  }
}
</style>
