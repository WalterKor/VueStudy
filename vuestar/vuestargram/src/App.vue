<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li>Next</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <Container :data="data" />
    <button @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import data from "./assets/js/data.js";
import axios from "axios";
axios.get();

export default {
  name: "App",

  data() {
    return {
      data: data,
      hello: "안녕하세요"
    };
  },

  components: {
    Container: Container
  },
  methods: {
    more() {
      axios
        .get("https://codingapple1.github.io/vue/more0.json")
        .then(result => {
          console.log(result.data);
          this.data.push(result.data);
        });
    }
  }
};
</script>

<style>
@import url("./assets/css/app.css");
</style>
