<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input :type="type" />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    type: String,
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
