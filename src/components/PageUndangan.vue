<template>
  <div class="m-0 h-max overflow-x-hidden p-0 lg:w-[700px]">
    <div
      class="bg-page-1 relative -z-50 flex h-screen flex-col items-center justify-center bg-white p-5 lg:h-max"
    >
      <h1
        class="nama-pengantin z-10 text-center text-[40px]"
        data-aos-delay="50"
        data-aos="fade-down"
      >
        Fajar & Salis
      </h1>
      <img
        class="z-10 mb-6"
        src="../assets/SepasangPengantin2.png"
        alt=""
        data-aos-delay="50"
        data-aos="flip-up"
      />
      <h1
        class="z-10 text-[21px] font-bold"
        data-aos-delay="50"
        data-aos="zoom-in"
      >
        بسمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
      </h1>
      <p
        class="z-10 mb-2 px-5 text-center text-[18px]"
        data-aos-delay="50"
        data-aos="zoom-in"
      >
        وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ
      </p>
      <p
        class="z-10 mb-2 px-5 text-center text-[18px]"
        data-aos-delay="50"
        data-aos="fade-up"
      >
        "Dan segala sesuatu kami ciptakan berpasang-pasangan supaya kamu
        mengingat kebesaran Allah"
      </p>
      <h1
        class="z-10 text-[21px] font-bold"
        data-aos-delay="50"
        data-aos="fade-up"
      >
        (QS Az-Zariyat:49)
      </h1>

      <img
        src="../assets/FrameGununganWayang.png"
        alt="Gambar Frame Bunga"
        class="absolute -left-10 w-[70%] -rotate-[20deg]"
      />

      <img
        src="../assets/FrameGununganWayang.png"
        alt="Gambar Frame Bunga"
        class="absolute -right-10 w-[70%] rotate-[20deg]"
      />

      <img
        src="../assets/BorderSongket.png"
        alt="Gambar Frame Bunga"
        class="absolute top-0 w-full scale-y-[-1]"
      />

      <img
        src="../assets/BorderSongket.png"
        alt="Gambar Frame Bunga"
        class="absolute bottom-0 w-full"
      />
    </div>

    <div
      class="bg-page-2 relative flex h-max flex-col justify-start bg-white py-5"
    >
      <h1
        class="z-10 mb-2 text-center text-[24px] font-bold"
        data-aos="zoom-in"
      >
        Assalamu'alaikum Wr. Wb.
      </h1>
      <p class="mb-20 px-10 text-center text-[18px]" data-aos="zoom-in-up">
        Dengan Penuh Rasa Syukur Atas kasih Sayang Dan Karunia Tuhan. Dengan
        Hormat Kami Mengundang Bapak/Ibu/Saudara/I Untuk Menghadiri Acara
        Pernikahan Kami.
      </p>

      <div class="flex flex-row items-center justify-between">
        <img
          src="../assets/MempelaiPria.png"
          alt="Gambar Mempelai Pria"
          class="w-[200px] rounded-t-full bg-orange-200 pt-5"
          data-aos="zoom-in-right"
        />
        <div class="flex flex-col items-center justify-center text-center">
          <h1 class="nama-pengantin text-[28px]" data-aos="zoom-in-left">
            Fajar Dwipa Tirta
          </h1>
          <p data-aos="zoom-in-left">Putra Ke 2 Dari</p>
          <p data-aos="zoom-in-left">Bapak H. Rosidi</p>
          <p data-aos="zoom-in-left">&</p>
          <p data-aos="zoom-in-left">Ibu Hj. Juniarti</p>
        </div>
      </div>
      <div class="flex flex-row-reverse items-center justify-between">
        <img
          src="../assets/MempelaiWanita.png"
          alt="Gambar Mempelai Wanita"
          class="w-[200px] rounded-b-full bg-orange-200 pt-5"
          data-aos="zoom-in-left"
        />
        <div class="flex flex-col items-center justify-center text-center">
          <h1 class="nama-pengantin text-[28px]" data-aos="zoom-in-right">
            Salis Aidila Khusna
          </h1>
          <p data-aos="zoom-in-right">Putri Dari</p>
          <p data-aos="zoom-in-right">Bapak alm. Surasin</p>
          <p data-aos="zoom-in-right">&</p>
          <p data-aos="zoom-in-right">Ibu Siti Alfiyah</p>
        </div>
      </div>
    </div>

    <div class="bg-page-3 relative h-max py-10">
      <img
        src="../assets/Batik.jpg"
        alt="Gambar Frame Bunga"
        class="absolute top-0 -z-10"
      />
      <img
        src="../assets/Batik.jpg"
        alt="Gambar Frame Bunga"
        class="absolute bottom-0 -z-10"
      />
      <div class="h-max rounded-b-full rounded-t-full bg-white px-5 py-24">
        <div class="flex flex-col items-center justify-center px-5 text-center">
          <h1 class="text-[24px] font-bold" data-aos="fade-down">Akad Nikah</h1>
          <p class="text-[18px]" data-aos="zoom-in">Minggu, 23 Februari 2025</p>
          <p class="text-[18px]" data-aos="zoom-in">08.00 WIB</p>
          <div class="my-7 flex flex-row items-center gap-x-2.5">
            <div
              class="days w-[75px] rounded-lg border border-solid border-black px-3 py-5 text-center shadow-lg"
              data-aos="fade-right"
            >
              <p>{{ days }}d</p>
              <p>Days</p>
            </div>
            <div
              class="days w-[75px] rounded-lg border border-solid border-black px-3 py-5 text-center shadow-lg"
              data-aos="fade-right"
            >
              <p>{{ hours }}h</p>
              <p>Hours</p>
            </div>
            <div
              class="days w-[75px] rounded-lg border border-solid border-black px-3 py-5 text-center shadow-lg"
              data-aos="fade-left"
            >
              <p>{{ minutes }}m</p>
              <p>Min</p>
            </div>
            <div
              class="days w-[75px] rounded-lg border border-solid border-black px-3 py-5 text-center shadow-lg"
              data-aos="fade-left"
            >
              <p>{{ seconds }}s</p>
              <p>Sec</p>
            </div>
          </div>
          <p class="mb-5" data-aos="zoom-in">
            Jl. Mawar Kuning RT 02 RW 11 Desa Sidomulyo Kec. Batu, Kota Batu,
            Jawa Timur
          </p>
          <a
            href="https://maps.app.goo.gl/5xu6GuvPo5d8Jgzs6"
            class="w-full rounded-2xl border border-solid border-black px-4 py-4 text-center text-[24px] font-bold"
            data-aos="fade-up"
            >Lihat Lokasi</a
          >
        </div>
        <div
          class="mt-32 flex flex-col items-center justify-center px-5 text-center"
        >
          <h1 class="text-[24px] font-bold" data-aos="fade-down">
            Resepsi Nikah
          </h1>
          <p class="text-[18px]" data-aos="zoom-in">Minggu, 23 Februari 2025</p>
          <p class="text-[18px]" data-aos="zoom-in">09.00 WIB - Selesai</p>
          <div class="my-7 flex flex-row items-center gap-x-2.5">
            <div
              class="days w-[75px] rounded-lg border border-solid border-black px-3 py-5 text-center shadow-lg"
              data-aos="fade-right"
            >
              <p>{{ days }}d</p>
              <p>Days</p>
            </div>
            <div
              class="days w-[75px] rounded-lg border border-solid border-black px-3 py-5 text-center shadow-lg"
              data-aos="fade-right"
            >
              <p>{{ hours }}h</p>
              <p>Hours</p>
            </div>
            <div
              class="days w-[75px] rounded-lg border border-solid border-black px-3 py-5 text-center shadow-lg"
              data-aos="fade-left"
            >
              <p>{{ minutes }}m</p>
              <p>Min</p>
            </div>
            <div
              class="days w-[75px] rounded-lg border border-solid border-black px-3 py-5 text-center shadow-lg"
              data-aos="fade-left"
            >
              <p>{{ seconds }}s</p>
              <p>Sec</p>
            </div>
          </div>
          <p class="mb-5" data-aos="zoom-in">
            Jl. Mawar Kuning RT 02 RW 11 Desa Sidomulyo Kec. Batu, Kota Batu,
            Jawa Timur
          </p>
          <a
            href="https://maps.app.goo.gl/5xu6GuvPo5d8Jgzs6"
            class="w-full rounded-2xl border border-solid border-black px-4 py-4 text-center text-[24px] font-bold"
            data-aos="fade-up"
            >Lihat Lokasi</a
          >
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4701125978277!2d112.52282457409733!3d-7.845765392175681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7881dbfb2f9dd9%3A0x231d36c524b60978!2sJager%20Laundry!5e0!3m2!1sen!2sid!4v1738820424641!5m2!1sen!2sid"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="my-20 h-[300px] w-full shadow-xl"
          data-aos="flip-down"
        ></iframe>
        <CommentSection
          class="mb-10 shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="50"
        />
        <p class="px-5 text-center text-[18px]" data-aos="zoom-in">
          "Tidak ada seorang muslim pun yang mendoakan kebaikan bagi saudaranya
          (sesama muslim) yang berjauhan, melainkan malaikat akan mendoakannya
          pula: 'Dan bagimu kebaikan yang sama."
        </p>
        <h1
          class="mt-5 px-5 text-center text-[24px] font-bold"
          data-aos="fade-up"
        >
          Terima Kasih
        </h1>
      </div>
    </div>

    <div class="bg-page-5 relative h-max">
      <img
        src="../assets/BorderSongket.png"
        alt="Gambar Frame Bunga"
        class="absolute top-0 w-full scale-y-[-1]"
      />
      <img
        src="../assets/BorderSongket.png"
        alt="Gambar Frame Bunga"
        class="absolute bottom-0 w-full"
      />
      <img
        src="../assets/Wayang.png"
        alt="Gambar Frame Wayang"
        class="absolute -bottom-10 -left-16 w-[40%] rotate-[20deg] scale-x-[-1]"
      />

      <img
        src="../assets/Wayang.png"
        alt="Gambar Frame Wayang"
        class="absolute -bottom-10 -right-16 w-[40%] -rotate-[20deg]"
      />
      <div class="h-max rounded-b-full bg-white px-5 pb-64 pt-24">
        <h1
          class="mb-2 text-center text-[24px] font-bold"
          data-aos="zoom-in-down"
        >
          Wedding Gifts
        </h1>
        <p class="mb-10 px-10 text-center text-[18px]" data-aos="zoom-in">
          Bagi yang ingin memberikan tanda kasih dapat mengirimkan melalui fitur
          di bawah ini :
        </p>
        <div class="card-bca" @click="toggleCard" data-aos="zoom-in-right">
          <div class="card-inner-bca" :class="{ 'is-flipped': isFlipped }">
            <span class="tooltiptext-bca hidden font-bold" ref="tooltipBCA"
              >Copied!</span
            >
            <div class="front-bca">
              <img src="../assets/Map.png" class="map-img-bca" />
              <div class="col-bca">
                <div class="row-bca">
                  <img src="../assets/Chip.png" width="40px" />
                  <img src="../assets/Logo BCA_Putih.png" width="80px" />
                </div>
                <div class="row-bca card-no-bca">
                  <p>841</p>
                  <p>5798</p>
                  <p>748</p>
                </div>
                <div class="row-bca card-holder-bca">
                  <p>Tap Here</p>
                  <p>Save The Date</p>
                </div>
                <div class="row-bca name-bca">
                  <p>Fajar Dwipa Tirta</p>
                  <p>23/02</p>
                </div>
              </div>
            </div>
            <div class="back-bca">
              <img src="../assets/Map.png" class="map-img-bca" />
              <div class="bar-bca"></div>
              <div class="row-bca card-cvv-bca">
                <div>
                  <div class="w-full bg-white py-1">s</div>
                </div>
                <p>***</p>
              </div>
              <div class="row-bca card-text-bca text-start">
                <p>Klik "copy" di bawah kanan untuk nomor rekening.</p>
              </div>
              <div class="row-bca signature-bca">
                <img src="../assets/Logo BCA_Putih.png" width="80px" />
                <button
                  @click.stop="copyFunctionBCA"
                  class="rounded-[20px] border border-solid border-[whitesmoke] bg-transparent px-4 py-2"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="box mt-5 flex flex-col items-center justify-center"
          data-aos="zoom-in-left"
        >
          <div class="ribbon">Gift</div>
          <h1 class="mb-2 text-center text-[24px] font-bold">
            Alamat Kado Fisik
          </h1>
          <p class="px-10 text-center text-[18px]">
            Jl. Mawar Kuning RT 02 RW 11 Desa Sidomulyo Kec. Batu, Kota Bata,
            Jawa Timur
          </p>
        </div>
      </div>
    </div>

    <div
      class="bg-page-6 relative flex h-screen flex-col items-center justify-center p-0 text-center lg:h-max"
    >
      <img
        src="../assets/Songket.jpg"
        alt="Gambar Frame Bunga"
        class="absolute h-[100%] w-full"
      />
      <div
        class="z-10 flex h-[90%] w-[90%] flex-col items-center justify-evenly rounded-2xl border border-solid bg-white p-5 text-center shadow-2xl"
      >
        <p class="mb-2 text-[18px]" data-aos="zoom-in-down">
          Merupakan Suatu Kehormatan Dan Kebahagiam Bagi Kami Sekeluarga Apabila
          Bapak/Ibu/Saudara/I Berkenan Hadir.
        </p>
        <h1 class="text-[21px] font-bold" data-aos="zoom-in">
          Kami Yang Berbahagia
        </h1>
        <div class="flex w-full flex-row justify-between">
          <div class="flex flex-col items-center justify-center">
            <p data-aos="zoom-in-right">Keluarga</p>
            <p data-aos="zoom-in-right">Bpk H. Rosidi</p>
            <p data-aos="zoom-in-right">&</p>
            <p data-aos="zoom-in-right">Ibu Hj. Juniarti</p>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p data-aos="zoom-in-left">Keluarga</p>
            <p data-aos="zoom-in-left">Bpk Alm. Surasin</p>
            <p data-aos="zoom-in-left">&</p>
            <p data-aos="zoom-in-left">Ibu Siti Alfiyah</p>
          </div>
        </div>
        <p class="text-[18px]" data-aos="zoom-in">
          بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
        </p>
        <p class="text-[18px]" data-aos="zoom-in">
          " Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu
          susah, serta semoga Allah mempersatukan kalian berdua dalam kebaikan"
        </p>
        <h1 class="text-[21px] font-bold" data-aos="zoom-in-up">
          (HR. Abu Daud).
        </h1>
      </div>
    </div>

    <div class="bg-page-7 h-max bg-white p-5 text-center">
      <p class="px-5">&copy; 2025 Afdolly. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
import CommentSection from "./CommentSection.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "PageUndangan",
  components: {
    CommentSection,
  },
  data() {
    return {
      isFlipped: false,
      targetDate: new Date("2025-02-23T09:00:00").getTime(),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  created() {
    this.calculateTimeLeft();
    this.timer = setInterval(this.calculateTimeLeft, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  mounted() {
    this.$emit("undanganReady");

    AOS.init({
      duration: 1900,
      delay: 100,
      easing: "ease-in-out",
      once: true,
    });
  },
  methods: {
    toggleCard() {
      this.isFlipped = !this.isFlipped;
    },
    copyFunctionBCA() {
      const copyText = "8415798748";
      navigator.clipboard
        .writeText(copyText)
        .then(() => {
          const tooltip = this.$refs.tooltipBCA;
          tooltip.classList.remove("hidden");
          setTimeout(() => {
            tooltip.classList.add("hidden");
          }, 5000);
          this.isFlipped = false;
        })
        .catch((error) => {
          console.error("Copy failed", error);
        });
    },
    calculateTimeLeft() {
      const now = new Date().getTime();
      const timeLeft = this.targetDate - now;

      if (timeLeft <= 0) {
        clearInterval(this.timer);
        return;
      }

      this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      this.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    },
  },
};
</script>

<style scoped>
.nama-pengantin {
  font-family: "Pacifico", serif;
  font-weight: 400;
  font-style: normal;
}
.bg-page-5 {
  background-image: url("../assets/BgPage2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.card-bca {
  width: 100%;
  height: 250px;
  color: #fff;
  cursor: pointer;
  perspective: 1000px;
}

.card-inner-bca {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.front-bca,
.back-bca {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 30px;
  border-radius: 15px;
  overflow: hidden;
  z-index: 1;
  backface-visibility: hidden;
}

.col-bca {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.row-bca {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.map-img-bca {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.3;
  z-index: -1;
}

.card-no-bca {
  font-size: 18px;
  margin-top: 40px;
}

.card-holder-bca {
  font-size: 12px;
}

.name-bca {
  font-size: 22px;
}

.bar-bca {
  background: #222;
  margin-left: -30px;
  margin-right: -30px;
  height: 35px;
  margin-top: 10px;
}

.card-cvv-bca {
  margin-top: 15px;
}

.card-cvv-bca div {
  flex: 1;
}

.card-cvv-bca img {
  width: 100%;
  display: block;
  line-height: 0;
}

.card-cvv-bca p {
  background: #fff;
  color: #000;
  font-size: 14px;
  padding: 5px 15px;
}

.card-text-bca {
  margin-top: 15px;
  font-size: 14px;
}

.signature-bca {
  margin-top: 0px;
}

.back-bca {
  transform: rotateY(180deg);
}

.tooltiptext-bca {
  position: absolute;
  top: 35%;
  left: 40%;
  z-index: 10;
}

.is-flipped {
  transform: rotateY(-180deg);
}

.box {
  position: relative;
  width: 100%;
  height: 250px;
  background: white;
  border: 2px solid #ccc;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.ribbon {
  position: absolute;
  top: 10px;
  right: -30px;
  width: 100px;
  height: 30px;
  background: red;
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  line-height: 30px;
  transform: rotate(45deg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.ribbon::before,
.ribbon::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background: red;
  bottom: -5px;
}
.ribbon::before {
  left: -5px;
  clip-path: polygon(0 0, 100% 0, 0 100%);
}
.ribbon::after {
  right: -5px;
  clip-path: polygon(100% 0, 100% 100%, 0 0);
}
</style>
