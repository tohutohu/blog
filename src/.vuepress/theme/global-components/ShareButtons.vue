<template>
  <div class="wrapper">
  <div class="share-header">
    --Share--
  </div>
  <ul class="share">
    <li class="twitter"><a :href="`https://twitter.com/intent/tweet?url=https://to-hutohu.com${this.$page.path}&text=${this.$page.title}&via=to_hutohu`" target="_blank"><i class="fab fa-twitter"></i></a></li>
    <li class="facebook"><a :href="`https://www.facebook.com/share.php?u=https://to-hutohu.com${this.$page.path}&t=${this.$page.title}`" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
    <li class="linkedin"><a :href="`https://www.linkedin.com/shareArticle?mini=true&url=https://to-hutohu.com${this.$page.path}&title=${this.$page.title}`" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
    <li class="googleplus"><a :href="`https://plus.google.com/share?url=https://to-hutohu.com${this.$page.path}`" target="_blank"><i class="fab fa-google-plus-g"></i></a></li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'ShareButtons',
  mounted() {
    window.twttr.widgets.load()
  },
  watch: {
    $route() {
      window.twttr.widgets.load()
    }
  }
}
</script>

<style>
/* entypo */
[class*="entypo-"]::before {
  font-family: 'entypo', sans-serif;
}

* {
  box-sizing: border-box;
}

.wrapper {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}

.share-header {
  text-align: center;
}

.share {
  top: 50%;
  left: 50%;
  padding-left: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1em;
  font-weight: 700;
  text-align: center;
}
.share span {
  font-weight: 400;
}
.share li {
  display: inline-block;
}
.share li a {
  display: block;
  width: 32px;
  color: #fff;
  text-decoration: none;
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-radius: 3px;
  padding: 6px 0;
  transition: .025s all ease-in-out;
}
.share li a:active {
  border-bottom: 0;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.025);
  -webkit-transform: translateY(4px);
          transform: translateY(4px);
}
.share li.twitter a {
  background-color: #00aced;
  border-color: #0087ba;
}
.share li.twitter a:hover, .share li.twitter a:focus {
  background-color: #21c2ff;
  border-color: #00aced;
}
.share li.twitter a:active {
  background-color: #0087ba;
}
.share li.facebook a {
  background-color: #3b5998;
  border-color: #2d4373;
}
.share li.facebook a:hover, .share li.facebook a:focus {
  background-color: #4c70ba;
  border-color: #3b5998;
}
.share li.facebook a:active {
  background-color: #2d4373;
}
.share li.linkedin a {
  background-color: #0977b5;
  border-color: #075784;
}
.share li.linkedin a:hover, .share li.linkedin a:focus {
  background-color: #0b97e6;
  border-color: #0977b5;
}
.share li.linkedin a:active {
  background-color: #075784;
}
.share li.googleplus a {
  background-color: #cc3732;
  border-color: #a32c28;
}
.share li.googleplus a:hover, .share li.googleplus a:hover, .share li.googleplus a:focus {
  background-color: #d75e5a;
  border-color: #cc3732;
}
.share li.googleplus a:active {
  background-color: #a32c28;
}

</style>

