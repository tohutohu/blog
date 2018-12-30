---
title: VuePressでブログを作る(VuePress 1.0.0-alpha plugin-blog使用) 
date: 2018-12-17
categories:
  - tech
  - Vue.js
  - VuePress
---

# VuePressでブログを作る

これまでいくつかVuePressについて書いてきましたが、公式からVuePressをブログ向けに使用するためのプラグインが出ていましたので、それを利用したブログの作り方を書いていこうと思います。
このプラグインを導入することでタグやカテゴリーという概念を追加することができます。
このブログもVuePressとブログプラグインを使って構成されています。

公式のドキュメント([Blog Plugin | VuePress](https://vuepress.vuejs.org/plugin/official/plugin-blog.html#usage))も存在するのですが、これだけ読んでもどうやって作るのか全くわからないと思うので簡単にですが手順だけでも

## VuePressを最新にしてプラグインを導入する

```
npm i vuepress@next
npm i @vuepress/plugin-blog
```

ここで注意しなければならないのが、VuePressとプラグインのバージョンを合わせるということです。
私はそれがあってないせいでかなりの時間を潰してしまいました。

この記事はVuePress及びplugin-blogともにalpha30の時点での記事です。
まだアルファ版なので本体・プラグインともにかなり頻繁に変更が入っています。
実際にalpha27時点では適切にカテゴリー一覧ページを作成することができませんでした。


.vuepress/config.jsファイルのpluginsにプラグインを導入します。
必要な設定はありません。

設定を変更したい場合は公式のドキュメントを参考に行ってください。
```json
  plugins: [
    '@vuepress/blog'
  ]
```


## テーマを作成する
残念ながら現在(VuePress v1.0.0-alpha30)は、ブログプラグインを入れただけではブログ的機能を利用できるわけではありません。
テーマを作成し必要なレイアウトを作成する必要があります。

`Page.vue`,`Tags.vue`,`Tag.vue`,`Categories.vue`,`Category.vue`の5つのレイアウトを作成してください。

テーマを作成するにあたって必要そうな情報
- タグ情報は`this.$tags`に入っています
- カテゴリー情報は`this.$categories`に入っています
- `$tags`や`$categories`には`map`や`list`というgetterが存在にするのでそれを通してデータを取得できます
- `Page.vue`には記事が来るので`<Content />`タグを含める必要があります。

私のリポジトリが参考になるかもしれません
[tohutohu/blog](https://github.com/tohutohu/blog)

## 記事を書く
タグやカテゴリーの情報はmdファイルの先頭にyaml形式で書く必要があります。(frontmatterというものらしいです)
例えばこの記事のfrontmatterは以下のようになっています

```
---
title: VuePressでブログを作る(VuePress 1.0.0-alpha plugin-blog使用) 
date: 2018-12-17
categories:
  - tech
  - Vue.js
  - VuePress
---
```

このdate及びcategoriesがURLやカテゴリー分けに使用されています。
タグを追加したい場合は、
```
---
title: VuePressでブログを作る(VuePress 1.0.0-alpha plugin-blog使用) 
date: 2018-12-17
categories:
  - tech
  - Vue.js
  - VuePress
tags:
  - po
---
```

とすると良いです。

また、カテゴリー・タグそれぞれ一つの場合は
```
---
title: VuePressでブログを作る(VuePress 1.0.0-alpha plugin-blog使用) 
date: 2018-12-17
category: tech
tag: po
---
```
のようにも書けるようです。


## まとめ
VuePressにブログプラグインを導入するときに必要になりそうな情報を書きました。
かなり雑なのでわからないことがあったら、Twitter([@to_hutohu](https://twitter.com/to_hutohu))等で質問してください。
