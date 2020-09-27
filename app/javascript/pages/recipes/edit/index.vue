<template>
  <div v-if="recipe">
    <Form
      :name="recipe.name"
      :category="recipe.type"
      :steps="recipe.steps"
      :ingredients="recipe.ingredients"
      :category_id="recipe.category_id"
      :description="recipe.description"
      :photos="recipe.photos"
      @submit="submit"
      />
  </div>
  <div v-else>
    <h1>404</h1>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
