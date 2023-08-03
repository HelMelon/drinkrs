<template>
  <div class="home">
    <h1>Choose ur death</h1>
    <h2>filters</h2>

    <nav class="filter">
      <button @click="toggleFilter($event, 'gin')">
        <img src="./../assets/icons/gin.svg" alt="" />
      </button>
      <button @click="toggleFilter($event, 'tequila')">
        <img src="./../assets/icons/tequila.svg" alt="" />
      </button>
      <button @click="toggleFilter($event, 'rum')">
        <img src="./../assets/icons/rum.svg" alt="" />
      </button>
      <button @click="toggleFilter($event, 'favs')">
        <img src="./../assets/icons/favs.svg" alt="" />
      </button>
      <button @click="toggleFilter($event, 'big')">
        <img src="./../assets/icons/big.svg" alt="" />
      </button>
      <button @click="toggleFilter($event, 'sour')">
        <img src="./../assets/icons/sour.svg" alt="" />
      </button>
    </nav>
    <button @click="cocktailsStore.randomaize(filter)" class="random-btn">
      RANDOM
    </button>
    <span @click="clearRandom" class="clear-random"
      >clear random</span
    >
    <div v-if="!randomized">
      <div class="cocktails-list" v-if="filter === 'all'">
        <div class="cock" v-for="cock in cocktails" :key="cock.id">
          <Cocktail :cocktail="cock" />
        </div>
      </div>
      <div class="cocktails-list" v-else-if="filter === 'tequila'">
        <div class="cock" v-for="cock in tequila" :key="cock.id">
          <Cocktail :cocktail="cock" />
        </div>
      </div>
      <div class="cocktails-list" v-else-if="filter === 'gin'">
        <div class="cock" v-for="cock in gin" :key="cock.id">
          <Cocktail :cocktail="cock" />
        </div>
      </div>
      <div class="cocktails-list" v-else-if="filter === 'big'">
        <div class="cock" v-for="cock in big" :key="cock.id">
          <Cocktail :cocktail="cock" />
        </div>
      </div>
      <div class="cocktails-list" v-else-if="filter === 'sour'">
        <div class="cock" v-for="cock in sour" :key="cock.id">
          <Cocktail :cocktail="cock" />
        </div>
      </div>
      <div class="cocktails-list" v-else-if="filter === 'rum'">
        <div class="cock" v-for="cock in rum" :key="cock.id">
          <Cocktail :cocktail="cock" />
        </div>
      </div>
      <div class="cocktails-list" v-else-if="filter === 'favs'">
        <div class="cock" v-for="cock in favs" :key="cock.id">
          <Cocktail :cocktail="cock" />
        </div>
      </div>
    </div>
    <div v-if="randomized" class="cocktails-list">
      <div class="cock">
        <Cocktail :cocktail="random" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Cocktail from "./../components/Cocktail.vue";
import useCocktailsStore from "@/stores/CocktailsStore.js";
import { storeToRefs } from "pinia";

export default {
  setup() {
    let filter = ref("all");
    let isFilterated = false;

    const cocktailsStore = useCocktailsStore();
    const {
      randomized,
      random,
      cocktails,
      favs,
      sour,
      rum,
      gin,
      tequila,
      big,
    } = storeToRefs(cocktailsStore);

    const toggleFilter = (e, filtername) => {
      isFilterated = !isFilterated;
      if (isFilterated) {
        filter.value = filtername;
        e.target.parentElement.classList.add("active");
      } else {
        filter.value = "all";
        e.target.parentElement.classList.remove("active");
      }

      if (randomized.value === true) {
        e.target.parentElement.classList.remove("active");
      }
    };
    const clearRandom = () => {
      randomized.value = false;
      filter.value = "all";
    };

    return {
      toggleFilter,
      clearRandom,
      randomized,
      cocktailsStore,
      random,
      cocktails,
      filter,
      favs,
      sour,
      gin,
      tequila,
      big,
      rum,
    };
  },

  components: { Cocktail },
};
</script>

<style>
@font-face {
  font-family: "28days";
  src: local("28days"), url("./../assets/fonts/28DaysLater.ttf");
}

.logo {
  position: absolute;
  top: 60px;
  left: 60px;
  width: 55px;
}
</style>
