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
  methods: {
    // used for input  type number to ensure that the field doesn't exceed the maxlength
    // as maxlength property doesn't works type number
    // onKeyPress(e) {
    //   let maxLength = e.target.attributes.maxlength.value;
    //   let length = e.target.value.length;
    //   if (length >= maxLength) {
    //     e.preventDefault();
    //   }
    // },
  },
  directives: { maska },
};
</script>

<style lang="less" scoped></style>
