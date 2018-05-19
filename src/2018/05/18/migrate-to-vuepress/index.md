---
title: VuePressに移行した
category: [Vue.js VuePress tech]
---
# VuePressに移行した

2年半くらい前からずっとVue.jsを書いていましたが、最近になってVue開発チームから公式に静的サイトジェネレーターとしてVuePress[^a]というプロダクトが公開されました。

[^a]: 公式サイト: https://vuepress.vuejs.org/

私個人としてもNuxt.jsを使った静的SPAブログ用CMSを作っていたんですが、公式が出して今後も機能追加が継続的に見込めることからVuePressに移行することにしました。
VuePressの今後の機能追加の一つにブログ機能があるそうなのですが、現時点での標準ではまだまだなので今回は少しでもブログらしくカスタマイズした作業ログを残しておこうと思います。

## VuePressを始める
今回のディレクトリ構成はこんな感じです。
この構成は以下の記事を参考にさせていただきました。
[VuePressはコーダーの夢を見るか。 - Qiita](https://qiita.com/gollowars/items/845baa30ceb7cc035919)
```
blog
├── package-lock.json
├── package.json
└── src
    ├── .vuepress       // VuePress関連の設定やコンポーネントを格納する
    │   ├── components
    │   ├── config.js
    │   ├── public
    │   └── theme       // vuepress eject .vuepressしたもの
    ├── 2018            // 記事を書く
    │   ├── 05
    │   └── index.md
    └── index.md        // Topページ
```

```bash
$ npm init
```
してpackage.jsonに`vuepress dev src`, `vuepress build src`を追加します。

その後`vuepress eject .vuepress`をしてデフォルトテーマを取り出します。

:::warning 注意
公式サイトにも書かれているのですがデフォルトテーマを取り出していろいろと編集をした場合、その後のデフォルトテーマの更新に追従していくのが面倒になるので注意してください。
(私のこの記事も更新するときに元に戻せるように書きました)
:::

## 記事一覧ページを作る
トップページ及び各月のページに記事の一覧を出すようにしたいと思います。

VuePressでは各コンポーネントの`this.$site`に全記事の情報が含まれているので、そこから記事の情報を抜き出して記事名等を表示するようにします。

`src/.vuepress/components/Articles.vue`を作成して以下のように追加します。

```html
<template>
<div>
  <div v-for="page in filteredPages" class="article-container" v-if="!page.frontmatter.exclude">
    <h3 class="article-title">
      <router-link :to="page.path">{{page.title || 'No Title'}}</router-link>
    </h3>
    <div class="tag-container">
      <i class="fas fa-tags tag-icon"></i>
      <div v-for="c in page.frontmatter.category" class="tag">{{c}}</div>
    </div>
    <div v-if="page.frontmatter.description" class="article-description">{{page.frontmatter.description}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Articles',
  props: ['pages', 'prefix'],
  computed: {
    filteredPages () {
      return this.pages.filter(page => page.path.includes(this.prefix || ''))
    }
  }
}
</script>

CSSは省略
```

そして記事一覧を出したいところで
```markdown
## 記事一覧
<Articles :pages="this.$site.pages"/>
```

```markdown
# 2018年の記事一覧
<Articles :pages="this.$site.pages" :prefix="this.$page.path" />
```

という風に書くとそのパス以下の記事の一覧が表示されるようになります。

## サイドバーを右にする
サイドバーは右がいいなあと思ったので右にします。
モバイルの方は元のまま左から出すようにします。
以下は`.vuepress/theme/styles`内のファイルです。

`theme.styl`
```stylus
.page
  padding-right $sidebarWidth // leftをrightに変更



.sidebar
  right 0  // leftをrightに変更
  border-right 1px solid $borderColor // 追加
```

`mobile.styl`
```stylus
@media (max-width: $MQMobile)
  .page
    padding-right 0 // 追加
```

## サイドバーにこれまでの月の記事一覧を表示する
`util.js`にある`resolveSidebarItems`を以下に変更します。
`type:'head'`に対応する部分も追加しています。

```javascript
export function resolveSidebarItems (page, route, site, localePath) {
  let pages = site.pages
  const list = []
  pages.forEach(pa => {
    const pathList = pa.path.split('/').filter(p => p !== '')
    console.log(pathList)
    let tmp = list
    let nowPath = ''
    let now
    pathList.forEach(name => {
      nowPath = nowPath + '/' + name
      now = tmp.find(e => e.path === nowPath)
      if (!now) {
        tmp.push({
          type: 'group',
          title: name,
          path: nowPath,
          collapsable: true,
          children: []
        })
        console.log(nowPath)
        now = tmp.find(e => e.path === nowPath)
        console.log(now)
      } 
      tmp = now.children
    })
  })
  console.log(list)
  return [page, {title: 'これまでの記事', type: 'head'}, ...list]
}

```

---
今回行った変更は以上です。
本当はカテゴリ別の記事一覧ページを作成したかったんですが、動的にページを生成する方法がわからなかったため今回は見送りとなりました。

また実現方法が見つかったら記事にしたいと思います。

