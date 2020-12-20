<template>
  <div>
    <h2 class="title">Фильмы</h2>
    <div class="navigation">
      <nav class="nav">
        <input
          type="checkbox"
          name="sort"
          id="sort"
          class="input-radio"
          :checked="toggledChekedTitle"
          value="TITLE"
          @change="onToggle"
        />
        <label for="sort" class="input-label-radio"
          >Отсортировать по названию</label
        >
        <input
          type="checkbox"
          name="sort"
          id="sort-1"
          class="input-radio"
          :checked="toggledChekedYear"
          value="YEAR"
          @change="onToggle"
        />
        <label for="sort-1" class="input-label-radio"
          >Отсортировать по году
        </label>
      </nav>
    </div>
    <Loading v-if="isLoading" />
    <ul v-else class="list-card-movie">
      <li
        v-for="movie in listMovies"
        :key="movie.id"
        class="list-card-movie__item"
      >
        <CardMovie :movie="movie" :isHover="true" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import CardMovie from "@/components/CardMovie.vue";
import Loading from "@/components/Loading.vue";

export default {
  name: "Home",
  data() {
    return {
      isLoading: true,
      listMoviesDefault: [],
      toggledChekedTitle: false,
      toggledChekedYear: false
    };
  },
  computed: mapGetters(["listMovies"]),
  methods: {
    ...mapActions(["getAllMovies", "updateSortBy"]),
    sortBy: function(typeSort) {
      let newSorеtedList = this.listMovies.slice();
      switch (typeSort) {
        case "TITLE":
          newSorеtedList.sort((a, b) =>
            a.title == b.title ? 0 : a.title > b.title ? 1 : -1
          );
          break;
        case "YEAR":
          newSorеtedList.sort((a, b) => (a.year > b.year ? 1 : -1));
          break;
        default:
          newSorеtedList = this.listMoviesDefault;
          break;
      }
      this.updateSortBy(newSorеtedList);
    },
    onToggle: function({ target }) {
      if (target.value === "TITLE" && target.checked) {
        this.toggledChekedTitle = true;
        this.toggledChekedYear = false;

        this.sortBy(target.value);

        return;
      }
      if (target.value === "YEAR" && target.checked) {
        this.toggledChekedYear = true;
        this.toggledChekedTitle = false;

        this.sortBy(target.value);

        return;
      }
      this.toggledChekedTitle = false;
      this.toggledChekedYear = false;

      this.sortBy();
    }
  },
  async beforeMount() {
    await this.getAllMovies();

    this.listMoviesDefault = this.listMovies;
    this.isLoading = false;
  },
  components: {
    CardMovie,
    Loading
  }
};
</script>

<style lang="scss">
.list-card-movie {
  &__item {
    margin-bottom: 25px;
  }
}
.title {
  color: #fff;
  margin-bottom: 18px;
}
.input-label-radio {
  position: relative;
  display: inline-block;
  color: #c4c4c4;
  padding-left: 25px;
  margin-right: 35px;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 15px;
    height: 15px;
    border: 1px solid #c4c4c4;
    transition: 0.3s;
  }
  &:after {
    content: "";
    position: absolute;
    opacity: 0;
    left: 3px;
    top: 4px;
    width: 8px;
    height: 4px;
    border-left: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    transform: rotate(-45deg);
    transition: 0.3s;
  }
}
.input-radio[type="checkbox"] {
  display: none;
  &:checked + .input-label-radio:before {
    background-color: rgba(255, 82, 82, 0.98);
    border-color: rgba(255, 82, 82, 0.98);
  }
  &:checked + .input-label-radio:after {
    opacity: 1;
  }
}
</style>
