<template>
    <section>
        <b-field :label="label">
            <b-autocomplete
                :data="items"
                :placeholder="placeholder"
                :field="text"
                :loading="loading"
                :value="value"
                @typing="$emit('typing', $event)"
                @select="$emit('select', $event)">

                <template slot-scope="props">
                    <div class="media">
                        <div class="media-content">
                            {{ props.option[field] }}
                        </div>
                    </div>
                </template>
                <template v-if="addable" slot="footer">
                    <a @click="$emit('add')">
                        <span> Add new... </span>
                    </a>
                </template>
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>
    export default {
       props: ['data', 'loading', 'title', 'placeholder', 'label', 'field', 'text', 'value', 'addable'],

       computed: {
          items() {
            if (!this.addable)
              return this.data

            return this.data.length > 0 ? this.data : [{[this.field]: ''}]
         }
       }
    }
</script>
