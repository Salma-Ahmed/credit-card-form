<!--Shared componenet bec it can be used anywhere not only in the card form-->
<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input
      :name="name"
      :id="name"
      :type="type"
      :maxlength="max"
      v-model="fieldValue"
      @keyup="onKeyUp"
      @keypress="onKeyPress"
      v-maska="mask"
    />
  </div>
</template>

<script>
import { maska } from "maska";
export default {
  name: "Input",
  props: {
    name: String,
    label: String,
    type: String,
    onKeyUp: Function,
    max: Number,
    mask: String,
  },
  data: () => ({
    fieldValue: "",
  }),
  methods: {},
  //used for the credit card mask
  directives: { maska },
};
</script>

<style lang="less" scoped></style>
