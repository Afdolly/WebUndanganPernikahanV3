<template>
  <div class="relative h-screen w-full overflow-hidden">
    <img src="../assets/burung.png" class="bird bird-1" />
    <img src="../assets/burung.png" class="bird bird-2" />
    <img src="../assets/burung.png" class="bird bird-3" />
    <img src="../assets/burung.png" class="bird bird-4" />
    <img src="../assets/burung.png" class="bird bird-5" />
    <img src="../assets/burung.png" class="bird bird-6" />
    <img src="../assets/burung.png" class="bird bird-7" />
  </div>
</template>

<script>
export default {
  name: "Birds",
};
</script>

<style scoped>
@keyframes fly-right {
  0% {
    transform: translateX(-10vw) translateY(-15px) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateX(50vw) translateY(-25px) scale(1.05);
  }
  100% {
    transform: translateX(110vw) translateY(-35px) scale(1);
    opacity: 0;
  }
}

.bird {
  @apply absolute left-[-100px] w-[50px] opacity-100;
  animation: fly-right 12s linear infinite;
}

.bird-1 {
  @apply top-[15%] w-[45px];
  animation-delay: 0s;
}

.bird-2 {
  @apply top-[10%] w-[52px];
  animation-delay: 0.8s;
}

.bird-3 {
  @apply top-[15%] w-[50px];
  animation-delay: 0.8s;
}

.bird-4 {
  @apply top-[20%] w-[50px];
  animation-delay: 0.8s;
}

.bird-5 {
  @apply top-[12%] w-[55px];
  animation-delay: 1.6s;
}

.bird-6 {
  @apply top-[18%] w-[55px];
  animation-delay: 1.6s;
}

.bird-7 {
  @apply top-[14%] w-[58px];
  animation-delay: 2.4s;
}
</style>
