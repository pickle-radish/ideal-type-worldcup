<template>
  <div>
    <div id="status-board">
      <h2 id="stage">{{ (this.allList.length / 2 ** this.stage) * 2 }}강</h2>
      <div id="round">
        {{ this.round }} / {{ this.allList.length / 2 ** this.stage }}
      </div>
    </div>
    <div id="show-image" v-if="this.curList.length > 0">
      <div class="select-image" @click="selectImage(left)">
        <img
          class="image-box"
          :src="`https://firebasestorage.googleapis.com/v0/b/worldcup-d3f65.appspot.com/o/${selectedCategory}%2F${
            this.allList.indexOf(this.curList[left]) + 1
          }.${this.curList[left]['ext']}?alt=media`"
        />
        <div>{{ this.curList[left]["name"] }}</div>
      </div>
      <div class="select-image" @click="selectImage(right)">
        <img
          class="image-box"
          :src="`https://firebasestorage.googleapis.com/v0/b/worldcup-d3f65.appspot.com/o/${selectedCategory}%2F${
            this.allList.indexOf(this.curList[right]) + 1
          }.${this.curList[right]['ext']}?alt=media`"
        />
        <div>{{ this.curList[right]["name"] }}</div>
      </div>
    </div>
    <div v-else>
      <div v-if="nextList.length != 1" class="next-area">
        <b-button variant="primary" @click="nextLevel">next →</b-button>
      </div>
      <div v-else class="next-area">
        <h2>우승</h2>
        <img
          class="image-box"
          :src="`https://firebasestorage.googleapis.com/v0/b/worldcup-d3f65.appspot.com/o/${selectedCategory}/${
            this.allList.indexOf(this.nextList[0]) + 1
          }?alt=media`"
        />
        <div>{{ this.nextList[0]["name"] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { mapGetters } from "vuex";

export default {
  name: "SelectImage",

  data() {
    return {
      allList: [],
      curList: [],
      nextList: [],

      leftSrc: "",
      rightSrc: "",

      round: 1,
      stage: 1,

      left: 0,
      right: 1,
    };
  },

  computed: {
    ...mapGetters(["selectedCategory", "koreawomanList", "worldwomanList"]),
  },

  methods: {
    selectImage(idx) {
      this.nextList.push(this.curList[idx]);
      this.curList.splice(this.right, 1);
      this.curList.splice(this.left, 1);
      if (this.curList.length > 0) {
        this.round++;
      }
    },

    nextLevel() {
      this.curList = this.nextList;
      this.curList = _.shuffle(this.curList);
      this.nextList = [];
      this.stage++;
      this.round = 1;
    },
  },

  mounted() {
    switch (this.selectedCategory) {
      case "koreawoman":
        this.allList = this.koreawomanList;
        break;
      case "worldwoman":
        this.allList = this.worldwomanList;
    }
    this.curList = this.allList;
    this.curList = _.shuffle(this.curList);
  },

  watch: {},
};
</script>

<style scoped>
body {
  background-color: black;
}

#show-image {
  display: flex;
  justify-content: center;
}

#status-board {
  text-align: center;
}

/* .select-image  {
      width: 500px;
      height: 500px;
    } */

.select-image {
  text-align: center;
}

.image-box {
  width: 850px;
  height: 850px;
  object-fit: contain;
}

.next-area {
  text-align: center;
}
</style>
