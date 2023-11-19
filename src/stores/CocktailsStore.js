import { defineStore } from "pinia";
import { cocktails } from "./../../data/db.json";
const useCocktailsStore = defineStore("CocktailsStore", {
  state: () => ({
    cocktails: cocktails,
    isLoading: false,
    randomized: false,
    random: {},
  }),
  getters: {
    favs() {
      return this.cocktails.filter((cock) => cock.isFav);
    },
    gin() {
      return this.cocktails.filter((cock) => cock.ginized);
    },
    tequila() {
      return this.cocktails.filter((cock) => cock.tequilized);
    },
    sour() {
      return this.cocktails.filter((cock) => cock.soured);
    },
    big() {
      return this.cocktails.filter((cock) => cock.volume > 150);
    },
    rum() {
      return this.cocktails.filter((cock) => cock.rumized);
    },
  },
  actions: {
    async makeFav(id) {
      const cocktail = this.cocktails.find((c) => c.id === id);
      cocktail.isFav = !cocktail.isFav;

      const res = await fetch("data/db.json" + id, {
        method: "PATCH",
        body: JSON.stringify({ isFav: cocktail.isFav }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.error) {
        console.log(res.error);
      }
    },
    randomaize(filter) {
      switch (filter) {
        case "tequila":
          this.random = this.tequila[Math.floor(Math.random() * this.tequila.length)]
          this.randomized = true;

          break;
        case "rum":
          this.random = this.rum[Math.floor(Math.random() * this.rum.length)];
          this.randomized = true;
          break;
        case "big":
          this.random = this.big[Math.floor(Math.random() * this.big.length)]
          this.randomized = true;

          break;
        case "sour":
          this.random = this.sour[Math.floor(Math.random() * this.sour.length)];
          this.randomized = true;

          break;
        case "gin":
          this.random = this.gin[Math.floor(Math.random() * this.gin.length)];
          this.randomized = true;

          break;
        case "favs":
          this.random = this.favs[Math.floor(Math.random() * this.favs.length)];
          this.randomized = true;

          break;

        default:
          this.random = this.cocktails[Math.floor(Math.random() * this.cocktails.length)]
          this.randomized = true;

          break;
      }
      [...document.querySelectorAll('.filter button')].forEach(btn => btn.classList.remove('active'))
    },
  },
});

export default useCocktailsStore;
