<template>
  <div v-if="recipe">
    <header>
      <h1>{{ recipe.name }}</h1>
    </header>
    <section class="image-contaner">
      <figure class="image-wrapper"
         v-for="(image, index) in recipe.photos"
        :key="index"
      >
        <img :src="image.url">
      </figure>
    </section>
    <section>
      <p class="description">
        {{ recipe.description }}
      </p>
    </section>
    <section>
       <h2>Ingredients</h2>
      <ul>
        <li v-for="ingredient in recipe.ingredients" :key="ingredient.id">
          <p>{{ ingredient.name }} <b>{{ ingredient.qty }}</b></p>
        </li>
      </ul>
    </section>
    <section>
      <h2>How to cook</h2>
      <ul>
        <li v-for="(step, index) in recipe.steps" :key="index" >
          <p>{{ step }}</p>
        </li>
      </ul>
    </section>
  </div>
  <div v-else>
    <h1>404</h1>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
