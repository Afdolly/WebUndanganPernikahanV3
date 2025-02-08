<template>
  <Loading v-if="loading" :message="loadingMessage" />
  <transition name="fade">
    <div
      v-if="!loading"
      class="background relative flex h-screen items-center justify-center overflow-hidden lg:w-[700px]"
    >
      <audio ref="audioPlayer" loop>
        <source
          src="./assets/thecdi.ca - Menikahimu- Kahitna.m4a"
          type="audio/mpeg"
        />
      </audio>
      <div
        class="cover absolute bottom-[70%] z-30 flex flex-col items-center justify-center"
      >
        <p class="my-3 text-[25px]">Feb 2025</p>
        <hr class="w-[70%] border-solid border-black" />
        <div
          class="mt- mx-8 mb-2.5 flex w-full flex-row items-center justify-between"
        >
          <p class="text-[25px]">Fajar</p>
          <div class="heart">
            <div class="date">23</div>
          </div>
          <p class="text-[25px]">Salis</p>
        </div>
        <hr class="w-[85%] border-solid border-black" />
        <p class="text-[15px]">Jl. Mawar Kuning, Jatim</p>
      </div>
      <div class="envelope">
        <div class="paper"></div>
      </div>
      <div
        class="absolute bottom-[2%] z-30 flex flex-col items-center gap-y-2 rounded-xl px-5 py-4 text-white"
        style="background-color: rgba(0, 0, 0, 0.4)"
      >
        <div class="text-center">
          <p class="text-[18px]">Kepada Yth.</p>
          <p class="text-[18px]">Bapak/Ibu/Saudara/i</p>
        </div>
        <button
          @click="openUndangan"
          class="rounded-3xl border border-solid border-white px-4 py-3 text-[22px] font-bold"
        >
          Open Invitation
        </button>
      </div>

      <img
        src="./assets/SepasangPengantin.png"
        alt="Gambar Sepasang Pengantin"
        class="absolute bottom-10 z-10 w-[280px]"
      />
      <Birds />
      <ButterflyLeft class="md:hidden lg:hidden" />
      <FlowerLeft />
      <FlowerRight />
      <ShrubLeft class="md:hidden lg:hidden" />
      <ShrubRight class="md:hidden lg:hidden" />
    </div>
  </transition>
  <transition name="fade">
    <PageUndangan
      v-if="showUndangan"
      ref="undanganPage"
      @undanganReady="scrollToUndangan"
    />
  </transition>
</template>

<script>
import Loading from "./components/LoadingProggress.vue";
import Birds from "./components/Birds.vue";
import ButterflyLeft from "./components/ButterflyLeft.vue";
import FlowerLeft from "./components/FlowerLeft.vue";
import FlowerRight from "./components/FlowerRight.vue";
import ShrubLeft from "./components/ShrubLeft.vue";
import ShrubRight from "./components/ShrubRight.vue";
import PageUndangan from "./components/PageUndangan.vue";

export default {
  name: "App",
  components: {
    Loading,
    Birds,
    ButterflyLeft,
    FlowerLeft,
    FlowerRight,
    ShrubLeft,
    ShrubRight,
    PageUndangan,
  },
  data() {
    return {
      loading: true,
      loadingMessage: "Memuat data...",
      showUndangan: false,
    };
  },
  mounted() {
    this.lazyLoadImages();
  },
  created() {
    this.loadDataFromAPI();
  },
  methods: {
    lazyLoadImages() {
      this.$nextTick(() => {
        const images = document.querySelectorAll("img");
        images.forEach((img) => {
          img.setAttribute("loading", "lazy");
        });
      });
    },
    loadDataFromAPI() {
      // Contoh fungsi untuk memuat data dari API
      setTimeout(() => {
        // Data telah dimuat, atur loading menjadi false
        this.loading = false;
      }, 2000);
    },
    openUndangan() {
      this.showUndangan = true;
      this.$refs.audioPlayer.play();
    },
    scrollToUndangan() {
      this.$nextTick(() => {
        if (this.$refs.undanganPage) {
          this.$refs.undanganPage.$el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.background {
  background-image: url("assets/Background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

body {
  font-family: "Texturina", serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.heart {
  width: 30px;
  height: 30px;
  background-color: green;
  position: relative;
  transform: rotate(-45deg);
}

.heart:before,
.heart:after {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: green;
  border-radius: 50%;
}

.heart:before {
  top: -15px;
  left: 0;
}

.heart:after {
  top: 0px;
  left: 15px;
}

.date {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-20%, -70%) rotate(45deg);
  z-index: 30;
  font-size: 25px;
  font-weight: bold;
  color: white;
}
</style>
