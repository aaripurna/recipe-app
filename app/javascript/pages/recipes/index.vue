<template>
  <div id="recipe">
    <p>Recipes</p>
    <div class="filter-container">
      <div class="filters">
        <b-field label="Search">
         <b-autocomplete
            v-model="keyword"
            placeholder="Curros"
            :keep-first="false"
            :open-on-focus="false"
            :data="filteredKeywords"
            field="user.first_name"
            @select="option => (selected = option)"
            :clearable="true"
          >
          </b-autocomplete>
        </b-field>

        <b-field label="Filter by category">
          <b-autocomplete
            v-model="category"
            placeholder="Curros"
            :keep-first="false"
            :open-on-focus="false"
            :data="filteredCategory"
            field="user.first_name"
            @select="option => (selected = option)"
            :clearable="true"
          >
          </b-autocomplete>
        </b-field>
      </div>
      <div class="add-button-container">
        <router-link
          :to="{ name: 'new_recipe_path' }"
          class="button is-primary"
        >
        Add New
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      data: [
          'Orange',
          'Apple',
          'Banana',
          'Pear',
          'Lemon',
          'Strawberry',
          'Kiwi'
      ],
      keyword: "",
      category: "",
      message: "INDEX",
      selected: null,
    }
  },
  computed: {
    filteredKeywords() {
      return this.filteredSearch(this.keyword, this.data);
    },

    filteredCategory() {
      return this.filteredSearch(this.category, this.data);
    },
  },
  methods: {
    filteredSearch(term, collections) {
      return collections.filter((option) => {
        return option
              .toString()
              .toLowerCase()
              .indexOf(term.toLowerCase()) >= 0
      })
    }
  }
}
</script>

<style scoped>

p {
  font-size: 2em;
  text-align: center;
}
.filter-container {
  display: flex;
  justify-content: center;
}

.add-button-container {
  display: flex;
  align-items: center;
}

.filters {
  display: flex;
  flex: 1;
}
</style>
