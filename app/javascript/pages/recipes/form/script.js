import AutoComplete from '../../../components/auto-complete'
import ArrayInput from '../../../components/array-input'
import KeyValueInput from '../../../components/key-value-input'
import { debounce } from 'lodash'
import axios from 'axios'
import { toast } from '../../../config/helpers'
import { DirectUpload } from "@rails/activestorage"
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  components: {
    AutoComplete,
    ArrayInput,
    KeyValueInput,
    vueDropzone: vue2Dropzone
  },
  props: [
    'steps', 'ingredients',
    'photos', 'description', 'category',
    'name', 'error', 'category_id'
  ],
  data: function() {
    return {
      fields: ['steps', 'ingredients', 'description', 'category', 'name'],
      stepsModel: '',
      ingredientsModel: '',
      descriptionModel: '',
      categoryModel: '',
      nameModel: '',
      categories: [],
      categoryObject: {},
      ingredientList: [],
      images: [],

      dropzoneOptions: {
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        url: "/file_uploads",
        headers: { 'X-CSRF-TOKEN': document.querySelector("[name='csrf-token']").content },
        removedfile: (file) => {

        }
      }
    }
  },
  created: function() {
    this.fields.forEach(item => {
      this[`${item}Model`] = this[item]
    })
    this.ingredientList =  this.ingredients
    this.categoryObject = { name: this.category, category_id: this.category_id }
  },
  mounted: function() {
    (this.photos || []).forEach(image => {
      this.$refs.myVueDropzone.manuallyAddFile(image, image.url);
    })
  },
  methods: {
    getSteps(items) {
      this.stepsModel = items
    },

    getCategories: debounce(function(name) {
      axios.get('/api/categories', { params: { search: name } })
           .then(response => {
             const { data } = response.data;
             this.categories = data
           })
    }),
    setCategory(category) {
      this.categoryObject = category
      this.categoryModel = category.name
    },
    getIngredients(items) {
      this.ingredientList = items
    },
    createCategory(inputs = {}) {
      axios.post('/api/categories', { category: inputs })
        .then((response) => {
          this.categoryObject = response.data;
          this.categoryModel = response.data.name
          toast({ message: 'Category added', type: 'is-success' })
        })
        .catch((error) => {
          toast({ message: 'Category added', type: 'is-success' })
        })
    },

    createNewCategory() {
      this.$buefy.dialog.prompt({
        message: `Category`,
        inputAttrs: {
            placeholder: 'e.g. main course',
            maxlength: 20
        },

        confirmText: 'Add',
        onConfirm: (value) => {
            this.createCategory({ name: value })
        }
      })
    },
    ingredientDeleted(ingredient) {
      if (!this.$route.params.id)
        return
      axios.delete(`/api/recipes/${this.$route.params.id}/ingredients/${ingredient.id}`)
        .then(response => {
          toast({ message: 'Ingredient deleted', type: 'is-success' })
        })
        .catch((error) => {
          toast({ message: 'Failed to delete ingredient', type: 'is-danger' })
        })
    },

    submit() {
      this.$emit('submit', {
        name: this.nameModel,
        category: this.categoryObject,
        steps: this.stepsModel,
        description: this.descriptionModel,
        ingredients_attributes: this.ingredientList,
        images: this.images
      })
    },

    fileUploaded(file, response) {
      this.images.push(response.signed_id)
    },

    uploadFile(file) {
      const url = "/rails/active_storage/direct_uploads"
      const upload = new DirectUpload(file, url)

      upload.create((error, blob) => {
        if (error) {
          toast({ message: 'Failed to upload image', type: 'is-danger' })
        } else {
          this.images.push(blob.signed_id)
        }
      })
    }
  },
}
