<template>

    <h3>{{ cocktail.name }}</h3>

    <span style="display: block">{{ cocktail.composition }}</span>
    <div class="price" v-if="cocktail.price > 15">
      expensive {{ cocktail.price }} ryb
    </div>
    <div class="volume">{{ cocktail.volume }} ml</div>
    <i
      class="material-icons"
      @click="cocktailsStore.makeFav(cocktail.id)"
      :class="{ active: cocktail.isFav }"
      >favorite</i
    >

</template>

<script>
import useCocktailsStore from "@/stores/CocktailsStore.js";
export default {
  props: ["cocktail"],
  setup() {
    const cocktailsStore = useCocktailsStore();

    return { cocktailsStore };
  },
};
</script>
