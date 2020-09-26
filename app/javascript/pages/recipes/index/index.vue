<template>
  <div id="recipe">
    <p class="title">Recipes</p>
    <section>
        <div class="table-header">
          <div class="header-top">
            <p class="subtitle">List of recipes</p>
            <div class="add-button-container">
              <router-link
                :to="{ name: 'new_recipe_path' }"
                class="button is-primary"
              >
              Add New
              </router-link>
            </div>
          </div>
          <div class="header-bottom">
            <b-input placeholder="Search..."
                class="search-bar"
                type="search"
                icon-pack="fas"
                v-model="search"
                v-debounce:500ms="filterResult"
                icon="search">
            </b-input>
            <AutoComplete
              @typing="getCategories"
              :loading="fetchingCategory"
              :data="categories"
              @select="filterWithCategory"
              field="name"
              :value="autoCompleteValue"
              placeholder="Search Dish Type"
            />
          </div>
        </div>
        <b-table
            :data="data"
            striped
            :loading="loading"
            icon-pack="fas"
            paginated
            selectable
            backend-pagination
            :total="totalPage"
            :per-page="per_page"
            @page-change="onPageChange"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"

            backend-sorting
            :default-sort-direction="defaultSortOrder"
            :default-sort="[sortField, sortOrder]">

            <b-table-column field="name" label="Dish" v-slot="props">
                {{ props.row.name }}
            </b-table-column>

            <b-table-column field="type" label="Type" v-slot="props">
                {{ props.row.type }}
            </b-table-column>
            <b-table-column field="type" label="Action" v-slot="props">
              <div class="action">
                <router-link
                :to="{ name: 'edit_recipe_path', params: { id: props.row.id } }"
                >
                  <p>edit</p>
                </router-link>

                <router-link
                  :to="{ name: 'recipe_path', params: { id: props.row.id } }"
                >
                <p>view</p>
                </router-link>
                <span @click="activateModal(props.row.id)" class="delete-button">
                  <p>delete</p>
                </span>
              </div>
            </b-table-column>
        </b-table>
    </section>
    <b-modal
        v-model="isComponentModalActive"
        has-modal-card
        trap-focus
        :destroy-on-hide="false"
        aria-role="alertdialog"
        aria-modal>
        <AlertModal
          text="Are you sure want to delete this?"
          v-on:cancel="onCancel"
          v-on:accept="deleteRecipe"
          />
    </b-modal>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped src="./styles.scss"></style>
