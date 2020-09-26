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
              :value="item"
              @input="updateValue($event, index)"
              :placeholder="placeholder"
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
  props: ['label', 'message', 'type', 'data', 'inputType', 'maxlength', 'placeholder'],
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
      this.items.push('');
      this.$emit('input', this.items)
    },
    updateValue(value, index) {
      this.items[index] = value
      this.$emit('input', this.items)
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    }
  }

}
</script>

<style lang="scss" scoped>
.trash {
  margin-left: 5px;
}
.field {
  margin-top: 20px;
}
.input-list {
  display: flex;
  margin-bottom: 10px;

  .control {
    flex: 1
  }
}


</style>
