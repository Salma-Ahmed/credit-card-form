<template>
  <div class="back">
    <img src="../../assets/map.png" class="map" alt="map" width="40" />
    <div class="bar"></div>
    <div class="row card-cvv">
      <p>CVV</p>
      <div>{{ cardCvv }}</div>
    </div>
    <div class="row signature">
      <p>SIGNATURE</p>
      <img src="../../assets/visa.png" width="60" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBack",
  computed: {
    cardCvv() {
      return this.$store.getters.getCvv;
    },
  },
};
</script>

<style lang="less" scoped></style>
