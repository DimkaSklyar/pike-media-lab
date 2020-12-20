<template>
  <div>
    <div class="navigation">
      <nav class="nav">
        <router-link to="/" class="link link_back">Назад к списку</router-link>
      </nav>
    </div>
    <Loading v-if="isLoading" />
    <CardMovie
      v-else-if="singleMovie || movie"
      :movie="movie !== undefined ? movie : singleMovie"
    />
    <h1 v-else class="title-message">
      К сожалению, по вашему запросу ничего не найдено...
    </h1>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import CardMovie from "@/components/CardMovie.vue";
import Loading from "@/components/Loading.vue";

export default {
  name: "AboutMovie",
  props: ["movie"],
  data() {
    return {
      isLoading: true
    };
  },
  computed: mapGetters(["singleMovie"]),
  methods: { ...mapActions(["getSingleMovie", "clearListMovie"]) },
  async beforeMount() {
    if (this.movie === undefined) {
      await this.getSingleMovie(this.$route.params.id);
    }
    this.isLoading = false;
  },
  components: {
    CardMovie,
    Loading
  },
  destroyed() {
    this.clearListMovie();
  }
};
</script>
<style lang="scss">
.link {
  color: #ff5252;
  opacity: 0.98;
  display: inline-block;
  text-decoration: none;
  position: relative;

  &_back {
    padding-left: 30px;
    &:before {
      content: "";
      position: absolute;
      background: url("~@/assets/img/back-arrow.svg") no-repeat;
      background-size: contain;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 20px;
      width: 11px;
    }
  }
}
.title-message {
  font-weight: 500;
  font-size: 32px;
  color: #ffffff;
}
</style>
