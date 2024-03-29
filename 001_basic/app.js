const app = Vue.createApp({
  data() {
    return {
      url: "https://www.youtube.com",
      showBooks: true,
      books: [
        {
          title: "name of the wind",
          author: "park",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "way of the king",
          author: "Shin",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "Jame",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    togglesShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
