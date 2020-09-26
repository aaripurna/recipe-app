<template>
  <b-field :label="label"
      :type="type"
      :message="message">
      <div class="field-container">
        <div class="input-group">
          <div class="input-list"
            v-for="(item, index) in items"
            :key="index"
          >
            <b-input :type="inputType"
              :value="item[field[0]]"
              @input="updateValue($event, index, field[0])"
              :placeholder="placeholder[0]"
              :maxlength="maxlength">
            </b-input>
             <b-input :type="inputType"
              :value="item[field[1]]"
              @input="updateValue($event, index, field[1])"
              :placeholder="placeholder[1]"
              :maxlength="maxlength">
            </b-input>
            <b-button class="fas fa-trash button is-danger trash" @click="deleteItem(index)"></b-button>
          </div>

        </div>
        <div class="action">
          <b-button class="button is-success" @click="addItems">
            Add
          </b-button>
        </div>
      </div>
    </b-field>
</template>

<script>
export default {
  props: ['label', 'message', 'type', 'data', 'inputType', 'maxlength', 'field', 'placeholder'],
  data: function() {
    return {
      items: [],
    }
  },

  created: function() {
    this.data.forEach(item => {
      this.items.push(item)
    });
    this.$emit('input', this.items)
  },
  methods: {
    addItems() {
      this.items.push({});
      this.$emit('input', this.items)
    },

    updateValue(value, index, field) {
      this.items[index][field] = value
      this.$emit('input', this.items)
    },

    deleteItem(index) {
      this.$emit('deleted', this.items.splice(index, 1)[0]);
    }
  }

}
</script>

<style lang="scss" scoped>
.field {
  margin-top: 20px;
}
.input-list {
  display: flex;
  margin-bottom: 10px;

  .control {
    margin-right: 5px;
    flex: 1;
  }
}
</style>
