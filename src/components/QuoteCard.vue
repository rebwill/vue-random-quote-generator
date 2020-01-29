<template>
  <b-card class="quote-card">
    <i class="fas fa-quote-left"></i>
    &nbsp;
    <span>{{ quote.body }}</span>
    &nbsp;
    <i class="fas fa-quote-right"></i>
    <br />

    <b-button id="quote-card-btn" @click="$emit('remove-quote', quote.id)"
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
  border: 3px solid white;
  border-radius: 20px;
  width: max-content;
  max-width: 75%;
  margin: 2rem auto 3rem auto;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Merriweather", serif;
  color: #521c34;
  background-color: rgba(255, 255, 255);
  /* border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; */
  border-radius: 50px;
  box-shadow: 1px 10px 20px 1px black;
}

#quote-card-btn {
  border-radius: 255px 15px 225px 15px/20px 225px 15px 255px;
  border: solid 2px black;
  /* background-image: linear-gradient(to bottom right, #521c34, #003862); */
  color: black;
  box-shadow: 5px 5px black;
  margin: 1rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  background-color: white;
}
#quote-card-btn:hover {
  background-image: linear-gradient(
    to bottom right,
    rgba(82, 28, 52, 0.7),
    rgba(0, 56, 98, 0.7)
  );
}
#quote-card-btn:active {
  background-image: linear-gradient(
    to bottom right,
    rgba(82, 28, 52, 0.7),
    rgba(0, 56, 98, 0.7)
  );
}
#quote-card-btn:focus {
  background-image: linear-gradient(
    to bottom right,
    rgba(82, 28, 52, 0.7),
    rgba(0, 56, 98, 0.7)
  );
}
</style>
