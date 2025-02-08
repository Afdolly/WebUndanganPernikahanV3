<template>
  <img
    v-for="(butterfly, index) in butterflies"
    :key="index"
    src="../assets/Butterfly.png"
    class="butterfly absolute z-10 w-8"
    ref="butterfliesRefs"
    :style="{
      left: `${-100 - index * 6}px`, // Biar rapih berjarak di kiri
      top: `${60 + index * 6}%`, // Membuat posisi miring seperti /
    }"
  />
</template>

<script>
import gsap from "gsap";

export default {
  name: "ButterflyLeft",
  data() {
    return {
      butterflies: new Array(5).fill(null), // 5 kupu-kupu
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.animateButterflies();
    });
  },
  methods: {
    animateButterflies() {
      this.$refs.butterfliesRefs.forEach((el, index) => {
        gsap.to(el, {
          x: "40vw", // Terbang ke kanan (ke arah pot bunga)
          y: "+=10px", // Sedikit naik turun agar natural
          duration: 3 + index * 0.5, // Beda durasi tiap kupu-kupu agar tidak bersamaan
          ease: "power2.inOut",
          repeat: -1, // Looping tanpa henti
          yoyo: true, // Balik ke arah semula
          onRepeat: () => {
            const isFlipped = gsap.getProperty(el, "scaleX") === -1;
            gsap.set(el, { scaleX: isFlipped ? 1 : -1 });
          },
        });
      });
    },
  },
};
</script>

<style scoped>
.butterfly {
  position: absolute;
  transform: translateY(-50%);
}
</style>
