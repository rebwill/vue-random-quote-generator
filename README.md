# quote-app

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Research

- [PLint-talk | Build a progressive web app using Vue CLI 3](https://www.blog.plint-sites.nl/progressive-web-app-using-vue-cli-3/)
- [Google Web Fundamentals | Adding Push Notifications to a Web App](https://developers.google.com/web/fundamentals/codelabs/push-notifications/)
- [Medium @n11sh1 | How to build PWA w/ Vue CLI 3 (Service Workers / Add to Home Screen / Push Notifications)](https://medium.com/@n11sh1/how-to-build-pwa-w-vue-cli-3-service-workers-add-to-home-screen-push-notifications-b519c49e142d)

## Rebecca's project process

1. Understand anatomy of Vue (coming from React)

I used the Vue documentation and a couple of basic tutorials (like this one https://www.taniarascia.com/getting-started-with-vue/) while looking at the file structure/contents of this project to start to understand what each piece does and how they interact. As a visual learner, I also take written notes and draw diagrams to help me understand how different parts interact.

2. Start to identify concepts/methods that will be relevant to this project, and develop basic knowledge on them, e.g.

   - v-model
   - watchers
   - @submit
   - localStorage (resources:
     - https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b,
     - https://vuejs.org/v2/cookbook/client-side-storage.html)
   - @persist
   - conditional rendering syntax

3. Frequently refer back to review project files, each time understanding slightly more of how it works

4. Begin understanding how I will capture data in localStorage

   - @persist method on button click has advantages over just putting a watcher on the input field and immediately writing values:
     - allows for data validation/transformations
     - can store other information, like date/time value was stored
     - mounted() method can evaluate whether or not to store the values again

5. Review tutorials of apps with similar functions and how their data & components are structured

6. Decide what child components I will create, and start planning in pseudocode how I will tackle them

   - Will keep everything in the main view -- I believe in saving clicks when not necessary
   - Main view generates random quote
   - QuoteManager: options to "save to my quotes" and "view my quotes"
   - QuoteCards: creates a card for each quote saved in localStorage
     - need to add ID for each quote using indexOf(quote) + 1
     - loop: => <card v-for="quote in quotes" :key="quote.id">

7. Begin to plan data structure in App.vue

8. Create component files for QuoteGenerator and QuoteManager and import into Vue.js.

9. Begin fleshing out these two components and their data structures.

   - Realized I need to keep QuoteGenerator in App.vue, because props only flow down, not upward.
     I will keep currentQuote in parent component, and pass this as a prop to children. Decided to not build this as a separate component but rather just keep it as it was, importing getRandomQuote().

10. Draw out diagram of parent/child relationships, data, and props accepted/passed by each one.

    - App.vue
      - data(): currentQuote
      - props to pass:
        - QuoteManager: currentQuote
    - QuoteManager
      - data(): savedQuotes
      - props to receive: currentQuote
      - props to pass:
        - QuoteCard: savedQuotes
    - QuoteCard
      - data(): N/A
      - props to receive: savedQuotes

11. Implement props passed between components and get them passing data correctly, using Vue Dev Tools to verify data present in each one.

    - Resource: https://michaelnthiessen.com/vue-props-vs-data/

12. Implement "Save to My Quotes" button in QuoteManager.

    - v-on:click="handlerFunction"
    - Create handlerFunction with a console.log to make sure it's being called successfully
    - Fill out handlerFunction:
      1. Add ID to each quote object in order for it to be looped
      2. Push to savedQuotes

13. Implement "Remove from My Quotes" button in QuoteManager.

    - Facing the problem that I am not targeting the right id with the button.
    - Decided to add IDs directly in the original array of quotes, rather than reordering the list of IDs in savedQuotes, because this is additional, unnecessary logic when all we need is a unique identifier, not id's in numerical order.

14. Had a challenge with saveQuote and removeQuote and had to do a deeper dive on event emitting. After that, was able to solve it.

15. Save and retrive from localStorage.

    - First read about a method to use a watcher to monitor and change, and mounted() to retrieve it on load. However, I had trouble getting this to work for my purposes and also thought it might be more reliable to just have the saveQuote/removeQuote functions set localStorage directly.

16. Challenge: initially used for loop to determine if a quote was already saved to savedQuotes, but realized that wasn't the right tool because it would continue looping after a quote was saved, and then return the message that it had already been saved. Went with a filter() function as it was more effective and efficient.

FRONT END

17. I really wanted to use vuetify because I really like its design but I really struggled with installation and decided that the time it would take me to correct it would probably detract from the final product so I decided to just use bootstrap-vue which had simpler installation and would still simplify/standardize my front end design.

TO DO

- translate-y and transitions 2ms for buttons
- fix for mobile
    <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico" /> -->
