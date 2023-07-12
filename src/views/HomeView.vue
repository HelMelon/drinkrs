<template>
  <div class="home">
    <h1>What's I'm gonna drink tday?</h1>
    <h2>filters</h2>
    <div class="filters">
      <button @click="withing($event, 'gin')"><img src="./../assets/icons/gin.svg" alt=""></button>
      <button @click="withing($event, 'tequila')"><img src="./../assets/icons/tequila.svg" alt=""></button>
      <button @click="withing($event, 'rum')"><img src="./../assets/icons/rum.svg" alt=""></button>
      <button @click="favourited"><img src="./../assets/icons/favs.svg" alt=""></button>
      <button @click="largeVolume"><img src="./../assets/icons/big.svg" alt=""></button>
      <button @click="sour"><img src="./../assets/icons/sour.svg" alt=""></button>
    </div>
      <Cocktail :filtratedCocktails="filtratedCocktails"/>
  </div>
</template>

<script>
import { cocktails } from "./../../data/db";
import Cocktail from "@/components/Cocktail.vue";

export default {
  name: "HomeView",
  data() {
    return {
      cocktails: [],
      isFilterated: false,
      filtratedCocktails: [],
    };
  },
  mounted() {
    // fetch('http://localhost:3000/cocktails')
    // .then(res => res.json())
    // .then(data => this.cocktails = data)
    // .catch(err => console.log(err.message))
    this.cocktails = [...cocktails];
  },
  updated() {
    this.filtratedCocktails
      .sort((a, b) => {
        if (a.volume > b.volume) {
          return 1;
        } else if (a.volume < b.volume) {
          return -1;
        } else {
          return 0;
        }
      })
      .reverse();
  },
  methods: {
    withing(e, ingridient) {
      this.isFilterated = !this.isFilterated;

      switch (ingridient) {
        case "gin":
          if (this.isFilterated) {
            this.filtratedCocktails = this.cocktails.filter(
              (cocktail) => cocktail.ginized
            );
            e.target.classList.add("active");
          } else {
            this.filtratedCocktails = [];
            e.target.classList.remove("active");
          }
          break;
        case "tequila":
          if (this.isFilterated) {
            this.filtratedCocktails = this.cocktails.filter(
              (cocktail) => cocktail.tequilized
            );
            e.target.classList.add("active");
          } else {
            this.filtratedCocktails = [];
            e.target.classList.remove("active");
          }
          break;
        case "rum":
          if (this.isFilterated) {
            this.filtratedCocktails = this.cocktails.filter(
              (cocktail) => cocktail.rumized
            );
            e.target.classList.add("active");
          } else {
            this.filtratedCocktails = [];
            e.target.classList.remove("active");
          }
          break;
        default:
          alert("Нет таких значений");
      }
    },
    favourited() {
      this.isFilterated = !this.isFilterated;
    },
    sour(e) {
      this.isFilterated = !this.isFilterated;
      if (this.isFilterated) {
        this.filtratedCocktails = this.cocktails.filter(
          (cocktail) => cocktail.soured
        );
        console.log(this.filtratedCocktails);
        e.target.classList.add("active");
      } else {
        this.filtratedCocktails = [];
        e.target.classList.remove("active");
      }
    },
    largeVolume(e) {
      this.isFilterated = !this.isFilterated;
      if (this.isFilterated) {
        this.filtratedCocktails = this.cocktails.filter(
          (cocktail) => cocktail.volume > 150
        );
        console.log(this.filtratedCocktails);
        e.target.classList.add("active");
      } else {
        this.filtratedCocktails = [];
        e.target.classList.remove("active");
      }
    },
  },
  components: { Cocktail }
};
</script>
<style>
@font-face {
  font-family: "28days";
  src: local("28days"), url("./../assets/fonts/28DaysLater.ttf");
}
.favourite {
  font-size: 50px;
  color: rgba(37, 209, 207, 0.81);
  position: absolute;
  right: 20px;
  top: 0;
}
h1,
h2 {
  font-size: 50px;
  font-family: "28days";
  text-shadow: 5px 4px 7px rgba(37, 209, 207, 0.81);
  letter-spacing: 3px;
  font-weight: 100;
}
h2 {
  font-size: 35px;
}
h1 {
  text-decoration: underline;
  padding: 0 10px;
}
.cocktail {
  padding: 10px;
}
button {
    border: none;
    border-right: 1px solid rgba(37, 209, 207, 0.81);
    font-size: 40px;
    background-color: #141111;
    color: rgba(37, 209, 207, 0.81);
    border-radius: 50%;
    display: flex;
    padding: 0;
}
input:focus {
  border: none;
}
.filters {
  display: flex;
  justify-content: space-evenly;
  margin: 20px auto;
  width: 100%;
}
.filters img {
  width: 40px;
  height: 40px;
  padding: 5px;
}

.cocktail {
  position: relative;
  padding: 20px;
  border: 2px rgba(37, 209, 207, 0.81) solid;
  box-shadow: 5px 5px 7px rgba(37, 209, 207, 0.81);
  width: 100%;
}
.cocktail h3 {
  text-shadow: 1px 1px 1px #04fbffdd, 0 0 0.5em white;
  font-size: 25px;
}

.price {
  margin-top: 10px;
  color: crimson;
}
.volume {
  margin: 10px 0;
}
.cocktails-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 25px;
    max-width: 80%;
    margin: auto;
}
.active {
  background-color: #ffffff83;
  color: rgba(37, 209, 207, 0.81);
  text-shadow: 1px 1px 5px #fff;
  border-radius: 50%;
  padding: 5px;
}
</style>
