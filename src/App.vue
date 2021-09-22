<template>
  <div class="container box-shadow">
    <Card card="123" />
    <Form />
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Card from "./components/Card/Card.vue";

export default {
  name: "App",
  components: {
    Form,
    Card,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: none;
}
body {
  background-color: #d4eafd;
}
.container {
  position: absolute;
  width: 90%;
  max-width: 500px;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translate(-50%, -70%);
  padding: 30px;
  border-radius: 5px;
  background: #fff;
  padding: 150px 30px 30px 30px;
}
.box-shadow {
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
}
.flex {
  display: flex;
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-group {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  input,
  select {
    padding: 12px;
    border-radius: 5px;
    border: 1px solid darkgray;
  }
}
label {
  font-size: 12px;
  margin-bottom: 5px;
}
</style>
