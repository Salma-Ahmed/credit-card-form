<template>
  <div>{{ card }}</div>
</template>

<script>
export default {
  name: "Card",
  props: { card: String },
};
</script>

<style lang="less" scoped>
div {
  color: blue;
}
</style>