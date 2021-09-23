<template>
  <div class="exp-date">
    <label>Expiration Date</label>
    <div class="dropdowns">
      <Dropdown title="month" :options="months" />
      <Dropdown title="year" :options="years" />
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
  data: () => ({
    // years: [],
    // months: [],
  }),
  computed: {
    years() {
      return this.$store.getters.getYears;
    },
    months() {
      return this.$store.getters.getMonths;
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
