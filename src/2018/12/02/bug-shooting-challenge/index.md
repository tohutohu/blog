---
title: Bug Shooting Challenge#1に参加しました
category: [tech, event]
---

# Bug Shooting Challenge #1に参加しました

だいぶ昔の話ですが、11月17日にmixiさん主催のBug Shooting Challengeに参加したので、その参加記です。

## 2行で分かる
めちゃくちゃいいイベントです。
次回があったら是非参加してください。

## Bug Shooting Challegeとは
詳しくは↓を御覧ください
[学生対象 不具合調査体験ワークショップのご紹介 – mixi developers – Medium](https://medium.com/mixi-developers/intro-bsc-40ee02fc675d)

簡単に言うと、バグのあるアプリケーション(サーバープログラム)とバグの報告が来るのでそのバグの原因を見つける・修正する能力を鍛えようというイベントです。

サーバー問に完全に振り切れたICTSCみたいだなと私は思いました。

## 参加経緯
これまでmixiさんの○○ Challenge は TDD Challenge や Git Challenge(優勝した) などに参加してきました。
今回もTwitterのTLを見ていたところ、面白そうで新しいチャレンジが開催されるということで応募し、無事選抜されたので参加しました。

Git Challengeについては→[git challenge #8 参加記 #mixi_git | 東京工業大学デジタル創作同好会traP](https://trap.jp/post/496/)

ランチのときに社員の方に聞きましたが、大体3倍位の倍率だったそうです。
今回は第一回だったから少ないと想定していたけど、想定よりもかなりの人数が応募してくれたと驚いていました。

## タイムライン
### 前日夜
研究プロジェクトという大学の研究室インターン的なものが終わったことを祝して先輩たちと華金をしていました。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">華金 <a href="https://t.co/6Tgr0yDOd8">pic.twitter.com/6Tgr0yDOd8</a></p>&mdash; とーふとふ@投票して (@to_hutohu) <a href="https://twitter.com/to_hutohu/status/1063402283319255041?ref_src=twsrc%5Etfw">2018年11月16日</a></blockquote>

結構梅酒を飲んで酔っ払っていた記憶…


### 当日朝
<blockquote class="twitter-tweet" data-lang="ja"><p lang="und" dir="ltr"><a href="https://t.co/Fsz17nmjJz">https://t.co/Fsz17nmjJz</a></p>&mdash; とーふとふ@投票して (@to_hutohu) <a href="https://twitter.com/to_hutohu/status/1063603310131900416?ref_src=twsrc%5Etfw">2018年11月17日</a></blockquote>

最近ハマっているKMNZのLIZちゃんの曲を聞きながら渋谷へ向かいました。
Youtube Premium最高ですね。


11時になると、いよいよイベント開始です。
ISUCON決勝のようなシナリオが紹介された後、簡単に今回のチャレンジで使うHadoop+EMRについての説明+ハンズオンがありました。

簡単な操作の体験の後はランチです。
<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/mixi_BSC?src=hash&amp;ref_src=twsrc%5Etfw">#mixi_BSC</a> <br>お昼<a href="https://twitter.com/hashtag/traP1yakudo?src=hash&amp;ref_src=twsrc%5Etfw">#traP1yakudo</a> <a href="https://t.co/977Qhbgm0y">pic.twitter.com/977Qhbgm0y</a></p>&mdash; とーふとふ@投票して (@to_hutohu) <a href="https://twitter.com/to_hutohu/status/1063647648681316352?ref_src=twsrc%5Etfw">2018年11月17日</a></blockquote>

美味しい釜飯を食べることが出来ました。
おかわりまでさせていただいて大変満足でした。

社員の方とも色んなお話をすることができ、今後のことを考える良い機会になりました。

### 午後
午後は実際に問題を解いていくフェーズです。

Git Challengeと同じく問題の詳しい内容については言及することは出来ませんが、自分がいいかな〜と思う部分だけ書きたいと思います。
(mixiさんだめだったらこっそり教えてください！！)

問題の形式自体は、先程も書いたようにICTSCのサーバー問のような感じです。
実際のRuby on Rails製のアプリケーションとログ・バグ報告があるので、それを使ってバグの原因の究明、修正を行います。
実際の回答はGitHub上でPRを出すことによって行いました。

Ruby on Rails製のアプリケーションといっても、求められるRoR力はほとんどなく(実際私もほとんどRuby on Railsは書いたことなかった)、ログを冷静に読む力となぜバグが発生したのかそしてどのような変更がバグを修正するためには必要なのかを考え、記述する力が重要かなあと思います。
実際にコードを変更するために使った時間は、問題の回答時間の5%くらいだったんじゃないかなあ

このイベントは新入社員研修での不具合調査研修が元らしく、そちらでは実際にmixiさんで運用されているゲームのコードを元に問題が作られていてコードの量も今回の何杯も大きかったそうです。

<small>

そこらへんはこれ[ミクシィChallengeがひとつできるまで - Bug Shooting Challenge #1 を終えて - オフトゥン大好き。](https://nukosuke.hatenablog.jp/entry/bug-shooting-challenge-1)を読むといいかもしれません。

</small> 

### 競技終了後
各問の解説が終わった後、懇親会がありました。
ちょうど院進学と就活で迷っていたので、それについて社員の方にいろいろ相談できたのが良かったです。
今回のイベントに参加していた他の学生の方は多くが就活をしていて、みなさん早いなあという印象を持ちました。(新しいイベントに参加するくらい行動力がある人はそうなのかも)

そして結果発表がありました。
結果はMVPをいただきました。(ツイートは優勝と書いてありますが実際はMVPだそうです)

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/mixi_BSC?src=hash&amp;ref_src=twsrc%5Etfw">#mixi_BSC</a> 優勝しました！！！<a href="https://twitter.com/hashtag/traP1yakudo?src=hash&amp;ref_src=twsrc%5Etfw">#traP1yakudo</a> <a href="https://t.co/lAcd6VVzy5">pic.twitter.com/lAcd6VVzy5</a></p>&mdash; とーふとふ@投票して (@to_hutohu) <a href="https://twitter.com/to_hutohu/status/1063730616003219456?ref_src=twsrc%5Etfw">2018年11月17日</a></blockquote>


無事MVPをいただけて良かったです。
表彰後に採点者の方とお話させていただいたのですが、ほぼ満点だったとのことで精一杯やりきった成果が出たなと思いました。

## まとめ
本当に参加してよかったなと思うイベントでした。
次回以降は更にパワーアップしていると思うので、また参加したいですね(できないけど)


mixiのみなさんありがとうございました！

