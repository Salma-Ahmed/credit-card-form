<template>
  <div>{{ card }}</div>
</template>

<script>
export default {
  name: "Ccard",
  props: { card: String },
};
</script>

<style lang="less" scoped>
div {
  color: blue;
}
</style>
