<template>
  <div class="form-group">
    <select :model="selectedValue" :name="title" :id="title" @change="onChange">
      <option :value="title">{{ title }}</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    title: String,
    options: Array,
    onChange: Function,
  },
  data: () => ({}),
  computed: {
    selectedValue() {
      return this.title;
    },
  },
  methods: {
    mounted() {
      // console.log(this.options);
    },
  },
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
