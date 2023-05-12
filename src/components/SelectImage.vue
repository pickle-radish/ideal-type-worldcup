<template>
  <div>
    <div id='show-image' v-if="this.curList.length > 0">
      <div class='select-image' @click='selectImage(left)'>
        <img class='image-box' :src="require(`@/assets/images/food/${this.curList[left]}.jpeg`)" />
        <div>{{this.curList[left]}}</div>
      </div>
      <div class='select-image' @click='selectImage(right)'>
        <img class='image-box' :src="require(`@/assets/images/food/${this.curList[right]}.jpeg`)" />
        <div>{{this.curList[right]}}</div>
      </div>
    </div>
    <div v-else>
      <div v-if='nextList.length != 1' class="next-area">
        <b-button variant="primary" @click="nextLevel">next →</b-button>
      </div>
      <div v-else class="next-area">
        <h2>우승</h2>
        <img class='image-box' :src="require(`@/assets/images/food/${this.nextList[0]}.jpeg`)" />
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'SelectImage',

  data() {
    return {
      curList: [],
      nextList: [],
      
      left: 0,
      right: 1,
    }
  },


  methods: {
    selectImage(idx) {
      this.nextList.push(this.curList[idx]);
      this.curList.splice(this.right, 1);
      this.curList.splice(this.left, 1);

    },

    nextLevel() {
      this.curList = this.nextList;
      this.nextList = [];
    }
  },

  mounted() {
    this.curList = ['계란후라이', '곱창', '국밥', '군만두', '돈까스', '떡볶이', '라면', '물만두', '삼겹살', '샐러드', '양념치킨', '족발', '초밥', '피자', '햄버거', '후라이드치킨'];
    
    this.curList = _.shuffle(this.curList);

    console.log(this.curList);
  },

  watch: {
  }

}
</script>

<style scoped>

  #show-image {
    display: flex;
    justify-content:center;
  }

  /* .select-image  {
    width: 500px;
    height: 500px;
  } */

  .select-image {
    text-align: center;
  }

  .image-box {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

  .next-area {
    text-align: center;
  }
</style>
