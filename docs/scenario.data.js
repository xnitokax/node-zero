// 自動生成ファイル（tools/build.html）。直接編集しないでください。
window.SCENARIO_DATA = {
  "title": "NODE//ZERO",
  "start": "gateway",
  "nodes": {
    "gateway": {
      "host": "relay.anon-net",
      "title": "中継サーバー",
      "body": "\n<p class=\"sys\">＞ 暗号化メッセージを1件受信しました。</p>\n<div class=\"doc\">\n<p class=\"meta\">差出人：K.Kuga（妹）</p>\n<p>兄の久我 透（くが とおる）が、勤め先のネクサス社のサーバー室で死にました。<br>\n会社は「配線作業中の感電事故」だと言っています。</p>\n<p>でも兄は前の晩、電話でこう言ったんです。<br>\n「明日、全部ひっくり返す」って。</p>\n<p>お願いです。兄が何を見つけて、誰に殺されたのか、調べてください。</p>\n</div>\n<pre class=\"log\">\nReceived: from relay-07.anon-net\nReceived: from gw.nexus.local\n</pre>\n<p class=\"sys\">＞ ネクサス社ネットワークへの侵入口を確保済み。</p>\n<ul class=\"links\">\n  <li><a data-go=\"mail\">mail.nexus.local　── 社内メールサーバー</a></li>\n  <li><a data-go=\"portal\">portal.nexus.local　── 社内ポータル</a></li>\n</ul>"
    },
    "mail": {
      "host": "mail.nexus.local/kuga",
      "title": "久我 透 の受信箱",
      "body": "\n<div class=\"doc\">\n<p class=\"meta\">From: 藤堂 誠（研究部）　9/20 18:02</p>\n<p>久我さん、明日の役員会の件。<br>\n公開する前に、一度だけ二人で話させてください。お願いします。</p>\n</div>\n<div class=\"doc\">\n<p class=\"meta\">From: 真柴 恭一（副社長）　9/20 21:15</p>\n<p>耐久試験の件、公開は許可しない。新製品の発表まであと一週間だ。<br>\n私は今夜シンガポールへ発つ。戻るまで何もするな。いいな。</p>\n</div>\n<div class=\"doc\">\n<p class=\"meta\">From: security-center@nexus-support.xyz　9/20 22:30</p>\n<p>【至急】あなたのアカウントに不正アクセスの疑いがあります。<br>\n今すぐ <a data-go=\"phish\" data-name=\"nexus-support.xyz\">こちらからパスワードを再設定</a> してください。</p>\n</div>\n<div class=\"doc\">\n<p class=\"meta\">下書き（未送信）　9/20 22:47　宛先：（空欄）</p>\n<p>X-7 の耐久試験データは書き換えられていた。元の値は lab サーバーの履歴に残っている。<br>\n誰がやったのかも分かった。明日の役員会で、全部出す。<br>\n……あいつが、あんなことをするなんて。</p>\n</div>\n<ul class=\"links\">\n  <li><a data-go=\"lab\">lab.nexus.local　── 研究データサーバー</a></li>\n  <li><a data-go=\"portal\">portal.nexus.local　── 社内ポータル</a></li>\n</ul>"
    },
    "phish": {
      "host": "nexus-support.xyz",
      "title": "!!! HONEYPOT !!!",
      "trap": 35,
      "body": "\n<p class=\"alert\">＞ 罠だ。侵入者を釣るための偽サイトだった。</p>\n<p class=\"alert\">＞ こちらの接続元が記録された。トレース上昇。</p>\n<ul class=\"links\">\n  <li><a data-go=\"mail\" data-name=\"mail\">急いで mail.nexus.local に戻る</a></li>\n</ul>"
    },
    "lab": {
      "host": "lab.nexus.local/x7/durability",
      "title": "耐久試験 X-7 バッテリー　変更履歴",
      "body": "\n<pre class=\"log\">\n日時          操作          担当       結果\n9/02 14:20    測定値を登録   k.kuga     発火 3件 / 1000\n9/10 03:12    値を修正       t.todo     発火 0件 / 1000\n              コメント：「測定ミスのため修正」\n</pre>\n<p class=\"sys\">＞ 発火3件が、深夜3時に0件へ書き換えられている。<br>\n＞ このまま発売されれば、いずれ事故が起きる。<br>\n＞ これを公開されて困るのは、会社か。それとも、書き換えた本人か。</p>\n<ul class=\"links\">\n  <li><a data-go=\"mail\">mail.nexus.local　── 社内メールサーバー</a></li>\n  <li><a data-go=\"portal\">portal.nexus.local　── 社内ポータル</a></li>\n</ul>"
    },
    "portal": {
      "host": "portal.nexus.local",
      "title": "社内ポータル",
      "body": "\n<div class=\"doc\">\n<p class=\"meta\">総務部からのお知らせ　9/20</p>\n<p>・システム管理部 江口さんのIDカードが紛失しました。見つけた方は総務部まで。<br>\n・研究部 藤堂さんは 9/19〜9/21 大阪出張です。<br>\n・真柴副社長は 9/20 23:55 羽田発の便でシンガポール出張です（〜9/25）。</p>\n</div>\n<div class=\"doc\">\n<p class=\"meta\">情報システム部より　お願い</p>\n<p>パスワードを愛車のナンバーにするのはやめてください。<br>\nどなたとは言いませんが、副社長。</p>\n</div>\n<div class=\"doc\">\n<p class=\"meta\">社内報　秋のフットサル大会</p>\n<p>研究部チームが準優勝！　MVP の藤堂さんは、決勝で右足首を捻挫してしまいました。お大事に！</p>\n</div>\n<div class=\"doc\">\n<p class=\"meta\">社員紹介コーナー：システム管理部 江口 真奈美</p>\n<p>サーバーの面倒を見ています。家では愛猫の「むぎ」（2019年生まれ）に面倒を見られています。<br>\nパスワードは覚えやすいのが一番ですよね！</p>\n</div>\n<ul class=\"links\">\n  <li><a data-go=\"hr\">hr.nexus.local　── 社員名簿</a></li>\n  <li><a data-go=\"gate\">gate.nexus.local　── セキュリティゲート記録</a></li>\n  <li><a data-go=\"keihi\">keihi.nexus.local　── 経費精算システム</a></li>\n  <li><a data-go=\"wallpaper\">free_wallpaper_4K.exe　── 【社員限定】無料壁紙</a></li>\n  <li><a data-go=\"mail\">mail.nexus.local　── 社内メールサーバー</a></li>\n</ul>"
    },
    "wallpaper": {
      "host": "portal.nexus.local/dl",
      "title": "!!! TRAP !!!",
      "trap": 40,
      "body": "\n<p class=\"alert\">＞ 実行ファイルの正体は監視プログラムだった。</p>\n<p class=\"alert\">＞ セキュリティ部門に通知が飛んだ。トレースが大幅に上昇。</p>\n<ul class=\"links\">\n  <li><a data-go=\"portal\">portal.nexus.local に戻る</a></li>\n</ul>"
    },
    "hr": {
      "host": "hr.nexus.local/staff",
      "title": "社員名簿",
      "body": "\n<pre class=\"log\">\n久我 透      研究部 主任\n             家族：なし\n             緊急連絡先：江口 真奈美（同期入社）\n\n藤堂 誠      研究部\n             備考：前職で論文データの不正が疑われる（処分なし）\n\n真柴 恭一    副社長\n\n江口 真奈美  システム管理部\n</pre>\n<p class=\"sys\">＞ 久我に家族はいない……？<br>\n＞ じゃあ、「妹」を名乗るあの依頼人は誰だ。</p>\n<ul class=\"links\">\n  <li><a data-go=\"salary\">salary_all_2026.csv　── 全社員の給与データをダウンロード</a></li>\n  <li><a data-go=\"portal\">portal.nexus.local　── 社内ポータル</a></li>\n</ul>"
    },
    "salary": {
      "host": "hr.nexus.local/export",
      "title": "!!! DLP ALERT !!!",
      "trap": 30,
      "body": "\n<p class=\"alert\">＞ 情報漏えい防止システムが反応した。</p>\n<p class=\"alert\">＞ 余計なものに手を出すな。トレース上昇。</p>\n<ul class=\"links\">\n  <li><a data-go=\"hr\">hr.nexus.local に戻る</a></li>\n</ul>"
    },
    "gate": {
      "host": "gate.nexus.local/log/0920",
      "title": "セキュリティゲート記録（9/20）",
      "body": "\n<pre class=\"log\">\n22:05  駐車場ゲート  OUT  車両 8080（真柴 恭一）\n22:58  サーバー室    IN   久我 透\n23:41  サーバー室    IN   江口 真奈美\n23:44  サーバー室    OUT  江口 真奈美\n23:50  サーバー室    ---  室内で異常電流を検知\n</pre>\n<p class=\"sys\">＞ 江口のカードが使われている。でも、そのカードは紛失中のはずだ。</p>\n<ul class=\"links\">\n  <li><a data-go=\"cam\">cam.nexus.local　── 監視カメラサーバー（要認証）</a></li>\n  <li><a data-go=\"portal\">portal.nexus.local　── 社内ポータル</a></li>\n</ul>"
    },
    "keihi": {
      "host": "keihi.nexus.local/t.todo",
      "title": "経費精算：藤堂 誠（9/22 申請・未承認）",
      "body": "\n<pre class=\"log\">\n9/19        新幹線  品川 → 新大阪\n9/19〜9/21  ホテル  3泊  ※ 9/20・9/21 の2泊は当日キャンセル\n9/20        新幹線  新大阪 19:10 → 品川 21:33   ※ 当日に変更\n9/21        新幹線  品川 06:00 → 新大阪\n</pre>\n<p class=\"sys\">＞ 大阪にいたはずの男は、事件の夜、東京に戻っていた。<br>\n＞ そして翌朝一番で、何食わぬ顔で大阪へ戻っている。</p>\n<ul class=\"links\">\n  <li><a data-go=\"portal\">portal.nexus.local　── 社内ポータル</a></li>\n</ul>"
    },
    "cam": {
      "host": "cam.nexus.local",
      "title": "監視カメラサーバー",
      "lock": {
        "hint": "管理者アカウント：eguchi　パスワード：????????",
        "salt": "6f/aQHM6+EPlk+x7glQQEg==",
        "iv": "MwRYP5oQtuhxT36G",
        "ct": "D/zU0EGWLp6swXI0wYUotTJtYfDTu5SICylx6ibKP/QPlyUMZpKU/0HoTsviV2RD9qS2Ito5T7bCMo1omyHWJEfOXF5mGq9+Bc528LEELRgCZ1XEU++ePdozuTx2oBdIRV5tdDN56UUMabdQr2/W8IIcvPpSo92zq1CqjELrONu9JbkswmYRMNYtHP9R/HIpSx3Uu9bJzzT0FeQE5NwQcqOFj9I39JIJvPlYHoG9X3xls/WClAwlM1eI5N2Klfa+MfEzpqOrHzd5c1Wvm7S9I5Pj0CrhOEocz6iijGASWj451HADy6HfJdDv91S0oOXdNtI2jm42t9rN8CYMyipwN/ScuF9WxVa5tkIzuJ8kVdaVbu1gnYDA4zjjYIMyGUs8NvIF4vCWY+xnR7c6covfmHxyjMAz6R38LepB1RJhJSO2LsEk41QG2r1UHfrfc4kqlSRl/N+5Pa+lcQdXPxDXa1X6Yn0cTJ1oE+ALzC6RxOCvlNx1KHE6mqIj8VV61HCngTBaTTYsxaA4MrutK7Abe+FJJziY64CR6ulDurgIoECaR42w0i6cvxl+oxTjfbkjhs2dSHjDrujes+2XM6h1eiV/cZfrr0se6a4Nds9sdGDPXxnZOfuby5uGinr4IE4eQn4jLGWT+5ywOaZMU6M+Y0qD6Xhma4RKMtopXkqssIcTrLrxCKhaOIxyY3h7kny4sGER6ECFiRJ15oZlklMNedBttfwQpreoBLkJeNpj/oUgCDDydejwQ7HO+NmhYZ/TdDnq4U0louNikpE76xcnPz8ZaTNkSbzvrr0TbSiZjKBqzvT8e3na9PK9b1DK0ZSeJaWWpTBv+PJTXT8diw9vgs9W2u56ssZLhqnLg2hYcGUFafRxObztfVttzEoLs0y9mklqVRi6PGLB3mw9wWL9wYd8KjW+cZv7JFdNUoMH5JtrB7xOPndALwW5MnKkPgqbh0eqa3tRIX4Dx64coH2Eqd0vLBF6rWQEc67WACCLzlVZXQXkodVHPqhbebHJhDzr1qiYUpR3s3IaYY/UvWQEtDC3ape/Sxcd6PlCj6bdPyd4LP2l3HeUO7a48+iuOqByFHDCr6wrAFAAM2JySopGTEluZ19KUY+xX5TS3kxucQiOYtC7LQl1rhKO6PgKLr9dYdOMVX9MgkdsUJsw4+xHZnoNvdPX8SpvetqIjEol5dsOEqNdRCvTmQcdoOW9l+wbdMW1WpQHcUrF0FhLgwQ6HE0wOJjNQ6uBeKAWHYS/56mKcuICc6aUVv8JpAMovh4xmKv9kwK6mAIgTqocrvyVlcB7TD3JSma5bpzxS06BJ70m8UoQ2fuDkpESRZ0B5w=="
      }
    },
    "vpn": {
      "host": "auth.nexus.local/mashiba_admin",
      "title": "認証ログサーバー",
      "lock": {
        "hint": "管理者アカウント：mashiba_admin　パスワード：????（数字4桁）",
        "salt": "B/NAl9xJK7xrCUmwzO/i+Q==",
        "iv": "lhaIYbwor1snl8Q7",
        "ct": "RixqR2Oo+91DugLRC6ZTcwSMODluG14x9ZCGuyb3qyVhx1sZn3NZ5OjhZJAvIZofN1H5XaqMUaeqLHCftXhZEUB+9XZGIAGQWZRESJhovrS0Um73tE0GnQN2k0x86j15GqwgHGsUloI/izIv5ehszckSP9bOuaws+MPujvFDgx9g6+L8rIeHKHlWxKpTLgFuCG8BhAXXmlFAKfi1QZ/r6tMYgUXycN/wUV5F2YiEPZ5r9WOb4XCWQFQq1v8pGmJ/eYdOXfAi4jM8+E8n7i1A0tlL8dvrgWcR7hW7vJoNqwTAfgIjbEABDMHqkGagdGG+GoIhiDLrUMKnseLZYoxvZgS2mtlLH9R7SuFp5aAn7uYP3ujeIazmQxCKnVPrBU/n+O3BKSOt45pcnq35lIeCy8F4eQQh44n0cmjaybmUo59zil6dDJc+TJxBfU++cdjWV+1GhGS17GnGWJDp6Nd05zjQMUt+n+kt9A6JiMDbIs/ap+qn0I2+N3aimwGYShdZBPmdBqg5VQP/MIn2h7lgXqnN9PuSRQ4qn8B2TrE/OHcwjhaqvlyFye58ow0uYoQAVRr42Prg0BerX0tLabYn3rYYea6eUoWbaA9sRiuYz54+h0KZ1H8rRTU+ukDdD6d+usa/wr3t/dX+rSFzc8IM1V53yttCOiwLusaQjZb3EelESzCkWjr4haQXNcx46uNdclzRXhZNyOYTBRbqmKKiEmTJd+KzCQUyXEv4acEw2ANNF8+rCKHVu2BaEPBCv+o1U0NAhSfUbaBSkEYZ3KzFg0xr1UpwgsQRHsKBiUzvBshtTuT0ZmMLO1qsNPFg2LBELPauNwc5CcUoNOsUC6zVEPnakI+YbVd1ku1QSv1hhhnCmJUnR+Af9IA+TFGS6JLLhwj4LGL5JCqurMxiPAkV+zH82mtEdl1jl/awGn6gXj1bnO2nShz7dErUGRyjn/kU"
      }
    },
    "backup": {
      "host": "backup.nexus.local/restore",
      "title": "復元された映像 23:35-23:50",
      "body": "\n<p class=\"alert\">＞ 侵入を検知された。遮断される前に確認しろ。</p>\n<pre class=\"log\">\n23:40  サーバー室前に人物。研究部だけに支給される青いラボコート。\n       フードで顔は見えない。IDカードをかざして入室。\n23:44  同じ人物が退室。右足を引きずりながら、足早に去っていく。\n</pre>\n<p class=\"sys\">＞ 研究部のラボコート。そして、引きずっている右足。</p>\n<ul class=\"links\">\n  <li><a data-go=\"report\" data-name=\"report\">依頼人に報告する</a></li>\n</ul>"
    },
    "report": {
      "host": "relay.anon-net",
      "title": "報告",
      "ending": true,
      "body": "<p class=\"sys\">＞ 久我 透を殺したのは誰か。</p>"
    }
  },
  "suspects": [
    {
      "name": "藤堂 誠（研究部）",
      "endings": [
        {
          "requires": [
            "backup",
            "vpn",
            "hr"
          ],
          "text": "X-7 の試験データを書き換えたのは、藤堂だった。前の職場でも同じことをして、今度こそ逃げ切るつもりだった。\n\n久我に暴かれると知った藤堂は、大阪出張を隠れ蓑にして東京へ戻った。\n拾った江口のIDカードでサーバー室に入ると、久我が作業していたラックの配電盤に細工をして、何も言わずに出ていった。\n6分後、久我はそのラックに触れた。\n\n深夜、藤堂は「誰もが知っていた」副社長のパスワードを使って録画を消した。罪を真柴に着せるためだった。\nそして翌朝、何食わぬ顔で大阪へ戻った。\n\nあなたが復元した映像と端末のログは、依頼人の手で警察に届けられた。\nX-7 の発売は中止された。\n\n数日後、中継サーバーにもう一度だけメッセージが届いた。\n\n『妹だなんて嘘をついて、ごめんなさい。私は江口です。\nカードを失くしたのは私で、疑われるのが怖かった。\nでもそれ以上に、あの人が「事故」で片付けられるのが許せなかった。\n本当に、ありがとう。』\n\n久我に家族はいなかった。\nけれど、彼のために嘘をついてまで戦った人はいた。\n\n── TRUE END ＋"
        },
        {
          "requires": [
            "backup",
            "keihi",
            "hr"
          ],
          "text": "X-7 の試験データを書き換えたのは、藤堂だった。前の職場でも同じことをして、今度こそ逃げ切るつもりだった。\n\n久我に暴かれると知った藤堂は、大阪出張を隠れ蓑にして東京へ戻った。\n拾った江口のIDカードでサーバー室に入ると、久我が作業していたラックの配電盤に細工をして、何も言わずに出ていった。\n6分後、久我はそのラックに触れた。\n\n深夜、藤堂は「誰もが知っていた」副社長のパスワードを使って録画を消した。罪を真柴に着せるためだった。\nそして翌朝、何食わぬ顔で大阪へ戻った。\n\nあなたが復元した映像と端末のログは、依頼人の手で警察に届けられた。\nX-7 の発売は中止された。\n\n数日後、中継サーバーにもう一度だけメッセージが届いた。\n\n『妹だなんて嘘をついて、ごめんなさい。私は江口です。\nカードを失くしたのは私で、疑われるのが怖かった。\nでもそれ以上に、あの人が「事故」で片付けられるのが許せなかった。\n本当に、ありがとう。』\n\n久我に家族はいなかった。\nけれど、彼のために嘘をついてまで戦った人はいた。\n\n── TRUE END ＋"
        },
        {
          "requires": [
            "backup",
            "vpn"
          ],
          "text": "X-7 の試験データを書き換えたのは、藤堂だった。前の職場でも同じことをして、今度こそ逃げ切るつもりだった。\n\n久我に暴かれると知った藤堂は、大阪出張を隠れ蓑にして東京へ戻った。\n拾った江口のIDカードでサーバー室に入ると、久我が作業していたラックの配電盤に細工をして、何も言わずに出ていった。\n6分後、久我はそのラックに触れた。\n\n深夜、藤堂は「誰もが知っていた」副社長のパスワードを使って録画を消した。罪を真柴に着せるためだった。\nそして翌朝、何食わぬ顔で大阪へ戻った。\n\nあなたが復元した映像と端末のログは、依頼人の手で警察に届けられた。\nX-7 の発売は中止された。\n\n── TRUE END"
        },
        {
          "requires": [
            "backup",
            "keihi"
          ],
          "text": "X-7 の試験データを書き換えたのは、藤堂だった。前の職場でも同じことをして、今度こそ逃げ切るつもりだった。\n\n久我に暴かれると知った藤堂は、大阪出張を隠れ蓑にして東京へ戻った。\n拾った江口のIDカードでサーバー室に入ると、久我が作業していたラックの配電盤に細工をして、何も言わずに出ていった。\n6分後、久我はそのラックに触れた。\n\n深夜、藤堂は「誰もが知っていた」副社長のパスワードを使って録画を消した。罪を真柴に着せるためだった。\nそして翌朝、何食わぬ顔で大阪へ戻った。\n\nあなたが復元した映像と端末のログは、依頼人の手で警察に届けられた。\nX-7 の発売は中止された。\n\n── TRUE END"
        },
        {
          "text": "藤堂が怪しいのは確かだ。だが、決め手がない。\n藤堂は「その日は大阪にいた」と言い張った。\n映像も端末のログも示せないまま、事件は事故として処理された。\n\n── NORMAL END（証拠が足りない）"
        }
      ]
    },
    {
      "name": "真柴 恭一（副社長）",
      "endings": [
        {
          "text": "あなたは副社長を告発した。\nだが事件の夜、真柴はシンガポール行きの機内にいた。完璧なアリバイを前に、告発は一笑に付された。\n\n録画を消したアカウントの持ち主という「わかりやすい犯人」。\nそれこそが、真犯人の用意した答えだった。\n\n── BAD END"
        }
      ]
    },
    {
      "name": "江口 真奈美（システム管理部）",
      "endings": [
        {
          "text": "あなたは江口を告発した。カードの記録は、確かに彼女を指していた。\n\n依頼人からの返信は、一行だけだった。\n『……そう、ですか』\n\nそれきり、中継サーバーは二度と応答しなかった。\n\n── BAD END"
        }
      ]
    },
    {
      "name": "本当に事故だった",
      "endings": [
        {
          "text": "あなたは「事故だった」と報告した。\n\nX-7 は予定どおり発売された。\n三か月後、最初の発火事故のニュースが流れた。\n\n── BAD END"
        }
      ]
    }
  ],
  "gameOver": "接続が強制的に遮断された。\n逆探知により、あなたの居場所が特定された。\n\n── GAME OVER"
};
