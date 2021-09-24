<template>
  <div class="front">
    <img src="../../assets/map.png" class="map" alt="map" width="40" />
    <div class="row">
      <img src="../../assets/chip.png" alt="chip" width="40" />
      <img src="../../assets/visa.png" alt="visa" width="60" />
    </div>
    <div class="row card-numbers">
      <p v-for="number in cardNumber.split(' ')" :key="number">
        <span v-for="num in number.split('')" :key="num">{{ num }}</span>
      </p>
    </div>
    <div class="row card-holder">
      <p>Card Holder</p>
      <p>Expires</p>
    </div>
    <div class="row name">
      <p class="text-animated">{{ cardHolder }}</p>
      <p>
        {{ currentMonth }}
        <span v-if="currentMonth || currentYear">/</span>
        {{ currentYear.split("0")[1] }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardFront",
  data: () => ({}),
  computed: {
    cardNumber() {
      return this.$store.getters.getCardNumber;
    },
    cardHolder() {
      return this.$store.getters.getCardHolder;
    },
    currentYear() {
      return this.$store.getters.getCurrentYear;
    },
    currentMonth() {
      return this.$store.getters.getCurrentMonth;
    },
  },
};
</script>

<style lang="less" scoped></style>
