<template>
<div>
  <div v-for="page in filteredPages" class="article-container" v-if="!page.frontmatter.exclude">
    <h3 class="article-title">
      <router-link :to="page.path">{{page.title || 'No Title'}}</router-link>
    </h3>
    <div class="tag-container">
      <i class="fas fa-tags tag-icon"></i>
      <router-link v-for="c in page.frontmatter.categories" tag="div" :to="'/category/' + c + '.html'" class="tag">{{c}}</router-link>
    </div>
    <div v-if="page.frontmatter.description" class="article-description">{{page.frontmatter.description}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Articles',
  props: ['pages', 'prefix'],
  computed: {
    filteredPages () {
      return this.pages.filter(page => !page.path.match(/tag|category/)).sort((a, b) => {
        return (new Date(b.frontmatter.date)) - (new Date(a.frontmatter.date))
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.article-container 
  border: 2px solid #e9e9e9;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;

.article-title
  margin: 0;
  margin-bottom: 6px;

.tag-container
  display: flex

.tag
  margin-right 0.6em
  padding 0.2em 0.4em
  border-radius: 3px;
  font-size 0.6em
  cursor: pointer;
  background-color: #f2fff3;

.tag-icon
  margin-left 1em
  margin-right 0.4em
  font-size 0.4em

.article-description
  margin-top: 6px;

</style>
