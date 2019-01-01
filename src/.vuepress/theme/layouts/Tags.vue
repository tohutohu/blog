<template>
  <LayoutWrapper>
    <div class="page">
      <div class="content default">
        <h2>タグ一覧</h2>
        <div>
          <div v-for="(data, key) in $tags.map" :key="key">
            <router-link :to="data.path">{{ key }}({{ data.posts.length }})</router-link>
          </div>
        </div>
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
