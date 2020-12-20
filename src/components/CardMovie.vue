<template>
  <article :class="['card-movie', { 'card-movie__hover': isHover }]">
    <div class="card-movie__img-wrap">
      <img :src="movie.poster" alt="" class="card-movie__img" />
    </div>
    <div class="card-movie__content">
      <router-link
        :to="{
          name: 'AboutMovie',
          params: { id: movie.id, movie, isHover: false }
        }"
        class="card-movie__title"
        >{{ movie.title }}</router-link
      >
      <p class="card-movie__text card-movie__text_darken">
        {{ movie.year }}, {{ movie.genres | joinArray }}
      </p>
      <div class="card-movie__text card-movie__text_darken">
        <span>Режиссёр: {{ movie.directors | joinArray }}</span>
      </div>
      <div class="card-movie__text">
        <span class="card-movie__text_darken">Актёры: </span
        ><span>{{ movie.actors | joinArray }}</span>
      </div>
      <p class="card-movie__description" v-if="!!movie.description">
        {{ movie.description }}
      </p>
      <div v-if="movie.collapse.duration" class="card-movie__duration">
        <p>{{ movie.collapse.duration[0] }}</p>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: "CardMovie",
  props: {
    movie: Object,
    isHover: Boolean
  },
  filters: {
    joinArray: array => {
      if (array) {
        return array.join(", ");
      }
      return array;
    }
  }
};
</script>
<style lang="scss">
.card-movie {
  display: flex;
  position: relative;
  background: #4d4747;
  transition: 0.3s;

  &__hover {
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  &__img-wrap {
    background: #c4c4c4;
    flex: 0 0 168px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__img {
    max-width: 112px;
  }
  &__content {
    padding: 32px 24px;
  }
  &__title {
    display: inline-block;
    color: #fff;
    font-size: 36px;
    font-weight: bold;
    line-height: 1;
    text-decoration: none;
    padding-right: 185px;
    padding-bottom: 5px;
  }

  &__text {
    font-size: 12px;
    line-height: 16px;
    color: #e5e5e5;
    padding-bottom: 5px;
    &_darken {
      font-weight: bold;
      text-transform: uppercase;
      color: #988f8f;
    }
  }

  &__description {
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #fff;
  }

  &__duration {
    position: absolute;
    top: 32px;
    right: 0;
    background-color: #c4c4c4;
    color: #000;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    width: 185px;
    height: 30px;
    padding: 9px 18px 9px 18px;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      border: 6px solid transparent;
      border-left: 0px solid #4d4747;
      border-top: 30px solid #4d4747;
    }
    &:after {
      content: "";
      position: absolute;
      right: 38px;
      top: 50%;
      transform: translateY(-50%);
      background: url("~@/assets/img/icon-movie.svg") no-repeat;
      width: 18px;
      height: 18px;
    }
  }
}
</style>
