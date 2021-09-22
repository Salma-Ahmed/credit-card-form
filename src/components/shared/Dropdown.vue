<template>
  <div class="form-group">
    <select :name="name" :id="name">
      <option>{{ name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    name: String,
    // options: Array,
  },
  methods: {},
};
</script>

<style lang="less" scoped>
select {
  //   -moz-appearance: none; /* Firefox */
  //   -webkit-appearance: none; /* Safari and Chrome */
  //   appearance: none;
  text-transform: capitalize;
}
</style>
