<template>
  <div class="exp-date">
    <label>Expiration Date</label>
    <div class="dropdowns">
      <Dropdown title="month" :options="months" :onChange="onMonthChange" />
      <Dropdown title="year" :options="years" :onChange="onYearChange" />
    </div>
  </div>
</template>

<script>
import Dropdown from "./shared/Dropdown.vue";
export default {
  name: "Expiration",
  components: {
    Dropdown,
  },
  data: () => ({}),
  computed: {
    //list of years (20)
    years() {
      return this.$store.getters.getYears;
    },
    //list of months
    months() {
      return this.$store.getters.getMonths;
    },
  },
  methods: {
    onYearChange(e) {
      //change direction of the card
      this.$store.dispatch("setFlipCard", false);
      //dispatch to reflect in the card
      this.$store.dispatch("setCurrentYear", e.target.value);
    },
    onMonthChange(e) {
      this.$store.dispatch("setFlipCard", false);
      this.$store.dispatch("setCurrentMonth", e.target.value);
    },
  },
};
</script>

<style lang="less" scoped>
.exp-date {
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
  .dropdowns {
    display: flex;
  }
}
</style>
