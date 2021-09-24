<template>
  <form>
    <Input
      name="cardNumber"
      label="Card Number"
      :max="20"
      type="text"
      :onKeyUp="onCardNumberChange"
      :mask="cardNumberMask"
    />
    <Input
      name="cardHolder"
      label="Card Name"
      type="text"
      :max="20"
      :onKeyUp="onCardHolderChange"
    />
    <div class="conf-data">
      <Expiration /><Input
        name="cvv"
        label="CVV"
        :max="4"
        type="number"
        :onKeyUp="onCvvChange"
        :mask="cvvMask"
      />
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
  data: () => ({
    cardNumberMask: "#### #### #### ####",
    cvvMask: "####",
  }),
  methods: {
    onCardNumberChange(e) {
      // mask the input value to match credit card format
      // let formattedValue = e.target.value;

      // if (formattedValue) {
      //   formattedValue = formattedValue
      //     .match(/.{1,4}/g)
      //     .toString()
      //     .split(",")
      //     .join(" ");
      // }
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
