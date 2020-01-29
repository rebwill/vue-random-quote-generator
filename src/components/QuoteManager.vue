// QuoteManager allows user to SAVE a quote to My Quotes and REMOVE a quote from
My Quotes. // To save a quote to My Quotes: - Need to pass in currentQuote from
QuoteGenerator - Need currentQuote and savedQuotes in data

<template>
  <div>
    <div class="quote-manager">
      <b-button v-on:click="saveQuote">Save to My Quotes</b-button>
      <b-button
        v-if="displayCards == false && savedQuotes.length > 0"
        v-on:click="showQuotes"
        >Show My Quotes</b-button
      >
      <b-button
        v-if="displayCards == true && savedQuotes.length > 0"
        v-on:click="hideQuotes"
        >Hide My Quotes</b-button
      >
      <br />
    </div>
    <div v-if="displayCards == true">
      <quote-card
        v-for="quote in savedQuotes"
        :key="quote.id"
        :quote="quote"
        @remove-quote="removeQuote"
      ></quote-card>
    </div>
  </div>
</template>

<script>
import QuoteCard from "./QuoteCard";

export default {
  name: "quote-manager",
  props: ["currentQuote"], // it is being passed this from App.vue
  components: {
    QuoteCard
  },
  data() {
    return {
      savedQuotes: [],
      displayCards: false
    };
  },
  mounted() {
    console.log("app mounted!");
    if (localStorage.getItem("savedQuotes")) {
      this.savedQuotes = JSON.parse(localStorage.getItem("savedQuotes"));
    }
  },
  methods: {
    showQuotes() {
      this.displayCards = true;
    },
    hideQuotes() {
      this.displayCards = false;
    },
    saveQuote() {
      // if there are no saved quotes, add currentQuote
      if (this.savedQuotes.length === 0) {
        this.savedQuotes.push(this.currentQuote);
        localStorage.setItem("savedQuotes", JSON.stringify(this.savedQuotes));
        console.log("first quote added!");
        // if there ARE saved quotes
      } else if (this.savedQuotes.length > 0) {
        let quoteExists = this.savedQuotes.filter(
          quote => quote.id === this.currentQuote.id
        );
        if (quoteExists.length === 0) {
          this.savedQuotes.push(this.currentQuote);
          localStorage.setItem("savedQuotes", JSON.stringify(this.savedQuotes));
          console.log("quote added to savedQuotes and localStorage!");
        } else if (quoteExists.length > 0) {
          alert("This quote has already been added!");
        }
      }
    },
    removeQuote(e) {
      if (this.savedQuotes.length === 0) {
        return;
      } else if (this.savedQuotes.length > 0) {
        for (var i = 0; i < this.savedQuotes.length; i++) {
          if (e === this.savedQuotes[i].id) {
            this.savedQuotes.splice(this.savedQuotes[i], 1);
            localStorage.setItem(
              "savedQuotes",
              JSON.stringify(this.savedQuotes)
            );
            console.log("quote removed from savedQuotes and localStorage!");
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.quote-manager {
  border: 3px solid crimson;
  border-radius: 40px;
  width: 75%;
  margin: 2rem auto;
  padding: 3rem;
}
</style>
