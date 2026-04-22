import { useState } from "react";
import { IconLock, IconIncognito, IconCameraOff, IconClock, IconArrowRight, IconCheck } from "../components/Icon";
import { CalendarPicker, formatSlotLabel, type TimeSlot } from "../components/CalendarPicker";

const perks = [
  { icon: IconLock, label: "秘密厳守 / NDA標準装備" },
  { icon: IconIncognito, label: "氏名・社名 仮名OK" },
  { icon: IconCameraOff, label: "顔出し任意(カメラオフ可)" },
  { icon: IconClock, label: "最大60分・早めに切り上げOK" },
];

type FormState = {
  alias: string;
  email: string;
  slots: TimeSlot[];
  message: string;
  agreement: boolean;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

const initialState: FormState = {
  alias: "",
  email: "",
  slots: [],
  message: "",
  agreement: false,
};

const priorityLabels = ["第1希望", "第2希望", "第3希望"];

export function Cta() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.slots.length === 0) {
      setErrorMessage("カレンダーから希望日時を少なくとも1つ選択してください");
      return;
    }
    if (!form.agreement) {
      setErrorMessage("プライバシーポリシーへの同意が必要です");
      return;
    }
    setStatus("sending");
    setErrorMessage("");

    try {
      // Phase1: 送信APIは未接続。UI側で完結させる。将来的にFormspree/Resend等に差し替える想定。
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("送信に失敗しました。お手数ですが再度お試しください。");
    }
  };

  if (status === "success") {
    return (
      <section id="cta" className="section bg-gradient-to-br from-brand-600 to-brand-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white, transparent 40%)" }} />
        <div className="container-content relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur mb-6">
              <IconCheck className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              お申し込みを受け付けました
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
              営業日24時間以内に、候補日時のご調整メールをお送りします。届かない場合は迷惑メールフォルダもご確認ください。
            </p>
            <button
              type="button"
              onClick={() => {
                setForm(initialState);
                setStatus("idle");
              }}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur text-white text-sm font-semibold px-5 py-2.5 transition-colors"
            >
              別の相談を申し込む
            </button>
          </div>
        </div>
      </section>
    );
  }

  const removeSlot = (slot: TimeSlot) => {
    handleChange(
      "slots",
      form.slots.filter((s) => !(s.date === slot.date && s.hour === slot.hour))
    );
  };

  return (
    <section id="cta" className="section bg-gradient-to-br from-brand-600 to-brand-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white, transparent 40%)" }} />
      <div className="container-content relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              最大60分、隣で一緒に考えます。
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
              社名も氏名も仮名で構いません。相談内容は外に出ません。
              <br className="hidden md:block" />
              貴社の状況を聞きながら、次の一手を一緒に整理します。
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-card space-y-5 text-ink-900"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs font-bold text-ink-700">お名前(仮名OK)</span>
                <input
                  type="text"
                  value={form.alias}
                  onChange={(e) => handleChange("alias", e.target.value)}
                  placeholder="製造業A社 Bさん"
                  className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold text-ink-700">
                  メールアドレス<span className="text-coral-500 ml-1">*</span>
                </span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="name@example.com"
                  className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                />
              </label>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs font-bold text-ink-700">
                  ご希望の日時<span className="text-coral-500 ml-1">*</span>
                </span>
                <span className="text-[11px] text-ink-500">第3希望までクリックで選択</span>
              </div>
              <CalendarPicker
                value={form.slots}
                onChange={(slots) => handleChange("slots", slots)}
                max={3}
              />
              {form.slots.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {form.slots.map((slot, idx) => (
                    <span
                      key={`${slot.date}-${slot.hour}`}
                      className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold pl-3 pr-1.5 py-1"
                    >
                      <span className="text-[10px] font-bold bg-brand-500 text-white rounded-full px-1.5 py-0.5">
                        {priorityLabels[idx]}
                      </span>
                      <span className="tabular-nums">{formatSlotLabel(slot)}</span>
                      <button
                        type="button"
                        onClick={() => removeSlot(slot)}
                        className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white border border-brand-200 text-ink-500 hover:text-coral-500 hover:border-coral-300 transition-colors"
                        aria-label={`${formatSlotLabel(slot)}を外す`}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <label className="block">
              <span className="text-xs font-bold text-ink-700">相談したいこと(任意)</span>
              <textarea
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="例: 社内で生成AIの検討が始まっているが、何から手を付けるべきか迷っている"
                rows={4}
                className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 resize-none"
              />
            </label>

            <label className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                required
                checked={form.agreement}
                onChange={(e) => handleChange("agreement", e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-brand-500"
              />
              <span className="text-xs text-ink-700 leading-relaxed">
                <a href="#" className="underline hover:text-brand-600">プライバシーポリシー</a>に同意の上、申し込みます。入力内容は相談対応の目的のみに使用し、第三者には提供しません。
              </span>
            </label>

            {errorMessage && (
              <p className="text-xs text-coral-500" role="alert">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-coral-400 hover:bg-coral-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-4 flex items-center justify-center gap-1.5 transition-colors"
            >
              {status === "sending" ? "送信中…" : "無料相談を申し込む"}
              {status !== "sending" && <IconArrowRight className="w-4 h-4" />}
            </button>
            <p className="text-[11px] text-ink-500 text-center leading-relaxed">
              受信後、営業日24時間以内に日程調整のメールをお送りします。
            </p>
          </form>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {perks.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-3 py-2.5 text-xs md:text-sm"
              >
                <p.icon className="w-4 h-4 flex-shrink-0" />
                <span className="leading-tight">{p.label}</span>
              </div>
            ))}
          </div>

          <p className="text-xs md:text-sm text-white/70 mt-6 text-center">
            相談だけで終わる方も一定数います。無理のない進め方を一緒に探します。
          </p>
        </div>
      </div>
    </section>
  );
}
