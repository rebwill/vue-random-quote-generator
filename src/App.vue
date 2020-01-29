<template>
  <div id="app">
    <div class="quote-generator">
      <a v-if="currentQuote.link" :href="currentQuote.link">
        {{
        currentQuote.body
        }}
      </a>
      <span v-else>{{ currentQuote.body }}</span>
      <br />
      <button @click="getAnotherRandomQuote">Get Another Quote</button>
    </div>

    <quote-manager :currentQuote="currentQuote"></quote-manager>
  </div>
</template>

<script>
import { getRandomQuote } from "@/quotes";
import QuoteManager from "./components/QuoteManager.vue";

export default {
  name: "app",
  data() {
    return {
      currentQuote: null
    };
  },
  components: {
    QuoteManager
  },
  mounted() {
    this.currentQuote = getRandomQuote();
  },
  methods: {
    getAnotherRandomQuote() {
      this.currentQuote = getRandomQuote();
      console.log("new currentQuote.id: " + this.currentQuote.id);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.quote-generator {
  border: 3px solid crimson;
  border-radius: 40px;
  width: 75%;
  margin: 2rem auto;
  padding: 3rem;
}
</style>
