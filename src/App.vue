<template>
  <div id="app">
    <div class="hero-img" alt="Background image">
      <b-navbar id="navbar">
        <b-navbar-brand id="site-brand" href="#">GET iNSPIRED</b-navbar-brand>
      </b-navbar>
      <div class="quote-generator">
        <i class="fas fa-quote-left"></i>
        &nbsp;
        <a
          class="quote-text"
          v-if="currentQuote.link"
          :href="currentQuote.link"
        >
          {{ currentQuote.body }}
        </a>
        <span class="quote-text" v-else>{{ currentQuote.body }}</span>
        &nbsp;
        <i class="fas fa-quote-right"></i>
      </div>
      <b-button id="quote-btn" @click="getAnotherRandomQuote">
        Get Another Quote
      </b-button>
      <b-button @click="saveQuoteClickHandler" id="quote-btn">
        Save to My Quotes
      </b-button>
      <quote-manager
        ref="quoteManager"
        :currentQuote="currentQuote"
      ></quote-manager>
    </div>
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
    },
    saveQuoteClickHandler() {
      console.log("saveQuoteClickHandler called!");
      this.$refs.quoteManager.saveQuote();
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
  /* background-color: aquamarine; */
  position: relative;
  /* min-height: 100vh; */
  /* padding-bottom: 3rem; */
}

.hero-img {
  background-image: url("https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=827&q=80");
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 3rem;
  background-attachment: fixed;
}

#site-brand {
  font-family: "Josefin Sans", sans-serif;
  color: white;
  font-size: 3.5rem;
  font-weight: 700;
  padding: 1rem;
  margin-right: 0;
}
@media only screen and (max-width: 768px) {
  #site-brand {
    font-size: 2rem;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem 0;
  }
}

.quote-generator {
  border-radius: 20px;
  width: max-content;
  max-width: 75%;
  margin: 2rem auto 3rem auto;
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  color: black;
  background-color: rgba(255, 255, 255);
  border: 3px solid black;
  border-radius: 20px;
  box-shadow: 1px 10px 20px 1px black;
}
@media only screen and (max-width: 768px) {
  .quote-generator {
    font-size: 1.25rem;
    padding: 1rem;
    margin: 1rem auto 3rem auto;
    width: 80vw;
    max-width: none;
  }
}

/* .quote-text {
  font-family: "Merriweather", serif;
} */

a.quote-text {
  color: #003862;
}

#quote-btn {
  border-radius: 255px 15px 225px 15px/20px 225px 15px 255px;
  border: solid 2px black;
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  box-shadow: 5px 5px;
  margin: 1rem;
  font-weight: bold;
  transition: all 0.5s;
}
#quote-btn:hover {
  background-color: white;
  transform: translateY(-2px);
}
#quote-btn:active {
  background-color: white;
}
</style>
