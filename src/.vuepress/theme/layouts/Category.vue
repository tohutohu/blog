<template>
  <LayoutWrapper>
    <div class="page">
      <div class="content default">
        <h2>カテゴリー: {{ $route.meta.categoryName }}の記事一覧</h2>
        <Articles :pages="$category.posts" prefix="/"/>
      </div>
    </div>
  </LayoutWrapper>
</template>

<script>
import LayoutWrapper from './LayoutWrapper.vue'
export default {
  components: { LayoutWrapper }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
