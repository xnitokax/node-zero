// =========================================================
//  ネタバレ対策（ゲーム本体とビルドツールで共用）
//    - 鍵付きノードの本文：パスワードから鍵を作って AES-GCM で暗号化
//      → 正しいパスワードを入れない限り、データを見ても本文は読めない
//    - シナリオ全体：XOR + Base64 で難読化
//      → 開発者ツールでちらっと見ただけではネタバレしない程度（暗号ではない）
// =========================================================
const NZ = (() => {
  const enc = new TextEncoder();
  const dec = new TextDecoder();
  const MASK = enc.encode("NODE//ZERO");
  const PBKDF2_ITERATIONS = 150000;

  const b64 = u8 => { let s = ""; u8.forEach(b => (s += String.fromCharCode(b))); return btoa(s); };
  const unb64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
  const xor = u8 => u8.map((b, i) => b ^ MASK[i % MASK.length] ^ ((i * 7) & 255));

  async function deriveKey(pass, salt) {
    const base = await crypto.subtle.importKey("raw", enc.encode(pass), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey(
      { name: "PBKDF2", salt, iterations: PBKDF2_ITERATIONS, hash: "SHA-256" },
      base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
  }

  return {
    obfuscate: str => b64(xor(enc.encode(str))),
    deobfuscate: str => dec.decode(xor(unb64(str))),

    async lock(text, pass) {
      const salt = crypto.getRandomValues(new Uint8Array(16));
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const key = await deriveKey(pass, salt);
      const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(text)));
      return { salt: b64(salt), iv: b64(iv), ct: b64(ct) };
    },

    // パスワードが違えば復号に失敗して null（AES-GCM の改ざん検知がそのまま正誤判定になる）
    async unlock(box, pass) {
      try {
        const key = await deriveKey(pass, unb64(box.salt));
        const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(box.iv) }, key, unb64(box.ct));
        return dec.decode(pt);
      } catch {
        return null;
      }
    },
  };
})();
