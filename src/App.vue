<template>
  <b-container id="main-container">
    <div v-if="!start" id="start-area">
      <div>
        <h2 id="title">이상형 월드컵</h2>
      </div>
      <div id="start-button-area">
        <!-- <b-button id='start-button' variant="primary" @click='clickStart'>시작하기</b-button> -->
        <b-button
          class="start-button"
          variant="primary"
          v-for="(result, idx) in categoryList"
          :key="idx"
          @click="selectStartButton(result)"
        >
          {{ result["name"] }}
        </b-button>
      </div>
    </div>
    <div v-else id="image-area">
      <SelectImage />
    </div>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SelectImage from "@/components/SelectImage.vue";

export default {
  name: "App",
  components: {
    SelectImage,
  },

  data() {
    return {
      start: false,
    };
  },

  computed: {
    ...mapGetters(["categoryList", "selectedCategory"]),
  },

  methods: {
    ...mapActions(["selectCategory"]),

    clickStart() {
      this.start = !this.start;
    },

    selectStartButton(result) {
      this.selectCategory(result["category"]);
      this.clickStart();
    },
  },
};
</script>

<style scoped>
#main-container {
  width: 100%;
  height: 100hv;
}

#start-area {
  width: 300px;
  margin: auto;
  margin-top: 30px;
}

#title {
  text-align: center;
}

#start-button-area {
  width: 150px;
  margin: auto;
}

.start-button {
  width: 100%;
  margin-bottom: 15px;
}

#image-area {
  margin-top: 30px;

  width: 100%;
  height: 100hv;
}
</style>
