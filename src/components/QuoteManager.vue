<template>
  <div>
    <div class="quote-manager">
      <div class="my-quotes-title">MY QUOTES</div>
      <div v-if="savedQuotes.length === 0" class="no-quotes-yet">No quotes saved yet!</div>
      <b-button
        id="quote-btn"
        v-if="displayCards == false && savedQuotes.length > 0"
        v-on:click="showQuotes"
      >Show My Quotes</b-button>
      <b-button
        id="quote-btn"
        v-if="displayCards == true && savedQuotes.length > 0"
        v-on:click="hideQuotes"
      >Hide My Quotes</b-button>
      <br v-if="savedQuotes.length > 0" />
      <div class="quote-card-wrapper" v-if="displayCards == true">
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
  props: ["currentQuote"], // this is passed from App.vue
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
        // if there ARE saved quotes, check if currentQuote is already saved.
      } else if (this.savedQuotes.length > 0) {
        let quoteExists = this.savedQuotes.filter(
          quote => quote.id === this.currentQuote.id
        );
        // if currentQuote does not already exist in savedQuotes, add it.
        if (quoteExists.length === 0) {
          this.savedQuotes.push(this.currentQuote);
          localStorage.setItem("savedQuotes", JSON.stringify(this.savedQuotes));
          console.log("quote added to savedQuotes and localStorage!");
          // if currentQuote already exists in savedQuotes, display alert.
        } else if (quoteExists.length > 0) {
          alert("This quote has already been added!");
        }
      }
    },
    removeQuote(e) {
      // if there are no saved quotes, do nothing
      if (this.savedQuotes.length === 0) {
        return;
        // if there are saved quotes, remove the one that was clicked.
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
@media only screen and (max-width: 768px) {
  .quote-manager {
    padding: 1.5rem 0.5rem 2rem 0.5rem;
    width: 90%;
  }
}

.my-quotes-title {
  font-family: "Josefin Sans", sans-serif;
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: left;
}
@media only screen and (max-width: 768px) {
  .my-quotes-title {
    font-size: 2rem;
    text-align: center;
  }
}

.no-quotes-yet {
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
  box-shadow: 0 0 0 0.3rem #cf59c3;
}

@media only screen and (max-width: 768px) {
  .quote-card-wrapper {
    width: auto;
  }
}
</style>
