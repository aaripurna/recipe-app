<template>
    <section>
        <b-field :label="label">
            <b-autocomplete
                :data="data"
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
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>
    export default {
       props: ['data', 'loading', 'title', 'placeholder', 'label', 'field', 'text', 'value'],
    }
</script>
