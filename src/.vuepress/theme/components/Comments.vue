<template>
  <div class="comments">
    <h3>Comments</h3>
    <div class="comments-container">
      <div v-for="(comment, idx) in $page.comments" :key="idx">
        <hr>
        <div class="first-line">
          <div class="name">{{comment.name}}</div>
          <p class="date">{{comment.date | format}}</p>
        </div>
        <div class="comment-content">{{comment.content}}</div>
      </div>
    </div>
    <comments-form/>
  </div>
</template>

<script>
import CommentsForm from './CommentForm.vue'
export default {
  components: {CommentsForm},
  filters: {
    format(val) {
      return (new Date(val)).toLocaleString()
    }
  }
}
</script>

<style scoped>
.comments-container {
  padding-left: 0.6em;
}

.first-line {
  display: flex;
  font-weight: 400;
  margin-bottom: 0.2em;
}

.name {
  font-size: 1.3em;
}

.date {
  margin-left: 0.6em;
  margin-bottom: 0;
  font-size: 0.6em;
  color: #ababab
}

.comments {
    max-width: 740px;
    margin: 0 auto;
    padding: 2rem 2.5rem;
}

@media (max-width: 959px)  {
  .comments {
      padding: 2rem;
  }
}

@media (max-width: 419px) {
  .comments {
      padding: 1.5rem;
  }
}

.comment-content {
  padding-left: 1em;
}

</style>
