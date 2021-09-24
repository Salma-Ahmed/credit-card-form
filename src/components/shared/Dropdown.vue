<!--Shared componenet bec it can be used anywhere not only in the card form-->
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
    mounted() {},
  },
};
</script>

<style lang="less" scoped>
select {
  text-transform: capitalize;
}
</style>
