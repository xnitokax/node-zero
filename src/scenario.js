// =========================================================
//  シナリオデータ（ここを書き換えればシナリオを作れます）
// =========================================================
//  ノードの書き方
//    id: {
//      host:  画面上部に出るアドレス
//      title: ノード名
//      body:  本文（HTML）。<a data-go="ノードid">…</a> で転移リンクになる
//             data-oneway を付けると一方通行（戻れなくなる）
//             ターミナルでは「ssh 名前」で転移する。名前はリンク文字列の先頭語
//             （mail.nexus.local → mail）。変えたいときは data-name="名前" を付ける
//      lock:  { pass: "パスワード", hint: "入力画面に出すヒント" }  … 任意
//             ※ ビルドすると本文がこのパスワードで暗号化され、pass は公開データから消えます
//      trap:  数値 … 踏むとトレース（逆探知）がこの%上がる          … 任意
//    }
//  トレースが100%になると接続遮断（ゲームオーバー）。
//
//  結末の書き方
//    suspects[].endings に上から順に書く。requires のノードを全部訪れていれば、その結末になる
//    （鍵付きノードは、解錠して中を見たときに「訪れた」扱い）
//
//  ⚠️ このファイルはネタバレそのものです（パスワードも平文で入っています）。
//  編集したら tools/build.html でビルドして docs/scenario.data.js を更新します。
// =========================================================

// ---- 結末の文章（組み合わせて使うので先に定義） ----
const TRUE_END = `X-7 の試験データを書き換えたのは、藤堂だった。前の職場でも同じことをして、今度こそ逃げ切るつもりだった。

久我に暴かれると知った藤堂は、大阪出張を隠れ蓑にして東京へ戻った。
拾った江口のIDカードでサーバー室に入ると、久我が作業していたラックの配電盤に細工をして、何も言わずに出ていった。
6分後、久我はそのラックに触れた。

深夜、藤堂は「誰もが知っていた」副社長のパスワードを使って録画を消した。罪を真柴に着せるためだった。
そして翌朝、何食わぬ顔で大阪へ戻った。

あなたが復元した映像と端末のログは、依頼人の手で警察に届けられた。
X-7 の発売は中止された。`;

const EPILOGUE = `

数日後、中継サーバーにもう一度だけメッセージが届いた。

『妹だなんて嘘をついて、ごめんなさい。私は江口です。
カードを失くしたのは私で、疑われるのが怖かった。
でもそれ以上に、あの人が「事故」で片付けられるのが許せなかった。
本当に、ありがとう。』

久我に家族はいなかった。
けれど、彼のために嘘をついてまで戦った人はいた。`;

const SCENARIO = {
  title: "NODE//ZERO",
  start: "gateway",

  nodes: {
    // ───────── 入口 ─────────
    gateway: {
      host: "relay.anon-net",
      title: "中継サーバー",
      body: `
<p class="sys">＞ 暗号化メッセージを1件受信しました。</p>
<div class="doc">
<p class="meta">差出人：K.Kuga（妹）</p>
<p>兄の久我 透（くが とおる）が、勤め先のネクサス社のサーバー室で死にました。<br>
会社は「配線作業中の感電事故」だと言っています。</p>
<p>でも兄は前の晩、電話でこう言ったんです。<br>
「明日、全部ひっくり返す」って。</p>
<p>お願いです。兄が何を見つけて、誰に殺されたのか、調べてください。</p>
</div>
<pre class="log">
Received: from relay-07.anon-net
Received: from gw.nexus.local
</pre>
<p class="sys">＞ ネクサス社ネットワークへの侵入口を確保済み。</p>
<ul class="links">
  <li><a data-go="mail">mail.nexus.local　── 社内メールサーバー</a></li>
  <li><a data-go="portal">portal.nexus.local　── 社内ポータル</a></li>
</ul>`,
    },

    // ───────── メール ─────────
    mail: {
      host: "mail.nexus.local/kuga",
      title: "久我 透 の受信箱",
      body: `
<div class="doc">
<p class="meta">From: 藤堂 誠（研究部）　9/20 18:02</p>
<p>久我さん、明日の役員会の件。<br>
公開する前に、一度だけ二人で話させてください。お願いします。</p>
</div>
<div class="doc">
<p class="meta">From: 真柴 恭一（副社長）　9/20 21:15</p>
<p>耐久試験の件、公開は許可しない。新製品の発表まであと一週間だ。<br>
私は今夜シンガポールへ発つ。戻るまで何もするな。いいな。</p>
</div>
<div class="doc">
<p class="meta">From: security-center@nexus-support.xyz　9/20 22:30</p>
<p>【至急】あなたのアカウントに不正アクセスの疑いがあります。<br>
今すぐ <a data-go="phish" data-name="nexus-support.xyz">こちらからパスワードを再設定</a> してください。</p>
</div>
<div class="doc">
<p class="meta">下書き（未送信）　9/20 22:47　宛先：（空欄）</p>
<p>X-7 の耐久試験データは書き換えられていた。元の値は lab サーバーの履歴に残っている。<br>
誰がやったのかも分かった。明日の役員会で、全部出す。<br>
……あいつが、あんなことをするなんて。</p>
</div>
<ul class="links">
  <li><a data-go="lab">lab.nexus.local　── 研究データサーバー</a></li>
  <li><a data-go="portal">portal.nexus.local　── 社内ポータル</a></li>
</ul>`,
    },

    phish: {
      host: "nexus-support.xyz",
      title: "!!! HONEYPOT !!!",
      trap: 35,
      body: `
<p class="alert">＞ 罠だ。侵入者を釣るための偽サイトだった。</p>
<p class="alert">＞ こちらの接続元が記録された。トレース上昇。</p>
<ul class="links">
  <li><a data-go="mail" data-name="mail">急いで mail.nexus.local に戻る</a></li>
</ul>`,
    },

    lab: {
      host: "lab.nexus.local/x7/durability",
      title: "耐久試験 X-7 バッテリー　変更履歴",
      body: `
<pre class="log">
日時          操作          担当       結果
9/02 14:20    測定値を登録   k.kuga     発火 3件 / 1000
9/10 03:12    値を修正       t.todo     発火 0件 / 1000
              コメント：「測定ミスのため修正」
</pre>
<p class="sys">＞ 発火3件が、深夜3時に0件へ書き換えられている。<br>
＞ このまま発売されれば、いずれ事故が起きる。<br>
＞ これを公開されて困るのは、会社か。それとも、書き換えた本人か。</p>
<ul class="links">
  <li><a data-go="mail">mail.nexus.local　── 社内メールサーバー</a></li>
  <li><a data-go="portal">portal.nexus.local　── 社内ポータル</a></li>
</ul>`,
    },

    // ───────── ポータル（ハブ） ─────────
    portal: {
      host: "portal.nexus.local",
      title: "社内ポータル",
      body: `
<div class="doc">
<p class="meta">総務部からのお知らせ　9/20</p>
<p>・システム管理部 江口さんのIDカードが紛失しました。見つけた方は総務部まで。<br>
・研究部 藤堂さんは 9/19〜9/21 大阪出張です。<br>
・真柴副社長は 9/20 23:55 羽田発の便でシンガポール出張です（〜9/25）。</p>
</div>
<div class="doc">
<p class="meta">情報システム部より　お願い</p>
<p>パスワードを愛車のナンバーにするのはやめてください。<br>
どなたとは言いませんが、副社長。</p>
</div>
<div class="doc">
<p class="meta">社内報　秋のフットサル大会</p>
<p>研究部チームが準優勝！　MVP の藤堂さんは、決勝で右足首を捻挫してしまいました。お大事に！</p>
</div>
<div class="doc">
<p class="meta">社員紹介コーナー：システム管理部 江口 真奈美</p>
<p>サーバーの面倒を見ています。家では愛猫の「むぎ」（2019年生まれ）に面倒を見られています。<br>
パスワードは覚えやすいのが一番ですよね！</p>
</div>
<ul class="links">
  <li><a data-go="hr">hr.nexus.local　── 社員名簿</a></li>
  <li><a data-go="gate">gate.nexus.local　── セキュリティゲート記録</a></li>
  <li><a data-go="keihi">keihi.nexus.local　── 経費精算システム</a></li>
  <li><a data-go="wallpaper">free_wallpaper_4K.exe　── 【社員限定】無料壁紙</a></li>
  <li><a data-go="mail">mail.nexus.local　── 社内メールサーバー</a></li>
</ul>`,
    },

    wallpaper: {
      host: "portal.nexus.local/dl",
      title: "!!! TRAP !!!",
      trap: 40,
      body: `
<p class="alert">＞ 実行ファイルの正体は監視プログラムだった。</p>
<p class="alert">＞ セキュリティ部門に通知が飛んだ。トレースが大幅に上昇。</p>
<ul class="links">
  <li><a data-go="portal">portal.nexus.local に戻る</a></li>
</ul>`,
    },

    hr: {
      host: "hr.nexus.local/staff",
      title: "社員名簿",
      body: `
<pre class="log">
久我 透      研究部 主任
             家族：なし
             緊急連絡先：江口 真奈美（同期入社）

藤堂 誠      研究部
             備考：前職で論文データの不正が疑われる（処分なし）

真柴 恭一    副社長

江口 真奈美  システム管理部
</pre>
<p class="sys">＞ 久我に家族はいない……？<br>
＞ じゃあ、「妹」を名乗るあの依頼人は誰だ。</p>
<ul class="links">
  <li><a data-go="salary">salary_all_2026.csv　── 全社員の給与データをダウンロード</a></li>
  <li><a data-go="portal">portal.nexus.local　── 社内ポータル</a></li>
</ul>`,
    },

    salary: {
      host: "hr.nexus.local/export",
      title: "!!! DLP ALERT !!!",
      trap: 30,
      body: `
<p class="alert">＞ 情報漏えい防止システムが反応した。</p>
<p class="alert">＞ 余計なものに手を出すな。トレース上昇。</p>
<ul class="links">
  <li><a data-go="hr">hr.nexus.local に戻る</a></li>
</ul>`,
    },

    gate: {
      host: "gate.nexus.local/log/0920",
      title: "セキュリティゲート記録（9/20）",
      body: `
<pre class="log">
22:05  駐車場ゲート  OUT  車両 8080（真柴 恭一）
22:58  サーバー室    IN   久我 透
23:41  サーバー室    IN   江口 真奈美
23:44  サーバー室    OUT  江口 真奈美
23:50  サーバー室    ---  室内で異常電流を検知
</pre>
<p class="sys">＞ 江口のカードが使われている。でも、そのカードは紛失中のはずだ。</p>
<ul class="links">
  <li><a data-go="cam">cam.nexus.local　── 監視カメラサーバー（要認証）</a></li>
  <li><a data-go="portal">portal.nexus.local　── 社内ポータル</a></li>
</ul>`,
    },

    keihi: {
      host: "keihi.nexus.local/t.todo",
      title: "経費精算：藤堂 誠（9/22 申請・未承認）",
      body: `
<pre class="log">
9/19        新幹線  品川 → 新大阪
9/19〜9/21  ホテル  3泊  ※ 9/20・9/21 の2泊は当日キャンセル
9/20        新幹線  新大阪 19:10 → 品川 21:33   ※ 当日に変更
9/21        新幹線  品川 06:00 → 新大阪
</pre>
<p class="sys">＞ 大阪にいたはずの男は、事件の夜、東京に戻っていた。<br>
＞ そして翌朝一番で、何食わぬ顔で大阪へ戻っている。</p>
<ul class="links">
  <li><a data-go="portal">portal.nexus.local　── 社内ポータル</a></li>
</ul>`,
    },

    // ───────── 鍵付き ─────────
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
<p class="sys">＞ 肝心の15分が消されている。消したのは副社長のアカウント……？<br>
＞ バックアップ領域から復元できるかもしれない。<br>
＞ ただし、復元を始めれば侵入は確実に検知される。<b>もう戻れない。</b><br>
＞ 調べ残しがないか、確かめてから進め。</p>
<ul class="links">
  <li><a data-go="vpn">auth.nexus.local　── 認証ログサーバー（要認証）</a></li>
  <li><a data-go="gate">gate.nexus.local　── セキュリティゲート記録</a></li>
  <li><a data-go="backup" data-oneway>backup.nexus.local　── 削除された映像を復元する【一方通行】</a></li>
</ul>`,
    },

    vpn: {
      host: "auth.nexus.local/mashiba_admin",
      title: "認証ログサーバー",
      lock: { pass: "8080", hint: "管理者アカウント：mashiba_admin　パスワード：????（数字4桁）" },
      body: `
<p class="sys">＞ 副社長のアカウントに入れてしまった。<br>
＞ ……たぶん、犯人も同じことをしたんだ。</p>
<pre class="log">
[ログイン履歴] mashiba_admin
  9/18 10:02   役員室   端末 #01
  9/20 20:48   役員室   端末 #01
  9/21 01:12   研究部   端末 #27   → cam.nexus.local 録画を削除

[端末 #27]  使用者：藤堂 誠
</pre>
<p class="sys">＞ 9/21 01:12。そのとき副社長は、シンガポール行きの機内にいたはずだ。</p>
<ul class="links">
  <li><a data-go="cam">cam.nexus.local　── 監視カメラサーバー</a></li>
  <li><a data-go="portal">portal.nexus.local　── 社内ポータル</a></li>
</ul>`,
    },

    // ───────── 一方通行の先 ─────────
    backup: {
      host: "backup.nexus.local/restore",
      title: "復元された映像 23:35-23:50",
      body: `
<p class="alert">＞ 侵入を検知された。遮断される前に確認しろ。</p>
<pre class="log">
23:40  サーバー室前に人物。研究部だけに支給される青いラボコート。
       フードで顔は見えない。IDカードをかざして入室。
23:44  同じ人物が退室。右足を引きずりながら、足早に去っていく。
</pre>
<p class="sys">＞ 研究部のラボコート。そして、引きずっている右足。</p>
<ul class="links">
  <li><a data-go="report" data-name="report">依頼人に報告する</a></li>
</ul>`,
    },

    report: {
      host: "relay.anon-net",
      title: "報告",
      ending: true,
      body: `
<p class="sys">＞ 久我 透を殺したのは誰か。</p>
<p class="sys">＞ 犯人の名前を指定して、集めた証拠を依頼人に送りつけろ。チャンスは一度きりだ。</p>`,
    },
  },

  // 最後のコマンド（報告画面で「command 名前」と打つとフィナーレ演出）
  finale: {
    command: "expose",
    // 送信する証拠ファイル。node を訪れていれば OK、いなければ MISSING と表示される
    evidence: [
      { node: "lab",    label: "x7_durability_history.log" },
      { node: "gate",   label: "gate_0920.log" },
      { node: "vpn",    label: "auth_mashiba_admin.log" },
      { node: "keihi",  label: "expense_t.todo.csv" },
      { node: "backup", label: "cam_serverroom_2335-2350.mp4" },
    ],
  },

  // 報告画面の選択肢と結末（id を最後のコマンドで指定。endings は上から順に判定）
  suspects: [
    {
      id: "todo",
      name: "藤堂 誠（研究部）",
      endings: [
        { requires: ["backup", "vpn", "hr"],   text: TRUE_END + EPILOGUE + "\n\n── TRUE END ＋" },
        { requires: ["backup", "keihi", "hr"], text: TRUE_END + EPILOGUE + "\n\n── TRUE END ＋" },
        { requires: ["backup", "vpn"],   text: TRUE_END + "\n\n── TRUE END" },
        { requires: ["backup", "keihi"], text: TRUE_END + "\n\n── TRUE END" },
        { text: `藤堂が怪しいのは確かだ。だが、決め手がない。
藤堂は「その日は大阪にいた」と言い張った。
映像も端末のログも示せないまま、事件は事故として処理された。

── NORMAL END（証拠が足りない）` },
      ],
    },
    {
      id: "mashiba",
      name: "真柴 恭一（副社長）",
      endings: [
        { text: `あなたは副社長を告発した。
だが事件の夜、真柴はシンガポール行きの機内にいた。完璧なアリバイを前に、告発は一笑に付された。

録画を消したアカウントの持ち主という「わかりやすい犯人」。
それこそが、真犯人の用意した答えだった。

── BAD END` },
      ],
    },
    {
      id: "eguchi",
      name: "江口 真奈美（システム管理部）",
      endings: [
        { text: `あなたは江口を告発した。カードの記録は、確かに彼女を指していた。

依頼人からの返信は、一行だけだった。
『……そう、ですか』

それきり、中継サーバーは二度と応答しなかった。

── BAD END` },
      ],
    },
    {
      id: "none",
      name: "犯人はいない（本当に事故だった）",
      endings: [
        { text: `あなたは「事故だった」と報告した。

X-7 は予定どおり発売された。
三か月後、最初の発火事故のニュースが流れた。

── BAD END` },
      ],
    },
  ],

  gameOver: `接続が強制的に遮断された。
逆探知により、あなたの居場所が特定された。

── GAME OVER`,
};
