<template>
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
      <input type="hidden" name="path" :value="$route.path">
      <input type="hidden" name="form-name" value="suspendedComments">
      <div>コメントは承認されると表示されます</div>
      <input type="submit" value="Send">
    </form>
  </details>
</template>

<style scoped>
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
</style>
