<template>
  <div v-if="$page.frontmatter.date">
    <div class="date-container">
      <div class="published-date"><i class="far fa-calendar"></i>{{ publishedDate }}</div>
      <div class="updated-date"><i class="fas fa-sync"></i>{{ updatedDate }}</div>
    </div>
    <div class="article-category-container">
      <i class="fas fa-tags"></i>
      <router-link 
        class="article-category"
        v-for="(category, idx) in $page.frontmatter.categories"
        :key="idx"
        tag="div"
        :to="`/category/${category}.html`"
       >{{ category }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    publishedDate () {
      return this.$page.frontmatter.date.slice(0, 10)
    },
    updatedDate () {
      return this.$page.lastUpdated.slice(0, 10)
    }
  }
}
</script>

<style scoped>
.date-container {
  display: flex;
  margin-bottom: 0.4em;
}

i {
  margin-right: 0.2em;
}

.updated-date {
  margin-left: 0.6em;
}

.article-category-container {
  display: flex;
}

.article-category {
  margin-right: 0.6em;
  cursor: pointer;
}

</style>


