import axios from 'axios'
import { get, debounce } from 'lodash'
import AlertModal from '../../../components/alert-modal'
import AutoComplete from '../../../components/auto-complete'
import { toast } from '../../../config/helpers'

export default {
  components: {
    AlertModal,
    AutoComplete
  },
  data: function () {
    return {
      data: [],
      pagination: {},
      loading: false,
      sortOrder: 'desc',
      sortField: 'name',
      defaultSortOrder: 'desc',
      per_page: 25,
      isComponentModalActive: false,
      selectedId: null,
      search: '',
      fetchingCategory: false,
      categories: [],
      autoCompleteValue: ''
    }
  },
  created: function() {
    this.getRecipe({ per_page: this.per_page })
  },
  computed: {
    totalPage() {
      return this.per_page * get(this.pagination, 'total_pages', 0)
    },
  },
  methods: {
    getRecipe(params = {}) {
      this.loading = true;
      axios.get('/api/recipes', { params })
        .then(response => {
          const { data, pagination } = response.data
          this.data = data
          this.pagination = pagination
        })
        .catch(error => {
          this.$buefy.toast.open({
              duration: 5000,
              message: `Something's not good, failed to get recipes`,
              position: 'is-bottom',
              type: 'is-danger'
          })
        })
        .finally(() => {
          this.loading = false;
        })
    },

    onPageChange(page) {
      this.getRecipe({ page: page, per_page: this.per_page })
    },
    activateModal(id) {
      this.selectedId = id
      this.isComponentModalActive = true
    },
    onCancel() {
      this.isComponentModalActive = false
    },
    deleteRecipe() {
      this.loading = true
      this.isComponentModalActive = false

      axios.delete(`/api/recipes/${this.selectedId}`)
        .then(() => {
          this.getRecipe({ per_page: this.per_page, page: this.pagination.current_page })
          toast({ message: `Recipe deleted successfully`, type: 'is-success' })
        })
        .catch((error) => {
          this.loading = false
          toast({ message: `Something's not good, failed to delete recipe`, type: 'is-danger' })
        })
    },
    filterResult() {
      this.getRecipe({ search: this.search })
    },

    getCategories: debounce(function(name) {
      if (!name) {
        this.getRecipe({ per_page: this.per_page })
      }

      this.autoCompleteValue = name;
      this.fetchingCategory = true;
      axios.get('/api/categories', { params: { search: name } })
           .then(response => {
             const { data, pagination } = response.data;
             this.categories = data
             this.fetchingCategory = false;
           })
    }),

    filterWithCategory(event) {
      this.autoCompleteValue = event.name
      this.getRecipe({ category_id: event.id })
    }
  },
}
