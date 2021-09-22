<template>
  <div class="front">
    <img src="../../assets/map.png" class="map" alt="map" width="40" />
    <div class="row">
      <img src="../../assets/chip.png" alt="chip" width="40" />
      <img src="../../assets/visa.png" alt="visa" width="60" />
    </div>
    <div class="row card-numbers">
      <p>####</p>
      <p>####</p>
      <p>####</p>
      <p>####</p>
    </div>
    <div class="row card-holder">
      <p>Card Holder</p>
      <p>Expires</p>
    </div>
    <div class="row name">
      <p>Salma Elbouhy</p>
      <p>10/25</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardFront",
};
</script>

<style lang="less" scoped></style>
