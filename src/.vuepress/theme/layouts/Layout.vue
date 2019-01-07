<template>
  <LayoutWrapper>
    <Article />
  </LayoutWrapper>
</template>

<script>
import LayoutWrapper from './LayoutWrapper.vue'
import Page from '../components/Page.vue'

export default {
  name: 'Layout',
  components: { Article:Page, LayoutWrapper },
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
