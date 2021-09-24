<!--Shared componenet bec it can be used anywhere not only in the card form-->
<template>
  <button
    @click="onClick()"
    :type="type"
    :style="{ background: color }"
    class="box-shadow"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
    type: String,
  },
  methods: {
    onClick() {
      console.log("clicked");
    },
  },
};
</script>

<style lang="less" scoped>
button {
  display: inline-block;
  color: #fff;
  border: none;
  padding: 14px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  font-family: inherit;
  width: 100%;
  margin-top: 10px;
}
</style>
