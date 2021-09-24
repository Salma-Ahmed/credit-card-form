<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input :type="type" v-model="fieldValue" @keyup="onKeyUp" />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    type: String,
    onKeyUp: Function,
  },
  data: () => ({
    fieldValue: "",
  }),
};
</script>

<style lang="less" scoped></style>
