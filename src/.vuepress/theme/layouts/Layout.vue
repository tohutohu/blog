<template>
  <LayoutWrapper>
    <Home v-if="$page.frontmatter.home"/>

    <Article
      v-else
    >
    </Article>
  </LayoutWrapper>
</template>

<script>
import LayoutWrapper from './LayoutWrapper.vue'
import Home from '../components/Home.vue'
import Page from '../components/Page.vue'

export default {
  name: 'Layout',
  components: { Home, Article:Page, LayoutWrapper },
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
