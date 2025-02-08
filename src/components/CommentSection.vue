<template>
  <div class="detailBox">
    <div class="titleBox">
      <label data-aos="fade-down-right">Ucapan Do'a</label>
    </div>
    <div class="commentBox">
      <p class="taskDescription" data-aos="zoom-in">
        Terimakasih Yang Telah Mendo'akan Kami Semoga Apa Yang Di Do'a Kan
        Berbalik Kepada Anda Yang Telah Mendo'akan.
      </p>
    </div>
    <div class="actionBox">
      <ul class="commentList">
        <li v-for="comment in comments" :key="comment.id" data-aos="zoom-in">
          <div class="commentText">
            <span class="text-[18px] font-bold text-black"
              >{{ comment.name }} :</span
            >
            <p>{{ comment.text }}</p>
          </div>
        </li>
      </ul>
      <div class="form-group mt-5">
        <input v-model="newName" type="text" placeholder="Nama Anda..." data-aos="fade-left"/>
        <textarea
          v-model="newComment"
          placeholder="Tulis komentar..."
          data-aos="fade-right"
        ></textarea>
      </div>
      <div class="form-group">
        <button class="btn" @click="submitComment" data-aos="fade-up">Comment</button>
      </div>
    </div>
  </div>
</template>

<script>
import { database } from "../firebase";
import { ref, push, onValue } from "firebase/database";
export default {
  name: "CommentSection",
  data() {
    return {
      newName: "",
      newComment: "",
      comments: [],
    };
  },
  mounted() {
    const commentsRef = ref(database, "comments");
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      this.comments = data
        ? Object.keys(data).map((key) => ({
            id: key,
            name: data[key].name || "Anonim",
            text: data[key].text,
          }))
        : [];
    });
  },
  methods: {
    submitComment() {
      if (this.newName.trim() && this.newComment.trim()) {
        push(ref(database, "comments"), {
          name: this.newName.trim(),
          text: this.newComment.trim(),
        })
          .then(() => {
            this.newComment = "";
            this.newName = "";
          })
          .catch((error) =>
            console.error("Gagal menambahkan komentar:", error),
          );
      }
    },
  },
};
</script>

<style scoped>
input,
textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #45a049;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f9f9f9;
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.detailBox {
  width: 100%;
  border: 1px solid #bbb;
}

.titleBox {
  background-color: #fdfdfd;
  padding: 10px;
}

.titleBox label {
  color: #444;
  font-weight: bold;
}

.commentBox {
  padding: 10px;
  border-top: 1px dotted #bbb;
}

.taskDescription {
  margin-top: 10px;
}

.commentList {
  max-height: 200px;
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
}

.actionBox {
  border-top: 1px dotted #bbb;
  padding: 10px;
}
</style>
