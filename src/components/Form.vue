<template>
  <form>
    <Input label="Card Number" type="number" :onKeyUp="onCardNumberChange" />
    <Input label="Card Name" type="text" :onKeyUp="onCardHolderChange" />
    <div class="conf-data">
      <Expiration /><Input label="CVV" type="number" :onKeyUp="onCvvChange" />
    </div>
    <Button type="submit" text="Submit" color="#0055d4" />
  </form>
</template>

<script>
import Button from "./shared/Button.vue";
import Input from "./shared/InputField.vue";
import Expiration from "./ExpirationDate.vue";

export default {
  name: "Form",
  components: {
    Button,
    Input,
    Expiration,
  },
  methods: {
    onCardNumberChange(e) {
      this.$store.dispatch("setFlipCard", false);
      this.$store.dispatch("setCardNumber", e.target.value);
    },
    onCardHolderChange(e) {
      this.$store.dispatch("setFlipCard", false);
      this.$store.dispatch("setCardHolder", e.target.value);
    },
    onCvvChange(e) {
      this.$store.dispatch("setFlipCard", true);
      this.$store.dispatch("setCvv", e.target.value);
    },
  },
};
</script>
<style lang="less">
.conf-data {
  display: flex;
  justify-content: space-between;
  .dropdowns {
    flex-basis: 60%;
    min-width: 60%; //for chrome
    justify-content: space-between;
    .form-group {
      flex-basis: 48%;
      min-width: 48%; //for chrome
    }
  }
  & > .form-group:last-of-type {
    flex-basis: 35%;
    min-width: 35%; //for chrome
  }
}
</style>
