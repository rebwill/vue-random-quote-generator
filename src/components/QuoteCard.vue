<template>
  <b-card class="quote-card">
    <!-- <v-card-text>{{ quote.body }}</v-card-text> -->
    <p>{{ quote.body }}</p>

    <b-button @click="$emit('remove-quote', quote.id)"
      >Remove from My Quotes</b-button
    >
  </b-card>
</template>

<script>
// import { getRandomQuote } from "@/quotes";

export default {
  name: "quote-card",
  props: ["quote"] // it is being passed this from QuoteManager.vue
};
</script>

<style scoped>
.quote-card {
  /* border: 3px solid black;
  background-color: cornflowerblue; */
  border-radius: 40px;
  width: 75%;
  margin: 2rem auto;
  padding: 3rem;
}
</style>
