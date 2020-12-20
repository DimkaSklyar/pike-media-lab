import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listMovies: [],
    movie: {}
  },
  getters: {
    listMovies(state) {
      return state.listMovies;
    },
    singleMovie(state) {
      return state.movie;
    }
  },
  mutations: {
    setListMovies(state, payload) {
      state.listMovies = payload;
    },
    setSingleMovie(state, payload) {
      state.movie = payload;
    },
    emptyListMovies(state) {
      state.listMovies = [];
    },
    setSortBy(state, payload) {
      state.listMovies = payload;
    }
  },
  actions: {
    async getAllMovies({ commit }) {
      const { data } = await axios.get(
        "https://floating-sierra-20135.herokuapp.com/api/movies"
      );
      const movies = await data.data;

      commit("setListMovies", movies);
    },
    async getSingleMovie({ commit }, id) {
      const { data } = await axios.get(
        `https://floating-sierra-20135.herokuapp.com/api/movie/${id}`
      );
      const movie = await data.data;

      commit("setSingleMovie", movie);
    },
    clearListMovie({ commit }) {
      commit("emptyListMovies");
    },
    updateSortBy({ commit }, movies) {
      commit("setSortBy", movies);
    }
  },
  modules: {}
});
