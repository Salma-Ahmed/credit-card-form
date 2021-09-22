<template>
  <div class="exp-date">
    <label>Expiration Date</label>
    <div class="dropdowns">
      <Dropdown name="month" />
      <Dropdown name="year" />
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
