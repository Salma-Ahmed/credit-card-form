<template>
  <div class="card ">
    <div class="card-inner">
      <CardFront />
      <CardBack />
    </div>
  </div>
</template>

<script>
import CardFront from "./CardFront.vue";
import CardBack from "./CardBack.vue";
export default {
  name: "Card",
  props: { card: String },
  components: {
    CardFront,
    CardBack,
  },
};
</script>

<style lang="less">
.card {
  width: 75%;
  height: 200px;
  margin: 0 auto;
  color: #fff;
  cursor: pointer;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 50%);
  perspective: 1000px;
  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    .front,
    .back {
      width: 100%;
      height: 100%;
      padding: 15px 20px;
      border-radius: 15px;
      overflow: hidden;
      background-image: linear-gradient(45deg, #1e2143, #411229);
      position: absolute;
      top: 0;
      box-shadow: 0px 3px 33px rgba(0, 0, 0, 0.7);
      backface-visibility: hidden;
      .map {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.3;
      }
      .card-numbers {
        font-size: 24px;
        margin-top: 30px;
      }
      .card-holder {
        font-size: 10px;
        margin-top: 30px;
      }
      .name {
        font-size: 16px;
        margin-top: 8px;
      }
      .bar {
        background-color: #000;
        height: 40px;
        margin: 15px -20px 0 -20px;
        z-index: 8;
        position: relative;
      }
      .card-cvv {
        margin: 15px -10px 0;
        flex-direction: column;
        p {
          font-size: 11px;
          align-self: flex-end;
          margin-bottom: 5px;
          margin-right: 10px;
        }
        div {
          position: relative;
          width: 100%;
          background: #fff;
          height: 35px;
          z-index: 1;
          border-radius: 5px;
        }
      }
      .signature {
        margin-top: 20px;
      }
    }
    .back {
      transform: rotateY(180deg);
    }
  }
  &:hover .card-inner {
    transform: rotateY(-180deg);
  }
}
</style>
