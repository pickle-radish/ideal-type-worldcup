<template>
  <div>
    <div id="show-image" v-if="this.curList.length > 0">
      <div class="select-image" @click="selectImage(left)">
        <img
          class="image-box"
          :src="require(`@/assets/images/woman/${this.curList[left]}.gif`)"
        />
        <div>{{ this.curList[left] }}</div>
      </div>
      <div class="select-image" @click="selectImage(right)">
        <img
          class="image-box"
          :src="require(`@/assets/images/woman/${this.curList[right]}.gif`)"
        />
        <div>{{ this.curList[right] }}</div>
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
          :src="require(`@/assets/images/woman/${this.nextList[0]}.gif`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "SelectImage",

  data() {
    return {
      curList: [],
      nextList: [],

      left: 0,
      right: 1,
    };
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
    },
  },

  mounted() {
    // this.curList = ['계란후라이', '곱창', '국밥', '군만두', '돈까스', '떡볶이', '라면', '물만두', '삼겹살', '샐러드', '양념치킨', '족발', '초밥', '피자', '햄버거', '후라이드치킨'];
    this.curList = [
      "강소라",
      "강지영",
      "강한나",
      "경수진",
      "고보결",
      "고성희",
      "고아라",
      "고준희",
      "공효진",
      "권나라",
      "김고은",
      "김다미",
      "김사랑",
      "김세정",
      "김소은",
      "김소현",
      "김옥빈",
      "김유정",
      "김지원",
      "김지은",
      "김태리",
      "김혜수",
      "김희선",
      "나나",
      "나은",
      "노정의",
      "류혜영",
      "문가영",
      "문근영",
      "미연",
      "박규영",
      "박민영",
      "박보영",
      "박세영",
      "박소담",
      "박신혜",
      "박은빈",
      "박주현",
      "박지현",
      "박하선",
      "박혜수",
      "방민아",
      "배두나",
      "보나",
      "서예지",
      "서은수",
      "서지혜",
      "서현",
      "서현진",
      "설인아",
      "설현",
      "소진",
      "손나은",
      "송지효",
      "송햐윤",
      "송혜교",
      "수지",
      "신민아",
      "신세경",
      "신세휘",
      "신시아",
      "신예은",
      "신현빈",
      "신혜선",
      "아이유",
      "안소희",
      "앨리스 소희",
      "오연서",
      "원진아",
      "유리",
      "유이",
      "유인나",
      "유인영",
      "윤아",
      "이나영",
      "이다희",
      "이민정",
      "이보영",
      "이선빈",
      "이성경",
      "이세영",
      "이연희",
      "이유비",
      "이주명",
      "이주빈",
      "이지아",
      "이채영",
      "이하나",
      "이하늬",
      "임수향",
      "임지연",
      "장나라",
      "전도연",
      "전소민",
      "전여빈",
      "전효성",
      "정려원",
      "정소민",
      "정수정",
      "정유미",
      "정은지",
      "정채연",
      "정호연",
      "제니",
      "조보아",
      "조유리",
      "조이",
      "조이현",
      "지수",
      "진기주",
      "채수빈",
      "채정안",
      "천우희",
      "최수영",
      "하니",
      "하연수",
      "하지원",
      "한가인",
      "한선화",
      "한소희",
      "한승연",
      "한예슬",
      "한지민",
      "한지현",
      "한효주",
      "혜연",
    ];

    this.curList = _.shuffle(this.curList);

    console.log(this.curList);
  },

  watch: {},
};
</script>

<style scoped>
#show-image {
  display: flex;
  justify-content: center;
}

/* .select-image  {
    width: 500px;
    height: 500px;
  } */

.select-image {
  text-align: center;
}

.image-box {
  width: 900px;
  height: 900px;
  object-fit: contain;
}

.next-area {
  text-align: center;
}
</style>
