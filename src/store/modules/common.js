
const state = {
  selectedCategory: '',

  categoryList: [
    { 'category': 'koreawoman', 'name': '한국 여배우'},
    { 'category': 'worldwoman', 'name': '외국인 여배우'},
  ]
}

const getters = {
  selectedCategory: state => state.selectedCategory,
  categoryList: state => state.categoryList,
}

const mutations = {
  setSelectedCategory: (state, data) => state.selectedCategory = data,
}

const actions = {
  selectCategory({commit}, data) {
    commit('setSelectedCategory', data);
  }

}

export default {
  state,
  getters,
  mutations,
  actions
}