<template>
  <div class="cocktails-list">
    <div
      class="cocktail"
      v-for="cocktail in filtratedCocktails"
      :key="cocktail.id"
    >
      <h3>{{ cocktail.name }}</h3>
      <span style="display: block">{{ cocktail.composition }}</span>
      <div class="price" v-if="cocktail.price > 15">
        expensive {{ cocktail.price }} ryb
      </div>
      <div class="volume">{{ cocktail.volume }} ml</div>
      <span
        class="favourite"
        @click="cocktail.isFavourited = !cocktail.isFavourited"
      >
        {{ cocktail.isFavourited ? "♥" : "♡" }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["filtratedCocktails"],
};
</script>

<style></style>
