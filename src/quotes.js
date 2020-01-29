export const quotes = [
  {
    body: "Be cool"
  },
  {
    body:
      "When you create, you must always feel a little bit uncomfortbale. And if you're feeling uncomfortable and alone, you know you're doing something right."
  },
  {
    body:
      "Simplicity, Patience, and Compassion. Your 3 Greatest Treasures. -Tao Te Ching"
  },
  {
    body: "Moderation is freedom from one's own ideas. -Tao Te Ching"
  },
  {
    body: "Pain that isn't Transformed is Transmitted -Brene Brown"
  },
  {
    body: "Want a lil more? Chill a lil more -Hicks"
  },
  {
    body: "It isn't bout what I do. It's about how I feel -Hicks"
  },
  {
    body: "All we need to do\n is make sure\n we keep talking. -Stephen Hawking"
  },
  {
    body: "Mood is Illusion"
  },
  {
    body: "See self in other"
  },
  {
    body: "What does finishing look like here?"
  },
  {
    body: "Mood swings as unresolved internal conflicts",
    link:
      "https://docs.google.com/document/d/1u1-az7tKfeVusg4fxPGbpZKierFkID-N8psiTrOrPqQ/edit"
  },
  {
    body: '"Nothing Bad is Happening" said the Giraffe to the Scared Boy'
  },
  {
    body: '"People can only tell you what is best for them" -Esther Hicks'
  },
  {
    body: '"How do you keep your heart open in hell?" -Ram Dass'
  },
  {
    body: '"You have no right to take away someone\'s suffering" -Ram Dass'
  },
  {
    body:
      '"Our spirit is fed by a boundless interaction by all that is around us." -Ram Dass'
  },
  {
    body: '"People want to hear what you have to say" -A Star Is Born'
  },
  {
    body: "1st Relax"
  },
  {
    body: "Seeking Harmony w/o Desiring It"
  },
  {
    body: "Dismantle The Machine. All Answers Lie Beneath. -Luna"
  },
  {
    body: "Trying to fix yourself, you'll never do it. -Luna"
  },
  {
    body: "Codify Insights. Update Environment. -Luna"
  },
  {
    body: "Make a decision once. Then just make efforts. -Luna"
  }
];

export function getRandomQuote() {
  let max = quotes.length;
  for (var i = 0; i < quotes.length; i++) {
    quotes[i].id = i + 1;
    var quotesWithId = quotes;
  }
  max = quotesWithId.length;
  // returns a random integer up to max - 1
  const x = Math.floor(Math.random() * Math.floor(max));
  return quotesWithId[x];
}

export default quotes;
