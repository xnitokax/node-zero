// 自動生成ファイル（tools/build.html）。直接編集しないでください。
window.SCENARIO_DATA = {
  "title": "NODE//ZERO",
  "start": "gateway",
  "nodes": {
    "gateway": {
      "host": "relay.anon-net",
      "title": "中継サーバー",
      "body": "\n<p class=\"sys\">＞ 暗号化メッセージを1件受信しました。</p>\n<div class=\"doc\">\n<p>差出人：K.Kuga（妹）</p>\n<p>兄の久我 透（くが とおる）が、ネクサス社のサーバー室で死にました。<br>\n会社は「配線作業中の感電事故」と発表しています。</p>\n<p>でも兄は、死ぬ前の日に「明日、大事なデータを公開する」と言っていました。<br>\n事故じゃないと思うんです。お願いします、真実を調べてください。</p>\n</div>\n<p class=\"sys\">＞ ネクサス社ネットワークへの侵入口を確保済み。</p>\n<ul class=\"links\">\n  <li><a data-go=\"mail\">mail.nexus.local　── 社内メールサーバー</a></li>\n  <li><a data-go=\"portal\">portal.nexus.local　── 社内ポータル</a></li>\n</ul>"
    },
    "mail": {
      "host": "mail.nexus.local/kuga",
      "title": "久我 透 の受信箱",
      "body": "\n<div class=\"doc\">\n<p class=\"meta\">From: 藤堂 誠（研究員）　9/20 18:02</p>\n<p>久我さん、例の耐久試験データ、明日の役員会で公開するんですよね？<br>\n正直、俺は反対です。でも久我さんがやらないなら、いずれ俺がやります。</p>\n</div>\n<div class=\"doc\">\n<p class=\"meta\">From: 真柴 恭一（副社長）　9/20 21:15</p>\n<p>あのデータの公開は許可しない。<br>\n新製品の発表まで一週間だ。君の判断ひとつで会社が終わる。今夜話そう。</p>\n</div>\n<div class=\"doc\">\n<p class=\"meta\">From: security-center@nexus-support.xyz　9/20 22:30</p>\n<p>【至急】あなたのアカウントに不正アクセスの疑いがあります。<br>\n今すぐ <a data-go=\"phish\">こちらからパスワードを再設定</a> してください。</p>\n</div>\n<ul class=\"links\">\n  <li><a data-go=\"cam\">cam.nexus.local　── 監視カメラサーバー（要認証）</a></li>\n  <li><a data-go=\"portal\">portal.nexus.local　── 社内ポータル</a></li>\n</ul>"
    },
    "phish": {
      "host": "nexus-support.xyz",
      "title": "!!! HONEYPOT !!!",
      "trap": 35,
      "body": "\n<p class=\"alert\">＞ 罠だ。これは侵入者を釣るための偽サイト。</p>\n<p class=\"alert\">＞ こちらの接続元が記録された。トレース上昇。</p>\n<ul class=\"links\">\n  <li><a data-go=\"mail\">急いで mail.nexus.local に戻る</a></li>\n</ul>"
    },
    "portal": {
      "host": "portal.nexus.local",
      "title": "社内ポータル",
      "body": "\n<div class=\"doc\">\n<p class=\"meta\">お知らせ　9/20</p>\n<p>・システム管理部 江口さんのIDカードが紛失しました。見つけた方は総務部まで。<br>\n・研究部 藤堂さんは 9/19〜9/21 大阪出張です。</p>\n</div>\n<div class=\"doc\">\n<p class=\"meta\">社員紹介コーナー：システム管理部 江口 真奈美</p>\n<p>サーバーの面倒を見ています。家では愛猫の「むぎ」（2019年生まれ）に面倒を見られています。<br>\nパスワードは覚えやすいのが一番ですよね！</p>\n</div>\n<ul class=\"links\">\n  <li><a data-go=\"door\">door.nexus.local　── サーバー室 入退室ログ</a></li>\n  <li><a data-go=\"wallpaper\">free_wallpaper_4K.exe　── 【社員限定】無料壁紙</a></li>\n  <li><a data-go=\"mail\">mail.nexus.local　── 社内メールサーバー</a></li>\n</ul>"
    },
    "wallpaper": {
      "host": "portal.nexus.local/dl",
      "title": "!!! TRAP !!!",
      "trap": 40,
      "body": "\n<p class=\"alert\">＞ 実行ファイルは監視プログラムだった。</p>\n<p class=\"alert\">＞ セキュリティ部門に通知が飛んだ。トレース大幅上昇。</p>\n<ul class=\"links\">\n  <li><a data-go=\"portal\">portal.nexus.local に戻る</a></li>\n</ul>"
    },
    "door": {
      "host": "door.nexus.local/log",
      "title": "サーバー室 入退室ログ（9/20）",
      "body": "\n<pre class=\"log\">\n22:58  IN   久我 透\n23:41  IN   江口 真奈美\n23:44  OUT  江口 真奈美\n23:50  ---  室内で異常電流を検知\n</pre>\n<p class=\"sys\">＞ 江口のカードが使われている……？</p>\n<ul class=\"links\">\n  <li><a data-go=\"cam\">cam.nexus.local　── 監視カメラサーバー（要認証）</a></li>\n  <li><a data-go=\"portal\">portal.nexus.local　── 社内ポータル</a></li>\n</ul>"
    },
    "cam": {
      "host": "cam.nexus.local",
      "title": "監視カメラサーバー",
      "lock": {
        "hint": "管理者アカウント：eguchi　パスワード：????????",
        "salt": "EzW72n1IrkkFl3Gp1XbPPg==",
        "iv": "ZB3zV2SL9M4ipV9o",
        "ct": "mf5COZO7U8kqZxoYO0zZnDi98E4H6lGix2KnX2eSy1Jx2q31hgtpJRwQ7Ll6Tut6+p+CJGLs7yq/VjYN0ts5jItcckTRudGIQCWy923HwtnQmtJE7ZDlgvA4lmo6kPXew/WzSmdhusnDDLYxqsiKUKtYrPAyir2RY2EZ9vEodkRc0HCeFyz4xBMq8K6QoepTNfIvZ8nYG1AszFW5GD4vBpp6lqLo1+aq0A7mFKaf6N7r+TCwVEwRc8KJtL8U4eCjdHPBHZDdkISuuuRx+15YGSbqcOW9Bixaynv9ydAaM8VOGIOu3OHsM+PksF0y0ff8UhLZVHDmzz8UPPSuE/Ae68IFqfZbtySi+w1pHZ1FfOkhQqMb1LQqsDEGSD0wo2jgakAlfAyQknRiUTw/9Ba/DQZB1kmS9U5AHEULls70yLSk32K8kz51a5UggTBZi8XqjFrCjYKvdNL5vVatnLmANbIwR2r76alGESSUVvm3loAmUtp4hVtHyEFgFlofTsahFJjINhqkJTZArSDBYCl5g47RbSL+j1V+YvbbxGL81xwu3n+YXzNJH0oDCc/KF+DffSt7JT6qDbGa8kntV4Uv/KrCYoQyuLriLUyGZGvX3H/oyMbpdvwinh4cZUvdmHut9DG+8aTgH39geeK8kNfR5W362pbeU4oyNg6GlOCuC3+Xvzx8EYnb+lgX5Wj5j/rmA6vsBDNbpjGBz9WpVidBw53wGtMiNjblIVYRhzcQlCYVr3bijGWBOvpj3QqsDu4BPmwPNZW7KS1tjcAUi/7qhbM8PnROPUIND17JlGzPfA2EXwvx7QF5mwDECQddP2/HHUMBljpmrTwvwkdjjgJPkoPFjw3x/P1GBZLSir5zn9Tj1AowGJhwS+AjxS6fOsyDeNywBCDL0MeykyzZICE0jlhHV4GcO8XRox0rjUVrgSLYjVtCfPwhbXp8PKJNX9VHvnJfQAR2rGNC33XRdPh+XBCQTsHdqa6gQBYgZs4pEwTQnmqEvLf/zFeMpCnms9fi4RyN4hs="
      }
    },
    "backup": {
      "host": "backup.nexus.local/restore",
      "title": "復元された映像 23:35-23:50",
      "body": "\n<p class=\"alert\">＞ 侵入を検知されました。接続が切れる前に確認を。</p>\n<pre class=\"log\">\n23:40  サーバー室前に人物。顔は映っていない。\n       左手首に金色の腕時計。IDカードをかざしてドアを開ける。\n23:44  同じ人物が退室。手袋を外しながら歩き去る。\n</pre>\n<p class=\"sys\">＞ 江口のカードを使ったのは、江口本人とは限らない。<br>\n＞ 金色の腕時計……どこかで見覚えがある。役員会の集合写真では、副社長がいつも着けていた。</p>\n<ul class=\"links\">\n  <li><a data-go=\"report\">依頼人に報告する</a></li>\n</ul>"
    },
    "report": {
      "host": "relay.anon-net",
      "title": "報告",
      "ending": true,
      "body": "<p class=\"sys\">＞ 久我 透 を死に追いやったのは誰か。</p>"
    }
  },
  "suspects": [
    {
      "name": "真柴 恭一（副社長）",
      "culprit": true
    },
    {
      "name": "藤堂 誠（研究員）"
    },
    {
      "name": "江口 真奈美（システム管理者）"
    },
    {
      "name": "本当に事故だった"
    }
  ],
  "endings": {
    "true": "真柴は江口の紛失したIDカードを拾い、それを使ってサーバー室に入った。\n久我に公開をやめるよう迫り、拒まれて配線に細工をした。\nそして翌深夜、自分の管理者権限で録画を消した。\n復元した映像を受け取った依頼人は、それを警察に届けた。\n── TRUE END",
    "noEvidence": "真柴が怪しいことは分かった。だが決定的な証拠がない。\n副社長は「根拠のない中傷だ」と笑い飛ばし、事件は事故のまま処理された。\n── NORMAL END（証拠を見つけていない）",
    "wrong": "あなたの報告をもとに、依頼人は告発に踏み切った。\nしかし、それは真実ではなかった。本当の犯人は今も会社にいる。\n── BAD END",
    "traced": "接続が強制的に遮断された。\n逆探知により、あなたの居場所が特定された。\n── GAME OVER"
  },
  "evidenceNode": "backup"
};
