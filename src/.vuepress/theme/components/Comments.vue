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
    <details class="send-comment-container">
      <summary>
        <span class="send-comment">コメントする</span>
      </summary>
      <form name="suspendedComments" method="post" netlify netlify-honeypod="bot-field">
        <div class="form-name">
          <div class="label" for="name">Name:</div>
          <input type="text" name="name" id="">
        </div>
        <div class="form-email">
          <div class="label" for="email">E-mail:</div>
          <input type="email" name="email" id="">
        </div>
        <div class="form-content">
          <div class="label" for="content">Content:</div>
          <textarea name="content" id="" cols="30" rows="10"></textarea>
        </div>
        <input type="hidden" name="pageKey" :value="$page.key">
        <input type="hidden" name="form-name" value="suspendedComments">
        <div>コメントは承認されると表示されます</div>
        <input type="submit" value="Send">
      </form>
    </details>
  </div>
</template>

<script>
export default {
  filters: {
    format(val) {
      return (new Date(val)).toLocaleString()
    }
  },
  created () {
    console.log(this)
  }
}
</script>

<style>
.label {
  width: 5em;
}

input[type="email"], input[type="text"], textarea {
  border:0;
  padding:6px;
  font-size:1.2em;
  font-family:Arial, sans-serif;
  color:#aaa;
  border:solid 1px #ccc;
  width:300px;
  border-radius: 4px;
}

textarea {
  width: calc(100% - 5em);
}

.form-name,
.form-email{
  margin-bottom: 0.6em;
  margin-top: 0.6em;
}

.form-content,
.form-email,
.form-name {
  display: flex;
}

.send-comment-container {
  margin-top: 1.2em;
}

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
