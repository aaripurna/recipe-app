import Form from '../form/index.vue'
import axios from 'axios'
import { toast } from '../../../config/helpers'

export default {
  components: {
    Form
  },
  data: function() {
    return {
      recipe: {
        name: '',
        category: '',
        steps: [' '],
        ingredients: [{name: ''}]
      }
    }
  },
  methods: {
    submit(recipe) {
      recipe['category_id'] = recipe.category.id

      axios.post(`/api/recipes`, { recipe })
          .then(response => {
            toast({ message: 'Recipe created', type: 'is-success' })
            this.$router.push({ name: 'home' })
          })
          .catch(error => {
            toast({ message: 'Something is wrong, failed to submit recipe. plese check the form', type: 'is-danger' })
          })
    }
  }
}
