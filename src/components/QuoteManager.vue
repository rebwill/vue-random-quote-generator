// QuoteManager allows user to SAVE a quote to My Quotes and REMOVE a quote from
My Quotes. // To save a quote to My Quotes: - Need to pass in currentQuote from
QuoteGenerator - Need currentQuote and savedQuotes in data

<template>
  <div>
    <div class="quote-manager">
      <div class="my-quotes-title">MY QUOTES</div>
      <div v-if="savedQuotes.length === 0" class="no-saved-quotes">
        No quotes saved yet!
      </div>
      <!-- <b-button id="quote-btn" v-on:click="saveQuote"
        >Save to My Quotes</b-button
      > -->
      <b-button
        id="quote-btn"
        v-if="displayCards == false && savedQuotes.length > 0"
        v-on:click="showQuotes"
        >Show My Quotes</b-button
      >
      <b-button
        id="quote-btn"
        v-if="displayCards == true && savedQuotes.length > 0"
        v-on:click="hideQuotes"
        >Hide My Quotes</b-button
      >
      <br />
      <div v-if="displayCards == true">
        <quote-card
          v-for="quote in savedQuotes"
          :key="quote.id"
          :quote="quote"
          @remove-quote="removeQuote"
        ></quote-card>
      </div>
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
      console.log("saveQuote() called!");
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
        var quoteIndex = this.savedQuotes.findIndex(quote => quote.id === e);
        this.savedQuotes.splice(quoteIndex, 1);
        localStorage.setItem("savedQuotes", JSON.stringify(this.savedQuotes));
      }
    }
  }
};
</script>

<style scoped>
.quote-manager {
  width: 75%;
  margin: 2rem auto;
  padding: 0rem 3rem;
  border-radius: 255px 15px 225px 15px/20px 225px 15px 255px;
  border: solid 2px white;
  padding: 1rem;
}

.my-quotes-title {
  font-family: "Josefin Sans", sans-serif;
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: left;
}

.no-saved-quotes {
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  color: white;
  font-size: 1.5rem;
}

#quote-btn {
  border-radius: 255px 15px 225px 15px/20px 225px 15px 255px;
  border: solid 2px black;
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  -webkit-box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
  box-shadow: 50px 38px 34px -26px black;
  box-shadow: 5px 5px;
  font-weight: bold;
}
#quote-btn:hover {
  background-color: white;
  color: black;
  border-color: black;
}
#quote-btn:active {
  background-color: white;
}
#quote-btn:focus {
  background-color: white;
}
</style>
