/* import { createApp } from 'vue'; */
import { createStore } from 'vuex';
/* import { apolloClient } from './main'; */
import { ADD_ORDER, GET_EXTRA_LIST, GET_DRINK_LIST, GET_FOOD_LIST } from './queries';

const store = createStore({
  state() {
    return {
      food: [],
      drink: [],
      extra: []
    };
  },
  mutations: {
    setFoodList(state, payload) {
      state.food = payload;
    },
    setDrinkList(state, payload) {
      state.drink = payload;
    },
    setExtraList(state, payload) {
      state.extra = payload;
    }
  },
  actions: {
    async addOrder({ commit }, payload) {
      try {
        const { data } = await apolloClient.mutate({
          mutation: ADD_ORDER,
          variables: payload
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async getFoodList({ commit }) {
      try {
        const { data } = await apolloClient.query({
          query: GET_FOOD_LIST
        });
        commit('setFoodList', data.getFoodList);
      } catch (error) {
        console.log(error);
      }
    },
    async getExtraList({ commit }) {
      try {
        const { data } = await apolloClient.query({
          query: GET_EXTRA_LIST
        });
        commit('setExtraList', data.getExtraList);
      } catch (error) {
        console.log(error);
      }
    },
    async getDrinkList({ commit }) {
      try {
        const { data } = await apolloClient.query({
          query: GET_DRINK_LIST
        });
        commit('setDrinkList', data.getDrinkList);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    food: state => state.food,
    drink: state => state.drink,
    extra: state => state.extra
  }
});

/* createApp({})
  .use(store)
  .mount('#app'); */

  export default store;
