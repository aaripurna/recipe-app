import Form from '../form/index.vue'
import axios from 'axios'
import { toast } from '../../../config/helpers'

export default {
  components: {
    Form
  },
  data: function() {
    return {
      recipe: null
    }
  },
  created: function() {
    this.getRecipe()
  },
  methods: {
    getRecipe() {
      axios.get(`/api/recipes/${this.$route.params.id}`)
          .then(response => {
            this.recipe = response.data;
          })
          .catch(error => {
            toast({ message: 'Recipe not found', type: 'is-danger' })
          })
    },
    submit(recipe) {
      recipe['category_id'] = recipe.category.id

      axios.put(`/api/recipes/${this.$route.params.id}`, { recipe })
          .then(response => {
            toast({ message: 'Recipe updated', type: 'is-success' })
          })
          .catch(error => {
            toast({ message: 'Something is wrong, failed to update recipe', type: 'is-danger' })
          })
    }
  }
}
