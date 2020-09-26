<template>
  <div class="main-form">
    <h1>Recipe: {{ name }}</h1>
    <section>
      <b-field label="Name"
        :type="error ? 'is-danger' : ''"
      >
        <b-input type="text"
            v-model="nameModel"
            maxlength="30">
        </b-input>
      </b-field>
      <AutoComplete
        label="Category"
        :value="categoryModel"
        :data="categories"
        @typing="getCategories"
        field="name"
        @select="setCategory"
        :addable="true"
        @add="createNewCategory"
        />

      <ArrayInput
        label="Steps"
        :data="stepsModel"
        placeholder="How to cook"
        @input="getSteps"/>
      <KeyValueInput
        label="Ingredients"
        :data="ingredientsModel"
        @input="getIngredients"
        :field="['name', 'qty']"
        :placeholder="['Ingredient e.g. Sugar', 'Amount e.g. 1 spoon']"
        @deleted="ingredientDeleted"
        />

      <b-field label="Message"
        :type="error ? 'is-danger' : ''"
      >
          <b-input
            v-model="descriptionModel"
            maxlength="300"
            type="textarea">
          </b-input>
      </b-field>
      <b-button class="button is-primary" @click="submit">
        Submit
      </b-button>
    </section>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped > </style>
