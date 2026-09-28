// =========================================================
//  シナリオデータ（ここを書き換えればシナリオを作れます）
// =========================================================
//  ノードの書き方
//    id: {
//      host:  画面上部に出るアドレス
//      title: ノード名
//      body:  本文（HTML）。<a data-go="ノードid">…</a> で転移リンクになる
//             data-oneway を付けると一方通行（戻れなくなる）
//      lock:  { pass: "パスワード", hint: "入力画面に出すヒント" }  … 任意
//             ※ ビルドすると本文がこのパスワードで暗号化され、pass は公開データから消えます
//      trap:  数値 … 踏むとトレース（逆探知）がこの%上がる          … 任意
//    }
//  トレースが100%になると接続遮断（ゲームオーバー）。
//
//  ⚠️ このファイルはネタバレそのものです。公開されるのは docs/ 以下だけ。
//  編集したら tools/build.html でビルドして docs/scenario.data.js を更新します。
// =========================================================

const SCENARIO = {
  title: "NODE//ZERO",
  start: "gateway",

  nodes: {
    gateway: {
      host: "relay.anon-net",
      title: "中継サーバー",
      body: `
<p class="sys">＞ 暗号化メッセージを1件受信しました。</p>
<div class="doc">
<p>差出人：K.Kuga（妹）</p>
<p>兄の久我 透（くが とおる）が、ネクサス社のサーバー室で死にました。<br>
会社は「配線作業中の感電事故」と発表しています。</p>
<p>でも兄は、死ぬ前の日に「明日、大事なデータを公開する」と言っていました。<br>
事故じゃないと思うんです。お願いします、真実を調べてください。</p>
</div>
<p class="sys">＞ ネクサス社ネットワークへの侵入口を確保済み。</p>
<ul class="links">
  <li><a data-go="mail">mail.nexus.local　── 社内メールサーバー</a></li>
  <li><a data-go="portal">portal.nexus.local　── 社内ポータル</a></li>
</ul>`,
    },

    mail: {
      host: "mail.nexus.local/kuga",
      title: "久我 透 の受信箱",
      body: `
<div class="doc">
<p class="meta">From: 藤堂 誠（研究員）　9/20 18:02</p>
<p>久我さん、例の耐久試験データ、明日の役員会で公開するんですよね？<br>
正直、俺は反対です。でも久我さんがやらないなら、いずれ俺がやります。</p>
</div>
<div class="doc">
<p class="meta">From: 真柴 恭一（副社長）　9/20 21:15</p>
<p>あのデータの公開は許可しない。<br>
新製品の発表まで一週間だ。君の判断ひとつで会社が終わる。今夜話そう。</p>
</div>
<div class="doc">
<p class="meta">From: security-center@nexus-support.xyz　9/20 22:30</p>
<p>【至急】あなたのアカウントに不正アクセスの疑いがあります。<br>
今すぐ <a data-go="phish">こちらからパスワードを再設定</a> してください。</p>
</div>
<ul class="links">
  <li><a data-go="cam">cam.nexus.local　── 監視カメラサーバー（要認証）</a></li>
  <li><a data-go="portal">portal.nexus.local　── 社内ポータル</a></li>
</ul>`,
    },

    phish: {
      host: "nexus-support.xyz",
      title: "!!! HONEYPOT !!!",
      trap: 35,
      body: `
<p class="alert">＞ 罠だ。これは侵入者を釣るための偽サイト。</p>
<p class="alert">＞ こちらの接続元が記録された。トレース上昇。</p>
<ul class="links">
  <li><a data-go="mail">急いで mail.nexus.local に戻る</a></li>
</ul>`,
    },

    portal: {
      host: "portal.nexus.local",
      title: "社内ポータル",
      body: `
<div class="doc">
<p class="meta">お知らせ　9/20</p>
<p>・システム管理部 江口さんのIDカードが紛失しました。見つけた方は総務部まで。<br>
・研究部 藤堂さんは 9/19〜9/21 大阪出張です。</p>
</div>
<div class="doc">
<p class="meta">社員紹介コーナー：システム管理部 江口 真奈美</p>
<p>サーバーの面倒を見ています。家では愛猫の「むぎ」（2019年生まれ）に面倒を見られています。<br>
パスワードは覚えやすいのが一番ですよね！</p>
</div>
<ul class="links">
  <li><a data-go="door">door.nexus.local　── サーバー室 入退室ログ</a></li>
  <li><a data-go="wallpaper">free_wallpaper_4K.exe　── 【社員限定】無料壁紙</a></li>
  <li><a data-go="mail">mail.nexus.local　── 社内メールサーバー</a></li>
</ul>`,
    },

    wallpaper: {
      host: "portal.nexus.local/dl",
      title: "!!! TRAP !!!",
      trap: 40,
      body: `
<p class="alert">＞ 実行ファイルは監視プログラムだった。</p>
<p class="alert">＞ セキュリティ部門に通知が飛んだ。トレース大幅上昇。</p>
<ul class="links">
  <li><a data-go="portal">portal.nexus.local に戻る</a></li>
</ul>`,
    },

    door: {
      host: "door.nexus.local/log",
      title: "サーバー室 入退室ログ（9/20）",
      body: `
<pre class="log">
22:58  IN   久我 透
23:41  IN   江口 真奈美
23:44  OUT  江口 真奈美
23:50  ---  室内で異常電流を検知
</pre>
<p class="sys">＞ 江口のカードが使われている……？</p>
<ul class="links">
  <li><a data-go="cam">cam.nexus.local　── 監視カメラサーバー（要認証）</a></li>
  <li><a data-go="portal">portal.nexus.local　── 社内ポータル</a></li>
</ul>`,
    },

    cam: {
      host: "cam.nexus.local",
      title: "監視カメラサーバー",
      lock: { pass: "mugi2019", hint: "管理者アカウント：eguchi　パスワード：????????" },
      body: `
<p class="sys">＞ 管理者 eguchi としてログインしました。</p>
<pre class="log">
[録画一覧] サーバー室前 9/20
  22:00 - 23:35   ✔ 保存済み
  23:35 - 23:50   ✖ 削除済み  (操作者: mashiba_admin / 9/21 01:12)
  23:50 - 24:00   ✔ 保存済み
</pre>
<p class="sys">＞ 誰かが肝心の15分を消している。<br>
＞ バックアップ領域から復元できるかもしれない。<br>
＞ ただし復元を始めると侵入が確実に検知される。<b>もう戻れない。</b></p>
<ul class="links">
  <li><a data-go="backup" data-oneway>backup.nexus.local　── 削除データを復元する【一方通行】</a></li>
  <li><a data-go="door">door.nexus.local　── 入退室ログ</a></li>
</ul>`,
    },

    backup: {
      host: "backup.nexus.local/restore",
      title: "復元された映像 23:35-23:50",
      body: `
<p class="alert">＞ 侵入を検知されました。接続が切れる前に確認を。</p>
<pre class="log">
23:40  サーバー室前に人物。顔は映っていない。
       左手首に金色の腕時計。IDカードをかざしてドアを開ける。
23:44  同じ人物が退室。手袋を外しながら歩き去る。
</pre>
<p class="sys">＞ 江口のカードを使ったのは、江口本人とは限らない。<br>
＞ 金色の腕時計……どこかで見覚えがある。役員会の集合写真では、副社長がいつも着けていた。</p>
<ul class="links">
  <li><a data-go="report">依頼人に報告する</a></li>
</ul>`,
    },

    report: {
      host: "relay.anon-net",
      title: "報告",
      ending: true,
      body: `<p class="sys">＞ 久我 透 を死に追いやったのは誰か。</p>`,
    },
  },

  // 報告画面の選択肢と結末
  suspects: [
    { name: "真柴 恭一（副社長）", culprit: true },
    { name: "藤堂 誠（研究員）" },
    { name: "江口 真奈美（システム管理者）" },
    { name: "本当に事故だった" },
  ],
  endings: {
    true: `真柴は江口の紛失したIDカードを拾い、それを使ってサーバー室に入った。
久我に公開をやめるよう迫り、拒まれて配線に細工をした。
そして翌深夜、自分の管理者権限で録画を消した。
復元した映像を受け取った依頼人は、それを警察に届けた。
── TRUE END`,
    noEvidence: `真柴が怪しいことは分かった。だが決定的な証拠がない。
副社長は「根拠のない中傷だ」と笑い飛ばし、事件は事故のまま処理された。
── NORMAL END（証拠を見つけていない）`,
    wrong: `あなたの報告をもとに、依頼人は告発に踏み切った。
しかし、それは真実ではなかった。本当の犯人は今も会社にいる。
── BAD END`,
    traced: `接続が強制的に遮断された。
逆探知により、あなたの居場所が特定された。
── GAME OVER`,
  },
  // TRUE END に必要な「訪問済みノード」
  evidenceNode: "backup",
};
