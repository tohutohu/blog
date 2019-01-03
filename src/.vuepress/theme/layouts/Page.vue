<template>
  <LayoutWrapper>
    <Article>
      <slot
        name="page-top"
        slot="top"
      />
      <slot
        name="page-bottom"
        slot="bottom"
      >
        <share-buttons />
        <Comments />
      </slot>
    </Article>
  </LayoutWrapper>
</template>

<script>
import LayoutWrapper from './LayoutWrapper.vue'
import Page from '../components/Page.vue'
import Comments from '../components/Comments.vue'

export default {
  name: 'Page',
  components: { Article:Page,  LayoutWrapper, Comments },
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
