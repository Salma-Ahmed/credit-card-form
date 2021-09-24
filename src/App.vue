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
  mounted() {
    this.$store.dispatch("setYears");
    this.$store.dispatch("setMonths");
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

//remove arrows from input type number
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

//animate text
.text-animated {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 3.5s steps(16, end), blink-caret 0.75s step-end infinite;
}
/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

input:focus {
  border-color: #0055d4;
}
</style>
