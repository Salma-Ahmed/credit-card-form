<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input :type="type" v-model="fieldValue" />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    type: String,
  },
  methods: {
    data() {
      return {
        fieldValue: "",
      };
    },
  },
};
</script>

<style lang="less" scoped></style>
