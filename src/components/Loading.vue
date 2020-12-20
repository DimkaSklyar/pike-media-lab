<template>
  <div class="loading">
    <img :src="EllipseSVG_1" alt="loading" class="loading__img" />
    <img :src="EllipseSVG_2" alt="loading" class="loading__img img_reverse" />
  </div>
</template>
<script>
import EllipseSVG_1 from "../assets/img/Ellipse-1.svg";
import EllipseSVG_2 from "../assets/img/Ellipse-2.svg";
export default {
  name: "Loading",
  data() {
    return {
      EllipseSVG_1,
      EllipseSVG_2
    };
  }
};
</script>
<style lang="scss">
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  &__img {
    position: absolute;
    top: 50%;
    transform-origin: 60px 50px;
    animation: loader 3.3s infinite linear;
    width: 100px;
    height: 100px;
  }
}
.img_reverse {
  animation: loader 2.5s infinite linear;
  width: 80px;
  height: 80px;
  transform-origin: 20px 40px;
  left: 20px;
  top: 70px;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
