export type CaseItem = {
  industry: string;
  size: string;
  theme: string;
  result: string;
};

// 業種+規模レンジのみの匿名事例。地域・具体数値・役職は一切含めない。
export const cases: CaseItem[] = [
  {
    industry: "製造業",
    size: "従業員 100-500名",
    theme: "生産現場の異常検知PoC",
    result: "検査工数の削減見立てを3ヶ月で構築",
  },
  {
    industry: "金融",
    size: "従業員 500-1000名",
    theme: "コンプライアンス文書のAIレビュー",
    result: "1件あたりの確認時間が大幅短縮",
  },
  {
    industry: "IT",
    size: "従業員 500-1000名",
    theme: "Copilot全社展開時のガバナンス設計",
    result: "3ヶ月で利用率が段階的に向上",
  },
  {
    industry: "小売",
    size: "従業員 1000名以上",
    theme: "需要予測モデルの選定と運用",
    result: "欠品率の改善に寄与",
  },
  {
    industry: "不動産",
    size: "従業員 100-500名",
    theme: "物件紹介文の自動生成",
    result: "営業担当の文章作成時間が削減",
  },
  {
    industry: "製造業",
    size: "従業員 500-1000名",
    theme: "技術ナレッジのRAG化",
    result: "若手の質問応答スピードが改善",
  },
  {
    industry: "IT",
    size: "従業員 100-500名",
    theme: "プロンプトテンプレート社内共有基盤",
    result: "全社テンプレの利用が定着",
  },
  {
    industry: "金融",
    size: "従業員 1000名以上",
    theme: "審査業務の部分自動化検討",
    result: "PoC合意までの期間が短縮",
  },
  {
    industry: "小売",
    size: "従業員 100-500名",
    theme: "接客ナレッジのチャットボット化",
    result: "新人の立ち上がりが早まる見込み",
  },
  {
    industry: "製造業",
    size: "従業員 100-500名",
    theme: "AI活用ロードマップの伴走",
    result: "半年で複数部署に導入が進む",
  },
];
